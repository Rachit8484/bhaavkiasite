import{a as S}from"/build/_shared/chunk-G6GZU55D.js";import{g as M,j as N,k as V}from"/build/_shared/chunk-CG2D626R.js";import{a as w,b as v}from"/build/_shared/chunk-GDLBX7ER.js";import{c as d}from"/build/_shared/chunk-Q3IECNXJ.js";var t=d(w(),1);async function T(e){return new Promise(n=>setTimeout(n,e))}var o={text:"BHlln",glyph:"atVYn",value:"NNNE7"};var u=d(v(),1),x=["\u0905","\u0906","\u0907","\u0908","\u0909","\u090A","\u090F","\u0910","\u0913","\u0914","\u0915","\u0916","\u0917","\u0918","\u0919","\u091A","\u091B","\u091C","\u091D","\u091E","\u091F","\u0920","\u0921","\u0922","\u0923","\u0924","\u0925","\u0926","\u0927","\u0928","\u092A","\u092B","\u092C","\u092D","\u092E","\u092F","\u0930","\u0932","\u0935","\u0936","\u0937","\u0938","\u0939","\u0915\u094D\u0937","\u0924\u094D\u0930","\u091C\u094D\u091E","\u0936\u094D\u0930","\u0950","\u0902","\u0903","\u0901","\u0970","\u0965","\u0966","\u0967","\u0968","\u0969","\u096A","\u096B","\u096C","\u096D","\u096E","\u096F","\u0970","\u0964","\u0965","\u0970","\u0970","\u0970","\u0970","\u0970","\u0970","\u0970","\u0970"],s={Glyph:"glyph",Value:"value"};function E(e,n,a){return e.map((m,c)=>{if(c<a)return{type:s.Value,value:m};if(a%1<.5){let r=Math.floor(Math.random()*x.length);return{type:s.Glyph,value:x[r]}}return{type:s.Glyph,value:n[c].value}})}var R=(0,t.memo)(({text:e,start:n=!0,delay:a=0,className:m,...c})=>{let r=(0,t.useRef)([{type:s.Glyph,value:""}]),h=(0,t.useRef)(),f=V(),y=N(0,{stiffness:8,damping:5});return(0,t.useEffect)(()=>{let G=h.current,l=e.split(""),H,g=()=>{let p=r.current.map(i=>`<span class="${o[i.type]}">${i.value}</span>`);G.innerHTML=p.join("")},b=y.on("change",p=>{r.current=E(l,r.current,p),g()});return n&&!H&&!f&&(async()=>{await T(a),y.set(l.length)})(),f&&(r.current=l.map((p,i)=>({type:s.Value,value:l[i]})),g()),()=>{b?.()}},[y,f,n,a,e]),(0,u.jsxs)("span",{className:M(o.text,m),...c,children:[(0,u.jsx)(S,{className:o.label,children:e}),(0,u.jsx)("span",{"aria-hidden":!0,className:o.content,ref:h})]})});export{R as a};
