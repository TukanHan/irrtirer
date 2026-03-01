var s=Object.defineProperty;var a=(o,e)=>s(o,"name",{value:e,configurable:!0});import{j as n,M as i,C as d,S as c}from"./blocks-BvJfDUeM.js";import{useMDXComponents as r}from"./index-JQ9DS79x.js";import{C as l,E as j}from"./chevron.stories-CO_ZhvWv.js";import"./preload-helper-Cc2_yIPf.js";import"./iframe-DixSXlI8.js";import"./private-npaEERXV.js";import"./_icon-button-chunk-B-NEwwTQ.js";import"./_animation-chunk-BGx_3jlP.js";const m=`@utility chevron {
    @apply transition-all duration-250 ease-in-out;

    &.closed {
        @apply rotate-180;
    }
}`;function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:l,title:"Style/Animacje/Chevron"}),`
`,n.jsx(e.h1,{id:"animacja-chevron",children:"Animacja: Chevron"}),`
`,n.jsx(e.p,{children:"Standardowa animacja obrotu ikony strzałki o 180 stopni, sygnalizująca rozkładanie lub zwijanie elementów interfejsu."}),`
`,n.jsx(e.h2,{id:"podgląd",children:"Podgląd"}),`
`,n.jsxs(e.p,{children:["Klasa ",n.jsx(e.code,{children:"chevron"})," jest nakładana na element ",n.jsx(e.code,{children:"mat-icon"})," i współpracuje z klasą ",n.jsx(e.code,{children:"closed"}),", która jest dodawana, gdy element jest zwinięty."]}),`
`,n.jsx(d,{of:j}),`
`,n.jsx(e.h2,{id:"kod-źródłowy",children:"Kod źródłowy"}),`
`,n.jsx(c,{code:m,language:"css",dark:!0,format:!1})]})}a(t,"_createMdxContent");function g(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}a(g,"MDXContent");export{g as default};
