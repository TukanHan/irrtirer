var d=Object.defineProperty;var a=(t,o)=>d(t,"name",{value:o,configurable:!0});import{j as n,M as r,C as c,e as l,S as m}from"./blocks-qFJwgttv.js";import{useMDXComponents as s}from"./index--4_C1rTw.js";import{L as j,E as e}from"./loading-dots.stories-B4bH9ns2.js";import"./preload-helper-Cc2_yIPf.js";import"./iframe-BA8P8WBF.js";const x=`@keyframes dots {
    0%, 20% { content: "." }
    40% { content: ".." }
    60% { content: "..." }
    90%, 100% { content: "" }
}

@utility loading-dots {
    &::after {
        content: '';
        animation: dots var(--loading-dots-duration, 2s) linear infinite;
    }
}`;function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:j,title:"Style/Animacje/Loading Dots"}),`
`,n.jsx(o.h1,{id:"animacja-loading-dots",children:"Animacja: Loading Dots"}),`
`,n.jsxs(o.p,{children:["Klasa ",n.jsx(o.code,{children:"loading-dots"})," animuje pojawianie się kropek w trakcie ładowania."]}),`
`,n.jsx(o.h2,{id:"podgląd",children:"Podgląd"}),`
`,n.jsxs(o.p,{children:["Umożliwia ustawienie czasu trwania animacji za pomocą zmiennej CSS ",n.jsx(o.code,{children:"--loading-dots-duration"}),"."]}),`
`,n.jsx(c,{of:e}),`
`,n.jsx(l,{of:e}),`
`,n.jsx(o.h2,{id:"kod-źródłowy",children:"Kod źródłowy"}),`
`,n.jsx(m,{code:x,language:"css",dark:!0,format:!1})]})}a(i,"_createMdxContent");function C(t={}){const{wrapper:o}={...s(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(i,{...t})}):i(t)}a(C,"MDXContent");export{C as default};
