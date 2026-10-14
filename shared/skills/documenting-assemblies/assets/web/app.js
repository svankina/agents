var n8={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},s8={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var sQ=0,oQ=1,A9=2;var u7=1000,iQ=1001,aQ=1002,o8=1003,rQ=1004;var tQ=1005;var pJ=1006,eQ=1007;var uJ=1008;var J$=1015,mJ=1016;var Q$=2300,lJ=2301;var $$=0,m7=1,t9=2;var T8="srgb",Y8="srgb-linear";class R8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){if(this._listeners===void 0)return!1;let $=this._listeners;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){if(this._listeners===void 0)return;let Z=this._listeners[J];if(Z!==void 0){let X=Z.indexOf(Q);if(X!==-1)Z.splice(X,1)}}dispatchEvent(J){if(this._listeners===void 0)return;let $=this._listeners[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let X=0,Y=Z.length;X<Y;X++)Z[X].call(this,J);J.target=null}}}var _6=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],b5=1234567,s9=Math.PI/180,_9=180/Math.PI;function J8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(_6[J&255]+_6[J>>8&255]+_6[J>>16&255]+_6[J>>24&255]+"-"+_6[Q&255]+_6[Q>>8&255]+"-"+_6[Q>>16&15|64]+_6[Q>>24&255]+"-"+_6[$&63|128]+_6[$>>8&255]+"-"+_6[$>>16&255]+_6[$>>24&255]+_6[Z&255]+_6[Z>>8&255]+_6[Z>>16&255]+_6[Z>>24&255]).toLowerCase()}function B6(J,Q,$){return Math.max(Q,Math.min($,J))}function dJ(J,Q){return(J%Q+Q)%Q}function bZ(J,Q,$,Z,X){return Z+(J-Q)*(X-Z)/($-Q)}function gZ(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function o9(J,Q,$){return(1-$)*J+$*Q}function pZ(J,Q,$,Z){return o9(J,Q,1-Math.exp(-$*Z))}function uZ(J,Q=1){return Q-Math.abs(dJ(J,Q*2)-Q)}function mZ(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function lZ(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function dZ(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function cZ(J,Q){return J+Math.random()*(Q-J)}function nZ(J){return J*(0.5-Math.random())}function sZ(J){if(J!==void 0)b5=J;let Q=b5+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function oZ(J){return J*s9}function iZ(J){return J*_9}function aZ(J){return(J&J-1)===0&&J!==0}function rZ(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function tZ(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function eZ(J,Q,$,Z,X){let{cos:Y,sin:W}=Math,H=Y($/2),K=W($/2),G=Y((Q+Z)/2),q=W((Q+Z)/2),U=Y((Q-Z)/2),F=W((Q-Z)/2),N=Y((Z-Q)/2),B=W((Z-Q)/2);switch(X){case"XYX":J.set(H*q,K*U,K*F,H*G);break;case"YZY":J.set(K*F,H*q,K*U,H*G);break;case"ZXZ":J.set(K*U,K*F,H*q,H*G);break;case"XZX":J.set(H*q,K*B,K*N,H*G);break;case"YXY":J.set(K*N,H*q,K*B,H*G);break;case"ZYZ":J.set(K*B,K*N,H*q,H*G);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+X)}}function e6(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function t0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var W8={DEG2RAD:s9,RAD2DEG:_9,generateUUID:J8,clamp:B6,euclideanModulo:dJ,mapLinear:bZ,inverseLerp:gZ,lerp:o9,damp:pZ,pingpong:uZ,smoothstep:mZ,smootherstep:lZ,randInt:dZ,randFloat:cZ,randFloatSpread:nZ,seededRandom:sZ,degToRad:oZ,radToDeg:iZ,isPowerOfTwo:aZ,ceilPowerOfTwo:rZ,floorPowerOfTwo:tZ,setQuaternionFromProperEuler:eZ,normalize:t0,denormalize:e6};class R0{constructor(J=0,Q=0){R0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=Math.max(J.x,Math.min(Q.x,this.x)),this.y=Math.max(J.y,Math.min(Q.y,this.y)),this}clampScalar(J,Q){return this.x=Math.max(J,Math.min(Q,this.x)),this.y=Math.max(J,Math.min(Q,this.y)),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(Math.max(J,Math.min(Q,$)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(B6($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),X=this.x-J.x,Y=this.y-J.y;return this.x=X*$-Y*Z+J.x,this.y=X*Z+Y*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class f0{constructor(J,Q,$,Z,X,Y,W,H,K){if(f0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,X,Y,W,H,K)}set(J,Q,$,Z,X,Y,W,H,K){let G=this.elements;return G[0]=J,G[1]=Z,G[2]=W,G[3]=Q,G[4]=X,G[5]=H,G[6]=$,G[7]=Y,G[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,X=this.elements,Y=$[0],W=$[3],H=$[6],K=$[1],G=$[4],q=$[7],U=$[2],F=$[5],N=$[8],B=Z[0],O=Z[3],V=Z[6],E=Z[1],z=Z[4],D=Z[7],w=Z[2],g=Z[5],k=Z[8];return X[0]=Y*B+W*E+H*w,X[3]=Y*O+W*z+H*g,X[6]=Y*V+W*D+H*k,X[1]=K*B+G*E+q*w,X[4]=K*O+G*z+q*g,X[7]=K*V+G*D+q*k,X[2]=U*B+F*E+N*w,X[5]=U*O+F*z+N*g,X[8]=U*V+F*D+N*k,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],X=J[3],Y=J[4],W=J[5],H=J[6],K=J[7],G=J[8];return Q*Y*G-Q*W*K-$*X*G+$*W*H+Z*X*K-Z*Y*H}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],X=J[3],Y=J[4],W=J[5],H=J[6],K=J[7],G=J[8],q=G*Y-W*K,U=W*H-G*X,F=K*X-Y*H,N=Q*q+$*U+Z*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0);let B=1/N;return J[0]=q*B,J[1]=(Z*K-G*$)*B,J[2]=(W*$-Z*Y)*B,J[3]=U*B,J[4]=(G*Q-Z*H)*B,J[5]=(Z*X-W*Q)*B,J[6]=F*B,J[7]=($*H-K*Q)*B,J[8]=(Y*Q-$*X)*B,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,X,Y,W){let H=Math.cos(X),K=Math.sin(X);return this.set($*H,$*K,-$*(H*Y+K*W)+Y+J,-Z*K,Z*H,-Z*(-K*Y+H*W)+W+Q,0,0,1),this}scale(J,Q){return this.premultiply(GJ.makeScale(J,Q)),this}rotate(J){return this.premultiply(GJ.makeRotation(-J)),this}translate(J,Q){return this.premultiply(GJ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var GJ=new f0;function Z$(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function a9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function J1(){let J=a9("canvas");return J.style.display="block",J}var g5={};function cJ(J){if(J in g5)return;g5[J]=!0,console.warn(J)}function Q1(J,Q,$){return new Promise(function(Z,X){function Y(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:X();break;case J.TIMEOUT_EXPIRED:setTimeout(Y,$);break;default:Z()}}setTimeout(Y,$)})}var p5=new f0().set(0.8224621,0.177538,0,0.0331941,0.9668058,0,0.0170827,0.0723974,0.9105199),u5=new f0().set(1.2249401,-0.2249404,0,-0.0420569,1.0420571,0,-0.0196376,-0.0786361,1.0982735),G7={["srgb-linear"]:{transfer:"linear",primaries:"rec709",toReference:(J)=>J,fromReference:(J)=>J},["srgb"]:{transfer:"srgb",primaries:"rec709",toReference:(J)=>J.convertSRGBToLinear(),fromReference:(J)=>J.convertLinearToSRGB()},["display-p3-linear"]:{transfer:"linear",primaries:"p3",toReference:(J)=>J.applyMatrix3(u5),fromReference:(J)=>J.applyMatrix3(p5)},["display-p3"]:{transfer:"srgb",primaries:"p3",toReference:(J)=>J.convertSRGBToLinear().applyMatrix3(u5),fromReference:(J)=>J.applyMatrix3(p5).convertLinearToSRGB()}},$1=new Set(["srgb-linear","display-p3-linear"]),s0={enabled:!0,_workingColorSpace:"srgb-linear",get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(J){if(!$1.has(J))throw Error(`Unsupported working color space, "${J}".`);this._workingColorSpace=J},convert:function(J,Q,$){if(this.enabled===!1||Q===$||!Q||!$)return J;let Z=G7[Q].toReference,X=G7[$].fromReference;return X(Z(J))},fromWorkingColorSpace:function(J,Q){return this.convert(J,this._workingColorSpace,Q)},toWorkingColorSpace:function(J,Q){return this.convert(J,Q,this._workingColorSpace)},getPrimaries:function(J){return G7[J].primaries},getTransfer:function(J){if(J==="")return"linear";return G7[J].transfer}};function D9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function qJ(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var W9;class X${static getDataURL(J){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(W9===void 0)W9=a9("canvas");W9.width=J.width,W9.height=J.height;let $=W9.getContext("2d");if(J instanceof ImageData)$.putImageData(J,0,0);else $.drawImage(J,0,0,J.width,J.height);Q=W9}if(Q.width>2048||Q.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",J),Q.toDataURL("image/jpeg",0.6);else return Q.toDataURL("image/png")}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=a9("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),X=Z.data;for(let Y=0;Y<X.length;Y++)X[Y]=D9(X[Y]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(D9(Q[$]/255)*255);else Q[$]=D9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var Z1=0;class nJ{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=J8(),this.data=J,this.dataReady=!0,this.version=0}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let X;if(Array.isArray(Z)){X=[];for(let Y=0,W=Z.length;Y<W;Y++)if(Z[Y].isDataTexture)X.push(UJ(Z[Y].image));else X.push(UJ(Z[Y]))}else X=UJ(Z);$.url=X}if(!Q)J.images[this.uuid]=$;return $}}function UJ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return X$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var X1=0;class F6 extends R8{constructor(J=F6.DEFAULT_IMAGE,Q=F6.DEFAULT_MAPPING,$=1001,Z=1001,X=1006,Y=1008,W=1023,H=1009,K=F6.DEFAULT_ANISOTROPY,G=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=J8(),this.name="",this.source=new nJ(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=X,this.minFilter=Y,this.anisotropy=K,this.format=W,this.internalFormat=null,this.type=H,this.offset=new R0(0,0),this.repeat=new R0(1,1),this.center=new R0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new f0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=G,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}F6.DEFAULT_IMAGE=null;F6.DEFAULT_MAPPING=300;F6.DEFAULT_ANISOTROPY=1;class c0{constructor(J=0,Q=0,$=0,Z=1){c0.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,X=this.w,Y=J.elements;return this.x=Y[0]*Q+Y[4]*$+Y[8]*Z+Y[12]*X,this.y=Y[1]*Q+Y[5]*$+Y[9]*Z+Y[13]*X,this.z=Y[2]*Q+Y[6]*$+Y[10]*Z+Y[14]*X,this.w=Y[3]*Q+Y[7]*$+Y[11]*Z+Y[15]*X,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,X,Y=0.01,W=0.1,H=J.elements,K=H[0],G=H[4],q=H[8],U=H[1],F=H[5],N=H[9],B=H[2],O=H[6],V=H[10];if(Math.abs(G-U)<0.01&&Math.abs(q-B)<0.01&&Math.abs(N-O)<0.01){if(Math.abs(G+U)<0.1&&Math.abs(q+B)<0.1&&Math.abs(N+O)<0.1&&Math.abs(K+F+V-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let z=(K+1)/2,D=(F+1)/2,w=(V+1)/2,g=(G+U)/4,k=(q+B)/4,j=(N+O)/4;if(z>D&&z>w)if(z<0.01)$=0,Z=0.707106781,X=0.707106781;else $=Math.sqrt(z),Z=g/$,X=k/$;else if(D>w)if(D<0.01)$=0.707106781,Z=0,X=0.707106781;else Z=Math.sqrt(D),$=g/Z,X=j/Z;else if(w<0.01)$=0.707106781,Z=0.707106781,X=0;else X=Math.sqrt(w),$=k/X,Z=j/X;return this.set($,Z,X,Q),this}let E=Math.sqrt((O-N)*(O-N)+(q-B)*(q-B)+(U-G)*(U-G));if(Math.abs(E)<0.001)E=1;return this.x=(O-N)/E,this.y=(q-B)/E,this.z=(U-G)/E,this.w=Math.acos((K+F+V-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=Math.max(J.x,Math.min(Q.x,this.x)),this.y=Math.max(J.y,Math.min(Q.y,this.y)),this.z=Math.max(J.z,Math.min(Q.z,this.z)),this.w=Math.max(J.w,Math.min(Q.w,this.w)),this}clampScalar(J,Q){return this.x=Math.max(J,Math.min(Q,this.x)),this.y=Math.max(J,Math.min(Q,this.y)),this.z=Math.max(J,Math.min(Q,this.z)),this.w=Math.max(J,Math.min(Q,this.w)),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(Math.max(J,Math.min(Q,$)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Y$ extends R8{constructor(J=1,Q=1,$={}){super();this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=1,this.scissor=new c0(0,0,J,Q),this.scissorTest=!1,this.viewport=new c0(0,0,J,Q);let Z={width:J,height:Q,depth:1};$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},$);let X=new F6(Z,$.mapping,$.wrapS,$.wrapT,$.magFilter,$.minFilter,$.format,$.type,$.anisotropy,$.colorSpace);X.flipY=!1,X.generateMipmaps=$.generateMipmaps,X.internalFormat=$.internalFormat,this.textures=[];let Y=$.count;for(let W=0;W<Y;W++)this.textures[W]=X.clone(),this.textures[W].isRenderTargetTexture=!0;this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.depthTexture=$.depthTexture,this.samples=$.samples}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,X=this.textures.length;Z<X;Z++)this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let $=0,Z=J.textures.length;$<Z;$++)this.textures[$]=J.textures[$].clone(),this.textures[$].isRenderTargetTexture=!0;let Q=Object.assign({},J.texture.image);if(this.texture.source=new nJ(Q),this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class c6 extends Y${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class sJ extends F6{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class W$ extends F6{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g6{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,X,Y,W){let H=$[Z+0],K=$[Z+1],G=$[Z+2],q=$[Z+3],U=X[Y+0],F=X[Y+1],N=X[Y+2],B=X[Y+3];if(W===0){J[Q+0]=H,J[Q+1]=K,J[Q+2]=G,J[Q+3]=q;return}if(W===1){J[Q+0]=U,J[Q+1]=F,J[Q+2]=N,J[Q+3]=B;return}if(q!==B||H!==U||K!==F||G!==N){let O=1-W,V=H*U+K*F+G*N+q*B,E=V>=0?1:-1,z=1-V*V;if(z>Number.EPSILON){let w=Math.sqrt(z),g=Math.atan2(w,V*E);O=Math.sin(O*g)/w,W=Math.sin(W*g)/w}let D=W*E;if(H=H*O+U*D,K=K*O+F*D,G=G*O+N*D,q=q*O+B*D,O===1-W){let w=1/Math.sqrt(H*H+K*K+G*G+q*q);H*=w,K*=w,G*=w,q*=w}}J[Q]=H,J[Q+1]=K,J[Q+2]=G,J[Q+3]=q}static multiplyQuaternionsFlat(J,Q,$,Z,X,Y){let W=$[Z],H=$[Z+1],K=$[Z+2],G=$[Z+3],q=X[Y],U=X[Y+1],F=X[Y+2],N=X[Y+3];return J[Q]=W*N+G*q+H*F-K*U,J[Q+1]=H*N+G*U+K*q-W*F,J[Q+2]=K*N+G*F+W*U-H*q,J[Q+3]=G*N-W*q-H*U-K*F,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:X,_order:Y}=J,W=Math.cos,H=Math.sin,K=W($/2),G=W(Z/2),q=W(X/2),U=H($/2),F=H(Z/2),N=H(X/2);switch(Y){case"XYZ":this._x=U*G*q+K*F*N,this._y=K*F*q-U*G*N,this._z=K*G*N+U*F*q,this._w=K*G*q-U*F*N;break;case"YXZ":this._x=U*G*q+K*F*N,this._y=K*F*q-U*G*N,this._z=K*G*N-U*F*q,this._w=K*G*q+U*F*N;break;case"ZXY":this._x=U*G*q-K*F*N,this._y=K*F*q+U*G*N,this._z=K*G*N+U*F*q,this._w=K*G*q-U*F*N;break;case"ZYX":this._x=U*G*q-K*F*N,this._y=K*F*q+U*G*N,this._z=K*G*N-U*F*q,this._w=K*G*q+U*F*N;break;case"YZX":this._x=U*G*q+K*F*N,this._y=K*F*q+U*G*N,this._z=K*G*N-U*F*q,this._w=K*G*q-U*F*N;break;case"XZY":this._x=U*G*q-K*F*N,this._y=K*F*q-U*G*N,this._z=K*G*N+U*F*q,this._w=K*G*q+U*F*N;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Y)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],X=Q[8],Y=Q[1],W=Q[5],H=Q[9],K=Q[2],G=Q[6],q=Q[10],U=$+W+q;if(U>0){let F=0.5/Math.sqrt(U+1);this._w=0.25/F,this._x=(G-H)*F,this._y=(X-K)*F,this._z=(Y-Z)*F}else if($>W&&$>q){let F=2*Math.sqrt(1+$-W-q);this._w=(G-H)/F,this._x=0.25*F,this._y=(Z+Y)/F,this._z=(X+K)/F}else if(W>q){let F=2*Math.sqrt(1+W-$-q);this._w=(X-K)/F,this._x=(Z+Y)/F,this._y=0.25*F,this._z=(H+G)/F}else{let F=2*Math.sqrt(1+q-$-W);this._w=(Y-Z)/F,this._x=(X+K)/F,this._y=(H+G)/F,this._z=0.25*F}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<Number.EPSILON)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(B6(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:X,_w:Y}=J,W=Q._x,H=Q._y,K=Q._z,G=Q._w;return this._x=$*G+Y*W+Z*K-X*H,this._y=Z*G+Y*H+X*W-$*K,this._z=X*G+Y*K+$*H-Z*W,this._w=Y*G-$*W-Z*H-X*K,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let $=this._x,Z=this._y,X=this._z,Y=this._w,W=Y*J._w+$*J._x+Z*J._y+X*J._z;if(W<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,W=-W;else this.copy(J);if(W>=1)return this._w=Y,this._x=$,this._y=Z,this._z=X,this;let H=1-W*W;if(H<=Number.EPSILON){let F=1-Q;return this._w=F*Y+Q*this._w,this._x=F*$+Q*this._x,this._y=F*Z+Q*this._y,this._z=F*X+Q*this._z,this.normalize(),this}let K=Math.sqrt(H),G=Math.atan2(K,W),q=Math.sin((1-Q)*G)/K,U=Math.sin(Q*G)/K;return this._w=Y*q+this._w*U,this._x=$*q+this._x*U,this._y=Z*q+this._y*U,this._z=X*q+this._z*U,this._onChangeCallback(),this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),X=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),X*Math.sin(Q),X*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(J=0,Q=0,$=0){P.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(m5.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(m5.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,X=J.elements;return this.x=X[0]*Q+X[3]*$+X[6]*Z,this.y=X[1]*Q+X[4]*$+X[7]*Z,this.z=X[2]*Q+X[5]*$+X[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,X=J.elements,Y=1/(X[3]*Q+X[7]*$+X[11]*Z+X[15]);return this.x=(X[0]*Q+X[4]*$+X[8]*Z+X[12])*Y,this.y=(X[1]*Q+X[5]*$+X[9]*Z+X[13])*Y,this.z=(X[2]*Q+X[6]*$+X[10]*Z+X[14])*Y,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,X=J.x,Y=J.y,W=J.z,H=J.w,K=2*(Y*Z-W*$),G=2*(W*Q-X*Z),q=2*(X*$-Y*Q);return this.x=Q+H*K+Y*q-W*G,this.y=$+H*G+W*K-X*q,this.z=Z+H*q+X*G-Y*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,X=J.elements;return this.x=X[0]*Q+X[4]*$+X[8]*Z,this.y=X[1]*Q+X[5]*$+X[9]*Z,this.z=X[2]*Q+X[6]*$+X[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=Math.max(J.x,Math.min(Q.x,this.x)),this.y=Math.max(J.y,Math.min(Q.y,this.y)),this.z=Math.max(J.z,Math.min(Q.z,this.z)),this}clampScalar(J,Q){return this.x=Math.max(J,Math.min(Q,this.x)),this.y=Math.max(J,Math.min(Q,this.y)),this.z=Math.max(J,Math.min(Q,this.z)),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(Math.max(J,Math.min(Q,$)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:X}=J,Y=Q.x,W=Q.y,H=Q.z;return this.x=Z*H-X*W,this.y=X*Y-$*H,this.z=$*W-Z*Y,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return FJ.copy(this).projectOnVector(J),this.sub(FJ)}reflect(J){return this.sub(FJ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(B6($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var FJ=new P,m5=new g6;class N6{constructor(J=new P(1/0,1/0,1/0),Q=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(a6.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(a6.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=a6.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let X=$.getAttribute("position");if(Q===!0&&X!==void 0&&J.isInstancedMesh!==!0)for(let Y=0,W=X.count;Y<W;Y++){if(J.isMesh===!0)J.getVertexPosition(Y,a6);else a6.fromBufferAttribute(X,Y);a6.applyMatrix4(J.matrixWorld),this.expandByPoint(a6)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();q7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();q7.copy($.boundingBox)}q7.applyMatrix4(J.matrixWorld),this.union(q7)}}let Z=J.children;for(let X=0,Y=Z.length;X<Y;X++)this.expandByObject(Z[X],Q);return this}containsPoint(J){return J.x<this.min.x||J.x>this.max.x||J.y<this.min.y||J.y>this.max.y||J.z<this.min.z||J.z>this.max.z?!1:!0}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x<this.min.x||J.min.x>this.max.x||J.max.y<this.min.y||J.min.y>this.max.y||J.max.z<this.min.z||J.min.z>this.max.z?!1:!0}intersectsSphere(J){return this.clampPoint(J.center,a6),a6.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(b9),U7.subVectors(this.max,b9),H9.subVectors(J.a,b9),K9.subVectors(J.b,b9),G9.subVectors(J.c,b9),L8.subVectors(K9,H9),C8.subVectors(G9,K9),b8.subVectors(H9,G9);let Q=[0,-L8.z,L8.y,0,-C8.z,C8.y,0,-b8.z,b8.y,L8.z,0,-L8.x,C8.z,0,-C8.x,b8.z,0,-b8.x,-L8.y,L8.x,0,-C8.y,C8.x,0,-b8.y,b8.x,0];if(!VJ(Q,H9,K9,G9,U7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!VJ(Q,H9,K9,G9,U7))return!1;return F7.crossVectors(L8,C8),Q=[F7.x,F7.y,F7.z],VJ(Q,H9,K9,G9,U7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,a6).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(a6).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return F8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),F8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),F8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),F8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),F8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),F8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),F8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),F8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(F8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var F8=[new P,new P,new P,new P,new P,new P,new P,new P],a6=new P,q7=new N6,H9=new P,K9=new P,G9=new P,L8=new P,C8=new P,b8=new P,b9=new P,U7=new P,F7=new P,g8=new P;function VJ(J,Q,$,Z,X){for(let Y=0,W=J.length-3;Y<=W;Y+=3){g8.fromArray(J,Y);let H=X.x*Math.abs(g8.x)+X.y*Math.abs(g8.y)+X.z*Math.abs(g8.z),K=Q.dot(g8),G=$.dot(g8),q=Z.dot(g8);if(Math.max(-Math.max(K,G,q),Math.min(K,G,q))>H)return!1}return!0}var Y1=new N6,g9=new P,EJ=new P;class A6{constructor(J=new P,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else Y1.setFromPoints(J).getCenter($);let Z=0;for(let X=0,Y=J.length;X<Y;X++)Z=Math.max(Z,$.distanceToSquared(J[X]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;g9.subVectors(J,this.center);let Q=g9.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(g9,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else EJ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(g9.copy(J.center).add(EJ)),this.expandByPoint(g9.copy(J.center).sub(EJ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}}var V8=new P,NJ=new P,V7=new P,k8=new P,OJ=new P,E7=new P,BJ=new P;class i8{constructor(J=new P,Q=new P(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,V8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=V8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return V8.copy(this.origin).addScaledVector(this.direction,Q),V8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){NJ.copy(J).add(Q).multiplyScalar(0.5),V7.copy(Q).sub(J).normalize(),k8.copy(this.origin).sub(NJ);let X=J.distanceTo(Q)*0.5,Y=-this.direction.dot(V7),W=k8.dot(this.direction),H=-k8.dot(V7),K=k8.lengthSq(),G=Math.abs(1-Y*Y),q,U,F,N;if(G>0)if(q=Y*H-W,U=Y*W-H,N=X*G,q>=0)if(U>=-N)if(U<=N){let B=1/G;q*=B,U*=B,F=q*(q+Y*U+2*W)+U*(Y*q+U+2*H)+K}else U=X,q=Math.max(0,-(Y*U+W)),F=-q*q+U*(U+2*H)+K;else U=-X,q=Math.max(0,-(Y*U+W)),F=-q*q+U*(U+2*H)+K;else if(U<=-N)q=Math.max(0,-(-Y*X+W)),U=q>0?-X:Math.min(Math.max(-X,-H),X),F=-q*q+U*(U+2*H)+K;else if(U<=N)q=0,U=Math.min(Math.max(-X,-H),X),F=U*(U+2*H)+K;else q=Math.max(0,-(Y*X+W)),U=q>0?X:Math.min(Math.max(-X,-H),X),F=-q*q+U*(U+2*H)+K;else U=Y>0?-X:X,q=Math.max(0,-(Y*U+W)),F=-q*q+U*(U+2*H)+K;if($)$.copy(this.origin).addScaledVector(this.direction,q);if(Z)Z.copy(NJ).addScaledVector(V7,U);return F}intersectSphere(J,Q){V8.subVectors(J.center,this.origin);let $=V8.dot(this.direction),Z=V8.dot(V8)-$*$,X=J.radius*J.radius;if(Z>X)return null;let Y=Math.sqrt(X-Z),W=$-Y,H=$+Y;if(H<0)return null;if(W<0)return this.at(H,Q);return this.at(W,Q)}intersectsSphere(J){return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,X,Y,W,H,K=1/this.direction.x,G=1/this.direction.y,q=1/this.direction.z,U=this.origin;if(K>=0)$=(J.min.x-U.x)*K,Z=(J.max.x-U.x)*K;else $=(J.max.x-U.x)*K,Z=(J.min.x-U.x)*K;if(G>=0)X=(J.min.y-U.y)*G,Y=(J.max.y-U.y)*G;else X=(J.max.y-U.y)*G,Y=(J.min.y-U.y)*G;if($>Y||X>Z)return null;if(X>$||isNaN($))$=X;if(Y<Z||isNaN(Z))Z=Y;if(q>=0)W=(J.min.z-U.z)*q,H=(J.max.z-U.z)*q;else W=(J.max.z-U.z)*q,H=(J.min.z-U.z)*q;if($>H||W>Z)return null;if(W>$||$!==$)$=W;if(H<Z||Z!==Z)Z=H;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,V8)!==null}intersectTriangle(J,Q,$,Z,X){OJ.subVectors(Q,J),E7.subVectors($,J),BJ.crossVectors(OJ,E7);let Y=this.direction.dot(BJ),W;if(Y>0){if(Z)return null;W=1}else if(Y<0)W=-1,Y=-Y;else return null;k8.subVectors(this.origin,J);let H=W*this.direction.dot(E7.crossVectors(k8,E7));if(H<0)return null;let K=W*this.direction.dot(OJ.cross(k8));if(K<0)return null;if(H+K>Y)return null;let G=-W*k8.dot(BJ);if(G<0)return null;return this.at(G/Y,X)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class y0{constructor(J,Q,$,Z,X,Y,W,H,K,G,q,U,F,N,B,O){if(y0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,X,Y,W,H,K,G,q,U,F,N,B,O)}set(J,Q,$,Z,X,Y,W,H,K,G,q,U,F,N,B,O){let V=this.elements;return V[0]=J,V[4]=Q,V[8]=$,V[12]=Z,V[1]=X,V[5]=Y,V[9]=W,V[13]=H,V[2]=K,V[6]=G,V[10]=q,V[14]=U,V[3]=F,V[7]=N,V[11]=B,V[15]=O,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new y0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,$=J.elements,Z=1/q9.setFromMatrixColumn(J,0).length(),X=1/q9.setFromMatrixColumn(J,1).length(),Y=1/q9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*X,Q[5]=$[5]*X,Q[6]=$[6]*X,Q[7]=0,Q[8]=$[8]*Y,Q[9]=$[9]*Y,Q[10]=$[10]*Y,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,X=J.z,Y=Math.cos($),W=Math.sin($),H=Math.cos(Z),K=Math.sin(Z),G=Math.cos(X),q=Math.sin(X);if(J.order==="XYZ"){let U=Y*G,F=Y*q,N=W*G,B=W*q;Q[0]=H*G,Q[4]=-H*q,Q[8]=K,Q[1]=F+N*K,Q[5]=U-B*K,Q[9]=-W*H,Q[2]=B-U*K,Q[6]=N+F*K,Q[10]=Y*H}else if(J.order==="YXZ"){let U=H*G,F=H*q,N=K*G,B=K*q;Q[0]=U+B*W,Q[4]=N*W-F,Q[8]=Y*K,Q[1]=Y*q,Q[5]=Y*G,Q[9]=-W,Q[2]=F*W-N,Q[6]=B+U*W,Q[10]=Y*H}else if(J.order==="ZXY"){let U=H*G,F=H*q,N=K*G,B=K*q;Q[0]=U-B*W,Q[4]=-Y*q,Q[8]=N+F*W,Q[1]=F+N*W,Q[5]=Y*G,Q[9]=B-U*W,Q[2]=-Y*K,Q[6]=W,Q[10]=Y*H}else if(J.order==="ZYX"){let U=Y*G,F=Y*q,N=W*G,B=W*q;Q[0]=H*G,Q[4]=N*K-F,Q[8]=U*K+B,Q[1]=H*q,Q[5]=B*K+U,Q[9]=F*K-N,Q[2]=-K,Q[6]=W*H,Q[10]=Y*H}else if(J.order==="YZX"){let U=Y*H,F=Y*K,N=W*H,B=W*K;Q[0]=H*G,Q[4]=B-U*q,Q[8]=N*q+F,Q[1]=q,Q[5]=Y*G,Q[9]=-W*G,Q[2]=-K*G,Q[6]=F*q+N,Q[10]=U-B*q}else if(J.order==="XZY"){let U=Y*H,F=Y*K,N=W*H,B=W*K;Q[0]=H*G,Q[4]=-q,Q[8]=K*G,Q[1]=U*q+B,Q[5]=Y*G,Q[9]=F*q-N,Q[2]=N*q-F,Q[6]=W*G,Q[10]=B*q+U}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(W1,J,H1)}lookAt(J,Q,$){let Z=this.elements;if(h6.subVectors(J,Q),h6.lengthSq()===0)h6.z=1;if(h6.normalize(),D8.crossVectors($,h6),D8.lengthSq()===0){if(Math.abs($.z)===1)h6.x+=0.0001;else h6.z+=0.0001;h6.normalize(),D8.crossVectors($,h6)}return D8.normalize(),N7.crossVectors(h6,D8),Z[0]=D8.x,Z[4]=N7.x,Z[8]=h6.x,Z[1]=D8.y,Z[5]=N7.y,Z[9]=h6.y,Z[2]=D8.z,Z[6]=N7.z,Z[10]=h6.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,X=this.elements,Y=$[0],W=$[4],H=$[8],K=$[12],G=$[1],q=$[5],U=$[9],F=$[13],N=$[2],B=$[6],O=$[10],V=$[14],E=$[3],z=$[7],D=$[11],w=$[15],g=Z[0],k=Z[4],j=Z[8],h=Z[12],L=Z[1],C=Z[5],S=Z[9],u=Z[13],n=Z[2],m=Z[6],y=Z[10],v=Z[14],i=Z[3],b=Z[7],$0=Z[11],W0=Z[15];return X[0]=Y*g+W*L+H*n+K*i,X[4]=Y*k+W*C+H*m+K*b,X[8]=Y*j+W*S+H*y+K*$0,X[12]=Y*h+W*u+H*v+K*W0,X[1]=G*g+q*L+U*n+F*i,X[5]=G*k+q*C+U*m+F*b,X[9]=G*j+q*S+U*y+F*$0,X[13]=G*h+q*u+U*v+F*W0,X[2]=N*g+B*L+O*n+V*i,X[6]=N*k+B*C+O*m+V*b,X[10]=N*j+B*S+O*y+V*$0,X[14]=N*h+B*u+O*v+V*W0,X[3]=E*g+z*L+D*n+w*i,X[7]=E*k+z*C+D*m+w*b,X[11]=E*j+z*S+D*y+w*$0,X[15]=E*h+z*u+D*v+w*W0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],X=J[12],Y=J[1],W=J[5],H=J[9],K=J[13],G=J[2],q=J[6],U=J[10],F=J[14],N=J[3],B=J[7],O=J[11],V=J[15];return N*(+X*H*q-Z*K*q-X*W*U+$*K*U+Z*W*F-$*H*F)+B*(+Q*H*F-Q*K*U+X*Y*U-Z*Y*F+Z*K*G-X*H*G)+O*(+Q*K*q-Q*W*F-X*Y*q+$*Y*F+X*W*G-$*K*G)+V*(-Z*W*G-Q*H*q+Q*W*U+Z*Y*q-$*Y*U+$*H*G)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],X=J[3],Y=J[4],W=J[5],H=J[6],K=J[7],G=J[8],q=J[9],U=J[10],F=J[11],N=J[12],B=J[13],O=J[14],V=J[15],E=q*O*K-B*U*K+B*H*F-W*O*F-q*H*V+W*U*V,z=N*U*K-G*O*K-N*H*F+Y*O*F+G*H*V-Y*U*V,D=G*B*K-N*q*K+N*W*F-Y*B*F-G*W*V+Y*q*V,w=N*q*H-G*B*H-N*W*U+Y*B*U+G*W*O-Y*q*O,g=Q*E+$*z+Z*D+X*w;if(g===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/g;return J[0]=E*k,J[1]=(B*U*X-q*O*X-B*Z*F+$*O*F+q*Z*V-$*U*V)*k,J[2]=(W*O*X-B*H*X+B*Z*K-$*O*K-W*Z*V+$*H*V)*k,J[3]=(q*H*X-W*U*X-q*Z*K+$*U*K+W*Z*F-$*H*F)*k,J[4]=z*k,J[5]=(G*O*X-N*U*X+N*Z*F-Q*O*F-G*Z*V+Q*U*V)*k,J[6]=(N*H*X-Y*O*X-N*Z*K+Q*O*K+Y*Z*V-Q*H*V)*k,J[7]=(Y*U*X-G*H*X+G*Z*K-Q*U*K-Y*Z*F+Q*H*F)*k,J[8]=D*k,J[9]=(N*q*X-G*B*X-N*$*F+Q*B*F+G*$*V-Q*q*V)*k,J[10]=(Y*B*X-N*W*X+N*$*K-Q*B*K-Y*$*V+Q*W*V)*k,J[11]=(G*W*X-Y*q*X-G*$*K+Q*q*K+Y*$*F-Q*W*F)*k,J[12]=w*k,J[13]=(G*B*Z-N*q*Z+N*$*U-Q*B*U-G*$*O+Q*q*O)*k,J[14]=(N*W*Z-Y*B*Z-N*$*H+Q*B*H+Y*$*O-Q*W*O)*k,J[15]=(Y*q*Z-G*W*Z+G*$*H-Q*q*H-Y*$*U+Q*W*U)*k,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,X=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=X,Q[1]*=$,Q[5]*=Z,Q[9]*=X,Q[2]*=$,Q[6]*=Z,Q[10]*=X,Q[3]*=$,Q[7]*=Z,Q[11]*=X,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),X=1-$,Y=J.x,W=J.y,H=J.z,K=X*Y,G=X*W;return this.set(K*Y+$,K*W-Z*H,K*H+Z*W,0,K*W+Z*H,G*W+$,G*H-Z*Y,0,K*H-Z*W,G*H+Z*Y,X*H*H+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,X,Y){return this.set(1,$,X,0,J,1,Y,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,X=Q._x,Y=Q._y,W=Q._z,H=Q._w,K=X+X,G=Y+Y,q=W+W,U=X*K,F=X*G,N=X*q,B=Y*G,O=Y*q,V=W*q,E=H*K,z=H*G,D=H*q,w=$.x,g=$.y,k=$.z;return Z[0]=(1-(B+V))*w,Z[1]=(F+D)*w,Z[2]=(N-z)*w,Z[3]=0,Z[4]=(F-D)*g,Z[5]=(1-(U+V))*g,Z[6]=(O+E)*g,Z[7]=0,Z[8]=(N+z)*k,Z[9]=(O-E)*k,Z[10]=(1-(U+B))*k,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements,X=q9.set(Z[0],Z[1],Z[2]).length(),Y=q9.set(Z[4],Z[5],Z[6]).length(),W=q9.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)X=-X;J.x=Z[12],J.y=Z[13],J.z=Z[14],r6.copy(this);let K=1/X,G=1/Y,q=1/W;return r6.elements[0]*=K,r6.elements[1]*=K,r6.elements[2]*=K,r6.elements[4]*=G,r6.elements[5]*=G,r6.elements[6]*=G,r6.elements[8]*=q,r6.elements[9]*=q,r6.elements[10]*=q,Q.setFromRotationMatrix(r6),$.x=X,$.y=Y,$.z=W,this}makePerspective(J,Q,$,Z,X,Y,W=2000){let H=this.elements,K=2*X/(Q-J),G=2*X/($-Z),q=(Q+J)/(Q-J),U=($+Z)/($-Z),F,N;if(W===2000)F=-(Y+X)/(Y-X),N=-2*Y*X/(Y-X);else if(W===2001)F=-Y/(Y-X),N=-Y*X/(Y-X);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+W);return H[0]=K,H[4]=0,H[8]=q,H[12]=0,H[1]=0,H[5]=G,H[9]=U,H[13]=0,H[2]=0,H[6]=0,H[10]=F,H[14]=N,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,Z,X,Y,W=2000){let H=this.elements,K=1/(Q-J),G=1/($-Z),q=1/(Y-X),U=(Q+J)*K,F=($+Z)*G,N,B;if(W===2000)N=(Y+X)*q,B=-2*q;else if(W===2001)N=X*q,B=-1*q;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+W);return H[0]=2*K,H[4]=0,H[8]=0,H[12]=-U,H[1]=0,H[5]=2*G,H[9]=0,H[13]=-F,H[2]=0,H[6]=0,H[10]=B,H[14]=-N,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var q9=new P,r6=new y0,W1=new P(0,0,0),H1=new P(1,1,1),D8=new P,N7=new P,h6=new P,l5=new y0,d5=new g6;class X8{constructor(J=0,Q=0,$=0,Z=X8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,X=Z[0],Y=Z[4],W=Z[8],H=Z[1],K=Z[5],G=Z[9],q=Z[2],U=Z[6],F=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(B6(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(-G,F),this._z=Math.atan2(-Y,X);else this._x=Math.atan2(U,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-B6(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(W,F),this._z=Math.atan2(H,K);else this._y=Math.atan2(-q,X),this._z=0;break;case"ZXY":if(this._x=Math.asin(B6(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-q,F),this._z=Math.atan2(-Y,K);else this._y=0,this._z=Math.atan2(H,X);break;case"ZYX":if(this._y=Math.asin(-B6(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(U,F),this._z=Math.atan2(H,X);else this._x=0,this._z=Math.atan2(-Y,K);break;case"YZX":if(this._z=Math.asin(B6(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-G,K),this._y=Math.atan2(-q,X);else this._x=0,this._y=Math.atan2(W,F);break;case"XZY":if(this._z=Math.asin(-B6(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(U,K),this._y=Math.atan2(W,X);else this._x=Math.atan2(-G,F),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return l5.makeRotationFromQuaternion(J),this.setFromRotationMatrix(l5,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return d5.setFromEuler(this),this.setFromQuaternion(d5,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}X8.DEFAULT_ORDER="XYZ";class oJ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var K1=0,c5=new P,U9=new g6,E8=new y0,O7=new P,p9=new P,G1=new P,q1=new g6,n5=new P(1,0,0),s5=new P(0,1,0),o5=new P(0,0,1),i5={type:"added"},U1={type:"removed"},F9={type:"childadded",child:null},RJ={type:"childremoved",child:null};class $6 extends R8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=J8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$6.DEFAULT_UP.clone();let J=new P,Q=new X8,$=new g6,Z=new P(1,1,1);function X(){$.setFromEuler(Q,!1)}function Y(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(X),$._onChange(Y),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new y0},normalMatrix:{value:new f0}}),this.matrix=new y0,this.matrixWorld=new y0,this.matrixAutoUpdate=$6.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$6.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oJ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return U9.setFromAxisAngle(J,Q),this.quaternion.multiply(U9),this}rotateOnWorldAxis(J,Q){return U9.setFromAxisAngle(J,Q),this.quaternion.premultiply(U9),this}rotateX(J){return this.rotateOnAxis(n5,J)}rotateY(J){return this.rotateOnAxis(s5,J)}rotateZ(J){return this.rotateOnAxis(o5,J)}translateOnAxis(J,Q){return c5.copy(J).applyQuaternion(this.quaternion),this.position.add(c5.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(n5,J)}translateY(J){return this.translateOnAxis(s5,J)}translateZ(J){return this.translateOnAxis(o5,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(E8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)O7.copy(J);else O7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),p9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)E8.lookAt(p9,O7,this.up);else E8.lookAt(O7,p9,this.up);if(this.quaternion.setFromRotationMatrix(E8),Z)E8.extractRotation(Z.matrixWorld),U9.setFromRotationMatrix(E8),this.quaternion.premultiply(U9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(i5),F9.child=J,this.dispatchEvent(F9),F9.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(U1),RJ.child=J,this.dispatchEvent(RJ),RJ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),E8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),E8.multiply(J.parent.matrixWorld);return J.applyMatrix4(E8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(i5),F9.child=J,this.dispatchEvent(F9),F9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let Y=this.children[$].getObjectByProperty(J,Q);if(Y!==void 0)return Y}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let X=0,Y=Z.length;X<Y;X++)Z[X].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(p9,J,G1),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(p9,q1,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let X=0,Y=Z.length;X<Y;X++)Z[X].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.visibility=this._visibility,Z.active=this._active,Z.bounds=this._bounds.map((W)=>({boxInitialized:W.boxInitialized,boxMin:W.box.min.toArray(),boxMax:W.box.max.toArray(),sphereInitialized:W.sphereInitialized,sphereRadius:W.sphere.radius,sphereCenter:W.sphere.center.toArray()})),Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.geometryCount=this._geometryCount,Z.matricesTexture=this._matricesTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere={center:Z.boundingSphere.center.toArray(),radius:Z.boundingSphere.radius};if(this.boundingBox!==null)Z.boundingBox={min:Z.boundingBox.min.toArray(),max:Z.boundingBox.max.toArray()}}function X(W,H){if(W[H.uuid]===void 0)W[H.uuid]=H.toJSON(J);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=X(J.geometries,this.geometry);let W=this.geometry.parameters;if(W!==void 0&&W.shapes!==void 0){let H=W.shapes;if(Array.isArray(H))for(let K=0,G=H.length;K<G;K++){let q=H[K];X(J.shapes,q)}else X(J.shapes,H)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)X(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let W=[];for(let H=0,K=this.material.length;H<K;H++)W.push(X(J.materials,this.material[H]));Z.material=W}else Z.material=X(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let W=0;W<this.children.length;W++)Z.children.push(this.children[W].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let W=0;W<this.animations.length;W++){let H=this.animations[W];Z.animations.push(X(J.animations,H))}}if(Q){let W=Y(J.geometries),H=Y(J.materials),K=Y(J.textures),G=Y(J.images),q=Y(J.shapes),U=Y(J.skeletons),F=Y(J.animations),N=Y(J.nodes);if(W.length>0)$.geometries=W;if(H.length>0)$.materials=H;if(K.length>0)$.textures=K;if(G.length>0)$.images=G;if(q.length>0)$.shapes=q;if(U.length>0)$.skeletons=U;if(F.length>0)$.animations=F;if(N.length>0)$.nodes=N}return $.object=Z,$;function Y(W){let H=[];for(let K in W){let G=W[K];delete G.metadata,H.push(G)}return H}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}$6.DEFAULT_UP=new P(0,1,0);$6.DEFAULT_MATRIX_AUTO_UPDATE=!0;$6.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var t6=new P,N8=new P,zJ=new P,O8=new P,V9=new P,E9=new P,a5=new P,MJ=new P,LJ=new P,CJ=new P;class Z8{constructor(J=new P,Q=new P,$=new P){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),t6.subVectors(J,Q),Z.cross(t6);let X=Z.lengthSq();if(X>0)return Z.multiplyScalar(1/Math.sqrt(X));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,X){t6.subVectors(Z,Q),N8.subVectors($,Q),zJ.subVectors(J,Q);let Y=t6.dot(t6),W=t6.dot(N8),H=t6.dot(zJ),K=N8.dot(N8),G=N8.dot(zJ),q=Y*K-W*W;if(q===0)return X.set(0,0,0),null;let U=1/q,F=(K*H-W*G)*U,N=(Y*G-W*H)*U;return X.set(1-F-N,N,F)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,O8)===null)return!1;return O8.x>=0&&O8.y>=0&&O8.x+O8.y<=1}static getInterpolation(J,Q,$,Z,X,Y,W,H){if(this.getBarycoord(J,Q,$,Z,O8)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(X,O8.x),H.addScaledVector(Y,O8.y),H.addScaledVector(W,O8.z),H}static isFrontFacing(J,Q,$,Z){return t6.subVectors($,Q),N8.subVectors(J,Q),t6.cross(N8).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return t6.subVectors(this.c,this.b),N8.subVectors(this.a,this.b),t6.cross(N8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return Z8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return Z8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,X){return Z8.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,X)}containsPoint(J){return Z8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return Z8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,X=this.c,Y,W;V9.subVectors(Z,$),E9.subVectors(X,$),MJ.subVectors(J,$);let H=V9.dot(MJ),K=E9.dot(MJ);if(H<=0&&K<=0)return Q.copy($);LJ.subVectors(J,Z);let G=V9.dot(LJ),q=E9.dot(LJ);if(G>=0&&q<=G)return Q.copy(Z);let U=H*q-G*K;if(U<=0&&H>=0&&G<=0)return Y=H/(H-G),Q.copy($).addScaledVector(V9,Y);CJ.subVectors(J,X);let F=V9.dot(CJ),N=E9.dot(CJ);if(N>=0&&F<=N)return Q.copy(X);let B=F*K-H*N;if(B<=0&&K>=0&&N<=0)return W=K/(K-N),Q.copy($).addScaledVector(E9,W);let O=G*N-F*q;if(O<=0&&q-G>=0&&F-N>=0)return a5.subVectors(X,Z),W=(q-G)/(q-G+(F-N)),Q.copy(Z).addScaledVector(a5,W);let V=1/(O+B+U);return Y=B*V,W=U*V,Q.copy($).addScaledVector(V9,Y).addScaledVector(E9,W)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var H$={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_8={h:0,s:0,l:0},B7={h:0,s:0,l:0};function kJ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class _0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,s0.toWorkingColorSpace(this,Q),this}setRGB(J,Q,$,Z=s0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,s0.toWorkingColorSpace(this,Z),this}setHSL(J,Q,$,Z=s0.workingColorSpace){if(J=dJ(J,1),Q=B6(Q,0,1),$=B6($,0,1),Q===0)this.r=this.g=this.b=$;else{let X=$<=0.5?$*(1+Q):$+Q-$*Q,Y=2*$-X;this.r=kJ(Y,X,J+0.3333333333333333),this.g=kJ(Y,X,J),this.b=kJ(Y,X,J-0.3333333333333333)}return s0.toWorkingColorSpace(this,Z),this}setStyle(J,Q="srgb"){function $(X){if(X===void 0)return;if(parseFloat(X)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let X,Y=Z[1],W=Z[2];switch(Y){case"rgb":case"rgba":if(X=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(W))return $(X[4]),this.setRGB(Math.min(255,parseInt(X[1],10))/255,Math.min(255,parseInt(X[2],10))/255,Math.min(255,parseInt(X[3],10))/255,Q);if(X=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(W))return $(X[4]),this.setRGB(Math.min(100,parseInt(X[1],10))/100,Math.min(100,parseInt(X[2],10))/100,Math.min(100,parseInt(X[3],10))/100,Q);break;case"hsl":case"hsla":if(X=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(W))return $(X[4]),this.setHSL(parseFloat(X[1])/360,parseFloat(X[2])/100,parseFloat(X[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let X=Z[1],Y=X.length;if(Y===3)return this.setRGB(parseInt(X.charAt(0),16)/15,parseInt(X.charAt(1),16)/15,parseInt(X.charAt(2),16)/15,Q);else if(Y===6)return this.setHex(parseInt(X,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=H$[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=D9(J.r),this.g=D9(J.g),this.b=D9(J.b),this}copyLinearToSRGB(J){return this.r=qJ(J.r),this.g=qJ(J.g),this.b=qJ(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return s0.fromWorkingColorSpace(w6.copy(this),J),Math.round(B6(w6.r*255,0,255))*65536+Math.round(B6(w6.g*255,0,255))*256+Math.round(B6(w6.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=s0.workingColorSpace){s0.fromWorkingColorSpace(w6.copy(this),Q);let{r:$,g:Z,b:X}=w6,Y=Math.max($,Z,X),W=Math.min($,Z,X),H,K,G=(W+Y)/2;if(W===Y)H=0,K=0;else{let q=Y-W;switch(K=G<=0.5?q/(Y+W):q/(2-Y-W),Y){case $:H=(Z-X)/q+(Z<X?6:0);break;case Z:H=(X-$)/q+2;break;case X:H=($-Z)/q+4;break}H/=6}return J.h=H,J.s=K,J.l=G,J}getRGB(J,Q=s0.workingColorSpace){return s0.fromWorkingColorSpace(w6.copy(this),Q),J.r=w6.r,J.g=w6.g,J.b=w6.b,J}getStyle(J="srgb"){s0.fromWorkingColorSpace(w6.copy(this),J);let{r:Q,g:$,b:Z}=w6;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(_8),this.setHSL(_8.h+J,_8.s+Q,_8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(_8),J.getHSL(B7);let $=o9(_8.h,B7.h,Q),Z=o9(_8.s,B7.s,Q),X=o9(_8.l,B7.l,Q);return this.setHSL($,Z,X),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,X=J.elements;return this.r=X[0]*Q+X[3]*$+X[6]*Z,this.g=X[1]*Q+X[4]*$+X[7]*Z,this.b=X[2]*Q+X[5]*$+X[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var w6=new _0;_0.NAMES=H$;var F1=0;class n6 extends R8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=J8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(X){let Y=[];for(let W in X){let H=X[W];delete H.metadata,Y.push(H)}return Y}if(Q){let X=Z(J.textures),Y=Z(J.images);if(X.length>0)$.textures=X;if(Y.length>0)$.images=Y}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let X=0;X!==Z;++X)$[X]=Q[X].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class p6 extends n6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new X8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var U6=new P,R7=new R0;class R6{constructor(J,Q,$=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}get updateRange(){return cJ("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,X=this.itemSize;Z<X;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)R7.fromBufferAttribute(this,Q),R7.applyMatrix3(J),this.setXY(Q,R7.x,R7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)U6.fromBufferAttribute(this,Q),U6.applyMatrix3(J),this.setXYZ(Q,U6.x,U6.y,U6.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)U6.fromBufferAttribute(this,Q),U6.applyMatrix4(J),this.setXYZ(Q,U6.x,U6.y,U6.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)U6.fromBufferAttribute(this,Q),U6.applyNormalMatrix(J),this.setXYZ(Q,U6.x,U6.y,U6.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)U6.fromBufferAttribute(this,Q),U6.transformDirection(J),this.setXYZ(Q,U6.x,U6.y,U6.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=e6($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=t0($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=e6(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=e6(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=e6(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=e6(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=t0(Q,this.array),$=t0($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=t0(Q,this.array),$=t0($,this.array),Z=t0(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,X){if(J*=this.itemSize,this.normalized)Q=t0(Q,this.array),$=t0($,this.array),Z=t0(Z,this.array),X=t0(X,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=X,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class iJ extends R6{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class aJ extends R6{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class j6 extends R6{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var V1=0,l6=new y0,DJ=new $6,N9=new P,b6=new N6,u9=new N6,O6=new P;class f6 extends R8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=J8(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((Z$(J))?aJ:iJ)(J,1);else this.index=J;return this}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let X=new f0().getNormalMatrix(J);$.applyNormalMatrix(X),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return l6.makeRotationFromQuaternion(J),this.applyMatrix4(l6),this}rotateX(J){return l6.makeRotationX(J),this.applyMatrix4(l6),this}rotateY(J){return l6.makeRotationY(J),this.applyMatrix4(l6),this}rotateZ(J){return l6.makeRotationZ(J),this.applyMatrix4(l6),this}translate(J,Q,$){return l6.makeTranslation(J,Q,$),this.applyMatrix4(l6),this}scale(J,Q,$){return l6.makeScale(J,Q,$),this.applyMatrix4(l6),this}lookAt(J){return DJ.lookAt(J),DJ.updateMatrix(),this.applyMatrix4(DJ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(N9).negate(),this.translate(N9.x,N9.y,N9.z),this}setFromPoints(J){let Q=[];for(let $=0,Z=J.length;$<Z;$++){let X=J[$];Q.push(X.x,X.y,X.z||0)}return this.setAttribute("position",new j6(Q,3)),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new N6;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let X=Q[$];if(b6.setFromBufferAttribute(X),this.morphTargetsRelative)O6.addVectors(this.boundingBox.min,b6.min),this.boundingBox.expandByPoint(O6),O6.addVectors(this.boundingBox.max,b6.max),this.boundingBox.expandByPoint(O6);else this.boundingBox.expandByPoint(b6.min),this.boundingBox.expandByPoint(b6.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new A6;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(J){let $=this.boundingSphere.center;if(b6.setFromBufferAttribute(J),Q)for(let X=0,Y=Q.length;X<Y;X++){let W=Q[X];if(u9.setFromBufferAttribute(W),this.morphTargetsRelative)O6.addVectors(b6.min,u9.min),b6.expandByPoint(O6),O6.addVectors(b6.max,u9.max),b6.expandByPoint(O6);else b6.expandByPoint(u9.min),b6.expandByPoint(u9.max)}b6.getCenter($);let Z=0;for(let X=0,Y=J.count;X<Y;X++)O6.fromBufferAttribute(J,X),Z=Math.max(Z,$.distanceToSquared(O6));if(Q)for(let X=0,Y=Q.length;X<Y;X++){let W=Q[X],H=this.morphTargetsRelative;for(let K=0,G=W.count;K<G;K++){if(O6.fromBufferAttribute(W,K),H)N9.fromBufferAttribute(J,K),O6.add(N9);Z=Math.max(Z,$.distanceToSquared(O6))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:X}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new R6(new Float32Array(4*$.count),4));let Y=this.getAttribute("tangent"),W=[],H=[];for(let j=0;j<$.count;j++)W[j]=new P,H[j]=new P;let K=new P,G=new P,q=new P,U=new R0,F=new R0,N=new R0,B=new P,O=new P;function V(j,h,L){K.fromBufferAttribute($,j),G.fromBufferAttribute($,h),q.fromBufferAttribute($,L),U.fromBufferAttribute(X,j),F.fromBufferAttribute(X,h),N.fromBufferAttribute(X,L),G.sub(K),q.sub(K),F.sub(U),N.sub(U);let C=1/(F.x*N.y-N.x*F.y);if(!isFinite(C))return;B.copy(G).multiplyScalar(N.y).addScaledVector(q,-F.y).multiplyScalar(C),O.copy(q).multiplyScalar(F.x).addScaledVector(G,-N.x).multiplyScalar(C),W[j].add(B),W[h].add(B),W[L].add(B),H[j].add(O),H[h].add(O),H[L].add(O)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let j=0,h=E.length;j<h;++j){let L=E[j],C=L.start,S=L.count;for(let u=C,n=C+S;u<n;u+=3)V(J.getX(u+0),J.getX(u+1),J.getX(u+2))}let z=new P,D=new P,w=new P,g=new P;function k(j){w.fromBufferAttribute(Z,j),g.copy(w);let h=W[j];z.copy(h),z.sub(w.multiplyScalar(w.dot(h))).normalize(),D.crossVectors(g,h);let C=D.dot(H[j])<0?-1:1;Y.setXYZW(j,z.x,z.y,z.z,C)}for(let j=0,h=E.length;j<h;++j){let L=E[j],C=L.start,S=L.count;for(let u=C,n=C+S;u<n;u+=3)k(J.getX(u+0)),k(J.getX(u+1)),k(J.getX(u+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new R6(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let U=0,F=$.count;U<F;U++)$.setXYZ(U,0,0,0);let Z=new P,X=new P,Y=new P,W=new P,H=new P,K=new P,G=new P,q=new P;if(J)for(let U=0,F=J.count;U<F;U+=3){let N=J.getX(U+0),B=J.getX(U+1),O=J.getX(U+2);Z.fromBufferAttribute(Q,N),X.fromBufferAttribute(Q,B),Y.fromBufferAttribute(Q,O),G.subVectors(Y,X),q.subVectors(Z,X),G.cross(q),W.fromBufferAttribute($,N),H.fromBufferAttribute($,B),K.fromBufferAttribute($,O),W.add(G),H.add(G),K.add(G),$.setXYZ(N,W.x,W.y,W.z),$.setXYZ(B,H.x,H.y,H.z),$.setXYZ(O,K.x,K.y,K.z)}else for(let U=0,F=Q.count;U<F;U+=3)Z.fromBufferAttribute(Q,U+0),X.fromBufferAttribute(Q,U+1),Y.fromBufferAttribute(Q,U+2),G.subVectors(Y,X),q.subVectors(Z,X),G.cross(q),$.setXYZ(U+0,G.x,G.y,G.z),$.setXYZ(U+1,G.x,G.y,G.z),$.setXYZ(U+2,G.x,G.y,G.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)O6.fromBufferAttribute(J,Q),O6.normalize(),J.setXYZ(Q,O6.x,O6.y,O6.z)}toNonIndexed(){function J(W,H){let{array:K,itemSize:G,normalized:q}=W,U=new K.constructor(H.length*G),F=0,N=0;for(let B=0,O=H.length;B<O;B++){if(W.isInterleavedBufferAttribute)F=H[B]*W.data.stride+W.offset;else F=H[B]*G;for(let V=0;V<G;V++)U[N++]=K[F++]}return new R6(U,G,q)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new f6,$=this.index.array,Z=this.attributes;for(let W in Z){let H=Z[W],K=J(H,$);Q.setAttribute(W,K)}let X=this.morphAttributes;for(let W in X){let H=[],K=X[W];for(let G=0,q=K.length;G<q;G++){let U=K[G],F=J(U,$);H.push(F)}Q.morphAttributes[W]=H}Q.morphTargetsRelative=this.morphTargetsRelative;let Y=this.groups;for(let W=0,H=Y.length;W<H;W++){let K=Y[W];Q.addGroup(K.start,K.count,K.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let H=this.parameters;for(let K in H)if(H[K]!==void 0)J[K]=H[K];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let H in $){let K=$[H];J.data.attributes[H]=K.toJSON(J.data)}let Z={},X=!1;for(let H in this.morphAttributes){let K=this.morphAttributes[H],G=[];for(let q=0,U=K.length;q<U;q++){let F=K[q];G.push(F.toJSON(J.data))}if(G.length>0)Z[H]=G,X=!0}if(X)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let Y=this.groups;if(Y.length>0)J.data.groups=JSON.parse(JSON.stringify(Y));let W=this.boundingSphere;if(W!==null)J.data.boundingSphere={center:W.center.toArray(),radius:W.radius};return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone(Q));let Z=J.attributes;for(let K in Z){let G=Z[K];this.setAttribute(K,G.clone(Q))}let X=J.morphAttributes;for(let K in X){let G=[],q=X[K];for(let U=0,F=q.length;U<F;U++)G.push(q[U].clone(Q));this.morphAttributes[K]=G}this.morphTargetsRelative=J.morphTargetsRelative;let Y=J.groups;for(let K=0,G=Y.length;K<G;K++){let q=Y[K];this.addGroup(q.start,q.count,q.materialIndex)}let W=J.boundingBox;if(W!==null)this.boundingBox=W.clone();let H=J.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var r5=new y0,p8=new i8,z7=new A6,t5=new P,O9=new P,B9=new P,R9=new P,_J=new P,M7=new P,L7=new R0,C7=new R0,k7=new R0,e5=new P,JQ=new P,QQ=new P,D7=new P,_7=new P;class n0 extends $6{constructor(J=new f6,Q=new p6){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let X=0,Y=Z.length;X<Y;X++){let W=Z[X].name||String(X);this.morphTargetInfluences.push(0),this.morphTargetDictionary[W]=X}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,X=$.morphAttributes.position,Y=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let W=this.morphTargetInfluences;if(X&&W){M7.set(0,0,0);for(let H=0,K=X.length;H<K;H++){let G=W[H],q=X[H];if(G===0)continue;if(_J.fromBufferAttribute(q,J),Y)M7.addScaledVector(_J,G);else M7.addScaledVector(_J.sub(Q),G)}Q.add(M7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,X=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(z7.copy($.boundingSphere),z7.applyMatrix4(X),p8.copy(J.ray).recast(J.near),z7.containsPoint(p8.origin)===!1){if(p8.intersectSphere(z7,t5)===null)return;if(p8.origin.distanceToSquared(t5)>(J.far-J.near)**2)return}if(r5.copy(X).invert(),p8.copy(J.ray).applyMatrix4(r5),$.boundingBox!==null){if(p8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,p8)}_computeIntersections(J,Q,$){let Z,X=this.geometry,Y=this.material,W=X.index,H=X.attributes.position,K=X.attributes.uv,G=X.attributes.uv1,q=X.attributes.normal,U=X.groups,F=X.drawRange;if(W!==null)if(Array.isArray(Y))for(let N=0,B=U.length;N<B;N++){let O=U[N],V=Y[O.materialIndex],E=Math.max(O.start,F.start),z=Math.min(W.count,Math.min(O.start+O.count,F.start+F.count));for(let D=E,w=z;D<w;D+=3){let g=W.getX(D),k=W.getX(D+1),j=W.getX(D+2);if(Z=w7(this,V,J,$,K,G,q,g,k,j),Z)Z.faceIndex=Math.floor(D/3),Z.face.materialIndex=O.materialIndex,Q.push(Z)}}else{let N=Math.max(0,F.start),B=Math.min(W.count,F.start+F.count);for(let O=N,V=B;O<V;O+=3){let E=W.getX(O),z=W.getX(O+1),D=W.getX(O+2);if(Z=w7(this,Y,J,$,K,G,q,E,z,D),Z)Z.faceIndex=Math.floor(O/3),Q.push(Z)}}else if(H!==void 0)if(Array.isArray(Y))for(let N=0,B=U.length;N<B;N++){let O=U[N],V=Y[O.materialIndex],E=Math.max(O.start,F.start),z=Math.min(H.count,Math.min(O.start+O.count,F.start+F.count));for(let D=E,w=z;D<w;D+=3){let g=D,k=D+1,j=D+2;if(Z=w7(this,V,J,$,K,G,q,g,k,j),Z)Z.faceIndex=Math.floor(D/3),Z.face.materialIndex=O.materialIndex,Q.push(Z)}}else{let N=Math.max(0,F.start),B=Math.min(H.count,F.start+F.count);for(let O=N,V=B;O<V;O+=3){let E=O,z=O+1,D=O+2;if(Z=w7(this,Y,J,$,K,G,q,E,z,D),Z)Z.faceIndex=Math.floor(O/3),Q.push(Z)}}}}function E1(J,Q,$,Z,X,Y,W,H){let K;if(Q.side===1)K=Z.intersectTriangle(W,Y,X,!0,H);else K=Z.intersectTriangle(X,Y,W,Q.side===0,H);if(K===null)return null;_7.copy(H),_7.applyMatrix4(J.matrixWorld);let G=$.ray.origin.distanceTo(_7);if(G<$.near||G>$.far)return null;return{distance:G,point:_7.clone(),object:J}}function w7(J,Q,$,Z,X,Y,W,H,K,G){J.getVertexPosition(H,O9),J.getVertexPosition(K,B9),J.getVertexPosition(G,R9);let q=E1(J,Q,$,Z,O9,B9,R9,D7);if(q){if(X)L7.fromBufferAttribute(X,H),C7.fromBufferAttribute(X,K),k7.fromBufferAttribute(X,G),q.uv=Z8.getInterpolation(D7,O9,B9,R9,L7,C7,k7,new R0);if(Y)L7.fromBufferAttribute(Y,H),C7.fromBufferAttribute(Y,K),k7.fromBufferAttribute(Y,G),q.uv1=Z8.getInterpolation(D7,O9,B9,R9,L7,C7,k7,new R0);if(W){if(e5.fromBufferAttribute(W,H),JQ.fromBufferAttribute(W,K),QQ.fromBufferAttribute(W,G),q.normal=Z8.getInterpolation(D7,O9,B9,R9,e5,JQ,QQ,new P),q.normal.dot(Z.direction)>0)q.normal.multiplyScalar(-1)}let U={a:H,b:K,c:G,normal:new P,materialIndex:0};Z8.getNormal(O9,B9,R9,U.normal),q.face=U}return q}class a8 extends f6{constructor(J=1,Q=1,$=1,Z=1,X=1,Y=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:X,depthSegments:Y};let W=this;Z=Math.floor(Z),X=Math.floor(X),Y=Math.floor(Y);let H=[],K=[],G=[],q=[],U=0,F=0;N("z","y","x",-1,-1,$,Q,J,Y,X,0),N("z","y","x",1,-1,$,Q,-J,Y,X,1),N("x","z","y",1,1,J,$,Q,Z,Y,2),N("x","z","y",1,-1,J,$,-Q,Z,Y,3),N("x","y","z",1,-1,J,Q,$,Z,X,4),N("x","y","z",-1,-1,J,Q,-$,Z,X,5),this.setIndex(H),this.setAttribute("position",new j6(K,3)),this.setAttribute("normal",new j6(G,3)),this.setAttribute("uv",new j6(q,2));function N(B,O,V,E,z,D,w,g,k,j,h){let L=D/k,C=w/j,S=D/2,u=w/2,n=g/2,m=k+1,y=j+1,v=0,i=0,b=new P;for(let $0=0;$0<y;$0++){let W0=$0*C-u;for(let V0=0;V0<m;V0++){let L0=V0*L-S;b[B]=L0*E,b[O]=W0*z,b[V]=n,K.push(b.x,b.y,b.z),b[B]=0,b[O]=0,b[V]=g>0?1:-1,G.push(b.x,b.y,b.z),q.push(V0/k),q.push(1-$0/j),v+=1}}for(let $0=0;$0<j;$0++)for(let W0=0;W0<k;W0++){let V0=U+W0+m*$0,L0=U+W0+m*($0+1),o=U+(W0+1)+m*($0+1),Z0=U+(W0+1)+m*$0;H.push(V0,L0,Z0),H.push(L0,o,Z0),i+=6}W.addGroup(F,i,h),F+=i,U+=v}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new a8(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function w9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let X=J[$][Z];if(X&&(X.isColor||X.isMatrix3||X.isMatrix4||X.isVector2||X.isVector3||X.isVector4||X.isTexture||X.isQuaternion))if(X.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=X.clone();else if(Array.isArray(X))Q[$][Z]=X.slice();else Q[$][Z]=X}}return Q}function T6(J){let Q={};for(let $=0;$<J.length;$++){let Z=w9(J[$]);for(let X in Z)Q[X]=Z[X]}return Q}function N1(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function K$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return s0.workingColorSpace}var l7={clone:w9,merge:T6},O1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class y6 extends n6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O1,this.fragmentShader=B1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=w9(J.uniforms),this.uniformsGroups=N1(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let Y=this.uniforms[Z].value;if(Y&&Y.isTexture)Q.uniforms[Z]={type:"t",value:Y.toJSON(J).uuid};else if(Y&&Y.isColor)Q.uniforms[Z]={type:"c",value:Y.getHex()};else if(Y&&Y.isVector2)Q.uniforms[Z]={type:"v2",value:Y.toArray()};else if(Y&&Y.isVector3)Q.uniforms[Z]={type:"v3",value:Y.toArray()};else if(Y&&Y.isVector4)Q.uniforms[Z]={type:"v4",value:Y.toArray()};else if(Y&&Y.isMatrix3)Q.uniforms[Z]={type:"m3",value:Y.toArray()};else if(Y&&Y.isMatrix4)Q.uniforms[Z]={type:"m4",value:Y.toArray()};else Q.uniforms[Z]={value:Y}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class rJ extends $6{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new y0,this.projectionMatrix=new y0,this.projectionMatrixInverse=new y0,this.coordinateSystem=2000}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var w8=new P,$Q=new R0,ZQ=new R0;class I6 extends rJ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=_9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(s9*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return _9*2*Math.atan(Math.tan(s9*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){w8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(w8.x,w8.y).multiplyScalar(-J/w8.z),w8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(w8.x,w8.y).multiplyScalar(-J/w8.z)}getViewSize(J,Q){return this.getViewBounds(J,$Q,ZQ),Q.subVectors(ZQ,$Q)}setViewOffset(J,Q,$,Z,X,Y){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=X,this.view.height=Y,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(s9*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,X=-0.5*Z,Y=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:K}=Y;X+=Y.offsetX*Z/H,Q-=Y.offsetY*$/K,Z*=Y.width/H,$*=Y.height/K}let W=this.filmOffset;if(W!==0)X+=J*W/this.getFilmWidth();this.projectionMatrix.makePerspective(X,X+Z,Q,Q-$,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var z9=-90,M9=1;class G$ extends $6{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new I6(z9,M9,J,Q);Z.layers=this.layers,this.add(Z);let X=new I6(z9,M9,J,Q);X.layers=this.layers,this.add(X);let Y=new I6(z9,M9,J,Q);Y.layers=this.layers,this.add(Y);let W=new I6(z9,M9,J,Q);W.layers=this.layers,this.add(W);let H=new I6(z9,M9,J,Q);H.layers=this.layers,this.add(H);let K=new I6(z9,M9,J,Q);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,X,Y,W,H]=Q;for(let K of Q)this.remove(K);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),X.up.set(0,0,-1),X.lookAt(0,1,0),Y.up.set(0,0,1),Y.lookAt(0,-1,0),W.up.set(0,1,0),W.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),X.up.set(0,0,1),X.lookAt(0,1,0),Y.up.set(0,0,-1),Y.lookAt(0,-1,0),W.up.set(0,-1,0),W.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of Q)this.add(K),K.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[X,Y,W,H,K,G]=this.children,q=J.getRenderTarget(),U=J.getActiveCubeFace(),F=J.getActiveMipmapLevel(),N=J.xr.enabled;J.xr.enabled=!1;let B=$.texture.generateMipmaps;$.texture.generateMipmaps=!1,J.setRenderTarget($,0,Z),J.render(Q,X),J.setRenderTarget($,1,Z),J.render(Q,Y),J.setRenderTarget($,2,Z),J.render(Q,W),J.setRenderTarget($,3,Z),J.render(Q,H),J.setRenderTarget($,4,Z),J.render(Q,K),$.texture.generateMipmaps=B,J.setRenderTarget($,5,Z),J.render(Q,G),J.setRenderTarget(q,U,F),J.xr.enabled=N,$.texture.needsPMREMUpdate=!0}}class tJ extends F6{constructor(J,Q,$,Z,X,Y,W,H,K,G){J=J!==void 0?J:[],Q=Q!==void 0?Q:301;super(J,Q,$,Z,X,Y,W,H,K,G);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class q$ extends c6{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new tJ(Z,Q.mapping,Q.wrapS,Q.wrapT,Q.magFilter,Q.minFilter,Q.format,Q.type,Q.anisotropy,Q.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=Q.generateMipmaps!==void 0?Q.generateMipmaps:!1,this.texture.minFilter=Q.minFilter!==void 0?Q.minFilter:1006}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new a8(5,5,5),X=new y6({name:"CubemapFromEquirect",uniforms:w9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:1,blending:0});X.uniforms.tEquirect.value=Q;let Y=new n0(Z,X),W=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new G$(1,10,this).update(J,Y),Q.minFilter=W,Y.geometry.dispose(),Y.material.dispose(),this}clear(J,Q,$,Z){let X=J.getRenderTarget();for(let Y=0;Y<6;Y++)J.setRenderTarget(this,Y),J.clear(Q,$,Z);J.setRenderTarget(X)}}var wJ=new P,R1=new P,z1=new f0;class $8{constructor(J=new P(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=wJ.subVectors($,Q).cross(R1.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(wJ),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let X=-(J.start.dot(this.normal)+this.constant)/Z;if(X<0||X>1)return null;return Q.copy(J.start).addScaledVector($,X)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||z1.getNormalMatrix(J),Z=this.coplanarPoint(wJ).applyMatrix4(J),X=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(X),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var u8=new A6,I7=new P;class d7{constructor(J=new $8,Q=new $8,$=new $8,Z=new $8,X=new $8,Y=new $8){this.planes=[J,Q,$,Z,X,Y]}set(J,Q,$,Z,X,Y){let W=this.planes;return W[0].copy(J),W[1].copy(Q),W[2].copy($),W[3].copy(Z),W[4].copy(X),W[5].copy(Y),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000){let $=this.planes,Z=J.elements,X=Z[0],Y=Z[1],W=Z[2],H=Z[3],K=Z[4],G=Z[5],q=Z[6],U=Z[7],F=Z[8],N=Z[9],B=Z[10],O=Z[11],V=Z[12],E=Z[13],z=Z[14],D=Z[15];if($[0].setComponents(H-X,U-K,O-F,D-V).normalize(),$[1].setComponents(H+X,U+K,O+F,D+V).normalize(),$[2].setComponents(H+Y,U+G,O+N,D+E).normalize(),$[3].setComponents(H-Y,U-G,O-N,D-E).normalize(),$[4].setComponents(H-W,U-q,O-B,D-z).normalize(),Q===2000)$[5].setComponents(H+W,U+q,O+B,D+z).normalize();else if(Q===2001)$[5].setComponents(W,q,B,z).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();u8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();u8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(u8)}intersectsSprite(J){return u8.center.set(0,0,0),u8.radius=0.7071067811865476,u8.applyMatrix4(J.matrixWorld),this.intersectsSphere(u8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let X=0;X<6;X++)if(Q[X].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(I7.x=Z.normal.x>0?J.max.x:J.min.x,I7.y=Z.normal.y>0?J.max.y:J.min.y,I7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(I7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function U$(){let J=null,Q=!1,$=null,Z=null;function X(Y,W){$(Y,W),Z=J.requestAnimationFrame(X)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(X),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(Y){$=Y},setContext:function(Y){J=Y}}}function M1(J){let Q=new WeakMap;function $(H,K){let{array:G,usage:q}=H,U=G.byteLength,F=J.createBuffer();J.bindBuffer(K,F),J.bufferData(K,G,q),H.onUploadCallback();let N;if(G instanceof Float32Array)N=J.FLOAT;else if(G instanceof Uint16Array)if(H.isFloat16BufferAttribute)N=J.HALF_FLOAT;else N=J.UNSIGNED_SHORT;else if(G instanceof Int16Array)N=J.SHORT;else if(G instanceof Uint32Array)N=J.UNSIGNED_INT;else if(G instanceof Int32Array)N=J.INT;else if(G instanceof Int8Array)N=J.BYTE;else if(G instanceof Uint8Array)N=J.UNSIGNED_BYTE;else if(G instanceof Uint8ClampedArray)N=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+G);return{buffer:F,type:N,bytesPerElement:G.BYTES_PER_ELEMENT,version:H.version,size:U}}function Z(H,K,G){let{array:q,_updateRange:U,updateRanges:F}=K;if(J.bindBuffer(G,H),U.count===-1&&F.length===0)J.bufferSubData(G,0,q);if(F.length!==0){for(let N=0,B=F.length;N<B;N++){let O=F[N];J.bufferSubData(G,O.start*q.BYTES_PER_ELEMENT,q,O.start,O.count)}K.clearUpdateRanges()}if(U.count!==-1)J.bufferSubData(G,U.offset*q.BYTES_PER_ELEMENT,q,U.offset,U.count),U.count=-1;K.onUploadCallback()}function X(H){if(H.isInterleavedBufferAttribute)H=H.data;return Q.get(H)}function Y(H){if(H.isInterleavedBufferAttribute)H=H.data;let K=Q.get(H);if(K)J.deleteBuffer(K.buffer),Q.delete(H)}function W(H,K){if(H.isGLBufferAttribute){let q=Q.get(H);if(!q||q.version<H.version)Q.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}if(H.isInterleavedBufferAttribute)H=H.data;let G=Q.get(H);if(G===void 0)Q.set(H,$(H,K));else if(G.version<H.version){if(G.size!==H.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(G.buffer,H,K),G.version=H.version}}return{get:X,remove:Y,update:W}}class P9 extends f6{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let X=J/2,Y=Q/2,W=Math.floor($),H=Math.floor(Z),K=W+1,G=H+1,q=J/W,U=Q/H,F=[],N=[],B=[],O=[];for(let V=0;V<G;V++){let E=V*U-Y;for(let z=0;z<K;z++){let D=z*q-X;N.push(D,-E,0),B.push(0,0,1),O.push(z/W),O.push(1-V/H)}}for(let V=0;V<H;V++)for(let E=0;E<W;E++){let z=E+K*V,D=E+K*(V+1),w=E+1+K*(V+1),g=E+1+K*V;F.push(z,D,g),F.push(D,w,g)}this.setIndex(F),this.setAttribute("position",new j6(N,3)),this.setAttribute("normal",new j6(B,3)),this.setAttribute("uv",new j6(O,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new P9(J.width,J.height,J.widthSegments,J.heightSegments)}}var L1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C1=`#ifdef USE_ALPHAHASH
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
#endif`,k1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I1=`#ifdef USE_AOMAP
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
#endif`,A1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P1=`#ifdef USE_BATCHING
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
#endif`,T1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y1=`float G_BlinnPhong_Implicit( ) {
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
#endif`,v1=`#ifdef USE_BUMPMAP
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
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,d1=`#define PI 3.141592653589793
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
} // validated`,c1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n1=`vec3 transformedNormal = objectNormal;
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
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r1="gl_FragColor = linearToOutputTexel( gl_FragColor );",t1=`
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
}`,e1=`#ifdef USE_ENVMAP
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
#endif`,J4=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q4=`#ifdef USE_ENVMAP
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
#endif`,Z4=`#ifdef USE_ENVMAP
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
#endif`,X4=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y4=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W4=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H4=`#ifdef USE_FOG
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
#endif`,q4=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F4=`uniform bool receiveShadow;
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
#endif`,V4=`#ifdef USE_ENVMAP
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
#endif`,E4=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O4=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R4=`PhysicalMaterial material;
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
#endif`,z4=`struct PhysicalMaterial {
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
}`,M4=`
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
#endif`,C4=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k4=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D4=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_4=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w4=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P4=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T4=`#if defined( USE_POINTS_UV )
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
#endif`,S4=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y4=`#ifdef USE_INSTANCING_MORPH
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
#endif`,v4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x4=`#ifdef USE_MORPHTARGETS
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
#endif`,h4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g4=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l4=`#ifdef USE_NORMALMAP
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
#endif`,d4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s4=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i4=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JX=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QX=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$X=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZX=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XX=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,YX=`float getShadowMask() {
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
}`,WX=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HX=`#ifdef USE_SKINNING
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
#endif`,KX=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GX=`#ifdef USE_SKINNING
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
#endif`,qX=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UX=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FX=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VX=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EX=`#ifdef USE_TRANSMISSION
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
#endif`,NX=`#ifdef USE_TRANSMISSION
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
#endif`,OX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zX=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,MX=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LX=`uniform sampler2D t2D;
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
}`,CX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kX=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_X=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wX=`#include <common>
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
}`,IX=`#if DEPTH_PACKING == 3200
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
}`,AX=`#define DISTANCE
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
}`,PX=`#define DISTANCE
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
}`,TX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SX=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jX=`uniform float scale;
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
}`,yX=`uniform vec3 diffuse;
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
}`,fX=`#include <common>
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
}`,vX=`uniform vec3 diffuse;
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
}`,xX=`#define LAMBERT
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
}`,hX=`#define LAMBERT
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
}`,bX=`#define MATCAP
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
}`,gX=`#define MATCAP
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
}`,pX=`#define NORMAL
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
}`,uX=`#define NORMAL
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
}`,mX=`#define PHONG
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
}`,lX=`#define PHONG
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
}`,dX=`#define STANDARD
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
}`,cX=`#define STANDARD
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
}`,nX=`#define TOON
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
}`,sX=`#define TOON
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
}`,oX=`uniform float size;
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
}`,iX=`uniform vec3 diffuse;
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
}`,aX=`#include <common>
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
}`,rX=`uniform vec3 color;
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
}`,tX=`uniform float rotation;
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
}`,eX=`uniform vec3 diffuse;
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
}`,x0={alphahash_fragment:L1,alphahash_pars_fragment:C1,alphamap_fragment:k1,alphamap_pars_fragment:D1,alphatest_fragment:_1,alphatest_pars_fragment:w1,aomap_fragment:I1,aomap_pars_fragment:A1,batching_pars_vertex:P1,batching_vertex:T1,begin_vertex:S1,beginnormal_vertex:j1,bsdfs:y1,iridescence_fragment:f1,bumpmap_pars_fragment:v1,clipping_planes_fragment:x1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:b1,clipping_planes_vertex:g1,color_fragment:p1,color_pars_fragment:u1,color_pars_vertex:m1,color_vertex:l1,common:d1,cube_uv_reflection_fragment:c1,defaultnormal_vertex:n1,displacementmap_pars_vertex:s1,displacementmap_vertex:o1,emissivemap_fragment:i1,emissivemap_pars_fragment:a1,colorspace_fragment:r1,colorspace_pars_fragment:t1,envmap_fragment:e1,envmap_common_pars_fragment:J4,envmap_pars_fragment:Q4,envmap_pars_vertex:$4,envmap_physical_pars_fragment:V4,envmap_vertex:Z4,fog_vertex:X4,fog_pars_vertex:Y4,fog_fragment:W4,fog_pars_fragment:H4,gradientmap_pars_fragment:K4,lightmap_pars_fragment:G4,lights_lambert_fragment:q4,lights_lambert_pars_fragment:U4,lights_pars_begin:F4,lights_toon_fragment:E4,lights_toon_pars_fragment:N4,lights_phong_fragment:O4,lights_phong_pars_fragment:B4,lights_physical_fragment:R4,lights_physical_pars_fragment:z4,lights_fragment_begin:M4,lights_fragment_maps:L4,lights_fragment_end:C4,logdepthbuf_fragment:k4,logdepthbuf_pars_fragment:D4,logdepthbuf_pars_vertex:_4,logdepthbuf_vertex:w4,map_fragment:I4,map_pars_fragment:A4,map_particle_fragment:P4,map_particle_pars_fragment:T4,metalnessmap_fragment:S4,metalnessmap_pars_fragment:j4,morphinstance_vertex:y4,morphcolor_vertex:f4,morphnormal_vertex:v4,morphtarget_pars_vertex:x4,morphtarget_vertex:h4,normal_fragment_begin:b4,normal_fragment_maps:g4,normal_pars_fragment:p4,normal_pars_vertex:u4,normal_vertex:m4,normalmap_pars_fragment:l4,clearcoat_normal_fragment_begin:d4,clearcoat_normal_fragment_maps:c4,clearcoat_pars_fragment:n4,iridescence_pars_fragment:s4,opaque_fragment:o4,packing:i4,premultiplied_alpha_fragment:a4,project_vertex:r4,dithering_fragment:t4,dithering_pars_fragment:e4,roughnessmap_fragment:JX,roughnessmap_pars_fragment:QX,shadowmap_pars_fragment:$X,shadowmap_pars_vertex:ZX,shadowmap_vertex:XX,shadowmask_pars_fragment:YX,skinbase_vertex:WX,skinning_pars_vertex:HX,skinning_vertex:KX,skinnormal_vertex:GX,specularmap_fragment:qX,specularmap_pars_fragment:UX,tonemapping_fragment:FX,tonemapping_pars_fragment:VX,transmission_fragment:EX,transmission_pars_fragment:NX,uv_pars_fragment:OX,uv_pars_vertex:BX,uv_vertex:RX,worldpos_vertex:zX,background_vert:MX,background_frag:LX,backgroundCube_vert:CX,backgroundCube_frag:kX,cube_vert:DX,cube_frag:_X,depth_vert:wX,depth_frag:IX,distanceRGBA_vert:AX,distanceRGBA_frag:PX,equirect_vert:TX,equirect_frag:SX,linedashed_vert:jX,linedashed_frag:yX,meshbasic_vert:fX,meshbasic_frag:vX,meshlambert_vert:xX,meshlambert_frag:hX,meshmatcap_vert:bX,meshmatcap_frag:gX,meshnormal_vert:pX,meshnormal_frag:uX,meshphong_vert:mX,meshphong_frag:lX,meshphysical_vert:dX,meshphysical_frag:cX,meshtoon_vert:nX,meshtoon_frag:sX,points_vert:oX,points_frag:iX,shadow_vert:aX,shadow_frag:rX,sprite_vert:tX,sprite_frag:eX},Y0={common:{diffuse:{value:new _0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new f0}},envmap:{envMap:{value:null},envMapRotation:{value:new f0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new f0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new f0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new f0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new f0},normalScale:{value:new R0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new f0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new f0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new f0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new f0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new _0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0},uvTransform:{value:new f0}},sprite:{diffuse:{value:new _0(16777215)},opacity:{value:1},center:{value:new R0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}}},S6={basic:{uniforms:T6([Y0.common,Y0.specularmap,Y0.envmap,Y0.aomap,Y0.lightmap,Y0.fog]),vertexShader:x0.meshbasic_vert,fragmentShader:x0.meshbasic_frag},lambert:{uniforms:T6([Y0.common,Y0.specularmap,Y0.envmap,Y0.aomap,Y0.lightmap,Y0.emissivemap,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.fog,Y0.lights,{emissive:{value:new _0(0)}}]),vertexShader:x0.meshlambert_vert,fragmentShader:x0.meshlambert_frag},phong:{uniforms:T6([Y0.common,Y0.specularmap,Y0.envmap,Y0.aomap,Y0.lightmap,Y0.emissivemap,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.fog,Y0.lights,{emissive:{value:new _0(0)},specular:{value:new _0(1118481)},shininess:{value:30}}]),vertexShader:x0.meshphong_vert,fragmentShader:x0.meshphong_frag},standard:{uniforms:T6([Y0.common,Y0.envmap,Y0.aomap,Y0.lightmap,Y0.emissivemap,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.roughnessmap,Y0.metalnessmap,Y0.fog,Y0.lights,{emissive:{value:new _0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:x0.meshphysical_vert,fragmentShader:x0.meshphysical_frag},toon:{uniforms:T6([Y0.common,Y0.aomap,Y0.lightmap,Y0.emissivemap,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.gradientmap,Y0.fog,Y0.lights,{emissive:{value:new _0(0)}}]),vertexShader:x0.meshtoon_vert,fragmentShader:x0.meshtoon_frag},matcap:{uniforms:T6([Y0.common,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.fog,{matcap:{value:null}}]),vertexShader:x0.meshmatcap_vert,fragmentShader:x0.meshmatcap_frag},points:{uniforms:T6([Y0.points,Y0.fog]),vertexShader:x0.points_vert,fragmentShader:x0.points_frag},dashed:{uniforms:T6([Y0.common,Y0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:x0.linedashed_vert,fragmentShader:x0.linedashed_frag},depth:{uniforms:T6([Y0.common,Y0.displacementmap]),vertexShader:x0.depth_vert,fragmentShader:x0.depth_frag},normal:{uniforms:T6([Y0.common,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,{opacity:{value:1}}]),vertexShader:x0.meshnormal_vert,fragmentShader:x0.meshnormal_frag},sprite:{uniforms:T6([Y0.sprite,Y0.fog]),vertexShader:x0.sprite_vert,fragmentShader:x0.sprite_frag},background:{uniforms:{uvTransform:{value:new f0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:x0.background_vert,fragmentShader:x0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new f0}},vertexShader:x0.backgroundCube_vert,fragmentShader:x0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:x0.cube_vert,fragmentShader:x0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:x0.equirect_vert,fragmentShader:x0.equirect_frag},distanceRGBA:{uniforms:T6([Y0.common,Y0.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:x0.distanceRGBA_vert,fragmentShader:x0.distanceRGBA_frag},shadow:{uniforms:T6([Y0.lights,Y0.fog,{color:{value:new _0(0)},opacity:{value:1}}]),vertexShader:x0.shadow_vert,fragmentShader:x0.shadow_frag}};S6.physical={uniforms:T6([S6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new f0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new f0},clearcoatNormalScale:{value:new R0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new f0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new f0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new f0},sheen:{value:0},sheenColor:{value:new _0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new f0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new f0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new f0},transmissionSamplerSize:{value:new R0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new f0},attenuationDistance:{value:0},attenuationColor:{value:new _0(0)},specularColor:{value:new _0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new f0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new f0},anisotropyVector:{value:new R0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new f0}}]),vertexShader:x0.meshphysical_vert,fragmentShader:x0.meshphysical_frag};var A7={r:0,b:0,g:0},m8=new X8,JY=new y0;function QY(J,Q,$,Z,X,Y,W){let H=new _0(0),K=Y===!0?0:1,G,q,U=null,F=0,N=null;function B(z){let D=z.isScene===!0?z.background:null;if(D&&D.isTexture)D=(z.backgroundBlurriness>0?$:Q).get(D);return D}function O(z){let D=!1,w=B(z);if(w===null)E(H,K);else if(w&&w.isColor)E(w,1),D=!0;let g=J.xr.getEnvironmentBlendMode();if(g==="additive")Z.buffers.color.setClear(0,0,0,1,W);else if(g==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||D)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function V(z,D){let w=B(D);if(w&&(w.isCubeTexture||w.mapping===306)){if(q===void 0)q=new n0(new a8(1,1,1),new y6({name:"BackgroundCubeMaterial",uniforms:w9(S6.backgroundCube.uniforms),vertexShader:S6.backgroundCube.vertexShader,fragmentShader:S6.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),q.geometry.deleteAttribute("normal"),q.geometry.deleteAttribute("uv"),q.onBeforeRender=function(g,k,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(q.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),X.update(q);if(m8.copy(D.backgroundRotation),m8.x*=-1,m8.y*=-1,m8.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1)m8.y*=-1,m8.z*=-1;if(q.material.uniforms.envMap.value=w,q.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,q.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,q.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,q.material.uniforms.backgroundRotation.value.setFromMatrix4(JY.makeRotationFromEuler(m8)),q.material.toneMapped=s0.getTransfer(w.colorSpace)!=="srgb",U!==w||F!==w.version||N!==J.toneMapping)q.material.needsUpdate=!0,U=w,F=w.version,N=J.toneMapping;q.layers.enableAll(),z.unshift(q,q.geometry,q.material,0,0,null)}else if(w&&w.isTexture){if(G===void 0)G=new n0(new P9(2,2),new y6({name:"BackgroundMaterial",uniforms:w9(S6.background.uniforms),vertexShader:S6.background.vertexShader,fragmentShader:S6.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),G.geometry.deleteAttribute("normal"),Object.defineProperty(G.material,"map",{get:function(){return this.uniforms.t2D.value}}),X.update(G);if(G.material.uniforms.t2D.value=w,G.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,G.material.toneMapped=s0.getTransfer(w.colorSpace)!=="srgb",w.matrixAutoUpdate===!0)w.updateMatrix();if(G.material.uniforms.uvTransform.value.copy(w.matrix),U!==w||F!==w.version||N!==J.toneMapping)G.material.needsUpdate=!0,U=w,F=w.version,N=J.toneMapping;G.layers.enableAll(),z.unshift(G,G.geometry,G.material,0,0,null)}}function E(z,D){z.getRGB(A7,K$(J)),Z.buffers.color.setClear(A7.r,A7.g,A7.b,D,W)}return{getClearColor:function(){return H},setClearColor:function(z,D=1){H.set(z),K=D,E(H,K)},getClearAlpha:function(){return K},setClearAlpha:function(z){K=z,E(H,K)},render:O,addToRenderList:V}}function $Y(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},X=F(null),Y=X,W=!1;function H(C,S,u,n,m){let y=!1,v=U(n,u,S);if(Y!==v)Y=v,G(Y.object);if(y=N(C,n,u,m),y)B(C,n,u,m);if(m!==null)Q.update(m,J.ELEMENT_ARRAY_BUFFER);if(y||W){if(W=!1,w(C,S,u,n),m!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(m).buffer)}}function K(){return J.createVertexArray()}function G(C){return J.bindVertexArray(C)}function q(C){return J.deleteVertexArray(C)}function U(C,S,u){let n=u.wireframe===!0,m=Z[C.id];if(m===void 0)m={},Z[C.id]=m;let y=m[S.id];if(y===void 0)y={},m[S.id]=y;let v=y[n];if(v===void 0)v=F(K()),y[n]=v;return v}function F(C){let S=[],u=[],n=[];for(let m=0;m<$;m++)S[m]=0,u[m]=0,n[m]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:u,attributeDivisors:n,object:C,attributes:{},index:null}}function N(C,S,u,n){let m=Y.attributes,y=S.attributes,v=0,i=u.getAttributes();for(let b in i)if(i[b].location>=0){let W0=m[b],V0=y[b];if(V0===void 0){if(b==="instanceMatrix"&&C.instanceMatrix)V0=C.instanceMatrix;if(b==="instanceColor"&&C.instanceColor)V0=C.instanceColor}if(W0===void 0)return!0;if(W0.attribute!==V0)return!0;if(V0&&W0.data!==V0.data)return!0;v++}if(Y.attributesNum!==v)return!0;if(Y.index!==n)return!0;return!1}function B(C,S,u,n){let m={},y=S.attributes,v=0,i=u.getAttributes();for(let b in i)if(i[b].location>=0){let W0=y[b];if(W0===void 0){if(b==="instanceMatrix"&&C.instanceMatrix)W0=C.instanceMatrix;if(b==="instanceColor"&&C.instanceColor)W0=C.instanceColor}let V0={};if(V0.attribute=W0,W0&&W0.data)V0.data=W0.data;m[b]=V0,v++}Y.attributes=m,Y.attributesNum=v,Y.index=n}function O(){let C=Y.newAttributes;for(let S=0,u=C.length;S<u;S++)C[S]=0}function V(C){E(C,0)}function E(C,S){let{newAttributes:u,enabledAttributes:n,attributeDivisors:m}=Y;if(u[C]=1,n[C]===0)J.enableVertexAttribArray(C),n[C]=1;if(m[C]!==S)J.vertexAttribDivisor(C,S),m[C]=S}function z(){let{newAttributes:C,enabledAttributes:S}=Y;for(let u=0,n=S.length;u<n;u++)if(S[u]!==C[u])J.disableVertexAttribArray(u),S[u]=0}function D(C,S,u,n,m,y,v){if(v===!0)J.vertexAttribIPointer(C,S,u,m,y);else J.vertexAttribPointer(C,S,u,n,m,y)}function w(C,S,u,n){O();let m=n.attributes,y=u.getAttributes(),v=S.defaultAttributeValues;for(let i in y){let b=y[i];if(b.location>=0){let $0=m[i];if($0===void 0){if(i==="instanceMatrix"&&C.instanceMatrix)$0=C.instanceMatrix;if(i==="instanceColor"&&C.instanceColor)$0=C.instanceColor}if($0!==void 0){let{normalized:W0,itemSize:V0}=$0,L0=Q.get($0);if(L0===void 0)continue;let{buffer:o,type:Z0,bytesPerElement:F0}=L0,z0=Z0===J.INT||Z0===J.UNSIGNED_INT||$0.gpuType===1013;if($0.isInterleavedBufferAttribute){let U0=$0.data,T0=U0.stride,e0=$0.offset;if(U0.isInstancedInterleavedBuffer){for(let h0=0;h0<b.locationSize;h0++)E(b.location+h0,U0.meshPerAttribute);if(C.isInstancedMesh!==!0&&n._maxInstanceCount===void 0)n._maxInstanceCount=U0.meshPerAttribute*U0.count}else for(let h0=0;h0<b.locationSize;h0++)V(b.location+h0);J.bindBuffer(J.ARRAY_BUFFER,o);for(let h0=0;h0<b.locationSize;h0++)D(b.location+h0,V0/b.locationSize,Z0,W0,T0*F0,(e0+V0/b.locationSize*h0)*F0,z0)}else{if($0.isInstancedBufferAttribute){for(let U0=0;U0<b.locationSize;U0++)E(b.location+U0,$0.meshPerAttribute);if(C.isInstancedMesh!==!0&&n._maxInstanceCount===void 0)n._maxInstanceCount=$0.meshPerAttribute*$0.count}else for(let U0=0;U0<b.locationSize;U0++)V(b.location+U0);J.bindBuffer(J.ARRAY_BUFFER,o);for(let U0=0;U0<b.locationSize;U0++)D(b.location+U0,V0/b.locationSize,Z0,W0,V0*F0,V0/b.locationSize*U0*F0,z0)}}else if(v!==void 0){let W0=v[i];if(W0!==void 0)switch(W0.length){case 2:J.vertexAttrib2fv(b.location,W0);break;case 3:J.vertexAttrib3fv(b.location,W0);break;case 4:J.vertexAttrib4fv(b.location,W0);break;default:J.vertexAttrib1fv(b.location,W0)}}}}z()}function g(){h();for(let C in Z){let S=Z[C];for(let u in S){let n=S[u];for(let m in n)q(n[m].object),delete n[m];delete S[u]}delete Z[C]}}function k(C){if(Z[C.id]===void 0)return;let S=Z[C.id];for(let u in S){let n=S[u];for(let m in n)q(n[m].object),delete n[m];delete S[u]}delete Z[C.id]}function j(C){for(let S in Z){let u=Z[S];if(u[C.id]===void 0)continue;let n=u[C.id];for(let m in n)q(n[m].object),delete n[m];delete u[C.id]}}function h(){if(L(),W=!0,Y===X)return;Y=X,G(Y.object)}function L(){X.geometry=null,X.program=null,X.wireframe=!1}return{setup:H,reset:h,resetDefaultState:L,dispose:g,releaseStatesOfGeometry:k,releaseStatesOfProgram:j,initAttributes:O,enableAttribute:V,disableUnusedAttributes:z}}function ZY(J,Q,$){let Z;function X(G){Z=G}function Y(G,q){J.drawArrays(Z,G,q),$.update(q,Z,1)}function W(G,q,U){if(U===0)return;J.drawArraysInstanced(Z,G,q,U),$.update(q,Z,U)}function H(G,q,U){if(U===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,G,0,q,0,U);let N=0;for(let B=0;B<U;B++)N+=q[B];$.update(N,Z,1)}function K(G,q,U,F){if(U===0)return;let N=Q.get("WEBGL_multi_draw");if(N===null)for(let B=0;B<G.length;B++)W(G[B],q[B],F[B]);else{N.multiDrawArraysInstancedWEBGL(Z,G,0,q,0,F,0,U);let B=0;for(let O=0;O<U;O++)B+=q[O];for(let O=0;O<F.length;O++)$.update(B,Z,F[O])}}this.setMode=X,this.render=Y,this.renderInstances=W,this.renderMultiDraw=H,this.renderMultiDrawInstances=K}function XY(J,Q,$,Z){let X;function Y(){if(X!==void 0)return X;if(Q.has("EXT_texture_filter_anisotropic")===!0){let k=Q.get("EXT_texture_filter_anisotropic");X=J.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else X=0;return X}function W(k){if(k!==1023&&Z.convert(k)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(k){let j=k===1016&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(k!==1009&&Z.convert(k)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==1015&&!j)return!1;return!0}function K(k){if(k==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";k="mediump"}if(k==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let G=$.precision!==void 0?$.precision:"highp",q=K(G);if(q!==G)console.warn("THREE.WebGLRenderer:",G,"not supported, using",q,"instead."),G=q;let U=$.logarithmicDepthBuffer===!0,F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),N=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),V=J.getParameter(J.MAX_VERTEX_ATTRIBS),E=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),z=J.getParameter(J.MAX_VARYING_VECTORS),D=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),w=N>0,g=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Y,getMaxPrecision:K,textureFormatReadable:W,textureTypeReadable:H,precision:G,logarithmicDepthBuffer:U,maxTextures:F,maxVertexTextures:N,maxTextureSize:B,maxCubemapSize:O,maxAttributes:V,maxVertexUniforms:E,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:w,maxSamples:g}}function YY(J){let Q=this,$=null,Z=0,X=!1,Y=!1,W=new $8,H=new f0,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(U,F){let N=U.length!==0||F||Z!==0||X;return X=F,Z=U.length,N},this.beginShadows=function(){Y=!0,q(null)},this.endShadows=function(){Y=!1},this.setGlobalState=function(U,F){$=q(U,F,0)},this.setState=function(U,F,N){let{clippingPlanes:B,clipIntersection:O,clipShadows:V}=U,E=J.get(U);if(!X||B===null||B.length===0||Y&&!V)if(Y)q(null);else G();else{let z=Y?0:Z,D=z*4,w=E.clippingState||null;K.value=w,w=q(B,F,D,N);for(let g=0;g!==D;++g)w[g]=$[g];E.clippingState=w,this.numIntersection=O?this.numPlanes:0,this.numPlanes+=z}};function G(){if(K.value!==$)K.value=$,K.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function q(U,F,N,B){let O=U!==null?U.length:0,V=null;if(O!==0){if(V=K.value,B!==!0||V===null){let E=N+O*4,z=F.matrixWorldInverse;if(H.getNormalMatrix(z),V===null||V.length<E)V=new Float32Array(E);for(let D=0,w=N;D!==O;++D,w+=4)W.copy(U[D]).applyMatrix4(z,H),W.normal.toArray(V,w),V[w+3]=W.constant}K.value=V,K.needsUpdate=!0}return Q.numPlanes=O,Q.numIntersection=0,V}}function WY(J){let Q=new WeakMap;function $(W,H){if(H===303)W.mapping=301;else if(H===304)W.mapping=302;return W}function Z(W){if(W&&W.isTexture){let H=W.mapping;if(H===303||H===304)if(Q.has(W)){let K=Q.get(W).texture;return $(K,W.mapping)}else{let K=W.image;if(K&&K.height>0){let G=new q$(K.height);return G.fromEquirectangularTexture(J,W),Q.set(W,G),W.addEventListener("dispose",X),$(G.texture,W.mapping)}else return null}}return W}function X(W){let H=W.target;H.removeEventListener("dispose",X);let K=Q.get(H);if(K!==void 0)Q.delete(H),K.dispose()}function Y(){Q=new WeakMap}return{get:Z,dispose:Y}}class S8 extends rJ{constructor(J=-1,Q=1,$=1,Z=-1,X=0.1,Y=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=X,this.far=Y,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,X,Y){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=X,this.view.height=Y,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,X=$-J,Y=$+J,W=Z+Q,H=Z-Q;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,G=(this.top-this.bottom)/this.view.fullHeight/this.zoom;X+=K*this.view.offsetX,Y=X+K*this.view.width,W-=G*this.view.offsetY,H=W-G*this.view.height}this.projectionMatrix.makeOrthographic(X,Y,W,H,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}var k9=4,XQ=[0.125,0.215,0.35,0.446,0.526,0.582],c8=20,IJ=new S8,YQ=new _0,AJ=null,PJ=0,TJ=0,SJ=!1,d8=(1+Math.sqrt(5))/2,L9=1/d8,WQ=[new P(-d8,L9,0),new P(d8,L9,0),new P(-L9,0,d8),new P(L9,0,d8),new P(0,d8,-L9),new P(0,d8,L9),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class r9{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,$=0.1,Z=100){AJ=this._renderer.getRenderTarget(),PJ=this._renderer.getActiveCubeFace(),TJ=this._renderer.getActiveMipmapLevel(),SJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,X),Q>0)this._blur(X,0,0,Q);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=GQ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=KQ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(AJ,PJ,TJ),this._renderer.xr.enabled=SJ,J.scissorTest=!1,P7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===301||J.mapping===302)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);AJ=this._renderer.getRenderTarget(),PJ=this._renderer.getActiveCubeFace(),TJ=this._renderer.getActiveMipmapLevel(),SJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},Z=HQ(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=HQ(J,Q,$);let{_lodMax:X}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HY(X)),this._blurMaterial=KY(X,J,Q)}return Z}_compileMaterial(J){let Q=new n0(this._lodPlanes[0],J);this._renderer.compile(Q,IJ)}_sceneToCubeUV(J,Q,$,Z){let W=new I6(90,1,Q,$),H=[1,-1,1,1,1,1],K=[1,1,1,-1,-1,-1],G=this._renderer,q=G.autoClear,U=G.toneMapping;G.getClearColor(YQ),G.toneMapping=0,G.autoClear=!1;let F=new p6({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),N=new n0(new a8,F),B=!1,O=J.background;if(O){if(O.isColor)F.color.copy(O),J.background=null,B=!0}else F.color.copy(YQ),B=!0;for(let V=0;V<6;V++){let E=V%3;if(E===0)W.up.set(0,H[V],0),W.lookAt(K[V],0,0);else if(E===1)W.up.set(0,0,H[V]),W.lookAt(0,K[V],0);else W.up.set(0,H[V],0),W.lookAt(0,0,K[V]);let z=this._cubeSize;if(P7(Z,E*z,V>2?z:0,z,z),G.setRenderTarget(Z),B)G.render(N,W);G.render(J,W)}N.geometry.dispose(),N.material.dispose(),G.toneMapping=U,G.autoClear=q,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===301||J.mapping===302;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=GQ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=KQ();let X=Z?this._cubemapMaterial:this._equirectMaterial,Y=new n0(this._lodPlanes[0],X),W=X.uniforms;W.envMap.value=J;let H=this._cubeSize;P7(Q,0,0,3*H,2*H),$.setRenderTarget(Q),$.render(Y,IJ)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodPlanes.length;for(let X=1;X<Z;X++){let Y=Math.sqrt(this._sigmas[X]*this._sigmas[X]-this._sigmas[X-1]*this._sigmas[X-1]),W=WQ[(Z-X-1)%WQ.length];this._blur(J,X-1,X,Y,W)}Q.autoClear=$}_blur(J,Q,$,Z,X){let Y=this._pingPongRenderTarget;this._halfBlur(J,Y,Q,$,Z,"latitudinal",X),this._halfBlur(Y,J,$,$,Z,"longitudinal",X)}_halfBlur(J,Q,$,Z,X,Y,W){let H=this._renderer,K=this._blurMaterial;if(Y!=="latitudinal"&&Y!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let G=3,q=new n0(this._lodPlanes[Z],K),U=K.uniforms,F=this._sizeLods[$]-1,N=isFinite(X)?Math.PI/(2*F):2*Math.PI/(2*c8-1),B=X/N,O=isFinite(X)?1+Math.floor(G*B):c8;if(O>c8)console.warn(`sigmaRadians, ${X}, is too large and will clip, as it requested ${O} samples when the maximum is set to ${c8}`);let V=[],E=0;for(let k=0;k<c8;++k){let j=k/B,h=Math.exp(-j*j/2);if(V.push(h),k===0)E+=h;else if(k<O)E+=2*h}for(let k=0;k<V.length;k++)V[k]=V[k]/E;if(U.envMap.value=J.texture,U.samples.value=O,U.weights.value=V,U.latitudinal.value=Y==="latitudinal",W)U.poleAxis.value=W;let{_lodMax:z}=this;U.dTheta.value=N,U.mipInt.value=z-$;let D=this._sizeLods[Z],w=3*D*(Z>z-k9?Z-z+k9:0),g=4*(this._cubeSize-D);P7(Q,w,g,3*D,2*D),H.setRenderTarget(Q),H.render(q,IJ)}}function HY(J){let Q=[],$=[],Z=[],X=J,Y=J-k9+1+XQ.length;for(let W=0;W<Y;W++){let H=Math.pow(2,X);$.push(H);let K=1/H;if(W>J-k9)K=XQ[W-J+k9-1];else if(W===0)K=0;Z.push(K);let G=1/(H-2),q=-G,U=1+G,F=[q,q,U,q,U,U,q,q,U,U,q,U],N=6,B=6,O=3,V=2,E=1,z=new Float32Array(O*B*N),D=new Float32Array(V*B*N),w=new Float32Array(E*B*N);for(let k=0;k<N;k++){let j=k%3*2/3-1,h=k>2?0:-1,L=[j,h,0,j+0.6666666666666666,h,0,j+0.6666666666666666,h+1,0,j,h,0,j+0.6666666666666666,h+1,0,j,h+1,0];z.set(L,O*B*k),D.set(F,V*B*k);let C=[k,k,k,k,k,k];w.set(C,E*B*k)}let g=new f6;if(g.setAttribute("position",new R6(z,O)),g.setAttribute("uv",new R6(D,V)),g.setAttribute("faceIndex",new R6(w,E)),Q.push(g),X>k9)X--}return{lodPlanes:Q,sizeLods:$,sigmas:Z}}function HQ(J,Q,$){let Z=new c6(J,Q,$);return Z.texture.mapping=306,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function P7(J,Q,$,Z,X){J.viewport.set(Q,$,Z,X),J.scissor.set(Q,$,Z,X)}function KY(J,Q,$){let Z=new Float32Array(c8),X=new P(0,1,0);return new y6({name:"SphericalGaussianBlur",defines:{n:c8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:X}},vertexShader:eJ(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function KQ(){return new y6({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eJ(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function GQ(){return new y6({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function eJ(){return`

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
	`}function GY(J){let Q=new WeakMap,$=null;function Z(H){if(H&&H.isTexture){let K=H.mapping,G=K===303||K===304,q=K===301||K===302;if(G||q){let U=Q.get(H),F=U!==void 0?U.texture.pmremVersion:0;if(H.isRenderTargetTexture&&H.pmremVersion!==F){if($===null)$=new r9(J);return U=G?$.fromEquirectangular(H,U):$.fromCubemap(H,U),U.texture.pmremVersion=H.pmremVersion,Q.set(H,U),U.texture}else if(U!==void 0)return U.texture;else{let N=H.image;if(G&&N&&N.height>0||q&&N&&X(N)){if($===null)$=new r9(J);return U=G?$.fromEquirectangular(H):$.fromCubemap(H),U.texture.pmremVersion=H.pmremVersion,Q.set(H,U),H.addEventListener("dispose",Y),U.texture}else return null}}}return H}function X(H){let K=0,G=6;for(let q=0;q<G;q++)if(H[q]!==void 0)K++;return K===G}function Y(H){let K=H.target;K.removeEventListener("dispose",Y);let G=Q.get(K);if(G!==void 0)Q.delete(K),G.dispose()}function W(){if(Q=new WeakMap,$!==null)$.dispose(),$=null}return{get:Z,dispose:W}}function qY(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let X;switch(Z){case"WEBGL_depth_texture":X=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":X=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":X=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":X=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:X=J.getExtension(Z)}return Q[Z]=X,X}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let X=$(Z);if(X===null)cJ("THREE.WebGLRenderer: "+Z+" extension not supported.");return X}}}function UY(J,Q,$,Z){let X={},Y=new WeakMap;function W(U){let F=U.target;if(F.index!==null)Q.remove(F.index);for(let B in F.attributes)Q.remove(F.attributes[B]);for(let B in F.morphAttributes){let O=F.morphAttributes[B];for(let V=0,E=O.length;V<E;V++)Q.remove(O[V])}F.removeEventListener("dispose",W),delete X[F.id];let N=Y.get(F);if(N)Q.remove(N),Y.delete(F);if(Z.releaseStatesOfGeometry(F),F.isInstancedBufferGeometry===!0)delete F._maxInstanceCount;$.memory.geometries--}function H(U,F){if(X[F.id]===!0)return F;return F.addEventListener("dispose",W),X[F.id]=!0,$.memory.geometries++,F}function K(U){let F=U.attributes;for(let B in F)Q.update(F[B],J.ARRAY_BUFFER);let N=U.morphAttributes;for(let B in N){let O=N[B];for(let V=0,E=O.length;V<E;V++)Q.update(O[V],J.ARRAY_BUFFER)}}function G(U){let F=[],N=U.index,B=U.attributes.position,O=0;if(N!==null){let z=N.array;O=N.version;for(let D=0,w=z.length;D<w;D+=3){let g=z[D+0],k=z[D+1],j=z[D+2];F.push(g,k,k,j,j,g)}}else if(B!==void 0){let z=B.array;O=B.version;for(let D=0,w=z.length/3-1;D<w;D+=3){let g=D+0,k=D+1,j=D+2;F.push(g,k,k,j,j,g)}}else return;let V=new((Z$(F))?aJ:iJ)(F,1);V.version=O;let E=Y.get(U);if(E)Q.remove(E);Y.set(U,V)}function q(U){let F=Y.get(U);if(F){let N=U.index;if(N!==null){if(F.version<N.version)G(U)}}else G(U);return Y.get(U)}return{get:H,update:K,getWireframeAttribute:q}}function FY(J,Q,$){let Z;function X(F){Z=F}let Y,W;function H(F){Y=F.type,W=F.bytesPerElement}function K(F,N){J.drawElements(Z,N,Y,F*W),$.update(N,Z,1)}function G(F,N,B){if(B===0)return;J.drawElementsInstanced(Z,N,Y,F*W,B),$.update(N,Z,B)}function q(F,N,B){if(B===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,N,0,Y,F,0,B);let V=0;for(let E=0;E<B;E++)V+=N[E];$.update(V,Z,1)}function U(F,N,B,O){if(B===0)return;let V=Q.get("WEBGL_multi_draw");if(V===null)for(let E=0;E<F.length;E++)G(F[E]/W,N[E],O[E]);else{V.multiDrawElementsInstancedWEBGL(Z,N,0,Y,F,0,O,0,B);let E=0;for(let z=0;z<B;z++)E+=N[z];for(let z=0;z<O.length;z++)$.update(E,Z,O[z])}}this.setMode=X,this.setIndex=H,this.render=K,this.renderInstances=G,this.renderMultiDraw=q,this.renderMultiDrawInstances=U}function VY(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(Y,W,H){switch($.calls++,W){case J.TRIANGLES:$.triangles+=H*(Y/3);break;case J.LINES:$.lines+=H*(Y/2);break;case J.LINE_STRIP:$.lines+=H*(Y-1);break;case J.LINE_LOOP:$.lines+=H*Y;break;case J.POINTS:$.points+=H*Y;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",W);break}}function X(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:X,update:Z}}function EY(J,Q,$){let Z=new WeakMap,X=new c0;function Y(W,H,K){let G=W.morphTargetInfluences,q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,U=q!==void 0?q.length:0,F=Z.get(H);if(F===void 0||F.count!==U){let L=function(){j.dispose(),Z.delete(H),H.removeEventListener("dispose",L)};if(F!==void 0)F.texture.dispose();let N=H.morphAttributes.position!==void 0,B=H.morphAttributes.normal!==void 0,O=H.morphAttributes.color!==void 0,V=H.morphAttributes.position||[],E=H.morphAttributes.normal||[],z=H.morphAttributes.color||[],D=0;if(N===!0)D=1;if(B===!0)D=2;if(O===!0)D=3;let w=H.attributes.position.count*D,g=1;if(w>Q.maxTextureSize)g=Math.ceil(w/Q.maxTextureSize),w=Q.maxTextureSize;let k=new Float32Array(w*g*4*U),j=new sJ(k,w,g,U);j.type=1015,j.needsUpdate=!0;let h=D*4;for(let C=0;C<U;C++){let S=V[C],u=E[C],n=z[C],m=w*g*4*C;for(let y=0;y<S.count;y++){let v=y*h;if(N===!0)X.fromBufferAttribute(S,y),k[m+v+0]=X.x,k[m+v+1]=X.y,k[m+v+2]=X.z,k[m+v+3]=0;if(B===!0)X.fromBufferAttribute(u,y),k[m+v+4]=X.x,k[m+v+5]=X.y,k[m+v+6]=X.z,k[m+v+7]=0;if(O===!0)X.fromBufferAttribute(n,y),k[m+v+8]=X.x,k[m+v+9]=X.y,k[m+v+10]=X.z,k[m+v+11]=n.itemSize===4?X.w:1}}F={count:U,texture:j,size:new R0(w,g)},Z.set(H,F),H.addEventListener("dispose",L)}if(W.isInstancedMesh===!0&&W.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",W.morphTexture,$);else{let N=0;for(let O=0;O<G.length;O++)N+=G[O];let B=H.morphTargetsRelative?1:1-N;K.getUniforms().setValue(J,"morphTargetBaseInfluence",B),K.getUniforms().setValue(J,"morphTargetInfluences",G)}K.getUniforms().setValue(J,"morphTargetsTexture",F.texture,$),K.getUniforms().setValue(J,"morphTargetsTextureSize",F.size)}return{update:Y}}function NY(J,Q,$,Z){let X=new WeakMap;function Y(K){let G=Z.render.frame,q=K.geometry,U=Q.get(K,q);if(X.get(U)!==G)Q.update(U),X.set(U,G);if(K.isInstancedMesh){if(K.hasEventListener("dispose",H)===!1)K.addEventListener("dispose",H);if(X.get(K)!==G){if($.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)$.update(K.instanceColor,J.ARRAY_BUFFER);X.set(K,G)}}if(K.isSkinnedMesh){let F=K.skeleton;if(X.get(F)!==G)F.update(),X.set(F,G)}return U}function W(){X=new WeakMap}function H(K){let G=K.target;if(G.removeEventListener("dispose",H),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:Y,dispose:W}}class e9 extends F6{constructor(J,Q,$,Z,X,Y,W,H,K,G=1026){if(G!==1026&&G!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if($===void 0&&G===1026)$=1014;if($===void 0&&G===1027)$=1020;super(null,Z,X,Y,W,H,G,$,K);this.isDepthTexture=!0,this.image={width:J,height:Q},this.magFilter=W!==void 0?W:1003,this.minFilter=H!==void 0?H:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}var F$=new F6,qQ=new e9(1,1),V$=new sJ,E$=new W$,N$=new tJ,UQ=[],FQ=[],VQ=new Float32Array(16),EQ=new Float32Array(9),NQ=new Float32Array(4);function T9(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let X=Q*$,Y=UQ[X];if(Y===void 0)Y=new Float32Array(X),UQ[X]=Y;if(Q!==0){Z.toArray(Y,0);for(let W=1,H=0;W!==Q;++W)H+=$,J[W].toArray(Y,H)}return Y}function V6(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function E6(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function c7(J,Q){let $=FQ[Q];if($===void 0)$=new Int32Array(Q),FQ[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function OY(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function BY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(V6($,Q))return;J.uniform2fv(this.addr,Q),E6($,Q)}}function RY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(V6($,Q))return;J.uniform3fv(this.addr,Q),E6($,Q)}}function zY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(V6($,Q))return;J.uniform4fv(this.addr,Q),E6($,Q)}}function MY(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(V6($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),E6($,Q)}else{if(V6($,Z))return;NQ.set(Z),J.uniformMatrix2fv(this.addr,!1,NQ),E6($,Z)}}function LY(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(V6($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),E6($,Q)}else{if(V6($,Z))return;EQ.set(Z),J.uniformMatrix3fv(this.addr,!1,EQ),E6($,Z)}}function CY(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(V6($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),E6($,Q)}else{if(V6($,Z))return;VQ.set(Z),J.uniformMatrix4fv(this.addr,!1,VQ),E6($,Z)}}function kY(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function DY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(V6($,Q))return;J.uniform2iv(this.addr,Q),E6($,Q)}}function _Y(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(V6($,Q))return;J.uniform3iv(this.addr,Q),E6($,Q)}}function wY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(V6($,Q))return;J.uniform4iv(this.addr,Q),E6($,Q)}}function IY(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function AY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(V6($,Q))return;J.uniform2uiv(this.addr,Q),E6($,Q)}}function PY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(V6($,Q))return;J.uniform3uiv(this.addr,Q),E6($,Q)}}function TY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(V6($,Q))return;J.uniform4uiv(this.addr,Q),E6($,Q)}}function SY(J,Q,$){let Z=this.cache,X=$.allocateTextureUnit();if(Z[0]!==X)J.uniform1i(this.addr,X),Z[0]=X;let Y;if(this.type===J.SAMPLER_2D_SHADOW)qQ.compareFunction=515,Y=qQ;else Y=F$;$.setTexture2D(Q||Y,X)}function jY(J,Q,$){let Z=this.cache,X=$.allocateTextureUnit();if(Z[0]!==X)J.uniform1i(this.addr,X),Z[0]=X;$.setTexture3D(Q||E$,X)}function yY(J,Q,$){let Z=this.cache,X=$.allocateTextureUnit();if(Z[0]!==X)J.uniform1i(this.addr,X),Z[0]=X;$.setTextureCube(Q||N$,X)}function fY(J,Q,$){let Z=this.cache,X=$.allocateTextureUnit();if(Z[0]!==X)J.uniform1i(this.addr,X),Z[0]=X;$.setTexture2DArray(Q||V$,X)}function vY(J){switch(J){case 5126:return OY;case 35664:return BY;case 35665:return RY;case 35666:return zY;case 35674:return MY;case 35675:return LY;case 35676:return CY;case 5124:case 35670:return kY;case 35667:case 35671:return DY;case 35668:case 35672:return _Y;case 35669:case 35673:return wY;case 5125:return IY;case 36294:return AY;case 36295:return PY;case 36296:return TY;case 35678:case 36198:case 36298:case 36306:case 35682:return SY;case 35679:case 36299:case 36307:return jY;case 35680:case 36300:case 36308:case 36293:return yY;case 36289:case 36303:case 36311:case 36292:return fY}}function xY(J,Q){J.uniform1fv(this.addr,Q)}function hY(J,Q){let $=T9(Q,this.size,2);J.uniform2fv(this.addr,$)}function bY(J,Q){let $=T9(Q,this.size,3);J.uniform3fv(this.addr,$)}function gY(J,Q){let $=T9(Q,this.size,4);J.uniform4fv(this.addr,$)}function pY(J,Q){let $=T9(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function uY(J,Q){let $=T9(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function mY(J,Q){let $=T9(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function lY(J,Q){J.uniform1iv(this.addr,Q)}function dY(J,Q){J.uniform2iv(this.addr,Q)}function cY(J,Q){J.uniform3iv(this.addr,Q)}function nY(J,Q){J.uniform4iv(this.addr,Q)}function sY(J,Q){J.uniform1uiv(this.addr,Q)}function oY(J,Q){J.uniform2uiv(this.addr,Q)}function iY(J,Q){J.uniform3uiv(this.addr,Q)}function aY(J,Q){J.uniform4uiv(this.addr,Q)}function rY(J,Q,$){let Z=this.cache,X=Q.length,Y=c7($,X);if(!V6(Z,Y))J.uniform1iv(this.addr,Y),E6(Z,Y);for(let W=0;W!==X;++W)$.setTexture2D(Q[W]||F$,Y[W])}function tY(J,Q,$){let Z=this.cache,X=Q.length,Y=c7($,X);if(!V6(Z,Y))J.uniform1iv(this.addr,Y),E6(Z,Y);for(let W=0;W!==X;++W)$.setTexture3D(Q[W]||E$,Y[W])}function eY(J,Q,$){let Z=this.cache,X=Q.length,Y=c7($,X);if(!V6(Z,Y))J.uniform1iv(this.addr,Y),E6(Z,Y);for(let W=0;W!==X;++W)$.setTextureCube(Q[W]||N$,Y[W])}function JW(J,Q,$){let Z=this.cache,X=Q.length,Y=c7($,X);if(!V6(Z,Y))J.uniform1iv(this.addr,Y),E6(Z,Y);for(let W=0;W!==X;++W)$.setTexture2DArray(Q[W]||V$,Y[W])}function QW(J){switch(J){case 5126:return xY;case 35664:return hY;case 35665:return bY;case 35666:return gY;case 35674:return pY;case 35675:return uY;case 35676:return mY;case 5124:case 35670:return lY;case 35667:case 35671:return dY;case 35668:case 35672:return cY;case 35669:case 35673:return nY;case 5125:return sY;case 36294:return oY;case 36295:return iY;case 36296:return aY;case 35678:case 36198:case 36298:case 36306:case 35682:return rY;case 35679:case 36299:case 36307:return tY;case 35680:case 36300:case 36308:case 36293:return eY;case 36289:case 36303:case 36311:case 36292:return JW}}class O${constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=vY(Q.type)}}class B${constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=QW(Q.type)}}class R${constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let X=0,Y=Z.length;X!==Y;++X){let W=Z[X];W.setValue(J,Q[W.id],$)}}}var jJ=/(\w+)(\])?(\[|\.)?/g;function OQ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function $W(J,Q,$){let Z=J.name,X=Z.length;jJ.lastIndex=0;while(!0){let Y=jJ.exec(Z),W=jJ.lastIndex,H=Y[1],K=Y[2]==="]",G=Y[3];if(K)H=H|0;if(G===void 0||G==="["&&W+2===X){OQ($,G===void 0?new O$(H,J,Q):new B$(H,J,Q));break}else{let U=$.map[H];if(U===void 0)U=new R$(H),OQ($,U);$=U}}}class i9{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let X=J.getActiveUniform(Q,Z),Y=J.getUniformLocation(Q,X.name);$W(X,Y,this)}}setValue(J,Q,$,Z){let X=this.map[Q];if(X!==void 0)X.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let X=0,Y=Q.length;X!==Y;++X){let W=Q[X],H=$[W.id];if(H.needsUpdate!==!1)W.setValue(J,H.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,X=J.length;Z!==X;++Z){let Y=J[Z];if(Y.id in Q)$.push(Y)}return $}}function BQ(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var ZW=37297,XW=0;function YW(J,Q){let $=J.split(`
`),Z=[],X=Math.max(Q-6,0),Y=Math.min(Q+6,$.length);for(let W=X;W<Y;W++){let H=W+1;Z.push(`${H===Q?">":" "} ${H}: ${$[W]}`)}return Z.join(`
`)}function WW(J){let Q=s0.getPrimaries(s0.workingColorSpace),$=s0.getPrimaries(J),Z;if(Q===$)Z="";else if(Q==="p3"&&$==="rec709")Z="LinearDisplayP3ToLinearSRGB";else if(Q==="rec709"&&$==="p3")Z="LinearSRGBToLinearDisplayP3";switch(J){case"srgb-linear":case"display-p3-linear":return[Z,"LinearTransferOETF"];case"srgb":case"display-p3":return[Z,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",J),[Z,"LinearTransferOETF"]}}function RQ(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),X=J.getShaderInfoLog(Q).trim();if(Z&&X==="")return"";let Y=/ERROR: 0:(\d+)/.exec(X);if(Y){let W=parseInt(Y[1]);return $.toUpperCase()+`

`+X+`

`+YW(J.getShaderSource(Q),W)}else return X}function HW(J,Q){let $=WW(Q);return`vec4 ${J}( vec4 value ) { return ${$[0]}( ${$[1]}( value ) ); }`}function KW(J,Q){let $;switch(Q){case 1:$="Linear";break;case 2:$="Reinhard";break;case 3:$="OptimizedCineon";break;case 4:$="ACESFilmic";break;case 6:$="AgX";break;case 7:$="Neutral";break;case 5:$="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),$="Linear"}return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}function GW(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(n9).join(`
`)}function qW(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function UW(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let X=0;X<Z;X++){let Y=J.getActiveAttrib(Q,X),W=Y.name,H=1;if(Y.type===J.FLOAT_MAT2)H=2;if(Y.type===J.FLOAT_MAT3)H=3;if(Y.type===J.FLOAT_MAT4)H=4;$[W]={type:Y.type,location:J.getAttribLocation(Q,W),locationSize:H}}return $}function n9(J){return J!==""}function zQ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function MQ(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var FW=/^[ \t]*#include +<([\w\d./]+)>/gm;function bJ(J){return J.replace(FW,EW)}var VW=new Map;function EW(J,Q){let $=x0[Q];if($===void 0){let Z=VW.get(Q);if(Z!==void 0)$=x0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return bJ($)}var NW=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function LQ(J){return J.replace(NW,OW)}function OW(J,Q,$,Z){let X="";for(let Y=parseInt(Q);Y<parseInt($);Y++)X+=Z.replace(/\[\s*i\s*\]/g,"[ "+Y+" ]").replace(/UNROLLED_LOOP_INDEX/g,Y);return X}function CQ(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}function BW(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===1)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===2)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===3)Q="SHADOWMAP_TYPE_VSM";return Q}function RW(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case 301:case 302:Q="ENVMAP_TYPE_CUBE";break;case 306:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function zW(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case 302:Q="ENVMAP_MODE_REFRACTION";break}return Q}function MW(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case 0:Q="ENVMAP_BLENDING_MULTIPLY";break;case 1:Q="ENVMAP_BLENDING_MIX";break;case 2:Q="ENVMAP_BLENDING_ADD";break}return Q}function LW(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function CW(J,Q,$,Z){let X=J.getContext(),Y=$.defines,W=$.vertexShader,H=$.fragmentShader,K=BW($),G=RW($),q=zW($),U=MW($),F=LW($),N=GW($),B=qW(Y),O=X.createProgram(),V,E,z=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(V=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,B].filter(n9).join(`
`),V.length>0)V+=`
`;if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,B].filter(n9).join(`
`),E.length>0)E+=`
`}else V=[CQ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,B,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+q:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(n9).join(`
`),E=[CQ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,B,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.envMap?"#define "+q:"",$.envMap?"#define "+U:"",F?"#define CUBEUV_TEXEL_WIDTH "+F.texelWidth:"",F?"#define CUBEUV_TEXEL_HEIGHT "+F.texelHeight:"",F?"#define CUBEUV_MAX_MIP "+F.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor||$.batchingColor?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==0?"#define TONE_MAPPING":"",$.toneMapping!==0?x0.tonemapping_pars_fragment:"",$.toneMapping!==0?KW("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",x0.colorspace_pars_fragment,HW("linearToOutputTexel",$.outputColorSpace),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(n9).join(`
`);if(W=bJ(W),W=zQ(W,$),W=MQ(W,$),H=bJ(H),H=zQ(H,$),H=MQ(H,$),W=LQ(W),H=LQ(H),$.isRawShaderMaterial!==!0)z=`#version 300 es
`,V=[N,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+V,E=["#define varying in",$.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let D=z+V+W,w=z+E+H,g=BQ(X,X.VERTEX_SHADER,D),k=BQ(X,X.FRAGMENT_SHADER,w);if(X.attachShader(O,g),X.attachShader(O,k),$.index0AttributeName!==void 0)X.bindAttribLocation(O,0,$.index0AttributeName);else if($.morphTargets===!0)X.bindAttribLocation(O,0,"position");X.linkProgram(O);function j(S){if(J.debug.checkShaderErrors){let u=X.getProgramInfoLog(O).trim(),n=X.getShaderInfoLog(g).trim(),m=X.getShaderInfoLog(k).trim(),y=!0,v=!0;if(X.getProgramParameter(O,X.LINK_STATUS)===!1)if(y=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(X,O,g,k);else{let i=RQ(X,g,"vertex"),b=RQ(X,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+X.getError()+" - VALIDATE_STATUS "+X.getProgramParameter(O,X.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+u+`
`+i+`
`+b)}else if(u!=="")console.warn("THREE.WebGLProgram: Program Info Log:",u);else if(n===""||m==="")v=!1;if(v)S.diagnostics={runnable:y,programLog:u,vertexShader:{log:n,prefix:V},fragmentShader:{log:m,prefix:E}}}X.deleteShader(g),X.deleteShader(k),h=new i9(X,O),L=UW(X,O)}let h;this.getUniforms=function(){if(h===void 0)j(this);return h};let L;this.getAttributes=function(){if(L===void 0)j(this);return L};let C=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(C===!1)C=X.getProgramParameter(O,ZW);return C},this.destroy=function(){Z.releaseStatesOfProgram(this),X.deleteProgram(O),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=XW++,this.cacheKey=Q,this.usedTimes=1,this.program=O,this.vertexShader=g,this.fragmentShader=k,this}var kW=0;class z${constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),X=this._getShaderStage($),Y=this._getShaderCacheForMaterial(J);if(Y.has(Z)===!1)Y.add(Z),Z.usedTimes++;if(Y.has(X)===!1)Y.add(X),X.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new M$(J),Q.set(J,$);return $}}class M${constructor(J){this.id=kW++,this.code=J,this.usedTimes=0}}function DW(J,Q,$,Z,X,Y,W){let H=new oJ,K=new z$,G=new Set,q=[],U=X.logarithmicDepthBuffer,F=X.vertexTextures,N=X.precision,B={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(L){if(G.add(L),L===0)return"uv";return`uv${L}`}function V(L,C,S,u,n){let m=u.fog,y=n.geometry,v=L.isMeshStandardMaterial?u.environment:null,i=(L.isMeshStandardMaterial?$:Q).get(L.envMap||v),b=!!i&&i.mapping===306?i.image.height:null,$0=B[L.type];if(L.precision!==null){if(N=X.getMaxPrecision(L.precision),N!==L.precision)console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",N,"instead.")}let W0=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,V0=W0!==void 0?W0.length:0,L0=0;if(y.morphAttributes.position!==void 0)L0=1;if(y.morphAttributes.normal!==void 0)L0=2;if(y.morphAttributes.color!==void 0)L0=3;let o,Z0,F0,z0;if($0){let b0=S6[$0];o=b0.vertexShader,Z0=b0.fragmentShader}else o=L.vertexShader,Z0=L.fragmentShader,K.update(L),F0=K.getVertexShaderID(L),z0=K.getFragmentShaderID(L);let U0=J.getRenderTarget(),T0=n.isInstancedMesh===!0,e0=n.isBatchedMesh===!0,h0=!!L.map,T=!!L.matcap,X6=!!i,g0=!!L.aoMap,Q6=!!L.lightMap,k0=!!L.bumpMap,l0=!!L.normalMap,S0=!!L.displacementMap,j0=!!L.emissiveMap,Z6=!!L.metalnessMap,I=!!L.roughnessMap,R=L.anisotropy>0,d=L.clearcoat>0,r=L.dispersion>0,t=L.iridescence>0,e=L.sheen>0,C0=L.transmission>0,H0=R&&!!L.anisotropyMap,K0=d&&!!L.clearcoatMap,v0=d&&!!L.clearcoatNormalMap,J0=d&&!!L.clearcoatRoughnessMap,B0=t&&!!L.iridescenceMap,u0=t&&!!L.iridescenceThicknessMap,w0=e&&!!L.sheenColorMap,G0=e&&!!L.sheenRoughnessMap,A0=!!L.specularMap,m0=!!L.specularColorMap,A=!!L.specularIntensityMap,_=C0&&!!L.transmissionMap,a=C0&&!!L.thicknessMap,c=!!L.gradientMap,s=!!L.alphaMap,Q0=L.alphaTest>0,O0=!!L.alphaHash,d0=!!L.extensions,Y6=0;if(L.toneMapped){if(U0===null||U0.isXRRenderTarget===!0)Y6=J.toneMapping}let K6={shaderID:$0,shaderType:L.type,shaderName:L.name,vertexShader:o,fragmentShader:Z0,defines:L.defines,customVertexShaderID:F0,customFragmentShaderID:z0,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:N,batching:e0,batchingColor:e0&&n._colorsTexture!==null,instancing:T0,instancingColor:T0&&n.instanceColor!==null,instancingMorph:T0&&n.morphTexture!==null,supportsVertexTextures:F,outputColorSpace:U0===null?J.outputColorSpace:U0.isXRRenderTarget===!0?U0.texture.colorSpace:"srgb-linear",alphaToCoverage:!!L.alphaToCoverage,map:h0,matcap:T,envMap:X6,envMapMode:X6&&i.mapping,envMapCubeUVHeight:b,aoMap:g0,lightMap:Q6,bumpMap:k0,normalMap:l0,displacementMap:F&&S0,emissiveMap:j0,normalMapObjectSpace:l0&&L.normalMapType===1,normalMapTangentSpace:l0&&L.normalMapType===0,metalnessMap:Z6,roughnessMap:I,anisotropy:R,anisotropyMap:H0,clearcoat:d,clearcoatMap:K0,clearcoatNormalMap:v0,clearcoatRoughnessMap:J0,dispersion:r,iridescence:t,iridescenceMap:B0,iridescenceThicknessMap:u0,sheen:e,sheenColorMap:w0,sheenRoughnessMap:G0,specularMap:A0,specularColorMap:m0,specularIntensityMap:A,transmission:C0,transmissionMap:_,thicknessMap:a,gradientMap:c,opaque:L.transparent===!1&&L.blending===1&&L.alphaToCoverage===!1,alphaMap:s,alphaTest:Q0,alphaHash:O0,combine:L.combine,mapUv:h0&&O(L.map.channel),aoMapUv:g0&&O(L.aoMap.channel),lightMapUv:Q6&&O(L.lightMap.channel),bumpMapUv:k0&&O(L.bumpMap.channel),normalMapUv:l0&&O(L.normalMap.channel),displacementMapUv:S0&&O(L.displacementMap.channel),emissiveMapUv:j0&&O(L.emissiveMap.channel),metalnessMapUv:Z6&&O(L.metalnessMap.channel),roughnessMapUv:I&&O(L.roughnessMap.channel),anisotropyMapUv:H0&&O(L.anisotropyMap.channel),clearcoatMapUv:K0&&O(L.clearcoatMap.channel),clearcoatNormalMapUv:v0&&O(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J0&&O(L.clearcoatRoughnessMap.channel),iridescenceMapUv:B0&&O(L.iridescenceMap.channel),iridescenceThicknessMapUv:u0&&O(L.iridescenceThicknessMap.channel),sheenColorMapUv:w0&&O(L.sheenColorMap.channel),sheenRoughnessMapUv:G0&&O(L.sheenRoughnessMap.channel),specularMapUv:A0&&O(L.specularMap.channel),specularColorMapUv:m0&&O(L.specularColorMap.channel),specularIntensityMapUv:A&&O(L.specularIntensityMap.channel),transmissionMapUv:_&&O(L.transmissionMap.channel),thicknessMapUv:a&&O(L.thicknessMap.channel),alphaMapUv:s&&O(L.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(l0||R),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:n.isPoints===!0&&!!y.attributes.uv&&(h0||s),fog:!!m,useFog:L.fog===!0,fogExp2:!!m&&m.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:U,skinning:n.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:V0,morphTextureStride:L0,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:L.dithering,shadowMapEnabled:J.shadowMap.enabled&&S.length>0,shadowMapType:J.shadowMap.type,toneMapping:Y6,decodeVideoTexture:h0&&L.map.isVideoTexture===!0&&s0.getTransfer(L.map.colorSpace)==="srgb",premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===2,flipSided:L.side===1,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:d0&&L.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(d0&&L.extensions.multiDraw===!0||e0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return K6.vertexUv1s=G.has(1),K6.vertexUv2s=G.has(2),K6.vertexUv3s=G.has(3),G.clear(),K6}function E(L){let C=[];if(L.shaderID)C.push(L.shaderID);else C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let S in L.defines)C.push(S),C.push(L.defines[S]);if(L.isRawShaderMaterial===!1)z(C,L),D(C,L),C.push(J.outputColorSpace);return C.push(L.customProgramCacheKey),C.join()}function z(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function D(L,C){if(H.disableAll(),C.supportsVertexTextures)H.enable(0);if(C.instancing)H.enable(1);if(C.instancingColor)H.enable(2);if(C.instancingMorph)H.enable(3);if(C.matcap)H.enable(4);if(C.envMap)H.enable(5);if(C.normalMapObjectSpace)H.enable(6);if(C.normalMapTangentSpace)H.enable(7);if(C.clearcoat)H.enable(8);if(C.iridescence)H.enable(9);if(C.alphaTest)H.enable(10);if(C.vertexColors)H.enable(11);if(C.vertexAlphas)H.enable(12);if(C.vertexUv1s)H.enable(13);if(C.vertexUv2s)H.enable(14);if(C.vertexUv3s)H.enable(15);if(C.vertexTangents)H.enable(16);if(C.anisotropy)H.enable(17);if(C.alphaHash)H.enable(18);if(C.batching)H.enable(19);if(C.dispersion)H.enable(20);if(C.batchingColor)H.enable(21);if(L.push(H.mask),H.disableAll(),C.fog)H.enable(0);if(C.useFog)H.enable(1);if(C.flatShading)H.enable(2);if(C.logarithmicDepthBuffer)H.enable(3);if(C.skinning)H.enable(4);if(C.morphTargets)H.enable(5);if(C.morphNormals)H.enable(6);if(C.morphColors)H.enable(7);if(C.premultipliedAlpha)H.enable(8);if(C.shadowMapEnabled)H.enable(9);if(C.doubleSided)H.enable(10);if(C.flipSided)H.enable(11);if(C.useDepthPacking)H.enable(12);if(C.dithering)H.enable(13);if(C.transmission)H.enable(14);if(C.sheen)H.enable(15);if(C.opaque)H.enable(16);if(C.pointsUvs)H.enable(17);if(C.decodeVideoTexture)H.enable(18);if(C.alphaToCoverage)H.enable(19);L.push(H.mask)}function w(L){let C=B[L.type],S;if(C){let u=S6[C];S=l7.clone(u.uniforms)}else S=L.uniforms;return S}function g(L,C){let S;for(let u=0,n=q.length;u<n;u++){let m=q[u];if(m.cacheKey===C){S=m,++S.usedTimes;break}}if(S===void 0)S=new CW(J,C,L,Y),q.push(S);return S}function k(L){if(--L.usedTimes===0){let C=q.indexOf(L);q[C]=q[q.length-1],q.pop(),L.destroy()}}function j(L){K.remove(L)}function h(){K.dispose()}return{getParameters:V,getProgramCacheKey:E,getUniforms:w,acquireProgram:g,releaseProgram:k,releaseShaderCache:j,programs:q,dispose:h}}function _W(){let J=new WeakMap;function Q(Y){let W=J.get(Y);if(W===void 0)W={},J.set(Y,W);return W}function $(Y){J.delete(Y)}function Z(Y,W,H){J.get(Y)[W]=H}function X(){J=new WeakMap}return{get:Q,remove:$,update:Z,dispose:X}}function wW(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function kQ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function DQ(){let J=[],Q=0,$=[],Z=[],X=[];function Y(){Q=0,$.length=0,Z.length=0,X.length=0}function W(U,F,N,B,O,V){let E=J[Q];if(E===void 0)E={id:U.id,object:U,geometry:F,material:N,groupOrder:B,renderOrder:U.renderOrder,z:O,group:V},J[Q]=E;else E.id=U.id,E.object=U,E.geometry=F,E.material=N,E.groupOrder=B,E.renderOrder=U.renderOrder,E.z=O,E.group=V;return Q++,E}function H(U,F,N,B,O,V){let E=W(U,F,N,B,O,V);if(N.transmission>0)Z.push(E);else if(N.transparent===!0)X.push(E);else $.push(E)}function K(U,F,N,B,O,V){let E=W(U,F,N,B,O,V);if(N.transmission>0)Z.unshift(E);else if(N.transparent===!0)X.unshift(E);else $.unshift(E)}function G(U,F){if($.length>1)$.sort(U||wW);if(Z.length>1)Z.sort(F||kQ);if(X.length>1)X.sort(F||kQ)}function q(){for(let U=Q,F=J.length;U<F;U++){let N=J[U];if(N.id===null)break;N.id=null,N.object=null,N.geometry=null,N.material=null,N.group=null}}return{opaque:$,transmissive:Z,transparent:X,init:Y,push:H,unshift:K,finish:q,sort:G}}function IW(){let J=new WeakMap;function Q(Z,X){let Y=J.get(Z),W;if(Y===void 0)W=new DQ,J.set(Z,[W]);else if(X>=Y.length)W=new DQ,Y.push(W);else W=Y[X];return W}function $(){J=new WeakMap}return{get:Q,dispose:$}}function AW(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new P,color:new _0};break;case"SpotLight":$={position:new P,direction:new P,color:new _0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new P,color:new _0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new P,skyColor:new _0,groundColor:new _0};break;case"RectAreaLight":$={color:new _0,position:new P,halfWidth:new P,halfHeight:new P};break}return J[Q.id]=$,$}}}function PW(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var TW=0;function SW(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function jW(J){let Q=new AW,$=PW(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let G=0;G<9;G++)Z.probe.push(new P);let X=new P,Y=new y0,W=new y0;function H(G){let q=0,U=0,F=0;for(let L=0;L<9;L++)Z.probe[L].set(0,0,0);let N=0,B=0,O=0,V=0,E=0,z=0,D=0,w=0,g=0,k=0,j=0;G.sort(SW);for(let L=0,C=G.length;L<C;L++){let S=G[L],u=S.color,n=S.intensity,m=S.distance,y=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)q+=u.r*n,U+=u.g*n,F+=u.b*n;else if(S.isLightProbe){for(let v=0;v<9;v++)Z.probe[v].addScaledVector(S.sh.coefficients[v],n);j++}else if(S.isDirectionalLight){let v=Q.get(S);if(v.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let i=S.shadow,b=$.get(S);b.shadowIntensity=i.intensity,b.shadowBias=i.bias,b.shadowNormalBias=i.normalBias,b.shadowRadius=i.radius,b.shadowMapSize=i.mapSize,Z.directionalShadow[N]=b,Z.directionalShadowMap[N]=y,Z.directionalShadowMatrix[N]=S.shadow.matrix,z++}Z.directional[N]=v,N++}else if(S.isSpotLight){let v=Q.get(S);v.position.setFromMatrixPosition(S.matrixWorld),v.color.copy(u).multiplyScalar(n),v.distance=m,v.coneCos=Math.cos(S.angle),v.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),v.decay=S.decay,Z.spot[O]=v;let i=S.shadow;if(S.map){if(Z.spotLightMap[g]=S.map,g++,i.updateMatrices(S),S.castShadow)k++}if(Z.spotLightMatrix[O]=i.matrix,S.castShadow){let b=$.get(S);b.shadowIntensity=i.intensity,b.shadowBias=i.bias,b.shadowNormalBias=i.normalBias,b.shadowRadius=i.radius,b.shadowMapSize=i.mapSize,Z.spotShadow[O]=b,Z.spotShadowMap[O]=y,w++}O++}else if(S.isRectAreaLight){let v=Q.get(S);v.color.copy(u).multiplyScalar(n),v.halfWidth.set(S.width*0.5,0,0),v.halfHeight.set(0,S.height*0.5,0),Z.rectArea[V]=v,V++}else if(S.isPointLight){let v=Q.get(S);if(v.color.copy(S.color).multiplyScalar(S.intensity),v.distance=S.distance,v.decay=S.decay,S.castShadow){let i=S.shadow,b=$.get(S);b.shadowIntensity=i.intensity,b.shadowBias=i.bias,b.shadowNormalBias=i.normalBias,b.shadowRadius=i.radius,b.shadowMapSize=i.mapSize,b.shadowCameraNear=i.camera.near,b.shadowCameraFar=i.camera.far,Z.pointShadow[B]=b,Z.pointShadowMap[B]=y,Z.pointShadowMatrix[B]=S.shadow.matrix,D++}Z.point[B]=v,B++}else if(S.isHemisphereLight){let v=Q.get(S);v.skyColor.copy(S.color).multiplyScalar(n),v.groundColor.copy(S.groundColor).multiplyScalar(n),Z.hemi[E]=v,E++}}if(V>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=Y0.LTC_FLOAT_1,Z.rectAreaLTC2=Y0.LTC_FLOAT_2;else Z.rectAreaLTC1=Y0.LTC_HALF_1,Z.rectAreaLTC2=Y0.LTC_HALF_2;Z.ambient[0]=q,Z.ambient[1]=U,Z.ambient[2]=F;let h=Z.hash;if(h.directionalLength!==N||h.pointLength!==B||h.spotLength!==O||h.rectAreaLength!==V||h.hemiLength!==E||h.numDirectionalShadows!==z||h.numPointShadows!==D||h.numSpotShadows!==w||h.numSpotMaps!==g||h.numLightProbes!==j)Z.directional.length=N,Z.spot.length=O,Z.rectArea.length=V,Z.point.length=B,Z.hemi.length=E,Z.directionalShadow.length=z,Z.directionalShadowMap.length=z,Z.pointShadow.length=D,Z.pointShadowMap.length=D,Z.spotShadow.length=w,Z.spotShadowMap.length=w,Z.directionalShadowMatrix.length=z,Z.pointShadowMatrix.length=D,Z.spotLightMatrix.length=w+g-k,Z.spotLightMap.length=g,Z.numSpotLightShadowsWithMaps=k,Z.numLightProbes=j,h.directionalLength=N,h.pointLength=B,h.spotLength=O,h.rectAreaLength=V,h.hemiLength=E,h.numDirectionalShadows=z,h.numPointShadows=D,h.numSpotShadows=w,h.numSpotMaps=g,h.numLightProbes=j,Z.version=TW++}function K(G,q){let U=0,F=0,N=0,B=0,O=0,V=q.matrixWorldInverse;for(let E=0,z=G.length;E<z;E++){let D=G[E];if(D.isDirectionalLight){let w=Z.directional[U];w.direction.setFromMatrixPosition(D.matrixWorld),X.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(X),w.direction.transformDirection(V),U++}else if(D.isSpotLight){let w=Z.spot[N];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(V),w.direction.setFromMatrixPosition(D.matrixWorld),X.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(X),w.direction.transformDirection(V),N++}else if(D.isRectAreaLight){let w=Z.rectArea[B];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(V),W.identity(),Y.copy(D.matrixWorld),Y.premultiply(V),W.extractRotation(Y),w.halfWidth.set(D.width*0.5,0,0),w.halfHeight.set(0,D.height*0.5,0),w.halfWidth.applyMatrix4(W),w.halfHeight.applyMatrix4(W),B++}else if(D.isPointLight){let w=Z.point[F];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(V),F++}else if(D.isHemisphereLight){let w=Z.hemi[O];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(V),O++}}}return{setup:H,setupView:K,state:Z}}function _Q(J){let Q=new jW(J),$=[],Z=[];function X(q){G.camera=q,$.length=0,Z.length=0}function Y(q){$.push(q)}function W(q){Z.push(q)}function H(){Q.setup($)}function K(q){Q.setupView($,q)}let G={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:X,state:G,setupLights:H,setupLightsView:K,pushLight:Y,pushShadow:W}}function yW(J){let Q=new WeakMap;function $(X,Y=0){let W=Q.get(X),H;if(W===void 0)H=new _Q(J),Q.set(X,[H]);else if(Y>=W.length)H=new _Q(J),W.push(H);else H=W[Y];return H}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}class L$ extends n6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class C$ extends n6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}var fW=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vW=`uniform sampler2D shadow_pass;
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
}`;function xW(J,Q,$){let Z=new d7,X=new R0,Y=new R0,W=new c0,H=new L$({depthPacking:3201}),K=new C$,G={},q=$.maxTextureSize,U={[0]:1,[1]:0,[2]:2},F=new y6({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R0},radius:{value:4}},vertexShader:fW,fragmentShader:vW}),N=F.clone();N.defines.HORIZONTAL_PASS=1;let B=new f6;B.setAttribute("position",new R6(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let O=new n0(B,F),V=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let E=this.type;this.render=function(k,j,h){if(V.enabled===!1)return;if(V.autoUpdate===!1&&V.needsUpdate===!1)return;if(k.length===0)return;let L=J.getRenderTarget(),C=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),u=J.state;u.setBlending(0),u.buffers.color.setClear(1,1,1,1),u.buffers.depth.setTest(!0),u.setScissorTest(!1);let n=E!==3&&this.type===3,m=E===3&&this.type!==3;for(let y=0,v=k.length;y<v;y++){let i=k[y],b=i.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",i,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;X.copy(b.mapSize);let $0=b.getFrameExtents();if(X.multiply($0),Y.copy(b.mapSize),X.x>q||X.y>q){if(X.x>q)Y.x=Math.floor(q/$0.x),X.x=Y.x*$0.x,b.mapSize.x=Y.x;if(X.y>q)Y.y=Math.floor(q/$0.y),X.y=Y.y*$0.y,b.mapSize.y=Y.y}if(b.map===null||n===!0||m===!0){let V0=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(b.map!==null)b.map.dispose();b.map=new c6(X.x,X.y,V0),b.map.texture.name=i.name+".shadowMap",b.camera.updateProjectionMatrix()}J.setRenderTarget(b.map),J.clear();let W0=b.getViewportCount();for(let V0=0;V0<W0;V0++){let L0=b.getViewport(V0);W.set(Y.x*L0.x,Y.y*L0.y,Y.x*L0.z,Y.y*L0.w),u.viewport(W),b.updateMatrices(i,V0),Z=b.getFrustum(),w(j,h,b.camera,i,this.type)}if(b.isPointLightShadow!==!0&&this.type===3)z(b,h);b.needsUpdate=!1}E=this.type,V.needsUpdate=!1,J.setRenderTarget(L,C,S)};function z(k,j){let h=Q.update(O);if(F.defines.VSM_SAMPLES!==k.blurSamples)F.defines.VSM_SAMPLES=k.blurSamples,N.defines.VSM_SAMPLES=k.blurSamples,F.needsUpdate=!0,N.needsUpdate=!0;if(k.mapPass===null)k.mapPass=new c6(X.x,X.y);F.uniforms.shadow_pass.value=k.map.texture,F.uniforms.resolution.value=k.mapSize,F.uniforms.radius.value=k.radius,J.setRenderTarget(k.mapPass),J.clear(),J.renderBufferDirect(j,null,h,F,O,null),N.uniforms.shadow_pass.value=k.mapPass.texture,N.uniforms.resolution.value=k.mapSize,N.uniforms.radius.value=k.radius,J.setRenderTarget(k.map),J.clear(),J.renderBufferDirect(j,null,h,N,O,null)}function D(k,j,h,L){let C=null,S=h.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(S!==void 0)C=S;else if(C=h.isPointLight===!0?K:H,J.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0){let u=C.uuid,n=j.uuid,m=G[u];if(m===void 0)m={},G[u]=m;let y=m[n];if(y===void 0)y=C.clone(),m[n]=y,j.addEventListener("dispose",g);C=y}if(C.visible=j.visible,C.wireframe=j.wireframe,L===3)C.side=j.shadowSide!==null?j.shadowSide:j.side;else C.side=j.shadowSide!==null?j.shadowSide:U[j.side];if(C.alphaMap=j.alphaMap,C.alphaTest=j.alphaTest,C.map=j.map,C.clipShadows=j.clipShadows,C.clippingPlanes=j.clippingPlanes,C.clipIntersection=j.clipIntersection,C.displacementMap=j.displacementMap,C.displacementScale=j.displacementScale,C.displacementBias=j.displacementBias,C.wireframeLinewidth=j.wireframeLinewidth,C.linewidth=j.linewidth,h.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let u=J.properties.get(C);u.light=h}return C}function w(k,j,h,L,C){if(k.visible===!1)return;if(k.layers.test(j.layers)&&(k.isMesh||k.isLine||k.isPoints)){if((k.castShadow||k.receiveShadow&&C===3)&&(!k.frustumCulled||Z.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse,k.matrixWorld);let n=Q.update(k),m=k.material;if(Array.isArray(m)){let y=n.groups;for(let v=0,i=y.length;v<i;v++){let b=y[v],$0=m[b.materialIndex];if($0&&$0.visible){let W0=D(k,$0,L,C);k.onBeforeShadow(J,k,j,h,n,W0,b),J.renderBufferDirect(h,null,n,W0,k,b),k.onAfterShadow(J,k,j,h,n,W0,b)}}}else if(m.visible){let y=D(k,m,L,C);k.onBeforeShadow(J,k,j,h,n,y,null),J.renderBufferDirect(h,null,n,y,k,null),k.onAfterShadow(J,k,j,h,n,y,null)}}}let u=k.children;for(let n=0,m=u.length;n<m;n++)w(u[n],j,h,L,C)}function g(k){k.target.removeEventListener("dispose",g);for(let h in G){let L=G[h],C=k.target.uuid;if(C in L)L[C].dispose(),delete L[C]}}}function hW(J){function Q(){let _=!1,a=new c0,c=null,s=new c0(0,0,0,0);return{setMask:function(Q0){if(c!==Q0&&!_)J.colorMask(Q0,Q0,Q0,Q0),c=Q0},setLocked:function(Q0){_=Q0},setClear:function(Q0,O0,d0,Y6,K6){if(K6===!0)Q0*=Y6,O0*=Y6,d0*=Y6;if(a.set(Q0,O0,d0,Y6),s.equals(a)===!1)J.clearColor(Q0,O0,d0,Y6),s.copy(a)},reset:function(){_=!1,c=null,s.set(-1,0,0,0)}}}function $(){let _=!1,a=null,c=null,s=null;return{setTest:function(Q0){if(Q0)z0(J.DEPTH_TEST);else U0(J.DEPTH_TEST)},setMask:function(Q0){if(a!==Q0&&!_)J.depthMask(Q0),a=Q0},setFunc:function(Q0){if(c!==Q0){switch(Q0){case 0:J.depthFunc(J.NEVER);break;case 1:J.depthFunc(J.ALWAYS);break;case 2:J.depthFunc(J.LESS);break;case 3:J.depthFunc(J.LEQUAL);break;case 4:J.depthFunc(J.EQUAL);break;case 5:J.depthFunc(J.GEQUAL);break;case 6:J.depthFunc(J.GREATER);break;case 7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}c=Q0}},setLocked:function(Q0){_=Q0},setClear:function(Q0){if(s!==Q0)J.clearDepth(Q0),s=Q0},reset:function(){_=!1,a=null,c=null,s=null}}}function Z(){let _=!1,a=null,c=null,s=null,Q0=null,O0=null,d0=null,Y6=null,K6=null;return{setTest:function(b0){if(!_)if(b0)z0(J.STENCIL_TEST);else U0(J.STENCIL_TEST)},setMask:function(b0){if(a!==b0&&!_)J.stencilMask(b0),a=b0},setFunc:function(b0,G6,D6){if(c!==b0||s!==G6||Q0!==D6)J.stencilFunc(b0,G6,D6),c=b0,s=G6,Q0=D6},setOp:function(b0,G6,D6){if(O0!==b0||d0!==G6||Y6!==D6)J.stencilOp(b0,G6,D6),O0=b0,d0=G6,Y6=D6},setLocked:function(b0){_=b0},setClear:function(b0){if(K6!==b0)J.clearStencil(b0),K6=b0},reset:function(){_=!1,a=null,c=null,s=null,Q0=null,O0=null,d0=null,Y6=null,K6=null}}}let X=new Q,Y=new $,W=new Z,H=new WeakMap,K=new WeakMap,G={},q={},U=new WeakMap,F=[],N=null,B=!1,O=null,V=null,E=null,z=null,D=null,w=null,g=null,k=new _0(0,0,0),j=0,h=!1,L=null,C=null,S=null,u=null,n=null,m=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),y=!1,v=0,i=J.getParameter(J.VERSION);if(i.indexOf("WebGL")!==-1)v=parseFloat(/^WebGL (\d)/.exec(i)[1]),y=v>=1;else if(i.indexOf("OpenGL ES")!==-1)v=parseFloat(/^OpenGL ES (\d)/.exec(i)[1]),y=v>=2;let b=null,$0={},W0=J.getParameter(J.SCISSOR_BOX),V0=J.getParameter(J.VIEWPORT),L0=new c0().fromArray(W0),o=new c0().fromArray(V0);function Z0(_,a,c,s){let Q0=new Uint8Array(4),O0=J.createTexture();J.bindTexture(_,O0),J.texParameteri(_,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(_,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let d0=0;d0<c;d0++)if(_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texImage3D(a,0,J.RGBA,1,1,s,0,J.RGBA,J.UNSIGNED_BYTE,Q0);else J.texImage2D(a+d0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,Q0);return O0}let F0={};F0[J.TEXTURE_2D]=Z0(J.TEXTURE_2D,J.TEXTURE_2D,1),F0[J.TEXTURE_CUBE_MAP]=Z0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),F0[J.TEXTURE_2D_ARRAY]=Z0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),F0[J.TEXTURE_3D]=Z0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),X.setClear(0,0,0,1),Y.setClear(1),W.setClear(0),z0(J.DEPTH_TEST),Y.setFunc(3),k0(!1),l0(1),z0(J.CULL_FACE),g0(0);function z0(_){if(G[_]!==!0)J.enable(_),G[_]=!0}function U0(_){if(G[_]!==!1)J.disable(_),G[_]=!1}function T0(_,a){if(q[_]!==a){if(J.bindFramebuffer(_,a),q[_]=a,_===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=a;if(_===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=a;return!0}return!1}function e0(_,a){let c=F,s=!1;if(_){if(c=U.get(a),c===void 0)c=[],U.set(a,c);let Q0=_.textures;if(c.length!==Q0.length||c[0]!==J.COLOR_ATTACHMENT0){for(let O0=0,d0=Q0.length;O0<d0;O0++)c[O0]=J.COLOR_ATTACHMENT0+O0;c.length=Q0.length,s=!0}}else if(c[0]!==J.BACK)c[0]=J.BACK,s=!0;if(s)J.drawBuffers(c)}function h0(_){if(N!==_)return J.useProgram(_),N=_,!0;return!1}let T={[100]:J.FUNC_ADD,[101]:J.FUNC_SUBTRACT,[102]:J.FUNC_REVERSE_SUBTRACT};T[103]=J.MIN,T[104]=J.MAX;let X6={[200]:J.ZERO,[201]:J.ONE,[202]:J.SRC_COLOR,[204]:J.SRC_ALPHA,[210]:J.SRC_ALPHA_SATURATE,[208]:J.DST_COLOR,[206]:J.DST_ALPHA,[203]:J.ONE_MINUS_SRC_COLOR,[205]:J.ONE_MINUS_SRC_ALPHA,[209]:J.ONE_MINUS_DST_COLOR,[207]:J.ONE_MINUS_DST_ALPHA,[211]:J.CONSTANT_COLOR,[212]:J.ONE_MINUS_CONSTANT_COLOR,[213]:J.CONSTANT_ALPHA,[214]:J.ONE_MINUS_CONSTANT_ALPHA};function g0(_,a,c,s,Q0,O0,d0,Y6,K6,b0){if(_===0){if(B===!0)U0(J.BLEND),B=!1;return}if(B===!1)z0(J.BLEND),B=!0;if(_!==5){if(_!==O||b0!==h){if(V!==100||D!==100)J.blendEquation(J.FUNC_ADD),V=100,D=100;if(b0)switch(_){case 1:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.ONE,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFuncSeparate(J.ZERO,J.SRC_COLOR,J.ZERO,J.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case 1:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.SRC_ALPHA,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFunc(J.ZERO,J.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}E=null,z=null,w=null,g=null,k.set(0,0,0),j=0,O=_,h=b0}return}if(Q0=Q0||a,O0=O0||c,d0=d0||s,a!==V||Q0!==D)J.blendEquationSeparate(T[a],T[Q0]),V=a,D=Q0;if(c!==E||s!==z||O0!==w||d0!==g)J.blendFuncSeparate(X6[c],X6[s],X6[O0],X6[d0]),E=c,z=s,w=O0,g=d0;if(Y6.equals(k)===!1||K6!==j)J.blendColor(Y6.r,Y6.g,Y6.b,K6),k.copy(Y6),j=K6;O=_,h=!1}function Q6(_,a){_.side===2?U0(J.CULL_FACE):z0(J.CULL_FACE);let c=_.side===1;if(a)c=!c;k0(c),_.blending===1&&_.transparent===!1?g0(0):g0(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),Y.setFunc(_.depthFunc),Y.setTest(_.depthTest),Y.setMask(_.depthWrite),X.setMask(_.colorWrite);let s=_.stencilWrite;if(W.setTest(s),s)W.setMask(_.stencilWriteMask),W.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),W.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass);j0(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?z0(J.SAMPLE_ALPHA_TO_COVERAGE):U0(J.SAMPLE_ALPHA_TO_COVERAGE)}function k0(_){if(L!==_){if(_)J.frontFace(J.CW);else J.frontFace(J.CCW);L=_}}function l0(_){if(_!==0){if(z0(J.CULL_FACE),_!==C)if(_===1)J.cullFace(J.BACK);else if(_===2)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else U0(J.CULL_FACE);C=_}function S0(_){if(_!==S){if(y)J.lineWidth(_);S=_}}function j0(_,a,c){if(_){if(z0(J.POLYGON_OFFSET_FILL),u!==a||n!==c)J.polygonOffset(a,c),u=a,n=c}else U0(J.POLYGON_OFFSET_FILL)}function Z6(_){if(_)z0(J.SCISSOR_TEST);else U0(J.SCISSOR_TEST)}function I(_){if(_===void 0)_=J.TEXTURE0+m-1;if(b!==_)J.activeTexture(_),b=_}function R(_,a,c){if(c===void 0)if(b===null)c=J.TEXTURE0+m-1;else c=b;let s=$0[c];if(s===void 0)s={type:void 0,texture:void 0},$0[c]=s;if(s.type!==_||s.texture!==a){if(b!==c)J.activeTexture(c),b=c;J.bindTexture(_,a||F0[_]),s.type=_,s.texture=a}}function d(){let _=$0[b];if(_!==void 0&&_.type!==void 0)J.bindTexture(_.type,null),_.type=void 0,_.texture=void 0}function r(){try{J.compressedTexImage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function t(){try{J.compressedTexImage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function e(){try{J.texSubImage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function C0(){try{J.texSubImage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function H0(){try{J.compressedTexSubImage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function K0(){try{J.compressedTexSubImage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function v0(){try{J.texStorage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function J0(){try{J.texStorage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function B0(){try{J.texImage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function u0(){try{J.texImage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function w0(_){if(L0.equals(_)===!1)J.scissor(_.x,_.y,_.z,_.w),L0.copy(_)}function G0(_){if(o.equals(_)===!1)J.viewport(_.x,_.y,_.z,_.w),o.copy(_)}function A0(_,a){let c=K.get(a);if(c===void 0)c=new WeakMap,K.set(a,c);let s=c.get(_);if(s===void 0)s=J.getUniformBlockIndex(a,_.name),c.set(_,s)}function m0(_,a){let s=K.get(a).get(_);if(H.get(a)!==s)J.uniformBlockBinding(a,s,_.__bindingPointIndex),H.set(a,s)}function A(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},b=null,$0={},q={},U=new WeakMap,F=[],N=null,B=!1,O=null,V=null,E=null,z=null,D=null,w=null,g=null,k=new _0(0,0,0),j=0,h=!1,L=null,C=null,S=null,u=null,n=null,L0.set(0,0,J.canvas.width,J.canvas.height),o.set(0,0,J.canvas.width,J.canvas.height),X.reset(),Y.reset(),W.reset()}return{buffers:{color:X,depth:Y,stencil:W},enable:z0,disable:U0,bindFramebuffer:T0,drawBuffers:e0,useProgram:h0,setBlending:g0,setMaterial:Q6,setFlipSided:k0,setCullFace:l0,setLineWidth:S0,setPolygonOffset:j0,setScissorTest:Z6,activeTexture:I,bindTexture:R,unbindTexture:d,compressedTexImage2D:r,compressedTexImage3D:t,texImage2D:B0,texImage3D:u0,updateUBOMapping:A0,uniformBlockBinding:m0,texStorage2D:v0,texStorage3D:J0,texSubImage2D:e,texSubImage3D:C0,compressedTexSubImage2D:H0,compressedTexSubImage3D:K0,scissor:w0,viewport:G0,reset:A}}function wQ(J,Q,$,Z){let X=bW(Z);switch($){case 1021:return J*Q;case 1024:return J*Q;case 1025:return J*Q*2;case 1028:return J*Q/X.components*X.byteLength;case 1029:return J*Q/X.components*X.byteLength;case 1030:return J*Q*2/X.components*X.byteLength;case 1031:return J*Q*2/X.components*X.byteLength;case 1022:return J*Q*3/X.components*X.byteLength;case 1023:return J*Q*4/X.components*X.byteLength;case 1033:return J*Q*4/X.components*X.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function bW(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}function gW(J,Q,$,Z,X,Y,W){let H=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),G=new R0,q=new WeakMap,U,F=new WeakMap,N=!1;try{N=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function B(I,R){return N?new OffscreenCanvas(I,R):a9("canvas")}function O(I,R,d){let r=1,t=Z6(I);if(t.width>d||t.height>d)r=d/Math.max(t.width,t.height);if(r<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let e=Math.floor(r*t.width),C0=Math.floor(r*t.height);if(U===void 0)U=B(e,C0);let H0=R?B(e,C0):U;return H0.width=e,H0.height=C0,H0.getContext("2d").drawImage(I,0,0,e,C0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+e+"x"+C0+")."),H0}else{if("data"in I)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+").");return I}return I}function V(I){return I.generateMipmaps&&I.minFilter!==1003&&I.minFilter!==1006}function E(I){J.generateMipmap(I)}function z(I,R,d,r,t=!1){if(I!==null){if(J[I]!==void 0)return J[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let e=R;if(R===J.RED){if(d===J.FLOAT)e=J.R32F;if(d===J.HALF_FLOAT)e=J.R16F;if(d===J.UNSIGNED_BYTE)e=J.R8}if(R===J.RED_INTEGER){if(d===J.UNSIGNED_BYTE)e=J.R8UI;if(d===J.UNSIGNED_SHORT)e=J.R16UI;if(d===J.UNSIGNED_INT)e=J.R32UI;if(d===J.BYTE)e=J.R8I;if(d===J.SHORT)e=J.R16I;if(d===J.INT)e=J.R32I}if(R===J.RG){if(d===J.FLOAT)e=J.RG32F;if(d===J.HALF_FLOAT)e=J.RG16F;if(d===J.UNSIGNED_BYTE)e=J.RG8}if(R===J.RG_INTEGER){if(d===J.UNSIGNED_BYTE)e=J.RG8UI;if(d===J.UNSIGNED_SHORT)e=J.RG16UI;if(d===J.UNSIGNED_INT)e=J.RG32UI;if(d===J.BYTE)e=J.RG8I;if(d===J.SHORT)e=J.RG16I;if(d===J.INT)e=J.RG32I}if(R===J.RGB){if(d===J.UNSIGNED_INT_5_9_9_9_REV)e=J.RGB9_E5}if(R===J.RGBA){let C0=t?"linear":s0.getTransfer(r);if(d===J.FLOAT)e=J.RGBA32F;if(d===J.HALF_FLOAT)e=J.RGBA16F;if(d===J.UNSIGNED_BYTE)e=C0==="srgb"?J.SRGB8_ALPHA8:J.RGBA8;if(d===J.UNSIGNED_SHORT_4_4_4_4)e=J.RGBA4;if(d===J.UNSIGNED_SHORT_5_5_5_1)e=J.RGB5_A1}if(e===J.R16F||e===J.R32F||e===J.RG16F||e===J.RG32F||e===J.RGBA16F||e===J.RGBA32F)Q.get("EXT_color_buffer_float");return e}function D(I,R){let d;if(I){if(R===null||R===1014||R===1020)d=J.DEPTH24_STENCIL8;else if(R===1015)d=J.DEPTH32F_STENCIL8;else if(R===1012)d=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===1014||R===1020)d=J.DEPTH_COMPONENT24;else if(R===1015)d=J.DEPTH_COMPONENT32F;else if(R===1012)d=J.DEPTH_COMPONENT16;return d}function w(I,R){if(V(I)===!0||I.isFramebufferTexture&&I.minFilter!==1003&&I.minFilter!==1006)return Math.log2(Math.max(R.width,R.height))+1;else if(I.mipmaps!==void 0&&I.mipmaps.length>0)return I.mipmaps.length;else if(I.isCompressedTexture&&Array.isArray(I.image))return R.mipmaps.length;else return 1}function g(I){let R=I.target;if(R.removeEventListener("dispose",g),j(R),R.isVideoTexture)q.delete(R)}function k(I){let R=I.target;R.removeEventListener("dispose",k),L(R)}function j(I){let R=Z.get(I);if(R.__webglInit===void 0)return;let d=I.source,r=F.get(d);if(r){let t=r[R.__cacheKey];if(t.usedTimes--,t.usedTimes===0)h(I);if(Object.keys(r).length===0)F.delete(d)}Z.remove(I)}function h(I){let R=Z.get(I);J.deleteTexture(R.__webglTexture);let d=I.source,r=F.get(d);delete r[R.__cacheKey],W.memory.textures--}function L(I){let R=Z.get(I);if(I.depthTexture)I.depthTexture.dispose();if(I.isWebGLCubeRenderTarget)for(let r=0;r<6;r++){if(Array.isArray(R.__webglFramebuffer[r]))for(let t=0;t<R.__webglFramebuffer[r].length;t++)J.deleteFramebuffer(R.__webglFramebuffer[r][t]);else J.deleteFramebuffer(R.__webglFramebuffer[r]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[r])}else{if(Array.isArray(R.__webglFramebuffer))for(let r=0;r<R.__webglFramebuffer.length;r++)J.deleteFramebuffer(R.__webglFramebuffer[r]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let r=0;r<R.__webglColorRenderbuffer.length;r++)if(R.__webglColorRenderbuffer[r])J.deleteRenderbuffer(R.__webglColorRenderbuffer[r])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let d=I.textures;for(let r=0,t=d.length;r<t;r++){let e=Z.get(d[r]);if(e.__webglTexture)J.deleteTexture(e.__webglTexture),W.memory.textures--;Z.remove(d[r])}Z.remove(I)}let C=0;function S(){C=0}function u(){let I=C;if(I>=X.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+X.maxTextures);return C+=1,I}function n(I){let R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function m(I,R){let d=Z.get(I);if(I.isVideoTexture)S0(I);if(I.isRenderTargetTexture===!1&&I.version>0&&d.__version!==I.version){let r=I.image;if(r===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(r.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{o(d,I,R);return}}$.bindTexture(J.TEXTURE_2D,d.__webglTexture,J.TEXTURE0+R)}function y(I,R){let d=Z.get(I);if(I.version>0&&d.__version!==I.version){o(d,I,R);return}$.bindTexture(J.TEXTURE_2D_ARRAY,d.__webglTexture,J.TEXTURE0+R)}function v(I,R){let d=Z.get(I);if(I.version>0&&d.__version!==I.version){o(d,I,R);return}$.bindTexture(J.TEXTURE_3D,d.__webglTexture,J.TEXTURE0+R)}function i(I,R){let d=Z.get(I);if(I.version>0&&d.__version!==I.version){Z0(d,I,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,d.__webglTexture,J.TEXTURE0+R)}let b={[1000]:J.REPEAT,[1001]:J.CLAMP_TO_EDGE,[1002]:J.MIRRORED_REPEAT},$0={[1003]:J.NEAREST,[1004]:J.NEAREST_MIPMAP_NEAREST,[1005]:J.NEAREST_MIPMAP_LINEAR,[1006]:J.LINEAR,[1007]:J.LINEAR_MIPMAP_NEAREST,[1008]:J.LINEAR_MIPMAP_LINEAR},W0={[512]:J.NEVER,[519]:J.ALWAYS,[513]:J.LESS,[515]:J.LEQUAL,[514]:J.EQUAL,[518]:J.GEQUAL,[516]:J.GREATER,[517]:J.NOTEQUAL};function V0(I,R){if(R.type===1015&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===1006||R.magFilter===1007||R.magFilter===1005||R.magFilter===1008||R.minFilter===1006||R.minFilter===1007||R.minFilter===1005||R.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(I,J.TEXTURE_WRAP_S,b[R.wrapS]),J.texParameteri(I,J.TEXTURE_WRAP_T,b[R.wrapT]),I===J.TEXTURE_3D||I===J.TEXTURE_2D_ARRAY)J.texParameteri(I,J.TEXTURE_WRAP_R,b[R.wrapR]);if(J.texParameteri(I,J.TEXTURE_MAG_FILTER,$0[R.magFilter]),J.texParameteri(I,J.TEXTURE_MIN_FILTER,$0[R.minFilter]),R.compareFunction)J.texParameteri(I,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(I,J.TEXTURE_COMPARE_FUNC,W0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===1003)return;if(R.minFilter!==1005&&R.minFilter!==1008)return;if(R.type===1015&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||Z.get(R).__currentAnisotropy){let d=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(I,d.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,X.getMaxAnisotropy())),Z.get(R).__currentAnisotropy=R.anisotropy}}}function L0(I,R){let d=!1;if(I.__webglInit===void 0)I.__webglInit=!0,R.addEventListener("dispose",g);let r=R.source,t=F.get(r);if(t===void 0)t={},F.set(r,t);let e=n(R);if(e!==I.__cacheKey){if(t[e]===void 0)t[e]={texture:J.createTexture(),usedTimes:0},W.memory.textures++,d=!0;t[e].usedTimes++;let C0=t[I.__cacheKey];if(C0!==void 0){if(t[I.__cacheKey].usedTimes--,C0.usedTimes===0)h(R)}I.__cacheKey=e,I.__webglTexture=t[e].texture}return d}function o(I,R,d){let r=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)r=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)r=J.TEXTURE_3D;let t=L0(I,R),e=R.source;$.bindTexture(r,I.__webglTexture,J.TEXTURE0+d);let C0=Z.get(e);if(e.version!==C0.__version||t===!0){$.activeTexture(J.TEXTURE0+d);let H0=s0.getPrimaries(s0.workingColorSpace),K0=R.colorSpace===""?null:s0.getPrimaries(R.colorSpace),v0=R.colorSpace===""||H0===K0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,v0);let J0=O(R.image,!1,X.maxTextureSize);J0=j0(R,J0);let B0=Y.convert(R.format,R.colorSpace),u0=Y.convert(R.type),w0=z(R.internalFormat,B0,u0,R.colorSpace,R.isVideoTexture);V0(r,R);let G0,A0=R.mipmaps,m0=R.isVideoTexture!==!0,A=C0.__version===void 0||t===!0,_=e.dataReady,a=w(R,J0);if(R.isDepthTexture){if(w0=D(R.format===1027,R.type),A)if(m0)$.texStorage2D(J.TEXTURE_2D,1,w0,J0.width,J0.height);else $.texImage2D(J.TEXTURE_2D,0,w0,J0.width,J0.height,0,B0,u0,null)}else if(R.isDataTexture)if(A0.length>0){if(m0&&A)$.texStorage2D(J.TEXTURE_2D,a,w0,A0[0].width,A0[0].height);for(let c=0,s=A0.length;c<s;c++)if(G0=A0[c],m0){if(_)$.texSubImage2D(J.TEXTURE_2D,c,0,0,G0.width,G0.height,B0,u0,G0.data)}else $.texImage2D(J.TEXTURE_2D,c,w0,G0.width,G0.height,0,B0,u0,G0.data);R.generateMipmaps=!1}else if(m0){if(A)$.texStorage2D(J.TEXTURE_2D,a,w0,J0.width,J0.height);if(_)$.texSubImage2D(J.TEXTURE_2D,0,0,0,J0.width,J0.height,B0,u0,J0.data)}else $.texImage2D(J.TEXTURE_2D,0,w0,J0.width,J0.height,0,B0,u0,J0.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(m0&&A)$.texStorage3D(J.TEXTURE_2D_ARRAY,a,w0,A0[0].width,A0[0].height,J0.depth);for(let c=0,s=A0.length;c<s;c++)if(G0=A0[c],R.format!==1023)if(B0!==null)if(m0){if(_)if(R.layerUpdates.size>0){let Q0=wQ(G0.width,G0.height,R.format,R.type);for(let O0 of R.layerUpdates){let d0=G0.data.subarray(O0*Q0/G0.data.BYTES_PER_ELEMENT,(O0+1)*Q0/G0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,O0,G0.width,G0.height,1,B0,d0,0,0)}R.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,G0.width,G0.height,J0.depth,B0,G0.data,0,0)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,c,w0,G0.width,G0.height,J0.depth,0,G0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(_)$.texSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,G0.width,G0.height,J0.depth,B0,u0,G0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,c,w0,G0.width,G0.height,J0.depth,0,B0,u0,G0.data)}else{if(m0&&A)$.texStorage2D(J.TEXTURE_2D,a,w0,A0[0].width,A0[0].height);for(let c=0,s=A0.length;c<s;c++)if(G0=A0[c],R.format!==1023)if(B0!==null)if(m0){if(_)$.compressedTexSubImage2D(J.TEXTURE_2D,c,0,0,G0.width,G0.height,B0,G0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,c,w0,G0.width,G0.height,0,G0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(_)$.texSubImage2D(J.TEXTURE_2D,c,0,0,G0.width,G0.height,B0,u0,G0.data)}else $.texImage2D(J.TEXTURE_2D,c,w0,G0.width,G0.height,0,B0,u0,G0.data)}else if(R.isDataArrayTexture)if(m0){if(A)$.texStorage3D(J.TEXTURE_2D_ARRAY,a,w0,J0.width,J0.height,J0.depth);if(_)if(R.layerUpdates.size>0){let c=wQ(J0.width,J0.height,R.format,R.type);for(let s of R.layerUpdates){let Q0=J0.data.subarray(s*c/J0.data.BYTES_PER_ELEMENT,(s+1)*c/J0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,s,J0.width,J0.height,1,B0,u0,Q0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,J0.width,J0.height,J0.depth,B0,u0,J0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,w0,J0.width,J0.height,J0.depth,0,B0,u0,J0.data);else if(R.isData3DTexture)if(m0){if(A)$.texStorage3D(J.TEXTURE_3D,a,w0,J0.width,J0.height,J0.depth);if(_)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,J0.width,J0.height,J0.depth,B0,u0,J0.data)}else $.texImage3D(J.TEXTURE_3D,0,w0,J0.width,J0.height,J0.depth,0,B0,u0,J0.data);else if(R.isFramebufferTexture){if(A)if(m0)$.texStorage2D(J.TEXTURE_2D,a,w0,J0.width,J0.height);else{let{width:c,height:s}=J0;for(let Q0=0;Q0<a;Q0++)$.texImage2D(J.TEXTURE_2D,Q0,w0,c,s,0,B0,u0,null),c>>=1,s>>=1}}else if(A0.length>0){if(m0&&A){let c=Z6(A0[0]);$.texStorage2D(J.TEXTURE_2D,a,w0,c.width,c.height)}for(let c=0,s=A0.length;c<s;c++)if(G0=A0[c],m0){if(_)$.texSubImage2D(J.TEXTURE_2D,c,0,0,B0,u0,G0)}else $.texImage2D(J.TEXTURE_2D,c,w0,B0,u0,G0);R.generateMipmaps=!1}else if(m0){if(A){let c=Z6(J0);$.texStorage2D(J.TEXTURE_2D,a,w0,c.width,c.height)}if(_)$.texSubImage2D(J.TEXTURE_2D,0,0,0,B0,u0,J0)}else $.texImage2D(J.TEXTURE_2D,0,w0,B0,u0,J0);if(V(R))E(r);if(C0.__version=e.version,R.onUpdate)R.onUpdate(R)}I.__version=R.version}function Z0(I,R,d){if(R.image.length!==6)return;let r=L0(I,R),t=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,I.__webglTexture,J.TEXTURE0+d);let e=Z.get(t);if(t.version!==e.__version||r===!0){$.activeTexture(J.TEXTURE0+d);let C0=s0.getPrimaries(s0.workingColorSpace),H0=R.colorSpace===""?null:s0.getPrimaries(R.colorSpace),K0=R.colorSpace===""||C0===H0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,K0);let v0=R.isCompressedTexture||R.image[0].isCompressedTexture,J0=R.image[0]&&R.image[0].isDataTexture,B0=[];for(let s=0;s<6;s++){if(!v0&&!J0)B0[s]=O(R.image[s],!0,X.maxCubemapSize);else B0[s]=J0?R.image[s].image:R.image[s];B0[s]=j0(R,B0[s])}let u0=B0[0],w0=Y.convert(R.format,R.colorSpace),G0=Y.convert(R.type),A0=z(R.internalFormat,w0,G0,R.colorSpace),m0=R.isVideoTexture!==!0,A=e.__version===void 0||r===!0,_=t.dataReady,a=w(R,u0);V0(J.TEXTURE_CUBE_MAP,R);let c;if(v0){if(m0&&A)$.texStorage2D(J.TEXTURE_CUBE_MAP,a,A0,u0.width,u0.height);for(let s=0;s<6;s++){c=B0[s].mipmaps;for(let Q0=0;Q0<c.length;Q0++){let O0=c[Q0];if(R.format!==1023)if(w0!==null)if(m0){if(_)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,Q0,0,0,O0.width,O0.height,w0,O0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,Q0,A0,O0.width,O0.height,0,O0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(m0){if(_)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,Q0,0,0,O0.width,O0.height,w0,G0,O0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,Q0,A0,O0.width,O0.height,0,w0,G0,O0.data)}}}else{if(c=R.mipmaps,m0&&A){if(c.length>0)a++;let s=Z6(B0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,a,A0,s.width,s.height)}for(let s=0;s<6;s++)if(J0){if(m0){if(_)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,B0[s].width,B0[s].height,w0,G0,B0[s].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,A0,B0[s].width,B0[s].height,0,w0,G0,B0[s].data);for(let Q0=0;Q0<c.length;Q0++){let d0=c[Q0].image[s].image;if(m0){if(_)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,Q0+1,0,0,d0.width,d0.height,w0,G0,d0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,Q0+1,A0,d0.width,d0.height,0,w0,G0,d0.data)}}else{if(m0){if(_)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,w0,G0,B0[s])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,A0,w0,G0,B0[s]);for(let Q0=0;Q0<c.length;Q0++){let O0=c[Q0];if(m0){if(_)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,Q0+1,0,0,w0,G0,O0.image[s])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,Q0+1,A0,w0,G0,O0.image[s])}}}if(V(R))E(J.TEXTURE_CUBE_MAP);if(e.__version=t.version,R.onUpdate)R.onUpdate(R)}I.__version=R.version}function F0(I,R,d,r,t,e){let C0=Y.convert(d.format,d.colorSpace),H0=Y.convert(d.type),K0=z(d.internalFormat,C0,H0,d.colorSpace);if(!Z.get(R).__hasExternalTextures){let J0=Math.max(1,R.width>>e),B0=Math.max(1,R.height>>e);if(t===J.TEXTURE_3D||t===J.TEXTURE_2D_ARRAY)$.texImage3D(t,e,K0,J0,B0,R.depth,0,C0,H0,null);else $.texImage2D(t,e,K0,J0,B0,0,C0,H0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,I),l0(R))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,r,t,Z.get(d).__webglTexture,0,k0(R));else if(t===J.TEXTURE_2D||t>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&t<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,r,t,Z.get(d).__webglTexture,e);$.bindFramebuffer(J.FRAMEBUFFER,null)}function z0(I,R,d){if(J.bindRenderbuffer(J.RENDERBUFFER,I),R.depthBuffer){let r=R.depthTexture,t=r&&r.isDepthTexture?r.type:null,e=D(R.stencilBuffer,t),C0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,H0=k0(R);if(l0(R))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,H0,e,R.width,R.height);else if(d)J.renderbufferStorageMultisample(J.RENDERBUFFER,H0,e,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,e,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,C0,J.RENDERBUFFER,I)}else{let r=R.textures;for(let t=0;t<r.length;t++){let e=r[t],C0=Y.convert(e.format,e.colorSpace),H0=Y.convert(e.type),K0=z(e.internalFormat,C0,H0,e.colorSpace),v0=k0(R);if(d&&l0(R)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,v0,K0,R.width,R.height);else if(l0(R))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,v0,K0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,K0,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function U0(I,R){if(R&&R.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if($.bindFramebuffer(J.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(!Z.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;m(R.depthTexture,0);let r=Z.get(R.depthTexture).__webglTexture,t=k0(R);if(R.depthTexture.format===1026)if(l0(R))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,r,0,t);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,r,0);else if(R.depthTexture.format===1027)if(l0(R))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,r,0,t);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,r,0);else throw Error("Unknown depthTexture format")}function T0(I){let R=Z.get(I),d=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(d)throw Error("target.depthTexture not supported in Cube render targets");U0(R.__webglFramebuffer,I)}else if(d){R.__webglDepthbuffer=[];for(let r=0;r<6;r++)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[r]),R.__webglDepthbuffer[r]=J.createRenderbuffer(),z0(R.__webglDepthbuffer[r],I,!1)}else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=J.createRenderbuffer(),z0(R.__webglDepthbuffer,I,!1);$.bindFramebuffer(J.FRAMEBUFFER,null)}function e0(I,R,d){let r=Z.get(I);if(R!==void 0)F0(r.__webglFramebuffer,I,I.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(d!==void 0)T0(I)}function h0(I){let R=I.texture,d=Z.get(I),r=Z.get(R);I.addEventListener("dispose",k);let t=I.textures,e=I.isWebGLCubeRenderTarget===!0,C0=t.length>1;if(!C0){if(r.__webglTexture===void 0)r.__webglTexture=J.createTexture();r.__version=R.version,W.memory.textures++}if(e){d.__webglFramebuffer=[];for(let H0=0;H0<6;H0++)if(R.mipmaps&&R.mipmaps.length>0){d.__webglFramebuffer[H0]=[];for(let K0=0;K0<R.mipmaps.length;K0++)d.__webglFramebuffer[H0][K0]=J.createFramebuffer()}else d.__webglFramebuffer[H0]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){d.__webglFramebuffer=[];for(let H0=0;H0<R.mipmaps.length;H0++)d.__webglFramebuffer[H0]=J.createFramebuffer()}else d.__webglFramebuffer=J.createFramebuffer();if(C0)for(let H0=0,K0=t.length;H0<K0;H0++){let v0=Z.get(t[H0]);if(v0.__webglTexture===void 0)v0.__webglTexture=J.createTexture(),W.memory.textures++}if(I.samples>0&&l0(I)===!1){d.__webglMultisampledFramebuffer=J.createFramebuffer(),d.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,d.__webglMultisampledFramebuffer);for(let H0=0;H0<t.length;H0++){let K0=t[H0];d.__webglColorRenderbuffer[H0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,d.__webglColorRenderbuffer[H0]);let v0=Y.convert(K0.format,K0.colorSpace),J0=Y.convert(K0.type),B0=z(K0.internalFormat,v0,J0,K0.colorSpace,I.isXRRenderTarget===!0),u0=k0(I);J.renderbufferStorageMultisample(J.RENDERBUFFER,u0,B0,I.width,I.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,d.__webglColorRenderbuffer[H0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),I.depthBuffer)d.__webglDepthRenderbuffer=J.createRenderbuffer(),z0(d.__webglDepthRenderbuffer,I,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(e){$.bindTexture(J.TEXTURE_CUBE_MAP,r.__webglTexture),V0(J.TEXTURE_CUBE_MAP,R);for(let H0=0;H0<6;H0++)if(R.mipmaps&&R.mipmaps.length>0)for(let K0=0;K0<R.mipmaps.length;K0++)F0(d.__webglFramebuffer[H0][K0],I,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,K0);else F0(d.__webglFramebuffer[H0],I,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0);if(V(R))E(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(C0){for(let H0=0,K0=t.length;H0<K0;H0++){let v0=t[H0],J0=Z.get(v0);if($.bindTexture(J.TEXTURE_2D,J0.__webglTexture),V0(J.TEXTURE_2D,v0),F0(d.__webglFramebuffer,I,v0,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,0),V(v0))E(J.TEXTURE_2D)}$.unbindTexture()}else{let H0=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)H0=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(H0,r.__webglTexture),V0(H0,R),R.mipmaps&&R.mipmaps.length>0)for(let K0=0;K0<R.mipmaps.length;K0++)F0(d.__webglFramebuffer[K0],I,R,J.COLOR_ATTACHMENT0,H0,K0);else F0(d.__webglFramebuffer,I,R,J.COLOR_ATTACHMENT0,H0,0);if(V(R))E(H0);$.unbindTexture()}if(I.depthBuffer)T0(I)}function T(I){let R=I.textures;for(let d=0,r=R.length;d<r;d++){let t=R[d];if(V(t)){let e=I.isWebGLCubeRenderTarget?J.TEXTURE_CUBE_MAP:J.TEXTURE_2D,C0=Z.get(t).__webglTexture;$.bindTexture(e,C0),E(e),$.unbindTexture()}}}let X6=[],g0=[];function Q6(I){if(I.samples>0){if(l0(I)===!1){let{textures:R,width:d,height:r}=I,t=J.COLOR_BUFFER_BIT,e=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,C0=Z.get(I),H0=R.length>1;if(H0)for(let K0=0;K0<R.length;K0++)$.bindFramebuffer(J.FRAMEBUFFER,C0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+K0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,C0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+K0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,C0.__webglMultisampledFramebuffer),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,C0.__webglFramebuffer);for(let K0=0;K0<R.length;K0++){if(I.resolveDepthBuffer){if(I.depthBuffer)t|=J.DEPTH_BUFFER_BIT;if(I.stencilBuffer&&I.resolveStencilBuffer)t|=J.STENCIL_BUFFER_BIT}if(H0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,C0.__webglColorRenderbuffer[K0]);let v0=Z.get(R[K0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,v0,0)}if(J.blitFramebuffer(0,0,d,r,0,0,d,r,t,J.NEAREST),K===!0){if(X6.length=0,g0.length=0,X6.push(J.COLOR_ATTACHMENT0+K0),I.depthBuffer&&I.resolveDepthBuffer===!1)X6.push(e),g0.push(e),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,g0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,X6)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),H0)for(let K0=0;K0<R.length;K0++){$.bindFramebuffer(J.FRAMEBUFFER,C0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+K0,J.RENDERBUFFER,C0.__webglColorRenderbuffer[K0]);let v0=Z.get(R[K0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,C0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+K0,J.TEXTURE_2D,v0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,C0.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&K){let R=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function k0(I){return Math.min(X.maxSamples,I.samples)}function l0(I){let R=Z.get(I);return I.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function S0(I){let R=W.render.frame;if(q.get(I)!==R)q.set(I,R),I.update()}function j0(I,R){let{colorSpace:d,format:r,type:t}=I;if(I.isCompressedTexture===!0||I.isVideoTexture===!0)return R;if(d!=="srgb-linear"&&d!=="")if(s0.getTransfer(d)==="srgb"){if(r!==1023||t!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",d);return R}function Z6(I){if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement)G.width=I.naturalWidth||I.width,G.height=I.naturalHeight||I.height;else if(typeof VideoFrame<"u"&&I instanceof VideoFrame)G.width=I.displayWidth,G.height=I.displayHeight;else G.width=I.width,G.height=I.height;return G}this.allocateTextureUnit=u,this.resetTextureUnits=S,this.setTexture2D=m,this.setTexture2DArray=y,this.setTexture3D=v,this.setTextureCube=i,this.rebindTextures=e0,this.setupRenderTarget=h0,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=Q6,this.setupDepthRenderbuffer=T0,this.setupFrameBufferTexture=F0,this.useMultisampledRTT=l0}function pW(J,Q){function $(Z,X=""){let Y,W=s0.getTransfer(X);if(Z===1009)return J.UNSIGNED_BYTE;if(Z===1017)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===1018)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===35902)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===1010)return J.BYTE;if(Z===1011)return J.SHORT;if(Z===1012)return J.UNSIGNED_SHORT;if(Z===1013)return J.INT;if(Z===1014)return J.UNSIGNED_INT;if(Z===1015)return J.FLOAT;if(Z===1016)return J.HALF_FLOAT;if(Z===1021)return J.ALPHA;if(Z===1022)return J.RGB;if(Z===1023)return J.RGBA;if(Z===1024)return J.LUMINANCE;if(Z===1025)return J.LUMINANCE_ALPHA;if(Z===1026)return J.DEPTH_COMPONENT;if(Z===1027)return J.DEPTH_STENCIL;if(Z===1028)return J.RED;if(Z===1029)return J.RED_INTEGER;if(Z===1030)return J.RG;if(Z===1031)return J.RG_INTEGER;if(Z===1033)return J.RGBA_INTEGER;if(Z===33776||Z===33777||Z===33778||Z===33779)if(W==="srgb")if(Y=Q.get("WEBGL_compressed_texture_s3tc_srgb"),Y!==null){if(Z===33776)return Y.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===33777)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===33778)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===33779)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Y=Q.get("WEBGL_compressed_texture_s3tc"),Y!==null){if(Z===33776)return Y.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===33777)return Y.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===33778)return Y.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===33779)return Y.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===35840||Z===35841||Z===35842||Z===35843)if(Y=Q.get("WEBGL_compressed_texture_pvrtc"),Y!==null){if(Z===35840)return Y.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===35841)return Y.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===35842)return Y.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===35843)return Y.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===36196||Z===37492||Z===37496)if(Y=Q.get("WEBGL_compressed_texture_etc"),Y!==null){if(Z===36196||Z===37492)return W==="srgb"?Y.COMPRESSED_SRGB8_ETC2:Y.COMPRESSED_RGB8_ETC2;if(Z===37496)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Y.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===37808||Z===37809||Z===37810||Z===37811||Z===37812||Z===37813||Z===37814||Z===37815||Z===37816||Z===37817||Z===37818||Z===37819||Z===37820||Z===37821)if(Y=Q.get("WEBGL_compressed_texture_astc"),Y!==null){if(Z===37808)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Y.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===37809)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Y.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===37810)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Y.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===37811)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Y.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===37812)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Y.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===37813)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Y.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===37814)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Y.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===37815)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Y.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===37816)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Y.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===37817)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Y.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===37818)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Y.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===37819)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Y.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===37820)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Y.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===37821)return W==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Y.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===36492||Z===36494||Z===36495)if(Y=Q.get("EXT_texture_compression_bptc"),Y!==null){if(Z===36492)return W==="srgb"?Y.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Y.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===36494)return Y.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===36495)return Y.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===36283||Z===36284||Z===36285||Z===36286)if(Y=Q.get("EXT_texture_compression_rgtc"),Y!==null){if(Z===36492)return Y.COMPRESSED_RED_RGTC1_EXT;if(Z===36284)return Y.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===36285)return Y.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===36286)return Y.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===1020)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}class k$ extends I6{constructor(J=[]){super();this.isArrayCamera=!0,this.cameras=J}}class d6 extends $6{constructor(){super();this.isGroup=!0,this.type="Group"}}var uW={type:"move"};class b7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new d6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new d6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new d6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,X=null,Y=null,W=this._targetRay,H=this._grip,K=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(K&&J.hand){Y=!0;for(let B of J.hand.values()){let O=Q.getJointPose(B,$),V=this._getHandJoint(K,B);if(O!==null)V.matrix.fromArray(O.transform.matrix),V.matrix.decompose(V.position,V.rotation,V.scale),V.matrixWorldNeedsUpdate=!0,V.jointRadius=O.radius;V.visible=O!==null}let G=K.joints["index-finger-tip"],q=K.joints["thumb-tip"],U=G.position.distanceTo(q.position),F=0.02,N=0.005;if(K.inputState.pinching&&U>F+N)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&U<=F-N)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(H!==null&&J.gripSpace){if(X=Q.getPose(J.gripSpace,$),X!==null){if(H.matrix.fromArray(X.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,X.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(X.linearVelocity);else H.hasLinearVelocity=!1;if(X.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(X.angularVelocity);else H.hasAngularVelocity=!1}}if(W!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&X!==null)Z=X;if(Z!==null){if(W.matrix.fromArray(Z.transform.matrix),W.matrix.decompose(W.position,W.rotation,W.scale),W.matrixWorldNeedsUpdate=!0,Z.linearVelocity)W.hasLinearVelocity=!0,W.linearVelocity.copy(Z.linearVelocity);else W.hasLinearVelocity=!1;if(Z.angularVelocity)W.hasAngularVelocity=!0,W.angularVelocity.copy(Z.angularVelocity);else W.hasAngularVelocity=!1;this.dispatchEvent(uW)}}}if(W!==null)W.visible=Z!==null;if(H!==null)H.visible=X!==null;if(K!==null)K.visible=Y!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new d6;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var mW=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lW=`
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

}`;class D${constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q,$){if(this.texture===null){let Z=new F6,X=J.properties.get(Z);if(X.__webglTexture=Q.texture,Q.depthNear!=$.depthNear||Q.depthFar!=$.depthFar)this.depthNear=Q.depthNear,this.depthFar=Q.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new y6({vertexShader:mW,fragmentShader:lW,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new n0(new P9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _$ extends R8{constructor(J,Q){super();let $=this,Z=null,X=1,Y=null,W="local-floor",H=1,K=null,G=null,q=null,U=null,F=null,N=null,B=new D$,O=Q.getContextAttributes(),V=null,E=null,z=[],D=[],w=new R0,g=null,k=new I6;k.layers.enable(1),k.viewport=new c0;let j=new I6;j.layers.enable(2),j.viewport=new c0;let h=[k,j],L=new k$;L.layers.enable(1),L.layers.enable(2);let C=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let Z0=z[o];if(Z0===void 0)Z0=new b7,z[o]=Z0;return Z0.getTargetRaySpace()},this.getControllerGrip=function(o){let Z0=z[o];if(Z0===void 0)Z0=new b7,z[o]=Z0;return Z0.getGripSpace()},this.getHand=function(o){let Z0=z[o];if(Z0===void 0)Z0=new b7,z[o]=Z0;return Z0.getHandSpace()};function u(o){let Z0=D.indexOf(o.inputSource);if(Z0===-1)return;let F0=z[Z0];if(F0!==void 0)F0.update(o.inputSource,o.frame,K||Y),F0.dispatchEvent({type:o.type,data:o.inputSource})}function n(){Z.removeEventListener("select",u),Z.removeEventListener("selectstart",u),Z.removeEventListener("selectend",u),Z.removeEventListener("squeeze",u),Z.removeEventListener("squeezestart",u),Z.removeEventListener("squeezeend",u),Z.removeEventListener("end",n),Z.removeEventListener("inputsourceschange",m);for(let o=0;o<z.length;o++){let Z0=D[o];if(Z0===null)continue;D[o]=null,z[o].disconnect(Z0)}C=null,S=null,B.reset(),J.setRenderTarget(V),F=null,U=null,q=null,Z=null,E=null,L0.stop(),$.isPresenting=!1,J.setPixelRatio(g),J.setSize(w.width,w.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(X=o,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(W=o,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||Y},this.setReferenceSpace=function(o){K=o},this.getBaseLayer=function(){return U!==null?U:F},this.getBinding=function(){return q},this.getFrame=function(){return N},this.getSession=function(){return Z},this.setSession=async function(o){if(Z=o,Z!==null){if(V=J.getRenderTarget(),Z.addEventListener("select",u),Z.addEventListener("selectstart",u),Z.addEventListener("selectend",u),Z.addEventListener("squeeze",u),Z.addEventListener("squeezestart",u),Z.addEventListener("squeezeend",u),Z.addEventListener("end",n),Z.addEventListener("inputsourceschange",m),O.xrCompatible!==!0)await Q.makeXRCompatible();if(g=J.getPixelRatio(),J.getSize(w),Z.renderState.layers===void 0){let Z0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:X};F=new XRWebGLLayer(Z,Q,Z0),Z.updateRenderState({baseLayer:F}),J.setPixelRatio(1),J.setSize(F.framebufferWidth,F.framebufferHeight,!1),E=new c6(F.framebufferWidth,F.framebufferHeight,{format:1023,type:1009,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil})}else{let Z0=null,F0=null,z0=null;if(O.depth)z0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,Z0=O.stencil?1027:1026,F0=O.stencil?1020:1014;let U0={colorFormat:Q.RGBA8,depthFormat:z0,scaleFactor:X};q=new XRWebGLBinding(Z,Q),U=q.createProjectionLayer(U0),Z.updateRenderState({layers:[U]}),J.setPixelRatio(1),J.setSize(U.textureWidth,U.textureHeight,!1),E=new c6(U.textureWidth,U.textureHeight,{format:1023,type:1009,depthTexture:new e9(U.textureWidth,U.textureHeight,F0,void 0,void 0,void 0,void 0,void 0,void 0,Z0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(H),K=null,Y=await Z.requestReferenceSpace(W),L0.setContext(Z),L0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function m(o){for(let Z0=0;Z0<o.removed.length;Z0++){let F0=o.removed[Z0],z0=D.indexOf(F0);if(z0>=0)D[z0]=null,z[z0].disconnect(F0)}for(let Z0=0;Z0<o.added.length;Z0++){let F0=o.added[Z0],z0=D.indexOf(F0);if(z0===-1){for(let T0=0;T0<z.length;T0++)if(T0>=D.length){D.push(F0),z0=T0;break}else if(D[T0]===null){D[T0]=F0,z0=T0;break}if(z0===-1)break}let U0=z[z0];if(U0)U0.connect(F0)}}let y=new P,v=new P;function i(o,Z0,F0){y.setFromMatrixPosition(Z0.matrixWorld),v.setFromMatrixPosition(F0.matrixWorld);let z0=y.distanceTo(v),U0=Z0.projectionMatrix.elements,T0=F0.projectionMatrix.elements,e0=U0[14]/(U0[10]-1),h0=U0[14]/(U0[10]+1),T=(U0[9]+1)/U0[5],X6=(U0[9]-1)/U0[5],g0=(U0[8]-1)/U0[0],Q6=(T0[8]+1)/T0[0],k0=e0*g0,l0=e0*Q6,S0=z0/(-g0+Q6),j0=S0*-g0;Z0.matrixWorld.decompose(o.position,o.quaternion,o.scale),o.translateX(j0),o.translateZ(S0),o.matrixWorld.compose(o.position,o.quaternion,o.scale),o.matrixWorldInverse.copy(o.matrixWorld).invert();let Z6=e0+S0,I=h0+S0,R=k0-j0,d=l0+(z0-j0),r=T*h0/I*Z6,t=X6*h0/I*Z6;o.projectionMatrix.makePerspective(R,d,r,t,Z6,I),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}function b(o,Z0){if(Z0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(Z0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(Z===null)return;if(B.texture!==null)o.near=B.depthNear,o.far=B.depthFar;if(L.near=j.near=k.near=o.near,L.far=j.far=k.far=o.far,C!==L.near||S!==L.far)Z.updateRenderState({depthNear:L.near,depthFar:L.far}),C=L.near,S=L.far,k.near=C,k.far=S,j.near=C,j.far=S,k.updateProjectionMatrix(),j.updateProjectionMatrix(),o.updateProjectionMatrix();let Z0=o.parent,F0=L.cameras;b(L,Z0);for(let z0=0;z0<F0.length;z0++)b(F0[z0],Z0);if(F0.length===2)i(L,k,j);else L.projectionMatrix.copy(k.projectionMatrix);$0(o,L,Z0)};function $0(o,Z0,F0){if(F0===null)o.matrix.copy(Z0.matrixWorld);else o.matrix.copy(F0.matrixWorld),o.matrix.invert(),o.matrix.multiply(Z0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(Z0.projectionMatrix),o.projectionMatrixInverse.copy(Z0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=_9*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return L},this.getFoveation=function(){if(U===null&&F===null)return;return H},this.setFoveation=function(o){if(H=o,U!==null)U.fixedFoveation=o;if(F!==null&&F.fixedFoveation!==void 0)F.fixedFoveation=o},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(L)};let W0=null;function V0(o,Z0){if(G=Z0.getViewerPose(K||Y),N=Z0,G!==null){let F0=G.views;if(F!==null)J.setRenderTargetFramebuffer(E,F.framebuffer),J.setRenderTarget(E);let z0=!1;if(F0.length!==L.cameras.length)L.cameras.length=0,z0=!0;for(let T0=0;T0<F0.length;T0++){let e0=F0[T0],h0=null;if(F!==null)h0=F.getViewport(e0);else{let X6=q.getViewSubImage(U,e0);if(h0=X6.viewport,T0===0)J.setRenderTargetTextures(E,X6.colorTexture,U.ignoreDepthValues?void 0:X6.depthStencilTexture),J.setRenderTarget(E)}let T=h[T0];if(T===void 0)T=new I6,T.layers.enable(T0),T.viewport=new c0,h[T0]=T;if(T.matrix.fromArray(e0.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(e0.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(h0.x,h0.y,h0.width,h0.height),T0===0)L.matrix.copy(T.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);if(z0===!0)L.cameras.push(T)}let U0=Z.enabledFeatures;if(U0&&U0.includes("depth-sensing")){let T0=q.getDepthInformation(F0[0]);if(T0&&T0.isValid&&T0.texture)B.init(J,T0,Z.renderState)}}for(let F0=0;F0<z.length;F0++){let z0=D[F0],U0=z[F0];if(z0!==null&&U0!==void 0)U0.update(z0,Z0,K||Y)}if(W0)W0(o,Z0);if(Z0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Z0});N=null}let L0=new U$;L0.setAnimationLoop(V0),this.setAnimationLoop=function(o){W0=o},this.dispose=function(){}}}var l8=new X8,dW=new y0;function cW(J,Q){function $(V,E){if(V.matrixAutoUpdate===!0)V.updateMatrix();E.value.copy(V.matrix)}function Z(V,E){if(E.color.getRGB(V.fogColor.value,K$(J)),E.isFog)V.fogNear.value=E.near,V.fogFar.value=E.far;else if(E.isFogExp2)V.fogDensity.value=E.density}function X(V,E,z,D,w){if(E.isMeshBasicMaterial)Y(V,E);else if(E.isMeshLambertMaterial)Y(V,E);else if(E.isMeshToonMaterial)Y(V,E),U(V,E);else if(E.isMeshPhongMaterial)Y(V,E),q(V,E);else if(E.isMeshStandardMaterial){if(Y(V,E),F(V,E),E.isMeshPhysicalMaterial)N(V,E,w)}else if(E.isMeshMatcapMaterial)Y(V,E),B(V,E);else if(E.isMeshDepthMaterial)Y(V,E);else if(E.isMeshDistanceMaterial)Y(V,E),O(V,E);else if(E.isMeshNormalMaterial)Y(V,E);else if(E.isLineBasicMaterial){if(W(V,E),E.isLineDashedMaterial)H(V,E)}else if(E.isPointsMaterial)K(V,E,z,D);else if(E.isSpriteMaterial)G(V,E);else if(E.isShadowMaterial)V.color.value.copy(E.color),V.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function Y(V,E){if(V.opacity.value=E.opacity,E.color)V.diffuse.value.copy(E.color);if(E.emissive)V.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)V.map.value=E.map,$(E.map,V.mapTransform);if(E.alphaMap)V.alphaMap.value=E.alphaMap,$(E.alphaMap,V.alphaMapTransform);if(E.bumpMap){if(V.bumpMap.value=E.bumpMap,$(E.bumpMap,V.bumpMapTransform),V.bumpScale.value=E.bumpScale,E.side===1)V.bumpScale.value*=-1}if(E.normalMap){if(V.normalMap.value=E.normalMap,$(E.normalMap,V.normalMapTransform),V.normalScale.value.copy(E.normalScale),E.side===1)V.normalScale.value.negate()}if(E.displacementMap)V.displacementMap.value=E.displacementMap,$(E.displacementMap,V.displacementMapTransform),V.displacementScale.value=E.displacementScale,V.displacementBias.value=E.displacementBias;if(E.emissiveMap)V.emissiveMap.value=E.emissiveMap,$(E.emissiveMap,V.emissiveMapTransform);if(E.specularMap)V.specularMap.value=E.specularMap,$(E.specularMap,V.specularMapTransform);if(E.alphaTest>0)V.alphaTest.value=E.alphaTest;let z=Q.get(E),D=z.envMap,w=z.envMapRotation;if(D){if(V.envMap.value=D,l8.copy(w),l8.x*=-1,l8.y*=-1,l8.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1)l8.y*=-1,l8.z*=-1;V.envMapRotation.value.setFromMatrix4(dW.makeRotationFromEuler(l8)),V.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,V.reflectivity.value=E.reflectivity,V.ior.value=E.ior,V.refractionRatio.value=E.refractionRatio}if(E.lightMap)V.lightMap.value=E.lightMap,V.lightMapIntensity.value=E.lightMapIntensity,$(E.lightMap,V.lightMapTransform);if(E.aoMap)V.aoMap.value=E.aoMap,V.aoMapIntensity.value=E.aoMapIntensity,$(E.aoMap,V.aoMapTransform)}function W(V,E){if(V.diffuse.value.copy(E.color),V.opacity.value=E.opacity,E.map)V.map.value=E.map,$(E.map,V.mapTransform)}function H(V,E){V.dashSize.value=E.dashSize,V.totalSize.value=E.dashSize+E.gapSize,V.scale.value=E.scale}function K(V,E,z,D){if(V.diffuse.value.copy(E.color),V.opacity.value=E.opacity,V.size.value=E.size*z,V.scale.value=D*0.5,E.map)V.map.value=E.map,$(E.map,V.uvTransform);if(E.alphaMap)V.alphaMap.value=E.alphaMap,$(E.alphaMap,V.alphaMapTransform);if(E.alphaTest>0)V.alphaTest.value=E.alphaTest}function G(V,E){if(V.diffuse.value.copy(E.color),V.opacity.value=E.opacity,V.rotation.value=E.rotation,E.map)V.map.value=E.map,$(E.map,V.mapTransform);if(E.alphaMap)V.alphaMap.value=E.alphaMap,$(E.alphaMap,V.alphaMapTransform);if(E.alphaTest>0)V.alphaTest.value=E.alphaTest}function q(V,E){V.specular.value.copy(E.specular),V.shininess.value=Math.max(E.shininess,0.0001)}function U(V,E){if(E.gradientMap)V.gradientMap.value=E.gradientMap}function F(V,E){if(V.metalness.value=E.metalness,E.metalnessMap)V.metalnessMap.value=E.metalnessMap,$(E.metalnessMap,V.metalnessMapTransform);if(V.roughness.value=E.roughness,E.roughnessMap)V.roughnessMap.value=E.roughnessMap,$(E.roughnessMap,V.roughnessMapTransform);if(E.envMap)V.envMapIntensity.value=E.envMapIntensity}function N(V,E,z){if(V.ior.value=E.ior,E.sheen>0){if(V.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),V.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)V.sheenColorMap.value=E.sheenColorMap,$(E.sheenColorMap,V.sheenColorMapTransform);if(E.sheenRoughnessMap)V.sheenRoughnessMap.value=E.sheenRoughnessMap,$(E.sheenRoughnessMap,V.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(V.clearcoat.value=E.clearcoat,V.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)V.clearcoatMap.value=E.clearcoatMap,$(E.clearcoatMap,V.clearcoatMapTransform);if(E.clearcoatRoughnessMap)V.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,$(E.clearcoatRoughnessMap,V.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(V.clearcoatNormalMap.value=E.clearcoatNormalMap,$(E.clearcoatNormalMap,V.clearcoatNormalMapTransform),V.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===1)V.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)V.dispersion.value=E.dispersion;if(E.iridescence>0){if(V.iridescence.value=E.iridescence,V.iridescenceIOR.value=E.iridescenceIOR,V.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],V.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)V.iridescenceMap.value=E.iridescenceMap,$(E.iridescenceMap,V.iridescenceMapTransform);if(E.iridescenceThicknessMap)V.iridescenceThicknessMap.value=E.iridescenceThicknessMap,$(E.iridescenceThicknessMap,V.iridescenceThicknessMapTransform)}if(E.transmission>0){if(V.transmission.value=E.transmission,V.transmissionSamplerMap.value=z.texture,V.transmissionSamplerSize.value.set(z.width,z.height),E.transmissionMap)V.transmissionMap.value=E.transmissionMap,$(E.transmissionMap,V.transmissionMapTransform);if(V.thickness.value=E.thickness,E.thicknessMap)V.thicknessMap.value=E.thicknessMap,$(E.thicknessMap,V.thicknessMapTransform);V.attenuationDistance.value=E.attenuationDistance,V.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(V.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)V.anisotropyMap.value=E.anisotropyMap,$(E.anisotropyMap,V.anisotropyMapTransform)}if(V.specularIntensity.value=E.specularIntensity,V.specularColor.value.copy(E.specularColor),E.specularColorMap)V.specularColorMap.value=E.specularColorMap,$(E.specularColorMap,V.specularColorMapTransform);if(E.specularIntensityMap)V.specularIntensityMap.value=E.specularIntensityMap,$(E.specularIntensityMap,V.specularIntensityMapTransform)}function B(V,E){if(E.matcap)V.matcap.value=E.matcap}function O(V,E){let z=Q.get(E).light;V.referencePosition.value.setFromMatrixPosition(z.matrixWorld),V.nearDistance.value=z.shadow.camera.near,V.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:X}}function nW(J,Q,$,Z){let X={},Y={},W=[],H=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(z,D){let w=D.program;Z.uniformBlockBinding(z,w)}function G(z,D){let w=X[z.id];if(w===void 0)B(z),w=q(z),X[z.id]=w,z.addEventListener("dispose",V);let g=D.program;Z.updateUBOMapping(z,g);let k=Q.render.frame;if(Y[z.id]!==k)F(z),Y[z.id]=k}function q(z){let D=U();z.__bindingPointIndex=D;let w=J.createBuffer(),g=z.__size,k=z.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,g,k),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,D,w),w}function U(){for(let z=0;z<H;z++)if(W.indexOf(z)===-1)return W.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function F(z){let D=X[z.id],w=z.uniforms,g=z.__cache;J.bindBuffer(J.UNIFORM_BUFFER,D);for(let k=0,j=w.length;k<j;k++){let h=Array.isArray(w[k])?w[k]:[w[k]];for(let L=0,C=h.length;L<C;L++){let S=h[L];if(N(S,k,L,g)===!0){let u=S.__offset,n=Array.isArray(S.value)?S.value:[S.value],m=0;for(let y=0;y<n.length;y++){let v=n[y],i=O(v);if(typeof v==="number"||typeof v==="boolean")S.__data[0]=v,J.bufferSubData(J.UNIFORM_BUFFER,u+m,S.__data);else if(v.isMatrix3)S.__data[0]=v.elements[0],S.__data[1]=v.elements[1],S.__data[2]=v.elements[2],S.__data[3]=0,S.__data[4]=v.elements[3],S.__data[5]=v.elements[4],S.__data[6]=v.elements[5],S.__data[7]=0,S.__data[8]=v.elements[6],S.__data[9]=v.elements[7],S.__data[10]=v.elements[8],S.__data[11]=0;else v.toArray(S.__data,m),m+=i.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,u,S.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function N(z,D,w,g){let k=z.value,j=D+"_"+w;if(g[j]===void 0){if(typeof k==="number"||typeof k==="boolean")g[j]=k;else g[j]=k.clone();return!0}else{let h=g[j];if(typeof k==="number"||typeof k==="boolean"){if(h!==k)return g[j]=k,!0}else if(h.equals(k)===!1)return h.copy(k),!0}return!1}function B(z){let D=z.uniforms,w=0,g=16;for(let j=0,h=D.length;j<h;j++){let L=Array.isArray(D[j])?D[j]:[D[j]];for(let C=0,S=L.length;C<S;C++){let u=L[C],n=Array.isArray(u.value)?u.value:[u.value];for(let m=0,y=n.length;m<y;m++){let v=n[m],i=O(v),b=w%g;if(b!==0&&g-b<i.boundary)w+=g-b;u.__data=new Float32Array(i.storage/Float32Array.BYTES_PER_ELEMENT),u.__offset=w,w+=i.storage}}}let k=w%g;if(k>0)w+=g-k;return z.__size=w,z.__cache={},this}function O(z){let D={boundary:0,storage:0};if(typeof z==="number"||typeof z==="boolean")D.boundary=4,D.storage=4;else if(z.isVector2)D.boundary=8,D.storage=8;else if(z.isVector3||z.isColor)D.boundary=16,D.storage=12;else if(z.isVector4)D.boundary=16,D.storage=16;else if(z.isMatrix3)D.boundary=48,D.storage=48;else if(z.isMatrix4)D.boundary=64,D.storage=64;else if(z.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z);return D}function V(z){let D=z.target;D.removeEventListener("dispose",V);let w=W.indexOf(D.__bindingPointIndex);W.splice(w,1),J.deleteBuffer(X[D.id]),delete X[D.id],delete Y[D.id]}function E(){for(let z in X)J.deleteBuffer(X[z]);W=[],X={},Y={}}return{bind:K,update:G,dispose:E}}class J5{constructor(J={}){let{canvas:Q=J1(),context:$=null,depth:Z=!0,stencil:X=!1,alpha:Y=!1,antialias:W=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:K=!1,powerPreference:G="default",failIfMajorPerformanceCaveat:q=!1}=J;this.isWebGLRenderer=!0;let U;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");U=$.getContextAttributes().alpha}else U=Y;let F=new Uint32Array(4),N=new Int32Array(4),B=null,O=null,V=[],E=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let z=this,D=!1,w=0,g=0,k=null,j=-1,h=null,L=new c0,C=new c0,S=null,u=new _0(0),n=0,m=Q.width,y=Q.height,v=1,i=null,b=null,$0=new c0(0,0,m,y),W0=new c0(0,0,m,y),V0=!1,L0=new d7,o=!1,Z0=!1,F0=new y0,z0=new P,U0=new c0,T0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},e0=!1;function h0(){return k===null?v:1}let T=$;function X6(M,f){return Q.getContext(M,f)}try{let M={alpha:!0,depth:Z,stencil:X,antialias:W,premultipliedAlpha:H,preserveDrawingBuffer:K,powerPreference:G,failIfMajorPerformanceCaveat:q};if("setAttribute"in Q)Q.setAttribute("data-engine","three.js r166");if(Q.addEventListener("webglcontextlost",a,!1),Q.addEventListener("webglcontextrestored",c,!1),Q.addEventListener("webglcontextcreationerror",s,!1),T===null){if(T=X6("webgl2",M),T===null)if(X6("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let g0,Q6,k0,l0,S0,j0,Z6,I,R,d,r,t,e,C0,H0,K0,v0,J0,B0,u0,w0,G0,A0,m0;function A(){g0=new qY(T),g0.init(),G0=new pW(T,g0),Q6=new XY(T,g0,J,G0),k0=new hW(T),l0=new VY(T),S0=new _W,j0=new gW(T,g0,k0,S0,Q6,G0,l0),Z6=new WY(z),I=new GY(z),R=new M1(T),A0=new $Y(T,R),d=new UY(T,R,l0,A0),r=new NY(T,d,R,l0),B0=new EY(T,Q6,j0),K0=new YY(S0),t=new DW(z,Z6,I,g0,Q6,A0,K0),e=new cW(z,S0),C0=new IW,H0=new yW(g0),J0=new QY(z,Z6,I,k0,r,U,H),v0=new xW(z,r,Q6),m0=new nW(T,l0,Q6,k0),u0=new ZY(T,g0,l0),w0=new FY(T,g0,l0),l0.programs=t.programs,z.capabilities=Q6,z.extensions=g0,z.properties=S0,z.renderLists=C0,z.shadowMap=v0,z.state=k0,z.info=l0}A();let _=new _$(z,T);this.xr=_,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let M=g0.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=g0.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(M){if(M===void 0)return;v=M,this.setSize(m,y,!1)},this.getSize=function(M){return M.set(m,y)},this.setSize=function(M,f,p=!0){if(_.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(m=M,y=f,Q.width=Math.floor(M*v),Q.height=Math.floor(f*v),p===!0)Q.style.width=M+"px",Q.style.height=f+"px";this.setViewport(0,0,M,f)},this.getDrawingBufferSize=function(M){return M.set(m*v,y*v).floor()},this.setDrawingBufferSize=function(M,f,p){m=M,y=f,v=p,Q.width=Math.floor(M*p),Q.height=Math.floor(f*p),this.setViewport(0,0,M,f)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy($0)},this.setViewport=function(M,f,p,l){if(M.isVector4)$0.set(M.x,M.y,M.z,M.w);else $0.set(M,f,p,l);k0.viewport(L.copy($0).multiplyScalar(v).round())},this.getScissor=function(M){return M.copy(W0)},this.setScissor=function(M,f,p,l){if(M.isVector4)W0.set(M.x,M.y,M.z,M.w);else W0.set(M,f,p,l);k0.scissor(C.copy(W0).multiplyScalar(v).round())},this.getScissorTest=function(){return V0},this.setScissorTest=function(M){k0.setScissorTest(V0=M)},this.setOpaqueSort=function(M){i=M},this.setTransparentSort=function(M){b=M},this.getClearColor=function(M){return M.copy(J0.getClearColor())},this.setClearColor=function(){J0.setClearColor.apply(J0,arguments)},this.getClearAlpha=function(){return J0.getClearAlpha()},this.setClearAlpha=function(){J0.setClearAlpha.apply(J0,arguments)},this.clear=function(M=!0,f=!0,p=!0){let l=0;if(M){let x=!1;if(k!==null){let X0=k.texture.format;x=X0===1033||X0===1031||X0===1029}if(x){let X0=k.texture.type,q0=X0===1009||X0===1014||X0===1012||X0===1020||X0===1017||X0===1018,E0=J0.getClearColor(),N0=J0.getClearAlpha(),I0=E0.r,P0=E0.g,D0=E0.b;if(q0)F[0]=I0,F[1]=P0,F[2]=D0,F[3]=N0,T.clearBufferuiv(T.COLOR,0,F);else N[0]=I0,N[1]=P0,N[2]=D0,N[3]=N0,T.clearBufferiv(T.COLOR,0,N)}else l|=T.COLOR_BUFFER_BIT}if(f)l|=T.DEPTH_BUFFER_BIT;if(p)l|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);T.clear(l)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",a,!1),Q.removeEventListener("webglcontextrestored",c,!1),Q.removeEventListener("webglcontextcreationerror",s,!1),C0.dispose(),H0.dispose(),S0.dispose(),Z6.dispose(),I.dispose(),r.dispose(),A0.dispose(),m0.dispose(),t.dispose(),_.dispose(),_.removeEventListener("sessionstart",G6),_.removeEventListener("sessionend",D6),z6.stop()};function a(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function c(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let M=l0.autoReset,f=v0.enabled,p=v0.autoUpdate,l=v0.needsUpdate,x=v0.type;A(),l0.autoReset=M,v0.enabled=f,v0.autoUpdate=p,v0.needsUpdate=l,v0.type=x}function s(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Q0(M){let f=M.target;f.removeEventListener("dispose",Q0),O0(f)}function O0(M){d0(M),S0.remove(M)}function d0(M){let f=S0.get(M).programs;if(f!==void 0){if(f.forEach(function(p){t.releaseProgram(p)}),M.isShaderMaterial)t.releaseShaderCache(M)}}this.renderBufferDirect=function(M,f,p,l,x,X0){if(f===null)f=T0;let q0=x.isMesh&&x.matrixWorld.determinant()<0,E0=fZ(M,f,p,l,x);k0.setMaterial(l,q0);let N0=p.index,I0=1;if(l.wireframe===!0){if(N0=d.getWireframeAttribute(p),N0===void 0)return;I0=2}let P0=p.drawRange,D0=p.attributes.position,o0=P0.start*I0,W6=(P0.start+P0.count)*I0;if(X0!==null)o0=Math.max(o0,X0.start*I0),W6=Math.min(W6,(X0.start+X0.count)*I0);if(N0!==null)o0=Math.max(o0,0),W6=Math.min(W6,N0.count);else if(D0!==void 0&&D0!==null)o0=Math.max(o0,0),W6=Math.min(W6,D0.count);let H6=W6-o0;if(H6<0||H6===1/0)return;A0.setup(x,l,E0,p,N0);let v6,i0=u0;if(N0!==null)v6=R.get(N0),i0=w0,i0.setIndex(v6);if(x.isMesh)if(l.wireframe===!0)k0.setLineWidth(l.wireframeLinewidth*h0()),i0.setMode(T.LINES);else i0.setMode(T.TRIANGLES);else if(x.isLine){let M0=l.linewidth;if(M0===void 0)M0=1;if(k0.setLineWidth(M0*h0()),x.isLineSegments)i0.setMode(T.LINES);else if(x.isLineLoop)i0.setMode(T.LINE_LOOP);else i0.setMode(T.LINE_STRIP)}else if(x.isPoints)i0.setMode(T.POINTS);else if(x.isSprite)i0.setMode(T.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)i0.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(!g0.get("WEBGL_multi_draw")){let{_multiDrawStarts:M0,_multiDrawCounts:M6,_multiDrawCount:a0}=x,i6=N0?R.get(N0).bytesPerElement:1,Y9=S0.get(l).currentProgram.getUniforms();for(let x6=0;x6<a0;x6++)Y9.setValue(T,"_gl_DrawID",x6),i0.render(M0[x6]/i6,M6[x6])}else i0.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else if(x.isInstancedMesh)i0.renderInstances(o0,H6,x.count);else if(p.isInstancedBufferGeometry){let M0=p._maxInstanceCount!==void 0?p._maxInstanceCount:1/0,M6=Math.min(p.instanceCount,M0);i0.renderInstances(o0,H6,M6)}else i0.render(o0,H6)};function Y6(M,f,p){if(M.transparent===!0&&M.side===2&&M.forceSinglePass===!1)M.side=1,M.needsUpdate=!0,K7(M,f,p),M.side=0,M.needsUpdate=!0,K7(M,f,p),M.side=2;else K7(M,f,p)}this.compile=function(M,f,p=null){if(p===null)p=M;if(O=H0.get(p),O.init(f),E.push(O),p.traverseVisible(function(x){if(x.isLight&&x.layers.test(f.layers)){if(O.pushLight(x),x.castShadow)O.pushShadow(x)}}),M!==p)M.traverseVisible(function(x){if(x.isLight&&x.layers.test(f.layers)){if(O.pushLight(x),x.castShadow)O.pushShadow(x)}});O.setupLights();let l=new Set;return M.traverse(function(x){let X0=x.material;if(X0)if(Array.isArray(X0))for(let q0=0;q0<X0.length;q0++){let E0=X0[q0];Y6(E0,p,x),l.add(E0)}else Y6(X0,p,x),l.add(X0)}),E.pop(),O=null,l},this.compileAsync=function(M,f,p=null){let l=this.compile(M,f,p);return new Promise((x)=>{function X0(){if(l.forEach(function(q0){if(S0.get(q0).currentProgram.isReady())l.delete(q0)}),l.size===0){x(M);return}setTimeout(X0,10)}if(g0.get("KHR_parallel_shader_compile")!==null)X0();else setTimeout(X0,10)})};let K6=null;function b0(M){if(K6)K6(M)}function G6(){z6.stop()}function D6(){z6.start()}let z6=new U$;if(z6.setAnimationLoop(b0),typeof self<"u")z6.setContext(self);this.setAnimationLoop=function(M){K6=M,_.setAnimationLoop(M),M===null?z6.stop():z6.start()},_.addEventListener("sessionstart",G6),_.addEventListener("sessionend",D6),this.render=function(M,f){if(f!==void 0&&f.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(_.enabled===!0&&_.isPresenting===!0){if(_.cameraAutoUpdate===!0)_.updateCamera(f);f=_.getCamera()}if(M.isScene===!0)M.onBeforeRender(z,M,f,k);if(O=H0.get(M,E.length),O.init(f),E.push(O),F0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),L0.setFromProjectionMatrix(F0),Z0=this.localClippingEnabled,o=K0.init(this.clippingPlanes,Z0),B=C0.get(M,V.length),B.init(),V.push(B),_.enabled===!0&&_.isPresenting===!0){let X0=z.xr.getDepthSensingMesh();if(X0!==null)U8(X0,f,-1/0,z.sortObjects)}if(U8(M,f,0,z.sortObjects),B.finish(),z.sortObjects===!0)B.sort(i,b);if(e0=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,e0)J0.addToRenderList(B,M);if(this.info.render.frame++,o===!0)K0.beginShadows();let p=O.state.shadowsArray;if(v0.render(p,M,f),o===!0)K0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:l,transmissive:x}=B;if(O.setupLights(),f.isArrayCamera){let X0=f.cameras;if(x.length>0)for(let q0=0,E0=X0.length;q0<E0;q0++){let N0=X0[q0];h9(l,x,M,N0)}if(e0)J0.render(M);for(let q0=0,E0=X0.length;q0<E0;q0++){let N0=X0[q0];h8(B,M,N0,N0.viewport)}}else{if(x.length>0)h9(l,x,M,f);if(e0)J0.render(M);h8(B,M,f)}if(k!==null)j0.updateMultisampleRenderTarget(k),j0.updateRenderTargetMipmap(k);if(M.isScene===!0)M.onAfterRender(z,M,f);if(A0.resetDefaultState(),j=-1,h=null,E.pop(),E.length>0){if(O=E[E.length-1],o===!0)K0.setGlobalState(z.clippingPlanes,O.state.camera)}else O=null;if(V.pop(),V.length>0)B=V[V.length-1];else B=null};function U8(M,f,p,l){if(M.visible===!1)return;if(M.layers.test(f.layers)){if(M.isGroup)p=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(f)}else if(M.isLight){if(O.pushLight(M),M.castShadow)O.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||L0.intersectsSprite(M)){if(l)U0.setFromMatrixPosition(M.matrixWorld).applyMatrix4(F0);let q0=r.update(M),E0=M.material;if(E0.visible)B.push(M,q0,E0,p,U0.z,null)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||L0.intersectsObject(M)){let q0=r.update(M),E0=M.material;if(l){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();U0.copy(M.boundingSphere.center)}else{if(q0.boundingSphere===null)q0.computeBoundingSphere();U0.copy(q0.boundingSphere.center)}U0.applyMatrix4(M.matrixWorld).applyMatrix4(F0)}if(Array.isArray(E0)){let N0=q0.groups;for(let I0=0,P0=N0.length;I0<P0;I0++){let D0=N0[I0],o0=E0[D0.materialIndex];if(o0&&o0.visible)B.push(M,q0,o0,p,U0.z,D0)}}else if(E0.visible)B.push(M,q0,E0,p,U0.z,null)}}}let X0=M.children;for(let q0=0,E0=X0.length;q0<E0;q0++)U8(X0[q0],f,p,l)}function h8(M,f,p,l){let{opaque:x,transmissive:X0,transparent:q0}=M;if(O.setupLightsView(p),o===!0)K0.setGlobalState(z.clippingPlanes,p);if(l)k0.viewport(L.copy(l));if(x.length>0)H7(x,f,p);if(X0.length>0)H7(X0,f,p);if(q0.length>0)H7(q0,f,p);k0.buffers.depth.setTest(!0),k0.buffers.depth.setMask(!0),k0.buffers.color.setMask(!0),k0.setPolygonOffset(!1)}function h9(M,f,p,l){if((p.isScene===!0?p.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[l.id]===void 0)O.state.transmissionRenderTarget[l.id]=new c6(1,1,{generateMipmaps:!0,type:g0.has("EXT_color_buffer_half_float")||g0.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:X,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:s0.workingColorSpace});let X0=O.state.transmissionRenderTarget[l.id],q0=l.viewport||L;X0.setSize(q0.z,q0.w);let E0=z.getRenderTarget();if(z.setRenderTarget(X0),z.getClearColor(u),n=z.getClearAlpha(),n<1)z.setClearColor(16777215,0.5);if(e0)J0.render(p);else z.clear();let N0=z.toneMapping;z.toneMapping=0;let I0=l.viewport;if(l.viewport!==void 0)l.viewport=void 0;if(O.setupLightsView(l),o===!0)K0.setGlobalState(z.clippingPlanes,l);if(H7(M,p,l),j0.updateMultisampleRenderTarget(X0),j0.updateRenderTargetMipmap(X0),g0.has("WEBGL_multisampled_render_to_texture")===!1){let P0=!1;for(let D0=0,o0=f.length;D0<o0;D0++){let W6=f[D0],H6=W6.object,v6=W6.geometry,i0=W6.material,M0=W6.group;if(i0.side===2&&H6.layers.test(l.layers)){let M6=i0.side;i0.side=1,i0.needsUpdate=!0,f5(H6,p,l,v6,i0,M0),i0.side=M6,i0.needsUpdate=!0,P0=!0}}if(P0===!0)j0.updateMultisampleRenderTarget(X0),j0.updateRenderTargetMipmap(X0)}if(z.setRenderTarget(E0),z.setClearColor(u,n),I0!==void 0)l.viewport=I0;z.toneMapping=N0}function H7(M,f,p){let l=f.isScene===!0?f.overrideMaterial:null;for(let x=0,X0=M.length;x<X0;x++){let q0=M[x],E0=q0.object,N0=q0.geometry,I0=l===null?q0.material:l,P0=q0.group;if(E0.layers.test(p.layers))f5(E0,f,p,N0,I0,P0)}}function f5(M,f,p,l,x,X0){if(M.onBeforeRender(z,f,p,l,x,X0),M.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),x.transparent===!0&&x.side===2&&x.forceSinglePass===!1)x.side=1,x.needsUpdate=!0,z.renderBufferDirect(p,f,l,x,M,X0),x.side=0,x.needsUpdate=!0,z.renderBufferDirect(p,f,l,x,M,X0),x.side=2;else z.renderBufferDirect(p,f,l,x,M,X0);M.onAfterRender(z,f,p,l,x,X0)}function K7(M,f,p){if(f.isScene!==!0)f=T0;let l=S0.get(M),x=O.state.lights,X0=O.state.shadowsArray,q0=x.state.version,E0=t.getParameters(M,x.state,X0,f,p),N0=t.getProgramCacheKey(E0),I0=l.programs;if(l.environment=M.isMeshStandardMaterial?f.environment:null,l.fog=f.fog,l.envMap=(M.isMeshStandardMaterial?I:Z6).get(M.envMap||l.environment),l.envMapRotation=l.environment!==null&&M.envMap===null?f.environmentRotation:M.envMapRotation,I0===void 0)M.addEventListener("dispose",Q0),I0=new Map,l.programs=I0;let P0=I0.get(N0);if(P0!==void 0){if(l.currentProgram===P0&&l.lightsStateVersion===q0)return x5(M,E0),P0}else E0.uniforms=t.getUniforms(M),M.onBeforeCompile(E0,z),P0=t.acquireProgram(E0,N0),I0.set(N0,P0),l.uniforms=E0.uniforms;let D0=l.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)D0.clippingPlanes=K0.uniform;if(x5(M,E0),l.needsLights=xZ(M),l.lightsStateVersion=q0,l.needsLights)D0.ambientLightColor.value=x.state.ambient,D0.lightProbe.value=x.state.probe,D0.directionalLights.value=x.state.directional,D0.directionalLightShadows.value=x.state.directionalShadow,D0.spotLights.value=x.state.spot,D0.spotLightShadows.value=x.state.spotShadow,D0.rectAreaLights.value=x.state.rectArea,D0.ltc_1.value=x.state.rectAreaLTC1,D0.ltc_2.value=x.state.rectAreaLTC2,D0.pointLights.value=x.state.point,D0.pointLightShadows.value=x.state.pointShadow,D0.hemisphereLights.value=x.state.hemi,D0.directionalShadowMap.value=x.state.directionalShadowMap,D0.directionalShadowMatrix.value=x.state.directionalShadowMatrix,D0.spotShadowMap.value=x.state.spotShadowMap,D0.spotLightMatrix.value=x.state.spotLightMatrix,D0.spotLightMap.value=x.state.spotLightMap,D0.pointShadowMap.value=x.state.pointShadowMap,D0.pointShadowMatrix.value=x.state.pointShadowMatrix;return l.currentProgram=P0,l.uniformsList=null,P0}function v5(M){if(M.uniformsList===null){let f=M.currentProgram.getUniforms();M.uniformsList=i9.seqWithValue(f.seq,M.uniforms)}return M.uniformsList}function x5(M,f){let p=S0.get(M);p.outputColorSpace=f.outputColorSpace,p.batching=f.batching,p.batchingColor=f.batchingColor,p.instancing=f.instancing,p.instancingColor=f.instancingColor,p.instancingMorph=f.instancingMorph,p.skinning=f.skinning,p.morphTargets=f.morphTargets,p.morphNormals=f.morphNormals,p.morphColors=f.morphColors,p.morphTargetsCount=f.morphTargetsCount,p.numClippingPlanes=f.numClippingPlanes,p.numIntersection=f.numClipIntersection,p.vertexAlphas=f.vertexAlphas,p.vertexTangents=f.vertexTangents,p.toneMapping=f.toneMapping}function fZ(M,f,p,l,x){if(f.isScene!==!0)f=T0;j0.resetTextureUnits();let X0=f.fog,q0=l.isMeshStandardMaterial?f.environment:null,E0=k===null?z.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:"srgb-linear",N0=(l.isMeshStandardMaterial?I:Z6).get(l.envMap||q0),I0=l.vertexColors===!0&&!!p.attributes.color&&p.attributes.color.itemSize===4,P0=!!p.attributes.tangent&&(!!l.normalMap||l.anisotropy>0),D0=!!p.morphAttributes.position,o0=!!p.morphAttributes.normal,W6=!!p.morphAttributes.color,H6=0;if(l.toneMapped){if(k===null||k.isXRRenderTarget===!0)H6=z.toneMapping}let v6=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,i0=v6!==void 0?v6.length:0,M0=S0.get(l),M6=O.state.lights;if(o===!0){if(Z0===!0||M!==h){let m6=M===h&&l.id===j;K0.setState(l,M,m6)}}let a0=!1;if(l.version===M0.__version){if(M0.needsLights&&M0.lightsStateVersion!==M6.state.version)a0=!0;else if(M0.outputColorSpace!==E0)a0=!0;else if(x.isBatchedMesh&&M0.batching===!1)a0=!0;else if(!x.isBatchedMesh&&M0.batching===!0)a0=!0;else if(x.isBatchedMesh&&M0.batchingColor===!0&&x.colorTexture===null)a0=!0;else if(x.isBatchedMesh&&M0.batchingColor===!1&&x.colorTexture!==null)a0=!0;else if(x.isInstancedMesh&&M0.instancing===!1)a0=!0;else if(!x.isInstancedMesh&&M0.instancing===!0)a0=!0;else if(x.isSkinnedMesh&&M0.skinning===!1)a0=!0;else if(!x.isSkinnedMesh&&M0.skinning===!0)a0=!0;else if(x.isInstancedMesh&&M0.instancingColor===!0&&x.instanceColor===null)a0=!0;else if(x.isInstancedMesh&&M0.instancingColor===!1&&x.instanceColor!==null)a0=!0;else if(x.isInstancedMesh&&M0.instancingMorph===!0&&x.morphTexture===null)a0=!0;else if(x.isInstancedMesh&&M0.instancingMorph===!1&&x.morphTexture!==null)a0=!0;else if(M0.envMap!==N0)a0=!0;else if(l.fog===!0&&M0.fog!==X0)a0=!0;else if(M0.numClippingPlanes!==void 0&&(M0.numClippingPlanes!==K0.numPlanes||M0.numIntersection!==K0.numIntersection))a0=!0;else if(M0.vertexAlphas!==I0)a0=!0;else if(M0.vertexTangents!==P0)a0=!0;else if(M0.morphTargets!==D0)a0=!0;else if(M0.morphNormals!==o0)a0=!0;else if(M0.morphColors!==W6)a0=!0;else if(M0.toneMapping!==H6)a0=!0;else if(M0.morphTargetsCount!==i0)a0=!0}else a0=!0,M0.__version=l.version;let i6=M0.currentProgram;if(a0===!0)i6=K7(l,f,x);let Y9=!1,x6=!1,WJ=!1,q6=i6.getUniforms(),M8=M0.uniforms;if(k0.useProgram(i6.program))Y9=!0,x6=!0,WJ=!0;if(l.id!==j)j=l.id,x6=!0;if(Y9||h!==M){q6.setValue(T,"projectionMatrix",M.projectionMatrix),q6.setValue(T,"viewMatrix",M.matrixWorldInverse);let m6=q6.map.cameraPosition;if(m6!==void 0)m6.setValue(T,z0.setFromMatrixPosition(M.matrixWorld));if(Q6.logarithmicDepthBuffer)q6.setValue(T,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(l.isMeshPhongMaterial||l.isMeshToonMaterial||l.isMeshLambertMaterial||l.isMeshBasicMaterial||l.isMeshStandardMaterial||l.isShaderMaterial)q6.setValue(T,"isOrthographic",M.isOrthographicCamera===!0);if(h!==M)h=M,x6=!0,WJ=!0}if(x.isSkinnedMesh){q6.setOptional(T,x,"bindMatrix"),q6.setOptional(T,x,"bindMatrixInverse");let m6=x.skeleton;if(m6){if(m6.boneTexture===null)m6.computeBoneTexture();q6.setValue(T,"boneTexture",m6.boneTexture,j0)}}if(x.isBatchedMesh){if(q6.setOptional(T,x,"batchingTexture"),q6.setValue(T,"batchingTexture",x._matricesTexture,j0),q6.setOptional(T,x,"batchingIdTexture"),q6.setValue(T,"batchingIdTexture",x._indirectTexture,j0),q6.setOptional(T,x,"batchingColorTexture"),x._colorsTexture!==null)q6.setValue(T,"batchingColorTexture",x._colorsTexture,j0)}let HJ=p.morphAttributes;if(HJ.position!==void 0||HJ.normal!==void 0||HJ.color!==void 0)B0.update(x,p,i6);if(x6||M0.receiveShadow!==x.receiveShadow)M0.receiveShadow=x.receiveShadow,q6.setValue(T,"receiveShadow",x.receiveShadow);if(l.isMeshGouraudMaterial&&l.envMap!==null)M8.envMap.value=N0,M8.flipEnvMap.value=N0.isCubeTexture&&N0.isRenderTargetTexture===!1?-1:1;if(l.isMeshStandardMaterial&&l.envMap===null&&f.environment!==null)M8.envMapIntensity.value=f.environmentIntensity;if(x6){if(q6.setValue(T,"toneMappingExposure",z.toneMappingExposure),M0.needsLights)vZ(M8,WJ);if(X0&&l.fog===!0)e.refreshFogUniforms(M8,X0);e.refreshMaterialUniforms(M8,l,v,y,O.state.transmissionRenderTarget[M.id]),i9.upload(T,v5(M0),M8,j0)}if(l.isShaderMaterial&&l.uniformsNeedUpdate===!0)i9.upload(T,v5(M0),M8,j0),l.uniformsNeedUpdate=!1;if(l.isSpriteMaterial)q6.setValue(T,"center",x.center);if(q6.setValue(T,"modelViewMatrix",x.modelViewMatrix),q6.setValue(T,"normalMatrix",x.normalMatrix),q6.setValue(T,"modelMatrix",x.matrixWorld),l.isShaderMaterial||l.isRawShaderMaterial){let m6=l.uniformsGroups;for(let KJ=0,hZ=m6.length;KJ<hZ;KJ++){let h5=m6[KJ];m0.update(h5,i6),m0.bind(h5,i6)}}return i6}function vZ(M,f){M.ambientLightColor.needsUpdate=f,M.lightProbe.needsUpdate=f,M.directionalLights.needsUpdate=f,M.directionalLightShadows.needsUpdate=f,M.pointLights.needsUpdate=f,M.pointLightShadows.needsUpdate=f,M.spotLights.needsUpdate=f,M.spotLightShadows.needsUpdate=f,M.rectAreaLights.needsUpdate=f,M.hemisphereLights.needsUpdate=f}function xZ(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}if(this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,f,p){S0.get(M.texture).__webglTexture=f,S0.get(M.depthTexture).__webglTexture=p;let l=S0.get(M);if(l.__hasExternalTextures=!0,l.__autoAllocateDepthBuffer=p===void 0,!l.__autoAllocateDepthBuffer){if(g0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),l.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(M,f){let p=S0.get(M);p.__webglFramebuffer=f,p.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(M,f=0,p=0){k=M,w=f,g=p;let l=!0,x=null,X0=!1,q0=!1;if(M){let N0=S0.get(M);if(N0.__useDefaultFramebuffer!==void 0)k0.bindFramebuffer(T.FRAMEBUFFER,null),l=!1;else if(N0.__webglFramebuffer===void 0)j0.setupRenderTarget(M);else if(N0.__hasExternalTextures)j0.rebindTextures(M,S0.get(M.texture).__webglTexture,S0.get(M.depthTexture).__webglTexture);let I0=M.texture;if(I0.isData3DTexture||I0.isDataArrayTexture||I0.isCompressedArrayTexture)q0=!0;let P0=S0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(P0[f]))x=P0[f][p];else x=P0[f];X0=!0}else if(M.samples>0&&j0.useMultisampledRTT(M)===!1)x=S0.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(P0))x=P0[p];else x=P0;L.copy(M.viewport),C.copy(M.scissor),S=M.scissorTest}else L.copy($0).multiplyScalar(v).floor(),C.copy(W0).multiplyScalar(v).floor(),S=V0;if(k0.bindFramebuffer(T.FRAMEBUFFER,x)&&l)k0.drawBuffers(M,x);if(k0.viewport(L),k0.scissor(C),k0.setScissorTest(S),X0){let N0=S0.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+f,N0.__webglTexture,p)}else if(q0){let N0=S0.get(M.texture),I0=f||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,N0.__webglTexture,p||0,I0)}j=-1},this.readRenderTargetPixels=function(M,f,p,l,x,X0,q0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let E0=S0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&q0!==void 0)E0=E0[q0];if(E0){k0.bindFramebuffer(T.FRAMEBUFFER,E0);try{let N0=M.texture,I0=N0.format,P0=N0.type;if(!Q6.textureFormatReadable(I0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q6.textureTypeReadable(P0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=M.width-l&&(p>=0&&p<=M.height-x))T.readPixels(f,p,l,x,G0.convert(I0),G0.convert(P0),X0)}finally{let N0=k!==null?S0.get(k).__webglFramebuffer:null;k0.bindFramebuffer(T.FRAMEBUFFER,N0)}}},this.readRenderTargetPixelsAsync=async function(M,f,p,l,x,X0,q0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let E0=S0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&q0!==void 0)E0=E0[q0];if(E0){k0.bindFramebuffer(T.FRAMEBUFFER,E0);try{let N0=M.texture,I0=N0.format,P0=N0.type;if(!Q6.textureFormatReadable(I0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q6.textureTypeReadable(P0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(f>=0&&f<=M.width-l&&(p>=0&&p<=M.height-x)){let D0=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,D0),T.bufferData(T.PIXEL_PACK_BUFFER,X0.byteLength,T.STREAM_READ),T.readPixels(f,p,l,x,G0.convert(I0),G0.convert(P0),0),T.flush();let o0=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await Q1(T,o0,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,D0),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,X0)}finally{T.deleteBuffer(D0),T.deleteSync(o0)}return X0}}finally{let N0=k!==null?S0.get(k).__webglFramebuffer:null;k0.bindFramebuffer(T.FRAMEBUFFER,N0)}}},this.copyFramebufferToTexture=function(M,f=null,p=0){if(M.isTexture!==!0)console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),f=arguments[0]||null,M=arguments[1];let l=Math.pow(2,-p),x=Math.floor(M.image.width*l),X0=Math.floor(M.image.height*l),q0=f!==null?f.x:0,E0=f!==null?f.y:0;j0.setTexture2D(M,0),T.copyTexSubImage2D(T.TEXTURE_2D,p,0,0,q0,E0,x,X0),k0.unbindTexture()},this.copyTextureToTexture=function(M,f,p=null,l=null,x=0){if(M.isTexture!==!0)console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),l=arguments[0]||null,M=arguments[1],f=arguments[2],x=arguments[3]||0,p=null;let X0,q0,E0,N0,I0,P0;if(p!==null)X0=p.max.x-p.min.x,q0=p.max.y-p.min.y,E0=p.min.x,N0=p.min.y;else X0=M.image.width,q0=M.image.height,E0=0,N0=0;if(l!==null)I0=l.x,P0=l.y;else I0=0,P0=0;let D0=G0.convert(f.format),o0=G0.convert(f.type);j0.setTexture2D(f,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,f.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,f.unpackAlignment);let W6=T.getParameter(T.UNPACK_ROW_LENGTH),H6=T.getParameter(T.UNPACK_IMAGE_HEIGHT),v6=T.getParameter(T.UNPACK_SKIP_PIXELS),i0=T.getParameter(T.UNPACK_SKIP_ROWS),M0=T.getParameter(T.UNPACK_SKIP_IMAGES),M6=M.isCompressedTexture?M.mipmaps[x]:M.image;if(T.pixelStorei(T.UNPACK_ROW_LENGTH,M6.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,M6.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,E0),T.pixelStorei(T.UNPACK_SKIP_ROWS,N0),M.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,x,I0,P0,X0,q0,D0,o0,M6.data);else if(M.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,x,I0,P0,M6.width,M6.height,D0,M6.data);else T.texSubImage2D(T.TEXTURE_2D,x,I0,P0,X0,q0,D0,o0,M6);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,W6),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,H6),T.pixelStorei(T.UNPACK_SKIP_PIXELS,v6),T.pixelStorei(T.UNPACK_SKIP_ROWS,i0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,M0),x===0&&f.generateMipmaps)T.generateMipmap(T.TEXTURE_2D);k0.unbindTexture()},this.copyTextureToTexture3D=function(M,f,p=null,l=null,x=0){if(M.isTexture!==!0)console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),p=arguments[0]||null,l=arguments[1]||null,M=arguments[2],f=arguments[3],x=arguments[4]||0;let X0,q0,E0,N0,I0,P0,D0,o0,W6,H6=M.isCompressedTexture?M.mipmaps[x]:M.image;if(p!==null)X0=p.max.x-p.min.x,q0=p.max.y-p.min.y,E0=p.max.z-p.min.z,N0=p.min.x,I0=p.min.y,P0=p.min.z;else X0=H6.width,q0=H6.height,E0=H6.depth,N0=0,I0=0,P0=0;if(l!==null)D0=l.x,o0=l.y,W6=l.z;else D0=0,o0=0,W6=0;let v6=G0.convert(f.format),i0=G0.convert(f.type),M0;if(f.isData3DTexture)j0.setTexture3D(f,0),M0=T.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)j0.setTexture2DArray(f,0),M0=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,f.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,f.unpackAlignment);let M6=T.getParameter(T.UNPACK_ROW_LENGTH),a0=T.getParameter(T.UNPACK_IMAGE_HEIGHT),i6=T.getParameter(T.UNPACK_SKIP_PIXELS),Y9=T.getParameter(T.UNPACK_SKIP_ROWS),x6=T.getParameter(T.UNPACK_SKIP_IMAGES);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,H6.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,H6.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,N0),T.pixelStorei(T.UNPACK_SKIP_ROWS,I0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,P0),M.isDataTexture||M.isData3DTexture)T.texSubImage3D(M0,x,D0,o0,W6,X0,q0,E0,v6,i0,H6.data);else if(f.isCompressedArrayTexture)T.compressedTexSubImage3D(M0,x,D0,o0,W6,X0,q0,E0,v6,H6.data);else T.texSubImage3D(M0,x,D0,o0,W6,X0,q0,E0,v6,i0,H6);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,M6),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,a0),T.pixelStorei(T.UNPACK_SKIP_PIXELS,i6),T.pixelStorei(T.UNPACK_SKIP_ROWS,Y9),T.pixelStorei(T.UNPACK_SKIP_IMAGES,x6),x===0&&f.generateMipmaps)T.generateMipmap(M0);k0.unbindTexture()},this.initRenderTarget=function(M){if(S0.get(M).__webglFramebuffer===void 0)j0.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)j0.setTextureCube(M,0);else if(M.isData3DTexture)j0.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)j0.setTexture2DArray(M,0);else j0.setTexture2D(M,0);k0.unbindTexture()},this.resetState=function(){w=0,g=0,k=null,k0.reset(),A0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=J==="display-p3"?"display-p3":"srgb",Q.unpackColorSpace=s0.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}}class S9 extends $6{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new X8,this.environmentIntensity=1,this.environmentRotation=new X8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class J7{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=J8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}get updateRange(){return cJ("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,X=this.stride;Z<X;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=J8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=J8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var P6=new P;class u6{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)P6.fromBufferAttribute(this,Q),P6.applyMatrix4(J),this.setXYZ(Q,P6.x,P6.y,P6.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)P6.fromBufferAttribute(this,Q),P6.applyNormalMatrix(J),this.setXYZ(Q,P6.x,P6.y,P6.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)P6.fromBufferAttribute(this,Q),P6.transformDirection(J),this.setXYZ(Q,P6.x,P6.y,P6.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=e6($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=t0($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=e6(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=e6(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=e6(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=e6(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=t0(Q,this.array),$=t0($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=t0(Q,this.array),$=t0($,this.array),Z=t0(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,X){if(J=J*this.data.stride+this.offset,this.normalized)Q=t0(Q,this.array),$=t0($,this.array),Z=t0(Z,this.array),X=t0(X,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=X,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let X=0;X<this.itemSize;X++)Q.push(this.data.array[Z+X])}return new R6(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new u6(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let X=0;X<this.itemSize;X++)Q.push(this.data.array[Z+X])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var IQ=new P,AQ=new c0,PQ=new c0,sW=new P,TQ=new y0,T7=new P,yJ=new A6,SQ=new y0,fJ=new i8;class Q5 extends n0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new y0,this.bindMatrixInverse=new y0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new N6;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,T7),this.boundingBox.expandByPoint(T7)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new A6;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,T7),this.boundingSphere.expandByPoint(T7)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(yJ.copy(this.boundingSphere),yJ.applyMatrix4(Z),J.ray.intersectsSphere(yJ)===!1)return;if(SQ.copy(Z).invert(),fJ.copy(J.ray).applyMatrix4(SQ),this.boundingBox!==null){if(fJ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,fJ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new c0,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let X=1/J.manhattanLength();if(X!==1/0)J.multiplyScalar(X);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;AQ.fromBufferAttribute(Z.attributes.skinIndex,J),PQ.fromBufferAttribute(Z.attributes.skinWeight,J),IQ.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let X=0;X<4;X++){let Y=PQ.getComponent(X);if(Y!==0){let W=AQ.getComponent(X);TQ.multiplyMatrices($.bones[W].matrixWorld,$.boneInverses[W]),Q.addScaledVector(sW.copy(IQ).applyMatrix4(TQ),Y)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class n7 extends $6{constructor(){super();this.isBone=!0,this.type="Bone"}}class $5 extends F6{constructor(J=null,Q=1,$=1,Z,X,Y,W,H,K=1003,G=1003,q,U){super(null,Y,W,H,K,G,Z,X,q,U);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var jQ=new y0,oW=new y0;class s7{constructor(J=[],Q=[]){this.uuid=J8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new y0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new y0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let X=0,Y=J.length;X<Y;X++){let W=J[X]?J[X].matrixWorld:oW;jQ.multiplyMatrices(W,Q[X]),jQ.toArray($,X*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new s7(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new $5(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let X=J.bones[$],Y=Q[X];if(Y===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",X),Y=new n7;this.bones.push(Y),this.boneInverses.push(new y0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,X=Q.length;Z<X;Z++){let Y=Q[Z];J.bones.push(Y.uuid);let W=$[Z];J.boneInverses.push(W.toArray())}return J}}class I9 extends R6{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var C9=new y0,yQ=new y0,S7=[],fQ=new N6,iW=new y0,m9=new n0,l9=new A6;class Z5 extends n0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new I9(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,iW)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new N6;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,C9),fQ.copy(J.boundingBox).applyMatrix4(C9),this.boundingBox.union(fQ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new A6;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,C9),l9.copy(J.boundingSphere).applyMatrix4(C9),this.boundingSphere.union(l9)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,X=$.length+1,Y=J*X+1;for(let W=0;W<$.length;W++)$[W]=Z[Y+W]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(m9.geometry=this.geometry,m9.material=this.material,m9.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(l9.copy(this.boundingSphere),l9.applyMatrix4($),J.ray.intersectsSphere(l9)===!1)return;for(let X=0;X<Z;X++){this.getMatrixAt(X,C9),yQ.multiplyMatrices($,C9),m9.matrixWorld=yQ,m9.raycast(J,S7);for(let Y=0,W=S7.length;Y<W;Y++){let H=S7[Y];H.instanceId=X,H.object=this,Q.push(H)}S7.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new I9(new Float32Array(this.instanceMatrix.count*3),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new $5(new Float32Array(Z*this.count),Z,this.count,1028,1015);let X=this.morphTexture.source.data.data,Y=0;for(let K=0;K<$.length;K++)Y+=$[K];let W=this.geometry.morphTargetsRelative?1:1-Y,H=Z*J;X[H]=W,X.set($,H+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null;return this}}class o7 extends n6{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var g7=new P,p7=new P,vQ=new y0,d9=new i8,j7=new A6,vJ=new P,xQ=new P;class Q7 extends $6{constructor(J=new f6,Q=new o7){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,X=Q.count;Z<X;Z++)g7.fromBufferAttribute(Q,Z-1),p7.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=g7.distanceTo(p7);J.setAttribute("lineDistance",new j6($,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,X=J.params.Line.threshold,Y=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(j7.copy($.boundingSphere),j7.applyMatrix4(Z),j7.radius+=X,J.ray.intersectsSphere(j7)===!1)return;vQ.copy(Z).invert(),d9.copy(J.ray).applyMatrix4(vQ);let W=X/((this.scale.x+this.scale.y+this.scale.z)/3),H=W*W,K=this.isLineSegments?2:1,G=$.index,U=$.attributes.position;if(G!==null){let F=Math.max(0,Y.start),N=Math.min(G.count,Y.start+Y.count);for(let B=F,O=N-1;B<O;B+=K){let V=G.getX(B),E=G.getX(B+1),z=y7(this,J,d9,H,V,E);if(z)Q.push(z)}if(this.isLineLoop){let B=G.getX(N-1),O=G.getX(F),V=y7(this,J,d9,H,B,O);if(V)Q.push(V)}}else{let F=Math.max(0,Y.start),N=Math.min(U.count,Y.start+Y.count);for(let B=F,O=N-1;B<O;B+=K){let V=y7(this,J,d9,H,B,B+1);if(V)Q.push(V)}if(this.isLineLoop){let B=y7(this,J,d9,H,N-1,F);if(B)Q.push(B)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let X=0,Y=Z.length;X<Y;X++){let W=Z[X].name||String(X);this.morphTargetInfluences.push(0),this.morphTargetDictionary[W]=X}}}}}function y7(J,Q,$,Z,X,Y){let W=J.geometry.attributes.position;if(g7.fromBufferAttribute(W,X),p7.fromBufferAttribute(W,Y),$.distanceSqToSegment(g7,p7,vJ,xQ)>Z)return;vJ.applyMatrix4(J.matrixWorld);let K=Q.ray.origin.distanceTo(vJ);if(K<Q.near||K>Q.far)return;return{distance:K,point:xQ.clone().applyMatrix4(J.matrixWorld),index:X,face:null,faceIndex:null,object:J}}var hQ=new P,bQ=new P;class X5 extends Q7{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,X=Q.count;Z<X;Z+=2)hQ.fromBufferAttribute(Q,Z),bQ.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+hQ.distanceTo(bQ);J.setAttribute("lineDistance",new j6($,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y5 extends Q7{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class i7 extends n6{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var gQ=new y0,gJ=new i8,f7=new A6,v7=new P;class W5 extends $6{constructor(J=new f6,Q=new i7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,X=J.params.Points.threshold,Y=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(f7.copy($.boundingSphere),f7.applyMatrix4(Z),f7.radius+=X,J.ray.intersectsSphere(f7)===!1)return;gQ.copy(Z).invert(),gJ.copy(J.ray).applyMatrix4(gQ);let W=X/((this.scale.x+this.scale.y+this.scale.z)/3),H=W*W,K=$.index,q=$.attributes.position;if(K!==null){let U=Math.max(0,Y.start),F=Math.min(K.count,Y.start+Y.count);for(let N=U,B=F;N<B;N++){let O=K.getX(N);v7.fromBufferAttribute(q,O),pQ(v7,O,H,Z,J,Q,this)}}else{let U=Math.max(0,Y.start),F=Math.min(q.count,Y.start+Y.count);for(let N=U,B=F;N<B;N++)v7.fromBufferAttribute(q,N),pQ(v7,N,H,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let X=0,Y=Z.length;X<Y;X++){let W=Z[X].name||String(X);this.morphTargetInfluences.push(0),this.morphTargetDictionary[W]=X}}}}}function pQ(J,Q,$,Z,X,Y,W){let H=gJ.distanceSqToPoint(J);if(H<$){let K=new P;gJ.closestPointToPoint(J,K),K.applyMatrix4(Z);let G=X.ray.origin.distanceTo(K);if(G<X.near||G>X.far)return;Y.push({distance:G,distanceToRay:Math.sqrt(H),point:K,index:Q,face:null,object:W})}}class H5 extends f6{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],$=new Set,Z=new P,X=new P;if(J.index!==null){let Y=J.attributes.position,W=J.index,H=J.groups;if(H.length===0)H=[{start:0,count:W.count,materialIndex:0}];for(let K=0,G=H.length;K<G;++K){let q=H[K],U=q.start,F=q.count;for(let N=U,B=U+F;N<B;N+=3)for(let O=0;O<3;O++){let V=W.getX(N+O),E=W.getX(N+(O+1)%3);if(Z.fromBufferAttribute(Y,V),X.fromBufferAttribute(Y,E),uQ(Z,X,$)===!0)Q.push(Z.x,Z.y,Z.z),Q.push(X.x,X.y,X.z)}}}else{let Y=J.attributes.position;for(let W=0,H=Y.count/3;W<H;W++)for(let K=0;K<3;K++){let G=3*W+K,q=3*W+(K+1)%3;if(Z.fromBufferAttribute(Y,G),X.fromBufferAttribute(Y,q),uQ(Z,X,$)===!0)Q.push(Z.x,Z.y,Z.z),Q.push(X.x,X.y,X.z)}}this.setAttribute("position",new j6(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function uQ(J,Q,$){let Z=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,X=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if($.has(Z)===!0||$.has(X)===!0)return!1;else return $.add(Z),$.add(X),!0}class H8 extends n6{constructor(J){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new X8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class s6 extends H8{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new R0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return B6(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}function x7(J,Q,$){if(!J||!$&&J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function aW(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function rW(J){function Q(X,Y){return J[X]-J[Y]}let $=J.length,Z=Array($);for(let X=0;X!==$;++X)Z[X]=X;return Z.sort(Q),Z}function mQ(J,Q,$){let Z=J.length,X=new J.constructor(Z);for(let Y=0,W=0;W!==Z;++Y){let H=$[Y]*Q;for(let K=0;K!==Q;++K)X[W++]=J[H+K]}return X}function w$(J,Q,$,Z){let X=1,Y=J[0];while(Y!==void 0&&Y[Z]===void 0)Y=J[X++];if(Y===void 0)return;let W=Y[Z];if(W===void 0)return;if(Array.isArray(W))do{if(W=Y[Z],W!==void 0)Q.push(Y.time),$.push.apply($,W);Y=J[X++]}while(Y!==void 0);else if(W.toArray!==void 0)do{if(W=Y[Z],W!==void 0)Q.push(Y.time),W.toArray($,$.length);Y=J[X++]}while(Y!==void 0);else do{if(W=Y[Z],W!==void 0)Q.push(Y.time),$.push(W);Y=J[X++]}while(Y!==void 0)}class r8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],X=Q[$-1];J:{Q:{let Y;$:{Z:if(!(J<Z)){for(let W=$+2;;){if(Z===void 0){if(J<X)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===W)break;if(X=Z,Z=Q[++$],J<Z)break Q}Y=Q.length;break $}if(!(J>=X)){let W=Q[1];if(J<W)$=2,X=W;for(let H=$-2;;){if(X===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===H)break;if(Z=X,X=Q[--$-1],J>=X)break Q}Y=$,$=0;break $}break J}while($<Y){let W=$+Y>>>1;if(J<Q[W])Y=W;else $=W+1}if(Z=Q[$],X=Q[$-1],X===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,X,Z)}return this.interpolate_($,X,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,X=J*Z;for(let Y=0;Y!==Z;++Y)Q[Y]=$[X+Y];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class I$ extends r8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,X=J-2,Y=J+1,W=Z[X],H=Z[Y];if(W===void 0)switch(this.getSettings_().endingStart){case 2401:X=J,W=2*Q-$;break;case 2402:X=Z.length-2,W=Q+Z[X]-Z[X+1];break;default:X=J,W=$}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:Y=J,H=2*$-Q;break;case 2402:Y=1,H=$+Z[1]-Z[0];break;default:Y=J-1,H=Q}let K=($-Q)*0.5,G=this.valueSize;this._weightPrev=K/(Q-W),this._weightNext=K/(H-$),this._offsetPrev=X*G,this._offsetNext=Y*G}interpolate_(J,Q,$,Z){let X=this.resultBuffer,Y=this.sampleValues,W=this.valueSize,H=J*W,K=H-W,G=this._offsetPrev,q=this._offsetNext,U=this._weightPrev,F=this._weightNext,N=($-Q)/(Z-Q),B=N*N,O=B*N,V=-U*O+2*U*B-U*N,E=(1+U)*O+(-1.5-2*U)*B+(-0.5+U)*N+1,z=(-1-F)*O+(1.5+F)*B+0.5*N,D=F*O-F*B;for(let w=0;w!==W;++w)X[w]=V*Y[G+w]+E*Y[K+w]+z*Y[H+w]+D*Y[q+w];return X}}class A$ extends r8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let X=this.resultBuffer,Y=this.sampleValues,W=this.valueSize,H=J*W,K=H-W,G=($-Q)/(Z-Q),q=1-G;for(let U=0;U!==W;++U)X[U]=Y[K+U]*q+Y[H+U]*G;return X}}class P$ extends r8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class Q8{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=x7(Q,this.TimeBufferType),this.values=x7($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:x7(J.times,Array),values:x7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new P$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new A$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new I$(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return console.warn("THREE.KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,X=0,Y=Z-1;while(X!==Z&&$[X]<J)++X;while(Y!==-1&&$[Y]>Q)--Y;if(++Y,X!==0||Y!==Z){if(X>=Y)Y=Math.max(Y,1),X=Y-1;let W=this.getValueSize();this.times=$.slice(X,Y),this.values=this.values.slice(X*W,Y*W)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,X=$.length;if(X===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let Y=null;for(let W=0;W!==X;W++){let H=$[W];if(typeof H==="number"&&isNaN(H)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,W,H),J=!1;break}if(Y!==null&&Y>H){console.error("THREE.KeyframeTrack: Out of order keys.",this,W,H,Y),J=!1;break}Y=H}if(Z!==void 0){if(aW(Z))for(let W=0,H=Z.length;W!==H;++W){let K=Z[W];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,W,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,X=J.length-1,Y=1;for(let W=1;W<X;++W){let H=!1,K=J[W],G=J[W+1];if(K!==G&&(W!==1||K!==J[0]))if(!Z){let q=W*$,U=q-$,F=q+$;for(let N=0;N!==$;++N){let B=Q[q+N];if(B!==Q[U+N]||B!==Q[F+N]){H=!0;break}}}else H=!0;if(H){if(W!==Y){J[Y]=J[W];let q=W*$,U=Y*$;for(let F=0;F!==$;++F)Q[U+F]=Q[q+F]}++Y}}if(X>0){J[Y]=J[X];for(let W=X*$,H=Y*$,K=0;K!==$;++K)Q[H+K]=Q[W+K];++Y}if(Y!==J.length)this.times=J.slice(0,Y),this.values=Q.slice(0,Y*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}Q8.prototype.TimeBufferType=Float32Array;Q8.prototype.ValueBufferType=Float32Array;Q8.prototype.DefaultInterpolation=2301;class t8 extends Q8{constructor(J,Q,$){super(J,Q,$)}}t8.prototype.ValueTypeName="bool";t8.prototype.ValueBufferType=Array;t8.prototype.DefaultInterpolation=2300;t8.prototype.InterpolantFactoryMethodLinear=void 0;t8.prototype.InterpolantFactoryMethodSmooth=void 0;class K5 extends Q8{}K5.prototype.ValueTypeName="color";class A8 extends Q8{}A8.prototype.ValueTypeName="number";class T$ extends r8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let X=this.resultBuffer,Y=this.sampleValues,W=this.valueSize,H=($-Q)/(Z-Q),K=J*W;for(let G=K+W;K!==G;K+=4)g6.slerpFlat(X,0,Y,K-W,Y,K,H);return X}}class j8 extends Q8{InterpolantFactoryMethodLinear(J){return new T$(this.times,this.values,this.getValueSize(),J)}}j8.prototype.ValueTypeName="quaternion";j8.prototype.InterpolantFactoryMethodSmooth=void 0;class e8 extends Q8{constructor(J,Q,$){super(J,Q,$)}}e8.prototype.ValueTypeName="string";e8.prototype.ValueBufferType=Array;e8.prototype.DefaultInterpolation=2300;e8.prototype.InterpolantFactoryMethodLinear=void 0;e8.prototype.InterpolantFactoryMethodSmooth=void 0;class P8 extends Q8{}P8.prototype.ValueTypeName="vector";class G5{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=J8(),this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let Y=0,W=$.length;Y!==W;++Y)Q.push(eW($[Y]).scale(Z));let X=new this(J.name,J.duration,Q,J.blendMode);return X.uuid=J.uuid,X}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode};for(let X=0,Y=$.length;X!==Y;++X)Q.push(Q8.toJSON($[X]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let X=Q.length,Y=[];for(let W=0;W<X;W++){let H=[],K=[];H.push((W+X-1)%X,W,(W+1)%X),K.push(0,1,0);let G=rW(H);if(H=mQ(H,1,G),K=mQ(K,1,G),!Z&&H[0]===0)H.push(X),K.push(K[0]);Y.push(new A8(".morphTargetInfluences["+Q[W].name+"]",H,K).scale(1/$))}return new this(J,-1,Y)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},X=/^([\w-]*?)([\d]+)$/;for(let W=0,H=J.length;W<H;W++){let K=J[W],G=K.name.match(X);if(G&&G.length>1){let q=G[1],U=Z[q];if(!U)Z[q]=U=[];U.push(K)}}let Y=[];for(let W in Z)Y.push(this.CreateFromMorphTargetSequence(W,Z[W],Q,$));return Y}static parseAnimation(J,Q){if(!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let $=function(q,U,F,N,B){if(F.length!==0){let O=[],V=[];if(w$(F,O,V,N),O.length!==0)B.push(new q(U,O,V))}},Z=[],X=J.name||"default",Y=J.fps||30,W=J.blendMode,H=J.length||-1,K=J.hierarchy||[];for(let q=0;q<K.length;q++){let U=K[q].keys;if(!U||U.length===0)continue;if(U[0].morphTargets){let F={},N;for(N=0;N<U.length;N++)if(U[N].morphTargets)for(let B=0;B<U[N].morphTargets.length;B++)F[U[N].morphTargets[B]]=-1;for(let B in F){let O=[],V=[];for(let E=0;E!==U[N].morphTargets.length;++E){let z=U[N];O.push(z.time),V.push(z.morphTarget===B?1:0)}Z.push(new A8(".morphTargetInfluence["+B+"]",O,V))}H=F.length*Y}else{let F=".bones["+Q[q].name+"]";$(P8,F+".position",U,"pos",Z),$(j8,F+".quaternion",U,"rot",Z),$(P8,F+".scale",U,"scl",Z)}}if(Z.length===0)return null;return new this(X,H,Z,W)}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let X=this.tracks[$];Q=Math.max(Q,X.times[X.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());return new this.constructor(this.name,this.duration,J,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tW(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return A8;case"vector":case"vector2":case"vector3":case"vector4":return P8;case"color":return K5;case"quaternion":return j8;case"bool":case"boolean":return t8;case"string":return e8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function eW(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=tW(J.type);if(J.times===void 0){let $=[],Z=[];w$(J.keys,$,Z,"value"),J.times=$,J.values=Z}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var I8={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class S${constructor(J,Q,$){let Z=this,X=!1,Y=0,W=0,H=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this.itemStart=function(G){if(W++,X===!1){if(Z.onStart!==void 0)Z.onStart(G,Y,W)}X=!0},this.itemEnd=function(G){if(Y++,Z.onProgress!==void 0)Z.onProgress(G,Y,W);if(Y===W){if(X=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(G){if(Z.onError!==void 0)Z.onError(G)},this.resolveURL=function(G){if(H)return H(G);return G},this.setURLModifier=function(G){return H=G,this},this.addHandler=function(G,q){return K.push(G,q),this},this.removeHandler=function(G){let q=K.indexOf(G);if(q!==-1)K.splice(q,2);return this},this.getHandler=function(G){for(let q=0,U=K.length;q<U;q+=2){let F=K[q],N=K[q+1];if(F.global)F.lastIndex=0;if(F.test(G))return N}return null}}}var JH=new S$;class y8{constructor(J){this.manager=J!==void 0?J:JH,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,X){$.load(J,Z,Q,X)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}y8.DEFAULT_MATERIAL_NAME="__DEFAULT";var B8={};class j$ extends Error{constructor(J,Q){super(J);this.response=Q}}class a7 extends y8{constructor(J){super(J)}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let X=I8.get(J);if(X!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(X);this.manager.itemEnd(J)},0),X;if(B8[J]!==void 0){B8[J].push({onLoad:Q,onProgress:$,onError:Z});return}B8[J]=[],B8[J].push({onLoad:Q,onProgress:$,onError:Z});let Y=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),W=this.mimeType,H=this.responseType;fetch(Y).then((K)=>{if(K.status===200||K.status===0){if(K.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||K.body===void 0||K.body.getReader===void 0)return K;let G=B8[J],q=K.body.getReader(),U=K.headers.get("X-File-Size")||K.headers.get("Content-Length"),F=U?parseInt(U):0,N=F!==0,B=0,O=new ReadableStream({start(V){E();function E(){q.read().then(({done:z,value:D})=>{if(z)V.close();else{B+=D.byteLength;let w=new ProgressEvent("progress",{lengthComputable:N,loaded:B,total:F});for(let g=0,k=G.length;g<k;g++){let j=G[g];if(j.onProgress)j.onProgress(w)}V.enqueue(D),E()}},(z)=>{V.error(z)})}}});return new Response(O)}else throw new j$(`fetch for "${K.url}" responded with ${K.status}: ${K.statusText}`,K)}).then((K)=>{switch(H){case"arraybuffer":return K.arrayBuffer();case"blob":return K.blob();case"document":return K.text().then((G)=>{return new DOMParser().parseFromString(G,W)});case"json":return K.json();default:if(W===void 0)return K.text();else{let q=/charset="?([^;"\s]*)"?/i.exec(W),U=q&&q[1]?q[1].toLowerCase():void 0,F=new TextDecoder(U);return K.arrayBuffer().then((N)=>F.decode(N))}}}).then((K)=>{I8.add(J,K);let G=B8[J];delete B8[J];for(let q=0,U=G.length;q<U;q++){let F=G[q];if(F.onLoad)F.onLoad(K)}}).catch((K)=>{let G=B8[J];if(G===void 0)throw this.manager.itemError(J),K;delete B8[J];for(let q=0,U=G.length;q<U;q++){let F=G[q];if(F.onError)F.onError(K)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}}class y$ extends y8{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let X=this,Y=I8.get(J);if(Y!==void 0)return X.manager.itemStart(J),setTimeout(function(){if(Q)Q(Y);X.manager.itemEnd(J)},0),Y;let W=a9("img");function H(){if(G(),I8.add(J,this),Q)Q(this);X.manager.itemEnd(J)}function K(q){if(G(),Z)Z(q);X.manager.itemError(J),X.manager.itemEnd(J)}function G(){W.removeEventListener("load",H,!1),W.removeEventListener("error",K,!1)}if(W.addEventListener("load",H,!1),W.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)W.crossOrigin=this.crossOrigin}return X.manager.itemStart(J),W.src=J,W}}class q5 extends y8{constructor(J){super(J)}load(J,Q,$,Z){let X=new F6,Y=new y$(this.manager);return Y.setCrossOrigin(this.crossOrigin),Y.setPath(this.path),Y.load(J,function(W){if(X.image=W,X.needsUpdate=!0,Q!==void 0)Q(X)},$,Z),X}}class $7 extends $6{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new _0(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}class U5 extends $7{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($6.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}}var xJ=new y0,lQ=new P,dQ=new P;class r7{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R0(512,512),this.map=null,this.mapPass=null,this.matrix=new y0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new d7,this._frameExtents=new R0(1,1),this._viewportCount=1,this._viewports=[new c0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;lQ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(lQ),dQ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(dQ),Q.updateMatrixWorld(),xJ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xJ),$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),$.multiply(xJ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class f$ extends r7{constructor(){super(new I6(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1}updateMatrices(J){let Q=this.camera,$=_9*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height,X=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||X!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=X,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class F5 extends $7{constructor(J,Q,$=0,Z=Math.PI/3,X=0,Y=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy($6.DEFAULT_UP),this.updateMatrix(),this.target=new $6,this.distance=$,this.angle=Z,this.penumbra=X,this.decay=Y,this.map=null,this.shadow=new f$}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var cQ=new y0,c9=new P,hJ=new P;class v$ extends r7{constructor(){super(new I6(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new R0(4,2),this._viewportCount=6,this._viewports=[new c0(2,1,1,1),new c0(0,1,1,1),new c0(3,1,1,1),new c0(1,1,1,1),new c0(3,0,1,1),new c0(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(J,Q=0){let $=this.camera,Z=this.matrix,X=J.distance||$.far;if(X!==$.far)$.far=X,$.updateProjectionMatrix();c9.setFromMatrixPosition(J.matrixWorld),$.position.copy(c9),hJ.copy($.position),hJ.add(this._cubeDirections[Q]),$.up.copy(this._cubeUps[Q]),$.lookAt(hJ),$.updateMatrixWorld(),Z.makeTranslation(-c9.x,-c9.y,-c9.z),cQ.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cQ)}}class Z7 extends $7{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new v$}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class x$ extends r7{constructor(){super(new S8(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class j9 extends $7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($6.DEFAULT_UP),this.updateMatrix(),this.target=new $6,this.shadow=new x$}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class J9{static decodeText(J){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(J);let Q="";for(let $=0,Z=J.length;$<Z;$++)Q+=String.fromCharCode(J[$]);try{return decodeURIComponent(escape(Q))}catch($){return Q}}static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}class V5 extends f6{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}class E5 extends y8{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"}}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let X=this,Y=I8.get(J);if(Y!==void 0){if(X.manager.itemStart(J),Y.then){Y.then((K)=>{if(Q)Q(K);X.manager.itemEnd(J)}).catch((K)=>{if(Z)Z(K)});return}return setTimeout(function(){if(Q)Q(Y);X.manager.itemEnd(J)},0),Y}let W={};W.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",W.headers=this.requestHeader;let H=fetch(J,W).then(function(K){return K.blob()}).then(function(K){return createImageBitmap(K,Object.assign(X.options,{colorSpaceConversion:"none"}))}).then(function(K){if(I8.add(J,K),Q)Q(K);return X.manager.itemEnd(J),K}).catch(function(K){if(Z)Z(K);I8.remove(J),X.manager.itemError(J),X.manager.itemEnd(J)});I8.add(J,H),X.manager.itemStart(J)}}var N5="\\[\\]\\.:\\/",QH=new RegExp("["+N5+"]","g"),O5="[^"+N5+"]",$H="[^"+N5.replace("\\.","")+"]",ZH=/((?:WC+[\/:])*)/.source.replace("WC",O5),XH=/(WCOD+)?/.source.replace("WCOD",$H),YH=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",O5),WH=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",O5),HH=new RegExp("^"+ZH+XH+YH+WH+"$"),KH=["material","materials","bones","map"];class h${constructor(J,Q,$){let Z=$||r0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,X=$.length;Z!==X;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class r0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||r0.parseTrackName(Q),this.node=r0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new r0(J,Q,$);else return new r0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(QH,"")}static parseTrackName(J){let Q=HH.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let X=$.nodeName.substring(Z+1);if(KH.indexOf(X)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=X}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(X){for(let Y=0;Y<X.length;Y++){let W=X[Y];if(W.name===Q||W.uuid===Q)return W;let H=$(W.children);if(H)return H}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,X=$.length;Z!==X;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,X=$.length;Z!==X;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,X=$.length;Z!==X;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,X=$.length;Z!==X;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,X=Q.propertyIndex;if(!J)J=r0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if($){let K=Q.objectIndex;switch($){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let G=0;G<J.length;G++)if(J[G].name===K){K=G;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(K!==void 0){if(J[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let Y=J[Z];if(Y===void 0){let K=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+Z+" but it wasn't found.",J);return}let W=this.Versioning.None;if(this.targetObject=J,J.needsUpdate!==void 0)W=this.Versioning.NeedsUpdate;else if(J.matrixWorldNeedsUpdate!==void 0)W=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(X!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[X]!==void 0)X=J.morphTargetDictionary[X]}H=this.BindingType.ArrayElement,this.resolvedProperty=Y,this.propertyIndex=X}else if(Y.fromArray!==void 0&&Y.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=Y;else if(Array.isArray(Y))H=this.BindingType.EntireArray,this.resolvedProperty=Y;else this.propertyName=Z;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][W]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}r0.Composite=h$;r0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};r0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};r0.prototype.GetterByBindingType=[r0.prototype._getValue_direct,r0.prototype._getValue_array,r0.prototype._getValue_arrayElement,r0.prototype._getValue_toArray];r0.prototype.SetterByBindingTypeAndVersioning=[[r0.prototype._setValue_direct,r0.prototype._setValue_direct_setNeedsUpdate,r0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_array,r0.prototype._setValue_array_setNeedsUpdate,r0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_arrayElement,r0.prototype._setValue_arrayElement_setNeedsUpdate,r0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_fromArray,r0.prototype._setValue_fromArray_setNeedsUpdate,r0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yH=new Float32Array(1);class y9 extends J7{constructor(J,Q,$=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=$}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class t7{constructor(J=1,Q=0,$=0){return this.radius=J,this.phi=Q,this.theta=$,this}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(B6(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}var nQ=new P,h7=new P;class B5{constructor(J=new P,Q=new P){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){nQ.subVectors(J,this.start),h7.subVectors(this.end,this.start);let $=h7.dot(h7),X=h7.dot(nQ)/$;if(Q)X=B6(X,0,1);return X}closestPointToPoint(J,Q,$){let Z=this.closestPointToPointParameter(J,Q);return this.delta($).multiplyScalar(Z).add(this.start)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"166"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="166";var g$={type:"change"},R5={type:"start"},p$={type:"end"},e7=new i8,u$=new $8,GH=Math.cos(70*W8.DEG2RAD);class z5 extends R8{constructor(J,Q){super();this.object=J,this.domElement=Q,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:n8.ROTATE,MIDDLE:n8.DOLLY,RIGHT:n8.PAN},this.touches={ONE:s8.ROTATE,TWO:s8.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return W.phi},this.getAzimuthalAngle=function(){return W.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",H0),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",H0),this._domElementKeyEvents=null},this.saveState=function(){$.target0.copy($.target),$.position0.copy($.object.position),$.zoom0=$.object.zoom},this.reset=function(){$.target.copy($.target0),$.object.position.copy($.position0),$.object.zoom=$.zoom0,$.object.updateProjectionMatrix(),$.dispatchEvent(g$),$.update(),X=Z.NONE},this.update=function(){let A=new P,_=new g6().setFromUnitVectors(J.up,new P(0,1,0)),a=_.clone().invert(),c=new P,s=new g6,Q0=new P,O0=2*Math.PI;return function(Y6=null){let K6=$.object.position;if(A.copy(K6).sub($.target),A.applyQuaternion(_),W.setFromVector3(A),$.autoRotate&&X===Z.NONE)S(L(Y6));if($.enableDamping)W.theta+=H.theta*$.dampingFactor,W.phi+=H.phi*$.dampingFactor;else W.theta+=H.theta,W.phi+=H.phi;let{minAzimuthAngle:b0,maxAzimuthAngle:G6}=$;if(isFinite(b0)&&isFinite(G6)){if(b0<-Math.PI)b0+=O0;else if(b0>Math.PI)b0-=O0;if(G6<-Math.PI)G6+=O0;else if(G6>Math.PI)G6-=O0;if(b0<=G6)W.theta=Math.max(b0,Math.min(G6,W.theta));else W.theta=W.theta>(b0+G6)/2?Math.max(b0,W.theta):Math.min(G6,W.theta)}if(W.phi=Math.max($.minPolarAngle,Math.min($.maxPolarAngle,W.phi)),W.makeSafe(),$.enableDamping===!0)$.target.addScaledVector(G,$.dampingFactor);else $.target.add(G);$.target.sub($.cursor),$.target.clampLength($.minTargetRadius,$.maxTargetRadius),$.target.add($.cursor);let D6=!1;if($.zoomToCursor&&g||$.object.isOrthographicCamera)W.radius=$0(W.radius);else{let z6=W.radius;W.radius=$0(W.radius*K),D6=z6!=W.radius}if(A.setFromSpherical(W),A.applyQuaternion(a),K6.copy($.target).add(A),$.object.lookAt($.target),$.enableDamping===!0)H.theta*=1-$.dampingFactor,H.phi*=1-$.dampingFactor,G.multiplyScalar(1-$.dampingFactor);else H.set(0,0,0),G.set(0,0,0);if($.zoomToCursor&&g){let z6=null;if($.object.isPerspectiveCamera){let U8=A.length();z6=$0(U8*K);let h8=U8-z6;$.object.position.addScaledVector(D,h8),$.object.updateMatrixWorld(),D6=!!h8}else if($.object.isOrthographicCamera){let U8=new P(w.x,w.y,0);U8.unproject($.object);let h8=$.object.zoom;$.object.zoom=Math.max($.minZoom,Math.min($.maxZoom,$.object.zoom/K)),$.object.updateProjectionMatrix(),D6=h8!==$.object.zoom;let h9=new P(w.x,w.y,0);h9.unproject($.object),$.object.position.sub(h9).add(U8),$.object.updateMatrixWorld(),z6=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),$.zoomToCursor=!1;if(z6!==null)if(this.screenSpacePanning)$.target.set(0,0,-1).transformDirection($.object.matrix).multiplyScalar(z6).add($.object.position);else if(e7.origin.copy($.object.position),e7.direction.set(0,0,-1).transformDirection($.object.matrix),Math.abs($.object.up.dot(e7.direction))<GH)J.lookAt($.target);else u$.setFromNormalAndCoplanarPoint($.object.up,$.target),e7.intersectPlane(u$,$.target)}else if($.object.isOrthographicCamera){let z6=$.object.zoom;if($.object.zoom=Math.max($.minZoom,Math.min($.maxZoom,$.object.zoom/K)),z6!==$.object.zoom)$.object.updateProjectionMatrix(),D6=!0}if(K=1,g=!1,D6||c.distanceToSquared($.object.position)>Y||8*(1-s.dot($.object.quaternion))>Y||Q0.distanceToSquared($.target)>Y)return $.dispatchEvent(g$),c.copy($.object.position),s.copy($.object.quaternion),Q0.copy($.target),!0;return!1}}(),this.dispose=function(){if($.domElement.removeEventListener("contextmenu",J0),$.domElement.removeEventListener("pointerdown",j0),$.domElement.removeEventListener("pointercancel",I),$.domElement.removeEventListener("wheel",r),$.domElement.removeEventListener("pointermove",Z6),$.domElement.removeEventListener("pointerup",I),$.domElement.getRootNode().removeEventListener("keydown",e,{capture:!0}),$._domElementKeyEvents!==null)$._domElementKeyEvents.removeEventListener("keydown",H0),$._domElementKeyEvents=null};let $=this,Z={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},X=Z.NONE,Y=0.000001,W=new t7,H=new t7,K=1,G=new P,q=new R0,U=new R0,F=new R0,N=new R0,B=new R0,O=new R0,V=new R0,E=new R0,z=new R0,D=new P,w=new R0,g=!1,k=[],j={},h=!1;function L(A){if(A!==null)return 2*Math.PI/60*$.autoRotateSpeed*A;else return 2*Math.PI/60/60*$.autoRotateSpeed}function C(A){let _=Math.abs(A*0.01);return Math.pow(0.95,$.zoomSpeed*_)}function S(A){H.theta-=A}function u(A){H.phi-=A}let n=function(){let A=new P;return function(a,c){A.setFromMatrixColumn(c,0),A.multiplyScalar(-a),G.add(A)}}(),m=function(){let A=new P;return function(a,c){if($.screenSpacePanning===!0)A.setFromMatrixColumn(c,1);else A.setFromMatrixColumn(c,0),A.crossVectors($.object.up,A);A.multiplyScalar(a),G.add(A)}}(),y=function(){let A=new P;return function(a,c){let s=$.domElement;if($.object.isPerspectiveCamera){let Q0=$.object.position;A.copy(Q0).sub($.target);let O0=A.length();O0*=Math.tan($.object.fov/2*Math.PI/180),n(2*a*O0/s.clientHeight,$.object.matrix),m(2*c*O0/s.clientHeight,$.object.matrix)}else if($.object.isOrthographicCamera)n(a*($.object.right-$.object.left)/$.object.zoom/s.clientWidth,$.object.matrix),m(c*($.object.top-$.object.bottom)/$.object.zoom/s.clientHeight,$.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),$.enablePan=!1}}();function v(A){if($.object.isPerspectiveCamera||$.object.isOrthographicCamera)K/=A;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),$.enableZoom=!1}function i(A){if($.object.isPerspectiveCamera||$.object.isOrthographicCamera)K*=A;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),$.enableZoom=!1}function b(A,_){if(!$.zoomToCursor)return;g=!0;let a=$.domElement.getBoundingClientRect(),c=A-a.left,s=_-a.top,Q0=a.width,O0=a.height;w.x=c/Q0*2-1,w.y=-(s/O0)*2+1,D.set(w.x,w.y,1).unproject($.object).sub($.object.position).normalize()}function $0(A){return Math.max($.minDistance,Math.min($.maxDistance,A))}function W0(A){q.set(A.clientX,A.clientY)}function V0(A){b(A.clientX,A.clientX),V.set(A.clientX,A.clientY)}function L0(A){N.set(A.clientX,A.clientY)}function o(A){U.set(A.clientX,A.clientY),F.subVectors(U,q).multiplyScalar($.rotateSpeed);let _=$.domElement;S(2*Math.PI*F.x/_.clientHeight),u(2*Math.PI*F.y/_.clientHeight),q.copy(U),$.update()}function Z0(A){if(E.set(A.clientX,A.clientY),z.subVectors(E,V),z.y>0)v(C(z.y));else if(z.y<0)i(C(z.y));V.copy(E),$.update()}function F0(A){B.set(A.clientX,A.clientY),O.subVectors(B,N).multiplyScalar($.panSpeed),y(O.x,O.y),N.copy(B),$.update()}function z0(A){if(b(A.clientX,A.clientY),A.deltaY<0)i(C(A.deltaY));else if(A.deltaY>0)v(C(A.deltaY));$.update()}function U0(A){let _=!1;switch(A.code){case $.keys.UP:if(A.ctrlKey||A.metaKey||A.shiftKey)u(2*Math.PI*$.rotateSpeed/$.domElement.clientHeight);else y(0,$.keyPanSpeed);_=!0;break;case $.keys.BOTTOM:if(A.ctrlKey||A.metaKey||A.shiftKey)u(-2*Math.PI*$.rotateSpeed/$.domElement.clientHeight);else y(0,-$.keyPanSpeed);_=!0;break;case $.keys.LEFT:if(A.ctrlKey||A.metaKey||A.shiftKey)S(2*Math.PI*$.rotateSpeed/$.domElement.clientHeight);else y($.keyPanSpeed,0);_=!0;break;case $.keys.RIGHT:if(A.ctrlKey||A.metaKey||A.shiftKey)S(-2*Math.PI*$.rotateSpeed/$.domElement.clientHeight);else y(-$.keyPanSpeed,0);_=!0;break}if(_)A.preventDefault(),$.update()}function T0(A){if(k.length===1)q.set(A.pageX,A.pageY);else{let _=A0(A),a=0.5*(A.pageX+_.x),c=0.5*(A.pageY+_.y);q.set(a,c)}}function e0(A){if(k.length===1)N.set(A.pageX,A.pageY);else{let _=A0(A),a=0.5*(A.pageX+_.x),c=0.5*(A.pageY+_.y);N.set(a,c)}}function h0(A){let _=A0(A),a=A.pageX-_.x,c=A.pageY-_.y,s=Math.sqrt(a*a+c*c);V.set(0,s)}function T(A){if($.enableZoom)h0(A);if($.enablePan)e0(A)}function X6(A){if($.enableZoom)h0(A);if($.enableRotate)T0(A)}function g0(A){if(k.length==1)U.set(A.pageX,A.pageY);else{let a=A0(A),c=0.5*(A.pageX+a.x),s=0.5*(A.pageY+a.y);U.set(c,s)}F.subVectors(U,q).multiplyScalar($.rotateSpeed);let _=$.domElement;S(2*Math.PI*F.x/_.clientHeight),u(2*Math.PI*F.y/_.clientHeight),q.copy(U)}function Q6(A){if(k.length===1)B.set(A.pageX,A.pageY);else{let _=A0(A),a=0.5*(A.pageX+_.x),c=0.5*(A.pageY+_.y);B.set(a,c)}O.subVectors(B,N).multiplyScalar($.panSpeed),y(O.x,O.y),N.copy(B)}function k0(A){let _=A0(A),a=A.pageX-_.x,c=A.pageY-_.y,s=Math.sqrt(a*a+c*c);E.set(0,s),z.set(0,Math.pow(E.y/V.y,$.zoomSpeed)),v(z.y),V.copy(E);let Q0=(A.pageX+_.x)*0.5,O0=(A.pageY+_.y)*0.5;b(Q0,O0)}function l0(A){if($.enableZoom)k0(A);if($.enablePan)Q6(A)}function S0(A){if($.enableZoom)k0(A);if($.enableRotate)g0(A)}function j0(A){if($.enabled===!1)return;if(k.length===0)$.domElement.setPointerCapture(A.pointerId),$.domElement.addEventListener("pointermove",Z6),$.domElement.addEventListener("pointerup",I);if(w0(A))return;if(B0(A),A.pointerType==="touch")K0(A);else R(A)}function Z6(A){if($.enabled===!1)return;if(A.pointerType==="touch")v0(A);else d(A)}function I(A){switch(u0(A),k.length){case 0:$.domElement.releasePointerCapture(A.pointerId),$.domElement.removeEventListener("pointermove",Z6),$.domElement.removeEventListener("pointerup",I),$.dispatchEvent(p$),X=Z.NONE;break;case 1:let _=k[0],a=j[_];K0({pointerId:_,pageX:a.x,pageY:a.y});break}}function R(A){let _;switch(A.button){case 0:_=$.mouseButtons.LEFT;break;case 1:_=$.mouseButtons.MIDDLE;break;case 2:_=$.mouseButtons.RIGHT;break;default:_=-1}switch(_){case n8.DOLLY:if($.enableZoom===!1)return;V0(A),X=Z.DOLLY;break;case n8.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if($.enablePan===!1)return;L0(A),X=Z.PAN}else{if($.enableRotate===!1)return;W0(A),X=Z.ROTATE}break;case n8.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if($.enableRotate===!1)return;W0(A),X=Z.ROTATE}else{if($.enablePan===!1)return;L0(A),X=Z.PAN}break;default:X=Z.NONE}if(X!==Z.NONE)$.dispatchEvent(R5)}function d(A){switch(X){case Z.ROTATE:if($.enableRotate===!1)return;o(A);break;case Z.DOLLY:if($.enableZoom===!1)return;Z0(A);break;case Z.PAN:if($.enablePan===!1)return;F0(A);break}}function r(A){if($.enabled===!1||$.enableZoom===!1||X!==Z.NONE)return;A.preventDefault(),$.dispatchEvent(R5),z0(t(A)),$.dispatchEvent(p$)}function t(A){let _=A.deltaMode,a={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(_){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}if(A.ctrlKey&&!h)a.deltaY*=10;return a}function e(A){if(A.key==="Control")h=!0,$.domElement.getRootNode().addEventListener("keyup",C0,{passive:!0,capture:!0})}function C0(A){if(A.key==="Control")h=!1,$.domElement.getRootNode().removeEventListener("keyup",C0,{passive:!0,capture:!0})}function H0(A){if($.enabled===!1||$.enablePan===!1)return;U0(A)}function K0(A){switch(G0(A),k.length){case 1:switch($.touches.ONE){case s8.ROTATE:if($.enableRotate===!1)return;T0(A),X=Z.TOUCH_ROTATE;break;case s8.PAN:if($.enablePan===!1)return;e0(A),X=Z.TOUCH_PAN;break;default:X=Z.NONE}break;case 2:switch($.touches.TWO){case s8.DOLLY_PAN:if($.enableZoom===!1&&$.enablePan===!1)return;T(A),X=Z.TOUCH_DOLLY_PAN;break;case s8.DOLLY_ROTATE:if($.enableZoom===!1&&$.enableRotate===!1)return;X6(A),X=Z.TOUCH_DOLLY_ROTATE;break;default:X=Z.NONE}break;default:X=Z.NONE}if(X!==Z.NONE)$.dispatchEvent(R5)}function v0(A){switch(G0(A),X){case Z.TOUCH_ROTATE:if($.enableRotate===!1)return;g0(A),$.update();break;case Z.TOUCH_PAN:if($.enablePan===!1)return;Q6(A),$.update();break;case Z.TOUCH_DOLLY_PAN:if($.enableZoom===!1&&$.enablePan===!1)return;l0(A),$.update();break;case Z.TOUCH_DOLLY_ROTATE:if($.enableZoom===!1&&$.enableRotate===!1)return;S0(A),$.update();break;default:X=Z.NONE}}function J0(A){if($.enabled===!1)return;A.preventDefault()}function B0(A){k.push(A.pointerId)}function u0(A){delete j[A.pointerId];for(let _=0;_<k.length;_++)if(k[_]==A.pointerId){k.splice(_,1);return}}function w0(A){for(let _=0;_<k.length;_++)if(k[_]==A.pointerId)return!0;return!1}function G0(A){let _=j[A.pointerId];if(_===void 0)_=new R0,j[A.pointerId]=_;_.set(A.pageX,A.pageY)}function A0(A){let _=A.pointerId===k[0]?k[1]:k[0];return j[_]}$.domElement.addEventListener("contextmenu",J0),$.domElement.addEventListener("pointerdown",j0),$.domElement.addEventListener("pointercancel",I),$.domElement.addEventListener("wheel",r,{passive:!1}),$.domElement.getRootNode().addEventListener("keydown",e,{passive:!0,capture:!0}),this.update()}}function M5(J,Q){if(Q===$$)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===t9||Q===m7){let $=J.getIndex();if($===null){let W=[],H=J.getAttribute("position");if(H!==void 0){for(let K=0;K<H.count;K++)W.push(K);J.setIndex(W),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,X=[];if(Q===t9)for(let W=1;W<=Z;W++)X.push($.getX(0)),X.push($.getX(W)),X.push($.getX(W+1));else for(let W=0;W<Z;W++)if(W%2===0)X.push($.getX(W)),X.push($.getX(W+1)),X.push($.getX(W+2));else X.push($.getX(W+2)),X.push($.getX(W+1)),X.push($.getX(W));if(X.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let Y=J.clone();return Y.setIndex(X),Y.clearGroups(),Y}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}class w5 extends y8{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new i$(Q)}),this.register(function(Q){return new a$(Q)}),this.register(function(Q){return new YZ(Q)}),this.register(function(Q){return new WZ(Q)}),this.register(function(Q){return new HZ(Q)}),this.register(function(Q){return new t$(Q)}),this.register(function(Q){return new e$(Q)}),this.register(function(Q){return new JZ(Q)}),this.register(function(Q){return new QZ(Q)}),this.register(function(Q){return new o$(Q)}),this.register(function(Q){return new $Z(Q)}),this.register(function(Q){return new r$(Q)}),this.register(function(Q){return new XZ(Q)}),this.register(function(Q){return new ZZ(Q)}),this.register(function(Q){return new n$(Q)}),this.register(function(Q){return new KZ(Q)}),this.register(function(Q){return new GZ(Q)})}load(J,Q,$,Z){let X=this,Y;if(this.resourcePath!=="")Y=this.resourcePath;else if(this.path!==""){let K=J9.extractUrlBase(J);Y=J9.resolveURL(K,this.path)}else Y=J9.extractUrlBase(J);this.manager.itemStart(J);let W=function(K){if(Z)Z(K);else console.error(K);X.manager.itemError(J),X.manager.itemEnd(J)},H=new a7(this.manager);H.setPath(this.path),H.setResponseType("arraybuffer"),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(K){try{X.parse(K,Y,function(G){Q(G),X.manager.itemEnd(J)},W)}catch(G){W(G)}},$,W)}setDRACOLoader(J){return this.dracoLoader=J,this}setDDSLoader(){throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let X,Y={},W={},H=new TextDecoder;if(typeof J==="string")X=JSON.parse(J);else if(J instanceof ArrayBuffer)if(H.decode(new Uint8Array(J,0,4))===qZ){try{Y[p0.KHR_BINARY_GLTF]=new UZ(J)}catch(q){if(Z)Z(q);return}X=JSON.parse(Y[p0.KHR_BINARY_GLTF].content)}else X=JSON.parse(H.decode(J));else X=J;if(X.asset===void 0||X.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let K=new OZ(X,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});K.fileLoader.setRequestHeader(this.requestHeader);for(let G=0;G<this.pluginCallbacks.length;G++){let q=this.pluginCallbacks[G](K);if(!q.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");W[q.name]=q,Y[q.name]=!0}if(X.extensionsUsed)for(let G=0;G<X.extensionsUsed.length;++G){let q=X.extensionsUsed[G],U=X.extensionsRequired||[];switch(q){case p0.KHR_MATERIALS_UNLIT:Y[q]=new s$;break;case p0.KHR_DRACO_MESH_COMPRESSION:Y[q]=new FZ(X,this.dracoLoader);break;case p0.KHR_TEXTURE_TRANSFORM:Y[q]=new VZ;break;case p0.KHR_MESH_QUANTIZATION:Y[q]=new EZ;break;default:if(U.indexOf(q)>=0&&W[q]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+q+'".')}}K.setExtensions(Y),K.setPlugins(W),K.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,X){$.parse(J,Q,Z,X)})}}function qH(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}var p0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class n${constructor(J){this.parser=J,this.name=p0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let X=Q[$];if(X.extensions&&X.extensions[this.name]&&X.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,X.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let X=Q.json,H=((X.extensions&&X.extensions[this.name]||{}).lights||[])[J],K,G=new _0(16777215);if(H.color!==void 0)G.setRGB(H.color[0],H.color[1],H.color[2],Y8);let q=H.range!==void 0?H.range:0;switch(H.type){case"directional":K=new j9(G),K.target.position.set(0,0,-1),K.add(K.target);break;case"point":K=new Z7(G),K.distance=q;break;case"spot":K=new F5(G),K.distance=q,H.spot=H.spot||{},H.spot.innerConeAngle=H.spot.innerConeAngle!==void 0?H.spot.innerConeAngle:0,H.spot.outerConeAngle=H.spot.outerConeAngle!==void 0?H.spot.outerConeAngle:Math.PI/4,K.angle=H.spot.outerConeAngle,K.penumbra=1-H.spot.innerConeAngle/H.spot.outerConeAngle,K.target.position.set(0,0,-1),K.add(K.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+H.type)}if(K.position.set(0,0,0),K.decay=2,z8(K,H),H.intensity!==void 0)K.intensity=H.intensity;return K.name=Q.createUniqueName(H.name||"light_"+J),Z=Promise.resolve(K),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,X=$.json.nodes[J],W=(X.extensions&&X.extensions[this.name]||{}).light;if(W===void 0)return null;return this._loadLight(W).then(function(H){return $._getNodeRef(Q.cache,W,H)})}}class s${constructor(){this.name=p0.KHR_MATERIALS_UNLIT}getMaterialType(){return p6}extendParams(J,Q,$){let Z=[];J.color=new _0(1,1,1),J.opacity=1;let X=Q.pbrMetallicRoughness;if(X){if(Array.isArray(X.baseColorFactor)){let Y=X.baseColorFactor;J.color.setRGB(Y[0],Y[1],Y[2],Y8),J.opacity=Y[3]}if(X.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",X.baseColorTexture,T8))}return Promise.all(Z)}}class o${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let X=Z.extensions[this.name].emissiveStrength;if(X!==void 0)Q.emissiveIntensity=X;return Promise.resolve()}}class i${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return s6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let X=[],Y=Z.extensions[this.name];if(Y.clearcoatFactor!==void 0)Q.clearcoat=Y.clearcoatFactor;if(Y.clearcoatTexture!==void 0)X.push($.assignTexture(Q,"clearcoatMap",Y.clearcoatTexture));if(Y.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=Y.clearcoatRoughnessFactor;if(Y.clearcoatRoughnessTexture!==void 0)X.push($.assignTexture(Q,"clearcoatRoughnessMap",Y.clearcoatRoughnessTexture));if(Y.clearcoatNormalTexture!==void 0){if(X.push($.assignTexture(Q,"clearcoatNormalMap",Y.clearcoatNormalTexture)),Y.clearcoatNormalTexture.scale!==void 0){let W=Y.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new R0(W,W)}}return Promise.all(X)}}class a${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_DISPERSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return s6}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let X=Z.extensions[this.name];return Q.dispersion=X.dispersion!==void 0?X.dispersion:0,Promise.resolve()}}class r${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return s6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let X=[],Y=Z.extensions[this.name];if(Y.iridescenceFactor!==void 0)Q.iridescence=Y.iridescenceFactor;if(Y.iridescenceTexture!==void 0)X.push($.assignTexture(Q,"iridescenceMap",Y.iridescenceTexture));if(Y.iridescenceIor!==void 0)Q.iridescenceIOR=Y.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if(Y.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=Y.iridescenceThicknessMinimum;if(Y.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=Y.iridescenceThicknessMaximum;if(Y.iridescenceThicknessTexture!==void 0)X.push($.assignTexture(Q,"iridescenceThicknessMap",Y.iridescenceThicknessTexture));return Promise.all(X)}}class t${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_SHEEN}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return s6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let X=[];Q.sheenColor=new _0(0,0,0),Q.sheenRoughness=0,Q.sheen=1;let Y=Z.extensions[this.name];if(Y.sheenColorFactor!==void 0){let W=Y.sheenColorFactor;Q.sheenColor.setRGB(W[0],W[1],W[2],Y8)}if(Y.sheenRoughnessFactor!==void 0)Q.sheenRoughness=Y.sheenRoughnessFactor;if(Y.sheenColorTexture!==void 0)X.push($.assignTexture(Q,"sheenColorMap",Y.sheenColorTexture,T8));if(Y.sheenRoughnessTexture!==void 0)X.push($.assignTexture(Q,"sheenRoughnessMap",Y.sheenRoughnessTexture));return Promise.all(X)}}class e${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return s6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let X=[],Y=Z.extensions[this.name];if(Y.transmissionFactor!==void 0)Q.transmission=Y.transmissionFactor;if(Y.transmissionTexture!==void 0)X.push($.assignTexture(Q,"transmissionMap",Y.transmissionTexture));return Promise.all(X)}}class JZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_VOLUME}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return s6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let X=[],Y=Z.extensions[this.name];if(Q.thickness=Y.thicknessFactor!==void 0?Y.thicknessFactor:0,Y.thicknessTexture!==void 0)X.push($.assignTexture(Q,"thicknessMap",Y.thicknessTexture));Q.attenuationDistance=Y.attenuationDistance||1/0;let W=Y.attenuationColor||[1,1,1];return Q.attenuationColor=new _0().setRGB(W[0],W[1],W[2],Y8),Promise.all(X)}}class QZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_IOR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return s6}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let X=Z.extensions[this.name];return Q.ior=X.ior!==void 0?X.ior:1.5,Promise.resolve()}}class $Z{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_SPECULAR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return s6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let X=[],Y=Z.extensions[this.name];if(Q.specularIntensity=Y.specularFactor!==void 0?Y.specularFactor:1,Y.specularTexture!==void 0)X.push($.assignTexture(Q,"specularIntensityMap",Y.specularTexture));let W=Y.specularColorFactor||[1,1,1];if(Q.specularColor=new _0().setRGB(W[0],W[1],W[2],Y8),Y.specularColorTexture!==void 0)X.push($.assignTexture(Q,"specularColorMap",Y.specularColorTexture,T8));return Promise.all(X)}}class ZZ{constructor(J){this.parser=J,this.name=p0.EXT_MATERIALS_BUMP}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return s6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let X=[],Y=Z.extensions[this.name];if(Q.bumpScale=Y.bumpFactor!==void 0?Y.bumpFactor:1,Y.bumpTexture!==void 0)X.push($.assignTexture(Q,"bumpMap",Y.bumpTexture));return Promise.all(X)}}class XZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return s6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let X=[],Y=Z.extensions[this.name];if(Y.anisotropyStrength!==void 0)Q.anisotropy=Y.anisotropyStrength;if(Y.anisotropyRotation!==void 0)Q.anisotropyRotation=Y.anisotropyRotation;if(Y.anisotropyTexture!==void 0)X.push($.assignTexture(Q,"anisotropyMap",Y.anisotropyTexture));return Promise.all(X)}}class YZ{constructor(J){this.parser=J,this.name=p0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let X=Z.extensions[this.name],Y=Q.options.ktx2Loader;if(!Y)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,X.source,Y)}}class WZ{constructor(J){this.parser=J,this.name=p0.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,X=Z.textures[J];if(!X.extensions||!X.extensions[Q])return null;let Y=X.extensions[Q],W=Z.images[Y.source],H=$.textureLoader;if(W.uri){let K=$.options.manager.getHandler(W.uri);if(K!==null)H=K}return this.detectSupport().then(function(K){if(K)return $.loadTextureImage(J,Y.source,H);if(Z.extensionsRequired&&Z.extensionsRequired.indexOf(Q)>=0)throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return $.loadTexture(J)})}detectSupport(){if(!this.isSupported)this.isSupported=new Promise(function(J){let Q=new Image;Q.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",Q.onload=Q.onerror=function(){J(Q.height===1)}});return this.isSupported}}class HZ{constructor(J){this.parser=J,this.name=p0.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,X=Z.textures[J];if(!X.extensions||!X.extensions[Q])return null;let Y=X.extensions[Q],W=Z.images[Y.source],H=$.textureLoader;if(W.uri){let K=$.options.manager.getHandler(W.uri);if(K!==null)H=K}return this.detectSupport().then(function(K){if(K)return $.loadTextureImage(J,Y.source,H);if(Z.extensionsRequired&&Z.extensionsRequired.indexOf(Q)>=0)throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return $.loadTexture(J)})}detectSupport(){if(!this.isSupported)this.isSupported=new Promise(function(J){let Q=new Image;Q.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",Q.onload=Q.onerror=function(){J(Q.height===1)}});return this.isSupported}}class KZ{constructor(J){this.name=p0.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],X=this.parser.getDependency("buffer",Z.buffer),Y=this.parser.options.meshoptDecoder;if(!Y||!Y.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return X.then(function(W){let H=Z.byteOffset||0,K=Z.byteLength||0,G=Z.count,q=Z.byteStride,U=new Uint8Array(W,H,K);if(Y.decodeGltfBufferAsync)return Y.decodeGltfBufferAsync(G,q,U,Z.mode,Z.filter).then(function(F){return F.buffer});else return Y.ready.then(function(){let F=new ArrayBuffer(G*q);return Y.decodeGltfBuffer(new Uint8Array(F),G,q,U,Z.mode,Z.filter),F})})}else return null}}class GZ{constructor(J){this.name=p0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let K of Z.primitives)if(K.mode!==o6.TRIANGLES&&K.mode!==o6.TRIANGLE_STRIP&&K.mode!==o6.TRIANGLE_FAN&&K.mode!==void 0)return null;let Y=$.extensions[this.name].attributes,W=[],H={};for(let K in Y)W.push(this.parser.getDependency("accessor",Y[K]).then((G)=>{return H[K]=G,H[K]}));if(W.length<1)return null;return W.push(this.parser.createNodeMesh(J)),Promise.all(W).then((K)=>{let G=K.pop(),q=G.isGroup?G.children:[G],U=K[0].count,F=[];for(let N of q){let B=new y0,O=new P,V=new g6,E=new P(1,1,1),z=new Z5(N.geometry,N.material,U);for(let D=0;D<U;D++){if(H.TRANSLATION)O.fromBufferAttribute(H.TRANSLATION,D);if(H.ROTATION)V.fromBufferAttribute(H.ROTATION,D);if(H.SCALE)E.fromBufferAttribute(H.SCALE,D);z.setMatrixAt(D,B.compose(O,V,E))}for(let D in H)if(D==="_COLOR_0"){let w=H[D];z.instanceColor=new I9(w.array,w.itemSize,w.normalized)}else if(D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE")N.geometry.setAttribute(D,H[D]);$6.prototype.copy.call(z,N),this.parser.assignFinalMaterial(z),F.push(z)}if(G.isGroup)return G.clear(),G.add(...F),G;return F[0]})}}var qZ="glTF",X7=12,m$={JSON:1313821514,BIN:5130562};class UZ{constructor(J){this.name=p0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,X7),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==qZ)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-X7,X=new DataView(J,X7),Y=0;while(Y<Z){let W=X.getUint32(Y,!0);Y+=4;let H=X.getUint32(Y,!0);if(Y+=4,H===m$.JSON){let K=new Uint8Array(J,X7+Y,W);this.content=$.decode(K)}else if(H===m$.BIN){let K=X7+Y;this.body=J.slice(K,K+W)}Y+=W}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class FZ{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=p0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,X=J.extensions[this.name].bufferView,Y=J.extensions[this.name].attributes,W={},H={},K={};for(let G in Y){let q=D5[G]||G.toLowerCase();W[q]=Y[G]}for(let G in J.attributes){let q=D5[G]||G.toLowerCase();if(Y[G]!==void 0){let U=$.accessors[J.attributes[G]],F=f9[U.componentType];K[q]=F.name,H[q]=U.normalized===!0}}return Q.getDependency("bufferView",X).then(function(G){return new Promise(function(q,U){Z.decodeDracoFile(G,function(F){for(let N in F.attributes){let B=F.attributes[N],O=H[N];if(O!==void 0)B.normalized=O}q(F)},W,K,Y8,U)})})}}class VZ{constructor(){this.name=p0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);return J.needsUpdate=!0,J}}class EZ{constructor(){this.name=p0.KHR_MESH_QUANTIZATION}}class I5 extends r8{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,X=J*Z*3+Z;for(let Y=0;Y!==Z;Y++)Q[Y]=$[X+Y];return Q}interpolate_(J,Q,$,Z){let X=this.resultBuffer,Y=this.sampleValues,W=this.valueSize,H=W*2,K=W*3,G=Z-Q,q=($-Q)/G,U=q*q,F=U*q,N=J*K,B=N-K,O=-2*F+3*U,V=F-U,E=1-O,z=V-U+q;for(let D=0;D!==W;D++){let w=Y[B+D+W],g=Y[B+D+H]*G,k=Y[N+D+W],j=Y[N+D]*G;X[D]=E*w+z*g+O*k+V*j}return X}}var UH=new g6;class NZ extends I5{interpolate_(J,Q,$,Z){let X=super.interpolate_(J,Q,$,Z);return UH.fromArray(X).normalize().toArray(X),X}}var o6={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},f9={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},l$={9728:o8,9729:pJ,9984:rQ,9985:eQ,9986:tQ,9987:uJ},d$={33071:iQ,33648:aQ,10497:u7},L5={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},D5={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},f8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},FH={CUBICSPLINE:void 0,LINEAR:lJ,STEP:Q$},C5={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function VH(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new H8({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sQ});return J.DefaultMaterial}function Q9(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function z8(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function EH(J,Q,$){let Z=!1,X=!1,Y=!1;for(let G=0,q=Q.length;G<q;G++){let U=Q[G];if(U.POSITION!==void 0)Z=!0;if(U.NORMAL!==void 0)X=!0;if(U.COLOR_0!==void 0)Y=!0;if(Z&&X&&Y)break}if(!Z&&!X&&!Y)return Promise.resolve(J);let W=[],H=[],K=[];for(let G=0,q=Q.length;G<q;G++){let U=Q[G];if(Z){let F=U.POSITION!==void 0?$.getDependency("accessor",U.POSITION):J.attributes.position;W.push(F)}if(X){let F=U.NORMAL!==void 0?$.getDependency("accessor",U.NORMAL):J.attributes.normal;H.push(F)}if(Y){let F=U.COLOR_0!==void 0?$.getDependency("accessor",U.COLOR_0):J.attributes.color;K.push(F)}}return Promise.all([Promise.all(W),Promise.all(H),Promise.all(K)]).then(function(G){let q=G[0],U=G[1],F=G[2];if(Z)J.morphAttributes.position=q;if(X)J.morphAttributes.normal=U;if(Y)J.morphAttributes.color=F;return J.morphTargetsRelative=!0,J})}function NH(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,X=$.length;Z<X;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function OH(J){let Q,$=J.extensions&&J.extensions[p0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+k5($.attributes);else Q=J.indices+":"+k5(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,X=J.targets.length;Z<X;Z++)Q+=":"+k5(J.targets[Z]);return Q}function k5(J){let Q="",$=Object.keys(J).sort();for(let Z=0,X=$.length;Z<X;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function _5(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function BH(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";return"image/png"}var RH=new y0;class OZ{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new qH,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,X=!1,Y=-1;if(typeof navigator<"u"){let W=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(W)===!0;let H=W.match(/Version\/(\d+)/);Z=$&&H?parseInt(H[1],10):-1,X=W.indexOf("Firefox")>-1,Y=X?W.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||X&&Y<98)this.textureLoader=new q5(this.options.manager);else this.textureLoader=new E5(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new a7(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,X=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(Y){return Y._markDefs&&Y._markDefs()}),Promise.all(this._invokeAll(function(Y){return Y.beforeRoot&&Y.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(Y){let W={scene:Y[0][Z.scene||0],scenes:Y[0],animations:Y[1],cameras:Y[2],asset:Z.asset,parser:$,userData:{}};return Q9(X,W,Z),z8(W,Z),Promise.all($._invokeAll(function(H){return H.afterRoot&&H.afterRoot(W)})).then(function(){for(let H of W.scenes)H.updateMatrixWorld();J(W)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,X=Q.length;Z<X;Z++){let Y=Q[Z].joints;for(let W=0,H=Y.length;W<H;W++)J[Y[W]].isBone=!0}for(let Z=0,X=J.length;Z<X;Z++){let Y=J[Z];if(Y.mesh!==void 0){if(this._addNodeRef(this.meshCache,Y.mesh),Y.skin!==void 0)$[Y.mesh].isSkinnedMesh=!0}if(Y.camera!==void 0)this._addNodeRef(this.cameraCache,Y.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),X=(Y,W)=>{let H=this.associations.get(Y);if(H!=null)this.associations.set(W,H);for(let[K,G]of Y.children.entries())X(G,W.children[K])};return X($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let X=J(Q[Z]);if(X)$.push(X)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(X){return X.loadNode&&X.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(X){return X.loadMesh&&X.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(X){return X.loadBufferView&&X.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(X){return X.loadMaterial&&X.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(X){return X.loadTexture&&X.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(X){return X.loadAnimation&&X.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(X){return X!=this&&X.getDependency&&X.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(X,Y){return $.getDependency(J,Y)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[p0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(X,Y){$.load(J9.resolveURL(Q.uri,Z.path),X,void 0,function(){Y(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,X=Q.byteOffset||0;return $.slice(X,X+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let Y=L5[Z.type],W=f9[Z.componentType],H=Z.normalized===!0,K=new W(Z.count*Y);return Promise.resolve(new R6(K,Y,H))}let X=[];if(Z.bufferView!==void 0)X.push(this.getDependency("bufferView",Z.bufferView));else X.push(null);if(Z.sparse!==void 0)X.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),X.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(X).then(function(Y){let W=Y[0],H=L5[Z.type],K=f9[Z.componentType],G=K.BYTES_PER_ELEMENT,q=G*H,U=Z.byteOffset||0,F=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,N=Z.normalized===!0,B,O;if(F&&F!==q){let V=Math.floor(U/F),E="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+V+":"+Z.count,z=Q.cache.get(E);if(!z)B=new K(W,V*F,Z.count*F/G),z=new J7(B,F/G),Q.cache.add(E,z);O=new u6(z,H,U%F/G,N)}else{if(W===null)B=new K(Z.count*H);else B=new K(W,U,Z.count*H);O=new R6(B,H,N)}if(Z.sparse!==void 0){let V=L5.SCALAR,E=f9[Z.sparse.indices.componentType],z=Z.sparse.indices.byteOffset||0,D=Z.sparse.values.byteOffset||0,w=new E(Y[1],z,Z.sparse.count*V),g=new K(Y[2],D,Z.sparse.count*H);if(W!==null)O=new R6(O.array.slice(),O.itemSize,O.normalized);for(let k=0,j=w.length;k<j;k++){let h=w[k];if(O.setX(h,g[k*H]),H>=2)O.setY(h,g[k*H+1]);if(H>=3)O.setZ(h,g[k*H+2]);if(H>=4)O.setW(h,g[k*H+3]);if(H>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return O})}loadTexture(J){let Q=this.json,$=this.options,X=Q.textures[J].source,Y=Q.images[X],W=this.textureLoader;if(Y.uri){let H=$.manager.getHandler(Y.uri);if(H!==null)W=H}return this.loadTextureImage(J,X,W)}loadTextureImage(J,Q,$){let Z=this,X=this.json,Y=X.textures[J],W=X.images[Q],H=(W.uri||W.bufferView)+":"+Y.sampler;if(this.textureCache[H])return this.textureCache[H];let K=this.loadImageSource(Q,$).then(function(G){if(G.flipY=!1,G.name=Y.name||W.name||"",G.name===""&&typeof W.uri==="string"&&W.uri.startsWith("data:image/")===!1)G.name=W.uri;let U=(X.samplers||{})[Y.sampler]||{};return G.magFilter=l$[U.magFilter]||pJ,G.minFilter=l$[U.minFilter]||uJ,G.wrapS=d$[U.wrapS]||u7,G.wrapT=d$[U.wrapT]||u7,Z.associations.set(G,{textures:J}),G}).catch(function(){return null});return this.textureCache[H]=K,K}loadImageSource(J,Q){let $=this,Z=this.json,X=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((q)=>q.clone());let Y=Z.images[J],W=self.URL||self.webkitURL,H=Y.uri||"",K=!1;if(Y.bufferView!==void 0)H=$.getDependency("bufferView",Y.bufferView).then(function(q){K=!0;let U=new Blob([q],{type:Y.mimeType});return H=W.createObjectURL(U),H});else if(Y.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let G=Promise.resolve(H).then(function(q){return new Promise(function(U,F){let N=U;if(Q.isImageBitmapLoader===!0)N=function(B){let O=new F6(B);O.needsUpdate=!0,U(O)};Q.load(J9.resolveURL(q,X.path),N,void 0,F)})}).then(function(q){if(K===!0)W.revokeObjectURL(H);return z8(q,Y),q.userData.mimeType=Y.mimeType||BH(Y.uri),q}).catch(function(q){throw console.error("THREE.GLTFLoader: Couldn't load texture",H),q});return this.sourceCache[J]=G,G}assignTexture(J,Q,$,Z){let X=this;return this.getDependency("texture",$.index).then(function(Y){if(!Y)return null;if($.texCoord!==void 0&&$.texCoord>0)Y=Y.clone(),Y.channel=$.texCoord;if(X.extensions[p0.KHR_TEXTURE_TRANSFORM]){let W=$.extensions!==void 0?$.extensions[p0.KHR_TEXTURE_TRANSFORM]:void 0;if(W){let H=X.associations.get(Y);Y=X.extensions[p0.KHR_TEXTURE_TRANSFORM].extendTexture(Y,W),X.associations.set(Y,H)}}if(Z!==void 0)Y.colorSpace=Z;return J[Q]=Y,Y})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,X=Q.attributes.color!==void 0,Y=Q.attributes.normal===void 0;if(J.isPoints){let W="PointsMaterial:"+$.uuid,H=this.cache.get(W);if(!H)H=new i7,n6.prototype.copy.call(H,$),H.color.copy($.color),H.map=$.map,H.sizeAttenuation=!1,this.cache.add(W,H);$=H}else if(J.isLine){let W="LineBasicMaterial:"+$.uuid,H=this.cache.get(W);if(!H)H=new o7,n6.prototype.copy.call(H,$),H.color.copy($.color),H.map=$.map,this.cache.add(W,H);$=H}if(Z||X||Y){let W="ClonedMaterial:"+$.uuid+":";if(Z)W+="derivative-tangents:";if(X)W+="vertex-colors:";if(Y)W+="flat-shading:";let H=this.cache.get(W);if(!H){if(H=$.clone(),X)H.vertexColors=!0;if(Y)H.flatShading=!0;if(Z){if(H.normalScale)H.normalScale.y*=-1;if(H.clearcoatNormalScale)H.clearcoatNormalScale.y*=-1}this.cache.add(W,H),this.associations.set(H,this.associations.get($))}$=H}J.material=$}getMaterialType(){return H8}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,X=$.materials[J],Y,W={},H=X.extensions||{},K=[];if(H[p0.KHR_MATERIALS_UNLIT]){let q=Z[p0.KHR_MATERIALS_UNLIT];Y=q.getMaterialType(),K.push(q.extendParams(W,X,Q))}else{let q=X.pbrMetallicRoughness||{};if(W.color=new _0(1,1,1),W.opacity=1,Array.isArray(q.baseColorFactor)){let U=q.baseColorFactor;W.color.setRGB(U[0],U[1],U[2],Y8),W.opacity=U[3]}if(q.baseColorTexture!==void 0)K.push(Q.assignTexture(W,"map",q.baseColorTexture,T8));if(W.metalness=q.metallicFactor!==void 0?q.metallicFactor:1,W.roughness=q.roughnessFactor!==void 0?q.roughnessFactor:1,q.metallicRoughnessTexture!==void 0)K.push(Q.assignTexture(W,"metalnessMap",q.metallicRoughnessTexture)),K.push(Q.assignTexture(W,"roughnessMap",q.metallicRoughnessTexture));Y=this._invokeOne(function(U){return U.getMaterialType&&U.getMaterialType(J)}),K.push(Promise.all(this._invokeAll(function(U){return U.extendMaterialParams&&U.extendMaterialParams(J,W)})))}if(X.doubleSided===!0)W.side=A9;let G=X.alphaMode||C5.OPAQUE;if(G===C5.BLEND)W.transparent=!0,W.depthWrite=!1;else if(W.transparent=!1,G===C5.MASK)W.alphaTest=X.alphaCutoff!==void 0?X.alphaCutoff:0.5;if(X.normalTexture!==void 0&&Y!==p6){if(K.push(Q.assignTexture(W,"normalMap",X.normalTexture)),W.normalScale=new R0(1,1),X.normalTexture.scale!==void 0){let q=X.normalTexture.scale;W.normalScale.set(q,q)}}if(X.occlusionTexture!==void 0&&Y!==p6){if(K.push(Q.assignTexture(W,"aoMap",X.occlusionTexture)),X.occlusionTexture.strength!==void 0)W.aoMapIntensity=X.occlusionTexture.strength}if(X.emissiveFactor!==void 0&&Y!==p6){let q=X.emissiveFactor;W.emissive=new _0().setRGB(q[0],q[1],q[2],Y8)}if(X.emissiveTexture!==void 0&&Y!==p6)K.push(Q.assignTexture(W,"emissiveMap",X.emissiveTexture,T8));return Promise.all(K).then(function(){let q=new Y(W);if(X.name)q.name=X.name;if(z8(q,X),Q.associations.set(q,{materials:J}),X.extensions)Q9(Z,q,X);return q})}createUniqueName(J){let Q=r0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function X(W){return $[p0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(W,Q).then(function(H){return c$(H,W,Q)})}let Y=[];for(let W=0,H=J.length;W<H;W++){let K=J[W],G=OH(K),q=Z[G];if(q)Y.push(q.promise);else{let U;if(K.extensions&&K.extensions[p0.KHR_DRACO_MESH_COMPRESSION])U=X(K);else U=c$(new f6,K,Q);Z[G]={primitive:K,promise:U},Y.push(U)}}return Promise.all(Y)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,X=$.meshes[J],Y=X.primitives,W=[];for(let H=0,K=Y.length;H<K;H++){let G=Y[H].material===void 0?VH(this.cache):this.getDependency("material",Y[H].material);W.push(G)}return W.push(Q.loadGeometries(Y)),Promise.all(W).then(function(H){let K=H.slice(0,H.length-1),G=H[H.length-1],q=[];for(let F=0,N=G.length;F<N;F++){let B=G[F],O=Y[F],V,E=K[F];if(O.mode===o6.TRIANGLES||O.mode===o6.TRIANGLE_STRIP||O.mode===o6.TRIANGLE_FAN||O.mode===void 0){if(V=X.isSkinnedMesh===!0?new Q5(B,E):new n0(B,E),V.isSkinnedMesh===!0)V.normalizeSkinWeights();if(O.mode===o6.TRIANGLE_STRIP)V.geometry=M5(V.geometry,m7);else if(O.mode===o6.TRIANGLE_FAN)V.geometry=M5(V.geometry,t9)}else if(O.mode===o6.LINES)V=new X5(B,E);else if(O.mode===o6.LINE_STRIP)V=new Q7(B,E);else if(O.mode===o6.LINE_LOOP)V=new Y5(B,E);else if(O.mode===o6.POINTS)V=new W5(B,E);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+O.mode);if(Object.keys(V.geometry.morphAttributes).length>0)NH(V,X);if(V.name=Q.createUniqueName(X.name||"mesh_"+J),z8(V,X),O.extensions)Q9(Z,V,O);Q.assignFinalMaterial(V),q.push(V)}for(let F=0,N=q.length;F<N;F++)Q.associations.set(q[F],{meshes:J,primitives:F});if(q.length===1){if(X.extensions)Q9(Z,q[0],X);return q[0]}let U=new d6;if(X.extensions)Q9(Z,U,X);Q.associations.set(U,{meshes:J});for(let F=0,N=q.length;F<N;F++)U.add(q[F]);return U})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new I6(W8.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new S8(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return z8(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,X=Q.joints.length;Z<X;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let X=Z.pop(),Y=Z,W=[],H=[];for(let K=0,G=Y.length;K<G;K++){let q=Y[K];if(q){W.push(q);let U=new y0;if(X!==null)U.fromArray(X.array,K*16);H.push(U)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[K])}return new s7(W,H)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],X=Z.name?Z.name:"animation_"+J,Y=[],W=[],H=[],K=[],G=[];for(let q=0,U=Z.channels.length;q<U;q++){let F=Z.channels[q],N=Z.samplers[F.sampler],B=F.target,O=B.node,V=Z.parameters!==void 0?Z.parameters[N.input]:N.input,E=Z.parameters!==void 0?Z.parameters[N.output]:N.output;if(B.node===void 0)continue;Y.push(this.getDependency("node",O)),W.push(this.getDependency("accessor",V)),H.push(this.getDependency("accessor",E)),K.push(N),G.push(B)}return Promise.all([Promise.all(Y),Promise.all(W),Promise.all(H),Promise.all(K),Promise.all(G)]).then(function(q){let U=q[0],F=q[1],N=q[2],B=q[3],O=q[4],V=[];for(let E=0,z=U.length;E<z;E++){let D=U[E],w=F[E],g=N[E],k=B[E],j=O[E];if(D===void 0)continue;if(D.updateMatrix)D.updateMatrix();let h=$._createAnimationTracks(D,w,g,k,j);if(h)for(let L=0;L<h.length;L++)V.push(h[L])}return new G5(X,void 0,V)})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(X){let Y=$._getNodeRef($.meshCache,Z.mesh,X);if(Z.weights!==void 0)Y.traverse(function(W){if(!W.isMesh)return;for(let H=0,K=Z.weights.length;H<K;H++)W.morphTargetInfluences[H]=Z.weights[H]});return Y})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],X=$._loadNodeShallow(J),Y=[],W=Z.children||[];for(let K=0,G=W.length;K<G;K++)Y.push($.getDependency("node",W[K]));let H=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([X,Promise.all(Y),H]).then(function(K){let G=K[0],q=K[1],U=K[2];if(U!==null)G.traverse(function(F){if(!F.isSkinnedMesh)return;F.bind(U,RH)});for(let F=0,N=q.length;F<N;F++)G.add(q[F]);return G})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let X=Q.nodes[J],Y=X.name?Z.createUniqueName(X.name):"",W=[],H=Z._invokeOne(function(K){return K.createNodeMesh&&K.createNodeMesh(J)});if(H)W.push(H);if(X.camera!==void 0)W.push(Z.getDependency("camera",X.camera).then(function(K){return Z._getNodeRef(Z.cameraCache,X.camera,K)}));return Z._invokeAll(function(K){return K.createNodeAttachment&&K.createNodeAttachment(J)}).forEach(function(K){W.push(K)}),this.nodeCache[J]=Promise.all(W).then(function(K){let G;if(X.isBone===!0)G=new n7;else if(K.length>1)G=new d6;else if(K.length===1)G=K[0];else G=new $6;if(G!==K[0])for(let q=0,U=K.length;q<U;q++)G.add(K[q]);if(X.name)G.userData.name=X.name,G.name=Y;if(z8(G,X),X.extensions)Q9($,G,X);if(X.matrix!==void 0){let q=new y0;q.fromArray(X.matrix),G.applyMatrix4(q)}else{if(X.translation!==void 0)G.position.fromArray(X.translation);if(X.rotation!==void 0)G.quaternion.fromArray(X.rotation);if(X.scale!==void 0)G.scale.fromArray(X.scale)}if(!Z.associations.has(G))Z.associations.set(G,{});return Z.associations.get(G).nodes=J,G}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,X=new d6;if($.name)X.name=Z.createUniqueName($.name);if(z8(X,$),$.extensions)Q9(Q,X,$);let Y=$.nodes||[],W=[];for(let H=0,K=Y.length;H<K;H++)W.push(Z.getDependency("node",Y[H]));return Promise.all(W).then(function(H){for(let G=0,q=H.length;G<q;G++)X.add(H[G]);let K=(G)=>{let q=new Map;for(let[U,F]of Z.associations)if(U instanceof n6||U instanceof F6)q.set(U,F);return G.traverse((U)=>{let F=Z.associations.get(U);if(F!=null)q.set(U,F)}),q};return Z.associations=K(X),X})}_createAnimationTracks(J,Q,$,Z,X){let Y=[],W=J.name?J.name:J.uuid,H=[];if(f8[X.path]===f8.weights)J.traverse(function(U){if(U.morphTargetInfluences)H.push(U.name?U.name:U.uuid)});else H.push(W);let K;switch(f8[X.path]){case f8.weights:K=A8;break;case f8.rotation:K=j8;break;case f8.position:case f8.scale:K=P8;break;default:switch($.itemSize){case 1:K=A8;break;case 2:case 3:default:K=P8;break}break}let G=Z.interpolation!==void 0?FH[Z.interpolation]:lJ,q=this._getArrayFromAccessor($);for(let U=0,F=H.length;U<F;U++){let N=new K(H[U]+"."+f8[X.path],Q.array,q,G);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(N);Y.push(N)}return Y}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=_5(Q.constructor),Z=new Float32Array(Q.length);for(let X=0,Y=Q.length;X<Y;X++)Z[X]=Q[X]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof j8?NZ:I5)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zH(J,Q,$){let Z=Q.attributes,X=new N6;if(Z.POSITION!==void 0){let H=$.json.accessors[Z.POSITION],K=H.min,G=H.max;if(K!==void 0&&G!==void 0){if(X.set(new P(K[0],K[1],K[2]),new P(G[0],G[1],G[2])),H.normalized){let q=_5(f9[H.componentType]);X.min.multiplyScalar(q),X.max.multiplyScalar(q)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let Y=Q.targets;if(Y!==void 0){let H=new P,K=new P;for(let G=0,q=Y.length;G<q;G++){let U=Y[G];if(U.POSITION!==void 0){let F=$.json.accessors[U.POSITION],N=F.min,B=F.max;if(N!==void 0&&B!==void 0){if(K.setX(Math.max(Math.abs(N[0]),Math.abs(B[0]))),K.setY(Math.max(Math.abs(N[1]),Math.abs(B[1]))),K.setZ(Math.max(Math.abs(N[2]),Math.abs(B[2]))),F.normalized){let O=_5(f9[F.componentType]);K.multiplyScalar(O)}H.max(K)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}X.expandByVector(H)}J.boundingBox=X;let W=new A6;X.getCenter(W.center),W.radius=X.min.distanceTo(X.max)/2,J.boundingSphere=W}function c$(J,Q,$){let Z=Q.attributes,X=[];function Y(W,H){return $.getDependency("accessor",W).then(function(K){J.setAttribute(H,K)})}for(let W in Z){let H=D5[W]||W.toLowerCase();if(H in J.attributes)continue;X.push(Y(Z[W],H))}if(Q.indices!==void 0&&!J.index){let W=$.getDependency("accessor",Q.indices).then(function(H){J.setIndex(H)});X.push(W)}if(s0.workingColorSpace!==Y8&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${s0.workingColorSpace}" not supported.`);return z8(J,Q),zH(J,Q,$),Promise.all(X).then(function(){return Q.targets!==void 0?EH(J,Q.targets,$):J})}class A5 extends S9{constructor(J=null){super();let Q=new a8;Q.deleteAttribute("uv");let $=new H8({side:oQ}),Z=new H8,X=new Z7(16777215,900,28,2);X.position.set(0.418,16.199,0.3),this.add(X);let Y=new n0(Q,$);Y.position.set(-0.757,13.219,0.717),Y.scale.set(31.713,28.305,28.591),this.add(Y);let W=new n0(Q,Z);W.position.set(-10.906,2.009,1.846),W.rotation.set(0,-0.195,0),W.scale.set(2.328,7.905,4.651),this.add(W);let H=new n0(Q,Z);H.position.set(-5.607,-0.754,-0.758),H.rotation.set(0,0.994,0),H.scale.set(1.97,1.534,3.955),this.add(H);let K=new n0(Q,Z);K.position.set(6.167,0.857,7.803),K.rotation.set(0,0.561,0),K.scale.set(3.927,6.285,3.687),this.add(K);let G=new n0(Q,Z);G.position.set(-2.017,0.018,6.124),G.rotation.set(0,0.333,0),G.scale.set(2.002,4.566,2.064),this.add(G);let q=new n0(Q,Z);q.position.set(2.291,-0.756,-2.621),q.rotation.set(0,-0.286,0),q.scale.set(1.546,1.552,1.496),this.add(q);let U=new n0(Q,Z);U.position.set(-2.193,-0.369,-5.547),U.rotation.set(0,0.516,0),U.scale.set(3.875,3.487,2.986),this.add(U);let F=new n0(Q,v9(50));F.position.set(-16.116,14.37,8.208),F.scale.set(0.1,2.428,2.739),this.add(F);let N=new n0(Q,v9(50));N.position.set(-16.109,18.021,-8.207),N.scale.set(0.1,2.425,2.751),this.add(N);let B=new n0(Q,v9(17));B.position.set(14.904,12.198,-1.832),B.scale.set(0.15,4.265,6.331),this.add(B);let O=new n0(Q,v9(43));O.position.set(-0.462,8.89,14.52),O.scale.set(4.38,5.441,0.088),this.add(O);let V=new n0(Q,v9(20));V.position.set(3.235,11.486,-12.541),V.scale.set(2.5,2,0.1),this.add(V);let E=new n0(Q,v9(100));E.position.set(0,20,0),E.scale.set(1,0.1,1),this.add(E)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function v9(J){let Q=new p6;return Q.color.setScalar(J),Q}var BZ=new N6,JJ=new P;class Y7 extends V5{constructor(){super();this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let J=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],Q=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],$=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex($),this.setAttribute("position",new j6(J,3)),this.setAttribute("uv",new j6(Q,2))}applyMatrix4(J){let Q=this.attributes.instanceStart,$=this.attributes.instanceEnd;if(Q!==void 0)Q.applyMatrix4(J),$.applyMatrix4(J),Q.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}setPositions(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let $=new y9(Q,6,1);return this.setAttribute("instanceStart",new u6($,3,0)),this.setAttribute("instanceEnd",new u6($,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let $=new y9(Q,6,1);return this.setAttribute("instanceColorStart",new u6($,3,0)),this.setAttribute("instanceColorEnd",new u6($,3,3)),this}fromWireframeGeometry(J){return this.setPositions(J.attributes.position.array),this}fromEdgesGeometry(J){return this.setPositions(J.attributes.position.array),this}fromMesh(J){return this.fromWireframeGeometry(new H5(J.geometry)),this}fromLineSegments(J){let Q=J.geometry;return this.setPositions(Q.attributes.position.array),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new N6;let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0)this.boundingBox.setFromBufferAttribute(J),BZ.setFromBufferAttribute(Q),this.boundingBox.union(BZ)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new A6;if(this.boundingBox===null)this.computeBoundingBox();let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0){let $=this.boundingSphere.center;this.boundingBox.getCenter($);let Z=0;for(let X=0,Y=J.count;X<Y;X++)JJ.fromBufferAttribute(J,X),Z=Math.max(Z,$.distanceToSquared(JJ)),JJ.fromBufferAttribute(Q,X),Z=Math.max(Z,$.distanceToSquared(JJ));if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(J){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(J)}}Y0.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new R0(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};S6.line={uniforms:l7.merge([Y0.common,Y0.fog,Y0.line]),vertexShader:`
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
		`};class v8 extends y6{constructor(J){super({type:"LineMaterial",uniforms:l7.clone(S6.line.uniforms),vertexShader:S6.line.vertexShader,fragmentShader:S6.line.fragmentShader,clipping:!0});this.isLineMaterial=!0,this.setValues(J)}get color(){return this.uniforms.diffuse.value}set color(J){this.uniforms.diffuse.value=J}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(J){if(J===!0)this.defines.WORLD_UNITS="";else delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(J){if(!this.uniforms.linewidth)return;this.uniforms.linewidth.value=J}get dashed(){return"USE_DASH"in this.defines}set dashed(J){if(J===!0!==this.dashed)this.needsUpdate=!0;if(J===!0)this.defines.USE_DASH="";else delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(J){this.uniforms.dashScale.value=J}get dashSize(){return this.uniforms.dashSize.value}set dashSize(J){this.uniforms.dashSize.value=J}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(J){this.uniforms.dashOffset.value=J}get gapSize(){return this.uniforms.gapSize.value}set gapSize(J){this.uniforms.gapSize.value=J}get opacity(){return this.uniforms.opacity.value}set opacity(J){if(!this.uniforms)return;this.uniforms.opacity.value=J}get resolution(){return this.uniforms.resolution.value}set resolution(J){this.uniforms.resolution.value.copy(J)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(J){if(!this.defines)return;if(J===!0!==this.alphaToCoverage)this.needsUpdate=!0;if(J===!0)this.defines.USE_ALPHA_TO_COVERAGE="";else delete this.defines.USE_ALPHA_TO_COVERAGE}}var P5=new c0,RZ=new P,zZ=new P,L6=new c0,C6=new c0,K8=new c0,T5=new P,S5=new y0,k6=new B5,MZ=new P,QJ=new N6,$J=new A6,G8=new c0,q8,$9;function LZ(J,Q,$){return G8.set(0,0,-Q,1).applyMatrix4(J.projectionMatrix),G8.multiplyScalar(1/G8.w),G8.x=$9/$.width,G8.y=$9/$.height,G8.applyMatrix4(J.projectionMatrixInverse),G8.multiplyScalar(1/G8.w),Math.abs(Math.max(G8.x,G8.y))}function MH(J,Q){let{matrixWorld:$,geometry:Z}=J,X=Z.attributes.instanceStart,Y=Z.attributes.instanceEnd,W=Math.min(Z.instanceCount,X.count);for(let H=0,K=W;H<K;H++){k6.start.fromBufferAttribute(X,H),k6.end.fromBufferAttribute(Y,H),k6.applyMatrix4($);let G=new P,q=new P;if(q8.distanceSqToSegment(k6.start,k6.end,q,G),q.distanceTo(G)<$9*0.5)Q.push({point:q,pointOnLine:G,distance:q8.origin.distanceTo(q),object:J,face:null,faceIndex:H,uv:null,uv1:null})}}function LH(J,Q,$){let Z=Q.projectionMatrix,Y=J.material.resolution,W=J.matrixWorld,H=J.geometry,K=H.attributes.instanceStart,G=H.attributes.instanceEnd,q=Math.min(H.instanceCount,K.count),U=-Q.near;q8.at(1,K8),K8.w=1,K8.applyMatrix4(Q.matrixWorldInverse),K8.applyMatrix4(Z),K8.multiplyScalar(1/K8.w),K8.x*=Y.x/2,K8.y*=Y.y/2,K8.z=0,T5.copy(K8),S5.multiplyMatrices(Q.matrixWorldInverse,W);for(let F=0,N=q;F<N;F++){if(L6.fromBufferAttribute(K,F),C6.fromBufferAttribute(G,F),L6.w=1,C6.w=1,L6.applyMatrix4(S5),C6.applyMatrix4(S5),L6.z>U&&C6.z>U)continue;if(L6.z>U){let D=L6.z-C6.z,w=(L6.z-U)/D;L6.lerp(C6,w)}else if(C6.z>U){let D=C6.z-L6.z,w=(C6.z-U)/D;C6.lerp(L6,w)}L6.applyMatrix4(Z),C6.applyMatrix4(Z),L6.multiplyScalar(1/L6.w),C6.multiplyScalar(1/C6.w),L6.x*=Y.x/2,L6.y*=Y.y/2,C6.x*=Y.x/2,C6.y*=Y.y/2,k6.start.copy(L6),k6.start.z=0,k6.end.copy(C6),k6.end.z=0;let O=k6.closestPointToPointParameter(T5,!0);k6.at(O,MZ);let V=W8.lerp(L6.z,C6.z,O),E=V>=-1&&V<=1,z=T5.distanceTo(MZ)<$9*0.5;if(E&&z){k6.start.fromBufferAttribute(K,F),k6.end.fromBufferAttribute(G,F),k6.start.applyMatrix4(W),k6.end.applyMatrix4(W);let D=new P,w=new P;q8.distanceSqToSegment(k6.start,k6.end,w,D),$.push({point:w,pointOnLine:D,distance:q8.origin.distanceTo(w),object:J,face:null,faceIndex:F,uv:null,uv1:null})}}}class j5 extends n0{constructor(J=new Y7,Q=new v8({color:Math.random()*16777215})){super(J,Q);this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let J=this.geometry,Q=J.attributes.instanceStart,$=J.attributes.instanceEnd,Z=new Float32Array(2*Q.count);for(let Y=0,W=0,H=Q.count;Y<H;Y++,W+=2)RZ.fromBufferAttribute(Q,Y),zZ.fromBufferAttribute($,Y),Z[W]=W===0?0:Z[W-1],Z[W+1]=Z[W]+RZ.distanceTo(zZ);let X=new y9(Z,2,1);return J.setAttribute("instanceDistanceStart",new u6(X,1,0)),J.setAttribute("instanceDistanceEnd",new u6(X,1,1)),this}raycast(J,Q){let $=this.material.worldUnits,Z=J.camera;if(Z===null&&!$)console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let X=J.params.Line2!==void 0?J.params.Line2.threshold||0:0;q8=J.ray;let Y=this.matrixWorld,W=this.geometry,H=this.material;if($9=H.linewidth+X,W.boundingSphere===null)W.computeBoundingSphere();$J.copy(W.boundingSphere).applyMatrix4(Y);let K;if($)K=$9*0.5;else{let q=Math.max(Z.near,$J.distanceToPoint(q8.origin));K=LZ(Z,q,H.resolution)}if($J.radius+=K,q8.intersectsSphere($J)===!1)return;if(W.boundingBox===null)W.computeBoundingBox();QJ.copy(W.boundingBox).applyMatrix4(Y);let G;if($)G=$9*0.5;else{let q=Math.max(Z.near,QJ.distanceToPoint(q8.origin));G=LZ(Z,q,H.resolution)}if(QJ.expandByScalar(G),q8.intersectsBox(QJ)===!1)return;if($)MH(this,Q);else LH(this,Z,Q)}onBeforeRender(J){let Q=this.material.uniforms;if(Q&&Q.resolution)J.getViewport(P5),this.material.uniforms.resolution.value.set(P5.z,P5.w)}}class x9 extends Y7{constructor(){super();this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(J){let Q=J.length-3,$=new Float32Array(2*Q);for(let Z=0;Z<Q;Z+=3)$[2*Z]=J[Z],$[2*Z+1]=J[Z+1],$[2*Z+2]=J[Z+2],$[2*Z+3]=J[Z+3],$[2*Z+4]=J[Z+4],$[2*Z+5]=J[Z+5];return super.setPositions($),this}setColors(J){let Q=J.length-3,$=new Float32Array(2*Q);for(let Z=0;Z<Q;Z+=3)$[2*Z]=J[Z],$[2*Z+1]=J[Z+1],$[2*Z+2]=J[Z+2],$[2*Z+3]=J[Z+3],$[2*Z+4]=J[Z+4],$[2*Z+5]=J[Z+5];return super.setColors($),this}fromLine(J){let Q=J.geometry;return this.setPositions(Q.attributes.position.array),this}}class ZJ extends j5{constructor(J=new x9,Q=new v8({color:Math.random()*16777215})){super(J,Q);this.isLine2=!0,this.type="Line2"}}var x8=(J)=>new P(J[0],J[2],-J[1]),Z9=1,CZ=2000,CH=`
varying vec3 vN;
void main() {
  vN = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,kH=`
uniform float uId;
uniform float uHi;
uniform float uPick;
varying vec3 vN;
void main() {
  vec3 n = normalize(vN);
  if (!gl_FrontFacing) n = -n;
  if (uPick > 0.5) gl_FragColor = vec4(mod(uId, 256.0) / 255.0, floor(uId / 256.0) / 255.0, 0.0, 1.0);
  else gl_FragColor = vec4(n.xy, uHi, uId);
}`,DH=`
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
}`;function _H(J,Q){if(Q>=1)return J;let $=J.slice(1).map((Y,W)=>Math.hypot(Y[0]-J[W][0],Y[1]-J[W][1],Y[2]-J[W][2])),Z=Q*$.reduce((Y,W)=>Y+W,0),X=[J[0]];for(let Y=0;Y<$.length;Y++){if(Z>=$[Y]){X.push(J[Y+1]),Z-=$[Y];continue}let W=$[Y]?Z/$[Y]:0,[H,K]=[J[Y],J[Y+1]];X.push([H[0]+(K[0]-H[0])*W,H[1]+(K[1]-H[1])*W,H[2]+(K[2]-H[2])*W]);break}return X}var wH={primary:"#3a3d42",accent:"#d42a30",hardware:"#a9aeb5",purchased:"#55595f",fill:"#ffffff",highlight:"#c9d8f4",line:"#232323",highlightLine:"#3d5c9e",guide:"#7d9cd6"},kZ=(J)=>new _0(J);class W7{constructor(J,Q,{pixelRatio:$=1,preserve:Z=!1}={}){this.canvas=J,this.timeline=Q,this.colors={...wH,...Q.style||{}},this.renderer=new J5({canvas:J,antialias:!1,alpha:!0,preserveDrawingBuffer:Z}),this.renderer.setPixelRatio($),this.renderer.outputColorSpace=T8,this.renderer.setClearColor(0,0),this.scene=new S9;let X=new r9(this.renderer),Y=new A5;this.scene.environment=X.fromScene(Y,0.04).texture,Y.dispose(),X.dispose(),this.scene.add(new U5(16777215,9081500,0.7)),this.key=new j9(16777215,1.7),this.fill=new j9(14674175,0.5),this.scene.add(this.key,this.key.target,this.fill,this.fill.target),this.camera=new S8(-1,1,1,-1,0.01,1000),this.camera.layers.enable(Z9),this.guides=new d6,this.wireGroup=new d6,this.scene.add(this.guides,this.wireGroup),this.style="shaded",this.instances=new Map,this.pickUniform={value:0},this.quadCamera=new S8(-1,1,1,-1,0,1),this.composite=new y6({uniforms:{tColor:{value:null},tInfo:{value:null},tDepth:{value:null},uTexel:{value:new R0},uDepthThr:{value:0.001},uNormalCos:{value:Math.cos(W8.degToRad(28))},uLine:{value:kZ(this.colors.line)},uLineHi:{value:kZ(this.colors.highlightLine)},uLineMix:{value:1}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:DH,depthTest:!1,depthWrite:!1}),this.quad=new n0(new P9(2,2),this.composite),this.quad.frustumCulled=!1,this.quadScene=new S9,this.quadScene.add(this.quad),this.targets=null}async load(J){let Q=await fetch(J);if(!Q.ok)throw Error(`${Q.status} ${Q.statusText} for ${J}`);let $=await new w5().parseAsync(await Q.arrayBuffer(),"./");this.model=$.scene,this.scene.add(this.model),this.model.updateMatrixWorld(!0);let Z=new Map;for(let[Y,W]of $.parser.associations)if(W&&W.nodes!==void 0&&!Z.has(W.nodes))Z.set(W.nodes,Y);let X=this.timeline.instances;if(X.length>CZ)throw Error(`more than ${CZ} instances`);X.forEach((Y,W)=>{let H=Z.get(Y.node);if(!H)throw Error(`glTF node ${Y.node} (${Y.name}) not found`);let K=[];H.traverse((O)=>{if(O.isMesh)K.push(O)});let G=Y.kind,q=new p6({color:this.colors.fill,side:A9}),U=new H8({color:Y.color,side:A9,metalness:G==="hardware"?0.75:0.05,roughness:G==="hardware"?0.32:0.6,envMapIntensity:G==="hardware"?0.9:0.35}),F=new y6({uniforms:{uId:{value:W+1},uHi:{value:0},uPick:this.pickUniform},vertexShader:CH,fragmentShader:kH,side:A9}),N=new f0().setFromMatrix4(H.parent.matrixWorld).invert(),B=new N6().setFromObject(H);this.instances.set(Y.name,{...Y,id:W+1,object:H,meshes:K,flat:q,shaded:U,info:F,parentInv:N,restBox:B,rest:H.position.clone(),offset:null})}),this.setPoses(new Map)}setStyle(J){this.style=J}setPoses(J){for(let[Q,$]of this.instances){let Z=J.get(Q);if($.offset=Z||null,$.object.visible=!!Z,!Z)continue;let X=x8(Z).applyMatrix3($.parentInv);$.object.position.copy($.rest).add(X)}}setHighlight(J){let Q=new Set(J||[]);for(let[$,Z]of this.instances){let X=Q.has($);Z.flat.color.set(X?this.colors.highlight:this.colors.fill),Z.info.uniforms.uHi.value=X?1:0}}setGuides(J,Q=1.6){for(let $ of[...this.guides.children])$.geometry.dispose(),$.material.dispose(),this.guides.remove($);for(let $ of J||[])for(let Z of $.parts){let X=this.instances.get(Z);if(!X)continue;let Y=X.restBox.getCenter(new P),W=[];for(let q of $.path)W.push(...Y.clone().add(x8(q)).toArray());let H=new x9;H.setPositions(W);let K=new v8({color:this.colors.guide,linewidth:Q,worldUnits:!1}),G=new ZJ(H,K);G.layers.set(Z9),G.computeLineDistances(),this.guides.add(G)}}boxAt(J,Q){return this.instances.get(J).restBox.clone().translate(x8(Q||[0,0,0]))}setWires(J,Q=3.2){for(let $ of[...this.wireGroup.children])$.geometry.dispose(),$.material.dispose(),this.wireGroup.remove($);for(let $ of J||[]){let Z=_H($.route,$.frac).map(x8);if(Z.length<2)continue;let X=Z.flatMap((Y)=>Y.toArray());[[this.colors.line,Q+2,0],[$.hex,Q,1]].forEach(([Y,W,H])=>{let K=new x9;K.setPositions(X);let G=new ZJ(K,new v8({color:Y,linewidth:W,worldUnits:!1}));G.layers.set(Z9),G.renderOrder=10+H,this.wireGroup.add(G)})}}wireBoxes(J){return(J||[]).flatMap((Q)=>Q.route.map(($)=>new N6().setFromPoints([x8($)])))}boxesFor(J,Q){return(Q?Q.filter((Z)=>J.has(Z)):[...J.keys()]).map((Z)=>this.boxAt(Z,J.get(Z)))}fit(J,{az:Q=35,el:$=28,fill:Z=0.86,aspect:X}={}){if(!J.length)return null;let Y=W8.degToRad(Q),W=W8.degToRad(Math.max(-89,Math.min(89,$))),H=x8([Math.sin(Y)*Math.cos(W),-Math.cos(Y)*Math.cos(W),Math.sin(W)]).normalize(),K=new P(0,1,0).cross(H).normalize(),G=H.clone().cross(K),q=[1/0,1/0,1/0],U=[-1/0,-1/0,-1/0],F=new P;for(let D of J)for(let w=0;w<8;w++){F.set(w&1?D.max.x:D.min.x,w&2?D.max.y:D.min.y,w&4?D.max.z:D.min.z);let g=[F.dot(K),F.dot(G),F.dot(H)];for(let k=0;k<3;k++)q[k]=Math.min(q[k],g[k]),U[k]=Math.max(U[k],g[k])}let N=X||this.canvas.clientWidth/Math.max(1,this.canvas.clientHeight),B=Math.max(0.001,(U[0]-q[0])/2)/Z,O=Math.max(0.001,(U[1]-q[1])/2)/Z;if(B/O<N)B=O*N;else O=B/N;let V=K.clone().multiplyScalar((q[0]+U[0])/2).addScaledVector(G,(q[1]+U[1])/2).addScaledVector(H,(q[2]+U[2])/2),E=Math.max(U[0]-q[0],U[1]-q[1],U[2]-q[2]),z=this.camera;return z.left=-B,z.right=B,z.top=O,z.bottom=-O,z.zoom=1,z.position.copy(V).addScaledVector(H,E*3+10),z.near=0.01,z.far=E*8+40,z.up.set(0,1,0),z.lookAt(V),z.updateProjectionMatrix(),V}_ensureTargets(J,Q){if(this.targets&&this.targets.w===J&&this.targets.h===Q)return this.targets;if(this.targets)for(let Z of["color","info","pick"])this.targets[Z].dispose();let $=new e9(J,Q);return $.type=J$,this.targets={w:J,h:Q,color:new c6(J,Q,{type:mJ,samples:4}),info:new c6(J,Q,{type:mJ,depthTexture:$,minFilter:o8,magFilter:o8}),pick:new c6(J,Q,{minFilter:o8,magFilter:o8})},this.targets}_useMaterial(J){for(let Q of this.instances.values())for(let $ of Q.meshes)$.material=Q[J]}_aimLights(){let J=this.camera,Q=new P;J.getWorldDirection(Q);let $=new P().crossVectors(Q,J.up).normalize(),Z=new P().crossVectors($,Q).normalize(),X=J.position.clone().addScaledVector(Q,(J.far+J.near)/4);this.key.target.position.copy(X),this.key.position.copy(X).addScaledVector(Q,-100).addScaledVector(Z,70).addScaledVector($,-45),this.fill.target.position.copy(X),this.fill.position.copy(X).addScaledVector(Q,-100).addScaledVector(Z,-20).addScaledVector($,80)}render(){let J=this.renderer,Q=J.getDrawingBufferSize(new R0),$=this._ensureTargets(Q.x,Q.y),Z=this.camera;for(let H of[...this.guides.children,...this.wireGroup.children])H.material.resolution.set(Q.x,Q.y);this._aimLights();let X=this.style==="line";this._useMaterial(X?"flat":"shaded"),J.setRenderTarget($.color),J.setClearColor(0,0),J.clear(),J.render(this.scene,Z),Z.layers.disable(Z9),this._useMaterial("info"),this.pickUniform.value=0,J.setRenderTarget($.info),J.clear(),J.render(this.scene,Z),Z.layers.enable(Z9);let Y=this.composite.uniforms,W=(Z.top-Z.bottom)/Z.zoom/Q.y;Y.tColor.value=$.color.texture,Y.tInfo.value=$.info.texture,Y.tDepth.value=$.info.depthTexture,Y.uTexel.value.set(1/Q.x,1/Q.y),Y.uDepthThr.value=3*W/(Z.far-Z.near),Y.uLineMix.value=X?1:0.6,J.setRenderTarget(null),J.clear(),J.render(this.quadScene,this.quadCamera)}pick(){let J=this.renderer,Q=J.getDrawingBufferSize(new R0),$=this._ensureTargets(Q.x,Q.y);this.camera.layers.disable(Z9),this._useMaterial("info"),this.pickUniform.value=1,J.setRenderTarget($.pick),J.setClearColor(0,0),J.clear(),J.render(this.scene,this.camera),this.pickUniform.value=0,this.camera.layers.enable(Z9);let Z=new Uint8Array(Q.x*Q.y*4);J.readRenderTargetPixels($.pick,0,0,Q.x,Q.y,Z),J.setRenderTarget(null);let X=new Uint16Array(Q.x*Q.y);for(let Y=0;Y<Q.y;Y++){let W=(Q.y-1-Y)*Q.x;for(let H=0;H<Q.x;H++){let K=(W+H)*4;X[Y*Q.x+H]=Z[K+3]?Z[K]+Z[K+1]*256:0}}return{width:Q.x,height:Q.y,ids:X}}setSize(J,Q){this.renderer.setSize(J,Q,!1)}}var y5=Object.freeze([0,0,0]),DZ=(J)=>Math.min(1,Math.max(0,J)),_Z=(J)=>J*J*(3-2*J);function IH(J){let Q=[];for(let $=1;$<J.length;$++){let[Z,X]=[J[$-1],J[$]];Q.push(Math.hypot(X[0]-Z[0],X[1]-Z[1],X[2]-Z[2]))}return Q}function AH(J,Q){let{path:$,lengths:Z,total:X}=J;if(!X)return $[$.length-1];let Y=Q*X;for(let W=0;W<Z.length;W++){if(Y<=Z[W]||W===Z.length-1){let H=Z[W]?Math.min(1,Y/Z[W]):1,[K,G]=[$[W],$[W+1]];return[K[0]+(G[0]-K[0])*H,K[1]+(G[1]-K[1])*H,K[2]+(G[2]-K[2])*H]}Y-=Z[W]}return $[$.length-1]}function XJ(J){return J.intro=new Map,J.steps.forEach((Q,$)=>{if(Q.place)for(let Z of Q.place.parts)J.intro.set(Z,{si:$,t0:Q.place.t0,move:null});for(let Z of Q.moves){Z.lengths=IH(Z.path),Z.total=Z.lengths.reduce((X,Y)=>X+Y,0);for(let X of Z.parts)J.intro.set(X,{si:$,t0:Z.t0,move:Z})}}),J}function wZ(J,Q){let $=new Map;for(let[Z,X]of J.intro){if(Q<X.t0)continue;let Y=X.move;if(!Y){$.set(Z,y5);continue}let W=Y.t1>Y.tm?DZ((Q-Y.tm)/(Y.t1-Y.tm)):1;$.set(Z,AH(Y,_Z(W)))}return $}function X9(J,Q){let $=0;return J.steps.forEach((Z,X)=>{if(Q>=Z.t0)$=X}),$}function IZ(J,Q){return J.steps[X9(J,Q)].moves.filter((Z)=>Q>=Z.t0&&Q<Z.t1)}function AZ(J,Q){let $=new Map;for(let[Z,X]of J.intro)if(X.si<Q)$.set(Z,y5);else if(X.si===Q)$.set(Z,X.move?X.move.path[0]:y5);return $}function PZ(J,Q){let $=[];for(let Z of Object.values(J.wires||{})){if(!Z.route.length||Z.t0===void 0||Q<Z.t0)continue;let X=Z.t1>Z.t0?_Z(DZ((Q-Z.t0)/(Z.t1-Z.t0))):1;$.push({...Z,frac:X})}return $}function TZ(J,Q){let $=new Set(J.steps.slice(0,Q+1).flatMap((Z)=>Z.wires||[]));return Object.values(J.wires||{}).filter((Z)=>$.has(Z.id)&&Z.route.length).map((Z)=>({...Z,frac:1}))}function YJ(J,Q){let $=J.steps[Q];return[...$.parts,...($.wires||[]).flatMap((Z)=>J.wires[Z].endpoints)]}var J6=(J)=>document.getElementById(J),SZ=(J)=>`${Math.floor(J/60)}:${String(Math.floor(J%60)).padStart(2,"0")}`;async function jZ(){let J=J6("status"),Q,$=new Promise((Z)=>{Q=Z});window.assemblyPlayer={ready:$};try{let Z=XJ(await(await fetch("./timeline.json")).json());document.title=`${Z.title} — assembly animation`,J6("title").textContent=Z.title,J6("clearance").textContent=Z.clearance.text,J6("clearance").classList.toggle("draft",Z.clearance.status!=="verified");let X=J6("view"),Y=new W7(X,Z,{pixelRatio:Math.min(window.devicePixelRatio||1,2)});await Y.load(`./${Z.model}`);let W=new z5(Y.camera,X);W.enableDamping=!0,W.dampingFactor=0.1,W.screenSpacePanning=!0;let H=0,K=!1,G=1,q=!1,U=!0,F="shaded",N=!0,B=-1,O=()=>{let y=[];for(let v of Z.steps){for(let i of v.place?v.place.parts:[])y.push(Y.boxAt(i,[0,0,0]));for(let i of v.moves)for(let b of i.parts)for(let $0 of i.path)y.push(Y.boxAt(b,$0))}return y.push(...Y.wireBoxes(Object.values(Z.wires||{}))),y},V=(y=Z.view)=>{let v=Y.fit(O(),{az:y.az,el:y.el,fill:0.9});if(v)W.target.copy(v);W.update(),U=!0},E=J6("scrub");E.max=String(Z.duration);let z=J6("ticks");Z.steps.forEach((y,v)=>{let i=document.createElement("div");i.className="tick",i.style.left=`${y.t0/Z.duration*100}%`,i.title=`${v+1}. ${y.title}`,z.appendChild(i)});let D=J6("steps"),w=[];Z.sections.forEach((y)=>{let v=document.createElement("div");v.className="section",v.textContent=y.title,D.appendChild(v);for(let i of y.steps){let b=document.createElement("button");b.className="step",b.innerHTML=`<span class="n">${i+1}</span><span class="t"></span>`,b.querySelector(".t").textContent=Z.steps[i].title,b.addEventListener("click",()=>{j(Z.steps[i].t0)}),D.appendChild(b),w[i]=b}});let g=(y)=>{if(y===B)return;B=y,w.forEach((b,$0)=>b.classList.toggle("current",$0===y)),w[y].scrollIntoView({block:"nearest"});let v=Z.steps[y];J6("step-label").textContent=`Step ${y+1} of ${Z.steps.length} · ${v.title}`;let i=J6("notes");i.replaceChildren();for(let b of v.notes){let $0=document.createElement("div");$0.className=`note ${b.kind}`;let W0=document.createElement("h4");W0.textContent=b.title;let V0=document.createElement("p");V0.textContent=b.text,$0.append(W0,V0),i.appendChild($0)}for(let b of v.wires||[]){let $0=Z.wires[b],W0=document.createElement("div");W0.className="wire";let V0=document.createElement("span");V0.className="wswatch",V0.style.background=$0.hex;let L0=document.createElement("p");L0.textContent=`${b}: ${$0.from} → ${$0.to}${$0.gauge?` · ${$0.gauge}`:""} · ${$0.color}`,W0.append(V0,L0),i.appendChild(W0)}history.replaceState(null,"",`#step=${y+1}`)},k=()=>{Y.setPoses(wZ(Z,H));let y=X9(Z,H),v=Z.steps[y];Y.setHighlight(F==="line"?YJ(Z,y):[]),Y.setGuides(N?IZ(Z,H):[]),Y.setWires(PZ(Z,H)),g(y),E.value=String(H),J6("time").textContent=`${SZ(H)} / ${SZ(Z.duration)}`,J6("play").textContent=K?"Pause":"Play",J6("play").setAttribute("aria-pressed",String(K)),U=!0},j=(y)=>{H=Math.min(Z.duration,Math.max(0,y)),k()},h=()=>{if(H>=Z.duration)H=0;K=!0,k()},L=()=>{K=!1,k()},C=(y)=>j(Z.steps[Math.min(Z.steps.length-1,Math.max(0,y))].t0),S=()=>{let y=Z.steps[X9(Z,H)];V(y.view)};J6("play").addEventListener("click",()=>K?L():h()),J6("prev").addEventListener("click",()=>{let y=X9(Z,H);C(H-Z.steps[y].t0>0.5?y:y-1)}),J6("next").addEventListener("click",()=>C(X9(Z,H)+1)),E.addEventListener("input",()=>j(Number(E.value))),J6("speed").addEventListener("change",(y)=>{G=Number(y.target.value)}),J6("loop").addEventListener("change",(y)=>{q=y.target.checked}),J6("guides").addEventListener("change",(y)=>{N=y.target.checked,k()}),J6("style").addEventListener("change",(y)=>{F=y.target.value,Y.setStyle(F),document.body.classList.toggle("line-art",F==="line"),k()}),J6("fit").addEventListener("click",()=>V()),J6("stepview").addEventListener("click",S),J6("panel-toggle").addEventListener("click",()=>document.body.classList.toggle("panel-hidden")),window.addEventListener("keydown",(y)=>{if(y.target instanceof HTMLInputElement||y.target instanceof HTMLSelectElement)return;if(y.code==="Space")y.preventDefault(),K?L():h();else if(y.key==="ArrowRight")J6("next").click();else if(y.key==="ArrowLeft")J6("prev").click();else if(y.key==="f")V();else if(y.key==="v")S()}),W.addEventListener("change",()=>{U=!0});let u=()=>{let{clientWidth:y,clientHeight:v}=X;Y.setSize(y,v);let i=Y.camera,b=(i.top-i.bottom)/2;i.left=-b*(y/Math.max(1,v)),i.right=-i.left,i.updateProjectionMatrix(),U=!0};window.addEventListener("resize",u),Y.setSize(X.clientWidth,X.clientHeight),V();let n=/step=(\d+)/.exec(location.hash);if(n)C(Number(n[1])-1);else j(0);let m=performance.now();Y.renderer.setAnimationLoop((y)=>{let v=Math.min(0.1,(y-m)/1000);if(m=y,K){if(H+=v*G,H>=Z.duration)if(q)H=0;else H=Z.duration,K=!1;k()}if(W.update())U=!0;if(U)Y.render(),U=!1}),J.textContent="",Object.assign(window.assemblyPlayer,{timeline:Z,view:Y,controls:W,get time(){return H},get playing(){return K},duration:Z.duration,play:h,pause:L,seek:j,gotoStep:C,fit:V,stepView:S,setStyle(y){J6("style").value=y,J6("style").dispatchEvent(new Event("change"))},state(){let y=[...Y.instances.values()].filter((v)=>v.object.visible);return{time:H,playing:K,step:X9(Z,H),visible:y.map((v)=>v.name),offsets:Object.fromEntries(y.map((v)=>[v.name,v.offset])),positions:Object.fromEntries(y.map((v)=>[v.name,v.object.position.toArray()])),target:W.target.toArray(),camera:Y.camera.position.toArray()}}}),Q(!0)}catch(Z){throw J.textContent=`Failed to load: ${Z.message}`,J.classList.add("error"),Q(!1),Z}}var PH={az:35,el:28};function TH(J){let{width:Q,height:$,ids:Z}=J,X=new Map,Y=0,W=0,H=0;for(let K=0;K<$;K++)for(let G=0;G<Q;G++){let q=Z[K*Q+G];if(!q)continue;let U=X.get(q);if(!U)X.set(q,U={count:0,sx:0,sy:0});U.count++,U.sx+=G,U.sy+=K,Y+=G,W+=K,H++}return{stats:X,centroid:H?[Y/H,W/H]:[Q/2,$/2]}}function SH(J,Q,$){let{width:Z,height:X,ids:Y}=J,W=$.sx/$.count,H=$.sy/$.count,K=null,G=1/0,q=$.count>40000?2:1;for(let U=0;U<X;U+=q)for(let F=0;F<Z;F+=q){if(Y[U*Z+F]!==Q)continue;let N=(F-W)**2+(U-H)**2;if(N<G)G=N,K=[F,U]}return K}function jH(J,Q,$,Z,X,Y=[]){let W=J.width/Q,H=J.height/Q,K=6,G=Math.ceil(W/6),q=Math.ceil(H/6),U=new Uint8Array(G*q);for(let h=0;h<J.height;h++)for(let L=0;L<J.width;L++)if(J.ids[h*J.width+L])U[Math.floor(h/Q/6)*G+Math.floor(L/Q/6)]=1;let F=new P,N=(h)=>{return F.copy(x8(h)).project($.camera),[(F.x+1)/2*W,(1-F.y)/2*H]};for(let h of Y){let L=h.route.map(N);for(let C=1;C<L.length;C++){let[S,u]=[L[C-1],L[C]],n=Math.ceil(Math.hypot(u[0]-S[0],u[1]-S[1])/3)+1;for(let m=0;m<=n;m++){let y=Math.floor((S[0]+(u[0]-S[0])*m/n)/6),v=Math.floor((S[1]+(u[1]-S[1])*m/n)/6);if(y>=0&&v>=0&&y<G&&v<q)U[v*G+y]=1}}}let{stats:B,centroid:O}=TH(J),[V,E]=[O[0]/Q,O[1]/Q],z=document.createElement("canvas").getContext("2d");z.font=X.font;let D=[],w=[],g=[],k=8,j=(h)=>{if(h.x<k||h.y<k||h.x+h.w>W-k||h.y+h.h>H-k)return 1/0;for(let m of D)if(h.x<m.x+m.w+8&&h.x+h.w+8>m.x&&h.y<m.y+m.h+6&&h.y+h.h+6>m.y)return 1/0;let L=0,C=Math.max(0,Math.floor((h.x-4)/6)),S=Math.min(G-1,Math.floor((h.x+h.w+4)/6)),u=Math.max(0,Math.floor((h.y-4)/6)),n=Math.min(q-1,Math.floor((h.y+h.h+4)/6));for(let m=u;m<=n;m++)for(let y=C;y<=S;y++)L+=U[m*G+y];return L};for(let h of Z){let L=Math.ceil(z.measureText(h.text).width)+2*X.padX,C=X.height,S=null,u=-1;for(let W0 of h.names){let V0=$.instances.get(W0),L0=V0&&B.get(V0.id);if(!L0||L0.count<12*Q*Q)continue;let o=(L0.sx/L0.count/Q-V)**2+(L0.sy/L0.count/Q-E)**2;if(o>u)u=o,S=SH(J,V0.id,L0)}if(!S){g.push(`${h.text}: not visible in this figure; choose another view or focus`),w.push({text:h.text,w:L,h:C,anchor:null});continue}let[n,m]=[S[0]/Q,S[1]/Q],y=n-V,v=m-E,i=Math.hypot(y,v);if(i<1)y=1,v=-0.6;else y/=i,v/=i;let b=null,$0=1/0;J:for(let W0=34;W0<Math.max(W,H);W0+=12)for(let V0 of[0,15,-15,30,-30,45,-45,60,-60,90,-90,120,-120,150,-150,180]){let L0=V0*Math.PI/180,o=y*Math.cos(L0)-v*Math.sin(L0),Z0=y*Math.sin(L0)+v*Math.cos(L0),F0={x:n+o*W0-L/2,y:m+Z0*W0-C/2,w:L,h:C},z0=j(F0);if(z0===0){b=F0;break J}if(z0+W0/200<$0)$0=z0+W0/200,b=F0}D.push(b),w.push({text:h.text,x:b.x,y:b.y,w:L,h:C,anchor:[n,m]})}return{labels:w,warnings:g}}async function yZ(){let J,Q=new Promise(($)=>{J=$});window.assemblyRender={ready:Q};try{let $=XJ(await(await fetch("./timeline.json")).json()),Z=document.getElementById("view"),X=new W7(Z,$,{preserve:!0});await X.load(`./${$.model}`),await document.fonts.ready,window.assemblyRender.figure=(Y)=>{let{width:W,height:H,scale:K=2}=Y;Z.style.width=`${W}px`,Z.style.height=`${H}px`,X.renderer.setPixelRatio(K),X.setSize(W,H);let G,q=null,U=$.view,F="shaded",N=[],B=[],O=[],V=[];if(Y.kind==="step"){let g=$.steps[Y.index];G=AZ($,Y.index),q=g.focus,U=g.view,F="line",N=YJ($,Y.index),B=g.moves,O=TZ($,Y.index),V=O.filter((k)=>g.wires.includes(k.id))}else if(Y.kind==="part")G=new Map([[Y.name,[0,0,0]]]),U=PH,F="line";else throw Error(`unknown figure kind ${Y.kind}`);X.setPoses(G),X.setStyle(F),X.setHighlight(N),X.setGuides(B,1.4),X.setWires(O);let E=X.boxesFor(G,q);for(let g of B)for(let k of g.parts)for(let j of g.path)E.push(X.boxAt(k,j));E.push(...X.wireBoxes(V)),X.fit(E,{az:U.az,el:U.el,fill:Y.fill||0.82,aspect:W/H}),X.render();let z=Z.toDataURL("image/png"),D=[],w=[];if(Y.labels&&Y.labels.length)({labels:D,warnings:w}=jH(X.pick(),K,X,Y.labels,Y.pill,O));return{png:z,labels:D,warnings:w}},J(!0)}catch($){window.assemblyRender.error=String($&&$.stack||$),J(!1)}}if(document.body.dataset.mode==="render")yZ();else jZ();
