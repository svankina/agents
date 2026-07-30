var d7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},c7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var b$=0;var g$=2;var p$=4;var x9=1000,u$=1001,m$=1002,l$=1003,d$=1004;var c$=1005;var yJ=1006,n$=1007;var vJ=1008;var s$=2300,fJ=2301;var o$=0,h9=1,c8=2;var S7="srgb",W7="srgb-linear";class V7{addEventListener(J,$){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[J]===void 0)Q[J]=[];if(Q[J].indexOf($)===-1)Q[J].push($)}hasEventListener(J,$){if(this._listeners===void 0)return!1;let Q=this._listeners;return Q[J]!==void 0&&Q[J].indexOf($)!==-1}removeEventListener(J,$){if(this._listeners===void 0)return;let Z=this._listeners[J];if(Z!==void 0){let W=Z.indexOf($);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){if(this._listeners===void 0)return;let Q=this._listeners[J.type];if(Q!==void 0){J.target=this;let Z=Q.slice(0);for(let W=0,Y=Z.length;W<Y;W++)Z[W].call(this,J);J.target=null}}}var D6=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],S5=1234567,L8=Math.PI/180,C8=180/Math.PI;function a6(){let J=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(D6[J&255]+D6[J>>8&255]+D6[J>>16&255]+D6[J>>24&255]+"-"+D6[$&255]+D6[$>>8&255]+"-"+D6[$>>16&15|64]+D6[$>>24&255]+"-"+D6[Q&63|128]+D6[Q>>8&255]+"-"+D6[Q>>16&255]+D6[Q>>24&255]+D6[Z&255]+D6[Z>>8&255]+D6[Z>>16&255]+D6[Z>>24&255]).toLowerCase()}function k6(J,$,Q){return Math.max($,Math.min(Q,J))}function xJ(J,$){return(J%$+$)%$}function CZ(J,$,Q,Z,W){return Z+(J-$)*(W-Z)/(Q-$)}function wZ(J,$,Q){if(J!==$)return(Q-J)/($-J);else return 0}function m8(J,$,Q){return(1-Q)*J+Q*$}function _Z(J,$,Q,Z){return m8(J,$,1-Math.exp(-Q*Z))}function IZ(J,$=1){return $-Math.abs(xJ(J,$*2)-$)}function AZ(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*(3-2*J)}function PZ(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*J*(J*(J*6-15)+10)}function TZ(J,$){return J+Math.floor(Math.random()*($-J+1))}function SZ(J,$){return J+Math.random()*($-J)}function jZ(J){return J*(0.5-Math.random())}function yZ(J){if(J!==void 0)S5=J;let $=S5+=1831565813;return $=Math.imul($^$>>>15,$|1),$^=$+Math.imul($^$>>>7,$|61),(($^$>>>14)>>>0)/4294967296}function vZ(J){return J*L8}function fZ(J){return J*C8}function xZ(J){return(J&J-1)===0&&J!==0}function hZ(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function bZ(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function gZ(J,$,Q,Z,W){let{cos:Y,sin:X}=Math,H=Y(Q/2),K=X(Q/2),q=Y(($+Z)/2),G=X(($+Z)/2),U=Y(($-Z)/2),F=X(($-Z)/2),O=Y((Z-$)/2),N=X((Z-$)/2);switch(W){case"XYX":J.set(H*G,K*U,K*F,H*q);break;case"YZY":J.set(K*F,H*G,K*U,H*q);break;case"ZXZ":J.set(K*U,K*F,H*G,H*q);break;case"XZX":J.set(H*G,K*N,K*O,H*q);break;case"YXY":J.set(K*O,H*G,K*N,H*q);break;case"ZYZ":J.set(K*N,K*O,H*G,H*q);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function o6(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function a0(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var b9={DEG2RAD:L8,RAD2DEG:C8,generateUUID:a6,clamp:k6,euclideanModulo:xJ,mapLinear:CZ,inverseLerp:wZ,lerp:m8,damp:_Z,pingpong:IZ,smoothstep:AZ,smootherstep:PZ,randInt:TZ,randFloat:SZ,randFloatSpread:jZ,seededRandom:yZ,degToRad:vZ,radToDeg:fZ,isPowerOfTwo:xZ,ceilPowerOfTwo:hZ,floorPowerOfTwo:bZ,setQuaternionFromProperEuler:gZ,normalize:a0,denormalize:o6};class k0{constructor(J=0,$=0){k0.prototype.isVector2=!0,this.x=J,this.y=$}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,$){return this.x=J,this.y=$,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let $=this.x,Q=this.y,Z=J.elements;return this.x=Z[0]*$+Z[3]*Q+Z[6],this.y=Z[1]*$+Z[4]*Q+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,$){return this.x=Math.max(J.x,Math.min($.x,this.x)),this.y=Math.max(J.y,Math.min($.y,this.y)),this}clampScalar(J,$){return this.x=Math.max(J,Math.min($,this.x)),this.y=Math.max(J,Math.min($,this.y)),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(J,Math.min($,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(k6(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y;return $*$+Q*Q}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this}rotateAround(J,$){let Q=Math.cos($),Z=Math.sin($),W=this.x-J.x,Y=this.y-J.y;return this.x=W*Q-Y*Z+J.x,this.y=W*Z+Y*Q+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class f0{constructor(J,$,Q,Z,W,Y,X,H,K){if(f0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,W,Y,X,H,K)}set(J,$,Q,Z,W,Y,X,H,K){let q=this.elements;return q[0]=J,q[1]=Z,q[2]=X,q[3]=$,q[4]=W,q[5]=H,q[6]=Q,q[7]=Y,q[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],this}extractBasis(J,$,Q){return J.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let $=J.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,W=this.elements,Y=Q[0],X=Q[3],H=Q[6],K=Q[1],q=Q[4],G=Q[7],U=Q[2],F=Q[5],O=Q[8],N=Z[0],R=Z[3],V=Z[6],E=Z[1],M=Z[4],C=Z[7],I=Z[2],y=Z[5],L=Z[8];return W[0]=Y*N+X*E+H*I,W[3]=Y*R+X*M+H*y,W[6]=Y*V+X*C+H*L,W[1]=K*N+q*E+G*I,W[4]=K*R+q*M+G*y,W[7]=K*V+q*C+G*L,W[2]=U*N+F*E+O*I,W[5]=U*R+F*M+O*y,W[8]=U*V+F*C+O*L,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[3]*=J,$[6]*=J,$[1]*=J,$[4]*=J,$[7]*=J,$[2]*=J,$[5]*=J,$[8]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],W=J[3],Y=J[4],X=J[5],H=J[6],K=J[7],q=J[8];return $*Y*q-$*X*K-Q*W*q+Q*X*H+Z*W*K-Z*Y*H}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],W=J[3],Y=J[4],X=J[5],H=J[6],K=J[7],q=J[8],G=q*Y-X*K,U=X*H-q*W,F=K*W-Y*H,O=$*G+Q*U+Z*F;if(O===0)return this.set(0,0,0,0,0,0,0,0,0);let N=1/O;return J[0]=G*N,J[1]=(Z*K-q*Q)*N,J[2]=(X*Q-Z*Y)*N,J[3]=U*N,J[4]=(q*$-Z*H)*N,J[5]=(Z*W-X*$)*N,J[6]=F*N,J[7]=(Q*H-K*$)*N,J[8]=(Y*$-Q*W)*N,this}transpose(){let J,$=this.elements;return J=$[1],$[1]=$[3],$[3]=J,J=$[2],$[2]=$[6],$[6]=J,J=$[5],$[5]=$[7],$[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let $=this.elements;return J[0]=$[0],J[1]=$[3],J[2]=$[6],J[3]=$[1],J[4]=$[4],J[5]=$[7],J[6]=$[2],J[7]=$[5],J[8]=$[8],this}setUvTransform(J,$,Q,Z,W,Y,X){let H=Math.cos(W),K=Math.sin(W);return this.set(Q*H,Q*K,-Q*(H*Y+K*X)+Y+J,-Z*K,Z*H,-Z*(-K*Y+H*X)+X+$,0,0,1),this}scale(J,$){return this.premultiply(JJ.makeScale(J,$)),this}rotate(J){return this.premultiply(JJ.makeRotation(-J)),this}translate(J,$){return this.premultiply(JJ.makeTranslation(J,$)),this}makeTranslation(J,$){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,$,0,0,1);return this}makeRotation(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,Q,$,0,0,0,1),this}makeScale(J,$){return this.set(J,0,0,0,$,0,0,0,1),this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<9;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<9;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var JJ=new f0;function i$(J){for(let $=J.length-1;$>=0;--$)if(J[$]>=65535)return!0;return!1}function d8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function pZ(){let J=d8("canvas");return J.style.display="block",J}var j5={};function hJ(J){if(J in j5)return;j5[J]=!0,console.warn(J)}function uZ(J,$,Q){return new Promise(function(Z,W){function Y(){switch(J.clientWaitSync($,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(Y,Q);break;default:Z()}}setTimeout(Y,Q)})}var y5=new f0().set(0.8224621,0.177538,0,0.0331941,0.9668058,0,0.0170827,0.0723974,0.9105199),v5=new f0().set(1.2249401,-0.2249404,0,-0.0420569,1.0420571,0,-0.0196376,-0.0786361,1.0982735),Q9={["srgb-linear"]:{transfer:"linear",primaries:"rec709",toReference:(J)=>J,fromReference:(J)=>J},["srgb"]:{transfer:"srgb",primaries:"rec709",toReference:(J)=>J.convertSRGBToLinear(),fromReference:(J)=>J.convertLinearToSRGB()},["display-p3-linear"]:{transfer:"linear",primaries:"p3",toReference:(J)=>J.applyMatrix3(v5),fromReference:(J)=>J.applyMatrix3(y5)},["display-p3"]:{transfer:"srgb",primaries:"p3",toReference:(J)=>J.convertSRGBToLinear().applyMatrix3(v5),fromReference:(J)=>J.applyMatrix3(y5).convertLinearToSRGB()}},mZ=new Set(["srgb-linear","display-p3-linear"]),c0={enabled:!0,_workingColorSpace:"srgb-linear",get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(J){if(!mZ.has(J))throw Error(`Unsupported working color space, "${J}".`);this._workingColorSpace=J},convert:function(J,$,Q){if(this.enabled===!1||$===Q||!$||!Q)return J;let Z=Q9[$].toReference,W=Q9[Q].fromReference;return W(Z(J))},fromWorkingColorSpace:function(J,$){return this.convert(J,this._workingColorSpace,$)},toWorkingColorSpace:function(J,$){return this.convert(J,$,this._workingColorSpace)},getPrimaries:function(J){return Q9[J].primaries},getTransfer:function(J){if(J==="")return"linear";return Q9[J].transfer}};function D8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function $J(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var W8;class a${static getDataURL(J){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(W8===void 0)W8=d8("canvas");W8.width=J.width,W8.height=J.height;let Q=W8.getContext("2d");if(J instanceof ImageData)Q.putImageData(J,0,0);else Q.drawImage(J,0,0,J.width,J.height);$=W8}if($.width>2048||$.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",J),$.toDataURL("image/jpeg",0.6);else return $.toDataURL("image/png")}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let $=d8("canvas");$.width=J.width,$.height=J.height;let Q=$.getContext("2d");Q.drawImage(J,0,0,J.width,J.height);let Z=Q.getImageData(0,0,J.width,J.height),W=Z.data;for(let Y=0;Y<W.length;Y++)W[Y]=D8(W[Y]/255)*255;return Q.putImageData(Z,0,0),$}else if(J.data){let $=J.data.slice(0);for(let Q=0;Q<$.length;Q++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[Q]=Math.floor(D8($[Q]/255)*255);else $[Q]=D8($[Q]);return{data:$,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var lZ=0;class bJ{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lZ++}),this.uuid=a6(),this.data=J,this.dataReady=!0,this.version=0}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Q={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let Y=0,X=Z.length;Y<X;Y++)if(Z[Y].isDataTexture)W.push(QJ(Z[Y].image));else W.push(QJ(Z[Y]))}else W=QJ(Z);Q.url=W}if(!$)J.images[this.uuid]=Q;return Q}}function QJ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return a$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var dZ=0;class E6 extends V7{constructor(J=E6.DEFAULT_IMAGE,$=E6.DEFAULT_MAPPING,Q=1001,Z=1001,W=1006,Y=1008,X=1023,H=1009,K=E6.DEFAULT_ANISOTROPY,q=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:dZ++}),this.uuid=a6(),this.name="",this.source=new bJ(J),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=Q,this.wrapT=Z,this.magFilter=W,this.minFilter=Y,this.anisotropy=K,this.format=X,this.internalFormat=null,this.type=H,this.offset=new k0(0,0),this.repeat=new k0(1,1),this.center=new k0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new f0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=q,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Q={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!$)J.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}E6.DEFAULT_IMAGE=null;E6.DEFAULT_MAPPING=300;E6.DEFAULT_ANISOTROPY=1;class r0{constructor(J=0,$=0,Q=0,Z=1){r0.prototype.isVector4=!0,this.x=J,this.y=$,this.z=Q,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,$,Q,Z){return this.x=J,this.y=$,this.z=Q,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this.w=J.w+$.w,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this.w+=J.w*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this.w=J.w-$.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,W=this.w,Y=J.elements;return this.x=Y[0]*$+Y[4]*Q+Y[8]*Z+Y[12]*W,this.y=Y[1]*$+Y[5]*Q+Y[9]*Z+Y[13]*W,this.z=Y[2]*$+Y[6]*Q+Y[10]*Z+Y[14]*W,this.w=Y[3]*$+Y[7]*Q+Y[11]*Z+Y[15]*W,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let $=Math.sqrt(1-J.w*J.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/$,this.y=J.y/$,this.z=J.z/$;return this}setAxisAngleFromRotationMatrix(J){let $,Q,Z,W,Y=0.01,X=0.1,H=J.elements,K=H[0],q=H[4],G=H[8],U=H[1],F=H[5],O=H[9],N=H[2],R=H[6],V=H[10];if(Math.abs(q-U)<0.01&&Math.abs(G-N)<0.01&&Math.abs(O-R)<0.01){if(Math.abs(q+U)<0.1&&Math.abs(G+N)<0.1&&Math.abs(O+R)<0.1&&Math.abs(K+F+V-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let M=(K+1)/2,C=(F+1)/2,I=(V+1)/2,y=(q+U)/4,L=(G+N)/4,S=(O+R)/4;if(M>C&&M>I)if(M<0.01)Q=0,Z=0.707106781,W=0.707106781;else Q=Math.sqrt(M),Z=y/Q,W=L/Q;else if(C>I)if(C<0.01)Q=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(C),Q=y/Z,W=S/Z;else if(I<0.01)Q=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(I),Q=L/W,Z=S/W;return this.set(Q,Z,W,$),this}let E=Math.sqrt((R-O)*(R-O)+(G-N)*(G-N)+(U-q)*(U-q));if(Math.abs(E)<0.001)E=1;return this.x=(R-O)/E,this.y=(G-N)/E,this.z=(U-q)/E,this.w=Math.acos((K+F+V-1)/2),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this.w=$[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,$){return this.x=Math.max(J.x,Math.min($.x,this.x)),this.y=Math.max(J.y,Math.min($.y,this.y)),this.z=Math.max(J.z,Math.min($.z,this.z)),this.w=Math.max(J.w,Math.min($.w,this.w)),this}clampScalar(J,$){return this.x=Math.max(J,Math.min($,this.x)),this.y=Math.max(J,Math.min($,this.y)),this.z=Math.max(J,Math.min($,this.z)),this.w=Math.max(J,Math.min($,this.w)),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(J,Math.min($,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this.w+=(J.w-this.w)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this.w=J.w+($.w-J.w)*Q,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this.w=J[$+3],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J[$+3]=this.w,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this.w=J.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r$ extends V7{constructor(J=1,$=1,Q={}){super();this.isRenderTarget=!0,this.width=J,this.height=$,this.depth=1,this.scissor=new r0(0,0,J,$),this.scissorTest=!1,this.viewport=new r0(0,0,J,$);let Z={width:J,height:$,depth:1};Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},Q);let W=new E6(Z,Q.mapping,Q.wrapS,Q.wrapT,Q.magFilter,Q.minFilter,Q.format,Q.type,Q.anisotropy,Q.colorSpace);W.flipY=!1,W.generateMipmaps=Q.generateMipmaps,W.internalFormat=Q.internalFormat,this.textures=[];let Y=Q.count;for(let X=0;X<Y;X++)this.textures[X]=W.clone(),this.textures[X].isRenderTargetTexture=!0;this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.resolveDepthBuffer=Q.resolveDepthBuffer,this.resolveStencilBuffer=Q.resolveStencilBuffer,this.depthTexture=Q.depthTexture,this.samples=Q.samples}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}setSize(J,$,Q=1){if(this.width!==J||this.height!==$||this.depth!==Q){this.width=J,this.height=$,this.depth=Q;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=J,this.textures[Z].image.height=$,this.textures[Z].image.depth=Q;this.dispose()}this.viewport.set(0,0,J,$),this.scissor.set(0,0,J,$)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++)this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0;let $=Object.assign({},J.texture.image);if(this.texture.source=new bJ($),this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class A7 extends r${constructor(J=1,$=1,Q={}){super(J,$,Q);this.isWebGLRenderTarget=!0}}class gJ extends E6{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class t$ extends E6{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class v6{constructor(J=0,$=0,Q=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=$,this._z=Q,this._w=Z}static slerpFlat(J,$,Q,Z,W,Y,X){let H=Q[Z+0],K=Q[Z+1],q=Q[Z+2],G=Q[Z+3],U=W[Y+0],F=W[Y+1],O=W[Y+2],N=W[Y+3];if(X===0){J[$+0]=H,J[$+1]=K,J[$+2]=q,J[$+3]=G;return}if(X===1){J[$+0]=U,J[$+1]=F,J[$+2]=O,J[$+3]=N;return}if(G!==N||H!==U||K!==F||q!==O){let R=1-X,V=H*U+K*F+q*O+G*N,E=V>=0?1:-1,M=1-V*V;if(M>Number.EPSILON){let I=Math.sqrt(M),y=Math.atan2(I,V*E);R=Math.sin(R*y)/I,X=Math.sin(X*y)/I}let C=X*E;if(H=H*R+U*C,K=K*R+F*C,q=q*R+O*C,G=G*R+N*C,R===1-X){let I=1/Math.sqrt(H*H+K*K+q*q+G*G);H*=I,K*=I,q*=I,G*=I}}J[$]=H,J[$+1]=K,J[$+2]=q,J[$+3]=G}static multiplyQuaternionsFlat(J,$,Q,Z,W,Y){let X=Q[Z],H=Q[Z+1],K=Q[Z+2],q=Q[Z+3],G=W[Y],U=W[Y+1],F=W[Y+2],O=W[Y+3];return J[$]=X*O+q*G+H*F-K*U,J[$+1]=H*O+q*U+K*G-X*F,J[$+2]=K*O+q*F+X*U-H*G,J[$+3]=q*O-X*G-H*U-K*F,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,$,Q,Z){return this._x=J,this._y=$,this._z=Q,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,$=!0){let{_x:Q,_y:Z,_z:W,_order:Y}=J,X=Math.cos,H=Math.sin,K=X(Q/2),q=X(Z/2),G=X(W/2),U=H(Q/2),F=H(Z/2),O=H(W/2);switch(Y){case"XYZ":this._x=U*q*G+K*F*O,this._y=K*F*G-U*q*O,this._z=K*q*O+U*F*G,this._w=K*q*G-U*F*O;break;case"YXZ":this._x=U*q*G+K*F*O,this._y=K*F*G-U*q*O,this._z=K*q*O-U*F*G,this._w=K*q*G+U*F*O;break;case"ZXY":this._x=U*q*G-K*F*O,this._y=K*F*G+U*q*O,this._z=K*q*O+U*F*G,this._w=K*q*G-U*F*O;break;case"ZYX":this._x=U*q*G-K*F*O,this._y=K*F*G+U*q*O,this._z=K*q*O-U*F*G,this._w=K*q*G+U*F*O;break;case"YZX":this._x=U*q*G+K*F*O,this._y=K*F*G+U*q*O,this._z=K*q*O-U*F*G,this._w=K*q*G-U*F*O;break;case"XZY":this._x=U*q*G-K*F*O,this._y=K*F*G-U*q*O,this._z=K*q*O+U*F*G,this._w=K*q*G+U*F*O;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Y)}if($===!0)this._onChangeCallback();return this}setFromAxisAngle(J,$){let Q=$/2,Z=Math.sin(Q);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix(J){let $=J.elements,Q=$[0],Z=$[4],W=$[8],Y=$[1],X=$[5],H=$[9],K=$[2],q=$[6],G=$[10],U=Q+X+G;if(U>0){let F=0.5/Math.sqrt(U+1);this._w=0.25/F,this._x=(q-H)*F,this._y=(W-K)*F,this._z=(Y-Z)*F}else if(Q>X&&Q>G){let F=2*Math.sqrt(1+Q-X-G);this._w=(q-H)/F,this._x=0.25*F,this._y=(Z+Y)/F,this._z=(W+K)/F}else if(X>G){let F=2*Math.sqrt(1+X-Q-G);this._w=(W-K)/F,this._x=(Z+Y)/F,this._y=0.25*F,this._z=(H+q)/F}else{let F=2*Math.sqrt(1+G-Q-X);this._w=(Y-Z)/F,this._x=(W+K)/F,this._y=(H+q)/F,this._z=0.25*F}return this._onChangeCallback(),this}setFromUnitVectors(J,$){let Q=J.dot($)+1;if(Q<Number.EPSILON)if(Q=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Q;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Q;else this._x=J.y*$.z-J.z*$.y,this._y=J.z*$.x-J.x*$.z,this._z=J.x*$.y-J.y*$.x,this._w=Q;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(k6(this.dot(J),-1,1)))}rotateTowards(J,$){let Q=this.angleTo(J);if(Q===0)return this;let Z=Math.min(1,$/Q);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,$){let{_x:Q,_y:Z,_z:W,_w:Y}=J,X=$._x,H=$._y,K=$._z,q=$._w;return this._x=Q*q+Y*X+Z*K-W*H,this._y=Z*q+Y*H+W*X-Q*K,this._z=W*q+Y*K+Q*H-Z*X,this._w=Y*q-Q*X-Z*H-W*K,this._onChangeCallback(),this}slerp(J,$){if($===0)return this;if($===1)return this.copy(J);let Q=this._x,Z=this._y,W=this._z,Y=this._w,X=Y*J._w+Q*J._x+Z*J._y+W*J._z;if(X<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,X=-X;else this.copy(J);if(X>=1)return this._w=Y,this._x=Q,this._y=Z,this._z=W,this;let H=1-X*X;if(H<=Number.EPSILON){let F=1-$;return this._w=F*Y+$*this._w,this._x=F*Q+$*this._x,this._y=F*Z+$*this._y,this._z=F*W+$*this._z,this.normalize(),this}let K=Math.sqrt(H),q=Math.atan2(K,X),G=Math.sin((1-$)*q)/K,U=Math.sin($*q)/K;return this._w=Y*G+this._w*U,this._x=Q*G+this._x*U,this._y=Z*G+this._y*U,this._z=W*G+this._z*U,this._onChangeCallback(),this}slerpQuaternions(J,$,Q){return this.copy(J).slerp($,Q)}random(){let J=2*Math.PI*Math.random(),$=2*Math.PI*Math.random(),Q=Math.random(),Z=Math.sqrt(1-Q),W=Math.sqrt(Q);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin($),W*Math.cos($))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,$=0){return this._x=J[$],this._y=J[$+1],this._z=J[$+2],this._w=J[$+3],this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._w,J}fromBufferAttribute(J,$){return this._x=J.getX($),this._y=J.getY($),this._z=J.getZ($),this._w=J.getW($),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(J=0,$=0,Q=0){P.prototype.isVector3=!0,this.x=J,this.y=$,this.z=Q}set(J,$,Q){if(Q===void 0)Q=this.z;return this.x=J,this.y=$,this.z=Q,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,$){return this.x=J.x*$.x,this.y=J.y*$.y,this.z=J.z*$.z,this}applyEuler(J){return this.applyQuaternion(f5.setFromEuler(J))}applyAxisAngle(J,$){return this.applyQuaternion(f5.setFromAxisAngle(J,$))}applyMatrix3(J){let $=this.x,Q=this.y,Z=this.z,W=J.elements;return this.x=W[0]*$+W[3]*Q+W[6]*Z,this.y=W[1]*$+W[4]*Q+W[7]*Z,this.z=W[2]*$+W[5]*Q+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,W=J.elements,Y=1/(W[3]*$+W[7]*Q+W[11]*Z+W[15]);return this.x=(W[0]*$+W[4]*Q+W[8]*Z+W[12])*Y,this.y=(W[1]*$+W[5]*Q+W[9]*Z+W[13])*Y,this.z=(W[2]*$+W[6]*Q+W[10]*Z+W[14])*Y,this}applyQuaternion(J){let $=this.x,Q=this.y,Z=this.z,W=J.x,Y=J.y,X=J.z,H=J.w,K=2*(Y*Z-X*Q),q=2*(X*$-W*Z),G=2*(W*Q-Y*$);return this.x=$+H*K+Y*G-X*q,this.y=Q+H*q+X*K-W*G,this.z=Z+H*G+W*q-Y*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let $=this.x,Q=this.y,Z=this.z,W=J.elements;return this.x=W[0]*$+W[4]*Q+W[8]*Z,this.y=W[1]*$+W[5]*Q+W[9]*Z,this.z=W[2]*$+W[6]*Q+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,$){return this.x=Math.max(J.x,Math.min($.x,this.x)),this.y=Math.max(J.y,Math.min($.y,this.y)),this.z=Math.max(J.z,Math.min($.z,this.z)),this}clampScalar(J,$){return this.x=Math.max(J,Math.min($,this.x)),this.y=Math.max(J,Math.min($,this.y)),this.z=Math.max(J,Math.min($,this.z)),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(J,Math.min($,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,$){let{x:Q,y:Z,z:W}=J,Y=$.x,X=$.y,H=$.z;return this.x=Z*H-W*X,this.y=W*Y-Q*H,this.z=Q*X-Z*Y,this}projectOnVector(J){let $=J.lengthSq();if($===0)return this.set(0,0,0);let Q=J.dot(this)/$;return this.copy(J).multiplyScalar(Q)}projectOnPlane(J){return ZJ.copy(this).projectOnVector(J),this.sub(ZJ)}reflect(J){return this.sub(ZJ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(k6(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y,Z=this.z-J.z;return $*$+Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,$,Q){let Z=Math.sin($)*J;return this.x=Z*Math.sin(Q),this.y=Math.cos($)*J,this.z=Z*Math.cos(Q),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,$,Q){return this.x=J*Math.sin($),this.y=Q,this.z=J*Math.cos($),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(J){let $=this.setFromMatrixColumn(J,0).length(),Q=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=$,this.y=Q,this.z=Z,this}setFromMatrixColumn(J,$){return this.fromArray(J.elements,$*4)}setFromMatrix3Column(J,$){return this.fromArray(J.elements,$*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,$=Math.random()*2-1,Q=Math.sqrt(1-$*$);return this.x=Q*Math.cos(J),this.y=$,this.z=Q*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var ZJ=new P,f5=new v6;class f6{constructor(J=new P(1/0,1/0,1/0),$=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=$}set(J,$){return this.min.copy(J),this.max.copy($),this}setFromArray(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$+=3)this.expandByPoint(c6.fromArray(J,$));return this}setFromBufferAttribute(J){this.makeEmpty();for(let $=0,Q=J.count;$<Q;$++)this.expandByPoint(c6.fromBufferAttribute(J,$));return this}setFromPoints(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$++)this.expandByPoint(J[$]);return this}setFromCenterAndSize(J,$){let Q=c6.copy($).multiplyScalar(0.5);return this.min.copy(J).sub(Q),this.max.copy(J).add(Q),this}setFromObject(J,$=!1){return this.makeEmpty(),this.expandByObject(J,$)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,$=!1){J.updateWorldMatrix(!1,!1);let Q=J.geometry;if(Q!==void 0){let W=Q.getAttribute("position");if($===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let Y=0,X=W.count;Y<X;Y++){if(J.isMesh===!0)J.getVertexPosition(Y,c6);else c6.fromBufferAttribute(W,Y);c6.applyMatrix4(J.matrixWorld),this.expandByPoint(c6)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();Z9.copy(J.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();Z9.copy(Q.boundingBox)}Z9.applyMatrix4(J.matrixWorld),this.union(Z9)}}let Z=J.children;for(let W=0,Y=Z.length;W<Y;W++)this.expandByObject(Z[W],$);return this}containsPoint(J){return J.x<this.min.x||J.x>this.max.x||J.y<this.min.y||J.y>this.max.y||J.z<this.min.z||J.z>this.max.z?!1:!0}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,$){return $.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x<this.min.x||J.min.x>this.max.x||J.max.y<this.min.y||J.min.y>this.max.y||J.max.z<this.min.z||J.min.z>this.max.z?!1:!0}intersectsSphere(J){return this.clampPoint(J.center,c6),c6.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let $,Q;if(J.normal.x>0)$=J.normal.x*this.min.x,Q=J.normal.x*this.max.x;else $=J.normal.x*this.max.x,Q=J.normal.x*this.min.x;if(J.normal.y>0)$+=J.normal.y*this.min.y,Q+=J.normal.y*this.max.y;else $+=J.normal.y*this.max.y,Q+=J.normal.y*this.min.y;if(J.normal.z>0)$+=J.normal.z*this.min.z,Q+=J.normal.z*this.max.z;else $+=J.normal.z*this.max.z,Q+=J.normal.z*this.min.z;return $<=-J.constant&&Q>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(y8),W9.subVectors(this.max,y8),Y8.subVectors(J.a,y8),X8.subVectors(J.b,y8),H8.subVectors(J.c,y8),k7.subVectors(X8,Y8),L7.subVectors(H8,X8),x7.subVectors(Y8,H8);let $=[0,-k7.z,k7.y,0,-L7.z,L7.y,0,-x7.z,x7.y,k7.z,0,-k7.x,L7.z,0,-L7.x,x7.z,0,-x7.x,-k7.y,k7.x,0,-L7.y,L7.x,0,-x7.y,x7.x,0];if(!WJ($,Y8,X8,H8,W9))return!1;if($=[1,0,0,0,1,0,0,0,1],!WJ($,Y8,X8,H8,W9))return!1;return Y9.crossVectors(k7,L7),$=[Y9.x,Y9.y,Y9.z],WJ($,Y8,X8,H8,W9)}clampPoint(J,$){return $.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,c6).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(c6).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return X7[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),X7[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),X7[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),X7[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),X7[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),X7[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),X7[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),X7[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(X7),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var X7=[new P,new P,new P,new P,new P,new P,new P,new P],c6=new P,Z9=new f6,Y8=new P,X8=new P,H8=new P,k7=new P,L7=new P,x7=new P,y8=new P,W9=new P,Y9=new P,h7=new P;function WJ(J,$,Q,Z,W){for(let Y=0,X=J.length-3;Y<=X;Y+=3){h7.fromArray(J,Y);let H=W.x*Math.abs(h7.x)+W.y*Math.abs(h7.y)+W.z*Math.abs(h7.z),K=$.dot(h7),q=Q.dot(h7),G=Z.dot(h7);if(Math.max(-Math.max(K,q,G),Math.min(K,q,G))>H)return!1}return!0}var cZ=new f6,v8=new P,YJ=new P;class b6{constructor(J=new P,$=-1){this.isSphere=!0,this.center=J,this.radius=$}set(J,$){return this.center.copy(J),this.radius=$,this}setFromPoints(J,$){let Q=this.center;if($!==void 0)Q.copy($);else cZ.setFromPoints(J).getCenter(Q);let Z=0;for(let W=0,Y=J.length;W<Y;W++)Z=Math.max(Z,Q.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let $=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=$*$}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,$){let Q=this.center.distanceToSquared(J);if($.copy(J),Q>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;v8.subVectors(J,this.center);let $=v8.lengthSq();if($>this.radius*this.radius){let Q=Math.sqrt($),Z=(Q-this.radius)*0.5;this.center.addScaledVector(v8,Z/Q),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else YJ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(v8.copy(J.center).add(YJ)),this.expandByPoint(v8.copy(J.center).sub(YJ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}}var H7=new P,XJ=new P,X9=new P,D7=new P,HJ=new P,H9=new P,KJ=new P;class n7{constructor(J=new P,$=new P(0,0,-1)){this.origin=J,this.direction=$}set(J,$){return this.origin.copy(J),this.direction.copy($),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,$){return $.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,H7)),this}closestPointToPoint(J,$){$.subVectors(J,this.origin);let Q=$.dot(this.direction);if(Q<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let $=H7.subVectors(J,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(J);return H7.copy(this.origin).addScaledVector(this.direction,$),H7.distanceToSquared(J)}distanceSqToSegment(J,$,Q,Z){XJ.copy(J).add($).multiplyScalar(0.5),X9.copy($).sub(J).normalize(),D7.copy(this.origin).sub(XJ);let W=J.distanceTo($)*0.5,Y=-this.direction.dot(X9),X=D7.dot(this.direction),H=-D7.dot(X9),K=D7.lengthSq(),q=Math.abs(1-Y*Y),G,U,F,O;if(q>0)if(G=Y*H-X,U=Y*X-H,O=W*q,G>=0)if(U>=-O)if(U<=O){let N=1/q;G*=N,U*=N,F=G*(G+Y*U+2*X)+U*(Y*G+U+2*H)+K}else U=W,G=Math.max(0,-(Y*U+X)),F=-G*G+U*(U+2*H)+K;else U=-W,G=Math.max(0,-(Y*U+X)),F=-G*G+U*(U+2*H)+K;else if(U<=-O)G=Math.max(0,-(-Y*W+X)),U=G>0?-W:Math.min(Math.max(-W,-H),W),F=-G*G+U*(U+2*H)+K;else if(U<=O)G=0,U=Math.min(Math.max(-W,-H),W),F=U*(U+2*H)+K;else G=Math.max(0,-(Y*W+X)),U=G>0?W:Math.min(Math.max(-W,-H),W),F=-G*G+U*(U+2*H)+K;else U=Y>0?-W:W,G=Math.max(0,-(Y*U+X)),F=-G*G+U*(U+2*H)+K;if(Q)Q.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(XJ).addScaledVector(X9,U);return F}intersectSphere(J,$){H7.subVectors(J.center,this.origin);let Q=H7.dot(this.direction),Z=H7.dot(H7)-Q*Q,W=J.radius*J.radius;if(Z>W)return null;let Y=Math.sqrt(W-Z),X=Q-Y,H=Q+Y;if(H<0)return null;if(X<0)return this.at(H,$);return this.at(X,$)}intersectsSphere(J){return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let $=J.normal.dot(this.direction);if($===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot(J.normal)+J.constant)/$;return Q>=0?Q:null}intersectPlane(J,$){let Q=this.distanceToPlane(J);if(Q===null)return null;return this.at(Q,$)}intersectsPlane(J){let $=J.distanceToPoint(this.origin);if($===0)return!0;if(J.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(J,$){let Q,Z,W,Y,X,H,K=1/this.direction.x,q=1/this.direction.y,G=1/this.direction.z,U=this.origin;if(K>=0)Q=(J.min.x-U.x)*K,Z=(J.max.x-U.x)*K;else Q=(J.max.x-U.x)*K,Z=(J.min.x-U.x)*K;if(q>=0)W=(J.min.y-U.y)*q,Y=(J.max.y-U.y)*q;else W=(J.max.y-U.y)*q,Y=(J.min.y-U.y)*q;if(Q>Y||W>Z)return null;if(W>Q||isNaN(Q))Q=W;if(Y<Z||isNaN(Z))Z=Y;if(G>=0)X=(J.min.z-U.z)*G,H=(J.max.z-U.z)*G;else X=(J.max.z-U.z)*G,H=(J.min.z-U.z)*G;if(Q>H||X>Z)return null;if(X>Q||Q!==Q)Q=X;if(H<Z||Z!==Z)Z=H;if(Z<0)return null;return this.at(Q>=0?Q:Z,$)}intersectsBox(J){return this.intersectBox(J,H7)!==null}intersectTriangle(J,$,Q,Z,W){HJ.subVectors($,J),H9.subVectors(Q,J),KJ.crossVectors(HJ,H9);let Y=this.direction.dot(KJ),X;if(Y>0){if(Z)return null;X=1}else if(Y<0)X=-1,Y=-Y;else return null;D7.subVectors(this.origin,J);let H=X*this.direction.dot(H9.crossVectors(D7,H9));if(H<0)return null;let K=X*this.direction.dot(HJ.cross(D7));if(K<0)return null;if(H+K>Y)return null;let q=-X*D7.dot(KJ);if(q<0)return null;return this.at(q/Y,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class y0{constructor(J,$,Q,Z,W,Y,X,H,K,q,G,U,F,O,N,R){if(y0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,W,Y,X,H,K,q,G,U,F,O,N,R)}set(J,$,Q,Z,W,Y,X,H,K,q,G,U,F,O,N,R){let V=this.elements;return V[0]=J,V[4]=$,V[8]=Q,V[12]=Z,V[1]=W,V[5]=Y,V[9]=X,V[13]=H,V[2]=K,V[6]=q,V[10]=G,V[14]=U,V[3]=F,V[7]=O,V[11]=N,V[15]=R,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new y0().fromArray(this.elements)}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],$[9]=Q[9],$[10]=Q[10],$[11]=Q[11],$[12]=Q[12],$[13]=Q[13],$[14]=Q[14],$[15]=Q[15],this}copyPosition(J){let $=this.elements,Q=J.elements;return $[12]=Q[12],$[13]=Q[13],$[14]=Q[14],this}setFromMatrix3(J){let $=J.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(J,$,Q){return J.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis(J,$,Q){return this.set(J.x,$.x,Q.x,0,J.y,$.y,Q.y,0,J.z,$.z,Q.z,0,0,0,0,1),this}extractRotation(J){let $=this.elements,Q=J.elements,Z=1/K8.setFromMatrixColumn(J,0).length(),W=1/K8.setFromMatrixColumn(J,1).length(),Y=1/K8.setFromMatrixColumn(J,2).length();return $[0]=Q[0]*Z,$[1]=Q[1]*Z,$[2]=Q[2]*Z,$[3]=0,$[4]=Q[4]*W,$[5]=Q[5]*W,$[6]=Q[6]*W,$[7]=0,$[8]=Q[8]*Y,$[9]=Q[9]*Y,$[10]=Q[10]*Y,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(J){let $=this.elements,Q=J.x,Z=J.y,W=J.z,Y=Math.cos(Q),X=Math.sin(Q),H=Math.cos(Z),K=Math.sin(Z),q=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let U=Y*q,F=Y*G,O=X*q,N=X*G;$[0]=H*q,$[4]=-H*G,$[8]=K,$[1]=F+O*K,$[5]=U-N*K,$[9]=-X*H,$[2]=N-U*K,$[6]=O+F*K,$[10]=Y*H}else if(J.order==="YXZ"){let U=H*q,F=H*G,O=K*q,N=K*G;$[0]=U+N*X,$[4]=O*X-F,$[8]=Y*K,$[1]=Y*G,$[5]=Y*q,$[9]=-X,$[2]=F*X-O,$[6]=N+U*X,$[10]=Y*H}else if(J.order==="ZXY"){let U=H*q,F=H*G,O=K*q,N=K*G;$[0]=U-N*X,$[4]=-Y*G,$[8]=O+F*X,$[1]=F+O*X,$[5]=Y*q,$[9]=N-U*X,$[2]=-Y*K,$[6]=X,$[10]=Y*H}else if(J.order==="ZYX"){let U=Y*q,F=Y*G,O=X*q,N=X*G;$[0]=H*q,$[4]=O*K-F,$[8]=U*K+N,$[1]=H*G,$[5]=N*K+U,$[9]=F*K-O,$[2]=-K,$[6]=X*H,$[10]=Y*H}else if(J.order==="YZX"){let U=Y*H,F=Y*K,O=X*H,N=X*K;$[0]=H*q,$[4]=N-U*G,$[8]=O*G+F,$[1]=G,$[5]=Y*q,$[9]=-X*q,$[2]=-K*q,$[6]=F*G+O,$[10]=U-N*G}else if(J.order==="XZY"){let U=Y*H,F=Y*K,O=X*H,N=X*K;$[0]=H*q,$[4]=-G,$[8]=K*q,$[1]=U*G+N,$[5]=Y*q,$[9]=F*G-O,$[2]=O*G-F,$[6]=X*q,$[10]=N*G+U}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(J){return this.compose(nZ,J,sZ)}lookAt(J,$,Q){let Z=this.elements;if(j6.subVectors(J,$),j6.lengthSq()===0)j6.z=1;if(j6.normalize(),C7.crossVectors(Q,j6),C7.lengthSq()===0){if(Math.abs(Q.z)===1)j6.x+=0.0001;else j6.z+=0.0001;j6.normalize(),C7.crossVectors(Q,j6)}return C7.normalize(),K9.crossVectors(j6,C7),Z[0]=C7.x,Z[4]=K9.x,Z[8]=j6.x,Z[1]=C7.y,Z[5]=K9.y,Z[9]=j6.y,Z[2]=C7.z,Z[6]=K9.z,Z[10]=j6.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,W=this.elements,Y=Q[0],X=Q[4],H=Q[8],K=Q[12],q=Q[1],G=Q[5],U=Q[9],F=Q[13],O=Q[2],N=Q[6],R=Q[10],V=Q[14],E=Q[3],M=Q[7],C=Q[11],I=Q[15],y=Z[0],L=Z[4],S=Z[8],b=Z[12],D=Z[1],k=Z[5],j=Z[9],u=Z[13],n=Z[2],d=Z[6],s=Z[10],l=Z[14],e=Z[3],m=Z[7],q0=Z[11],F0=Z[15];return W[0]=Y*y+X*D+H*n+K*e,W[4]=Y*L+X*k+H*d+K*m,W[8]=Y*S+X*j+H*s+K*q0,W[12]=Y*b+X*u+H*l+K*F0,W[1]=q*y+G*D+U*n+F*e,W[5]=q*L+G*k+U*d+F*m,W[9]=q*S+G*j+U*s+F*q0,W[13]=q*b+G*u+U*l+F*F0,W[2]=O*y+N*D+R*n+V*e,W[6]=O*L+N*k+R*d+V*m,W[10]=O*S+N*j+R*s+V*q0,W[14]=O*b+N*u+R*l+V*F0,W[3]=E*y+M*D+C*n+I*e,W[7]=E*L+M*k+C*d+I*m,W[11]=E*S+M*j+C*s+I*q0,W[15]=E*b+M*u+C*l+I*F0,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[4]*=J,$[8]*=J,$[12]*=J,$[1]*=J,$[5]*=J,$[9]*=J,$[13]*=J,$[2]*=J,$[6]*=J,$[10]*=J,$[14]*=J,$[3]*=J,$[7]*=J,$[11]*=J,$[15]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],W=J[12],Y=J[1],X=J[5],H=J[9],K=J[13],q=J[2],G=J[6],U=J[10],F=J[14],O=J[3],N=J[7],R=J[11],V=J[15];return O*(+W*H*G-Z*K*G-W*X*U+Q*K*U+Z*X*F-Q*H*F)+N*(+$*H*F-$*K*U+W*Y*U-Z*Y*F+Z*K*q-W*H*q)+R*(+$*K*G-$*X*F-W*Y*G+Q*Y*F+W*X*q-Q*K*q)+V*(-Z*X*q-$*H*G+$*X*U+Z*Y*G-Q*Y*U+Q*H*q)}transpose(){let J=this.elements,$;return $=J[1],J[1]=J[4],J[4]=$,$=J[2],J[2]=J[8],J[8]=$,$=J[6],J[6]=J[9],J[9]=$,$=J[3],J[3]=J[12],J[12]=$,$=J[7],J[7]=J[13],J[13]=$,$=J[11],J[11]=J[14],J[14]=$,this}setPosition(J,$,Q){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=$,Z[14]=Q;return this}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],W=J[3],Y=J[4],X=J[5],H=J[6],K=J[7],q=J[8],G=J[9],U=J[10],F=J[11],O=J[12],N=J[13],R=J[14],V=J[15],E=G*R*K-N*U*K+N*H*F-X*R*F-G*H*V+X*U*V,M=O*U*K-q*R*K-O*H*F+Y*R*F+q*H*V-Y*U*V,C=q*N*K-O*G*K+O*X*F-Y*N*F-q*X*V+Y*G*V,I=O*G*H-q*N*H-O*X*U+Y*N*U+q*X*R-Y*G*R,y=$*E+Q*M+Z*C+W*I;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/y;return J[0]=E*L,J[1]=(N*U*W-G*R*W-N*Z*F+Q*R*F+G*Z*V-Q*U*V)*L,J[2]=(X*R*W-N*H*W+N*Z*K-Q*R*K-X*Z*V+Q*H*V)*L,J[3]=(G*H*W-X*U*W-G*Z*K+Q*U*K+X*Z*F-Q*H*F)*L,J[4]=M*L,J[5]=(q*R*W-O*U*W+O*Z*F-$*R*F-q*Z*V+$*U*V)*L,J[6]=(O*H*W-Y*R*W-O*Z*K+$*R*K+Y*Z*V-$*H*V)*L,J[7]=(Y*U*W-q*H*W+q*Z*K-$*U*K-Y*Z*F+$*H*F)*L,J[8]=C*L,J[9]=(O*G*W-q*N*W-O*Q*F+$*N*F+q*Q*V-$*G*V)*L,J[10]=(Y*N*W-O*X*W+O*Q*K-$*N*K-Y*Q*V+$*X*V)*L,J[11]=(q*X*W-Y*G*W-q*Q*K+$*G*K+Y*Q*F-$*X*F)*L,J[12]=I*L,J[13]=(q*N*Z-O*G*Z+O*Q*U-$*N*U-q*Q*R+$*G*R)*L,J[14]=(O*X*Z-Y*N*Z-O*Q*H+$*N*H+Y*Q*R-$*X*R)*L,J[15]=(Y*G*Z-q*X*Z+q*Q*H-$*G*H-Y*Q*U+$*X*U)*L,this}scale(J){let $=this.elements,Q=J.x,Z=J.y,W=J.z;return $[0]*=Q,$[4]*=Z,$[8]*=W,$[1]*=Q,$[5]*=Z,$[9]*=W,$[2]*=Q,$[6]*=Z,$[10]*=W,$[3]*=Q,$[7]*=Z,$[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,$=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Q=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max($,Q,Z))}makeTranslation(J,$,Q){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,$,0,0,1,Q,0,0,0,1);return this}makeRotationX(J){let $=Math.cos(J),Q=Math.sin(J);return this.set(1,0,0,0,0,$,-Q,0,0,Q,$,0,0,0,0,1),this}makeRotationY(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,0,Q,0,0,1,0,0,-Q,0,$,0,0,0,0,1),this}makeRotationZ(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,0,Q,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,$){let Q=Math.cos($),Z=Math.sin($),W=1-Q,Y=J.x,X=J.y,H=J.z,K=W*Y,q=W*X;return this.set(K*Y+Q,K*X-Z*H,K*H+Z*X,0,K*X+Z*H,q*X+Q,q*H-Z*Y,0,K*H-Z*X,q*H+Z*Y,W*H*H+Q,0,0,0,0,1),this}makeScale(J,$,Q){return this.set(J,0,0,0,0,$,0,0,0,0,Q,0,0,0,0,1),this}makeShear(J,$,Q,Z,W,Y){return this.set(1,Q,W,0,J,1,Y,0,$,Z,1,0,0,0,0,1),this}compose(J,$,Q){let Z=this.elements,W=$._x,Y=$._y,X=$._z,H=$._w,K=W+W,q=Y+Y,G=X+X,U=W*K,F=W*q,O=W*G,N=Y*q,R=Y*G,V=X*G,E=H*K,M=H*q,C=H*G,I=Q.x,y=Q.y,L=Q.z;return Z[0]=(1-(N+V))*I,Z[1]=(F+C)*I,Z[2]=(O-M)*I,Z[3]=0,Z[4]=(F-C)*y,Z[5]=(1-(U+V))*y,Z[6]=(R+E)*y,Z[7]=0,Z[8]=(O+M)*L,Z[9]=(R-E)*L,Z[10]=(1-(U+N))*L,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,$,Q){let Z=this.elements,W=K8.set(Z[0],Z[1],Z[2]).length(),Y=K8.set(Z[4],Z[5],Z[6]).length(),X=K8.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;J.x=Z[12],J.y=Z[13],J.z=Z[14],n6.copy(this);let K=1/W,q=1/Y,G=1/X;return n6.elements[0]*=K,n6.elements[1]*=K,n6.elements[2]*=K,n6.elements[4]*=q,n6.elements[5]*=q,n6.elements[6]*=q,n6.elements[8]*=G,n6.elements[9]*=G,n6.elements[10]*=G,$.setFromRotationMatrix(n6),Q.x=W,Q.y=Y,Q.z=X,this}makePerspective(J,$,Q,Z,W,Y,X=2000){let H=this.elements,K=2*W/($-J),q=2*W/(Q-Z),G=($+J)/($-J),U=(Q+Z)/(Q-Z),F,O;if(X===2000)F=-(Y+W)/(Y-W),O=-2*Y*W/(Y-W);else if(X===2001)F=-Y/(Y-W),O=-Y*W/(Y-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=K,H[4]=0,H[8]=G,H[12]=0,H[1]=0,H[5]=q,H[9]=U,H[13]=0,H[2]=0,H[6]=0,H[10]=F,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,$,Q,Z,W,Y,X=2000){let H=this.elements,K=1/($-J),q=1/(Q-Z),G=1/(Y-W),U=($+J)*K,F=(Q+Z)*q,O,N;if(X===2000)O=(Y+W)*G,N=-2*G;else if(X===2001)O=W*G,N=-1*G;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=2*K,H[4]=0,H[8]=0,H[12]=-U,H[1]=0,H[5]=2*q,H[9]=0,H[13]=-F,H[2]=0,H[6]=0,H[10]=N,H[14]=-O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<16;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<16;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J[$+9]=Q[9],J[$+10]=Q[10],J[$+11]=Q[11],J[$+12]=Q[12],J[$+13]=Q[13],J[$+14]=Q[14],J[$+15]=Q[15],J}}var K8=new P,n6=new y0,nZ=new P(0,0,0),sZ=new P(1,1,1),C7=new P,K9=new P,j6=new P,x5=new y0,h5=new v6;class r6{constructor(J=0,$=0,Q=0,Z=r6.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=$,this._z=Q,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,$,Q,Z=this._order){return this._x=J,this._y=$,this._z=Q,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,$=this._order,Q=!0){let Z=J.elements,W=Z[0],Y=Z[4],X=Z[8],H=Z[1],K=Z[5],q=Z[9],G=Z[2],U=Z[6],F=Z[10];switch($){case"XYZ":if(this._y=Math.asin(k6(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-q,F),this._z=Math.atan2(-Y,W);else this._x=Math.atan2(U,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-k6(q,-1,1)),Math.abs(q)<0.9999999)this._y=Math.atan2(X,F),this._z=Math.atan2(H,K);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(k6(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-G,F),this._z=Math.atan2(-Y,K);else this._y=0,this._z=Math.atan2(H,W);break;case"ZYX":if(this._y=Math.asin(-k6(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(U,F),this._z=Math.atan2(H,W);else this._x=0,this._z=Math.atan2(-Y,K);break;case"YZX":if(this._z=Math.asin(k6(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-q,K),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(X,F);break;case"XZY":if(this._z=Math.asin(-k6(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(U,K),this._y=Math.atan2(X,W);else this._x=Math.atan2(-q,F),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,Q===!0)this._onChangeCallback();return this}setFromQuaternion(J,$,Q){return x5.makeRotationFromQuaternion(J),this.setFromRotationMatrix(x5,$,Q)}setFromVector3(J,$=this._order){return this.set(J.x,J.y,J.z,$)}reorder(J){return h5.setFromEuler(this),this.setFromQuaternion(h5,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}r6.DEFAULT_ORDER="XYZ";class pJ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var oZ=0,b5=new P,q8=new v6,K7=new y0,q9=new P,f8=new P,iZ=new P,aZ=new v6,g5=new P(1,0,0),p5=new P(0,1,0),u5=new P(0,0,1),m5={type:"added"},rZ={type:"removed"},G8={type:"childadded",child:null},qJ={type:"childremoved",child:null};class J6 extends V7{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:oZ++}),this.uuid=a6(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=J6.DEFAULT_UP.clone();let J=new P,$=new r6,Q=new v6,Z=new P(1,1,1);function W(){Q.setFromEuler($,!1)}function Y(){$.setFromQuaternion(Q,void 0,!1)}$._onChange(W),Q._onChange(Y),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new y0},normalMatrix:{value:new f0}}),this.matrix=new y0,this.matrixWorld=new y0,this.matrixAutoUpdate=J6.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=J6.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pJ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,$){this.quaternion.setFromAxisAngle(J,$)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,$){return q8.setFromAxisAngle(J,$),this.quaternion.multiply(q8),this}rotateOnWorldAxis(J,$){return q8.setFromAxisAngle(J,$),this.quaternion.premultiply(q8),this}rotateX(J){return this.rotateOnAxis(g5,J)}rotateY(J){return this.rotateOnAxis(p5,J)}rotateZ(J){return this.rotateOnAxis(u5,J)}translateOnAxis(J,$){return b5.copy(J).applyQuaternion(this.quaternion),this.position.add(b5.multiplyScalar($)),this}translateX(J){return this.translateOnAxis(g5,J)}translateY(J){return this.translateOnAxis(p5,J)}translateZ(J){return this.translateOnAxis(u5,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(K7.copy(this.matrixWorld).invert())}lookAt(J,$,Q){if(J.isVector3)q9.copy(J);else q9.set(J,$,Q);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),f8.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)K7.lookAt(f8,q9,this.up);else K7.lookAt(q9,f8,this.up);if(this.quaternion.setFromRotationMatrix(K7),Z)K7.extractRotation(Z.matrixWorld),q8.setFromRotationMatrix(K7),this.quaternion.premultiply(q8.invert())}add(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(m5),G8.child=J,this.dispatchEvent(G8),G8.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let $=this.children.indexOf(J);if($!==-1)J.parent=null,this.children.splice($,1),J.dispatchEvent(rZ),qJ.child=J,this.dispatchEvent(qJ),qJ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),K7.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),K7.multiply(J.parent.matrixWorld);return J.applyMatrix4(K7),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(m5),G8.child=J,this.dispatchEvent(G8),G8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,$){if(this[J]===$)return this;for(let Q=0,Z=this.children.length;Q<Z;Q++){let Y=this.children[Q].getObjectByProperty(J,$);if(Y!==void 0)return Y}return}getObjectsByProperty(J,$,Q=[]){if(this[J]===$)Q.push(this);let Z=this.children;for(let W=0,Y=Z.length;W<Y;W++)Z[W].getObjectsByProperty(J,$,Q);return Q}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(f8,J,iZ),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(f8,aZ,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set($[8],$[9],$[10]).normalize()}raycast(){}traverse(J){J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverseVisible(J)}traverseAncestors(J){let $=this.parent;if($!==null)J($),$.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].updateMatrixWorld(J)}updateWorldMatrix(J,$){let Q=this.parent;if(J===!0&&Q!==null)Q.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if($===!0){let Z=this.children;for(let W=0,Y=Z.length;W<Y;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let $=J===void 0||typeof J==="string",Q={};if($)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.visibility=this._visibility,Z.active=this._active,Z.bounds=this._bounds.map((X)=>({boxInitialized:X.boxInitialized,boxMin:X.box.min.toArray(),boxMax:X.box.max.toArray(),sphereInitialized:X.sphereInitialized,sphereRadius:X.sphere.radius,sphereCenter:X.sphere.center.toArray()})),Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.geometryCount=this._geometryCount,Z.matricesTexture=this._matricesTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere={center:Z.boundingSphere.center.toArray(),radius:Z.boundingSphere.radius};if(this.boundingBox!==null)Z.boundingBox={min:Z.boundingBox.min.toArray(),max:Z.boundingBox.max.toArray()}}function W(X,H){if(X[H.uuid]===void 0)X[H.uuid]=H.toJSON(J);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let H=X.shapes;if(Array.isArray(H))for(let K=0,q=H.length;K<q;K++){let G=H[K];W(J.shapes,G)}else W(J.shapes,H)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let H=0,K=this.material.length;H<K;H++)X.push(W(J.materials,this.material[H]));Z.material=X}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let H=this.animations[X];Z.animations.push(W(J.animations,H))}}if($){let X=Y(J.geometries),H=Y(J.materials),K=Y(J.textures),q=Y(J.images),G=Y(J.shapes),U=Y(J.skeletons),F=Y(J.animations),O=Y(J.nodes);if(X.length>0)Q.geometries=X;if(H.length>0)Q.materials=H;if(K.length>0)Q.textures=K;if(q.length>0)Q.images=q;if(G.length>0)Q.shapes=G;if(U.length>0)Q.skeletons=U;if(F.length>0)Q.animations=F;if(O.length>0)Q.nodes=O}return Q.object=Z,Q;function Y(X){let H=[];for(let K in X){let q=X[K];delete q.metadata,H.push(q)}return H}}clone(J){return new this.constructor().copy(this,J)}copy(J,$=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),$===!0)for(let Q=0;Q<J.children.length;Q++){let Z=J.children[Q];this.add(Z.clone())}return this}}J6.DEFAULT_UP=new P(0,1,0);J6.DEFAULT_MATRIX_AUTO_UPDATE=!0;J6.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var s6=new P,q7=new P,GJ=new P,G7=new P,U8=new P,F8=new P,l5=new P,UJ=new P,FJ=new P,VJ=new P;class i6{constructor(J=new P,$=new P,Q=new P){this.a=J,this.b=$,this.c=Q}static getNormal(J,$,Q,Z){Z.subVectors(Q,$),s6.subVectors(J,$),Z.cross(s6);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,$,Q,Z,W){s6.subVectors(Z,$),q7.subVectors(Q,$),GJ.subVectors(J,$);let Y=s6.dot(s6),X=s6.dot(q7),H=s6.dot(GJ),K=q7.dot(q7),q=q7.dot(GJ),G=Y*K-X*X;if(G===0)return W.set(0,0,0),null;let U=1/G,F=(K*H-X*q)*U,O=(Y*q-X*H)*U;return W.set(1-F-O,O,F)}static containsPoint(J,$,Q,Z){if(this.getBarycoord(J,$,Q,Z,G7)===null)return!1;return G7.x>=0&&G7.y>=0&&G7.x+G7.y<=1}static getInterpolation(J,$,Q,Z,W,Y,X,H){if(this.getBarycoord(J,$,Q,Z,G7)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(W,G7.x),H.addScaledVector(Y,G7.y),H.addScaledVector(X,G7.z),H}static isFrontFacing(J,$,Q,Z){return s6.subVectors(Q,$),q7.subVectors(J,$),s6.cross(q7).dot(Z)<0?!0:!1}set(J,$,Q){return this.a.copy(J),this.b.copy($),this.c.copy(Q),this}setFromPointsAndIndices(J,$,Q,Z){return this.a.copy(J[$]),this.b.copy(J[Q]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,$,Q,Z){return this.a.fromBufferAttribute(J,$),this.b.fromBufferAttribute(J,Q),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return s6.subVectors(this.c,this.b),q7.subVectors(this.a,this.b),s6.cross(q7).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return i6.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,$){return i6.getBarycoord(J,this.a,this.b,this.c,$)}getInterpolation(J,$,Q,Z,W){return i6.getInterpolation(J,this.a,this.b,this.c,$,Q,Z,W)}containsPoint(J){return i6.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return i6.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,$){let Q=this.a,Z=this.b,W=this.c,Y,X;U8.subVectors(Z,Q),F8.subVectors(W,Q),UJ.subVectors(J,Q);let H=U8.dot(UJ),K=F8.dot(UJ);if(H<=0&&K<=0)return $.copy(Q);FJ.subVectors(J,Z);let q=U8.dot(FJ),G=F8.dot(FJ);if(q>=0&&G<=q)return $.copy(Z);let U=H*G-q*K;if(U<=0&&H>=0&&q<=0)return Y=H/(H-q),$.copy(Q).addScaledVector(U8,Y);VJ.subVectors(J,W);let F=U8.dot(VJ),O=F8.dot(VJ);if(O>=0&&F<=O)return $.copy(W);let N=F*K-H*O;if(N<=0&&K>=0&&O<=0)return X=K/(K-O),$.copy(Q).addScaledVector(F8,X);let R=q*O-F*G;if(R<=0&&G-q>=0&&F-O>=0)return l5.subVectors(W,Z),X=(G-q)/(G-q+(F-O)),$.copy(Z).addScaledVector(l5,X);let V=1/(R+N+U);return Y=N*V,X=U*V,$.copy(Q).addScaledVector(U8,Y).addScaledVector(F8,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var e$={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},w7={h:0,s:0,l:0},G9={h:0,s:0,l:0};function EJ(J,$,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return J+($-J)*6*Q;if(Q<0.5)return $;if(Q<0.6666666666666666)return J+($-J)*6*(0.6666666666666666-Q);return J}class z0{constructor(J,$,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,$,Q)}set(J,$,Q){if($===void 0&&Q===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,$,Q);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,$="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,c0.toWorkingColorSpace(this,$),this}setRGB(J,$,Q,Z=c0.workingColorSpace){return this.r=J,this.g=$,this.b=Q,c0.toWorkingColorSpace(this,Z),this}setHSL(J,$,Q,Z=c0.workingColorSpace){if(J=xJ(J,1),$=k6($,0,1),Q=k6(Q,0,1),$===0)this.r=this.g=this.b=Q;else{let W=Q<=0.5?Q*(1+$):Q+$-Q*$,Y=2*Q-W;this.r=EJ(Y,W,J+0.3333333333333333),this.g=EJ(Y,W,J),this.b=EJ(Y,W,J-0.3333333333333333)}return c0.toWorkingColorSpace(this,Z),this}setStyle(J,$="srgb"){function Q(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,Y=Z[1],X=Z[2];switch(Y){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,$);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,$);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,$);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],Y=W.length;if(Y===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,$);else if(Y===6)return this.setHex(parseInt(W,16),$);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,$);return this}setColorName(J,$="srgb"){let Q=e$[J.toLowerCase()];if(Q!==void 0)this.setHex(Q,$);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=D8(J.r),this.g=D8(J.g),this.b=D8(J.b),this}copyLinearToSRGB(J){return this.r=$J(J.r),this.g=$J(J.g),this.b=$J(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return c0.fromWorkingColorSpace(C6.copy(this),J),Math.round(k6(C6.r*255,0,255))*65536+Math.round(k6(C6.g*255,0,255))*256+Math.round(k6(C6.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,$=c0.workingColorSpace){c0.fromWorkingColorSpace(C6.copy(this),$);let{r:Q,g:Z,b:W}=C6,Y=Math.max(Q,Z,W),X=Math.min(Q,Z,W),H,K,q=(X+Y)/2;if(X===Y)H=0,K=0;else{let G=Y-X;switch(K=q<=0.5?G/(Y+X):G/(2-Y-X),Y){case Q:H=(Z-W)/G+(Z<W?6:0);break;case Z:H=(W-Q)/G+2;break;case W:H=(Q-Z)/G+4;break}H/=6}return J.h=H,J.s=K,J.l=q,J}getRGB(J,$=c0.workingColorSpace){return c0.fromWorkingColorSpace(C6.copy(this),$),J.r=C6.r,J.g=C6.g,J.b=C6.b,J}getStyle(J="srgb"){c0.fromWorkingColorSpace(C6.copy(this),J);let{r:$,g:Q,b:Z}=C6;if(J!=="srgb")return`color(${J} ${$.toFixed(3)} ${Q.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(Q*255)},${Math.round(Z*255)})`}offsetHSL(J,$,Q){return this.getHSL(w7),this.setHSL(w7.h+J,w7.s+$,w7.l+Q)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,$){return this.r=J.r+$.r,this.g=J.g+$.g,this.b=J.b+$.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,$){return this.r+=(J.r-this.r)*$,this.g+=(J.g-this.g)*$,this.b+=(J.b-this.b)*$,this}lerpColors(J,$,Q){return this.r=J.r+($.r-J.r)*Q,this.g=J.g+($.g-J.g)*Q,this.b=J.b+($.b-J.b)*Q,this}lerpHSL(J,$){this.getHSL(w7),J.getHSL(G9);let Q=m8(w7.h,G9.h,$),Z=m8(w7.s,G9.s,$),W=m8(w7.l,G9.l,$);return this.setHSL(Q,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let $=this.r,Q=this.g,Z=this.b,W=J.elements;return this.r=W[0]*$+W[3]*Q+W[6]*Z,this.g=W[1]*$+W[4]*Q+W[7]*Z,this.b=W[2]*$+W[5]*Q+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,$=0){return this.r=J[$],this.g=J[$+1],this.b=J[$+2],this}toArray(J=[],$=0){return J[$]=this.r,J[$+1]=this.g,J[$+2]=this.b,J}fromBufferAttribute(J,$){return this.r=J.getX($),this.g=J.getY($),this.b=J.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var C6=new z0;z0.NAMES=e$;var tZ=0;class _6 extends V7{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:tZ++}),this.uuid=a6(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new z0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let $ in J){let Q=J[$];if(Q===void 0){console.warn(`THREE.Material: parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){console.warn(`THREE.Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Q);else if(Z&&Z.isVector3&&(Q&&Q.isVector3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if($)J={textures:{},images:{}};let Q={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,this.name!=="")Q.name=this.name;if(this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)Q.dispersion=this.dispersion;if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON(J).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON(J).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON(J).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON(J).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON(J).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapRotation!==void 0)Q.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.shadowSide!==null)Q.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Q.blending=this.blending;if(this.side!==0)Q.side=this.side;if(this.vertexColors===!0)Q.vertexColors=!0;if(this.opacity<1)Q.opacity=this.opacity;if(this.transparent===!0)Q.transparent=!0;if(this.blendSrc!==204)Q.blendSrc=this.blendSrc;if(this.blendDst!==205)Q.blendDst=this.blendDst;if(this.blendEquation!==100)Q.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Q.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Q.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Q.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Q.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Q.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Q.depthFunc=this.depthFunc;if(this.depthTest===!1)Q.depthTest=this.depthTest;if(this.depthWrite===!1)Q.depthWrite=this.depthWrite;if(this.colorWrite===!1)Q.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Q.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Q.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Q.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Q.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Q.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Q.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Q.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Q.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Q.rotation=this.rotation;if(this.polygonOffset===!0)Q.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Q.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Q.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Q.linewidth=this.linewidth;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.dithering===!0)Q.dithering=!0;if(this.alphaTest>0)Q.alphaTest=this.alphaTest;if(this.alphaHash===!0)Q.alphaHash=!0;if(this.alphaToCoverage===!0)Q.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Q.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Q.forceSinglePass=!0;if(this.wireframe===!0)Q.wireframe=!0;if(this.wireframeLinewidth>1)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Q.flatShading=!0;if(this.visible===!1)Q.visible=!1;if(this.toneMapped===!1)Q.toneMapped=!1;if(this.fog===!1)Q.fog=!1;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function Z(W){let Y=[];for(let X in W){let H=W[X];delete H.metadata,Y.push(H)}return Y}if($){let W=Z(J.textures),Y=Z(J.images);if(W.length>0)Q.textures=W;if(Y.length>0)Q.images=Y}return Q}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let $=J.clippingPlanes,Q=null;if($!==null){let Z=$.length;Q=Array(Z);for(let W=0;W!==Z;++W)Q[W]=$[W].clone()}return this.clippingPlanes=Q,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class E7 extends _6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new z0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new r6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var F6=new P,U9=new k0;class H6{constructor(J,$,Q=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=J,this.itemSize=$,this.count=J!==void 0?J.length/$:0,this.normalized=Q,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}get updateRange(){return hJ("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,$,Q){J*=this.itemSize,Q*=$.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=$.array[Q+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let $=0,Q=this.count;$<Q;$++)U9.fromBufferAttribute(this,$),U9.applyMatrix3(J),this.setXY($,U9.x,U9.y);else if(this.itemSize===3)for(let $=0,Q=this.count;$<Q;$++)F6.fromBufferAttribute(this,$),F6.applyMatrix3(J),this.setXYZ($,F6.x,F6.y,F6.z);return this}applyMatrix4(J){for(let $=0,Q=this.count;$<Q;$++)F6.fromBufferAttribute(this,$),F6.applyMatrix4(J),this.setXYZ($,F6.x,F6.y,F6.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)F6.fromBufferAttribute(this,$),F6.applyNormalMatrix(J),this.setXYZ($,F6.x,F6.y,F6.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)F6.fromBufferAttribute(this,$),F6.transformDirection(J),this.setXYZ($,F6.x,F6.y,F6.z);return this}set(J,$=0){return this.array.set(J,$),this}getComponent(J,$){let Q=this.array[J*this.itemSize+$];if(this.normalized)Q=o6(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize+$]=Q,this}getX(J){let $=this.array[J*this.itemSize];if(this.normalized)$=o6($,this.array);return $}setX(J,$){if(this.normalized)$=a0($,this.array);return this.array[J*this.itemSize]=$,this}getY(J){let $=this.array[J*this.itemSize+1];if(this.normalized)$=o6($,this.array);return $}setY(J,$){if(this.normalized)$=a0($,this.array);return this.array[J*this.itemSize+1]=$,this}getZ(J){let $=this.array[J*this.itemSize+2];if(this.normalized)$=o6($,this.array);return $}setZ(J,$){if(this.normalized)$=a0($,this.array);return this.array[J*this.itemSize+2]=$,this}getW(J){let $=this.array[J*this.itemSize+3];if(this.normalized)$=o6($,this.array);return $}setW(J,$){if(this.normalized)$=a0($,this.array);return this.array[J*this.itemSize+3]=$,this}setXY(J,$,Q){if(J*=this.itemSize,this.normalized)$=a0($,this.array),Q=a0(Q,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J*=this.itemSize,this.normalized)$=a0($,this.array),Q=a0(Q,this.array),Z=a0(Z,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this}setXYZW(J,$,Q,Z,W){if(J*=this.itemSize,this.normalized)$=a0($,this.array),Q=a0(Q,this.array),Z=a0(Z,this.array),W=a0(W,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class uJ extends H6{constructor(J,$,Q){super(new Uint16Array(J),$,Q)}}class mJ extends H6{constructor(J,$,Q){super(new Uint32Array(J),$,Q)}}class Q6 extends H6{constructor(J,$,Q){super(new Float32Array(J),$,Q)}}var eZ=0,h6=new y0,OJ=new J6,V8=new P,y6=new f6,x8=new f6,R6=new P;class K6 extends V7{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eZ++}),this.uuid=a6(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((i$(J))?mJ:uJ)(J,1);else this.index=J;return this}getAttribute(J){return this.attributes[J]}setAttribute(J,$){return this.attributes[J]=$,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,$,Q=0){this.groups.push({start:J,count:$,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange(J,$){this.drawRange.start=J,this.drawRange.count=$}applyMatrix4(J){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(J),$.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let W=new f0().getNormalMatrix(J);Q.applyNormalMatrix(W),Q.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return h6.makeRotationFromQuaternion(J),this.applyMatrix4(h6),this}rotateX(J){return h6.makeRotationX(J),this.applyMatrix4(h6),this}rotateY(J){return h6.makeRotationY(J),this.applyMatrix4(h6),this}rotateZ(J){return h6.makeRotationZ(J),this.applyMatrix4(h6),this}translate(J,$,Q){return h6.makeTranslation(J,$,Q),this.applyMatrix4(h6),this}scale(J,$,Q){return h6.makeScale(J,$,Q),this.applyMatrix4(h6),this}lookAt(J){return OJ.lookAt(J),OJ.updateMatrix(),this.applyMatrix4(OJ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(V8).negate(),this.translate(V8.x,V8.y,V8.z),this}setFromPoints(J){let $=[];for(let Q=0,Z=J.length;Q<Z;Q++){let W=J[Q];$.push(W.x,W.y,W.z||0)}return this.setAttribute("position",new Q6($,3)),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new f6;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),$)for(let Q=0,Z=$.length;Q<Z;Q++){let W=$[Q];if(y6.setFromBufferAttribute(W),this.morphTargetsRelative)R6.addVectors(this.boundingBox.min,y6.min),this.boundingBox.expandByPoint(R6),R6.addVectors(this.boundingBox.max,y6.max),this.boundingBox.expandByPoint(R6);else this.boundingBox.expandByPoint(y6.min),this.boundingBox.expandByPoint(y6.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new b6;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(J){let Q=this.boundingSphere.center;if(y6.setFromBufferAttribute(J),$)for(let W=0,Y=$.length;W<Y;W++){let X=$[W];if(x8.setFromBufferAttribute(X),this.morphTargetsRelative)R6.addVectors(y6.min,x8.min),y6.expandByPoint(R6),R6.addVectors(y6.max,x8.max),y6.expandByPoint(R6);else y6.expandByPoint(x8.min),y6.expandByPoint(x8.max)}y6.getCenter(Q);let Z=0;for(let W=0,Y=J.count;W<Y;W++)R6.fromBufferAttribute(J,W),Z=Math.max(Z,Q.distanceToSquared(R6));if($)for(let W=0,Y=$.length;W<Y;W++){let X=$[W],H=this.morphTargetsRelative;for(let K=0,q=X.count;K<q;K++){if(R6.fromBufferAttribute(X,K),H)V8.fromBufferAttribute(J,K),R6.add(V8);Z=Math.max(Z,Q.distanceToSquared(R6))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,$=this.attributes;if(J===null||$.position===void 0||$.normal===void 0||$.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Q,normal:Z,uv:W}=$;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new H6(new Float32Array(4*Q.count),4));let Y=this.getAttribute("tangent"),X=[],H=[];for(let S=0;S<Q.count;S++)X[S]=new P,H[S]=new P;let K=new P,q=new P,G=new P,U=new k0,F=new k0,O=new k0,N=new P,R=new P;function V(S,b,D){K.fromBufferAttribute(Q,S),q.fromBufferAttribute(Q,b),G.fromBufferAttribute(Q,D),U.fromBufferAttribute(W,S),F.fromBufferAttribute(W,b),O.fromBufferAttribute(W,D),q.sub(K),G.sub(K),F.sub(U),O.sub(U);let k=1/(F.x*O.y-O.x*F.y);if(!isFinite(k))return;N.copy(q).multiplyScalar(O.y).addScaledVector(G,-F.y).multiplyScalar(k),R.copy(G).multiplyScalar(F.x).addScaledVector(q,-O.x).multiplyScalar(k),X[S].add(N),X[b].add(N),X[D].add(N),H[S].add(R),H[b].add(R),H[D].add(R)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let S=0,b=E.length;S<b;++S){let D=E[S],k=D.start,j=D.count;for(let u=k,n=k+j;u<n;u+=3)V(J.getX(u+0),J.getX(u+1),J.getX(u+2))}let M=new P,C=new P,I=new P,y=new P;function L(S){I.fromBufferAttribute(Z,S),y.copy(I);let b=X[S];M.copy(b),M.sub(I.multiplyScalar(I.dot(b))).normalize(),C.crossVectors(y,b);let k=C.dot(H[S])<0?-1:1;Y.setXYZW(S,M.x,M.y,M.z,k)}for(let S=0,b=E.length;S<b;++S){let D=E[S],k=D.start,j=D.count;for(let u=k,n=k+j;u<n;u+=3)L(J.getX(u+0)),L(J.getX(u+1)),L(J.getX(u+2))}}computeVertexNormals(){let J=this.index,$=this.getAttribute("position");if($!==void 0){let Q=this.getAttribute("normal");if(Q===void 0)Q=new H6(new Float32Array($.count*3),3),this.setAttribute("normal",Q);else for(let U=0,F=Q.count;U<F;U++)Q.setXYZ(U,0,0,0);let Z=new P,W=new P,Y=new P,X=new P,H=new P,K=new P,q=new P,G=new P;if(J)for(let U=0,F=J.count;U<F;U+=3){let O=J.getX(U+0),N=J.getX(U+1),R=J.getX(U+2);Z.fromBufferAttribute($,O),W.fromBufferAttribute($,N),Y.fromBufferAttribute($,R),q.subVectors(Y,W),G.subVectors(Z,W),q.cross(G),X.fromBufferAttribute(Q,O),H.fromBufferAttribute(Q,N),K.fromBufferAttribute(Q,R),X.add(q),H.add(q),K.add(q),Q.setXYZ(O,X.x,X.y,X.z),Q.setXYZ(N,H.x,H.y,H.z),Q.setXYZ(R,K.x,K.y,K.z)}else for(let U=0,F=$.count;U<F;U+=3)Z.fromBufferAttribute($,U+0),W.fromBufferAttribute($,U+1),Y.fromBufferAttribute($,U+2),q.subVectors(Y,W),G.subVectors(Z,W),q.cross(G),Q.setXYZ(U+0,q.x,q.y,q.z),Q.setXYZ(U+1,q.x,q.y,q.z),Q.setXYZ(U+2,q.x,q.y,q.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let $=0,Q=J.count;$<Q;$++)R6.fromBufferAttribute(J,$),R6.normalize(),J.setXYZ($,R6.x,R6.y,R6.z)}toNonIndexed(){function J(X,H){let{array:K,itemSize:q,normalized:G}=X,U=new K.constructor(H.length*q),F=0,O=0;for(let N=0,R=H.length;N<R;N++){if(X.isInterleavedBufferAttribute)F=H[N]*X.data.stride+X.offset;else F=H[N]*q;for(let V=0;V<q;V++)U[O++]=K[F++]}return new H6(U,q,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new K6,Q=this.index.array,Z=this.attributes;for(let X in Z){let H=Z[X],K=J(H,Q);$.setAttribute(X,K)}let W=this.morphAttributes;for(let X in W){let H=[],K=W[X];for(let q=0,G=K.length;q<G;q++){let U=K[q],F=J(U,Q);H.push(F)}$.morphAttributes[X]=H}$.morphTargetsRelative=this.morphTargetsRelative;let Y=this.groups;for(let X=0,H=Y.length;X<H;X++){let K=Y[X];$.addGroup(K.start,K.count,K.materialIndex)}return $}toJSON(){let J={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let H=this.parameters;for(let K in H)if(H[K]!==void 0)J[K]=H[K];return J}J.data={attributes:{}};let $=this.index;if($!==null)J.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let Q=this.attributes;for(let H in Q){let K=Q[H];J.data.attributes[H]=K.toJSON(J.data)}let Z={},W=!1;for(let H in this.morphAttributes){let K=this.morphAttributes[H],q=[];for(let G=0,U=K.length;G<U;G++){let F=K[G];q.push(F.toJSON(J.data))}if(q.length>0)Z[H]=q,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let Y=this.groups;if(Y.length>0)J.data.groups=JSON.parse(JSON.stringify(Y));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere={center:X.center.toArray(),radius:X.radius};return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=J.name;let Q=J.index;if(Q!==null)this.setIndex(Q.clone($));let Z=J.attributes;for(let K in Z){let q=Z[K];this.setAttribute(K,q.clone($))}let W=J.morphAttributes;for(let K in W){let q=[],G=W[K];for(let U=0,F=G.length;U<F;U++)q.push(G[U].clone($));this.morphAttributes[K]=q}this.morphTargetsRelative=J.morphTargetsRelative;let Y=J.groups;for(let K=0,q=Y.length;K<q;K++){let G=Y[K];this.addGroup(G.start,G.count,G.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let H=J.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var d5=new y0,b7=new n7,F9=new b6,c5=new P,E8=new P,O8=new P,N8=new P,NJ=new P,V9=new P,E9=new k0,O9=new k0,N9=new k0,n5=new P,s5=new P,o5=new P,R9=new P,z9=new P;class V6 extends J6{constructor(J=new K6,$=new E7){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=$,this.updateMorphTargets()}copy(J,$){if(super.copy(J,$),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Y=Z.length;W<Y;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}getVertexPosition(J,$){let Q=this.geometry,Z=Q.attributes.position,W=Q.morphAttributes.position,Y=Q.morphTargetsRelative;$.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(W&&X){V9.set(0,0,0);for(let H=0,K=W.length;H<K;H++){let q=X[H],G=W[H];if(q===0)continue;if(NJ.fromBufferAttribute(G,J),Y)V9.addScaledVector(NJ,q);else V9.addScaledVector(NJ.sub($),q)}$.add(V9)}return $}raycast(J,$){let Q=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(F9.copy(Q.boundingSphere),F9.applyMatrix4(W),b7.copy(J.ray).recast(J.near),F9.containsPoint(b7.origin)===!1){if(b7.intersectSphere(F9,c5)===null)return;if(b7.origin.distanceToSquared(c5)>(J.far-J.near)**2)return}if(d5.copy(W).invert(),b7.copy(J.ray).applyMatrix4(d5),Q.boundingBox!==null){if(b7.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections(J,$,b7)}_computeIntersections(J,$,Q){let Z,W=this.geometry,Y=this.material,X=W.index,H=W.attributes.position,K=W.attributes.uv,q=W.attributes.uv1,G=W.attributes.normal,U=W.groups,F=W.drawRange;if(X!==null)if(Array.isArray(Y))for(let O=0,N=U.length;O<N;O++){let R=U[O],V=Y[R.materialIndex],E=Math.max(R.start,F.start),M=Math.min(X.count,Math.min(R.start+R.count,F.start+F.count));for(let C=E,I=M;C<I;C+=3){let y=X.getX(C),L=X.getX(C+1),S=X.getX(C+2);if(Z=B9(this,V,J,Q,K,q,G,y,L,S),Z)Z.faceIndex=Math.floor(C/3),Z.face.materialIndex=R.materialIndex,$.push(Z)}}else{let O=Math.max(0,F.start),N=Math.min(X.count,F.start+F.count);for(let R=O,V=N;R<V;R+=3){let E=X.getX(R),M=X.getX(R+1),C=X.getX(R+2);if(Z=B9(this,Y,J,Q,K,q,G,E,M,C),Z)Z.faceIndex=Math.floor(R/3),$.push(Z)}}else if(H!==void 0)if(Array.isArray(Y))for(let O=0,N=U.length;O<N;O++){let R=U[O],V=Y[R.materialIndex],E=Math.max(R.start,F.start),M=Math.min(H.count,Math.min(R.start+R.count,F.start+F.count));for(let C=E,I=M;C<I;C+=3){let y=C,L=C+1,S=C+2;if(Z=B9(this,V,J,Q,K,q,G,y,L,S),Z)Z.faceIndex=Math.floor(C/3),Z.face.materialIndex=R.materialIndex,$.push(Z)}}else{let O=Math.max(0,F.start),N=Math.min(H.count,F.start+F.count);for(let R=O,V=N;R<V;R+=3){let E=R,M=R+1,C=R+2;if(Z=B9(this,Y,J,Q,K,q,G,E,M,C),Z)Z.faceIndex=Math.floor(R/3),$.push(Z)}}}}function JW(J,$,Q,Z,W,Y,X,H){let K;if($.side===1)K=Z.intersectTriangle(X,Y,W,!0,H);else K=Z.intersectTriangle(W,Y,X,$.side===0,H);if(K===null)return null;z9.copy(H),z9.applyMatrix4(J.matrixWorld);let q=Q.ray.origin.distanceTo(z9);if(q<Q.near||q>Q.far)return null;return{distance:q,point:z9.clone(),object:J}}function B9(J,$,Q,Z,W,Y,X,H,K,q){J.getVertexPosition(H,E8),J.getVertexPosition(K,O8),J.getVertexPosition(q,N8);let G=JW(J,$,Q,Z,E8,O8,N8,R9);if(G){if(W)E9.fromBufferAttribute(W,H),O9.fromBufferAttribute(W,K),N9.fromBufferAttribute(W,q),G.uv=i6.getInterpolation(R9,E8,O8,N8,E9,O9,N9,new k0);if(Y)E9.fromBufferAttribute(Y,H),O9.fromBufferAttribute(Y,K),N9.fromBufferAttribute(Y,q),G.uv1=i6.getInterpolation(R9,E8,O8,N8,E9,O9,N9,new k0);if(X){if(n5.fromBufferAttribute(X,H),s5.fromBufferAttribute(X,K),o5.fromBufferAttribute(X,q),G.normal=i6.getInterpolation(R9,E8,O8,N8,n5,s5,o5,new P),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let U={a:H,b:K,c:q,normal:new P,materialIndex:0};i6.getNormal(E8,O8,N8,U.normal),G.face=U}return G}class n8 extends K6{constructor(J=1,$=1,Q=1,Z=1,W=1,Y=1){super();this.type="BoxGeometry",this.parameters={width:J,height:$,depth:Q,widthSegments:Z,heightSegments:W,depthSegments:Y};let X=this;Z=Math.floor(Z),W=Math.floor(W),Y=Math.floor(Y);let H=[],K=[],q=[],G=[],U=0,F=0;O("z","y","x",-1,-1,Q,$,J,Y,W,0),O("z","y","x",1,-1,Q,$,-J,Y,W,1),O("x","z","y",1,1,J,Q,$,Z,Y,2),O("x","z","y",1,-1,J,Q,-$,Z,Y,3),O("x","y","z",1,-1,J,$,Q,Z,W,4),O("x","y","z",-1,-1,J,$,-Q,Z,W,5),this.setIndex(H),this.setAttribute("position",new Q6(K,3)),this.setAttribute("normal",new Q6(q,3)),this.setAttribute("uv",new Q6(G,2));function O(N,R,V,E,M,C,I,y,L,S,b){let D=C/L,k=I/S,j=C/2,u=I/2,n=y/2,d=L+1,s=S+1,l=0,e=0,m=new P;for(let q0=0;q0<s;q0++){let F0=q0*k-u;for(let C0=0;C0<d;C0++){let x0=C0*D-j;m[N]=x0*E,m[R]=F0*M,m[V]=n,K.push(m.x,m.y,m.z),m[N]=0,m[R]=0,m[V]=y>0?1:-1,q.push(m.x,m.y,m.z),G.push(C0/L),G.push(1-q0/S),l+=1}}for(let q0=0;q0<S;q0++)for(let F0=0;F0<L;F0++){let C0=U+F0+d*q0,x0=U+F0+d*(q0+1),o=U+(F0+1)+d*(q0+1),Z0=U+(F0+1)+d*q0;H.push(C0,x0,Z0),H.push(x0,o,Z0),e+=6}X.addGroup(F,e,b),F+=e,U+=l}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new n8(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function w8(J){let $={};for(let Q in J){$[Q]={};for(let Z in J[Q]){let W=J[Q][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[Q][Z]=null;else $[Q][Z]=W.clone();else if(Array.isArray(W))$[Q][Z]=W.slice();else $[Q][Z]=W}}return $}function A6(J){let $={};for(let Q=0;Q<J.length;Q++){let Z=w8(J[Q]);for(let W in Z)$[W]=Z[W]}return $}function $W(J){let $=[];for(let Q=0;Q<J.length;Q++)$.push(J[Q].clone());return $}function JQ(J){let $=J.getRenderTarget();if($===null)return J.outputColorSpace;if($.isXRRenderTarget===!0)return $.texture.colorSpace;return c0.workingColorSpace}var QW={clone:w8,merge:A6},ZW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class F7 extends _6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZW,this.fragmentShader=WW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=w8(J.uniforms),this.uniformsGroups=$W(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let $=super.toJSON(J);$.glslVersion=this.glslVersion,$.uniforms={};for(let Z in this.uniforms){let Y=this.uniforms[Z].value;if(Y&&Y.isTexture)$.uniforms[Z]={type:"t",value:Y.toJSON(J).uuid};else if(Y&&Y.isColor)$.uniforms[Z]={type:"c",value:Y.getHex()};else if(Y&&Y.isVector2)$.uniforms[Z]={type:"v2",value:Y.toArray()};else if(Y&&Y.isVector3)$.uniforms[Z]={type:"v3",value:Y.toArray()};else if(Y&&Y.isVector4)$.uniforms[Z]={type:"v4",value:Y.toArray()};else if(Y&&Y.isMatrix3)$.uniforms[Z]={type:"m3",value:Y.toArray()};else if(Y&&Y.isMatrix4)$.uniforms[Z]={type:"m4",value:Y.toArray()};else $.uniforms[Z]={value:Y}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let Q={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Q[Z]=!0;if(Object.keys(Q).length>0)$.extensions=Q;return $}}class lJ extends J6{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new y0,this.projectionMatrix=new y0,this.projectionMatrixInverse=new y0,this.coordinateSystem=2000}copy(J,$){return super.copy(J,$),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,$){super.updateWorldMatrix(J,$),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var _7=new P,i5=new k0,a5=new k0;class z6 extends lJ{constructor(J=50,$=1,Q=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Q,this.far=Z,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let $=0.5*this.getFilmHeight()/J;this.fov=C8*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(L8*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return C8*2*Math.atan(Math.tan(L8*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,$,Q){_7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(_7.x,_7.y).multiplyScalar(-J/_7.z),_7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(_7.x,_7.y).multiplyScalar(-J/_7.z)}getViewSize(J,$){return this.getViewBounds(J,i5,a5),$.subVectors(a5,i5)}setViewOffset(J,$,Q,Z,W,Y){if(this.aspect=J/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=W,this.view.height=Y,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,$=J*Math.tan(L8*0.5*this.fov)/this.zoom,Q=2*$,Z=this.aspect*Q,W=-0.5*Z,Y=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:K}=Y;W+=Y.offsetX*Z/H,$-=Y.offsetY*Q/K,Z*=Y.width/H,Q*=Y.height/K}let X=this.filmOffset;if(X!==0)W+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,$,$-Q,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}var R8=-90,z8=1;class $Q extends J6{constructor(J,$,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new z6(R8,z8,J,$);Z.layers=this.layers,this.add(Z);let W=new z6(R8,z8,J,$);W.layers=this.layers,this.add(W);let Y=new z6(R8,z8,J,$);Y.layers=this.layers,this.add(Y);let X=new z6(R8,z8,J,$);X.layers=this.layers,this.add(X);let H=new z6(R8,z8,J,$);H.layers=this.layers,this.add(H);let K=new z6(R8,z8,J,$);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,$=this.children.concat(),[Q,Z,W,Y,X,H]=$;for(let K of $)this.remove(K);if(J===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),Y.up.set(0,0,1),Y.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if(J===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),Y.up.set(0,0,-1),Y.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of $)this.add(K),K.updateMatrixWorld()}update(J,$){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,Y,X,H,K,q]=this.children,G=J.getRenderTarget(),U=J.getActiveCubeFace(),F=J.getActiveMipmapLevel(),O=J.xr.enabled;J.xr.enabled=!1;let N=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1,J.setRenderTarget(Q,0,Z),J.render($,W),J.setRenderTarget(Q,1,Z),J.render($,Y),J.setRenderTarget(Q,2,Z),J.render($,X),J.setRenderTarget(Q,3,Z),J.render($,H),J.setRenderTarget(Q,4,Z),J.render($,K),Q.texture.generateMipmaps=N,J.setRenderTarget(Q,5,Z),J.render($,q),J.setRenderTarget(G,U,F),J.xr.enabled=O,Q.texture.needsPMREMUpdate=!0}}class dJ extends E6{constructor(J,$,Q,Z,W,Y,X,H,K,q){J=J!==void 0?J:[],$=$!==void 0?$:301;super(J,$,Q,Z,W,Y,X,H,K,q);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class QQ extends A7{constructor(J=1,$={}){super(J,J,$);this.isWebGLCubeRenderTarget=!0;let Q={width:J,height:J,depth:1},Z=[Q,Q,Q,Q,Q,Q];this.texture=new dJ(Z,$.mapping,$.wrapS,$.wrapT,$.magFilter,$.minFilter,$.format,$.type,$.anisotropy,$.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=$.generateMipmaps!==void 0?$.generateMipmaps:!1,this.texture.minFilter=$.minFilter!==void 0?$.minFilter:1006}fromEquirectangularTexture(J,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new n8(5,5,5),W=new F7({name:"CubemapFromEquirect",uniforms:w8(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=$;let Y=new V6(Z,W),X=$.minFilter;if($.minFilter===1008)$.minFilter=1006;return new $Q(1,10,this).update(J,Y),$.minFilter=X,Y.geometry.dispose(),Y.material.dispose(),this}clear(J,$,Q,Z){let W=J.getRenderTarget();for(let Y=0;Y<6;Y++)J.setRenderTarget(this,Y),J.clear($,Q,Z);J.setRenderTarget(W)}}var RJ=new P,YW=new P,XW=new f0;class Q7{constructor(J=new P(1,0,0),$=0){this.isPlane=!0,this.normal=J,this.constant=$}set(J,$){return this.normal.copy(J),this.constant=$,this}setComponents(J,$,Q,Z){return this.normal.set(J,$,Q),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,$){return this.normal.copy(J),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(J,$,Q){let Z=RJ.subVectors(Q,$).cross(YW.subVectors(J,$)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,$){return $.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,$){let Q=J.delta(RJ),Z=this.normal.dot(Q);if(Z===0){if(this.distanceToPoint(J.start)===0)return $.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return $.copy(J.start).addScaledVector(Q,W)}intersectsLine(J){let $=this.distanceToPoint(J.start),Q=this.distanceToPoint(J.end);return $<0&&Q>0||Q<0&&$>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,$){let Q=$||XW.getNormalMatrix(J),Z=this.coplanarPoint(RJ).applyMatrix4(J),W=this.normal.applyMatrix3(Q).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var g7=new b6,M9=new P;class g9{constructor(J=new Q7,$=new Q7,Q=new Q7,Z=new Q7,W=new Q7,Y=new Q7){this.planes=[J,$,Q,Z,W,Y]}set(J,$,Q,Z,W,Y){let X=this.planes;return X[0].copy(J),X[1].copy($),X[2].copy(Q),X[3].copy(Z),X[4].copy(W),X[5].copy(Y),this}copy(J){let $=this.planes;for(let Q=0;Q<6;Q++)$[Q].copy(J.planes[Q]);return this}setFromProjectionMatrix(J,$=2000){let Q=this.planes,Z=J.elements,W=Z[0],Y=Z[1],X=Z[2],H=Z[3],K=Z[4],q=Z[5],G=Z[6],U=Z[7],F=Z[8],O=Z[9],N=Z[10],R=Z[11],V=Z[12],E=Z[13],M=Z[14],C=Z[15];if(Q[0].setComponents(H-W,U-K,R-F,C-V).normalize(),Q[1].setComponents(H+W,U+K,R+F,C+V).normalize(),Q[2].setComponents(H+Y,U+q,R+O,C+E).normalize(),Q[3].setComponents(H-Y,U-q,R-O,C-E).normalize(),Q[4].setComponents(H-X,U-G,R-N,C-M).normalize(),$===2000)Q[5].setComponents(H+X,U+G,R+N,C+M).normalize();else if($===2001)Q[5].setComponents(X,G,N,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();g7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let $=J.geometry;if($.boundingSphere===null)$.computeBoundingSphere();g7.copy($.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(g7)}intersectsSprite(J){return g7.center.set(0,0,0),g7.radius=0.7071067811865476,g7.applyMatrix4(J.matrixWorld),this.intersectsSphere(g7)}intersectsSphere(J){let $=this.planes,Q=J.center,Z=-J.radius;for(let W=0;W<6;W++)if($[W].distanceToPoint(Q)<Z)return!1;return!0}intersectsBox(J){let $=this.planes;for(let Q=0;Q<6;Q++){let Z=$[Q];if(M9.x=Z.normal.x>0?J.max.x:J.min.x,M9.y=Z.normal.y>0?J.max.y:J.min.y,M9.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(M9)<0)return!1}return!0}containsPoint(J){let $=this.planes;for(let Q=0;Q<6;Q++)if($[Q].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ZQ(){let J=null,$=!1,Q=null,Z=null;function W(Y,X){Q(Y,X),Z=J.requestAnimationFrame(W)}return{start:function(){if($===!0)return;if(Q===null)return;Z=J.requestAnimationFrame(W),$=!0},stop:function(){J.cancelAnimationFrame(Z),$=!1},setAnimationLoop:function(Y){Q=Y},setContext:function(Y){J=Y}}}function HW(J){let $=new WeakMap;function Q(H,K){let{array:q,usage:G}=H,U=q.byteLength,F=J.createBuffer();J.bindBuffer(K,F),J.bufferData(K,q,G),H.onUploadCallback();let O;if(q instanceof Float32Array)O=J.FLOAT;else if(q instanceof Uint16Array)if(H.isFloat16BufferAttribute)O=J.HALF_FLOAT;else O=J.UNSIGNED_SHORT;else if(q instanceof Int16Array)O=J.SHORT;else if(q instanceof Uint32Array)O=J.UNSIGNED_INT;else if(q instanceof Int32Array)O=J.INT;else if(q instanceof Int8Array)O=J.BYTE;else if(q instanceof Uint8Array)O=J.UNSIGNED_BYTE;else if(q instanceof Uint8ClampedArray)O=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+q);return{buffer:F,type:O,bytesPerElement:q.BYTES_PER_ELEMENT,version:H.version,size:U}}function Z(H,K,q){let{array:G,_updateRange:U,updateRanges:F}=K;if(J.bindBuffer(q,H),U.count===-1&&F.length===0)J.bufferSubData(q,0,G);if(F.length!==0){for(let O=0,N=F.length;O<N;O++){let R=F[O];J.bufferSubData(q,R.start*G.BYTES_PER_ELEMENT,G,R.start,R.count)}K.clearUpdateRanges()}if(U.count!==-1)J.bufferSubData(q,U.offset*G.BYTES_PER_ELEMENT,G,U.offset,U.count),U.count=-1;K.onUploadCallback()}function W(H){if(H.isInterleavedBufferAttribute)H=H.data;return $.get(H)}function Y(H){if(H.isInterleavedBufferAttribute)H=H.data;let K=$.get(H);if(K)J.deleteBuffer(K.buffer),$.delete(H)}function X(H,K){if(H.isGLBufferAttribute){let G=$.get(H);if(!G||G.version<H.version)$.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}if(H.isInterleavedBufferAttribute)H=H.data;let q=$.get(H);if(q===void 0)$.set(H,Q(H,K));else if(q.version<H.version){if(q.size!==H.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(q.buffer,H,K),q.version=H.version}}return{get:W,remove:Y,update:X}}class p9 extends K6{constructor(J=1,$=1,Q=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:$,widthSegments:Q,heightSegments:Z};let W=J/2,Y=$/2,X=Math.floor(Q),H=Math.floor(Z),K=X+1,q=H+1,G=J/X,U=$/H,F=[],O=[],N=[],R=[];for(let V=0;V<q;V++){let E=V*U-Y;for(let M=0;M<K;M++){let C=M*G-W;O.push(C,-E,0),N.push(0,0,1),R.push(M/X),R.push(1-V/H)}}for(let V=0;V<H;V++)for(let E=0;E<X;E++){let M=E+K*V,C=E+K*(V+1),I=E+1+K*(V+1),y=E+1+K*V;F.push(M,C,y),F.push(C,I,y)}this.setIndex(F),this.setAttribute("position",new Q6(O,3)),this.setAttribute("normal",new Q6(N,3)),this.setAttribute("uv",new Q6(R,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new p9(J.width,J.height,J.widthSegments,J.heightSegments)}}var KW=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qW=`#ifdef USE_ALPHAHASH
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
#endif`,GW=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UW=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FW=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VW=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EW=`#ifdef USE_AOMAP
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
#endif`,OW=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NW=`#ifdef USE_BATCHING
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
#endif`,RW=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zW=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BW=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MW=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kW=`#ifdef USE_IRIDESCENCE
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
#endif`,LW=`#ifdef USE_BUMPMAP
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
#endif`,DW=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CW=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wW=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_W=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IW=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AW=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PW=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TW=`#if defined( USE_COLOR_ALPHA )
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
#endif`,SW=`#define PI 3.141592653589793
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
} // validated`,jW=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yW=`vec3 transformedNormal = objectNormal;
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
#endif`,vW=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fW=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xW=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hW=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bW="gl_FragColor = linearToOutputTexel( gl_FragColor );",gW=`
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
}`,pW=`#ifdef USE_ENVMAP
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
#endif`,uW=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mW=`#ifdef USE_ENVMAP
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
#endif`,lW=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dW=`#ifdef USE_ENVMAP
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
#endif`,cW=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nW=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sW=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oW=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iW=`#ifdef USE_GRADIENTMAP
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
}`,aW=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rW=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tW=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eW=`uniform bool receiveShadow;
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
#endif`,JY=`#ifdef USE_ENVMAP
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
#endif`,$Y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZY=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YY=`PhysicalMaterial material;
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
#endif`,XY=`struct PhysicalMaterial {
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
}`,HY=`
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
#endif`,KY=`#if defined( RE_IndirectDiffuse )
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
#endif`,qY=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GY=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UY=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FY=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VY=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RY=`#if defined( USE_POINTS_UV )
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
#endif`,zY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MY=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kY=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DY=`#ifdef USE_MORPHTARGETS
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
#endif`,CY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_Y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TY=`#ifdef USE_NORMALMAP
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
#endif`,SY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vY=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xY=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hY=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bY=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gY=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nY=`float getShadowMask() {
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
}`,sY=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oY=`#ifdef USE_SKINNING
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
#endif`,iY=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aY=`#ifdef USE_SKINNING
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
#endif`,rY=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tY=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eY=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JX=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$X=`#ifdef USE_TRANSMISSION
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
#endif`,QX=`#ifdef USE_TRANSMISSION
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
#endif`,ZX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XX=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,HX=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KX=`uniform sampler2D t2D;
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
}`,qX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GX=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FX=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VX=`#include <common>
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
}`,EX=`#if DEPTH_PACKING == 3200
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
}`,OX=`#define DISTANCE
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
}`,NX=`#define DISTANCE
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
}`,RX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zX=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BX=`uniform float scale;
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
}`,MX=`uniform vec3 diffuse;
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
}`,kX=`#include <common>
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
}`,LX=`uniform vec3 diffuse;
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
}`,DX=`#define LAMBERT
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
}`,CX=`#define LAMBERT
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
}`,wX=`#define MATCAP
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
}`,_X=`#define MATCAP
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
}`,IX=`#define NORMAL
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
}`,AX=`#define NORMAL
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
}`,PX=`#define PHONG
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
}`,TX=`#define PHONG
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
}`,SX=`#define STANDARD
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
}`,jX=`#define STANDARD
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
}`,yX=`#define TOON
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
}`,vX=`#define TOON
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
}`,fX=`uniform float size;
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
}`,xX=`uniform vec3 diffuse;
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
}`,hX=`#include <common>
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
}`,bX=`uniform vec3 color;
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
}`,gX=`uniform float rotation;
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
}`,pX=`uniform vec3 diffuse;
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
}`,v0={alphahash_fragment:KW,alphahash_pars_fragment:qW,alphamap_fragment:GW,alphamap_pars_fragment:UW,alphatest_fragment:FW,alphatest_pars_fragment:VW,aomap_fragment:EW,aomap_pars_fragment:OW,batching_pars_vertex:NW,batching_vertex:RW,begin_vertex:zW,beginnormal_vertex:BW,bsdfs:MW,iridescence_fragment:kW,bumpmap_pars_fragment:LW,clipping_planes_fragment:DW,clipping_planes_pars_fragment:CW,clipping_planes_pars_vertex:wW,clipping_planes_vertex:_W,color_fragment:IW,color_pars_fragment:AW,color_pars_vertex:PW,color_vertex:TW,common:SW,cube_uv_reflection_fragment:jW,defaultnormal_vertex:yW,displacementmap_pars_vertex:vW,displacementmap_vertex:fW,emissivemap_fragment:xW,emissivemap_pars_fragment:hW,colorspace_fragment:bW,colorspace_pars_fragment:gW,envmap_fragment:pW,envmap_common_pars_fragment:uW,envmap_pars_fragment:mW,envmap_pars_vertex:lW,envmap_physical_pars_fragment:JY,envmap_vertex:dW,fog_vertex:cW,fog_pars_vertex:nW,fog_fragment:sW,fog_pars_fragment:oW,gradientmap_pars_fragment:iW,lightmap_pars_fragment:aW,lights_lambert_fragment:rW,lights_lambert_pars_fragment:tW,lights_pars_begin:eW,lights_toon_fragment:$Y,lights_toon_pars_fragment:QY,lights_phong_fragment:ZY,lights_phong_pars_fragment:WY,lights_physical_fragment:YY,lights_physical_pars_fragment:XY,lights_fragment_begin:HY,lights_fragment_maps:KY,lights_fragment_end:qY,logdepthbuf_fragment:GY,logdepthbuf_pars_fragment:UY,logdepthbuf_pars_vertex:FY,logdepthbuf_vertex:VY,map_fragment:EY,map_pars_fragment:OY,map_particle_fragment:NY,map_particle_pars_fragment:RY,metalnessmap_fragment:zY,metalnessmap_pars_fragment:BY,morphinstance_vertex:MY,morphcolor_vertex:kY,morphnormal_vertex:LY,morphtarget_pars_vertex:DY,morphtarget_vertex:CY,normal_fragment_begin:wY,normal_fragment_maps:_Y,normal_pars_fragment:IY,normal_pars_vertex:AY,normal_vertex:PY,normalmap_pars_fragment:TY,clearcoat_normal_fragment_begin:SY,clearcoat_normal_fragment_maps:jY,clearcoat_pars_fragment:yY,iridescence_pars_fragment:vY,opaque_fragment:fY,packing:xY,premultiplied_alpha_fragment:hY,project_vertex:bY,dithering_fragment:gY,dithering_pars_fragment:pY,roughnessmap_fragment:uY,roughnessmap_pars_fragment:mY,shadowmap_pars_fragment:lY,shadowmap_pars_vertex:dY,shadowmap_vertex:cY,shadowmask_pars_fragment:nY,skinbase_vertex:sY,skinning_pars_vertex:oY,skinning_vertex:iY,skinnormal_vertex:aY,specularmap_fragment:rY,specularmap_pars_fragment:tY,tonemapping_fragment:eY,tonemapping_pars_fragment:JX,transmission_fragment:$X,transmission_pars_fragment:QX,uv_pars_fragment:ZX,uv_pars_vertex:WX,uv_vertex:YX,worldpos_vertex:XX,background_vert:HX,background_frag:KX,backgroundCube_vert:qX,backgroundCube_frag:GX,cube_vert:UX,cube_frag:FX,depth_vert:VX,depth_frag:EX,distanceRGBA_vert:OX,distanceRGBA_frag:NX,equirect_vert:RX,equirect_frag:zX,linedashed_vert:BX,linedashed_frag:MX,meshbasic_vert:kX,meshbasic_frag:LX,meshlambert_vert:DX,meshlambert_frag:CX,meshmatcap_vert:wX,meshmatcap_frag:_X,meshnormal_vert:IX,meshnormal_frag:AX,meshphong_vert:PX,meshphong_frag:TX,meshphysical_vert:SX,meshphysical_frag:jX,meshtoon_vert:yX,meshtoon_frag:vX,points_vert:fX,points_frag:xX,shadow_vert:hX,shadow_frag:bX,sprite_vert:gX,sprite_frag:pX},H0={common:{diffuse:{value:new z0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new f0}},envmap:{envMap:{value:null},envMapRotation:{value:new f0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new f0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new f0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new f0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new f0},normalScale:{value:new k0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new f0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new f0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new f0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new f0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new z0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new z0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0},uvTransform:{value:new f0}},sprite:{diffuse:{value:new z0(16777215)},opacity:{value:1},center:{value:new k0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}}},Z7={basic:{uniforms:A6([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.fog]),vertexShader:v0.meshbasic_vert,fragmentShader:v0.meshbasic_frag},lambert:{uniforms:A6([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,H0.lights,{emissive:{value:new z0(0)}}]),vertexShader:v0.meshlambert_vert,fragmentShader:v0.meshlambert_frag},phong:{uniforms:A6([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,H0.lights,{emissive:{value:new z0(0)},specular:{value:new z0(1118481)},shininess:{value:30}}]),vertexShader:v0.meshphong_vert,fragmentShader:v0.meshphong_frag},standard:{uniforms:A6([H0.common,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.roughnessmap,H0.metalnessmap,H0.fog,H0.lights,{emissive:{value:new z0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:v0.meshphysical_vert,fragmentShader:v0.meshphysical_frag},toon:{uniforms:A6([H0.common,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.gradientmap,H0.fog,H0.lights,{emissive:{value:new z0(0)}}]),vertexShader:v0.meshtoon_vert,fragmentShader:v0.meshtoon_frag},matcap:{uniforms:A6([H0.common,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,{matcap:{value:null}}]),vertexShader:v0.meshmatcap_vert,fragmentShader:v0.meshmatcap_frag},points:{uniforms:A6([H0.points,H0.fog]),vertexShader:v0.points_vert,fragmentShader:v0.points_frag},dashed:{uniforms:A6([H0.common,H0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:v0.linedashed_vert,fragmentShader:v0.linedashed_frag},depth:{uniforms:A6([H0.common,H0.displacementmap]),vertexShader:v0.depth_vert,fragmentShader:v0.depth_frag},normal:{uniforms:A6([H0.common,H0.bumpmap,H0.normalmap,H0.displacementmap,{opacity:{value:1}}]),vertexShader:v0.meshnormal_vert,fragmentShader:v0.meshnormal_frag},sprite:{uniforms:A6([H0.sprite,H0.fog]),vertexShader:v0.sprite_vert,fragmentShader:v0.sprite_frag},background:{uniforms:{uvTransform:{value:new f0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:v0.background_vert,fragmentShader:v0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new f0}},vertexShader:v0.backgroundCube_vert,fragmentShader:v0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:v0.cube_vert,fragmentShader:v0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:v0.equirect_vert,fragmentShader:v0.equirect_frag},distanceRGBA:{uniforms:A6([H0.common,H0.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:v0.distanceRGBA_vert,fragmentShader:v0.distanceRGBA_frag},shadow:{uniforms:A6([H0.lights,H0.fog,{color:{value:new z0(0)},opacity:{value:1}}]),vertexShader:v0.shadow_vert,fragmentShader:v0.shadow_frag}};Z7.physical={uniforms:A6([Z7.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new f0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new f0},clearcoatNormalScale:{value:new k0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new f0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new f0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new f0},sheen:{value:0},sheenColor:{value:new z0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new f0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new f0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new f0},transmissionSamplerSize:{value:new k0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new f0},attenuationDistance:{value:0},attenuationColor:{value:new z0(0)},specularColor:{value:new z0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new f0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new f0},anisotropyVector:{value:new k0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new f0}}]),vertexShader:v0.meshphysical_vert,fragmentShader:v0.meshphysical_frag};var k9={r:0,b:0,g:0},p7=new r6,uX=new y0;function mX(J,$,Q,Z,W,Y,X){let H=new z0(0),K=Y===!0?0:1,q,G,U=null,F=0,O=null;function N(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture)C=(M.backgroundBlurriness>0?Q:$).get(C);return C}function R(M){let C=!1,I=N(M);if(I===null)E(H,K);else if(I&&I.isColor)E(I,1),C=!0;let y=J.xr.getEnvironmentBlendMode();if(y==="additive")Z.buffers.color.setClear(0,0,0,1,X);else if(y==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,X);if(J.autoClear||C)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function V(M,C){let I=N(C);if(I&&(I.isCubeTexture||I.mapping===306)){if(G===void 0)G=new V6(new n8(1,1,1),new F7({name:"BackgroundCubeMaterial",uniforms:w8(Z7.backgroundCube.uniforms),vertexShader:Z7.backgroundCube.vertexShader,fragmentShader:Z7.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(y,L,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(p7.copy(C.backgroundRotation),p7.x*=-1,p7.y*=-1,p7.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1)p7.y*=-1,p7.z*=-1;if(G.material.uniforms.envMap.value=I,G.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(uX.makeRotationFromEuler(p7)),G.material.toneMapped=c0.getTransfer(I.colorSpace)!=="srgb",U!==I||F!==I.version||O!==J.toneMapping)G.material.needsUpdate=!0,U=I,F=I.version,O=J.toneMapping;G.layers.enableAll(),M.unshift(G,G.geometry,G.material,0,0,null)}else if(I&&I.isTexture){if(q===void 0)q=new V6(new p9(2,2),new F7({name:"BackgroundMaterial",uniforms:w8(Z7.background.uniforms),vertexShader:Z7.background.vertexShader,fragmentShader:Z7.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),q.geometry.deleteAttribute("normal"),Object.defineProperty(q.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(q);if(q.material.uniforms.t2D.value=I,q.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,q.material.toneMapped=c0.getTransfer(I.colorSpace)!=="srgb",I.matrixAutoUpdate===!0)I.updateMatrix();if(q.material.uniforms.uvTransform.value.copy(I.matrix),U!==I||F!==I.version||O!==J.toneMapping)q.material.needsUpdate=!0,U=I,F=I.version,O=J.toneMapping;q.layers.enableAll(),M.unshift(q,q.geometry,q.material,0,0,null)}}function E(M,C){M.getRGB(k9,JQ(J)),Z.buffers.color.setClear(k9.r,k9.g,k9.b,C,X)}return{getClearColor:function(){return H},setClearColor:function(M,C=1){H.set(M),K=C,E(H,K)},getClearAlpha:function(){return K},setClearAlpha:function(M){K=M,E(H,K)},render:R,addToRenderList:V}}function lX(J,$){let Q=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=F(null),Y=W,X=!1;function H(k,j,u,n,d){let s=!1,l=U(n,u,j);if(Y!==l)Y=l,q(Y.object);if(s=O(k,n,u,d),s)N(k,n,u,d);if(d!==null)$.update(d,J.ELEMENT_ARRAY_BUFFER);if(s||X){if(X=!1,I(k,j,u,n),d!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,$.get(d).buffer)}}function K(){return J.createVertexArray()}function q(k){return J.bindVertexArray(k)}function G(k){return J.deleteVertexArray(k)}function U(k,j,u){let n=u.wireframe===!0,d=Z[k.id];if(d===void 0)d={},Z[k.id]=d;let s=d[j.id];if(s===void 0)s={},d[j.id]=s;let l=s[n];if(l===void 0)l=F(K()),s[n]=l;return l}function F(k){let j=[],u=[],n=[];for(let d=0;d<Q;d++)j[d]=0,u[d]=0,n[d]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:u,attributeDivisors:n,object:k,attributes:{},index:null}}function O(k,j,u,n){let d=Y.attributes,s=j.attributes,l=0,e=u.getAttributes();for(let m in e)if(e[m].location>=0){let F0=d[m],C0=s[m];if(C0===void 0){if(m==="instanceMatrix"&&k.instanceMatrix)C0=k.instanceMatrix;if(m==="instanceColor"&&k.instanceColor)C0=k.instanceColor}if(F0===void 0)return!0;if(F0.attribute!==C0)return!0;if(C0&&F0.data!==C0.data)return!0;l++}if(Y.attributesNum!==l)return!0;if(Y.index!==n)return!0;return!1}function N(k,j,u,n){let d={},s=j.attributes,l=0,e=u.getAttributes();for(let m in e)if(e[m].location>=0){let F0=s[m];if(F0===void 0){if(m==="instanceMatrix"&&k.instanceMatrix)F0=k.instanceMatrix;if(m==="instanceColor"&&k.instanceColor)F0=k.instanceColor}let C0={};if(C0.attribute=F0,F0&&F0.data)C0.data=F0.data;d[m]=C0,l++}Y.attributes=d,Y.attributesNum=l,Y.index=n}function R(){let k=Y.newAttributes;for(let j=0,u=k.length;j<u;j++)k[j]=0}function V(k){E(k,0)}function E(k,j){let{newAttributes:u,enabledAttributes:n,attributeDivisors:d}=Y;if(u[k]=1,n[k]===0)J.enableVertexAttribArray(k),n[k]=1;if(d[k]!==j)J.vertexAttribDivisor(k,j),d[k]=j}function M(){let{newAttributes:k,enabledAttributes:j}=Y;for(let u=0,n=j.length;u<n;u++)if(j[u]!==k[u])J.disableVertexAttribArray(u),j[u]=0}function C(k,j,u,n,d,s,l){if(l===!0)J.vertexAttribIPointer(k,j,u,d,s);else J.vertexAttribPointer(k,j,u,n,d,s)}function I(k,j,u,n){R();let d=n.attributes,s=u.getAttributes(),l=j.defaultAttributeValues;for(let e in s){let m=s[e];if(m.location>=0){let q0=d[e];if(q0===void 0){if(e==="instanceMatrix"&&k.instanceMatrix)q0=k.instanceMatrix;if(e==="instanceColor"&&k.instanceColor)q0=k.instanceColor}if(q0!==void 0){let{normalized:F0,itemSize:C0}=q0,x0=$.get(q0);if(x0===void 0)continue;let{buffer:o,type:Z0,bytesPerElement:U0}=x0,M0=Z0===J.INT||Z0===J.UNSIGNED_INT||q0.gpuType===1013;if(q0.isInterleavedBufferAttribute){let G0=q0.data,P0=G0.stride,t0=q0.offset;if(G0.isInstancedInterleavedBuffer){for(let h0=0;h0<m.locationSize;h0++)E(m.location+h0,G0.meshPerAttribute);if(k.isInstancedMesh!==!0&&n._maxInstanceCount===void 0)n._maxInstanceCount=G0.meshPerAttribute*G0.count}else for(let h0=0;h0<m.locationSize;h0++)V(m.location+h0);J.bindBuffer(J.ARRAY_BUFFER,o);for(let h0=0;h0<m.locationSize;h0++)C(m.location+h0,C0/m.locationSize,Z0,F0,P0*U0,(t0+C0/m.locationSize*h0)*U0,M0)}else{if(q0.isInstancedBufferAttribute){for(let G0=0;G0<m.locationSize;G0++)E(m.location+G0,q0.meshPerAttribute);if(k.isInstancedMesh!==!0&&n._maxInstanceCount===void 0)n._maxInstanceCount=q0.meshPerAttribute*q0.count}else for(let G0=0;G0<m.locationSize;G0++)V(m.location+G0);J.bindBuffer(J.ARRAY_BUFFER,o);for(let G0=0;G0<m.locationSize;G0++)C(m.location+G0,C0/m.locationSize,Z0,F0,C0*U0,C0/m.locationSize*G0*U0,M0)}}else if(l!==void 0){let F0=l[e];if(F0!==void 0)switch(F0.length){case 2:J.vertexAttrib2fv(m.location,F0);break;case 3:J.vertexAttrib3fv(m.location,F0);break;case 4:J.vertexAttrib4fv(m.location,F0);break;default:J.vertexAttrib1fv(m.location,F0)}}}}M()}function y(){b();for(let k in Z){let j=Z[k];for(let u in j){let n=j[u];for(let d in n)G(n[d].object),delete n[d];delete j[u]}delete Z[k]}}function L(k){if(Z[k.id]===void 0)return;let j=Z[k.id];for(let u in j){let n=j[u];for(let d in n)G(n[d].object),delete n[d];delete j[u]}delete Z[k.id]}function S(k){for(let j in Z){let u=Z[j];if(u[k.id]===void 0)continue;let n=u[k.id];for(let d in n)G(n[d].object),delete n[d];delete u[k.id]}}function b(){if(D(),X=!0,Y===W)return;Y=W,q(Y.object)}function D(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:H,reset:b,resetDefaultState:D,dispose:y,releaseStatesOfGeometry:L,releaseStatesOfProgram:S,initAttributes:R,enableAttribute:V,disableUnusedAttributes:M}}function dX(J,$,Q){let Z;function W(q){Z=q}function Y(q,G){J.drawArrays(Z,q,G),Q.update(G,Z,1)}function X(q,G,U){if(U===0)return;J.drawArraysInstanced(Z,q,G,U),Q.update(G,Z,U)}function H(q,G,U){if(U===0)return;$.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,q,0,G,0,U);let O=0;for(let N=0;N<U;N++)O+=G[N];Q.update(O,Z,1)}function K(q,G,U,F){if(U===0)return;let O=$.get("WEBGL_multi_draw");if(O===null)for(let N=0;N<q.length;N++)X(q[N],G[N],F[N]);else{O.multiDrawArraysInstancedWEBGL(Z,q,0,G,0,F,0,U);let N=0;for(let R=0;R<U;R++)N+=G[R];for(let R=0;R<F.length;R++)Q.update(N,Z,F[R])}}this.setMode=W,this.render=Y,this.renderInstances=X,this.renderMultiDraw=H,this.renderMultiDrawInstances=K}function cX(J,$,Q,Z){let W;function Y(){if(W!==void 0)return W;if($.has("EXT_texture_filter_anisotropic")===!0){let L=$.get("EXT_texture_filter_anisotropic");W=J.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function X(L){if(L!==1023&&Z.convert(L)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(L){let S=L===1016&&($.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float"));if(L!==1009&&Z.convert(L)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==1015&&!S)return!1;return!0}function K(L){if(L==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";L="mediump"}if(L==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let q=Q.precision!==void 0?Q.precision:"highp",G=K(q);if(G!==q)console.warn("THREE.WebGLRenderer:",q,"not supported, using",G,"instead."),q=G;let U=Q.logarithmicDepthBuffer===!0,F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),V=J.getParameter(J.MAX_VERTEX_ATTRIBS),E=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),M=J.getParameter(J.MAX_VARYING_VECTORS),C=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=O>0,y=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Y,getMaxPrecision:K,textureFormatReadable:X,textureTypeReadable:H,precision:q,logarithmicDepthBuffer:U,maxTextures:F,maxVertexTextures:O,maxTextureSize:N,maxCubemapSize:R,maxAttributes:V,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:C,vertexTextures:I,maxSamples:y}}function nX(J){let $=this,Q=null,Z=0,W=!1,Y=!1,X=new Q7,H=new f0,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(U,F){let O=U.length!==0||F||Z!==0||W;return W=F,Z=U.length,O},this.beginShadows=function(){Y=!0,G(null)},this.endShadows=function(){Y=!1},this.setGlobalState=function(U,F){Q=G(U,F,0)},this.setState=function(U,F,O){let{clippingPlanes:N,clipIntersection:R,clipShadows:V}=U,E=J.get(U);if(!W||N===null||N.length===0||Y&&!V)if(Y)G(null);else q();else{let M=Y?0:Z,C=M*4,I=E.clippingState||null;K.value=I,I=G(N,F,C,O);for(let y=0;y!==C;++y)I[y]=Q[y];E.clippingState=I,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=M}};function q(){if(K.value!==Q)K.value=Q,K.needsUpdate=Z>0;$.numPlanes=Z,$.numIntersection=0}function G(U,F,O,N){let R=U!==null?U.length:0,V=null;if(R!==0){if(V=K.value,N!==!0||V===null){let E=O+R*4,M=F.matrixWorldInverse;if(H.getNormalMatrix(M),V===null||V.length<E)V=new Float32Array(E);for(let C=0,I=O;C!==R;++C,I+=4)X.copy(U[C]).applyMatrix4(M,H),X.normal.toArray(V,I),V[I+3]=X.constant}K.value=V,K.needsUpdate=!0}return $.numPlanes=R,$.numIntersection=0,V}}function sX(J){let $=new WeakMap;function Q(X,H){if(H===303)X.mapping=301;else if(H===304)X.mapping=302;return X}function Z(X){if(X&&X.isTexture){let H=X.mapping;if(H===303||H===304)if($.has(X)){let K=$.get(X).texture;return Q(K,X.mapping)}else{let K=X.image;if(K&&K.height>0){let q=new QQ(K.height);return q.fromEquirectangularTexture(J,X),$.set(X,q),X.addEventListener("dispose",W),Q(q.texture,X.mapping)}else return null}}return X}function W(X){let H=X.target;H.removeEventListener("dispose",W);let K=$.get(H);if(K!==void 0)$.delete(H),K.dispose()}function Y(){$=new WeakMap}return{get:Z,dispose:Y}}class s8 extends lJ{constructor(J=-1,$=1,Q=1,Z=-1,W=0.1,Y=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=$,this.top=Q,this.bottom=Z,this.near=W,this.far=Y,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,$,Q,Z,W,Y){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=W,this.view.height=Y,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=Q-J,Y=Q+J,X=Z+$,H=Z-$;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,q=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=K*this.view.offsetX,Y=W+K*this.view.width,X-=q*this.view.offsetY,H=X-q*this.view.height}this.projectionMatrix.makeOrthographic(W,Y,X,H,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}var k8=4,r5=[0.125,0.215,0.35,0.446,0.526,0.582],l7=20,zJ=new s8,t5=new z0,BJ=null,MJ=0,kJ=0,LJ=!1,m7=(1+Math.sqrt(5))/2,B8=1/m7,e5=[new P(-m7,B8,0),new P(m7,B8,0),new P(-B8,0,m7),new P(B8,0,m7),new P(0,m7,-B8),new P(0,m7,B8),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class TJ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,$=0,Q=0.1,Z=100){BJ=this._renderer.getRenderTarget(),MJ=this._renderer.getActiveCubeFace(),kJ=this._renderer.getActiveMipmapLevel(),LJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let W=this._allocateTargets();if(W.depthBuffer=!0,this._sceneToCubeUV(J,Q,Z,W),$>0)this._blur(W,0,0,$);return this._applyPMREM(W),this._cleanup(W),W}fromEquirectangular(J,$=null){return this._fromTexture(J,$)}fromCubemap(J,$=null){return this._fromTexture(J,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Q$(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=$$(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(BJ,MJ,kJ),this._renderer.xr.enabled=LJ,J.scissorTest=!1,L9(J,0,0,J.width,J.height)}_fromTexture(J,$){if(J.mapping===301||J.mapping===302)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);BJ=this._renderer.getRenderTarget(),MJ=this._renderer.getActiveCubeFace(),kJ=this._renderer.getActiveMipmapLevel(),LJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Q=$||this._allocateTargets();return this._textureToCubeUV(J,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),$=4*this._cubeSize,Q={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},Z=J$(J,$,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==$){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=J$(J,$,Q);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oX(W)),this._blurMaterial=iX(W,J,$)}return Z}_compileMaterial(J){let $=new V6(this._lodPlanes[0],J);this._renderer.compile($,zJ)}_sceneToCubeUV(J,$,Q,Z){let X=new z6(90,1,$,Q),H=[1,-1,1,1,1,1],K=[1,1,1,-1,-1,-1],q=this._renderer,G=q.autoClear,U=q.toneMapping;q.getClearColor(t5),q.toneMapping=0,q.autoClear=!1;let F=new E7({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),O=new V6(new n8,F),N=!1,R=J.background;if(R){if(R.isColor)F.color.copy(R),J.background=null,N=!0}else F.color.copy(t5),N=!0;for(let V=0;V<6;V++){let E=V%3;if(E===0)X.up.set(0,H[V],0),X.lookAt(K[V],0,0);else if(E===1)X.up.set(0,0,H[V]),X.lookAt(0,K[V],0);else X.up.set(0,H[V],0),X.lookAt(0,0,K[V]);let M=this._cubeSize;if(L9(Z,E*M,V>2?M:0,M,M),q.setRenderTarget(Z),N)q.render(O,X);q.render(J,X)}O.geometry.dispose(),O.material.dispose(),q.toneMapping=U,q.autoClear=G,J.background=R}_textureToCubeUV(J,$){let Q=this._renderer,Z=J.mapping===301||J.mapping===302;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=Q$();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=$$();let W=Z?this._cubemapMaterial:this._equirectMaterial,Y=new V6(this._lodPlanes[0],W),X=W.uniforms;X.envMap.value=J;let H=this._cubeSize;L9($,0,0,3*H,2*H),Q.setRenderTarget($),Q.render(Y,zJ)}_applyPMREM(J){let $=this._renderer,Q=$.autoClear;$.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let Y=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),X=e5[(Z-W-1)%e5.length];this._blur(J,W-1,W,Y,X)}$.autoClear=Q}_blur(J,$,Q,Z,W){let Y=this._pingPongRenderTarget;this._halfBlur(J,Y,$,Q,Z,"latitudinal",W),this._halfBlur(Y,J,Q,Q,Z,"longitudinal",W)}_halfBlur(J,$,Q,Z,W,Y,X){let H=this._renderer,K=this._blurMaterial;if(Y!=="latitudinal"&&Y!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let q=3,G=new V6(this._lodPlanes[Z],K),U=K.uniforms,F=this._sizeLods[Q]-1,O=isFinite(W)?Math.PI/(2*F):2*Math.PI/(2*l7-1),N=W/O,R=isFinite(W)?1+Math.floor(q*N):l7;if(R>l7)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${R} samples when the maximum is set to ${l7}`);let V=[],E=0;for(let L=0;L<l7;++L){let S=L/N,b=Math.exp(-S*S/2);if(V.push(b),L===0)E+=b;else if(L<R)E+=2*b}for(let L=0;L<V.length;L++)V[L]=V[L]/E;if(U.envMap.value=J.texture,U.samples.value=R,U.weights.value=V,U.latitudinal.value=Y==="latitudinal",X)U.poleAxis.value=X;let{_lodMax:M}=this;U.dTheta.value=O,U.mipInt.value=M-Q;let C=this._sizeLods[Z],I=3*C*(Z>M-k8?Z-M+k8:0),y=4*(this._cubeSize-C);L9($,I,y,3*C,2*C),H.setRenderTarget($),H.render(G,zJ)}}function oX(J){let $=[],Q=[],Z=[],W=J,Y=J-k8+1+r5.length;for(let X=0;X<Y;X++){let H=Math.pow(2,W);Q.push(H);let K=1/H;if(X>J-k8)K=r5[X-J+k8-1];else if(X===0)K=0;Z.push(K);let q=1/(H-2),G=-q,U=1+q,F=[G,G,U,G,U,U,G,G,U,U,G,U],O=6,N=6,R=3,V=2,E=1,M=new Float32Array(R*N*O),C=new Float32Array(V*N*O),I=new Float32Array(E*N*O);for(let L=0;L<O;L++){let S=L%3*2/3-1,b=L>2?0:-1,D=[S,b,0,S+0.6666666666666666,b,0,S+0.6666666666666666,b+1,0,S,b,0,S+0.6666666666666666,b+1,0,S,b+1,0];M.set(D,R*N*L),C.set(F,V*N*L);let k=[L,L,L,L,L,L];I.set(k,E*N*L)}let y=new K6;if(y.setAttribute("position",new H6(M,R)),y.setAttribute("uv",new H6(C,V)),y.setAttribute("faceIndex",new H6(I,E)),$.push(y),W>k8)W--}return{lodPlanes:$,sizeLods:Q,sigmas:Z}}function J$(J,$,Q){let Z=new A7(J,$,Q);return Z.texture.mapping=306,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function L9(J,$,Q,Z,W){J.viewport.set($,Q,Z,W),J.scissor.set($,Q,Z,W)}function iX(J,$,Q){let Z=new Float32Array(l7),W=new P(0,1,0);return new F7({name:"SphericalGaussianBlur",defines:{n:l7,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:cJ(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $$(){return new F7({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cJ(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Q$(){return new F7({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cJ(){return`

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
	`}function aX(J){let $=new WeakMap,Q=null;function Z(H){if(H&&H.isTexture){let K=H.mapping,q=K===303||K===304,G=K===301||K===302;if(q||G){let U=$.get(H),F=U!==void 0?U.texture.pmremVersion:0;if(H.isRenderTargetTexture&&H.pmremVersion!==F){if(Q===null)Q=new TJ(J);return U=q?Q.fromEquirectangular(H,U):Q.fromCubemap(H,U),U.texture.pmremVersion=H.pmremVersion,$.set(H,U),U.texture}else if(U!==void 0)return U.texture;else{let O=H.image;if(q&&O&&O.height>0||G&&O&&W(O)){if(Q===null)Q=new TJ(J);return U=q?Q.fromEquirectangular(H):Q.fromCubemap(H),U.texture.pmremVersion=H.pmremVersion,$.set(H,U),H.addEventListener("dispose",Y),U.texture}else return null}}}return H}function W(H){let K=0,q=6;for(let G=0;G<q;G++)if(H[G]!==void 0)K++;return K===q}function Y(H){let K=H.target;K.removeEventListener("dispose",Y);let q=$.get(K);if(q!==void 0)$.delete(K),q.dispose()}function X(){if($=new WeakMap,Q!==null)Q.dispose(),Q=null}return{get:Z,dispose:X}}function rX(J){let $={};function Q(Z){if($[Z]!==void 0)return $[Z];let W;switch(Z){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension(Z)}return $[Z]=W,W}return{has:function(Z){return Q(Z)!==null},init:function(){Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance"),Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture"),Q("WEBGL_render_shared_exponent")},get:function(Z){let W=Q(Z);if(W===null)hJ("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function tX(J,$,Q,Z){let W={},Y=new WeakMap;function X(U){let F=U.target;if(F.index!==null)$.remove(F.index);for(let N in F.attributes)$.remove(F.attributes[N]);for(let N in F.morphAttributes){let R=F.morphAttributes[N];for(let V=0,E=R.length;V<E;V++)$.remove(R[V])}F.removeEventListener("dispose",X),delete W[F.id];let O=Y.get(F);if(O)$.remove(O),Y.delete(F);if(Z.releaseStatesOfGeometry(F),F.isInstancedBufferGeometry===!0)delete F._maxInstanceCount;Q.memory.geometries--}function H(U,F){if(W[F.id]===!0)return F;return F.addEventListener("dispose",X),W[F.id]=!0,Q.memory.geometries++,F}function K(U){let F=U.attributes;for(let N in F)$.update(F[N],J.ARRAY_BUFFER);let O=U.morphAttributes;for(let N in O){let R=O[N];for(let V=0,E=R.length;V<E;V++)$.update(R[V],J.ARRAY_BUFFER)}}function q(U){let F=[],O=U.index,N=U.attributes.position,R=0;if(O!==null){let M=O.array;R=O.version;for(let C=0,I=M.length;C<I;C+=3){let y=M[C+0],L=M[C+1],S=M[C+2];F.push(y,L,L,S,S,y)}}else if(N!==void 0){let M=N.array;R=N.version;for(let C=0,I=M.length/3-1;C<I;C+=3){let y=C+0,L=C+1,S=C+2;F.push(y,L,L,S,S,y)}}else return;let V=new((i$(F))?mJ:uJ)(F,1);V.version=R;let E=Y.get(U);if(E)$.remove(E);Y.set(U,V)}function G(U){let F=Y.get(U);if(F){let O=U.index;if(O!==null){if(F.version<O.version)q(U)}}else q(U);return Y.get(U)}return{get:H,update:K,getWireframeAttribute:G}}function eX(J,$,Q){let Z;function W(F){Z=F}let Y,X;function H(F){Y=F.type,X=F.bytesPerElement}function K(F,O){J.drawElements(Z,O,Y,F*X),Q.update(O,Z,1)}function q(F,O,N){if(N===0)return;J.drawElementsInstanced(Z,O,Y,F*X,N),Q.update(O,Z,N)}function G(F,O,N){if(N===0)return;$.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,O,0,Y,F,0,N);let V=0;for(let E=0;E<N;E++)V+=O[E];Q.update(V,Z,1)}function U(F,O,N,R){if(N===0)return;let V=$.get("WEBGL_multi_draw");if(V===null)for(let E=0;E<F.length;E++)q(F[E]/X,O[E],R[E]);else{V.multiDrawElementsInstancedWEBGL(Z,O,0,Y,F,0,R,0,N);let E=0;for(let M=0;M<N;M++)E+=O[M];for(let M=0;M<R.length;M++)Q.update(E,Z,R[M])}}this.setMode=W,this.setIndex=H,this.render=K,this.renderInstances=q,this.renderMultiDraw=G,this.renderMultiDrawInstances=U}function JH(J){let $={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(Y,X,H){switch(Q.calls++,X){case J.TRIANGLES:Q.triangles+=H*(Y/3);break;case J.LINES:Q.lines+=H*(Y/2);break;case J.LINE_STRIP:Q.lines+=H*(Y-1);break;case J.LINE_LOOP:Q.lines+=H*Y;break;case J.POINTS:Q.points+=H*Y;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",X);break}}function W(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:$,render:Q,programs:null,autoReset:!0,reset:W,update:Z}}function $H(J,$,Q){let Z=new WeakMap,W=new r0;function Y(X,H,K){let q=X.morphTargetInfluences,G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,U=G!==void 0?G.length:0,F=Z.get(H);if(F===void 0||F.count!==U){let D=function(){S.dispose(),Z.delete(H),H.removeEventListener("dispose",D)};if(F!==void 0)F.texture.dispose();let O=H.morphAttributes.position!==void 0,N=H.morphAttributes.normal!==void 0,R=H.morphAttributes.color!==void 0,V=H.morphAttributes.position||[],E=H.morphAttributes.normal||[],M=H.morphAttributes.color||[],C=0;if(O===!0)C=1;if(N===!0)C=2;if(R===!0)C=3;let I=H.attributes.position.count*C,y=1;if(I>$.maxTextureSize)y=Math.ceil(I/$.maxTextureSize),I=$.maxTextureSize;let L=new Float32Array(I*y*4*U),S=new gJ(L,I,y,U);S.type=1015,S.needsUpdate=!0;let b=C*4;for(let k=0;k<U;k++){let j=V[k],u=E[k],n=M[k],d=I*y*4*k;for(let s=0;s<j.count;s++){let l=s*b;if(O===!0)W.fromBufferAttribute(j,s),L[d+l+0]=W.x,L[d+l+1]=W.y,L[d+l+2]=W.z,L[d+l+3]=0;if(N===!0)W.fromBufferAttribute(u,s),L[d+l+4]=W.x,L[d+l+5]=W.y,L[d+l+6]=W.z,L[d+l+7]=0;if(R===!0)W.fromBufferAttribute(n,s),L[d+l+8]=W.x,L[d+l+9]=W.y,L[d+l+10]=W.z,L[d+l+11]=n.itemSize===4?W.w:1}}F={count:U,texture:S,size:new k0(I,y)},Z.set(H,F),H.addEventListener("dispose",D)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",X.morphTexture,Q);else{let O=0;for(let R=0;R<q.length;R++)O+=q[R];let N=H.morphTargetsRelative?1:1-O;K.getUniforms().setValue(J,"morphTargetBaseInfluence",N),K.getUniforms().setValue(J,"morphTargetInfluences",q)}K.getUniforms().setValue(J,"morphTargetsTexture",F.texture,Q),K.getUniforms().setValue(J,"morphTargetsTextureSize",F.size)}return{update:Y}}function QH(J,$,Q,Z){let W=new WeakMap;function Y(K){let q=Z.render.frame,G=K.geometry,U=$.get(K,G);if(W.get(U)!==q)$.update(U),W.set(U,q);if(K.isInstancedMesh){if(K.hasEventListener("dispose",H)===!1)K.addEventListener("dispose",H);if(W.get(K)!==q){if(Q.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)Q.update(K.instanceColor,J.ARRAY_BUFFER);W.set(K,q)}}if(K.isSkinnedMesh){let F=K.skeleton;if(W.get(F)!==q)F.update(),W.set(F,q)}return U}function X(){W=new WeakMap}function H(K){let q=K.target;if(q.removeEventListener("dispose",H),Q.remove(q.instanceMatrix),q.instanceColor!==null)Q.remove(q.instanceColor)}return{update:Y,dispose:X}}class nJ extends E6{constructor(J,$,Q,Z,W,Y,X,H,K,q=1026){if(q!==1026&&q!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(Q===void 0&&q===1026)Q=1014;if(Q===void 0&&q===1027)Q=1020;super(null,Z,W,Y,X,H,q,Q,K);this.isDepthTexture=!0,this.image={width:J,height:$},this.magFilter=X!==void 0?X:1003,this.minFilter=H!==void 0?H:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.compareFunction=J.compareFunction,this}toJSON(J){let $=super.toJSON(J);if(this.compareFunction!==null)$.compareFunction=this.compareFunction;return $}}var WQ=new E6,Z$=new nJ(1,1),YQ=new gJ,XQ=new t$,HQ=new dJ,W$=[],Y$=[],X$=new Float32Array(16),H$=new Float32Array(9),K$=new Float32Array(4);function I8(J,$,Q){let Z=J[0];if(Z<=0||Z>0)return J;let W=$*Q,Y=W$[W];if(Y===void 0)Y=new Float32Array(W),W$[W]=Y;if($!==0){Z.toArray(Y,0);for(let X=1,H=0;X!==$;++X)H+=Q,J[X].toArray(Y,H)}return Y}function O6(J,$){if(J.length!==$.length)return!1;for(let Q=0,Z=J.length;Q<Z;Q++)if(J[Q]!==$[Q])return!1;return!0}function N6(J,$){for(let Q=0,Z=$.length;Q<Z;Q++)J[Q]=$[Q]}function u9(J,$){let Q=Y$[$];if(Q===void 0)Q=new Int32Array($),Y$[$]=Q;for(let Z=0;Z!==$;++Z)Q[Z]=J.allocateTextureUnit();return Q}function ZH(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1f(this.addr,$),Q[0]=$}function WH(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2f(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(O6(Q,$))return;J.uniform2fv(this.addr,$),N6(Q,$)}}function YH(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3f(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else if($.r!==void 0){if(Q[0]!==$.r||Q[1]!==$.g||Q[2]!==$.b)J.uniform3f(this.addr,$.r,$.g,$.b),Q[0]=$.r,Q[1]=$.g,Q[2]=$.b}else{if(O6(Q,$))return;J.uniform3fv(this.addr,$),N6(Q,$)}}function XH(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4f(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(O6(Q,$))return;J.uniform4fv(this.addr,$),N6(Q,$)}}function HH(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(O6(Q,$))return;J.uniformMatrix2fv(this.addr,!1,$),N6(Q,$)}else{if(O6(Q,Z))return;K$.set(Z),J.uniformMatrix2fv(this.addr,!1,K$),N6(Q,Z)}}function KH(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(O6(Q,$))return;J.uniformMatrix3fv(this.addr,!1,$),N6(Q,$)}else{if(O6(Q,Z))return;H$.set(Z),J.uniformMatrix3fv(this.addr,!1,H$),N6(Q,Z)}}function qH(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(O6(Q,$))return;J.uniformMatrix4fv(this.addr,!1,$),N6(Q,$)}else{if(O6(Q,Z))return;X$.set(Z),J.uniformMatrix4fv(this.addr,!1,X$),N6(Q,Z)}}function GH(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1i(this.addr,$),Q[0]=$}function UH(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2i(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(O6(Q,$))return;J.uniform2iv(this.addr,$),N6(Q,$)}}function FH(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3i(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(O6(Q,$))return;J.uniform3iv(this.addr,$),N6(Q,$)}}function VH(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4i(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(O6(Q,$))return;J.uniform4iv(this.addr,$),N6(Q,$)}}function EH(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1ui(this.addr,$),Q[0]=$}function OH(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2ui(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(O6(Q,$))return;J.uniform2uiv(this.addr,$),N6(Q,$)}}function NH(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3ui(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(O6(Q,$))return;J.uniform3uiv(this.addr,$),N6(Q,$)}}function RH(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4ui(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(O6(Q,$))return;J.uniform4uiv(this.addr,$),N6(Q,$)}}function zH(J,$,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let Y;if(this.type===J.SAMPLER_2D_SHADOW)Z$.compareFunction=515,Y=Z$;else Y=WQ;Q.setTexture2D($||Y,W)}function BH(J,$,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;Q.setTexture3D($||XQ,W)}function MH(J,$,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;Q.setTextureCube($||HQ,W)}function kH(J,$,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;Q.setTexture2DArray($||YQ,W)}function LH(J){switch(J){case 5126:return ZH;case 35664:return WH;case 35665:return YH;case 35666:return XH;case 35674:return HH;case 35675:return KH;case 35676:return qH;case 5124:case 35670:return GH;case 35667:case 35671:return UH;case 35668:case 35672:return FH;case 35669:case 35673:return VH;case 5125:return EH;case 36294:return OH;case 36295:return NH;case 36296:return RH;case 35678:case 36198:case 36298:case 36306:case 35682:return zH;case 35679:case 36299:case 36307:return BH;case 35680:case 36300:case 36308:case 36293:return MH;case 36289:case 36303:case 36311:case 36292:return kH}}function DH(J,$){J.uniform1fv(this.addr,$)}function CH(J,$){let Q=I8($,this.size,2);J.uniform2fv(this.addr,Q)}function wH(J,$){let Q=I8($,this.size,3);J.uniform3fv(this.addr,Q)}function _H(J,$){let Q=I8($,this.size,4);J.uniform4fv(this.addr,Q)}function IH(J,$){let Q=I8($,this.size,4);J.uniformMatrix2fv(this.addr,!1,Q)}function AH(J,$){let Q=I8($,this.size,9);J.uniformMatrix3fv(this.addr,!1,Q)}function PH(J,$){let Q=I8($,this.size,16);J.uniformMatrix4fv(this.addr,!1,Q)}function TH(J,$){J.uniform1iv(this.addr,$)}function SH(J,$){J.uniform2iv(this.addr,$)}function jH(J,$){J.uniform3iv(this.addr,$)}function yH(J,$){J.uniform4iv(this.addr,$)}function vH(J,$){J.uniform1uiv(this.addr,$)}function fH(J,$){J.uniform2uiv(this.addr,$)}function xH(J,$){J.uniform3uiv(this.addr,$)}function hH(J,$){J.uniform4uiv(this.addr,$)}function bH(J,$,Q){let Z=this.cache,W=$.length,Y=u9(Q,W);if(!O6(Z,Y))J.uniform1iv(this.addr,Y),N6(Z,Y);for(let X=0;X!==W;++X)Q.setTexture2D($[X]||WQ,Y[X])}function gH(J,$,Q){let Z=this.cache,W=$.length,Y=u9(Q,W);if(!O6(Z,Y))J.uniform1iv(this.addr,Y),N6(Z,Y);for(let X=0;X!==W;++X)Q.setTexture3D($[X]||XQ,Y[X])}function pH(J,$,Q){let Z=this.cache,W=$.length,Y=u9(Q,W);if(!O6(Z,Y))J.uniform1iv(this.addr,Y),N6(Z,Y);for(let X=0;X!==W;++X)Q.setTextureCube($[X]||HQ,Y[X])}function uH(J,$,Q){let Z=this.cache,W=$.length,Y=u9(Q,W);if(!O6(Z,Y))J.uniform1iv(this.addr,Y),N6(Z,Y);for(let X=0;X!==W;++X)Q.setTexture2DArray($[X]||YQ,Y[X])}function mH(J){switch(J){case 5126:return DH;case 35664:return CH;case 35665:return wH;case 35666:return _H;case 35674:return IH;case 35675:return AH;case 35676:return PH;case 5124:case 35670:return TH;case 35667:case 35671:return SH;case 35668:case 35672:return jH;case 35669:case 35673:return yH;case 5125:return vH;case 36294:return fH;case 36295:return xH;case 36296:return hH;case 35678:case 36198:case 36298:case 36306:case 35682:return bH;case 35679:case 36299:case 36307:return gH;case 35680:case 36300:case 36308:case 36293:return pH;case 36289:case 36303:case 36311:case 36292:return uH}}class KQ{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.setValue=LH($.type)}}class qQ{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.size=$.size,this.setValue=mH($.type)}}class GQ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,$,Q){let Z=this.seq;for(let W=0,Y=Z.length;W!==Y;++W){let X=Z[W];X.setValue(J,$[X.id],Q)}}}var DJ=/(\w+)(\])?(\[|\.)?/g;function q$(J,$){J.seq.push($),J.map[$.id]=$}function lH(J,$,Q){let Z=J.name,W=Z.length;DJ.lastIndex=0;while(!0){let Y=DJ.exec(Z),X=DJ.lastIndex,H=Y[1],K=Y[2]==="]",q=Y[3];if(K)H=H|0;if(q===void 0||q==="["&&X+2===W){q$(Q,q===void 0?new KQ(H,J,$):new qQ(H,J,$));break}else{let U=Q.map[H];if(U===void 0)U=new GQ(H),q$(Q,U);Q=U}}}class l8{constructor(J,$){this.seq=[],this.map={};let Q=J.getProgramParameter($,J.ACTIVE_UNIFORMS);for(let Z=0;Z<Q;++Z){let W=J.getActiveUniform($,Z),Y=J.getUniformLocation($,W.name);lH(W,Y,this)}}setValue(J,$,Q,Z){let W=this.map[$];if(W!==void 0)W.setValue(J,Q,Z)}setOptional(J,$,Q){let Z=$[Q];if(Z!==void 0)this.setValue(J,Q,Z)}static upload(J,$,Q,Z){for(let W=0,Y=$.length;W!==Y;++W){let X=$[W],H=Q[X.id];if(H.needsUpdate!==!1)X.setValue(J,H.value,Z)}}static seqWithValue(J,$){let Q=[];for(let Z=0,W=J.length;Z!==W;++Z){let Y=J[Z];if(Y.id in $)Q.push(Y)}return Q}}function G$(J,$,Q){let Z=J.createShader($);return J.shaderSource(Z,Q),J.compileShader(Z),Z}var dH=37297,cH=0;function nH(J,$){let Q=J.split(`
`),Z=[],W=Math.max($-6,0),Y=Math.min($+6,Q.length);for(let X=W;X<Y;X++){let H=X+1;Z.push(`${H===$?">":" "} ${H}: ${Q[X]}`)}return Z.join(`
`)}function sH(J){let $=c0.getPrimaries(c0.workingColorSpace),Q=c0.getPrimaries(J),Z;if($===Q)Z="";else if($==="p3"&&Q==="rec709")Z="LinearDisplayP3ToLinearSRGB";else if($==="rec709"&&Q==="p3")Z="LinearSRGBToLinearDisplayP3";switch(J){case"srgb-linear":case"display-p3-linear":return[Z,"LinearTransferOETF"];case"srgb":case"display-p3":return[Z,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",J),[Z,"LinearTransferOETF"]}}function U$(J,$,Q){let Z=J.getShaderParameter($,J.COMPILE_STATUS),W=J.getShaderInfoLog($).trim();if(Z&&W==="")return"";let Y=/ERROR: 0:(\d+)/.exec(W);if(Y){let X=parseInt(Y[1]);return Q.toUpperCase()+`

`+W+`

`+nH(J.getShaderSource($),X)}else return W}function oH(J,$){let Q=sH($);return`vec4 ${J}( vec4 value ) { return ${Q[0]}( ${Q[1]}( value ) ); }`}function iH(J,$){let Q;switch($){case 1:Q="Linear";break;case 2:Q="Reinhard";break;case 3:Q="OptimizedCineon";break;case 4:Q="ACESFilmic";break;case 6:Q="AgX";break;case 7:Q="Neutral";break;case 5:Q="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",$),Q="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}function aH(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(u8).join(`
`)}function rH(J){let $=[];for(let Q in J){let Z=J[Q];if(Z===!1)continue;$.push("#define "+Q+" "+Z)}return $.join(`
`)}function tH(J,$){let Q={},Z=J.getProgramParameter($,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let Y=J.getActiveAttrib($,W),X=Y.name,H=1;if(Y.type===J.FLOAT_MAT2)H=2;if(Y.type===J.FLOAT_MAT3)H=3;if(Y.type===J.FLOAT_MAT4)H=4;Q[X]={type:Y.type,location:J.getAttribLocation($,X),locationSize:H}}return Q}function u8(J){return J!==""}function F$(J,$){let Q=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows)}function V$(J,$){return J.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var eH=/^[ \t]*#include +<([\w\d./]+)>/gm;function SJ(J){return J.replace(eH,$4)}var J4=new Map;function $4(J,$){let Q=v0[$];if(Q===void 0){let Z=J4.get($);if(Z!==void 0)Q=v0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',$,Z);else throw Error("Can not resolve #include <"+$+">")}return SJ(Q)}var Q4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E$(J){return J.replace(Q4,Z4)}function Z4(J,$,Q,Z){let W="";for(let Y=parseInt($);Y<parseInt(Q);Y++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+Y+" ]").replace(/UNROLLED_LOOP_INDEX/g,Y);return W}function O$(J){let $=`precision ${J.precision} float;
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
	`;if(J.precision==="highp")$+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")$+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")$+=`
#define LOW_PRECISION`;return $}function W4(J){let $="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===1)$="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===2)$="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===3)$="SHADOWMAP_TYPE_VSM";return $}function Y4(J){let $="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case 301:case 302:$="ENVMAP_TYPE_CUBE";break;case 306:$="ENVMAP_TYPE_CUBE_UV";break}return $}function X4(J){let $="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case 302:$="ENVMAP_MODE_REFRACTION";break}return $}function H4(J){let $="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case 0:$="ENVMAP_BLENDING_MULTIPLY";break;case 1:$="ENVMAP_BLENDING_MIX";break;case 2:$="ENVMAP_BLENDING_ADD";break}return $}function K4(J){let $=J.envMapCubeUVHeight;if($===null)return null;let Q=Math.log2($)-2,Z=1/$;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:Z,maxMip:Q}}function q4(J,$,Q,Z){let W=J.getContext(),Y=Q.defines,X=Q.vertexShader,H=Q.fragmentShader,K=W4(Q),q=Y4(Q),G=X4(Q),U=H4(Q),F=K4(Q),O=aH(Q),N=rH(Y),R=W.createProgram(),V,E,M=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(V=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,N].filter(u8).join(`
`),V.length>0)V+=`
`;if(E=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,N].filter(u8).join(`
`),E.length>0)E+=`
`}else V=[O$(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,N,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.batchingColor?"#define USE_BATCHING_COLOR":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.instancingMorph?"#define USE_INSTANCING_MORPH":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+G:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+K:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(u8).join(`
`),E=[O$(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,N,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+q:"",Q.envMap?"#define "+G:"",Q.envMap?"#define "+U:"",F?"#define CUBEUV_TEXEL_WIDTH "+F.texelWidth:"",F?"#define CUBEUV_TEXEL_HEIGHT "+F.texelHeight:"",F?"#define CUBEUV_MAX_MIP "+F.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.dispersion?"#define USE_DISPERSION":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor||Q.batchingColor?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+K:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==0?"#define TONE_MAPPING":"",Q.toneMapping!==0?v0.tonemapping_pars_fragment:"",Q.toneMapping!==0?iH("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",v0.colorspace_pars_fragment,oH("linearToOutputTexel",Q.outputColorSpace),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(u8).join(`
`);if(X=SJ(X),X=F$(X,Q),X=V$(X,Q),H=SJ(H),H=F$(H,Q),H=V$(H,Q),X=E$(X),H=E$(H),Q.isRawShaderMaterial!==!0)M=`#version 300 es
`,V=[O,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+V,E=["#define varying in",Q.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let C=M+V+X,I=M+E+H,y=G$(W,W.VERTEX_SHADER,C),L=G$(W,W.FRAGMENT_SHADER,I);if(W.attachShader(R,y),W.attachShader(R,L),Q.index0AttributeName!==void 0)W.bindAttribLocation(R,0,Q.index0AttributeName);else if(Q.morphTargets===!0)W.bindAttribLocation(R,0,"position");W.linkProgram(R);function S(j){if(J.debug.checkShaderErrors){let u=W.getProgramInfoLog(R).trim(),n=W.getShaderInfoLog(y).trim(),d=W.getShaderInfoLog(L).trim(),s=!0,l=!0;if(W.getProgramParameter(R,W.LINK_STATUS)===!1)if(s=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,R,y,L);else{let e=U$(W,y,"vertex"),m=U$(W,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(R,W.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+u+`
`+e+`
`+m)}else if(u!=="")console.warn("THREE.WebGLProgram: Program Info Log:",u);else if(n===""||d==="")l=!1;if(l)j.diagnostics={runnable:s,programLog:u,vertexShader:{log:n,prefix:V},fragmentShader:{log:d,prefix:E}}}W.deleteShader(y),W.deleteShader(L),b=new l8(W,R),D=tH(W,R)}let b;this.getUniforms=function(){if(b===void 0)S(this);return b};let D;this.getAttributes=function(){if(D===void 0)S(this);return D};let k=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(k===!1)k=W.getProgramParameter(R,dH);return k},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(R),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=cH++,this.cacheKey=$,this.usedTimes=1,this.program=R,this.vertexShader=y,this.fragmentShader=L,this}var G4=0;class UQ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:$,fragmentShader:Q}=J,Z=this._getShaderStage($),W=this._getShaderStage(Q),Y=this._getShaderCacheForMaterial(J);if(Y.has(Z)===!1)Y.add(Z),Z.usedTimes++;if(Y.has(W)===!1)Y.add(W),W.usedTimes++;return this}remove(J){let $=this.materialCache.get(J);for(let Q of $)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let $=this.materialCache,Q=$.get(J);if(Q===void 0)Q=new Set,$.set(J,Q);return Q}_getShaderStage(J){let $=this.shaderCache,Q=$.get(J);if(Q===void 0)Q=new FQ(J),$.set(J,Q);return Q}}class FQ{constructor(J){this.id=G4++,this.code=J,this.usedTimes=0}}function U4(J,$,Q,Z,W,Y,X){let H=new pJ,K=new UQ,q=new Set,G=[],U=W.logarithmicDepthBuffer,F=W.vertexTextures,O=W.precision,N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){if(q.add(D),D===0)return"uv";return`uv${D}`}function V(D,k,j,u,n){let d=u.fog,s=n.geometry,l=D.isMeshStandardMaterial?u.environment:null,e=(D.isMeshStandardMaterial?Q:$).get(D.envMap||l),m=!!e&&e.mapping===306?e.image.height:null,q0=N[D.type];if(D.precision!==null){if(O=W.getMaxPrecision(D.precision),O!==D.precision)console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",O,"instead.")}let F0=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,C0=F0!==void 0?F0.length:0,x0=0;if(s.morphAttributes.position!==void 0)x0=1;if(s.morphAttributes.normal!==void 0)x0=2;if(s.morphAttributes.color!==void 0)x0=3;let o,Z0,U0,M0;if(q0){let b0=Z7[q0];o=b0.vertexShader,Z0=b0.fragmentShader}else o=D.vertexShader,Z0=D.fragmentShader,K.update(D),U0=K.getVertexShaderID(D),M0=K.getFragmentShaderID(D);let G0=J.getRenderTarget(),P0=n.isInstancedMesh===!0,t0=n.isBatchedMesh===!0,h0=!!D.map,T=!!D.matcap,Z6=!!e,g0=!!D.aoMap,e0=!!D.lightMap,L0=!!D.bumpMap,l0=!!D.normalMap,T0=!!D.displacementMap,S0=!!D.emissiveMap,$6=!!D.metalnessMap,_=!!D.roughnessMap,z=D.anisotropy>0,g=D.clearcoat>0,a=D.dispersion>0,r=D.iridescence>0,t=D.sheen>0,B0=D.transmission>0,W0=z&&!!D.anisotropyMap,Y0=g&&!!D.clearcoatMap,j0=g&&!!D.clearcoatNormalMap,J0=g&&!!D.clearcoatRoughnessMap,N0=r&&!!D.iridescenceMap,u0=r&&!!D.iridescenceThicknessMap,w0=t&&!!D.sheenColorMap,X0=t&&!!D.sheenRoughnessMap,I0=!!D.specularMap,m0=!!D.specularColorMap,A=!!D.specularIntensityMap,w=B0&&!!D.transmissionMap,i=B0&&!!D.thicknessMap,p=!!D.gradientMap,c=!!D.alphaMap,$0=D.alphaTest>0,O0=!!D.alphaHash,d0=!!D.extensions,W6=0;if(D.toneMapped){if(G0===null||G0.isXRRenderTarget===!0)W6=J.toneMapping}let q6={shaderID:q0,shaderType:D.type,shaderName:D.name,vertexShader:o,fragmentShader:Z0,defines:D.defines,customVertexShaderID:U0,customFragmentShaderID:M0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:O,batching:t0,batchingColor:t0&&n._colorsTexture!==null,instancing:P0,instancingColor:P0&&n.instanceColor!==null,instancingMorph:P0&&n.morphTexture!==null,supportsVertexTextures:F,outputColorSpace:G0===null?J.outputColorSpace:G0.isXRRenderTarget===!0?G0.texture.colorSpace:"srgb-linear",alphaToCoverage:!!D.alphaToCoverage,map:h0,matcap:T,envMap:Z6,envMapMode:Z6&&e.mapping,envMapCubeUVHeight:m,aoMap:g0,lightMap:e0,bumpMap:L0,normalMap:l0,displacementMap:F&&T0,emissiveMap:S0,normalMapObjectSpace:l0&&D.normalMapType===1,normalMapTangentSpace:l0&&D.normalMapType===0,metalnessMap:$6,roughnessMap:_,anisotropy:z,anisotropyMap:W0,clearcoat:g,clearcoatMap:Y0,clearcoatNormalMap:j0,clearcoatRoughnessMap:J0,dispersion:a,iridescence:r,iridescenceMap:N0,iridescenceThicknessMap:u0,sheen:t,sheenColorMap:w0,sheenRoughnessMap:X0,specularMap:I0,specularColorMap:m0,specularIntensityMap:A,transmission:B0,transmissionMap:w,thicknessMap:i,gradientMap:p,opaque:D.transparent===!1&&D.blending===1&&D.alphaToCoverage===!1,alphaMap:c,alphaTest:$0,alphaHash:O0,combine:D.combine,mapUv:h0&&R(D.map.channel),aoMapUv:g0&&R(D.aoMap.channel),lightMapUv:e0&&R(D.lightMap.channel),bumpMapUv:L0&&R(D.bumpMap.channel),normalMapUv:l0&&R(D.normalMap.channel),displacementMapUv:T0&&R(D.displacementMap.channel),emissiveMapUv:S0&&R(D.emissiveMap.channel),metalnessMapUv:$6&&R(D.metalnessMap.channel),roughnessMapUv:_&&R(D.roughnessMap.channel),anisotropyMapUv:W0&&R(D.anisotropyMap.channel),clearcoatMapUv:Y0&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:j0&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J0&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:N0&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:u0&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:w0&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:X0&&R(D.sheenRoughnessMap.channel),specularMapUv:I0&&R(D.specularMap.channel),specularColorMapUv:m0&&R(D.specularColorMap.channel),specularIntensityMapUv:A&&R(D.specularIntensityMap.channel),transmissionMapUv:w&&R(D.transmissionMap.channel),thicknessMapUv:i&&R(D.thicknessMap.channel),alphaMapUv:c&&R(D.alphaMap.channel),vertexTangents:!!s.attributes.tangent&&(l0||z),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!s.attributes.color&&s.attributes.color.itemSize===4,pointsUvs:n.isPoints===!0&&!!s.attributes.uv&&(h0||c),fog:!!d,useFog:D.fog===!0,fogExp2:!!d&&d.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:U,skinning:n.isSkinnedMesh===!0,morphTargets:s.morphAttributes.position!==void 0,morphNormals:s.morphAttributes.normal!==void 0,morphColors:s.morphAttributes.color!==void 0,morphTargetsCount:C0,morphTextureStride:x0,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numClippingPlanes:X.numPlanes,numClipIntersection:X.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:W6,decodeVideoTexture:h0&&D.map.isVideoTexture===!0&&c0.getTransfer(D.map.colorSpace)==="srgb",premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===2,flipSided:D.side===1,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:d0&&D.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(d0&&D.extensions.multiDraw===!0||t0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return q6.vertexUv1s=q.has(1),q6.vertexUv2s=q.has(2),q6.vertexUv3s=q.has(3),q.clear(),q6}function E(D){let k=[];if(D.shaderID)k.push(D.shaderID);else k.push(D.customVertexShaderID),k.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let j in D.defines)k.push(j),k.push(D.defines[j]);if(D.isRawShaderMaterial===!1)M(k,D),C(k,D),k.push(J.outputColorSpace);return k.push(D.customProgramCacheKey),k.join()}function M(D,k){D.push(k.precision),D.push(k.outputColorSpace),D.push(k.envMapMode),D.push(k.envMapCubeUVHeight),D.push(k.mapUv),D.push(k.alphaMapUv),D.push(k.lightMapUv),D.push(k.aoMapUv),D.push(k.bumpMapUv),D.push(k.normalMapUv),D.push(k.displacementMapUv),D.push(k.emissiveMapUv),D.push(k.metalnessMapUv),D.push(k.roughnessMapUv),D.push(k.anisotropyMapUv),D.push(k.clearcoatMapUv),D.push(k.clearcoatNormalMapUv),D.push(k.clearcoatRoughnessMapUv),D.push(k.iridescenceMapUv),D.push(k.iridescenceThicknessMapUv),D.push(k.sheenColorMapUv),D.push(k.sheenRoughnessMapUv),D.push(k.specularMapUv),D.push(k.specularColorMapUv),D.push(k.specularIntensityMapUv),D.push(k.transmissionMapUv),D.push(k.thicknessMapUv),D.push(k.combine),D.push(k.fogExp2),D.push(k.sizeAttenuation),D.push(k.morphTargetsCount),D.push(k.morphAttributeCount),D.push(k.numDirLights),D.push(k.numPointLights),D.push(k.numSpotLights),D.push(k.numSpotLightMaps),D.push(k.numHemiLights),D.push(k.numRectAreaLights),D.push(k.numDirLightShadows),D.push(k.numPointLightShadows),D.push(k.numSpotLightShadows),D.push(k.numSpotLightShadowsWithMaps),D.push(k.numLightProbes),D.push(k.shadowMapType),D.push(k.toneMapping),D.push(k.numClippingPlanes),D.push(k.numClipIntersection),D.push(k.depthPacking)}function C(D,k){if(H.disableAll(),k.supportsVertexTextures)H.enable(0);if(k.instancing)H.enable(1);if(k.instancingColor)H.enable(2);if(k.instancingMorph)H.enable(3);if(k.matcap)H.enable(4);if(k.envMap)H.enable(5);if(k.normalMapObjectSpace)H.enable(6);if(k.normalMapTangentSpace)H.enable(7);if(k.clearcoat)H.enable(8);if(k.iridescence)H.enable(9);if(k.alphaTest)H.enable(10);if(k.vertexColors)H.enable(11);if(k.vertexAlphas)H.enable(12);if(k.vertexUv1s)H.enable(13);if(k.vertexUv2s)H.enable(14);if(k.vertexUv3s)H.enable(15);if(k.vertexTangents)H.enable(16);if(k.anisotropy)H.enable(17);if(k.alphaHash)H.enable(18);if(k.batching)H.enable(19);if(k.dispersion)H.enable(20);if(k.batchingColor)H.enable(21);if(D.push(H.mask),H.disableAll(),k.fog)H.enable(0);if(k.useFog)H.enable(1);if(k.flatShading)H.enable(2);if(k.logarithmicDepthBuffer)H.enable(3);if(k.skinning)H.enable(4);if(k.morphTargets)H.enable(5);if(k.morphNormals)H.enable(6);if(k.morphColors)H.enable(7);if(k.premultipliedAlpha)H.enable(8);if(k.shadowMapEnabled)H.enable(9);if(k.doubleSided)H.enable(10);if(k.flipSided)H.enable(11);if(k.useDepthPacking)H.enable(12);if(k.dithering)H.enable(13);if(k.transmission)H.enable(14);if(k.sheen)H.enable(15);if(k.opaque)H.enable(16);if(k.pointsUvs)H.enable(17);if(k.decodeVideoTexture)H.enable(18);if(k.alphaToCoverage)H.enable(19);D.push(H.mask)}function I(D){let k=N[D.type],j;if(k){let u=Z7[k];j=QW.clone(u.uniforms)}else j=D.uniforms;return j}function y(D,k){let j;for(let u=0,n=G.length;u<n;u++){let d=G[u];if(d.cacheKey===k){j=d,++j.usedTimes;break}}if(j===void 0)j=new q4(J,k,D,Y),G.push(j);return j}function L(D){if(--D.usedTimes===0){let k=G.indexOf(D);G[k]=G[G.length-1],G.pop(),D.destroy()}}function S(D){K.remove(D)}function b(){K.dispose()}return{getParameters:V,getProgramCacheKey:E,getUniforms:I,acquireProgram:y,releaseProgram:L,releaseShaderCache:S,programs:G,dispose:b}}function F4(){let J=new WeakMap;function $(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Q(Y){J.delete(Y)}function Z(Y,X,H){J.get(Y)[X]=H}function W(){J=new WeakMap}return{get:$,remove:Q,update:Z,dispose:W}}function V4(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.material.id!==$.material.id)return J.material.id-$.material.id;else if(J.z!==$.z)return J.z-$.z;else return J.id-$.id}function N$(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.z!==$.z)return $.z-J.z;else return J.id-$.id}function R$(){let J=[],$=0,Q=[],Z=[],W=[];function Y(){$=0,Q.length=0,Z.length=0,W.length=0}function X(U,F,O,N,R,V){let E=J[$];if(E===void 0)E={id:U.id,object:U,geometry:F,material:O,groupOrder:N,renderOrder:U.renderOrder,z:R,group:V},J[$]=E;else E.id=U.id,E.object=U,E.geometry=F,E.material=O,E.groupOrder=N,E.renderOrder=U.renderOrder,E.z=R,E.group=V;return $++,E}function H(U,F,O,N,R,V){let E=X(U,F,O,N,R,V);if(O.transmission>0)Z.push(E);else if(O.transparent===!0)W.push(E);else Q.push(E)}function K(U,F,O,N,R,V){let E=X(U,F,O,N,R,V);if(O.transmission>0)Z.unshift(E);else if(O.transparent===!0)W.unshift(E);else Q.unshift(E)}function q(U,F){if(Q.length>1)Q.sort(U||V4);if(Z.length>1)Z.sort(F||N$);if(W.length>1)W.sort(F||N$)}function G(){for(let U=$,F=J.length;U<F;U++){let O=J[U];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:Q,transmissive:Z,transparent:W,init:Y,push:H,unshift:K,finish:G,sort:q}}function E4(){let J=new WeakMap;function $(Z,W){let Y=J.get(Z),X;if(Y===void 0)X=new R$,J.set(Z,[X]);else if(W>=Y.length)X=new R$,Y.push(X);else X=Y[W];return X}function Q(){J=new WeakMap}return{get:$,dispose:Q}}function O4(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"DirectionalLight":Q={direction:new P,color:new z0};break;case"SpotLight":Q={position:new P,direction:new P,color:new z0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new P,color:new z0,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new P,skyColor:new z0,groundColor:new z0};break;case"RectAreaLight":Q={color:new z0,position:new P,halfWidth:new P,halfHeight:new P};break}return J[$.id]=Q,Q}}}function N4(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"DirectionalLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k0};break;case"SpotLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k0};break;case"PointLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[$.id]=Q,Q}}}var R4=0;function z4(J,$){return($.castShadow?2:0)-(J.castShadow?2:0)+($.map?1:0)-(J.map?1:0)}function B4(J){let $=new O4,Q=N4(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let q=0;q<9;q++)Z.probe.push(new P);let W=new P,Y=new y0,X=new y0;function H(q){let G=0,U=0,F=0;for(let D=0;D<9;D++)Z.probe[D].set(0,0,0);let O=0,N=0,R=0,V=0,E=0,M=0,C=0,I=0,y=0,L=0,S=0;q.sort(z4);for(let D=0,k=q.length;D<k;D++){let j=q[D],u=j.color,n=j.intensity,d=j.distance,s=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)G+=u.r*n,U+=u.g*n,F+=u.b*n;else if(j.isLightProbe){for(let l=0;l<9;l++)Z.probe[l].addScaledVector(j.sh.coefficients[l],n);S++}else if(j.isDirectionalLight){let l=$.get(j);if(l.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let e=j.shadow,m=Q.get(j);m.shadowIntensity=e.intensity,m.shadowBias=e.bias,m.shadowNormalBias=e.normalBias,m.shadowRadius=e.radius,m.shadowMapSize=e.mapSize,Z.directionalShadow[O]=m,Z.directionalShadowMap[O]=s,Z.directionalShadowMatrix[O]=j.shadow.matrix,M++}Z.directional[O]=l,O++}else if(j.isSpotLight){let l=$.get(j);l.position.setFromMatrixPosition(j.matrixWorld),l.color.copy(u).multiplyScalar(n),l.distance=d,l.coneCos=Math.cos(j.angle),l.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),l.decay=j.decay,Z.spot[R]=l;let e=j.shadow;if(j.map){if(Z.spotLightMap[y]=j.map,y++,e.updateMatrices(j),j.castShadow)L++}if(Z.spotLightMatrix[R]=e.matrix,j.castShadow){let m=Q.get(j);m.shadowIntensity=e.intensity,m.shadowBias=e.bias,m.shadowNormalBias=e.normalBias,m.shadowRadius=e.radius,m.shadowMapSize=e.mapSize,Z.spotShadow[R]=m,Z.spotShadowMap[R]=s,I++}R++}else if(j.isRectAreaLight){let l=$.get(j);l.color.copy(u).multiplyScalar(n),l.halfWidth.set(j.width*0.5,0,0),l.halfHeight.set(0,j.height*0.5,0),Z.rectArea[V]=l,V++}else if(j.isPointLight){let l=$.get(j);if(l.color.copy(j.color).multiplyScalar(j.intensity),l.distance=j.distance,l.decay=j.decay,j.castShadow){let e=j.shadow,m=Q.get(j);m.shadowIntensity=e.intensity,m.shadowBias=e.bias,m.shadowNormalBias=e.normalBias,m.shadowRadius=e.radius,m.shadowMapSize=e.mapSize,m.shadowCameraNear=e.camera.near,m.shadowCameraFar=e.camera.far,Z.pointShadow[N]=m,Z.pointShadowMap[N]=s,Z.pointShadowMatrix[N]=j.shadow.matrix,C++}Z.point[N]=l,N++}else if(j.isHemisphereLight){let l=$.get(j);l.skyColor.copy(j.color).multiplyScalar(n),l.groundColor.copy(j.groundColor).multiplyScalar(n),Z.hemi[E]=l,E++}}if(V>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=H0.LTC_FLOAT_1,Z.rectAreaLTC2=H0.LTC_FLOAT_2;else Z.rectAreaLTC1=H0.LTC_HALF_1,Z.rectAreaLTC2=H0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=U,Z.ambient[2]=F;let b=Z.hash;if(b.directionalLength!==O||b.pointLength!==N||b.spotLength!==R||b.rectAreaLength!==V||b.hemiLength!==E||b.numDirectionalShadows!==M||b.numPointShadows!==C||b.numSpotShadows!==I||b.numSpotMaps!==y||b.numLightProbes!==S)Z.directional.length=O,Z.spot.length=R,Z.rectArea.length=V,Z.point.length=N,Z.hemi.length=E,Z.directionalShadow.length=M,Z.directionalShadowMap.length=M,Z.pointShadow.length=C,Z.pointShadowMap.length=C,Z.spotShadow.length=I,Z.spotShadowMap.length=I,Z.directionalShadowMatrix.length=M,Z.pointShadowMatrix.length=C,Z.spotLightMatrix.length=I+y-L,Z.spotLightMap.length=y,Z.numSpotLightShadowsWithMaps=L,Z.numLightProbes=S,b.directionalLength=O,b.pointLength=N,b.spotLength=R,b.rectAreaLength=V,b.hemiLength=E,b.numDirectionalShadows=M,b.numPointShadows=C,b.numSpotShadows=I,b.numSpotMaps=y,b.numLightProbes=S,Z.version=R4++}function K(q,G){let U=0,F=0,O=0,N=0,R=0,V=G.matrixWorldInverse;for(let E=0,M=q.length;E<M;E++){let C=q[E];if(C.isDirectionalLight){let I=Z.directional[U];I.direction.setFromMatrixPosition(C.matrixWorld),W.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(V),U++}else if(C.isSpotLight){let I=Z.spot[O];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(V),I.direction.setFromMatrixPosition(C.matrixWorld),W.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(V),O++}else if(C.isRectAreaLight){let I=Z.rectArea[N];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(V),X.identity(),Y.copy(C.matrixWorld),Y.premultiply(V),X.extractRotation(Y),I.halfWidth.set(C.width*0.5,0,0),I.halfHeight.set(0,C.height*0.5,0),I.halfWidth.applyMatrix4(X),I.halfHeight.applyMatrix4(X),N++}else if(C.isPointLight){let I=Z.point[F];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(V),F++}else if(C.isHemisphereLight){let I=Z.hemi[R];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(V),R++}}}return{setup:H,setupView:K,state:Z}}function z$(J){let $=new B4(J),Q=[],Z=[];function W(G){q.camera=G,Q.length=0,Z.length=0}function Y(G){Q.push(G)}function X(G){Z.push(G)}function H(){$.setup(Q)}function K(G){$.setupView(Q,G)}let q={lightsArray:Q,shadowsArray:Z,camera:null,lights:$,transmissionRenderTarget:{}};return{init:W,state:q,setupLights:H,setupLightsView:K,pushLight:Y,pushShadow:X}}function M4(J){let $=new WeakMap;function Q(W,Y=0){let X=$.get(W),H;if(X===void 0)H=new z$(J),$.set(W,[H]);else if(Y>=X.length)H=new z$(J),X.push(H);else H=X[Y];return H}function Z(){$=new WeakMap}return{get:Q,dispose:Z}}class VQ extends _6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class EQ extends _6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}var k4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L4=`uniform sampler2D shadow_pass;
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
}`;function D4(J,$,Q){let Z=new g9,W=new k0,Y=new k0,X=new r0,H=new VQ({depthPacking:3201}),K=new EQ,q={},G=Q.maxTextureSize,U={[0]:1,[1]:0,[2]:2},F=new F7({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new k0},radius:{value:4}},vertexShader:k4,fragmentShader:L4}),O=F.clone();O.defines.HORIZONTAL_PASS=1;let N=new K6;N.setAttribute("position",new H6(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let R=new V6(N,F),V=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let E=this.type;this.render=function(L,S,b){if(V.enabled===!1)return;if(V.autoUpdate===!1&&V.needsUpdate===!1)return;if(L.length===0)return;let D=J.getRenderTarget(),k=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),u=J.state;u.setBlending(0),u.buffers.color.setClear(1,1,1,1),u.buffers.depth.setTest(!0),u.setScissorTest(!1);let n=E!==3&&this.type===3,d=E===3&&this.type!==3;for(let s=0,l=L.length;s<l;s++){let e=L[s],m=e.shadow;if(m===void 0){console.warn("THREE.WebGLShadowMap:",e,"has no shadow.");continue}if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;W.copy(m.mapSize);let q0=m.getFrameExtents();if(W.multiply(q0),Y.copy(m.mapSize),W.x>G||W.y>G){if(W.x>G)Y.x=Math.floor(G/q0.x),W.x=Y.x*q0.x,m.mapSize.x=Y.x;if(W.y>G)Y.y=Math.floor(G/q0.y),W.y=Y.y*q0.y,m.mapSize.y=Y.y}if(m.map===null||n===!0||d===!0){let C0=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(m.map!==null)m.map.dispose();m.map=new A7(W.x,W.y,C0),m.map.texture.name=e.name+".shadowMap",m.camera.updateProjectionMatrix()}J.setRenderTarget(m.map),J.clear();let F0=m.getViewportCount();for(let C0=0;C0<F0;C0++){let x0=m.getViewport(C0);X.set(Y.x*x0.x,Y.y*x0.y,Y.x*x0.z,Y.y*x0.w),u.viewport(X),m.updateMatrices(e,C0),Z=m.getFrustum(),I(S,b,m.camera,e,this.type)}if(m.isPointLightShadow!==!0&&this.type===3)M(m,b);m.needsUpdate=!1}E=this.type,V.needsUpdate=!1,J.setRenderTarget(D,k,j)};function M(L,S){let b=$.update(R);if(F.defines.VSM_SAMPLES!==L.blurSamples)F.defines.VSM_SAMPLES=L.blurSamples,O.defines.VSM_SAMPLES=L.blurSamples,F.needsUpdate=!0,O.needsUpdate=!0;if(L.mapPass===null)L.mapPass=new A7(W.x,W.y);F.uniforms.shadow_pass.value=L.map.texture,F.uniforms.resolution.value=L.mapSize,F.uniforms.radius.value=L.radius,J.setRenderTarget(L.mapPass),J.clear(),J.renderBufferDirect(S,null,b,F,R,null),O.uniforms.shadow_pass.value=L.mapPass.texture,O.uniforms.resolution.value=L.mapSize,O.uniforms.radius.value=L.radius,J.setRenderTarget(L.map),J.clear(),J.renderBufferDirect(S,null,b,O,R,null)}function C(L,S,b,D){let k=null,j=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)k=j;else if(k=b.isPointLight===!0?K:H,J.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let u=k.uuid,n=S.uuid,d=q[u];if(d===void 0)d={},q[u]=d;let s=d[n];if(s===void 0)s=k.clone(),d[n]=s,S.addEventListener("dispose",y);k=s}if(k.visible=S.visible,k.wireframe=S.wireframe,D===3)k.side=S.shadowSide!==null?S.shadowSide:S.side;else k.side=S.shadowSide!==null?S.shadowSide:U[S.side];if(k.alphaMap=S.alphaMap,k.alphaTest=S.alphaTest,k.map=S.map,k.clipShadows=S.clipShadows,k.clippingPlanes=S.clippingPlanes,k.clipIntersection=S.clipIntersection,k.displacementMap=S.displacementMap,k.displacementScale=S.displacementScale,k.displacementBias=S.displacementBias,k.wireframeLinewidth=S.wireframeLinewidth,k.linewidth=S.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let u=J.properties.get(k);u.light=b}return k}function I(L,S,b,D,k){if(L.visible===!1)return;if(L.layers.test(S.layers)&&(L.isMesh||L.isLine||L.isPoints)){if((L.castShadow||L.receiveShadow&&k===3)&&(!L.frustumCulled||Z.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);let n=$.update(L),d=L.material;if(Array.isArray(d)){let s=n.groups;for(let l=0,e=s.length;l<e;l++){let m=s[l],q0=d[m.materialIndex];if(q0&&q0.visible){let F0=C(L,q0,D,k);L.onBeforeShadow(J,L,S,b,n,F0,m),J.renderBufferDirect(b,null,n,F0,L,m),L.onAfterShadow(J,L,S,b,n,F0,m)}}}else if(d.visible){let s=C(L,d,D,k);L.onBeforeShadow(J,L,S,b,n,s,null),J.renderBufferDirect(b,null,n,s,L,null),L.onAfterShadow(J,L,S,b,n,s,null)}}}let u=L.children;for(let n=0,d=u.length;n<d;n++)I(u[n],S,b,D,k)}function y(L){L.target.removeEventListener("dispose",y);for(let b in q){let D=q[b],k=L.target.uuid;if(k in D)D[k].dispose(),delete D[k]}}}function C4(J){function $(){let w=!1,i=new r0,p=null,c=new r0(0,0,0,0);return{setMask:function($0){if(p!==$0&&!w)J.colorMask($0,$0,$0,$0),p=$0},setLocked:function($0){w=$0},setClear:function($0,O0,d0,W6,q6){if(q6===!0)$0*=W6,O0*=W6,d0*=W6;if(i.set($0,O0,d0,W6),c.equals(i)===!1)J.clearColor($0,O0,d0,W6),c.copy(i)},reset:function(){w=!1,p=null,c.set(-1,0,0,0)}}}function Q(){let w=!1,i=null,p=null,c=null;return{setTest:function($0){if($0)M0(J.DEPTH_TEST);else G0(J.DEPTH_TEST)},setMask:function($0){if(i!==$0&&!w)J.depthMask($0),i=$0},setFunc:function($0){if(p!==$0){switch($0){case 0:J.depthFunc(J.NEVER);break;case 1:J.depthFunc(J.ALWAYS);break;case 2:J.depthFunc(J.LESS);break;case 3:J.depthFunc(J.LEQUAL);break;case 4:J.depthFunc(J.EQUAL);break;case 5:J.depthFunc(J.GEQUAL);break;case 6:J.depthFunc(J.GREATER);break;case 7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}p=$0}},setLocked:function($0){w=$0},setClear:function($0){if(c!==$0)J.clearDepth($0),c=$0},reset:function(){w=!1,i=null,p=null,c=null}}}function Z(){let w=!1,i=null,p=null,c=null,$0=null,O0=null,d0=null,W6=null,q6=null;return{setTest:function(b0){if(!w)if(b0)M0(J.STENCIL_TEST);else G0(J.STENCIL_TEST)},setMask:function(b0){if(i!==b0&&!w)J.stencilMask(b0),i=b0},setFunc:function(b0,G6,L6){if(p!==b0||c!==G6||$0!==L6)J.stencilFunc(b0,G6,L6),p=b0,c=G6,$0=L6},setOp:function(b0,G6,L6){if(O0!==b0||d0!==G6||W6!==L6)J.stencilOp(b0,G6,L6),O0=b0,d0=G6,W6=L6},setLocked:function(b0){w=b0},setClear:function(b0){if(q6!==b0)J.clearStencil(b0),q6=b0},reset:function(){w=!1,i=null,p=null,c=null,$0=null,O0=null,d0=null,W6=null,q6=null}}}let W=new $,Y=new Q,X=new Z,H=new WeakMap,K=new WeakMap,q={},G={},U=new WeakMap,F=[],O=null,N=!1,R=null,V=null,E=null,M=null,C=null,I=null,y=null,L=new z0(0,0,0),S=0,b=!1,D=null,k=null,j=null,u=null,n=null,d=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),s=!1,l=0,e=J.getParameter(J.VERSION);if(e.indexOf("WebGL")!==-1)l=parseFloat(/^WebGL (\d)/.exec(e)[1]),s=l>=1;else if(e.indexOf("OpenGL ES")!==-1)l=parseFloat(/^OpenGL ES (\d)/.exec(e)[1]),s=l>=2;let m=null,q0={},F0=J.getParameter(J.SCISSOR_BOX),C0=J.getParameter(J.VIEWPORT),x0=new r0().fromArray(F0),o=new r0().fromArray(C0);function Z0(w,i,p,c){let $0=new Uint8Array(4),O0=J.createTexture();J.bindTexture(w,O0),J.texParameteri(w,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(w,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let d0=0;d0<p;d0++)if(w===J.TEXTURE_3D||w===J.TEXTURE_2D_ARRAY)J.texImage3D(i,0,J.RGBA,1,1,c,0,J.RGBA,J.UNSIGNED_BYTE,$0);else J.texImage2D(i+d0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,$0);return O0}let U0={};U0[J.TEXTURE_2D]=Z0(J.TEXTURE_2D,J.TEXTURE_2D,1),U0[J.TEXTURE_CUBE_MAP]=Z0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),U0[J.TEXTURE_2D_ARRAY]=Z0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),U0[J.TEXTURE_3D]=Z0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),M0(J.DEPTH_TEST),Y.setFunc(3),L0(!1),l0(1),M0(J.CULL_FACE),g0(0);function M0(w){if(q[w]!==!0)J.enable(w),q[w]=!0}function G0(w){if(q[w]!==!1)J.disable(w),q[w]=!1}function P0(w,i){if(G[w]!==i){if(J.bindFramebuffer(w,i),G[w]=i,w===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=i;if(w===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=i;return!0}return!1}function t0(w,i){let p=F,c=!1;if(w){if(p=U.get(i),p===void 0)p=[],U.set(i,p);let $0=w.textures;if(p.length!==$0.length||p[0]!==J.COLOR_ATTACHMENT0){for(let O0=0,d0=$0.length;O0<d0;O0++)p[O0]=J.COLOR_ATTACHMENT0+O0;p.length=$0.length,c=!0}}else if(p[0]!==J.BACK)p[0]=J.BACK,c=!0;if(c)J.drawBuffers(p)}function h0(w){if(O!==w)return J.useProgram(w),O=w,!0;return!1}let T={[100]:J.FUNC_ADD,[101]:J.FUNC_SUBTRACT,[102]:J.FUNC_REVERSE_SUBTRACT};T[103]=J.MIN,T[104]=J.MAX;let Z6={[200]:J.ZERO,[201]:J.ONE,[202]:J.SRC_COLOR,[204]:J.SRC_ALPHA,[210]:J.SRC_ALPHA_SATURATE,[208]:J.DST_COLOR,[206]:J.DST_ALPHA,[203]:J.ONE_MINUS_SRC_COLOR,[205]:J.ONE_MINUS_SRC_ALPHA,[209]:J.ONE_MINUS_DST_COLOR,[207]:J.ONE_MINUS_DST_ALPHA,[211]:J.CONSTANT_COLOR,[212]:J.ONE_MINUS_CONSTANT_COLOR,[213]:J.CONSTANT_ALPHA,[214]:J.ONE_MINUS_CONSTANT_ALPHA};function g0(w,i,p,c,$0,O0,d0,W6,q6,b0){if(w===0){if(N===!0)G0(J.BLEND),N=!1;return}if(N===!1)M0(J.BLEND),N=!0;if(w!==5){if(w!==R||b0!==b){if(V!==100||C!==100)J.blendEquation(J.FUNC_ADD),V=100,C=100;if(b0)switch(w){case 1:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.ONE,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFuncSeparate(J.ZERO,J.SRC_COLOR,J.ZERO,J.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case 1:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.SRC_ALPHA,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFunc(J.ZERO,J.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}E=null,M=null,I=null,y=null,L.set(0,0,0),S=0,R=w,b=b0}return}if($0=$0||i,O0=O0||p,d0=d0||c,i!==V||$0!==C)J.blendEquationSeparate(T[i],T[$0]),V=i,C=$0;if(p!==E||c!==M||O0!==I||d0!==y)J.blendFuncSeparate(Z6[p],Z6[c],Z6[O0],Z6[d0]),E=p,M=c,I=O0,y=d0;if(W6.equals(L)===!1||q6!==S)J.blendColor(W6.r,W6.g,W6.b,q6),L.copy(W6),S=q6;R=w,b=!1}function e0(w,i){w.side===2?G0(J.CULL_FACE):M0(J.CULL_FACE);let p=w.side===1;if(i)p=!p;L0(p),w.blending===1&&w.transparent===!1?g0(0):g0(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),Y.setFunc(w.depthFunc),Y.setTest(w.depthTest),Y.setMask(w.depthWrite),W.setMask(w.colorWrite);let c=w.stencilWrite;if(X.setTest(c),c)X.setMask(w.stencilWriteMask),X.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),X.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass);S0(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?M0(J.SAMPLE_ALPHA_TO_COVERAGE):G0(J.SAMPLE_ALPHA_TO_COVERAGE)}function L0(w){if(D!==w){if(w)J.frontFace(J.CW);else J.frontFace(J.CCW);D=w}}function l0(w){if(w!==0){if(M0(J.CULL_FACE),w!==k)if(w===1)J.cullFace(J.BACK);else if(w===2)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else G0(J.CULL_FACE);k=w}function T0(w){if(w!==j){if(s)J.lineWidth(w);j=w}}function S0(w,i,p){if(w){if(M0(J.POLYGON_OFFSET_FILL),u!==i||n!==p)J.polygonOffset(i,p),u=i,n=p}else G0(J.POLYGON_OFFSET_FILL)}function $6(w){if(w)M0(J.SCISSOR_TEST);else G0(J.SCISSOR_TEST)}function _(w){if(w===void 0)w=J.TEXTURE0+d-1;if(m!==w)J.activeTexture(w),m=w}function z(w,i,p){if(p===void 0)if(m===null)p=J.TEXTURE0+d-1;else p=m;let c=q0[p];if(c===void 0)c={type:void 0,texture:void 0},q0[p]=c;if(c.type!==w||c.texture!==i){if(m!==p)J.activeTexture(p),m=p;J.bindTexture(w,i||U0[w]),c.type=w,c.texture=i}}function g(){let w=q0[m];if(w!==void 0&&w.type!==void 0)J.bindTexture(w.type,null),w.type=void 0,w.texture=void 0}function a(){try{J.compressedTexImage2D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function r(){try{J.compressedTexImage3D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function t(){try{J.texSubImage2D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function B0(){try{J.texSubImage3D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function W0(){try{J.compressedTexSubImage2D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Y0(){try{J.compressedTexSubImage3D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function j0(){try{J.texStorage2D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function J0(){try{J.texStorage3D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function N0(){try{J.texImage2D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function u0(){try{J.texImage3D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function w0(w){if(x0.equals(w)===!1)J.scissor(w.x,w.y,w.z,w.w),x0.copy(w)}function X0(w){if(o.equals(w)===!1)J.viewport(w.x,w.y,w.z,w.w),o.copy(w)}function I0(w,i){let p=K.get(i);if(p===void 0)p=new WeakMap,K.set(i,p);let c=p.get(w);if(c===void 0)c=J.getUniformBlockIndex(i,w.name),p.set(w,c)}function m0(w,i){let c=K.get(i).get(w);if(H.get(i)!==c)J.uniformBlockBinding(i,c,w.__bindingPointIndex),H.set(i,c)}function A(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),q={},m=null,q0={},G={},U=new WeakMap,F=[],O=null,N=!1,R=null,V=null,E=null,M=null,C=null,I=null,y=null,L=new z0(0,0,0),S=0,b=!1,D=null,k=null,j=null,u=null,n=null,x0.set(0,0,J.canvas.width,J.canvas.height),o.set(0,0,J.canvas.width,J.canvas.height),W.reset(),Y.reset(),X.reset()}return{buffers:{color:W,depth:Y,stencil:X},enable:M0,disable:G0,bindFramebuffer:P0,drawBuffers:t0,useProgram:h0,setBlending:g0,setMaterial:e0,setFlipSided:L0,setCullFace:l0,setLineWidth:T0,setPolygonOffset:S0,setScissorTest:$6,activeTexture:_,bindTexture:z,unbindTexture:g,compressedTexImage2D:a,compressedTexImage3D:r,texImage2D:N0,texImage3D:u0,updateUBOMapping:I0,uniformBlockBinding:m0,texStorage2D:j0,texStorage3D:J0,texSubImage2D:t,texSubImage3D:B0,compressedTexSubImage2D:W0,compressedTexSubImage3D:Y0,scissor:w0,viewport:X0,reset:A}}function B$(J,$,Q,Z){let W=w4(Z);switch(Q){case 1021:return J*$;case 1024:return J*$;case 1025:return J*$*2;case 1028:return J*$/W.components*W.byteLength;case 1029:return J*$/W.components*W.byteLength;case 1030:return J*$*2/W.components*W.byteLength;case 1031:return J*$*2/W.components*W.byteLength;case 1022:return J*$*3/W.components*W.byteLength;case 1023:return J*$*4/W.components*W.byteLength;case 1033:return J*$*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max($,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max($,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor(($+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor(($+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor(($+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor(($+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor(($+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor(($+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor(($+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor(($+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor(($+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor(($+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor(($+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor(($+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor(($+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil($/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil($/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil($/4)*16}throw Error(`Unable to determine texture byte length for ${Q} format.`)}function w4(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}function _4(J,$,Q,Z,W,Y,X){let H=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),q=new k0,G=new WeakMap,U,F=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(_){}function N(_,z){return O?new OffscreenCanvas(_,z):d8("canvas")}function R(_,z,g){let a=1,r=$6(_);if(r.width>g||r.height>g)a=g/Math.max(r.width,r.height);if(a<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let t=Math.floor(a*r.width),B0=Math.floor(a*r.height);if(U===void 0)U=N(t,B0);let W0=z?N(t,B0):U;return W0.width=t,W0.height=B0,W0.getContext("2d").drawImage(_,0,0,t,B0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+t+"x"+B0+")."),W0}else{if("data"in _)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return _}return _}function V(_){return _.generateMipmaps&&_.minFilter!==1003&&_.minFilter!==1006}function E(_){J.generateMipmap(_)}function M(_,z,g,a,r=!1){if(_!==null){if(J[_]!==void 0)return J[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let t=z;if(z===J.RED){if(g===J.FLOAT)t=J.R32F;if(g===J.HALF_FLOAT)t=J.R16F;if(g===J.UNSIGNED_BYTE)t=J.R8}if(z===J.RED_INTEGER){if(g===J.UNSIGNED_BYTE)t=J.R8UI;if(g===J.UNSIGNED_SHORT)t=J.R16UI;if(g===J.UNSIGNED_INT)t=J.R32UI;if(g===J.BYTE)t=J.R8I;if(g===J.SHORT)t=J.R16I;if(g===J.INT)t=J.R32I}if(z===J.RG){if(g===J.FLOAT)t=J.RG32F;if(g===J.HALF_FLOAT)t=J.RG16F;if(g===J.UNSIGNED_BYTE)t=J.RG8}if(z===J.RG_INTEGER){if(g===J.UNSIGNED_BYTE)t=J.RG8UI;if(g===J.UNSIGNED_SHORT)t=J.RG16UI;if(g===J.UNSIGNED_INT)t=J.RG32UI;if(g===J.BYTE)t=J.RG8I;if(g===J.SHORT)t=J.RG16I;if(g===J.INT)t=J.RG32I}if(z===J.RGB){if(g===J.UNSIGNED_INT_5_9_9_9_REV)t=J.RGB9_E5}if(z===J.RGBA){let B0=r?"linear":c0.getTransfer(a);if(g===J.FLOAT)t=J.RGBA32F;if(g===J.HALF_FLOAT)t=J.RGBA16F;if(g===J.UNSIGNED_BYTE)t=B0==="srgb"?J.SRGB8_ALPHA8:J.RGBA8;if(g===J.UNSIGNED_SHORT_4_4_4_4)t=J.RGBA4;if(g===J.UNSIGNED_SHORT_5_5_5_1)t=J.RGB5_A1}if(t===J.R16F||t===J.R32F||t===J.RG16F||t===J.RG32F||t===J.RGBA16F||t===J.RGBA32F)$.get("EXT_color_buffer_float");return t}function C(_,z){let g;if(_){if(z===null||z===1014||z===1020)g=J.DEPTH24_STENCIL8;else if(z===1015)g=J.DEPTH32F_STENCIL8;else if(z===1012)g=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(z===null||z===1014||z===1020)g=J.DEPTH_COMPONENT24;else if(z===1015)g=J.DEPTH_COMPONENT32F;else if(z===1012)g=J.DEPTH_COMPONENT16;return g}function I(_,z){if(V(_)===!0||_.isFramebufferTexture&&_.minFilter!==1003&&_.minFilter!==1006)return Math.log2(Math.max(z.width,z.height))+1;else if(_.mipmaps!==void 0&&_.mipmaps.length>0)return _.mipmaps.length;else if(_.isCompressedTexture&&Array.isArray(_.image))return z.mipmaps.length;else return 1}function y(_){let z=_.target;if(z.removeEventListener("dispose",y),S(z),z.isVideoTexture)G.delete(z)}function L(_){let z=_.target;z.removeEventListener("dispose",L),D(z)}function S(_){let z=Z.get(_);if(z.__webglInit===void 0)return;let g=_.source,a=F.get(g);if(a){let r=a[z.__cacheKey];if(r.usedTimes--,r.usedTimes===0)b(_);if(Object.keys(a).length===0)F.delete(g)}Z.remove(_)}function b(_){let z=Z.get(_);J.deleteTexture(z.__webglTexture);let g=_.source,a=F.get(g);delete a[z.__cacheKey],X.memory.textures--}function D(_){let z=Z.get(_);if(_.depthTexture)_.depthTexture.dispose();if(_.isWebGLCubeRenderTarget)for(let a=0;a<6;a++){if(Array.isArray(z.__webglFramebuffer[a]))for(let r=0;r<z.__webglFramebuffer[a].length;r++)J.deleteFramebuffer(z.__webglFramebuffer[a][r]);else J.deleteFramebuffer(z.__webglFramebuffer[a]);if(z.__webglDepthbuffer)J.deleteRenderbuffer(z.__webglDepthbuffer[a])}else{if(Array.isArray(z.__webglFramebuffer))for(let a=0;a<z.__webglFramebuffer.length;a++)J.deleteFramebuffer(z.__webglFramebuffer[a]);else J.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer)J.deleteRenderbuffer(z.__webglDepthbuffer);if(z.__webglMultisampledFramebuffer)J.deleteFramebuffer(z.__webglMultisampledFramebuffer);if(z.__webglColorRenderbuffer){for(let a=0;a<z.__webglColorRenderbuffer.length;a++)if(z.__webglColorRenderbuffer[a])J.deleteRenderbuffer(z.__webglColorRenderbuffer[a])}if(z.__webglDepthRenderbuffer)J.deleteRenderbuffer(z.__webglDepthRenderbuffer)}let g=_.textures;for(let a=0,r=g.length;a<r;a++){let t=Z.get(g[a]);if(t.__webglTexture)J.deleteTexture(t.__webglTexture),X.memory.textures--;Z.remove(g[a])}Z.remove(_)}let k=0;function j(){k=0}function u(){let _=k;if(_>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+W.maxTextures);return k+=1,_}function n(_){let z=[];return z.push(_.wrapS),z.push(_.wrapT),z.push(_.wrapR||0),z.push(_.magFilter),z.push(_.minFilter),z.push(_.anisotropy),z.push(_.internalFormat),z.push(_.format),z.push(_.type),z.push(_.generateMipmaps),z.push(_.premultiplyAlpha),z.push(_.flipY),z.push(_.unpackAlignment),z.push(_.colorSpace),z.join()}function d(_,z){let g=Z.get(_);if(_.isVideoTexture)T0(_);if(_.isRenderTargetTexture===!1&&_.version>0&&g.__version!==_.version){let a=_.image;if(a===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(a.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{o(g,_,z);return}}Q.bindTexture(J.TEXTURE_2D,g.__webglTexture,J.TEXTURE0+z)}function s(_,z){let g=Z.get(_);if(_.version>0&&g.__version!==_.version){o(g,_,z);return}Q.bindTexture(J.TEXTURE_2D_ARRAY,g.__webglTexture,J.TEXTURE0+z)}function l(_,z){let g=Z.get(_);if(_.version>0&&g.__version!==_.version){o(g,_,z);return}Q.bindTexture(J.TEXTURE_3D,g.__webglTexture,J.TEXTURE0+z)}function e(_,z){let g=Z.get(_);if(_.version>0&&g.__version!==_.version){Z0(g,_,z);return}Q.bindTexture(J.TEXTURE_CUBE_MAP,g.__webglTexture,J.TEXTURE0+z)}let m={[1000]:J.REPEAT,[1001]:J.CLAMP_TO_EDGE,[1002]:J.MIRRORED_REPEAT},q0={[1003]:J.NEAREST,[1004]:J.NEAREST_MIPMAP_NEAREST,[1005]:J.NEAREST_MIPMAP_LINEAR,[1006]:J.LINEAR,[1007]:J.LINEAR_MIPMAP_NEAREST,[1008]:J.LINEAR_MIPMAP_LINEAR},F0={[512]:J.NEVER,[519]:J.ALWAYS,[513]:J.LESS,[515]:J.LEQUAL,[514]:J.EQUAL,[518]:J.GEQUAL,[516]:J.GREATER,[517]:J.NOTEQUAL};function C0(_,z){if(z.type===1015&&$.has("OES_texture_float_linear")===!1&&(z.magFilter===1006||z.magFilter===1007||z.magFilter===1005||z.magFilter===1008||z.minFilter===1006||z.minFilter===1007||z.minFilter===1005||z.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(_,J.TEXTURE_WRAP_S,m[z.wrapS]),J.texParameteri(_,J.TEXTURE_WRAP_T,m[z.wrapT]),_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texParameteri(_,J.TEXTURE_WRAP_R,m[z.wrapR]);if(J.texParameteri(_,J.TEXTURE_MAG_FILTER,q0[z.magFilter]),J.texParameteri(_,J.TEXTURE_MIN_FILTER,q0[z.minFilter]),z.compareFunction)J.texParameteri(_,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(_,J.TEXTURE_COMPARE_FUNC,F0[z.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){if(z.magFilter===1003)return;if(z.minFilter!==1005&&z.minFilter!==1008)return;if(z.type===1015&&$.has("OES_texture_float_linear")===!1)return;if(z.anisotropy>1||Z.get(z).__currentAnisotropy){let g=$.get("EXT_texture_filter_anisotropic");J.texParameterf(_,g.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,W.getMaxAnisotropy())),Z.get(z).__currentAnisotropy=z.anisotropy}}}function x0(_,z){let g=!1;if(_.__webglInit===void 0)_.__webglInit=!0,z.addEventListener("dispose",y);let a=z.source,r=F.get(a);if(r===void 0)r={},F.set(a,r);let t=n(z);if(t!==_.__cacheKey){if(r[t]===void 0)r[t]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,g=!0;r[t].usedTimes++;let B0=r[_.__cacheKey];if(B0!==void 0){if(r[_.__cacheKey].usedTimes--,B0.usedTimes===0)b(z)}_.__cacheKey=t,_.__webglTexture=r[t].texture}return g}function o(_,z,g){let a=J.TEXTURE_2D;if(z.isDataArrayTexture||z.isCompressedArrayTexture)a=J.TEXTURE_2D_ARRAY;if(z.isData3DTexture)a=J.TEXTURE_3D;let r=x0(_,z),t=z.source;Q.bindTexture(a,_.__webglTexture,J.TEXTURE0+g);let B0=Z.get(t);if(t.version!==B0.__version||r===!0){Q.activeTexture(J.TEXTURE0+g);let W0=c0.getPrimaries(c0.workingColorSpace),Y0=z.colorSpace===""?null:c0.getPrimaries(z.colorSpace),j0=z.colorSpace===""||W0===Y0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,z.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,z.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,j0);let J0=R(z.image,!1,W.maxTextureSize);J0=S0(z,J0);let N0=Y.convert(z.format,z.colorSpace),u0=Y.convert(z.type),w0=M(z.internalFormat,N0,u0,z.colorSpace,z.isVideoTexture);C0(a,z);let X0,I0=z.mipmaps,m0=z.isVideoTexture!==!0,A=B0.__version===void 0||r===!0,w=t.dataReady,i=I(z,J0);if(z.isDepthTexture){if(w0=C(z.format===1027,z.type),A)if(m0)Q.texStorage2D(J.TEXTURE_2D,1,w0,J0.width,J0.height);else Q.texImage2D(J.TEXTURE_2D,0,w0,J0.width,J0.height,0,N0,u0,null)}else if(z.isDataTexture)if(I0.length>0){if(m0&&A)Q.texStorage2D(J.TEXTURE_2D,i,w0,I0[0].width,I0[0].height);for(let p=0,c=I0.length;p<c;p++)if(X0=I0[p],m0){if(w)Q.texSubImage2D(J.TEXTURE_2D,p,0,0,X0.width,X0.height,N0,u0,X0.data)}else Q.texImage2D(J.TEXTURE_2D,p,w0,X0.width,X0.height,0,N0,u0,X0.data);z.generateMipmaps=!1}else if(m0){if(A)Q.texStorage2D(J.TEXTURE_2D,i,w0,J0.width,J0.height);if(w)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,J0.width,J0.height,N0,u0,J0.data)}else Q.texImage2D(J.TEXTURE_2D,0,w0,J0.width,J0.height,0,N0,u0,J0.data);else if(z.isCompressedTexture)if(z.isCompressedArrayTexture){if(m0&&A)Q.texStorage3D(J.TEXTURE_2D_ARRAY,i,w0,I0[0].width,I0[0].height,J0.depth);for(let p=0,c=I0.length;p<c;p++)if(X0=I0[p],z.format!==1023)if(N0!==null)if(m0){if(w)if(z.layerUpdates.size>0){let $0=B$(X0.width,X0.height,z.format,z.type);for(let O0 of z.layerUpdates){let d0=X0.data.subarray(O0*$0/X0.data.BYTES_PER_ELEMENT,(O0+1)*$0/X0.data.BYTES_PER_ELEMENT);Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,p,0,0,O0,X0.width,X0.height,1,N0,d0,0,0)}z.clearLayerUpdates()}else Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,p,0,0,0,X0.width,X0.height,J0.depth,N0,X0.data,0,0)}else Q.compressedTexImage3D(J.TEXTURE_2D_ARRAY,p,w0,X0.width,X0.height,J0.depth,0,X0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(w)Q.texSubImage3D(J.TEXTURE_2D_ARRAY,p,0,0,0,X0.width,X0.height,J0.depth,N0,u0,X0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,p,w0,X0.width,X0.height,J0.depth,0,N0,u0,X0.data)}else{if(m0&&A)Q.texStorage2D(J.TEXTURE_2D,i,w0,I0[0].width,I0[0].height);for(let p=0,c=I0.length;p<c;p++)if(X0=I0[p],z.format!==1023)if(N0!==null)if(m0){if(w)Q.compressedTexSubImage2D(J.TEXTURE_2D,p,0,0,X0.width,X0.height,N0,X0.data)}else Q.compressedTexImage2D(J.TEXTURE_2D,p,w0,X0.width,X0.height,0,X0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(w)Q.texSubImage2D(J.TEXTURE_2D,p,0,0,X0.width,X0.height,N0,u0,X0.data)}else Q.texImage2D(J.TEXTURE_2D,p,w0,X0.width,X0.height,0,N0,u0,X0.data)}else if(z.isDataArrayTexture)if(m0){if(A)Q.texStorage3D(J.TEXTURE_2D_ARRAY,i,w0,J0.width,J0.height,J0.depth);if(w)if(z.layerUpdates.size>0){let p=B$(J0.width,J0.height,z.format,z.type);for(let c of z.layerUpdates){let $0=J0.data.subarray(c*p/J0.data.BYTES_PER_ELEMENT,(c+1)*p/J0.data.BYTES_PER_ELEMENT);Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,c,J0.width,J0.height,1,N0,u0,$0)}z.clearLayerUpdates()}else Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,J0.width,J0.height,J0.depth,N0,u0,J0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,0,w0,J0.width,J0.height,J0.depth,0,N0,u0,J0.data);else if(z.isData3DTexture)if(m0){if(A)Q.texStorage3D(J.TEXTURE_3D,i,w0,J0.width,J0.height,J0.depth);if(w)Q.texSubImage3D(J.TEXTURE_3D,0,0,0,0,J0.width,J0.height,J0.depth,N0,u0,J0.data)}else Q.texImage3D(J.TEXTURE_3D,0,w0,J0.width,J0.height,J0.depth,0,N0,u0,J0.data);else if(z.isFramebufferTexture){if(A)if(m0)Q.texStorage2D(J.TEXTURE_2D,i,w0,J0.width,J0.height);else{let{width:p,height:c}=J0;for(let $0=0;$0<i;$0++)Q.texImage2D(J.TEXTURE_2D,$0,w0,p,c,0,N0,u0,null),p>>=1,c>>=1}}else if(I0.length>0){if(m0&&A){let p=$6(I0[0]);Q.texStorage2D(J.TEXTURE_2D,i,w0,p.width,p.height)}for(let p=0,c=I0.length;p<c;p++)if(X0=I0[p],m0){if(w)Q.texSubImage2D(J.TEXTURE_2D,p,0,0,N0,u0,X0)}else Q.texImage2D(J.TEXTURE_2D,p,w0,N0,u0,X0);z.generateMipmaps=!1}else if(m0){if(A){let p=$6(J0);Q.texStorage2D(J.TEXTURE_2D,i,w0,p.width,p.height)}if(w)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,N0,u0,J0)}else Q.texImage2D(J.TEXTURE_2D,0,w0,N0,u0,J0);if(V(z))E(a);if(B0.__version=t.version,z.onUpdate)z.onUpdate(z)}_.__version=z.version}function Z0(_,z,g){if(z.image.length!==6)return;let a=x0(_,z),r=z.source;Q.bindTexture(J.TEXTURE_CUBE_MAP,_.__webglTexture,J.TEXTURE0+g);let t=Z.get(r);if(r.version!==t.__version||a===!0){Q.activeTexture(J.TEXTURE0+g);let B0=c0.getPrimaries(c0.workingColorSpace),W0=z.colorSpace===""?null:c0.getPrimaries(z.colorSpace),Y0=z.colorSpace===""||B0===W0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,z.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,z.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y0);let j0=z.isCompressedTexture||z.image[0].isCompressedTexture,J0=z.image[0]&&z.image[0].isDataTexture,N0=[];for(let c=0;c<6;c++){if(!j0&&!J0)N0[c]=R(z.image[c],!0,W.maxCubemapSize);else N0[c]=J0?z.image[c].image:z.image[c];N0[c]=S0(z,N0[c])}let u0=N0[0],w0=Y.convert(z.format,z.colorSpace),X0=Y.convert(z.type),I0=M(z.internalFormat,w0,X0,z.colorSpace),m0=z.isVideoTexture!==!0,A=t.__version===void 0||a===!0,w=r.dataReady,i=I(z,u0);C0(J.TEXTURE_CUBE_MAP,z);let p;if(j0){if(m0&&A)Q.texStorage2D(J.TEXTURE_CUBE_MAP,i,I0,u0.width,u0.height);for(let c=0;c<6;c++){p=N0[c].mipmaps;for(let $0=0;$0<p.length;$0++){let O0=p[$0];if(z.format!==1023)if(w0!==null)if(m0){if(w)Q.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,$0,0,0,O0.width,O0.height,w0,O0.data)}else Q.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,$0,I0,O0.width,O0.height,0,O0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(m0){if(w)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,$0,0,0,O0.width,O0.height,w0,X0,O0.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,$0,I0,O0.width,O0.height,0,w0,X0,O0.data)}}}else{if(p=z.mipmaps,m0&&A){if(p.length>0)i++;let c=$6(N0[0]);Q.texStorage2D(J.TEXTURE_CUBE_MAP,i,I0,c.width,c.height)}for(let c=0;c<6;c++)if(J0){if(m0){if(w)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,0,0,N0[c].width,N0[c].height,w0,X0,N0[c].data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,I0,N0[c].width,N0[c].height,0,w0,X0,N0[c].data);for(let $0=0;$0<p.length;$0++){let d0=p[$0].image[c].image;if(m0){if(w)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,$0+1,0,0,d0.width,d0.height,w0,X0,d0.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,$0+1,I0,d0.width,d0.height,0,w0,X0,d0.data)}}else{if(m0){if(w)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,0,0,w0,X0,N0[c])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,I0,w0,X0,N0[c]);for(let $0=0;$0<p.length;$0++){let O0=p[$0];if(m0){if(w)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,$0+1,0,0,w0,X0,O0.image[c])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,$0+1,I0,w0,X0,O0.image[c])}}}if(V(z))E(J.TEXTURE_CUBE_MAP);if(t.__version=r.version,z.onUpdate)z.onUpdate(z)}_.__version=z.version}function U0(_,z,g,a,r,t){let B0=Y.convert(g.format,g.colorSpace),W0=Y.convert(g.type),Y0=M(g.internalFormat,B0,W0,g.colorSpace);if(!Z.get(z).__hasExternalTextures){let J0=Math.max(1,z.width>>t),N0=Math.max(1,z.height>>t);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)Q.texImage3D(r,t,Y0,J0,N0,z.depth,0,B0,W0,null);else Q.texImage2D(r,t,Y0,J0,N0,0,B0,W0,null)}if(Q.bindFramebuffer(J.FRAMEBUFFER,_),l0(z))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,r,Z.get(g).__webglTexture,0,L0(z));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,a,r,Z.get(g).__webglTexture,t);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function M0(_,z,g){if(J.bindRenderbuffer(J.RENDERBUFFER,_),z.depthBuffer){let a=z.depthTexture,r=a&&a.isDepthTexture?a.type:null,t=C(z.stencilBuffer,r),B0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,W0=L0(z);if(l0(z))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,W0,t,z.width,z.height);else if(g)J.renderbufferStorageMultisample(J.RENDERBUFFER,W0,t,z.width,z.height);else J.renderbufferStorage(J.RENDERBUFFER,t,z.width,z.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,B0,J.RENDERBUFFER,_)}else{let a=z.textures;for(let r=0;r<a.length;r++){let t=a[r],B0=Y.convert(t.format,t.colorSpace),W0=Y.convert(t.type),Y0=M(t.internalFormat,B0,W0,t.colorSpace),j0=L0(z);if(g&&l0(z)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,j0,Y0,z.width,z.height);else if(l0(z))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,j0,Y0,z.width,z.height);else J.renderbufferStorage(J.RENDERBUFFER,Y0,z.width,z.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function G0(_,z){if(z&&z.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(Q.bindFramebuffer(J.FRAMEBUFFER,_),!(z.depthTexture&&z.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(!Z.get(z.depthTexture).__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height)z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0;d(z.depthTexture,0);let a=Z.get(z.depthTexture).__webglTexture,r=L0(z);if(z.depthTexture.format===1026)if(l0(z))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,a,0,r);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,a,0);else if(z.depthTexture.format===1027)if(l0(z))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,a,0,r);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,a,0);else throw Error("Unknown depthTexture format")}function P0(_){let z=Z.get(_),g=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!z.__autoAllocateDepthBuffer){if(g)throw Error("target.depthTexture not supported in Cube render targets");G0(z.__webglFramebuffer,_)}else if(g){z.__webglDepthbuffer=[];for(let a=0;a<6;a++)Q.bindFramebuffer(J.FRAMEBUFFER,z.__webglFramebuffer[a]),z.__webglDepthbuffer[a]=J.createRenderbuffer(),M0(z.__webglDepthbuffer[a],_,!1)}else Q.bindFramebuffer(J.FRAMEBUFFER,z.__webglFramebuffer),z.__webglDepthbuffer=J.createRenderbuffer(),M0(z.__webglDepthbuffer,_,!1);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function t0(_,z,g){let a=Z.get(_);if(z!==void 0)U0(a.__webglFramebuffer,_,_.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(g!==void 0)P0(_)}function h0(_){let z=_.texture,g=Z.get(_),a=Z.get(z);_.addEventListener("dispose",L);let r=_.textures,t=_.isWebGLCubeRenderTarget===!0,B0=r.length>1;if(!B0){if(a.__webglTexture===void 0)a.__webglTexture=J.createTexture();a.__version=z.version,X.memory.textures++}if(t){g.__webglFramebuffer=[];for(let W0=0;W0<6;W0++)if(z.mipmaps&&z.mipmaps.length>0){g.__webglFramebuffer[W0]=[];for(let Y0=0;Y0<z.mipmaps.length;Y0++)g.__webglFramebuffer[W0][Y0]=J.createFramebuffer()}else g.__webglFramebuffer[W0]=J.createFramebuffer()}else{if(z.mipmaps&&z.mipmaps.length>0){g.__webglFramebuffer=[];for(let W0=0;W0<z.mipmaps.length;W0++)g.__webglFramebuffer[W0]=J.createFramebuffer()}else g.__webglFramebuffer=J.createFramebuffer();if(B0)for(let W0=0,Y0=r.length;W0<Y0;W0++){let j0=Z.get(r[W0]);if(j0.__webglTexture===void 0)j0.__webglTexture=J.createTexture(),X.memory.textures++}if(_.samples>0&&l0(_)===!1){g.__webglMultisampledFramebuffer=J.createFramebuffer(),g.__webglColorRenderbuffer=[],Q.bindFramebuffer(J.FRAMEBUFFER,g.__webglMultisampledFramebuffer);for(let W0=0;W0<r.length;W0++){let Y0=r[W0];g.__webglColorRenderbuffer[W0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,g.__webglColorRenderbuffer[W0]);let j0=Y.convert(Y0.format,Y0.colorSpace),J0=Y.convert(Y0.type),N0=M(Y0.internalFormat,j0,J0,Y0.colorSpace,_.isXRRenderTarget===!0),u0=L0(_);J.renderbufferStorageMultisample(J.RENDERBUFFER,u0,N0,_.width,_.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+W0,J.RENDERBUFFER,g.__webglColorRenderbuffer[W0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),_.depthBuffer)g.__webglDepthRenderbuffer=J.createRenderbuffer(),M0(g.__webglDepthRenderbuffer,_,!0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}}if(t){Q.bindTexture(J.TEXTURE_CUBE_MAP,a.__webglTexture),C0(J.TEXTURE_CUBE_MAP,z);for(let W0=0;W0<6;W0++)if(z.mipmaps&&z.mipmaps.length>0)for(let Y0=0;Y0<z.mipmaps.length;Y0++)U0(g.__webglFramebuffer[W0][Y0],_,z,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,Y0);else U0(g.__webglFramebuffer[W0],_,z,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,0);if(V(z))E(J.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(B0){for(let W0=0,Y0=r.length;W0<Y0;W0++){let j0=r[W0],J0=Z.get(j0);if(Q.bindTexture(J.TEXTURE_2D,J0.__webglTexture),C0(J.TEXTURE_2D,j0),U0(g.__webglFramebuffer,_,j0,J.COLOR_ATTACHMENT0+W0,J.TEXTURE_2D,0),V(j0))E(J.TEXTURE_2D)}Q.unbindTexture()}else{let W0=J.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)W0=_.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(W0,a.__webglTexture),C0(W0,z),z.mipmaps&&z.mipmaps.length>0)for(let Y0=0;Y0<z.mipmaps.length;Y0++)U0(g.__webglFramebuffer[Y0],_,z,J.COLOR_ATTACHMENT0,W0,Y0);else U0(g.__webglFramebuffer,_,z,J.COLOR_ATTACHMENT0,W0,0);if(V(z))E(W0);Q.unbindTexture()}if(_.depthBuffer)P0(_)}function T(_){let z=_.textures;for(let g=0,a=z.length;g<a;g++){let r=z[g];if(V(r)){let t=_.isWebGLCubeRenderTarget?J.TEXTURE_CUBE_MAP:J.TEXTURE_2D,B0=Z.get(r).__webglTexture;Q.bindTexture(t,B0),E(t),Q.unbindTexture()}}}let Z6=[],g0=[];function e0(_){if(_.samples>0){if(l0(_)===!1){let{textures:z,width:g,height:a}=_,r=J.COLOR_BUFFER_BIT,t=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,B0=Z.get(_),W0=z.length>1;if(W0)for(let Y0=0;Y0<z.length;Y0++)Q.bindFramebuffer(J.FRAMEBUFFER,B0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.RENDERBUFFER,null),Q.bindFramebuffer(J.FRAMEBUFFER,B0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.TEXTURE_2D,null,0);Q.bindFramebuffer(J.READ_FRAMEBUFFER,B0.__webglMultisampledFramebuffer),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,B0.__webglFramebuffer);for(let Y0=0;Y0<z.length;Y0++){if(_.resolveDepthBuffer){if(_.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(_.stencilBuffer&&_.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(W0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,B0.__webglColorRenderbuffer[Y0]);let j0=Z.get(z[Y0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,j0,0)}if(J.blitFramebuffer(0,0,g,a,0,0,g,a,r,J.NEAREST),K===!0){if(Z6.length=0,g0.length=0,Z6.push(J.COLOR_ATTACHMENT0+Y0),_.depthBuffer&&_.resolveDepthBuffer===!1)Z6.push(t),g0.push(t),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,g0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,Z6)}}if(Q.bindFramebuffer(J.READ_FRAMEBUFFER,null),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),W0)for(let Y0=0;Y0<z.length;Y0++){Q.bindFramebuffer(J.FRAMEBUFFER,B0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.RENDERBUFFER,B0.__webglColorRenderbuffer[Y0]);let j0=Z.get(z[Y0]).__webglTexture;Q.bindFramebuffer(J.FRAMEBUFFER,B0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.TEXTURE_2D,j0,0)}Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,B0.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&K){let z=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[z])}}}function L0(_){return Math.min(W.maxSamples,_.samples)}function l0(_){let z=Z.get(_);return _.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&z.__useRenderToTexture!==!1}function T0(_){let z=X.render.frame;if(G.get(_)!==z)G.set(_,z),_.update()}function S0(_,z){let{colorSpace:g,format:a,type:r}=_;if(_.isCompressedTexture===!0||_.isVideoTexture===!0)return z;if(g!=="srgb-linear"&&g!=="")if(c0.getTransfer(g)==="srgb"){if(a!==1023||r!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",g);return z}function $6(_){if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement)q.width=_.naturalWidth||_.width,q.height=_.naturalHeight||_.height;else if(typeof VideoFrame<"u"&&_ instanceof VideoFrame)q.width=_.displayWidth,q.height=_.displayHeight;else q.width=_.width,q.height=_.height;return q}this.allocateTextureUnit=u,this.resetTextureUnits=j,this.setTexture2D=d,this.setTexture2DArray=s,this.setTexture3D=l,this.setTextureCube=e,this.rebindTextures=t0,this.setupRenderTarget=h0,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=e0,this.setupDepthRenderbuffer=P0,this.setupFrameBufferTexture=U0,this.useMultisampledRTT=l0}function I4(J,$){function Q(Z,W=""){let Y,X=c0.getTransfer(W);if(Z===1009)return J.UNSIGNED_BYTE;if(Z===1017)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===1018)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===35902)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===1010)return J.BYTE;if(Z===1011)return J.SHORT;if(Z===1012)return J.UNSIGNED_SHORT;if(Z===1013)return J.INT;if(Z===1014)return J.UNSIGNED_INT;if(Z===1015)return J.FLOAT;if(Z===1016)return J.HALF_FLOAT;if(Z===1021)return J.ALPHA;if(Z===1022)return J.RGB;if(Z===1023)return J.RGBA;if(Z===1024)return J.LUMINANCE;if(Z===1025)return J.LUMINANCE_ALPHA;if(Z===1026)return J.DEPTH_COMPONENT;if(Z===1027)return J.DEPTH_STENCIL;if(Z===1028)return J.RED;if(Z===1029)return J.RED_INTEGER;if(Z===1030)return J.RG;if(Z===1031)return J.RG_INTEGER;if(Z===1033)return J.RGBA_INTEGER;if(Z===33776||Z===33777||Z===33778||Z===33779)if(X==="srgb")if(Y=$.get("WEBGL_compressed_texture_s3tc_srgb"),Y!==null){if(Z===33776)return Y.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===33777)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===33778)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===33779)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Y=$.get("WEBGL_compressed_texture_s3tc"),Y!==null){if(Z===33776)return Y.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===33777)return Y.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===33778)return Y.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===33779)return Y.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===35840||Z===35841||Z===35842||Z===35843)if(Y=$.get("WEBGL_compressed_texture_pvrtc"),Y!==null){if(Z===35840)return Y.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===35841)return Y.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===35842)return Y.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===35843)return Y.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===36196||Z===37492||Z===37496)if(Y=$.get("WEBGL_compressed_texture_etc"),Y!==null){if(Z===36196||Z===37492)return X==="srgb"?Y.COMPRESSED_SRGB8_ETC2:Y.COMPRESSED_RGB8_ETC2;if(Z===37496)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Y.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===37808||Z===37809||Z===37810||Z===37811||Z===37812||Z===37813||Z===37814||Z===37815||Z===37816||Z===37817||Z===37818||Z===37819||Z===37820||Z===37821)if(Y=$.get("WEBGL_compressed_texture_astc"),Y!==null){if(Z===37808)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Y.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===37809)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Y.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===37810)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Y.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===37811)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Y.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===37812)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Y.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===37813)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Y.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===37814)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Y.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===37815)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Y.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===37816)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Y.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===37817)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Y.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===37818)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Y.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===37819)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Y.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===37820)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Y.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===37821)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Y.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===36492||Z===36494||Z===36495)if(Y=$.get("EXT_texture_compression_bptc"),Y!==null){if(Z===36492)return X==="srgb"?Y.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Y.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===36494)return Y.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===36495)return Y.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===36283||Z===36284||Z===36285||Z===36286)if(Y=$.get("EXT_texture_compression_rgtc"),Y!==null){if(Z===36492)return Y.COMPRESSED_RED_RGTC1_EXT;if(Z===36284)return Y.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===36285)return Y.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===36286)return Y.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===1020)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:Q}}class OQ extends z6{constructor(J=[]){super();this.isArrayCamera=!0,this.cameras=J}}class w6 extends J6{constructor(){super();this.isGroup=!0,this.type="Group"}}var A4={type:"move"};class y9{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new w6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new w6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new w6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let $=this._hand;if($)for(let Q of J.hand.values())this._getHandJoint($,Q)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,$,Q){let Z=null,W=null,Y=null,X=this._targetRay,H=this._grip,K=this._hand;if(J&&$.session.visibilityState!=="visible-blurred"){if(K&&J.hand){Y=!0;for(let N of J.hand.values()){let R=$.getJointPose(N,Q),V=this._getHandJoint(K,N);if(R!==null)V.matrix.fromArray(R.transform.matrix),V.matrix.decompose(V.position,V.rotation,V.scale),V.matrixWorldNeedsUpdate=!0,V.jointRadius=R.radius;V.visible=R!==null}let q=K.joints["index-finger-tip"],G=K.joints["thumb-tip"],U=q.position.distanceTo(G.position),F=0.02,O=0.005;if(K.inputState.pinching&&U>F+O)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&U<=F-O)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(H!==null&&J.gripSpace){if(W=$.getPose(J.gripSpace,Q),W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1}}if(X!==null){if(Z=$.getPose(J.targetRaySpace,Q),Z===null&&W!==null)Z=W;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(A4)}}}if(X!==null)X.visible=Z!==null;if(H!==null)H.visible=W!==null;if(K!==null)K.visible=Y!==null;return this}_getHandJoint(J,$){if(J.joints[$.jointName]===void 0){let Q=new w6;Q.matrixAutoUpdate=!1,Q.visible=!1,J.joints[$.jointName]=Q,J.add(Q)}return J.joints[$.jointName]}}var P4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T4=`
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

}`;class NQ{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,$,Q){if(this.texture===null){let Z=new E6,W=J.properties.get(Z);if(W.__webglTexture=$.texture,$.depthNear!=Q.depthNear||$.depthFar!=Q.depthFar)this.depthNear=$.depthNear,this.depthFar=$.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let $=J.cameras[0].viewport,Q=new F7({vertexShader:P4,fragmentShader:T4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:$.z},depthHeight:{value:$.w}}});this.mesh=new V6(new p9(20,20),Q)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RQ extends V7{constructor(J,$){super();let Q=this,Z=null,W=1,Y=null,X="local-floor",H=1,K=null,q=null,G=null,U=null,F=null,O=null,N=new NQ,R=$.getContextAttributes(),V=null,E=null,M=[],C=[],I=new k0,y=null,L=new z6;L.layers.enable(1),L.viewport=new r0;let S=new z6;S.layers.enable(2),S.viewport=new r0;let b=[L,S],D=new OQ;D.layers.enable(1),D.layers.enable(2);let k=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let Z0=M[o];if(Z0===void 0)Z0=new y9,M[o]=Z0;return Z0.getTargetRaySpace()},this.getControllerGrip=function(o){let Z0=M[o];if(Z0===void 0)Z0=new y9,M[o]=Z0;return Z0.getGripSpace()},this.getHand=function(o){let Z0=M[o];if(Z0===void 0)Z0=new y9,M[o]=Z0;return Z0.getHandSpace()};function u(o){let Z0=C.indexOf(o.inputSource);if(Z0===-1)return;let U0=M[Z0];if(U0!==void 0)U0.update(o.inputSource,o.frame,K||Y),U0.dispatchEvent({type:o.type,data:o.inputSource})}function n(){Z.removeEventListener("select",u),Z.removeEventListener("selectstart",u),Z.removeEventListener("selectend",u),Z.removeEventListener("squeeze",u),Z.removeEventListener("squeezestart",u),Z.removeEventListener("squeezeend",u),Z.removeEventListener("end",n),Z.removeEventListener("inputsourceschange",d);for(let o=0;o<M.length;o++){let Z0=C[o];if(Z0===null)continue;C[o]=null,M[o].disconnect(Z0)}k=null,j=null,N.reset(),J.setRenderTarget(V),F=null,U=null,G=null,Z=null,E=null,x0.stop(),Q.isPresenting=!1,J.setPixelRatio(y),J.setSize(I.width,I.height,!1),Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(W=o,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(X=o,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||Y},this.setReferenceSpace=function(o){K=o},this.getBaseLayer=function(){return U!==null?U:F},this.getBinding=function(){return G},this.getFrame=function(){return O},this.getSession=function(){return Z},this.setSession=async function(o){if(Z=o,Z!==null){if(V=J.getRenderTarget(),Z.addEventListener("select",u),Z.addEventListener("selectstart",u),Z.addEventListener("selectend",u),Z.addEventListener("squeeze",u),Z.addEventListener("squeezestart",u),Z.addEventListener("squeezeend",u),Z.addEventListener("end",n),Z.addEventListener("inputsourceschange",d),R.xrCompatible!==!0)await $.makeXRCompatible();if(y=J.getPixelRatio(),J.getSize(I),Z.renderState.layers===void 0){let Z0={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:W};F=new XRWebGLLayer(Z,$,Z0),Z.updateRenderState({baseLayer:F}),J.setPixelRatio(1),J.setSize(F.framebufferWidth,F.framebufferHeight,!1),E=new A7(F.framebufferWidth,F.framebufferHeight,{format:1023,type:1009,colorSpace:J.outputColorSpace,stencilBuffer:R.stencil})}else{let Z0=null,U0=null,M0=null;if(R.depth)M0=R.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,Z0=R.stencil?1027:1026,U0=R.stencil?1020:1014;let G0={colorFormat:$.RGBA8,depthFormat:M0,scaleFactor:W};G=new XRWebGLBinding(Z,$),U=G.createProjectionLayer(G0),Z.updateRenderState({layers:[U]}),J.setPixelRatio(1),J.setSize(U.textureWidth,U.textureHeight,!1),E=new A7(U.textureWidth,U.textureHeight,{format:1023,type:1009,depthTexture:new nJ(U.textureWidth,U.textureHeight,U0,void 0,void 0,void 0,void 0,void 0,void 0,Z0),stencilBuffer:R.stencil,colorSpace:J.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(H),K=null,Y=await Z.requestReferenceSpace(X),x0.setContext(Z),x0.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return N.getDepthTexture()};function d(o){for(let Z0=0;Z0<o.removed.length;Z0++){let U0=o.removed[Z0],M0=C.indexOf(U0);if(M0>=0)C[M0]=null,M[M0].disconnect(U0)}for(let Z0=0;Z0<o.added.length;Z0++){let U0=o.added[Z0],M0=C.indexOf(U0);if(M0===-1){for(let P0=0;P0<M.length;P0++)if(P0>=C.length){C.push(U0),M0=P0;break}else if(C[P0]===null){C[P0]=U0,M0=P0;break}if(M0===-1)break}let G0=M[M0];if(G0)G0.connect(U0)}}let s=new P,l=new P;function e(o,Z0,U0){s.setFromMatrixPosition(Z0.matrixWorld),l.setFromMatrixPosition(U0.matrixWorld);let M0=s.distanceTo(l),G0=Z0.projectionMatrix.elements,P0=U0.projectionMatrix.elements,t0=G0[14]/(G0[10]-1),h0=G0[14]/(G0[10]+1),T=(G0[9]+1)/G0[5],Z6=(G0[9]-1)/G0[5],g0=(G0[8]-1)/G0[0],e0=(P0[8]+1)/P0[0],L0=t0*g0,l0=t0*e0,T0=M0/(-g0+e0),S0=T0*-g0;Z0.matrixWorld.decompose(o.position,o.quaternion,o.scale),o.translateX(S0),o.translateZ(T0),o.matrixWorld.compose(o.position,o.quaternion,o.scale),o.matrixWorldInverse.copy(o.matrixWorld).invert();let $6=t0+T0,_=h0+T0,z=L0-S0,g=l0+(M0-S0),a=T*h0/_*$6,r=Z6*h0/_*$6;o.projectionMatrix.makePerspective(z,g,a,r,$6,_),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}function m(o,Z0){if(Z0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(Z0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(Z===null)return;if(N.texture!==null)o.near=N.depthNear,o.far=N.depthFar;if(D.near=S.near=L.near=o.near,D.far=S.far=L.far=o.far,k!==D.near||j!==D.far)Z.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,j=D.far,L.near=k,L.far=j,S.near=k,S.far=j,L.updateProjectionMatrix(),S.updateProjectionMatrix(),o.updateProjectionMatrix();let Z0=o.parent,U0=D.cameras;m(D,Z0);for(let M0=0;M0<U0.length;M0++)m(U0[M0],Z0);if(U0.length===2)e(D,L,S);else D.projectionMatrix.copy(L.projectionMatrix);q0(o,D,Z0)};function q0(o,Z0,U0){if(U0===null)o.matrix.copy(Z0.matrixWorld);else o.matrix.copy(U0.matrixWorld),o.matrix.invert(),o.matrix.multiply(Z0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(Z0.projectionMatrix),o.projectionMatrixInverse.copy(Z0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=C8*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return D},this.getFoveation=function(){if(U===null&&F===null)return;return H},this.setFoveation=function(o){if(H=o,U!==null)U.fixedFoveation=o;if(F!==null&&F.fixedFoveation!==void 0)F.fixedFoveation=o},this.hasDepthSensing=function(){return N.texture!==null},this.getDepthSensingMesh=function(){return N.getMesh(D)};let F0=null;function C0(o,Z0){if(q=Z0.getViewerPose(K||Y),O=Z0,q!==null){let U0=q.views;if(F!==null)J.setRenderTargetFramebuffer(E,F.framebuffer),J.setRenderTarget(E);let M0=!1;if(U0.length!==D.cameras.length)D.cameras.length=0,M0=!0;for(let P0=0;P0<U0.length;P0++){let t0=U0[P0],h0=null;if(F!==null)h0=F.getViewport(t0);else{let Z6=G.getViewSubImage(U,t0);if(h0=Z6.viewport,P0===0)J.setRenderTargetTextures(E,Z6.colorTexture,U.ignoreDepthValues?void 0:Z6.depthStencilTexture),J.setRenderTarget(E)}let T=b[P0];if(T===void 0)T=new z6,T.layers.enable(P0),T.viewport=new r0,b[P0]=T;if(T.matrix.fromArray(t0.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(t0.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(h0.x,h0.y,h0.width,h0.height),P0===0)D.matrix.copy(T.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);if(M0===!0)D.cameras.push(T)}let G0=Z.enabledFeatures;if(G0&&G0.includes("depth-sensing")){let P0=G.getDepthInformation(U0[0]);if(P0&&P0.isValid&&P0.texture)N.init(J,P0,Z.renderState)}}for(let U0=0;U0<M.length;U0++){let M0=C[U0],G0=M[U0];if(M0!==null&&G0!==void 0)G0.update(M0,Z0,K||Y)}if(F0)F0(o,Z0);if(Z0.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:Z0});O=null}let x0=new ZQ;x0.setAnimationLoop(C0),this.setAnimationLoop=function(o){F0=o},this.dispose=function(){}}}var u7=new r6,S4=new y0;function j4(J,$){function Q(V,E){if(V.matrixAutoUpdate===!0)V.updateMatrix();E.value.copy(V.matrix)}function Z(V,E){if(E.color.getRGB(V.fogColor.value,JQ(J)),E.isFog)V.fogNear.value=E.near,V.fogFar.value=E.far;else if(E.isFogExp2)V.fogDensity.value=E.density}function W(V,E,M,C,I){if(E.isMeshBasicMaterial)Y(V,E);else if(E.isMeshLambertMaterial)Y(V,E);else if(E.isMeshToonMaterial)Y(V,E),U(V,E);else if(E.isMeshPhongMaterial)Y(V,E),G(V,E);else if(E.isMeshStandardMaterial){if(Y(V,E),F(V,E),E.isMeshPhysicalMaterial)O(V,E,I)}else if(E.isMeshMatcapMaterial)Y(V,E),N(V,E);else if(E.isMeshDepthMaterial)Y(V,E);else if(E.isMeshDistanceMaterial)Y(V,E),R(V,E);else if(E.isMeshNormalMaterial)Y(V,E);else if(E.isLineBasicMaterial){if(X(V,E),E.isLineDashedMaterial)H(V,E)}else if(E.isPointsMaterial)K(V,E,M,C);else if(E.isSpriteMaterial)q(V,E);else if(E.isShadowMaterial)V.color.value.copy(E.color),V.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function Y(V,E){if(V.opacity.value=E.opacity,E.color)V.diffuse.value.copy(E.color);if(E.emissive)V.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)V.map.value=E.map,Q(E.map,V.mapTransform);if(E.alphaMap)V.alphaMap.value=E.alphaMap,Q(E.alphaMap,V.alphaMapTransform);if(E.bumpMap){if(V.bumpMap.value=E.bumpMap,Q(E.bumpMap,V.bumpMapTransform),V.bumpScale.value=E.bumpScale,E.side===1)V.bumpScale.value*=-1}if(E.normalMap){if(V.normalMap.value=E.normalMap,Q(E.normalMap,V.normalMapTransform),V.normalScale.value.copy(E.normalScale),E.side===1)V.normalScale.value.negate()}if(E.displacementMap)V.displacementMap.value=E.displacementMap,Q(E.displacementMap,V.displacementMapTransform),V.displacementScale.value=E.displacementScale,V.displacementBias.value=E.displacementBias;if(E.emissiveMap)V.emissiveMap.value=E.emissiveMap,Q(E.emissiveMap,V.emissiveMapTransform);if(E.specularMap)V.specularMap.value=E.specularMap,Q(E.specularMap,V.specularMapTransform);if(E.alphaTest>0)V.alphaTest.value=E.alphaTest;let M=$.get(E),C=M.envMap,I=M.envMapRotation;if(C){if(V.envMap.value=C,u7.copy(I),u7.x*=-1,u7.y*=-1,u7.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1)u7.y*=-1,u7.z*=-1;V.envMapRotation.value.setFromMatrix4(S4.makeRotationFromEuler(u7)),V.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,V.reflectivity.value=E.reflectivity,V.ior.value=E.ior,V.refractionRatio.value=E.refractionRatio}if(E.lightMap)V.lightMap.value=E.lightMap,V.lightMapIntensity.value=E.lightMapIntensity,Q(E.lightMap,V.lightMapTransform);if(E.aoMap)V.aoMap.value=E.aoMap,V.aoMapIntensity.value=E.aoMapIntensity,Q(E.aoMap,V.aoMapTransform)}function X(V,E){if(V.diffuse.value.copy(E.color),V.opacity.value=E.opacity,E.map)V.map.value=E.map,Q(E.map,V.mapTransform)}function H(V,E){V.dashSize.value=E.dashSize,V.totalSize.value=E.dashSize+E.gapSize,V.scale.value=E.scale}function K(V,E,M,C){if(V.diffuse.value.copy(E.color),V.opacity.value=E.opacity,V.size.value=E.size*M,V.scale.value=C*0.5,E.map)V.map.value=E.map,Q(E.map,V.uvTransform);if(E.alphaMap)V.alphaMap.value=E.alphaMap,Q(E.alphaMap,V.alphaMapTransform);if(E.alphaTest>0)V.alphaTest.value=E.alphaTest}function q(V,E){if(V.diffuse.value.copy(E.color),V.opacity.value=E.opacity,V.rotation.value=E.rotation,E.map)V.map.value=E.map,Q(E.map,V.mapTransform);if(E.alphaMap)V.alphaMap.value=E.alphaMap,Q(E.alphaMap,V.alphaMapTransform);if(E.alphaTest>0)V.alphaTest.value=E.alphaTest}function G(V,E){V.specular.value.copy(E.specular),V.shininess.value=Math.max(E.shininess,0.0001)}function U(V,E){if(E.gradientMap)V.gradientMap.value=E.gradientMap}function F(V,E){if(V.metalness.value=E.metalness,E.metalnessMap)V.metalnessMap.value=E.metalnessMap,Q(E.metalnessMap,V.metalnessMapTransform);if(V.roughness.value=E.roughness,E.roughnessMap)V.roughnessMap.value=E.roughnessMap,Q(E.roughnessMap,V.roughnessMapTransform);if(E.envMap)V.envMapIntensity.value=E.envMapIntensity}function O(V,E,M){if(V.ior.value=E.ior,E.sheen>0){if(V.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),V.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)V.sheenColorMap.value=E.sheenColorMap,Q(E.sheenColorMap,V.sheenColorMapTransform);if(E.sheenRoughnessMap)V.sheenRoughnessMap.value=E.sheenRoughnessMap,Q(E.sheenRoughnessMap,V.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(V.clearcoat.value=E.clearcoat,V.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)V.clearcoatMap.value=E.clearcoatMap,Q(E.clearcoatMap,V.clearcoatMapTransform);if(E.clearcoatRoughnessMap)V.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,Q(E.clearcoatRoughnessMap,V.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(V.clearcoatNormalMap.value=E.clearcoatNormalMap,Q(E.clearcoatNormalMap,V.clearcoatNormalMapTransform),V.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===1)V.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)V.dispersion.value=E.dispersion;if(E.iridescence>0){if(V.iridescence.value=E.iridescence,V.iridescenceIOR.value=E.iridescenceIOR,V.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],V.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)V.iridescenceMap.value=E.iridescenceMap,Q(E.iridescenceMap,V.iridescenceMapTransform);if(E.iridescenceThicknessMap)V.iridescenceThicknessMap.value=E.iridescenceThicknessMap,Q(E.iridescenceThicknessMap,V.iridescenceThicknessMapTransform)}if(E.transmission>0){if(V.transmission.value=E.transmission,V.transmissionSamplerMap.value=M.texture,V.transmissionSamplerSize.value.set(M.width,M.height),E.transmissionMap)V.transmissionMap.value=E.transmissionMap,Q(E.transmissionMap,V.transmissionMapTransform);if(V.thickness.value=E.thickness,E.thicknessMap)V.thicknessMap.value=E.thicknessMap,Q(E.thicknessMap,V.thicknessMapTransform);V.attenuationDistance.value=E.attenuationDistance,V.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(V.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)V.anisotropyMap.value=E.anisotropyMap,Q(E.anisotropyMap,V.anisotropyMapTransform)}if(V.specularIntensity.value=E.specularIntensity,V.specularColor.value.copy(E.specularColor),E.specularColorMap)V.specularColorMap.value=E.specularColorMap,Q(E.specularColorMap,V.specularColorMapTransform);if(E.specularIntensityMap)V.specularIntensityMap.value=E.specularIntensityMap,Q(E.specularIntensityMap,V.specularIntensityMapTransform)}function N(V,E){if(E.matcap)V.matcap.value=E.matcap}function R(V,E){let M=$.get(E).light;V.referencePosition.value.setFromMatrixPosition(M.matrixWorld),V.nearDistance.value=M.shadow.camera.near,V.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function y4(J,$,Q,Z){let W={},Y={},X=[],H=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(M,C){let I=C.program;Z.uniformBlockBinding(M,I)}function q(M,C){let I=W[M.id];if(I===void 0)N(M),I=G(M),W[M.id]=I,M.addEventListener("dispose",V);let y=C.program;Z.updateUBOMapping(M,y);let L=$.render.frame;if(Y[M.id]!==L)F(M),Y[M.id]=L}function G(M){let C=U();M.__bindingPointIndex=C;let I=J.createBuffer(),y=M.__size,L=M.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,y,L),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,C,I),I}function U(){for(let M=0;M<H;M++)if(X.indexOf(M)===-1)return X.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function F(M){let C=W[M.id],I=M.uniforms,y=M.__cache;J.bindBuffer(J.UNIFORM_BUFFER,C);for(let L=0,S=I.length;L<S;L++){let b=Array.isArray(I[L])?I[L]:[I[L]];for(let D=0,k=b.length;D<k;D++){let j=b[D];if(O(j,L,D,y)===!0){let u=j.__offset,n=Array.isArray(j.value)?j.value:[j.value],d=0;for(let s=0;s<n.length;s++){let l=n[s],e=R(l);if(typeof l==="number"||typeof l==="boolean")j.__data[0]=l,J.bufferSubData(J.UNIFORM_BUFFER,u+d,j.__data);else if(l.isMatrix3)j.__data[0]=l.elements[0],j.__data[1]=l.elements[1],j.__data[2]=l.elements[2],j.__data[3]=0,j.__data[4]=l.elements[3],j.__data[5]=l.elements[4],j.__data[6]=l.elements[5],j.__data[7]=0,j.__data[8]=l.elements[6],j.__data[9]=l.elements[7],j.__data[10]=l.elements[8],j.__data[11]=0;else l.toArray(j.__data,d),d+=e.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,u,j.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function O(M,C,I,y){let L=M.value,S=C+"_"+I;if(y[S]===void 0){if(typeof L==="number"||typeof L==="boolean")y[S]=L;else y[S]=L.clone();return!0}else{let b=y[S];if(typeof L==="number"||typeof L==="boolean"){if(b!==L)return y[S]=L,!0}else if(b.equals(L)===!1)return b.copy(L),!0}return!1}function N(M){let C=M.uniforms,I=0,y=16;for(let S=0,b=C.length;S<b;S++){let D=Array.isArray(C[S])?C[S]:[C[S]];for(let k=0,j=D.length;k<j;k++){let u=D[k],n=Array.isArray(u.value)?u.value:[u.value];for(let d=0,s=n.length;d<s;d++){let l=n[d],e=R(l),m=I%y;if(m!==0&&y-m<e.boundary)I+=y-m;u.__data=new Float32Array(e.storage/Float32Array.BYTES_PER_ELEMENT),u.__offset=I,I+=e.storage}}}let L=I%y;if(L>0)I+=y-L;return M.__size=I,M.__cache={},this}function R(M){let C={boundary:0,storage:0};if(typeof M==="number"||typeof M==="boolean")C.boundary=4,C.storage=4;else if(M.isVector2)C.boundary=8,C.storage=8;else if(M.isVector3||M.isColor)C.boundary=16,C.storage=12;else if(M.isVector4)C.boundary=16,C.storage=16;else if(M.isMatrix3)C.boundary=48,C.storage=48;else if(M.isMatrix4)C.boundary=64,C.storage=64;else if(M.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M);return C}function V(M){let C=M.target;C.removeEventListener("dispose",V);let I=X.indexOf(C.__bindingPointIndex);X.splice(I,1),J.deleteBuffer(W[C.id]),delete W[C.id],delete Y[C.id]}function E(){for(let M in W)J.deleteBuffer(W[M]);X=[],W={},Y={}}return{bind:K,update:q,dispose:E}}class sJ{constructor(J={}){let{canvas:$=pZ(),context:Q=null,depth:Z=!0,stencil:W=!1,alpha:Y=!1,antialias:X=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:K=!1,powerPreference:q="default",failIfMajorPerformanceCaveat:G=!1}=J;this.isWebGLRenderer=!0;let U;if(Q!==null){if(typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");U=Q.getContextAttributes().alpha}else U=Y;let F=new Uint32Array(4),O=new Int32Array(4),N=null,R=null,V=[],E=[];this.domElement=$,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let M=this,C=!1,I=0,y=0,L=null,S=-1,b=null,D=new r0,k=new r0,j=null,u=new z0(0),n=0,d=$.width,s=$.height,l=1,e=null,m=null,q0=new r0(0,0,d,s),F0=new r0(0,0,d,s),C0=!1,x0=new g9,o=!1,Z0=!1,U0=new y0,M0=new P,G0=new r0,P0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},t0=!1;function h0(){return L===null?l:1}let T=Q;function Z6(B,v){return $.getContext(B,v)}try{let B={alpha:!0,depth:Z,stencil:W,antialias:X,premultipliedAlpha:H,preserveDrawingBuffer:K,powerPreference:q,failIfMajorPerformanceCaveat:G};if("setAttribute"in $)$.setAttribute("data-engine","three.js r166");if($.addEventListener("webglcontextlost",i,!1),$.addEventListener("webglcontextrestored",p,!1),$.addEventListener("webglcontextcreationerror",c,!1),T===null){if(T=Z6("webgl2",B),T===null)if(Z6("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let g0,e0,L0,l0,T0,S0,$6,_,z,g,a,r,t,B0,W0,Y0,j0,J0,N0,u0,w0,X0,I0,m0;function A(){g0=new rX(T),g0.init(),X0=new I4(T,g0),e0=new cX(T,g0,J,X0),L0=new C4(T),l0=new JH(T),T0=new F4,S0=new _4(T,g0,L0,T0,e0,X0,l0),$6=new sX(M),_=new aX(M),z=new HW(T),I0=new lX(T,z),g=new tX(T,z,l0,I0),a=new QH(T,g,z,l0),N0=new $H(T,e0,S0),Y0=new nX(T0),r=new U4(M,$6,_,g0,e0,I0,Y0),t=new j4(M,T0),B0=new E4,W0=new M4(g0),J0=new mX(M,$6,_,L0,a,U,H),j0=new D4(M,a,e0),m0=new y4(T,l0,e0,L0),u0=new dX(T,g0,l0),w0=new eX(T,g0,l0),l0.programs=r.programs,M.capabilities=e0,M.extensions=g0,M.properties=T0,M.renderLists=B0,M.shadowMap=j0,M.state=L0,M.info=l0}A();let w=new RQ(M,T);this.xr=w,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let B=g0.get("WEBGL_lose_context");if(B)B.loseContext()},this.forceContextRestore=function(){let B=g0.get("WEBGL_lose_context");if(B)B.restoreContext()},this.getPixelRatio=function(){return l},this.setPixelRatio=function(B){if(B===void 0)return;l=B,this.setSize(d,s,!1)},this.getSize=function(B){return B.set(d,s)},this.setSize=function(B,v,x=!0){if(w.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(d=B,s=v,$.width=Math.floor(B*l),$.height=Math.floor(v*l),x===!0)$.style.width=B+"px",$.style.height=v+"px";this.setViewport(0,0,B,v)},this.getDrawingBufferSize=function(B){return B.set(d*l,s*l).floor()},this.setDrawingBufferSize=function(B,v,x){d=B,s=v,l=x,$.width=Math.floor(B*x),$.height=Math.floor(v*x),this.setViewport(0,0,B,v)},this.getCurrentViewport=function(B){return B.copy(D)},this.getViewport=function(B){return B.copy(q0)},this.setViewport=function(B,v,x,h){if(B.isVector4)q0.set(B.x,B.y,B.z,B.w);else q0.set(B,v,x,h);L0.viewport(D.copy(q0).multiplyScalar(l).round())},this.getScissor=function(B){return B.copy(F0)},this.setScissor=function(B,v,x,h){if(B.isVector4)F0.set(B.x,B.y,B.z,B.w);else F0.set(B,v,x,h);L0.scissor(k.copy(F0).multiplyScalar(l).round())},this.getScissorTest=function(){return C0},this.setScissorTest=function(B){L0.setScissorTest(C0=B)},this.setOpaqueSort=function(B){e=B},this.setTransparentSort=function(B){m=B},this.getClearColor=function(B){return B.copy(J0.getClearColor())},this.setClearColor=function(){J0.setClearColor.apply(J0,arguments)},this.getClearAlpha=function(){return J0.getClearAlpha()},this.setClearAlpha=function(){J0.setClearAlpha.apply(J0,arguments)},this.clear=function(B=!0,v=!0,x=!0){let h=0;if(B){let f=!1;if(L!==null){let Q0=L.texture.format;f=Q0===1033||Q0===1031||Q0===1029}if(f){let Q0=L.texture.type,K0=Q0===1009||Q0===1014||Q0===1012||Q0===1020||Q0===1017||Q0===1018,V0=J0.getClearColor(),E0=J0.getClearAlpha(),_0=V0.r,A0=V0.g,D0=V0.b;if(K0)F[0]=_0,F[1]=A0,F[2]=D0,F[3]=E0,T.clearBufferuiv(T.COLOR,0,F);else O[0]=_0,O[1]=A0,O[2]=D0,O[3]=E0,T.clearBufferiv(T.COLOR,0,O)}else h|=T.COLOR_BUFFER_BIT}if(v)h|=T.DEPTH_BUFFER_BIT;if(x)h|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);T.clear(h)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){$.removeEventListener("webglcontextlost",i,!1),$.removeEventListener("webglcontextrestored",p,!1),$.removeEventListener("webglcontextcreationerror",c,!1),B0.dispose(),W0.dispose(),T0.dispose(),$6.dispose(),_.dispose(),a.dispose(),I0.dispose(),m0.dispose(),r.dispose(),w.dispose(),w.removeEventListener("sessionstart",G6),w.removeEventListener("sessionend",L6),B6.stop()};function i(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function p(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let B=l0.autoReset,v=j0.enabled,x=j0.autoUpdate,h=j0.needsUpdate,f=j0.type;A(),l0.autoReset=B,j0.enabled=v,j0.autoUpdate=x,j0.needsUpdate=h,j0.type=f}function c(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function $0(B){let v=B.target;v.removeEventListener("dispose",$0),O0(v)}function O0(B){d0(B),T0.remove(B)}function d0(B){let v=T0.get(B).programs;if(v!==void 0){if(v.forEach(function(x){r.releaseProgram(x)}),B.isShaderMaterial)r.releaseShaderCache(B)}}this.renderBufferDirect=function(B,v,x,h,f,Q0){if(v===null)v=P0;let K0=f.isMesh&&f.matrixWorld.determinant()<0,V0=MZ(B,v,x,h,f);L0.setMaterial(h,K0);let E0=x.index,_0=1;if(h.wireframe===!0){if(E0=g.getWireframeAttribute(x),E0===void 0)return;_0=2}let A0=x.drawRange,D0=x.attributes.position,n0=A0.start*_0,Y6=(A0.start+A0.count)*_0;if(Q0!==null)n0=Math.max(n0,Q0.start*_0),Y6=Math.min(Y6,(Q0.start+Q0.count)*_0);if(E0!==null)n0=Math.max(n0,0),Y6=Math.min(Y6,E0.count);else if(D0!==void 0&&D0!==null)n0=Math.max(n0,0),Y6=Math.min(Y6,D0.count);let X6=Y6-n0;if(X6<0||X6===1/0)return;I0.setup(f,h,V0,x,E0);let T6,s0=u0;if(E0!==null)T6=z.get(E0),s0=w0,s0.setIndex(T6);if(f.isMesh)if(h.wireframe===!0)L0.setLineWidth(h.wireframeLinewidth*h0()),s0.setMode(T.LINES);else s0.setMode(T.TRIANGLES);else if(f.isLine){let R0=h.linewidth;if(R0===void 0)R0=1;if(L0.setLineWidth(R0*h0()),f.isLineSegments)s0.setMode(T.LINES);else if(f.isLineLoop)s0.setMode(T.LINE_LOOP);else s0.setMode(T.LINE_STRIP)}else if(f.isPoints)s0.setMode(T.POINTS);else if(f.isSprite)s0.setMode(T.TRIANGLES);if(f.isBatchedMesh)if(f._multiDrawInstances!==null)s0.renderMultiDrawInstances(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount,f._multiDrawInstances);else if(!g0.get("WEBGL_multi_draw")){let{_multiDrawStarts:R0,_multiDrawCounts:M6,_multiDrawCount:o0}=f,d6=E0?z.get(E0).bytesPerElement:1,Z8=T0.get(h).currentProgram.getUniforms();for(let S6=0;S6<o0;S6++)Z8.setValue(T,"_gl_DrawID",S6),s0.render(R0[S6]/d6,M6[S6])}else s0.renderMultiDraw(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount);else if(f.isInstancedMesh)s0.renderInstances(n0,X6,f.count);else if(x.isInstancedBufferGeometry){let R0=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,M6=Math.min(x.instanceCount,R0);s0.renderInstances(n0,X6,M6)}else s0.render(n0,X6)};function W6(B,v,x){if(B.transparent===!0&&B.side===2&&B.forceSinglePass===!1)B.side=1,B.needsUpdate=!0,$9(B,v,x),B.side=0,B.needsUpdate=!0,$9(B,v,x),B.side=2;else $9(B,v,x)}this.compile=function(B,v,x=null){if(x===null)x=B;if(R=W0.get(x),R.init(v),E.push(R),x.traverseVisible(function(f){if(f.isLight&&f.layers.test(v.layers)){if(R.pushLight(f),f.castShadow)R.pushShadow(f)}}),B!==x)B.traverseVisible(function(f){if(f.isLight&&f.layers.test(v.layers)){if(R.pushLight(f),f.castShadow)R.pushShadow(f)}});R.setupLights();let h=new Set;return B.traverse(function(f){let Q0=f.material;if(Q0)if(Array.isArray(Q0))for(let K0=0;K0<Q0.length;K0++){let V0=Q0[K0];W6(V0,x,f),h.add(V0)}else W6(Q0,x,f),h.add(Q0)}),E.pop(),R=null,h},this.compileAsync=function(B,v,x=null){let h=this.compile(B,v,x);return new Promise((f)=>{function Q0(){if(h.forEach(function(K0){if(T0.get(K0).currentProgram.isReady())h.delete(K0)}),h.size===0){f(B);return}setTimeout(Q0,10)}if(g0.get("KHR_parallel_shader_compile")!==null)Q0();else setTimeout(Q0,10)})};let q6=null;function b0(B){if(q6)q6(B)}function G6(){B6.stop()}function L6(){B6.start()}let B6=new ZQ;if(B6.setAnimationLoop(b0),typeof self<"u")B6.setContext(self);this.setAnimationLoop=function(B){q6=B,w.setAnimationLoop(B),B===null?B6.stop():B6.start()},w.addEventListener("sessionstart",G6),w.addEventListener("sessionend",L6),this.render=function(B,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(w.enabled===!0&&w.isPresenting===!0){if(w.cameraAutoUpdate===!0)w.updateCamera(v);v=w.getCamera()}if(B.isScene===!0)B.onBeforeRender(M,B,v,L);if(R=W0.get(B,E.length),R.init(v),E.push(R),U0.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),x0.setFromProjectionMatrix(U0),Z0=this.localClippingEnabled,o=Y0.init(this.clippingPlanes,Z0),N=B0.get(B,V.length),N.init(),V.push(N),w.enabled===!0&&w.isPresenting===!0){let Q0=M.xr.getDepthSensingMesh();if(Q0!==null)Y7(Q0,v,-1/0,M.sortObjects)}if(Y7(B,v,0,M.sortObjects),N.finish(),M.sortObjects===!0)N.sort(e,m);if(t0=w.enabled===!1||w.isPresenting===!1||w.hasDepthSensing()===!1,t0)J0.addToRenderList(N,B);if(this.info.render.frame++,o===!0)Y0.beginShadows();let x=R.state.shadowsArray;if(j0.render(x,B,v),o===!0)Y0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:h,transmissive:f}=N;if(R.setupLights(),v.isArrayCamera){let Q0=v.cameras;if(f.length>0)for(let K0=0,V0=Q0.length;K0<V0;K0++){let E0=Q0[K0];j8(h,f,B,E0)}if(t0)J0.render(B);for(let K0=0,V0=Q0.length;K0<V0;K0++){let E0=Q0[K0];f7(N,B,E0,E0.viewport)}}else{if(f.length>0)j8(h,f,B,v);if(t0)J0.render(B);f7(N,B,v)}if(L!==null)S0.updateMultisampleRenderTarget(L),S0.updateRenderTargetMipmap(L);if(B.isScene===!0)B.onAfterRender(M,B,v);if(I0.resetDefaultState(),S=-1,b=null,E.pop(),E.length>0){if(R=E[E.length-1],o===!0)Y0.setGlobalState(M.clippingPlanes,R.state.camera)}else R=null;if(V.pop(),V.length>0)N=V[V.length-1];else N=null};function Y7(B,v,x,h){if(B.visible===!1)return;if(B.layers.test(v.layers)){if(B.isGroup)x=B.renderOrder;else if(B.isLOD){if(B.autoUpdate===!0)B.update(v)}else if(B.isLight){if(R.pushLight(B),B.castShadow)R.pushShadow(B)}else if(B.isSprite){if(!B.frustumCulled||x0.intersectsSprite(B)){if(h)G0.setFromMatrixPosition(B.matrixWorld).applyMatrix4(U0);let K0=a.update(B),V0=B.material;if(V0.visible)N.push(B,K0,V0,x,G0.z,null)}}else if(B.isMesh||B.isLine||B.isPoints){if(!B.frustumCulled||x0.intersectsObject(B)){let K0=a.update(B),V0=B.material;if(h){if(B.boundingSphere!==void 0){if(B.boundingSphere===null)B.computeBoundingSphere();G0.copy(B.boundingSphere.center)}else{if(K0.boundingSphere===null)K0.computeBoundingSphere();G0.copy(K0.boundingSphere.center)}G0.applyMatrix4(B.matrixWorld).applyMatrix4(U0)}if(Array.isArray(V0)){let E0=K0.groups;for(let _0=0,A0=E0.length;_0<A0;_0++){let D0=E0[_0],n0=V0[D0.materialIndex];if(n0&&n0.visible)N.push(B,K0,n0,x,G0.z,D0)}}else if(V0.visible)N.push(B,K0,V0,x,G0.z,null)}}}let Q0=B.children;for(let K0=0,V0=Q0.length;K0<V0;K0++)Y7(Q0[K0],v,x,h)}function f7(B,v,x,h){let{opaque:f,transmissive:Q0,transparent:K0}=B;if(R.setupLightsView(x),o===!0)Y0.setGlobalState(M.clippingPlanes,x);if(h)L0.viewport(D.copy(h));if(f.length>0)J9(f,v,x);if(Q0.length>0)J9(Q0,v,x);if(K0.length>0)J9(K0,v,x);L0.buffers.depth.setTest(!0),L0.buffers.depth.setMask(!0),L0.buffers.color.setMask(!0),L0.setPolygonOffset(!1)}function j8(B,v,x,h){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[h.id]===void 0)R.state.transmissionRenderTarget[h.id]=new A7(1,1,{generateMipmaps:!0,type:g0.has("EXT_color_buffer_half_float")||g0.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:c0.workingColorSpace});let Q0=R.state.transmissionRenderTarget[h.id],K0=h.viewport||D;Q0.setSize(K0.z,K0.w);let V0=M.getRenderTarget();if(M.setRenderTarget(Q0),M.getClearColor(u),n=M.getClearAlpha(),n<1)M.setClearColor(16777215,0.5);if(t0)J0.render(x);else M.clear();let E0=M.toneMapping;M.toneMapping=0;let _0=h.viewport;if(h.viewport!==void 0)h.viewport=void 0;if(R.setupLightsView(h),o===!0)Y0.setGlobalState(M.clippingPlanes,h);if(J9(B,x,h),S0.updateMultisampleRenderTarget(Q0),S0.updateRenderTargetMipmap(Q0),g0.has("WEBGL_multisampled_render_to_texture")===!1){let A0=!1;for(let D0=0,n0=v.length;D0<n0;D0++){let Y6=v[D0],X6=Y6.object,T6=Y6.geometry,s0=Y6.material,R0=Y6.group;if(s0.side===2&&X6.layers.test(h.layers)){let M6=s0.side;s0.side=1,s0.needsUpdate=!0,I5(X6,x,h,T6,s0,R0),s0.side=M6,s0.needsUpdate=!0,A0=!0}}if(A0===!0)S0.updateMultisampleRenderTarget(Q0),S0.updateRenderTargetMipmap(Q0)}if(M.setRenderTarget(V0),M.setClearColor(u,n),_0!==void 0)h.viewport=_0;M.toneMapping=E0}function J9(B,v,x){let h=v.isScene===!0?v.overrideMaterial:null;for(let f=0,Q0=B.length;f<Q0;f++){let K0=B[f],V0=K0.object,E0=K0.geometry,_0=h===null?K0.material:h,A0=K0.group;if(V0.layers.test(x.layers))I5(V0,v,x,E0,_0,A0)}}function I5(B,v,x,h,f,Q0){if(B.onBeforeRender(M,v,x,h,f,Q0),B.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),f.transparent===!0&&f.side===2&&f.forceSinglePass===!1)f.side=1,f.needsUpdate=!0,M.renderBufferDirect(x,v,h,f,B,Q0),f.side=0,f.needsUpdate=!0,M.renderBufferDirect(x,v,h,f,B,Q0),f.side=2;else M.renderBufferDirect(x,v,h,f,B,Q0);B.onAfterRender(M,v,x,h,f,Q0)}function $9(B,v,x){if(v.isScene!==!0)v=P0;let h=T0.get(B),f=R.state.lights,Q0=R.state.shadowsArray,K0=f.state.version,V0=r.getParameters(B,f.state,Q0,v,x),E0=r.getProgramCacheKey(V0),_0=h.programs;if(h.environment=B.isMeshStandardMaterial?v.environment:null,h.fog=v.fog,h.envMap=(B.isMeshStandardMaterial?_:$6).get(B.envMap||h.environment),h.envMapRotation=h.environment!==null&&B.envMap===null?v.environmentRotation:B.envMapRotation,_0===void 0)B.addEventListener("dispose",$0),_0=new Map,h.programs=_0;let A0=_0.get(E0);if(A0!==void 0){if(h.currentProgram===A0&&h.lightsStateVersion===K0)return P5(B,V0),A0}else V0.uniforms=r.getUniforms(B),B.onBeforeCompile(V0,M),A0=r.acquireProgram(V0,E0),_0.set(E0,A0),h.uniforms=V0.uniforms;let D0=h.uniforms;if(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)D0.clippingPlanes=Y0.uniform;if(P5(B,V0),h.needsLights=LZ(B),h.lightsStateVersion=K0,h.needsLights)D0.ambientLightColor.value=f.state.ambient,D0.lightProbe.value=f.state.probe,D0.directionalLights.value=f.state.directional,D0.directionalLightShadows.value=f.state.directionalShadow,D0.spotLights.value=f.state.spot,D0.spotLightShadows.value=f.state.spotShadow,D0.rectAreaLights.value=f.state.rectArea,D0.ltc_1.value=f.state.rectAreaLTC1,D0.ltc_2.value=f.state.rectAreaLTC2,D0.pointLights.value=f.state.point,D0.pointLightShadows.value=f.state.pointShadow,D0.hemisphereLights.value=f.state.hemi,D0.directionalShadowMap.value=f.state.directionalShadowMap,D0.directionalShadowMatrix.value=f.state.directionalShadowMatrix,D0.spotShadowMap.value=f.state.spotShadowMap,D0.spotLightMatrix.value=f.state.spotLightMatrix,D0.spotLightMap.value=f.state.spotLightMap,D0.pointShadowMap.value=f.state.pointShadowMap,D0.pointShadowMatrix.value=f.state.pointShadowMatrix;return h.currentProgram=A0,h.uniformsList=null,A0}function A5(B){if(B.uniformsList===null){let v=B.currentProgram.getUniforms();B.uniformsList=l8.seqWithValue(v.seq,B.uniforms)}return B.uniformsList}function P5(B,v){let x=T0.get(B);x.outputColorSpace=v.outputColorSpace,x.batching=v.batching,x.batchingColor=v.batchingColor,x.instancing=v.instancing,x.instancingColor=v.instancingColor,x.instancingMorph=v.instancingMorph,x.skinning=v.skinning,x.morphTargets=v.morphTargets,x.morphNormals=v.morphNormals,x.morphColors=v.morphColors,x.morphTargetsCount=v.morphTargetsCount,x.numClippingPlanes=v.numClippingPlanes,x.numIntersection=v.numClipIntersection,x.vertexAlphas=v.vertexAlphas,x.vertexTangents=v.vertexTangents,x.toneMapping=v.toneMapping}function MZ(B,v,x,h,f){if(v.isScene!==!0)v=P0;S0.resetTextureUnits();let Q0=v.fog,K0=h.isMeshStandardMaterial?v.environment:null,V0=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:"srgb-linear",E0=(h.isMeshStandardMaterial?_:$6).get(h.envMap||K0),_0=h.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,A0=!!x.attributes.tangent&&(!!h.normalMap||h.anisotropy>0),D0=!!x.morphAttributes.position,n0=!!x.morphAttributes.normal,Y6=!!x.morphAttributes.color,X6=0;if(h.toneMapped){if(L===null||L.isXRRenderTarget===!0)X6=M.toneMapping}let T6=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,s0=T6!==void 0?T6.length:0,R0=T0.get(h),M6=R.state.lights;if(o===!0){if(Z0===!0||B!==b){let x6=B===b&&h.id===S;Y0.setState(h,B,x6)}}let o0=!1;if(h.version===R0.__version){if(R0.needsLights&&R0.lightsStateVersion!==M6.state.version)o0=!0;else if(R0.outputColorSpace!==V0)o0=!0;else if(f.isBatchedMesh&&R0.batching===!1)o0=!0;else if(!f.isBatchedMesh&&R0.batching===!0)o0=!0;else if(f.isBatchedMesh&&R0.batchingColor===!0&&f.colorTexture===null)o0=!0;else if(f.isBatchedMesh&&R0.batchingColor===!1&&f.colorTexture!==null)o0=!0;else if(f.isInstancedMesh&&R0.instancing===!1)o0=!0;else if(!f.isInstancedMesh&&R0.instancing===!0)o0=!0;else if(f.isSkinnedMesh&&R0.skinning===!1)o0=!0;else if(!f.isSkinnedMesh&&R0.skinning===!0)o0=!0;else if(f.isInstancedMesh&&R0.instancingColor===!0&&f.instanceColor===null)o0=!0;else if(f.isInstancedMesh&&R0.instancingColor===!1&&f.instanceColor!==null)o0=!0;else if(f.isInstancedMesh&&R0.instancingMorph===!0&&f.morphTexture===null)o0=!0;else if(f.isInstancedMesh&&R0.instancingMorph===!1&&f.morphTexture!==null)o0=!0;else if(R0.envMap!==E0)o0=!0;else if(h.fog===!0&&R0.fog!==Q0)o0=!0;else if(R0.numClippingPlanes!==void 0&&(R0.numClippingPlanes!==Y0.numPlanes||R0.numIntersection!==Y0.numIntersection))o0=!0;else if(R0.vertexAlphas!==_0)o0=!0;else if(R0.vertexTangents!==A0)o0=!0;else if(R0.morphTargets!==D0)o0=!0;else if(R0.morphNormals!==n0)o0=!0;else if(R0.morphColors!==Y6)o0=!0;else if(R0.toneMapping!==X6)o0=!0;else if(R0.morphTargetsCount!==s0)o0=!0}else o0=!0,R0.__version=h.version;let d6=R0.currentProgram;if(o0===!0)d6=$9(h,v,f);let Z8=!1,S6=!1,r9=!1,U6=d6.getUniforms(),M7=R0.uniforms;if(L0.useProgram(d6.program))Z8=!0,S6=!0,r9=!0;if(h.id!==S)S=h.id,S6=!0;if(Z8||b!==B){U6.setValue(T,"projectionMatrix",B.projectionMatrix),U6.setValue(T,"viewMatrix",B.matrixWorldInverse);let x6=U6.map.cameraPosition;if(x6!==void 0)x6.setValue(T,M0.setFromMatrixPosition(B.matrixWorld));if(e0.logarithmicDepthBuffer)U6.setValue(T,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2));if(h.isMeshPhongMaterial||h.isMeshToonMaterial||h.isMeshLambertMaterial||h.isMeshBasicMaterial||h.isMeshStandardMaterial||h.isShaderMaterial)U6.setValue(T,"isOrthographic",B.isOrthographicCamera===!0);if(b!==B)b=B,S6=!0,r9=!0}if(f.isSkinnedMesh){U6.setOptional(T,f,"bindMatrix"),U6.setOptional(T,f,"bindMatrixInverse");let x6=f.skeleton;if(x6){if(x6.boneTexture===null)x6.computeBoneTexture();U6.setValue(T,"boneTexture",x6.boneTexture,S0)}}if(f.isBatchedMesh){if(U6.setOptional(T,f,"batchingTexture"),U6.setValue(T,"batchingTexture",f._matricesTexture,S0),U6.setOptional(T,f,"batchingIdTexture"),U6.setValue(T,"batchingIdTexture",f._indirectTexture,S0),U6.setOptional(T,f,"batchingColorTexture"),f._colorsTexture!==null)U6.setValue(T,"batchingColorTexture",f._colorsTexture,S0)}let t9=x.morphAttributes;if(t9.position!==void 0||t9.normal!==void 0||t9.color!==void 0)N0.update(f,x,d6);if(S6||R0.receiveShadow!==f.receiveShadow)R0.receiveShadow=f.receiveShadow,U6.setValue(T,"receiveShadow",f.receiveShadow);if(h.isMeshGouraudMaterial&&h.envMap!==null)M7.envMap.value=E0,M7.flipEnvMap.value=E0.isCubeTexture&&E0.isRenderTargetTexture===!1?-1:1;if(h.isMeshStandardMaterial&&h.envMap===null&&v.environment!==null)M7.envMapIntensity.value=v.environmentIntensity;if(S6){if(U6.setValue(T,"toneMappingExposure",M.toneMappingExposure),R0.needsLights)kZ(M7,r9);if(Q0&&h.fog===!0)t.refreshFogUniforms(M7,Q0);t.refreshMaterialUniforms(M7,h,l,s,R.state.transmissionRenderTarget[B.id]),l8.upload(T,A5(R0),M7,S0)}if(h.isShaderMaterial&&h.uniformsNeedUpdate===!0)l8.upload(T,A5(R0),M7,S0),h.uniformsNeedUpdate=!1;if(h.isSpriteMaterial)U6.setValue(T,"center",f.center);if(U6.setValue(T,"modelViewMatrix",f.modelViewMatrix),U6.setValue(T,"normalMatrix",f.normalMatrix),U6.setValue(T,"modelMatrix",f.matrixWorld),h.isShaderMaterial||h.isRawShaderMaterial){let x6=h.uniformsGroups;for(let e9=0,DZ=x6.length;e9<DZ;e9++){let T5=x6[e9];m0.update(T5,d6),m0.bind(T5,d6)}}return d6}function kZ(B,v){B.ambientLightColor.needsUpdate=v,B.lightProbe.needsUpdate=v,B.directionalLights.needsUpdate=v,B.directionalLightShadows.needsUpdate=v,B.pointLights.needsUpdate=v,B.pointLightShadows.needsUpdate=v,B.spotLights.needsUpdate=v,B.spotLightShadows.needsUpdate=v,B.rectAreaLights.needsUpdate=v,B.hemisphereLights.needsUpdate=v}function LZ(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}if(this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(B,v,x){T0.get(B.texture).__webglTexture=v,T0.get(B.depthTexture).__webglTexture=x;let h=T0.get(B);if(h.__hasExternalTextures=!0,h.__autoAllocateDepthBuffer=x===void 0,!h.__autoAllocateDepthBuffer){if(g0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),h.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(B,v){let x=T0.get(B);x.__webglFramebuffer=v,x.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(B,v=0,x=0){L=B,I=v,y=x;let h=!0,f=null,Q0=!1,K0=!1;if(B){let E0=T0.get(B);if(E0.__useDefaultFramebuffer!==void 0)L0.bindFramebuffer(T.FRAMEBUFFER,null),h=!1;else if(E0.__webglFramebuffer===void 0)S0.setupRenderTarget(B);else if(E0.__hasExternalTextures)S0.rebindTextures(B,T0.get(B.texture).__webglTexture,T0.get(B.depthTexture).__webglTexture);let _0=B.texture;if(_0.isData3DTexture||_0.isDataArrayTexture||_0.isCompressedArrayTexture)K0=!0;let A0=T0.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget){if(Array.isArray(A0[v]))f=A0[v][x];else f=A0[v];Q0=!0}else if(B.samples>0&&S0.useMultisampledRTT(B)===!1)f=T0.get(B).__webglMultisampledFramebuffer;else if(Array.isArray(A0))f=A0[x];else f=A0;D.copy(B.viewport),k.copy(B.scissor),j=B.scissorTest}else D.copy(q0).multiplyScalar(l).floor(),k.copy(F0).multiplyScalar(l).floor(),j=C0;if(L0.bindFramebuffer(T.FRAMEBUFFER,f)&&h)L0.drawBuffers(B,f);if(L0.viewport(D),L0.scissor(k),L0.setScissorTest(j),Q0){let E0=T0.get(B.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+v,E0.__webglTexture,x)}else if(K0){let E0=T0.get(B.texture),_0=v||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,E0.__webglTexture,x||0,_0)}S=-1},this.readRenderTargetPixels=function(B,v,x,h,f,Q0,K0){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V0=T0.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&K0!==void 0)V0=V0[K0];if(V0){L0.bindFramebuffer(T.FRAMEBUFFER,V0);try{let E0=B.texture,_0=E0.format,A0=E0.type;if(!e0.textureFormatReadable(_0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!e0.textureTypeReadable(A0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=B.width-h&&(x>=0&&x<=B.height-f))T.readPixels(v,x,h,f,X0.convert(_0),X0.convert(A0),Q0)}finally{let E0=L!==null?T0.get(L).__webglFramebuffer:null;L0.bindFramebuffer(T.FRAMEBUFFER,E0)}}},this.readRenderTargetPixelsAsync=async function(B,v,x,h,f,Q0,K0){if(!(B&&B.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V0=T0.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&K0!==void 0)V0=V0[K0];if(V0){L0.bindFramebuffer(T.FRAMEBUFFER,V0);try{let E0=B.texture,_0=E0.format,A0=E0.type;if(!e0.textureFormatReadable(_0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!e0.textureTypeReadable(A0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(v>=0&&v<=B.width-h&&(x>=0&&x<=B.height-f)){let D0=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,D0),T.bufferData(T.PIXEL_PACK_BUFFER,Q0.byteLength,T.STREAM_READ),T.readPixels(v,x,h,f,X0.convert(_0),X0.convert(A0),0),T.flush();let n0=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await uZ(T,n0,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,D0),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Q0)}finally{T.deleteBuffer(D0),T.deleteSync(n0)}return Q0}}finally{let E0=L!==null?T0.get(L).__webglFramebuffer:null;L0.bindFramebuffer(T.FRAMEBUFFER,E0)}}},this.copyFramebufferToTexture=function(B,v=null,x=0){if(B.isTexture!==!0)console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),v=arguments[0]||null,B=arguments[1];let h=Math.pow(2,-x),f=Math.floor(B.image.width*h),Q0=Math.floor(B.image.height*h),K0=v!==null?v.x:0,V0=v!==null?v.y:0;S0.setTexture2D(B,0),T.copyTexSubImage2D(T.TEXTURE_2D,x,0,0,K0,V0,f,Q0),L0.unbindTexture()},this.copyTextureToTexture=function(B,v,x=null,h=null,f=0){if(B.isTexture!==!0)console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),h=arguments[0]||null,B=arguments[1],v=arguments[2],f=arguments[3]||0,x=null;let Q0,K0,V0,E0,_0,A0;if(x!==null)Q0=x.max.x-x.min.x,K0=x.max.y-x.min.y,V0=x.min.x,E0=x.min.y;else Q0=B.image.width,K0=B.image.height,V0=0,E0=0;if(h!==null)_0=h.x,A0=h.y;else _0=0,A0=0;let D0=X0.convert(v.format),n0=X0.convert(v.type);S0.setTexture2D(v,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,v.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,v.unpackAlignment);let Y6=T.getParameter(T.UNPACK_ROW_LENGTH),X6=T.getParameter(T.UNPACK_IMAGE_HEIGHT),T6=T.getParameter(T.UNPACK_SKIP_PIXELS),s0=T.getParameter(T.UNPACK_SKIP_ROWS),R0=T.getParameter(T.UNPACK_SKIP_IMAGES),M6=B.isCompressedTexture?B.mipmaps[f]:B.image;if(T.pixelStorei(T.UNPACK_ROW_LENGTH,M6.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,M6.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,V0),T.pixelStorei(T.UNPACK_SKIP_ROWS,E0),B.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,f,_0,A0,Q0,K0,D0,n0,M6.data);else if(B.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,f,_0,A0,M6.width,M6.height,D0,M6.data);else T.texSubImage2D(T.TEXTURE_2D,f,_0,A0,Q0,K0,D0,n0,M6);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,Y6),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,X6),T.pixelStorei(T.UNPACK_SKIP_PIXELS,T6),T.pixelStorei(T.UNPACK_SKIP_ROWS,s0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,R0),f===0&&v.generateMipmaps)T.generateMipmap(T.TEXTURE_2D);L0.unbindTexture()},this.copyTextureToTexture3D=function(B,v,x=null,h=null,f=0){if(B.isTexture!==!0)console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),x=arguments[0]||null,h=arguments[1]||null,B=arguments[2],v=arguments[3],f=arguments[4]||0;let Q0,K0,V0,E0,_0,A0,D0,n0,Y6,X6=B.isCompressedTexture?B.mipmaps[f]:B.image;if(x!==null)Q0=x.max.x-x.min.x,K0=x.max.y-x.min.y,V0=x.max.z-x.min.z,E0=x.min.x,_0=x.min.y,A0=x.min.z;else Q0=X6.width,K0=X6.height,V0=X6.depth,E0=0,_0=0,A0=0;if(h!==null)D0=h.x,n0=h.y,Y6=h.z;else D0=0,n0=0,Y6=0;let T6=X0.convert(v.format),s0=X0.convert(v.type),R0;if(v.isData3DTexture)S0.setTexture3D(v,0),R0=T.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)S0.setTexture2DArray(v,0),R0=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,v.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,v.unpackAlignment);let M6=T.getParameter(T.UNPACK_ROW_LENGTH),o0=T.getParameter(T.UNPACK_IMAGE_HEIGHT),d6=T.getParameter(T.UNPACK_SKIP_PIXELS),Z8=T.getParameter(T.UNPACK_SKIP_ROWS),S6=T.getParameter(T.UNPACK_SKIP_IMAGES);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,X6.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,X6.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,E0),T.pixelStorei(T.UNPACK_SKIP_ROWS,_0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,A0),B.isDataTexture||B.isData3DTexture)T.texSubImage3D(R0,f,D0,n0,Y6,Q0,K0,V0,T6,s0,X6.data);else if(v.isCompressedArrayTexture)T.compressedTexSubImage3D(R0,f,D0,n0,Y6,Q0,K0,V0,T6,X6.data);else T.texSubImage3D(R0,f,D0,n0,Y6,Q0,K0,V0,T6,s0,X6);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,M6),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,o0),T.pixelStorei(T.UNPACK_SKIP_PIXELS,d6),T.pixelStorei(T.UNPACK_SKIP_ROWS,Z8),T.pixelStorei(T.UNPACK_SKIP_IMAGES,S6),f===0&&v.generateMipmaps)T.generateMipmap(R0);L0.unbindTexture()},this.initRenderTarget=function(B){if(T0.get(B).__webglFramebuffer===void 0)S0.setupRenderTarget(B)},this.initTexture=function(B){if(B.isCubeTexture)S0.setTextureCube(B,0);else if(B.isData3DTexture)S0.setTexture3D(B,0);else if(B.isDataArrayTexture||B.isCompressedArrayTexture)S0.setTexture2DArray(B,0);else S0.setTexture2D(B,0);L0.unbindTexture()},this.resetState=function(){I=0,y=0,L=null,L0.reset(),I0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let $=this.getContext();$.drawingBufferColorSpace=J==="display-p3"?"display-p3":"srgb",$.unpackColorSpace=c0.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}}class oJ extends J6{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new r6,this.environmentIntensity=1,this.environmentRotation=new r6,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,$){if(super.copy(J,$),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let $=super.toJSON(J);if(this.fog!==null)$.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)$.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)$.object.backgroundIntensity=this.backgroundIntensity;if($.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)$.object.environmentIntensity=this.environmentIntensity;return $.object.environmentRotation=this.environmentRotation.toArray(),$}}class m9{constructor(J,$){this.isInterleavedBuffer=!0,this.array=J,this.stride=$,this.count=J!==void 0?J.length/$:0,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=a6()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}get updateRange(){return hJ("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,$,Q){J*=this.stride,Q*=$.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=$.array[Q+Z];return this}set(J,$=0){return this.array.set(J,$),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=a6();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let $=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Q=new this.constructor($,this.stride);return Q.setUsage(this.usage),Q}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=a6();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var I6=new P;class o8{constructor(J,$,Q,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=$,this.offset=Q,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let $=0,Q=this.data.count;$<Q;$++)I6.fromBufferAttribute(this,$),I6.applyMatrix4(J),this.setXYZ($,I6.x,I6.y,I6.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)I6.fromBufferAttribute(this,$),I6.applyNormalMatrix(J),this.setXYZ($,I6.x,I6.y,I6.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)I6.fromBufferAttribute(this,$),I6.transformDirection(J),this.setXYZ($,I6.x,I6.y,I6.z);return this}getComponent(J,$){let Q=this.array[J*this.data.stride+this.offset+$];if(this.normalized)Q=o6(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+$]=Q,this}setX(J,$){if(this.normalized)$=a0($,this.array);return this.data.array[J*this.data.stride+this.offset]=$,this}setY(J,$){if(this.normalized)$=a0($,this.array);return this.data.array[J*this.data.stride+this.offset+1]=$,this}setZ(J,$){if(this.normalized)$=a0($,this.array);return this.data.array[J*this.data.stride+this.offset+2]=$,this}setW(J,$){if(this.normalized)$=a0($,this.array);return this.data.array[J*this.data.stride+this.offset+3]=$,this}getX(J){let $=this.data.array[J*this.data.stride+this.offset];if(this.normalized)$=o6($,this.array);return $}getY(J){let $=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)$=o6($,this.array);return $}getZ(J){let $=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)$=o6($,this.array);return $}getW(J){let $=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)$=o6($,this.array);return $}setXY(J,$,Q){if(J=J*this.data.stride+this.offset,this.normalized)$=a0($,this.array),Q=a0(Q,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)$=a0($,this.array),Q=a0(Q,this.array),Z=a0(Z,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this}setXYZW(J,$,Q,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)$=a0($,this.array),Q=a0(Q,this.array),Z=a0(Z,this.array),W=a0(W,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)$.push(this.data.array[Z+W])}return new H6(new this.array.constructor($),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new o8(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)$.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:$,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var M$=new P,k$=new r0,L$=new r0,v4=new P,D$=new y0,D9=new P,CJ=new b6,C$=new y0,wJ=new n7;class iJ extends V6{constructor(J,$){super(J,$);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new y0,this.bindMatrixInverse=new y0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new f6;this.boundingBox.makeEmpty();let $=J.getAttribute("position");for(let Q=0;Q<$.count;Q++)this.getVertexPosition(Q,D9),this.boundingBox.expandByPoint(D9)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new b6;this.boundingSphere.makeEmpty();let $=J.getAttribute("position");for(let Q=0;Q<$.count;Q++)this.getVertexPosition(Q,D9),this.boundingSphere.expandByPoint(D9)}copy(J,$){if(super.copy(J,$),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,$){let Q=this.material,Z=this.matrixWorld;if(Q===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(CJ.copy(this.boundingSphere),CJ.applyMatrix4(Z),J.ray.intersectsSphere(CJ)===!1)return;if(C$.copy(Z).invert(),wJ.copy(J.ray).applyMatrix4(C$),this.boundingBox!==null){if(wJ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,$,wJ)}getVertexPosition(J,$){return super.getVertexPosition(J,$),this.applyBoneTransform(J,$),$}bind(J,$){if(this.skeleton=J,$===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),$=this.matrixWorld;this.bindMatrix.copy($),this.bindMatrixInverse.copy($).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new r0,$=this.geometry.attributes.skinWeight;for(let Q=0,Z=$.count;Q<Z;Q++){J.fromBufferAttribute($,Q);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);$.setXYZW(Q,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,$){let Q=this.skeleton,Z=this.geometry;k$.fromBufferAttribute(Z.attributes.skinIndex,J),L$.fromBufferAttribute(Z.attributes.skinWeight,J),M$.copy($).applyMatrix4(this.bindMatrix),$.set(0,0,0);for(let W=0;W<4;W++){let Y=L$.getComponent(W);if(Y!==0){let X=k$.getComponent(W);D$.multiplyMatrices(Q.bones[X].matrixWorld,Q.boneInverses[X]),$.addScaledVector(v4.copy(M$).applyMatrix4(D$),Y)}}return $.applyMatrix4(this.bindMatrixInverse)}}class l9 extends J6{constructor(){super();this.isBone=!0,this.type="Bone"}}class aJ extends E6{constructor(J=null,$=1,Q=1,Z,W,Y,X,H,K=1003,q=1003,G,U){super(null,Y,X,H,K,q,Z,W,G,U);this.isDataTexture=!0,this.image={data:J,width:$,height:Q},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var w$=new y0,f4=new y0;class d9{constructor(J=[],$=[]){this.uuid=a6(),this.bones=J.slice(0),this.boneInverses=$,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,$=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),$.length===0)this.calculateInverses();else if(J.length!==$.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Q=0,Z=this.bones.length;Q<Z;Q++)this.boneInverses.push(new y0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,$=this.bones.length;J<$;J++){let Q=new y0;if(this.bones[J])Q.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push(Q)}}pose(){for(let J=0,$=this.bones.length;J<$;J++){let Q=this.bones[J];if(Q)Q.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,$=this.bones.length;J<$;J++){let Q=this.bones[J];if(Q){if(Q.parent&&Q.parent.isBone)Q.matrix.copy(Q.parent.matrixWorld).invert(),Q.matrix.multiply(Q.matrixWorld);else Q.matrix.copy(Q.matrixWorld);Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)}}}update(){let J=this.bones,$=this.boneInverses,Q=this.boneMatrices,Z=this.boneTexture;for(let W=0,Y=J.length;W<Y;W++){let X=J[W]?J[W].matrixWorld:f4;w$.multiplyMatrices(X,$[W]),w$.toArray(Q,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new d9(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let $=new Float32Array(J*J*4);$.set(this.boneMatrices);let Q=new aJ($,J,J,1023,1015);return Q.needsUpdate=!0,this.boneMatrices=$,this.boneTexture=Q,this}getBoneByName(J){for(let $=0,Q=this.bones.length;$<Q;$++){let Z=this.bones[$];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,$){this.uuid=J.uuid;for(let Q=0,Z=J.bones.length;Q<Z;Q++){let W=J.bones[Q],Y=$[W];if(Y===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),Y=new l9;this.bones.push(Y),this.boneInverses.push(new y0().fromArray(J.boneInverses[Q]))}return this.init(),this}toJSON(){let J={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let $=this.bones,Q=this.boneInverses;for(let Z=0,W=$.length;Z<W;Z++){let Y=$[Z];J.bones.push(Y.uuid);let X=Q[Z];J.boneInverses.push(X.toArray())}return J}}class _8 extends H6{constructor(J,$,Q,Z=1){super(J,$,Q);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var M8=new y0,_$=new y0,C9=[],I$=new f6,x4=new y0,h8=new V6,b8=new b6;class rJ extends V6{constructor(J,$,Q){super(J,$);this.isInstancedMesh=!0,this.instanceMatrix=new _8(new Float32Array(Q*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Q,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<Q;Z++)this.setMatrixAt(Z,x4)}computeBoundingBox(){let J=this.geometry,$=this.count;if(this.boundingBox===null)this.boundingBox=new f6;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Q=0;Q<$;Q++)this.getMatrixAt(Q,M8),I$.copy(J.boundingBox).applyMatrix4(M8),this.boundingBox.union(I$)}computeBoundingSphere(){let J=this.geometry,$=this.count;if(this.boundingSphere===null)this.boundingSphere=new b6;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Q=0;Q<$;Q++)this.getMatrixAt(Q,M8),b8.copy(J.boundingSphere).applyMatrix4(M8),this.boundingSphere.union(b8)}copy(J,$){if(super.copy(J,$),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,$){$.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,$){$.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,$){let Q=$.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=Q.length+1,Y=J*W+1;for(let X=0;X<Q.length;X++)Q[X]=Z[Y+X]}raycast(J,$){let Q=this.matrixWorld,Z=this.count;if(h8.geometry=this.geometry,h8.material=this.material,h8.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(b8.copy(this.boundingSphere),b8.applyMatrix4(Q),J.ray.intersectsSphere(b8)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,M8),_$.multiplyMatrices(Q,M8),h8.matrixWorld=_$,h8.raycast(J,C9);for(let Y=0,X=C9.length;Y<X;Y++){let H=C9[Y];H.instanceId=W,H.object=this,$.push(H)}C9.length=0}}setColorAt(J,$){if(this.instanceColor===null)this.instanceColor=new _8(new Float32Array(this.instanceMatrix.count*3),3);$.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,$){$.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,$){let Q=$.morphTargetInfluences,Z=Q.length+1;if(this.morphTexture===null)this.morphTexture=new aJ(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,Y=0;for(let K=0;K<Q.length;K++)Y+=Q[K];let X=this.geometry.morphTargetsRelative?1:1-Y,H=Z*J;W[H]=X,W.set(Q,H+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null;return this}}class g6 extends _6{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new z0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var v9=new P,f9=new P,A$=new y0,g8=new n7,w9=new b6,_J=new P,P$=new P;class s7 extends J6{constructor(J=new K6,$=new g6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=$,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[0];for(let Z=1,W=$.count;Z<W;Z++)v9.fromBufferAttribute($,Z-1),f9.fromBufferAttribute($,Z),Q[Z]=Q[Z-1],Q[Z]+=v9.distanceTo(f9);J.setAttribute("lineDistance",new Q6(Q,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,Y=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(w9.copy(Q.boundingSphere),w9.applyMatrix4(Z),w9.radius+=W,J.ray.intersectsSphere(w9)===!1)return;A$.copy(Z).invert(),g8.copy(J.ray).applyMatrix4(A$);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=X*X,K=this.isLineSegments?2:1,q=Q.index,U=Q.attributes.position;if(q!==null){let F=Math.max(0,Y.start),O=Math.min(q.count,Y.start+Y.count);for(let N=F,R=O-1;N<R;N+=K){let V=q.getX(N),E=q.getX(N+1),M=_9(this,J,g8,H,V,E);if(M)$.push(M)}if(this.isLineLoop){let N=q.getX(O-1),R=q.getX(F),V=_9(this,J,g8,H,N,R);if(V)$.push(V)}}else{let F=Math.max(0,Y.start),O=Math.min(U.count,Y.start+Y.count);for(let N=F,R=O-1;N<R;N+=K){let V=_9(this,J,g8,H,N,N+1);if(V)$.push(V)}if(this.isLineLoop){let N=_9(this,J,g8,H,O-1,F);if(N)$.push(N)}}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Y=Z.length;W<Y;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function _9(J,$,Q,Z,W,Y){let X=J.geometry.attributes.position;if(v9.fromBufferAttribute(X,W),f9.fromBufferAttribute(X,Y),Q.distanceSqToSegment(v9,f9,_J,P$)>Z)return;_J.applyMatrix4(J.matrixWorld);let K=$.ray.origin.distanceTo(_J);if(K<$.near||K>$.far)return;return{distance:K,point:P$.clone().applyMatrix4(J.matrixWorld),index:W,face:null,faceIndex:null,object:J}}var T$=new P,S$=new P;class O7 extends s7{constructor(J,$){super(J,$);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[];for(let Z=0,W=$.count;Z<W;Z+=2)T$.fromBufferAttribute($,Z),S$.fromBufferAttribute($,Z+1),Q[Z]=Z===0?0:Q[Z-1],Q[Z+1]=Q[Z]+T$.distanceTo(S$);J.setAttribute("lineDistance",new Q6(Q,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tJ extends s7{constructor(J,$){super(J,$);this.isLineLoop=!0,this.type="LineLoop"}}class N7 extends _6{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new z0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var j$=new y0,jJ=new n7,I9=new b6,A9=new P;class o7 extends J6{constructor(J=new K6,$=new N7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=$,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,Y=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(I9.copy(Q.boundingSphere),I9.applyMatrix4(Z),I9.radius+=W,J.ray.intersectsSphere(I9)===!1)return;j$.copy(Z).invert(),jJ.copy(J.ray).applyMatrix4(j$);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=X*X,K=Q.index,G=Q.attributes.position;if(K!==null){let U=Math.max(0,Y.start),F=Math.min(K.count,Y.start+Y.count);for(let O=U,N=F;O<N;O++){let R=K.getX(O);A9.fromBufferAttribute(G,R),y$(A9,R,H,Z,J,$,this)}}else{let U=Math.max(0,Y.start),F=Math.min(G.count,Y.start+Y.count);for(let O=U,N=F;O<N;O++)A9.fromBufferAttribute(G,O),y$(A9,O,H,Z,J,$,this)}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Y=Z.length;W<Y;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function y$(J,$,Q,Z,W,Y,X){let H=jJ.distanceSqToPoint(J);if(H<Q){let K=new P;jJ.closestPointToPoint(J,K),K.applyMatrix4(Z);let q=W.ray.origin.distanceTo(K);if(q<W.near||q>W.far)return;Y.push({distance:q,distanceToRay:Math.sqrt(H),point:K,index:$,face:null,object:X})}}var P9=new P,T9=new P,IJ=new P,S9=new i6;class eJ extends K6{constructor(J=null,$=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:J,thresholdAngle:$},J!==null){let Z=Math.pow(10,4),W=Math.cos(L8*$),Y=J.getIndex(),X=J.getAttribute("position"),H=Y?Y.count:X.count,K=[0,0,0],q=["a","b","c"],G=[,,,],U={},F=[];for(let O=0;O<H;O+=3){if(Y)K[0]=Y.getX(O),K[1]=Y.getX(O+1),K[2]=Y.getX(O+2);else K[0]=O,K[1]=O+1,K[2]=O+2;let{a:N,b:R,c:V}=S9;if(N.fromBufferAttribute(X,K[0]),R.fromBufferAttribute(X,K[1]),V.fromBufferAttribute(X,K[2]),S9.getNormal(IJ),G[0]=`${Math.round(N.x*Z)},${Math.round(N.y*Z)},${Math.round(N.z*Z)}`,G[1]=`${Math.round(R.x*Z)},${Math.round(R.y*Z)},${Math.round(R.z*Z)}`,G[2]=`${Math.round(V.x*Z)},${Math.round(V.y*Z)},${Math.round(V.z*Z)}`,G[0]===G[1]||G[1]===G[2]||G[2]===G[0])continue;for(let E=0;E<3;E++){let M=(E+1)%3,C=G[E],I=G[M],y=S9[q[E]],L=S9[q[M]],S=`${C}_${I}`,b=`${I}_${C}`;if(b in U&&U[b]){if(IJ.dot(U[b].normal)<=W)F.push(y.x,y.y,y.z),F.push(L.x,L.y,L.z);U[b]=null}else if(!(S in U))U[S]={index0:K[E],index1:K[M],normal:IJ.clone()}}}for(let O in U)if(U[O]){let{index0:N,index1:R}=U[O];P9.fromBufferAttribute(X,N),T9.fromBufferAttribute(X,R),F.push(P9.x,P9.y,P9.z),F.push(T9.x,T9.y,T9.z)}this.setAttribute("position",new Q6(F,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}class i7 extends _6{constructor(J){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new z0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new z0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new k0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new r6,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class p6 extends i7{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new k0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return k6(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function($){this.ior=(1+0.4*$)/(1-0.4*$)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new z0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new z0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new z0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class J5 extends _6{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new z0(16777215),this.specular=new z0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new z0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new k0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new r6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}function j9(J,$,Q){if(!J||!Q&&J.constructor===$)return J;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(J);return Array.prototype.slice.call(J)}function h4(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function b4(J){function $(W,Y){return J[W]-J[Y]}let Q=J.length,Z=Array(Q);for(let W=0;W!==Q;++W)Z[W]=W;return Z.sort($),Z}function v$(J,$,Q){let Z=J.length,W=new J.constructor(Z);for(let Y=0,X=0;X!==Z;++Y){let H=Q[Y]*$;for(let K=0;K!==$;++K)W[X++]=J[H+K]}return W}function zQ(J,$,Q,Z){let W=1,Y=J[0];while(Y!==void 0&&Y[Z]===void 0)Y=J[W++];if(Y===void 0)return;let X=Y[Z];if(X===void 0)return;if(Array.isArray(X))do{if(X=Y[Z],X!==void 0)$.push(Y.time),Q.push.apply(Q,X);Y=J[W++]}while(Y!==void 0);else if(X.toArray!==void 0)do{if(X=Y[Z],X!==void 0)$.push(Y.time),X.toArray(Q,Q.length);Y=J[W++]}while(Y!==void 0);else do{if(X=Y[Z],X!==void 0)$.push(Y.time),Q.push(X);Y=J[W++]}while(Y!==void 0)}class a7{constructor(J,$,Q,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new $.constructor(Q),this.sampleValues=$,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate(J){let $=this.parameterPositions,Q=this._cachedIndex,Z=$[Q],W=$[Q-1];Q:{J:{let Y;$:{Z:if(!(J<Z)){for(let X=Q+2;;){if(Z===void 0){if(J<W)break Z;return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===X)break;if(W=Z,Z=$[++Q],J<Z)break J}Y=$.length;break $}if(!(J>=W)){let X=$[1];if(J<X)Q=2,W=X;for(let H=Q-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===H)break;if(Z=W,W=$[--Q-1],J>=W)break J}Y=Q,Q=0;break $}break Q}while(Q<Y){let X=Q+Y>>>1;if(J<$[X])Y=X;else Q=X+1}if(Z=$[Q],W=$[Q-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,W,Z)}return this.interpolate_(Q,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,W=J*Z;for(let Y=0;Y!==Z;++Y)$[Y]=Q[W+Y];return $}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class BQ extends a7{constructor(J,$,Q,Z){super(J,$,Q,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,$,Q){let Z=this.parameterPositions,W=J-2,Y=J+1,X=Z[W],H=Z[Y];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,X=2*$-Q;break;case 2402:W=Z.length-2,X=$+Z[W]-Z[W+1];break;default:W=J,X=Q}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:Y=J,H=2*Q-$;break;case 2402:Y=1,H=Q+Z[1]-Z[0];break;default:Y=J-1,H=$}let K=(Q-$)*0.5,q=this.valueSize;this._weightPrev=K/($-X),this._weightNext=K/(H-Q),this._offsetPrev=W*q,this._offsetNext=Y*q}interpolate_(J,$,Q,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,H=J*X,K=H-X,q=this._offsetPrev,G=this._offsetNext,U=this._weightPrev,F=this._weightNext,O=(Q-$)/(Z-$),N=O*O,R=N*O,V=-U*R+2*U*N-U*O,E=(1+U)*R+(-1.5-2*U)*N+(-0.5+U)*O+1,M=(-1-F)*R+(1.5+F)*N+0.5*O,C=F*R-F*N;for(let I=0;I!==X;++I)W[I]=V*Y[q+I]+E*Y[K+I]+M*Y[H+I]+C*Y[G+I];return W}}class MQ extends a7{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,H=J*X,K=H-X,q=(Q-$)/(Z-$),G=1-q;for(let U=0;U!==X;++U)W[U]=Y[K+U]*G+Y[H+U]*q;return W}}class kQ extends a7{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class t6{constructor(J,$,Q,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=j9($,this.TimeBufferType),this.values=j9(Q,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let $=J.constructor,Q;if($.toJSON!==this.toJSON)Q=$.toJSON(J);else{Q={name:J.name,times:j9(J.times,Array),values:j9(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)Q.interpolation=Z}return Q.type=J.ValueTypeName,Q}InterpolantFactoryMethodDiscrete(J){return new kQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new MQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new BQ(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let $;switch(J){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break}if($===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return console.warn("THREE.KeyframeTrack:",Q),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]+=J}return this}scale(J){if(J!==1){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]*=J}return this}trim(J,$){let Q=this.times,Z=Q.length,W=0,Y=Z-1;while(W!==Z&&Q[W]<J)++W;while(Y!==-1&&Q[Y]>$)--Y;if(++Y,W!==0||Y!==Z){if(W>=Y)Y=Math.max(Y,1),W=Y-1;let X=this.getValueSize();this.times=Q.slice(W,Y),this.values=this.values.slice(W*X,Y*X)}return this}validate(){let J=!0,$=this.getValueSize();if($-Math.floor($)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Q=this.times,Z=this.values,W=Q.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let Y=null;for(let X=0;X!==W;X++){let H=Q[X];if(typeof H==="number"&&isNaN(H)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,X,H),J=!1;break}if(Y!==null&&Y>H){console.error("THREE.KeyframeTrack: Out of order keys.",this,X,H,Y),J=!1;break}Y=H}if(Z!==void 0){if(h4(Z))for(let X=0,H=Z.length;X!==H;++X){let K=Z[X];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,X,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),$=this.values.slice(),Q=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,Y=1;for(let X=1;X<W;++X){let H=!1,K=J[X],q=J[X+1];if(K!==q&&(X!==1||K!==J[0]))if(!Z){let G=X*Q,U=G-Q,F=G+Q;for(let O=0;O!==Q;++O){let N=$[G+O];if(N!==$[U+O]||N!==$[F+O]){H=!0;break}}}else H=!0;if(H){if(X!==Y){J[Y]=J[X];let G=X*Q,U=Y*Q;for(let F=0;F!==Q;++F)$[U+F]=$[G+F]}++Y}}if(W>0){J[Y]=J[W];for(let X=W*Q,H=Y*Q,K=0;K!==Q;++K)$[H+K]=$[X+K];++Y}if(Y!==J.length)this.times=J.slice(0,Y),this.values=$.slice(0,Y*Q);else this.times=J,this.values=$;return this}clone(){let J=this.times.slice(),$=this.values.slice(),Z=new this.constructor(this.name,J,$);return Z.createInterpolant=this.createInterpolant,Z}}t6.prototype.TimeBufferType=Float32Array;t6.prototype.ValueBufferType=Float32Array;t6.prototype.DefaultInterpolation=2301;class r7 extends t6{constructor(J,$,Q){super(J,$,Q)}}r7.prototype.ValueTypeName="bool";r7.prototype.ValueBufferType=Array;r7.prototype.DefaultInterpolation=2300;r7.prototype.InterpolantFactoryMethodLinear=void 0;r7.prototype.InterpolantFactoryMethodSmooth=void 0;class $5 extends t6{}$5.prototype.ValueTypeName="color";class P7 extends t6{}P7.prototype.ValueTypeName="number";class LQ extends a7{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,H=(Q-$)/(Z-$),K=J*X;for(let q=K+X;K!==q;K+=4)v6.slerpFlat(W,0,Y,K-X,Y,K,H);return W}}class j7 extends t6{InterpolantFactoryMethodLinear(J){return new LQ(this.times,this.values,this.getValueSize(),J)}}j7.prototype.ValueTypeName="quaternion";j7.prototype.InterpolantFactoryMethodSmooth=void 0;class t7 extends t6{constructor(J,$,Q){super(J,$,Q)}}t7.prototype.ValueTypeName="string";t7.prototype.ValueBufferType=Array;t7.prototype.DefaultInterpolation=2300;t7.prototype.InterpolantFactoryMethodLinear=void 0;t7.prototype.InterpolantFactoryMethodSmooth=void 0;class T7 extends t6{}T7.prototype.ValueTypeName="vector";class Q5{constructor(J="",$=-1,Q=[],Z=2500){if(this.name=J,this.tracks=Q,this.duration=$,this.blendMode=Z,this.uuid=a6(),this.duration<0)this.resetDuration()}static parse(J){let $=[],Q=J.tracks,Z=1/(J.fps||1);for(let Y=0,X=Q.length;Y!==X;++Y)$.push(p4(Q[Y]).scale(Z));let W=new this(J.name,J.duration,$,J.blendMode);return W.uuid=J.uuid,W}static toJSON(J){let $=[],Q=J.tracks,Z={name:J.name,duration:J.duration,tracks:$,uuid:J.uuid,blendMode:J.blendMode};for(let W=0,Y=Q.length;W!==Y;++W)$.push(t6.toJSON(Q[W]));return Z}static CreateFromMorphTargetSequence(J,$,Q,Z){let W=$.length,Y=[];for(let X=0;X<W;X++){let H=[],K=[];H.push((X+W-1)%W,X,(X+1)%W),K.push(0,1,0);let q=b4(H);if(H=v$(H,1,q),K=v$(K,1,q),!Z&&H[0]===0)H.push(W),K.push(K[0]);Y.push(new P7(".morphTargetInfluences["+$[X].name+"]",H,K).scale(1/Q))}return new this(J,-1,Y)}static findByName(J,$){let Q=J;if(!Array.isArray(J)){let Z=J;Q=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<Q.length;Z++)if(Q[Z].name===$)return Q[Z];return null}static CreateClipsFromMorphTargetSequences(J,$,Q){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let X=0,H=J.length;X<H;X++){let K=J[X],q=K.name.match(W);if(q&&q.length>1){let G=q[1],U=Z[G];if(!U)Z[G]=U=[];U.push(K)}}let Y=[];for(let X in Z)Y.push(this.CreateFromMorphTargetSequence(X,Z[X],$,Q));return Y}static parseAnimation(J,$){if(!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let Q=function(G,U,F,O,N){if(F.length!==0){let R=[],V=[];if(zQ(F,R,V,O),R.length!==0)N.push(new G(U,R,V))}},Z=[],W=J.name||"default",Y=J.fps||30,X=J.blendMode,H=J.length||-1,K=J.hierarchy||[];for(let G=0;G<K.length;G++){let U=K[G].keys;if(!U||U.length===0)continue;if(U[0].morphTargets){let F={},O;for(O=0;O<U.length;O++)if(U[O].morphTargets)for(let N=0;N<U[O].morphTargets.length;N++)F[U[O].morphTargets[N]]=-1;for(let N in F){let R=[],V=[];for(let E=0;E!==U[O].morphTargets.length;++E){let M=U[O];R.push(M.time),V.push(M.morphTarget===N?1:0)}Z.push(new P7(".morphTargetInfluence["+N+"]",R,V))}H=F.length*Y}else{let F=".bones["+$[G].name+"]";Q(T7,F+".position",U,"pos",Z),Q(j7,F+".quaternion",U,"rot",Z),Q(T7,F+".scale",U,"scl",Z)}}if(Z.length===0)return null;return new this(W,H,Z,X)}resetDuration(){let J=this.tracks,$=0;for(let Q=0,Z=J.length;Q!==Z;++Q){let W=this.tracks[Q];$=Math.max($,W.times[W.times.length-1])}return this.duration=$,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let $=0;$<this.tracks.length;$++)J=J&&this.tracks[$].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());return new this.constructor(this.name,this.duration,J,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function g4(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return P7;case"vector":case"vector2":case"vector3":case"vector4":return T7;case"color":return $5;case"quaternion":return j7;case"bool":case"boolean":return r7;case"string":return t7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function p4(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let $=g4(J.type);if(J.times===void 0){let Q=[],Z=[];zQ(J.keys,Q,Z,"value"),J.times=Q,J.values=Z}if($.parse!==void 0)return $.parse(J);else return new $(J.name,J.times,J.values,J.interpolation)}var I7={enabled:!1,files:{},add:function(J,$){if(this.enabled===!1)return;this.files[J]=$},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class DQ{constructor(J,$,Q){let Z=this,W=!1,Y=0,X=0,H=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=$,this.onError=Q,this.itemStart=function(q){if(X++,W===!1){if(Z.onStart!==void 0)Z.onStart(q,Y,X)}W=!0},this.itemEnd=function(q){if(Y++,Z.onProgress!==void 0)Z.onProgress(q,Y,X);if(Y===X){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(q){if(Z.onError!==void 0)Z.onError(q)},this.resolveURL=function(q){if(H)return H(q);return q},this.setURLModifier=function(q){return H=q,this},this.addHandler=function(q,G){return K.push(q,G),this},this.removeHandler=function(q){let G=K.indexOf(q);if(G!==-1)K.splice(G,2);return this},this.getHandler=function(q){for(let G=0,U=K.length;G<U;G+=2){let F=K[G],O=K[G+1];if(F.global)F.lastIndex=0;if(F.test(q))return O}return null}}}var u4=new DQ;class u6{constructor(J){this.manager=J!==void 0?J:u4,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,$){let Q=this;return new Promise(function(Z,W){Q.load(J,Z,$,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}u6.DEFAULT_MATERIAL_NAME="__DEFAULT";var U7={};class CQ extends Error{constructor(J,$){super(J);this.response=$}}class y7 extends u6{constructor(J){super(J)}load(J,$,Q,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=I7.get(J);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if($)$(W);this.manager.itemEnd(J)},0),W;if(U7[J]!==void 0){U7[J].push({onLoad:$,onProgress:Q,onError:Z});return}U7[J]=[],U7[J].push({onLoad:$,onProgress:Q,onError:Z});let Y=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),X=this.mimeType,H=this.responseType;fetch(Y).then((K)=>{if(K.status===200||K.status===0){if(K.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||K.body===void 0||K.body.getReader===void 0)return K;let q=U7[J],G=K.body.getReader(),U=K.headers.get("X-File-Size")||K.headers.get("Content-Length"),F=U?parseInt(U):0,O=F!==0,N=0,R=new ReadableStream({start(V){E();function E(){G.read().then(({done:M,value:C})=>{if(M)V.close();else{N+=C.byteLength;let I=new ProgressEvent("progress",{lengthComputable:O,loaded:N,total:F});for(let y=0,L=q.length;y<L;y++){let S=q[y];if(S.onProgress)S.onProgress(I)}V.enqueue(C),E()}},(M)=>{V.error(M)})}}});return new Response(R)}else throw new CQ(`fetch for "${K.url}" responded with ${K.status}: ${K.statusText}`,K)}).then((K)=>{switch(H){case"arraybuffer":return K.arrayBuffer();case"blob":return K.blob();case"document":return K.text().then((q)=>{return new DOMParser().parseFromString(q,X)});case"json":return K.json();default:if(X===void 0)return K.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(X),U=G&&G[1]?G[1].toLowerCase():void 0,F=new TextDecoder(U);return K.arrayBuffer().then((O)=>F.decode(O))}}}).then((K)=>{I7.add(J,K);let q=U7[J];delete U7[J];for(let G=0,U=q.length;G<U;G++){let F=q[G];if(F.onLoad)F.onLoad(K)}}).catch((K)=>{let q=U7[J];if(q===void 0)throw this.manager.itemError(J),K;delete U7[J];for(let G=0,U=q.length;G<U;G++){let F=q[G];if(F.onError)F.onError(K)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}}class wQ extends u6{constructor(J){super(J)}load(J,$,Q,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,Y=I7.get(J);if(Y!==void 0)return W.manager.itemStart(J),setTimeout(function(){if($)$(Y);W.manager.itemEnd(J)},0),Y;let X=d8("img");function H(){if(q(),I7.add(J,this),$)$(this);W.manager.itemEnd(J)}function K(G){if(q(),Z)Z(G);W.manager.itemError(J),W.manager.itemEnd(J)}function q(){X.removeEventListener("load",H,!1),X.removeEventListener("error",K,!1)}if(X.addEventListener("load",H,!1),X.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return W.manager.itemStart(J),X.src=J,X}}class Z5 extends u6{constructor(J){super(J)}load(J,$,Q,Z){let W=new E6,Y=new wQ(this.manager);return Y.setCrossOrigin(this.crossOrigin),Y.setPath(this.path),Y.load(J,function(X){if(W.image=X,W.needsUpdate=!0,$!==void 0)$(W)},Q,Z),W}}class i8 extends J6{constructor(J,$=1){super();this.isLight=!0,this.type="Light",this.color=new z0(J),this.intensity=$}dispose(){}copy(J,$){return super.copy(J,$),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let $=super.toJSON(J);if($.object.color=this.color.getHex(),$.object.intensity=this.intensity,this.groundColor!==void 0)$.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)$.object.distance=this.distance;if(this.angle!==void 0)$.object.angle=this.angle;if(this.decay!==void 0)$.object.decay=this.decay;if(this.penumbra!==void 0)$.object.penumbra=this.penumbra;if(this.shadow!==void 0)$.object.shadow=this.shadow.toJSON();if(this.target!==void 0)$.object.target=this.target.uuid;return $}}class W5 extends i8{constructor(J,$,Q){super(J,Q);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(J6.DEFAULT_UP),this.updateMatrix(),this.groundColor=new z0($)}copy(J,$){return super.copy(J,$),this.groundColor.copy(J.groundColor),this}}var AJ=new y0,f$=new P,x$=new P;class c9{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new k0(512,512),this.map=null,this.mapPass=null,this.matrix=new y0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new g9,this._frameExtents=new k0(1,1),this._viewportCount=1,this._viewports=[new r0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let $=this.camera,Q=this.matrix;f$.setFromMatrixPosition(J.matrixWorld),$.position.copy(f$),x$.setFromMatrixPosition(J.target.matrixWorld),$.lookAt(x$),$.updateMatrixWorld(),AJ.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(AJ),Q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),Q.multiply(AJ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class _Q extends c9{constructor(){super(new z6(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1}updateMatrices(J){let $=this.camera,Q=C8*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height,W=J.distance||$.far;if(Q!==$.fov||Z!==$.aspect||W!==$.far)$.fov=Q,$.aspect=Z,$.far=W,$.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class Y5 extends i8{constructor(J,$,Q=0,Z=Math.PI/3,W=0,Y=2){super(J,$);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(J6.DEFAULT_UP),this.updateMatrix(),this.target=new J6,this.distance=Q,this.angle=Z,this.penumbra=W,this.decay=Y,this.map=null,this.shadow=new _Q}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var h$=new y0,p8=new P,PJ=new P;class IQ extends c9{constructor(){super(new z6(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new k0(4,2),this._viewportCount=6,this._viewports=[new r0(2,1,1,1),new r0(0,1,1,1),new r0(3,1,1,1),new r0(1,1,1,1),new r0(3,0,1,1),new r0(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(J,$=0){let Q=this.camera,Z=this.matrix,W=J.distance||Q.far;if(W!==Q.far)Q.far=W,Q.updateProjectionMatrix();p8.setFromMatrixPosition(J.matrixWorld),Q.position.copy(p8),PJ.copy(Q.position),PJ.add(this._cubeDirections[$]),Q.up.copy(this._cubeUps[$]),Q.lookAt(PJ),Q.updateMatrixWorld(),Z.makeTranslation(-p8.x,-p8.y,-p8.z),h$.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(h$)}}class X5 extends i8{constructor(J,$,Q=0,Z=2){super(J,$);this.isPointLight=!0,this.type="PointLight",this.distance=Q,this.decay=Z,this.shadow=new IQ}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class AQ extends c9{constructor(){super(new s8(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class A8 extends i8{constructor(J,$){super(J,$);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(J6.DEFAULT_UP),this.updateMatrix(),this.target=new J6,this.shadow=new AQ}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class e7{static decodeText(J){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(J);let $="";for(let Q=0,Z=J.length;Q<Z;Q++)$+=String.fromCharCode(J[Q]);try{return decodeURIComponent(escape($))}catch(Q){return $}}static extractUrlBase(J){let $=J.lastIndexOf("/");if($===-1)return"./";return J.slice(0,$+1)}static resolveURL(J,$){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test($)&&/^\//.test(J))$=$.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return $+J}}class H5 extends u6{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"}}setOptions(J){return this.options=J,this}load(J,$,Q,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,Y=I7.get(J);if(Y!==void 0){if(W.manager.itemStart(J),Y.then){Y.then((K)=>{if($)$(K);W.manager.itemEnd(J)}).catch((K)=>{if(Z)Z(K)});return}return setTimeout(function(){if($)$(Y);W.manager.itemEnd(J)},0),Y}let X={};X.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",X.headers=this.requestHeader;let H=fetch(J,X).then(function(K){return K.blob()}).then(function(K){return createImageBitmap(K,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(K){if(I7.add(J,K),$)$(K);return W.manager.itemEnd(J),K}).catch(function(K){if(Z)Z(K);I7.remove(J),W.manager.itemError(J),W.manager.itemEnd(J)});I7.add(J,H),W.manager.itemStart(J)}}var K5="\\[\\]\\.:\\/",m4=new RegExp("["+K5+"]","g"),q5="[^"+K5+"]",l4="[^"+K5.replace("\\.","")+"]",d4=/((?:WC+[\/:])*)/.source.replace("WC",q5),c4=/(WCOD+)?/.source.replace("WCOD",l4),n4=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",q5),s4=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",q5),o4=new RegExp("^"+d4+c4+n4+s4+"$"),i4=["material","materials","bones","map"];class PQ{constructor(J,$,Q){let Z=Q||i0.parseTrackName($);this._targetGroup=J,this._bindings=J.subscribe_($,Z)}getValue(J,$){this.bind();let Q=this._targetGroup.nCachedObjects_,Z=this._bindings[Q];if(Z!==void 0)Z.getValue(J,$)}setValue(J,$){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=Q.length;Z!==W;++Z)Q[Z].setValue(J,$)}bind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].bind()}unbind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].unbind()}}class i0{constructor(J,$,Q){this.path=$,this.parsedPath=Q||i0.parseTrackName($),this.node=i0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,$,Q){if(!(J&&J.isAnimationObjectGroup))return new i0(J,$,Q);else return new i0.Composite(J,$,Q)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(m4,"")}static parseTrackName(J){let $=o4.exec(J);if($===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let Q={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},Z=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=Q.nodeName.substring(Z+1);if(i4.indexOf(W)!==-1)Q.nodeName=Q.nodeName.substring(0,Z),Q.objectName=W}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Q}static findNode(J,$){if($===void 0||$===""||$==="."||$===-1||$===J.name||$===J.uuid)return J;if(J.skeleton){let Q=J.skeleton.getBoneByName($);if(Q!==void 0)return Q}if(J.children){let Q=function(W){for(let Y=0;Y<W.length;Y++){let X=W[Y];if(X.name===$||X.uuid===$)return X;let H=Q(X.children);if(H)return H}return null},Z=Q(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,$){J[$]=this.targetObject[this.propertyName]}_getValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)J[$++]=Q[Z]}_getValue_arrayElement(J,$){J[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,$){this.resolvedProperty.toArray(J,$)}_setValue_direct(J,$){this.targetObject[this.propertyName]=J[$]}_setValue_direct_setNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=J[$++]}_setValue_array_setNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=J[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=J[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,$){this.resolvedProperty[this.propertyIndex]=J[$]}_setValue_arrayElement_setNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,$){this.resolvedProperty.fromArray(J,$)}_setValue_fromArray_setNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,$){this.bind(),this.getValue(J,$)}_setValue_unbound(J,$){this.bind(),this.setValue(J,$)}bind(){let J=this.node,$=this.parsedPath,Q=$.objectName,Z=$.propertyName,W=$.propertyIndex;if(!J)J=i0.findNode(this.rootNode,$.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let K=$.objectIndex;switch(Q){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let q=0;q<J.length;q++)if(J[q].name===K){K=q;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Q]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Q]}if(K!==void 0){if(J[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let Y=J[Z];if(Y===void 0){let K=$.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.needsUpdate!==void 0)X=this.Versioning.NeedsUpdate;else if(J.matrixWorldNeedsUpdate!==void 0)X=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}H=this.BindingType.ArrayElement,this.resolvedProperty=Y,this.propertyIndex=W}else if(Y.fromArray!==void 0&&Y.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=Y;else if(Array.isArray(Y))H=this.BindingType.EntireArray,this.resolvedProperty=Y;else this.propertyName=Z;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}i0.Composite=PQ;i0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};i0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};i0.prototype.GetterByBindingType=[i0.prototype._getValue_direct,i0.prototype._getValue_array,i0.prototype._getValue_arrayElement,i0.prototype._getValue_toArray];i0.prototype.SetterByBindingTypeAndVersioning=[[i0.prototype._setValue_direct,i0.prototype._setValue_direct_setNeedsUpdate,i0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[i0.prototype._setValue_array,i0.prototype._setValue_array_setNeedsUpdate,i0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[i0.prototype._setValue_arrayElement,i0.prototype._setValue_arrayElement_setNeedsUpdate,i0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[i0.prototype._setValue_fromArray,i0.prototype._setValue_fromArray_setNeedsUpdate,i0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DK=new Float32Array(1);class n9{constructor(J=1,$=0,Q=0){return this.radius=J,this.phi=$,this.theta=Q,this}set(J,$,Q){return this.radius=J,this.phi=$,this.theta=Q,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,$,Q){if(this.radius=Math.sqrt(J*J+$*$+Q*Q),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Q),this.phi=Math.acos(k6($/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class G5 extends O7{constructor(J=10,$=10,Q=4473924,Z=8947848){Q=new z0(Q),Z=new z0(Z);let W=$/2,Y=J/$,X=J/2,H=[],K=[];for(let U=0,F=0,O=-X;U<=$;U++,O+=Y){H.push(-X,0,O,X,0,O),H.push(O,0,-X,O,0,X);let N=U===W?Q:Z;N.toArray(K,F),F+=3,N.toArray(K,F),F+=3,N.toArray(K,F),F+=3,N.toArray(K,F),F+=3}let q=new K6;q.setAttribute("position",new Q6(H,3)),q.setAttribute("color",new Q6(K,3));let G=new g6({vertexColors:!0,toneMapped:!1});super(q,G);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"166"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="166";var TQ={type:"change"},U5={type:"start"},SQ={type:"end"},s9=new n7,jQ=new Q7,r4=Math.cos(70*b9.DEG2RAD);class F5 extends V7{constructor(J,$){super();this.object=J,this.domElement=$,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:d7.ROTATE,MIDDLE:d7.DOLLY,RIGHT:d7.PAN},this.touches={ONE:c7.ROTATE,TWO:c7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return X.phi},this.getAzimuthalAngle=function(){return X.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",W0),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",W0),this._domElementKeyEvents=null},this.saveState=function(){Q.target0.copy(Q.target),Q.position0.copy(Q.object.position),Q.zoom0=Q.object.zoom},this.reset=function(){Q.target.copy(Q.target0),Q.object.position.copy(Q.position0),Q.object.zoom=Q.zoom0,Q.object.updateProjectionMatrix(),Q.dispatchEvent(TQ),Q.update(),W=Z.NONE},this.update=function(){let A=new P,w=new v6().setFromUnitVectors(J.up,new P(0,1,0)),i=w.clone().invert(),p=new P,c=new v6,$0=new P,O0=2*Math.PI;return function(W6=null){let q6=Q.object.position;if(A.copy(q6).sub(Q.target),A.applyQuaternion(w),X.setFromVector3(A),Q.autoRotate&&W===Z.NONE)j(D(W6));if(Q.enableDamping)X.theta+=H.theta*Q.dampingFactor,X.phi+=H.phi*Q.dampingFactor;else X.theta+=H.theta,X.phi+=H.phi;let{minAzimuthAngle:b0,maxAzimuthAngle:G6}=Q;if(isFinite(b0)&&isFinite(G6)){if(b0<-Math.PI)b0+=O0;else if(b0>Math.PI)b0-=O0;if(G6<-Math.PI)G6+=O0;else if(G6>Math.PI)G6-=O0;if(b0<=G6)X.theta=Math.max(b0,Math.min(G6,X.theta));else X.theta=X.theta>(b0+G6)/2?Math.max(b0,X.theta):Math.min(G6,X.theta)}if(X.phi=Math.max(Q.minPolarAngle,Math.min(Q.maxPolarAngle,X.phi)),X.makeSafe(),Q.enableDamping===!0)Q.target.addScaledVector(q,Q.dampingFactor);else Q.target.add(q);Q.target.sub(Q.cursor),Q.target.clampLength(Q.minTargetRadius,Q.maxTargetRadius),Q.target.add(Q.cursor);let L6=!1;if(Q.zoomToCursor&&y||Q.object.isOrthographicCamera)X.radius=q0(X.radius);else{let B6=X.radius;X.radius=q0(X.radius*K),L6=B6!=X.radius}if(A.setFromSpherical(X),A.applyQuaternion(i),q6.copy(Q.target).add(A),Q.object.lookAt(Q.target),Q.enableDamping===!0)H.theta*=1-Q.dampingFactor,H.phi*=1-Q.dampingFactor,q.multiplyScalar(1-Q.dampingFactor);else H.set(0,0,0),q.set(0,0,0);if(Q.zoomToCursor&&y){let B6=null;if(Q.object.isPerspectiveCamera){let Y7=A.length();B6=q0(Y7*K);let f7=Y7-B6;Q.object.position.addScaledVector(C,f7),Q.object.updateMatrixWorld(),L6=!!f7}else if(Q.object.isOrthographicCamera){let Y7=new P(I.x,I.y,0);Y7.unproject(Q.object);let f7=Q.object.zoom;Q.object.zoom=Math.max(Q.minZoom,Math.min(Q.maxZoom,Q.object.zoom/K)),Q.object.updateProjectionMatrix(),L6=f7!==Q.object.zoom;let j8=new P(I.x,I.y,0);j8.unproject(Q.object),Q.object.position.sub(j8).add(Y7),Q.object.updateMatrixWorld(),B6=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),Q.zoomToCursor=!1;if(B6!==null)if(this.screenSpacePanning)Q.target.set(0,0,-1).transformDirection(Q.object.matrix).multiplyScalar(B6).add(Q.object.position);else if(s9.origin.copy(Q.object.position),s9.direction.set(0,0,-1).transformDirection(Q.object.matrix),Math.abs(Q.object.up.dot(s9.direction))<r4)J.lookAt(Q.target);else jQ.setFromNormalAndCoplanarPoint(Q.object.up,Q.target),s9.intersectPlane(jQ,Q.target)}else if(Q.object.isOrthographicCamera){let B6=Q.object.zoom;if(Q.object.zoom=Math.max(Q.minZoom,Math.min(Q.maxZoom,Q.object.zoom/K)),B6!==Q.object.zoom)Q.object.updateProjectionMatrix(),L6=!0}if(K=1,y=!1,L6||p.distanceToSquared(Q.object.position)>Y||8*(1-c.dot(Q.object.quaternion))>Y||$0.distanceToSquared(Q.target)>Y)return Q.dispatchEvent(TQ),p.copy(Q.object.position),c.copy(Q.object.quaternion),$0.copy(Q.target),!0;return!1}}(),this.dispose=function(){if(Q.domElement.removeEventListener("contextmenu",J0),Q.domElement.removeEventListener("pointerdown",S0),Q.domElement.removeEventListener("pointercancel",_),Q.domElement.removeEventListener("wheel",a),Q.domElement.removeEventListener("pointermove",$6),Q.domElement.removeEventListener("pointerup",_),Q.domElement.getRootNode().removeEventListener("keydown",t,{capture:!0}),Q._domElementKeyEvents!==null)Q._domElementKeyEvents.removeEventListener("keydown",W0),Q._domElementKeyEvents=null};let Q=this,Z={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},W=Z.NONE,Y=0.000001,X=new n9,H=new n9,K=1,q=new P,G=new k0,U=new k0,F=new k0,O=new k0,N=new k0,R=new k0,V=new k0,E=new k0,M=new k0,C=new P,I=new k0,y=!1,L=[],S={},b=!1;function D(A){if(A!==null)return 2*Math.PI/60*Q.autoRotateSpeed*A;else return 2*Math.PI/60/60*Q.autoRotateSpeed}function k(A){let w=Math.abs(A*0.01);return Math.pow(0.95,Q.zoomSpeed*w)}function j(A){H.theta-=A}function u(A){H.phi-=A}let n=function(){let A=new P;return function(i,p){A.setFromMatrixColumn(p,0),A.multiplyScalar(-i),q.add(A)}}(),d=function(){let A=new P;return function(i,p){if(Q.screenSpacePanning===!0)A.setFromMatrixColumn(p,1);else A.setFromMatrixColumn(p,0),A.crossVectors(Q.object.up,A);A.multiplyScalar(i),q.add(A)}}(),s=function(){let A=new P;return function(i,p){let c=Q.domElement;if(Q.object.isPerspectiveCamera){let $0=Q.object.position;A.copy($0).sub(Q.target);let O0=A.length();O0*=Math.tan(Q.object.fov/2*Math.PI/180),n(2*i*O0/c.clientHeight,Q.object.matrix),d(2*p*O0/c.clientHeight,Q.object.matrix)}else if(Q.object.isOrthographicCamera)n(i*(Q.object.right-Q.object.left)/Q.object.zoom/c.clientWidth,Q.object.matrix),d(p*(Q.object.top-Q.object.bottom)/Q.object.zoom/c.clientHeight,Q.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),Q.enablePan=!1}}();function l(A){if(Q.object.isPerspectiveCamera||Q.object.isOrthographicCamera)K/=A;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),Q.enableZoom=!1}function e(A){if(Q.object.isPerspectiveCamera||Q.object.isOrthographicCamera)K*=A;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),Q.enableZoom=!1}function m(A,w){if(!Q.zoomToCursor)return;y=!0;let i=Q.domElement.getBoundingClientRect(),p=A-i.left,c=w-i.top,$0=i.width,O0=i.height;I.x=p/$0*2-1,I.y=-(c/O0)*2+1,C.set(I.x,I.y,1).unproject(Q.object).sub(Q.object.position).normalize()}function q0(A){return Math.max(Q.minDistance,Math.min(Q.maxDistance,A))}function F0(A){G.set(A.clientX,A.clientY)}function C0(A){m(A.clientX,A.clientX),V.set(A.clientX,A.clientY)}function x0(A){O.set(A.clientX,A.clientY)}function o(A){U.set(A.clientX,A.clientY),F.subVectors(U,G).multiplyScalar(Q.rotateSpeed);let w=Q.domElement;j(2*Math.PI*F.x/w.clientHeight),u(2*Math.PI*F.y/w.clientHeight),G.copy(U),Q.update()}function Z0(A){if(E.set(A.clientX,A.clientY),M.subVectors(E,V),M.y>0)l(k(M.y));else if(M.y<0)e(k(M.y));V.copy(E),Q.update()}function U0(A){N.set(A.clientX,A.clientY),R.subVectors(N,O).multiplyScalar(Q.panSpeed),s(R.x,R.y),O.copy(N),Q.update()}function M0(A){if(m(A.clientX,A.clientY),A.deltaY<0)e(k(A.deltaY));else if(A.deltaY>0)l(k(A.deltaY));Q.update()}function G0(A){let w=!1;switch(A.code){case Q.keys.UP:if(A.ctrlKey||A.metaKey||A.shiftKey)u(2*Math.PI*Q.rotateSpeed/Q.domElement.clientHeight);else s(0,Q.keyPanSpeed);w=!0;break;case Q.keys.BOTTOM:if(A.ctrlKey||A.metaKey||A.shiftKey)u(-2*Math.PI*Q.rotateSpeed/Q.domElement.clientHeight);else s(0,-Q.keyPanSpeed);w=!0;break;case Q.keys.LEFT:if(A.ctrlKey||A.metaKey||A.shiftKey)j(2*Math.PI*Q.rotateSpeed/Q.domElement.clientHeight);else s(Q.keyPanSpeed,0);w=!0;break;case Q.keys.RIGHT:if(A.ctrlKey||A.metaKey||A.shiftKey)j(-2*Math.PI*Q.rotateSpeed/Q.domElement.clientHeight);else s(-Q.keyPanSpeed,0);w=!0;break}if(w)A.preventDefault(),Q.update()}function P0(A){if(L.length===1)G.set(A.pageX,A.pageY);else{let w=I0(A),i=0.5*(A.pageX+w.x),p=0.5*(A.pageY+w.y);G.set(i,p)}}function t0(A){if(L.length===1)O.set(A.pageX,A.pageY);else{let w=I0(A),i=0.5*(A.pageX+w.x),p=0.5*(A.pageY+w.y);O.set(i,p)}}function h0(A){let w=I0(A),i=A.pageX-w.x,p=A.pageY-w.y,c=Math.sqrt(i*i+p*p);V.set(0,c)}function T(A){if(Q.enableZoom)h0(A);if(Q.enablePan)t0(A)}function Z6(A){if(Q.enableZoom)h0(A);if(Q.enableRotate)P0(A)}function g0(A){if(L.length==1)U.set(A.pageX,A.pageY);else{let i=I0(A),p=0.5*(A.pageX+i.x),c=0.5*(A.pageY+i.y);U.set(p,c)}F.subVectors(U,G).multiplyScalar(Q.rotateSpeed);let w=Q.domElement;j(2*Math.PI*F.x/w.clientHeight),u(2*Math.PI*F.y/w.clientHeight),G.copy(U)}function e0(A){if(L.length===1)N.set(A.pageX,A.pageY);else{let w=I0(A),i=0.5*(A.pageX+w.x),p=0.5*(A.pageY+w.y);N.set(i,p)}R.subVectors(N,O).multiplyScalar(Q.panSpeed),s(R.x,R.y),O.copy(N)}function L0(A){let w=I0(A),i=A.pageX-w.x,p=A.pageY-w.y,c=Math.sqrt(i*i+p*p);E.set(0,c),M.set(0,Math.pow(E.y/V.y,Q.zoomSpeed)),l(M.y),V.copy(E);let $0=(A.pageX+w.x)*0.5,O0=(A.pageY+w.y)*0.5;m($0,O0)}function l0(A){if(Q.enableZoom)L0(A);if(Q.enablePan)e0(A)}function T0(A){if(Q.enableZoom)L0(A);if(Q.enableRotate)g0(A)}function S0(A){if(Q.enabled===!1)return;if(L.length===0)Q.domElement.setPointerCapture(A.pointerId),Q.domElement.addEventListener("pointermove",$6),Q.domElement.addEventListener("pointerup",_);if(w0(A))return;if(N0(A),A.pointerType==="touch")Y0(A);else z(A)}function $6(A){if(Q.enabled===!1)return;if(A.pointerType==="touch")j0(A);else g(A)}function _(A){switch(u0(A),L.length){case 0:Q.domElement.releasePointerCapture(A.pointerId),Q.domElement.removeEventListener("pointermove",$6),Q.domElement.removeEventListener("pointerup",_),Q.dispatchEvent(SQ),W=Z.NONE;break;case 1:let w=L[0],i=S[w];Y0({pointerId:w,pageX:i.x,pageY:i.y});break}}function z(A){let w;switch(A.button){case 0:w=Q.mouseButtons.LEFT;break;case 1:w=Q.mouseButtons.MIDDLE;break;case 2:w=Q.mouseButtons.RIGHT;break;default:w=-1}switch(w){case d7.DOLLY:if(Q.enableZoom===!1)return;C0(A),W=Z.DOLLY;break;case d7.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(Q.enablePan===!1)return;x0(A),W=Z.PAN}else{if(Q.enableRotate===!1)return;F0(A),W=Z.ROTATE}break;case d7.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(Q.enableRotate===!1)return;F0(A),W=Z.ROTATE}else{if(Q.enablePan===!1)return;x0(A),W=Z.PAN}break;default:W=Z.NONE}if(W!==Z.NONE)Q.dispatchEvent(U5)}function g(A){switch(W){case Z.ROTATE:if(Q.enableRotate===!1)return;o(A);break;case Z.DOLLY:if(Q.enableZoom===!1)return;Z0(A);break;case Z.PAN:if(Q.enablePan===!1)return;U0(A);break}}function a(A){if(Q.enabled===!1||Q.enableZoom===!1||W!==Z.NONE)return;A.preventDefault(),Q.dispatchEvent(U5),M0(r(A)),Q.dispatchEvent(SQ)}function r(A){let w=A.deltaMode,i={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(w){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}if(A.ctrlKey&&!b)i.deltaY*=10;return i}function t(A){if(A.key==="Control")b=!0,Q.domElement.getRootNode().addEventListener("keyup",B0,{passive:!0,capture:!0})}function B0(A){if(A.key==="Control")b=!1,Q.domElement.getRootNode().removeEventListener("keyup",B0,{passive:!0,capture:!0})}function W0(A){if(Q.enabled===!1||Q.enablePan===!1)return;G0(A)}function Y0(A){switch(X0(A),L.length){case 1:switch(Q.touches.ONE){case c7.ROTATE:if(Q.enableRotate===!1)return;P0(A),W=Z.TOUCH_ROTATE;break;case c7.PAN:if(Q.enablePan===!1)return;t0(A),W=Z.TOUCH_PAN;break;default:W=Z.NONE}break;case 2:switch(Q.touches.TWO){case c7.DOLLY_PAN:if(Q.enableZoom===!1&&Q.enablePan===!1)return;T(A),W=Z.TOUCH_DOLLY_PAN;break;case c7.DOLLY_ROTATE:if(Q.enableZoom===!1&&Q.enableRotate===!1)return;Z6(A),W=Z.TOUCH_DOLLY_ROTATE;break;default:W=Z.NONE}break;default:W=Z.NONE}if(W!==Z.NONE)Q.dispatchEvent(U5)}function j0(A){switch(X0(A),W){case Z.TOUCH_ROTATE:if(Q.enableRotate===!1)return;g0(A),Q.update();break;case Z.TOUCH_PAN:if(Q.enablePan===!1)return;e0(A),Q.update();break;case Z.TOUCH_DOLLY_PAN:if(Q.enableZoom===!1&&Q.enablePan===!1)return;l0(A),Q.update();break;case Z.TOUCH_DOLLY_ROTATE:if(Q.enableZoom===!1&&Q.enableRotate===!1)return;T0(A),Q.update();break;default:W=Z.NONE}}function J0(A){if(Q.enabled===!1)return;A.preventDefault()}function N0(A){L.push(A.pointerId)}function u0(A){delete S[A.pointerId];for(let w=0;w<L.length;w++)if(L[w]==A.pointerId){L.splice(w,1);return}}function w0(A){for(let w=0;w<L.length;w++)if(L[w]==A.pointerId)return!0;return!1}function X0(A){let w=S[A.pointerId];if(w===void 0)w=new k0,S[A.pointerId]=w;w.set(A.pageX,A.pageY)}function I0(A){let w=A.pointerId===L[0]?L[1]:L[0];return S[w]}Q.domElement.addEventListener("contextmenu",J0),Q.domElement.addEventListener("pointerdown",S0),Q.domElement.addEventListener("pointercancel",_),Q.domElement.addEventListener("wheel",a,{passive:!1}),Q.domElement.getRootNode().addEventListener("keydown",t,{passive:!0,capture:!0}),this.update()}}class V5 extends u6{constructor(J){super(J)}load(J,$,Q,Z){let W=this,Y=new y7(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{$(W.parse(X))}catch(H){if(Z)Z(H);else console.error(H);W.manager.itemError(J)}},Q,Z)}parse(J){function $(K){let q=new DataView(K),G=50;if(84+q.getUint32(80,!0)*50===q.byteLength)return!0;let O=[115,111,108,105,100];for(let N=0;N<5;N++)if(Q(O,q,N))return!1;return!0}function Q(K,q,G){for(let U=0,F=K.length;U<F;U++)if(K[U]!==q.getUint8(G+U))return!1;return!0}function Z(K){let q=new DataView(K),G=q.getUint32(80,!0),U,F,O,N=!1,R,V,E,M,C;for(let k=0;k<70;k++)if(q.getUint32(k,!1)==1129270351&&q.getUint8(k+4)==82&&q.getUint8(k+5)==61)N=!0,R=new Float32Array(G*3*3),V=q.getUint8(k+6)/255,E=q.getUint8(k+7)/255,M=q.getUint8(k+8)/255,C=q.getUint8(k+9)/255;let I=84,y=50,L=new K6,S=new Float32Array(G*3*3),b=new Float32Array(G*3*3),D=new z0;for(let k=0;k<G;k++){let j=I+k*y,u=q.getFloat32(j,!0),n=q.getFloat32(j+4,!0),d=q.getFloat32(j+8,!0);if(N){let s=q.getUint16(j+48,!0);if((s&32768)===0)U=(s&31)/31,F=(s>>5&31)/31,O=(s>>10&31)/31;else U=V,F=E,O=M}for(let s=1;s<=3;s++){let l=j+s*12,e=k*3*3+(s-1)*3;if(S[e]=q.getFloat32(l,!0),S[e+1]=q.getFloat32(l+4,!0),S[e+2]=q.getFloat32(l+8,!0),b[e]=u,b[e+1]=n,b[e+2]=d,N)D.set(U,F,O).convertSRGBToLinear(),R[e]=D.r,R[e+1]=D.g,R[e+2]=D.b}}if(L.setAttribute("position",new H6(S,3)),L.setAttribute("normal",new H6(b,3)),N)L.setAttribute("color",new H6(R,3)),L.hasColors=!0,L.alpha=C;return L}function W(K){let q=new K6,G=/solid([\s\S]*?)endsolid/g,U=/facet([\s\S]*?)endfacet/g,F=/solid\s(.+)/,O=0,N=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,R=new RegExp("vertex"+N+N+N,"g"),V=new RegExp("normal"+N+N+N,"g"),E=[],M=[],C=[],I=new P,y,L=0,S=0,b=0;while((y=G.exec(K))!==null){S=b;let D=y[0],k=(y=F.exec(D))!==null?y[1]:"";C.push(k);while((y=U.exec(D))!==null){let n=0,d=0,s=y[0];while((y=V.exec(s))!==null)I.x=parseFloat(y[1]),I.y=parseFloat(y[2]),I.z=parseFloat(y[3]),d++;while((y=R.exec(s))!==null)E.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3])),M.push(I.x,I.y,I.z),n++,b++;if(d!==1)console.error("THREE.STLLoader: Something isn't right with the normal of face number "+O);if(n!==3)console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+O);O++}let j=S,u=b-S;q.userData.groupNames=C,q.addGroup(j,u,L),L++}return q.setAttribute("position",new Q6(E,3)),q.setAttribute("normal",new Q6(M,3)),q}function Y(K){if(typeof K!=="string")return new TextDecoder().decode(K);return K}function X(K){if(typeof K==="string"){let q=new Uint8Array(K.length);for(let G=0;G<K.length;G++)q[G]=K.charCodeAt(G)&255;return q.buffer||q}else return K}let H=X(J);return $(H)?Z(H):W(Y(J))}}function E5(J,$){if($===o$)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if($===c8||$===h9){let Q=J.getIndex();if(Q===null){let X=[],H=J.getAttribute("position");if(H!==void 0){for(let K=0;K<H.count;K++)X.push(K);J.setIndex(X),Q=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=Q.count-2,W=[];if($===c8)for(let X=1;X<=Z;X++)W.push(Q.getX(0)),W.push(Q.getX(X)),W.push(Q.getX(X+1));else for(let X=0;X<Z;X++)if(X%2===0)W.push(Q.getX(X)),W.push(Q.getX(X+1)),W.push(Q.getX(X+2));else W.push(Q.getX(X+2)),W.push(Q.getX(X+1)),W.push(Q.getX(X));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let Y=J.clone();return Y.setIndex(W),Y.clearGroups(),Y}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",$),J}class M5 extends u6{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function($){return new pQ($)}),this.register(function($){return new uQ($)}),this.register(function($){return new aQ($)}),this.register(function($){return new rQ($)}),this.register(function($){return new tQ($)}),this.register(function($){return new lQ($)}),this.register(function($){return new dQ($)}),this.register(function($){return new cQ($)}),this.register(function($){return new nQ($)}),this.register(function($){return new gQ($)}),this.register(function($){return new sQ($)}),this.register(function($){return new mQ($)}),this.register(function($){return new iQ($)}),this.register(function($){return new oQ($)}),this.register(function($){return new hQ($)}),this.register(function($){return new eQ($)}),this.register(function($){return new JZ($)})}load(J,$,Q,Z){let W=this,Y;if(this.resourcePath!=="")Y=this.resourcePath;else if(this.path!==""){let K=e7.extractUrlBase(J);Y=e7.resolveURL(K,this.path)}else Y=e7.extractUrlBase(J);this.manager.itemStart(J);let X=function(K){if(Z)Z(K);else console.error(K);W.manager.itemError(J),W.manager.itemEnd(J)},H=new y7(this.manager);H.setPath(this.path),H.setResponseType("arraybuffer"),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(K){try{W.parse(K,Y,function(q){$(q),W.manager.itemEnd(J)},X)}catch(q){X(q)}},Q,X)}setDRACOLoader(J){return this.dracoLoader=J,this}setDDSLoader(){throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,$,Q,Z){let W,Y={},X={},H=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(H.decode(new Uint8Array(J,0,4))===$Z){try{Y[p0.KHR_BINARY_GLTF]=new QZ(J)}catch(G){if(Z)Z(G);return}W=JSON.parse(Y[p0.KHR_BINARY_GLTF].content)}else W=JSON.parse(H.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let K=new HZ(W,{path:$||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});K.fileLoader.setRequestHeader(this.requestHeader);for(let q=0;q<this.pluginCallbacks.length;q++){let G=this.pluginCallbacks[q](K);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");X[G.name]=G,Y[G.name]=!0}if(W.extensionsUsed)for(let q=0;q<W.extensionsUsed.length;++q){let G=W.extensionsUsed[q],U=W.extensionsRequired||[];switch(G){case p0.KHR_MATERIALS_UNLIT:Y[G]=new bQ;break;case p0.KHR_DRACO_MESH_COMPRESSION:Y[G]=new ZZ(W,this.dracoLoader);break;case p0.KHR_TEXTURE_TRANSFORM:Y[G]=new WZ;break;case p0.KHR_MESH_QUANTIZATION:Y[G]=new YZ;break;default:if(U.indexOf(G)>=0&&X[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}K.setExtensions(Y),K.setPlugins(X),K.parse(Q,Z)}parseAsync(J,$){let Q=this;return new Promise(function(Z,W){Q.parse(J,$,Z,W)})}}function t4(){let J={};return{get:function($){return J[$]},add:function($,Q){J[$]=Q},remove:function($){delete J[$]},removeAll:function(){J={}}}}var p0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hQ{constructor(J){this.parser=J,this.name=p0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,$=this.parser.json.nodes||[];for(let Q=0,Z=$.length;Q<Z;Q++){let W=$[Q];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let $=this.parser,Q="light:"+J,Z=$.cache.get(Q);if(Z)return Z;let W=$.json,H=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],K,q=new z0(16777215);if(H.color!==void 0)q.setRGB(H.color[0],H.color[1],H.color[2],W7);let G=H.range!==void 0?H.range:0;switch(H.type){case"directional":K=new A8(q),K.target.position.set(0,0,-1),K.add(K.target);break;case"point":K=new X5(q),K.distance=G;break;case"spot":K=new Y5(q),K.distance=G,H.spot=H.spot||{},H.spot.innerConeAngle=H.spot.innerConeAngle!==void 0?H.spot.innerConeAngle:0,H.spot.outerConeAngle=H.spot.outerConeAngle!==void 0?H.spot.outerConeAngle:Math.PI/4,K.angle=H.spot.outerConeAngle,K.penumbra=1-H.spot.innerConeAngle/H.spot.outerConeAngle,K.target.position.set(0,0,-1),K.add(K.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+H.type)}if(K.position.set(0,0,0),K.decay=2,R7(K,H),H.intensity!==void 0)K.intensity=H.intensity;return K.name=$.createUniqueName(H.name||"light_"+J),Z=Promise.resolve(K),$.cache.add(Q,Z),Z}getDependency(J,$){if(J!=="light")return;return this._loadLight($)}createNodeAttachment(J){let $=this,Q=this.parser,W=Q.json.nodes[J],X=(W.extensions&&W.extensions[this.name]||{}).light;if(X===void 0)return null;return this._loadLight(X).then(function(H){return Q._getNodeRef($.cache,X,H)})}}class bQ{constructor(){this.name=p0.KHR_MATERIALS_UNLIT}getMaterialType(){return E7}extendParams(J,$,Q){let Z=[];J.color=new z0(1,1,1),J.opacity=1;let W=$.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let Y=W.baseColorFactor;J.color.setRGB(Y[0],Y[1],Y[2],W7),J.opacity=Y[3]}if(W.baseColorTexture!==void 0)Z.push(Q.assignTexture(J,"map",W.baseColorTexture,S7))}return Promise.all(Z)}}class gQ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,$){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name].emissiveStrength;if(W!==void 0)$.emissiveIntensity=W;return Promise.resolve()}}class pQ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return p6}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if(Y.clearcoatFactor!==void 0)$.clearcoat=Y.clearcoatFactor;if(Y.clearcoatTexture!==void 0)W.push(Q.assignTexture($,"clearcoatMap",Y.clearcoatTexture));if(Y.clearcoatRoughnessFactor!==void 0)$.clearcoatRoughness=Y.clearcoatRoughnessFactor;if(Y.clearcoatRoughnessTexture!==void 0)W.push(Q.assignTexture($,"clearcoatRoughnessMap",Y.clearcoatRoughnessTexture));if(Y.clearcoatNormalTexture!==void 0){if(W.push(Q.assignTexture($,"clearcoatNormalMap",Y.clearcoatNormalTexture)),Y.clearcoatNormalTexture.scale!==void 0){let X=Y.clearcoatNormalTexture.scale;$.clearcoatNormalScale=new k0(X,X)}}return Promise.all(W)}}class uQ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_DISPERSION}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return p6}extendMaterialParams(J,$){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return $.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class mQ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return p6}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if(Y.iridescenceFactor!==void 0)$.iridescence=Y.iridescenceFactor;if(Y.iridescenceTexture!==void 0)W.push(Q.assignTexture($,"iridescenceMap",Y.iridescenceTexture));if(Y.iridescenceIor!==void 0)$.iridescenceIOR=Y.iridescenceIor;if($.iridescenceThicknessRange===void 0)$.iridescenceThicknessRange=[100,400];if(Y.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessRange[0]=Y.iridescenceThicknessMinimum;if(Y.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessRange[1]=Y.iridescenceThicknessMaximum;if(Y.iridescenceThicknessTexture!==void 0)W.push(Q.assignTexture($,"iridescenceThicknessMap",Y.iridescenceThicknessTexture));return Promise.all(W)}}class lQ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_SHEEN}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return p6}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[];$.sheenColor=new z0(0,0,0),$.sheenRoughness=0,$.sheen=1;let Y=Z.extensions[this.name];if(Y.sheenColorFactor!==void 0){let X=Y.sheenColorFactor;$.sheenColor.setRGB(X[0],X[1],X[2],W7)}if(Y.sheenRoughnessFactor!==void 0)$.sheenRoughness=Y.sheenRoughnessFactor;if(Y.sheenColorTexture!==void 0)W.push(Q.assignTexture($,"sheenColorMap",Y.sheenColorTexture,S7));if(Y.sheenRoughnessTexture!==void 0)W.push(Q.assignTexture($,"sheenRoughnessMap",Y.sheenRoughnessTexture));return Promise.all(W)}}class dQ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return p6}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if(Y.transmissionFactor!==void 0)$.transmission=Y.transmissionFactor;if(Y.transmissionTexture!==void 0)W.push(Q.assignTexture($,"transmissionMap",Y.transmissionTexture));return Promise.all(W)}}class cQ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_VOLUME}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return p6}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if($.thickness=Y.thicknessFactor!==void 0?Y.thicknessFactor:0,Y.thicknessTexture!==void 0)W.push(Q.assignTexture($,"thicknessMap",Y.thicknessTexture));$.attenuationDistance=Y.attenuationDistance||1/0;let X=Y.attenuationColor||[1,1,1];return $.attenuationColor=new z0().setRGB(X[0],X[1],X[2],W7),Promise.all(W)}}class nQ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_IOR}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return p6}extendMaterialParams(J,$){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return $.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class sQ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_SPECULAR}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return p6}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if($.specularIntensity=Y.specularFactor!==void 0?Y.specularFactor:1,Y.specularTexture!==void 0)W.push(Q.assignTexture($,"specularIntensityMap",Y.specularTexture));let X=Y.specularColorFactor||[1,1,1];if($.specularColor=new z0().setRGB(X[0],X[1],X[2],W7),Y.specularColorTexture!==void 0)W.push(Q.assignTexture($,"specularColorMap",Y.specularColorTexture,S7));return Promise.all(W)}}class oQ{constructor(J){this.parser=J,this.name=p0.EXT_MATERIALS_BUMP}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return p6}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if($.bumpScale=Y.bumpFactor!==void 0?Y.bumpFactor:1,Y.bumpTexture!==void 0)W.push(Q.assignTexture($,"bumpMap",Y.bumpTexture));return Promise.all(W)}}class iQ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return p6}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],Y=Z.extensions[this.name];if(Y.anisotropyStrength!==void 0)$.anisotropy=Y.anisotropyStrength;if(Y.anisotropyRotation!==void 0)$.anisotropyRotation=Y.anisotropyRotation;if(Y.anisotropyTexture!==void 0)W.push(Q.assignTexture($,"anisotropyMap",Y.anisotropyTexture));return Promise.all(W)}}class aQ{constructor(J){this.parser=J,this.name=p0.KHR_TEXTURE_BASISU}loadTexture(J){let $=this.parser,Q=$.json,Z=Q.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],Y=$.options.ktx2Loader;if(!Y)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return $.loadTextureImage(J,W.source,Y)}}class rQ{constructor(J){this.parser=J,this.name=p0.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(J){let $=this.name,Q=this.parser,Z=Q.json,W=Z.textures[J];if(!W.extensions||!W.extensions[$])return null;let Y=W.extensions[$],X=Z.images[Y.source],H=Q.textureLoader;if(X.uri){let K=Q.options.manager.getHandler(X.uri);if(K!==null)H=K}return this.detectSupport().then(function(K){if(K)return Q.loadTextureImage(J,Y.source,H);if(Z.extensionsRequired&&Z.extensionsRequired.indexOf($)>=0)throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return Q.loadTexture(J)})}detectSupport(){if(!this.isSupported)this.isSupported=new Promise(function(J){let $=new Image;$.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",$.onload=$.onerror=function(){J($.height===1)}});return this.isSupported}}class tQ{constructor(J){this.parser=J,this.name=p0.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(J){let $=this.name,Q=this.parser,Z=Q.json,W=Z.textures[J];if(!W.extensions||!W.extensions[$])return null;let Y=W.extensions[$],X=Z.images[Y.source],H=Q.textureLoader;if(X.uri){let K=Q.options.manager.getHandler(X.uri);if(K!==null)H=K}return this.detectSupport().then(function(K){if(K)return Q.loadTextureImage(J,Y.source,H);if(Z.extensionsRequired&&Z.extensionsRequired.indexOf($)>=0)throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return Q.loadTexture(J)})}detectSupport(){if(!this.isSupported)this.isSupported=new Promise(function(J){let $=new Image;$.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",$.onload=$.onerror=function(){J($.height===1)}});return this.isSupported}}class eQ{constructor(J){this.name=p0.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let $=this.parser.json,Q=$.bufferViews[J];if(Q.extensions&&Q.extensions[this.name]){let Z=Q.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),Y=this.parser.options.meshoptDecoder;if(!Y||!Y.supported)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(X){let H=Z.byteOffset||0,K=Z.byteLength||0,q=Z.count,G=Z.byteStride,U=new Uint8Array(X,H,K);if(Y.decodeGltfBufferAsync)return Y.decodeGltfBufferAsync(q,G,U,Z.mode,Z.filter).then(function(F){return F.buffer});else return Y.ready.then(function(){let F=new ArrayBuffer(q*G);return Y.decodeGltfBuffer(new Uint8Array(F),q,G,U,Z.mode,Z.filter),F})})}else return null}}class JZ{constructor(J){this.name=p0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let $=this.parser.json,Q=$.nodes[J];if(!Q.extensions||!Q.extensions[this.name]||Q.mesh===void 0)return null;let Z=$.meshes[Q.mesh];for(let K of Z.primitives)if(K.mode!==m6.TRIANGLES&&K.mode!==m6.TRIANGLE_STRIP&&K.mode!==m6.TRIANGLE_FAN&&K.mode!==void 0)return null;let Y=Q.extensions[this.name].attributes,X=[],H={};for(let K in Y)X.push(this.parser.getDependency("accessor",Y[K]).then((q)=>{return H[K]=q,H[K]}));if(X.length<1)return null;return X.push(this.parser.createNodeMesh(J)),Promise.all(X).then((K)=>{let q=K.pop(),G=q.isGroup?q.children:[q],U=K[0].count,F=[];for(let O of G){let N=new y0,R=new P,V=new v6,E=new P(1,1,1),M=new rJ(O.geometry,O.material,U);for(let C=0;C<U;C++){if(H.TRANSLATION)R.fromBufferAttribute(H.TRANSLATION,C);if(H.ROTATION)V.fromBufferAttribute(H.ROTATION,C);if(H.SCALE)E.fromBufferAttribute(H.SCALE,C);M.setMatrixAt(C,N.compose(R,V,E))}for(let C in H)if(C==="_COLOR_0"){let I=H[C];M.instanceColor=new _8(I.array,I.itemSize,I.normalized)}else if(C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE")O.geometry.setAttribute(C,H[C]);J6.prototype.copy.call(M,O),this.parser.assignFinalMaterial(M),F.push(M)}if(q.isGroup)return q.clear(),q.add(...F),q;return F[0]})}}var $Z="glTF",a8=12,yQ={JSON:1313821514,BIN:5130562};class QZ{constructor(J){this.name=p0.KHR_BINARY_GLTF,this.content=null,this.body=null;let $=new DataView(J,0,a8),Q=new TextDecoder;if(this.header={magic:Q.decode(new Uint8Array(J.slice(0,4))),version:$.getUint32(4,!0),length:$.getUint32(8,!0)},this.header.magic!==$Z)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-a8,W=new DataView(J,a8),Y=0;while(Y<Z){let X=W.getUint32(Y,!0);Y+=4;let H=W.getUint32(Y,!0);if(Y+=4,H===yQ.JSON){let K=new Uint8Array(J,a8+Y,X);this.content=Q.decode(K)}else if(H===yQ.BIN){let K=a8+Y;this.body=J.slice(K,K+X)}Y+=X}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class ZZ{constructor(J,$){if(!$)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=p0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=$,this.dracoLoader.preload()}decodePrimitive(J,$){let Q=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,Y=J.extensions[this.name].attributes,X={},H={},K={};for(let q in Y){let G=z5[q]||q.toLowerCase();X[G]=Y[q]}for(let q in J.attributes){let G=z5[q]||q.toLowerCase();if(Y[q]!==void 0){let U=Q.accessors[J.attributes[q]],F=P8[U.componentType];K[G]=F.name,H[G]=U.normalized===!0}}return $.getDependency("bufferView",W).then(function(q){return new Promise(function(G,U){Z.decodeDracoFile(q,function(F){for(let O in F.attributes){let N=F.attributes[O],R=H[O];if(R!==void 0)N.normalized=R}G(F)},X,K,W7,U)})})}}class WZ{constructor(){this.name=p0.KHR_TEXTURE_TRANSFORM}extendTexture(J,$){if(($.texCoord===void 0||$.texCoord===J.channel)&&$.offset===void 0&&$.rotation===void 0&&$.scale===void 0)return J;if(J=J.clone(),$.texCoord!==void 0)J.channel=$.texCoord;if($.offset!==void 0)J.offset.fromArray($.offset);if($.rotation!==void 0)J.rotation=$.rotation;if($.scale!==void 0)J.repeat.fromArray($.scale);return J.needsUpdate=!0,J}}class YZ{constructor(){this.name=p0.KHR_MESH_QUANTIZATION}}class k5 extends a7{constructor(J,$,Q,Z){super(J,$,Q,Z)}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let Y=0;Y!==Z;Y++)$[Y]=Q[W+Y];return $}interpolate_(J,$,Q,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,H=X*2,K=X*3,q=Z-$,G=(Q-$)/q,U=G*G,F=U*G,O=J*K,N=O-K,R=-2*F+3*U,V=F-U,E=1-R,M=V-U+G;for(let C=0;C!==X;C++){let I=Y[N+C+X],y=Y[N+C+H]*q,L=Y[O+C+X],S=Y[O+C]*q;W[C]=E*I+M*y+R*L+V*S}return W}}var e4=new v6;class XZ extends k5{interpolate_(J,$,Q,Z){let W=super.interpolate_(J,$,Q,Z);return e4.fromArray(W).normalize().toArray(W),W}}var m6={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},P8={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vQ={9728:l$,9729:yJ,9984:d$,9985:n$,9986:c$,9987:vJ},fQ={33071:u$,33648:m$,10497:x9},O5={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},z5={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},v7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JK={CUBICSPLINE:void 0,LINEAR:fJ,STEP:s$},N5={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $K(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new i7({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:b$});return J.DefaultMaterial}function J8(J,$,Q){for(let Z in Q.extensions)if(J[Z]===void 0)$.userData.gltfExtensions=$.userData.gltfExtensions||{},$.userData.gltfExtensions[Z]=Q.extensions[Z]}function R7(J,$){if($.extras!==void 0)if(typeof $.extras==="object")Object.assign(J.userData,$.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+$.extras)}function QK(J,$,Q){let Z=!1,W=!1,Y=!1;for(let q=0,G=$.length;q<G;q++){let U=$[q];if(U.POSITION!==void 0)Z=!0;if(U.NORMAL!==void 0)W=!0;if(U.COLOR_0!==void 0)Y=!0;if(Z&&W&&Y)break}if(!Z&&!W&&!Y)return Promise.resolve(J);let X=[],H=[],K=[];for(let q=0,G=$.length;q<G;q++){let U=$[q];if(Z){let F=U.POSITION!==void 0?Q.getDependency("accessor",U.POSITION):J.attributes.position;X.push(F)}if(W){let F=U.NORMAL!==void 0?Q.getDependency("accessor",U.NORMAL):J.attributes.normal;H.push(F)}if(Y){let F=U.COLOR_0!==void 0?Q.getDependency("accessor",U.COLOR_0):J.attributes.color;K.push(F)}}return Promise.all([Promise.all(X),Promise.all(H),Promise.all(K)]).then(function(q){let G=q[0],U=q[1],F=q[2];if(Z)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=U;if(Y)J.morphAttributes.color=F;return J.morphTargetsRelative=!0,J})}function ZK(J,$){if(J.updateMorphTargets(),$.weights!==void 0)for(let Q=0,Z=$.weights.length;Q<Z;Q++)J.morphTargetInfluences[Q]=$.weights[Q];if($.extras&&Array.isArray($.extras.targetNames)){let Q=$.extras.targetNames;if(J.morphTargetInfluences.length===Q.length){J.morphTargetDictionary={};for(let Z=0,W=Q.length;Z<W;Z++)J.morphTargetDictionary[Q[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WK(J){let $,Q=J.extensions&&J.extensions[p0.KHR_DRACO_MESH_COMPRESSION];if(Q)$="draco:"+Q.bufferView+":"+Q.indices+":"+R5(Q.attributes);else $=J.indices+":"+R5(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)$+=":"+R5(J.targets[Z]);return $}function R5(J){let $="",Q=Object.keys(J).sort();for(let Z=0,W=Q.length;Z<W;Z++)$+=Q[Z]+":"+J[Q[Z]]+";";return $}function B5(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function YK(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";return"image/png"}var XK=new y0;class HZ{constructor(J={},$={}){this.json=J,this.extensions={},this.plugins={},this.options=$,this.cache=new t4,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let Q=!1,Z=-1,W=!1,Y=-1;if(typeof navigator<"u"){let X=navigator.userAgent;Q=/^((?!chrome|android).)*safari/i.test(X)===!0;let H=X.match(/Version\/(\d+)/);Z=Q&&H?parseInt(H[1],10):-1,W=X.indexOf("Firefox")>-1,Y=W?X.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||Q&&Z<17||W&&Y<98)this.textureLoader=new Z5(this.options.manager);else this.textureLoader=new H5(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new y7(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,$){let Q=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(Y){return Y._markDefs&&Y._markDefs()}),Promise.all(this._invokeAll(function(Y){return Y.beforeRoot&&Y.beforeRoot()})).then(function(){return Promise.all([Q.getDependencies("scene"),Q.getDependencies("animation"),Q.getDependencies("camera")])}).then(function(Y){let X={scene:Y[0][Z.scene||0],scenes:Y[0],animations:Y[1],cameras:Y[2],asset:Z.asset,parser:Q,userData:{}};return J8(W,X,Z),R7(X,Z),Promise.all(Q._invokeAll(function(H){return H.afterRoot&&H.afterRoot(X)})).then(function(){for(let H of X.scenes)H.updateMatrixWorld();J(X)})}).catch($)}_markDefs(){let J=this.json.nodes||[],$=this.json.skins||[],Q=this.json.meshes||[];for(let Z=0,W=$.length;Z<W;Z++){let Y=$[Z].joints;for(let X=0,H=Y.length;X<H;X++)J[Y[X]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let Y=J[Z];if(Y.mesh!==void 0){if(this._addNodeRef(this.meshCache,Y.mesh),Y.skin!==void 0)Q[Y.mesh].isSkinnedMesh=!0}if(Y.camera!==void 0)this._addNodeRef(this.cameraCache,Y.camera)}}_addNodeRef(J,$){if($===void 0)return;if(J.refs[$]===void 0)J.refs[$]=J.uses[$]=0;J.refs[$]++}_getNodeRef(J,$,Q){if(J.refs[$]<=1)return Q;let Z=Q.clone(),W=(Y,X)=>{let H=this.associations.get(Y);if(H!=null)this.associations.set(X,H);for(let[K,q]of Y.children.entries())W(q,X.children[K])};return W(Q,Z),Z.name+="_instance_"+J.uses[$]++,Z}_invokeOne(J){let $=Object.values(this.plugins);$.push(this);for(let Q=0;Q<$.length;Q++){let Z=J($[Q]);if(Z)return Z}return null}_invokeAll(J){let $=Object.values(this.plugins);$.unshift(this);let Q=[];for(let Z=0;Z<$.length;Z++){let W=J($[Z]);if(W)Q.push(W)}return Q}getDependency(J,$){let Q=J+":"+$,Z=this.cache.get(Q);if(!Z){switch(J){case"scene":Z=this.loadScene($);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode($)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh($)});break;case"accessor":Z=this.loadAccessor($);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView($)});break;case"buffer":Z=this.loadBuffer($);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial($)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture($)});break;case"skin":Z=this.loadSkin($);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation($)});break;case"camera":Z=this.loadCamera($);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,$)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add(Q,Z)}return Z}getDependencies(J){let $=this.cache.get(J);if(!$){let Q=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];$=Promise.all(Z.map(function(W,Y){return Q.getDependency(J,Y)})),this.cache.add(J,$)}return $}loadBuffer(J){let $=this.json.buffers[J],Q=this.fileLoader;if($.type&&$.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+$.type+" buffer type is not supported.");if($.uri===void 0&&J===0)return Promise.resolve(this.extensions[p0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,Y){Q.load(e7.resolveURL($.uri,Z.path),W,void 0,function(){Y(Error('THREE.GLTFLoader: Failed to load buffer "'+$.uri+'".'))})})}loadBufferView(J){let $=this.json.bufferViews[J];return this.getDependency("buffer",$.buffer).then(function(Q){let Z=$.byteLength||0,W=$.byteOffset||0;return Q.slice(W,W+Z)})}loadAccessor(J){let $=this,Q=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let Y=O5[Z.type],X=P8[Z.componentType],H=Z.normalized===!0,K=new X(Z.count*Y);return Promise.resolve(new H6(K,Y,H))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(Y){let X=Y[0],H=O5[Z.type],K=P8[Z.componentType],q=K.BYTES_PER_ELEMENT,G=q*H,U=Z.byteOffset||0,F=Z.bufferView!==void 0?Q.bufferViews[Z.bufferView].byteStride:void 0,O=Z.normalized===!0,N,R;if(F&&F!==G){let V=Math.floor(U/F),E="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+V+":"+Z.count,M=$.cache.get(E);if(!M)N=new K(X,V*F,Z.count*F/q),M=new m9(N,F/q),$.cache.add(E,M);R=new o8(M,H,U%F/q,O)}else{if(X===null)N=new K(Z.count*H);else N=new K(X,U,Z.count*H);R=new H6(N,H,O)}if(Z.sparse!==void 0){let V=O5.SCALAR,E=P8[Z.sparse.indices.componentType],M=Z.sparse.indices.byteOffset||0,C=Z.sparse.values.byteOffset||0,I=new E(Y[1],M,Z.sparse.count*V),y=new K(Y[2],C,Z.sparse.count*H);if(X!==null)R=new H6(R.array.slice(),R.itemSize,R.normalized);for(let L=0,S=I.length;L<S;L++){let b=I[L];if(R.setX(b,y[L*H]),H>=2)R.setY(b,y[L*H+1]);if(H>=3)R.setZ(b,y[L*H+2]);if(H>=4)R.setW(b,y[L*H+3]);if(H>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return R})}loadTexture(J){let $=this.json,Q=this.options,W=$.textures[J].source,Y=$.images[W],X=this.textureLoader;if(Y.uri){let H=Q.manager.getHandler(Y.uri);if(H!==null)X=H}return this.loadTextureImage(J,W,X)}loadTextureImage(J,$,Q){let Z=this,W=this.json,Y=W.textures[J],X=W.images[$],H=(X.uri||X.bufferView)+":"+Y.sampler;if(this.textureCache[H])return this.textureCache[H];let K=this.loadImageSource($,Q).then(function(q){if(q.flipY=!1,q.name=Y.name||X.name||"",q.name===""&&typeof X.uri==="string"&&X.uri.startsWith("data:image/")===!1)q.name=X.uri;let U=(W.samplers||{})[Y.sampler]||{};return q.magFilter=vQ[U.magFilter]||yJ,q.minFilter=vQ[U.minFilter]||vJ,q.wrapS=fQ[U.wrapS]||x9,q.wrapT=fQ[U.wrapT]||x9,Z.associations.set(q,{textures:J}),q}).catch(function(){return null});return this.textureCache[H]=K,K}loadImageSource(J,$){let Q=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let Y=Z.images[J],X=self.URL||self.webkitURL,H=Y.uri||"",K=!1;if(Y.bufferView!==void 0)H=Q.getDependency("bufferView",Y.bufferView).then(function(G){K=!0;let U=new Blob([G],{type:Y.mimeType});return H=X.createObjectURL(U),H});else if(Y.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let q=Promise.resolve(H).then(function(G){return new Promise(function(U,F){let O=U;if($.isImageBitmapLoader===!0)O=function(N){let R=new E6(N);R.needsUpdate=!0,U(R)};$.load(e7.resolveURL(G,W.path),O,void 0,F)})}).then(function(G){if(K===!0)X.revokeObjectURL(H);return R7(G,Y),G.userData.mimeType=Y.mimeType||YK(Y.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",H),G});return this.sourceCache[J]=q,q}assignTexture(J,$,Q,Z){let W=this;return this.getDependency("texture",Q.index).then(function(Y){if(!Y)return null;if(Q.texCoord!==void 0&&Q.texCoord>0)Y=Y.clone(),Y.channel=Q.texCoord;if(W.extensions[p0.KHR_TEXTURE_TRANSFORM]){let X=Q.extensions!==void 0?Q.extensions[p0.KHR_TEXTURE_TRANSFORM]:void 0;if(X){let H=W.associations.get(Y);Y=W.extensions[p0.KHR_TEXTURE_TRANSFORM].extendTexture(Y,X),W.associations.set(Y,H)}}if(Z!==void 0)Y.colorSpace=Z;return J[$]=Y,Y})}assignFinalMaterial(J){let{geometry:$,material:Q}=J,Z=$.attributes.tangent===void 0,W=$.attributes.color!==void 0,Y=$.attributes.normal===void 0;if(J.isPoints){let X="PointsMaterial:"+Q.uuid,H=this.cache.get(X);if(!H)H=new N7,_6.prototype.copy.call(H,Q),H.color.copy(Q.color),H.map=Q.map,H.sizeAttenuation=!1,this.cache.add(X,H);Q=H}else if(J.isLine){let X="LineBasicMaterial:"+Q.uuid,H=this.cache.get(X);if(!H)H=new g6,_6.prototype.copy.call(H,Q),H.color.copy(Q.color),H.map=Q.map,this.cache.add(X,H);Q=H}if(Z||W||Y){let X="ClonedMaterial:"+Q.uuid+":";if(Z)X+="derivative-tangents:";if(W)X+="vertex-colors:";if(Y)X+="flat-shading:";let H=this.cache.get(X);if(!H){if(H=Q.clone(),W)H.vertexColors=!0;if(Y)H.flatShading=!0;if(Z){if(H.normalScale)H.normalScale.y*=-1;if(H.clearcoatNormalScale)H.clearcoatNormalScale.y*=-1}this.cache.add(X,H),this.associations.set(H,this.associations.get(Q))}Q=H}J.material=Q}getMaterialType(){return i7}loadMaterial(J){let $=this,Q=this.json,Z=this.extensions,W=Q.materials[J],Y,X={},H=W.extensions||{},K=[];if(H[p0.KHR_MATERIALS_UNLIT]){let G=Z[p0.KHR_MATERIALS_UNLIT];Y=G.getMaterialType(),K.push(G.extendParams(X,W,$))}else{let G=W.pbrMetallicRoughness||{};if(X.color=new z0(1,1,1),X.opacity=1,Array.isArray(G.baseColorFactor)){let U=G.baseColorFactor;X.color.setRGB(U[0],U[1],U[2],W7),X.opacity=U[3]}if(G.baseColorTexture!==void 0)K.push($.assignTexture(X,"map",G.baseColorTexture,S7));if(X.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,X.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)K.push($.assignTexture(X,"metalnessMap",G.metallicRoughnessTexture)),K.push($.assignTexture(X,"roughnessMap",G.metallicRoughnessTexture));Y=this._invokeOne(function(U){return U.getMaterialType&&U.getMaterialType(J)}),K.push(Promise.all(this._invokeAll(function(U){return U.extendMaterialParams&&U.extendMaterialParams(J,X)})))}if(W.doubleSided===!0)X.side=g$;let q=W.alphaMode||N5.OPAQUE;if(q===N5.BLEND)X.transparent=!0,X.depthWrite=!1;else if(X.transparent=!1,q===N5.MASK)X.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&Y!==E7){if(K.push($.assignTexture(X,"normalMap",W.normalTexture)),X.normalScale=new k0(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;X.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&Y!==E7){if(K.push($.assignTexture(X,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)X.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&Y!==E7){let G=W.emissiveFactor;X.emissive=new z0().setRGB(G[0],G[1],G[2],W7)}if(W.emissiveTexture!==void 0&&Y!==E7)K.push($.assignTexture(X,"emissiveMap",W.emissiveTexture,S7));return Promise.all(K).then(function(){let G=new Y(X);if(W.name)G.name=W.name;if(R7(G,W),$.associations.set(G,{materials:J}),W.extensions)J8(Z,G,W);return G})}createUniqueName(J){let $=i0.sanitizeNodeName(J||"");if($ in this.nodeNamesUsed)return $+"_"+ ++this.nodeNamesUsed[$];else return this.nodeNamesUsed[$]=0,$}loadGeometries(J){let $=this,Q=this.extensions,Z=this.primitiveCache;function W(X){return Q[p0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(X,$).then(function(H){return xQ(H,X,$)})}let Y=[];for(let X=0,H=J.length;X<H;X++){let K=J[X],q=WK(K),G=Z[q];if(G)Y.push(G.promise);else{let U;if(K.extensions&&K.extensions[p0.KHR_DRACO_MESH_COMPRESSION])U=W(K);else U=xQ(new K6,K,$);Z[q]={primitive:K,promise:U},Y.push(U)}}return Promise.all(Y)}loadMesh(J){let $=this,Q=this.json,Z=this.extensions,W=Q.meshes[J],Y=W.primitives,X=[];for(let H=0,K=Y.length;H<K;H++){let q=Y[H].material===void 0?$K(this.cache):this.getDependency("material",Y[H].material);X.push(q)}return X.push($.loadGeometries(Y)),Promise.all(X).then(function(H){let K=H.slice(0,H.length-1),q=H[H.length-1],G=[];for(let F=0,O=q.length;F<O;F++){let N=q[F],R=Y[F],V,E=K[F];if(R.mode===m6.TRIANGLES||R.mode===m6.TRIANGLE_STRIP||R.mode===m6.TRIANGLE_FAN||R.mode===void 0){if(V=W.isSkinnedMesh===!0?new iJ(N,E):new V6(N,E),V.isSkinnedMesh===!0)V.normalizeSkinWeights();if(R.mode===m6.TRIANGLE_STRIP)V.geometry=E5(V.geometry,h9);else if(R.mode===m6.TRIANGLE_FAN)V.geometry=E5(V.geometry,c8)}else if(R.mode===m6.LINES)V=new O7(N,E);else if(R.mode===m6.LINE_STRIP)V=new s7(N,E);else if(R.mode===m6.LINE_LOOP)V=new tJ(N,E);else if(R.mode===m6.POINTS)V=new o7(N,E);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+R.mode);if(Object.keys(V.geometry.morphAttributes).length>0)ZK(V,W);if(V.name=$.createUniqueName(W.name||"mesh_"+J),R7(V,W),R.extensions)J8(Z,V,R);$.assignFinalMaterial(V),G.push(V)}for(let F=0,O=G.length;F<O;F++)$.associations.set(G[F],{meshes:J,primitives:F});if(G.length===1){if(W.extensions)J8(Z,G[0],W);return G[0]}let U=new w6;if(W.extensions)J8(Z,U,W);$.associations.set(U,{meshes:J});for(let F=0,O=G.length;F<O;F++)U.add(G[F]);return U})}loadCamera(J){let $,Q=this.json.cameras[J],Z=Q[Q.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(Q.type==="perspective")$=new z6(b9.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if(Q.type==="orthographic")$=new s8(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if(Q.name)$.name=this.createUniqueName(Q.name);return R7($,Q),Promise.resolve($)}loadSkin(J){let $=this.json.skins[J],Q=[];for(let Z=0,W=$.joints.length;Z<W;Z++)Q.push(this._loadNodeShallow($.joints[Z]));if($.inverseBindMatrices!==void 0)Q.push(this.getDependency("accessor",$.inverseBindMatrices));else Q.push(null);return Promise.all(Q).then(function(Z){let W=Z.pop(),Y=Z,X=[],H=[];for(let K=0,q=Y.length;K<q;K++){let G=Y[K];if(G){X.push(G);let U=new y0;if(W!==null)U.fromArray(W.array,K*16);H.push(U)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',$.joints[K])}return new d9(X,H)})}loadAnimation(J){let $=this.json,Q=this,Z=$.animations[J],W=Z.name?Z.name:"animation_"+J,Y=[],X=[],H=[],K=[],q=[];for(let G=0,U=Z.channels.length;G<U;G++){let F=Z.channels[G],O=Z.samplers[F.sampler],N=F.target,R=N.node,V=Z.parameters!==void 0?Z.parameters[O.input]:O.input,E=Z.parameters!==void 0?Z.parameters[O.output]:O.output;if(N.node===void 0)continue;Y.push(this.getDependency("node",R)),X.push(this.getDependency("accessor",V)),H.push(this.getDependency("accessor",E)),K.push(O),q.push(N)}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(H),Promise.all(K),Promise.all(q)]).then(function(G){let U=G[0],F=G[1],O=G[2],N=G[3],R=G[4],V=[];for(let E=0,M=U.length;E<M;E++){let C=U[E],I=F[E],y=O[E],L=N[E],S=R[E];if(C===void 0)continue;if(C.updateMatrix)C.updateMatrix();let b=Q._createAnimationTracks(C,I,y,L,S);if(b)for(let D=0;D<b.length;D++)V.push(b[D])}return new Q5(W,void 0,V)})}createNodeMesh(J){let $=this.json,Q=this,Z=$.nodes[J];if(Z.mesh===void 0)return null;return Q.getDependency("mesh",Z.mesh).then(function(W){let Y=Q._getNodeRef(Q.meshCache,Z.mesh,W);if(Z.weights!==void 0)Y.traverse(function(X){if(!X.isMesh)return;for(let H=0,K=Z.weights.length;H<K;H++)X.morphTargetInfluences[H]=Z.weights[H]});return Y})}loadNode(J){let $=this.json,Q=this,Z=$.nodes[J],W=Q._loadNodeShallow(J),Y=[],X=Z.children||[];for(let K=0,q=X.length;K<q;K++)Y.push(Q.getDependency("node",X[K]));let H=Z.skin===void 0?Promise.resolve(null):Q.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(Y),H]).then(function(K){let q=K[0],G=K[1],U=K[2];if(U!==null)q.traverse(function(F){if(!F.isSkinnedMesh)return;F.bind(U,XK)});for(let F=0,O=G.length;F<O;F++)q.add(G[F]);return q})}_loadNodeShallow(J){let $=this.json,Q=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=$.nodes[J],Y=W.name?Z.createUniqueName(W.name):"",X=[],H=Z._invokeOne(function(K){return K.createNodeMesh&&K.createNodeMesh(J)});if(H)X.push(H);if(W.camera!==void 0)X.push(Z.getDependency("camera",W.camera).then(function(K){return Z._getNodeRef(Z.cameraCache,W.camera,K)}));return Z._invokeAll(function(K){return K.createNodeAttachment&&K.createNodeAttachment(J)}).forEach(function(K){X.push(K)}),this.nodeCache[J]=Promise.all(X).then(function(K){let q;if(W.isBone===!0)q=new l9;else if(K.length>1)q=new w6;else if(K.length===1)q=K[0];else q=new J6;if(q!==K[0])for(let G=0,U=K.length;G<U;G++)q.add(K[G]);if(W.name)q.userData.name=W.name,q.name=Y;if(R7(q,W),W.extensions)J8(Q,q,W);if(W.matrix!==void 0){let G=new y0;G.fromArray(W.matrix),q.applyMatrix4(G)}else{if(W.translation!==void 0)q.position.fromArray(W.translation);if(W.rotation!==void 0)q.quaternion.fromArray(W.rotation);if(W.scale!==void 0)q.scale.fromArray(W.scale)}if(!Z.associations.has(q))Z.associations.set(q,{});return Z.associations.get(q).nodes=J,q}),this.nodeCache[J]}loadScene(J){let $=this.extensions,Q=this.json.scenes[J],Z=this,W=new w6;if(Q.name)W.name=Z.createUniqueName(Q.name);if(R7(W,Q),Q.extensions)J8($,W,Q);let Y=Q.nodes||[],X=[];for(let H=0,K=Y.length;H<K;H++)X.push(Z.getDependency("node",Y[H]));return Promise.all(X).then(function(H){for(let q=0,G=H.length;q<G;q++)W.add(H[q]);let K=(q)=>{let G=new Map;for(let[U,F]of Z.associations)if(U instanceof _6||U instanceof E6)G.set(U,F);return q.traverse((U)=>{let F=Z.associations.get(U);if(F!=null)G.set(U,F)}),G};return Z.associations=K(W),W})}_createAnimationTracks(J,$,Q,Z,W){let Y=[],X=J.name?J.name:J.uuid,H=[];if(v7[W.path]===v7.weights)J.traverse(function(U){if(U.morphTargetInfluences)H.push(U.name?U.name:U.uuid)});else H.push(X);let K;switch(v7[W.path]){case v7.weights:K=P7;break;case v7.rotation:K=j7;break;case v7.position:case v7.scale:K=T7;break;default:switch(Q.itemSize){case 1:K=P7;break;case 2:case 3:default:K=T7;break}break}let q=Z.interpolation!==void 0?JK[Z.interpolation]:fJ,G=this._getArrayFromAccessor(Q);for(let U=0,F=H.length;U<F;U++){let O=new K(H[U]+"."+v7[W.path],$.array,G,q);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(O);Y.push(O)}return Y}_getArrayFromAccessor(J){let $=J.array;if(J.normalized){let Q=B5($.constructor),Z=new Float32Array($.length);for(let W=0,Y=$.length;W<Y;W++)Z[W]=$[W]*Q;$=Z}return $}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function(Q){return new(this instanceof j7?XZ:k5)(this.times,this.values,this.getValueSize()/3,Q)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function HK(J,$,Q){let Z=$.attributes,W=new f6;if(Z.POSITION!==void 0){let H=Q.json.accessors[Z.POSITION],K=H.min,q=H.max;if(K!==void 0&&q!==void 0){if(W.set(new P(K[0],K[1],K[2]),new P(q[0],q[1],q[2])),H.normalized){let G=B5(P8[H.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let Y=$.targets;if(Y!==void 0){let H=new P,K=new P;for(let q=0,G=Y.length;q<G;q++){let U=Y[q];if(U.POSITION!==void 0){let F=Q.json.accessors[U.POSITION],O=F.min,N=F.max;if(O!==void 0&&N!==void 0){if(K.setX(Math.max(Math.abs(O[0]),Math.abs(N[0]))),K.setY(Math.max(Math.abs(O[1]),Math.abs(N[1]))),K.setZ(Math.max(Math.abs(O[2]),Math.abs(N[2]))),F.normalized){let R=B5(P8[F.componentType]);K.multiplyScalar(R)}H.max(K)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(H)}J.boundingBox=W;let X=new b6;W.getCenter(X.center),X.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=X}function xQ(J,$,Q){let Z=$.attributes,W=[];function Y(X,H){return Q.getDependency("accessor",X).then(function(K){J.setAttribute(H,K)})}for(let X in Z){let H=z5[X]||X.toLowerCase();if(H in J.attributes)continue;W.push(Y(Z[X],H))}if($.indices!==void 0&&!J.index){let X=Q.getDependency("accessor",$.indices).then(function(H){J.setIndex(H)});W.push(X)}if(c0.workingColorSpace!==W7&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${c0.workingColorSpace}" not supported.`);return R7(J,$),HK(J,$,Q),Promise.all(W).then(function(){return $.targets!==void 0?QK(J,$.targets,Q):J})}var KK=/^[og]\s*(.+)?/,qK=/^mtllib /,GK=/^usemtl /,UK=/^usemap /,KZ=/\s+/,qZ=new P,L5=new P,GZ=new P,UZ=new P,l6=new P,o9=new z0;function FK(){let J={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function($,Q){if(this.object&&this.object.fromDeclaration===!1){this.object.name=$,this.object.fromDeclaration=Q!==!1;return}let Z=this.object&&typeof this.object.currentMaterial==="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize==="function")this.object._finalize(!0);if(this.object={name:$||"",fromDeclaration:Q!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(W,Y){let X=this._finalize(!1);if(X&&(X.inherited||X.groupCount<=0))this.materials.splice(X.index,1);let H={index:this.materials.length,name:W||"",mtllib:Array.isArray(Y)&&Y.length>0?Y[Y.length-1]:"",smooth:X!==void 0?X.smooth:this.smooth,groupStart:X!==void 0?X.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(K){let q={index:typeof K==="number"?K:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return q.clone=this.clone.bind(q),q}};return this.materials.push(H),H},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1];return},_finalize:function(W){let Y=this.currentMaterial();if(Y&&Y.groupEnd===-1)Y.groupEnd=this.geometry.vertices.length/3,Y.groupCount=Y.groupEnd-Y.groupStart,Y.inherited=!1;if(W&&this.materials.length>1){for(let X=this.materials.length-1;X>=0;X--)if(this.materials[X].groupCount<=0)this.materials.splice(X,1)}if(W&&this.materials.length===0)this.materials.push({name:"",smooth:this.smooth});return Y}},Z&&Z.name&&typeof Z.clone==="function"){let W=Z.clone(0);W.inherited=!0,this.object.materials.push(W)}this.objects.push(this.object)},finalize:function(){if(this.object&&typeof this.object._finalize==="function")this.object._finalize(!0)},parseVertexIndex:function($,Q){let Z=parseInt($,10);return(Z>=0?Z-1:Z+Q/3)*3},parseNormalIndex:function($,Q){let Z=parseInt($,10);return(Z>=0?Z-1:Z+Q/3)*3},parseUVIndex:function($,Q){let Z=parseInt($,10);return(Z>=0?Z-1:Z+Q/2)*2},addVertex:function($,Q,Z){let W=this.vertices,Y=this.object.geometry.vertices;Y.push(W[$+0],W[$+1],W[$+2]),Y.push(W[Q+0],W[Q+1],W[Q+2]),Y.push(W[Z+0],W[Z+1],W[Z+2])},addVertexPoint:function($){let Q=this.vertices;this.object.geometry.vertices.push(Q[$+0],Q[$+1],Q[$+2])},addVertexLine:function($){let Q=this.vertices;this.object.geometry.vertices.push(Q[$+0],Q[$+1],Q[$+2])},addNormal:function($,Q,Z){let W=this.normals,Y=this.object.geometry.normals;Y.push(W[$+0],W[$+1],W[$+2]),Y.push(W[Q+0],W[Q+1],W[Q+2]),Y.push(W[Z+0],W[Z+1],W[Z+2])},addFaceNormal:function($,Q,Z){let W=this.vertices,Y=this.object.geometry.normals;qZ.fromArray(W,$),L5.fromArray(W,Q),GZ.fromArray(W,Z),l6.subVectors(GZ,L5),UZ.subVectors(qZ,L5),l6.cross(UZ),l6.normalize(),Y.push(l6.x,l6.y,l6.z),Y.push(l6.x,l6.y,l6.z),Y.push(l6.x,l6.y,l6.z)},addColor:function($,Q,Z){let W=this.colors,Y=this.object.geometry.colors;if(W[$]!==void 0)Y.push(W[$+0],W[$+1],W[$+2]);if(W[Q]!==void 0)Y.push(W[Q+0],W[Q+1],W[Q+2]);if(W[Z]!==void 0)Y.push(W[Z+0],W[Z+1],W[Z+2])},addUV:function($,Q,Z){let W=this.uvs,Y=this.object.geometry.uvs;Y.push(W[$+0],W[$+1]),Y.push(W[Q+0],W[Q+1]),Y.push(W[Z+0],W[Z+1])},addDefaultUV:function(){let $=this.object.geometry.uvs;$.push(0,0),$.push(0,0),$.push(0,0)},addUVLine:function($){let Q=this.uvs;this.object.geometry.uvs.push(Q[$+0],Q[$+1])},addFace:function($,Q,Z,W,Y,X,H,K,q){let G=this.vertices.length,U=this.parseVertexIndex($,G),F=this.parseVertexIndex(Q,G),O=this.parseVertexIndex(Z,G);if(this.addVertex(U,F,O),this.addColor(U,F,O),H!==void 0&&H!==""){let N=this.normals.length;U=this.parseNormalIndex(H,N),F=this.parseNormalIndex(K,N),O=this.parseNormalIndex(q,N),this.addNormal(U,F,O)}else this.addFaceNormal(U,F,O);if(W!==void 0&&W!==""){let N=this.uvs.length;U=this.parseUVIndex(W,N),F=this.parseUVIndex(Y,N),O=this.parseUVIndex(X,N),this.addUV(U,F,O),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function($){this.object.geometry.type="Points";let Q=this.vertices.length;for(let Z=0,W=$.length;Z<W;Z++){let Y=this.parseVertexIndex($[Z],Q);this.addVertexPoint(Y),this.addColor(Y)}},addLineGeometry:function($,Q){this.object.geometry.type="Line";let Z=this.vertices.length,W=this.uvs.length;for(let Y=0,X=$.length;Y<X;Y++)this.addVertexLine(this.parseVertexIndex($[Y],Z));for(let Y=0,X=Q.length;Y<X;Y++)this.addUVLine(this.parseUVIndex(Q[Y],W))}};return J.startObject("",!1),J}class D5 extends u6{constructor(J){super(J);this.materials=null}load(J,$,Q,Z){let W=this,Y=new y7(this.manager);Y.setPath(this.path),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{$(W.parse(X))}catch(H){if(Z)Z(H);else console.error(H);W.manager.itemError(J)}},Q,Z)}setMaterials(J){return this.materials=J,this}parse(J){let $=new FK;if(J.indexOf(`\r
`)!==-1)J=J.replace(/\r\n/g,`
`);if(J.indexOf("\\\n")!==-1)J=J.replace(/\\\n/g,"");let Q=J.split(`
`),Z=[];for(let X=0,H=Q.length;X<H;X++){let K=Q[X].trimStart();if(K.length===0)continue;let q=K.charAt(0);if(q==="#")continue;if(q==="v"){let G=K.split(KZ);switch(G[0]){case"v":if($.vertices.push(parseFloat(G[1]),parseFloat(G[2]),parseFloat(G[3])),G.length>=7)o9.setRGB(parseFloat(G[4]),parseFloat(G[5]),parseFloat(G[6])).convertSRGBToLinear(),$.colors.push(o9.r,o9.g,o9.b);else $.colors.push(void 0,void 0,void 0);break;case"vn":$.normals.push(parseFloat(G[1]),parseFloat(G[2]),parseFloat(G[3]));break;case"vt":$.uvs.push(parseFloat(G[1]),parseFloat(G[2]));break}}else if(q==="f"){let U=K.slice(1).trim().split(KZ),F=[];for(let N=0,R=U.length;N<R;N++){let V=U[N];if(V.length>0){let E=V.split("/");F.push(E)}}let O=F[0];for(let N=1,R=F.length-1;N<R;N++){let V=F[N],E=F[N+1];$.addFace(O[0],V[0],E[0],O[1],V[1],E[1],O[2],V[2],E[2])}}else if(q==="l"){let G=K.substring(1).trim().split(" "),U=[],F=[];if(K.indexOf("/")===-1)U=G;else for(let O=0,N=G.length;O<N;O++){let R=G[O].split("/");if(R[0]!=="")U.push(R[0]);if(R[1]!=="")F.push(R[1])}$.addLineGeometry(U,F)}else if(q==="p"){let U=K.slice(1).trim().split(" ");$.addPointGeometry(U)}else if((Z=KK.exec(K))!==null){let G=(" "+Z[0].slice(1).trim()).slice(1);$.startObject(G)}else if(GK.test(K))$.object.startMaterial(K.substring(7).trim(),$.materialLibraries);else if(qK.test(K))$.materialLibraries.push(K.substring(7).trim());else if(UK.test(K))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(q==="s"){if(Z=K.split(" "),Z.length>1){let U=Z[1].trim().toLowerCase();$.object.smooth=U!=="0"&&U!=="off"}else $.object.smooth=!0;let G=$.object.currentMaterial();if(G)G.smooth=$.object.smooth}else{if(K==="\x00")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+K+'"')}}$.finalize();let W=new w6;if(W.materialLibraries=[].concat($.materialLibraries),!($.objects.length===1&&$.objects[0].geometry.vertices.length===0)===!0)for(let X=0,H=$.objects.length;X<H;X++){let K=$.objects[X],q=K.geometry,G=K.materials,U=q.type==="Line",F=q.type==="Points",O=!1;if(q.vertices.length===0)continue;let N=new K6;if(N.setAttribute("position",new Q6(q.vertices,3)),q.normals.length>0)N.setAttribute("normal",new Q6(q.normals,3));if(q.colors.length>0)O=!0,N.setAttribute("color",new Q6(q.colors,3));if(q.hasUVIndices===!0)N.setAttribute("uv",new Q6(q.uvs,2));let R=[];for(let E=0,M=G.length;E<M;E++){let C=G[E],I=C.name+"_"+C.smooth+"_"+O,y=$.materials[I];if(this.materials!==null){if(y=this.materials.create(C.name),U&&y&&!(y instanceof g6)){let L=new g6;_6.prototype.copy.call(L,y),L.color.copy(y.color),y=L}else if(F&&y&&!(y instanceof N7)){let L=new N7({size:10,sizeAttenuation:!1});_6.prototype.copy.call(L,y),L.color.copy(y.color),L.map=y.map,y=L}}if(y===void 0){if(U)y=new g6;else if(F)y=new N7({size:1,sizeAttenuation:!1});else y=new J5;y.name=C.name,y.flatShading=C.smooth?!1:!0,y.vertexColors=O,$.materials[I]=y}R.push(y)}let V;if(R.length>1){for(let E=0,M=G.length;E<M;E++){let C=G[E];N.addGroup(C.groupStart,C.groupCount,E)}if(U)V=new O7(N,R);else if(F)V=new o7(N,R);else V=new V6(N,R)}else if(U)V=new O7(N,R[0]);else if(F)V=new o7(N,R[0]);else V=new V6(N,R[0]);V.name=K.name,W.add(V)}else if($.vertices.length>0){let X=new N7({size:1,sizeAttenuation:!1}),H=new K6;if(H.setAttribute("position",new Q6($.vertices,3)),$.colors.length>0&&$.colors[0]!==void 0)H.setAttribute("color",new Q6($.colors,3)),X.vertexColors=!0;let K=new o7(H,X);W.add(K)}return W}}var VK=300000,P6=(J)=>document.getElementById(J),t8=P6("view"),S8=new sJ({canvas:t8,antialias:!0,alpha:!0});S8.setPixelRatio(Math.min(window.devicePixelRatio,2));S8.toneMapping=p$;S8.outputColorSpace=S7;var B7=new oJ,J7=new z6(45,1,0.1,1000),Q8=new F5(J7,t8);Q8.enableDamping=!0;Q8.dampingFactor=0.08;Q8.screenSpacePanning=!0;B7.add(new W5(16777215,3752525,1.1));var EZ=new A8(16777215,1.6);EZ.position.set(1,2,1.5);B7.add(EZ);var OZ=new A8(14674175,0.5);OZ.position.set(-1.5,0.6,-1);B7.add(OZ);var $8=null,e6=null,$7=null,_5=[],e8=[],a9=null,z7={grid:!0,wire:!1,edges:!0};function C5(J){return J>=100?J.toFixed(0):J>=10?J.toFixed(1):J.toFixed(2)}function FZ(J){J.traverse(($)=>{if($.geometry)$.geometry.dispose();if($.material)(Array.isArray($.material)?$.material:[$.material]).forEach((Z)=>{Object.values(Z).forEach((W)=>W&&W.isTexture&&W.dispose()),Z.dispose()})})}function EK(){if(e6)B7.remove(e6),FZ(e6),e6=null;if($7)B7.remove($7),FZ($7),$7=null;_5=[],e8=[]}function OK(J){let $=[0.1,0.2,0.5,1,2,5,10,20,50,100,200,500,1000];for(let Q of $)if(J/Q<=12)return Q;return 2000}function NK(){$7=new w6;let{size:J}=a9,$=Math.max(J.x,J.z,0.000001),Q=OK($),Z=Q*Math.max(2,Math.ceil($*1.6/Q/2)*2),W=new G5(Z,Math.round(Z/Q),5597050,2898247);W.material.transparent=!0,W.material.opacity=0.6,$7.add(W);let Y=Math.max(J.x,J.y,J.z)*0.55,X=new w6;X.rotation.x=-Math.PI/2;let H=(q,G)=>{let U=new K6().setFromPoints([new P,q.multiplyScalar(Y)]);X.add(new s7(U,new g6({color:G})))};H(new P(1,0,0),15026253),H(new P(0,1,0),4630360),H(new P(0,0,1),3900150),$7.add(X);let K=P6("gridstep");if(K)K.textContent=`grid ${Q} mm`;$7.visible=z7.grid,B7.add($7)}function RK(J){let $=[];return J.traverse((Q)=>{if(Q.isMesh&&Q.geometry)$.push(Q)}),$}function NZ(){let J=0;for(let $ of e8){let Q=$.geometry;J+=(Q.index?Q.index.count:Q.attributes.position.count)/3}return Math.round(J)}function zK(){if(NZ()>VK){P6("btn-edges").classList.add("disabled");return}for(let J of e8){let $=new O7(new eJ(J.geometry,30),new g6({color:1186338,transparent:!0,opacity:0.5}));$.visible=z7.edges,J.add($),_5.push($)}}function T8(J,$,Q){let Z=J*Math.PI/180,W=$*Math.PI/180,{radius:Y,height:X}=a9,H=J7.fov*Math.PI/180,K=Math.min(H/2,Math.atan(Math.tan(H/2)*J7.aspect)),q=Y/Math.sin(K)*1.15,G=new P(0,X/2,0);J7.position.set(G.x+q*Math.sin(Z)*Math.cos(W),G.y+q*Math.sin(W),G.z+q*Math.cos(Z)*Math.cos(W)),J7.near=Math.max(q/1000,0.001),J7.far=q*100,J7.updateProjectionMatrix(),Q8.target.copy(G),Q8.update()}var i9=()=>T8(45,30);async function BK(J){let $=await fetch(J);if(!$.ok)throw Error(`${$.status} ${$.statusText} for ${J}`);let Q=+$.headers.get("content-length")||0;if(!$.body||!Q)return await $.arrayBuffer();let Z=$.body.getReader(),W=new Uint8Array(Q),Y=0;for(;;){let{done:X,value:H}=await Z.read();if(X)break;W.set(H,Y),Y+=H.length,r8(`loading… ${Math.round(Y/Q*100)}%`)}return W.buffer}var VZ=()=>new i7({color:10335432,metalness:0.15,roughness:0.55,flatShading:!0});async function MK(J,$){let Q=J.split(".").pop().toLowerCase();if(Q==="stl"){let Z=new V5().parse($);return{object:new V6(Z,VZ()),zUp:!0}}if(Q==="obj"){let Z=new D5().parse(new TextDecoder().decode($));return Z.traverse((W)=>{if(W.isMesh)W.material=VZ()}),{object:Z,zUp:!0}}if(Q==="glb"||Q==="gltf")return{object:(await new M5().parseAsync($,"./")).scene,zUp:!1};throw Error(`unsupported format: .${Q}`)}async function RZ(J){r8("loading…"),EK();try{let $=await BK(`./${J.file}`),{object:Q,zUp:Z}=await MK(J.file,$);if(e6=new w6,Z){let H=new w6;H.rotation.x=-Math.PI/2,H.add(Q),e6.add(H)}else e6.add(Q);B7.add(e6);let W=new f6().setFromObject(e6),Y=W.getCenter(new P),X=W.getSize(new P);e6.position.set(-Y.x,-W.min.y,-Y.z),a9={size:X,radius:Math.max(X.length()/2,0.000001),height:X.y},e8=RK(e6),zZ(),zK(),NK(),i9(),P6("dims").textContent=`X ${C5(X.x)} × Y ${C5(X.z)} × Z ${C5(X.y)} mm`,P6("meta").textContent=`${NZ().toLocaleString()} tris · ${J.file}`+(J.bytes?` · ${(J.bytes/1048576).toFixed(1)} MB`:""),r8("")}catch($){r8(`failed to load ${J.file}: ${$.message}`,!0)}}function r8(J,$=!1){let Q=P6("status");Q.textContent=J,Q.className=$?"error":"",Q.style.display=J?"block":"none"}function zZ(){for(let J of e8)(Array.isArray(J.material)?J.material:[J.material]).forEach((Q)=>{if("wireframe"in Q)Q.wireframe=z7.wire})}function w5(J,$,Q){let Z=P6(J);Z.classList.toggle("on",z7[$]),Z.addEventListener("click",()=>{z7[$]=!z7[$],Z.classList.toggle("on",z7[$]),Q()})}function kK(){P6("title").textContent=$8.title,document.title=`${$8.title} — CAD viewer`;let J=P6("model");if($8.models.length>1)$8.models.forEach(($,Q)=>J.add(new Option($.label,Q))),J.addEventListener("change",()=>RZ($8.models[+J.value])),J.style.display="block";P6("btn-fit").addEventListener("click",i9),P6("btn-iso").addEventListener("click",()=>T8(45,30)),P6("btn-top").addEventListener("click",()=>T8(0,88.5)),P6("btn-front").addEventListener("click",()=>T8(0,0)),P6("btn-right").addEventListener("click",()=>T8(90,0)),w5("btn-grid","grid",()=>{if($7)$7.visible=z7.grid}),w5("btn-wire","wire",zZ),w5("btn-edges","edges",()=>_5.forEach(($)=>{$.visible=z7.edges})),t8.addEventListener("dblclick",i9)}function BZ(){let J=t8.clientWidth||window.innerWidth,$=t8.clientHeight||window.innerHeight;S8.setSize(J,$,!1),J7.aspect=J/$,J7.updateProjectionMatrix()}async function LK(){try{let J=await fetch("./manifest.json");if(!J.ok)throw Error(`${J.status} ${J.statusText}`);$8=await J.json()}catch(J){r8(`failed to load manifest.json: ${J.message}`,!0);return}kK(),await RZ($8.models[0])}window.addEventListener("resize",BZ);BZ();S8.setAnimationLoop(()=>{Q8.update(),S8.render(B7,J7)});LK();window.cadviewer={setView:T8,fit:i9,scene:B7,camera:J7,controls:Q8,get bounds(){return a9}};
