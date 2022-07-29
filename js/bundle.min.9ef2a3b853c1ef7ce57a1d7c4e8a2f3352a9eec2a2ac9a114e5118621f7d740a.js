window.params={codeBlock:{maxLines:7,lineNos:!1},utterances:{theme:""}},(()=>{var n={4750:(e,t,n)=>{"use strict";n.r(t),n.d(t,{afterMain:()=>te,afterRead:()=>q,afterWrite:()=>ve,applyStyles:()=>z,arrow:()=>Q,auto:()=>F,basePlacements:()=>b,beforeMain:()=>de,beforeRead:()=>se,beforeWrite:()=>Oe,bottom:()=>i,clippingParents:()=>Z,computeStyles:()=>P,createPopper:()=>Fe,createPopperBase:()=>Me,createPopperLite:()=>Ae,detectOverflow:()=>j,end:()=>g,eventListeners:()=>K,flip:()=>be,hide:()=>_e,left:()=>o,main:()=>me,modifierPhases:()=>pe,offset:()=>Ce,placements:()=>N,popper:()=>_,popperGenerator:()=>M,popperOffsets:()=>$,preventOverflow:()=>xe,read:()=>ie,reference:()=>ee,right:()=>a,start:()=>p,top:()=>s,variationPlacements:()=>R,viewport:()=>U,write:()=>we});var u,E,V,J,s="top",i="bottom",a="right",o="left",F="auto",b=[s,i,a,o],p="start",g="end",Z="clippingParents",U="viewport",_="popper",ee="reference",R=b.reduce(function(e,t){return e.concat([t+"-"+p,t+"-"+g])},[]),N=[].concat(b,[F]).reduce(function(e,t){return e.concat([t,t+"-"+p,t+"-"+g])},[]),se="beforeRead",ie="read",q="afterRead",de="beforeMain",me="main",te="afterMain",Oe="beforeWrite",we="write",ve="afterWrite",pe=[se,ie,q,de,me,te,Oe,we,ve],oe,ae;function d(e){return e?(e.nodeName||"").toLowerCase():null}function c(e){if(e==null)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function C(e){return e instanceof c(e).Element||e instanceof Element}function r(e){return e instanceof c(e).HTMLElement||e instanceof HTMLElement}function le(e){return"undefined"!=typeof ShadowRoot&&(e instanceof c(e).ShadowRoot||e instanceof ShadowRoot)}const z={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},s=t.attributes[e]||{},n=t.elements[e];r(n)&&d(n)&&(Object.assign(n.style,o),Object.keys(s).forEach(function(e){var t=s[e];!1===t?n.removeAttribute(e):n.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var s=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});r(s)&&d(s)&&(Object.assign(s.style,i),Object.keys(o).forEach(function(e){s.removeAttribute(e)}))})}},requires:["computeStyles"]};function l(e){return e.split("-")[0]}u=Math.round;function y(e,t){void 0===t&&(t=!1);var i,a,n=e.getBoundingClientRect(),s=1,o=1;return r(e)&&t&&(i=e.offsetHeight,a=e.offsetWidth,a>0&&(s=n.width/a||1),i>0&&(o=n.height/i||1)),{width:u(n.width/s),height:u(n.height/o),top:u(n.top/o),right:u(n.right/s),bottom:u(n.bottom/o),left:u(n.left/s),x:u(n.left/s),y:u(n.top/o)}}function L(e){var t=y(e),n=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:s}}function ne(e,t){var n,s=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(s&&le(s)){n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function h(e){return c(e).getComputedStyle(e)}function Se(e){return["table","td","th"].indexOf(d(e))>=0}function m(e){return((C(e)?e.ownerDocument:e.document)||window.document).documentElement}function S(e){return"html"===d(e)?e:e.assignedSlot||e.parentNode||(le(e)?e.host:null)||m(e)}function Y(e){return r(e)&&"fixed"!==h(e).position?e.offsetParent:null}function w(e){for(var n=c(e),t=Y(e);t&&Se(t)&&"static"===h(t).position;)t=Y(t);return t&&("html"===d(t)||"body"===d(t)&&"static"===h(t).position)?n:t||function(e){var t,n,s=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&r(e)&&"fixed"===h(e).position)return null;for(n=S(e);r(n)&&["html","body"].indexOf(d(n))<0;){if(t=h(n),"none"!==t.transform||"none"!==t.perspective||"paint"===t.contain||-1!==["transform","perspective"].indexOf(t.willChange)||s&&"filter"===t.willChange||s&&t.filter&&"none"!==t.filter)return n;n=n.parentNode}return null}(e)||n}function W(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var f=Math.max,x=Math.min,T=Math.round;function A(e,t,n){return f(e,x(t,n))}function G(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function X(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}const Q={name:"arrow",enabled:!0,phase:"main",fn:function(e){var c,t=e.state,M=e.name,S=e.options,d=t.elements.arrow,u=t.modifiersData.popperOffsets,m=l(t.placement),n=W(m),r=[o,a].indexOf(m)>=0?"height":"width";if(d&&u){var p=function(e,t){return G("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:X(e,b))}(S.padding,t),g=L(d),y="y"===n?s:o,x="y"===n?i:a,O=t.rects.reference[r]+t.rects.reference[n]-u[n]-t.rects.popper[r],_=u[n]-t.rects.reference[n],h=w(d),j=h?"y"===n?h.clientHeight||0:h.clientWidth||0:0,C=O/2-_/2,E=p[y],k=j-g[r]-p[x],f=j/2-g[r]/2+C,v=A(E,f,k),F=n;t.modifiersData[M]=((c={})[F]=v,c.centerOffset=v-f,c)}},effect:function(e){var n=e.state,s=e.options.element,t=void 0===s?"[data-popper-arrow]":s;t!=null&&("string"!=typeof t||(t=n.elements.popper.querySelector(t)))&&ne(n.elements.popper,t)&&(n.elements.arrow=t)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function v(e){return e.split("-")[1]}J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ce(e){var u,f,_,v=e.popper,S=e.popperRect,n=e.placement,x=e.variation,d=e.offsets,E=e.position,p=e.gpuAcceleration,z=e.adaptive,b=e.roundOffsets,A=!0===b?function(e){var n=e.x,s=e.y,t=window.devicePixelRatio||1;return{x:T(T(n*t)/t)||0,y:T(T(s*t)/t)||0}}(d):"function"==typeof b?b(d):d,k=A.x,r=void 0===k?0:k,O=A.y,l=void 0===O?0:O,C=d.hasOwnProperty("x"),D=d.hasOwnProperty("y"),y=o,j=s,N=window;if(z){var t=w(v),M="clientHeight",F="clientWidth";t===c(v)&&"static"!==h(t=m(v)).position&&"absolute"===E&&(M="scrollHeight",F="scrollWidth"),t=t,n!==s&&(n!==o&&n!==a||x!==g)||(j=i,l-=t[M]-S.height,l*=p?1:-1),n!==o&&(n!==s&&n!==i||x!==g)||(y=a,r-=t[F]-S.width,r*=p?1:-1)}return _=Object.assign({position:E},z&&J),p?Object.assign({},_,((u={})[j]=D?"0":"",u[y]=C?"0":"",u.transform=(N.devicePixelRatio||1)<=1?"translate("+r+"px, "+l+"px)":"translate3d("+r+"px, "+l+"px, 0)",u)):Object.assign({},_,((f={})[j]=D?l+"px":"",f[y]=C?r+"px":"",f.transform="",f))}const P={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,s=n.gpuAcceleration,c=void 0===s||s,o=n.adaptive,d=void 0===o||o,i=n.roundOffsets,a=void 0===i||i,r={placement:l(t.placement),variation:v(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:c};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ce(Object.assign({},r,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:d,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ce(Object.assign({},r,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};E={passive:!0};const K={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,t=e.instance,s=e.options,o=s.scroll,i=void 0===o||o,a=s.resize,r=void 0===a||a,l=c(n.elements.popper),d=[].concat(n.scrollParents.reference,n.scrollParents.popper);return i&&d.forEach(function(e){e.addEventListener("scroll",t.update,E)}),r&&l.addEventListener("resize",t.update,E),function(){i&&d.forEach(function(e){e.removeEventListener("scroll",t.update,E)}),r&&l.removeEventListener("resize",t.update,E)}},data:{}};oe={left:"right",right:"left",bottom:"top",top:"bottom"};function k(e){return e.replace(/left|right|bottom|top/g,function(e){return oe[e]})}ae={start:"end",end:"start"};function re(e){return e.replace(/start|end/g,function(e){return ae[e]})}function I(e){var t=c(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function D(e){return y(m(e)).left+I(e).scrollLeft}function H(e){var t=h(e),n=t.overflow,s=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+s)}function ue(e){return["html","body","#document"].indexOf(d(e))>=0?e.ownerDocument.body:r(e)&&H(e)?e:ue(S(e))}function O(e,t){void 0===t&&(t=[]);var s,n=ue(e),o=n===(null==(s=e.ownerDocument)?void 0:s.body),i=c(n),a=o?[i].concat(i.visualViewport||[],H(n)?n:[]):n,r=t.concat(a);return o?r:r.concat(O(S(a)))}function B(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function fe(e,t){return t===U?B(function(e){var r=c(e),s=m(e),t=r.visualViewport,o=s.clientWidth,i=s.clientHeight,a=0,n=0;return t&&(o=t.width,i=t.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=t.offsetLeft,n=t.offsetTop)),{width:o,height:i,x:a+D(e),y:n}}(e)):r(t)?function(e){var t=y(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):B(function(e){var s,n=m(e),o=I(e),t=null==(s=e.ownerDocument)?void 0:s.body,i=f(n.scrollWidth,n.clientWidth,t?t.scrollWidth:0,t?t.clientWidth:0),r=f(n.scrollHeight,n.clientHeight,t?t.scrollHeight:0,t?t.clientHeight:0),a=-o.scrollLeft+D(e),c=-o.scrollTop;return"rtl"===h(t||n).direction&&(a+=f(n.clientWidth,t?t.clientWidth:0)-i),{width:i,height:r,x:a,y:c}}(m(e)))}function ke(e,t,n){var i="clippingParents"===t?function(e){var n=O(S(e)),t=["absolute","fixed"].indexOf(h(e).position)>=0&&r(e)?w(e):e;return C(t)?n.filter(function(e){return C(e)&&ne(e,t)&&"body"!==d(e)}):[]}(e):[].concat(t),o=[].concat(i,[n]),a=o[0],s=o.reduce(function(t,n){var s=fe(e,n);return t.top=f(s.top,t.top),t.right=x(s.right,t.right),t.bottom=x(s.bottom,t.bottom),t.left=f(s.left,t.left),t},fe(e,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ge(e){var n,r,d,t=e.reference,c=e.element,u=e.placement,h=u?l(u):null,b=u?v(u):null,m=t.x+t.width/2-c.width/2,f=t.y+t.height/2-c.height/2;switch(h){case s:n={x:m,y:t.y-c.height};break;case i:n={x:m,y:t.y+t.height};break;case a:n={x:t.x+t.width,y:f};break;case o:n={x:t.x-c.width,y:f};break;default:n={x:t.x,y:t.y}}if(r=h?W(h):null,r!=null)switch(d="y"===r?"height":"width",b){case p:n[r]=n[r]-(t[d]/2-c[d]/2);break;case g:n[r]=n[r]+(t[d]/2-c[d]/2)}return n}function j(e,t){void 0===t&&(t={});var A,n=t,j=n.placement,O=void 0===j?e.placement:j,k=n.boundary,D=void 0===k?Z:k,w=n.rootBoundary,T=void 0===w?U:w,E=n.elementContext,l=void 0===E?_:E,p=n.altBoundary,z=void 0!==p&&p,v=n.padding,h=void 0===v?0:v,c=G("number"!=typeof h?h:X(h,b)),F=l===_?ee:_,x=e.rects.popper,u=e.elements[z?F:l],r=ke(C(u)?u:u.contextElement||m(e.elements.popper),D,T),f=y(e.elements.reference),S=ge({reference:f,element:x,strategy:"absolute",placement:O}),M=B(Object.assign({},x,S)),o=l===_?M:f,d={top:r.top-o.top+c.top,bottom:o.bottom-r.bottom+c.bottom,left:r.left-o.left+c.left,right:o.right-r.right+c.right},g=e.modifiersData.offset;return l===_&&g&&(A=g[O],Object.keys(d).forEach(function(e){var t=[a,i].indexOf(e)>=0?1:-1,n=[s,i].indexOf(e)>=0?"y":"x";d[e]+=A[n]*t})),d}const be={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,x=e.name;if(!t.modifiersData[x]._skip){for(var r,f,C,E,w=n.mainAxis,B=void 0===w||w,L=n.altAxis,G=void 0===L||L,K=n.fallbackPlacements,I=n.padding,D=n.boundary,A=n.rootBoundary,Y=n.altBoundary,O=n.flipVariations,g=void 0===O||O,q=n.allowedAutoPlacements,d=t.options.placement,U=l(d),W=K||(U===d||!g?[k(d)]:function(e){if(l(e)===F)return[];var t=k(e);return[re(e),t,re(t)]}(d)),m=[d].concat(W).reduce(function(e,n){return e.concat(l(n)===F?function(e,t){void 0===t&&(t={});var s,n=t,c=n.placement,u=n.boundary,h=n.rootBoundary,m=n.padding,f=n.flipVariations,r=n.allowedAutoPlacements,d=void 0===r?N:r,i=v(c),a=i?f?R:R.filter(function(e){return v(e)===i}):b,o=a.filter(function(e){return d.indexOf(e)>=0});return 0===o.length&&(o=a),s=o.reduce(function(t,n){return t[n]=j(e,{placement:n,boundary:u,rootBoundary:h,padding:m})[l(n)],t},{}),Object.keys(s).sort(function(e,t){return s[e]-s[t]})}(t,{placement:n,boundary:D,rootBoundary:A,padding:I,flipVariations:g,allowedAutoPlacements:q}):n)},[]),$=t.rects.reference,V=t.rects.popper,z=new Map,H=!0,h=m[0],_=0;_<m.length;_++){var c=m[_],P=l(c),T=v(c)===p,M=[s,i].indexOf(P)>=0,S=M?"width":"height",y=j(t,{placement:c,boundary:D,rootBoundary:A,altBoundary:Y,padding:I}),u=M?T?a:o:T?i:s;if($[S]>V[S]&&(u=k(u)),C=k(u),r=[],B&&r.push(y[P]<=0),G&&r.push(y[u]<=0,y[C]<=0),r.every(function(e){return e})){h=c,H=!1;break}z.set(c,r)}if(H)for(E=function(e){var t=m.find(function(t){var n=z.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return h=t,"break"},f=g?3:1;f>0;f--)if("break"===E(f))break;t.placement!==h&&(t.modifiersData[x]._skip=!0,t.placement=h,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function je(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[s,a,i,o].some(function(t){return e[t]>=0})}const _e={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,c=e.name,l=t.rects.reference,d=t.rects.popper,u=t.modifiersData.preventOverflow,a=j(t,{elementContext:"reference"}),r=j(t,{altBoundary:!0}),n=je(a,l),s=je(r,d,u),o=ye(n),i=ye(s);t.modifiersData[c]={referenceClippingOffsets:n,popperEscapeOffsets:s,isReferenceHidden:o,hasPopperEscaped:i},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":o,"data-popper-escaped":i})}},Ce={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,c=e.options,d=e.name,n=c.offset,u=void 0===n?[0,0]:n,i=N.reduce(function(e,n){return e[n]=function(e,t,n){var c=l(e),u=[o,s].indexOf(c)>=0?-1:1,d="function"==typeof n?n(Object.assign({},t,{placement:e})):n,i=d[0],r=d[1];return i=i||0,r=(r||0)*u,[o,a].indexOf(c)>=0?{x:r,y:i}:{x:i,y:r}}(n,t.rects,u),e},{}),r=i[t.placement],h=r.x,m=r.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=h,t.modifiersData.popperOffsets.y+=m),t.modifiersData[d]=i}},$={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ge({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},xe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var _,t=e.state,d=e.options,fe=e.name,G=d.mainAxis,V=void 0===G||G,B=d.altAxis,N=void 0!==B&&B,me=d.boundary,he=d.rootBoundary,le=d.altBoundary,ne=d.padding,R=d.tether,u=void 0===R||R,D=d.tetherOffset,E=void 0===D?0:D,b=j(t,{boundary:me,rootBoundary:he,padding:ne,altBoundary:le}),re=l(t.placement),M=v(t.placement),T=!M,n=W(re),S="x"===n?"y":"x",r=t.modifiersData.popperOffsets,h=t.rects.reference,O=t.rects.popper,y="function"==typeof E?E(Object.assign({},t.rects,{placement:t.placement})):E,C={x:0,y:0};if(r){if(V||N){var I="y"===n?s:o,ee="y"===n?i:a,c="y"===n?"height":"width",$=r[n],U=r[n]+b[I],K=r[n]-b[ee],q=u?-O[c]/2:0,ae=M===p?h[c]:O[c],oe=M===p?-O[c]:-h[c],X=t.elements.arrow,pe=u&&X?L(X):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=Z[I],F=Z[ee],m=A(0,h[c],pe[c]),ce=T?h[c]/2-q-m-J-y:ae-m-J-y,se=T?-h[c]/2+q+m+F+y:oe+m+F+y,k=t.elements.arrow&&w(t.elements.arrow),ie=k?"y"===n?k.clientTop||0:k.clientLeft||0:0,Y=t.modifiersData.offset?t.modifiersData.offset[t.placement][n]:0,z=r[n]+ce-Y-ie,P=r[n]+se-Y;if(V&&(_=A(u?x(U,z):U,$,u?f(K,P):K),r[n]=_,C[n]=_-$),N){var de="x"===n?s:o,ue="x"===n?i:a,g=r[S],H=g+b[de],Q=g-b[ue],te=A(u?x(H,z):H,g,u?f(Q,P):Q);r[S]=te,C[S]=te-g}}t.modifiersData[fe]=C}},requiresIfExists:["offset"]};function Te(e,t,n){void 0===n&&(n=!1);var s,h,u=r(t),f=r(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,s=t.height/e.offsetHeight||1;return 1!==n||1!==s}(t),a=m(t),i=y(e,f),l={scrollLeft:0,scrollTop:0},o={x:0,y:0};return(u||!u&&!n)&&(("body"!==d(t)||H(a))&&(l=(s=t)!==c(s)&&r(s)?{scrollLeft:(h=s).scrollLeft,scrollTop:h.scrollTop}:I(s)),r(t)?((o=y(t,!0)).x+=t.clientLeft,o.y+=t.clientTop):a&&(o.x=D(a))),{x:i.left+l.scrollLeft-o.x,y:i.top+l.scrollTop-o.y,width:i.width,height:i.height}}function Ee(e){var n=new Map,t=new Set,s=[];function o(e){t.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!t.has(e)){var s=n.get(e);s&&o(s)}}),s.push(e)}return e.forEach(function(e){n.set(e.name,e)}),e.forEach(function(e){t.has(e.name)||o(e)}),s}V={placement:"bottom",modifiers:[],strategy:"absolute"};function he(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return!n.some(function(e){return!e||"function"!=typeof e.getBoundingClientRect})}function M(e){void 0===e&&(e={});var n=e,s=n.defaultModifiers,i=void 0===s?[]:s,o=n.defaultOptions,t=void 0===o?V:o;return function(e,n,s){void 0===s&&(s=t);var r,d,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},V,t),modifiersData:{},elements:{reference:e,popper:n},attributes:{},styles:{}},c=[],l=!1,a={state:o,setOptions:function(s){var r,l="function"==typeof s?s(o.options):s;return u(),o.options=Object.assign({},t,o.options,l),o.scrollParents={reference:C(e)?O(e):e.contextElement?O(e.contextElement):[],popper:O(n)},r=function(e){var t=Ee(e);return pe.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}(function(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}([].concat(i,o.options.modifiers))),o.orderedModifiers=r.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var s,i,r=e.name,t=e.options,l=void 0===t?{}:t,n=e.effect;"function"==typeof n&&(s=n({state:o,name:r,instance:a,options:l}),i=function(){},c.push(s||i))}),a.update()},forceUpdate:function(){if(!l){var s=o.elements,i=s.reference,t=s.popper;if(he(i,t)){o.rects={reference:Te(i,w(t),"fixed"===o.options.strategy),popper:L(t)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(e=0;e<o.orderedModifiers.length;e++)if(!0!==o.reset){var e,n=o.orderedModifiers[e],r=n.fn,c=n.options,d=void 0===c?{}:c,u=n.name;"function"==typeof r&&(o=r({state:o,options:d,name:u,instance:a})||o)}else o.reset=!1,e=-1}}},update:(d=function(){return new Promise(function(e){a.forceUpdate(),e(o)})},function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(d())})})),r}),destroy:function(){u(),l=!0}};if(!he(e,n))return a;function u(){c.forEach(function(e){return e()}),c=[]}return a.setOptions(s).then(function(e){!l&&s.onFirstUpdate&&s.onFirstUpdate(e)}),a}}var Me=M(),Fe=M({defaultModifiers:[K,$,P,z,Ce,be,xe,Q,_e]}),Ae=M({defaultModifiers:[K,$,P,z]})},4851:()=>{new class{constructor(e){this.elements=e}run(){0!==this.elements.length&&this.elements.forEach(e=>{e.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(e=>{const n=e.getAttribute("id");if(!n)return;const t=document.createElement("a");t.setAttribute("href",`#${n}`),t.setAttribute("class","anchor"),t.innerHTML='<i class="fas fa-link"></i>',e.appendChild(t)})})}}(document.body.querySelectorAll(".post-content")).run()},8201:()=>{new class{constructor(e){this.input=e,this.key="hbs-font-size",this.sizes=new Map([["-2","xs"],["-1","sm"],["0",""],["1","lg"],["2","xl"]])}run(){this.input&&(this.initSize(),this.initListeners())}initSize(){const e=this.getSize();e&&this.setSize(e)}initListeners(){this.input.value=this.getSize();const e=this;this.input.addEventListener("change",()=>{e.setSize(e.input.value)})}getSize(){const e=localStorage.getItem(this.key);return e||""}setSize(e){const t=this.sizes.get(e);document.body.classList.remove(`font-size-${this.sizes.get(this.getSize())}`),""===t?localStorage.removeItem(this.key):(localStorage.setItem(this.key,e),document.body.classList.add(`font-size-${t}`))}}(document.getElementById("fontSize")).run()},1956:()=>{(new class{run(){var e=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(e).forEach(function(e){e.addEventListener("submit",function(t){e.checkValidity()||(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated")},!1)})}}).run()},5749:()=>{(new class{run(){this.bar=document.createElement("div"),this.bar.className="loading-bar",this.bar.hidden=!0,document.body.appendChild(this.bar);const e=this;window.addEventListener("beforeunload",function(){e.bar.hidden=!1})}}).run()},8172:()=>{new class{constructor(e){this.element=e,this.key="hbs-mode"}run(){this.element&&(this.initListeners(),this.initMode())}initListeners(){const e=this;this.element.addEventListener("change",()=>{e.setMode(this.element.checked?"dark":"light")}),window.matchMedia("(prefers-color-scheme: dark)").addListener(t=>{e.setMode(t.matches?"dark":"light")})}initMode(){const e=this.getMode();e&&this.setMode(e)}getMode(){let e=localStorage.getItem(this.key);return e||"dark"===window.getComputedStyle(document.body).getPropertyValue("--mode").toString().trim()&&(e="dark"),e||"light"}setMode(e){console.debug(`Switch to ${e} mode`),document.body.parentElement.setAttribute("data-mode",e);let t=!1;"dark"===e&&(t=!0),this.element.checked=t,localStorage.setItem(this.key,e);const n=new CustomEvent("hbs:mode",{detail:{mode:e}});document.dispatchEvent(n)}}(document.querySelector("#modeSwitcher")).run()},1980:()=>{(new class{run(){this.key="hbs-palette",this.initPalette()}initPalette(){const t=this.getPalette();t&&this.setPalette(t);const n=this.getPalette(),s=this,e=document.querySelector("#palettePicker");e&&(document.querySelector("#btnPalette").addEventListener("click",()=>{e.classList.contains("visually-hidden")?e.classList.remove("visually-hidden"):e.classList.add("visually-hidden")}),document.querySelectorAll(".palette").forEach(t=>{const o=t.getAttribute("id").replace("palette-","");o===n&&t.classList.add("active"),t.addEventListener("click",()=>{s.setPalette(o),document.querySelector(".palette.active").classList.remove("active"),t.classList.add("active"),e.classList.add("visually-hidden")})}))}getPalette(){const e=localStorage.getItem(this.key);if(e)return e;const t=document.body.parentElement.getAttribute("data-palette");return t||""}setPalette(e){console.debug(`switch to palette: ${e}`),document.body.parentElement.setAttribute("data-palette",e),localStorage.setItem(this.key,e)}}).run()},9950:()=>{(new class{constructor(){this.x=0,this.y=0;const e=document.createElement("a");e.setAttribute("role","button"),e.setAttribute("aria-label","Scroll to top"),e.className="btn-scroll-to-top",e.innerHTML='<i class="fas fa-chevron-circle-up fa-2x"></i>',window.document.body.append(e),this.btn=e}show(){this.btn.classList.add("active")}hide(){this.btn.classList.remove("active")}run(){const e=this;window.addEventListener("scroll",()=>{document.body.scrollTop>20||document.documentElement.scrollTop>20?e.show():e.hide()}),this.btn.addEventListener("click",()=>{e.scroll()})}scroll(){window.scrollTo({top:this.x,left:this.y,behavior:"smooth"})}}).run()},9489:()=>{new class{constructor(e){this.button=e,this.key="hbs-sidebar-toggler"}run(){if(!this.button)return;this.main=document.querySelector(".content>div:first-child"),this.sidebar=document.querySelector(".content .sidebar");const e=this;this.button.addEventListener("click",()=>{e.toggle()}),"hide"===localStorage.getItem(this.key)&&this.isShown()&&this.hide()}toggle(){this.isShown()?this.hide():this.show()}isShown(){return this.main.classList.contains("col-lg-8")}hide(){this.main.classList.replace("col-lg-8","col-lg-12"),this.sidebar.classList.add("d-none"),this.button.classList.add("active"),localStorage.setItem(this.key,"hide")}show(){this.main.classList.replace("col-lg-12","col-lg-8"),this.sidebar.classList.remove("d-none"),this.button.classList.remove("active"),localStorage.removeItem(this.key)}}(document.querySelector("#sidebarToggler")).run()},7572:()=>{new class{constructor(e){this.elements=e}run(){0!==this.elements.length&&this.elements.forEach(e=>{const t=document.createElement("div");t.className="table-responsive",t.appendChild(e.cloneNode(!0)),e.parentNode.replaceChild(t,e)})}}(document.querySelectorAll("table")).run()},5695:function(e,t,n){e.exports=function(e,t){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e),u=o(t);const d=1e3,s="transitionend",c=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),o=Number.parseFloat(n);return s||o?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*d):0},r=e=>{e.dispatchEvent(new Event(s))},l=e=>!!e&&"object"==typeof e&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),a=e=>l(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,i=e=>{"function"==typeof e&&e()},h=(e,t,n=!0)=>{if(!n)return void i(e);const l=5,d=c(t)+l;let o=!1;const a=({target:n})=>{n===t&&(o=!0,t.removeEventListener(s,a),i(e))};t.addEventListener(s,a),setTimeout(()=>{o||r(t)},d)},m="5.1.1";class f{constructor(e){(e=a(e))&&(this._element=e,n.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.default.remove(this._element,this.constructor.DATA_KEY),u.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,n=!0){h(e,t,n)}static getInstance(e){return n.default.get(a(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return m}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}return f}(n(493),n(9286))},3863:function(e,t,n){e.exports=function(e,t,n,s,o){"use strict";function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var D=d(e),c=d(t),C=d(n),a=d(s),x=d(o);const V=e=>e==null?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),b=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},j=e=>{const t=b(e);return t&&document.querySelector(t)?t:null},y=e=>{const t=b(e);return t?document.querySelector(t):null},g=e=>!!e&&"object"==typeof e&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),B=e=>g(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,L=(e,t,n)=>{Object.keys(n).forEach(s=>{const i=n[s],o=t[s],a=o&&g(o)?"element":V(o);if(!new RegExp(i).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${i}".`)})},N=e=>{e.offsetHeight},z=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},m=[],k=e=>{"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",()=>{m.forEach(e=>e())}),m.push(e)):e()},E=e=>{k(()=>{const t=z();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},p="collapse",_="bs.collapse",l=`.${_}`,w={toggle:!0,parent:null},O={toggle:"boolean",parent:"(null|element)"},A=`show${l}`,S=`shown${l}`,M=`hide${l}`,F=`hidden${l}`,T=`click${l}.data-api`,h="show",i="collapse",u="collapsing",v="collapsed",R="collapse-horizontal",P="width",H="height",I=".collapse.show, .collapse.collapsing",f='[data-bs-toggle="collapse"]';class r extends x.default{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=a.default.find(f);for(let e=0,o=n.length;e<o;e++){const s=n[e],t=j(s),i=a.default.find(t).filter(e=>e===this._element);null!==t&&i.length&&(this._selector=t,this._triggerArray.push(s))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return w}static get NAME(){return p}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,n=[];if(this._config.parent){const e=a.default.find(`.${i} .${i}`,this._config.parent);n=a.default.find(I,this._config.parent).filter(t=>!e.includes(t))}const s=a.default.findOne(this._selector);if(n.length){const e=n.find(e=>s!==e);if(t=e?r.getInstance(e):null,t&&t._isTransitioning)return}if(c.default.trigger(this._element,A).defaultPrevented)return;n.forEach(e=>{s!==e&&r.getOrCreateInstance(e,{toggle:!1}).hide(),t||D.default.set(e,_,null)});const e=this._getDimension();this._element.classList.remove(i),this._element.classList.add(u),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(u),this._element.classList.add(i,h),this._element.style[e]="",c.default.trigger(this._element,S)},l=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback(o,this._element,!0),this._element.style[e]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(c.default.trigger(this._element,M).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,N(this._element),this._element.classList.add(u),this._element.classList.remove(i,h);const t=this._triggerArray.length;for(let e=0;e<t;e++){const n=this._triggerArray[e],s=y(n);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([n],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(u),this._element.classList.add(i),c.default.trigger(this._element,F)};this._element.style[e]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(h)}_getConfig(e){return(e={...w,...C.default.getDataAttributes(this._element),...e}).toggle=Boolean(e.toggle),e.parent=B(e.parent),L(p,e,O),e}_getDimension(){return this._element.classList.contains(R)?P:H}_initializeChildren(){if(!this._config.parent)return;const e=a.default.find(`.${i} .${i}`,this._config.parent);a.default.find(f,this._config.parent).filter(t=>!e.includes(t)).forEach(e=>{const t=y(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))})}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach(e=>{t?e.classList.remove(v):e.classList.add(v),e.setAttribute("aria-expanded",t)})}static jQueryInterface(e){return this.each(function(){const t={};"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=r.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}})}}return c.default.on(document,T,f,function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=j(this);a.default.find(t).forEach(e=>{r.getOrCreateInstance(e,{toggle:!1}).toggle()})}),E(r),r}(n(493),n(9286),n(3175),n(8737),n(5695))},493:function(e){e.exports=function(){"use strict";const e=new Map;return{set(t,n,s){e.has(t)||e.set(t,new Map);const o=e.get(t);o.has(n)||0===o.size?o.set(n,s):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;const s=e.get(t);s.delete(n),0===s.size&&e.delete(t)}}}()},9286:function(e){e.exports=function(){"use strict";const j=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},b=/[^.]*(?=\..*)\.|.*/,g=/\..*/,p=/::\d+$/,n={};let i=1;const f={mouseenter:"mouseover",mouseleave:"mouseout"},m=/^(mouseenter|mouseleave)/i,c=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function l(e,t){return t&&`${t}::${i++}`||e.uidEvent||i++}function d(e){const t=l(e);return e.uidEvent=t,n[t]=n[t]||{},n[t]}function u(t,n){return function s(o){return o.delegateTarget=t,s.oneOff&&e.off(t,o.type,n),n.apply(t,[o])}}function h(t,n,s){return function o(i){const a=t.querySelectorAll(n);for(let{target:r}=i;r&&r!==this;r=r.parentNode)for(let c=a.length;c--;)if(a[c]===r)return i.delegateTarget=r,o.oneOff&&e.off(t,i.type,n,s),s.apply(r,[i]);return null}}function r(e,t,n=null){const s=Object.keys(e);for(let o=0,a=s.length;o<a;o++){const i=e[s[o]];if(i.originalHandler===t&&i.delegationSelector===n)return i}return null}function a(e,t,n){const i="string"==typeof t,a=i?n:t;let o=s(e);return c.has(o)||(o=e),[i,a,o]}function o(e,t,n,s,o){if("string"!=typeof t||!e)return;if(n||(n=s,s=null),m.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};s?s=e(s):n=e(n)}const[c,g,f]=a(t,n,s),v=d(e),j=v[f]||(v[f]={}),p=r(j,g,c?n:null);if(p)return void(p.oneOff=p.oneOff&&o);const y=l(g,t.replace(b,"")),i=c?h(e,n,s):u(e,n);i.delegationSelector=c?n:null,i.originalHandler=g,i.oneOff=o,i.uidEvent=y,j[y]=i,e.addEventListener(f,i,c)}function t(e,t,n,s,o){const i=r(t[n],s,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function v(e,n,s,o){const i=n[s]||{};Object.keys(i).forEach(a=>{if(a.includes(o)){const o=i[a];t(e,n,s,o.originalHandler,o.delegationSelector)}})}function s(e){return e=e.replace(g,""),f[e]||e}const e={on(e,t,n,s){o(e,t,n,s,!1)},one(e,t,n,s){o(e,t,n,s,!0)},off(e,n,s,o){if("string"!=typeof n||!e)return;const[m,l,r]=a(n,s,o),u=r!==n,i=d(e),h=n.startsWith(".");if(void 0!==l){if(!i||!i[r])return;return void t(e,i,r,l,m?s:null)}h&&Object.keys(i).forEach(t=>{v(e,i,t,n.slice(1))});const c=i[r]||{};Object.keys(c).forEach(s=>{const o=s.replace(p,"");if(!u||n.includes(o)){const n=c[s];t(e,i,r,n.originalHandler,n.delegationSelector)}})},trigger(e,t,n){if("string"!=typeof t||!e)return null;const a=j(),r=s(t),m=t!==r,h=c.has(r);let i,l=!0,d=!0,u=!1,o=null;return m&&a&&(i=a.Event(t,n),a(e).trigger(i),l=!i.isPropagationStopped(),d=!i.isImmediatePropagationStopped(),u=i.isDefaultPrevented()),h?(o=document.createEvent("HTMLEvents"),o.initEvent(r,l,!0)):o=new CustomEvent(t,{bubbles:l,cancelable:!0}),void 0!==n&&Object.keys(n).forEach(e=>{Object.defineProperty(o,e,{get:()=>n[e]})}),u&&o.preventDefault(),d&&e.dispatchEvent(o),o.defaultPrevented&&void 0!==i&&i.preventDefault(),o}};return e}()},3175:function(e){e.exports=function(){"use strict";function t(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function e(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}return{setDataAttribute(t,n,s){t.setAttribute(`data-bs-${e(n)}`,s)},removeDataAttribute(t,n){t.removeAttribute(`data-bs-${e(n)}`)},getDataAttributes(e){if(!e)return{};const n={};return Object.keys(e.dataset).filter(e=>e.startsWith("bs")).forEach(s=>{let o=s.replace(/^bs/,"");o=o.charAt(0).toLowerCase()+o.slice(1,o.length),n[o]=t(e.dataset[s])}),n},getDataAttribute:(n,s)=>t(n.getAttribute(`data-bs-${e(s)}`)),offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position:e=>({top:e.offsetTop,left:e.offsetLeft})}}()},8737:function(e){e.exports=function(){"use strict";const e=e=>!!e&&"object"==typeof e&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),t=t=>!!e(t)&&0!==t.getClientRects().length&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),n=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),s=3;return{find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){const o=[];let n=e.parentNode;for(;n&&n.nodeType===Node.ELEMENT_NODE&&n.nodeType!==s;)n.matches(t)&&o.push(n),n=n.parentNode;return o},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(", ");return this.find(s,e).filter(e=>!n(e)&&t(e))}}}()},9872:function(e,t,n){e.exports=function(e,t,n,s,o){"use strict";function h(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function ee(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var s=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var k=ee(e),a=h(t),f=h(n),m=h(s),X=h(o);const z=e=>e==null?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),G=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},W=e=>{const t=G(e);return t?document.querySelector(t):null},d=e=>!!e&&"object"==typeof e&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),V=e=>d(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,B=(e,t,n)=>{Object.keys(n).forEach(s=>{const i=n[s],o=t[s],a=o&&d(o)?"element":z(o);if(!new RegExp(i).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${i}".`)})},D=e=>!!d(e)&&0!==e.getClientRects().length&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),y=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),C=()=>{},T=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},_=[],F=e=>{"loading"===document.readyState?(_.length||document.addEventListener("DOMContentLoaded",()=>{_.forEach(e=>e())}),_.push(e)):e()},c=()=>"rtl"===document.documentElement.dir,M=e=>{F(()=>{const t=T();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},S=(e,t,n,s)=>{let o=e.indexOf(t);if(-1===o)return e[!n&&s?e.length-1:0];const i=e.length;return o+=n?1:-1,s&&(o=(o+i)%i),e[Math.max(0,Math.min(o,i-1))]},j="dropdown",r=".bs.dropdown",w=".data-api",g="Escape",O="Space",x="Tab",b="ArrowUp",p="ArrowDown",N=2,L=new RegExp(`${b}|${p}|${g}`),R=`hide${r}`,P=`hidden${r}`,H=`show${r}`,I=`shown${r}`,A=`click${r}${w}`,E=`keydown${r}${w}`,$=`keyup${r}${w}`,l="show",U="dropup",K="dropend",q="dropstart",Y="navbar",u='[data-bs-toggle="dropdown"]',v=".dropdown-menu",Q=".navbar-nav",Z=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",J=c()?"top-end":"top-start",re=c()?"top-start":"top-end",te=c()?"bottom-end":"bottom-start",ne=c()?"bottom-start":"bottom-end",se=c()?"left-start":"right-start",oe=c()?"right-start":"left-start",ie={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},ae={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class i extends X.default{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return ie}static get DefaultType(){return ae}static get NAME(){return j}toggle(){return this._isShown()?this.hide():this.show()}show(){if(y(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element};if(a.default.trigger(this._element,H,e).defaultPrevented)return;const t=i.getParentFromElement(this._element);this._inNavbar?f.default.setDataAttribute(this._menu,"popper","none"):this._createPopper(t),"ontouchstart"in document.documentElement&&!t.closest(Q)&&[].concat(...document.body.children).forEach(e=>a.default.on(e,"mouseover",C)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(l),this._element.classList.add(l),a.default.trigger(this._element,I,e)}hide(){if(y(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){a.default.trigger(this._element,R,e).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>a.default.off(e,"mouseover",C)),this._popper&&this._popper.destroy(),this._menu.classList.remove(l),this._element.classList.remove(l),this._element.setAttribute("aria-expanded","false"),f.default.removeDataAttribute(this._menu,"popper"),a.default.trigger(this._element,P,e))}_getConfig(e){if(e={...this.constructor.Default,...f.default.getDataAttributes(this._element),...e},B(j,e,this.constructor.DefaultType),"object"==typeof e.reference&&!d(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${j.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if(void 0===k)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:d(this._config.reference)?t=V(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),s=n.modifiers.find(e=>"applyStyles"===e.name&&!1===e.enabled);this._popper=k.createPopper(t,this._menu,n),s&&f.default.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(l)}_getMenuElement(){return m.default.next(this._element,v)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(K))return se;if(e.classList.contains(q))return oe;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(U)?t?re:J:t?ne:te}_detectNavbar(){return null!==this._element.closest(`.${Y}`)}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=m.default.find(Z,this._menu).filter(D);n.length&&S(n,t,e===p,!n.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=i.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e&&(e.button===N||"keyup"===e.type&&e.key!==x))return;const t=m.default.find(u);for(let s=0,a=t.length;s<a;s++){const n=i.getInstance(t[s]);if(!n||!1===n._config.autoClose)continue;if(!n._isShown())continue;const o={relatedTarget:n._element};if(e){const t=e.composedPath(),s=t.includes(n._menu);if(t.includes(n._element)||"inside"===n._config.autoClose&&!s||"outside"===n._config.autoClose&&s)continue;if(n._menu.contains(e.target)&&("keyup"===e.type&&e.key===x||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(o.clickEvent=e)}n._completeHide(o)}}static getParentFromElement(e){return W(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===O||e.key!==g&&(e.key!==p&&e.key!==b||e.target.closest(v)):!L.test(e.key))return;const t=this.classList.contains(l);if(!t&&e.key===g)return;if(e.preventDefault(),e.stopPropagation(),y(this))return;const s=this.matches(u)?this:m.default.prev(this,u)[0],n=i.getOrCreateInstance(s);if(e.key!==g)return e.key===b||e.key===p?(t||n.show(),void n._selectMenuItem(e)):void(t&&e.key!==O||i.clearMenus());n.hide()}}return a.default.on(document,E,u,i.dataApiKeydownHandler),a.default.on(document,E,v,i.dataApiKeydownHandler),a.default.on(document,A,i.clearMenus),a.default.on(document,$,i.clearMenus),a.default.on(document,A,u,function(e){e.preventDefault(),i.getOrCreateInstance(this).toggle()}),M(i),i}(n(4750),n(9286),n(3175),n(8737),n(5695))},7424:function(e,t,n){e.exports=function(e,t,n,s){"use strict";function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=m(e),l=m(t),c=m(n),pe=m(s);const fe=1e3,p="transitionend",he=e=>e==null?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),ye=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},A=e=>{const t=ye(e);return t?document.querySelector(t):null},de=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),o=Number.parseFloat(n);return s||o?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*fe):0},ce=e=>{e.dispatchEvent(new Event(p))},d=e=>!!e&&"object"==typeof e&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),re=e=>d(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,f=(e,t,n)=>{Object.keys(n).forEach(s=>{const i=n[s],o=t[s],a=o&&d(o)?"element":he(o);if(!new RegExp(i).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${i}".`)})},ae=e=>!!d(e)&&0!==e.getClientRects().length&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),oe=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),_=e=>{e.offsetHeight},se=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},v=[],J=e=>{"loading"===document.readyState?(v.length||document.addEventListener("DOMContentLoaded",()=>{v.forEach(e=>e())}),v.push(e)):e()},h=()=>"rtl"===document.documentElement.dir,Z=e=>{J(()=>{const t=se();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},a=e=>{"function"==typeof e&&e()},Q=(e,t,n=!0)=>{if(!n)return void a(e);const i=5,r=de(t)+i;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(p,o),a(e))};t.addEventListener(p,o),setTimeout(()=>{s||ce(t)},r)},S=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",M=".sticky-top";class R{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",t=>t+e),this._setElementAttributes(S,"paddingRight",t=>t+e),this._setElementAttributes(M,"marginRight",t=>t-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const s=this.getWidth(),o=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+s)return;this._saveInitialAttribute(e,t);const o=window.getComputedStyle(e)[t];e.style[t]=`${n(Number.parseFloat(o))}px`};this._applyManipulationCallback(e,o)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(S,"paddingRight"),this._resetElementAttributes(M,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&l.default.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=l.default.getDataAttribute(e,t);void 0===n?e.style.removeProperty(t):(l.default.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){d(e)?t(e):c.default.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const X={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},V={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},D="backdrop",H="fade",L="show",b=`mousedown.bs.${D}`;class P{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&_(this._getElement()),this._getElement().classList.add(L),this._emulateAnimation(()=>{a(e)})):a(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(L),this._emulateAnimation(()=>{this.dispose(),a(e)})):a(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(H),this._element=e}return this._element}_getConfig(e){return(e={...X,..."object"==typeof e?e:{}}).rootElement=re(e.rootElement),f(D,e,V),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),o.default.on(this._getElement(),b,()=>{a(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(o.default.off(this._element,b),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){Q(e,this._getElement(),this._config.isAnimated)}}const q={trapElement:null,autofocus:!0},I={trapElement:"element",autofocus:"boolean"},B="focustrap",u=".bs.focustrap",$=`focusin${u}`,W=`keydown.tab${u}`,U="Tab",K="forward",F="backward";class Y{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),o.default.off(document,u),o.default.on(document,$,e=>this._handleFocusin(e)),o.default.on(document,W,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.default.off(document,u))}_handleFocusin(e){const{target:s}=e,{trapElement:t}=this._config;if(s===document||s===t||t.contains(s))return;const n=c.default.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===F?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===U&&(this._lastTabNavDirection=e.shiftKey?F:K)}_getConfig(e){return e={...q,..."object"==typeof e?e:{}},f(B,e,I),e}}const G=(e,t="hide")=>{const s=`click.dismiss${e.EVENT_KEY}`,n=e.NAME;o.default.on(document,s,`[data-bs-dismiss="${n}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),oe(this))return;const o=A(this)||this.closest(`.${n}`);e.getOrCreateInstance(o)[t]()})},T="modal",i=".bs.modal",E="Escape",x={backdrop:!0,keyboard:!0,focus:!0},ee={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},te=`hide${i}`,ne=`hidePrevented${i}`,w=`hidden${i}`,y=`show${i}`,ie=`shown${i}`,j=`resize${i}`,O=`click.dismiss${i}`,C=`keydown.dismiss${i}`,le=`mouseup.dismiss${i}`,k=`mousedown.dismiss${i}`,ue=`click${i}.data-api`,N="modal-open",me="fade",z="show",g="modal-static",ge=".modal.show",ve=".modal-dialog",be=".modal-body",je='[data-bs-toggle="modal"]';class r extends pe.default{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=c.default.findOne(ve,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new R}static get Default(){return x}static get NAME(){return T}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||o.default.trigger(this._element,y,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(N),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),o.default.on(this._dialog,k,()=>{o.default.one(this._element,le,e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;if(o.default.trigger(this._element,te).defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(z),o.default.off(this._element,O),o.default.off(this._dialog,k),this._queueCallback(()=>this._hideModal(),this._element,e)}dispose(){[window,this._dialog].forEach(e=>o.default.off(e,i)),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new P({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Y({trapElement:this._element})}_getConfig(e){return e={...x,...l.default.getDataAttributes(this._element),..."object"==typeof e?e:{}},f(T,e,ee),e}_showElement(e){const t=this._isAnimated(),n=c.default.findOne(be,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&_(this._element),this._element.classList.add(z);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,o.default.trigger(this._element,ie,{relatedTarget:e})};this._queueCallback(s,this._dialog,t)}_setEscapeEvent(){this._isShown?o.default.on(this._element,C,e=>{this._config.keyboard&&e.key===E?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==E||this._triggerBackdropTransition()}):o.default.off(this._element,C)}_setResizeEvent(){this._isShown?o.default.on(window,j,()=>this._adjustDialog()):o.default.off(window,j)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(N),this._resetAdjustments(),this._scrollBar.reset(),o.default.trigger(this._element,w)})}_showBackdrop(e){o.default.on(this._element,O,e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(me)}_triggerBackdropTransition(){if(o.default.trigger(this._element,ne).defaultPrevented)return;const{classList:e,scrollHeight:s,style:t}=this._element,n=s>document.documentElement.clientHeight;!n&&"hidden"===t.overflowY||e.contains(g)||(n||(t.overflowY="hidden"),e.add(g),this._queueCallback(()=>{e.remove(g),n||this._queueCallback(()=>{t.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),t=n>0;(!t&&e&&!h()||t&&!e&&h())&&(this._element.style.paddingLeft=`${n}px`),(t&&!e&&!h()||!t&&e&&h())&&(this._element.style.paddingRight=`${n}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const n=r.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}})}}return o.default.on(document,ue,je,function(e){const t=A(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),o.default.one(t,y,e=>{e.defaultPrevented||o.default.one(t,w,()=>{ae(this)&&this.focus()})});const n=c.default.findOne(ge);n&&r.getInstance(n).hide(),r.getOrCreateInstance(t).toggle(this)}),G(r),Z(r),r}(n(9286),n(3175),n(8737),n(5695))},6169:function(e,t,n){e.exports=function(e,t,n,s){"use strict";function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=u(e),d=u(t),o=u(n),ce=u(s);const ie=1e3,m="transitionend",X=e=>e==null?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),oe=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},O=e=>{const t=oe(e);return t?document.querySelector(t):null},ne=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),o=Number.parseFloat(n);return s||o?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*ie):0},ee=e=>{e.dispatchEvent(new Event(m))},c=e=>!!e&&"object"==typeof e&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),Q=e=>c(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,f=(e,t,n)=>{Object.keys(n).forEach(s=>{const i=n[s],o=t[s],a=o&&c(o)?"element":X(o);if(!new RegExp(i).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${i}".`)})},G=e=>!!c(e)&&0!==e.getClientRects().length&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),y=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),K=e=>{e.offsetHeight},B=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},p=[],L=e=>{"loading"===document.readyState?(p.length||document.addEventListener("DOMContentLoaded",()=>{p.forEach(e=>e())}),p.push(e)):e()},N=e=>{L(()=>{const t=B();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},i=e=>{"function"==typeof e&&e()},z=(e,t,n=!0)=>{if(!n)return void i(e);const a=5,r=ne(t)+a;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(m,o),i(e))};t.addEventListener(m,o),setTimeout(()=>{s||ee(t)},r)},A=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",S=".sticky-top";class g{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",t=>t+e),this._setElementAttributes(A,"paddingRight",t=>t+e),this._setElementAttributes(S,"marginRight",t=>t-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const s=this.getWidth(),o=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+s)return;this._saveInitialAttribute(e,t);const o=window.getComputedStyle(e)[t];e.style[t]=`${n(Number.parseFloat(o))}px`};this._applyManipulationCallback(e,o)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(A,"paddingRight"),this._resetElementAttributes(S,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&d.default.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=d.default.getDataAttribute(e,t);void 0===n?e.style.removeProperty(t):(d.default.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){c(e)?t(e):l.default.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const F={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},T={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},k="backdrop",D="fade",M="show",x=`mousedown.bs.${k}`;class R{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&K(this._getElement()),this._getElement().classList.add(M),this._emulateAnimation(()=>{i(e)})):i(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(M),this._emulateAnimation(()=>{this.dispose(),i(e)})):i(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(D),this._element=e}return this._element}_getConfig(e){return(e={...F,..."object"==typeof e?e:{}}).rootElement=Q(e.rootElement),f(k,e,T),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),o.default.on(this._getElement(),x,()=>{i(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(o.default.off(this._element,x),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){z(e,this._getElement(),this._config.isAnimated)}}const P={trapElement:null,autofocus:!0},H={trapElement:"element",autofocus:"boolean"},I="focustrap",h=".bs.focustrap",V=`focusin${h}`,$=`keydown.tab${h}`,W="Tab",U="forward",_="backward";class q{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),o.default.off(document,h),o.default.on(document,V,e=>this._handleFocusin(e)),o.default.on(document,$,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.default.off(document,h))}_handleFocusin(e){const{target:s}=e,{trapElement:t}=this._config;if(s===document||s===t||t.contains(s))return;const n=l.default.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===_?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===W&&(this._lastTabNavDirection=e.shiftKey?_:U)}_getConfig(e){return e={...P,..."object"==typeof e?e:{}},f(I,e,H),e}}const Y=(e,t="hide")=>{const s=`click.dismiss${e.EVENT_KEY}`,n=e.NAME;o.default.on(document,s,`[data-bs-dismiss="${n}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),y(this))return;const o=O(this)||this.closest(`.${n}`);e.getOrCreateInstance(o)[t]()})},j="offcanvas",r=".bs.offcanvas",v=".data-api",Z=`load${r}${v}`,J="Escape",b={backdrop:!0,keyboard:!0,scroll:!1},te={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},w="show",se="offcanvas-backdrop",C=".offcanvas.show",he=`show${r}`,ae=`shown${r}`,re=`hide${r}`,E=`hidden${r}`,le=`click${r}${v}`,de=`keydown.dismiss${r}`,ue='[data-bs-toggle="offcanvas"]';class a extends ce.default{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return j}static get Default(){return b}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;if(o.default.trigger(this._element,he,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new g).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(w);const t=()=>{this._config.scroll||this._focustrap.activate(),o.default.trigger(this._element,ae,{relatedTarget:e})};this._queueCallback(t,this._element,!0)}hide(){if(!this._isShown)return;if(o.default.trigger(this._element,re).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(w),this._backdrop.hide();const e=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new g).reset(),o.default.trigger(this._element,E)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...b,...d.default.getDataAttributes(this._element),..."object"==typeof e?e:{}},f(j,e,te),e}_initializeBackDrop(){return new R({className:se,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new q({trapElement:this._element})}_addEventListeners(){o.default.on(this._element,de,e=>{this._config.keyboard&&e.key===J&&this.hide()})}static jQueryInterface(e){return this.each(function(){const t=a.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}})}}return o.default.on(document,le,ue,function(e){const t=O(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),y(this))return;o.default.one(t,E,()=>{G(this)&&this.focus()});const n=l.default.findOne(C);n&&n!==t&&a.getInstance(n).hide(),a.getOrCreateInstance(t).toggle(this)}),o.default.on(window,Z,()=>l.default.find(C).forEach(e=>a.getOrCreateInstance(e).show())),Y(a),N(a),a}(n(8737),n(3175),n(9286),n(5695))},6101:function(e,t,n){e.exports=function(e){"use strict";function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=p(e);const c=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},n=[],i=e=>{"loading"===document.readyState?(n.length||document.addEventListener("DOMContentLoaded",()=>{n.forEach(e=>e())}),n.push(e)):e()},a=e=>{i(()=>{const t=c();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},r="popover",t=".bs.popover",l="bs-popover",d={...s.default.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},u={...s.default.DefaultType,content:"(string|element|function)"},h={HIDE:`hide${t}`,HIDDEN:`hidden${t}`,SHOW:`show${t}`,SHOWN:`shown${t}`,INSERTED:`inserted${t}`,CLICK:`click${t}`,FOCUSIN:`focusin${t}`,FOCUSOUT:`focusout${t}`,MOUSEENTER:`mouseenter${t}`,MOUSELEAVE:`mouseleave${t}`},m=".popover-header",f=".popover-body";class o extends s.default{static get Default(){return d}static get NAME(){return r}static get Event(){return h}static get DefaultType(){return u}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),m),this._sanitizeAndSetContent(e,this._getContent(),f)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return l}static jQueryInterface(e){return this.each(function(){const t=o.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}}return a(o),o}(n(3824))},8471:function(e,t,n){e.exports=function(e,t,n){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=l(e),o=l(t),O=l(n);const b=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},g=e=>{const t=b(e);return t?document.querySelector(t):null},A=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),f=e=>{e.offsetHeight},S=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},c=[],C=e=>{"loading"===document.readyState?(c.length||document.addEventListener("DOMContentLoaded",()=>{c.forEach(e=>e())}),c.push(e)):e()},x=e=>{C(()=>{const t=S();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},p="tab",a=".bs.tab",v=`hide${a}`,z=`hidden${a}`,j=`show${a}`,y=`shown${a}`,_=`click${a}.data-api`,w="dropdown-menu",i="active",d="fade",m="show",E=".dropdown",k=".nav, .list-group",h=".active",u=":scope > li > .active",M='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',F=".dropdown-toggle",T=":scope > .dropdown-menu .active";class r extends O.default{static get NAME(){return p}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(i))return;let e;const n=g(this._element),t=this._element.closest(k);if(t){const n="UL"===t.nodeName||"OL"===t.nodeName?u:h;e=o.default.find(n,t),e=e[e.length-1]}const a=e?s.default.trigger(e,v,{relatedTarget:this._element}):null;if(s.default.trigger(this._element,j,{relatedTarget:e}).defaultPrevented||null!==a&&a.defaultPrevented)return;this._activate(this._element,t);const r=()=>{s.default.trigger(e,z,{relatedTarget:this._element}),s.default.trigger(this._element,y,{relatedTarget:e})};n?this._activate(n,n.parentNode,r):r()}_activate(e,t,n){const s=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?o.default.children(t,h):o.default.find(u,t))[0],a=n&&s&&s.classList.contains(d),i=()=>this._transitionComplete(e,s,n);s&&a?(s.classList.remove(m),this._queueCallback(i,e,!0)):i()}_transitionComplete(e,t,n){if(t){t.classList.remove(i);const e=o.default.findOne(T,t.parentNode);e&&e.classList.remove(i),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(i),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),f(e),e.classList.contains(d)&&e.classList.add(m);let s=e.parentNode;if(s&&"LI"===s.nodeName&&(s=s.parentNode),s&&s.classList.contains(w)){const t=e.closest(E);t&&o.default.find(F,t).forEach(e=>e.classList.add(i)),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each(function(){const t=r.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}}return s.default.on(document,_,M,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),A(this)||r.getOrCreateInstance(this).show()}),x(r),r}(n(9286),n(8737),n(5695))},3824:function(e,t,n){e.exports=function(e,t,n,s,o,i){"use strict";function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function G(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var s=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var x=G(e),Y=d(t),a=d(n),Z=d(s),q=d(o),K=d(i);const U=1e6,W=e=>e==null?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),$=e=>{do e+=Math.floor(Math.random()*U);while(document.getElementById(e))return e},f=e=>!!e&&"object"==typeof e&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),b=e=>f(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,V=(e,t,n)=>{Object.keys(n).forEach(s=>{const i=n[s],o=t[s],a=o&&f(o)?"element":W(o);if(!new RegExp(i).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${i}".`)})},y=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?y(e.parentNode):null},_=()=>{},B=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},p=[],A=e=>{"loading"===document.readyState?(p.length||document.addEventListener("DOMContentLoaded",()=>{p.forEach(e=>e())}),p.push(e)):e()},C=()=>"rtl"===document.documentElement.dir,z=e=>{A(()=>{const t=B();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},T=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),S=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,D=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,M=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!T.has(n)||Boolean(S.test(e.nodeValue)||D.test(e.nodeValue));const s=t.filter(e=>e instanceof RegExp);for(let e=0,t=s.length;e<t;e++)if(s[e].test(n))return!0;return!1},F={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function k(e,t,n){if(!e.length)return e;if(n&&"function"==typeof n)return n(e);const s=(new window.DOMParser).parseFromString(e,"text/html"),i=Object.keys(t),o=[].concat(...s.body.querySelectorAll("*"));for(let n=0,a=o.length;n<a;n++){const e=o[n],s=e.nodeName.toLowerCase();if(!i.includes(s)){e.remove();continue}const r=[].concat(...e.attributes),c=[].concat(t["*"]||[],t[s]||[]);r.forEach(t=>{M(t,c)||e.removeAttribute(t.nodeName)})}return s.body.innerHTML}const E="tooltip",r=".bs.tooltip",N="bs-tooltip",L=new Set(["sanitize","allowList","sanitizeFn"]),R={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},P={AUTO:"auto",TOP:"top",RIGHT:C()?"left":"right",BOTTOM:"bottom",LEFT:C()?"right":"left"},H={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:F,popperConfig:null},I={HIDE:`hide${r}`,HIDDEN:`hidden${r}`,SHOW:`show${r}`,SHOWN:`shown${r}`,INSERTED:`inserted${r}`,CLICK:`click${r}`,FOCUSIN:`focusin${r}`,FOCUSOUT:`focusout${r}`,MOUSEENTER:`mouseenter${r}`,MOUSELEAVE:`mouseleave${r}`},h="fade",c="show",u="show",g="out",w=".tooltip-inner",O=".modal",j="hide.bs.modal",l="hover",m="focus",X="click",Q="manual";class v extends K.default{constructor(e,t){if(void 0===x)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return H}static get NAME(){return E}static get Event(){return I}static get DefaultType(){return R}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(c))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),a.default.off(this._element.closest(O),j,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const r=a.default.trigger(this._element,this.constructor.Event.SHOW),n=y(this._element),d=null===n?this._element.ownerDocument.documentElement.contains(this._element):n.contains(this._element);if(r.defaultPrevented||!d)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(w).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const e=this.getTipElement(),o=$(this.constructor.NAME);e.setAttribute("id",o),this._element.setAttribute("aria-describedby",o),this._config.animation&&e.classList.add(h);const i="function"==typeof this._config.placement?this._config.placement.call(this,e,this._element):this._config.placement,t=this._getAttachment(i);this._addAttachmentClass(t);const{container:l}=this._config;Y.default.set(e,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(l.append(e),a.default.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=x.createPopper(this._element,e,this._getPopperConfig(t)),e.classList.add(c);const s=this._resolvePossibleFunction(this._config.customClass);s&&e.classList.add(...s.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>{a.default.on(e,"mouseover",_)});const u=()=>{const e=this._hoverState;this._hoverState=null,a.default.trigger(this._element,this.constructor.Event.SHOWN),e===g&&this._leave(null,this)},m=this.tip.classList.contains(h);this._queueCallback(u,this.tip,m)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==u&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),a.default.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())};if(a.default.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;e.classList.remove(c),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>a.default.off(e,"mouseover",_)),this._activeTrigger[X]=!1,this._activeTrigger[m]=!1,this._activeTrigger[l]=!1;const n=this.tip.classList.contains(h);this._queueCallback(t,this.tip,n),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");t.innerHTML=this._config.template;const e=t.children[0];return this.setContent(e),e.classList.remove(h,c),this.tip=e,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),w)}_sanitizeAndSetContent(e,t,n){const s=q.default.findOne(n,e);t||!s?this.setElementContent(s,t):s.remove()}setElementContent(e,t){if(null!==e)return f(t)?(t=b(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=k(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"==typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return P[e.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(e=>{if("click"===e)a.default.on(this._element,this.constructor.Event.CLICK,this._config.selector,e=>this.toggle(e));else if(e!==Q){const t=e===l?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===l?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;a.default.on(this._element,t,this._config.selector,e=>this._enter(e)),a.default.on(this._element,n,this._config.selector,e=>this._leave(e))}}),this._hideModalHandler=()=>{this._element&&this.hide()},a.default.on(this._element.closest(O),j,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?m:l]=!0),t.getTipElement().classList.contains(c)||t._hoverState===u?t._hoverState=u:(clearTimeout(t._timeout),t._hoverState=u,t._config.delay&&t._config.delay.show?t._timeout=setTimeout(()=>{t._hoverState===u&&t.show()},t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?m:l]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=g,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout(()=>{t._hoverState===g&&t.hide()},t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=Z.default.getDataAttributes(this._element);return Object.keys(t).forEach(e=>{L.has(e)&&delete t[e]}),(e={...this.constructor.Default,...t,..."object"==typeof e&&e?e:{}}).container=!1===e.container?document.body:b(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),V(E,e,this.constructor.DefaultType),e.sanitize&&(e.template=k(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const t=this.getTipElement(),n=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),e=t.getAttribute("class").match(n);null!==e&&e.length>0&&e.map(e=>e.trim()).forEach(e=>t.classList.remove(e))}_getBasicClassPrefix(){return N}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each(function(){const t=v.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}}return z(v),v}(n(4750),n(493),n(9286),n(3175),n(8737),n(5695))}},t={};function e(s){var o,i=t[s];return void 0!==i?i.exports:(o=t[s]={exports:{}},n[s].call(o.exports,o,o.exports,e),o.exports)}e.d=(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch{if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";e(3863),e(9872),Je=e(6169),Qe=e(6101),e(7424),e(8471),e(8172),e(1980),e(9950),e(7572),e(4851),e(8201),new class{constructor(e){this.element=e}run(){if(!this.element)return;this.instance=new Je(this.element);const e=this;document.querySelectorAll("#TableOfContents a").forEach(t=>{t.addEventListener("click",()=>{e.hide()})})}hide(){this.instance.hide()}}(document.querySelector("#offcanvasTOC")).run();const Ye=new class{constructor(){this.delay=3e3;const e=document.createElement("div");e.className="snackbar",document.body.appendChild(e),this.element=e}show(e){this.element.innerHTML='<div class="snackbar-body">'+e+"</div>",this.element.classList.add("show");const t=this;setTimeout(function(){t.element.classList.remove("show")},this.delay)}},Mt=class{constructor(e){this.element=e,this.pre=e.querySelector("pre"),this.code=this.pre.querySelector("code"),this.params=window.params.codeBlock}run(){this.wrap()}wrap(){const e=this.element.parentNode;this.wrapper=document.createElement("div"),this.wrapper.className="highlight-wrapper",e.replaceChild(this.wrapper,this.element),this.wrapper.appendChild(this.element),this.appendLang(),this.appendPanel()}appendLang(){const e=this.code.getAttribute("data-lang");if(e){const t=document.createElement("div");t.className="lang",t.innerHTML=e,this.wrapper.appendChild(t)}}appendPanel(){this.panel=document.createElement("div"),this.panel.className="chroma panel",this.calculateMaxHeight(),this.appendCopyButton(),this.appendLineNumberButton(),this.appendLineWrapButton(),this.appendExpandButton(),this.wrapper.appendChild(this.panel)}calculateMaxHeight(){if(this.lineNumbers()>this.params.maxLines){const e=this.code.querySelectorAll(".ln")[this.params.maxLines];this.maxHeight=e.offsetTop}}appendCopyButton(){const e=document.createElement("a");e.setAttribute("role","button"),e.setAttribute("aria-label","Copy Code"),e.className="action",e.innerHTML='<i class="fas fa-copy"></i>';const t=this;e.addEventListener("click",()=>{const n=t.code.cloneNode(!0);n.querySelectorAll(".ln").forEach(e=>{e.remove()}),navigator.clipboard.writeText(n.innerText),Ye.show("Copied"),e.classList.add("active")}),this.panel.appendChild(e)}appendLineNumberButton(){if(this.hasLineNumbers()){const e=document.createElement("a");e.setAttribute("role","button"),e.setAttribute("aria-label","Line number toggler"),e.className="action active",e.innerHTML='<i class="fas fa-list"></i>';const t=this;e.addEventListener("click",()=>{const{classList:n}=t.code,s="no-ln";n.contains(s)?(n.remove(s),e.classList.add("active")):(n.add(s),e.classList.remove("active"))}),!1===this.params.lineNos&&e.click(),this.panel.appendChild(e)}}hasLineNumbers(){return this.lineNumbers()>0}lineNumbers(){return this.code.querySelectorAll(".ln").length}appendLineWrapButton(){const t=this,e=document.createElement("a");e.setAttribute("role","button"),e.setAttribute("aria-label","Line wrap toggler"),e.className="action",e.innerHTML='<i class="fas fa-code"></i>',e.addEventListener("click",()=>{const{classList:n}=t.code,s="white-space-pre-wrap";n.contains(s)?(n.remove(s),e.classList.remove("active")):(n.add(s),e.classList.add("active"))}),this.panel.appendChild(e)}appendExpandButton(){if(this.maxHeight){this.pre.style.maxHeight=`${this.maxHeight}px`;const e=document.createElement("a");e.setAttribute("role","button"),e.setAttribute("aria-label","Code block expand toggler"),e.className="action",e.innerHTML='<i class="fas fa-arrows-alt-v"></i>',e.addEventListener("click",()=>{const{style:t}=this.pre;t.maxHeight?(t.maxHeight=null,e.classList.add("active")):(t.maxHeight=`${this.maxHeight}px`,e.classList.remove("active"))}),this.panel.appendChild(e)}}};!class{static run(){document.querySelectorAll(".highlight").forEach(e=>{new Mt(e).run()})}}.run(),e(9489);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Te(e,t){for(var n,s=0;s<t.length;s++)n=t[s],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function St(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e){for(t=1;t<arguments.length;t++){var t,n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){St(e,t,n[t])})}return e}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,s=[],o=!0,i=!1,a=void 0;try{for(n=e[Symbol.iterator]();!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return s}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}!class{static run(){[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(e=>new Qe(e))}}.run();var ge=function(){},G={},fe={},ue=null,de={mark:ge,measure:ge};try{"undefined"!=typeof window&&(G=window),"undefined"!=typeof document&&(fe=document),"undefined"!=typeof MutationObserver&&(ue=MutationObserver),"undefined"!=typeof performance&&(de=performance)}catch{}var ce=(G.navigator||{}).userAgent,se=void 0===ce?"":ce,h=G,s=fe,ee=ue,x=de,c=(h.document,!!s.documentElement&&!!s.head&&"function"==typeof s.addEventListener&&"function"==typeof s.createElement),ae=~se.indexOf("MSIE")||~se.indexOf("Trident/"),me="svg-inline--fa",f="data-fa-i2svg",$="data-fa-pseudo-element",ye="fontawesome-i2svg",Ct=["HTML","HEAD","STYLE","SCRIPT"],ut=function(){try{return!0}catch{return!1}}(),xe={fas:"solid",far:"regular",fal:"light",fad:"duotone",fab:"brands",fak:"kit",fa:"solid"},xt={solid:"fas",regular:"far",light:"fal",duotone:"fad",brands:"fab",kit:"fak"},J="fa-layers-text",Ot=/Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i,yt={900:"fas",400:"far",normal:"far",300:"fal"},He=[1,2,3,4,5,6,7,8,9,10],bt=He.concat([11,12,13,14,15,16,17,18,19,20]),vt=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],u={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gt=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",u.GROUP,u.SWAP_OPACITY,u.PRIMARY,u.SECONDARY].concat(He.map(function(e){return"".concat(e,"x")})).concat(bt.map(function(e){return"w-".concat(e)})),Ae=h.FontAwesomeConfig||{};s&&"function"==typeof s.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=W(e,2),o=t[0],i=t[1],n=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=s.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(o));n!=null&&(Ae[i]=n)}),S=n({},{familyPrefix:"fa",replacementClass:me,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ae),S.autoReplaceSvg||(S.observeMutations=!1),t=n({},S),h.FontAwesomeConfig=t,r=h||{},r.___FONT_AWESOME___||(r.___FONT_AWESOME___={}),r.___FONT_AWESOME___.styles||(r.___FONT_AWESOME___.styles={}),r.___FONT_AWESOME___.hooks||(r.___FONT_AWESOME___.hooks={}),r.___FONT_AWESOME___.shims||(r.___FONT_AWESOME___.shims=[]);var a=r.___FONT_AWESOME___,be=[],U=!1;function pt(e){c&&(U?setTimeout(e,0):be.push(e))}c&&((U=(s.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(s.readyState))||s.addEventListener("DOMContentLoaded",function e(){s.removeEventListener("DOMContentLoaded",e),U=1,be.map(function(e){return e()})}));var q,Y="pending",pe="settled",O="fulfilled",w="rejected",ft=function(){},te=void 0!==e.g&&void 0!==e.g.process&&"function"==typeof e.g.process.emit,mt="undefined"==typeof setImmediate?setTimeout:setImmediate,g=[];function lt(){for(var e=0;e<g.length;e++)g[e][0](g[e][1]);g=[],q=!1}function C(e,t){g.push([e,t]),q||(q=!0,mt(lt,0))}function oe(e){var o=e.owner,n=o._state,t=o._data,i=e[n],s=e.then;if("function"==typeof i){n=O;try{t=i(t)}catch(e){_(s,e)}}ie(s,t)||(n===O&&Q(s,t),n===w&&_(s,t))}function ie(e,t){try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===D(t))){var n,s=t.then;if("function"==typeof s)return s.call(t,function(s){n||(n=!0,t===s?re(e,s):Q(e,s))},function(t){n||(n=!0,_(e,t))}),!0}}catch(t){return n||_(e,t),!0}return!1}function Q(e,t){e!==t&&ie(e,t)||re(e,t)}function re(e,t){e._state===Y&&(e._state=pe,e._data=t,C(ct,e))}function _(e,t){e._state===Y&&(e._state=pe,e._data=t,C(rt,e))}function le(e){e._then=e._then.forEach(oe)}function ct(e){e._state=O,le(e)}function rt(t){t._state=w,le(t),!t._handled&&te&&e.g.process.emit("unhandledRejection",t._data,t)}function it(t){e.g.process.emit("rejectionHandled",t)}function o(e){if("function"!=typeof e)throw new TypeError("Promise resolver "+e+" is not a function");if(this instanceof o==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,t){function n(e){_(t,e)}try{e(function(e){Q(t,e)},n)}catch(e){n(e)}}(e,this)}o.prototype={constructor:o,_state:Y,_then:null,_data:void 0,_handled:!1,then:function(e,t){var n={owner:this,then:new this.constructor(ft),fulfilled:e,rejected:t};return!t&&!e||this._handled||(this._handled=!0,this._state===w&&te&&C(it,this)),this._state===O||this._state===w?C(oe,n):this._then.push(n),n.then},catch:function(e){return this.then(null,e)}},o.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new o(function(t,n){var s,i,o=[],a=0;function r(e){return a++,function(n){o[e]=n,--a||t(o)}}for(s=0;s<e.length;s++)(i=e[s])&&"function"==typeof i.then?i.then(r(s),n):o[s]=i;a||t(o)})},o.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new o(function(t,n){for(var s,o=0;o<e.length;o++)(s=e[o])&&"function"==typeof s.then?s.then(t,n):t(s)})},o.resolve=function(e){return e&&"object"===D(e)&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})};var i="function"==typeof Promise?Promise:o,l=16,d={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ve(e){if(e&&c){t=s.createElement("style"),t.setAttribute("type","text/css"),t.innerHTML=e;for(var t,o,r,i=s.head.childNodes,a=null,n=i.length-1;n>-1;n--)o=i[n],r=(o.tagName||"").toUpperCase(),["STYLE","LINK"].indexOf(r)>-1&&(a=o);return s.head.insertBefore(t,a),e}}function v(){for(var t=12,e="";t-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function m(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function V(e){return e.classList?m(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ot(e,t){var s,o=t.split("-"),i=o[0],n=o.slice(1).join("-");return i!==e||""===n||(s=n,~gt.indexOf(s))?null:n}function we(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function B(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n],";")},"")}function I(e){return e.size!==d.size||e.x!==d.x||e.y!==d.y||e.rotate!==d.rotate||e.flipX||e.flipY}function Ce(e){var t=e.transform,n=e.containerWidth,s=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),r="rotate(".concat(t.rotate," 0 0)");return{outer:o,inner:{transform:"".concat(i," ").concat(a," ").concat(r)},path:{transform:"translate(".concat(s/2*-1," -256)")}}}M={x:0,y:0,width:"100%",height:"100%"};function ke(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function H(e){var g=e.icons,d=g.main,a=g.mask,c=e.prefix,r=e.iconName,k=e.transform,m=e.symbol,h=e.title,E=e.maskId,x=e.titleId,o=e.extra,p=e.watchable,_=void 0!==p&&p,b=a.found?a:d,l=b.width,u=b.height,y="fak"===c,w=y?"":"fa-w-".concat(Math.ceil(l/u*16)),O=[t.replacementClass,r?"".concat(t.familyPrefix,"-").concat(r):"",w].filter(function(e){return-1===o.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(o.classes).join(" "),i={children:[],attributes:n({},o.attributes,{"data-prefix":c,"data-icon":r,class:O,role:o.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(l," ").concat(u)})},C=y&&!~o.classes.indexOf("fa-fw")?{width:"".concat(l/u*16*.0625,"em")}:{};_&&(i.attributes[f]=""),h&&i.children.push({tag:"title",attributes:{id:i.attributes["aria-labelledby"]||"title-".concat(x||v())},children:[h]});var s=n({},i,{prefix:c,iconName:r,main:d,mask:a,maskId:E,transform:k,symbol:m,styles:n({},C,o.styles)}),j=a.found&&d.found?function(e){var t,l=e.children,y=e.attributes,i=e.main,a=e.mask,r=e.maskId,j=e.transform,m=i.width,s=i.icon,h=a.width,u=a.icon,o=Ce({transform:j,containerWidth:h,iconWidth:m}),f={tag:"rect",attributes:n({},M,{fill:"white"})},p=s.children?{children:s.children.map(ke)}:{},g={tag:"g",attributes:n({},o.inner),children:[ke(n({tag:s.tag,attributes:n({},s.attributes,o.path)},p))]},b={tag:"g",attributes:n({},o.outer),children:[g]},c="mask-".concat(r||v()),d="clip-".concat(r||v()),_={tag:"mask",attributes:n({},M,{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,b]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:(t=u,"g"===t.tag?t.children:[t])},_]};return l.push(w,{tag:"rect",attributes:n({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(c,")")},M)}),{children:l,attributes:y}}(s):function(e){var s,o=e.children,i=e.attributes,t=e.main,a=e.transform,r=B(e.styles);return r.length>0&&(i.style=r),I(a)?(s=Ce({transform:a,containerWidth:t.width,iconWidth:t.width}),o.push({tag:"g",attributes:n({},s.outer),children:[{tag:"g",attributes:n({},s.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:n({},t.icon.attributes,s.path)}]}]})):o.push(t.icon),{children:o,attributes:i}}(s),A=j.children,S=j.attributes;return s.children=A,s.attributes=S,m?function(e){var o=e.prefix,i=e.iconName,a=e.children,r=e.attributes,s=e.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:n({},r,{id:!0===s?"".concat(o,"-").concat(t.familyPrefix,"-").concat(i):s}),children:a}]}]}(s):function(e){var t,c=e.children,s=e.main,a=e.mask,i=e.attributes,r=e.styles,o=e.transform;return I(o)&&s.found&&!a.found&&(t={x:s.width/s.height/2,y:.5},i.style=B(n({},r,{"transform-origin":"".concat(t.x+o.x/16,"em ").concat(t.y+o.y/16,"em")}))),[{tag:"svg",attributes:i,children:c}]}(s)}function nt(e){var t,o,a,h=e.content,u=e.width,p=e.height,d=e.transform,s=e.title,r=e.extra,c=e.watchable,m=void 0!==c&&c,i=n({},r.attributes,s?{title:s}:{},{class:r.classes.join(" ")});return m&&(i[f]=""),t=n({},r.styles),I(d)&&(t.transform=function(e){var t=e.transform,a=e.width,r=void 0===a?16:a,s=e.height,c=void 0===s?16:s,o=e.startCentered,i=void 0!==o&&o,n="";return n+=i&&ae?"translate(".concat(t.x/l-r/2,"em, ").concat(t.y/l-c/2,"em) "):i?"translate(calc(-50% + ".concat(t.x/l,"em), calc(-50% + ").concat(t.y/l,"em)) "):"translate(".concat(t.x/l,"em, ").concat(t.y/l,"em) "),n+="scale(".concat(t.size/l*(t.flipX?-1:1),", ").concat(t.size/l*(t.flipY?-1:1),") "),n+"rotate(".concat(t.rotate,"deg) ")}({transform:d,startCentered:!0,width:u,height:p}),t["-webkit-transform"]=t.transform),a=B(t),a.length>0&&(i.style=a),o=[],o.push({tag:"span",attributes:i,children:[h]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var Me=function(){},L=t.measurePerformance&&x&&x.mark&&x.measure?x:{mark:Me,measure:Me},y='FA "5.15.4"',tt=function(e){L.mark("".concat(y," ").concat(e," ends")),L.measure("".concat(y," ").concat(e),"".concat(y," ").concat(e," begins"),"".concat(y," ").concat(e," ends"))},z=function(e){return L.mark("".concat(y," ").concat(e," begins")),function(){return tt(e)}},N=function(e,t,n,s){var o,i,r,a=Object.keys(e),c=a.length,l=void 0!==s?function(e,t){return function(n,s,o,i){return e.call(t,n,s,o,i)}}(t,s):t;for(void 0===n?(o=1,i=e[a[0]]):(o=0,i=n);o<c;o++)i=l(i,e[r=a[o]],r,e);return i};function Le(e){for(var n="",t=0;t<e.length;t++)n+=("000"+e.charCodeAt(t).toString(16)).slice(-4);return n}function Re(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=i.skipHooks,r=void 0!==s&&s,o=Object.keys(t).reduce(function(e,n){var s=t[n];return!!s.icon?e[s.iconName]=s.icon:e[n]=s,e},{});"function"!=typeof a.hooks.addPack||r?a.styles[e]=n({},a.styles[e]||{},o):a.hooks.addPack(e,o),"fas"===e&&Re("fa",t)}var Pe=a.styles,et=a.shims,Ie={},Be={},Ve={},Ze=function(){var t,e=function(e){return N(Pe,function(t,n,s){return t[s]=N(n,e,{}),t},{})};Ie=e(function(e,t,n){return t[3]&&(e[t[3]]=n),e}),Be=e(function(e,t,n){var s=t[2];return e[n]=n,s.forEach(function(t){e[t]=n}),e}),t="far"in Pe,Ve=N(et,function(e,n){var o=n[0],s=n[1],i=n[2];return"far"!==s||t||(s="fas"),e[o]={prefix:s,iconName:i},e},{})};function We(e,t){return(Ie[e]||{})[t]}Ze(),Ue=a.styles;function T(e){return e.reduce(function(e,n){var o,s=ot(t.familyPrefix,n);return Ue[n]?e.prefix=n:t.autoFetchSvg&&Object.keys(xe).indexOf(n)>-1?e.prefix=n:s?(o="fa"===e.prefix?Ve[s]||{prefix:null,iconName:null}:{},e.iconName=o.iconName||s,e.prefix=o.prefix||e.prefix):n!==t.replacementClass&&0!==n.indexOf("fa-w-")&&e.rest.push(n),e},{prefix:null,iconName:null,rest:[]})}function qe(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function b(e){var t=e.tag,n=e.attributes,o=void 0===n?{}:n,s=e.children,i=void 0===s?[]:s;return"string"==typeof e?we(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(we(e[n]),'" ')},"").trim()}(o),">").concat(i.map(b).join(""),"</").concat(t,">")}Ge=function(){};function Xe(e){return"string"==typeof(e.getAttribute?e.getAttribute(f):null)}j={replace:function(e){var s,n=e[0],o=e[1].map(function(e){return b(e)}).join(`
`);n.parentNode&&n.outerHTML?n.outerHTML=o+(t.keepOriginalSource&&"svg"!==n.tagName.toLowerCase()?"<!-- ".concat(n.outerHTML," Font Awesome fontawesome.com -->"):""):n.parentNode&&(s=document.createElement("span"),n.parentNode.replaceChild(s,n),s.outerHTML=o)},nest:function(e){var o,i,a,s=e[0],n=e[1];if(~V(s).indexOf(t.replacementClass))return j.replace(e);i=new RegExp("".concat(t.familyPrefix,"-.*")),delete n[0].attributes.style,delete n[0].attributes.id,o=n[0].attributes.class.split(" ").reduce(function(e,n){return n===t.replacementClass||n.match(i)?e.toSvg.push(n):e.toNode.push(n),e},{toNode:[],toSvg:[]}),n[0].attributes.class=o.toSvg.join(" "),a=n.map(function(e){return b(e)}).join(`
`),s.setAttribute("class",o.toNode.join(" ")),s.setAttribute(f,""),s.innerHTML=a}};function Ee(e){e()}function De(e,n){var s,o="function"==typeof n?n:Ge;0===e.length?o():(s=Ee,"async"===t.mutateApproach&&(s=h.requestAnimationFrame||Ee),s(function(){var n=!0===t.autoReplaceSvg?j.replace:j[t.autoReplaceSvg]||j.replace,s=z("mutate");e.map(n),s(),o()}))}k=!1;function ze(){k=!1}P=null;function st(e){if(ee&&t.observeMutations){var i=e.treeCallback,a=e.nodeCallback,n=e.pseudoElementsCallback,o=e.observeMutationsRoot,r=void 0===o?s:o;P=new ee(function(e){k||m(e).forEach(function(e){if("childList"===e.type&&e.addedNodes.length>0&&!Xe(e.addedNodes[0])&&(t.searchPseudoElements&&n(e.target),i(e.target)),"attributes"===e.type&&e.target.parentNode&&t.searchPseudoElements&&n(e.target.parentNode),"attributes"===e.type&&Xe(e.target)&&~vt.indexOf(e.attributeName))if("class"===e.attributeName){var s=T(V(e.target)),o=s.prefix,r=s.iconName;o&&e.target.setAttribute("data-prefix",o),r&&e.target.setAttribute("data-icon",r)}else a(e.target)})}),c&&P.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ft(e){var n=e.getAttribute("data-prefix"),s=e.getAttribute("data-icon"),o=void 0!==e.innerText?e.innerText.trim():"",t=T(V(e));return n&&s&&(t.prefix=n,t.iconName=s),t.prefix&&o.length>1?t.iconName=function(e,t){return(Be[e]||{})[t]}(t.prefix,e.innerText):t.prefix&&1===o.length&&(t.iconName=We(t.prefix,Le(e.innerText))),t}he=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(e,t){var o=t.toLowerCase().split("-"),s=o[0],n=o.slice(1).join("-");if(s&&"h"===n)return e.flipX=!0,e;if(s&&"v"===n)return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(s){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n}return e},t):t};function at(e){var n=Ft(e),s=n.iconName,o=n.prefix,i=n.rest,a=function(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(e,t){var n=t.split(":"),s=n[0],o=n.slice(1);return s&&o.length>0&&(e[s]=o.join(":").trim()),e},{})),n}(e),r=function(e){return he(e.getAttribute("data-fa-transform"))}(e),c=function(e){var t=e.getAttribute("data-fa-symbol");return null!==t&&(""===t||t)}(e),l=function(e){var n=m(e.attributes).reduce(function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e},{}),s=e.getAttribute("title"),o=e.getAttribute("data-fa-title-id");return t.autoA11y&&(s?n["aria-labelledby"]="".concat(t.replacementClass,"-title-").concat(o||v()):(n["aria-hidden"]="true",n.focusable="false")),n}(e),d=function(e){var t=e.getAttribute("data-fa-mask");return t?T(t.split(" ").map(function(e){return e.trim()})):{prefix:null,iconName:null,rest:[]}}(e);return{iconName:s,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:r,symbol:c,mask:d,maskId:e.getAttribute("data-fa-mask-id"),extra:{classes:i,styles:a,attributes:l}}}function p(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}p.prototype=Object.create(Error.prototype),p.prototype.constructor=p;var E={fill:"currentColor"},ne={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},dt={tag:"path",attributes:n({},E,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},F=n({},ne,{attributeName:"opacity"}),ht={tag:"g",children:[dt,{tag:"circle",attributes:n({},E,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:n({},ne,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:n({},F,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:n({},E,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:n({},F,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:n({},E,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:n({},F,{values:"0;0;1;1;0;0;"})}]}]},X=a.styles;function Z(e){var s=e[0],o=e[1],n=W(e.slice(4),1)[0];return{found:!0,width:s,height:o,icon:Array.isArray(n)?{tag:"g",attributes:{class:"".concat(t.familyPrefix,"-").concat(u.GROUP)},children:[{tag:"path",attributes:{class:"".concat(t.familyPrefix,"-").concat(u.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(t.familyPrefix,"-").concat(u.PRIMARY),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}}}}function K(e,n){return new i(function(s,o){var i={found:!1,width:512,height:512,icon:ht};if(e&&n&&X[n]&&X[n][e])return s(Z(X[n][e]));e&&n&&!t.showMissingIcons?o(new p("Icon is missing for prefix ".concat(n," with icon name ").concat(e))):s(i)})}Se=a.styles;function Fe(e){var n=at(e);return~n.extra.classes.indexOf(J)?function(e,n){var s,o,l=n.title,d=n.transform,a=n.extra,r=null,c=null;return ae&&(o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect(),r=s.width/o,c=s.height/o),t.autoA11y&&!l&&(a.attributes["aria-hidden"]="true"),i.resolve([e,nt({content:e.innerHTML,width:r,height:c,transform:d,title:l,extra:a,watchable:!0})])}(e,n):function(e,t){var n=t.iconName,a=t.title,r=t.titleId,s=t.prefix,c=t.transform,l=t.symbol,o=t.mask,d=t.maskId,u=t.extra;return new i(function(t){i.all([K(n,s),K(o.iconName,o.prefix)]).then(function(o){var i=W(o,2),m=i[0],h=i[1];t([e,H({icons:{main:m,mask:h},prefix:s,iconName:n,transform:c,symbol:l,mask:h,maskId:d,title:a,titleId:r,extra:u,watchable:!0})])})})}(e,n)}function Ne(e){if(r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,c){var n,o,r,h,u=s.documentElement.classList,a=function(e){return u.add("".concat(ye,"-").concat(e))},l=function(e){return u.remove("".concat(ye,"-").concat(e))},g=t.autoFetchSvg?Object.keys(xe):Object.keys(Se),d=[".".concat(J,":not([").concat(f,"])")].concat(g.map(function(e){return".".concat(e,":not([").concat(f,"])")})).join(", ");if(0!==d.length){n=[];try{n=m(e.querySelectorAll(d))}catch{}if(n.length>0)return a("pending"),l("complete"),o=z("onTree"),h=n.reduce(function(e,t){try{var n=Fe(t);n&&e.push(n)}catch(e){ut||e instanceof p&&console.error(e)}return e},[]),new i(function(e,t){i.all(h).then(function(t){De(t,function(){a("active"),a("complete"),l("pending"),"function"==typeof r&&r(),o(),e()})}).catch(function(){o(),t()})})}}}function jt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Fe(e).then(function(e){e&&De([e],t)})}function $e(e,t){var o="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new i(function(i,a){if(null!==e.getAttribute(o))return i();var p,j,r=m(e.children).filter(function(e){return e.getAttribute($)===t})[0],c=h.getComputedStyle(e,t),l=c.getPropertyValue("font-family").match(Ot),w=c.getPropertyValue("font-weight"),y=c.getPropertyValue("content");if(r&&!l)return e.removeChild(r),i();if(l&&"none"!==y&&""!==y){var g=c.getPropertyValue("content"),u=~["Solid","Regular","Light","Duotone","Brands","Kit"].indexOf(l[2])?xt[l[2].toLowerCase()]:yt[w],_=Le(3===g.length?g.substr(1,1):g),v=We(u,_),f=v;!v||r&&r.getAttribute("data-prefix")===u&&r.getAttribute("data-icon")===f?i():(e.setAttribute(o,f),r&&e.removeChild(r),p={iconName:null,title:null,titleId:null,prefix:null,transform:d,symbol:!1,mask:null,maskId:null,extra:{classes:[],styles:{},attributes:{}}},j=p.extra,j.attributes[$]=t,K(v,u).then(function(a){var c=H(n({},p,{icons:{main:a,mask:{prefix:null,iconName:null,rest:[]}},prefix:u,iconName:f,extra:j,watchable:!0})),r=s.createElement("svg");":before"===t?e.insertBefore(r,e.firstChild):e.appendChild(r),r.outerHTML=c.map(function(e){return b(e)}).join(`
`),e.removeAttribute(o),i()}).catch(a))}else i()})}function _t(e){return i.all([$e(e,":before"),$e(e,":after")])}function wt(e){return!(e.parentNode===document.head||~Ct.indexOf(e.tagName.toUpperCase())||e.getAttribute($)||e.parentNode&&"svg"===e.parentNode.tagName)}function Ke(e){if(c)return new i(function(t,n){var o=m(e.querySelectorAll("*")).filter(wt).map(_t),s=z("searchPseudoElements");k=!0,i.all(o).then(function(){s(),ze(),t()}).catch(function(){s(),ze(),n()})})}function R(){var e="fa",o=me,n=t.familyPrefix,i=t.replacementClass,s=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;if(n!==e||i!==o){var a=new RegExp("\\.".concat(e,"\\-"),"g"),r=new RegExp("\\--".concat(e,"\\-"),"g"),c=new RegExp("\\.".concat(o),"g");s=s.replace(a,".".concat(n,"-")).replace(r,"--".concat(n,"-")).replace(c,".".concat(i))}return s}function Oe(){t.autoAddCss&&!A&&(ve(R()),A=!0)}function Et(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return b(e)})}}),Object.defineProperty(e,"node",{get:function(){if(c){var t=s.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function ls(e){var n=e.prefix,s=void 0===n?"fa":n,t=e.iconName;if(t)return qe(je.definitions,s,t)||qe(a.styles,s,t)}var t,r,j,k,S,M,P,Je,Qe,Ue,Ge,he,Se,At,je=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t,s,o;return t=e,(s=[{key:"add",value:function(){for(var t,s=this,o=arguments.length,i=new Array(o),e=0;e<o;e++)i[e]=arguments[e];t=i.reduce(this._pullDefinitions,{}),Object.keys(t).forEach(function(e){s.definitions[e]=n({},s.definitions[e]||{},t[e]),Re(e,t[e]),Ze()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var s=n[t],o=s.prefix,i=s.iconName,a=s.icon;e[o]||(e[o]={}),e[o][i]=a}),e}}])&&Te(t.prototype,s),o&&Te(t,o),e}()),A=!1,_e={i2svg:function(){if(e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c){Oe();var e,n=e.node,o=void 0===n?s:n,a=e.callback,r=void 0===a?function(){}:a;return t.searchPseudoElements&&Ke(o),Ne(o,r)}return i.reject("Operation requires a DOM of some kind.")},css:R,insertCss:function(){A||(ve(R()),A=!0)},watch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.autoReplaceSvgRoot,s=e.observeMutationsRoot;!1===t.autoReplaceSvg&&(t.autoReplaceSvg=!0),t.observeMutations=!0,pt(function(){zt({autoReplaceSvgRoot:n}),st({treeCallback:Ne,nodeCallback:jt,pseudoElementsCallback:Ke,observeMutationsRoot:s})})}},Tt=(At=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=s.transform,w=void 0===p?d:p,a=s.symbol,_=void 0!==a&&a,c=s.mask,l=void 0===c?null:c,u=s.maskId,y=void 0===u?null:u,m=s.title,f=void 0===m?null:m,b=s.titleId,g=void 0===b?null:b,i=s.classes,j=void 0===i?[]:i,h=s.attributes,o=void 0===h?{}:h,r=s.styles,O=void 0===r?{}:r;if(e){var x=e.prefix,C=e.iconName,E=e.icon;return Et(n({type:"icon"},e),function(){return Oe(),t.autoA11y&&(f?o["aria-labelledby"]="".concat(t.replacementClass,"-title-").concat(g||v()):(o["aria-hidden"]="true",o.focusable="false")),H({icons:{main:Z(E),mask:l?Z(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:C,transform:n({},d,w),symbol:_,title:f,maskId:y,titleId:g,extra:{attributes:o,styles:O,classes:j}})})}},_e),zt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.autoReplaceSvgRoot,o=void 0===e?s:e;(Object.keys(a.styles).length>0||t.autoFetchSvg)&&c&&t.autoReplaceSvg&&Tt.i2svg({node:o})},Dt={prefix:"fas",iconName:"adjust",icon:[512,512,[],"f042","M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"]},Nt={prefix:"fas",iconName:"arrow-left",icon:[448,512,[],"f060","M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"]},Lt={prefix:"fas",iconName:"arrows-alt-v",icon:[256,512,[],"f338","M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z"]},Rt={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]},Pt={prefix:"fas",iconName:"building",icon:[448,512,[],"f1ad","M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"]},Ht={prefix:"fas",iconName:"check-circle",icon:[512,512,[],"f058","M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"]},It={prefix:"fas",iconName:"chevron-circle-down",icon:[512,512,[],"f13a","M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"]},Bt={prefix:"fas",iconName:"chevron-circle-up",icon:[512,512,[],"f139","M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z"]},Vt={prefix:"fas",iconName:"chevron-left",icon:[320,512,[],"f053","M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"]},$t={prefix:"fas",iconName:"chevron-right",icon:[320,512,[],"f054","M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"]},Wt={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"]},Ut={prefix:"fas",iconName:"coffee",icon:[640,512,[],"f0f4","M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"]},Kt={prefix:"fas",iconName:"columns",icon:[512,512,[],"f0db","M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"]},qt={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"]},Yt={prefix:"fas",iconName:"copyright",icon:[512,512,[],"f1f9","M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731-84.692 0-144.484-63.26-144.484-145.567 0-81.303 62.004-143.401 143.762-143.401 66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295-.233-.214-26.529-23.88-61.88-23.88-46.116 0-73.916 33.575-73.916 76.082 0 39.602 25.514 79.692 74.277 79.692 38.697 0 65.28-28.338 65.544-28.625 5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12.001 12.001 0 0 1-.553 14.866z"]},Gt={prefix:"fas",iconName:"edit",icon:[576,512,[],"f044","M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"]},Xt={prefix:"fas",iconName:"ellipsis-v",icon:[192,512,[],"f142","M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"]},Qt={prefix:"fas",iconName:"envelope",icon:[512,512,[],"f0e0","M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"]},Zt={prefix:"fas",iconName:"exclamation-triangle",icon:[576,512,[],"f071","M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"]},Jt={prefix:"fas",iconName:"expand-alt",icon:[448,512,[],"f424","M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"]},en={prefix:"fas",iconName:"eye-dropper",icon:[512,512,[],"f1fb","M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"]},tn={prefix:"fas",iconName:"file-alt",icon:[384,512,[],"f15c","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]},nn={prefix:"fas",iconName:"file-archive",icon:[384,512,[],"f1c6","M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zM128.4 336c-17.9 0-32.4 12.1-32.4 27 0 15 14.6 27 32.5 27s32.4-12.1 32.4-27-14.6-27-32.5-27zM224 136V0h-63.6v32h-32V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM95.9 32h32v32h-32zm32.3 384c-33.2 0-58-30.4-51.4-62.9L96.4 256v-32h32v-32h-32v-32h32v-32h-32V96h32V64h32v32h-32v32h32v32h-32v32h32v32h-32v32h22.1c5.7 0 10.7 4.1 11.8 9.7l17.3 87.7c6.4 32.4-18.4 62.6-51.4 62.6z"]},sn={prefix:"fas",iconName:"folder",icon:[512,512,[],"f07b","M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"]},on={prefix:"fas",iconName:"font",icon:[448,512,[],"f031","M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"]},an={prefix:"fas",iconName:"home",icon:[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]},rn={prefix:"fas",iconName:"info-circle",icon:[512,512,[],"f05a","M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"]},cn={prefix:"fas",iconName:"language",icon:[640,512,[],"f1ab","M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"]},ln={prefix:"fas",iconName:"link",icon:[512,512,[],"f0c1","M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"]},dn={prefix:"fas",iconName:"list",icon:[512,512,[],"f03a","M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"]},un={prefix:"fas",iconName:"list-alt",icon:[512,512,[],"f022","M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"]},hn={prefix:"fas",iconName:"map-marker-alt",icon:[384,512,[],"f3c5","M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"]},mn={prefix:"fas",iconName:"palette",icon:[512,512,[],"f53f","M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"]},fn={prefix:"fas",iconName:"question",icon:[384,512,[],"f128","M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"]},pn={prefix:"fas",iconName:"question-circle",icon:[512,512,[],"f059","M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"]},gn={prefix:"fas",iconName:"redo-alt",icon:[512,512,[],"f2f9","M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"]},vn={prefix:"fas",iconName:"rss",icon:[448,512,[],"f09e","M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"]},bn={prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]},jn={prefix:"fas",iconName:"share-alt",icon:[448,512,[],"f1e0","M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"]},yn={prefix:"fas",iconName:"skull-crossbones",icon:[448,512,[],"f714","M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"]},_n={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"]},wn={prefix:"fas",iconName:"tags",icon:[640,512,[],"f02c","M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"]},On={prefix:"fas",iconName:"thumbtack",icon:[384,512,[],"f08d","M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"]},xn={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]},Cn={prefix:"fas",iconName:"tv",icon:[640,512,[],"f26c","M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"]},En={prefix:"fas",iconName:"undo",icon:[512,512,[],"f0e2","M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"]},kn={prefix:"fas",iconName:"user",icon:[448,512,[],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]},An={prefix:"far",iconName:"star",icon:[576,512,[],"f005","M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]},Sn={prefix:"fab",iconName:"alipay",icon:[448,512,[],"f642","M377.74 32H70.26C31.41 32 0 63.41 0 102.26v307.48C0 448.59 31.41 480 70.26 480h307.48c38.52 0 69.76-31.08 70.26-69.6-45.96-25.62-110.59-60.34-171.6-88.44-32.07 43.97-84.14 81-148.62 81-70.59 0-93.73-45.3-97.04-76.37-3.97-39.01 14.88-81.5 99.52-81.5 35.38 0 79.35 10.25 127.13 24.96 16.53-30.09 26.45-60.34 26.45-60.34h-178.2v-16.7h92.08v-31.24H88.28v-19.01h109.44V92.34h50.92v50.42h109.44v19.01H248.63v31.24h88.77s-15.21 46.62-38.35 90.92c48.93 16.7 100.01 36.04 148.62 52.74V102.26C447.83 63.57 416.43 32 377.74 32zM47.28 322.95c.99 20.17 10.25 53.73 69.93 53.73 52.07 0 92.58-39.68 117.87-72.9-44.63-18.68-84.48-31.41-109.44-31.41-67.45 0-79.35 33.06-78.36 50.58z"]},Mn={prefix:"fab",iconName:"bitbucket",icon:[512,512,[],"f171","M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z"]},Fn={prefix:"fab",iconName:"creative-commons",icon:[496,512,[],"f25e","M245.83 214.87l-33.22 17.28c-9.43-19.58-25.24-19.93-27.46-19.93-22.13 0-33.22 14.61-33.22 43.84 0 23.57 9.21 43.84 33.22 43.84 14.47 0 24.65-7.09 30.57-21.26l30.55 15.5c-6.17 11.51-25.69 38.98-65.1 38.98-22.6 0-73.96-10.32-73.96-77.05 0-58.69 43-77.06 72.63-77.06 30.72-.01 52.7 11.95 65.99 35.86zm143.05 0l-32.78 17.28c-9.5-19.77-25.72-19.93-27.9-19.93-22.14 0-33.22 14.61-33.22 43.84 0 23.55 9.23 43.84 33.22 43.84 14.45 0 24.65-7.09 30.54-21.26l31 15.5c-2.1 3.75-21.39 38.98-65.09 38.98-22.69 0-73.96-9.87-73.96-77.05 0-58.67 42.97-77.06 72.63-77.06 30.71-.01 52.58 11.95 65.56 35.86zM247.56 8.05C104.74 8.05 0 123.11 0 256.05c0 138.49 113.6 248 247.56 248 129.93 0 248.44-100.87 248.44-248 0-137.87-106.62-248-248.44-248zm.87 450.81c-112.54 0-203.7-93.04-203.7-202.81 0-105.42 85.43-203.27 203.72-203.27 112.53 0 202.82 89.46 202.82 203.26-.01 121.69-99.68 202.82-202.84 202.82z"]},Tn={prefix:"fab",iconName:"creative-commons-by",icon:[496,512,[],"f4e7","M314.9 194.4v101.4h-28.3v120.5h-77.1V295.9h-28.3V194.4c0-4.4 1.6-8.2 4.6-11.3 3.1-3.1 6.9-4.7 11.3-4.7H299c4.1 0 7.8 1.6 11.1 4.7 3.1 3.2 4.8 6.9 4.8 11.3zm-101.5-63.7c0-23.3 11.5-35 34.5-35s34.5 11.7 34.5 35c0 23-11.5 34.5-34.5 34.5s-34.5-11.5-34.5-34.5zM247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3z"]},zn={prefix:"fab",iconName:"creative-commons-nc",icon:[496,512,[],"f4e8","M247.6 8C387.4 8 496 115.9 496 256c0 147.2-118.5 248-248.4 248C113.1 504 0 393.2 0 256 0 123.1 104.7 8 247.6 8zM55.8 189.1c-7.4 20.4-11.1 42.7-11.1 66.9 0 110.9 92.1 202.4 203.7 202.4 122.4 0 177.2-101.8 178.5-104.1l-93.4-41.6c-7.7 37.1-41.2 53-68.2 55.4v38.1h-28.8V368c-27.5-.3-52.6-10.2-75.3-29.7l34.1-34.5c31.7 29.4 86.4 31.8 86.4-2.2 0-6.2-2.2-11.2-6.6-15.1-14.2-6-1.8-.1-219.3-97.4zM248.4 52.3c-38.4 0-112.4 8.7-170.5 93l94.8 42.5c10-31.3 40.4-42.9 63.8-44.3v-38.1h28.8v38.1c22.7 1.2 43.4 8.9 62 23L295 199.7c-42.7-29.9-83.5-8-70 11.1 53.4 24.1 43.8 19.8 93 41.6l127.1 56.7c4.1-17.4 6.2-35.1 6.2-53.1 0-57-19.8-105-59.3-143.9-39.3-39.9-87.2-59.8-143.6-59.8z"]},Dn={prefix:"fab",iconName:"creative-commons-nd",icon:[496,512,[],"f4eb","M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3zm94 144.3v42.5H162.1V197h180.3zm0 79.8v42.5H162.1v-42.5h180.3z"]},Nn={prefix:"fab",iconName:"creative-commons-sa",icon:[496,512,[],"f4ef","M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3zM137.7 221c13-83.9 80.5-95.7 108.9-95.7 99.8 0 127.5 82.5 127.5 134.2 0 63.6-41 132.9-128.9 132.9-38.9 0-99.1-20-109.4-97h62.5c1.5 30.1 19.6 45.2 54.5 45.2 23.3 0 58-18.2 58-82.8 0-82.5-49.1-80.6-56.7-80.6-33.1 0-51.7 14.6-55.8 43.8h18.2l-49.2 49.2-49-49.2h19.4z"]},Ln={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},Rn={prefix:"fab",iconName:"discourse",icon:[448,512,[],"f393","M225.9 32C103.3 32 0 130.5 0 252.1 0 256 .1 480 .1 480l225.8-.2c122.7 0 222.1-102.3 222.1-223.9C448 134.3 348.6 32 225.9 32zM224 384c-19.4 0-37.9-4.3-54.4-12.1L88.5 392l22.9-75c-9.8-18.1-15.4-38.9-15.4-61 0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128z"]},Pn={prefix:"fab",iconName:"docker",icon:[640,512,[],"f395","M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"]},Hn={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"]},In={prefix:"fab",iconName:"facebook-square",icon:[448,512,[],"f082","M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"]},Bn={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Vn={prefix:"fab",iconName:"gitlab",icon:[512,512,[],"f296","M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"]},$n={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Wn={prefix:"fab",iconName:"kaggle",icon:[320,512,[],"f5fa","M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z"]},Un={prefix:"fab",iconName:"lastfm",icon:[512,512,[],"f202","M225.8 367.1l-18.8-51s-30.5 34-76.2 34c-40.5 0-69.2-35.2-69.2-91.5 0-72.1 36.4-97.9 72.1-97.9 66.5 0 74.8 53.3 100.9 134.9 18.8 56.9 54 102.6 155.4 102.6 72.7 0 122-22.3 122-80.9 0-72.9-62.7-80.6-115-92.1-25.8-5.9-33.4-16.4-33.4-34 0-19.9 15.8-31.7 41.6-31.7 28.2 0 43.4 10.6 45.7 35.8l58.6-7c-4.7-52.8-41.1-74.5-100.9-74.5-52.8 0-104.4 19.9-104.4 83.9 0 39.9 19.4 65.1 68 76.8 44.9 10.6 79.8 13.8 79.8 45.7 0 21.7-21.1 30.5-61 30.5-59.2 0-83.9-31.1-97.9-73.9-32-96.8-43.6-163-161.3-163C45.7 113.8 0 168.3 0 261c0 89.1 45.7 137.2 127.9 137.2 66.2 0 97.9-31.1 97.9-31.1z"]},Kn={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},qn={prefix:"fab",iconName:"medium-m",icon:[512,512,[],"f3c7","M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"]},Yn={prefix:"fab",iconName:"patreon",icon:[512,512,[],"f3d9","M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"]},Gn={prefix:"fab",iconName:"paypal",icon:[384,512,[],"f1ed","M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"]},Xn={prefix:"fab",iconName:"pinterest",icon:[496,512,[],"f0d2","M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"]},Qn={prefix:"fab",iconName:"qq",icon:[448,512,[],"f1d6","M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"]},Zn={prefix:"fab",iconName:"quora",icon:[448,512,[],"f2c4","M440.5 386.7h-29.3c-1.5 13.5-10.5 30.8-33 30.8-20.5 0-35.3-14.2-49.5-35.8 44.2-34.2 74.7-87.5 74.7-153C403.5 111.2 306.8 32 205 32 105.3 32 7.3 111.7 7.3 228.7c0 134.1 131.3 221.6 249 189C276 451.3 302 480 351.5 480c81.8 0 90.8-75.3 89-93.3zM297 329.2C277.5 300 253.3 277 205.5 277c-30.5 0-54.3 10-69 22.8l12.2 24.3c6.2-3 13-4 19.8-4 35.5 0 53.7 30.8 69.2 61.3-10 3-20.7 4.2-32.7 4.2-75 0-107.5-53-107.5-156.7C97.5 124.5 130 71 205 71c76.2 0 108.7 53.5 108.7 157.7.1 41.8-5.4 75.6-16.7 100.5z"]},Jn={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"]},es={prefix:"fab",iconName:"stack-overflow",icon:[384,512,[],"f16c","M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"]},ts={prefix:"fab",iconName:"telegram-plane",icon:[448,512,[],"f3fe","M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"]},ns={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]},ss={prefix:"fab",iconName:"tumblr",icon:[320,512,[],"f173","M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"]},os={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},is={prefix:"fab",iconName:"weibo",icon:[512,512,[],"f18a","M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8.3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4.6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z"]},rs={prefix:"fab",iconName:"weixin",icon:[576,512,[],"f1d7","M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"]},kt={prefix:"fab",iconName:"youtube",icon:[576,512,[],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},cs={prefix:"fab",iconName:"zhihu",icon:[640,512,[],"f63f","M170.54 148.13v217.54l23.43.01 7.71 26.37 42.01-26.37h49.53V148.13H170.54zm97.75 193.93h-27.94l-27.9 17.51-5.08-17.47-11.9-.04V171.75h72.82v170.31zm-118.46-94.39H97.5c1.74-27.1 2.2-51.59 2.2-73.46h51.16s1.97-22.56-8.58-22.31h-88.5c3.49-13.12 7.87-26.66 13.12-40.67 0 0-24.07 0-32.27 21.57-3.39 8.9-13.21 43.14-30.7 78.12 5.89-.64 25.37-1.18 36.84-22.21 2.11-5.89 2.51-6.66 5.14-14.53h28.87c0 10.5-1.2 66.88-1.68 73.44H20.83c-11.74 0-15.56 23.62-15.56 23.62h65.58C66.45 321.1 42.83 363.12 0 396.34c20.49 5.85 40.91-.93 51-9.9 0 0 22.98-20.9 35.59-69.25l53.96 64.94s7.91-26.89-1.24-39.99c-7.58-8.92-28.06-33.06-36.79-41.81L87.9 311.95c4.36-13.98 6.99-27.55 7.87-40.67h61.65s-.09-23.62-7.59-23.62v.01zm412.02-1.6c20.83-25.64 44.98-58.57 44.98-58.57s-18.65-14.8-27.38-4.06c-6 8.15-36.83 48.2-36.83 48.2l19.23 14.43zm-150.09-59.09c-9.01-8.25-25.91 2.13-25.91 2.13s39.52 55.04 41.12 57.45l19.46-13.73s-25.67-37.61-34.66-45.86h-.01zM640 258.35c-19.78 0-130.91.93-131.06.93v-101c4.81 0 12.42-.4 22.85-1.2 40.88-2.41 70.13-4 87.77-4.81 0 0 12.22-27.19-.59-33.44-3.07-1.18-23.17 4.58-23.17 4.58s-165.22 16.49-232.36 18.05c1.6 8.82 7.62 17.08 15.78 19.55 13.31 3.48 22.69 1.7 49.15.89 24.83-1.6 43.68-2.43 56.51-2.43v99.81H351.41s2.82 22.31 25.51 22.85h107.94v70.92c0 13.97-11.19 21.99-24.48 21.12-14.08.11-26.08-1.15-41.69-1.81 1.99 3.97 6.33 14.39 19.31 21.84 9.88 4.81 16.17 6.57 26.02 6.57 29.56 0 45.67-17.28 44.89-45.31v-73.32h122.36c9.68 0 8.7-23.78 8.7-23.78l.03-.01z"]};t.searchPseudoElements=!0,je.add(Dt,Lt,Nt,Rt,Pt,Ht,It,Bt,Vt,$t,Wt,Ut,Kt,qt,Yt,Gt,Xt,Qt,Zt,Jt,en,on,tn,nn,sn,an,rn,cn,ln,dn,un,hn,mn,fn,pn,gn,vn,bn,jn,yn,_n,wn,On,xn,Cn,En,kn,An,Sn,Mn,Fn,Tn,zn,Dn,Nn,Ln,Rn,Pn,Hn,In,Bn,Vn,$n,Wn,Un,Kn,qn,Gn,Yn,Xn,Qn,Zn,Jn,es,ts,ns,ss,os,kt,is,rs,cs,{prefix:"fab",iconName:"bilibili",icon:[24,24,[],"e001","M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"]},{prefix:"fab",iconName:"liberapay",icon:[80,80,[],"e002",["m25.91,63.04c-3.571,0 -6.373,-0.466 -8.41,-1.396c-2.037,-0.93 -3.495,-2.199 -4.375,-3.809c-0.88,-1.609 -1.308,-3.457 -1.282,-5.544c0.025,-2.086 0.313,-4.311 0.868,-6.675l9.579,-40.05l11.69,-1.81l-10.484,43.44c-0.202,0.905 -0.314,1.735 -0.339,2.489c-0.026,0.754 0.113,1.421 0.415,1.999c0.302,0.579 0.817,1.044 1.546,1.395c0.729,0.353 1.747,0.579 3.055,0.679l-2.263,9.278","m68.15,38.08c0,3.671 -0.604,7.03 -1.811,10.07c-1.207,3.043 -2.879,5.669 -5.01,7.881c-2.138,2.213 -4.702,3.935 -7.693,5.167c-2.992,1.231 -6.248,1.848 -9.767,1.848c-1.71,0 -3.42,-0.151 -5.129,-0.453l-3.394,13.651l-11.162,0l12.52,-52.19c2.01,-0.603 4.311,-1.143 6.901,-1.622c2.589,-0.477 5.393,-0.716 8.41,-0.716c2.815,0 5.242,0.428 7.278,1.282c2.037,0.855 3.708,2.024 5.02,3.507c1.307,1.484 2.274,3.219 2.904,5.205c0.627,1.987 0.942,4.11 0.942,6.373m-27.378,15.461c0.854,0.202 1.91,0.302 3.167,0.302c1.961,0 3.746,-0.364 5.355,-1.094c1.609,-0.728 2.979,-1.747 4.111,-3.055c1.131,-1.307 2.01,-2.877 2.64,-4.714c0.628,-1.835 0.943,-3.858 0.943,-6.071c0,-2.161 -0.479,-3.998 -1.433,-5.506c-0.956,-1.508 -2.615,-2.263 -4.978,-2.263c-1.61,0 -3.118,0.151 -4.525,0.453l-5.28,21.948"]]},{prefix:"fas",iconName:"offline",icon:[16,16,[],"e003","M10.706 3.294A12.545 12.545 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.448 8.448 0 0 1 3.51-1.27L8 6zm2.596 1.404.785-.785c.63.24 1.227.545 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.462 8.462 0 0 0-1.98-.932zM8 10l.933-.933a6.455 6.455 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.532.532 0 0 1-.611.09A5.478 5.478 0 0 0 8 10zm4.905-4.905.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 0 1 .047.737.518.518 0 0 1-.668.05 11.493 11.493 0 0 0-1.811-1.07zM9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75l10.75-10.75z"]}),_e.watch(),e(1956),class{static run(){document.querySelector(".action-reload-page").addEventListener("click",function(){window.location.reload()}),document.querySelector(".action-copy-url").addEventListener("click",function(){navigator.clipboard.writeText(window.location.href),Ye.show("Copied")})}}.run(),e(5749)})()})(),window.viewerOptions={},(()=>{var n={1540:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(4015),i=n.n(o),a=n(3645),r=n.n(a),c=n(6127),s=r()(i());s.i(c.Z),s.push([e.id,".viewer-toolbar ul li{margin-right:.25rem}.viewer-backdrop{background-color:rgba(0,0,0,.85)}","",{version:3,sources:["webpack://./src/viewer/index.scss"],names:[],mappings:"AAIQ,sBACI,mBAAA,CAKZ,iBACI,gCAAA",sourcesContent:[`@import 'viewerjs/dist/viewer.css';

.viewer-toolbar {
    ul {
        li {
            margin-right: .25rem;
        }
    }
}

.viewer-backdrop {
    background-color: rgba(0, 0, 0, 0.85);
}
`],sourceRoot:""}]);const l=s},6127:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(4015),i=n.n(o),a=n(3645),s=n.n(a)()(i());s.push([e.id,`/*!
 * Viewer.js v1.10.2
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-22T13:59:46.805Z
 */

.viewer-zoom-in::before,
.viewer-zoom-out::before,
.viewer-one-to-one::before,
.viewer-reset::before,
.viewer-prev::before,
.viewer-play::before,
.viewer-next::before,
.viewer-rotate-left::before,
.viewer-rotate-right::before,
.viewer-flip-horizontal::before,
.viewer-flip-vertical::before,
.viewer-fullscreen::before,
.viewer-fullscreen-exit::before,
.viewer-close::before {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-size: 280px;
  color: transparent;
  display: block;
  font-size: 0;
  height: 20px;
  line-height: 0;
  width: 20px;
}

.viewer-zoom-in::before {
  background-position: 0 0;
  content: 'Zoom In';
}

.viewer-zoom-out::before {
  background-position: -20px 0;
  content: 'Zoom Out';
}

.viewer-one-to-one::before {
  background-position: -40px 0;
  content: 'One to One';
}

.viewer-reset::before {
  background-position: -60px 0;
  content: 'Reset';
}

.viewer-prev::before {
  background-position: -80px 0;
  content: 'Previous';
}

.viewer-play::before {
  background-position: -100px 0;
  content: 'Play';
}

.viewer-next::before {
  background-position: -120px 0;
  content: 'Next';
}

.viewer-rotate-left::before {
  background-position: -140px 0;
  content: 'Rotate Left';
}

.viewer-rotate-right::before {
  background-position: -160px 0;
  content: 'Rotate Right';
}

.viewer-flip-horizontal::before {
  background-position: -180px 0;
  content: 'Flip Horizontal';
}

.viewer-flip-vertical::before {
  background-position: -200px 0;
  content: 'Flip Vertical';
}

.viewer-fullscreen::before {
  background-position: -220px 0;
  content: 'Enter Full Screen';
}

.viewer-fullscreen-exit::before {
  background-position: -240px 0;
  content: 'Exit Full Screen';
}

.viewer-close::before {
  background-position: -260px 0;
  content: 'Close';
}

.viewer-container {
  bottom: 0;
  direction: ltr;
  font-size: 0;
  left: 0;
  line-height: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  -webkit-tap-highlight-color: transparent;
  top: 0;
  -ms-touch-action: none;
  touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.viewer-container::-moz-selection,
.viewer-container *::-moz-selection {
  background-color: transparent;
}

.viewer-container::selection,
.viewer-container *::selection {
  background-color: transparent;
}

.viewer-container:focus {
  outline: 0;
}

.viewer-container img {
  display: block;
  height: auto;
  max-height: none !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  width: 100%;
}

.viewer-canvas {
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
}

.viewer-canvas > img {
  height: auto;
  margin: 15px auto;
  max-width: 90% !important;
  width: auto;
}

.viewer-footer {
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  text-align: center;
}

.viewer-navbar {
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.viewer-list {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 50px;
  margin: 0;
  overflow: hidden;
  padding: 1px 0;
}

.viewer-list > li {
  color: transparent;
  cursor: pointer;
  float: left;
  font-size: 0;
  height: 50px;
  line-height: 0;
  opacity: 0.5;
  overflow: hidden;
  -webkit-transition: opacity 0.15s;
  transition: opacity 0.15s;
  width: 30px;
}

.viewer-list > li:focus,
.viewer-list > li:hover {
  opacity: 0.75;
}

.viewer-list > li:focus {
  outline: 0;
}

.viewer-list > li + li {
  margin-left: 1px;
}

.viewer-list > .viewer-loading {
  position: relative;
}

.viewer-list > .viewer-loading::after {
  border-width: 2px;
  height: 20px;
  margin-left: -10px;
  margin-top: -10px;
  width: 20px;
}

.viewer-list > .viewer-active,
.viewer-list > .viewer-active:focus,
.viewer-list > .viewer-active:hover {
  opacity: 1;
}

.viewer-player {
  background-color: #000;
  bottom: 0;
  cursor: none;
  display: none;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.viewer-player > img {
  left: 0;
  position: absolute;
  top: 0;
}

.viewer-toolbar > ul {
  display: inline-block;
  margin: 0 auto 5px;
  overflow: hidden;
  padding: 6px 3px;
}

.viewer-toolbar > ul > li {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  float: left;
  height: 24px;
  overflow: hidden;
  -webkit-transition: background-color 0.15s;
  transition: background-color 0.15s;
  width: 24px;
}

.viewer-toolbar > ul > li:focus,
.viewer-toolbar > ul > li:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.viewer-toolbar > ul > li:focus {
  -webkit-box-shadow: 0 0 3px #fff;
  box-shadow: 0 0 3px #fff;
  outline: 0;
  position: relative;
  z-index: 1;
}

.viewer-toolbar > ul > li::before {
  margin: 2px;
}

.viewer-toolbar > ul > li + li {
  margin-left: 1px;
}

.viewer-toolbar > ul > .viewer-small {
  height: 18px;
  margin-bottom: 3px;
  margin-top: 3px;
  width: 18px;
}

.viewer-toolbar > ul > .viewer-small::before {
  margin: -1px;
}

.viewer-toolbar > ul > .viewer-large {
  height: 30px;
  margin-bottom: -3px;
  margin-top: -3px;
  width: 30px;
}

.viewer-toolbar > ul > .viewer-large::before {
  margin: 5px;
}

.viewer-tooltip {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  color: #fff;
  display: none;
  font-size: 12px;
  height: 20px;
  left: 50%;
  line-height: 20px;
  margin-left: -25px;
  margin-top: -10px;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 50px;
}

.viewer-title {
  color: #ccc;
  display: inline-block;
  font-size: 12px;
  line-height: 1.2;
  margin: 0 5% 5px;
  max-width: 90%;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-transition: opacity 0.15s;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.viewer-title:hover {
  opacity: 1;
}

.viewer-button {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  height: 80px;
  overflow: hidden;
  position: absolute;
  right: -40px;
  top: -40px;
  -webkit-transition: background-color 0.15s;
  transition: background-color 0.15s;
  width: 80px;
}

.viewer-button:focus,
.viewer-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.viewer-button:focus {
  -webkit-box-shadow: 0 0 3px #fff;
  box-shadow: 0 0 3px #fff;
  outline: 0;
}

.viewer-button::before {
  bottom: 15px;
  left: 15px;
  position: absolute;
}

.viewer-fixed {
  position: fixed;
}

.viewer-open {
  overflow: hidden;
}

.viewer-show {
  display: block;
}

.viewer-hide {
  display: none;
}

.viewer-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.viewer-invisible {
  visibility: hidden;
}

.viewer-move {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}

.viewer-fade {
  opacity: 0;
}

.viewer-in {
  opacity: 1;
}

.viewer-transition {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

@-webkit-keyframes viewer-spinner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes viewer-spinner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.viewer-loading::after {
  -webkit-animation: viewer-spinner 1s linear infinite;
  animation: viewer-spinner 1s linear infinite;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  content: '';
  display: inline-block;
  height: 40px;
  left: 50%;
  margin-left: -20px;
  margin-top: -20px;
  position: absolute;
  top: 50%;
  width: 40px;
  z-index: 1;
}

@media (max-width: 767px) {
  .viewer-hide-xs-down {
    display: none;
  }
}

@media (max-width: 991px) {
  .viewer-hide-sm-down {
    display: none;
  }
}

@media (max-width: 1199px) {
  .viewer-hide-md-down {
    display: none;
  }
}
`,"",{version:3,sources:["webpack://./node_modules/viewerjs/dist/viewer.css"],names:[],mappings:"AAAA;;;;;;;;EAQE;;AAEF;;;;;;;;;;;;;;EAcE,2kDAA2kD;EAC3kD,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;EAC7B,wBAAwB;AAC1B;;AAEA;EACE,6BAA6B;EAC7B,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;EAC7B,2BAA2B;AAC7B;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,cAAc;EACd,YAAY;EACZ,OAAO;EACP,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,QAAQ;EACR,wCAAwC;EACxC,MAAM;EACN,sBAAsB;EACtB,kBAAkB;EAClB,2BAA2B;EAC3B,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;;EAEE,6BAA6B;AAC/B;;AAEA;;EAEE,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,2BAA2B;EAC3B,0BAA0B;EAC1B,wBAAwB;EACxB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,SAAS;EACT,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,QAAQ;EACR,MAAM;AACR;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,SAAS;EACT,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;EAC/B,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,iCAAiC;EACjC,yBAAyB;EACzB,WAAW;AACb;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;AACb;;AAEA;;;EAGE,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,OAAO;EACP,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,UAAU;AACZ;;AAEA;EACE,OAAO;EACP,kBAAkB;EAClB,MAAM;AACR;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,0CAA0C;EAC1C,kCAAkC;EAClC,WAAW;AACb;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,gCAAgC;EAChC,wBAAwB;EACxB,UAAU;EACV,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,eAAe;EACf,YAAY;EACZ,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,iCAAiC;EACjC,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,0CAA0C;EAC1C,kCAAkC;EAClC,WAAW;AACb;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,gCAAgC;EAChC,wBAAwB;EACxB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,4BAA4B;EAC5B,oBAAoB;AACtB;;AAEA;EACE;IACE,+BAA+B;IAC/B,uBAAuB;EACzB;;EAEA;IACE,iCAAiC;IACjC,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,+BAA+B;IAC/B,uBAAuB;EACzB;;EAEA;IACE,iCAAiC;IACjC,yBAAyB;EAC3B;AACF;;AAEA;EACE,oDAAoD;EACpD,4CAA4C;EAC5C,0CAA0C;EAC1C,2CAA2C;EAC3C,kBAAkB;EAClB,WAAW;EACX,qBAAqB;EACrB,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,UAAU;AACZ;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF",sourcesContent:[`/*!
 * Viewer.js v1.10.2
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-22T13:59:46.805Z
 */

.viewer-zoom-in::before,
.viewer-zoom-out::before,
.viewer-one-to-one::before,
.viewer-reset::before,
.viewer-prev::before,
.viewer-play::before,
.viewer-next::before,
.viewer-rotate-left::before,
.viewer-rotate-right::before,
.viewer-flip-horizontal::before,
.viewer-flip-vertical::before,
.viewer-fullscreen::before,
.viewer-fullscreen-exit::before,
.viewer-close::before {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-size: 280px;
  color: transparent;
  display: block;
  font-size: 0;
  height: 20px;
  line-height: 0;
  width: 20px;
}

.viewer-zoom-in::before {
  background-position: 0 0;
  content: 'Zoom In';
}

.viewer-zoom-out::before {
  background-position: -20px 0;
  content: 'Zoom Out';
}

.viewer-one-to-one::before {
  background-position: -40px 0;
  content: 'One to One';
}

.viewer-reset::before {
  background-position: -60px 0;
  content: 'Reset';
}

.viewer-prev::before {
  background-position: -80px 0;
  content: 'Previous';
}

.viewer-play::before {
  background-position: -100px 0;
  content: 'Play';
}

.viewer-next::before {
  background-position: -120px 0;
  content: 'Next';
}

.viewer-rotate-left::before {
  background-position: -140px 0;
  content: 'Rotate Left';
}

.viewer-rotate-right::before {
  background-position: -160px 0;
  content: 'Rotate Right';
}

.viewer-flip-horizontal::before {
  background-position: -180px 0;
  content: 'Flip Horizontal';
}

.viewer-flip-vertical::before {
  background-position: -200px 0;
  content: 'Flip Vertical';
}

.viewer-fullscreen::before {
  background-position: -220px 0;
  content: 'Enter Full Screen';
}

.viewer-fullscreen-exit::before {
  background-position: -240px 0;
  content: 'Exit Full Screen';
}

.viewer-close::before {
  background-position: -260px 0;
  content: 'Close';
}

.viewer-container {
  bottom: 0;
  direction: ltr;
  font-size: 0;
  left: 0;
  line-height: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  -webkit-tap-highlight-color: transparent;
  top: 0;
  -ms-touch-action: none;
  touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.viewer-container::-moz-selection,
.viewer-container *::-moz-selection {
  background-color: transparent;
}

.viewer-container::selection,
.viewer-container *::selection {
  background-color: transparent;
}

.viewer-container:focus {
  outline: 0;
}

.viewer-container img {
  display: block;
  height: auto;
  max-height: none !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  width: 100%;
}

.viewer-canvas {
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
}

.viewer-canvas > img {
  height: auto;
  margin: 15px auto;
  max-width: 90% !important;
  width: auto;
}

.viewer-footer {
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  text-align: center;
}

.viewer-navbar {
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.viewer-list {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 50px;
  margin: 0;
  overflow: hidden;
  padding: 1px 0;
}

.viewer-list > li {
  color: transparent;
  cursor: pointer;
  float: left;
  font-size: 0;
  height: 50px;
  line-height: 0;
  opacity: 0.5;
  overflow: hidden;
  -webkit-transition: opacity 0.15s;
  transition: opacity 0.15s;
  width: 30px;
}

.viewer-list > li:focus,
.viewer-list > li:hover {
  opacity: 0.75;
}

.viewer-list > li:focus {
  outline: 0;
}

.viewer-list > li + li {
  margin-left: 1px;
}

.viewer-list > .viewer-loading {
  position: relative;
}

.viewer-list > .viewer-loading::after {
  border-width: 2px;
  height: 20px;
  margin-left: -10px;
  margin-top: -10px;
  width: 20px;
}

.viewer-list > .viewer-active,
.viewer-list > .viewer-active:focus,
.viewer-list > .viewer-active:hover {
  opacity: 1;
}

.viewer-player {
  background-color: #000;
  bottom: 0;
  cursor: none;
  display: none;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.viewer-player > img {
  left: 0;
  position: absolute;
  top: 0;
}

.viewer-toolbar > ul {
  display: inline-block;
  margin: 0 auto 5px;
  overflow: hidden;
  padding: 6px 3px;
}

.viewer-toolbar > ul > li {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  float: left;
  height: 24px;
  overflow: hidden;
  -webkit-transition: background-color 0.15s;
  transition: background-color 0.15s;
  width: 24px;
}

.viewer-toolbar > ul > li:focus,
.viewer-toolbar > ul > li:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.viewer-toolbar > ul > li:focus {
  -webkit-box-shadow: 0 0 3px #fff;
  box-shadow: 0 0 3px #fff;
  outline: 0;
  position: relative;
  z-index: 1;
}

.viewer-toolbar > ul > li::before {
  margin: 2px;
}

.viewer-toolbar > ul > li + li {
  margin-left: 1px;
}

.viewer-toolbar > ul > .viewer-small {
  height: 18px;
  margin-bottom: 3px;
  margin-top: 3px;
  width: 18px;
}

.viewer-toolbar > ul > .viewer-small::before {
  margin: -1px;
}

.viewer-toolbar > ul > .viewer-large {
  height: 30px;
  margin-bottom: -3px;
  margin-top: -3px;
  width: 30px;
}

.viewer-toolbar > ul > .viewer-large::before {
  margin: 5px;
}

.viewer-tooltip {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  color: #fff;
  display: none;
  font-size: 12px;
  height: 20px;
  left: 50%;
  line-height: 20px;
  margin-left: -25px;
  margin-top: -10px;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 50px;
}

.viewer-title {
  color: #ccc;
  display: inline-block;
  font-size: 12px;
  line-height: 1.2;
  margin: 0 5% 5px;
  max-width: 90%;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-transition: opacity 0.15s;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.viewer-title:hover {
  opacity: 1;
}

.viewer-button {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  height: 80px;
  overflow: hidden;
  position: absolute;
  right: -40px;
  top: -40px;
  -webkit-transition: background-color 0.15s;
  transition: background-color 0.15s;
  width: 80px;
}

.viewer-button:focus,
.viewer-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.viewer-button:focus {
  -webkit-box-shadow: 0 0 3px #fff;
  box-shadow: 0 0 3px #fff;
  outline: 0;
}

.viewer-button::before {
  bottom: 15px;
  left: 15px;
  position: absolute;
}

.viewer-fixed {
  position: fixed;
}

.viewer-open {
  overflow: hidden;
}

.viewer-show {
  display: block;
}

.viewer-hide {
  display: none;
}

.viewer-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.viewer-invisible {
  visibility: hidden;
}

.viewer-move {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}

.viewer-fade {
  opacity: 0;
}

.viewer-in {
  opacity: 1;
}

.viewer-transition {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

@-webkit-keyframes viewer-spinner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes viewer-spinner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.viewer-loading::after {
  -webkit-animation: viewer-spinner 1s linear infinite;
  animation: viewer-spinner 1s linear infinite;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  content: '';
  display: inline-block;
  height: 40px;
  left: 50%;
  margin-left: -20px;
  margin-top: -20px;
  position: absolute;
  top: 50%;
  width: 40px;
  z-index: 1;
}

@media (max-width: 767px) {
  .viewer-hide-xs-down {
    display: none;
  }
}

@media (max-width: 991px) {
  .viewer-hide-sm-down {
    display: none;
  }
}

@media (max-width: 1199px) {
  .viewer-hide-md-down {
    display: none;
  }
}
`],sourceRoot:""}]);const r=s},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n}).join("")},t.i=function(e,n,s){"string"==typeof e&&(e=[[null,e,""]]);var o,i,a,r,c={};if(s)for(i=0;i<this.length;i++)r=this[i][0],r!=null&&(c[r]=!0);for(a=0;a<e.length;a++)o=[].concat(e[a]),s&&c[o[0]]||(n&&(o[2]?o[2]="".concat(n," and ").concat(o[2]):o[2]=n),t.push(o))},t}},4015:e=>{"use strict";function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]),n==null)return;var n,i,a,s=[],o=!0,r=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(s.push(i.value),!t||s.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(r)throw a}}return s}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);if("Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return t(e,n)}(e,n)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function t(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}e.exports=function(e){var o=n(e,4),s=o[1],t=o[3];if(!t)return s;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(a," */"),c=t.sources.map(function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")});return[s].concat(c).concat([r]).join(`
`)}return[s].join(`
`)}},3379:(e,t,n)=>{"use strict";var i,a,r,d,h,p=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},m=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch{n=null}e[t]=n}return e[t]}}(),s=[];function o(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function c(e,t){for(var u={},h=[],r=0;r<e.length;r++){var i,l,n=e[r],c=t.base?n[0]+t.base:n[0],d=u[c]||0,a="".concat(c," ").concat(d);u[c]=d+1,i=o(a),l={css:n[1],media:n[2],sourceMap:n[3]},-1!==i?(s[i].references++,s[i].updater(l)):s.push({identifier:a,updater:g(l,t),references:1}),h.push(a)}return h}function l(e){var o,i,t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce&&(o=n.nc,o&&(s.nonce=o)),Object.keys(s).forEach(function(e){t.setAttribute(e,s[e])}),"function"==typeof e.insert)e.insert(t);else{if(i=m(e.insert||"head"),!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}d=(a=[],function(e,t){return a[e]=t,a.filter(Boolean).join(`
`)});function u(e,t,n,s){if(i=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css,e.styleSheet)e.styleSheet.cssText=d(t,i);else{var i,a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function f(e,t,n){var s=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(s+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}i=null,h=0;function g(e,t){if(t.singleton){var n,s,o,a=h++;n=i||(i=l(t)),s=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0)}else n=l(t),s=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=p());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(i=0;i<n.length;i++)l=o(n[i]),s[l].references--;for(var i,a,l,d=c(e,t),r=0;r<n.length;r++)a=o(n[r]),0===s[a].references&&(s[a].updater(),s.splice(a,1));n=d}}}},1949:function(e){e.exports=function(){"use strict";function je(e,t){var n,s=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,n)),s}function K(e){for(var t,n=1;n<arguments.length;n++)t=null!=arguments[n]?arguments[n]:{},n%2?je(Object(t),!0).forEach(function(n){He(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):je(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))});return e}function be(e){return(be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function We(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function we(e,t){for(var n,s=0;s<t.length;s++)n=t[s],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function Ie(e,t,n){return t&&we(e.prototype,t),n&&we(e,n),e}function He(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d,B,$,Ce={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},Ne='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',D="undefined"!=typeof window&&void 0!==window.document,p=D?window:{},y=!!D&&!!p.document.documentElement&&"ontouchstart"in p.document.documentElement,U=!!D&&"PointerEvent"in p,n="viewer",I="move",Fe="switch",A="zoom",P="".concat(n,"-active"),Le="".concat(n,"-close"),L="".concat(n,"-fade"),W="".concat(n,"-fixed"),Pe="".concat(n,"-fullscreen"),xe="".concat(n,"-fullscreen-exit"),g="".concat(n,"-hide"),De="".concat(n,"-hide-md-down"),Ve="".concat(n,"-hide-sm-down"),Ue="".concat(n,"-hide-xs-down"),f="".concat(n,"-in"),M="".concat(n,"-invisible"),x="".concat(n,"-loading"),Ke="".concat(n,"-move"),pe="".concat(n,"-open"),O="".concat(n,"-show"),r="".concat(n,"-transition"),w="click",Y="dblclick",ne="dragstart",me="focusin",Se="keydown",m="load",H="error",Ge=y?"touchend touchcancel":"mouseup",Ye=y?"touchmove":"mousemove",Xe=y?"touchstart":"mousedown",ke=U?"pointerdown":Xe,Oe=U?"pointermove":Ye,ge=U?"pointerup pointercancel":Ge,fe="resize",h="transitionend",de="wheel",ie="ready",Q="show",Z="shown",J="hide",ee="hidden",te="view",k="viewed",se="move",oe="moved",ze="rotate",ae="rotated",re="scale",ce="scaled",le="zoom",X="zoomed",ue="play",he="stop",N="".concat(n,"Action"),q=/\s\s*/,F=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"],ve,_e,Ee,Te;function C(e){return"string"==typeof e}ve=Number.isNaN||p.isNaN;function l(e){return"number"==typeof e&&!ve(e)}function _(e){return void 0===e}function v(e){return"object"===be(e)&&null!==e}_e=Object.prototype.hasOwnProperty;function E(e){if(!v(e))return!1;try{var t=e.constructor,n=t.prototype;return t&&n&&_e.call(n,"isPrototypeOf")}catch{return!1}}function o(e){return"function"==typeof e}function i(e,t){if(e&&o(t))if(Array.isArray(e)||l(e.length)){var n,s=e.length;for(n=0;n<s&&!1!==t.call(e,e[n],n,e);n+=1);}else v(e)&&Object.keys(e).forEach(function(n){t.call(e,e[n],n,e)});return e}d=Object.assign||function(e){for(var n=arguments.length,s=new Array(n>1?n-1:0),t=1;t<n;t++)s[t-1]=arguments[t];return v(e)&&s.length>0&&s.forEach(function(t){v(t)&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e},Ee=/^(?:width|height|left|top|marginLeft|marginTop)$/;function u(e,t){var n=e.style;i(t,function(e,t){Ee.test(t)&&l(e)&&(e+="px"),n[t]=e})}function Re(e){return C(e)?e.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e}function b(e,t){return!!e&&!!t&&(e.classList?e.classList.contains(t):e.className.indexOf(t)>-1)}function e(t,n){if(t&&n)if(l(t.length))i(t,function(t){e(t,n)});else if(t.classList)t.classList.add(n);else{var s=t.className.trim();s?s.indexOf(n)<0&&(t.className="".concat(s," ").concat(n)):t.className=n}}function s(e,t){e&&t&&(l(e.length)?i(e,function(e){s(e,t)}):e.classList?e.classList.remove(t):e.className.indexOf(t)>=0&&(e.className=e.className.replace(t,"")))}function S(t,n,o){n&&(l(t.length)?i(t,function(e){S(e,n,o)}):o?e(t,n):s(t,n))}Te=/([a-z\d])([A-Z])/g;function G(e){return e.replace(Te,"$1-$2").toLowerCase()}function j(e,t){return v(e[t])?e[t]:e.dataset?e.dataset[t]:e.getAttribute("data-".concat(G(t)))}function V(e,t,n){v(n)?e[t]=n:e.dataset?e.dataset[t]=n:e.setAttribute("data-".concat(G(t)),n)}$=function(){if(e=!1,D){var e,t=!1,n=function(){},s=Object.defineProperty({},"once",{get:function(){return e=!0,t},set:function(e){t=e}});p.addEventListener("test",n,s),p.removeEventListener("test",n,s)}return e}();function a(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=n;t.trim().split(q).forEach(function(t){if(!$){var i=e.listeners;i&&i[t]&&i[t][n]&&(s=i[t][n],delete i[t][n],0===Object.keys(i[t]).length&&delete i[t],0===Object.keys(i).length&&delete e.listeners)}e.removeEventListener(t,s,o)})}function t(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n;t.trim().split(q).forEach(function(t){if(s.once&&!$){var a=e.listeners,i=void 0===a?{}:a;o=function(){delete i[t][n],e.removeEventListener(t,o,s);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];n.apply(e,c)},i[t]||(i[t]={}),i[t][n]&&e.removeEventListener(t,i[t][n],s),i[t][n]=o,e.listeners=i}e.addEventListener(t,o,s)})}function c(e,t,n,s){var i;return o(Event)&&o(CustomEvent)?i=new CustomEvent(t,K({bubbles:!0,cancelable:!0,detail:n},s)):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(i)}function Be(e){var t=e.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}function T(e){var n,r=e.rotate,s=e.scaleX,o=e.scaleY,i=e.translateX,a=e.translateY,t=[];return l(i)&&0!==i&&t.push("translateX(".concat(i,"px)")),l(a)&&0!==a&&t.push("translateY(".concat(a,"px)")),l(r)&&0!==r&&t.push("rotate(".concat(r,"deg)")),l(s)&&1!==s&&t.push("scaleX(".concat(s,")")),l(o)&&1!==o&&t.push("scaleY(".concat(o,")")),n=t.length?t.join(" "):"none",{WebkitTransform:n,msTransform:n,transform:n}}function $e(e){return C(e)?decodeURIComponent(e.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}B=p.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(p.navigator.userAgent);function ye(e,t,n){var o,s=document.createElement("img");return e.naturalWidth&&!B?(n(e.naturalWidth,e.naturalHeight),s):(o=document.body||document.documentElement,s.onload=function(){n(s.width,s.height),B||o.removeChild(s)},i(t.inheritedAttributes,function(t){var n=e.getAttribute(t);null!==n&&s.setAttribute(t,n)}),s.src=e.src,B||(s.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(s)),s)}function z(e){switch(e){case 2:return Ue;case 3:return Ve;case 4:return De;default:return""}}function qe(e){var n=K({},e),t=[];return i(e,function(e,s){delete n[s],i(n,function(n){var s=Math.abs(e.startX-n.startX),o=Math.abs(e.startY-n.startY),i=Math.abs(e.endX-n.endX),a=Math.abs(e.endY-n.endY),r=Math.sqrt(s*s+o*o),c=(Math.sqrt(i*i+a*a)-r)/r;t.push(c)})}),t.sort(function(e,t){return Math.abs(e)<Math.abs(t)}),t[0]}function R(e,t){var n=e.pageX,s=e.pageY,o={endX:n,endY:s};return t?o:K({timeStamp:Date.now(),startX:n,startY:s},o)}function ot(e){var n=0,s=0,t=0;return i(e,function(e){var o=e.startX,i=e.startY;n+=o,s+=i,t+=1}),{pageX:n/=t,pageY:s/=t}}var Ae,Qe={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var e=this.element.ownerDocument,t=e.body||e.documentElement;this.body=t,this.scrollbarWidth=window.innerWidth-e.documentElement.clientWidth,this.initialBodyPaddingRight=t.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(t).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var e,t=this.options,n=this.parent;t.inline&&(e={width:Math.max(n.offsetWidth,t.minWidth),height:Math.max(n.offsetHeight,t.minHeight)},this.parentData=e),!this.fulled&&e||(e=this.containerData),this.viewerData=d({},e)},renderViewer:function(){this.options.inline&&!this.fulled&&u(this.viewer,this.viewerData)},initList:function(){var l=this,d=this.element,n=this.options,o=this.list,c=[];o.innerHTML="",i(this.images,function(e,t){var s,a,r=e.src,u=e.alt||$e(r),d=l.getImageURL(e);(r||d)&&(s=document.createElement("li"),a=document.createElement("img"),i(n.inheritedAttributes,function(t){var n=e.getAttribute(t);null!==n&&a.setAttribute(t,n)}),a.src=r||d,a.alt=u,a.setAttribute("data-original-url",d||r),s.setAttribute("data-index",t),s.setAttribute("data-viewer-action","view"),s.setAttribute("role","button"),n.keyboard&&s.setAttribute("tabindex",0),s.appendChild(a),o.appendChild(s),c.push(s))}),this.items=c,i(c,function(o){var r,c,i=o.firstElementChild;V(i,"filled",!0),n.loading&&e(o,x),t(i,m,r=function(e){a(i,H,c),n.loading&&s(o,x),l.loadImage(e)},{once:!0}),t(i,H,c=function(){a(i,m,r),n.loading&&s(o,x)},{once:!0})}),n.transition&&t(d,k,function(){e(o,r)},{once:!0})},renderList:function(){if(t=this.index,e=this.items[t],e){var e,t,i=e.nextElementSibling,n=parseInt(window.getComputedStyle(i||e).marginLeft,10),s=e.offsetWidth,o=s+n;u(this.list,d({width:o*this.length-n},T({translateX:(this.viewerData.width-s)/2-o*t})))}},resetList:function(){var e=this.list;e.innerHTML="",s(e,r),u(e,T({translateX:0}))},initImage:function(e){var c,o=this,s=this.options,l=this.image,a=this.viewerData,r=this.footer.offsetHeight,t=a.width,n=Math.max(a.height-r,r),i=this.imageData||{};this.imageInitializing={abort:function(){c.onload=null}},c=ye(l,s,function(a,r){var h=a/r,c=t,l=n;o.imageInitializing=!1,n*h>t?l=t/h:c=n*h;var c=Math.min(.9*c,a),l=Math.min(.9*l,r),f=(t-c)/2,p=(n-l)/2,u={left:f,top:p,x:f,y:p,width:c,height:l,oldRatio:1,ratio:c/a,aspectRatio:h,naturalWidth:a,naturalHeight:r},m=d({},u);s.rotatable&&(u.rotate=i.rotate||0,m.rotate=0),s.scalable&&(u.scaleX=i.scaleX||1,u.scaleY=i.scaleY||1,m.scaleX=1,m.scaleY=1),o.imageData=u,o.initialImageData=m,e&&e()})},renderImage:function(e){var o,i=this,s=this.image,n=this.imageData;u(s,d({width:n.width,height:n.height,marginLeft:n.x,marginTop:n.y},T(n))),e&&((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&b(s,r)?(o=function(){i.imageRendering=!1,e()},this.imageRendering={abort:function(){a(s,h,o)}},t(s,h,o,{once:!0})):e())},resetImage:function(){if(this.viewing||this.viewed){var e=this.image;this.viewing&&this.viewing.abort(),e.parentNode.removeChild(e),this.image=null}}},Ze={bind:function(){var e=this.options,n=this.viewer,o=this.canvas,s=this.element.ownerDocument;t(n,w,this.onClick=this.click.bind(this)),t(n,ne,this.onDragStart=this.dragstart.bind(this)),t(o,ke,this.onPointerDown=this.pointerdown.bind(this)),t(s,Oe,this.onPointerMove=this.pointermove.bind(this)),t(s,ge,this.onPointerUp=this.pointerup.bind(this)),t(s,Se,this.onKeyDown=this.keydown.bind(this)),t(window,fe,this.onResize=this.resize.bind(this)),e.zoomable&&e.zoomOnWheel&&t(n,de,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleOnDblclick&&t(o,Y,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var e=this.options,t=this.viewer,s=this.canvas,n=this.element.ownerDocument;a(t,w,this.onClick),a(t,ne,this.onDragStart),a(s,ke,this.onPointerDown),a(n,Oe,this.onPointerMove),a(n,ge,this.onPointerUp),a(n,Se,this.onKeyDown),a(window,fe,this.onResize),e.zoomable&&e.zoomOnWheel&&a(t,de,this.onWheel,{passive:!1,capture:!0}),e.toggleOnDblclick&&a(s,Y,this.onDblclick)}},Je={click:function(e){var n=this.options,o=this.imageData,t=e.target,s=j(t,N);switch(s||"img"!==t.localName||"li"!==t.parentElement.localName||(s=j(t=t.parentElement,N)),y&&e.isTrusted&&t===this.canvas&&clearTimeout(this.clickCanvasTimeout),s){case"mix":this.played?this.stop():n.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.hide();break;case"view":this.view(j(t,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(n.loop);break;case"play":this.play(n.fullscreen);break;case"next":this.next(n.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-o.scaleX||-1);break;case"flip-vertical":this.scaleY(-o.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(e){e.preventDefault(),this.viewed&&e.target===this.image&&(y&&e.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(e))},load:function(){e=this,this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var e,a=this.element,n=this.options,i=this.image,l=this.index,d=this.viewerData;s(i,M),n.loading&&s(this.canvas,x),i.style.cssText="height:0;"+"margin-left:".concat(d.width/2,"px;")+"margin-top:".concat(d.height/2,"px;")+"max-width:none!important;position:relative;width:0;",this.initImage(function(){S(i,Ke,n.movable),S(i,r,n.transition),e.renderImage(function(){e.viewed=!0,e.viewing=!1,o(n.viewed)&&t(a,k,n.viewed,{once:!0}),c(a,k,{originalImage:e.images[l],index:l,image:i},{cancelable:!1})})})},loadImage:function(e){var s=e.target,o=s.parentNode,t=o.offsetWidth||30,n=o.offsetHeight||50,i=!!j(s,"filled");ye(s,this.options,function(e,o){var a=e/o,r=t,c=n;n*a>t?i?r=n*a:c=t/a:i?c=t/a:r=n*a,u(s,d({width:r,height:c},T({translateX:(t-r)/2,translateY:(n-c)/2})))})},keydown:function(e){var n,t=this.options;if(t.keyboard){switch(n=e.keyCode||e.which||e.charCode,n){case 13:this.viewer.contains(e.target)&&this.click(e)}if(this.fulled)switch(n){case 27:this.played?this.stop():t.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.prev(t.loop);break;case 38:e.preventDefault(),this.zoom(t.zoomRatio,!0);break;case 39:this.next(t.loop);break;case 40:e.preventDefault(),this.zoom(-t.zoomRatio,!0);break;case 48:case 49:e.ctrlKey&&(e.preventDefault(),this.toggle())}}},dragstart:function(e){"img"===e.target.localName&&e.preventDefault()},pointerdown:function(e){var t,n=this.options,o=this.pointers,a=e.buttons,c=e.button;!this.viewed||this.showing||this.viewing||this.hiding||("mousedown"===e.type||"pointerdown"===e.type&&"mouse"===e.pointerType)&&(l(a)&&1!==a||l(c)&&0!==c||e.ctrlKey)||(e.preventDefault(),e.changedTouches?i(e.changedTouches,function(e){o[e.identifier]=R(e)}):o[e.pointerId||0]=R(e),t=!!n.movable&&I,n.zoomOnTouch&&n.zoomable&&Object.keys(o).length>1?t=A:n.slideOnTouch&&("touch"===e.pointerType||"touchstart"===e.type)&&this.isSwitchable()&&(t=Fe),!n.transition||t!==I&&t!==A||s(this.image,r),this.action=t)},pointermove:function(e){var t=this.pointers,n=this.action;this.viewed&&n&&(e.preventDefault(),e.changedTouches?i(e.changedTouches,function(e){d(t[e.identifier]||{},R(e,!0))}):d(t[e.pointerId||0]||{},R(e,!0)),this.change(e))},pointerup:function(t){var n,l=this,s=this.options,o=this.action,a=this.pointers;t.changedTouches?i(t.changedTouches,function(e){n=a[e.identifier],delete a[e.identifier]}):(n=a[t.pointerId||0],delete a[t.pointerId||0]),o&&(t.preventDefault(),!s.transition||o!==I&&o!==A||e(this.image,r),this.action=!1,y&&o!==A&&n&&Date.now()-n.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),s.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){c(l.image,Y)},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){l.imageClicked=!1},500)):(this.imageClicked=!1,s.backdrop&&"static"!==s.backdrop&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){c(l.canvas,w)},50)))))},resize:function(){var e=this;if(this.isShown&&!this.hiding&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){e.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement))return void this.stop();i(this.player.getElementsByTagName("img"),function(n){t(n,m,e.loadImage.bind(e),{once:!0}),c(n,m)})}},wheel:function(e){if(n=this,this.viewed&&(e.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){n.wheeling=!1},50);var n,s=Number(this.options.zoomRatio)||.1,t=1;e.deltaY?t=e.deltaY>0?1:-1:e.wheelDelta?t=-e.wheelDelta/120:e.detail&&(t=e.detail>0?1:-1),this.zoom(-t*s,!0,e)}}},et={show:function(){var n,l,d=arguments.length>0&&void 0!==arguments[0]&&arguments[0],u=this.element,i=this.options;return i.inline||this.showing||this.isShown||this.showing?this:this.ready?(o(i.show)&&t(u,Q,i.show,{once:!0}),!1===c(u,Q)||!this.ready?this:(this.hiding&&this.transitioning.abort(),this.showing=!0,this.open(),n=this.viewer,s(n,g),n.setAttribute("role","dialog"),n.setAttribute("aria-labelledby",this.title.id),n.setAttribute("aria-modal",!0),n.removeAttribute("aria-hidden"),i.transition&&!d?(l=this.shown.bind(this),this.transitioning={abort:function(){a(n,h,l),s(n,f)}},e(n,r),n.initialOffsetWidth=n.offsetWidth,t(n,h,l,{once:!0}),e(n,f)):(e(n,f),this.shown()),this)):(this.build(),this.ready&&this.show(d),this)},hide:function(){var n,u,d=this,g=arguments.length>0&&void 0!==arguments[0]&&arguments[0],p=this.element,i=this.options;if(i.inline||this.hiding||!this.isShown&&!this.showing)return this;if(o(i.hide)&&t(p,J,i.hide,{once:!0}),!1===c(p,J))return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var e=this.viewer,l=this.image,m=function(){s(e,f),d.hidden()};return i.transition&&!g?(u=function t(n){n&&n.target===e&&(a(e,h,t),d.hidden())},n=function(){b(e,r)?(t(e,h,u),s(e,f)):m()},this.transitioning={abort:function(){d.viewed&&b(l,r)?a(l,h,n):b(e,r)&&a(e,h,u)}},this.viewed&&b(l,r)?(t(l,h,n,{once:!0}),this.zoomTo(0,!1,null,!0)):n()):m(),this},view:function(){if(r=this,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.initialViewIndex,l=Number(l)||0,this.hiding||this.played||l<0||l>=this.length||this.viewed&&l===this.index)return this;if(!this.isShown)return this.index=l,this.show();this.viewing&&this.viewing.abort();var r,l,f,p,b,w,u=this.element,d=this.options,_=this.title,g=this.canvas,h=this.items[l],v=h.querySelector("img"),O=j(v,"originalUrl"),y=v.getAttribute("alt"),n=document.createElement("img");return i(d.inheritedAttributes,function(e){var t=v.getAttribute(e);null!==t&&n.setAttribute(e,t)}),n.src=O,n.alt=y,o(d.view)&&t(u,te,d.view,{once:!0}),!1===c(u,te,{originalImage:this.images[l],index:l,image:n})||!this.isShown||this.hiding||this.played?this:(f=this.items[this.index],f&&(s(f,P),f.removeAttribute("aria-selected")),e(h,P),h.setAttribute("aria-selected",!0),d.focus&&h.focus(),this.image=n,this.viewed=!1,this.index=l,this.imageData={},e(n,M),d.loading&&e(g,x),g.innerHTML="",g.appendChild(n),this.renderList(),_.innerHTML="",b=function(){var e=r.imageData,t=Array.isArray(d.title)?d.title[1]:d.title;_.innerHTML=Re(o(t)?t.call(r,n,e):"".concat(y," (").concat(e.naturalWidth," × ").concat(e.naturalHeight,")"))},t(u,k,b,{once:!0}),this.viewing={abort:function(){a(u,k,b),n.complete?r.imageRendering?r.imageRendering.abort():r.imageInitializing&&r.imageInitializing.abort():(n.src="",a(n,m,p),r.timeout&&clearTimeout(r.timeout))}},n.complete?this.load():(t(n,m,p=function(){a(n,H,w),r.load()},{once:!0}),t(n,H,w=function(){a(n,m,p),r.timeout&&(clearTimeout(r.timeout),r.timeout=!1),s(n,M),d.loading&&s(r.canvas,x)},{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){s(n,M),r.timeout=!1},1e3)),this)},prev:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.index-1;return e<0&&(e=t?this.length-1:0),this.view(e),this},next:function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.length-1,e=this.index+1;return e>t&&(e=n?0:t),this.view(e),this},move:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=this.imageData;return this.moveTo(_(e)?e:n.x+Number(e),_(t)?t:n.y+Number(t)),this},moveTo:function(e){var m=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,h=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.element,i=this.options,s=this.imageData;if(e=Number(e),n=Number(n),this.viewed&&!this.played&&i.movable){var r=s.x,u=s.y,d=!1;if(l(e)?d=!0:e=r,l(n)?d=!0:n=u,d){if(o(i.move)&&t(a,se,i.move,{once:!0}),!1===c(a,se,{x:e,y:n,oldX:r,oldY:u,originalEvent:h}))return this;s.x=e,s.y=n,s.left=e,s.top=n,this.moving=!0,this.renderImage(function(){m.moving=!1,o(i.moved)&&t(a,oe,i.moved,{once:!0}),c(a,oe,{x:e,y:n,oldX:r,oldY:u,originalEvent:h},{cancelable:!1})})}}return this},rotate:function(e){return this.rotateTo((this.imageData.rotate||0)+Number(e)),this},rotateTo:function(e){var i,r=this,s=this.element,n=this.options,a=this.imageData;if(l(e=Number(e))&&this.viewed&&!this.played&&n.rotatable){if(i=a.rotate,o(n.rotate)&&t(s,ze,n.rotate,{once:!0}),!1===c(s,ze,{degree:e,oldDegree:i}))return this;a.rotate=e,this.rotating=!0,this.renderImage(function(){r.rotating=!1,o(n.rotated)&&t(s,ae,n.rotated,{once:!0}),c(s,ae,{degree:e,oldDegree:i},{cancelable:!1})})}return this},scaleX:function(e){return this.scale(e,this.imageData.scaleY),this},scaleY:function(e){return this.scale(this.imageData.scaleX,e),this},scale:function(e){var h=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=this.element,s=this.options,a=this.imageData;if(e=Number(e),n=Number(n),this.viewed&&!this.played&&s.scalable){var d=a.scaleX,r=a.scaleY,u=!1;if(l(e)?u=!0:e=d,l(n)?u=!0:n=r,u){if(o(s.scale)&&t(i,re,s.scale,{once:!0}),!1===c(i,re,{scaleX:e,scaleY:n,oldScaleX:d,oldScaleY:r}))return this;a.scaleX=e,a.scaleY=n,this.scaling=!0,this.renderImage(function(){h.scaling=!1,o(s.scaled)&&t(i,ce,s.scaled,{once:!0}),c(i,ce,{scaleX:e,scaleY:n,oldScaleX:d,oldScaleY:r},{cancelable:!1})})}}return this},zoom:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=this.imageData;return e=(e=Number(e))<0?1/(1-e):1+e,this.zoomTo(t.width*e/t.naturalWidth,n,s),this},zoomTo:function(e){var d,h,j,y,k=this,E=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,g=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=this.element,s=this.options,u=this.pointers,n=this.imageData,C=n.x,x=n.y,p=n.width,_=n.height,O=n.naturalWidth,w=n.naturalHeight;if(l(e=Math.max(0,e))&&this.viewed&&!this.played&&(g||s.zoomable)){g||(j=Math.max(.01,s.minZoomRatio),y=Math.min(100,s.maxZoomRatio),e=Math.min(Math.max(e,j),y)),i&&s.zoomRatio>=.055&&e>.95&&e<1.05&&(e=1);var m=O*e,b=w*e,v=m-p,f=b-_,r=n.ratio;if(o(s.zoom)&&t(a,le,s.zoom,{once:!0}),!1===c(a,le,{ratio:e,oldRatio:r,originalEvent:i}))return this;this.zooming=!0,i?(h=Be(this.viewer),d=u&&Object.keys(u).length?ot(u):{pageX:i.pageX,pageY:i.pageY},n.x-=v*((d.pageX-h.left-C)/p),n.y-=f*((d.pageY-h.top-x)/_)):(n.x-=v/2,n.y-=f/2),n.left=n.x,n.top=n.y,n.width=m,n.height=b,n.oldRatio=r,n.ratio=e,this.renderImage(function(){k.zooming=!1,o(s.zoomed)&&t(a,X,s.zoomed,{once:!0}),c(a,X,{ratio:e,oldRatio:r,originalEvent:i},{cancelable:!1})}),E&&this.tooltip()}return this},play:function(){if(y=this,u=arguments.length>0&&void 0!==arguments[0]&&arguments[0],!this.isShown||this.played)return this;if(p=this.element,n=this.options,o(n.play)&&t(p,ue,n.play,{once:!0}),!1===c(p,ue))return this;var n,u,p,y,_,g=this.player,v=this.loadImage.bind(this),d=[],h=0,a=0;return(this.played=!0,this.onLoadWhenPlay=v,u&&this.requestFullscreen(u),e(g,O),i(this.items,function(s,o){var c=s.querySelector("img"),i=document.createElement("img");i.src=j(c,"originalUrl"),i.alt=c.getAttribute("alt"),i.referrerPolicy=c.referrerPolicy,h+=1,e(i,L),S(i,r,n.transition),b(s,P)&&(e(i,f),a=o),d.push(i),t(i,m,v,{once:!0}),g.appendChild(i)}),l(n.interval)&&n.interval>0)&&(_=function t(){y.playing=setTimeout(function(){s(d[a],f),e(d[a=(a+=1)<h?a:0],f),t()},n.interval)},h>1&&_()),this},stop:function(){if(n=this,!this.played)return this;var e,n,r=this.element,l=this.options;return o(l.stop)&&t(r,he,l.stop,{once:!0}),!1===c(r,he)?this:(e=this.player,this.played=!1,clearTimeout(this.playing),i(e.getElementsByTagName("img"),function(e){a(e,m,n.onLoadWhenPlay)}),s(e,O),e.innerHTML="",this.exitFullscreen(),this)},full:function(){var a=this,n=this.options,t=this.viewer,o=this.image,i=this.list;return!this.isShown||this.played||this.fulled||!n.inline||(this.fulled=!0,this.open(),e(this.button,xe),n.transition&&(s(i,r),this.viewed&&s(o,r)),e(t,W),t.setAttribute("role","dialog"),t.setAttribute("aria-labelledby",this.title.id),t.setAttribute("aria-modal",!0),t.removeAttribute("style"),u(t,{zIndex:n.zIndex}),n.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=d({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){a.renderImage(function(){n.transition&&setTimeout(function(){e(o,r),e(i,r)},0)})})),this},exit:function(){var a=this,t=this.options,n=this.viewer,o=this.image,i=this.list;return this.isShown&&!this.played&&this.fulled&&t.inline?(this.fulled=!1,this.close(),s(this.button,xe),t.transition&&(s(i,r),this.viewed&&s(o,r)),t.focus&&this.clearEnforceFocus(),n.removeAttribute("role"),n.removeAttribute("aria-labelledby"),n.removeAttribute("aria-modal"),s(n,W),u(n,{zIndex:t.zIndexInline}),this.viewerData=d({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){a.renderImage(function(){t.transition&&setTimeout(function(){e(o,r),e(i,r)},0)})}),this):this},tooltip:function(){var o=this,i=this.options,n=this.tooltipBox,a=this.imageData;return this.viewed&&!this.played&&i.tooltip?(n.textContent="".concat(Math.round(100*a.ratio),"%"),this.tooltipping?clearTimeout(this.tooltipping):i.transition?(this.fading&&c(n,h),e(n,O),e(n,L),e(n,r),n.removeAttribute("aria-hidden"),n.initialOffsetWidth=n.offsetWidth,e(n,f)):(e(n,O),n.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(function(){i.transition?(t(n,h,function(){s(n,O),s(n,L),s(n,r),n.setAttribute("aria-hidden",!0),o.fading=!1},{once:!0}),s(n,f),o.fading=!0):(s(n,O),n.setAttribute("aria-hidden",!0)),o.tooltipping=!1},1e3),this):this},toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return 1===this.imageData.ratio?this.zoomTo(this.imageData.oldRatio,!0,e):this.zoomTo(1,!0,e),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=d({},this.initialImageData),this.renderImage()),this},update:function(){var t,n,a,r,d=this,s=this.element,c=this.options,l=this.isImg;return l&&!s.parentNode?this.destroy():(t=[],i(l?[s]:s.querySelectorAll("img"),function(e){o(c.filter)?c.filter.call(d,e)&&t.push(e):d.getImageURL(e)&&t.push(e)}),t.length?(this.images=t,this.length=t.length,this.ready?(a=[],(i(this.items,function(e,n){var s=e.querySelector("img"),o=t[n];o&&s&&o.src===s.src&&o.alt===s.alt||a.push(n)}),u(this.list,{width:"auto"}),this.initList(),this.isShown)&&(this.length?this.viewed&&(n=a.indexOf(this.index),n>=0?(this.viewed=!1,this.view(Math.max(Math.min(this.index-n,this.length-1),0))):(r=this.items[this.index],e(r,P),r.setAttribute("aria-selected",!0))):(this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""))):this.build(),this):this)},destroy:function(){var e=this.element,t=this.options;return e[n]?(this.destroyed=!0,this.ready?(this.played&&this.stop(),t.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):t.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),t.inline||a(e,w,this.onStart),e[n]=void 0,this):this}},tt={getImageURL:function(e){var t=this.options.url;return t=C(t)?e.getAttribute(t):o(t)?t.call(this,e):""},enforceFocus:function(){var e=this;this.clearEnforceFocus(),t(document,me,this.onFocusin=function(t){var s=e.viewer,n=t.target;n===document||n===s||s.contains(n)||null!==n.getAttribute("tabindex")&&"true"===n.getAttribute("aria-modal")||s.focus()})},clearEnforceFocus:function(){this.onFocusin&&(a(document,me,this.onFocusin),this.onFocusin=null)},open:function(){var t=this.body;e(t,pe),t.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px")},close:function(){var e=this.body;s(e,pe),e.style.paddingRight=this.initialBodyPaddingRight},shown:function(){var n=this.element,e=this.options,s=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,e.focus&&(s.focus(),this.enforceFocus()),o(e.shown)&&t(n,Z,e.shown,{once:!0}),!1!==c(n,Z)&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var i=this.element,s=this.options,n=this.viewer;s.fucus&&this.clearEnforceFocus(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.close(),this.unbind(),e(n,g),n.removeAttribute("role"),n.removeAttribute("aria-labelledby"),n.removeAttribute("aria-modal"),n.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.hiding=!1,this.destroyed||(o(s.hidden)&&t(i,ee,s.hidden,{once:!0}),c(i,ee,null,{cancelable:!1}))},requestFullscreen:function(e){var t,n=this.element.ownerDocument;this.fulled&&!(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement)&&(t=n.documentElement,t.requestFullscreen?E(e)?t.requestFullscreen(e):t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen())},exitFullscreen:function(){var e=this.element.ownerDocument;this.fulled&&(e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement)&&(e.exitFullscreen?e.exitFullscreen():e.webkitExitFullscreen?e.webkitExitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.msExitFullscreen&&e.msExitFullscreen())},change:function(e){var n,o,a,r=this.options,s=this.pointers,t=s[Object.keys(s)[0]];if(t){switch(n=t.endX-t.startX,o=t.endY-t.startY,this.action){case I:this.move(n,o,e);break;case A:this.zoom(qe(s),!1,e);break;case Fe:this.action="switched",a=Math.abs(n),a>1&&a>Math.abs(o)&&(this.pointers={},n>1?this.prev(r.loop):n<-1&&this.next(r.loop))}i(s,function(e){e.startX=e.endX,e.startY=e.endY})}},isSwitchable:function(){var e=this.imageData,t=this.viewerData;return this.length>1&&e.x>=0&&e.y>=0&&e.width<=t.width&&e.height<=t.height}},nt=p.Viewer,st=(Ae=-1,function(){return Ae+=1}),Me=function(){function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(We(this,s),!e||1!==e.nodeType)throw new Error("The first argument is required and must be an element.");this.element=e,this.options=d({},Ce,E(t)&&t),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.id=st(),this.init()}return Ie(s,[{key:"init",value:function(){var r,l,d,u,e=this,c=this.element,s=this.options;c[n]||(c[n]=this,s.focus&&!s.keyboard&&(s.focus=!1),d="img"===c.localName,r=[],i(d?[c]:c.querySelectorAll("img"),function(t){o(s.filter)?s.filter.call(e,t)&&r.push(t):e.getImageURL(t)&&r.push(t)}),this.isImg=d,this.length=r.length,this.images=r,this.initBody(),_(document.createElement(n).style.transition)&&(s.transition=!1),s.inline?(u=0,l=function(){var t;(u+=1)===e.length&&(e.initializing=!1,e.delaying={abort:function(){clearTimeout(t)}},t=setTimeout(function(){e.delaying=!1,e.build()},0))},this.initializing={abort:function(){i(r,function(e){e.complete||a(e,m,l)})}},i(r,function(e){e.complete?l():t(e,m,l,{once:!0})})):t(c,w,this.onStart=function(t){var n=t.target;"img"!==n.localName||o(s.filter)&&!s.filter.call(e,n)||e.view(e.images.indexOf(n))}))}},{key:"build",value:function(){if(!this.ready){var m=this.element,s=this.options,p=m.parentNode,j=document.createElement("div");j.innerHTML=Ne;var r,v,a=j.querySelector(".".concat(n,"-container")),b=a.querySelector(".".concat(n,"-title")),d=a.querySelector(".".concat(n,"-toolbar")),y=a.querySelector(".".concat(n,"-navbar")),h=a.querySelector(".".concat(n,"-button")),O=a.querySelector(".".concat(n,"-canvas"));if(this.parent=p,this.viewer=a,this.title=b,this.toolbar=d,this.navbar=y,this.button=h,this.canvas=O,this.footer=a.querySelector(".".concat(n,"-footer")),this.tooltipBox=a.querySelector(".".concat(n,"-tooltip")),this.player=a.querySelector(".".concat(n,"-player")),this.list=a.querySelector(".".concat(n,"-list")),a.id="".concat(n).concat(this.id),b.id="".concat(n,"Title").concat(this.id),e(b,s.title?z(Array.isArray(s.title)?s.title[0]:s.title):g),e(y,s.navbar?z(s.navbar):g),S(h,g,!s.button),s.keyboard&&h.setAttribute("tabindex",0),s.backdrop&&(e(a,"".concat(n,"-backdrop")),s.inline||"static"===s.backdrop||V(O,N,"hide")),C(s.className)&&s.className&&s.className.split(q).forEach(function(t){e(a,t)}),s.toolbar){var x=document.createElement("ul"),f=E(s.toolbar),k=F.slice(0,3),A=F.slice(7,9),T=F.slice(9);f||e(d,z(s.toolbar)),i(f?s.toolbar:F,function(i,a){var d=f&&E(i),c=f?G(a):i,u=d&&!_(i.show)?i.show:i;if(u&&(s.zoomable||-1===k.indexOf(c))&&(s.rotatable||-1===A.indexOf(c))&&(s.scalable||-1===T.indexOf(c))){var m=d&&!_(i.size)?i.size:i,h=d&&!_(i.click)?i.click:i,r=document.createElement("li");s.keyboard&&r.setAttribute("tabindex",0),r.setAttribute("role","button"),e(r,"".concat(n,"-").concat(c)),o(h)||V(r,N,c),l(u)&&e(r,z(u)),-1!==["small","large"].indexOf(m)?e(r,"".concat(n,"-").concat(m)):"play"===c&&e(r,"".concat(n,"-large")),o(h)&&t(r,w,h),x.appendChild(r)}}),d.appendChild(x)}else e(d,g);s.rotatable||(v=d.querySelectorAll('li[class*="rotate"]'),e(v,M),i(v,function(e){d.appendChild(e)})),s.inline?(e(h,Pe),u(a,{zIndex:s.zIndexInline}),"static"===window.getComputedStyle(p).position&&u(p,{position:"relative"}),p.insertBefore(a,m.nextSibling)):(e(h,Le),e(a,W),e(a,L),e(a,g),u(a,{zIndex:s.zIndex}),r=s.container,C(r)&&(r=m.ownerDocument.querySelector(r)),r||(r=this.body),r.appendChild(a)),s.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,o(s.ready)&&t(m,ie,s.ready,{once:!0}),!1!==c(m,ie)?this.ready&&s.inline&&this.view(this.index):this.ready=!1}}}],[{key:"noConflict",value:function(){return window.Viewer=nt,s}},{key:"setDefaults",value:function(e){d(Ce,E(e)&&e)}}]),s}();return d(Me.prototype,Qe,Ze,Je,et,tt),Me}()}},t={};function e(s){var o,i=t[s];return void 0!==i?i.exports:(o=t[s]={id:s,exports:{}},n[s].call(o.exports,o,o.exports,e),o.exports)}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var t=e(1949),n=e.n(t);class s{constructor(){this.excludeClassNames=["profile-avatar"];const e=this,t={filter:t=>e.isImageValid(t)};this.gallery=new(n())(document.querySelector("main"),Object.assign(t,window.viewerOptions))}run(){const e=this;document.querySelectorAll("img").forEach(function(t){"A"!==t.parentElement.tagName&&e.isImageValid(t)&&t.addEventListener("click",function(){e.gallery.show()})})}isImageValid(e){return 0==this.excludeClassNames.filter(t=>e.classList.contains(t)).length}}document.addEventListener("DOMContentLoaded",()=>{(new s).run()})})(),(()=>{"use strict";var n=e(3379),s=e.n(n),t=e(1540),o={insert:"head",singleton:!1};s()(t.Z,o),t.Z.locals})()})(),(()=>{class e{constructor(){this.config=window.params.utterances}run(){const e=this;""==this.config.theme&&(document.addEventListener("hbs:mode",function(t){e.rerender(e.getTheme(t.detail.mode))}),setTimeout(function(){e.rerender("github-"+localStorage.getItem("hbs-mode"))},2e3))}getTheme(e){return"dark"===e?"github-dark":"github-light"}rerender(e){var t;const s={type:"set-theme",theme:e},n=document.querySelector(".utterances-frame");null===(t=n?.contentWindow)||void 0===t||t.postMessage(s,"https://utteranc.es")}}document.addEventListener("DOMContentLoaded",()=>{(new e).run()})})(),(()=>{"use strict";u={};function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function ae(e,t){for(var n,s=0;s<t.length;s++)n=t[s],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function yt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){for(t=1;t<arguments.length;t++){var t,n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){yt(e,t,n[t])})}return e}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,s=[],o=!0,i=!1,a=void 0;try{for(n=e[Symbol.iterator]();!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return s}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch{if("object"==typeof window)return window}}();var ge=function(){},R={},we={},Qe=null,xe={mark:ge,measure:ge};try{"undefined"!=typeof window&&(R=window),"undefined"!=typeof document&&(we=document),"undefined"!=typeof MutationObserver&&(Qe=MutationObserver),"undefined"!=typeof performance&&(xe=performance)}catch{}var e,a,u,j,C,k,S,G,Ce=(R.navigator||{}).userAgent,Se=void 0===Ce?"":Ce,m=R,n=we,Fe=Qe,A=xe,r=(m.document,!!n.documentElement&&!!n.head&&"function"==typeof n.addEventListener&&"function"==typeof n.createElement),J=~Se.indexOf("MSIE")||~Se.indexOf("Trident/"),qe="svg-inline--fa",f="data-fa-i2svg",q="data-fa-pseudo-element",We="fontawesome-i2svg",Ft=["HTML","HEAD","STYLE","SCRIPT"],st=function(){try{return!0}catch{return!1}}(),Me={fas:"solid",far:"regular",fal:"light",fad:"duotone",fab:"brands",fak:"kit",fa:"solid"},it={solid:"fas",regular:"far",light:"fal",duotone:"fad",brands:"fab",kit:"fak"},ke="fa-layers-text",lt=/Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i,ut={900:"fas",400:"far",normal:"far",300:"fal"},ye=[1,2,3,4,5,6,7,8,9,10],mt=ye.concat([11,12,13,14,15,16,17,18,19,20]),Ze=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],d={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gt=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",d.GROUP,d.SWAP_OPACITY,d.PRIMARY,d.SECONDARY].concat(ye.map(function(e){return"".concat(e,"x")})).concat(mt.map(function(e){return"w-".concat(e)})),fe=m.FontAwesomeConfig||{},Be,Ue,Ne,_e,le;n&&"function"==typeof n.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=I(e,2),o=t[0],i=t[1],s=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=n.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(o));s!=null&&(fe[i]=s)}),k=t({},{familyPrefix:"fa",replacementClass:qe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},fe),k.autoReplaceSvg||(k.observeMutations=!1),e=t({},k),m.FontAwesomeConfig=e,a=m||{},a.___FONT_AWESOME___||(a.___FONT_AWESOME___={}),a.___FONT_AWESOME___.styles||(a.___FONT_AWESOME___.styles={}),a.___FONT_AWESOME___.hooks||(a.___FONT_AWESOME___.hooks={}),a.___FONT_AWESOME___.shims||(a.___FONT_AWESOME___.shims=[]);var i=a.___FONT_AWESOME___,he=[],B=!1;function jt(e){r&&(B?setTimeout(e,0):he.push(e))}r&&((B=(n.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState))||n.addEventListener("DOMContentLoaded",function e(){n.removeEventListener("DOMContentLoaded",e),B=1,he.map(function(e){return e()})}));var $,W="pending",de="settled",M="fulfilled",w="rejected",_t=function(){},oe=void 0!==u.g&&void 0!==u.g.process&&"function"==typeof u.g.process.emit,At="undefined"==typeof setImmediate?setTimeout:setImmediate,b=[];function ht(){for(var e=0;e<b.length;e++)b[e][0](b[e][1]);b=[],$=!1}function E(e,t){b.push([e,t]),$||($=!0,At(ht,0))}function ee(e){var o=e.owner,n=o._state,t=o._data,i=e[n],s=e.then;if("function"==typeof i){n=M;try{t=i(t)}catch(e){v(s,e)}}te(s,t)||(n===M&&X(s,t),n===w&&v(s,t))}function te(e,t){try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===O(t))){var n,s=t.then;if("function"==typeof s)return s.call(t,function(s){n||(n=!0,t===s?se(e,s):X(e,s))},function(t){n||(n=!0,v(e,t))}),!0}}catch(t){return n||v(e,t),!0}return!1}function X(e,t){e!==t&&te(e,t)||se(e,t)}function se(e,t){e._state===W&&(e._state=de,e._data=t,E(kt,e))}function v(e,t){e._state===W&&(e._state=de,e._data=t,E(Et,e))}function ie(e){e._then=e._then.forEach(ee)}function kt(e){e._state=M,ie(e)}function Et(e){e._state=w,ie(e),!e._handled&&oe&&u.g.process.emit("unhandledRejection",e._data,e)}function wt(e){u.g.process.emit("rejectionHandled",e)}function s(e){if("function"!=typeof e)throw new TypeError("Promise resolver "+e+" is not a function");if(this instanceof s==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,t){function n(e){v(t,e)}try{e(function(e){X(t,e)},n)}catch(e){n(e)}}(e,this)}s.prototype={constructor:s,_state:W,_then:null,_data:void 0,_handled:!1,then:function(e,t){var n={owner:this,then:new this.constructor(_t),fulfilled:e,rejected:t};return!t&&!e||this._handled||(this._handled=!0,this._state===w&&oe&&E(wt,this)),this._state===M||this._state===w?E(ee,n):this._then.push(n),n.then},catch:function(e){return this.then(null,e)}},s.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new s(function(t,n){var s,i,o=[],a=0;function r(e){return a++,function(n){o[e]=n,--a||t(o)}}for(s=0;s<e.length;s++)(i=e[s])&&"function"==typeof i.then?i.then(r(s),n):o[s]=i;a||t(o)})},s.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new s(function(t,n){for(var s,o=0;o<e.length;o++)(s=e[o])&&"function"==typeof s.then?s.then(t,n):t(s)})},s.resolve=function(e){return e&&"object"===O(e)&&e.constructor===s?e:new s(function(t){t(e)})},s.reject=function(e){return new s(function(t,n){n(e)})};var o="function"==typeof Promise?Promise:s,c=16,l={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function me(e){if(e&&r){t=n.createElement("style"),t.setAttribute("type","text/css"),t.innerHTML=e;for(var t,o,c,i=n.head.childNodes,a=null,s=i.length-1;s>-1;s--)o=i[s],c=(o.tagName||"").toUpperCase(),["STYLE","LINK"].indexOf(c)>-1&&(a=o);return n.head.insertBefore(t,a),e}}function g(){for(var t=12,e="";t-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function h(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function Z(e){return e.classList?h(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ft(e,t){var s,o=t.split("-"),i=o[0],n=o.slice(1).join("-");return i!==e||""===n||(s=n,~gt.indexOf(s))?null:n}function be(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function T(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n],";")},"")}function z(e){return e.size!==l.size||e.x!==l.x||e.y!==l.y||e.rotate!==l.rotate||e.flipX||e.flipY}function Xe(e){var t=e.transform,n=e.containerWidth,s=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),r="rotate(".concat(t.rotate," 0 0)");return{outer:o,inner:{transform:"".concat(i," ").concat(a," ").concat(r)},path:{transform:"translate(".concat(s/2*-1," -256)")}}}S={x:0,y:0,width:"100%",height:"100%"};function Oe(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function N(n){var v=n.icons,d=v.main,a=v.mask,c=n.prefix,r=n.iconName,k=n.transform,m=n.symbol,h=n.title,E=n.maskId,x=n.titleId,o=n.extra,p=n.watchable,_=void 0!==p&&p,b=a.found?a:d,l=b.width,u=b.height,y="fak"===c,w=y?"":"fa-w-".concat(Math.ceil(l/u*16)),O=[e.replacementClass,r?"".concat(e.familyPrefix,"-").concat(r):"",w].filter(function(e){return-1===o.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(o.classes).join(" "),i={children:[],attributes:t({},o.attributes,{"data-prefix":c,"data-icon":r,class:O,role:o.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(l," ").concat(u)})},C=y&&!~o.classes.indexOf("fa-fw")?{width:"".concat(l/u*16*.0625,"em")}:{};_&&(i.attributes[f]=""),h&&i.children.push({tag:"title",attributes:{id:i.attributes["aria-labelledby"]||"title-".concat(x||g())},children:[h]});var s=t({},i,{prefix:c,iconName:r,main:d,mask:a,maskId:E,transform:k,symbol:m,styles:t({},C,o.styles)}),j=a.found&&d.found?function(e){var n,l=e.children,y=e.attributes,i=e.main,a=e.mask,r=e.maskId,j=e.transform,m=i.width,s=i.icon,h=a.width,u=a.icon,o=Xe({transform:j,containerWidth:h,iconWidth:m}),f={tag:"rect",attributes:t({},S,{fill:"white"})},p=s.children?{children:s.children.map(Oe)}:{},v={tag:"g",attributes:t({},o.inner),children:[Oe(t({tag:s.tag,attributes:t({},s.attributes,o.path)},p))]},b={tag:"g",attributes:t({},o.outer),children:[v]},c="mask-".concat(r||g()),d="clip-".concat(r||g()),_={tag:"mask",attributes:t({},S,{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,b]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:(n=u,"g"===n.tag?n.children:[n])},_]};return l.push(w,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(c,")")},S)}),{children:l,attributes:y}}(s):function(e){var s,o=e.children,i=e.attributes,n=e.main,a=e.transform,r=T(e.styles);return r.length>0&&(i.style=r),z(a)?(s=Xe({transform:a,containerWidth:n.width,iconWidth:n.width}),o.push({tag:"g",attributes:t({},s.outer),children:[{tag:"g",attributes:t({},s.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:t({},n.icon.attributes,s.path)}]}]})):o.push(n.icon),{children:o,attributes:i}}(s),A=j.children,M=j.attributes;return s.children=A,s.attributes=M,m?function(n){var o=n.prefix,i=n.iconName,a=n.children,r=n.attributes,s=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t({},r,{id:!0===s?"".concat(o,"-").concat(e.familyPrefix,"-").concat(i):s}),children:a}]}]}(s):function(e){var n,c=e.children,s=e.main,a=e.mask,i=e.attributes,r=e.styles,o=e.transform;return z(o)&&s.found&&!a.found&&(n={x:s.width/s.height/2,y:.5},i.style=T(t({},r,{"transform-origin":"".concat(n.x+o.x/16,"em ").concat(n.y+o.y/16,"em")}))),[{tag:"svg",attributes:i,children:c}]}(s)}function rt(e){var n,o,a,h=e.content,u=e.width,p=e.height,d=e.transform,s=e.title,r=e.extra,l=e.watchable,m=void 0!==l&&l,i=t({},r.attributes,s?{title:s}:{},{class:r.classes.join(" ")});return m&&(i[f]=""),n=t({},r.styles),z(d)&&(n.transform=function(e){var t=e.transform,a=e.width,r=void 0===a?16:a,s=e.height,l=void 0===s?16:s,o=e.startCentered,i=void 0!==o&&o,n="";return n+=i&&J?"translate(".concat(t.x/c-r/2,"em, ").concat(t.y/c-l/2,"em) "):i?"translate(calc(-50% + ".concat(t.x/c,"em), calc(-50% + ").concat(t.y/c,"em)) "):"translate(".concat(t.x/c,"em, ").concat(t.y/c,"em) "),n+="scale(".concat(t.size/c*(t.flipX?-1:1),", ").concat(t.size/c*(t.flipY?-1:1),") "),n+"rotate(".concat(t.rotate,"deg) ")}({transform:d,startCentered:!0,width:u,height:p}),n["-webkit-transform"]=n.transform),a=T(n),a.length>0&&(i.style=a),o=[],o.push({tag:"span",attributes:i,children:[h]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var Ee=function(){},L=e.measurePerformance&&A&&A.mark&&A.measure?A:{mark:Ee,measure:Ee},y='FA "5.15.4"',ot=function(e){L.mark("".concat(y," ").concat(e," ends")),L.measure("".concat(y," ").concat(e),"".concat(y," ").concat(e," begins"),"".concat(y," ").concat(e," ends"))},H=function(e){return L.mark("".concat(y," ").concat(e," begins")),function(){return ot(e)}},U=function(e,t,n,s){var o,i,r,a=Object.keys(e),c=a.length,l=void 0!==s?function(e,t){return function(n,s,o,i){return e.call(t,n,s,o,i)}}(t,s):t;for(void 0===n?(o=1,i=e[a[0]]):(o=0,i=n);o<c;o++)i=l(i,e[r=a[o]],r,e);return i};function Te(e){for(var n="",t=0;t<e.length;t++)n+=("000"+e.charCodeAt(t).toString(16)).slice(-4);return n}function ze(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=a.skipHooks,r=void 0!==s&&s,o=Object.keys(n).reduce(function(e,t){var s=n[t];return!!s.icon?e[s.iconName]=s.icon:e[t]=s,e},{});"function"!=typeof i.hooks.addPack||r?i.styles[e]=t({},i.styles[e]||{},o):i.hooks.addPack(e,o),"fas"===e&&ze("fa",n)}var De=i.styles,tt=i.shims,Le={},Re={},Pe={},He=function(){var t,e=function(e){return U(De,function(t,n,s){return t[s]=U(n,e,{}),t},{})};Le=e(function(e,t,n){return t[3]&&(e[t[3]]=n),e}),Re=e(function(e,t,n){var s=t[2];return e[n]=n,s.forEach(function(t){e[t]=n}),e}),t="far"in De,Pe=U(tt,function(e,n){var o=n[0],s=n[1],i=n[2];return"far"!==s||t||(s="fas"),e[o]={prefix:s,iconName:i},e},{})};function Ie(e,t){return(Le[e]||{})[t]}He(),Be=i.styles;function K(t){return t.reduce(function(t,n){var o,s=ft(e.familyPrefix,n);return Be[n]?t.prefix=n:e.autoFetchSvg&&Object.keys(Me).indexOf(n)>-1?t.prefix=n:s?(o="fa"===t.prefix?Pe[s]||{prefix:null,iconName:null}:{},t.iconName=o.iconName||s,t.prefix=o.prefix||t.prefix):n!==e.replacementClass&&0!==n.indexOf("fa-w-")&&t.rest.push(n),t},{prefix:null,iconName:null,rest:[]})}function $e(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function p(e){var t=e.tag,n=e.attributes,o=void 0===n?{}:n,s=e.children,i=void 0===s?[]:s;return"string"==typeof e?be(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(be(e[n]),'" ')},"").trim()}(o),">").concat(i.map(p).join(""),"</").concat(t,">")}Ue=function(){};function Ke(e){return"string"==typeof(e.getAttribute?e.getAttribute(f):null)}j={replace:function(t){var s,n=t[0],o=t[1].map(function(e){return p(e)}).join(`
`);n.parentNode&&n.outerHTML?n.outerHTML=o+(e.keepOriginalSource&&"svg"!==n.tagName.toLowerCase()?"<!-- ".concat(n.outerHTML," Font Awesome fontawesome.com -->"):""):n.parentNode&&(s=document.createElement("span"),n.parentNode.replaceChild(s,n),s.outerHTML=o)},nest:function(t){var o,i,a,s=t[0],n=t[1];if(~Z(s).indexOf(e.replacementClass))return j.replace(t);i=new RegExp("".concat(e.familyPrefix,"-.*")),delete n[0].attributes.style,delete n[0].attributes.id,o=n[0].attributes.class.split(" ").reduce(function(t,n){return n===e.replacementClass||n.match(i)?t.toSvg.push(n):t.toNode.push(n),t},{toNode:[],toSvg:[]}),n[0].attributes.class=o.toSvg.join(" "),a=n.map(function(e){return p(e)}).join(`
`),s.setAttribute("class",o.toNode.join(" ")),s.setAttribute(f,""),s.innerHTML=a}};function Ye(e){e()}function Ge(t,n){var s,o="function"==typeof n?n:Ue;0===t.length?o():(s=Ye,"async"===e.mutateApproach&&(s=m.requestAnimationFrame||Ye),s(function(){var n=!0===e.autoReplaceSvg?j.replace:j[e.autoReplaceSvg]||j.replace,s=H("mutate");t.map(n),s(),o()}))}C=!1;function Ve(){C=!1}G=null;function Je(t){if(Fe&&e.observeMutations){var i=t.treeCallback,a=t.nodeCallback,s=t.pseudoElementsCallback,o=t.observeMutationsRoot,c=void 0===o?n:o;G=new Fe(function(t){C||h(t).forEach(function(t){if("childList"===t.type&&t.addedNodes.length>0&&!Ke(t.addedNodes[0])&&(e.searchPseudoElements&&s(t.target),i(t.target)),"attributes"===t.type&&t.target.parentNode&&e.searchPseudoElements&&s(t.target.parentNode),"attributes"===t.type&&Ke(t.target)&&~Ze.indexOf(t.attributeName))if("class"===t.attributeName){var n=K(Z(t.target)),o=n.prefix,r=n.iconName;o&&t.target.setAttribute("data-prefix",o),r&&t.target.setAttribute("data-icon",r)}else a(t.target)})}),r&&G.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function et(e){var n=e.getAttribute("data-prefix"),s=e.getAttribute("data-icon"),o=void 0!==e.innerText?e.innerText.trim():"",t=K(Z(e));return n&&s&&(t.prefix=n,t.iconName=s),t.prefix&&o.length>1?t.iconName=function(e,t){return(Re[e]||{})[t]}(t.prefix,e.innerText):t.prefix&&1===o.length&&(t.iconName=Ie(t.prefix,Te(e.innerText))),t}Ne=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(e,t){var o=t.toLowerCase().split("-"),s=o[0],n=o.slice(1).join("-");if(s&&"h"===n)return e.flipX=!0,e;if(s&&"v"===n)return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(s){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n}return e},t):t};function nt(t){var n=et(t),s=n.iconName,o=n.prefix,i=n.rest,a=function(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(e,t){var n=t.split(":"),s=n[0],o=n.slice(1);return s&&o.length>0&&(e[s]=o.join(":").trim()),e},{})),n}(t),r=function(e){return Ne(e.getAttribute("data-fa-transform"))}(t),c=function(e){var t=e.getAttribute("data-fa-symbol");return null!==t&&(""===t||t)}(t),l=function(t){var n=h(t.attributes).reduce(function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e},{}),s=t.getAttribute("title"),o=t.getAttribute("data-fa-title-id");return e.autoA11y&&(s?n["aria-labelledby"]="".concat(e.replacementClass,"-title-").concat(o||g()):(n["aria-hidden"]="true",n.focusable="false")),n}(t),d=function(e){var t=e.getAttribute("data-fa-mask");return t?K(t.split(" ").map(function(e){return e.trim()})):{prefix:null,iconName:null,rest:[]}}(t);return{iconName:s,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:o,transform:r,symbol:c,mask:d,maskId:t.getAttribute("data-fa-mask-id"),extra:{classes:i,styles:a,attributes:l}}}function _(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}_.prototype=Object.create(Error.prototype),_.prototype.constructor=_;var F={fill:"currentColor"},Ae={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},at={tag:"path",attributes:t({},F,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},Y=t({},Ae,{attributeName:"opacity"}),ct={tag:"g",children:[at,{tag:"circle",attributes:t({},F,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:t({},Ae,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t({},Y,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:t({},F,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:t({},Y,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:t({},F,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t({},Y,{values:"0;0;1;1;0;0;"})}]}]},P=i.styles;function Q(t){var s=t[0],o=t[1],n=I(t.slice(4),1)[0];return{found:!0,width:s,height:o,icon:Array.isArray(n)?{tag:"g",attributes:{class:"".concat(e.familyPrefix,"-").concat(d.GROUP)},children:[{tag:"path",attributes:{class:"".concat(e.familyPrefix,"-").concat(d.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(e.familyPrefix,"-").concat(d.PRIMARY),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}}}}function D(t,n){return new o(function(s,o){var i={found:!1,width:512,height:512,icon:ct};if(t&&n&&P[n]&&P[n][t])return s(Q(P[n][t]));t&&n&&!e.showMissingIcons?o(new _("Icon is missing for prefix ".concat(n," with icon name ").concat(t))):s(i)})}_e=i.styles;function je(t){var n=nt(t);return~n.extra.classes.indexOf(ke)?function(t,n){var s,i,l=n.title,d=n.transform,a=n.extra,r=null,c=null;return J&&(i=parseInt(getComputedStyle(t).fontSize,10),s=t.getBoundingClientRect(),r=s.width/i,c=s.height/i),e.autoA11y&&!l&&(a.attributes["aria-hidden"]="true"),o.resolve([t,rt({content:t.innerHTML,width:r,height:c,transform:d,title:l,extra:a,watchable:!0})])}(t,n):function(e,t){var n=t.iconName,a=t.title,r=t.titleId,s=t.prefix,c=t.transform,l=t.symbol,i=t.mask,d=t.maskId,u=t.extra;return new o(function(t){o.all([D(n,s),D(i.iconName,i.prefix)]).then(function(o){var i=I(o,2),m=i[0],h=i[1];t([e,N({icons:{main:m,mask:h},prefix:s,iconName:n,transform:c,symbol:l,mask:h,maskId:d,title:a,titleId:r,extra:u,watchable:!0})])})})}(t,n)}function ve(t){if(c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r){var s,i,c,m,u=n.documentElement.classList,a=function(e){return u.add("".concat(We,"-").concat(e))},l=function(e){return u.remove("".concat(We,"-").concat(e))},p=e.autoFetchSvg?Object.keys(Me):Object.keys(_e),d=[".".concat(ke,":not([").concat(f,"])")].concat(p.map(function(e){return".".concat(e,":not([").concat(f,"])")})).join(", ");if(0!==d.length){s=[];try{s=h(t.querySelectorAll(d))}catch{}if(s.length>0)return a("pending"),l("complete"),i=H("onTree"),m=s.reduce(function(e,t){try{var n=je(t);n&&e.push(n)}catch(e){st||e instanceof _&&console.error(e)}return e},[]),new o(function(e,t){o.all(m).then(function(t){Ge(t,function(){a("active"),a("complete"),l("pending"),"function"==typeof c&&c(),i(),e()})}).catch(function(){i(),t()})})}}}function dt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;je(e).then(function(e){e&&Ge([e],t)})}function pe(e,s){var i="".concat("data-fa-pseudo-element-pending").concat(s.replace(":","-"));return new o(function(o,a){if(null!==e.getAttribute(i))return o();var g,j,r=h(e.children).filter(function(e){return e.getAttribute(q)===s})[0],c=m.getComputedStyle(e,s),d=c.getPropertyValue("font-family").match(lt),w=c.getPropertyValue("font-weight"),y=c.getPropertyValue("content");if(r&&!d)return e.removeChild(r),o();if(d&&"none"!==y&&""!==y){var v=c.getPropertyValue("content"),u=~["Solid","Regular","Light","Duotone","Brands","Kit"].indexOf(d[2])?it[d[2].toLowerCase()]:ut[w],_=Te(3===v.length?v.substr(1,1):v),b=Ie(u,_),f=b;!b||r&&r.getAttribute("data-prefix")===u&&r.getAttribute("data-icon")===f?o():(e.setAttribute(i,f),r&&e.removeChild(r),g={iconName:null,title:null,titleId:null,prefix:null,transform:l,symbol:!1,mask:null,maskId:null,extra:{classes:[],styles:{},attributes:{}}},j=g.extra,j.attributes[q]=s,D(b,u).then(function(a){var c=N(t({},g,{icons:{main:a,mask:{prefix:null,iconName:null,rest:[]}},prefix:u,iconName:f,extra:j,watchable:!0})),r=n.createElement("svg");":before"===s?e.insertBefore(r,e.firstChild):e.appendChild(r),r.outerHTML=c.map(function(e){return p(e)}).join(`
`),e.removeAttribute(i),o()}).catch(a))}else o()})}function vt(e){return o.all([pe(e,":before"),pe(e,":after")])}function bt(e){return!(e.parentNode===document.head||~Ft.indexOf(e.tagName.toUpperCase())||e.getAttribute(q)||e.parentNode&&"svg"===e.parentNode.tagName)}function ue(e){if(r)return new o(function(t,n){var i=h(e.querySelectorAll("*")).filter(bt).map(vt),s=H("searchPseudoElements");C=!0,o.all(i).then(function(){s(),Ve(),t()}).catch(function(){s(),Ve(),n()})})}function V(){var t="fa",o=qe,n=e.familyPrefix,i=e.replacementClass,s=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;if(n!==t||i!==o){var a=new RegExp("\\.".concat(t,"\\-"),"g"),r=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(o),"g");s=s.replace(a,".".concat(n,"-")).replace(r,"--".concat(n,"-")).replace(c,".".concat(i))}return s}le=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var n,s,o;return n=e,s=[{key:"add",value:function(){for(var n,s=this,o=arguments.length,i=new Array(o),e=0;e<o;e++)i[e]=arguments[e];n=i.reduce(this._pullDefinitions,{}),Object.keys(n).forEach(function(e){s.definitions[e]=t({},s.definitions[e]||{},n[e]),ze(e,n[e]),He()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var s=n[t],o=s.prefix,i=s.iconName,a=s.icon;e[o]||(e[o]={}),e[o][i]=a}),e}}],s&&ae(n.prototype,s),o&&ae(n,o),e}();function ce(){e.autoAddCss&&!x&&(me(V()),x=!0)}function Ot(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return p(e)})}}),Object.defineProperty(e,"node",{get:function(){if(r){var t=n.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Tt(e){var n=e.prefix,s=void 0===n?"fa":n,t=e.iconName;if(t)return $e(re.definitions,s,t)||$e(i.styles,s,t)}var Ct,re=new le,x=!1,ne={i2svg:function(){if(t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r){ce();var t,s=t.node,i=void 0===s?n:s,a=t.callback,c=void 0===a?function(){}:a;return e.searchPseudoElements&&ue(i),ve(i,c)}return o.reject("Operation requires a DOM of some kind.")},css:V,insertCss:function(){x||(me(V()),x=!0)},watch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.autoReplaceSvgRoot,s=t.observeMutationsRoot;!1===e.autoReplaceSvg&&(e.autoReplaceSvg=!0),e.observeMutations=!0,jt(function(){Mt({autoReplaceSvgRoot:n}),Je({treeCallback:ve,nodeCallback:dt,pseudoElementsCallback:ue,observeMutationsRoot:s})})}},St=(Ct=function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=s.transform,w=void 0===p?l:p,a=s.symbol,_=void 0!==a&&a,c=s.mask,d=void 0===c?null:c,u=s.maskId,y=void 0===u?null:u,m=s.title,f=void 0===m?null:m,b=s.titleId,v=void 0===b?null:b,i=s.classes,j=void 0===i?[]:i,h=s.attributes,o=void 0===h?{}:h,r=s.styles,O=void 0===r?{}:r;if(n){var x=n.prefix,C=n.iconName,E=n.icon;return Ot(t({type:"icon"},n),function(){return ce(),e.autoA11y&&(f?o["aria-labelledby"]="".concat(e.replacementClass,"-title-").concat(v||g()):(o["aria-hidden"]="true",o.focusable="false")),N({icons:{main:Q(E),mask:d?Q(d.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:C,transform:t({},l,w),symbol:_,title:f,maskId:y,titleId:v,extra:{attributes:o,styles:O,classes:j}})})}},ne),Mt=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s.autoReplaceSvgRoot,o=void 0===t?n:t;(Object.keys(i.styles).length>0||e.autoFetchSvg)&&r&&e.autoReplaceSvg&&St.i2svg({node:o})},xt={prefix:"fas",iconName:"clock",icon:[512,512,[],"f017","M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"]},pt={prefix:"fas",iconName:"globe",icon:[496,512,[],"f0ac","M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"]};e.searchPseudoElements=!0,re.add(pt,xt),document.addEventListener("DOMContentLoaded",()=>{ne.watch()})})()