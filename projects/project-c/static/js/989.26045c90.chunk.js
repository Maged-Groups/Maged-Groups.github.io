"use strict";(self.webpackChunkapp_001=self.webpackChunkapp_001||[]).push([[989],{989:(s,t,e)=>{e.a(s,(async(s,l)=>{try{e.r(t),e.d(t,{default:()=>u});var c=e(43),a=e(73),r=e(579);const o="https://dummyjson.com/products?limit=0&skip=0",{products:i,limit:d,skip:p,total:h}=await fetch(o).then((s=>s.json())).then((s=>s));function u(){const[s,t]=(0,c.useState)(i),e=["All"];i.forEach((s=>{const{category:t}=s;e.includes(t)||e.push(t)})),e.sort();return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-3xl font-bold border-l-4 border-sky-600 px-3",children:"Products"}),(0,r.jsxs)("div",{className:"p-4",children:[(0,r.jsx)("h2",{className:"mb-2 text-2xl",children:"Filter by Catergory"}),(0,r.jsx)("select",{onChange:s=>{const e=s.target.value;if("All"===e)return t(i);const l=i.filter((s=>s.category===e));t(l)},className:"w-full text-black",children:e.map(((s,t)=>(0,r.jsx)("option",{value:s,children:s},t)))})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-8",children:s.map(((s,t)=>(0,r.jsx)(a.A,{product:s},t)))})]})}console.log(i),l()}catch(n){l(n)}}),1)}}]);
//# sourceMappingURL=989.26045c90.chunk.js.map