import{a as z}from"/build/_shared/chunk-C3DIUGGU.js";import{L as ce,M as se,N as ie,c as D,f as j,k as Y,m as ee,o as te,q as re,r as ne,v as ae,w as oe}from"/build/_shared/chunk-GX6LHZ7T.js";import{a as Z}from"/build/_shared/chunk-UFO47Q2A.js";import{a as Q}from"/build/_shared/chunk-DCJLI3GM.js";import{f as U,k as H,l as J}from"/build/_shared/chunk-CG2D626R.js";import{a as xe,b as O}from"/build/_shared/chunk-GDLBX7ER.js";import{c as B}from"/build/_shared/chunk-Q3IECNXJ.js";var t=B(xe(),1);var i={carousel:"VMfuy",content:"_3EbHu",imageWrapper:"Ip-dB",canvasWrapper:"_9srfA",canvas:"NZTS0",placeholder:"P-DcB",button:"MBfGb",nav:"_9nvIC",navButton:"_0Q4nb"};var a=B(O(),1),ye=z("./app/components/carousel/carousel-fragment.glsl"),Ie=z("./app/components/carousel/carousel-vertex.glsl");function ue(u,l,m,x){if(l!==null)return l;let y=m.length,I=(u-1+y)%y,L=(u+1)%y;return x>0?L:I}var Se=({width:u,height:l,images:m,placeholder:x,...y})=>{let[I,L]=(0,t.useState)(!1),[o,le]=(0,t.useState)(0),[S,de]=(0,t.useState)(!1),[me,pe]=(0,t.useState)(!0),[s,ve]=(0,t.useState)(),[P,fe]=(0,t.useState)(),M=(0,t.useRef)(),E=(0,t.useRef)(),W=(0,t.useRef)(),f=(0,t.useRef)(),g=(0,t.useRef)(),F=(0,t.useRef)(),c=(0,t.useRef)(),w=(0,t.useRef)(!1),C=(0,t.useRef)(),R=(0,t.useRef)(),$=(0,t.useRef)(),q=H(),G=Q(M,!0),T=(0,t.useRef)(),X=(0,t.useRef)(),ge=`Slide ${o+1} of ${m.length}. ${m[o].alt}`;(0,t.useEffect)(()=>(I&&(document.body.style.cursor="grabbing"),()=>{document.body.style.cursor=""}),[I]),(0,t.useEffect)(()=>{let e=[u/-2,u/2,l/2,l/-2,1,1e3];return c.current=new ae({canvas:M.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),F.current=new ne(...e),g.current=new oe,c.current.setPixelRatio(2),c.current.setClearColor(1118481,1),c.current.setSize(u,l),c.current.domElement.style.width="100%",c.current.domElement.style.height="auto",g.current.background=new Y(1118481),F.current.position.z=1,()=>{w.current=!1,se(g.current),ie(c.current)}},[l,u]),(0,t.useEffect)(()=>{let e=!0;return G&&!S&&(async()=>{let n=c.current.capabilities.getMaxAnisotropy(),p=m.map(async v=>{let k=v.srcSet?await Z(v):v.src,h=await ce.loadAsync(k);return await c.current.initTexture(h),h.colorSpace=j,h.minFilter=D,h.magFilter=D,h.anisotropy=n,h.generateMipmaps=!1,h}),b=await Promise.all(p);e&&(f.current=new te({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:b[0]},nextImage:{type:"t",value:b[1]},reduceMotion:{type:"b",value:q}},vertexShader:Ie,fragmentShader:ye,transparent:!1,opacity:1}),W.current=new re(u,l,1),E.current=new ee(W.current,f.current),E.current.position.set(0,0,0),g.current.add(E.current),de(!0),ve(b),requestAnimationFrame(()=>{c.current.render(g.current,F.current)}))})(),()=>{e=!1}},[l,m,G,S,q,u]);let _=(0,t.useCallback)(({index:e,direction:r=1})=>{if(!s)return;le(e);let{uniforms:n}=f.current;n.nextImage.value=s[e],n.direction.value=r;let p=()=>{n.currentImage.value=s[e],n.dispFactor.value=0,w.current=!1};n.dispFactor.value!==1&&(w.current=!0,J(n.dispFactor.value,1,{type:"spring",stiffness:100,damping:20,restSpeed:.001,restDelta:.001,onUpdate:b=>{n.dispFactor.value=b},onComplete:p}))},[s]),d=(0,t.useCallback)(({direction:e,index:r=null,...n})=>{if(!S)return;if(w.current){cancelAnimationFrame($.current),$.current=requestAnimationFrame(()=>d({direction:e,index:r,...n}));return}let p=ue(o,r,s,e);_({index:p,direction:e,...n})},[_,o,S,s]),we=(0,t.useCallback)(e=>{if(e===o)return;let r=e>o?1:-1;d({direction:r,index:e})},[o,d]);(0,t.useEffect)(()=>{let e=()=>{let r=M.current.getBoundingClientRect();fe(r)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),(0,t.useEffect)(()=>{let e,r=()=>{e=requestAnimationFrame(r),w.current&&c.current.render(g.current,F.current)};return e=requestAnimationFrame(r),()=>{cancelAnimationFrame(e)}},[]),(0,t.useEffect)(()=>{if(x){let e=()=>{pe(!1)},r=T.current;return r.addEventListener("transitionend",e),()=>{r&&r.removeEventListener("transitionend",e)}}},[x]);let V=(0,t.useCallback)(e=>{if(w.current||!f.current||!s)return;R.current=e;let r=Math.abs(e),n=P.width;C.current=e>0?-1:1;let p=1-(r-n)/n*-1,b=ue(o,null,m,C.current),v=f.current.uniforms,k=Math.min(Math.max(p,0),1);v.currentImage.value=s[o],v.nextImage.value=s[b],v.direction.value=C.current,v.dispFactor.value=k,requestAnimationFrame(()=>{c.current.render(g.current,F.current)})},[P,o,m,s]),K=(0,t.useCallback)(()=>{if(!f.current)return;let e=f.current.uniforms,r=(1-e.dispFactor.value)*1e3,n=Math.abs(R.current),p=P.width*.2;R.current=0,!w.current&&(n===0||!n||(n>p?d({duration:r,direction:C.current}):(e.currentImage.value=e.nextImage.value,e.nextImage.value=e.currentImage.value,e.dispFactor.value=1-e.dispFactor.value,d({direction:C.current*-1,index:o}))))},[P,o,d]),A=(0,t.useCallback)(e=>{V(e.clientX-X.current)},[V]),N=(0,t.useCallback)(()=>{L(!1),K(),document.removeEventListener("pointerup",N),document.removeEventListener("pointermove",A)},[A,K]),be=(0,t.useCallback)(e=>{X.current=e.clientX,L(!0),document.addEventListener("pointermove",A),document.addEventListener("pointerup",N)},[A,N]),he=e=>{switch(e.key){case"ArrowRight":d({direction:1});break;case"ArrowLeft":d({direction:-1});break}};return(0,a.jsxs)("div",{className:i.carousel,onKeyDown:he,...y,children:[(0,a.jsxs)("div",{className:i.content,children:[(0,a.jsxs)("div",{className:i.imageWrapper,"data-dragging":I,onPointerDown:be,style:U({aspectRatio:`${u} / ${l}`}),children:[(0,a.jsx)("div",{"aria-atomic":!0,className:i.canvasWrapper,"aria-live":"polite","aria-label":ge,role:"img",children:(0,a.jsx)("canvas",{"aria-hidden":!0,className:i.canvas,ref:M})}),me&&x&&(0,a.jsx)("img",{"aria-hidden":!0,className:i.placeholder,"data-loaded":S&&!!s,src:x,ref:T,alt:"",role:"presentation"})]}),(0,a.jsx)("button",{className:i.button,"data-prev":!0,"aria-label":"Previous slide",onClick:()=>d({direction:-1}),children:(0,a.jsx)(Fe,{})}),(0,a.jsx)("button",{className:i.button,"data-next":!0,"aria-label":"Next slide",onClick:()=>d({direction:1}),children:(0,a.jsx)(Ce,{})})]}),(0,a.jsx)("div",{className:i.nav,children:m.map((e,r)=>(0,a.jsx)("button",{className:i.navButton,onClick:()=>we(r),"aria-label":`Jump to slide ${r+1}`,"aria-pressed":r===o},e.alt))})]})};function Fe(){return(0,a.jsx)("svg",{fill:"currentColor",width:"18",height:"42",viewBox:"0 0 18 42",children:(0,a.jsx)("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"})})}function Ce(){return(0,a.jsx)("svg",{fill:"currentColor",width:"18",height:"42",viewBox:"0 0 18 42",children:(0,a.jsx)("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"})})}export{Se as Carousel};
