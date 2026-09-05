var o7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},a7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var H$=0;var K$=2;var q$=4;var c9=1000,G$=1001,U$=1002,F$=1003,V$=1004;var E$=1005;var sJ=1006,O$=1007;var iJ=1008;var N$=2300,oJ=2301;var R$=0,n9=1,e8=2;var v7="srgb",W7="srgb-linear";class O7{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){if(this._listeners===void 0)return!1;let $=this._listeners;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){if(this._listeners===void 0)return;let Z=this._listeners[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){if(this._listeners===void 0)return;let $=this._listeners[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,Y=Z.length;W<Y;W++)Z[W].call(this,J);J.target=null}}}var C6=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],t5=1234567,I8=Math.PI/180,A8=180/Math.PI;function t6(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(C6[J&255]+C6[J>>8&255]+C6[J>>16&255]+C6[J>>24&255]+"-"+C6[Q&255]+C6[Q>>8&255]+"-"+C6[Q>>16&15|64]+C6[Q>>24&255]+"-"+C6[$&63|128]+C6[$>>8&255]+"-"+C6[$>>16&255]+C6[$>>24&255]+C6[Z&255]+C6[Z>>8&255]+C6[Z>>16&255]+C6[Z>>24&255]).toLowerCase()}function L6(J,Q,$){return Math.max(Q,Math.min($,J))}function aJ(J,Q){return(J%Q+Q)%Q}function qW(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function GW(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function a8(J,Q,$){return(1-$)*J+$*Q}function UW(J,Q,$,Z){return a8(J,Q,1-Math.exp(-$*Z))}function FW(J,Q=1){return Q-Math.abs(aJ(J,Q*2)-Q)}function VW(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function EW(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function OW(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function NW(J,Q){return J+Math.random()*(Q-J)}function RW(J){return J*(0.5-Math.random())}function zW(J){if(J!==void 0)t5=J;let Q=t5+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function BW(J){return J*I8}function MW(J){return J*A8}function kW(J){return(J&J-1)===0&&J!==0}function LW(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function DW(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function CW(J,Q,$,Z,W){let{cos:Y,sin:X}=Math,H=Y($/2),K=X($/2),q=Y((Q+Z)/2),G=X((Q+Z)/2),U=Y((Q-Z)/2),F=X((Q-Z)/2),O=Y((Z-Q)/2),N=X((Z-Q)/2);switch(W){case"XYX":J.set(H*G,K*U,K*F,H*q);break;case"YZY":J.set(K*F,H*G,K*U,H*q);break;case"ZXZ":J.set(K*U,K*F,H*G,H*q);break;case"XZX":J.set(H*G,K*N,K*O,H*q);break;case"YXY":J.set(K*O,H*G,K*N,H*q);break;case"ZYZ":J.set(K*N,K*O,H*G,H*q);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function a6(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function a0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var s9={DEG2RAD:I8,RAD2DEG:A8,generateUUID:t6,clamp:L6,euclideanModulo:aJ,mapLinear:qW,inverseLerp:GW,lerp:a8,damp:UW,pingpong:FW,smoothstep:VW,smootherstep:EW,randInt:OW,randFloat:NW,randFloatSpread:RW,seededRandom:zW,degToRad:BW,radToDeg:MW,isPowerOfTwo:kW,ceilPowerOfTwo:LW,floorPowerOfTwo:DW,setQuaternionFromProperEuler:CW,normalize:a0,denormalize:a6};class M0{constructor(J=0,Q=0){M0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=Math.max(J.x,Math.min(Q.x,this.x)),this.y=Math.max(J.y,Math.min(Q.y,this.y)),this}clampScalar(J,Q){return this.x=Math.max(J,Math.min(Q,this.x)),this.y=Math.max(J,Math.min(Q,this.y)),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(Math.max(J,Math.min(Q,$)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(L6($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,Y=this.y-J.y;return this.x=W*$-Y*Z+J.x,this.y=W*Z+Y*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class f0{constructor(J,Q,$,Z,W,Y,X,H,K){if(f0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,Y,X,H,K)}set(J,Q,$,Z,W,Y,X,H,K){let q=this.elements;return q[0]=J,q[1]=Z,q[2]=X,q[3]=Q,q[4]=W,q[5]=H,q[6]=$,q[7]=Y,q[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,Y=$[0],X=$[3],H=$[6],K=$[1],q=$[4],G=$[7],U=$[2],F=$[5],O=$[8],N=Z[0],R=Z[3],V=Z[6],E=Z[1],M=Z[4],C=Z[7],I=Z[2],y=Z[5],L=Z[8];return W[0]=Y*N+X*E+H*I,W[3]=Y*R+X*M+H*y,W[6]=Y*V+X*C+H*L,W[1]=K*N+q*E+G*I,W[4]=K*R+q*M+G*y,W[7]=K*V+q*C+G*L,W[2]=U*N+F*E+O*I,W[5]=U*R+F*M+O*y,W[8]=U*V+F*C+O*L,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],Y=J[4],X=J[5],H=J[6],K=J[7],q=J[8];return Q*Y*q-Q*X*K-$*W*q+$*X*H+Z*W*K-Z*Y*H}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],Y=J[4],X=J[5],H=J[6],K=J[7],q=J[8],G=q*Y-X*K,U=X*H-q*W,F=K*W-Y*H,O=Q*G+$*U+Z*F;if(O===0)return this.set(0,0,0,0,0,0,0,0,0);let N=1/O;return J[0]=G*N,J[1]=(Z*K-q*$)*N,J[2]=(X*$-Z*Y)*N,J[3]=U*N,J[4]=(q*Q-Z*H)*N,J[5]=(Z*W-X*Q)*N,J[6]=F*N,J[7]=($*H-K*Q)*N,J[8]=(Y*Q-$*W)*N,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,Y,X){let H=Math.cos(W),K=Math.sin(W);return this.set($*H,$*K,-$*(H*Y+K*X)+Y+J,-Z*K,Z*H,-Z*(-K*Y+H*X)+X+Q,0,0,1),this}scale(J,Q){return this.premultiply(VJ.makeScale(J,Q)),this}rotate(J){return this.premultiply(VJ.makeRotation(-J)),this}translate(J,Q){return this.premultiply(VJ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var VJ=new f0;function z$(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function t8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function _W(){let J=t8("canvas");return J.style.display="block",J}var e5={};function rJ(J){if(J in e5)return;e5[J]=!0,console.warn(J)}function wW(J,Q,$){return new Promise(function(Z,W){function Y(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(Y,$);break;default:Z()}}setTimeout(Y,$)})}var JQ=new f0().set(0.8224621,0.177538,0,0.0331941,0.9668058,0,0.0170827,0.0723974,0.9105199),QQ=new f0().set(1.2249401,-0.2249404,0,-0.0420569,1.0420571,0,-0.0196376,-0.0786361,1.0982735),U9={["srgb-linear"]:{transfer:"linear",primaries:"rec709",toReference:(J)=>J,fromReference:(J)=>J},["srgb"]:{transfer:"srgb",primaries:"rec709",toReference:(J)=>J.convertSRGBToLinear(),fromReference:(J)=>J.convertLinearToSRGB()},["display-p3-linear"]:{transfer:"linear",primaries:"p3",toReference:(J)=>J.applyMatrix3(QQ),fromReference:(J)=>J.applyMatrix3(JQ)},["display-p3"]:{transfer:"srgb",primaries:"p3",toReference:(J)=>J.convertSRGBToLinear().applyMatrix3(QQ),fromReference:(J)=>J.applyMatrix3(JQ).convertLinearToSRGB()}},IW=new Set(["srgb-linear","display-p3-linear"]),c0={enabled:!0,_workingColorSpace:"srgb-linear",get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(J){if(!IW.has(J))throw Error(`Unsupported working color space, "${J}".`);this._workingColorSpace=J},convert:function(J,Q,$){if(this.enabled===!1||Q===$||!Q||!$)return J;let Z=U9[Q].toReference,W=U9[$].fromReference;return W(Z(J))},fromWorkingColorSpace:function(J,Q){return this.convert(J,this._workingColorSpace,Q)},toWorkingColorSpace:function(J,Q){return this.convert(J,Q,this._workingColorSpace)},getPrimaries:function(J){return U9[J].primaries},getTransfer:function(J){if(J==="")return"linear";return U9[J].transfer}};function P8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function EJ(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var q8;class B${static getDataURL(J){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(q8===void 0)q8=t8("canvas");q8.width=J.width,q8.height=J.height;let $=q8.getContext("2d");if(J instanceof ImageData)$.putImageData(J,0,0);else $.drawImage(J,0,0,J.width,J.height);Q=q8}if(Q.width>2048||Q.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",J),Q.toDataURL("image/jpeg",0.6);else return Q.toDataURL("image/png")}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=t8("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let Y=0;Y<W.length;Y++)W[Y]=P8(W[Y]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(P8(Q[$]/255)*255);else Q[$]=P8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var PW=0;class tJ{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PW++}),this.uuid=t6(),this.data=J,this.dataReady=!0,this.version=0}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let Y=0,X=Z.length;Y<X;Y++)if(Z[Y].isDataTexture)W.push(OJ(Z[Y].image));else W.push(OJ(Z[Y]))}else W=OJ(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function OJ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return B$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var AW=0;class E6 extends O7{constructor(J=E6.DEFAULT_IMAGE,Q=E6.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,Y=1008,X=1023,H=1009,K=E6.DEFAULT_ANISOTROPY,q=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:AW++}),this.uuid=t6(),this.name="",this.source=new tJ(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=Y,this.anisotropy=K,this.format=X,this.internalFormat=null,this.type=H,this.offset=new M0(0,0),this.repeat=new M0(1,1),this.center=new M0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new f0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=q,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}E6.DEFAULT_IMAGE=null;E6.DEFAULT_MAPPING=300;E6.DEFAULT_ANISOTROPY=1;class r0{constructor(J=0,Q=0,$=0,Z=1){r0.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,Y=J.elements;return this.x=Y[0]*Q+Y[4]*$+Y[8]*Z+Y[12]*W,this.y=Y[1]*Q+Y[5]*$+Y[9]*Z+Y[13]*W,this.z=Y[2]*Q+Y[6]*$+Y[10]*Z+Y[14]*W,this.w=Y[3]*Q+Y[7]*$+Y[11]*Z+Y[15]*W,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,Y=0.01,X=0.1,H=J.elements,K=H[0],q=H[4],G=H[8],U=H[1],F=H[5],O=H[9],N=H[2],R=H[6],V=H[10];if(Math.abs(q-U)<0.01&&Math.abs(G-N)<0.01&&Math.abs(O-R)<0.01){if(Math.abs(q+U)<0.1&&Math.abs(G+N)<0.1&&Math.abs(O+R)<0.1&&Math.abs(K+F+V-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let M=(K+1)/2,C=(F+1)/2,I=(V+1)/2,y=(q+U)/4,L=(G+N)/4,S=(O+R)/4;if(M>C&&M>I)if(M<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(M),Z=y/$,W=L/$;else if(C>I)if(C<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(C),$=y/Z,W=S/Z;else if(I<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(I),$=L/W,Z=S/W;return this.set($,Z,W,Q),this}let E=Math.sqrt((R-O)*(R-O)+(G-N)*(G-N)+(U-q)*(U-q));if(Math.abs(E)<0.001)E=1;return this.x=(R-O)/E,this.y=(G-N)/E,this.z=(U-q)/E,this.w=Math.acos((K+F+V-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=Math.max(J.x,Math.min(Q.x,this.x)),this.y=Math.max(J.y,Math.min(Q.y,this.y)),this.z=Math.max(J.z,Math.min(Q.z,this.z)),this.w=Math.max(J.w,Math.min(Q.w,this.w)),this}clampScalar(J,Q){return this.x=Math.max(J,Math.min(Q,this.x)),this.y=Math.max(J,Math.min(Q,this.y)),this.z=Math.max(J,Math.min(Q,this.z)),this.w=Math.max(J,Math.min(Q,this.w)),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(Math.max(J,Math.min(Q,$)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M$ extends O7{constructor(J=1,Q=1,$={}){super();this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=1,this.scissor=new r0(0,0,J,Q),this.scissorTest=!1,this.viewport=new r0(0,0,J,Q);let Z={width:J,height:Q,depth:1};$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},$);let W=new E6(Z,$.mapping,$.wrapS,$.wrapT,$.magFilter,$.minFilter,$.format,$.type,$.anisotropy,$.colorSpace);W.flipY=!1,W.generateMipmaps=$.generateMipmaps,W.internalFormat=$.internalFormat,this.textures=[];let Y=$.count;for(let X=0;X<Y;X++)this.textures[X]=W.clone(),this.textures[X].isRenderTargetTexture=!0;this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.depthTexture=$.depthTexture,this.samples=$.samples}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let $=0,Z=J.textures.length;$<Z;$++)this.textures[$]=J.textures[$].clone(),this.textures[$].isRenderTargetTexture=!0;let Q=Object.assign({},J.texture.image);if(this.texture.source=new tJ(Q),this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class S7 extends M${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class eJ extends E6{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class k$ extends E6{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class x6{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,Y,X){let H=$[Z+0],K=$[Z+1],q=$[Z+2],G=$[Z+3],U=W[Y+0],F=W[Y+1],O=W[Y+2],N=W[Y+3];if(X===0){J[Q+0]=H,J[Q+1]=K,J[Q+2]=q,J[Q+3]=G;return}if(X===1){J[Q+0]=U,J[Q+1]=F,J[Q+2]=O,J[Q+3]=N;return}if(G!==N||H!==U||K!==F||q!==O){let R=1-X,V=H*U+K*F+q*O+G*N,E=V>=0?1:-1,M=1-V*V;if(M>Number.EPSILON){let I=Math.sqrt(M),y=Math.atan2(I,V*E);R=Math.sin(R*y)/I,X=Math.sin(X*y)/I}let C=X*E;if(H=H*R+U*C,K=K*R+F*C,q=q*R+O*C,G=G*R+N*C,R===1-X){let I=1/Math.sqrt(H*H+K*K+q*q+G*G);H*=I,K*=I,q*=I,G*=I}}J[Q]=H,J[Q+1]=K,J[Q+2]=q,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,W,Y){let X=$[Z],H=$[Z+1],K=$[Z+2],q=$[Z+3],G=W[Y],U=W[Y+1],F=W[Y+2],O=W[Y+3];return J[Q]=X*O+q*G+H*F-K*U,J[Q+1]=H*O+q*U+K*G-X*F,J[Q+2]=K*O+q*F+X*U-H*G,J[Q+3]=q*O-X*G-H*U-K*F,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:Y}=J,X=Math.cos,H=Math.sin,K=X($/2),q=X(Z/2),G=X(W/2),U=H($/2),F=H(Z/2),O=H(W/2);switch(Y){case"XYZ":this._x=U*q*G+K*F*O,this._y=K*F*G-U*q*O,this._z=K*q*O+U*F*G,this._w=K*q*G-U*F*O;break;case"YXZ":this._x=U*q*G+K*F*O,this._y=K*F*G-U*q*O,this._z=K*q*O-U*F*G,this._w=K*q*G+U*F*O;break;case"ZXY":this._x=U*q*G-K*F*O,this._y=K*F*G+U*q*O,this._z=K*q*O+U*F*G,this._w=K*q*G-U*F*O;break;case"ZYX":this._x=U*q*G-K*F*O,this._y=K*F*G+U*q*O,this._z=K*q*O-U*F*G,this._w=K*q*G+U*F*O;break;case"YZX":this._x=U*q*G+K*F*O,this._y=K*F*G+U*q*O,this._z=K*q*O-U*F*G,this._w=K*q*G-U*F*O;break;case"XZY":this._x=U*q*G-K*F*O,this._y=K*F*G-U*q*O,this._z=K*q*O+U*F*G,this._w=K*q*G+U*F*O;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Y)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],Y=Q[1],X=Q[5],H=Q[9],K=Q[2],q=Q[6],G=Q[10],U=$+X+G;if(U>0){let F=0.5/Math.sqrt(U+1);this._w=0.25/F,this._x=(q-H)*F,this._y=(W-K)*F,this._z=(Y-Z)*F}else if($>X&&$>G){let F=2*Math.sqrt(1+$-X-G);this._w=(q-H)/F,this._x=0.25*F,this._y=(Z+Y)/F,this._z=(W+K)/F}else if(X>G){let F=2*Math.sqrt(1+X-$-G);this._w=(W-K)/F,this._x=(Z+Y)/F,this._y=0.25*F,this._z=(H+q)/F}else{let F=2*Math.sqrt(1+G-$-X);this._w=(Y-Z)/F,this._x=(W+K)/F,this._y=(H+q)/F,this._z=0.25*F}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<Number.EPSILON)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(L6(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:Y}=J,X=Q._x,H=Q._y,K=Q._z,q=Q._w;return this._x=$*q+Y*X+Z*K-W*H,this._y=Z*q+Y*H+W*X-$*K,this._z=W*q+Y*K+$*H-Z*X,this._w=Y*q-$*X-Z*H-W*K,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let $=this._x,Z=this._y,W=this._z,Y=this._w,X=Y*J._w+$*J._x+Z*J._y+W*J._z;if(X<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,X=-X;else this.copy(J);if(X>=1)return this._w=Y,this._x=$,this._y=Z,this._z=W,this;let H=1-X*X;if(H<=Number.EPSILON){let F=1-Q;return this._w=F*Y+Q*this._w,this._x=F*$+Q*this._x,this._y=F*Z+Q*this._y,this._z=F*W+Q*this._z,this.normalize(),this}let K=Math.sqrt(H),q=Math.atan2(K,X),G=Math.sin((1-Q)*q)/K,U=Math.sin(Q*q)/K;return this._w=Y*G+this._w*U,this._x=$*G+this._x*U,this._y=Z*G+this._y*U,this._z=W*G+this._z*U,this._onChangeCallback(),this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(J=0,Q=0,$=0){A.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion($Q.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion($Q.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,Y=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*Y,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*Y,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*Y,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,Y=J.y,X=J.z,H=J.w,K=2*(Y*Z-X*$),q=2*(X*Q-W*Z),G=2*(W*$-Y*Q);return this.x=Q+H*K+Y*G-X*q,this.y=$+H*q+X*K-W*G,this.z=Z+H*G+W*q-Y*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=Math.max(J.x,Math.min(Q.x,this.x)),this.y=Math.max(J.y,Math.min(Q.y,this.y)),this.z=Math.max(J.z,Math.min(Q.z,this.z)),this}clampScalar(J,Q){return this.x=Math.max(J,Math.min(Q,this.x)),this.y=Math.max(J,Math.min(Q,this.y)),this.z=Math.max(J,Math.min(Q,this.z)),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(Math.max(J,Math.min(Q,$)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,Y=Q.x,X=Q.y,H=Q.z;return this.x=Z*H-W*X,this.y=W*Y-$*H,this.z=$*X-Z*Y,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return NJ.copy(this).projectOnVector(J),this.sub(NJ)}reflect(J){return this.sub(NJ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(L6($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var NJ=new A,$Q=new x6;class h6{constructor(J=new A(1/0,1/0,1/0),Q=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(s6.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(s6.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=s6.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let Y=0,X=W.count;Y<X;Y++){if(J.isMesh===!0)J.getVertexPosition(Y,s6);else s6.fromBufferAttribute(W,Y);s6.applyMatrix4(J.matrixWorld),this.expandByPoint(s6)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();F9.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();F9.copy($.boundingBox)}F9.applyMatrix4(J.matrixWorld),this.union(F9)}}let Z=J.children;for(let W=0,Y=Z.length;W<Y;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x<this.min.x||J.x>this.max.x||J.y<this.min.y||J.y>this.max.y||J.z<this.min.z||J.z>this.max.z?!1:!0}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x<this.min.x||J.min.x>this.max.x||J.max.y<this.min.y||J.min.y>this.max.y||J.max.z<this.min.z||J.min.z>this.max.z?!1:!0}intersectsSphere(J){return this.clampPoint(J.center,s6),s6.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(u8),V9.subVectors(this.max,u8),G8.subVectors(J.a,u8),U8.subVectors(J.b,u8),F8.subVectors(J.c,u8),C7.subVectors(U8,G8),_7.subVectors(F8,U8),u7.subVectors(G8,F8);let Q=[0,-C7.z,C7.y,0,-_7.z,_7.y,0,-u7.z,u7.y,C7.z,0,-C7.x,_7.z,0,-_7.x,u7.z,0,-u7.x,-C7.y,C7.x,0,-_7.y,_7.x,0,-u7.y,u7.x,0];if(!RJ(Q,G8,U8,F8,V9))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!RJ(Q,G8,U8,F8,V9))return!1;return E9.crossVectors(C7,_7),Q=[E9.x,E9.y,E9.z],RJ(Q,G8,U8,F8,V9)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,s6).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(s6).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return K7[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),K7[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),K7[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),K7[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),K7[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),K7[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),K7[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),K7[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(K7),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var K7=[new A,new A,new A,new A,new A,new A,new A,new A],s6=new A,F9=new h6,G8=new A,U8=new A,F8=new A,C7=new A,_7=new A,u7=new A,u8=new A,V9=new A,E9=new A,m7=new A;function RJ(J,Q,$,Z,W){for(let Y=0,X=J.length-3;Y<=X;Y+=3){m7.fromArray(J,Y);let H=W.x*Math.abs(m7.x)+W.y*Math.abs(m7.y)+W.z*Math.abs(m7.z),K=Q.dot(m7),q=$.dot(m7),G=Z.dot(m7);if(Math.max(-Math.max(K,q,G),Math.min(K,q,G))>H)return!1}return!0}var TW=new h6,m8=new A,zJ=new A;class p6{constructor(J=new A,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else TW.setFromPoints(J).getCenter($);let Z=0;for(let W=0,Y=J.length;W<Y;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;m8.subVectors(J,this.center);let Q=m8.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(m8,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else zJ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(m8.copy(J.center).add(zJ)),this.expandByPoint(m8.copy(J.center).sub(zJ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}}var q7=new A,BJ=new A,O9=new A,w7=new A,MJ=new A,N9=new A,kJ=new A;class f7{constructor(J=new A,Q=new A(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,q7)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=q7.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return q7.copy(this.origin).addScaledVector(this.direction,Q),q7.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){BJ.copy(J).add(Q).multiplyScalar(0.5),O9.copy(Q).sub(J).normalize(),w7.copy(this.origin).sub(BJ);let W=J.distanceTo(Q)*0.5,Y=-this.direction.dot(O9),X=w7.dot(this.direction),H=-w7.dot(O9),K=w7.lengthSq(),q=Math.abs(1-Y*Y),G,U,F,O;if(q>0)if(G=Y*H-X,U=Y*X-H,O=W*q,G>=0)if(U>=-O)if(U<=O){let N=1/q;G*=N,U*=N,F=G*(G+Y*U+2*X)+U*(Y*G+U+2*H)+K}else U=W,G=Math.max(0,-(Y*U+X)),F=-G*G+U*(U+2*H)+K;else U=-W,G=Math.max(0,-(Y*U+X)),F=-G*G+U*(U+2*H)+K;else if(U<=-O)G=Math.max(0,-(-Y*W+X)),U=G>0?-W:Math.min(Math.max(-W,-H),W),F=-G*G+U*(U+2*H)+K;else if(U<=O)G=0,U=Math.min(Math.max(-W,-H),W),F=U*(U+2*H)+K;else G=Math.max(0,-(Y*W+X)),U=G>0?W:Math.min(Math.max(-W,-H),W),F=-G*G+U*(U+2*H)+K;else U=Y>0?-W:W,G=Math.max(0,-(Y*U+X)),F=-G*G+U*(U+2*H)+K;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(BJ).addScaledVector(O9,U);return F}intersectSphere(J,Q){q7.subVectors(J.center,this.origin);let $=q7.dot(this.direction),Z=q7.dot(q7)-$*$,W=J.radius*J.radius;if(Z>W)return null;let Y=Math.sqrt(W-Z),X=$-Y,H=$+Y;if(H<0)return null;if(X<0)return this.at(H,Q);return this.at(X,Q)}intersectsSphere(J){return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,Y,X,H,K=1/this.direction.x,q=1/this.direction.y,G=1/this.direction.z,U=this.origin;if(K>=0)$=(J.min.x-U.x)*K,Z=(J.max.x-U.x)*K;else $=(J.max.x-U.x)*K,Z=(J.min.x-U.x)*K;if(q>=0)W=(J.min.y-U.y)*q,Y=(J.max.y-U.y)*q;else W=(J.max.y-U.y)*q,Y=(J.min.y-U.y)*q;if($>Y||W>Z)return null;if(W>$||isNaN($))$=W;if(Y<Z||isNaN(Z))Z=Y;if(G>=0)X=(J.min.z-U.z)*G,H=(J.max.z-U.z)*G;else X=(J.max.z-U.z)*G,H=(J.min.z-U.z)*G;if($>H||X>Z)return null;if(X>$||$!==$)$=X;if(H<Z||Z!==Z)Z=H;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,q7)!==null}intersectTriangle(J,Q,$,Z,W){MJ.subVectors(Q,J),N9.subVectors($,J),kJ.crossVectors(MJ,N9);let Y=this.direction.dot(kJ),X;if(Y>0){if(Z)return null;X=1}else if(Y<0)X=-1,Y=-Y;else return null;w7.subVectors(this.origin,J);let H=X*this.direction.dot(N9.crossVectors(w7,N9));if(H<0)return null;let K=X*this.direction.dot(MJ.cross(w7));if(K<0)return null;if(H+K>Y)return null;let q=-X*w7.dot(kJ);if(q<0)return null;return this.at(q/Y,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class j0{constructor(J,Q,$,Z,W,Y,X,H,K,q,G,U,F,O,N,R){if(j0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,Y,X,H,K,q,G,U,F,O,N,R)}set(J,Q,$,Z,W,Y,X,H,K,q,G,U,F,O,N,R){let V=this.elements;return V[0]=J,V[4]=Q,V[8]=$,V[12]=Z,V[1]=W,V[5]=Y,V[9]=X,V[13]=H,V[2]=K,V[6]=q,V[10]=G,V[14]=U,V[3]=F,V[7]=O,V[11]=N,V[15]=R,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new j0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,$=J.elements,Z=1/V8.setFromMatrixColumn(J,0).length(),W=1/V8.setFromMatrixColumn(J,1).length(),Y=1/V8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*Y,Q[9]=$[9]*Y,Q[10]=$[10]*Y,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,Y=Math.cos($),X=Math.sin($),H=Math.cos(Z),K=Math.sin(Z),q=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let U=Y*q,F=Y*G,O=X*q,N=X*G;Q[0]=H*q,Q[4]=-H*G,Q[8]=K,Q[1]=F+O*K,Q[5]=U-N*K,Q[9]=-X*H,Q[2]=N-U*K,Q[6]=O+F*K,Q[10]=Y*H}else if(J.order==="YXZ"){let U=H*q,F=H*G,O=K*q,N=K*G;Q[0]=U+N*X,Q[4]=O*X-F,Q[8]=Y*K,Q[1]=Y*G,Q[5]=Y*q,Q[9]=-X,Q[2]=F*X-O,Q[6]=N+U*X,Q[10]=Y*H}else if(J.order==="ZXY"){let U=H*q,F=H*G,O=K*q,N=K*G;Q[0]=U-N*X,Q[4]=-Y*G,Q[8]=O+F*X,Q[1]=F+O*X,Q[5]=Y*q,Q[9]=N-U*X,Q[2]=-Y*K,Q[6]=X,Q[10]=Y*H}else if(J.order==="ZYX"){let U=Y*q,F=Y*G,O=X*q,N=X*G;Q[0]=H*q,Q[4]=O*K-F,Q[8]=U*K+N,Q[1]=H*G,Q[5]=N*K+U,Q[9]=F*K-O,Q[2]=-K,Q[6]=X*H,Q[10]=Y*H}else if(J.order==="YZX"){let U=Y*H,F=Y*K,O=X*H,N=X*K;Q[0]=H*q,Q[4]=N-U*G,Q[8]=O*G+F,Q[1]=G,Q[5]=Y*q,Q[9]=-X*q,Q[2]=-K*q,Q[6]=F*G+O,Q[10]=U-N*G}else if(J.order==="XZY"){let U=Y*H,F=Y*K,O=X*H,N=X*K;Q[0]=H*q,Q[4]=-G,Q[8]=K*q,Q[1]=U*G+N,Q[5]=Y*q,Q[9]=F*G-O,Q[2]=O*G-F,Q[6]=X*q,Q[10]=N*G+U}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(SW,J,jW)}lookAt(J,Q,$){let Z=this.elements;if(v6.subVectors(J,Q),v6.lengthSq()===0)v6.z=1;if(v6.normalize(),I7.crossVectors($,v6),I7.lengthSq()===0){if(Math.abs($.z)===1)v6.x+=0.0001;else v6.z+=0.0001;v6.normalize(),I7.crossVectors($,v6)}return I7.normalize(),R9.crossVectors(v6,I7),Z[0]=I7.x,Z[4]=R9.x,Z[8]=v6.x,Z[1]=I7.y,Z[5]=R9.y,Z[9]=v6.y,Z[2]=I7.z,Z[6]=R9.z,Z[10]=v6.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,Y=$[0],X=$[4],H=$[8],K=$[12],q=$[1],G=$[5],U=$[9],F=$[13],O=$[2],N=$[6],R=$[10],V=$[14],E=$[3],M=$[7],C=$[11],I=$[15],y=Z[0],L=Z[4],S=Z[8],b=Z[12],D=Z[1],k=Z[5],j=Z[9],u=Z[13],n=Z[2],d=Z[6],s=Z[10],l=Z[14],e=Z[3],m=Z[7],q0=Z[11],F0=Z[15];return W[0]=Y*y+X*D+H*n+K*e,W[4]=Y*L+X*k+H*d+K*m,W[8]=Y*S+X*j+H*s+K*q0,W[12]=Y*b+X*u+H*l+K*F0,W[1]=q*y+G*D+U*n+F*e,W[5]=q*L+G*k+U*d+F*m,W[9]=q*S+G*j+U*s+F*q0,W[13]=q*b+G*u+U*l+F*F0,W[2]=O*y+N*D+R*n+V*e,W[6]=O*L+N*k+R*d+V*m,W[10]=O*S+N*j+R*s+V*q0,W[14]=O*b+N*u+R*l+V*F0,W[3]=E*y+M*D+C*n+I*e,W[7]=E*L+M*k+C*d+I*m,W[11]=E*S+M*j+C*s+I*q0,W[15]=E*b+M*u+C*l+I*F0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],Y=J[1],X=J[5],H=J[9],K=J[13],q=J[2],G=J[6],U=J[10],F=J[14],O=J[3],N=J[7],R=J[11],V=J[15];return O*(+W*H*G-Z*K*G-W*X*U+$*K*U+Z*X*F-$*H*F)+N*(+Q*H*F-Q*K*U+W*Y*U-Z*Y*F+Z*K*q-W*H*q)+R*(+Q*K*G-Q*X*F-W*Y*G+$*Y*F+W*X*q-$*K*q)+V*(-Z*X*q-Q*H*G+Q*X*U+Z*Y*G-$*Y*U+$*H*q)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],Y=J[4],X=J[5],H=J[6],K=J[7],q=J[8],G=J[9],U=J[10],F=J[11],O=J[12],N=J[13],R=J[14],V=J[15],E=G*R*K-N*U*K+N*H*F-X*R*F-G*H*V+X*U*V,M=O*U*K-q*R*K-O*H*F+Y*R*F+q*H*V-Y*U*V,C=q*N*K-O*G*K+O*X*F-Y*N*F-q*X*V+Y*G*V,I=O*G*H-q*N*H-O*X*U+Y*N*U+q*X*R-Y*G*R,y=Q*E+$*M+Z*C+W*I;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/y;return J[0]=E*L,J[1]=(N*U*W-G*R*W-N*Z*F+$*R*F+G*Z*V-$*U*V)*L,J[2]=(X*R*W-N*H*W+N*Z*K-$*R*K-X*Z*V+$*H*V)*L,J[3]=(G*H*W-X*U*W-G*Z*K+$*U*K+X*Z*F-$*H*F)*L,J[4]=M*L,J[5]=(q*R*W-O*U*W+O*Z*F-Q*R*F-q*Z*V+Q*U*V)*L,J[6]=(O*H*W-Y*R*W-O*Z*K+Q*R*K+Y*Z*V-Q*H*V)*L,J[7]=(Y*U*W-q*H*W+q*Z*K-Q*U*K-Y*Z*F+Q*H*F)*L,J[8]=C*L,J[9]=(O*G*W-q*N*W-O*$*F+Q*N*F+q*$*V-Q*G*V)*L,J[10]=(Y*N*W-O*X*W+O*$*K-Q*N*K-Y*$*V+Q*X*V)*L,J[11]=(q*X*W-Y*G*W-q*$*K+Q*G*K+Y*$*F-Q*X*F)*L,J[12]=I*L,J[13]=(q*N*Z-O*G*Z+O*$*U-Q*N*U-q*$*R+Q*G*R)*L,J[14]=(O*X*Z-Y*N*Z-O*$*H+Q*N*H+Y*$*R-Q*X*R)*L,J[15]=(Y*G*Z-q*X*Z+q*$*H-Q*G*H-Y*$*U+Q*X*U)*L,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,Y=J.x,X=J.y,H=J.z,K=W*Y,q=W*X;return this.set(K*Y+$,K*X-Z*H,K*H+Z*X,0,K*X+Z*H,q*X+$,q*H-Z*Y,0,K*H-Z*X,q*H+Z*Y,W*H*H+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,Y){return this.set(1,$,W,0,J,1,Y,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,Y=Q._y,X=Q._z,H=Q._w,K=W+W,q=Y+Y,G=X+X,U=W*K,F=W*q,O=W*G,N=Y*q,R=Y*G,V=X*G,E=H*K,M=H*q,C=H*G,I=$.x,y=$.y,L=$.z;return Z[0]=(1-(N+V))*I,Z[1]=(F+C)*I,Z[2]=(O-M)*I,Z[3]=0,Z[4]=(F-C)*y,Z[5]=(1-(U+V))*y,Z[6]=(R+E)*y,Z[7]=0,Z[8]=(O+M)*L,Z[9]=(R-E)*L,Z[10]=(1-(U+N))*L,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements,W=V8.set(Z[0],Z[1],Z[2]).length(),Y=V8.set(Z[4],Z[5],Z[6]).length(),X=V8.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;J.x=Z[12],J.y=Z[13],J.z=Z[14],i6.copy(this);let K=1/W,q=1/Y,G=1/X;return i6.elements[0]*=K,i6.elements[1]*=K,i6.elements[2]*=K,i6.elements[4]*=q,i6.elements[5]*=q,i6.elements[6]*=q,i6.elements[8]*=G,i6.elements[9]*=G,i6.elements[10]*=G,Q.setFromRotationMatrix(i6),$.x=W,$.y=Y,$.z=X,this}makePerspective(J,Q,$,Z,W,Y,X=2000){let H=this.elements,K=2*W/(Q-J),q=2*W/($-Z),G=(Q+J)/(Q-J),U=($+Z)/($-Z),F,O;if(X===2000)F=-(Y+W)/(Y-W),O=-2*Y*W/(Y-W);else if(X===2001)F=-Y/(Y-W),O=-Y*W/(Y-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=K,H[4]=0,H[8]=G,H[12]=0,H[1]=0,H[5]=q,H[9]=U,H[13]=0,H[2]=0,H[6]=0,H[10]=F,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,Z,W,Y,X=2000){let H=this.elements,K=1/(Q-J),q=1/($-Z),G=1/(Y-W),U=(Q+J)*K,F=($+Z)*q,O,N;if(X===2000)O=(Y+W)*G,N=-2*G;else if(X===2001)O=W*G,N=-1*G;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=2*K,H[4]=0,H[8]=0,H[12]=-U,H[1]=0,H[5]=2*q,H[9]=0,H[13]=-F,H[2]=0,H[6]=0,H[10]=N,H[14]=-O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var V8=new A,i6=new j0,SW=new A(0,0,0),jW=new A(1,1,1),I7=new A,R9=new A,v6=new A,ZQ=new j0,WQ=new x6;class e6{constructor(J=0,Q=0,$=0,Z=e6.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],Y=Z[4],X=Z[8],H=Z[1],K=Z[5],q=Z[9],G=Z[2],U=Z[6],F=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(L6(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-q,F),this._z=Math.atan2(-Y,W);else this._x=Math.atan2(U,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-L6(q,-1,1)),Math.abs(q)<0.9999999)this._y=Math.atan2(X,F),this._z=Math.atan2(H,K);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(L6(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-G,F),this._z=Math.atan2(-Y,K);else this._y=0,this._z=Math.atan2(H,W);break;case"ZYX":if(this._y=Math.asin(-L6(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(U,F),this._z=Math.atan2(H,W);else this._x=0,this._z=Math.atan2(-Y,K);break;case"YZX":if(this._z=Math.asin(L6(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-q,K),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(X,F);break;case"XZY":if(this._z=Math.asin(-L6(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(U,K),this._y=Math.atan2(X,W);else this._x=Math.atan2(-q,F),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return ZQ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(ZQ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return WQ.setFromEuler(this),this.setFromQuaternion(WQ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}e6.DEFAULT_ORDER="XYZ";class i9{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var yW=0,YQ=new A,E8=new x6,G7=new j0,z9=new A,l8=new A,vW=new A,fW=new x6,XQ=new A(1,0,0),HQ=new A(0,1,0),KQ=new A(0,0,1),qQ={type:"added"},xW={type:"removed"},O8={type:"childadded",child:null},LJ={type:"childremoved",child:null};class J6 extends O7{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:yW++}),this.uuid=t6(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=J6.DEFAULT_UP.clone();let J=new A,Q=new e6,$=new x6,Z=new A(1,1,1);function W(){$.setFromEuler(Q,!1)}function Y(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(Y),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new j0},normalMatrix:{value:new f0}}),this.matrix=new j0,this.matrixWorld=new j0,this.matrixAutoUpdate=J6.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=J6.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i9,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return E8.setFromAxisAngle(J,Q),this.quaternion.multiply(E8),this}rotateOnWorldAxis(J,Q){return E8.setFromAxisAngle(J,Q),this.quaternion.premultiply(E8),this}rotateX(J){return this.rotateOnAxis(XQ,J)}rotateY(J){return this.rotateOnAxis(HQ,J)}rotateZ(J){return this.rotateOnAxis(KQ,J)}translateOnAxis(J,Q){return YQ.copy(J).applyQuaternion(this.quaternion),this.position.add(YQ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(XQ,J)}translateY(J){return this.translateOnAxis(HQ,J)}translateZ(J){return this.translateOnAxis(KQ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(G7.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)z9.copy(J);else z9.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),l8.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)G7.lookAt(l8,z9,this.up);else G7.lookAt(z9,l8,this.up);if(this.quaternion.setFromRotationMatrix(G7),Z)G7.extractRotation(Z.matrixWorld),E8.setFromRotationMatrix(G7),this.quaternion.premultiply(E8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(qQ),O8.child=J,this.dispatchEvent(O8),O8.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(xW),LJ.child=J,this.dispatchEvent(LJ),LJ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),G7.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),G7.multiply(J.parent.matrixWorld);return J.applyMatrix4(G7),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(qQ),O8.child=J,this.dispatchEvent(O8),O8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let Y=this.children[$].getObjectByProperty(J,Q);if(Y!==void 0)return Y}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,Y=Z.length;W<Y;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(l8,J,vW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(l8,fW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let W=0,Y=Z.length;W<Y;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.visibility=this._visibility,Z.active=this._active,Z.bounds=this._bounds.map((X)=>({boxInitialized:X.boxInitialized,boxMin:X.box.min.toArray(),boxMax:X.box.max.toArray(),sphereInitialized:X.sphereInitialized,sphereRadius:X.sphere.radius,sphereCenter:X.sphere.center.toArray()})),Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.geometryCount=this._geometryCount,Z.matricesTexture=this._matricesTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere={center:Z.boundingSphere.center.toArray(),radius:Z.boundingSphere.radius};if(this.boundingBox!==null)Z.boundingBox={min:Z.boundingBox.min.toArray(),max:Z.boundingBox.max.toArray()}}function W(X,H){if(X[H.uuid]===void 0)X[H.uuid]=H.toJSON(J);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let H=X.shapes;if(Array.isArray(H))for(let K=0,q=H.length;K<q;K++){let G=H[K];W(J.shapes,G)}else W(J.shapes,H)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let H=0,K=this.material.length;H<K;H++)X.push(W(J.materials,this.material[H]));Z.material=X}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let H=this.animations[X];Z.animations.push(W(J.animations,H))}}if(Q){let X=Y(J.geometries),H=Y(J.materials),K=Y(J.textures),q=Y(J.images),G=Y(J.shapes),U=Y(J.skeletons),F=Y(J.animations),O=Y(J.nodes);if(X.length>0)$.geometries=X;if(H.length>0)$.materials=H;if(K.length>0)$.textures=K;if(q.length>0)$.images=q;if(G.length>0)$.shapes=G;if(U.length>0)$.skeletons=U;if(F.length>0)$.animations=F;if(O.length>0)$.nodes=O}return $.object=Z,$;function Y(X){let H=[];for(let K in X){let q=X[K];delete q.metadata,H.push(q)}return H}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}J6.DEFAULT_UP=new A(0,1,0);J6.DEFAULT_MATRIX_AUTO_UPDATE=!0;J6.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var o6=new A,U7=new A,DJ=new A,F7=new A,N8=new A,R8=new A,GQ=new A,CJ=new A,_J=new A,wJ=new A;class r6{constructor(J=new A,Q=new A,$=new A){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),o6.subVectors(J,Q),Z.cross(o6);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){o6.subVectors(Z,Q),U7.subVectors($,Q),DJ.subVectors(J,Q);let Y=o6.dot(o6),X=o6.dot(U7),H=o6.dot(DJ),K=U7.dot(U7),q=U7.dot(DJ),G=Y*K-X*X;if(G===0)return W.set(0,0,0),null;let U=1/G,F=(K*H-X*q)*U,O=(Y*q-X*H)*U;return W.set(1-F-O,O,F)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,F7)===null)return!1;return F7.x>=0&&F7.y>=0&&F7.x+F7.y<=1}static getInterpolation(J,Q,$,Z,W,Y,X,H){if(this.getBarycoord(J,Q,$,Z,F7)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(W,F7.x),H.addScaledVector(Y,F7.y),H.addScaledVector(X,F7.z),H}static isFrontFacing(J,Q,$,Z){return o6.subVectors($,Q),U7.subVectors(J,Q),o6.cross(U7).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return o6.subVectors(this.c,this.b),U7.subVectors(this.a,this.b),o6.cross(U7).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return r6.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return r6.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return r6.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return r6.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return r6.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,Y,X;N8.subVectors(Z,$),R8.subVectors(W,$),CJ.subVectors(J,$);let H=N8.dot(CJ),K=R8.dot(CJ);if(H<=0&&K<=0)return Q.copy($);_J.subVectors(J,Z);let q=N8.dot(_J),G=R8.dot(_J);if(q>=0&&G<=q)return Q.copy(Z);let U=H*G-q*K;if(U<=0&&H>=0&&q<=0)return Y=H/(H-q),Q.copy($).addScaledVector(N8,Y);wJ.subVectors(J,W);let F=N8.dot(wJ),O=R8.dot(wJ);if(O>=0&&F<=O)return Q.copy(W);let N=F*K-H*O;if(N<=0&&K>=0&&O<=0)return X=K/(K-O),Q.copy($).addScaledVector(R8,X);let R=q*O-F*G;if(R<=0&&G-q>=0&&F-O>=0)return GQ.subVectors(W,Z),X=(G-q)/(G-q+(F-O)),Q.copy(Z).addScaledVector(GQ,X);let V=1/(R+N+U);return Y=N*V,X=U*V,Q.copy($).addScaledVector(N8,Y).addScaledVector(R8,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var L$={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},P7={h:0,s:0,l:0},B9={h:0,s:0,l:0};function IJ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class z0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,c0.toWorkingColorSpace(this,Q),this}setRGB(J,Q,$,Z=c0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,c0.toWorkingColorSpace(this,Z),this}setHSL(J,Q,$,Z=c0.workingColorSpace){if(J=aJ(J,1),Q=L6(Q,0,1),$=L6($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,Y=2*$-W;this.r=IJ(Y,W,J+0.3333333333333333),this.g=IJ(Y,W,J),this.b=IJ(Y,W,J-0.3333333333333333)}return c0.toWorkingColorSpace(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,Y=Z[1],X=Z[2];switch(Y){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],Y=W.length;if(Y===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(Y===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=L$[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=P8(J.r),this.g=P8(J.g),this.b=P8(J.b),this}copyLinearToSRGB(J){return this.r=EJ(J.r),this.g=EJ(J.g),this.b=EJ(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return c0.fromWorkingColorSpace(_6.copy(this),J),Math.round(L6(_6.r*255,0,255))*65536+Math.round(L6(_6.g*255,0,255))*256+Math.round(L6(_6.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=c0.workingColorSpace){c0.fromWorkingColorSpace(_6.copy(this),Q);let{r:$,g:Z,b:W}=_6,Y=Math.max($,Z,W),X=Math.min($,Z,W),H,K,q=(X+Y)/2;if(X===Y)H=0,K=0;else{let G=Y-X;switch(K=q<=0.5?G/(Y+X):G/(2-Y-X),Y){case $:H=(Z-W)/G+(Z<W?6:0);break;case Z:H=(W-$)/G+2;break;case W:H=($-Z)/G+4;break}H/=6}return J.h=H,J.s=K,J.l=q,J}getRGB(J,Q=c0.workingColorSpace){return c0.fromWorkingColorSpace(_6.copy(this),Q),J.r=_6.r,J.g=_6.g,J.b=_6.b,J}getStyle(J="srgb"){c0.fromWorkingColorSpace(_6.copy(this),J);let{r:Q,g:$,b:Z}=_6;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(P7),this.setHSL(P7.h+J,P7.s+Q,P7.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(P7),J.getHSL(B9);let $=a8(P7.h,B9.h,Q),Z=a8(P7.s,B9.s,Q),W=a8(P7.l,B9.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var _6=new z0;z0.NAMES=L$;var hW=0;class I6 extends O7{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:hW++}),this.uuid=t6(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new z0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let Y=[];for(let X in W){let H=W[X];delete H.metadata,Y.push(H)}return Y}if(Q){let W=Z(J.textures),Y=Z(J.images);if(W.length>0)$.textures=W;if(Y.length>0)$.images=Y}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class N7 extends I6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new z0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new e6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var F6=new A,M9=new M0;class H6{constructor(J,Q,$=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}get updateRange(){return rJ("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)M9.fromBufferAttribute(this,Q),M9.applyMatrix3(J),this.setXY(Q,M9.x,M9.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)F6.fromBufferAttribute(this,Q),F6.applyMatrix3(J),this.setXYZ(Q,F6.x,F6.y,F6.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)F6.fromBufferAttribute(this,Q),F6.applyMatrix4(J),this.setXYZ(Q,F6.x,F6.y,F6.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)F6.fromBufferAttribute(this,Q),F6.applyNormalMatrix(J),this.setXYZ(Q,F6.x,F6.y,F6.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)F6.fromBufferAttribute(this,Q),F6.transformDirection(J),this.setXYZ(Q,F6.x,F6.y,F6.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=a6($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=a0($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=a6(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=a6(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=a6(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=a6(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=a0(Q,this.array),$=a0($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=a0(Q,this.array),$=a0($,this.array),Z=a0(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=a0(Q,this.array),$=a0($,this.array),Z=a0(Z,this.array),W=a0(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class J5 extends H6{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class Q5 extends H6{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class $6 extends H6{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var bW=0,g6=new j0,PJ=new J6,z8=new A,f6=new h6,d8=new h6,z6=new A;class K6 extends O7{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bW++}),this.uuid=t6(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((z$(J))?Q5:J5)(J,1);else this.index=J;return this}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new f0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return g6.makeRotationFromQuaternion(J),this.applyMatrix4(g6),this}rotateX(J){return g6.makeRotationX(J),this.applyMatrix4(g6),this}rotateY(J){return g6.makeRotationY(J),this.applyMatrix4(g6),this}rotateZ(J){return g6.makeRotationZ(J),this.applyMatrix4(g6),this}translate(J,Q,$){return g6.makeTranslation(J,Q,$),this.applyMatrix4(g6),this}scale(J,Q,$){return g6.makeScale(J,Q,$),this.applyMatrix4(g6),this}lookAt(J){return PJ.lookAt(J),PJ.updateMatrix(),this.applyMatrix4(PJ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(z8).negate(),this.translate(z8.x,z8.y,z8.z),this}setFromPoints(J){let Q=[];for(let $=0,Z=J.length;$<Z;$++){let W=J[$];Q.push(W.x,W.y,W.z||0)}return this.setAttribute("position",new $6(Q,3)),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new h6;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(f6.setFromBufferAttribute(W),this.morphTargetsRelative)z6.addVectors(this.boundingBox.min,f6.min),this.boundingBox.expandByPoint(z6),z6.addVectors(this.boundingBox.max,f6.max),this.boundingBox.expandByPoint(z6);else this.boundingBox.expandByPoint(f6.min),this.boundingBox.expandByPoint(f6.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new p6;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(J){let $=this.boundingSphere.center;if(f6.setFromBufferAttribute(J),Q)for(let W=0,Y=Q.length;W<Y;W++){let X=Q[W];if(d8.setFromBufferAttribute(X),this.morphTargetsRelative)z6.addVectors(f6.min,d8.min),f6.expandByPoint(z6),z6.addVectors(f6.max,d8.max),f6.expandByPoint(z6);else f6.expandByPoint(d8.min),f6.expandByPoint(d8.max)}f6.getCenter($);let Z=0;for(let W=0,Y=J.count;W<Y;W++)z6.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(z6));if(Q)for(let W=0,Y=Q.length;W<Y;W++){let X=Q[W],H=this.morphTargetsRelative;for(let K=0,q=X.count;K<q;K++){if(z6.fromBufferAttribute(X,K),H)z8.fromBufferAttribute(J,K),z6.add(z8);Z=Math.max(Z,$.distanceToSquared(z6))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new H6(new Float32Array(4*$.count),4));let Y=this.getAttribute("tangent"),X=[],H=[];for(let S=0;S<$.count;S++)X[S]=new A,H[S]=new A;let K=new A,q=new A,G=new A,U=new M0,F=new M0,O=new M0,N=new A,R=new A;function V(S,b,D){K.fromBufferAttribute($,S),q.fromBufferAttribute($,b),G.fromBufferAttribute($,D),U.fromBufferAttribute(W,S),F.fromBufferAttribute(W,b),O.fromBufferAttribute(W,D),q.sub(K),G.sub(K),F.sub(U),O.sub(U);let k=1/(F.x*O.y-O.x*F.y);if(!isFinite(k))return;N.copy(q).multiplyScalar(O.y).addScaledVector(G,-F.y).multiplyScalar(k),R.copy(G).multiplyScalar(F.x).addScaledVector(q,-O.x).multiplyScalar(k),X[S].add(N),X[b].add(N),X[D].add(N),H[S].add(R),H[b].add(R),H[D].add(R)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let S=0,b=E.length;S<b;++S){let D=E[S],k=D.start,j=D.count;for(let u=k,n=k+j;u<n;u+=3)V(J.getX(u+0),J.getX(u+1),J.getX(u+2))}let M=new A,C=new A,I=new A,y=new A;function L(S){I.fromBufferAttribute(Z,S),y.copy(I);let b=X[S];M.copy(b),M.sub(I.multiplyScalar(I.dot(b))).normalize(),C.crossVectors(y,b);let k=C.dot(H[S])<0?-1:1;Y.setXYZW(S,M.x,M.y,M.z,k)}for(let S=0,b=E.length;S<b;++S){let D=E[S],k=D.start,j=D.count;for(let u=k,n=k+j;u<n;u+=3)L(J.getX(u+0)),L(J.getX(u+1)),L(J.getX(u+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new H6(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let U=0,F=$.count;U<F;U++)$.setXYZ(U,0,0,0);let Z=new A,W=new A,Y=new A,X=new A,H=new A,K=new A,q=new A,G=new A;if(J)for(let U=0,F=J.count;U<F;U+=3){let O=J.getX(U+0),N=J.getX(U+1),R=J.getX(U+2);Z.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,N),Y.fromBufferAttribute(Q,R),q.subVectors(Y,W),G.subVectors(Z,W),q.cross(G),X.fromBufferAttribute($,O),H.fromBufferAttribute($,N),K.fromBufferAttribute($,R),X.add(q),H.add(q),K.add(q),$.setXYZ(O,X.x,X.y,X.z),$.setXYZ(N,H.x,H.y,H.z),$.setXYZ(R,K.x,K.y,K.z)}else for(let U=0,F=Q.count;U<F;U+=3)Z.fromBufferAttribute(Q,U+0),W.fromBufferAttribute(Q,U+1),Y.fromBufferAttribute(Q,U+2),q.subVectors(Y,W),G.subVectors(Z,W),q.cross(G),$.setXYZ(U+0,q.x,q.y,q.z),$.setXYZ(U+1,q.x,q.y,q.z),$.setXYZ(U+2,q.x,q.y,q.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)z6.fromBufferAttribute(J,Q),z6.normalize(),J.setXYZ(Q,z6.x,z6.y,z6.z)}toNonIndexed(){function J(X,H){let{array:K,itemSize:q,normalized:G}=X,U=new K.constructor(H.length*q),F=0,O=0;for(let N=0,R=H.length;N<R;N++){if(X.isInterleavedBufferAttribute)F=H[N]*X.data.stride+X.offset;else F=H[N]*q;for(let V=0;V<q;V++)U[O++]=K[F++]}return new H6(U,q,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new K6,$=this.index.array,Z=this.attributes;for(let X in Z){let H=Z[X],K=J(H,$);Q.setAttribute(X,K)}let W=this.morphAttributes;for(let X in W){let H=[],K=W[X];for(let q=0,G=K.length;q<G;q++){let U=K[q],F=J(U,$);H.push(F)}Q.morphAttributes[X]=H}Q.morphTargetsRelative=this.morphTargetsRelative;let Y=this.groups;for(let X=0,H=Y.length;X<H;X++){let K=Y[X];Q.addGroup(K.start,K.count,K.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let H=this.parameters;for(let K in H)if(H[K]!==void 0)J[K]=H[K];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let H in $){let K=$[H];J.data.attributes[H]=K.toJSON(J.data)}let Z={},W=!1;for(let H in this.morphAttributes){let K=this.morphAttributes[H],q=[];for(let G=0,U=K.length;G<U;G++){let F=K[G];q.push(F.toJSON(J.data))}if(q.length>0)Z[H]=q,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let Y=this.groups;if(Y.length>0)J.data.groups=JSON.parse(JSON.stringify(Y));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere={center:X.center.toArray(),radius:X.radius};return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone(Q));let Z=J.attributes;for(let K in Z){let q=Z[K];this.setAttribute(K,q.clone(Q))}let W=J.morphAttributes;for(let K in W){let q=[],G=W[K];for(let U=0,F=G.length;U<F;U++)q.push(G[U].clone(Q));this.morphAttributes[K]=q}this.morphTargetsRelative=J.morphTargetsRelative;let Y=J.groups;for(let K=0,q=Y.length;K<q;K++){let G=Y[K];this.addGroup(G.start,G.count,G.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let H=J.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var UQ=new j0,l7=new f7,k9=new p6,FQ=new A,B8=new A,M8=new A,k8=new A,AJ=new A,L9=new A,D9=new M0,C9=new M0,_9=new M0,VQ=new A,EQ=new A,OQ=new A,w9=new A,I9=new A;class V6 extends J6{constructor(J=new K6,Q=new N7){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Y=Z.length;W<Y;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,Y=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(W&&X){L9.set(0,0,0);for(let H=0,K=W.length;H<K;H++){let q=X[H],G=W[H];if(q===0)continue;if(AJ.fromBufferAttribute(G,J),Y)L9.addScaledVector(AJ,q);else L9.addScaledVector(AJ.sub(Q),q)}Q.add(L9)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(k9.copy($.boundingSphere),k9.applyMatrix4(W),l7.copy(J.ray).recast(J.near),k9.containsPoint(l7.origin)===!1){if(l7.intersectSphere(k9,FQ)===null)return;if(l7.origin.distanceToSquared(FQ)>(J.far-J.near)**2)return}if(UQ.copy(W).invert(),l7.copy(J.ray).applyMatrix4(UQ),$.boundingBox!==null){if(l7.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,l7)}_computeIntersections(J,Q,$){let Z,W=this.geometry,Y=this.material,X=W.index,H=W.attributes.position,K=W.attributes.uv,q=W.attributes.uv1,G=W.attributes.normal,U=W.groups,F=W.drawRange;if(X!==null)if(Array.isArray(Y))for(let O=0,N=U.length;O<N;O++){let R=U[O],V=Y[R.materialIndex],E=Math.max(R.start,F.start),M=Math.min(X.count,Math.min(R.start+R.count,F.start+F.count));for(let C=E,I=M;C<I;C+=3){let y=X.getX(C),L=X.getX(C+1),S=X.getX(C+2);if(Z=P9(this,V,J,$,K,q,G,y,L,S),Z)Z.faceIndex=Math.floor(C/3),Z.face.materialIndex=R.materialIndex,Q.push(Z)}}else{let O=Math.max(0,F.start),N=Math.min(X.count,F.start+F.count);for(let R=O,V=N;R<V;R+=3){let E=X.getX(R),M=X.getX(R+1),C=X.getX(R+2);if(Z=P9(this,Y,J,$,K,q,G,E,M,C),Z)Z.faceIndex=Math.floor(R/3),Q.push(Z)}}else if(H!==void 0)if(Array.isArray(Y))for(let O=0,N=U.length;O<N;O++){let R=U[O],V=Y[R.materialIndex],E=Math.max(R.start,F.start),M=Math.min(H.count,Math.min(R.start+R.count,F.start+F.count));for(let C=E,I=M;C<I;C+=3){let y=C,L=C+1,S=C+2;if(Z=P9(this,V,J,$,K,q,G,y,L,S),Z)Z.faceIndex=Math.floor(C/3),Z.face.materialIndex=R.materialIndex,Q.push(Z)}}else{let O=Math.max(0,F.start),N=Math.min(H.count,F.start+F.count);for(let R=O,V=N;R<V;R+=3){let E=R,M=R+1,C=R+2;if(Z=P9(this,Y,J,$,K,q,G,E,M,C),Z)Z.faceIndex=Math.floor(R/3),Q.push(Z)}}}}function gW(J,Q,$,Z,W,Y,X,H){let K;if(Q.side===1)K=Z.intersectTriangle(X,Y,W,!0,H);else K=Z.intersectTriangle(W,Y,X,Q.side===0,H);if(K===null)return null;I9.copy(H),I9.applyMatrix4(J.matrixWorld);let q=$.ray.origin.distanceTo(I9);if(q<$.near||q>$.far)return null;return{distance:q,point:I9.clone(),object:J}}function P9(J,Q,$,Z,W,Y,X,H,K,q){J.getVertexPosition(H,B8),J.getVertexPosition(K,M8),J.getVertexPosition(q,k8);let G=gW(J,Q,$,Z,B8,M8,k8,w9);if(G){if(W)D9.fromBufferAttribute(W,H),C9.fromBufferAttribute(W,K),_9.fromBufferAttribute(W,q),G.uv=r6.getInterpolation(w9,B8,M8,k8,D9,C9,_9,new M0);if(Y)D9.fromBufferAttribute(Y,H),C9.fromBufferAttribute(Y,K),_9.fromBufferAttribute(Y,q),G.uv1=r6.getInterpolation(w9,B8,M8,k8,D9,C9,_9,new M0);if(X){if(VQ.fromBufferAttribute(X,H),EQ.fromBufferAttribute(X,K),OQ.fromBufferAttribute(X,q),G.normal=r6.getInterpolation(w9,B8,M8,k8,VQ,EQ,OQ,new A),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let U={a:H,b:K,c:q,normal:new A,materialIndex:0};r6.getNormal(B8,M8,k8,U.normal),G.face=U}return G}class J9 extends K6{constructor(J=1,Q=1,$=1,Z=1,W=1,Y=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:Y};let X=this;Z=Math.floor(Z),W=Math.floor(W),Y=Math.floor(Y);let H=[],K=[],q=[],G=[],U=0,F=0;O("z","y","x",-1,-1,$,Q,J,Y,W,0),O("z","y","x",1,-1,$,Q,-J,Y,W,1),O("x","z","y",1,1,J,$,Q,Z,Y,2),O("x","z","y",1,-1,J,$,-Q,Z,Y,3),O("x","y","z",1,-1,J,Q,$,Z,W,4),O("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(H),this.setAttribute("position",new $6(K,3)),this.setAttribute("normal",new $6(q,3)),this.setAttribute("uv",new $6(G,2));function O(N,R,V,E,M,C,I,y,L,S,b){let D=C/L,k=I/S,j=C/2,u=I/2,n=y/2,d=L+1,s=S+1,l=0,e=0,m=new A;for(let q0=0;q0<s;q0++){let F0=q0*k-u;for(let C0=0;C0<d;C0++){let x0=C0*D-j;m[N]=x0*E,m[R]=F0*M,m[V]=n,K.push(m.x,m.y,m.z),m[N]=0,m[R]=0,m[V]=y>0?1:-1,q.push(m.x,m.y,m.z),G.push(C0/L),G.push(1-q0/S),l+=1}}for(let q0=0;q0<S;q0++)for(let F0=0;F0<L;F0++){let C0=U+F0+d*q0,x0=U+F0+d*(q0+1),i=U+(F0+1)+d*(q0+1),Z0=U+(F0+1)+d*q0;H.push(C0,x0,Z0),H.push(x0,i,Z0),e+=6}X.addGroup(F,e,b),F+=e,U+=l}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new J9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function T8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function A6(J){let Q={};for(let $=0;$<J.length;$++){let Z=T8(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function pW(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function D$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return c0.workingColorSpace}var uW={clone:T8,merge:A6},mW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class E7 extends I6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mW,this.fragmentShader=lW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=T8(J.uniforms),this.uniformsGroups=pW(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let Y=this.uniforms[Z].value;if(Y&&Y.isTexture)Q.uniforms[Z]={type:"t",value:Y.toJSON(J).uuid};else if(Y&&Y.isColor)Q.uniforms[Z]={type:"c",value:Y.getHex()};else if(Y&&Y.isVector2)Q.uniforms[Z]={type:"v2",value:Y.toArray()};else if(Y&&Y.isVector3)Q.uniforms[Z]={type:"v3",value:Y.toArray()};else if(Y&&Y.isVector4)Q.uniforms[Z]={type:"v4",value:Y.toArray()};else if(Y&&Y.isMatrix3)Q.uniforms[Z]={type:"m3",value:Y.toArray()};else if(Y&&Y.isMatrix4)Q.uniforms[Z]={type:"m4",value:Y.toArray()};else Q.uniforms[Z]={value:Y}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class $5 extends J6{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new j0,this.projectionMatrix=new j0,this.projectionMatrixInverse=new j0,this.coordinateSystem=2000}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var A7=new A,NQ=new M0,RQ=new M0;class B6 extends $5{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=A8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(I8*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return A8*2*Math.atan(Math.tan(I8*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){A7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(A7.x,A7.y).multiplyScalar(-J/A7.z),A7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(A7.x,A7.y).multiplyScalar(-J/A7.z)}getViewSize(J,Q){return this.getViewBounds(J,NQ,RQ),Q.subVectors(RQ,NQ)}setViewOffset(J,Q,$,Z,W,Y){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=Y,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(I8*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,Y=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:K}=Y;W+=Y.offsetX*Z/H,Q-=Y.offsetY*$/K,Z*=Y.width/H,$*=Y.height/K}let X=this.filmOffset;if(X!==0)W+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var L8=-90,D8=1;class C$ extends J6{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new B6(L8,D8,J,Q);Z.layers=this.layers,this.add(Z);let W=new B6(L8,D8,J,Q);W.layers=this.layers,this.add(W);let Y=new B6(L8,D8,J,Q);Y.layers=this.layers,this.add(Y);let X=new B6(L8,D8,J,Q);X.layers=this.layers,this.add(X);let H=new B6(L8,D8,J,Q);H.layers=this.layers,this.add(H);let K=new B6(L8,D8,J,Q);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,Y,X,H]=Q;for(let K of Q)this.remove(K);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),Y.up.set(0,0,1),Y.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),Y.up.set(0,0,-1),Y.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of Q)this.add(K),K.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,Y,X,H,K,q]=this.children,G=J.getRenderTarget(),U=J.getActiveCubeFace(),F=J.getActiveMipmapLevel(),O=J.xr.enabled;J.xr.enabled=!1;let N=$.texture.generateMipmaps;$.texture.generateMipmaps=!1,J.setRenderTarget($,0,Z),J.render(Q,W),J.setRenderTarget($,1,Z),J.render(Q,Y),J.setRenderTarget($,2,Z),J.render(Q,X),J.setRenderTarget($,3,Z),J.render(Q,H),J.setRenderTarget($,4,Z),J.render(Q,K),$.texture.generateMipmaps=N,J.setRenderTarget($,5,Z),J.render(Q,q),J.setRenderTarget(G,U,F),J.xr.enabled=O,$.texture.needsPMREMUpdate=!0}}class Z5 extends E6{constructor(J,Q,$,Z,W,Y,X,H,K,q){J=J!==void 0?J:[],Q=Q!==void 0?Q:301;super(J,Q,$,Z,W,Y,X,H,K,q);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class _$ extends S7{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new Z5(Z,Q.mapping,Q.wrapS,Q.wrapT,Q.magFilter,Q.minFilter,Q.format,Q.type,Q.anisotropy,Q.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=Q.generateMipmaps!==void 0?Q.generateMipmaps:!1,this.texture.minFilter=Q.minFilter!==void 0?Q.minFilter:1006}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new J9(5,5,5),W=new E7({name:"CubemapFromEquirect",uniforms:T8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let Y=new V6(Z,W),X=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new C$(1,10,this).update(J,Y),Q.minFilter=X,Y.geometry.dispose(),Y.material.dispose(),this}clear(J,Q,$,Z){let W=J.getRenderTarget();for(let Y=0;Y<6;Y++)J.setRenderTarget(this,Y),J.clear(Q,$,Z);J.setRenderTarget(W)}}var TJ=new A,dW=new A,cW=new f0;class $7{constructor(J=new A(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=TJ.subVectors($,Q).cross(dW.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(TJ),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector($,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||cW.getNormalMatrix(J),Z=this.coplanarPoint(TJ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var d7=new p6,A9=new A;class o9{constructor(J=new $7,Q=new $7,$=new $7,Z=new $7,W=new $7,Y=new $7){this.planes=[J,Q,$,Z,W,Y]}set(J,Q,$,Z,W,Y){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(W),X[5].copy(Y),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000){let $=this.planes,Z=J.elements,W=Z[0],Y=Z[1],X=Z[2],H=Z[3],K=Z[4],q=Z[5],G=Z[6],U=Z[7],F=Z[8],O=Z[9],N=Z[10],R=Z[11],V=Z[12],E=Z[13],M=Z[14],C=Z[15];if($[0].setComponents(H-W,U-K,R-F,C-V).normalize(),$[1].setComponents(H+W,U+K,R+F,C+V).normalize(),$[2].setComponents(H+Y,U+q,R+O,C+E).normalize(),$[3].setComponents(H-Y,U-q,R-O,C-E).normalize(),$[4].setComponents(H-X,U-G,R-N,C-M).normalize(),Q===2000)$[5].setComponents(H+X,U+G,R+N,C+M).normalize();else if(Q===2001)$[5].setComponents(X,G,N,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();d7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();d7.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(d7)}intersectsSprite(J){return d7.center.set(0,0,0),d7.radius=0.7071067811865476,d7.applyMatrix4(J.matrixWorld),this.intersectsSphere(d7)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(A9.x=Z.normal.x>0?J.max.x:J.min.x,A9.y=Z.normal.y>0?J.max.y:J.min.y,A9.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(A9)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function w$(){let J=null,Q=!1,$=null,Z=null;function W(Y,X){$(Y,X),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(Y){$=Y},setContext:function(Y){J=Y}}}function nW(J){let Q=new WeakMap;function $(H,K){let{array:q,usage:G}=H,U=q.byteLength,F=J.createBuffer();J.bindBuffer(K,F),J.bufferData(K,q,G),H.onUploadCallback();let O;if(q instanceof Float32Array)O=J.FLOAT;else if(q instanceof Uint16Array)if(H.isFloat16BufferAttribute)O=J.HALF_FLOAT;else O=J.UNSIGNED_SHORT;else if(q instanceof Int16Array)O=J.SHORT;else if(q instanceof Uint32Array)O=J.UNSIGNED_INT;else if(q instanceof Int32Array)O=J.INT;else if(q instanceof Int8Array)O=J.BYTE;else if(q instanceof Uint8Array)O=J.UNSIGNED_BYTE;else if(q instanceof Uint8ClampedArray)O=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+q);return{buffer:F,type:O,bytesPerElement:q.BYTES_PER_ELEMENT,version:H.version,size:U}}function Z(H,K,q){let{array:G,_updateRange:U,updateRanges:F}=K;if(J.bindBuffer(q,H),U.count===-1&&F.length===0)J.bufferSubData(q,0,G);if(F.length!==0){for(let O=0,N=F.length;O<N;O++){let R=F[O];J.bufferSubData(q,R.start*G.BYTES_PER_ELEMENT,G,R.start,R.count)}K.clearUpdateRanges()}if(U.count!==-1)J.bufferSubData(q,U.offset*G.BYTES_PER_ELEMENT,G,U.offset,U.count),U.count=-1;K.onUploadCallback()}function W(H){if(H.isInterleavedBufferAttribute)H=H.data;return Q.get(H)}function Y(H){if(H.isInterleavedBufferAttribute)H=H.data;let K=Q.get(H);if(K)J.deleteBuffer(K.buffer),Q.delete(H)}function X(H,K){if(H.isGLBufferAttribute){let G=Q.get(H);if(!G||G.version<H.version)Q.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}if(H.isInterleavedBufferAttribute)H=H.data;let q=Q.get(H);if(q===void 0)Q.set(H,$(H,K));else if(q.version<H.version){if(q.size!==H.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(q.buffer,H,K),q.version=H.version}}return{get:W,remove:Y,update:X}}class a9 extends K6{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,Y=Q/2,X=Math.floor($),H=Math.floor(Z),K=X+1,q=H+1,G=J/X,U=Q/H,F=[],O=[],N=[],R=[];for(let V=0;V<q;V++){let E=V*U-Y;for(let M=0;M<K;M++){let C=M*G-W;O.push(C,-E,0),N.push(0,0,1),R.push(M/X),R.push(1-V/H)}}for(let V=0;V<H;V++)for(let E=0;E<X;E++){let M=E+K*V,C=E+K*(V+1),I=E+1+K*(V+1),y=E+1+K*V;F.push(M,C,y),F.push(C,I,y)}this.setIndex(F),this.setAttribute("position",new $6(O,3)),this.setAttribute("normal",new $6(N,3)),this.setAttribute("uv",new $6(R,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new a9(J.width,J.height,J.widthSegments,J.heightSegments)}}var sW=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iW=`#ifdef USE_ALPHAHASH
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
#endif`,oW=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aW=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rW=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tW=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eW=`#ifdef USE_AOMAP
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
#endif`,JY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QY=`#ifdef USE_BATCHING
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
#endif`,$Y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WY=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YY=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XY=`#ifdef USE_IRIDESCENCE
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
#endif`,HY=`#ifdef USE_BUMPMAP
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
#endif`,KY=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UY=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FY=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VY=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EY=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,OY=`#if defined( USE_COLOR_ALPHA )
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
#endif`,NY=`#define PI 3.141592653589793
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
} // validated`,RY=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zY=`vec3 transformedNormal = objectNormal;
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
#endif`,BY=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MY=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kY=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LY=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DY="gl_FragColor = linearToOutputTexel( gl_FragColor );",CY=`
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
}`,_Y=`#ifdef USE_ENVMAP
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
#endif`,wY=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IY=`#ifdef USE_ENVMAP
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
#endif`,PY=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AY=`#ifdef USE_ENVMAP
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
#endif`,TY=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SY=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jY=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yY=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vY=`#ifdef USE_GRADIENTMAP
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
}`,fY=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xY=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bY=`uniform bool receiveShadow;
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
#endif`,gY=`#ifdef USE_ENVMAP
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
#endif`,pY=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mY=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dY=`PhysicalMaterial material;
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
#endif`,cY=`struct PhysicalMaterial {
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
}`,nY=`
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
#endif`,sY=`#if defined( RE_IndirectDiffuse )
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
#endif`,iY=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oY=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aY=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rY=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tY=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JX=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QX=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$X=`#if defined( USE_POINTS_UV )
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
#endif`,ZX=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WX=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YX=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XX=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HX=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KX=`#ifdef USE_MORPHTARGETS
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
#endif`,qX=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GX=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UX=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FX=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VX=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EX=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OX=`#ifdef USE_NORMALMAP
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
#endif`,NX=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RX=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zX=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BX=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MX=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kX=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LX=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DX=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CX=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_X=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wX=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IX=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PX=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AX=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TX=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SX=`float getShadowMask() {
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
}`,jX=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yX=`#ifdef USE_SKINNING
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
#endif`,vX=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fX=`#ifdef USE_SKINNING
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
#endif`,xX=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hX=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bX=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gX=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pX=`#ifdef USE_TRANSMISSION
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
#endif`,uX=`#ifdef USE_TRANSMISSION
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
#endif`,mX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cX=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nX=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sX=`uniform sampler2D t2D;
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
}`,iX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oX=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rX=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tX=`#include <common>
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
}`,eX=`#if DEPTH_PACKING == 3200
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
}`,JH=`#define DISTANCE
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
}`,QH=`#define DISTANCE
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
}`,$H=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZH=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WH=`uniform float scale;
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
}`,YH=`uniform vec3 diffuse;
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
}`,XH=`#include <common>
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
}`,HH=`uniform vec3 diffuse;
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
}`,KH=`#define LAMBERT
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
}`,qH=`#define LAMBERT
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
}`,GH=`#define MATCAP
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
}`,UH=`#define MATCAP
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
}`,FH=`#define NORMAL
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
}`,VH=`#define NORMAL
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
}`,EH=`#define PHONG
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
}`,OH=`#define PHONG
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
}`,NH=`#define STANDARD
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
}`,RH=`#define STANDARD
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
}`,zH=`#define TOON
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
}`,BH=`#define TOON
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
}`,MH=`uniform float size;
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
}`,kH=`uniform vec3 diffuse;
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
}`,LH=`#include <common>
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
}`,DH=`uniform vec3 color;
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
}`,CH=`uniform float rotation;
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
}`,_H=`uniform vec3 diffuse;
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
}`,v0={alphahash_fragment:sW,alphahash_pars_fragment:iW,alphamap_fragment:oW,alphamap_pars_fragment:aW,alphatest_fragment:rW,alphatest_pars_fragment:tW,aomap_fragment:eW,aomap_pars_fragment:JY,batching_pars_vertex:QY,batching_vertex:$Y,begin_vertex:ZY,beginnormal_vertex:WY,bsdfs:YY,iridescence_fragment:XY,bumpmap_pars_fragment:HY,clipping_planes_fragment:KY,clipping_planes_pars_fragment:qY,clipping_planes_pars_vertex:GY,clipping_planes_vertex:UY,color_fragment:FY,color_pars_fragment:VY,color_pars_vertex:EY,color_vertex:OY,common:NY,cube_uv_reflection_fragment:RY,defaultnormal_vertex:zY,displacementmap_pars_vertex:BY,displacementmap_vertex:MY,emissivemap_fragment:kY,emissivemap_pars_fragment:LY,colorspace_fragment:DY,colorspace_pars_fragment:CY,envmap_fragment:_Y,envmap_common_pars_fragment:wY,envmap_pars_fragment:IY,envmap_pars_vertex:PY,envmap_physical_pars_fragment:gY,envmap_vertex:AY,fog_vertex:TY,fog_pars_vertex:SY,fog_fragment:jY,fog_pars_fragment:yY,gradientmap_pars_fragment:vY,lightmap_pars_fragment:fY,lights_lambert_fragment:xY,lights_lambert_pars_fragment:hY,lights_pars_begin:bY,lights_toon_fragment:pY,lights_toon_pars_fragment:uY,lights_phong_fragment:mY,lights_phong_pars_fragment:lY,lights_physical_fragment:dY,lights_physical_pars_fragment:cY,lights_fragment_begin:nY,lights_fragment_maps:sY,lights_fragment_end:iY,logdepthbuf_fragment:oY,logdepthbuf_pars_fragment:aY,logdepthbuf_pars_vertex:rY,logdepthbuf_vertex:tY,map_fragment:eY,map_pars_fragment:JX,map_particle_fragment:QX,map_particle_pars_fragment:$X,metalnessmap_fragment:ZX,metalnessmap_pars_fragment:WX,morphinstance_vertex:YX,morphcolor_vertex:XX,morphnormal_vertex:HX,morphtarget_pars_vertex:KX,morphtarget_vertex:qX,normal_fragment_begin:GX,normal_fragment_maps:UX,normal_pars_fragment:FX,normal_pars_vertex:VX,normal_vertex:EX,normalmap_pars_fragment:OX,clearcoat_normal_fragment_begin:NX,clearcoat_normal_fragment_maps:RX,clearcoat_pars_fragment:zX,iridescence_pars_fragment:BX,opaque_fragment:MX,packing:kX,premultiplied_alpha_fragment:LX,project_vertex:DX,dithering_fragment:CX,dithering_pars_fragment:_X,roughnessmap_fragment:wX,roughnessmap_pars_fragment:IX,shadowmap_pars_fragment:PX,shadowmap_pars_vertex:AX,shadowmap_vertex:TX,shadowmask_pars_fragment:SX,skinbase_vertex:jX,skinning_pars_vertex:yX,skinning_vertex:vX,skinnormal_vertex:fX,specularmap_fragment:xX,specularmap_pars_fragment:hX,tonemapping_fragment:bX,tonemapping_pars_fragment:gX,transmission_fragment:pX,transmission_pars_fragment:uX,uv_pars_fragment:mX,uv_pars_vertex:lX,uv_vertex:dX,worldpos_vertex:cX,background_vert:nX,background_frag:sX,backgroundCube_vert:iX,backgroundCube_frag:oX,cube_vert:aX,cube_frag:rX,depth_vert:tX,depth_frag:eX,distanceRGBA_vert:JH,distanceRGBA_frag:QH,equirect_vert:$H,equirect_frag:ZH,linedashed_vert:WH,linedashed_frag:YH,meshbasic_vert:XH,meshbasic_frag:HH,meshlambert_vert:KH,meshlambert_frag:qH,meshmatcap_vert:GH,meshmatcap_frag:UH,meshnormal_vert:FH,meshnormal_frag:VH,meshphong_vert:EH,meshphong_frag:OH,meshphysical_vert:NH,meshphysical_frag:RH,meshtoon_vert:zH,meshtoon_frag:BH,points_vert:MH,points_frag:kH,shadow_vert:LH,shadow_frag:DH,sprite_vert:CH,sprite_frag:_H},H0={common:{diffuse:{value:new z0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new f0}},envmap:{envMap:{value:null},envMapRotation:{value:new f0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new f0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new f0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new f0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new f0},normalScale:{value:new M0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new f0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new f0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new f0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new f0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new z0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new z0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0},uvTransform:{value:new f0}},sprite:{diffuse:{value:new z0(16777215)},opacity:{value:1},center:{value:new M0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}}},Z7={basic:{uniforms:A6([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.fog]),vertexShader:v0.meshbasic_vert,fragmentShader:v0.meshbasic_frag},lambert:{uniforms:A6([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,H0.lights,{emissive:{value:new z0(0)}}]),vertexShader:v0.meshlambert_vert,fragmentShader:v0.meshlambert_frag},phong:{uniforms:A6([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,H0.lights,{emissive:{value:new z0(0)},specular:{value:new z0(1118481)},shininess:{value:30}}]),vertexShader:v0.meshphong_vert,fragmentShader:v0.meshphong_frag},standard:{uniforms:A6([H0.common,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.roughnessmap,H0.metalnessmap,H0.fog,H0.lights,{emissive:{value:new z0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:v0.meshphysical_vert,fragmentShader:v0.meshphysical_frag},toon:{uniforms:A6([H0.common,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.gradientmap,H0.fog,H0.lights,{emissive:{value:new z0(0)}}]),vertexShader:v0.meshtoon_vert,fragmentShader:v0.meshtoon_frag},matcap:{uniforms:A6([H0.common,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,{matcap:{value:null}}]),vertexShader:v0.meshmatcap_vert,fragmentShader:v0.meshmatcap_frag},points:{uniforms:A6([H0.points,H0.fog]),vertexShader:v0.points_vert,fragmentShader:v0.points_frag},dashed:{uniforms:A6([H0.common,H0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:v0.linedashed_vert,fragmentShader:v0.linedashed_frag},depth:{uniforms:A6([H0.common,H0.displacementmap]),vertexShader:v0.depth_vert,fragmentShader:v0.depth_frag},normal:{uniforms:A6([H0.common,H0.bumpmap,H0.normalmap,H0.displacementmap,{opacity:{value:1}}]),vertexShader:v0.meshnormal_vert,fragmentShader:v0.meshnormal_frag},sprite:{uniforms:A6([H0.sprite,H0.fog]),vertexShader:v0.sprite_vert,fragmentShader:v0.sprite_frag},background:{uniforms:{uvTransform:{value:new f0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:v0.background_vert,fragmentShader:v0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new f0}},vertexShader:v0.backgroundCube_vert,fragmentShader:v0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:v0.cube_vert,fragmentShader:v0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:v0.equirect_vert,fragmentShader:v0.equirect_frag},distanceRGBA:{uniforms:A6([H0.common,H0.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:v0.distanceRGBA_vert,fragmentShader:v0.distanceRGBA_frag},shadow:{uniforms:A6([H0.lights,H0.fog,{color:{value:new z0(0)},opacity:{value:1}}]),vertexShader:v0.shadow_vert,fragmentShader:v0.shadow_frag}};Z7.physical={uniforms:A6([Z7.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new f0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new f0},clearcoatNormalScale:{value:new M0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new f0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new f0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new f0},sheen:{value:0},sheenColor:{value:new z0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new f0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new f0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new f0},transmissionSamplerSize:{value:new M0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new f0},attenuationDistance:{value:0},attenuationColor:{value:new z0(0)},specularColor:{value:new z0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new f0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new f0},anisotropyVector:{value:new M0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new f0}}]),vertexShader:v0.meshphysical_vert,fragmentShader:v0.meshphysical_frag};var T9={r:0,b:0,g:0},c7=new e6,wH=new j0;function IH(J,Q,$,Z,W,Y,X){let H=new z0(0),K=Y===!0?0:1,q,G,U=null,F=0,O=null;function N(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture)C=(M.backgroundBlurriness>0?$:Q).get(C);return C}function R(M){let C=!1,I=N(M);if(I===null)E(H,K);else if(I&&I.isColor)E(I,1),C=!0;let y=J.xr.getEnvironmentBlendMode();if(y==="additive")Z.buffers.color.setClear(0,0,0,1,X);else if(y==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,X);if(J.autoClear||C)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function V(M,C){let I=N(C);if(I&&(I.isCubeTexture||I.mapping===306)){if(G===void 0)G=new V6(new J9(1,1,1),new E7({name:"BackgroundCubeMaterial",uniforms:T8(Z7.backgroundCube.uniforms),vertexShader:Z7.backgroundCube.vertexShader,fragmentShader:Z7.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(y,L,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(c7.copy(C.backgroundRotation),c7.x*=-1,c7.y*=-1,c7.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1)c7.y*=-1,c7.z*=-1;if(G.material.uniforms.envMap.value=I,G.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(wH.makeRotationFromEuler(c7)),G.material.toneMapped=c0.getTransfer(I.colorSpace)!=="srgb",U!==I||F!==I.version||O!==J.toneMapping)G.material.needsUpdate=!0,U=I,F=I.version,O=J.toneMapping;G.layers.enableAll(),M.unshift(G,G.geometry,G.material,0,0,null)}else if(I&&I.isTexture){if(q===void 0)q=new V6(new a9(2,2),new E7({name:"BackgroundMaterial",uniforms:T8(Z7.background.uniforms),vertexShader:Z7.background.vertexShader,fragmentShader:Z7.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),q.geometry.deleteAttribute("normal"),Object.defineProperty(q.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(q);if(q.material.uniforms.t2D.value=I,q.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,q.material.toneMapped=c0.getTransfer(I.colorSpace)!=="srgb",I.matrixAutoUpdate===!0)I.updateMatrix();if(q.material.uniforms.uvTransform.value.copy(I.matrix),U!==I||F!==I.version||O!==J.toneMapping)q.material.needsUpdate=!0,U=I,F=I.version,O=J.toneMapping;q.layers.enableAll(),M.unshift(q,q.geometry,q.material,0,0,null)}}function E(M,C){M.getRGB(T9,D$(J)),Z.buffers.color.setClear(T9.r,T9.g,T9.b,C,X)}return{getClearColor:function(){return H},setClearColor:function(M,C=1){H.set(M),K=C,E(H,K)},getClearAlpha:function(){return K},setClearAlpha:function(M){K=M,E(H,K)},render:R,addToRenderList:V}}function PH(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=F(null),Y=W,X=!1;function H(k,j,u,n,d){let s=!1,l=U(n,u,j);if(Y!==l)Y=l,q(Y.object);if(s=O(k,n,u,d),s)N(k,n,u,d);if(d!==null)Q.update(d,J.ELEMENT_ARRAY_BUFFER);if(s||X){if(X=!1,I(k,j,u,n),d!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(d).buffer)}}function K(){return J.createVertexArray()}function q(k){return J.bindVertexArray(k)}function G(k){return J.deleteVertexArray(k)}function U(k,j,u){let n=u.wireframe===!0,d=Z[k.id];if(d===void 0)d={},Z[k.id]=d;let s=d[j.id];if(s===void 0)s={},d[j.id]=s;let l=s[n];if(l===void 0)l=F(K()),s[n]=l;return l}function F(k){let j=[],u=[],n=[];for(let d=0;d<$;d++)j[d]=0,u[d]=0,n[d]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:u,attributeDivisors:n,object:k,attributes:{},index:null}}function O(k,j,u,n){let d=Y.attributes,s=j.attributes,l=0,e=u.getAttributes();for(let m in e)if(e[m].location>=0){let F0=d[m],C0=s[m];if(C0===void 0){if(m==="instanceMatrix"&&k.instanceMatrix)C0=k.instanceMatrix;if(m==="instanceColor"&&k.instanceColor)C0=k.instanceColor}if(F0===void 0)return!0;if(F0.attribute!==C0)return!0;if(C0&&F0.data!==C0.data)return!0;l++}if(Y.attributesNum!==l)return!0;if(Y.index!==n)return!0;return!1}function N(k,j,u,n){let d={},s=j.attributes,l=0,e=u.getAttributes();for(let m in e)if(e[m].location>=0){let F0=s[m];if(F0===void 0){if(m==="instanceMatrix"&&k.instanceMatrix)F0=k.instanceMatrix;if(m==="instanceColor"&&k.instanceColor)F0=k.instanceColor}let C0={};if(C0.attribute=F0,F0&&F0.data)C0.data=F0.data;d[m]=C0,l++}Y.attributes=d,Y.attributesNum=l,Y.index=n}function R(){let k=Y.newAttributes;for(let j=0,u=k.length;j<u;j++)k[j]=0}function V(k){E(k,0)}function E(k,j){let{newAttributes:u,enabledAttributes:n,attributeDivisors:d}=Y;if(u[k]=1,n[k]===0)J.enableVertexAttribArray(k),n[k]=1;if(d[k]!==j)J.vertexAttribDivisor(k,j),d[k]=j}function M(){let{newAttributes:k,enabledAttributes:j}=Y;for(let u=0,n=j.length;u<n;u++)if(j[u]!==k[u])J.disableVertexAttribArray(u),j[u]=0}function C(k,j,u,n,d,s,l){if(l===!0)J.vertexAttribIPointer(k,j,u,d,s);else J.vertexAttribPointer(k,j,u,n,d,s)}function I(k,j,u,n){R();let d=n.attributes,s=u.getAttributes(),l=j.defaultAttributeValues;for(let e in s){let m=s[e];if(m.location>=0){let q0=d[e];if(q0===void 0){if(e==="instanceMatrix"&&k.instanceMatrix)q0=k.instanceMatrix;if(e==="instanceColor"&&k.instanceColor)q0=k.instanceColor}if(q0!==void 0){let{normalized:F0,itemSize:C0}=q0,x0=Q.get(q0);if(x0===void 0)continue;let{buffer:i,type:Z0,bytesPerElement:U0}=x0,k0=Z0===J.INT||Z0===J.UNSIGNED_INT||q0.gpuType===1013;if(q0.isInterleavedBufferAttribute){let G0=q0.data,A0=G0.stride,t0=q0.offset;if(G0.isInstancedInterleavedBuffer){for(let h0=0;h0<m.locationSize;h0++)E(m.location+h0,G0.meshPerAttribute);if(k.isInstancedMesh!==!0&&n._maxInstanceCount===void 0)n._maxInstanceCount=G0.meshPerAttribute*G0.count}else for(let h0=0;h0<m.locationSize;h0++)V(m.location+h0);J.bindBuffer(J.ARRAY_BUFFER,i);for(let h0=0;h0<m.locationSize;h0++)C(m.location+h0,C0/m.locationSize,Z0,F0,A0*U0,(t0+C0/m.locationSize*h0)*U0,k0)}else{if(q0.isInstancedBufferAttribute){for(let G0=0;G0<m.locationSize;G0++)E(m.location+G0,q0.meshPerAttribute);if(k.isInstancedMesh!==!0&&n._maxInstanceCount===void 0)n._maxInstanceCount=q0.meshPerAttribute*q0.count}else for(let G0=0;G0<m.locationSize;G0++)V(m.location+G0);J.bindBuffer(J.ARRAY_BUFFER,i);for(let G0=0;G0<m.locationSize;G0++)C(m.location+G0,C0/m.locationSize,Z0,F0,C0*U0,C0/m.locationSize*G0*U0,k0)}}else if(l!==void 0){let F0=l[e];if(F0!==void 0)switch(F0.length){case 2:J.vertexAttrib2fv(m.location,F0);break;case 3:J.vertexAttrib3fv(m.location,F0);break;case 4:J.vertexAttrib4fv(m.location,F0);break;default:J.vertexAttrib1fv(m.location,F0)}}}}M()}function y(){b();for(let k in Z){let j=Z[k];for(let u in j){let n=j[u];for(let d in n)G(n[d].object),delete n[d];delete j[u]}delete Z[k]}}function L(k){if(Z[k.id]===void 0)return;let j=Z[k.id];for(let u in j){let n=j[u];for(let d in n)G(n[d].object),delete n[d];delete j[u]}delete Z[k.id]}function S(k){for(let j in Z){let u=Z[j];if(u[k.id]===void 0)continue;let n=u[k.id];for(let d in n)G(n[d].object),delete n[d];delete u[k.id]}}function b(){if(D(),X=!0,Y===W)return;Y=W,q(Y.object)}function D(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:H,reset:b,resetDefaultState:D,dispose:y,releaseStatesOfGeometry:L,releaseStatesOfProgram:S,initAttributes:R,enableAttribute:V,disableUnusedAttributes:M}}function AH(J,Q,$){let Z;function W(q){Z=q}function Y(q,G){J.drawArrays(Z,q,G),$.update(G,Z,1)}function X(q,G,U){if(U===0)return;J.drawArraysInstanced(Z,q,G,U),$.update(G,Z,U)}function H(q,G,U){if(U===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,q,0,G,0,U);let O=0;for(let N=0;N<U;N++)O+=G[N];$.update(O,Z,1)}function K(q,G,U,F){if(U===0)return;let O=Q.get("WEBGL_multi_draw");if(O===null)for(let N=0;N<q.length;N++)X(q[N],G[N],F[N]);else{O.multiDrawArraysInstancedWEBGL(Z,q,0,G,0,F,0,U);let N=0;for(let R=0;R<U;R++)N+=G[R];for(let R=0;R<F.length;R++)$.update(N,Z,F[R])}}this.setMode=W,this.render=Y,this.renderInstances=X,this.renderMultiDraw=H,this.renderMultiDrawInstances=K}function TH(J,Q,$,Z){let W;function Y(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let L=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function X(L){if(L!==1023&&Z.convert(L)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(L){let S=L===1016&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(L!==1009&&Z.convert(L)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==1015&&!S)return!1;return!0}function K(L){if(L==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";L="mediump"}if(L==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let q=$.precision!==void 0?$.precision:"highp",G=K(q);if(G!==q)console.warn("THREE.WebGLRenderer:",q,"not supported, using",G,"instead."),q=G;let U=$.logarithmicDepthBuffer===!0,F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),V=J.getParameter(J.MAX_VERTEX_ATTRIBS),E=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),M=J.getParameter(J.MAX_VARYING_VECTORS),C=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=O>0,y=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Y,getMaxPrecision:K,textureFormatReadable:X,textureTypeReadable:H,precision:q,logarithmicDepthBuffer:U,maxTextures:F,maxVertexTextures:O,maxTextureSize:N,maxCubemapSize:R,maxAttributes:V,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:C,vertexTextures:I,maxSamples:y}}function SH(J){let Q=this,$=null,Z=0,W=!1,Y=!1,X=new $7,H=new f0,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(U,F){let O=U.length!==0||F||Z!==0||W;return W=F,Z=U.length,O},this.beginShadows=function(){Y=!0,G(null)},this.endShadows=function(){Y=!1},this.setGlobalState=function(U,F){$=G(U,F,0)},this.setState=function(U,F,O){let{clippingPlanes:N,clipIntersection:R,clipShadows:V}=U,E=J.get(U);if(!W||N===null||N.length===0||Y&&!V)if(Y)G(null);else q();else{let M=Y?0:Z,C=M*4,I=E.clippingState||null;K.value=I,I=G(N,F,C,O);for(let y=0;y!==C;++y)I[y]=$[y];E.clippingState=I,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=M}};function q(){if(K.value!==$)K.value=$,K.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(U,F,O,N){let R=U!==null?U.length:0,V=null;if(R!==0){if(V=K.value,N!==!0||V===null){let E=O+R*4,M=F.matrixWorldInverse;if(H.getNormalMatrix(M),V===null||V.length<E)V=new Float32Array(E);for(let C=0,I=O;C!==R;++C,I+=4)X.copy(U[C]).applyMatrix4(M,H),X.normal.toArray(V,I),V[I+3]=X.constant}K.value=V,K.needsUpdate=!0}return Q.numPlanes=R,Q.numIntersection=0,V}}function jH(J){let Q=new WeakMap;function $(X,H){if(H===303)X.mapping=301;else if(H===304)X.mapping=302;return X}function Z(X){if(X&&X.isTexture){let H=X.mapping;if(H===303||H===304)if(Q.has(X)){let K=Q.get(X).texture;return $(K,X.mapping)}else{let K=X.image;if(K&&K.height>0){let q=new _$(K.height);return q.fromEquirectangularTexture(J,X),Q.set(X,q),X.addEventListener("dispose",W),$(q.texture,X.mapping)}else return null}}return X}function W(X){let H=X.target;H.removeEventListener("dispose",W);let K=Q.get(H);if(K!==void 0)Q.delete(H),K.dispose()}function Y(){Q=new WeakMap}return{get:Z,dispose:Y}}class Q9 extends $5{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,Y=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=Y,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,Y){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=Y,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,Y=$+J,X=Z+Q,H=Z-Q;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,q=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=K*this.view.offsetX,Y=W+K*this.view.width,X-=q*this.view.offsetY,H=X-q*this.view.height}this.projectionMatrix.makeOrthographic(W,Y,X,H,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}var w8=4,zQ=[0.125,0.215,0.35,0.446,0.526,0.582],i7=20,SJ=new Q9,BQ=new z0,jJ=null,yJ=0,vJ=0,fJ=!1,s7=(1+Math.sqrt(5))/2,C8=1/s7,MQ=[new A(-s7,C8,0),new A(s7,C8,0),new A(-C8,0,s7),new A(C8,0,s7),new A(0,s7,-C8),new A(0,s7,C8),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class lJ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,$=0.1,Z=100){jJ=this._renderer.getRenderTarget(),yJ=this._renderer.getActiveCubeFace(),vJ=this._renderer.getActiveMipmapLevel(),fJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let W=this._allocateTargets();if(W.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,W),Q>0)this._blur(W,0,0,Q);return this._applyPMREM(W),this._cleanup(W),W}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=DQ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=LQ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(jJ,yJ,vJ),this._renderer.xr.enabled=fJ,J.scissorTest=!1,S9(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===301||J.mapping===302)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);jJ=this._renderer.getRenderTarget(),yJ=this._renderer.getActiveCubeFace(),vJ=this._renderer.getActiveMipmapLevel(),fJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},Z=kQ(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=kQ(J,Q,$);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yH(W)),this._blurMaterial=vH(W,J,Q)}return Z}_compileMaterial(J){let Q=new V6(this._lodPlanes[0],J);this._renderer.compile(Q,SJ)}_sceneToCubeUV(J,Q,$,Z){let X=new B6(90,1,Q,$),H=[1,-1,1,1,1,1],K=[1,1,1,-1,-1,-1],q=this._renderer,G=q.autoClear,U=q.toneMapping;q.getClearColor(BQ),q.toneMapping=0,q.autoClear=!1;let F=new N7({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),O=new V6(new J9,F),N=!1,R=J.background;if(R){if(R.isColor)F.color.copy(R),J.background=null,N=!0}else F.color.copy(BQ),N=!0;for(let V=0;V<6;V++){let E=V%3;if(E===0)X.up.set(0,H[V],0),X.lookAt(K[V],0,0);else if(E===1)X.up.set(0,0,H[V]),X.lookAt(0,K[V],0);else X.up.set(0,H[V],0),X.lookAt(0,0,K[V]);let M=this._cubeSize;if(S9(Z,E*M,V>2?M:0,M,M),q.setRenderTarget(Z),N)q.render(O,X);q.render(J,X)}O.geometry.dispose(),O.material.dispose(),q.toneMapping=U,q.autoClear=G,J.background=R}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===301||J.mapping===302;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=DQ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=LQ();let W=Z?this._cubemapMaterial:this._equirectMaterial,Y=new V6(this._lodPlanes[0],W),X=W.uniforms;X.envMap.value=J;let H=this._cubeSize;S9(Q,0,0,3*H,2*H),$.setRenderTarget(Q),$.render(Y,SJ)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let Y=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),X=MQ[(Z-W-1)%MQ.length];this._blur(J,W-1,W,Y,X)}Q.autoClear=$}_blur(J,Q,$,Z,W){let Y=this._pingPongRenderTarget;this._halfBlur(J,Y,Q,$,Z,"latitudinal",W),this._halfBlur(Y,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,Y,X){let H=this._renderer,K=this._blurMaterial;if(Y!=="latitudinal"&&Y!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let q=3,G=new V6(this._lodPlanes[Z],K),U=K.uniforms,F=this._sizeLods[$]-1,O=isFinite(W)?Math.PI/(2*F):2*Math.PI/(2*i7-1),N=W/O,R=isFinite(W)?1+Math.floor(q*N):i7;if(R>i7)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${R} samples when the maximum is set to ${i7}`);let V=[],E=0;for(let L=0;L<i7;++L){let S=L/N,b=Math.exp(-S*S/2);if(V.push(b),L===0)E+=b;else if(L<R)E+=2*b}for(let L=0;L<V.length;L++)V[L]=V[L]/E;if(U.envMap.value=J.texture,U.samples.value=R,U.weights.value=V,U.latitudinal.value=Y==="latitudinal",X)U.poleAxis.value=X;let{_lodMax:M}=this;U.dTheta.value=O,U.mipInt.value=M-$;let C=this._sizeLods[Z],I=3*C*(Z>M-w8?Z-M+w8:0),y=4*(this._cubeSize-C);S9(Q,I,y,3*C,2*C),H.setRenderTarget(Q),H.render(G,SJ)}}function yH(J){let Q=[],$=[],Z=[],W=J,Y=J-w8+1+zQ.length;for(let X=0;X<Y;X++){let H=Math.pow(2,W);$.push(H);let K=1/H;if(X>J-w8)K=zQ[X-J+w8-1];else if(X===0)K=0;Z.push(K);let q=1/(H-2),G=-q,U=1+q,F=[G,G,U,G,U,U,G,G,U,U,G,U],O=6,N=6,R=3,V=2,E=1,M=new Float32Array(R*N*O),C=new Float32Array(V*N*O),I=new Float32Array(E*N*O);for(let L=0;L<O;L++){let S=L%3*2/3-1,b=L>2?0:-1,D=[S,b,0,S+0.6666666666666666,b,0,S+0.6666666666666666,b+1,0,S,b,0,S+0.6666666666666666,b+1,0,S,b+1,0];M.set(D,R*N*L),C.set(F,V*N*L);let k=[L,L,L,L,L,L];I.set(k,E*N*L)}let y=new K6;if(y.setAttribute("position",new H6(M,R)),y.setAttribute("uv",new H6(C,V)),y.setAttribute("faceIndex",new H6(I,E)),Q.push(y),W>w8)W--}return{lodPlanes:Q,sizeLods:$,sigmas:Z}}function kQ(J,Q,$){let Z=new S7(J,Q,$);return Z.texture.mapping=306,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function S9(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function vH(J,Q,$){let Z=new Float32Array(i7),W=new A(0,1,0);return new E7({name:"SphericalGaussianBlur",defines:{n:i7,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:W5(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function LQ(){return new E7({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:W5(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function DQ(){return new E7({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:W5(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function W5(){return`

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
	`}function fH(J){let Q=new WeakMap,$=null;function Z(H){if(H&&H.isTexture){let K=H.mapping,q=K===303||K===304,G=K===301||K===302;if(q||G){let U=Q.get(H),F=U!==void 0?U.texture.pmremVersion:0;if(H.isRenderTargetTexture&&H.pmremVersion!==F){if($===null)$=new lJ(J);return U=q?$.fromEquirectangular(H,U):$.fromCubemap(H,U),U.texture.pmremVersion=H.pmremVersion,Q.set(H,U),U.texture}else if(U!==void 0)return U.texture;else{let O=H.image;if(q&&O&&O.height>0||G&&O&&W(O)){if($===null)$=new lJ(J);return U=q?$.fromEquirectangular(H):$.fromCubemap(H),U.texture.pmremVersion=H.pmremVersion,Q.set(H,U),H.addEventListener("dispose",Y),U.texture}else return null}}}return H}function W(H){let K=0,q=6;for(let G=0;G<q;G++)if(H[G]!==void 0)K++;return K===q}function Y(H){let K=H.target;K.removeEventListener("dispose",Y);let q=Q.get(K);if(q!==void 0)Q.delete(K),q.dispose()}function X(){if(Q=new WeakMap,$!==null)$.dispose(),$=null}return{get:Z,dispose:X}}function xH(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W;switch(Z){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension(Z)}return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)rJ("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function hH(J,Q,$,Z){let W={},Y=new WeakMap;function X(U){let F=U.target;if(F.index!==null)Q.remove(F.index);for(let N in F.attributes)Q.remove(F.attributes[N]);for(let N in F.morphAttributes){let R=F.morphAttributes[N];for(let V=0,E=R.length;V<E;V++)Q.remove(R[V])}F.removeEventListener("dispose",X),delete W[F.id];let O=Y.get(F);if(O)Q.remove(O),Y.delete(F);if(Z.releaseStatesOfGeometry(F),F.isInstancedBufferGeometry===!0)delete F._maxInstanceCount;$.memory.geometries--}function H(U,F){if(W[F.id]===!0)return F;return F.addEventListener("dispose",X),W[F.id]=!0,$.memory.geometries++,F}function K(U){let F=U.attributes;for(let N in F)Q.update(F[N],J.ARRAY_BUFFER);let O=U.morphAttributes;for(let N in O){let R=O[N];for(let V=0,E=R.length;V<E;V++)Q.update(R[V],J.ARRAY_BUFFER)}}function q(U){let F=[],O=U.index,N=U.attributes.position,R=0;if(O!==null){let M=O.array;R=O.version;for(let C=0,I=M.length;C<I;C+=3){let y=M[C+0],L=M[C+1],S=M[C+2];F.push(y,L,L,S,S,y)}}else if(N!==void 0){let M=N.array;R=N.version;for(let C=0,I=M.length/3-1;C<I;C+=3){let y=C+0,L=C+1,S=C+2;F.push(y,L,L,S,S,y)}}else return;let V=new((z$(F))?Q5:J5)(F,1);V.version=R;let E=Y.get(U);if(E)Q.remove(E);Y.set(U,V)}function G(U){let F=Y.get(U);if(F){let O=U.index;if(O!==null){if(F.version<O.version)q(U)}}else q(U);return Y.get(U)}return{get:H,update:K,getWireframeAttribute:G}}function bH(J,Q,$){let Z;function W(F){Z=F}let Y,X;function H(F){Y=F.type,X=F.bytesPerElement}function K(F,O){J.drawElements(Z,O,Y,F*X),$.update(O,Z,1)}function q(F,O,N){if(N===0)return;J.drawElementsInstanced(Z,O,Y,F*X,N),$.update(O,Z,N)}function G(F,O,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,O,0,Y,F,0,N);let V=0;for(let E=0;E<N;E++)V+=O[E];$.update(V,Z,1)}function U(F,O,N,R){if(N===0)return;let V=Q.get("WEBGL_multi_draw");if(V===null)for(let E=0;E<F.length;E++)q(F[E]/X,O[E],R[E]);else{V.multiDrawElementsInstancedWEBGL(Z,O,0,Y,F,0,R,0,N);let E=0;for(let M=0;M<N;M++)E+=O[M];for(let M=0;M<R.length;M++)$.update(E,Z,R[M])}}this.setMode=W,this.setIndex=H,this.render=K,this.renderInstances=q,this.renderMultiDraw=G,this.renderMultiDrawInstances=U}function gH(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(Y,X,H){switch($.calls++,X){case J.TRIANGLES:$.triangles+=H*(Y/3);break;case J.LINES:$.lines+=H*(Y/2);break;case J.LINE_STRIP:$.lines+=H*(Y-1);break;case J.LINE_LOOP:$.lines+=H*Y;break;case J.POINTS:$.points+=H*Y;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",X);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function pH(J,Q,$){let Z=new WeakMap,W=new r0;function Y(X,H,K){let q=X.morphTargetInfluences,G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,U=G!==void 0?G.length:0,F=Z.get(H);if(F===void 0||F.count!==U){let D=function(){S.dispose(),Z.delete(H),H.removeEventListener("dispose",D)};if(F!==void 0)F.texture.dispose();let O=H.morphAttributes.position!==void 0,N=H.morphAttributes.normal!==void 0,R=H.morphAttributes.color!==void 0,V=H.morphAttributes.position||[],E=H.morphAttributes.normal||[],M=H.morphAttributes.color||[],C=0;if(O===!0)C=1;if(N===!0)C=2;if(R===!0)C=3;let I=H.attributes.position.count*C,y=1;if(I>Q.maxTextureSize)y=Math.ceil(I/Q.maxTextureSize),I=Q.maxTextureSize;let L=new Float32Array(I*y*4*U),S=new eJ(L,I,y,U);S.type=1015,S.needsUpdate=!0;let b=C*4;for(let k=0;k<U;k++){let j=V[k],u=E[k],n=M[k],d=I*y*4*k;for(let s=0;s<j.count;s++){let l=s*b;if(O===!0)W.fromBufferAttribute(j,s),L[d+l+0]=W.x,L[d+l+1]=W.y,L[d+l+2]=W.z,L[d+l+3]=0;if(N===!0)W.fromBufferAttribute(u,s),L[d+l+4]=W.x,L[d+l+5]=W.y,L[d+l+6]=W.z,L[d+l+7]=0;if(R===!0)W.fromBufferAttribute(n,s),L[d+l+8]=W.x,L[d+l+9]=W.y,L[d+l+10]=W.z,L[d+l+11]=n.itemSize===4?W.w:1}}F={count:U,texture:S,size:new M0(I,y)},Z.set(H,F),H.addEventListener("dispose",D)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let O=0;for(let R=0;R<q.length;R++)O+=q[R];let N=H.morphTargetsRelative?1:1-O;K.getUniforms().setValue(J,"morphTargetBaseInfluence",N),K.getUniforms().setValue(J,"morphTargetInfluences",q)}K.getUniforms().setValue(J,"morphTargetsTexture",F.texture,$),K.getUniforms().setValue(J,"morphTargetsTextureSize",F.size)}return{update:Y}}function uH(J,Q,$,Z){let W=new WeakMap;function Y(K){let q=Z.render.frame,G=K.geometry,U=Q.get(K,G);if(W.get(U)!==q)Q.update(U),W.set(U,q);if(K.isInstancedMesh){if(K.hasEventListener("dispose",H)===!1)K.addEventListener("dispose",H);if(W.get(K)!==q){if($.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)$.update(K.instanceColor,J.ARRAY_BUFFER);W.set(K,q)}}if(K.isSkinnedMesh){let F=K.skeleton;if(W.get(F)!==q)F.update(),W.set(F,q)}return U}function X(){W=new WeakMap}function H(K){let q=K.target;if(q.removeEventListener("dispose",H),$.remove(q.instanceMatrix),q.instanceColor!==null)$.remove(q.instanceColor)}return{update:Y,dispose:X}}class Y5 extends E6{constructor(J,Q,$,Z,W,Y,X,H,K,q=1026){if(q!==1026&&q!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if($===void 0&&q===1026)$=1014;if($===void 0&&q===1027)$=1020;super(null,Z,W,Y,X,H,q,$,K);this.isDepthTexture=!0,this.image={width:J,height:Q},this.magFilter=X!==void 0?X:1003,this.minFilter=H!==void 0?H:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}var I$=new E6,CQ=new Y5(1,1),P$=new eJ,A$=new k$,T$=new Z5,_Q=[],wQ=[],IQ=new Float32Array(16),PQ=new Float32Array(9),AQ=new Float32Array(4);function j8(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,Y=_Q[W];if(Y===void 0)Y=new Float32Array(W),_Q[W]=Y;if(Q!==0){Z.toArray(Y,0);for(let X=1,H=0;X!==Q;++X)H+=$,J[X].toArray(Y,H)}return Y}function O6(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function N6(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function r9(J,Q){let $=wQ[Q];if($===void 0)$=new Int32Array(Q),wQ[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function mH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function lH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(O6($,Q))return;J.uniform2fv(this.addr,Q),N6($,Q)}}function dH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(O6($,Q))return;J.uniform3fv(this.addr,Q),N6($,Q)}}function cH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(O6($,Q))return;J.uniform4fv(this.addr,Q),N6($,Q)}}function nH(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(O6($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),N6($,Q)}else{if(O6($,Z))return;AQ.set(Z),J.uniformMatrix2fv(this.addr,!1,AQ),N6($,Z)}}function sH(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(O6($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),N6($,Q)}else{if(O6($,Z))return;PQ.set(Z),J.uniformMatrix3fv(this.addr,!1,PQ),N6($,Z)}}function iH(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(O6($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),N6($,Q)}else{if(O6($,Z))return;IQ.set(Z),J.uniformMatrix4fv(this.addr,!1,IQ),N6($,Z)}}function oH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function aH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(O6($,Q))return;J.uniform2iv(this.addr,Q),N6($,Q)}}function rH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(O6($,Q))return;J.uniform3iv(this.addr,Q),N6($,Q)}}function tH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(O6($,Q))return;J.uniform4iv(this.addr,Q),N6($,Q)}}function eH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function J4(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(O6($,Q))return;J.uniform2uiv(this.addr,Q),N6($,Q)}}function Q4(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(O6($,Q))return;J.uniform3uiv(this.addr,Q),N6($,Q)}}function $4(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(O6($,Q))return;J.uniform4uiv(this.addr,Q),N6($,Q)}}function Z4(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let Y;if(this.type===J.SAMPLER_2D_SHADOW)CQ.compareFunction=515,Y=CQ;else Y=I$;$.setTexture2D(Q||Y,W)}function W4(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||A$,W)}function Y4(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||T$,W)}function X4(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||P$,W)}function H4(J){switch(J){case 5126:return mH;case 35664:return lH;case 35665:return dH;case 35666:return cH;case 35674:return nH;case 35675:return sH;case 35676:return iH;case 5124:case 35670:return oH;case 35667:case 35671:return aH;case 35668:case 35672:return rH;case 35669:case 35673:return tH;case 5125:return eH;case 36294:return J4;case 36295:return Q4;case 36296:return $4;case 35678:case 36198:case 36298:case 36306:case 35682:return Z4;case 35679:case 36299:case 36307:return W4;case 35680:case 36300:case 36308:case 36293:return Y4;case 36289:case 36303:case 36311:case 36292:return X4}}function K4(J,Q){J.uniform1fv(this.addr,Q)}function q4(J,Q){let $=j8(Q,this.size,2);J.uniform2fv(this.addr,$)}function G4(J,Q){let $=j8(Q,this.size,3);J.uniform3fv(this.addr,$)}function U4(J,Q){let $=j8(Q,this.size,4);J.uniform4fv(this.addr,$)}function F4(J,Q){let $=j8(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function V4(J,Q){let $=j8(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function E4(J,Q){let $=j8(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function O4(J,Q){J.uniform1iv(this.addr,Q)}function N4(J,Q){J.uniform2iv(this.addr,Q)}function R4(J,Q){J.uniform3iv(this.addr,Q)}function z4(J,Q){J.uniform4iv(this.addr,Q)}function B4(J,Q){J.uniform1uiv(this.addr,Q)}function M4(J,Q){J.uniform2uiv(this.addr,Q)}function k4(J,Q){J.uniform3uiv(this.addr,Q)}function L4(J,Q){J.uniform4uiv(this.addr,Q)}function D4(J,Q,$){let Z=this.cache,W=Q.length,Y=r9($,W);if(!O6(Z,Y))J.uniform1iv(this.addr,Y),N6(Z,Y);for(let X=0;X!==W;++X)$.setTexture2D(Q[X]||I$,Y[X])}function C4(J,Q,$){let Z=this.cache,W=Q.length,Y=r9($,W);if(!O6(Z,Y))J.uniform1iv(this.addr,Y),N6(Z,Y);for(let X=0;X!==W;++X)$.setTexture3D(Q[X]||A$,Y[X])}function _4(J,Q,$){let Z=this.cache,W=Q.length,Y=r9($,W);if(!O6(Z,Y))J.uniform1iv(this.addr,Y),N6(Z,Y);for(let X=0;X!==W;++X)$.setTextureCube(Q[X]||T$,Y[X])}function w4(J,Q,$){let Z=this.cache,W=Q.length,Y=r9($,W);if(!O6(Z,Y))J.uniform1iv(this.addr,Y),N6(Z,Y);for(let X=0;X!==W;++X)$.setTexture2DArray(Q[X]||P$,Y[X])}function I4(J){switch(J){case 5126:return K4;case 35664:return q4;case 35665:return G4;case 35666:return U4;case 35674:return F4;case 35675:return V4;case 35676:return E4;case 5124:case 35670:return O4;case 35667:case 35671:return N4;case 35668:case 35672:return R4;case 35669:case 35673:return z4;case 5125:return B4;case 36294:return M4;case 36295:return k4;case 36296:return L4;case 35678:case 36198:case 36298:case 36306:case 35682:return D4;case 35679:case 36299:case 36307:return C4;case 35680:case 36300:case 36308:case 36293:return _4;case 36289:case 36303:case 36311:case 36292:return w4}}class S${constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=H4(Q.type)}}class j${constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=I4(Q.type)}}class y${constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,Y=Z.length;W!==Y;++W){let X=Z[W];X.setValue(J,Q[X.id],$)}}}var xJ=/(\w+)(\])?(\[|\.)?/g;function TQ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function P4(J,Q,$){let Z=J.name,W=Z.length;xJ.lastIndex=0;while(!0){let Y=xJ.exec(Z),X=xJ.lastIndex,H=Y[1],K=Y[2]==="]",q=Y[3];if(K)H=H|0;if(q===void 0||q==="["&&X+2===W){TQ($,q===void 0?new S$(H,J,Q):new j$(H,J,Q));break}else{let U=$.map[H];if(U===void 0)U=new y$(H),TQ($,U);$=U}}}class r8{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let W=J.getActiveUniform(Q,Z),Y=J.getUniformLocation(Q,W.name);P4(W,Y,this)}}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,Y=Q.length;W!==Y;++W){let X=Q[W],H=$[X.id];if(H.needsUpdate!==!1)X.setValue(J,H.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let Y=J[Z];if(Y.id in Q)$.push(Y)}return $}}function SQ(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var A4=37297,T4=0;function S4(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),Y=Math.min(Q+6,$.length);for(let X=W;X<Y;X++){let H=X+1;Z.push(`${H===Q?">":" "} ${H}: ${$[X]}`)}return Z.join(`
`)}function j4(J){let Q=c0.getPrimaries(c0.workingColorSpace),$=c0.getPrimaries(J),Z;if(Q===$)Z="";else if(Q==="p3"&&$==="rec709")Z="LinearDisplayP3ToLinearSRGB";else if(Q==="rec709"&&$==="p3")Z="LinearSRGBToLinearDisplayP3";switch(J){case"srgb-linear":case"display-p3-linear":return[Z,"LinearTransferOETF"];case"srgb":case"display-p3":return[Z,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",J),[Z,"LinearTransferOETF"]}}function jQ(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=J.getShaderInfoLog(Q).trim();if(Z&&W==="")return"";let Y=/ERROR: 0:(\d+)/.exec(W);if(Y){let X=parseInt(Y[1]);return $.toUpperCase()+`

`+W+`

`+S4(J.getShaderSource(Q),X)}else return W}function y4(J,Q){let $=j4(Q);return`vec4 ${J}( vec4 value ) { return ${$[0]}( ${$[1]}( value ) ); }`}function v4(J,Q){let $;switch(Q){case 1:$="Linear";break;case 2:$="Reinhard";break;case 3:$="OptimizedCineon";break;case 4:$="ACESFilmic";break;case 6:$="AgX";break;case 7:$="Neutral";break;case 5:$="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),$="Linear"}return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}function f4(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(o8).join(`
`)}function x4(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function h4(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let Y=J.getActiveAttrib(Q,W),X=Y.name,H=1;if(Y.type===J.FLOAT_MAT2)H=2;if(Y.type===J.FLOAT_MAT3)H=3;if(Y.type===J.FLOAT_MAT4)H=4;$[X]={type:Y.type,location:J.getAttribLocation(Q,X),locationSize:H}}return $}function o8(J){return J!==""}function yQ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function vQ(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var b4=/^[ \t]*#include +<([\w\d./]+)>/gm;function dJ(J){return J.replace(b4,p4)}var g4=new Map;function p4(J,Q){let $=v0[Q];if($===void 0){let Z=g4.get(Q);if(Z!==void 0)$=v0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return dJ($)}var u4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fQ(J){return J.replace(u4,m4)}function m4(J,Q,$,Z){let W="";for(let Y=parseInt(Q);Y<parseInt($);Y++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+Y+" ]").replace(/UNROLLED_LOOP_INDEX/g,Y);return W}function xQ(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}function l4(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===1)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===2)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===3)Q="SHADOWMAP_TYPE_VSM";return Q}function d4(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case 301:case 302:Q="ENVMAP_TYPE_CUBE";break;case 306:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function c4(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case 302:Q="ENVMAP_MODE_REFRACTION";break}return Q}function n4(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case 0:Q="ENVMAP_BLENDING_MULTIPLY";break;case 1:Q="ENVMAP_BLENDING_MIX";break;case 2:Q="ENVMAP_BLENDING_ADD";break}return Q}function s4(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function i4(J,Q,$,Z){let W=J.getContext(),Y=$.defines,X=$.vertexShader,H=$.fragmentShader,K=l4($),q=d4($),G=c4($),U=n4($),F=s4($),O=f4($),N=x4(Y),R=W.createProgram(),V,E,M=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(V=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,N].filter(o8).join(`
`),V.length>0)V+=`
`;if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,N].filter(o8).join(`
`),E.length>0)E+=`
`}else V=[xQ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,N,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(o8).join(`
`),E=[xQ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,N,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+q:"",$.envMap?"#define "+G:"",$.envMap?"#define "+U:"",F?"#define CUBEUV_TEXEL_WIDTH "+F.texelWidth:"",F?"#define CUBEUV_TEXEL_HEIGHT "+F.texelHeight:"",F?"#define CUBEUV_MAX_MIP "+F.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor||$.batchingColor?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==0?"#define TONE_MAPPING":"",$.toneMapping!==0?v0.tonemapping_pars_fragment:"",$.toneMapping!==0?v4("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",v0.colorspace_pars_fragment,y4("linearToOutputTexel",$.outputColorSpace),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(o8).join(`
`);if(X=dJ(X),X=yQ(X,$),X=vQ(X,$),H=dJ(H),H=yQ(H,$),H=vQ(H,$),X=fQ(X),H=fQ(H),$.isRawShaderMaterial!==!0)M=`#version 300 es
`,V=[O,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+V,E=["#define varying in",$.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let C=M+V+X,I=M+E+H,y=SQ(W,W.VERTEX_SHADER,C),L=SQ(W,W.FRAGMENT_SHADER,I);if(W.attachShader(R,y),W.attachShader(R,L),$.index0AttributeName!==void 0)W.bindAttribLocation(R,0,$.index0AttributeName);else if($.morphTargets===!0)W.bindAttribLocation(R,0,"position");W.linkProgram(R);function S(j){if(J.debug.checkShaderErrors){let u=W.getProgramInfoLog(R).trim(),n=W.getShaderInfoLog(y).trim(),d=W.getShaderInfoLog(L).trim(),s=!0,l=!0;if(W.getProgramParameter(R,W.LINK_STATUS)===!1)if(s=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,R,y,L);else{let e=jQ(W,y,"vertex"),m=jQ(W,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(R,W.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+u+`
`+e+`
`+m)}else if(u!=="")console.warn("THREE.WebGLProgram: Program Info Log:",u);else if(n===""||d==="")l=!1;if(l)j.diagnostics={runnable:s,programLog:u,vertexShader:{log:n,prefix:V},fragmentShader:{log:d,prefix:E}}}W.deleteShader(y),W.deleteShader(L),b=new r8(W,R),D=h4(W,R)}let b;this.getUniforms=function(){if(b===void 0)S(this);return b};let D;this.getAttributes=function(){if(D===void 0)S(this);return D};let k=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(k===!1)k=W.getProgramParameter(R,A4);return k},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(R),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=T4++,this.cacheKey=Q,this.usedTimes=1,this.program=R,this.vertexShader=y,this.fragmentShader=L,this}var o4=0;class v${constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),W=this._getShaderStage($),Y=this._getShaderCacheForMaterial(J);if(Y.has(Z)===!1)Y.add(Z),Z.usedTimes++;if(Y.has(W)===!1)Y.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new f$(J),Q.set(J,$);return $}}class f${constructor(J){this.id=o4++,this.code=J,this.usedTimes=0}}function a4(J,Q,$,Z,W,Y,X){let H=new i9,K=new v$,q=new Set,G=[],U=W.logarithmicDepthBuffer,F=W.vertexTextures,O=W.precision,N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){if(q.add(D),D===0)return"uv";return`uv${D}`}function V(D,k,j,u,n){let d=u.fog,s=n.geometry,l=D.isMeshStandardMaterial?u.environment:null,e=(D.isMeshStandardMaterial?$:Q).get(D.envMap||l),m=!!e&&e.mapping===306?e.image.height:null,q0=N[D.type];if(D.precision!==null){if(O=W.getMaxPrecision(D.precision),O!==D.precision)console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",O,"instead.")}let F0=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,C0=F0!==void 0?F0.length:0,x0=0;if(s.morphAttributes.position!==void 0)x0=1;if(s.morphAttributes.normal!==void 0)x0=2;if(s.morphAttributes.color!==void 0)x0=3;let i,Z0,U0,k0;if(q0){let b0=Z7[q0];i=b0.vertexShader,Z0=b0.fragmentShader}else i=D.vertexShader,Z0=D.fragmentShader,K.update(D),U0=K.getVertexShaderID(D),k0=K.getFragmentShaderID(D);let G0=J.getRenderTarget(),A0=n.isInstancedMesh===!0,t0=n.isBatchedMesh===!0,h0=!!D.map,T=!!D.matcap,Z6=!!e,g0=!!D.aoMap,e0=!!D.lightMap,L0=!!D.bumpMap,l0=!!D.normalMap,T0=!!D.displacementMap,S0=!!D.emissiveMap,Q6=!!D.metalnessMap,w=!!D.roughnessMap,z=D.anisotropy>0,g=D.clearcoat>0,a=D.dispersion>0,r=D.iridescence>0,t=D.sheen>0,B0=D.transmission>0,W0=z&&!!D.anisotropyMap,Y0=g&&!!D.clearcoatMap,y0=g&&!!D.clearcoatNormalMap,J0=g&&!!D.clearcoatRoughnessMap,N0=r&&!!D.iridescenceMap,u0=r&&!!D.iridescenceThicknessMap,_0=t&&!!D.sheenColorMap,X0=t&&!!D.sheenRoughnessMap,I0=!!D.specularMap,m0=!!D.specularColorMap,P=!!D.specularIntensityMap,_=B0&&!!D.transmissionMap,o=B0&&!!D.thicknessMap,p=!!D.gradientMap,c=!!D.alphaMap,Q0=D.alphaTest>0,O0=!!D.alphaHash,d0=!!D.extensions,W6=0;if(D.toneMapped){if(G0===null||G0.isXRRenderTarget===!0)W6=J.toneMapping}let q6={shaderID:q0,shaderType:D.type,shaderName:D.name,vertexShader:i,fragmentShader:Z0,defines:D.defines,customVertexShaderID:U0,customFragmentShaderID:k0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:O,batching:t0,batchingColor:t0&&n._colorsTexture!==null,instancing:A0,instancingColor:A0&&n.instanceColor!==null,instancingMorph:A0&&n.morphTexture!==null,supportsVertexTextures:F,outputColorSpace:G0===null?J.outputColorSpace:G0.isXRRenderTarget===!0?G0.texture.colorSpace:"srgb-linear",alphaToCoverage:!!D.alphaToCoverage,map:h0,matcap:T,envMap:Z6,envMapMode:Z6&&e.mapping,envMapCubeUVHeight:m,aoMap:g0,lightMap:e0,bumpMap:L0,normalMap:l0,displacementMap:F&&T0,emissiveMap:S0,normalMapObjectSpace:l0&&D.normalMapType===1,normalMapTangentSpace:l0&&D.normalMapType===0,metalnessMap:Q6,roughnessMap:w,anisotropy:z,anisotropyMap:W0,clearcoat:g,clearcoatMap:Y0,clearcoatNormalMap:y0,clearcoatRoughnessMap:J0,dispersion:a,iridescence:r,iridescenceMap:N0,iridescenceThicknessMap:u0,sheen:t,sheenColorMap:_0,sheenRoughnessMap:X0,specularMap:I0,specularColorMap:m0,specularIntensityMap:P,transmission:B0,transmissionMap:_,thicknessMap:o,gradientMap:p,opaque:D.transparent===!1&&D.blending===1&&D.alphaToCoverage===!1,alphaMap:c,alphaTest:Q0,alphaHash:O0,combine:D.combine,mapUv:h0&&R(D.map.channel),aoMapUv:g0&&R(D.aoMap.channel),lightMapUv:e0&&R(D.lightMap.channel),bumpMapUv:L0&&R(D.bumpMap.channel),normalMapUv:l0&&R(D.normalMap.channel),displacementMapUv:T0&&R(D.displacementMap.channel),emissiveMapUv:S0&&R(D.emissiveMap.channel),metalnessMapUv:Q6&&R(D.metalnessMap.channel),roughnessMapUv:w&&R(D.roughnessMap.channel),anisotropyMapUv:W0&&R(D.anisotropyMap.channel),clearcoatMapUv:Y0&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:y0&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J0&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:N0&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:u0&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:_0&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:X0&&R(D.sheenRoughnessMap.channel),specularMapUv:I0&&R(D.specularMap.channel),specularColorMapUv:m0&&R(D.specularColorMap.channel),specularIntensityMapUv:P&&R(D.specularIntensityMap.channel),transmissionMapUv:_&&R(D.transmissionMap.channel),thicknessMapUv:o&&R(D.thicknessMap.channel),alphaMapUv:c&&R(D.alphaMap.channel),vertexTangents:!!s.attributes.tangent&&(l0||z),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!s.attributes.color&&s.attributes.color.itemSize===4,pointsUvs:n.isPoints===!0&&!!s.attributes.uv&&(h0||c),fog:!!d,useFog:D.fog===!0,fogExp2:!!d&&d.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:U,skinning:n.isSkinnedMesh===!0,morphTargets:s.morphAttributes.position!==void 0,morphNormals:s.morphAttributes.normal!==void 0,morphColors:s.morphAttributes.color!==void 0,morphTargetsCount:C0,morphTextureStride:x0,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numClippingPlanes:X.numPlanes,numClipIntersection:X.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:W6,decodeVideoTexture:h0&&D.map.isVideoTexture===!0&&c0.getTransfer(D.map.colorSpace)==="srgb",premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===2,flipSided:D.side===1,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:d0&&D.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(d0&&D.extensions.multiDraw===!0||t0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return q6.vertexUv1s=q.has(1),q6.vertexUv2s=q.has(2),q6.vertexUv3s=q.has(3),q.clear(),q6}function E(D){let k=[];if(D.shaderID)k.push(D.shaderID);else k.push(D.customVertexShaderID),k.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let j in D.defines)k.push(j),k.push(D.defines[j]);if(D.isRawShaderMaterial===!1)M(k,D),C(k,D),k.push(J.outputColorSpace);return k.push(D.customProgramCacheKey),k.join()}function M(D,k){D.push(k.precision),D.push(k.outputColorSpace),D.push(k.envMapMode),D.push(k.envMapCubeUVHeight),D.push(k.mapUv),D.push(k.alphaMapUv),D.push(k.lightMapUv),D.push(k.aoMapUv),D.push(k.bumpMapUv),D.push(k.normalMapUv),D.push(k.displacementMapUv),D.push(k.emissiveMapUv),D.push(k.metalnessMapUv),D.push(k.roughnessMapUv),D.push(k.anisotropyMapUv),D.push(k.clearcoatMapUv),D.push(k.clearcoatNormalMapUv),D.push(k.clearcoatRoughnessMapUv),D.push(k.iridescenceMapUv),D.push(k.iridescenceThicknessMapUv),D.push(k.sheenColorMapUv),D.push(k.sheenRoughnessMapUv),D.push(k.specularMapUv),D.push(k.specularColorMapUv),D.push(k.specularIntensityMapUv),D.push(k.transmissionMapUv),D.push(k.thicknessMapUv),D.push(k.combine),D.push(k.fogExp2),D.push(k.sizeAttenuation),D.push(k.morphTargetsCount),D.push(k.morphAttributeCount),D.push(k.numDirLights),D.push(k.numPointLights),D.push(k.numSpotLights),D.push(k.numSpotLightMaps),D.push(k.numHemiLights),D.push(k.numRectAreaLights),D.push(k.numDirLightShadows),D.push(k.numPointLightShadows),D.push(k.numSpotLightShadows),D.push(k.numSpotLightShadowsWithMaps),D.push(k.numLightProbes),D.push(k.shadowMapType),D.push(k.toneMapping),D.push(k.numClippingPlanes),D.push(k.numClipIntersection),D.push(k.depthPacking)}function C(D,k){if(H.disableAll(),k.supportsVertexTextures)H.enable(0);if(k.instancing)H.enable(1);if(k.instancingColor)H.enable(2);if(k.instancingMorph)H.enable(3);if(k.matcap)H.enable(4);if(k.envMap)H.enable(5);if(k.normalMapObjectSpace)H.enable(6);if(k.normalMapTangentSpace)H.enable(7);if(k.clearcoat)H.enable(8);if(k.iridescence)H.enable(9);if(k.alphaTest)H.enable(10);if(k.vertexColors)H.enable(11);if(k.vertexAlphas)H.enable(12);if(k.vertexUv1s)H.enable(13);if(k.vertexUv2s)H.enable(14);if(k.vertexUv3s)H.enable(15);if(k.vertexTangents)H.enable(16);if(k.anisotropy)H.enable(17);if(k.alphaHash)H.enable(18);if(k.batching)H.enable(19);if(k.dispersion)H.enable(20);if(k.batchingColor)H.enable(21);if(D.push(H.mask),H.disableAll(),k.fog)H.enable(0);if(k.useFog)H.enable(1);if(k.flatShading)H.enable(2);if(k.logarithmicDepthBuffer)H.enable(3);if(k.skinning)H.enable(4);if(k.morphTargets)H.enable(5);if(k.morphNormals)H.enable(6);if(k.morphColors)H.enable(7);if(k.premultipliedAlpha)H.enable(8);if(k.shadowMapEnabled)H.enable(9);if(k.doubleSided)H.enable(10);if(k.flipSided)H.enable(11);if(k.useDepthPacking)H.enable(12);if(k.dithering)H.enable(13);if(k.transmission)H.enable(14);if(k.sheen)H.enable(15);if(k.opaque)H.enable(16);if(k.pointsUvs)H.enable(17);if(k.decodeVideoTexture)H.enable(18);if(k.alphaToCoverage)H.enable(19);D.push(H.mask)}function I(D){let k=N[D.type],j;if(k){let u=Z7[k];j=uW.clone(u.uniforms)}else j=D.uniforms;return j}function y(D,k){let j;for(let u=0,n=G.length;u<n;u++){let d=G[u];if(d.cacheKey===k){j=d,++j.usedTimes;break}}if(j===void 0)j=new i4(J,k,D,Y),G.push(j);return j}function L(D){if(--D.usedTimes===0){let k=G.indexOf(D);G[k]=G[G.length-1],G.pop(),D.destroy()}}function S(D){K.remove(D)}function b(){K.dispose()}return{getParameters:V,getProgramCacheKey:E,getUniforms:I,acquireProgram:y,releaseProgram:L,releaseShaderCache:S,programs:G,dispose:b}}function r4(){let J=new WeakMap;function Q(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function $(Y){J.delete(Y)}function Z(Y,X,H){J.get(Y)[X]=H}function W(){J=new WeakMap}return{get:Q,remove:$,update:Z,dispose:W}}function t4(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function hQ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function bQ(){let J=[],Q=0,$=[],Z=[],W=[];function Y(){Q=0,$.length=0,Z.length=0,W.length=0}function X(U,F,O,N,R,V){let E=J[Q];if(E===void 0)E={id:U.id,object:U,geometry:F,material:O,groupOrder:N,renderOrder:U.renderOrder,z:R,group:V},J[Q]=E;else E.id=U.id,E.object=U,E.geometry=F,E.material=O,E.groupOrder=N,E.renderOrder=U.renderOrder,E.z=R,E.group=V;return Q++,E}function H(U,F,O,N,R,V){let E=X(U,F,O,N,R,V);if(O.transmission>0)Z.push(E);else if(O.transparent===!0)W.push(E);else $.push(E)}function K(U,F,O,N,R,V){let E=X(U,F,O,N,R,V);if(O.transmission>0)Z.unshift(E);else if(O.transparent===!0)W.unshift(E);else $.unshift(E)}function q(U,F){if($.length>1)$.sort(U||t4);if(Z.length>1)Z.sort(F||hQ);if(W.length>1)W.sort(F||hQ)}function G(){for(let U=Q,F=J.length;U<F;U++){let O=J[U];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:Y,push:H,unshift:K,finish:G,sort:q}}function e4(){let J=new WeakMap;function Q(Z,W){let Y=J.get(Z),X;if(Y===void 0)X=new bQ,J.set(Z,[X]);else if(W>=Y.length)X=new bQ,Y.push(X);else X=Y[W];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function JK(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new A,color:new z0};break;case"SpotLight":$={position:new A,direction:new A,color:new z0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new A,color:new z0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new A,skyColor:new z0,groundColor:new z0};break;case"RectAreaLight":$={color:new z0,position:new A,halfWidth:new A,halfHeight:new A};break}return J[Q.id]=$,$}}}function QK(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new M0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new M0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new M0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var $K=0;function ZK(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function WK(J){let Q=new JK,$=QK(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let q=0;q<9;q++)Z.probe.push(new A);let W=new A,Y=new j0,X=new j0;function H(q){let G=0,U=0,F=0;for(let D=0;D<9;D++)Z.probe[D].set(0,0,0);let O=0,N=0,R=0,V=0,E=0,M=0,C=0,I=0,y=0,L=0,S=0;q.sort(ZK);for(let D=0,k=q.length;D<k;D++){let j=q[D],u=j.color,n=j.intensity,d=j.distance,s=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)G+=u.r*n,U+=u.g*n,F+=u.b*n;else if(j.isLightProbe){for(let l=0;l<9;l++)Z.probe[l].addScaledVector(j.sh.coefficients[l],n);S++}else if(j.isDirectionalLight){let l=Q.get(j);if(l.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let e=j.shadow,m=$.get(j);m.shadowIntensity=e.intensity,m.shadowBias=e.bias,m.shadowNormalBias=e.normalBias,m.shadowRadius=e.radius,m.shadowMapSize=e.mapSize,Z.directionalShadow[O]=m,Z.directionalShadowMap[O]=s,Z.directionalShadowMatrix[O]=j.shadow.matrix,M++}Z.directional[O]=l,O++}else if(j.isSpotLight){let l=Q.get(j);l.position.setFromMatrixPosition(j.matrixWorld),l.color.copy(u).multiplyScalar(n),l.distance=d,l.coneCos=Math.cos(j.angle),l.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),l.decay=j.decay,Z.spot[R]=l;let e=j.shadow;if(j.map){if(Z.spotLightMap[y]=j.map,y++,e.updateMatrices(j),j.castShadow)L++}if(Z.spotLightMatrix[R]=e.matrix,j.castShadow){let m=$.get(j);m.shadowIntensity=e.intensity,m.shadowBias=e.bias,m.shadowNormalBias=e.normalBias,m.shadowRadius=e.radius,m.shadowMapSize=e.mapSize,Z.spotShadow[R]=m,Z.spotShadowMap[R]=s,I++}R++}else if(j.isRectAreaLight){let l=Q.get(j);l.color.copy(u).multiplyScalar(n),l.halfWidth.set(j.width*0.5,0,0),l.halfHeight.set(0,j.height*0.5,0),Z.rectArea[V]=l,V++}else if(j.isPointLight){let l=Q.get(j);if(l.color.copy(j.color).multiplyScalar(j.intensity),l.distance=j.distance,l.decay=j.decay,j.castShadow){let e=j.shadow,m=$.get(j);m.shadowIntensity=e.intensity,m.shadowBias=e.bias,m.shadowNormalBias=e.normalBias,m.shadowRadius=e.radius,m.shadowMapSize=e.mapSize,m.shadowCameraNear=e.camera.near,m.shadowCameraFar=e.camera.far,Z.pointShadow[N]=m,Z.pointShadowMap[N]=s,Z.pointShadowMatrix[N]=j.shadow.matrix,C++}Z.point[N]=l,N++}else if(j.isHemisphereLight){let l=Q.get(j);l.skyColor.copy(j.color).multiplyScalar(n),l.groundColor.copy(j.groundColor).multiplyScalar(n),Z.hemi[E]=l,E++}}if(V>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=H0.LTC_FLOAT_1,Z.rectAreaLTC2=H0.LTC_FLOAT_2;else Z.rectAreaLTC1=H0.LTC_HALF_1,Z.rectAreaLTC2=H0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=U,Z.ambient[2]=F;let b=Z.hash;if(b.directionalLength!==O||b.pointLength!==N||b.spotLength!==R||b.rectAreaLength!==V||b.hemiLength!==E||b.numDirectionalShadows!==M||b.numPointShadows!==C||b.numSpotShadows!==I||b.numSpotMaps!==y||b.numLightProbes!==S)Z.directional.length=O,Z.spot.length=R,Z.rectArea.length=V,Z.point.length=N,Z.hemi.length=E,Z.directionalShadow.length=M,Z.directionalShadowMap.length=M,Z.pointShadow.length=C,Z.pointShadowMap.length=C,Z.spotShadow.length=I,Z.spotShadowMap.length=I,Z.directionalShadowMatrix.length=M,Z.pointShadowMatrix.length=C,Z.spotLightMatrix.length=I+y-L,Z.spotLightMap.length=y,Z.numSpotLightShadowsWithMaps=L,Z.numLightProbes=S,b.directionalLength=O,b.pointLength=N,b.spotLength=R,b.rectAreaLength=V,b.hemiLength=E,b.numDirectionalShadows=M,b.numPointShadows=C,b.numSpotShadows=I,b.numSpotMaps=y,b.numLightProbes=S,Z.version=$K++}function K(q,G){let U=0,F=0,O=0,N=0,R=0,V=G.matrixWorldInverse;for(let E=0,M=q.length;E<M;E++){let C=q[E];if(C.isDirectionalLight){let I=Z.directional[U];I.direction.setFromMatrixPosition(C.matrixWorld),W.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(V),U++}else if(C.isSpotLight){let I=Z.spot[O];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(V),I.direction.setFromMatrixPosition(C.matrixWorld),W.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(V),O++}else if(C.isRectAreaLight){let I=Z.rectArea[N];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(V),X.identity(),Y.copy(C.matrixWorld),Y.premultiply(V),X.extractRotation(Y),I.halfWidth.set(C.width*0.5,0,0),I.halfHeight.set(0,C.height*0.5,0),I.halfWidth.applyMatrix4(X),I.halfHeight.applyMatrix4(X),N++}else if(C.isPointLight){let I=Z.point[F];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(V),F++}else if(C.isHemisphereLight){let I=Z.hemi[R];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(V),R++}}}return{setup:H,setupView:K,state:Z}}function gQ(J){let Q=new WK(J),$=[],Z=[];function W(G){q.camera=G,$.length=0,Z.length=0}function Y(G){$.push(G)}function X(G){Z.push(G)}function H(){Q.setup($)}function K(G){Q.setupView($,G)}let q={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:q,setupLights:H,setupLightsView:K,pushLight:Y,pushShadow:X}}function YK(J){let Q=new WeakMap;function $(W,Y=0){let X=Q.get(W),H;if(X===void 0)H=new gQ(J),Q.set(W,[H]);else if(Y>=X.length)H=new gQ(J),X.push(H);else H=X[Y];return H}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}class x$ extends I6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class h$ extends I6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}var XK=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HK=`uniform sampler2D shadow_pass;
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
}`;function KK(J,Q,$){let Z=new o9,W=new M0,Y=new M0,X=new r0,H=new x$({depthPacking:3201}),K=new h$,q={},G=$.maxTextureSize,U={[0]:1,[1]:0,[2]:2},F=new E7({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new M0},radius:{value:4}},vertexShader:XK,fragmentShader:HK}),O=F.clone();O.defines.HORIZONTAL_PASS=1;let N=new K6;N.setAttribute("position",new H6(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let R=new V6(N,F),V=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let E=this.type;this.render=function(L,S,b){if(V.enabled===!1)return;if(V.autoUpdate===!1&&V.needsUpdate===!1)return;if(L.length===0)return;let D=J.getRenderTarget(),k=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),u=J.state;u.setBlending(0),u.buffers.color.setClear(1,1,1,1),u.buffers.depth.setTest(!0),u.setScissorTest(!1);let n=E!==3&&this.type===3,d=E===3&&this.type!==3;for(let s=0,l=L.length;s<l;s++){let e=L[s],m=e.shadow;if(m===void 0){console.warn("THREE.WebGLShadowMap:",e,"has no shadow.");continue}if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;W.copy(m.mapSize);let q0=m.getFrameExtents();if(W.multiply(q0),Y.copy(m.mapSize),W.x>G||W.y>G){if(W.x>G)Y.x=Math.floor(G/q0.x),W.x=Y.x*q0.x,m.mapSize.x=Y.x;if(W.y>G)Y.y=Math.floor(G/q0.y),W.y=Y.y*q0.y,m.mapSize.y=Y.y}if(m.map===null||n===!0||d===!0){let C0=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(m.map!==null)m.map.dispose();m.map=new S7(W.x,W.y,C0),m.map.texture.name=e.name+".shadowMap",m.camera.updateProjectionMatrix()}J.setRenderTarget(m.map),J.clear();let F0=m.getViewportCount();for(let C0=0;C0<F0;C0++){let x0=m.getViewport(C0);X.set(Y.x*x0.x,Y.y*x0.y,Y.x*x0.z,Y.y*x0.w),u.viewport(X),m.updateMatrices(e,C0),Z=m.getFrustum(),I(S,b,m.camera,e,this.type)}if(m.isPointLightShadow!==!0&&this.type===3)M(m,b);m.needsUpdate=!1}E=this.type,V.needsUpdate=!1,J.setRenderTarget(D,k,j)};function M(L,S){let b=Q.update(R);if(F.defines.VSM_SAMPLES!==L.blurSamples)F.defines.VSM_SAMPLES=L.blurSamples,O.defines.VSM_SAMPLES=L.blurSamples,F.needsUpdate=!0,O.needsUpdate=!0;if(L.mapPass===null)L.mapPass=new S7(W.x,W.y);F.uniforms.shadow_pass.value=L.map.texture,F.uniforms.resolution.value=L.mapSize,F.uniforms.radius.value=L.radius,J.setRenderTarget(L.mapPass),J.clear(),J.renderBufferDirect(S,null,b,F,R,null),O.uniforms.shadow_pass.value=L.mapPass.texture,O.uniforms.resolution.value=L.mapSize,O.uniforms.radius.value=L.radius,J.setRenderTarget(L.map),J.clear(),J.renderBufferDirect(S,null,b,O,R,null)}function C(L,S,b,D){let k=null,j=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)k=j;else if(k=b.isPointLight===!0?K:H,J.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let u=k.uuid,n=S.uuid,d=q[u];if(d===void 0)d={},q[u]=d;let s=d[n];if(s===void 0)s=k.clone(),d[n]=s,S.addEventListener("dispose",y);k=s}if(k.visible=S.visible,k.wireframe=S.wireframe,D===3)k.side=S.shadowSide!==null?S.shadowSide:S.side;else k.side=S.shadowSide!==null?S.shadowSide:U[S.side];if(k.alphaMap=S.alphaMap,k.alphaTest=S.alphaTest,k.map=S.map,k.clipShadows=S.clipShadows,k.clippingPlanes=S.clippingPlanes,k.clipIntersection=S.clipIntersection,k.displacementMap=S.displacementMap,k.displacementScale=S.displacementScale,k.displacementBias=S.displacementBias,k.wireframeLinewidth=S.wireframeLinewidth,k.linewidth=S.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let u=J.properties.get(k);u.light=b}return k}function I(L,S,b,D,k){if(L.visible===!1)return;if(L.layers.test(S.layers)&&(L.isMesh||L.isLine||L.isPoints)){if((L.castShadow||L.receiveShadow&&k===3)&&(!L.frustumCulled||Z.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);let n=Q.update(L),d=L.material;if(Array.isArray(d)){let s=n.groups;for(let l=0,e=s.length;l<e;l++){let m=s[l],q0=d[m.materialIndex];if(q0&&q0.visible){let F0=C(L,q0,D,k);L.onBeforeShadow(J,L,S,b,n,F0,m),J.renderBufferDirect(b,null,n,F0,L,m),L.onAfterShadow(J,L,S,b,n,F0,m)}}}else if(d.visible){let s=C(L,d,D,k);L.onBeforeShadow(J,L,S,b,n,s,null),J.renderBufferDirect(b,null,n,s,L,null),L.onAfterShadow(J,L,S,b,n,s,null)}}}let u=L.children;for(let n=0,d=u.length;n<d;n++)I(u[n],S,b,D,k)}function y(L){L.target.removeEventListener("dispose",y);for(let b in q){let D=q[b],k=L.target.uuid;if(k in D)D[k].dispose(),delete D[k]}}}function qK(J){function Q(){let _=!1,o=new r0,p=null,c=new r0(0,0,0,0);return{setMask:function(Q0){if(p!==Q0&&!_)J.colorMask(Q0,Q0,Q0,Q0),p=Q0},setLocked:function(Q0){_=Q0},setClear:function(Q0,O0,d0,W6,q6){if(q6===!0)Q0*=W6,O0*=W6,d0*=W6;if(o.set(Q0,O0,d0,W6),c.equals(o)===!1)J.clearColor(Q0,O0,d0,W6),c.copy(o)},reset:function(){_=!1,p=null,c.set(-1,0,0,0)}}}function $(){let _=!1,o=null,p=null,c=null;return{setTest:function(Q0){if(Q0)k0(J.DEPTH_TEST);else G0(J.DEPTH_TEST)},setMask:function(Q0){if(o!==Q0&&!_)J.depthMask(Q0),o=Q0},setFunc:function(Q0){if(p!==Q0){switch(Q0){case 0:J.depthFunc(J.NEVER);break;case 1:J.depthFunc(J.ALWAYS);break;case 2:J.depthFunc(J.LESS);break;case 3:J.depthFunc(J.LEQUAL);break;case 4:J.depthFunc(J.EQUAL);break;case 5:J.depthFunc(J.GEQUAL);break;case 6:J.depthFunc(J.GREATER);break;case 7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}p=Q0}},setLocked:function(Q0){_=Q0},setClear:function(Q0){if(c!==Q0)J.clearDepth(Q0),c=Q0},reset:function(){_=!1,o=null,p=null,c=null}}}function Z(){let _=!1,o=null,p=null,c=null,Q0=null,O0=null,d0=null,W6=null,q6=null;return{setTest:function(b0){if(!_)if(b0)k0(J.STENCIL_TEST);else G0(J.STENCIL_TEST)},setMask:function(b0){if(o!==b0&&!_)J.stencilMask(b0),o=b0},setFunc:function(b0,G6,D6){if(p!==b0||c!==G6||Q0!==D6)J.stencilFunc(b0,G6,D6),p=b0,c=G6,Q0=D6},setOp:function(b0,G6,D6){if(O0!==b0||d0!==G6||W6!==D6)J.stencilOp(b0,G6,D6),O0=b0,d0=G6,W6=D6},setLocked:function(b0){_=b0},setClear:function(b0){if(q6!==b0)J.clearStencil(b0),q6=b0},reset:function(){_=!1,o=null,p=null,c=null,Q0=null,O0=null,d0=null,W6=null,q6=null}}}let W=new Q,Y=new $,X=new Z,H=new WeakMap,K=new WeakMap,q={},G={},U=new WeakMap,F=[],O=null,N=!1,R=null,V=null,E=null,M=null,C=null,I=null,y=null,L=new z0(0,0,0),S=0,b=!1,D=null,k=null,j=null,u=null,n=null,d=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),s=!1,l=0,e=J.getParameter(J.VERSION);if(e.indexOf("WebGL")!==-1)l=parseFloat(/^WebGL (\d)/.exec(e)[1]),s=l>=1;else if(e.indexOf("OpenGL ES")!==-1)l=parseFloat(/^OpenGL ES (\d)/.exec(e)[1]),s=l>=2;let m=null,q0={},F0=J.getParameter(J.SCISSOR_BOX),C0=J.getParameter(J.VIEWPORT),x0=new r0().fromArray(F0),i=new r0().fromArray(C0);function Z0(_,o,p,c){let Q0=new Uint8Array(4),O0=J.createTexture();J.bindTexture(_,O0),J.texParameteri(_,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(_,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let d0=0;d0<p;d0++)if(_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texImage3D(o,0,J.RGBA,1,1,c,0,J.RGBA,J.UNSIGNED_BYTE,Q0);else J.texImage2D(o+d0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,Q0);return O0}let U0={};U0[J.TEXTURE_2D]=Z0(J.TEXTURE_2D,J.TEXTURE_2D,1),U0[J.TEXTURE_CUBE_MAP]=Z0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),U0[J.TEXTURE_2D_ARRAY]=Z0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),U0[J.TEXTURE_3D]=Z0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),k0(J.DEPTH_TEST),Y.setFunc(3),L0(!1),l0(1),k0(J.CULL_FACE),g0(0);function k0(_){if(q[_]!==!0)J.enable(_),q[_]=!0}function G0(_){if(q[_]!==!1)J.disable(_),q[_]=!1}function A0(_,o){if(G[_]!==o){if(J.bindFramebuffer(_,o),G[_]=o,_===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=o;if(_===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=o;return!0}return!1}function t0(_,o){let p=F,c=!1;if(_){if(p=U.get(o),p===void 0)p=[],U.set(o,p);let Q0=_.textures;if(p.length!==Q0.length||p[0]!==J.COLOR_ATTACHMENT0){for(let O0=0,d0=Q0.length;O0<d0;O0++)p[O0]=J.COLOR_ATTACHMENT0+O0;p.length=Q0.length,c=!0}}else if(p[0]!==J.BACK)p[0]=J.BACK,c=!0;if(c)J.drawBuffers(p)}function h0(_){if(O!==_)return J.useProgram(_),O=_,!0;return!1}let T={[100]:J.FUNC_ADD,[101]:J.FUNC_SUBTRACT,[102]:J.FUNC_REVERSE_SUBTRACT};T[103]=J.MIN,T[104]=J.MAX;let Z6={[200]:J.ZERO,[201]:J.ONE,[202]:J.SRC_COLOR,[204]:J.SRC_ALPHA,[210]:J.SRC_ALPHA_SATURATE,[208]:J.DST_COLOR,[206]:J.DST_ALPHA,[203]:J.ONE_MINUS_SRC_COLOR,[205]:J.ONE_MINUS_SRC_ALPHA,[209]:J.ONE_MINUS_DST_COLOR,[207]:J.ONE_MINUS_DST_ALPHA,[211]:J.CONSTANT_COLOR,[212]:J.ONE_MINUS_CONSTANT_COLOR,[213]:J.CONSTANT_ALPHA,[214]:J.ONE_MINUS_CONSTANT_ALPHA};function g0(_,o,p,c,Q0,O0,d0,W6,q6,b0){if(_===0){if(N===!0)G0(J.BLEND),N=!1;return}if(N===!1)k0(J.BLEND),N=!0;if(_!==5){if(_!==R||b0!==b){if(V!==100||C!==100)J.blendEquation(J.FUNC_ADD),V=100,C=100;if(b0)switch(_){case 1:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.ONE,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFuncSeparate(J.ZERO,J.SRC_COLOR,J.ZERO,J.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case 1:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.SRC_ALPHA,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFunc(J.ZERO,J.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}E=null,M=null,I=null,y=null,L.set(0,0,0),S=0,R=_,b=b0}return}if(Q0=Q0||o,O0=O0||p,d0=d0||c,o!==V||Q0!==C)J.blendEquationSeparate(T[o],T[Q0]),V=o,C=Q0;if(p!==E||c!==M||O0!==I||d0!==y)J.blendFuncSeparate(Z6[p],Z6[c],Z6[O0],Z6[d0]),E=p,M=c,I=O0,y=d0;if(W6.equals(L)===!1||q6!==S)J.blendColor(W6.r,W6.g,W6.b,q6),L.copy(W6),S=q6;R=_,b=!1}function e0(_,o){_.side===2?G0(J.CULL_FACE):k0(J.CULL_FACE);let p=_.side===1;if(o)p=!p;L0(p),_.blending===1&&_.transparent===!1?g0(0):g0(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),Y.setFunc(_.depthFunc),Y.setTest(_.depthTest),Y.setMask(_.depthWrite),W.setMask(_.colorWrite);let c=_.stencilWrite;if(X.setTest(c),c)X.setMask(_.stencilWriteMask),X.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),X.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass);S0(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?k0(J.SAMPLE_ALPHA_TO_COVERAGE):G0(J.SAMPLE_ALPHA_TO_COVERAGE)}function L0(_){if(D!==_){if(_)J.frontFace(J.CW);else J.frontFace(J.CCW);D=_}}function l0(_){if(_!==0){if(k0(J.CULL_FACE),_!==k)if(_===1)J.cullFace(J.BACK);else if(_===2)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else G0(J.CULL_FACE);k=_}function T0(_){if(_!==j){if(s)J.lineWidth(_);j=_}}function S0(_,o,p){if(_){if(k0(J.POLYGON_OFFSET_FILL),u!==o||n!==p)J.polygonOffset(o,p),u=o,n=p}else G0(J.POLYGON_OFFSET_FILL)}function Q6(_){if(_)k0(J.SCISSOR_TEST);else G0(J.SCISSOR_TEST)}function w(_){if(_===void 0)_=J.TEXTURE0+d-1;if(m!==_)J.activeTexture(_),m=_}function z(_,o,p){if(p===void 0)if(m===null)p=J.TEXTURE0+d-1;else p=m;let c=q0[p];if(c===void 0)c={type:void 0,texture:void 0},q0[p]=c;if(c.type!==_||c.texture!==o){if(m!==p)J.activeTexture(p),m=p;J.bindTexture(_,o||U0[_]),c.type=_,c.texture=o}}function g(){let _=q0[m];if(_!==void 0&&_.type!==void 0)J.bindTexture(_.type,null),_.type=void 0,_.texture=void 0}function a(){try{J.compressedTexImage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function r(){try{J.compressedTexImage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function t(){try{J.texSubImage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function B0(){try{J.texSubImage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function W0(){try{J.compressedTexSubImage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Y0(){try{J.compressedTexSubImage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function y0(){try{J.texStorage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function J0(){try{J.texStorage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function N0(){try{J.texImage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function u0(){try{J.texImage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function _0(_){if(x0.equals(_)===!1)J.scissor(_.x,_.y,_.z,_.w),x0.copy(_)}function X0(_){if(i.equals(_)===!1)J.viewport(_.x,_.y,_.z,_.w),i.copy(_)}function I0(_,o){let p=K.get(o);if(p===void 0)p=new WeakMap,K.set(o,p);let c=p.get(_);if(c===void 0)c=J.getUniformBlockIndex(o,_.name),p.set(_,c)}function m0(_,o){let c=K.get(o).get(_);if(H.get(o)!==c)J.uniformBlockBinding(o,c,_.__bindingPointIndex),H.set(o,c)}function P(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),q={},m=null,q0={},G={},U=new WeakMap,F=[],O=null,N=!1,R=null,V=null,E=null,M=null,C=null,I=null,y=null,L=new z0(0,0,0),S=0,b=!1,D=null,k=null,j=null,u=null,n=null,x0.set(0,0,J.canvas.width,J.canvas.height),i.set(0,0,J.canvas.width,J.canvas.height),W.reset(),Y.reset(),X.reset()}return{buffers:{color:W,depth:Y,stencil:X},enable:k0,disable:G0,bindFramebuffer:A0,drawBuffers:t0,useProgram:h0,setBlending:g0,setMaterial:e0,setFlipSided:L0,setCullFace:l0,setLineWidth:T0,setPolygonOffset:S0,setScissorTest:Q6,activeTexture:w,bindTexture:z,unbindTexture:g,compressedTexImage2D:a,compressedTexImage3D:r,texImage2D:N0,texImage3D:u0,updateUBOMapping:I0,uniformBlockBinding:m0,texStorage2D:y0,texStorage3D:J0,texSubImage2D:t,texSubImage3D:B0,compressedTexSubImage2D:W0,compressedTexSubImage3D:Y0,scissor:_0,viewport:X0,reset:P}}function pQ(J,Q,$,Z){let W=GK(Z);switch($){case 1021:return J*Q;case 1024:return J*Q;case 1025:return J*Q*2;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function GK(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}function UK(J,Q,$,Z,W,Y,X){let H=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),q=new M0,G=new WeakMap,U,F=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function N(w,z){return O?new OffscreenCanvas(w,z):t8("canvas")}function R(w,z,g){let a=1,r=Q6(w);if(r.width>g||r.height>g)a=g/Math.max(r.width,r.height);if(a<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let t=Math.floor(a*r.width),B0=Math.floor(a*r.height);if(U===void 0)U=N(t,B0);let W0=z?N(t,B0):U;return W0.width=t,W0.height=B0,W0.getContext("2d").drawImage(w,0,0,t,B0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+t+"x"+B0+")."),W0}else{if("data"in w)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return w}return w}function V(w){return w.generateMipmaps&&w.minFilter!==1003&&w.minFilter!==1006}function E(w){J.generateMipmap(w)}function M(w,z,g,a,r=!1){if(w!==null){if(J[w]!==void 0)return J[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let t=z;if(z===J.RED){if(g===J.FLOAT)t=J.R32F;if(g===J.HALF_FLOAT)t=J.R16F;if(g===J.UNSIGNED_BYTE)t=J.R8}if(z===J.RED_INTEGER){if(g===J.UNSIGNED_BYTE)t=J.R8UI;if(g===J.UNSIGNED_SHORT)t=J.R16UI;if(g===J.UNSIGNED_INT)t=J.R32UI;if(g===J.BYTE)t=J.R8I;if(g===J.SHORT)t=J.R16I;if(g===J.INT)t=J.R32I}if(z===J.RG){if(g===J.FLOAT)t=J.RG32F;if(g===J.HALF_FLOAT)t=J.RG16F;if(g===J.UNSIGNED_BYTE)t=J.RG8}if(z===J.RG_INTEGER){if(g===J.UNSIGNED_BYTE)t=J.RG8UI;if(g===J.UNSIGNED_SHORT)t=J.RG16UI;if(g===J.UNSIGNED_INT)t=J.RG32UI;if(g===J.BYTE)t=J.RG8I;if(g===J.SHORT)t=J.RG16I;if(g===J.INT)t=J.RG32I}if(z===J.RGB){if(g===J.UNSIGNED_INT_5_9_9_9_REV)t=J.RGB9_E5}if(z===J.RGBA){let B0=r?"linear":c0.getTransfer(a);if(g===J.FLOAT)t=J.RGBA32F;if(g===J.HALF_FLOAT)t=J.RGBA16F;if(g===J.UNSIGNED_BYTE)t=B0==="srgb"?J.SRGB8_ALPHA8:J.RGBA8;if(g===J.UNSIGNED_SHORT_4_4_4_4)t=J.RGBA4;if(g===J.UNSIGNED_SHORT_5_5_5_1)t=J.RGB5_A1}if(t===J.R16F||t===J.R32F||t===J.RG16F||t===J.RG32F||t===J.RGBA16F||t===J.RGBA32F)Q.get("EXT_color_buffer_float");return t}function C(w,z){let g;if(w){if(z===null||z===1014||z===1020)g=J.DEPTH24_STENCIL8;else if(z===1015)g=J.DEPTH32F_STENCIL8;else if(z===1012)g=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(z===null||z===1014||z===1020)g=J.DEPTH_COMPONENT24;else if(z===1015)g=J.DEPTH_COMPONENT32F;else if(z===1012)g=J.DEPTH_COMPONENT16;return g}function I(w,z){if(V(w)===!0||w.isFramebufferTexture&&w.minFilter!==1003&&w.minFilter!==1006)return Math.log2(Math.max(z.width,z.height))+1;else if(w.mipmaps!==void 0&&w.mipmaps.length>0)return w.mipmaps.length;else if(w.isCompressedTexture&&Array.isArray(w.image))return z.mipmaps.length;else return 1}function y(w){let z=w.target;if(z.removeEventListener("dispose",y),S(z),z.isVideoTexture)G.delete(z)}function L(w){let z=w.target;z.removeEventListener("dispose",L),D(z)}function S(w){let z=Z.get(w);if(z.__webglInit===void 0)return;let g=w.source,a=F.get(g);if(a){let r=a[z.__cacheKey];if(r.usedTimes--,r.usedTimes===0)b(w);if(Object.keys(a).length===0)F.delete(g)}Z.remove(w)}function b(w){let z=Z.get(w);J.deleteTexture(z.__webglTexture);let g=w.source,a=F.get(g);delete a[z.__cacheKey],X.memory.textures--}function D(w){let z=Z.get(w);if(w.depthTexture)w.depthTexture.dispose();if(w.isWebGLCubeRenderTarget)for(let a=0;a<6;a++){if(Array.isArray(z.__webglFramebuffer[a]))for(let r=0;r<z.__webglFramebuffer[a].length;r++)J.deleteFramebuffer(z.__webglFramebuffer[a][r]);else J.deleteFramebuffer(z.__webglFramebuffer[a]);if(z.__webglDepthbuffer)J.deleteRenderbuffer(z.__webglDepthbuffer[a])}else{if(Array.isArray(z.__webglFramebuffer))for(let a=0;a<z.__webglFramebuffer.length;a++)J.deleteFramebuffer(z.__webglFramebuffer[a]);else J.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer)J.deleteRenderbuffer(z.__webglDepthbuffer);if(z.__webglMultisampledFramebuffer)J.deleteFramebuffer(z.__webglMultisampledFramebuffer);if(z.__webglColorRenderbuffer){for(let a=0;a<z.__webglColorRenderbuffer.length;a++)if(z.__webglColorRenderbuffer[a])J.deleteRenderbuffer(z.__webglColorRenderbuffer[a])}if(z.__webglDepthRenderbuffer)J.deleteRenderbuffer(z.__webglDepthRenderbuffer)}let g=w.textures;for(let a=0,r=g.length;a<r;a++){let t=Z.get(g[a]);if(t.__webglTexture)J.deleteTexture(t.__webglTexture),X.memory.textures--;Z.remove(g[a])}Z.remove(w)}let k=0;function j(){k=0}function u(){let w=k;if(w>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+W.maxTextures);return k+=1,w}function n(w){let z=[];return z.push(w.wrapS),z.push(w.wrapT),z.push(w.wrapR||0),z.push(w.magFilter),z.push(w.minFilter),z.push(w.anisotropy),z.push(w.internalFormat),z.push(w.format),z.push(w.type),z.push(w.generateMipmaps),z.push(w.premultiplyAlpha),z.push(w.flipY),z.push(w.unpackAlignment),z.push(w.colorSpace),z.join()}function d(w,z){let g=Z.get(w);if(w.isVideoTexture)T0(w);if(w.isRenderTargetTexture===!1&&w.version>0&&g.__version!==w.version){let a=w.image;if(a===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(a.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{i(g,w,z);return}}$.bindTexture(J.TEXTURE_2D,g.__webglTexture,J.TEXTURE0+z)}function s(w,z){let g=Z.get(w);if(w.version>0&&g.__version!==w.version){i(g,w,z);return}$.bindTexture(J.TEXTURE_2D_ARRAY,g.__webglTexture,J.TEXTURE0+z)}function l(w,z){let g=Z.get(w);if(w.version>0&&g.__version!==w.version){i(g,w,z);return}$.bindTexture(J.TEXTURE_3D,g.__webglTexture,J.TEXTURE0+z)}function e(w,z){let g=Z.get(w);if(w.version>0&&g.__version!==w.version){Z0(g,w,z);return}$.bindTexture(J.TEXTURE_CUBE_MAP,g.__webglTexture,J.TEXTURE0+z)}let m={[1000]:J.REPEAT,[1001]:J.CLAMP_TO_EDGE,[1002]:J.MIRRORED_REPEAT},q0={[1003]:J.NEAREST,[1004]:J.NEAREST_MIPMAP_NEAREST,[1005]:J.NEAREST_MIPMAP_LINEAR,[1006]:J.LINEAR,[1007]:J.LINEAR_MIPMAP_NEAREST,[1008]:J.LINEAR_MIPMAP_LINEAR},F0={[512]:J.NEVER,[519]:J.ALWAYS,[513]:J.LESS,[515]:J.LEQUAL,[514]:J.EQUAL,[518]:J.GEQUAL,[516]:J.GREATER,[517]:J.NOTEQUAL};function C0(w,z){if(z.type===1015&&Q.has("OES_texture_float_linear")===!1&&(z.magFilter===1006||z.magFilter===1007||z.magFilter===1005||z.magFilter===1008||z.minFilter===1006||z.minFilter===1007||z.minFilter===1005||z.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(w,J.TEXTURE_WRAP_S,m[z.wrapS]),J.texParameteri(w,J.TEXTURE_WRAP_T,m[z.wrapT]),w===J.TEXTURE_3D||w===J.TEXTURE_2D_ARRAY)J.texParameteri(w,J.TEXTURE_WRAP_R,m[z.wrapR]);if(J.texParameteri(w,J.TEXTURE_MAG_FILTER,q0[z.magFilter]),J.texParameteri(w,J.TEXTURE_MIN_FILTER,q0[z.minFilter]),z.compareFunction)J.texParameteri(w,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(w,J.TEXTURE_COMPARE_FUNC,F0[z.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(z.magFilter===1003)return;if(z.minFilter!==1005&&z.minFilter!==1008)return;if(z.type===1015&&Q.has("OES_texture_float_linear")===!1)return;if(z.anisotropy>1||Z.get(z).__currentAnisotropy){let g=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(w,g.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,W.getMaxAnisotropy())),Z.get(z).__currentAnisotropy=z.anisotropy}}}function x0(w,z){let g=!1;if(w.__webglInit===void 0)w.__webglInit=!0,z.addEventListener("dispose",y);let a=z.source,r=F.get(a);if(r===void 0)r={},F.set(a,r);let t=n(z);if(t!==w.__cacheKey){if(r[t]===void 0)r[t]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,g=!0;r[t].usedTimes++;let B0=r[w.__cacheKey];if(B0!==void 0){if(r[w.__cacheKey].usedTimes--,B0.usedTimes===0)b(z)}w.__cacheKey=t,w.__webglTexture=r[t].texture}return g}function i(w,z,g){let a=J.TEXTURE_2D;if(z.isDataArrayTexture||z.isCompressedArrayTexture)a=J.TEXTURE_2D_ARRAY;if(z.isData3DTexture)a=J.TEXTURE_3D;let r=x0(w,z),t=z.source;$.bindTexture(a,w.__webglTexture,J.TEXTURE0+g);let B0=Z.get(t);if(t.version!==B0.__version||r===!0){$.activeTexture(J.TEXTURE0+g);let W0=c0.getPrimaries(c0.workingColorSpace),Y0=z.colorSpace===""?null:c0.getPrimaries(z.colorSpace),y0=z.colorSpace===""||W0===Y0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,z.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,z.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,y0);let J0=R(z.image,!1,W.maxTextureSize);J0=S0(z,J0);let N0=Y.convert(z.format,z.colorSpace),u0=Y.convert(z.type),_0=M(z.internalFormat,N0,u0,z.colorSpace,z.isVideoTexture);C0(a,z);let X0,I0=z.mipmaps,m0=z.isVideoTexture!==!0,P=B0.__version===void 0||r===!0,_=t.dataReady,o=I(z,J0);if(z.isDepthTexture){if(_0=C(z.format===1027,z.type),P)if(m0)$.texStorage2D(J.TEXTURE_2D,1,_0,J0.width,J0.height);else $.texImage2D(J.TEXTURE_2D,0,_0,J0.width,J0.height,0,N0,u0,null)}else if(z.isDataTexture)if(I0.length>0){if(m0&&P)$.texStorage2D(J.TEXTURE_2D,o,_0,I0[0].width,I0[0].height);for(let p=0,c=I0.length;p<c;p++)if(X0=I0[p],m0){if(_)$.texSubImage2D(J.TEXTURE_2D,p,0,0,X0.width,X0.height,N0,u0,X0.data)}else $.texImage2D(J.TEXTURE_2D,p,_0,X0.width,X0.height,0,N0,u0,X0.data);z.generateMipmaps=!1}else if(m0){if(P)$.texStorage2D(J.TEXTURE_2D,o,_0,J0.width,J0.height);if(_)$.texSubImage2D(J.TEXTURE_2D,0,0,0,J0.width,J0.height,N0,u0,J0.data)}else $.texImage2D(J.TEXTURE_2D,0,_0,J0.width,J0.height,0,N0,u0,J0.data);else if(z.isCompressedTexture)if(z.isCompressedArrayTexture){if(m0&&P)$.texStorage3D(J.TEXTURE_2D_ARRAY,o,_0,I0[0].width,I0[0].height,J0.depth);for(let p=0,c=I0.length;p<c;p++)if(X0=I0[p],z.format!==1023)if(N0!==null)if(m0){if(_)if(z.layerUpdates.size>0){let Q0=pQ(X0.width,X0.height,z.format,z.type);for(let O0 of z.layerUpdates){let d0=X0.data.subarray(O0*Q0/X0.data.BYTES_PER_ELEMENT,(O0+1)*Q0/X0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,p,0,0,O0,X0.width,X0.height,1,N0,d0,0,0)}z.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,p,0,0,0,X0.width,X0.height,J0.depth,N0,X0.data,0,0)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,p,_0,X0.width,X0.height,J0.depth,0,X0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(_)$.texSubImage3D(J.TEXTURE_2D_ARRAY,p,0,0,0,X0.width,X0.height,J0.depth,N0,u0,X0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,p,_0,X0.width,X0.height,J0.depth,0,N0,u0,X0.data)}else{if(m0&&P)$.texStorage2D(J.TEXTURE_2D,o,_0,I0[0].width,I0[0].height);for(let p=0,c=I0.length;p<c;p++)if(X0=I0[p],z.format!==1023)if(N0!==null)if(m0){if(_)$.compressedTexSubImage2D(J.TEXTURE_2D,p,0,0,X0.width,X0.height,N0,X0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,p,_0,X0.width,X0.height,0,X0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(_)$.texSubImage2D(J.TEXTURE_2D,p,0,0,X0.width,X0.height,N0,u0,X0.data)}else $.texImage2D(J.TEXTURE_2D,p,_0,X0.width,X0.height,0,N0,u0,X0.data)}else if(z.isDataArrayTexture)if(m0){if(P)$.texStorage3D(J.TEXTURE_2D_ARRAY,o,_0,J0.width,J0.height,J0.depth);if(_)if(z.layerUpdates.size>0){let p=pQ(J0.width,J0.height,z.format,z.type);for(let c of z.layerUpdates){let Q0=J0.data.subarray(c*p/J0.data.BYTES_PER_ELEMENT,(c+1)*p/J0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,c,J0.width,J0.height,1,N0,u0,Q0)}z.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,J0.width,J0.height,J0.depth,N0,u0,J0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,_0,J0.width,J0.height,J0.depth,0,N0,u0,J0.data);else if(z.isData3DTexture)if(m0){if(P)$.texStorage3D(J.TEXTURE_3D,o,_0,J0.width,J0.height,J0.depth);if(_)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,J0.width,J0.height,J0.depth,N0,u0,J0.data)}else $.texImage3D(J.TEXTURE_3D,0,_0,J0.width,J0.height,J0.depth,0,N0,u0,J0.data);else if(z.isFramebufferTexture){if(P)if(m0)$.texStorage2D(J.TEXTURE_2D,o,_0,J0.width,J0.height);else{let{width:p,height:c}=J0;for(let Q0=0;Q0<o;Q0++)$.texImage2D(J.TEXTURE_2D,Q0,_0,p,c,0,N0,u0,null),p>>=1,c>>=1}}else if(I0.length>0){if(m0&&P){let p=Q6(I0[0]);$.texStorage2D(J.TEXTURE_2D,o,_0,p.width,p.height)}for(let p=0,c=I0.length;p<c;p++)if(X0=I0[p],m0){if(_)$.texSubImage2D(J.TEXTURE_2D,p,0,0,N0,u0,X0)}else $.texImage2D(J.TEXTURE_2D,p,_0,N0,u0,X0);z.generateMipmaps=!1}else if(m0){if(P){let p=Q6(J0);$.texStorage2D(J.TEXTURE_2D,o,_0,p.width,p.height)}if(_)$.texSubImage2D(J.TEXTURE_2D,0,0,0,N0,u0,J0)}else $.texImage2D(J.TEXTURE_2D,0,_0,N0,u0,J0);if(V(z))E(a);if(B0.__version=t.version,z.onUpdate)z.onUpdate(z)}w.__version=z.version}function Z0(w,z,g){if(z.image.length!==6)return;let a=x0(w,z),r=z.source;$.bindTexture(J.TEXTURE_CUBE_MAP,w.__webglTexture,J.TEXTURE0+g);let t=Z.get(r);if(r.version!==t.__version||a===!0){$.activeTexture(J.TEXTURE0+g);let B0=c0.getPrimaries(c0.workingColorSpace),W0=z.colorSpace===""?null:c0.getPrimaries(z.colorSpace),Y0=z.colorSpace===""||B0===W0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,z.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,z.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y0);let y0=z.isCompressedTexture||z.image[0].isCompressedTexture,J0=z.image[0]&&z.image[0].isDataTexture,N0=[];for(let c=0;c<6;c++){if(!y0&&!J0)N0[c]=R(z.image[c],!0,W.maxCubemapSize);else N0[c]=J0?z.image[c].image:z.image[c];N0[c]=S0(z,N0[c])}let u0=N0[0],_0=Y.convert(z.format,z.colorSpace),X0=Y.convert(z.type),I0=M(z.internalFormat,_0,X0,z.colorSpace),m0=z.isVideoTexture!==!0,P=t.__version===void 0||a===!0,_=r.dataReady,o=I(z,u0);C0(J.TEXTURE_CUBE_MAP,z);let p;if(y0){if(m0&&P)$.texStorage2D(J.TEXTURE_CUBE_MAP,o,I0,u0.width,u0.height);for(let c=0;c<6;c++){p=N0[c].mipmaps;for(let Q0=0;Q0<p.length;Q0++){let O0=p[Q0];if(z.format!==1023)if(_0!==null)if(m0){if(_)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0,0,0,O0.width,O0.height,_0,O0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0,I0,O0.width,O0.height,0,O0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(m0){if(_)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0,0,0,O0.width,O0.height,_0,X0,O0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0,I0,O0.width,O0.height,0,_0,X0,O0.data)}}}else{if(p=z.mipmaps,m0&&P){if(p.length>0)o++;let c=Q6(N0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,o,I0,c.width,c.height)}for(let c=0;c<6;c++)if(J0){if(m0){if(_)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,0,0,N0[c].width,N0[c].height,_0,X0,N0[c].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,I0,N0[c].width,N0[c].height,0,_0,X0,N0[c].data);for(let Q0=0;Q0<p.length;Q0++){let d0=p[Q0].image[c].image;if(m0){if(_)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0+1,0,0,d0.width,d0.height,_0,X0,d0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0+1,I0,d0.width,d0.height,0,_0,X0,d0.data)}}else{if(m0){if(_)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,0,0,_0,X0,N0[c])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,I0,_0,X0,N0[c]);for(let Q0=0;Q0<p.length;Q0++){let O0=p[Q0];if(m0){if(_)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0+1,0,0,_0,X0,O0.image[c])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0+1,I0,_0,X0,O0.image[c])}}}if(V(z))E(J.TEXTURE_CUBE_MAP);if(t.__version=r.version,z.onUpdate)z.onUpdate(z)}w.__version=z.version}function U0(w,z,g,a,r,t){let B0=Y.convert(g.format,g.colorSpace),W0=Y.convert(g.type),Y0=M(g.internalFormat,B0,W0,g.colorSpace);if(!Z.get(z).__hasExternalTextures){let J0=Math.max(1,z.width>>t),N0=Math.max(1,z.height>>t);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)$.texImage3D(r,t,Y0,J0,N0,z.depth,0,B0,W0,null);else $.texImage2D(r,t,Y0,J0,N0,0,B0,W0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,w),l0(z))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,r,Z.get(g).__webglTexture,0,L0(z));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,a,r,Z.get(g).__webglTexture,t);$.bindFramebuffer(J.FRAMEBUFFER,null)}function k0(w,z,g){if(J.bindRenderbuffer(J.RENDERBUFFER,w),z.depthBuffer){let a=z.depthTexture,r=a&&a.isDepthTexture?a.type:null,t=C(z.stencilBuffer,r),B0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,W0=L0(z);if(l0(z))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,W0,t,z.width,z.height);else if(g)J.renderbufferStorageMultisample(J.RENDERBUFFER,W0,t,z.width,z.height);else J.renderbufferStorage(J.RENDERBUFFER,t,z.width,z.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,B0,J.RENDERBUFFER,w)}else{let a=z.textures;for(let r=0;r<a.length;r++){let t=a[r],B0=Y.convert(t.format,t.colorSpace),W0=Y.convert(t.type),Y0=M(t.internalFormat,B0,W0,t.colorSpace),y0=L0(z);if(g&&l0(z)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,y0,Y0,z.width,z.height);else if(l0(z))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,y0,Y0,z.width,z.height);else J.renderbufferStorage(J.RENDERBUFFER,Y0,z.width,z.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function G0(w,z){if(z&&z.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if($.bindFramebuffer(J.FRAMEBUFFER,w),!(z.depthTexture&&z.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(!Z.get(z.depthTexture).__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height)z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0;d(z.depthTexture,0);let a=Z.get(z.depthTexture).__webglTexture,r=L0(z);if(z.depthTexture.format===1026)if(l0(z))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,a,0,r);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,a,0);else if(z.depthTexture.format===1027)if(l0(z))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,a,0,r);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,a,0);else throw Error("Unknown depthTexture format")}function A0(w){let z=Z.get(w),g=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!z.__autoAllocateDepthBuffer){if(g)throw Error("target.depthTexture not supported in Cube render targets");G0(z.__webglFramebuffer,w)}else if(g){z.__webglDepthbuffer=[];for(let a=0;a<6;a++)$.bindFramebuffer(J.FRAMEBUFFER,z.__webglFramebuffer[a]),z.__webglDepthbuffer[a]=J.createRenderbuffer(),k0(z.__webglDepthbuffer[a],w,!1)}else $.bindFramebuffer(J.FRAMEBUFFER,z.__webglFramebuffer),z.__webglDepthbuffer=J.createRenderbuffer(),k0(z.__webglDepthbuffer,w,!1);$.bindFramebuffer(J.FRAMEBUFFER,null)}function t0(w,z,g){let a=Z.get(w);if(z!==void 0)U0(a.__webglFramebuffer,w,w.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(g!==void 0)A0(w)}function h0(w){let z=w.texture,g=Z.get(w),a=Z.get(z);w.addEventListener("dispose",L);let r=w.textures,t=w.isWebGLCubeRenderTarget===!0,B0=r.length>1;if(!B0){if(a.__webglTexture===void 0)a.__webglTexture=J.createTexture();a.__version=z.version,X.memory.textures++}if(t){g.__webglFramebuffer=[];for(let W0=0;W0<6;W0++)if(z.mipmaps&&z.mipmaps.length>0){g.__webglFramebuffer[W0]=[];for(let Y0=0;Y0<z.mipmaps.length;Y0++)g.__webglFramebuffer[W0][Y0]=J.createFramebuffer()}else g.__webglFramebuffer[W0]=J.createFramebuffer()}else{if(z.mipmaps&&z.mipmaps.length>0){g.__webglFramebuffer=[];for(let W0=0;W0<z.mipmaps.length;W0++)g.__webglFramebuffer[W0]=J.createFramebuffer()}else g.__webglFramebuffer=J.createFramebuffer();if(B0)for(let W0=0,Y0=r.length;W0<Y0;W0++){let y0=Z.get(r[W0]);if(y0.__webglTexture===void 0)y0.__webglTexture=J.createTexture(),X.memory.textures++}if(w.samples>0&&l0(w)===!1){g.__webglMultisampledFramebuffer=J.createFramebuffer(),g.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,g.__webglMultisampledFramebuffer);for(let W0=0;W0<r.length;W0++){let Y0=r[W0];g.__webglColorRenderbuffer[W0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,g.__webglColorRenderbuffer[W0]);let y0=Y.convert(Y0.format,Y0.colorSpace),J0=Y.convert(Y0.type),N0=M(Y0.internalFormat,y0,J0,Y0.colorSpace,w.isXRRenderTarget===!0),u0=L0(w);J.renderbufferStorageMultisample(J.RENDERBUFFER,u0,N0,w.width,w.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+W0,J.RENDERBUFFER,g.__webglColorRenderbuffer[W0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),w.depthBuffer)g.__webglDepthRenderbuffer=J.createRenderbuffer(),k0(g.__webglDepthRenderbuffer,w,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(t){$.bindTexture(J.TEXTURE_CUBE_MAP,a.__webglTexture),C0(J.TEXTURE_CUBE_MAP,z);for(let W0=0;W0<6;W0++)if(z.mipmaps&&z.mipmaps.length>0)for(let Y0=0;Y0<z.mipmaps.length;Y0++)U0(g.__webglFramebuffer[W0][Y0],w,z,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,Y0);else U0(g.__webglFramebuffer[W0],w,z,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,0);if(V(z))E(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(B0){for(let W0=0,Y0=r.length;W0<Y0;W0++){let y0=r[W0],J0=Z.get(y0);if($.bindTexture(J.TEXTURE_2D,J0.__webglTexture),C0(J.TEXTURE_2D,y0),U0(g.__webglFramebuffer,w,y0,J.COLOR_ATTACHMENT0+W0,J.TEXTURE_2D,0),V(y0))E(J.TEXTURE_2D)}$.unbindTexture()}else{let W0=J.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)W0=w.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(W0,a.__webglTexture),C0(W0,z),z.mipmaps&&z.mipmaps.length>0)for(let Y0=0;Y0<z.mipmaps.length;Y0++)U0(g.__webglFramebuffer[Y0],w,z,J.COLOR_ATTACHMENT0,W0,Y0);else U0(g.__webglFramebuffer,w,z,J.COLOR_ATTACHMENT0,W0,0);if(V(z))E(W0);$.unbindTexture()}if(w.depthBuffer)A0(w)}function T(w){let z=w.textures;for(let g=0,a=z.length;g<a;g++){let r=z[g];if(V(r)){let t=w.isWebGLCubeRenderTarget?J.TEXTURE_CUBE_MAP:J.TEXTURE_2D,B0=Z.get(r).__webglTexture;$.bindTexture(t,B0),E(t),$.unbindTexture()}}}let Z6=[],g0=[];function e0(w){if(w.samples>0){if(l0(w)===!1){let{textures:z,width:g,height:a}=w,r=J.COLOR_BUFFER_BIT,t=w.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,B0=Z.get(w),W0=z.length>1;if(W0)for(let Y0=0;Y0<z.length;Y0++)$.bindFramebuffer(J.FRAMEBUFFER,B0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,B0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,B0.__webglMultisampledFramebuffer),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,B0.__webglFramebuffer);for(let Y0=0;Y0<z.length;Y0++){if(w.resolveDepthBuffer){if(w.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(w.stencilBuffer&&w.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(W0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,B0.__webglColorRenderbuffer[Y0]);let y0=Z.get(z[Y0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,y0,0)}if(J.blitFramebuffer(0,0,g,a,0,0,g,a,r,J.NEAREST),K===!0){if(Z6.length=0,g0.length=0,Z6.push(J.COLOR_ATTACHMENT0+Y0),w.depthBuffer&&w.resolveDepthBuffer===!1)Z6.push(t),g0.push(t),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,g0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,Z6)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),W0)for(let Y0=0;Y0<z.length;Y0++){$.bindFramebuffer(J.FRAMEBUFFER,B0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.RENDERBUFFER,B0.__webglColorRenderbuffer[Y0]);let y0=Z.get(z[Y0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,B0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.TEXTURE_2D,y0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,B0.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&K){let z=w.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[z])}}}function L0(w){return Math.min(W.maxSamples,w.samples)}function l0(w){let z=Z.get(w);return w.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&z.__useRenderToTexture!==!1}function T0(w){let z=X.render.frame;if(G.get(w)!==z)G.set(w,z),w.update()}function S0(w,z){let{colorSpace:g,format:a,type:r}=w;if(w.isCompressedTexture===!0||w.isVideoTexture===!0)return z;if(g!=="srgb-linear"&&g!=="")if(c0.getTransfer(g)==="srgb"){if(a!==1023||r!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",g);return z}function Q6(w){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement)q.width=w.naturalWidth||w.width,q.height=w.naturalHeight||w.height;else if(typeof VideoFrame<"u"&&w instanceof VideoFrame)q.width=w.displayWidth,q.height=w.displayHeight;else q.width=w.width,q.height=w.height;return q}this.allocateTextureUnit=u,this.resetTextureUnits=j,this.setTexture2D=d,this.setTexture2DArray=s,this.setTexture3D=l,this.setTextureCube=e,this.rebindTextures=t0,this.setupRenderTarget=h0,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=e0,this.setupDepthRenderbuffer=A0,this.setupFrameBufferTexture=U0,this.useMultisampledRTT=l0}function FK(J,Q){function $(Z,W=""){let Y,X=c0.getTransfer(W);if(Z===1009)return J.UNSIGNED_BYTE;if(Z===1017)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===1018)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===35902)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===1010)return J.BYTE;if(Z===1011)return J.SHORT;if(Z===1012)return J.UNSIGNED_SHORT;if(Z===1013)return J.INT;if(Z===1014)return J.UNSIGNED_INT;if(Z===1015)return J.FLOAT;if(Z===1016)return J.HALF_FLOAT;if(Z===1021)return J.ALPHA;if(Z===1022)return J.RGB;if(Z===1023)return J.RGBA;if(Z===1024)return J.LUMINANCE;if(Z===1025)return J.LUMINANCE_ALPHA;if(Z===1026)return J.DEPTH_COMPONENT;if(Z===1027)return J.DEPTH_STENCIL;if(Z===1028)return J.RED;if(Z===1029)return J.RED_INTEGER;if(Z===1030)return J.RG;if(Z===1031)return J.RG_INTEGER;if(Z===1033)return J.RGBA_INTEGER;if(Z===33776||Z===33777||Z===33778||Z===33779)if(X==="srgb")if(Y=Q.get("WEBGL_compressed_texture_s3tc_srgb"),Y!==null){if(Z===33776)return Y.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===33777)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===33778)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===33779)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Y=Q.get("WEBGL_compressed_texture_s3tc"),Y!==null){if(Z===33776)return Y.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===33777)return Y.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===33778)return Y.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===33779)return Y.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===35840||Z===35841||Z===35842||Z===35843)if(Y=Q.get("WEBGL_compressed_texture_pvrtc"),Y!==null){if(Z===35840)return Y.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===35841)return Y.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===35842)return Y.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===35843)return Y.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===36196||Z===37492||Z===37496)if(Y=Q.get("WEBGL_compressed_texture_etc"),Y!==null){if(Z===36196||Z===37492)return X==="srgb"?Y.COMPRESSED_SRGB8_ETC2:Y.COMPRESSED_RGB8_ETC2;if(Z===37496)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Y.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===37808||Z===37809||Z===37810||Z===37811||Z===37812||Z===37813||Z===37814||Z===37815||Z===37816||Z===37817||Z===37818||Z===37819||Z===37820||Z===37821)if(Y=Q.get("WEBGL_compressed_texture_astc"),Y!==null){if(Z===37808)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Y.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===37809)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Y.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===37810)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Y.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===37811)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Y.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===37812)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Y.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===37813)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Y.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===37814)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Y.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===37815)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Y.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===37816)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Y.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===37817)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Y.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===37818)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Y.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===37819)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Y.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===37820)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Y.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===37821)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Y.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===36492||Z===36494||Z===36495)if(Y=Q.get("EXT_texture_compression_bptc"),Y!==null){if(Z===36492)return X==="srgb"?Y.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Y.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===36494)return Y.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===36495)return Y.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===36283||Z===36284||Z===36285||Z===36286)if(Y=Q.get("EXT_texture_compression_rgtc"),Y!==null){if(Z===36492)return Y.COMPRESSED_RED_RGTC1_EXT;if(Z===36284)return Y.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===36285)return Y.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===36286)return Y.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===1020)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}class b$ extends B6{constructor(J=[]){super();this.isArrayCamera=!0,this.cameras=J}}class w6 extends J6{constructor(){super();this.isGroup=!0,this.type="Group"}}var VK={type:"move"};class m9{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new w6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new w6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new w6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,Y=null,X=this._targetRay,H=this._grip,K=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(K&&J.hand){Y=!0;for(let N of J.hand.values()){let R=Q.getJointPose(N,$),V=this._getHandJoint(K,N);if(R!==null)V.matrix.fromArray(R.transform.matrix),V.matrix.decompose(V.position,V.rotation,V.scale),V.matrixWorldNeedsUpdate=!0,V.jointRadius=R.radius;V.visible=R!==null}let q=K.joints["index-finger-tip"],G=K.joints["thumb-tip"],U=q.position.distanceTo(G.position),F=0.02,O=0.005;if(K.inputState.pinching&&U>F+O)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&U<=F-O)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(H!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(VK)}}}if(X!==null)X.visible=Z!==null;if(H!==null)H.visible=W!==null;if(K!==null)K.visible=Y!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new w6;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var EK=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OK=`
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

}`;class g${constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q,$){if(this.texture===null){let Z=new E6,W=J.properties.get(Z);if(W.__webglTexture=Q.texture,Q.depthNear!=$.depthNear||Q.depthFar!=$.depthFar)this.depthNear=Q.depthNear,this.depthFar=Q.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new E7({vertexShader:EK,fragmentShader:OK,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new V6(new a9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p$ extends O7{constructor(J,Q){super();let $=this,Z=null,W=1,Y=null,X="local-floor",H=1,K=null,q=null,G=null,U=null,F=null,O=null,N=new g$,R=Q.getContextAttributes(),V=null,E=null,M=[],C=[],I=new M0,y=null,L=new B6;L.layers.enable(1),L.viewport=new r0;let S=new B6;S.layers.enable(2),S.viewport=new r0;let b=[L,S],D=new b$;D.layers.enable(1),D.layers.enable(2);let k=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i){let Z0=M[i];if(Z0===void 0)Z0=new m9,M[i]=Z0;return Z0.getTargetRaySpace()},this.getControllerGrip=function(i){let Z0=M[i];if(Z0===void 0)Z0=new m9,M[i]=Z0;return Z0.getGripSpace()},this.getHand=function(i){let Z0=M[i];if(Z0===void 0)Z0=new m9,M[i]=Z0;return Z0.getHandSpace()};function u(i){let Z0=C.indexOf(i.inputSource);if(Z0===-1)return;let U0=M[Z0];if(U0!==void 0)U0.update(i.inputSource,i.frame,K||Y),U0.dispatchEvent({type:i.type,data:i.inputSource})}function n(){Z.removeEventListener("select",u),Z.removeEventListener("selectstart",u),Z.removeEventListener("selectend",u),Z.removeEventListener("squeeze",u),Z.removeEventListener("squeezestart",u),Z.removeEventListener("squeezeend",u),Z.removeEventListener("end",n),Z.removeEventListener("inputsourceschange",d);for(let i=0;i<M.length;i++){let Z0=C[i];if(Z0===null)continue;C[i]=null,M[i].disconnect(Z0)}k=null,j=null,N.reset(),J.setRenderTarget(V),F=null,U=null,G=null,Z=null,E=null,x0.stop(),$.isPresenting=!1,J.setPixelRatio(y),J.setSize(I.width,I.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i){if(W=i,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i){if(X=i,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||Y},this.setReferenceSpace=function(i){K=i},this.getBaseLayer=function(){return U!==null?U:F},this.getBinding=function(){return G},this.getFrame=function(){return O},this.getSession=function(){return Z},this.setSession=async function(i){if(Z=i,Z!==null){if(V=J.getRenderTarget(),Z.addEventListener("select",u),Z.addEventListener("selectstart",u),Z.addEventListener("selectend",u),Z.addEventListener("squeeze",u),Z.addEventListener("squeezestart",u),Z.addEventListener("squeezeend",u),Z.addEventListener("end",n),Z.addEventListener("inputsourceschange",d),R.xrCompatible!==!0)await Q.makeXRCompatible();if(y=J.getPixelRatio(),J.getSize(I),Z.renderState.layers===void 0){let Z0={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:W};F=new XRWebGLLayer(Z,Q,Z0),Z.updateRenderState({baseLayer:F}),J.setPixelRatio(1),J.setSize(F.framebufferWidth,F.framebufferHeight,!1),E=new S7(F.framebufferWidth,F.framebufferHeight,{format:1023,type:1009,colorSpace:J.outputColorSpace,stencilBuffer:R.stencil})}else{let Z0=null,U0=null,k0=null;if(R.depth)k0=R.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,Z0=R.stencil?1027:1026,U0=R.stencil?1020:1014;let G0={colorFormat:Q.RGBA8,depthFormat:k0,scaleFactor:W};G=new XRWebGLBinding(Z,Q),U=G.createProjectionLayer(G0),Z.updateRenderState({layers:[U]}),J.setPixelRatio(1),J.setSize(U.textureWidth,U.textureHeight,!1),E=new S7(U.textureWidth,U.textureHeight,{format:1023,type:1009,depthTexture:new Y5(U.textureWidth,U.textureHeight,U0,void 0,void 0,void 0,void 0,void 0,void 0,Z0),stencilBuffer:R.stencil,colorSpace:J.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(H),K=null,Y=await Z.requestReferenceSpace(X),x0.setContext(Z),x0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return N.getDepthTexture()};function d(i){for(let Z0=0;Z0<i.removed.length;Z0++){let U0=i.removed[Z0],k0=C.indexOf(U0);if(k0>=0)C[k0]=null,M[k0].disconnect(U0)}for(let Z0=0;Z0<i.added.length;Z0++){let U0=i.added[Z0],k0=C.indexOf(U0);if(k0===-1){for(let A0=0;A0<M.length;A0++)if(A0>=C.length){C.push(U0),k0=A0;break}else if(C[A0]===null){C[A0]=U0,k0=A0;break}if(k0===-1)break}let G0=M[k0];if(G0)G0.connect(U0)}}let s=new A,l=new A;function e(i,Z0,U0){s.setFromMatrixPosition(Z0.matrixWorld),l.setFromMatrixPosition(U0.matrixWorld);let k0=s.distanceTo(l),G0=Z0.projectionMatrix.elements,A0=U0.projectionMatrix.elements,t0=G0[14]/(G0[10]-1),h0=G0[14]/(G0[10]+1),T=(G0[9]+1)/G0[5],Z6=(G0[9]-1)/G0[5],g0=(G0[8]-1)/G0[0],e0=(A0[8]+1)/A0[0],L0=t0*g0,l0=t0*e0,T0=k0/(-g0+e0),S0=T0*-g0;Z0.matrixWorld.decompose(i.position,i.quaternion,i.scale),i.translateX(S0),i.translateZ(T0),i.matrixWorld.compose(i.position,i.quaternion,i.scale),i.matrixWorldInverse.copy(i.matrixWorld).invert();let Q6=t0+T0,w=h0+T0,z=L0-S0,g=l0+(k0-S0),a=T*h0/w*Q6,r=Z6*h0/w*Q6;i.projectionMatrix.makePerspective(z,g,a,r,Q6,w),i.projectionMatrixInverse.copy(i.projectionMatrix).invert()}function m(i,Z0){if(Z0===null)i.matrixWorld.copy(i.matrix);else i.matrixWorld.multiplyMatrices(Z0.matrixWorld,i.matrix);i.matrixWorldInverse.copy(i.matrixWorld).invert()}this.updateCamera=function(i){if(Z===null)return;if(N.texture!==null)i.near=N.depthNear,i.far=N.depthFar;if(D.near=S.near=L.near=i.near,D.far=S.far=L.far=i.far,k!==D.near||j!==D.far)Z.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,j=D.far,L.near=k,L.far=j,S.near=k,S.far=j,L.updateProjectionMatrix(),S.updateProjectionMatrix(),i.updateProjectionMatrix();let Z0=i.parent,U0=D.cameras;m(D,Z0);for(let k0=0;k0<U0.length;k0++)m(U0[k0],Z0);if(U0.length===2)e(D,L,S);else D.projectionMatrix.copy(L.projectionMatrix);q0(i,D,Z0)};function q0(i,Z0,U0){if(U0===null)i.matrix.copy(Z0.matrixWorld);else i.matrix.copy(U0.matrixWorld),i.matrix.invert(),i.matrix.multiply(Z0.matrixWorld);if(i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0),i.projectionMatrix.copy(Z0.projectionMatrix),i.projectionMatrixInverse.copy(Z0.projectionMatrixInverse),i.isPerspectiveCamera)i.fov=A8*2*Math.atan(1/i.projectionMatrix.elements[5]),i.zoom=1}this.getCamera=function(){return D},this.getFoveation=function(){if(U===null&&F===null)return;return H},this.setFoveation=function(i){if(H=i,U!==null)U.fixedFoveation=i;if(F!==null&&F.fixedFoveation!==void 0)F.fixedFoveation=i},this.hasDepthSensing=function(){return N.texture!==null},this.getDepthSensingMesh=function(){return N.getMesh(D)};let F0=null;function C0(i,Z0){if(q=Z0.getViewerPose(K||Y),O=Z0,q!==null){let U0=q.views;if(F!==null)J.setRenderTargetFramebuffer(E,F.framebuffer),J.setRenderTarget(E);let k0=!1;if(U0.length!==D.cameras.length)D.cameras.length=0,k0=!0;for(let A0=0;A0<U0.length;A0++){let t0=U0[A0],h0=null;if(F!==null)h0=F.getViewport(t0);else{let Z6=G.getViewSubImage(U,t0);if(h0=Z6.viewport,A0===0)J.setRenderTargetTextures(E,Z6.colorTexture,U.ignoreDepthValues?void 0:Z6.depthStencilTexture),J.setRenderTarget(E)}let T=b[A0];if(T===void 0)T=new B6,T.layers.enable(A0),T.viewport=new r0,b[A0]=T;if(T.matrix.fromArray(t0.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(t0.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(h0.x,h0.y,h0.width,h0.height),A0===0)D.matrix.copy(T.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);if(k0===!0)D.cameras.push(T)}let G0=Z.enabledFeatures;if(G0&&G0.includes("depth-sensing")){let A0=G.getDepthInformation(U0[0]);if(A0&&A0.isValid&&A0.texture)N.init(J,A0,Z.renderState)}}for(let U0=0;U0<M.length;U0++){let k0=C[U0],G0=M[U0];if(k0!==null&&G0!==void 0)G0.update(k0,Z0,K||Y)}if(F0)F0(i,Z0);if(Z0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Z0});O=null}let x0=new w$;x0.setAnimationLoop(C0),this.setAnimationLoop=function(i){F0=i},this.dispose=function(){}}}var n7=new e6,NK=new j0;function RK(J,Q){function $(V,E){if(V.matrixAutoUpdate===!0)V.updateMatrix();E.value.copy(V.matrix)}function Z(V,E){if(E.color.getRGB(V.fogColor.value,D$(J)),E.isFog)V.fogNear.value=E.near,V.fogFar.value=E.far;else if(E.isFogExp2)V.fogDensity.value=E.density}function W(V,E,M,C,I){if(E.isMeshBasicMaterial)Y(V,E);else if(E.isMeshLambertMaterial)Y(V,E);else if(E.isMeshToonMaterial)Y(V,E),U(V,E);else if(E.isMeshPhongMaterial)Y(V,E),G(V,E);else if(E.isMeshStandardMaterial){if(Y(V,E),F(V,E),E.isMeshPhysicalMaterial)O(V,E,I)}else if(E.isMeshMatcapMaterial)Y(V,E),N(V,E);else if(E.isMeshDepthMaterial)Y(V,E);else if(E.isMeshDistanceMaterial)Y(V,E),R(V,E);else if(E.isMeshNormalMaterial)Y(V,E);else if(E.isLineBasicMaterial){if(X(V,E),E.isLineDashedMaterial)H(V,E)}else if(E.isPointsMaterial)K(V,E,M,C);else if(E.isSpriteMaterial)q(V,E);else if(E.isShadowMaterial)V.color.value.copy(E.color),V.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function Y(V,E){if(V.opacity.value=E.opacity,E.color)V.diffuse.value.copy(E.color);if(E.emissive)V.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)V.map.value=E.map,$(E.map,V.mapTransform);if(E.alphaMap)V.alphaMap.value=E.alphaMap,$(E.alphaMap,V.alphaMapTransform);if(E.bumpMap){if(V.bumpMap.value=E.bumpMap,$(E.bumpMap,V.bumpMapTransform),V.bumpScale.value=E.bumpScale,E.side===1)V.bumpScale.value*=-1}if(E.normalMap){if(V.normalMap.value=E.normalMap,$(E.normalMap,V.normalMapTransform),V.normalScale.value.copy(E.normalScale),E.side===1)V.normalScale.value.negate()}if(E.displacementMap)V.displacementMap.value=E.displacementMap,$(E.displacementMap,V.displacementMapTransform),V.displacementScale.value=E.displacementScale,V.displacementBias.value=E.displacementBias;if(E.emissiveMap)V.emissiveMap.value=E.emissiveMap,$(E.emissiveMap,V.emissiveMapTransform);if(E.specularMap)V.specularMap.value=E.specularMap,$(E.specularMap,V.specularMapTransform);if(E.alphaTest>0)V.alphaTest.value=E.alphaTest;let M=Q.get(E),C=M.envMap,I=M.envMapRotation;if(C){if(V.envMap.value=C,n7.copy(I),n7.x*=-1,n7.y*=-1,n7.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1)n7.y*=-1,n7.z*=-1;V.envMapRotation.value.setFromMatrix4(NK.makeRotationFromEuler(n7)),V.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,V.reflectivity.value=E.reflectivity,V.ior.value=E.ior,V.refractionRatio.value=E.refractionRatio}if(E.lightMap)V.lightMap.value=E.lightMap,V.lightMapIntensity.value=E.lightMapIntensity,$(E.lightMap,V.lightMapTransform);if(E.aoMap)V.aoMap.value=E.aoMap,V.aoMapIntensity.value=E.aoMapIntensity,$(E.aoMap,V.aoMapTransform)}function X(V,E){if(V.diffuse.value.copy(E.color),V.opacity.value=E.opacity,E.map)V.map.value=E.map,$(E.map,V.mapTransform)}function H(V,E){V.dashSize.value=E.dashSize,V.totalSize.value=E.dashSize+E.gapSize,V.scale.value=E.scale}function K(V,E,M,C){if(V.diffuse.value.copy(E.color),V.opacity.value=E.opacity,V.size.value=E.size*M,V.scale.value=C*0.5,E.map)V.map.value=E.map,$(E.map,V.uvTransform);if(E.alphaMap)V.alphaMap.value=E.alphaMap,$(E.alphaMap,V.alphaMapTransform);if(E.alphaTest>0)V.alphaTest.value=E.alphaTest}function q(V,E){if(V.diffuse.value.copy(E.color),V.opacity.value=E.opacity,V.rotation.value=E.rotation,E.map)V.map.value=E.map,$(E.map,V.mapTransform);if(E.alphaMap)V.alphaMap.value=E.alphaMap,$(E.alphaMap,V.alphaMapTransform);if(E.alphaTest>0)V.alphaTest.value=E.alphaTest}function G(V,E){V.specular.value.copy(E.specular),V.shininess.value=Math.max(E.shininess,0.0001)}function U(V,E){if(E.gradientMap)V.gradientMap.value=E.gradientMap}function F(V,E){if(V.metalness.value=E.metalness,E.metalnessMap)V.metalnessMap.value=E.metalnessMap,$(E.metalnessMap,V.metalnessMapTransform);if(V.roughness.value=E.roughness,E.roughnessMap)V.roughnessMap.value=E.roughnessMap,$(E.roughnessMap,V.roughnessMapTransform);if(E.envMap)V.envMapIntensity.value=E.envMapIntensity}function O(V,E,M){if(V.ior.value=E.ior,E.sheen>0){if(V.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),V.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)V.sheenColorMap.value=E.sheenColorMap,$(E.sheenColorMap,V.sheenColorMapTransform);if(E.sheenRoughnessMap)V.sheenRoughnessMap.value=E.sheenRoughnessMap,$(E.sheenRoughnessMap,V.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(V.clearcoat.value=E.clearcoat,V.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)V.clearcoatMap.value=E.clearcoatMap,$(E.clearcoatMap,V.clearcoatMapTransform);if(E.clearcoatRoughnessMap)V.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,$(E.clearcoatRoughnessMap,V.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(V.clearcoatNormalMap.value=E.clearcoatNormalMap,$(E.clearcoatNormalMap,V.clearcoatNormalMapTransform),V.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===1)V.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)V.dispersion.value=E.dispersion;if(E.iridescence>0){if(V.iridescence.value=E.iridescence,V.iridescenceIOR.value=E.iridescenceIOR,V.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],V.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)V.iridescenceMap.value=E.iridescenceMap,$(E.iridescenceMap,V.iridescenceMapTransform);if(E.iridescenceThicknessMap)V.iridescenceThicknessMap.value=E.iridescenceThicknessMap,$(E.iridescenceThicknessMap,V.iridescenceThicknessMapTransform)}if(E.transmission>0){if(V.transmission.value=E.transmission,V.transmissionSamplerMap.value=M.texture,V.transmissionSamplerSize.value.set(M.width,M.height),E.transmissionMap)V.transmissionMap.value=E.transmissionMap,$(E.transmissionMap,V.transmissionMapTransform);if(V.thickness.value=E.thickness,E.thicknessMap)V.thicknessMap.value=E.thicknessMap,$(E.thicknessMap,V.thicknessMapTransform);V.attenuationDistance.value=E.attenuationDistance,V.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(V.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)V.anisotropyMap.value=E.anisotropyMap,$(E.anisotropyMap,V.anisotropyMapTransform)}if(V.specularIntensity.value=E.specularIntensity,V.specularColor.value.copy(E.specularColor),E.specularColorMap)V.specularColorMap.value=E.specularColorMap,$(E.specularColorMap,V.specularColorMapTransform);if(E.specularIntensityMap)V.specularIntensityMap.value=E.specularIntensityMap,$(E.specularIntensityMap,V.specularIntensityMapTransform)}function N(V,E){if(E.matcap)V.matcap.value=E.matcap}function R(V,E){let M=Q.get(E).light;V.referencePosition.value.setFromMatrixPosition(M.matrixWorld),V.nearDistance.value=M.shadow.camera.near,V.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function zK(J,Q,$,Z){let W={},Y={},X=[],H=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(M,C){let I=C.program;Z.uniformBlockBinding(M,I)}function q(M,C){let I=W[M.id];if(I===void 0)N(M),I=G(M),W[M.id]=I,M.addEventListener("dispose",V);let y=C.program;Z.updateUBOMapping(M,y);let L=Q.render.frame;if(Y[M.id]!==L)F(M),Y[M.id]=L}function G(M){let C=U();M.__bindingPointIndex=C;let I=J.createBuffer(),y=M.__size,L=M.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,y,L),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,C,I),I}function U(){for(let M=0;M<H;M++)if(X.indexOf(M)===-1)return X.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function F(M){let C=W[M.id],I=M.uniforms,y=M.__cache;J.bindBuffer(J.UNIFORM_BUFFER,C);for(let L=0,S=I.length;L<S;L++){let b=Array.isArray(I[L])?I[L]:[I[L]];for(let D=0,k=b.length;D<k;D++){let j=b[D];if(O(j,L,D,y)===!0){let u=j.__offset,n=Array.isArray(j.value)?j.value:[j.value],d=0;for(let s=0;s<n.length;s++){let l=n[s],e=R(l);if(typeof l==="number"||typeof l==="boolean")j.__data[0]=l,J.bufferSubData(J.UNIFORM_BUFFER,u+d,j.__data);else if(l.isMatrix3)j.__data[0]=l.elements[0],j.__data[1]=l.elements[1],j.__data[2]=l.elements[2],j.__data[3]=0,j.__data[4]=l.elements[3],j.__data[5]=l.elements[4],j.__data[6]=l.elements[5],j.__data[7]=0,j.__data[8]=l.elements[6],j.__data[9]=l.elements[7],j.__data[10]=l.elements[8],j.__data[11]=0;else l.toArray(j.__data,d),d+=e.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,u,j.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function O(M,C,I,y){let L=M.value,S=C+"_"+I;if(y[S]===void 0){if(typeof L==="number"||typeof L==="boolean")y[S]=L;else y[S]=L.clone();return!0}else{let b=y[S];if(typeof L==="number"||typeof L==="boolean"){if(b!==L)return y[S]=L,!0}else if(b.equals(L)===!1)return b.copy(L),!0}return!1}function N(M){let C=M.uniforms,I=0,y=16;for(let S=0,b=C.length;S<b;S++){let D=Array.isArray(C[S])?C[S]:[C[S]];for(let k=0,j=D.length;k<j;k++){let u=D[k],n=Array.isArray(u.value)?u.value:[u.value];for(let d=0,s=n.length;d<s;d++){let l=n[d],e=R(l),m=I%y;if(m!==0&&y-m<e.boundary)I+=y-m;u.__data=new Float32Array(e.storage/Float32Array.BYTES_PER_ELEMENT),u.__offset=I,I+=e.storage}}}let L=I%y;if(L>0)I+=y-L;return M.__size=I,M.__cache={},this}function R(M){let C={boundary:0,storage:0};if(typeof M==="number"||typeof M==="boolean")C.boundary=4,C.storage=4;else if(M.isVector2)C.boundary=8,C.storage=8;else if(M.isVector3||M.isColor)C.boundary=16,C.storage=12;else if(M.isVector4)C.boundary=16,C.storage=16;else if(M.isMatrix3)C.boundary=48,C.storage=48;else if(M.isMatrix4)C.boundary=64,C.storage=64;else if(M.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M);return C}function V(M){let C=M.target;C.removeEventListener("dispose",V);let I=X.indexOf(C.__bindingPointIndex);X.splice(I,1),J.deleteBuffer(W[C.id]),delete W[C.id],delete Y[C.id]}function E(){for(let M in W)J.deleteBuffer(W[M]);X=[],W={},Y={}}return{bind:K,update:q,dispose:E}}class X5{constructor(J={}){let{canvas:Q=_W(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:Y=!1,antialias:X=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:K=!1,powerPreference:q="default",failIfMajorPerformanceCaveat:G=!1}=J;this.isWebGLRenderer=!0;let U;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");U=$.getContextAttributes().alpha}else U=Y;let F=new Uint32Array(4),O=new Int32Array(4),N=null,R=null,V=[],E=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let M=this,C=!1,I=0,y=0,L=null,S=-1,b=null,D=new r0,k=new r0,j=null,u=new z0(0),n=0,d=Q.width,s=Q.height,l=1,e=null,m=null,q0=new r0(0,0,d,s),F0=new r0(0,0,d,s),C0=!1,x0=new o9,i=!1,Z0=!1,U0=new j0,k0=new A,G0=new r0,A0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},t0=!1;function h0(){return L===null?l:1}let T=$;function Z6(B,v){return Q.getContext(B,v)}try{let B={alpha:!0,depth:Z,stencil:W,antialias:X,premultipliedAlpha:H,preserveDrawingBuffer:K,powerPreference:q,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine","three.js r166");if(Q.addEventListener("webglcontextlost",o,!1),Q.addEventListener("webglcontextrestored",p,!1),Q.addEventListener("webglcontextcreationerror",c,!1),T===null){if(T=Z6("webgl2",B),T===null)if(Z6("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let g0,e0,L0,l0,T0,S0,Q6,w,z,g,a,r,t,B0,W0,Y0,y0,J0,N0,u0,_0,X0,I0,m0;function P(){g0=new xH(T),g0.init(),X0=new FK(T,g0),e0=new TH(T,g0,J,X0),L0=new qK(T),l0=new gH(T),T0=new r4,S0=new UK(T,g0,L0,T0,e0,X0,l0),Q6=new jH(M),w=new fH(M),z=new nW(T),I0=new PH(T,z),g=new hH(T,z,l0,I0),a=new uH(T,g,z,l0),N0=new pH(T,e0,S0),Y0=new SH(T0),r=new a4(M,Q6,w,g0,e0,I0,Y0),t=new RK(M,T0),B0=new e4,W0=new YK(g0),J0=new IH(M,Q6,w,L0,a,U,H),y0=new KK(M,a,e0),m0=new zK(T,l0,e0,L0),u0=new AH(T,g0,l0),_0=new bH(T,g0,l0),l0.programs=r.programs,M.capabilities=e0,M.extensions=g0,M.properties=T0,M.renderLists=B0,M.shadowMap=y0,M.state=L0,M.info=l0}P();let _=new p$(M,T);this.xr=_,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let B=g0.get("WEBGL_lose_context");if(B)B.loseContext()},this.forceContextRestore=function(){let B=g0.get("WEBGL_lose_context");if(B)B.restoreContext()},this.getPixelRatio=function(){return l},this.setPixelRatio=function(B){if(B===void 0)return;l=B,this.setSize(d,s,!1)},this.getSize=function(B){return B.set(d,s)},this.setSize=function(B,v,x=!0){if(_.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(d=B,s=v,Q.width=Math.floor(B*l),Q.height=Math.floor(v*l),x===!0)Q.style.width=B+"px",Q.style.height=v+"px";this.setViewport(0,0,B,v)},this.getDrawingBufferSize=function(B){return B.set(d*l,s*l).floor()},this.setDrawingBufferSize=function(B,v,x){d=B,s=v,l=x,Q.width=Math.floor(B*x),Q.height=Math.floor(v*x),this.setViewport(0,0,B,v)},this.getCurrentViewport=function(B){return B.copy(D)},this.getViewport=function(B){return B.copy(q0)},this.setViewport=function(B,v,x,h){if(B.isVector4)q0.set(B.x,B.y,B.z,B.w);else q0.set(B,v,x,h);L0.viewport(D.copy(q0).multiplyScalar(l).round())},this.getScissor=function(B){return B.copy(F0)},this.setScissor=function(B,v,x,h){if(B.isVector4)F0.set(B.x,B.y,B.z,B.w);else F0.set(B,v,x,h);L0.scissor(k.copy(F0).multiplyScalar(l).round())},this.getScissorTest=function(){return C0},this.setScissorTest=function(B){L0.setScissorTest(C0=B)},this.setOpaqueSort=function(B){e=B},this.setTransparentSort=function(B){m=B},this.getClearColor=function(B){return B.copy(J0.getClearColor())},this.setClearColor=function(){J0.setClearColor.apply(J0,arguments)},this.getClearAlpha=function(){return J0.getClearAlpha()},this.setClearAlpha=function(){J0.setClearAlpha.apply(J0,arguments)},this.clear=function(B=!0,v=!0,x=!0){let h=0;if(B){let f=!1;if(L!==null){let $0=L.texture.format;f=$0===1033||$0===1031||$0===1029}if(f){let $0=L.texture.type,K0=$0===1009||$0===1014||$0===1012||$0===1020||$0===1017||$0===1018,V0=J0.getClearColor(),E0=J0.getClearAlpha(),w0=V0.r,P0=V0.g,D0=V0.b;if(K0)F[0]=w0,F[1]=P0,F[2]=D0,F[3]=E0,T.clearBufferuiv(T.COLOR,0,F);else O[0]=w0,O[1]=P0,O[2]=D0,O[3]=E0,T.clearBufferiv(T.COLOR,0,O)}else h|=T.COLOR_BUFFER_BIT}if(v)h|=T.DEPTH_BUFFER_BIT;if(x)h|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);T.clear(h)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",o,!1),Q.removeEventListener("webglcontextrestored",p,!1),Q.removeEventListener("webglcontextcreationerror",c,!1),B0.dispose(),W0.dispose(),T0.dispose(),Q6.dispose(),w.dispose(),a.dispose(),I0.dispose(),m0.dispose(),r.dispose(),_.dispose(),_.removeEventListener("sessionstart",G6),_.removeEventListener("sessionend",D6),M6.stop()};function o(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function p(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let B=l0.autoReset,v=y0.enabled,x=y0.autoUpdate,h=y0.needsUpdate,f=y0.type;P(),l0.autoReset=B,y0.enabled=v,y0.autoUpdate=x,y0.needsUpdate=h,y0.type=f}function c(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function Q0(B){let v=B.target;v.removeEventListener("dispose",Q0),O0(v)}function O0(B){d0(B),T0.remove(B)}function d0(B){let v=T0.get(B).programs;if(v!==void 0){if(v.forEach(function(x){r.releaseProgram(x)}),B.isShaderMaterial)r.releaseShaderCache(B)}}this.renderBufferDirect=function(B,v,x,h,f,$0){if(v===null)v=A0;let K0=f.isMesh&&f.matrixWorld.determinant()<0,V0=YW(B,v,x,h,f);L0.setMaterial(h,K0);let E0=x.index,w0=1;if(h.wireframe===!0){if(E0=g.getWireframeAttribute(x),E0===void 0)return;w0=2}let P0=x.drawRange,D0=x.attributes.position,n0=P0.start*w0,Y6=(P0.start+P0.count)*w0;if($0!==null)n0=Math.max(n0,$0.start*w0),Y6=Math.min(Y6,($0.start+$0.count)*w0);if(E0!==null)n0=Math.max(n0,0),Y6=Math.min(Y6,E0.count);else if(D0!==void 0&&D0!==null)n0=Math.max(n0,0),Y6=Math.min(Y6,D0.count);let X6=Y6-n0;if(X6<0||X6===1/0)return;I0.setup(f,h,V0,x,E0);let j6,s0=u0;if(E0!==null)j6=z.get(E0),s0=_0,s0.setIndex(j6);if(f.isMesh)if(h.wireframe===!0)L0.setLineWidth(h.wireframeLinewidth*h0()),s0.setMode(T.LINES);else s0.setMode(T.TRIANGLES);else if(f.isLine){let R0=h.linewidth;if(R0===void 0)R0=1;if(L0.setLineWidth(R0*h0()),f.isLineSegments)s0.setMode(T.LINES);else if(f.isLineLoop)s0.setMode(T.LINE_LOOP);else s0.setMode(T.LINE_STRIP)}else if(f.isPoints)s0.setMode(T.POINTS);else if(f.isSprite)s0.setMode(T.TRIANGLES);if(f.isBatchedMesh)if(f._multiDrawInstances!==null)s0.renderMultiDrawInstances(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount,f._multiDrawInstances);else if(!g0.get("WEBGL_multi_draw")){let{_multiDrawStarts:R0,_multiDrawCounts:k6,_multiDrawCount:i0}=f,n6=E0?z.get(E0).bytesPerElement:1,K8=T0.get(h).currentProgram.getUniforms();for(let y6=0;y6<i0;y6++)K8.setValue(T,"_gl_DrawID",y6),s0.render(R0[y6]/n6,k6[y6])}else s0.renderMultiDraw(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount);else if(f.isInstancedMesh)s0.renderInstances(n0,X6,f.count);else if(x.isInstancedBufferGeometry){let R0=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,k6=Math.min(x.instanceCount,R0);s0.renderInstances(n0,X6,k6)}else s0.render(n0,X6)};function W6(B,v,x){if(B.transparent===!0&&B.side===2&&B.forceSinglePass===!1)B.side=1,B.needsUpdate=!0,G9(B,v,x),B.side=0,B.needsUpdate=!0,G9(B,v,x),B.side=2;else G9(B,v,x)}this.compile=function(B,v,x=null){if(x===null)x=B;if(R=W0.get(x),R.init(v),E.push(R),x.traverseVisible(function(f){if(f.isLight&&f.layers.test(v.layers)){if(R.pushLight(f),f.castShadow)R.pushShadow(f)}}),B!==x)B.traverseVisible(function(f){if(f.isLight&&f.layers.test(v.layers)){if(R.pushLight(f),f.castShadow)R.pushShadow(f)}});R.setupLights();let h=new Set;return B.traverse(function(f){let $0=f.material;if($0)if(Array.isArray($0))for(let K0=0;K0<$0.length;K0++){let V0=$0[K0];W6(V0,x,f),h.add(V0)}else W6($0,x,f),h.add($0)}),E.pop(),R=null,h},this.compileAsync=function(B,v,x=null){let h=this.compile(B,v,x);return new Promise((f)=>{function $0(){if(h.forEach(function(K0){if(T0.get(K0).currentProgram.isReady())h.delete(K0)}),h.size===0){f(B);return}setTimeout($0,10)}if(g0.get("KHR_parallel_shader_compile")!==null)$0();else setTimeout($0,10)})};let q6=null;function b0(B){if(q6)q6(B)}function G6(){M6.stop()}function D6(){M6.start()}let M6=new w$;if(M6.setAnimationLoop(b0),typeof self<"u")M6.setContext(self);this.setAnimationLoop=function(B){q6=B,_.setAnimationLoop(B),B===null?M6.stop():M6.start()},_.addEventListener("sessionstart",G6),_.addEventListener("sessionend",D6),this.render=function(B,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(_.enabled===!0&&_.isPresenting===!0){if(_.cameraAutoUpdate===!0)_.updateCamera(v);v=_.getCamera()}if(B.isScene===!0)B.onBeforeRender(M,B,v,L);if(R=W0.get(B,E.length),R.init(v),E.push(R),U0.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),x0.setFromProjectionMatrix(U0),Z0=this.localClippingEnabled,i=Y0.init(this.clippingPlanes,Z0),N=B0.get(B,V.length),N.init(),V.push(N),_.enabled===!0&&_.isPresenting===!0){let $0=M.xr.getDepthSensingMesh();if($0!==null)H7($0,v,-1/0,M.sortObjects)}if(H7(B,v,0,M.sortObjects),N.finish(),M.sortObjects===!0)N.sort(e,m);if(t0=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,t0)J0.addToRenderList(N,B);if(this.info.render.frame++,i===!0)Y0.beginShadows();let x=R.state.shadowsArray;if(y0.render(x,B,v),i===!0)Y0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:h,transmissive:f}=N;if(R.setupLights(),v.isArrayCamera){let $0=v.cameras;if(f.length>0)for(let K0=0,V0=$0.length;K0<V0;K0++){let E0=$0[K0];p8(h,f,B,E0)}if(t0)J0.render(B);for(let K0=0,V0=$0.length;K0<V0;K0++){let E0=$0[K0];p7(N,B,E0,E0.viewport)}}else{if(f.length>0)p8(h,f,B,v);if(t0)J0.render(B);p7(N,B,v)}if(L!==null)S0.updateMultisampleRenderTarget(L),S0.updateRenderTargetMipmap(L);if(B.isScene===!0)B.onAfterRender(M,B,v);if(I0.resetDefaultState(),S=-1,b=null,E.pop(),E.length>0){if(R=E[E.length-1],i===!0)Y0.setGlobalState(M.clippingPlanes,R.state.camera)}else R=null;if(V.pop(),V.length>0)N=V[V.length-1];else N=null};function H7(B,v,x,h){if(B.visible===!1)return;if(B.layers.test(v.layers)){if(B.isGroup)x=B.renderOrder;else if(B.isLOD){if(B.autoUpdate===!0)B.update(v)}else if(B.isLight){if(R.pushLight(B),B.castShadow)R.pushShadow(B)}else if(B.isSprite){if(!B.frustumCulled||x0.intersectsSprite(B)){if(h)G0.setFromMatrixPosition(B.matrixWorld).applyMatrix4(U0);let K0=a.update(B),V0=B.material;if(V0.visible)N.push(B,K0,V0,x,G0.z,null)}}else if(B.isMesh||B.isLine||B.isPoints){if(!B.frustumCulled||x0.intersectsObject(B)){let K0=a.update(B),V0=B.material;if(h){if(B.boundingSphere!==void 0){if(B.boundingSphere===null)B.computeBoundingSphere();G0.copy(B.boundingSphere.center)}else{if(K0.boundingSphere===null)K0.computeBoundingSphere();G0.copy(K0.boundingSphere.center)}G0.applyMatrix4(B.matrixWorld).applyMatrix4(U0)}if(Array.isArray(V0)){let E0=K0.groups;for(let w0=0,P0=E0.length;w0<P0;w0++){let D0=E0[w0],n0=V0[D0.materialIndex];if(n0&&n0.visible)N.push(B,K0,n0,x,G0.z,D0)}}else if(V0.visible)N.push(B,K0,V0,x,G0.z,null)}}}let $0=B.children;for(let K0=0,V0=$0.length;K0<V0;K0++)H7($0[K0],v,x,h)}function p7(B,v,x,h){let{opaque:f,transmissive:$0,transparent:K0}=B;if(R.setupLightsView(x),i===!0)Y0.setGlobalState(M.clippingPlanes,x);if(h)L0.viewport(D.copy(h));if(f.length>0)q9(f,v,x);if($0.length>0)q9($0,v,x);if(K0.length>0)q9(K0,v,x);L0.buffers.depth.setTest(!0),L0.buffers.depth.setMask(!0),L0.buffers.color.setMask(!0),L0.setPolygonOffset(!1)}function p8(B,v,x,h){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[h.id]===void 0)R.state.transmissionRenderTarget[h.id]=new S7(1,1,{generateMipmaps:!0,type:g0.has("EXT_color_buffer_half_float")||g0.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:c0.workingColorSpace});let $0=R.state.transmissionRenderTarget[h.id],K0=h.viewport||D;$0.setSize(K0.z,K0.w);let V0=M.getRenderTarget();if(M.setRenderTarget($0),M.getClearColor(u),n=M.getClearAlpha(),n<1)M.setClearColor(16777215,0.5);if(t0)J0.render(x);else M.clear();let E0=M.toneMapping;M.toneMapping=0;let w0=h.viewport;if(h.viewport!==void 0)h.viewport=void 0;if(R.setupLightsView(h),i===!0)Y0.setGlobalState(M.clippingPlanes,h);if(q9(B,x,h),S0.updateMultisampleRenderTarget($0),S0.updateRenderTargetMipmap($0),g0.has("WEBGL_multisampled_render_to_texture")===!1){let P0=!1;for(let D0=0,n0=v.length;D0<n0;D0++){let Y6=v[D0],X6=Y6.object,j6=Y6.geometry,s0=Y6.material,R0=Y6.group;if(s0.side===2&&X6.layers.test(h.layers)){let k6=s0.side;s0.side=1,s0.needsUpdate=!0,i5(X6,x,h,j6,s0,R0),s0.side=k6,s0.needsUpdate=!0,P0=!0}}if(P0===!0)S0.updateMultisampleRenderTarget($0),S0.updateRenderTargetMipmap($0)}if(M.setRenderTarget(V0),M.setClearColor(u,n),w0!==void 0)h.viewport=w0;M.toneMapping=E0}function q9(B,v,x){let h=v.isScene===!0?v.overrideMaterial:null;for(let f=0,$0=B.length;f<$0;f++){let K0=B[f],V0=K0.object,E0=K0.geometry,w0=h===null?K0.material:h,P0=K0.group;if(V0.layers.test(x.layers))i5(V0,v,x,E0,w0,P0)}}function i5(B,v,x,h,f,$0){if(B.onBeforeRender(M,v,x,h,f,$0),B.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),f.transparent===!0&&f.side===2&&f.forceSinglePass===!1)f.side=1,f.needsUpdate=!0,M.renderBufferDirect(x,v,h,f,B,$0),f.side=0,f.needsUpdate=!0,M.renderBufferDirect(x,v,h,f,B,$0),f.side=2;else M.renderBufferDirect(x,v,h,f,B,$0);B.onAfterRender(M,v,x,h,f,$0)}function G9(B,v,x){if(v.isScene!==!0)v=A0;let h=T0.get(B),f=R.state.lights,$0=R.state.shadowsArray,K0=f.state.version,V0=r.getParameters(B,f.state,$0,v,x),E0=r.getProgramCacheKey(V0),w0=h.programs;if(h.environment=B.isMeshStandardMaterial?v.environment:null,h.fog=v.fog,h.envMap=(B.isMeshStandardMaterial?w:Q6).get(B.envMap||h.environment),h.envMapRotation=h.environment!==null&&B.envMap===null?v.environmentRotation:B.envMapRotation,w0===void 0)B.addEventListener("dispose",Q0),w0=new Map,h.programs=w0;let P0=w0.get(E0);if(P0!==void 0){if(h.currentProgram===P0&&h.lightsStateVersion===K0)return a5(B,V0),P0}else V0.uniforms=r.getUniforms(B),B.onBeforeCompile(V0,M),P0=r.acquireProgram(V0,E0),w0.set(E0,P0),h.uniforms=V0.uniforms;let D0=h.uniforms;if(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)D0.clippingPlanes=Y0.uniform;if(a5(B,V0),h.needsLights=HW(B),h.lightsStateVersion=K0,h.needsLights)D0.ambientLightColor.value=f.state.ambient,D0.lightProbe.value=f.state.probe,D0.directionalLights.value=f.state.directional,D0.directionalLightShadows.value=f.state.directionalShadow,D0.spotLights.value=f.state.spot,D0.spotLightShadows.value=f.state.spotShadow,D0.rectAreaLights.value=f.state.rectArea,D0.ltc_1.value=f.state.rectAreaLTC1,D0.ltc_2.value=f.state.rectAreaLTC2,D0.pointLights.value=f.state.point,D0.pointLightShadows.value=f.state.pointShadow,D0.hemisphereLights.value=f.state.hemi,D0.directionalShadowMap.value=f.state.directionalShadowMap,D0.directionalShadowMatrix.value=f.state.directionalShadowMatrix,D0.spotShadowMap.value=f.state.spotShadowMap,D0.spotLightMatrix.value=f.state.spotLightMatrix,D0.spotLightMap.value=f.state.spotLightMap,D0.pointShadowMap.value=f.state.pointShadowMap,D0.pointShadowMatrix.value=f.state.pointShadowMatrix;return h.currentProgram=P0,h.uniformsList=null,P0}function o5(B){if(B.uniformsList===null){let v=B.currentProgram.getUniforms();B.uniformsList=r8.seqWithValue(v.seq,B.uniforms)}return B.uniformsList}function a5(B,v){let x=T0.get(B);x.outputColorSpace=v.outputColorSpace,x.batching=v.batching,x.batchingColor=v.batchingColor,x.instancing=v.instancing,x.instancingColor=v.instancingColor,x.instancingMorph=v.instancingMorph,x.skinning=v.skinning,x.morphTargets=v.morphTargets,x.morphNormals=v.morphNormals,x.morphColors=v.morphColors,x.morphTargetsCount=v.morphTargetsCount,x.numClippingPlanes=v.numClippingPlanes,x.numIntersection=v.numClipIntersection,x.vertexAlphas=v.vertexAlphas,x.vertexTangents=v.vertexTangents,x.toneMapping=v.toneMapping}function YW(B,v,x,h,f){if(v.isScene!==!0)v=A0;S0.resetTextureUnits();let $0=v.fog,K0=h.isMeshStandardMaterial?v.environment:null,V0=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:"srgb-linear",E0=(h.isMeshStandardMaterial?w:Q6).get(h.envMap||K0),w0=h.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,P0=!!x.attributes.tangent&&(!!h.normalMap||h.anisotropy>0),D0=!!x.morphAttributes.position,n0=!!x.morphAttributes.normal,Y6=!!x.morphAttributes.color,X6=0;if(h.toneMapped){if(L===null||L.isXRRenderTarget===!0)X6=M.toneMapping}let j6=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,s0=j6!==void 0?j6.length:0,R0=T0.get(h),k6=R.state.lights;if(i===!0){if(Z0===!0||B!==b){let b6=B===b&&h.id===S;Y0.setState(h,B,b6)}}let i0=!1;if(h.version===R0.__version){if(R0.needsLights&&R0.lightsStateVersion!==k6.state.version)i0=!0;else if(R0.outputColorSpace!==V0)i0=!0;else if(f.isBatchedMesh&&R0.batching===!1)i0=!0;else if(!f.isBatchedMesh&&R0.batching===!0)i0=!0;else if(f.isBatchedMesh&&R0.batchingColor===!0&&f.colorTexture===null)i0=!0;else if(f.isBatchedMesh&&R0.batchingColor===!1&&f.colorTexture!==null)i0=!0;else if(f.isInstancedMesh&&R0.instancing===!1)i0=!0;else if(!f.isInstancedMesh&&R0.instancing===!0)i0=!0;else if(f.isSkinnedMesh&&R0.skinning===!1)i0=!0;else if(!f.isSkinnedMesh&&R0.skinning===!0)i0=!0;else if(f.isInstancedMesh&&R0.instancingColor===!0&&f.instanceColor===null)i0=!0;else if(f.isInstancedMesh&&R0.instancingColor===!1&&f.instanceColor!==null)i0=!0;else if(f.isInstancedMesh&&R0.instancingMorph===!0&&f.morphTexture===null)i0=!0;else if(f.isInstancedMesh&&R0.instancingMorph===!1&&f.morphTexture!==null)i0=!0;else if(R0.envMap!==E0)i0=!0;else if(h.fog===!0&&R0.fog!==$0)i0=!0;else if(R0.numClippingPlanes!==void 0&&(R0.numClippingPlanes!==Y0.numPlanes||R0.numIntersection!==Y0.numIntersection))i0=!0;else if(R0.vertexAlphas!==w0)i0=!0;else if(R0.vertexTangents!==P0)i0=!0;else if(R0.morphTargets!==D0)i0=!0;else if(R0.morphNormals!==n0)i0=!0;else if(R0.morphColors!==Y6)i0=!0;else if(R0.toneMapping!==X6)i0=!0;else if(R0.morphTargetsCount!==s0)i0=!0}else i0=!0,R0.__version=h.version;let n6=R0.currentProgram;if(i0===!0)n6=G9(h,v,f);let K8=!1,y6=!1,GJ=!1,U6=n6.getUniforms(),D7=R0.uniforms;if(L0.useProgram(n6.program))K8=!0,y6=!0,GJ=!0;if(h.id!==S)S=h.id,y6=!0;if(K8||b!==B){U6.setValue(T,"projectionMatrix",B.projectionMatrix),U6.setValue(T,"viewMatrix",B.matrixWorldInverse);let b6=U6.map.cameraPosition;if(b6!==void 0)b6.setValue(T,k0.setFromMatrixPosition(B.matrixWorld));if(e0.logarithmicDepthBuffer)U6.setValue(T,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2));if(h.isMeshPhongMaterial||h.isMeshToonMaterial||h.isMeshLambertMaterial||h.isMeshBasicMaterial||h.isMeshStandardMaterial||h.isShaderMaterial)U6.setValue(T,"isOrthographic",B.isOrthographicCamera===!0);if(b!==B)b=B,y6=!0,GJ=!0}if(f.isSkinnedMesh){U6.setOptional(T,f,"bindMatrix"),U6.setOptional(T,f,"bindMatrixInverse");let b6=f.skeleton;if(b6){if(b6.boneTexture===null)b6.computeBoneTexture();U6.setValue(T,"boneTexture",b6.boneTexture,S0)}}if(f.isBatchedMesh){if(U6.setOptional(T,f,"batchingTexture"),U6.setValue(T,"batchingTexture",f._matricesTexture,S0),U6.setOptional(T,f,"batchingIdTexture"),U6.setValue(T,"batchingIdTexture",f._indirectTexture,S0),U6.setOptional(T,f,"batchingColorTexture"),f._colorsTexture!==null)U6.setValue(T,"batchingColorTexture",f._colorsTexture,S0)}let UJ=x.morphAttributes;if(UJ.position!==void 0||UJ.normal!==void 0||UJ.color!==void 0)N0.update(f,x,n6);if(y6||R0.receiveShadow!==f.receiveShadow)R0.receiveShadow=f.receiveShadow,U6.setValue(T,"receiveShadow",f.receiveShadow);if(h.isMeshGouraudMaterial&&h.envMap!==null)D7.envMap.value=E0,D7.flipEnvMap.value=E0.isCubeTexture&&E0.isRenderTargetTexture===!1?-1:1;if(h.isMeshStandardMaterial&&h.envMap===null&&v.environment!==null)D7.envMapIntensity.value=v.environmentIntensity;if(y6){if(U6.setValue(T,"toneMappingExposure",M.toneMappingExposure),R0.needsLights)XW(D7,GJ);if($0&&h.fog===!0)t.refreshFogUniforms(D7,$0);t.refreshMaterialUniforms(D7,h,l,s,R.state.transmissionRenderTarget[B.id]),r8.upload(T,o5(R0),D7,S0)}if(h.isShaderMaterial&&h.uniformsNeedUpdate===!0)r8.upload(T,o5(R0),D7,S0),h.uniformsNeedUpdate=!1;if(h.isSpriteMaterial)U6.setValue(T,"center",f.center);if(U6.setValue(T,"modelViewMatrix",f.modelViewMatrix),U6.setValue(T,"normalMatrix",f.normalMatrix),U6.setValue(T,"modelMatrix",f.matrixWorld),h.isShaderMaterial||h.isRawShaderMaterial){let b6=h.uniformsGroups;for(let FJ=0,KW=b6.length;FJ<KW;FJ++){let r5=b6[FJ];m0.update(r5,n6),m0.bind(r5,n6)}}return n6}function XW(B,v){B.ambientLightColor.needsUpdate=v,B.lightProbe.needsUpdate=v,B.directionalLights.needsUpdate=v,B.directionalLightShadows.needsUpdate=v,B.pointLights.needsUpdate=v,B.pointLightShadows.needsUpdate=v,B.spotLights.needsUpdate=v,B.spotLightShadows.needsUpdate=v,B.rectAreaLights.needsUpdate=v,B.hemisphereLights.needsUpdate=v}function HW(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}if(this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(B,v,x){T0.get(B.texture).__webglTexture=v,T0.get(B.depthTexture).__webglTexture=x;let h=T0.get(B);if(h.__hasExternalTextures=!0,h.__autoAllocateDepthBuffer=x===void 0,!h.__autoAllocateDepthBuffer){if(g0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),h.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(B,v){let x=T0.get(B);x.__webglFramebuffer=v,x.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(B,v=0,x=0){L=B,I=v,y=x;let h=!0,f=null,$0=!1,K0=!1;if(B){let E0=T0.get(B);if(E0.__useDefaultFramebuffer!==void 0)L0.bindFramebuffer(T.FRAMEBUFFER,null),h=!1;else if(E0.__webglFramebuffer===void 0)S0.setupRenderTarget(B);else if(E0.__hasExternalTextures)S0.rebindTextures(B,T0.get(B.texture).__webglTexture,T0.get(B.depthTexture).__webglTexture);let w0=B.texture;if(w0.isData3DTexture||w0.isDataArrayTexture||w0.isCompressedArrayTexture)K0=!0;let P0=T0.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget){if(Array.isArray(P0[v]))f=P0[v][x];else f=P0[v];$0=!0}else if(B.samples>0&&S0.useMultisampledRTT(B)===!1)f=T0.get(B).__webglMultisampledFramebuffer;else if(Array.isArray(P0))f=P0[x];else f=P0;D.copy(B.viewport),k.copy(B.scissor),j=B.scissorTest}else D.copy(q0).multiplyScalar(l).floor(),k.copy(F0).multiplyScalar(l).floor(),j=C0;if(L0.bindFramebuffer(T.FRAMEBUFFER,f)&&h)L0.drawBuffers(B,f);if(L0.viewport(D),L0.scissor(k),L0.setScissorTest(j),$0){let E0=T0.get(B.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+v,E0.__webglTexture,x)}else if(K0){let E0=T0.get(B.texture),w0=v||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,E0.__webglTexture,x||0,w0)}S=-1},this.readRenderTargetPixels=function(B,v,x,h,f,$0,K0){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V0=T0.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&K0!==void 0)V0=V0[K0];if(V0){L0.bindFramebuffer(T.FRAMEBUFFER,V0);try{let E0=B.texture,w0=E0.format,P0=E0.type;if(!e0.textureFormatReadable(w0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!e0.textureTypeReadable(P0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=B.width-h&&(x>=0&&x<=B.height-f))T.readPixels(v,x,h,f,X0.convert(w0),X0.convert(P0),$0)}finally{let E0=L!==null?T0.get(L).__webglFramebuffer:null;L0.bindFramebuffer(T.FRAMEBUFFER,E0)}}},this.readRenderTargetPixelsAsync=async function(B,v,x,h,f,$0,K0){if(!(B&&B.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V0=T0.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&K0!==void 0)V0=V0[K0];if(V0){L0.bindFramebuffer(T.FRAMEBUFFER,V0);try{let E0=B.texture,w0=E0.format,P0=E0.type;if(!e0.textureFormatReadable(w0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!e0.textureTypeReadable(P0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(v>=0&&v<=B.width-h&&(x>=0&&x<=B.height-f)){let D0=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,D0),T.bufferData(T.PIXEL_PACK_BUFFER,$0.byteLength,T.STREAM_READ),T.readPixels(v,x,h,f,X0.convert(w0),X0.convert(P0),0),T.flush();let n0=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await wW(T,n0,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,D0),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,$0)}finally{T.deleteBuffer(D0),T.deleteSync(n0)}return $0}}finally{let E0=L!==null?T0.get(L).__webglFramebuffer:null;L0.bindFramebuffer(T.FRAMEBUFFER,E0)}}},this.copyFramebufferToTexture=function(B,v=null,x=0){if(B.isTexture!==!0)console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),v=arguments[0]||null,B=arguments[1];let h=Math.pow(2,-x),f=Math.floor(B.image.width*h),$0=Math.floor(B.image.height*h),K0=v!==null?v.x:0,V0=v!==null?v.y:0;S0.setTexture2D(B,0),T.copyTexSubImage2D(T.TEXTURE_2D,x,0,0,K0,V0,f,$0),L0.unbindTexture()},this.copyTextureToTexture=function(B,v,x=null,h=null,f=0){if(B.isTexture!==!0)console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),h=arguments[0]||null,B=arguments[1],v=arguments[2],f=arguments[3]||0,x=null;let $0,K0,V0,E0,w0,P0;if(x!==null)$0=x.max.x-x.min.x,K0=x.max.y-x.min.y,V0=x.min.x,E0=x.min.y;else $0=B.image.width,K0=B.image.height,V0=0,E0=0;if(h!==null)w0=h.x,P0=h.y;else w0=0,P0=0;let D0=X0.convert(v.format),n0=X0.convert(v.type);S0.setTexture2D(v,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,v.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,v.unpackAlignment);let Y6=T.getParameter(T.UNPACK_ROW_LENGTH),X6=T.getParameter(T.UNPACK_IMAGE_HEIGHT),j6=T.getParameter(T.UNPACK_SKIP_PIXELS),s0=T.getParameter(T.UNPACK_SKIP_ROWS),R0=T.getParameter(T.UNPACK_SKIP_IMAGES),k6=B.isCompressedTexture?B.mipmaps[f]:B.image;if(T.pixelStorei(T.UNPACK_ROW_LENGTH,k6.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,k6.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,V0),T.pixelStorei(T.UNPACK_SKIP_ROWS,E0),B.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,f,w0,P0,$0,K0,D0,n0,k6.data);else if(B.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,f,w0,P0,k6.width,k6.height,D0,k6.data);else T.texSubImage2D(T.TEXTURE_2D,f,w0,P0,$0,K0,D0,n0,k6);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,Y6),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,X6),T.pixelStorei(T.UNPACK_SKIP_PIXELS,j6),T.pixelStorei(T.UNPACK_SKIP_ROWS,s0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,R0),f===0&&v.generateMipmaps)T.generateMipmap(T.TEXTURE_2D);L0.unbindTexture()},this.copyTextureToTexture3D=function(B,v,x=null,h=null,f=0){if(B.isTexture!==!0)console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),x=arguments[0]||null,h=arguments[1]||null,B=arguments[2],v=arguments[3],f=arguments[4]||0;let $0,K0,V0,E0,w0,P0,D0,n0,Y6,X6=B.isCompressedTexture?B.mipmaps[f]:B.image;if(x!==null)$0=x.max.x-x.min.x,K0=x.max.y-x.min.y,V0=x.max.z-x.min.z,E0=x.min.x,w0=x.min.y,P0=x.min.z;else $0=X6.width,K0=X6.height,V0=X6.depth,E0=0,w0=0,P0=0;if(h!==null)D0=h.x,n0=h.y,Y6=h.z;else D0=0,n0=0,Y6=0;let j6=X0.convert(v.format),s0=X0.convert(v.type),R0;if(v.isData3DTexture)S0.setTexture3D(v,0),R0=T.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)S0.setTexture2DArray(v,0),R0=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,v.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,v.unpackAlignment);let k6=T.getParameter(T.UNPACK_ROW_LENGTH),i0=T.getParameter(T.UNPACK_IMAGE_HEIGHT),n6=T.getParameter(T.UNPACK_SKIP_PIXELS),K8=T.getParameter(T.UNPACK_SKIP_ROWS),y6=T.getParameter(T.UNPACK_SKIP_IMAGES);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,X6.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,X6.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,E0),T.pixelStorei(T.UNPACK_SKIP_ROWS,w0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,P0),B.isDataTexture||B.isData3DTexture)T.texSubImage3D(R0,f,D0,n0,Y6,$0,K0,V0,j6,s0,X6.data);else if(v.isCompressedArrayTexture)T.compressedTexSubImage3D(R0,f,D0,n0,Y6,$0,K0,V0,j6,X6.data);else T.texSubImage3D(R0,f,D0,n0,Y6,$0,K0,V0,j6,s0,X6);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,k6),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,i0),T.pixelStorei(T.UNPACK_SKIP_PIXELS,n6),T.pixelStorei(T.UNPACK_SKIP_ROWS,K8),T.pixelStorei(T.UNPACK_SKIP_IMAGES,y6),f===0&&v.generateMipmaps)T.generateMipmap(R0);L0.unbindTexture()},this.initRenderTarget=function(B){if(T0.get(B).__webglFramebuffer===void 0)S0.setupRenderTarget(B)},this.initTexture=function(B){if(B.isCubeTexture)S0.setTextureCube(B,0);else if(B.isData3DTexture)S0.setTexture3D(B,0);else if(B.isDataArrayTexture||B.isCompressedArrayTexture)S0.setTexture2DArray(B,0);else S0.setTexture2D(B,0);L0.unbindTexture()},this.resetState=function(){I=0,y=0,L=null,L0.reset(),I0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=J==="display-p3"?"display-p3":"srgb",Q.unpackColorSpace=c0.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}}class H5 extends J6{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new e6,this.environmentIntensity=1,this.environmentRotation=new e6,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class t9{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=t6()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}get updateRange(){return rJ("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=t6();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=t6();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var P6=new A;class $9{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)P6.fromBufferAttribute(this,Q),P6.applyMatrix4(J),this.setXYZ(Q,P6.x,P6.y,P6.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)P6.fromBufferAttribute(this,Q),P6.applyNormalMatrix(J),this.setXYZ(Q,P6.x,P6.y,P6.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)P6.fromBufferAttribute(this,Q),P6.transformDirection(J),this.setXYZ(Q,P6.x,P6.y,P6.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=a6($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=a0($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=a6(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=a6(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=a6(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=a6(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=a0(Q,this.array),$=a0($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=a0(Q,this.array),$=a0($,this.array),Z=a0(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=a0(Q,this.array),$=a0($,this.array),Z=a0(Z,this.array),W=a0(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return new H6(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new $9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var uQ=new A,mQ=new r0,lQ=new r0,BK=new A,dQ=new j0,j9=new A,hJ=new p6,cQ=new j0,bJ=new f7;class K5 extends V6{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new j0,this.bindMatrixInverse=new j0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new h6;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,j9),this.boundingBox.expandByPoint(j9)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new p6;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,j9),this.boundingSphere.expandByPoint(j9)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(hJ.copy(this.boundingSphere),hJ.applyMatrix4(Z),J.ray.intersectsSphere(hJ)===!1)return;if(cQ.copy(Z).invert(),bJ.copy(J.ray).applyMatrix4(cQ),this.boundingBox!==null){if(bJ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,bJ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new r0,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;mQ.fromBufferAttribute(Z.attributes.skinIndex,J),lQ.fromBufferAttribute(Z.attributes.skinWeight,J),uQ.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let W=0;W<4;W++){let Y=lQ.getComponent(W);if(Y!==0){let X=mQ.getComponent(W);dQ.multiplyMatrices($.bones[X].matrixWorld,$.boneInverses[X]),Q.addScaledVector(BK.copy(uQ).applyMatrix4(dQ),Y)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class e9 extends J6{constructor(){super();this.isBone=!0,this.type="Bone"}}class q5 extends E6{constructor(J=null,Q=1,$=1,Z,W,Y,X,H,K=1003,q=1003,G,U){super(null,Y,X,H,K,q,Z,W,G,U);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var nQ=new j0,MK=new j0;class JJ{constructor(J=[],Q=[]){this.uuid=t6(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new j0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new j0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let W=0,Y=J.length;W<Y;W++){let X=J[W]?J[W].matrixWorld:MK;nQ.multiplyMatrices(X,Q[W]),nQ.toArray($,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new JJ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new q5(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let W=J.bones[$],Y=Q[W];if(Y===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),Y=new e9;this.bones.push(Y),this.boneInverses.push(new j0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,W=Q.length;Z<W;Z++){let Y=Q[Z];J.bones.push(Y.uuid);let X=$[Z];J.boneInverses.push(X.toArray())}return J}}class S8 extends H6{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var _8=new j0,sQ=new j0,y9=[],iQ=new h6,kK=new j0,c8=new V6,n8=new p6;class G5 extends V6{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new S8(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,kK)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new h6;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,_8),iQ.copy(J.boundingBox).applyMatrix4(_8),this.boundingBox.union(iQ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new p6;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,_8),n8.copy(J.boundingSphere).applyMatrix4(_8),this.boundingSphere.union(n8)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=$.length+1,Y=J*W+1;for(let X=0;X<$.length;X++)$[X]=Z[Y+X]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(c8.geometry=this.geometry,c8.material=this.material,c8.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(n8.copy(this.boundingSphere),n8.applyMatrix4($),J.ray.intersectsSphere(n8)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,_8),sQ.multiplyMatrices($,_8),c8.matrixWorld=sQ,c8.raycast(J,y9);for(let Y=0,X=y9.length;Y<X;Y++){let H=y9[Y];H.instanceId=W,H.object=this,Q.push(H)}y9.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new S8(new Float32Array(this.instanceMatrix.count*3),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new q5(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,Y=0;for(let K=0;K<$.length;K++)Y+=$[K];let X=this.geometry.morphTargetsRelative?1:1-Y,H=Z*J;W[H]=X,W.set($,H+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null;return this}}class u6 extends I6{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new z0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var l9=new A,d9=new A,oQ=new j0,s8=new f7,v9=new p6,gJ=new A,aQ=new A;class r7 extends J6{constructor(J=new K6,Q=new u6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)l9.fromBufferAttribute(Q,Z-1),d9.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=l9.distanceTo(d9);J.setAttribute("lineDistance",new $6($,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,Y=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(v9.copy($.boundingSphere),v9.applyMatrix4(Z),v9.radius+=W,J.ray.intersectsSphere(v9)===!1)return;oQ.copy(Z).invert(),s8.copy(J.ray).applyMatrix4(oQ);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=X*X,K=this.isLineSegments?2:1,q=$.index,U=$.attributes.position;if(q!==null){let F=Math.max(0,Y.start),O=Math.min(q.count,Y.start+Y.count);for(let N=F,R=O-1;N<R;N+=K){let V=q.getX(N),E=q.getX(N+1),M=f9(this,J,s8,H,V,E);if(M)Q.push(M)}if(this.isLineLoop){let N=q.getX(O-1),R=q.getX(F),V=f9(this,J,s8,H,N,R);if(V)Q.push(V)}}else{let F=Math.max(0,Y.start),O=Math.min(U.count,Y.start+Y.count);for(let N=F,R=O-1;N<R;N+=K){let V=f9(this,J,s8,H,N,N+1);if(V)Q.push(V)}if(this.isLineLoop){let N=f9(this,J,s8,H,O-1,F);if(N)Q.push(N)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Y=Z.length;W<Y;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function f9(J,Q,$,Z,W,Y){let X=J.geometry.attributes.position;if(l9.fromBufferAttribute(X,W),d9.fromBufferAttribute(X,Y),$.distanceSqToSegment(l9,d9,gJ,aQ)>Z)return;gJ.applyMatrix4(J.matrixWorld);let K=Q.ray.origin.distanceTo(gJ);if(K<Q.near||K>Q.far)return;return{distance:K,point:aQ.clone().applyMatrix4(J.matrixWorld),index:W,face:null,faceIndex:null,object:J}}var rQ=new A,tQ=new A;class R7 extends r7{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)rQ.fromBufferAttribute(Q,Z),tQ.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+rQ.distanceTo(tQ);J.setAttribute("lineDistance",new $6($,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class U5 extends r7{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class z7 extends I6{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new z0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var eQ=new j0,cJ=new f7,x9=new p6,h9=new A;class t7 extends J6{constructor(J=new K6,Q=new z7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,Y=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(x9.copy($.boundingSphere),x9.applyMatrix4(Z),x9.radius+=W,J.ray.intersectsSphere(x9)===!1)return;eQ.copy(Z).invert(),cJ.copy(J.ray).applyMatrix4(eQ);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=X*X,K=$.index,G=$.attributes.position;if(K!==null){let U=Math.max(0,Y.start),F=Math.min(K.count,Y.start+Y.count);for(let O=U,N=F;O<N;O++){let R=K.getX(O);h9.fromBufferAttribute(G,R),J$(h9,R,H,Z,J,Q,this)}}else{let U=Math.max(0,Y.start),F=Math.min(G.count,Y.start+Y.count);for(let O=U,N=F;O<N;O++)h9.fromBufferAttribute(G,O),J$(h9,O,H,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Y=Z.length;W<Y;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function J$(J,Q,$,Z,W,Y,X){let H=cJ.distanceSqToPoint(J);if(H<$){let K=new A;cJ.closestPointToPoint(J,K),K.applyMatrix4(Z);let q=W.ray.origin.distanceTo(K);if(q<W.near||q>W.far)return;Y.push({distance:q,distanceToRay:Math.sqrt(H),point:K,index:Q,face:null,object:X})}}var b9=new A,g9=new A,pJ=new A,p9=new r6;class F5 extends K6{constructor(J=null,Q=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:J,thresholdAngle:Q},J!==null){let Z=Math.pow(10,4),W=Math.cos(I8*Q),Y=J.getIndex(),X=J.getAttribute("position"),H=Y?Y.count:X.count,K=[0,0,0],q=["a","b","c"],G=[,,,],U={},F=[];for(let O=0;O<H;O+=3){if(Y)K[0]=Y.getX(O),K[1]=Y.getX(O+1),K[2]=Y.getX(O+2);else K[0]=O,K[1]=O+1,K[2]=O+2;let{a:N,b:R,c:V}=p9;if(N.fromBufferAttribute(X,K[0]),R.fromBufferAttribute(X,K[1]),V.fromBufferAttribute(X,K[2]),p9.getNormal(pJ),G[0]=`${Math.round(N.x*Z)},${Math.round(N.y*Z)},${Math.round(N.z*Z)}`,G[1]=`${Math.round(R.x*Z)},${Math.round(R.y*Z)},${Math.round(R.z*Z)}`,G[2]=`${Math.round(V.x*Z)},${Math.round(V.y*Z)},${Math.round(V.z*Z)}`,G[0]===G[1]||G[1]===G[2]||G[2]===G[0])continue;for(let E=0;E<3;E++){let M=(E+1)%3,C=G[E],I=G[M],y=p9[q[E]],L=p9[q[M]],S=`${C}_${I}`,b=`${I}_${C}`;if(b in U&&U[b]){if(pJ.dot(U[b].normal)<=W)F.push(y.x,y.y,y.z),F.push(L.x,L.y,L.z);U[b]=null}else if(!(S in U))U[S]={index0:K[E],index1:K[M],normal:pJ.clone()}}}for(let O in U)if(U[O]){let{index0:N,index1:R}=U[O];b9.fromBufferAttribute(X,N),g9.fromBufferAttribute(X,R),F.push(b9.x,b9.y,b9.z),F.push(g9.x,g9.y,g9.z)}this.setAttribute("position",new $6(F,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}class e7 extends I6{constructor(J){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new z0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new z0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new M0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new e6,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class m6 extends e7{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new M0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return L6(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new z0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new z0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new z0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class V5 extends I6{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new z0(16777215),this.specular=new z0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new z0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new M0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new e6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}function u9(J,Q,$){if(!J||!$&&J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function LK(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function DK(J){function Q(W,Y){return J[W]-J[Y]}let $=J.length,Z=Array($);for(let W=0;W!==$;++W)Z[W]=W;return Z.sort(Q),Z}function Q$(J,Q,$){let Z=J.length,W=new J.constructor(Z);for(let Y=0,X=0;X!==Z;++Y){let H=$[Y]*Q;for(let K=0;K!==Q;++K)W[X++]=J[H+K]}return W}function u$(J,Q,$,Z){let W=1,Y=J[0];while(Y!==void 0&&Y[Z]===void 0)Y=J[W++];if(Y===void 0)return;let X=Y[Z];if(X===void 0)return;if(Array.isArray(X))do{if(X=Y[Z],X!==void 0)Q.push(Y.time),$.push.apply($,X);Y=J[W++]}while(Y!==void 0);else if(X.toArray!==void 0)do{if(X=Y[Z],X!==void 0)Q.push(Y.time),X.toArray($,$.length);Y=J[W++]}while(Y!==void 0);else do{if(X=Y[Z],X!==void 0)Q.push(Y.time),$.push(X);Y=J[W++]}while(Y!==void 0)}class J8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let Y;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(W=Z,Z=Q[++$],J<Z)break J}Y=Q.length;break Q}if(!(J>=W)){let X=Q[1];if(J<X)$=2,W=X;for(let H=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===H)break;if(Z=W,W=Q[--$-1],J>=W)break J}Y=$,$=0;break Q}break $}while($<Y){let X=$+Y>>>1;if(J<Q[X])Y=X;else $=X+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let Y=0;Y!==Z;++Y)Q[Y]=$[W+Y];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class m$ extends J8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,Y=J+1,X=Z[W],H=Z[Y];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,X=2*Q-$;break;case 2402:W=Z.length-2,X=Q+Z[W]-Z[W+1];break;default:W=J,X=$}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:Y=J,H=2*$-Q;break;case 2402:Y=1,H=$+Z[1]-Z[0];break;default:Y=J-1,H=Q}let K=($-Q)*0.5,q=this.valueSize;this._weightPrev=K/(Q-X),this._weightNext=K/(H-$),this._offsetPrev=W*q,this._offsetNext=Y*q}interpolate_(J,Q,$,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,H=J*X,K=H-X,q=this._offsetPrev,G=this._offsetNext,U=this._weightPrev,F=this._weightNext,O=($-Q)/(Z-Q),N=O*O,R=N*O,V=-U*R+2*U*N-U*O,E=(1+U)*R+(-1.5-2*U)*N+(-0.5+U)*O+1,M=(-1-F)*R+(1.5+F)*N+0.5*O,C=F*R-F*N;for(let I=0;I!==X;++I)W[I]=V*Y[q+I]+E*Y[K+I]+M*Y[H+I]+C*Y[G+I];return W}}class l$ extends J8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,H=J*X,K=H-X,q=($-Q)/(Z-Q),G=1-q;for(let U=0;U!==X;++U)W[U]=Y[K+U]*G+Y[H+U]*q;return W}}class d$ extends J8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class J7{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=u9(Q,this.TimeBufferType),this.values=u9($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:u9(J.times,Array),values:u9(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new d$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new l$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new m$(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return console.warn("THREE.KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,Y=Z-1;while(W!==Z&&$[W]<J)++W;while(Y!==-1&&$[Y]>Q)--Y;if(++Y,W!==0||Y!==Z){if(W>=Y)Y=Math.max(Y,1),W=Y-1;let X=this.getValueSize();this.times=$.slice(W,Y),this.values=this.values.slice(W*X,Y*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let Y=null;for(let X=0;X!==W;X++){let H=$[X];if(typeof H==="number"&&isNaN(H)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,X,H),J=!1;break}if(Y!==null&&Y>H){console.error("THREE.KeyframeTrack: Out of order keys.",this,X,H,Y),J=!1;break}Y=H}if(Z!==void 0){if(LK(Z))for(let X=0,H=Z.length;X!==H;++X){let K=Z[X];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,X,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,Y=1;for(let X=1;X<W;++X){let H=!1,K=J[X],q=J[X+1];if(K!==q&&(X!==1||K!==J[0]))if(!Z){let G=X*$,U=G-$,F=G+$;for(let O=0;O!==$;++O){let N=Q[G+O];if(N!==Q[U+O]||N!==Q[F+O]){H=!0;break}}}else H=!0;if(H){if(X!==Y){J[Y]=J[X];let G=X*$,U=Y*$;for(let F=0;F!==$;++F)Q[U+F]=Q[G+F]}++Y}}if(W>0){J[Y]=J[W];for(let X=W*$,H=Y*$,K=0;K!==$;++K)Q[H+K]=Q[X+K];++Y}if(Y!==J.length)this.times=J.slice(0,Y),this.values=Q.slice(0,Y*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}J7.prototype.TimeBufferType=Float32Array;J7.prototype.ValueBufferType=Float32Array;J7.prototype.DefaultInterpolation=2301;class Q8 extends J7{constructor(J,Q,$){super(J,Q,$)}}Q8.prototype.ValueTypeName="bool";Q8.prototype.ValueBufferType=Array;Q8.prototype.DefaultInterpolation=2300;Q8.prototype.InterpolantFactoryMethodLinear=void 0;Q8.prototype.InterpolantFactoryMethodSmooth=void 0;class E5 extends J7{}E5.prototype.ValueTypeName="color";class j7 extends J7{}j7.prototype.ValueTypeName="number";class c$ extends J8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,H=($-Q)/(Z-Q),K=J*X;for(let q=K+X;K!==q;K+=4)x6.slerpFlat(W,0,Y,K-X,Y,K,H);return W}}class x7 extends J7{InterpolantFactoryMethodLinear(J){return new c$(this.times,this.values,this.getValueSize(),J)}}x7.prototype.ValueTypeName="quaternion";x7.prototype.InterpolantFactoryMethodSmooth=void 0;class $8 extends J7{constructor(J,Q,$){super(J,Q,$)}}$8.prototype.ValueTypeName="string";$8.prototype.ValueBufferType=Array;$8.prototype.DefaultInterpolation=2300;$8.prototype.InterpolantFactoryMethodLinear=void 0;$8.prototype.InterpolantFactoryMethodSmooth=void 0;class y7 extends J7{}y7.prototype.ValueTypeName="vector";class O5{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=t6(),this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let Y=0,X=$.length;Y!==X;++Y)Q.push(_K($[Y]).scale(Z));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode};for(let W=0,Y=$.length;W!==Y;++W)Q.push(J7.toJSON($[W]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let W=Q.length,Y=[];for(let X=0;X<W;X++){let H=[],K=[];H.push((X+W-1)%W,X,(X+1)%W),K.push(0,1,0);let q=DK(H);if(H=Q$(H,1,q),K=Q$(K,1,q),!Z&&H[0]===0)H.push(W),K.push(K[0]);Y.push(new j7(".morphTargetInfluences["+Q[X].name+"]",H,K).scale(1/$))}return new this(J,-1,Y)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let X=0,H=J.length;X<H;X++){let K=J[X],q=K.name.match(W);if(q&&q.length>1){let G=q[1],U=Z[G];if(!U)Z[G]=U=[];U.push(K)}}let Y=[];for(let X in Z)Y.push(this.CreateFromMorphTargetSequence(X,Z[X],Q,$));return Y}static parseAnimation(J,Q){if(!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let $=function(G,U,F,O,N){if(F.length!==0){let R=[],V=[];if(u$(F,R,V,O),R.length!==0)N.push(new G(U,R,V))}},Z=[],W=J.name||"default",Y=J.fps||30,X=J.blendMode,H=J.length||-1,K=J.hierarchy||[];for(let G=0;G<K.length;G++){let U=K[G].keys;if(!U||U.length===0)continue;if(U[0].morphTargets){let F={},O;for(O=0;O<U.length;O++)if(U[O].morphTargets)for(let N=0;N<U[O].morphTargets.length;N++)F[U[O].morphTargets[N]]=-1;for(let N in F){let R=[],V=[];for(let E=0;E!==U[O].morphTargets.length;++E){let M=U[O];R.push(M.time),V.push(M.morphTarget===N?1:0)}Z.push(new j7(".morphTargetInfluence["+N+"]",R,V))}H=F.length*Y}else{let F=".bones["+Q[G].name+"]";$(y7,F+".position",U,"pos",Z),$(x7,F+".quaternion",U,"rot",Z),$(y7,F+".scale",U,"scl",Z)}}if(Z.length===0)return null;return new this(W,H,Z,X)}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let W=this.tracks[$];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());return new this.constructor(this.name,this.duration,J,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function CK(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return j7;case"vector":case"vector2":case"vector3":case"vector4":return y7;case"color":return E5;case"quaternion":return x7;case"bool":case"boolean":return Q8;case"string":return $8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function _K(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=CK(J.type);if(J.times===void 0){let $=[],Z=[];u$(J.keys,$,Z,"value"),J.times=$,J.values=Z}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var T7={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class n${constructor(J,Q,$){let Z=this,W=!1,Y=0,X=0,H=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this.itemStart=function(q){if(X++,W===!1){if(Z.onStart!==void 0)Z.onStart(q,Y,X)}W=!0},this.itemEnd=function(q){if(Y++,Z.onProgress!==void 0)Z.onProgress(q,Y,X);if(Y===X){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(q){if(Z.onError!==void 0)Z.onError(q)},this.resolveURL=function(q){if(H)return H(q);return q},this.setURLModifier=function(q){return H=q,this},this.addHandler=function(q,G){return K.push(q,G),this},this.removeHandler=function(q){let G=K.indexOf(q);if(G!==-1)K.splice(G,2);return this},this.getHandler=function(q){for(let G=0,U=K.length;G<U;G+=2){let F=K[G],O=K[G+1];if(F.global)F.lastIndex=0;if(F.test(q))return O}return null}}}var wK=new n$;class l6{constructor(J){this.manager=J!==void 0?J:wK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}l6.DEFAULT_MATERIAL_NAME="__DEFAULT";var V7={};class s$ extends Error{constructor(J,Q){super(J);this.response=Q}}class h7 extends l6{constructor(J){super(J)}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=T7.get(J);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(V7[J]!==void 0){V7[J].push({onLoad:Q,onProgress:$,onError:Z});return}V7[J]=[],V7[J].push({onLoad:Q,onProgress:$,onError:Z});let Y=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),X=this.mimeType,H=this.responseType;fetch(Y).then((K)=>{if(K.status===200||K.status===0){if(K.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||K.body===void 0||K.body.getReader===void 0)return K;let q=V7[J],G=K.body.getReader(),U=K.headers.get("X-File-Size")||K.headers.get("Content-Length"),F=U?parseInt(U):0,O=F!==0,N=0,R=new ReadableStream({start(V){E();function E(){G.read().then(({done:M,value:C})=>{if(M)V.close();else{N+=C.byteLength;let I=new ProgressEvent("progress",{lengthComputable:O,loaded:N,total:F});for(let y=0,L=q.length;y<L;y++){let S=q[y];if(S.onProgress)S.onProgress(I)}V.enqueue(C),E()}},(M)=>{V.error(M)})}}});return new Response(R)}else throw new s$(`fetch for "${K.url}" responded with ${K.status}: ${K.statusText}`,K)}).then((K)=>{switch(H){case"arraybuffer":return K.arrayBuffer();case"blob":return K.blob();case"document":return K.text().then((q)=>{return new DOMParser().parseFromString(q,X)});case"json":return K.json();default:if(X===void 0)return K.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(X),U=G&&G[1]?G[1].toLowerCase():void 0,F=new TextDecoder(U);return K.arrayBuffer().then((O)=>F.decode(O))}}}).then((K)=>{T7.add(J,K);let q=V7[J];delete V7[J];for(let G=0,U=q.length;G<U;G++){let F=q[G];if(F.onLoad)F.onLoad(K)}}).catch((K)=>{let q=V7[J];if(q===void 0)throw this.manager.itemError(J),K;delete V7[J];for(let G=0,U=q.length;G<U;G++){let F=q[G];if(F.onError)F.onError(K)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}}class i$ extends l6{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,Y=T7.get(J);if(Y!==void 0)return W.manager.itemStart(J),setTimeout(function(){if(Q)Q(Y);W.manager.itemEnd(J)},0),Y;let X=t8("img");function H(){if(q(),T7.add(J,this),Q)Q(this);W.manager.itemEnd(J)}function K(G){if(q(),Z)Z(G);W.manager.itemError(J),W.manager.itemEnd(J)}function q(){X.removeEventListener("load",H,!1),X.removeEventListener("error",K,!1)}if(X.addEventListener("load",H,!1),X.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return W.manager.itemStart(J),X.src=J,X}}class N5 extends l6{constructor(J){super(J)}load(J,Q,$,Z){let W=new E6,Y=new i$(this.manager);return Y.setCrossOrigin(this.crossOrigin),Y.setPath(this.path),Y.load(J,function(X){if(W.image=X,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}class Z9 extends J6{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new z0(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}class R5 extends Z9{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(J6.DEFAULT_UP),this.updateMatrix(),this.groundColor=new z0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}}var uJ=new j0,$$=new A,Z$=new A;class QJ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new M0(512,512),this.map=null,this.mapPass=null,this.matrix=new j0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new o9,this._frameExtents=new M0(1,1),this._viewportCount=1,this._viewports=[new r0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;$$.setFromMatrixPosition(J.matrixWorld),Q.position.copy($$),Z$.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(Z$),Q.updateMatrixWorld(),uJ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uJ),$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),$.multiply(uJ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class o$ extends QJ{constructor(){super(new B6(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1}updateMatrices(J){let Q=this.camera,$=A8*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height,W=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class z5 extends Z9{constructor(J,Q,$=0,Z=Math.PI/3,W=0,Y=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(J6.DEFAULT_UP),this.updateMatrix(),this.target=new J6,this.distance=$,this.angle=Z,this.penumbra=W,this.decay=Y,this.map=null,this.shadow=new o$}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var W$=new j0,i8=new A,mJ=new A;class a$ extends QJ{constructor(){super(new B6(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new M0(4,2),this._viewportCount=6,this._viewports=[new r0(2,1,1,1),new r0(0,1,1,1),new r0(3,1,1,1),new r0(1,1,1,1),new r0(3,0,1,1),new r0(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(J,Q=0){let $=this.camera,Z=this.matrix,W=J.distance||$.far;if(W!==$.far)$.far=W,$.updateProjectionMatrix();i8.setFromMatrixPosition(J.matrixWorld),$.position.copy(i8),mJ.copy($.position),mJ.add(this._cubeDirections[Q]),$.up.copy(this._cubeUps[Q]),$.lookAt(mJ),$.updateMatrixWorld(),Z.makeTranslation(-i8.x,-i8.y,-i8.z),W$.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(W$)}}class B5 extends Z9{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new a$}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class r$ extends QJ{constructor(){super(new Q9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class y8 extends Z9{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(J6.DEFAULT_UP),this.updateMatrix(),this.target=new J6,this.shadow=new r$}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class Z8{static decodeText(J){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(J);let Q="";for(let $=0,Z=J.length;$<Z;$++)Q+=String.fromCharCode(J[$]);try{return decodeURIComponent(escape(Q))}catch($){return Q}}static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}class M5 extends l6{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"}}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,Y=T7.get(J);if(Y!==void 0){if(W.manager.itemStart(J),Y.then){Y.then((K)=>{if(Q)Q(K);W.manager.itemEnd(J)}).catch((K)=>{if(Z)Z(K)});return}return setTimeout(function(){if(Q)Q(Y);W.manager.itemEnd(J)},0),Y}let X={};X.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",X.headers=this.requestHeader;let H=fetch(J,X).then(function(K){return K.blob()}).then(function(K){return createImageBitmap(K,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(K){if(T7.add(J,K),Q)Q(K);return W.manager.itemEnd(J),K}).catch(function(K){if(Z)Z(K);T7.remove(J),W.manager.itemError(J),W.manager.itemEnd(J)});T7.add(J,H),W.manager.itemStart(J)}}var k5="\\[\\]\\.:\\/",IK=new RegExp("["+k5+"]","g"),L5="[^"+k5+"]",PK="[^"+k5.replace("\\.","")+"]",AK=/((?:WC+[\/:])*)/.source.replace("WC",L5),TK=/(WCOD+)?/.source.replace("WCOD",PK),SK=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",L5),jK=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",L5),yK=new RegExp("^"+AK+TK+SK+jK+"$"),vK=["material","materials","bones","map"];class t${constructor(J,Q,$){let Z=$||o0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class o0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||o0.parseTrackName(Q),this.node=o0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new o0(J,Q,$);else return new o0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(IK,"")}static parseTrackName(J){let Q=yK.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(vK.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let Y=0;Y<W.length;Y++){let X=W[Y];if(X.name===Q||X.uuid===Q)return X;let H=$(X.children);if(H)return H}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=o0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if($){let K=Q.objectIndex;switch($){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let q=0;q<J.length;q++)if(J[q].name===K){K=q;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(K!==void 0){if(J[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let Y=J[Z];if(Y===void 0){let K=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.needsUpdate!==void 0)X=this.Versioning.NeedsUpdate;else if(J.matrixWorldNeedsUpdate!==void 0)X=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}H=this.BindingType.ArrayElement,this.resolvedProperty=Y,this.propertyIndex=W}else if(Y.fromArray!==void 0&&Y.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=Y;else if(Array.isArray(Y))H=this.BindingType.EntireArray,this.resolvedProperty=Y;else this.propertyName=Z;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}o0.Composite=t$;o0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};o0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};o0.prototype.GetterByBindingType=[o0.prototype._getValue_direct,o0.prototype._getValue_array,o0.prototype._getValue_arrayElement,o0.prototype._getValue_toArray];o0.prototype.SetterByBindingTypeAndVersioning=[[o0.prototype._setValue_direct,o0.prototype._setValue_direct_setNeedsUpdate,o0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_array,o0.prototype._setValue_array_setNeedsUpdate,o0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_arrayElement,o0.prototype._setValue_arrayElement_setNeedsUpdate,o0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_fromArray,o0.prototype._setValue_fromArray_setNeedsUpdate,o0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nq=new Float32Array(1);var Y$=new j0;class D5{constructor(J,Q,$=0,Z=1/0){this.ray=new f7(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new i9,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,(Q.near+Q.far)/(Q.near-Q.far)).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else console.error("THREE.Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return Y$.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Y$),this}intersectObject(J,Q=!0,$=[]){return nJ(J,this,$,Q),$.sort(X$),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,W=J.length;Z<W;Z++)nJ(J[Z],this,$,Q);return $.sort(X$),$}}function X$(J,Q){return J.distance-Q.distance}function nJ(J,Q,$,Z){let W=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)W=!1}if(W===!0&&Z===!0){let Y=J.children;for(let X=0,H=Y.length;X<H;X++)nJ(Y[X],Q,$,!0)}}class $J{constructor(J=1,Q=0,$=0){return this.radius=J,this.phi=Q,this.theta=$,this}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(L6(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class C5 extends R7{constructor(J=10,Q=10,$=4473924,Z=8947848){$=new z0($),Z=new z0(Z);let W=Q/2,Y=J/Q,X=J/2,H=[],K=[];for(let U=0,F=0,O=-X;U<=Q;U++,O+=Y){H.push(-X,0,O,X,0,O),H.push(O,0,-X,O,0,X);let N=U===W?$:Z;N.toArray(K,F),F+=3,N.toArray(K,F),F+=3,N.toArray(K,F),F+=3,N.toArray(K,F),F+=3}let q=new K6;q.setAttribute("position",new $6(H,3)),q.setAttribute("color",new $6(K,3));let G=new u6({vertexColors:!0,toneMapped:!1});super(q,G);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"166"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="166";var e$={type:"change"},_5={type:"start"},JZ={type:"end"},ZJ=new f7,QZ=new $7,xK=Math.cos(70*s9.DEG2RAD);class w5 extends O7{constructor(J,Q){super();this.object=J,this.domElement=Q,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o7.ROTATE,MIDDLE:o7.DOLLY,RIGHT:o7.PAN},this.touches={ONE:a7.ROTATE,TWO:a7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return X.phi},this.getAzimuthalAngle=function(){return X.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",W0),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",W0),this._domElementKeyEvents=null},this.saveState=function(){$.target0.copy($.target),$.position0.copy($.object.position),$.zoom0=$.object.zoom},this.reset=function(){$.target.copy($.target0),$.object.position.copy($.position0),$.object.zoom=$.zoom0,$.object.updateProjectionMatrix(),$.dispatchEvent(e$),$.update(),W=Z.NONE},this.update=function(){let P=new A,_=new x6().setFromUnitVectors(J.up,new A(0,1,0)),o=_.clone().invert(),p=new A,c=new x6,Q0=new A,O0=2*Math.PI;return function(W6=null){let q6=$.object.position;if(P.copy(q6).sub($.target),P.applyQuaternion(_),X.setFromVector3(P),$.autoRotate&&W===Z.NONE)j(D(W6));if($.enableDamping)X.theta+=H.theta*$.dampingFactor,X.phi+=H.phi*$.dampingFactor;else X.theta+=H.theta,X.phi+=H.phi;let{minAzimuthAngle:b0,maxAzimuthAngle:G6}=$;if(isFinite(b0)&&isFinite(G6)){if(b0<-Math.PI)b0+=O0;else if(b0>Math.PI)b0-=O0;if(G6<-Math.PI)G6+=O0;else if(G6>Math.PI)G6-=O0;if(b0<=G6)X.theta=Math.max(b0,Math.min(G6,X.theta));else X.theta=X.theta>(b0+G6)/2?Math.max(b0,X.theta):Math.min(G6,X.theta)}if(X.phi=Math.max($.minPolarAngle,Math.min($.maxPolarAngle,X.phi)),X.makeSafe(),$.enableDamping===!0)$.target.addScaledVector(q,$.dampingFactor);else $.target.add(q);$.target.sub($.cursor),$.target.clampLength($.minTargetRadius,$.maxTargetRadius),$.target.add($.cursor);let D6=!1;if($.zoomToCursor&&y||$.object.isOrthographicCamera)X.radius=q0(X.radius);else{let M6=X.radius;X.radius=q0(X.radius*K),D6=M6!=X.radius}if(P.setFromSpherical(X),P.applyQuaternion(o),q6.copy($.target).add(P),$.object.lookAt($.target),$.enableDamping===!0)H.theta*=1-$.dampingFactor,H.phi*=1-$.dampingFactor,q.multiplyScalar(1-$.dampingFactor);else H.set(0,0,0),q.set(0,0,0);if($.zoomToCursor&&y){let M6=null;if($.object.isPerspectiveCamera){let H7=P.length();M6=q0(H7*K);let p7=H7-M6;$.object.position.addScaledVector(C,p7),$.object.updateMatrixWorld(),D6=!!p7}else if($.object.isOrthographicCamera){let H7=new A(I.x,I.y,0);H7.unproject($.object);let p7=$.object.zoom;$.object.zoom=Math.max($.minZoom,Math.min($.maxZoom,$.object.zoom/K)),$.object.updateProjectionMatrix(),D6=p7!==$.object.zoom;let p8=new A(I.x,I.y,0);p8.unproject($.object),$.object.position.sub(p8).add(H7),$.object.updateMatrixWorld(),M6=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),$.zoomToCursor=!1;if(M6!==null)if(this.screenSpacePanning)$.target.set(0,0,-1).transformDirection($.object.matrix).multiplyScalar(M6).add($.object.position);else if(ZJ.origin.copy($.object.position),ZJ.direction.set(0,0,-1).transformDirection($.object.matrix),Math.abs($.object.up.dot(ZJ.direction))<xK)J.lookAt($.target);else QZ.setFromNormalAndCoplanarPoint($.object.up,$.target),ZJ.intersectPlane(QZ,$.target)}else if($.object.isOrthographicCamera){let M6=$.object.zoom;if($.object.zoom=Math.max($.minZoom,Math.min($.maxZoom,$.object.zoom/K)),M6!==$.object.zoom)$.object.updateProjectionMatrix(),D6=!0}if(K=1,y=!1,D6||p.distanceToSquared($.object.position)>Y||8*(1-c.dot($.object.quaternion))>Y||Q0.distanceToSquared($.target)>Y)return $.dispatchEvent(e$),p.copy($.object.position),c.copy($.object.quaternion),Q0.copy($.target),!0;return!1}}(),this.dispose=function(){if($.domElement.removeEventListener("contextmenu",J0),$.domElement.removeEventListener("pointerdown",S0),$.domElement.removeEventListener("pointercancel",w),$.domElement.removeEventListener("wheel",a),$.domElement.removeEventListener("pointermove",Q6),$.domElement.removeEventListener("pointerup",w),$.domElement.getRootNode().removeEventListener("keydown",t,{capture:!0}),$._domElementKeyEvents!==null)$._domElementKeyEvents.removeEventListener("keydown",W0),$._domElementKeyEvents=null};let $=this,Z={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},W=Z.NONE,Y=0.000001,X=new $J,H=new $J,K=1,q=new A,G=new M0,U=new M0,F=new M0,O=new M0,N=new M0,R=new M0,V=new M0,E=new M0,M=new M0,C=new A,I=new M0,y=!1,L=[],S={},b=!1;function D(P){if(P!==null)return 2*Math.PI/60*$.autoRotateSpeed*P;else return 2*Math.PI/60/60*$.autoRotateSpeed}function k(P){let _=Math.abs(P*0.01);return Math.pow(0.95,$.zoomSpeed*_)}function j(P){H.theta-=P}function u(P){H.phi-=P}let n=function(){let P=new A;return function(o,p){P.setFromMatrixColumn(p,0),P.multiplyScalar(-o),q.add(P)}}(),d=function(){let P=new A;return function(o,p){if($.screenSpacePanning===!0)P.setFromMatrixColumn(p,1);else P.setFromMatrixColumn(p,0),P.crossVectors($.object.up,P);P.multiplyScalar(o),q.add(P)}}(),s=function(){let P=new A;return function(o,p){let c=$.domElement;if($.object.isPerspectiveCamera){let Q0=$.object.position;P.copy(Q0).sub($.target);let O0=P.length();O0*=Math.tan($.object.fov/2*Math.PI/180),n(2*o*O0/c.clientHeight,$.object.matrix),d(2*p*O0/c.clientHeight,$.object.matrix)}else if($.object.isOrthographicCamera)n(o*($.object.right-$.object.left)/$.object.zoom/c.clientWidth,$.object.matrix),d(p*($.object.top-$.object.bottom)/$.object.zoom/c.clientHeight,$.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),$.enablePan=!1}}();function l(P){if($.object.isPerspectiveCamera||$.object.isOrthographicCamera)K/=P;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),$.enableZoom=!1}function e(P){if($.object.isPerspectiveCamera||$.object.isOrthographicCamera)K*=P;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),$.enableZoom=!1}function m(P,_){if(!$.zoomToCursor)return;y=!0;let o=$.domElement.getBoundingClientRect(),p=P-o.left,c=_-o.top,Q0=o.width,O0=o.height;I.x=p/Q0*2-1,I.y=-(c/O0)*2+1,C.set(I.x,I.y,1).unproject($.object).sub($.object.position).normalize()}function q0(P){return Math.max($.minDistance,Math.min($.maxDistance,P))}function F0(P){G.set(P.clientX,P.clientY)}function C0(P){m(P.clientX,P.clientX),V.set(P.clientX,P.clientY)}function x0(P){O.set(P.clientX,P.clientY)}function i(P){U.set(P.clientX,P.clientY),F.subVectors(U,G).multiplyScalar($.rotateSpeed);let _=$.domElement;j(2*Math.PI*F.x/_.clientHeight),u(2*Math.PI*F.y/_.clientHeight),G.copy(U),$.update()}function Z0(P){if(E.set(P.clientX,P.clientY),M.subVectors(E,V),M.y>0)l(k(M.y));else if(M.y<0)e(k(M.y));V.copy(E),$.update()}function U0(P){N.set(P.clientX,P.clientY),R.subVectors(N,O).multiplyScalar($.panSpeed),s(R.x,R.y),O.copy(N),$.update()}function k0(P){if(m(P.clientX,P.clientY),P.deltaY<0)e(k(P.deltaY));else if(P.deltaY>0)l(k(P.deltaY));$.update()}function G0(P){let _=!1;switch(P.code){case $.keys.UP:if(P.ctrlKey||P.metaKey||P.shiftKey)u(2*Math.PI*$.rotateSpeed/$.domElement.clientHeight);else s(0,$.keyPanSpeed);_=!0;break;case $.keys.BOTTOM:if(P.ctrlKey||P.metaKey||P.shiftKey)u(-2*Math.PI*$.rotateSpeed/$.domElement.clientHeight);else s(0,-$.keyPanSpeed);_=!0;break;case $.keys.LEFT:if(P.ctrlKey||P.metaKey||P.shiftKey)j(2*Math.PI*$.rotateSpeed/$.domElement.clientHeight);else s($.keyPanSpeed,0);_=!0;break;case $.keys.RIGHT:if(P.ctrlKey||P.metaKey||P.shiftKey)j(-2*Math.PI*$.rotateSpeed/$.domElement.clientHeight);else s(-$.keyPanSpeed,0);_=!0;break}if(_)P.preventDefault(),$.update()}function A0(P){if(L.length===1)G.set(P.pageX,P.pageY);else{let _=I0(P),o=0.5*(P.pageX+_.x),p=0.5*(P.pageY+_.y);G.set(o,p)}}function t0(P){if(L.length===1)O.set(P.pageX,P.pageY);else{let _=I0(P),o=0.5*(P.pageX+_.x),p=0.5*(P.pageY+_.y);O.set(o,p)}}function h0(P){let _=I0(P),o=P.pageX-_.x,p=P.pageY-_.y,c=Math.sqrt(o*o+p*p);V.set(0,c)}function T(P){if($.enableZoom)h0(P);if($.enablePan)t0(P)}function Z6(P){if($.enableZoom)h0(P);if($.enableRotate)A0(P)}function g0(P){if(L.length==1)U.set(P.pageX,P.pageY);else{let o=I0(P),p=0.5*(P.pageX+o.x),c=0.5*(P.pageY+o.y);U.set(p,c)}F.subVectors(U,G).multiplyScalar($.rotateSpeed);let _=$.domElement;j(2*Math.PI*F.x/_.clientHeight),u(2*Math.PI*F.y/_.clientHeight),G.copy(U)}function e0(P){if(L.length===1)N.set(P.pageX,P.pageY);else{let _=I0(P),o=0.5*(P.pageX+_.x),p=0.5*(P.pageY+_.y);N.set(o,p)}R.subVectors(N,O).multiplyScalar($.panSpeed),s(R.x,R.y),O.copy(N)}function L0(P){let _=I0(P),o=P.pageX-_.x,p=P.pageY-_.y,c=Math.sqrt(o*o+p*p);E.set(0,c),M.set(0,Math.pow(E.y/V.y,$.zoomSpeed)),l(M.y),V.copy(E);let Q0=(P.pageX+_.x)*0.5,O0=(P.pageY+_.y)*0.5;m(Q0,O0)}function l0(P){if($.enableZoom)L0(P);if($.enablePan)e0(P)}function T0(P){if($.enableZoom)L0(P);if($.enableRotate)g0(P)}function S0(P){if($.enabled===!1)return;if(L.length===0)$.domElement.setPointerCapture(P.pointerId),$.domElement.addEventListener("pointermove",Q6),$.domElement.addEventListener("pointerup",w);if(_0(P))return;if(N0(P),P.pointerType==="touch")Y0(P);else z(P)}function Q6(P){if($.enabled===!1)return;if(P.pointerType==="touch")y0(P);else g(P)}function w(P){switch(u0(P),L.length){case 0:$.domElement.releasePointerCapture(P.pointerId),$.domElement.removeEventListener("pointermove",Q6),$.domElement.removeEventListener("pointerup",w),$.dispatchEvent(JZ),W=Z.NONE;break;case 1:let _=L[0],o=S[_];Y0({pointerId:_,pageX:o.x,pageY:o.y});break}}function z(P){let _;switch(P.button){case 0:_=$.mouseButtons.LEFT;break;case 1:_=$.mouseButtons.MIDDLE;break;case 2:_=$.mouseButtons.RIGHT;break;default:_=-1}switch(_){case o7.DOLLY:if($.enableZoom===!1)return;C0(P),W=Z.DOLLY;break;case o7.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if($.enablePan===!1)return;x0(P),W=Z.PAN}else{if($.enableRotate===!1)return;F0(P),W=Z.ROTATE}break;case o7.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if($.enableRotate===!1)return;F0(P),W=Z.ROTATE}else{if($.enablePan===!1)return;x0(P),W=Z.PAN}break;default:W=Z.NONE}if(W!==Z.NONE)$.dispatchEvent(_5)}function g(P){switch(W){case Z.ROTATE:if($.enableRotate===!1)return;i(P);break;case Z.DOLLY:if($.enableZoom===!1)return;Z0(P);break;case Z.PAN:if($.enablePan===!1)return;U0(P);break}}function a(P){if($.enabled===!1||$.enableZoom===!1||W!==Z.NONE)return;P.preventDefault(),$.dispatchEvent(_5),k0(r(P)),$.dispatchEvent(JZ)}function r(P){let _=P.deltaMode,o={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(_){case 1:o.deltaY*=16;break;case 2:o.deltaY*=100;break}if(P.ctrlKey&&!b)o.deltaY*=10;return o}function t(P){if(P.key==="Control")b=!0,$.domElement.getRootNode().addEventListener("keyup",B0,{passive:!0,capture:!0})}function B0(P){if(P.key==="Control")b=!1,$.domElement.getRootNode().removeEventListener("keyup",B0,{passive:!0,capture:!0})}function W0(P){if($.enabled===!1||$.enablePan===!1)return;G0(P)}function Y0(P){switch(X0(P),L.length){case 1:switch($.touches.ONE){case a7.ROTATE:if($.enableRotate===!1)return;A0(P),W=Z.TOUCH_ROTATE;break;case a7.PAN:if($.enablePan===!1)return;t0(P),W=Z.TOUCH_PAN;break;default:W=Z.NONE}break;case 2:switch($.touches.TWO){case a7.DOLLY_PAN:if($.enableZoom===!1&&$.enablePan===!1)return;T(P),W=Z.TOUCH_DOLLY_PAN;break;case a7.DOLLY_ROTATE:if($.enableZoom===!1&&$.enableRotate===!1)return;Z6(P),W=Z.TOUCH_DOLLY_ROTATE;break;default:W=Z.NONE}break;default:W=Z.NONE}if(W!==Z.NONE)$.dispatchEvent(_5)}function y0(P){switch(X0(P),W){case Z.TOUCH_ROTATE:if($.enableRotate===!1)return;g0(P),$.update();break;case Z.TOUCH_PAN:if($.enablePan===!1)return;e0(P),$.update();break;case Z.TOUCH_DOLLY_PAN:if($.enableZoom===!1&&$.enablePan===!1)return;l0(P),$.update();break;case Z.TOUCH_DOLLY_ROTATE:if($.enableZoom===!1&&$.enableRotate===!1)return;T0(P),$.update();break;default:W=Z.NONE}}function J0(P){if($.enabled===!1)return;P.preventDefault()}function N0(P){L.push(P.pointerId)}function u0(P){delete S[P.pointerId];for(let _=0;_<L.length;_++)if(L[_]==P.pointerId){L.splice(_,1);return}}function _0(P){for(let _=0;_<L.length;_++)if(L[_]==P.pointerId)return!0;return!1}function X0(P){let _=S[P.pointerId];if(_===void 0)_=new M0,S[P.pointerId]=_;_.set(P.pageX,P.pageY)}function I0(P){let _=P.pointerId===L[0]?L[1]:L[0];return S[_]}$.domElement.addEventListener("contextmenu",J0),$.domElement.addEventListener("pointerdown",S0),$.domElement.addEventListener("pointercancel",w),$.domElement.addEventListener("wheel",a,{passive:!1}),$.domElement.getRootNode().addEventListener("keydown",t,{passive:!0,capture:!0}),this.update()}}class I5 extends l6{constructor(J){super(J)}load(J,Q,$,Z){let W=this,Y=new h7(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{Q(W.parse(X))}catch(H){if(Z)Z(H);else console.error(H);W.manager.itemError(J)}},$,Z)}parse(J){function Q(K){let q=new DataView(K),G=50;if(84+q.getUint32(80,!0)*50===q.byteLength)return!0;let O=[115,111,108,105,100];for(let N=0;N<5;N++)if($(O,q,N))return!1;return!0}function $(K,q,G){for(let U=0,F=K.length;U<F;U++)if(K[U]!==q.getUint8(G+U))return!1;return!0}function Z(K){let q=new DataView(K),G=q.getUint32(80,!0),U,F,O,N=!1,R,V,E,M,C;for(let k=0;k<70;k++)if(q.getUint32(k,!1)==1129270351&&q.getUint8(k+4)==82&&q.getUint8(k+5)==61)N=!0,R=new Float32Array(G*3*3),V=q.getUint8(k+6)/255,E=q.getUint8(k+7)/255,M=q.getUint8(k+8)/255,C=q.getUint8(k+9)/255;let I=84,y=50,L=new K6,S=new Float32Array(G*3*3),b=new Float32Array(G*3*3),D=new z0;for(let k=0;k<G;k++){let j=I+k*y,u=q.getFloat32(j,!0),n=q.getFloat32(j+4,!0),d=q.getFloat32(j+8,!0);if(N){let s=q.getUint16(j+48,!0);if((s&32768)===0)U=(s&31)/31,F=(s>>5&31)/31,O=(s>>10&31)/31;else U=V,F=E,O=M}for(let s=1;s<=3;s++){let l=j+s*12,e=k*3*3+(s-1)*3;if(S[e]=q.getFloat32(l,!0),S[e+1]=q.getFloat32(l+4,!0),S[e+2]=q.getFloat32(l+8,!0),b[e]=u,b[e+1]=n,b[e+2]=d,N)D.set(U,F,O).convertSRGBToLinear(),R[e]=D.r,R[e+1]=D.g,R[e+2]=D.b}}if(L.setAttribute("position",new H6(S,3)),L.setAttribute("normal",new H6(b,3)),N)L.setAttribute("color",new H6(R,3)),L.hasColors=!0,L.alpha=C;return L}function W(K){let q=new K6,G=/solid([\s\S]*?)endsolid/g,U=/facet([\s\S]*?)endfacet/g,F=/solid\s(.+)/,O=0,N=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,R=new RegExp("vertex"+N+N+N,"g"),V=new RegExp("normal"+N+N+N,"g"),E=[],M=[],C=[],I=new A,y,L=0,S=0,b=0;while((y=G.exec(K))!==null){S=b;let D=y[0],k=(y=F.exec(D))!==null?y[1]:"";C.push(k);while((y=U.exec(D))!==null){let n=0,d=0,s=y[0];while((y=V.exec(s))!==null)I.x=parseFloat(y[1]),I.y=parseFloat(y[2]),I.z=parseFloat(y[3]),d++;while((y=R.exec(s))!==null)E.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3])),M.push(I.x,I.y,I.z),n++,b++;if(d!==1)console.error("THREE.STLLoader: Something isn't right with the normal of face number "+O);if(n!==3)console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+O);O++}let j=S,u=b-S;q.userData.groupNames=C,q.addGroup(j,u,L),L++}return q.setAttribute("position",new $6(E,3)),q.setAttribute("normal",new $6(M,3)),q}function Y(K){if(typeof K!=="string")return new TextDecoder().decode(K);return K}function X(K){if(typeof K==="string"){let q=new Uint8Array(K.length);for(let G=0;G<K.length;G++)q[G]=K.charCodeAt(G)&255;return q.buffer||q}else return K}let H=X(J);return Q(H)?Z(H):W(Y(J))}}function P5(J,Q){if(Q===R$)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===e8||Q===n9){let $=J.getIndex();if($===null){let X=[],H=J.getAttribute("position");if(H!==void 0){for(let K=0;K<H.count;K++)X.push(K);J.setIndex(X),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,W=[];if(Q===e8)for(let X=1;X<=Z;X++)W.push($.getX(0)),W.push($.getX(X)),W.push($.getX(X+1));else for(let X=0;X<Z;X++)if(X%2===0)W.push($.getX(X)),W.push($.getX(X+1)),W.push($.getX(X+2));else W.push($.getX(X+2)),W.push($.getX(X+1)),W.push($.getX(X));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let Y=J.clone();return Y.setIndex(W),Y.clearGroups(),Y}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}class v5 extends l6{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new qZ(Q)}),this.register(function(Q){return new GZ(Q)}),this.register(function(Q){return new BZ(Q)}),this.register(function(Q){return new MZ(Q)}),this.register(function(Q){return new kZ(Q)}),this.register(function(Q){return new FZ(Q)}),this.register(function(Q){return new VZ(Q)}),this.register(function(Q){return new EZ(Q)}),this.register(function(Q){return new OZ(Q)}),this.register(function(Q){return new KZ(Q)}),this.register(function(Q){return new NZ(Q)}),this.register(function(Q){return new UZ(Q)}),this.register(function(Q){return new zZ(Q)}),this.register(function(Q){return new RZ(Q)}),this.register(function(Q){return new XZ(Q)}),this.register(function(Q){return new LZ(Q)}),this.register(function(Q){return new DZ(Q)})}load(J,Q,$,Z){let W=this,Y;if(this.resourcePath!=="")Y=this.resourcePath;else if(this.path!==""){let K=Z8.extractUrlBase(J);Y=Z8.resolveURL(K,this.path)}else Y=Z8.extractUrlBase(J);this.manager.itemStart(J);let X=function(K){if(Z)Z(K);else console.error(K);W.manager.itemError(J),W.manager.itemEnd(J)},H=new h7(this.manager);H.setPath(this.path),H.setResponseType("arraybuffer"),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(K){try{W.parse(K,Y,function(q){Q(q),W.manager.itemEnd(J)},X)}catch(q){X(q)}},$,X)}setDRACOLoader(J){return this.dracoLoader=J,this}setDDSLoader(){throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let W,Y={},X={},H=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(H.decode(new Uint8Array(J,0,4))===CZ){try{Y[p0.KHR_BINARY_GLTF]=new _Z(J)}catch(G){if(Z)Z(G);return}W=JSON.parse(Y[p0.KHR_BINARY_GLTF].content)}else W=JSON.parse(H.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let K=new TZ(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});K.fileLoader.setRequestHeader(this.requestHeader);for(let q=0;q<this.pluginCallbacks.length;q++){let G=this.pluginCallbacks[q](K);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");X[G.name]=G,Y[G.name]=!0}if(W.extensionsUsed)for(let q=0;q<W.extensionsUsed.length;++q){let G=W.extensionsUsed[q],U=W.extensionsRequired||[];switch(G){case p0.KHR_MATERIALS_UNLIT:Y[G]=new HZ;break;case p0.KHR_DRACO_MESH_COMPRESSION:Y[G]=new wZ(W,this.dracoLoader);break;case p0.KHR_TEXTURE_TRANSFORM:Y[G]=new IZ;break;case p0.KHR_MESH_QUANTIZATION:Y[G]=new PZ;break;default:if(U.indexOf(G)>=0&&X[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}K.setExtensions(Y),K.setPlugins(X),K.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,W){$.parse(J,Q,Z,W)})}}function hK(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}var p0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class XZ{constructor(J){this.parser=J,this.name=p0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let W=Q.json,H=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],K,q=new z0(16777215);if(H.color!==void 0)q.setRGB(H.color[0],H.color[1],H.color[2],W7);let G=H.range!==void 0?H.range:0;switch(H.type){case"directional":K=new y8(q),K.target.position.set(0,0,-1),K.add(K.target);break;case"point":K=new B5(q),K.distance=G;break;case"spot":K=new z5(q),K.distance=G,H.spot=H.spot||{},H.spot.innerConeAngle=H.spot.innerConeAngle!==void 0?H.spot.innerConeAngle:0,H.spot.outerConeAngle=H.spot.outerConeAngle!==void 0?H.spot.outerConeAngle:Math.PI/4,K.angle=H.spot.outerConeAngle,K.penumbra=1-H.spot.innerConeAngle/H.spot.outerConeAngle,K.target.position.set(0,0,-1),K.add(K.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+H.type)}if(K.position.set(0,0,0),K.decay=2,B7(K,H),H.intensity!==void 0)K.intensity=H.intensity;return K.name=Q.createUniqueName(H.name||"light_"+J),Z=Promise.resolve(K),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,W=$.json.nodes[J],X=(W.extensions&&W.extensions[this.name]||{}).light;if(X===void 0)return null;return this._loadLight(X).then(function(H){return $._getNodeRef(Q.cache,X,H)})}}class HZ{constructor(){this.name=p0.KHR_MATERIALS_UNLIT}getMaterialType(){return N7}extendParams(J,Q,$){let Z=[];J.color=new z0(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let Y=W.baseColorFactor;J.color.setRGB(Y[0],Y[1],Y[2],W7),J.opacity=Y[3]}if(W.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",W.baseColorTexture,v7))}return Promise.all(Z)}}class KZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name].emissiveStrength;if(W!==void 0)Q.emissiveIntensity=W;return Promise.resolve()}}class qZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return m6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if(Y.clearcoatFactor!==void 0)Q.clearcoat=Y.clearcoatFactor;if(Y.clearcoatTexture!==void 0)W.push($.assignTexture(Q,"clearcoatMap",Y.clearcoatTexture));if(Y.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=Y.clearcoatRoughnessFactor;if(Y.clearcoatRoughnessTexture!==void 0)W.push($.assignTexture(Q,"clearcoatRoughnessMap",Y.clearcoatRoughnessTexture));if(Y.clearcoatNormalTexture!==void 0){if(W.push($.assignTexture(Q,"clearcoatNormalMap",Y.clearcoatNormalTexture)),Y.clearcoatNormalTexture.scale!==void 0){let X=Y.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new M0(X,X)}}return Promise.all(W)}}class GZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_DISPERSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return m6}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class UZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return m6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if(Y.iridescenceFactor!==void 0)Q.iridescence=Y.iridescenceFactor;if(Y.iridescenceTexture!==void 0)W.push($.assignTexture(Q,"iridescenceMap",Y.iridescenceTexture));if(Y.iridescenceIor!==void 0)Q.iridescenceIOR=Y.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if(Y.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=Y.iridescenceThicknessMinimum;if(Y.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=Y.iridescenceThicknessMaximum;if(Y.iridescenceThicknessTexture!==void 0)W.push($.assignTexture(Q,"iridescenceThicknessMap",Y.iridescenceThicknessTexture));return Promise.all(W)}}class FZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_SHEEN}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return m6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[];Q.sheenColor=new z0(0,0,0),Q.sheenRoughness=0,Q.sheen=1;let Y=Z.extensions[this.name];if(Y.sheenColorFactor!==void 0){let X=Y.sheenColorFactor;Q.sheenColor.setRGB(X[0],X[1],X[2],W7)}if(Y.sheenRoughnessFactor!==void 0)Q.sheenRoughness=Y.sheenRoughnessFactor;if(Y.sheenColorTexture!==void 0)W.push($.assignTexture(Q,"sheenColorMap",Y.sheenColorTexture,v7));if(Y.sheenRoughnessTexture!==void 0)W.push($.assignTexture(Q,"sheenRoughnessMap",Y.sheenRoughnessTexture));return Promise.all(W)}}class VZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return m6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if(Y.transmissionFactor!==void 0)Q.transmission=Y.transmissionFactor;if(Y.transmissionTexture!==void 0)W.push($.assignTexture(Q,"transmissionMap",Y.transmissionTexture));return Promise.all(W)}}class EZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_VOLUME}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return m6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if(Q.thickness=Y.thicknessFactor!==void 0?Y.thicknessFactor:0,Y.thicknessTexture!==void 0)W.push($.assignTexture(Q,"thicknessMap",Y.thicknessTexture));Q.attenuationDistance=Y.attenuationDistance||1/0;let X=Y.attenuationColor||[1,1,1];return Q.attenuationColor=new z0().setRGB(X[0],X[1],X[2],W7),Promise.all(W)}}class OZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_IOR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return m6}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class NZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_SPECULAR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return m6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if(Q.specularIntensity=Y.specularFactor!==void 0?Y.specularFactor:1,Y.specularTexture!==void 0)W.push($.assignTexture(Q,"specularIntensityMap",Y.specularTexture));let X=Y.specularColorFactor||[1,1,1];if(Q.specularColor=new z0().setRGB(X[0],X[1],X[2],W7),Y.specularColorTexture!==void 0)W.push($.assignTexture(Q,"specularColorMap",Y.specularColorTexture,v7));return Promise.all(W)}}class RZ{constructor(J){this.parser=J,this.name=p0.EXT_MATERIALS_BUMP}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return m6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if(Q.bumpScale=Y.bumpFactor!==void 0?Y.bumpFactor:1,Y.bumpTexture!==void 0)W.push($.assignTexture(Q,"bumpMap",Y.bumpTexture));return Promise.all(W)}}class zZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return m6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if(Y.anisotropyStrength!==void 0)Q.anisotropy=Y.anisotropyStrength;if(Y.anisotropyRotation!==void 0)Q.anisotropyRotation=Y.anisotropyRotation;if(Y.anisotropyTexture!==void 0)W.push($.assignTexture(Q,"anisotropyMap",Y.anisotropyTexture));return Promise.all(W)}}class BZ{constructor(J){this.parser=J,this.name=p0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],Y=Q.options.ktx2Loader;if(!Y)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,Y)}}class MZ{constructor(J){this.parser=J,this.name=p0.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let Y=W.extensions[Q],X=Z.images[Y.source],H=$.textureLoader;if(X.uri){let K=$.options.manager.getHandler(X.uri);if(K!==null)H=K}return this.detectSupport().then(function(K){if(K)return $.loadTextureImage(J,Y.source,H);if(Z.extensionsRequired&&Z.extensionsRequired.indexOf(Q)>=0)throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return $.loadTexture(J)})}detectSupport(){if(!this.isSupported)this.isSupported=new Promise(function(J){let Q=new Image;Q.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",Q.onload=Q.onerror=function(){J(Q.height===1)}});return this.isSupported}}class kZ{constructor(J){this.parser=J,this.name=p0.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let Y=W.extensions[Q],X=Z.images[Y.source],H=$.textureLoader;if(X.uri){let K=$.options.manager.getHandler(X.uri);if(K!==null)H=K}return this.detectSupport().then(function(K){if(K)return $.loadTextureImage(J,Y.source,H);if(Z.extensionsRequired&&Z.extensionsRequired.indexOf(Q)>=0)throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return $.loadTexture(J)})}detectSupport(){if(!this.isSupported)this.isSupported=new Promise(function(J){let Q=new Image;Q.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",Q.onload=Q.onerror=function(){J(Q.height===1)}});return this.isSupported}}class LZ{constructor(J){this.name=p0.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),Y=this.parser.options.meshoptDecoder;if(!Y||!Y.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(X){let H=Z.byteOffset||0,K=Z.byteLength||0,q=Z.count,G=Z.byteStride,U=new Uint8Array(X,H,K);if(Y.decodeGltfBufferAsync)return Y.decodeGltfBufferAsync(q,G,U,Z.mode,Z.filter).then(function(F){return F.buffer});else return Y.ready.then(function(){let F=new ArrayBuffer(q*G);return Y.decodeGltfBuffer(new Uint8Array(F),q,G,U,Z.mode,Z.filter),F})})}else return null}}class DZ{constructor(J){this.name=p0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let K of Z.primitives)if(K.mode!==d6.TRIANGLES&&K.mode!==d6.TRIANGLE_STRIP&&K.mode!==d6.TRIANGLE_FAN&&K.mode!==void 0)return null;let Y=$.extensions[this.name].attributes,X=[],H={};for(let K in Y)X.push(this.parser.getDependency("accessor",Y[K]).then((q)=>{return H[K]=q,H[K]}));if(X.length<1)return null;return X.push(this.parser.createNodeMesh(J)),Promise.all(X).then((K)=>{let q=K.pop(),G=q.isGroup?q.children:[q],U=K[0].count,F=[];for(let O of G){let N=new j0,R=new A,V=new x6,E=new A(1,1,1),M=new G5(O.geometry,O.material,U);for(let C=0;C<U;C++){if(H.TRANSLATION)R.fromBufferAttribute(H.TRANSLATION,C);if(H.ROTATION)V.fromBufferAttribute(H.ROTATION,C);if(H.SCALE)E.fromBufferAttribute(H.SCALE,C);M.setMatrixAt(C,N.compose(R,V,E))}for(let C in H)if(C==="_COLOR_0"){let I=H[C];M.instanceColor=new S8(I.array,I.itemSize,I.normalized)}else if(C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE")O.geometry.setAttribute(C,H[C]);J6.prototype.copy.call(M,O),this.parser.assignFinalMaterial(M),F.push(M)}if(q.isGroup)return q.clear(),q.add(...F),q;return F[0]})}}var CZ="glTF",W9=12,$Z={JSON:1313821514,BIN:5130562};class _Z{constructor(J){this.name=p0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,W9),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==CZ)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-W9,W=new DataView(J,W9),Y=0;while(Y<Z){let X=W.getUint32(Y,!0);Y+=4;let H=W.getUint32(Y,!0);if(Y+=4,H===$Z.JSON){let K=new Uint8Array(J,W9+Y,X);this.content=$.decode(K)}else if(H===$Z.BIN){let K=W9+Y;this.body=J.slice(K,K+X)}Y+=X}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class wZ{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=p0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,Y=J.extensions[this.name].attributes,X={},H={},K={};for(let q in Y){let G=j5[q]||q.toLowerCase();X[G]=Y[q]}for(let q in J.attributes){let G=j5[q]||q.toLowerCase();if(Y[q]!==void 0){let U=$.accessors[J.attributes[q]],F=v8[U.componentType];K[G]=F.name,H[G]=U.normalized===!0}}return Q.getDependency("bufferView",W).then(function(q){return new Promise(function(G,U){Z.decodeDracoFile(q,function(F){for(let O in F.attributes){let N=F.attributes[O],R=H[O];if(R!==void 0)N.normalized=R}G(F)},X,K,W7,U)})})}}class IZ{constructor(){this.name=p0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);return J.needsUpdate=!0,J}}class PZ{constructor(){this.name=p0.KHR_MESH_QUANTIZATION}}class f5 extends J8{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let Y=0;Y!==Z;Y++)Q[Y]=$[W+Y];return Q}interpolate_(J,Q,$,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,H=X*2,K=X*3,q=Z-Q,G=($-Q)/q,U=G*G,F=U*G,O=J*K,N=O-K,R=-2*F+3*U,V=F-U,E=1-R,M=V-U+G;for(let C=0;C!==X;C++){let I=Y[N+C+X],y=Y[N+C+H]*q,L=Y[O+C+X],S=Y[O+C]*q;W[C]=E*I+M*y+R*L+V*S}return W}}var bK=new x6;class AZ extends f5{interpolate_(J,Q,$,Z){let W=super.interpolate_(J,Q,$,Z);return bK.fromArray(W).normalize().toArray(W),W}}var d6={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},v8={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ZZ={9728:F$,9729:sJ,9984:V$,9985:O$,9986:E$,9987:iJ},WZ={33071:G$,33648:U$,10497:c9},A5={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},j5={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},b7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gK={CUBICSPLINE:void 0,LINEAR:oJ,STEP:N$},T5={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pK(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new e7({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:H$});return J.DefaultMaterial}function W8(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function B7(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function uK(J,Q,$){let Z=!1,W=!1,Y=!1;for(let q=0,G=Q.length;q<G;q++){let U=Q[q];if(U.POSITION!==void 0)Z=!0;if(U.NORMAL!==void 0)W=!0;if(U.COLOR_0!==void 0)Y=!0;if(Z&&W&&Y)break}if(!Z&&!W&&!Y)return Promise.resolve(J);let X=[],H=[],K=[];for(let q=0,G=Q.length;q<G;q++){let U=Q[q];if(Z){let F=U.POSITION!==void 0?$.getDependency("accessor",U.POSITION):J.attributes.position;X.push(F)}if(W){let F=U.NORMAL!==void 0?$.getDependency("accessor",U.NORMAL):J.attributes.normal;H.push(F)}if(Y){let F=U.COLOR_0!==void 0?$.getDependency("accessor",U.COLOR_0):J.attributes.color;K.push(F)}}return Promise.all([Promise.all(X),Promise.all(H),Promise.all(K)]).then(function(q){let G=q[0],U=q[1],F=q[2];if(Z)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=U;if(Y)J.morphAttributes.color=F;return J.morphTargetsRelative=!0,J})}function mK(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,W=$.length;Z<W;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lK(J){let Q,$=J.extensions&&J.extensions[p0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+S5($.attributes);else Q=J.indices+":"+S5(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)Q+=":"+S5(J.targets[Z]);return Q}function S5(J){let Q="",$=Object.keys(J).sort();for(let Z=0,W=$.length;Z<W;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function y5(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dK(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";return"image/png"}var cK=new j0;class TZ{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new hK,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,W=!1,Y=-1;if(typeof navigator<"u"){let X=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(X)===!0;let H=X.match(/Version\/(\d+)/);Z=$&&H?parseInt(H[1],10):-1,W=X.indexOf("Firefox")>-1,Y=W?X.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||W&&Y<98)this.textureLoader=new N5(this.options.manager);else this.textureLoader=new M5(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new h7(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(Y){return Y._markDefs&&Y._markDefs()}),Promise.all(this._invokeAll(function(Y){return Y.beforeRoot&&Y.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(Y){let X={scene:Y[0][Z.scene||0],scenes:Y[0],animations:Y[1],cameras:Y[2],asset:Z.asset,parser:$,userData:{}};return W8(W,X,Z),B7(X,Z),Promise.all($._invokeAll(function(H){return H.afterRoot&&H.afterRoot(X)})).then(function(){for(let H of X.scenes)H.updateMatrixWorld();J(X)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,W=Q.length;Z<W;Z++){let Y=Q[Z].joints;for(let X=0,H=Y.length;X<H;X++)J[Y[X]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let Y=J[Z];if(Y.mesh!==void 0){if(this._addNodeRef(this.meshCache,Y.mesh),Y.skin!==void 0)$[Y.mesh].isSkinnedMesh=!0}if(Y.camera!==void 0)this._addNodeRef(this.cameraCache,Y.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),W=(Y,X)=>{let H=this.associations.get(Y);if(H!=null)this.associations.set(X,H);for(let[K,q]of Y.children.entries())W(q,X.children[K])};return W($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let W=J(Q[Z]);if(W)$.push(W)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(W,Y){return $.getDependency(J,Y)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[p0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,Y){$.load(Z8.resolveURL(Q.uri,Z.path),W,void 0,function(){Y(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,W=Q.byteOffset||0;return $.slice(W,W+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let Y=A5[Z.type],X=v8[Z.componentType],H=Z.normalized===!0,K=new X(Z.count*Y);return Promise.resolve(new H6(K,Y,H))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(Y){let X=Y[0],H=A5[Z.type],K=v8[Z.componentType],q=K.BYTES_PER_ELEMENT,G=q*H,U=Z.byteOffset||0,F=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,O=Z.normalized===!0,N,R;if(F&&F!==G){let V=Math.floor(U/F),E="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+V+":"+Z.count,M=Q.cache.get(E);if(!M)N=new K(X,V*F,Z.count*F/q),M=new t9(N,F/q),Q.cache.add(E,M);R=new $9(M,H,U%F/q,O)}else{if(X===null)N=new K(Z.count*H);else N=new K(X,U,Z.count*H);R=new H6(N,H,O)}if(Z.sparse!==void 0){let V=A5.SCALAR,E=v8[Z.sparse.indices.componentType],M=Z.sparse.indices.byteOffset||0,C=Z.sparse.values.byteOffset||0,I=new E(Y[1],M,Z.sparse.count*V),y=new K(Y[2],C,Z.sparse.count*H);if(X!==null)R=new H6(R.array.slice(),R.itemSize,R.normalized);for(let L=0,S=I.length;L<S;L++){let b=I[L];if(R.setX(b,y[L*H]),H>=2)R.setY(b,y[L*H+1]);if(H>=3)R.setZ(b,y[L*H+2]);if(H>=4)R.setW(b,y[L*H+3]);if(H>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return R})}loadTexture(J){let Q=this.json,$=this.options,W=Q.textures[J].source,Y=Q.images[W],X=this.textureLoader;if(Y.uri){let H=$.manager.getHandler(Y.uri);if(H!==null)X=H}return this.loadTextureImage(J,W,X)}loadTextureImage(J,Q,$){let Z=this,W=this.json,Y=W.textures[J],X=W.images[Q],H=(X.uri||X.bufferView)+":"+Y.sampler;if(this.textureCache[H])return this.textureCache[H];let K=this.loadImageSource(Q,$).then(function(q){if(q.flipY=!1,q.name=Y.name||X.name||"",q.name===""&&typeof X.uri==="string"&&X.uri.startsWith("data:image/")===!1)q.name=X.uri;let U=(W.samplers||{})[Y.sampler]||{};return q.magFilter=ZZ[U.magFilter]||sJ,q.minFilter=ZZ[U.minFilter]||iJ,q.wrapS=WZ[U.wrapS]||c9,q.wrapT=WZ[U.wrapT]||c9,Z.associations.set(q,{textures:J}),q}).catch(function(){return null});return this.textureCache[H]=K,K}loadImageSource(J,Q){let $=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let Y=Z.images[J],X=self.URL||self.webkitURL,H=Y.uri||"",K=!1;if(Y.bufferView!==void 0)H=$.getDependency("bufferView",Y.bufferView).then(function(G){K=!0;let U=new Blob([G],{type:Y.mimeType});return H=X.createObjectURL(U),H});else if(Y.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let q=Promise.resolve(H).then(function(G){return new Promise(function(U,F){let O=U;if(Q.isImageBitmapLoader===!0)O=function(N){let R=new E6(N);R.needsUpdate=!0,U(R)};Q.load(Z8.resolveURL(G,W.path),O,void 0,F)})}).then(function(G){if(K===!0)X.revokeObjectURL(H);return B7(G,Y),G.userData.mimeType=Y.mimeType||dK(Y.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",H),G});return this.sourceCache[J]=q,q}assignTexture(J,Q,$,Z){let W=this;return this.getDependency("texture",$.index).then(function(Y){if(!Y)return null;if($.texCoord!==void 0&&$.texCoord>0)Y=Y.clone(),Y.channel=$.texCoord;if(W.extensions[p0.KHR_TEXTURE_TRANSFORM]){let X=$.extensions!==void 0?$.extensions[p0.KHR_TEXTURE_TRANSFORM]:void 0;if(X){let H=W.associations.get(Y);Y=W.extensions[p0.KHR_TEXTURE_TRANSFORM].extendTexture(Y,X),W.associations.set(Y,H)}}if(Z!==void 0)Y.colorSpace=Z;return J[Q]=Y,Y})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,Y=Q.attributes.normal===void 0;if(J.isPoints){let X="PointsMaterial:"+$.uuid,H=this.cache.get(X);if(!H)H=new z7,I6.prototype.copy.call(H,$),H.color.copy($.color),H.map=$.map,H.sizeAttenuation=!1,this.cache.add(X,H);$=H}else if(J.isLine){let X="LineBasicMaterial:"+$.uuid,H=this.cache.get(X);if(!H)H=new u6,I6.prototype.copy.call(H,$),H.color.copy($.color),H.map=$.map,this.cache.add(X,H);$=H}if(Z||W||Y){let X="ClonedMaterial:"+$.uuid+":";if(Z)X+="derivative-tangents:";if(W)X+="vertex-colors:";if(Y)X+="flat-shading:";let H=this.cache.get(X);if(!H){if(H=$.clone(),W)H.vertexColors=!0;if(Y)H.flatShading=!0;if(Z){if(H.normalScale)H.normalScale.y*=-1;if(H.clearcoatNormalScale)H.clearcoatNormalScale.y*=-1}this.cache.add(X,H),this.associations.set(H,this.associations.get($))}$=H}J.material=$}getMaterialType(){return e7}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,W=$.materials[J],Y,X={},H=W.extensions||{},K=[];if(H[p0.KHR_MATERIALS_UNLIT]){let G=Z[p0.KHR_MATERIALS_UNLIT];Y=G.getMaterialType(),K.push(G.extendParams(X,W,Q))}else{let G=W.pbrMetallicRoughness||{};if(X.color=new z0(1,1,1),X.opacity=1,Array.isArray(G.baseColorFactor)){let U=G.baseColorFactor;X.color.setRGB(U[0],U[1],U[2],W7),X.opacity=U[3]}if(G.baseColorTexture!==void 0)K.push(Q.assignTexture(X,"map",G.baseColorTexture,v7));if(X.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,X.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)K.push(Q.assignTexture(X,"metalnessMap",G.metallicRoughnessTexture)),K.push(Q.assignTexture(X,"roughnessMap",G.metallicRoughnessTexture));Y=this._invokeOne(function(U){return U.getMaterialType&&U.getMaterialType(J)}),K.push(Promise.all(this._invokeAll(function(U){return U.extendMaterialParams&&U.extendMaterialParams(J,X)})))}if(W.doubleSided===!0)X.side=K$;let q=W.alphaMode||T5.OPAQUE;if(q===T5.BLEND)X.transparent=!0,X.depthWrite=!1;else if(X.transparent=!1,q===T5.MASK)X.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&Y!==N7){if(K.push(Q.assignTexture(X,"normalMap",W.normalTexture)),X.normalScale=new M0(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;X.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&Y!==N7){if(K.push(Q.assignTexture(X,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)X.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&Y!==N7){let G=W.emissiveFactor;X.emissive=new z0().setRGB(G[0],G[1],G[2],W7)}if(W.emissiveTexture!==void 0&&Y!==N7)K.push(Q.assignTexture(X,"emissiveMap",W.emissiveTexture,v7));return Promise.all(K).then(function(){let G=new Y(X);if(W.name)G.name=W.name;if(B7(G,W),Q.associations.set(G,{materials:J}),W.extensions)W8(Z,G,W);return G})}createUniqueName(J){let Q=o0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function W(X){return $[p0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(X,Q).then(function(H){return YZ(H,X,Q)})}let Y=[];for(let X=0,H=J.length;X<H;X++){let K=J[X],q=lK(K),G=Z[q];if(G)Y.push(G.promise);else{let U;if(K.extensions&&K.extensions[p0.KHR_DRACO_MESH_COMPRESSION])U=W(K);else U=YZ(new K6,K,Q);Z[q]={primitive:K,promise:U},Y.push(U)}}return Promise.all(Y)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,W=$.meshes[J],Y=W.primitives,X=[];for(let H=0,K=Y.length;H<K;H++){let q=Y[H].material===void 0?pK(this.cache):this.getDependency("material",Y[H].material);X.push(q)}return X.push(Q.loadGeometries(Y)),Promise.all(X).then(function(H){let K=H.slice(0,H.length-1),q=H[H.length-1],G=[];for(let F=0,O=q.length;F<O;F++){let N=q[F],R=Y[F],V,E=K[F];if(R.mode===d6.TRIANGLES||R.mode===d6.TRIANGLE_STRIP||R.mode===d6.TRIANGLE_FAN||R.mode===void 0){if(V=W.isSkinnedMesh===!0?new K5(N,E):new V6(N,E),V.isSkinnedMesh===!0)V.normalizeSkinWeights();if(R.mode===d6.TRIANGLE_STRIP)V.geometry=P5(V.geometry,n9);else if(R.mode===d6.TRIANGLE_FAN)V.geometry=P5(V.geometry,e8)}else if(R.mode===d6.LINES)V=new R7(N,E);else if(R.mode===d6.LINE_STRIP)V=new r7(N,E);else if(R.mode===d6.LINE_LOOP)V=new U5(N,E);else if(R.mode===d6.POINTS)V=new t7(N,E);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+R.mode);if(Object.keys(V.geometry.morphAttributes).length>0)mK(V,W);if(V.name=Q.createUniqueName(W.name||"mesh_"+J),B7(V,W),R.extensions)W8(Z,V,R);Q.assignFinalMaterial(V),G.push(V)}for(let F=0,O=G.length;F<O;F++)Q.associations.set(G[F],{meshes:J,primitives:F});if(G.length===1){if(W.extensions)W8(Z,G[0],W);return G[0]}let U=new w6;if(W.extensions)W8(Z,U,W);Q.associations.set(U,{meshes:J});for(let F=0,O=G.length;F<O;F++)U.add(G[F]);return U})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new B6(s9.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new Q9(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return B7(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,W=Q.joints.length;Z<W;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let W=Z.pop(),Y=Z,X=[],H=[];for(let K=0,q=Y.length;K<q;K++){let G=Y[K];if(G){X.push(G);let U=new j0;if(W!==null)U.fromArray(W.array,K*16);H.push(U)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[K])}return new JJ(X,H)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],W=Z.name?Z.name:"animation_"+J,Y=[],X=[],H=[],K=[],q=[];for(let G=0,U=Z.channels.length;G<U;G++){let F=Z.channels[G],O=Z.samplers[F.sampler],N=F.target,R=N.node,V=Z.parameters!==void 0?Z.parameters[O.input]:O.input,E=Z.parameters!==void 0?Z.parameters[O.output]:O.output;if(N.node===void 0)continue;Y.push(this.getDependency("node",R)),X.push(this.getDependency("accessor",V)),H.push(this.getDependency("accessor",E)),K.push(O),q.push(N)}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(H),Promise.all(K),Promise.all(q)]).then(function(G){let U=G[0],F=G[1],O=G[2],N=G[3],R=G[4],V=[];for(let E=0,M=U.length;E<M;E++){let C=U[E],I=F[E],y=O[E],L=N[E],S=R[E];if(C===void 0)continue;if(C.updateMatrix)C.updateMatrix();let b=$._createAnimationTracks(C,I,y,L,S);if(b)for(let D=0;D<b.length;D++)V.push(b[D])}return new O5(W,void 0,V)})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(W){let Y=$._getNodeRef($.meshCache,Z.mesh,W);if(Z.weights!==void 0)Y.traverse(function(X){if(!X.isMesh)return;for(let H=0,K=Z.weights.length;H<K;H++)X.morphTargetInfluences[H]=Z.weights[H]});return Y})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],W=$._loadNodeShallow(J),Y=[],X=Z.children||[];for(let K=0,q=X.length;K<q;K++)Y.push($.getDependency("node",X[K]));let H=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(Y),H]).then(function(K){let q=K[0],G=K[1],U=K[2];if(U!==null)q.traverse(function(F){if(!F.isSkinnedMesh)return;F.bind(U,cK)});for(let F=0,O=G.length;F<O;F++)q.add(G[F]);return q})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],Y=W.name?Z.createUniqueName(W.name):"",X=[],H=Z._invokeOne(function(K){return K.createNodeMesh&&K.createNodeMesh(J)});if(H)X.push(H);if(W.camera!==void 0)X.push(Z.getDependency("camera",W.camera).then(function(K){return Z._getNodeRef(Z.cameraCache,W.camera,K)}));return Z._invokeAll(function(K){return K.createNodeAttachment&&K.createNodeAttachment(J)}).forEach(function(K){X.push(K)}),this.nodeCache[J]=Promise.all(X).then(function(K){let q;if(W.isBone===!0)q=new e9;else if(K.length>1)q=new w6;else if(K.length===1)q=K[0];else q=new J6;if(q!==K[0])for(let G=0,U=K.length;G<U;G++)q.add(K[G]);if(W.name)q.userData.name=W.name,q.name=Y;if(B7(q,W),W.extensions)W8($,q,W);if(W.matrix!==void 0){let G=new j0;G.fromArray(W.matrix),q.applyMatrix4(G)}else{if(W.translation!==void 0)q.position.fromArray(W.translation);if(W.rotation!==void 0)q.quaternion.fromArray(W.rotation);if(W.scale!==void 0)q.scale.fromArray(W.scale)}if(!Z.associations.has(q))Z.associations.set(q,{});return Z.associations.get(q).nodes=J,q}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,W=new w6;if($.name)W.name=Z.createUniqueName($.name);if(B7(W,$),$.extensions)W8(Q,W,$);let Y=$.nodes||[],X=[];for(let H=0,K=Y.length;H<K;H++)X.push(Z.getDependency("node",Y[H]));return Promise.all(X).then(function(H){for(let q=0,G=H.length;q<G;q++)W.add(H[q]);let K=(q)=>{let G=new Map;for(let[U,F]of Z.associations)if(U instanceof I6||U instanceof E6)G.set(U,F);return q.traverse((U)=>{let F=Z.associations.get(U);if(F!=null)G.set(U,F)}),G};return Z.associations=K(W),W})}_createAnimationTracks(J,Q,$,Z,W){let Y=[],X=J.name?J.name:J.uuid,H=[];if(b7[W.path]===b7.weights)J.traverse(function(U){if(U.morphTargetInfluences)H.push(U.name?U.name:U.uuid)});else H.push(X);let K;switch(b7[W.path]){case b7.weights:K=j7;break;case b7.rotation:K=x7;break;case b7.position:case b7.scale:K=y7;break;default:switch($.itemSize){case 1:K=j7;break;case 2:case 3:default:K=y7;break}break}let q=Z.interpolation!==void 0?gK[Z.interpolation]:oJ,G=this._getArrayFromAccessor($);for(let U=0,F=H.length;U<F;U++){let O=new K(H[U]+"."+b7[W.path],Q.array,G,q);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(O);Y.push(O)}return Y}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=y5(Q.constructor),Z=new Float32Array(Q.length);for(let W=0,Y=Q.length;W<Y;W++)Z[W]=Q[W]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof x7?AZ:f5)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function nK(J,Q,$){let Z=Q.attributes,W=new h6;if(Z.POSITION!==void 0){let H=$.json.accessors[Z.POSITION],K=H.min,q=H.max;if(K!==void 0&&q!==void 0){if(W.set(new A(K[0],K[1],K[2]),new A(q[0],q[1],q[2])),H.normalized){let G=y5(v8[H.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let Y=Q.targets;if(Y!==void 0){let H=new A,K=new A;for(let q=0,G=Y.length;q<G;q++){let U=Y[q];if(U.POSITION!==void 0){let F=$.json.accessors[U.POSITION],O=F.min,N=F.max;if(O!==void 0&&N!==void 0){if(K.setX(Math.max(Math.abs(O[0]),Math.abs(N[0]))),K.setY(Math.max(Math.abs(O[1]),Math.abs(N[1]))),K.setZ(Math.max(Math.abs(O[2]),Math.abs(N[2]))),F.normalized){let R=y5(v8[F.componentType]);K.multiplyScalar(R)}H.max(K)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(H)}J.boundingBox=W;let X=new p6;W.getCenter(X.center),X.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=X}function YZ(J,Q,$){let Z=Q.attributes,W=[];function Y(X,H){return $.getDependency("accessor",X).then(function(K){J.setAttribute(H,K)})}for(let X in Z){let H=j5[X]||X.toLowerCase();if(H in J.attributes)continue;W.push(Y(Z[X],H))}if(Q.indices!==void 0&&!J.index){let X=$.getDependency("accessor",Q.indices).then(function(H){J.setIndex(H)});W.push(X)}if(c0.workingColorSpace!==W7&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${c0.workingColorSpace}" not supported.`);return B7(J,Q),nK(J,Q,$),Promise.all(W).then(function(){return Q.targets!==void 0?uK(J,Q.targets,$):J})}var sK=/^[og]\s*(.+)?/,iK=/^mtllib /,oK=/^usemtl /,aK=/^usemap /,SZ=/\s+/,jZ=new A,x5=new A,yZ=new A,vZ=new A,c6=new A,WJ=new z0;function rK(){let J={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(Q,$){if(this.object&&this.object.fromDeclaration===!1){this.object.name=Q,this.object.fromDeclaration=$!==!1;return}let Z=this.object&&typeof this.object.currentMaterial==="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize==="function")this.object._finalize(!0);if(this.object={name:Q||"",fromDeclaration:$!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(W,Y){let X=this._finalize(!1);if(X&&(X.inherited||X.groupCount<=0))this.materials.splice(X.index,1);let H={index:this.materials.length,name:W||"",mtllib:Array.isArray(Y)&&Y.length>0?Y[Y.length-1]:"",smooth:X!==void 0?X.smooth:this.smooth,groupStart:X!==void 0?X.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(K){let q={index:typeof K==="number"?K:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return q.clone=this.clone.bind(q),q}};return this.materials.push(H),H},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1];return},_finalize:function(W){let Y=this.currentMaterial();if(Y&&Y.groupEnd===-1)Y.groupEnd=this.geometry.vertices.length/3,Y.groupCount=Y.groupEnd-Y.groupStart,Y.inherited=!1;if(W&&this.materials.length>1){for(let X=this.materials.length-1;X>=0;X--)if(this.materials[X].groupCount<=0)this.materials.splice(X,1)}if(W&&this.materials.length===0)this.materials.push({name:"",smooth:this.smooth});return Y}},Z&&Z.name&&typeof Z.clone==="function"){let W=Z.clone(0);W.inherited=!0,this.object.materials.push(W)}this.objects.push(this.object)},finalize:function(){if(this.object&&typeof this.object._finalize==="function")this.object._finalize(!0)},parseVertexIndex:function(Q,$){let Z=parseInt(Q,10);return(Z>=0?Z-1:Z+$/3)*3},parseNormalIndex:function(Q,$){let Z=parseInt(Q,10);return(Z>=0?Z-1:Z+$/3)*3},parseUVIndex:function(Q,$){let Z=parseInt(Q,10);return(Z>=0?Z-1:Z+$/2)*2},addVertex:function(Q,$,Z){let W=this.vertices,Y=this.object.geometry.vertices;Y.push(W[Q+0],W[Q+1],W[Q+2]),Y.push(W[$+0],W[$+1],W[$+2]),Y.push(W[Z+0],W[Z+1],W[Z+2])},addVertexPoint:function(Q){let $=this.vertices;this.object.geometry.vertices.push($[Q+0],$[Q+1],$[Q+2])},addVertexLine:function(Q){let $=this.vertices;this.object.geometry.vertices.push($[Q+0],$[Q+1],$[Q+2])},addNormal:function(Q,$,Z){let W=this.normals,Y=this.object.geometry.normals;Y.push(W[Q+0],W[Q+1],W[Q+2]),Y.push(W[$+0],W[$+1],W[$+2]),Y.push(W[Z+0],W[Z+1],W[Z+2])},addFaceNormal:function(Q,$,Z){let W=this.vertices,Y=this.object.geometry.normals;jZ.fromArray(W,Q),x5.fromArray(W,$),yZ.fromArray(W,Z),c6.subVectors(yZ,x5),vZ.subVectors(jZ,x5),c6.cross(vZ),c6.normalize(),Y.push(c6.x,c6.y,c6.z),Y.push(c6.x,c6.y,c6.z),Y.push(c6.x,c6.y,c6.z)},addColor:function(Q,$,Z){let W=this.colors,Y=this.object.geometry.colors;if(W[Q]!==void 0)Y.push(W[Q+0],W[Q+1],W[Q+2]);if(W[$]!==void 0)Y.push(W[$+0],W[$+1],W[$+2]);if(W[Z]!==void 0)Y.push(W[Z+0],W[Z+1],W[Z+2])},addUV:function(Q,$,Z){let W=this.uvs,Y=this.object.geometry.uvs;Y.push(W[Q+0],W[Q+1]),Y.push(W[$+0],W[$+1]),Y.push(W[Z+0],W[Z+1])},addDefaultUV:function(){let Q=this.object.geometry.uvs;Q.push(0,0),Q.push(0,0),Q.push(0,0)},addUVLine:function(Q){let $=this.uvs;this.object.geometry.uvs.push($[Q+0],$[Q+1])},addFace:function(Q,$,Z,W,Y,X,H,K,q){let G=this.vertices.length,U=this.parseVertexIndex(Q,G),F=this.parseVertexIndex($,G),O=this.parseVertexIndex(Z,G);if(this.addVertex(U,F,O),this.addColor(U,F,O),H!==void 0&&H!==""){let N=this.normals.length;U=this.parseNormalIndex(H,N),F=this.parseNormalIndex(K,N),O=this.parseNormalIndex(q,N),this.addNormal(U,F,O)}else this.addFaceNormal(U,F,O);if(W!==void 0&&W!==""){let N=this.uvs.length;U=this.parseUVIndex(W,N),F=this.parseUVIndex(Y,N),O=this.parseUVIndex(X,N),this.addUV(U,F,O),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(Q){this.object.geometry.type="Points";let $=this.vertices.length;for(let Z=0,W=Q.length;Z<W;Z++){let Y=this.parseVertexIndex(Q[Z],$);this.addVertexPoint(Y),this.addColor(Y)}},addLineGeometry:function(Q,$){this.object.geometry.type="Line";let Z=this.vertices.length,W=this.uvs.length;for(let Y=0,X=Q.length;Y<X;Y++)this.addVertexLine(this.parseVertexIndex(Q[Y],Z));for(let Y=0,X=$.length;Y<X;Y++)this.addUVLine(this.parseUVIndex($[Y],W))}};return J.startObject("",!1),J}class h5 extends l6{constructor(J){super(J);this.materials=null}load(J,Q,$,Z){let W=this,Y=new h7(this.manager);Y.setPath(this.path),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{Q(W.parse(X))}catch(H){if(Z)Z(H);else console.error(H);W.manager.itemError(J)}},$,Z)}setMaterials(J){return this.materials=J,this}parse(J){let Q=new rK;if(J.indexOf(`\r
`)!==-1)J=J.replace(/\r\n/g,`
`);if(J.indexOf("\\\n")!==-1)J=J.replace(/\\\n/g,"");let $=J.split(`
`),Z=[];for(let X=0,H=$.length;X<H;X++){let K=$[X].trimStart();if(K.length===0)continue;let q=K.charAt(0);if(q==="#")continue;if(q==="v"){let G=K.split(SZ);switch(G[0]){case"v":if(Q.vertices.push(parseFloat(G[1]),parseFloat(G[2]),parseFloat(G[3])),G.length>=7)WJ.setRGB(parseFloat(G[4]),parseFloat(G[5]),parseFloat(G[6])).convertSRGBToLinear(),Q.colors.push(WJ.r,WJ.g,WJ.b);else Q.colors.push(void 0,void 0,void 0);break;case"vn":Q.normals.push(parseFloat(G[1]),parseFloat(G[2]),parseFloat(G[3]));break;case"vt":Q.uvs.push(parseFloat(G[1]),parseFloat(G[2]));break}}else if(q==="f"){let U=K.slice(1).trim().split(SZ),F=[];for(let N=0,R=U.length;N<R;N++){let V=U[N];if(V.length>0){let E=V.split("/");F.push(E)}}let O=F[0];for(let N=1,R=F.length-1;N<R;N++){let V=F[N],E=F[N+1];Q.addFace(O[0],V[0],E[0],O[1],V[1],E[1],O[2],V[2],E[2])}}else if(q==="l"){let G=K.substring(1).trim().split(" "),U=[],F=[];if(K.indexOf("/")===-1)U=G;else for(let O=0,N=G.length;O<N;O++){let R=G[O].split("/");if(R[0]!=="")U.push(R[0]);if(R[1]!=="")F.push(R[1])}Q.addLineGeometry(U,F)}else if(q==="p"){let U=K.slice(1).trim().split(" ");Q.addPointGeometry(U)}else if((Z=sK.exec(K))!==null){let G=(" "+Z[0].slice(1).trim()).slice(1);Q.startObject(G)}else if(oK.test(K))Q.object.startMaterial(K.substring(7).trim(),Q.materialLibraries);else if(iK.test(K))Q.materialLibraries.push(K.substring(7).trim());else if(aK.test(K))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(q==="s"){if(Z=K.split(" "),Z.length>1){let U=Z[1].trim().toLowerCase();Q.object.smooth=U!=="0"&&U!=="off"}else Q.object.smooth=!0;let G=Q.object.currentMaterial();if(G)G.smooth=Q.object.smooth}else{if(K==="\x00")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+K+'"')}}Q.finalize();let W=new w6;if(W.materialLibraries=[].concat(Q.materialLibraries),!(Q.objects.length===1&&Q.objects[0].geometry.vertices.length===0)===!0)for(let X=0,H=Q.objects.length;X<H;X++){let K=Q.objects[X],q=K.geometry,G=K.materials,U=q.type==="Line",F=q.type==="Points",O=!1;if(q.vertices.length===0)continue;let N=new K6;if(N.setAttribute("position",new $6(q.vertices,3)),q.normals.length>0)N.setAttribute("normal",new $6(q.normals,3));if(q.colors.length>0)O=!0,N.setAttribute("color",new $6(q.colors,3));if(q.hasUVIndices===!0)N.setAttribute("uv",new $6(q.uvs,2));let R=[];for(let E=0,M=G.length;E<M;E++){let C=G[E],I=C.name+"_"+C.smooth+"_"+O,y=Q.materials[I];if(this.materials!==null){if(y=this.materials.create(C.name),U&&y&&!(y instanceof u6)){let L=new u6;I6.prototype.copy.call(L,y),L.color.copy(y.color),y=L}else if(F&&y&&!(y instanceof z7)){let L=new z7({size:10,sizeAttenuation:!1});I6.prototype.copy.call(L,y),L.color.copy(y.color),L.map=y.map,y=L}}if(y===void 0){if(U)y=new u6;else if(F)y=new z7({size:1,sizeAttenuation:!1});else y=new V5;y.name=C.name,y.flatShading=C.smooth?!1:!0,y.vertexColors=O,Q.materials[I]=y}R.push(y)}let V;if(R.length>1){for(let E=0,M=G.length;E<M;E++){let C=G[E];N.addGroup(C.groupStart,C.groupCount,E)}if(U)V=new R7(N,R);else if(F)V=new t7(N,R);else V=new V6(N,R)}else if(U)V=new R7(N,R[0]);else if(F)V=new t7(N,R[0]);else V=new V6(N,R[0]);V.name=K.name,W.add(V)}else if(Q.vertices.length>0){let X=new z7({size:1,sizeAttenuation:!1}),H=new K6;if(H.setAttribute("position",new $6(Q.vertices,3)),Q.colors.length>0&&Q.colors[0]!==void 0)H.setAttribute("color",new $6(Q.colors,3)),X.vertexColors=!0;let K=new t7(H,X);W.add(K)}return W}}var tK=300000,R6=(J)=>document.getElementById(J),L7=R6("view"),h8=new X5({canvas:L7,antialias:!0,alpha:!0});h8.setPixelRatio(Math.min(window.devicePixelRatio,2));h8.toneMapping=q$;h8.outputColorSpace=v7;var g7=new H5,S6=new B6(45,1,0.1,1000),X7=new w5(S6,L7);X7.enableDamping=!0;X7.dampingFactor=0.08;X7.screenSpacePanning=!0;g7.add(new R5(16777215,8161172,0.55));var l5=new y8(16777215,1.5),d5=new y8(14674175,0.45);g7.add(l5,l5.target,d5,d5.target);var YJ=[new A,new A,new A],fZ=new A;function xZ(J,Q,$,Z){let[W,Y,X]=YJ;fZ.copy(X).addScaledVector(Y,Q).addScaledVector(W,$).setLength(Z),J.target.position.copy(X7.target),J.position.copy(X7.target).add(fZ)}function eK(){S6.updateMatrixWorld(),S6.matrixWorld.extractBasis(YJ[0],YJ[1],YJ[2]);let J=S6.position.distanceTo(X7.target)||1;xZ(l5,0.55,0.45,J),xZ(d5,-0.35,-0.7,J)}var Y8=null,T6=null,Q7=null,c5=[],H8=[],n5=[],qJ=null,lZ="",Y7={grid:!0,wire:!1,edges:!0};function b5(J){return J>=100?J.toFixed(0):J>=10?J.toFixed(1):J.toFixed(2)}function hZ(J){J.traverse((Q)=>{if(Q.geometry)Q.geometry.dispose();if(Q.material)(Array.isArray(Q.material)?Q.material:[Q.material]).forEach((Z)=>{Object.values(Z).forEach((W)=>W&&W.isTexture&&W.dispose()),Z.dispose()})})}function Jq(){if(g8(),JW(),T6)g7.remove(T6),hZ(T6),T6=null;if(Q7)g7.remove(Q7),hZ(Q7),Q7=null;c5=[],H8=[],n5=[]}function Qq(J){let Q=[0.1,0.2,0.5,1,2,5,10,20,50,100,200,500,1000];for(let $ of Q)if(J/$<=12)return $;return 2000}function $q(){Q7=new w6;let{size:J}=qJ,Q=Math.max(J.x,J.z,0.000001),$=Qq(Q),Z=$*Math.max(2,Math.ceil(Q*1.6/$/2)*2),W=new C5(Z,Math.round(Z/$),5597050,2898247);W.material.transparent=!0,W.material.opacity=0.6,Q7.add(W);let Y=Math.max(J.x,J.y,J.z)*0.55,X=new w6;X.rotation.x=-Math.PI/2;let H=(q,G)=>{let U=new K6().setFromPoints([new A,q.multiplyScalar(Y)]);X.add(new r7(U,new u6({color:G})))};H(new A(1,0,0),15026253),H(new A(0,1,0),4630360),H(new A(0,0,1),3900150),Q7.add(X);let K=R6("gridstep");if(K)K.textContent=`grid ${$} mm`;Q7.visible=Y7.grid,g7.add(Q7)}function dZ(J){let Q=[];return J.traverse(($)=>{if($.isMesh&&$.geometry)Q.push($)}),Q}function cZ(){let J=0;for(let Q of H8){let $=Q.geometry;J+=($.index?$.index.count:$.attributes.position.count)/3}return Math.round(J)}function Zq(){if(cZ()>tK){R6("btn-edges").classList.add("disabled");return}for(let J of H8){let Q=new R7(new F5(J.geometry,30),new u6({color:1186338,transparent:!0,opacity:0.5}));Q.visible=Y7.edges,J.add(Q),c5.push(Q)}}var Wq=5941734,bZ=new D5,nZ=new M0,M7=R6("tooltip"),sZ=0,iZ=0,H9=!1,s5=!1,K9=null,b8=new Map,Yq=/^mesh_\d+(_\d+)?$/;function oZ(J){if(!J.name||Yq.test(J.name))return!1;let Q=J.parent,$=Q&&Q.name&&J.name.startsWith(`${Q.name}_`)&&J.name.slice(Q.name.length+1);return!($&&/^\d+$/.test($))}function Xq(J){for(let Q=J;Q&&Q!==T6;Q=Q.parent)if(oZ(Q))return Q;return null}function gZ(J){let Q=J.clone();if(Q.emissive)Q.emissive.setHex(Wq),Q.emissiveIntensity=0.35;if("wireframe"in Q)Q.wireframe=Y7.wire;return Q}function aZ(J){K9=J;for(let Q of Array.isArray(J)?J:[J])for(let $ of dZ(Q)){if(b8.has($))continue;b8.set($,$.material),$.material=Array.isArray($.material)?$.material.map(gZ):gZ($.material)}}function g8(){for(let[J,Q]of b8){let $=Array.isArray(J.material)?J.material:[J.material];J.material=Q,$.forEach((Z)=>Z.dispose())}if(b8.clear(),K9=null,M7)M7.style.display="none"}function Hq(J){M7.textContent=J,M7.style.display="block";let Q=Math.min(sZ+12,window.innerWidth-M7.offsetWidth-4),$=Math.min(iZ+12,window.innerHeight-M7.offsetHeight-4);M7.style.left=`${Math.max(4,Q)}px`,M7.style.top=`${Math.max(4,$)}px`}function Kq(){if(!H9||s5||!T6)return;H9=!1,bZ.setFromCamera(nZ,S6);let J=bZ.intersectObjects(n5,!1)[0],Q=J?Xq(J.object):null,$=Q||(J?J.object:null);if($!==K9){if(g8(),$)aZ($)}if($&&M7)Hq(Q?Q.name.replace(/_/g," "):lZ)}L7.addEventListener("pointermove",(J)=>{let Q=L7.getBoundingClientRect();nZ.set((J.clientX-Q.left)/Q.width*2-1,-((J.clientY-Q.top)/Q.height)*2+1),sZ=J.clientX,iZ=J.clientY,H9=!0});L7.addEventListener("pointerdown",()=>{s5=!0,g8()});window.addEventListener("pointerup",()=>{s5=!1,H9=!0});L7.addEventListener("pointerleave",()=>{H9=!1,g8()});var rZ=R6("legend"),X8=R6("legend-list"),x8=R6("legend-all"),g5=R6("legend-toggle"),k7=[],qq=/(?:[\s_.-]*\d+)+$/,p5=(J)=>J.replace(/_/g," "),Gq=(J)=>{for(let Q=J;Q;Q=Q.parent)if(!Q.visible)return!1;return!0};function XJ(){n5=H8.filter(Gq)}function Y9(J){let Q=[],$=(Z)=>{for(let W of Z.children)if(oZ(W))Q.push(W);else $(W)};return $(J),Q}function tZ(J){return Y9(J).flatMap((Q)=>{let $=tZ(Q);return $.length?$:[Q]})}function eZ(J,Q){let $=[],Z=new Map;for(let W of J){if(Q&&Y9(W).length){$.push({nodes:[W],label:p5(W.name),kids:eZ(tZ(W),!1)});continue}let Y=W.name.replace(qq,"")||W.name,X=Z.get(Y);if(X){X.nodes.push(W);continue}let H={nodes:[W],label:p5(W.name),base:Y};Z.set(Y,H),$.push(H)}for(let W of $)if(W.nodes.length>1)W.label=`${p5(W.base)} ×${W.nodes.length}`;return $}function Uq(){if(!T6)return[];let J=Y9(T6);while(J.length===1&&Y9(J[0]).length)J=Y9(J[0]);return eZ(J,!0)}function HJ(J,Q){for(let $ of J.nodes)$.visible=Q;J.input.checked=Q,J.input.indeterminate=!1;for(let $ of J.kids||[])HJ($,Q)}function pZ(J,Q=!0){let $=J.kids.filter((Z)=>Z.input.checked).length;if(Q)J.nodes[0].visible=$>0;J.input.checked=$===J.kids.length&&J.nodes[0].visible,J.input.indeterminate=$>0&&!J.input.checked}function u5(){let J=k7.filter(($)=>$.input.checked).length,Q=k7.filter(($)=>$.input.checked||$.input.indeterminate).length;x8.checked=k7.length>0&&J===k7.length,x8.indeterminate=Q>0&&!x8.checked}function uZ(J){let Q=document.createElement("div");Q.className=J.kids?"lg-row lg-group":"lg-row";let $=document.createElement("input");$.type="checkbox",$.checked=J.nodes.some((Y)=>Y.visible),J.input=$;let Z=document.createElement("span");Z.className="lg-name",Z.textContent=J.label,Z.title=J.label;let W=document.createElement("label");return W.append($,Z),Q.append(W),Q.addEventListener("pointerenter",()=>{if(K9===J.nodes)return;g8(),aZ(J.nodes)}),Q.addEventListener("pointerleave",()=>{if(K9===J.nodes)g8()}),Q}function JW(){k7=[],X8.replaceChildren(),rZ.style.display="none"}function QW(){JW(),k7=Uq();for(let J of k7){let Q=uZ(J);if(J.input.addEventListener("change",()=>{HJ(J,J.input.checked),u5(),XJ()}),X8.append(Q),!J.kids)continue;let $=document.createElement("div");$.className="lg-kids",$.hidden=J.kids.length>8;let Z=document.createElement("button");Z.className="lg-tri",Z.textContent=$.hidden?"▶":"▼",Z.addEventListener("click",()=>{$.hidden=!$.hidden,Z.textContent=$.hidden?"▶":"▼"}),Q.prepend(Z);for(let W of J.kids)$.append(uZ(W)),W.input.addEventListener("change",()=>{HJ(W,W.input.checked),pZ(J),u5(),XJ()});X8.append($),pZ(J,!1)}rZ.style.display=k7.length?"flex":"none",u5(),XJ()}x8.addEventListener("change",()=>{for(let J of k7)HJ(J,x8.checked);x8.indeterminate=!1,XJ()});g5.addEventListener("click",()=>{X8.hidden=!X8.hidden,g5.textContent=X8.hidden?"+":"−",g5.title=X8.hidden?"show components":"hide components"});function f8(J,Q,$){let Z=J*Math.PI/180,W=Q*Math.PI/180,{radius:Y,height:X}=qJ,H=S6.fov*Math.PI/180,K=Math.min(H/2,Math.atan(Math.tan(H/2)*S6.aspect)),q=Y/Math.sin(K)*1.15,G=new A(0,X/2,0);S6.position.set(G.x+q*Math.sin(Z)*Math.cos(W),G.y+q*Math.sin(W),G.z+q*Math.cos(Z)*Math.cos(W)),S6.near=Math.max(q/1000,0.001),S6.far=q*100,S6.updateProjectionMatrix(),X7.target.copy(G),X7.update()}var KJ=()=>f8(45,30);async function Fq(J){let Q=await fetch(J);if(!Q.ok)throw Error(`${Q.status} ${Q.statusText} for ${J}`);let $=+Q.headers.get("content-length")||0;if(!Q.body||!$)return await Q.arrayBuffer();let Z=Q.body.getReader(),W=new Uint8Array($),Y=0;for(;;){let{done:X,value:H}=await Z.read();if(X)break;W.set(H,Y),Y+=H.length,X9(`loading… ${Math.round(Y/$*100)}%`)}return W.buffer}var mZ=()=>new e7({color:10335432,metalness:0.15,roughness:0.55,flatShading:!0});async function Vq(J,Q){let $=J.split(".").pop().toLowerCase();if($==="stl"){let Z=new I5().parse(Q);return{object:new V6(Z,mZ()),zUp:!0}}if($==="obj"){let Z=new h5().parse(new TextDecoder().decode(Q));return Z.traverse((W)=>{if(W.isMesh)W.material=mZ()}),{object:Z,zUp:!0}}if($==="glb"||$==="gltf")return{object:(await new v5().parseAsync(Q,"./")).scene,zUp:!1};throw Error(`unsupported format: .${$}`)}async function $W(J){X9("loading…"),Jq(),lZ=J.file.split("/").pop().replace(/\.[^.]*$/,"");try{let Q=await Fq(`./${J.file}`),{object:$,zUp:Z}=await Vq(J.file,Q);if(T6=new w6,Z){let H=new w6;H.rotation.x=-Math.PI/2,H.add($),T6.add(H)}else T6.add($);g7.add(T6);let W=new h6().setFromObject(T6),Y=W.getCenter(new A),X=W.getSize(new A);T6.position.set(-Y.x,-W.min.y,-Y.z),qJ={size:X,radius:Math.max(X.length()/2,0.000001),height:X.y},H8=dZ(T6),H8.forEach((H,K)=>{let q=Array.isArray(H.material)?H.material[0]:H.material;if(q&&q.transparent)H.renderOrder=1+K}),ZW(),Zq(),QW(),$q(),KJ(),R6("dims").textContent=`X ${b5(X.x)} × Y ${b5(X.z)} × Z ${b5(X.y)} mm`,R6("meta").textContent=`${cZ().toLocaleString()} tris · ${J.file}`+(J.bytes?` · ${(J.bytes/1048576).toFixed(1)} MB`:""),X9("")}catch(Q){X9(`failed to load ${J.file}: ${Q.message}`,!0)}}function X9(J,Q=!1){let $=R6("status");$.textContent=J,$.className=Q?"error":"",$.style.display=J?"block":"none"}function ZW(){let J=(Q)=>{if("wireframe"in Q)Q.wireframe=Y7.wire};for(let Q of H8)(b8.has(Q)?[Q.material,b8.get(Q)]:[Q.material]).flat().forEach(J)}function m5(J,Q,$){let Z=R6(J);Z.classList.toggle("on",Y7[Q]),Z.addEventListener("click",()=>{Y7[Q]=!Y7[Q],Z.classList.toggle("on",Y7[Q]),$()})}function Eq(){R6("title").textContent=Y8.title,document.title=`${Y8.title} — CAD viewer`;let J=R6("model");if(Y8.models.length>1)Y8.models.forEach((Q,$)=>J.add(new Option(Q.label,$))),J.addEventListener("change",()=>$W(Y8.models[+J.value])),J.style.display="block";R6("btn-fit").addEventListener("click",KJ),R6("btn-iso").addEventListener("click",()=>f8(45,30)),R6("btn-top").addEventListener("click",()=>f8(0,88.5)),R6("btn-front").addEventListener("click",()=>f8(0,0)),R6("btn-right").addEventListener("click",()=>f8(90,0)),m5("btn-grid","grid",()=>{if(Q7)Q7.visible=Y7.grid}),m5("btn-wire","wire",ZW),m5("btn-edges","edges",()=>c5.forEach((Q)=>{Q.visible=Y7.edges})),L7.addEventListener("dblclick",KJ)}function WW(){let J=L7.clientWidth||window.innerWidth,Q=L7.clientHeight||window.innerHeight;h8.setSize(J,Q,!1),S6.aspect=J/Q,S6.updateProjectionMatrix()}async function Oq(){try{let J=await fetch("./manifest.json");if(!J.ok)throw Error(`${J.status} ${J.statusText}`);Y8=await J.json()}catch(J){X9(`failed to load manifest.json: ${J.message}`,!0);return}Eq(),await $W(Y8.models[0])}window.addEventListener("resize",WW);WW();h8.setAnimationLoop(()=>{X7.update(),eK(),Kq(),h8.render(g7,S6)});Oq();window.cadviewer={setView:f8,fit:KJ,scene:g7,camera:S6,controls:X7,legend:{refresh:QW},get bounds(){return qJ}};
