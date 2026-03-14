var a=Object.defineProperty;var o=(n,e)=>a(n,"name",{value:e,configurable:!0});import{j as t,M as l,C as d,e as x,S as c}from"./blocks-CDSKzspO.js";import{useMDXComponents as r}from"./index-5dlwdcx8.js";import{L as m,E as s}from"./list-item-box.stories-DAyAww4m.js";import"./preload-helper-Cc2_yIPf.js";import"./iframe-BJd21GZg.js";const p=`@utility list-item-box {
    @apply flex flex-row items-center justify-between rounded-sm bg-contrast-lightest px-4 py-2.5;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

    &.selected {
        @apply bg-contrast-light;
    }
}`;function i(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:m,title:"Style/Atomy/List Item Box"}),`
`,t.jsx(e.h1,{id:"list-item-box",children:"List Item Box"}),`
`,t.jsxs(e.p,{children:["Klasa ",t.jsx(e.code,{children:"list-item-box"})," definiuje stylizację dla elementów listy."]}),`
`,t.jsx(e.h2,{id:"podgląd",children:"Podgląd"}),`
`,t.jsx(d,{of:s}),`
`,t.jsx(x,{of:s}),`
`,t.jsx(e.h2,{id:"kod-źródłowy",children:"Kod źródłowy"}),`
`,t.jsx(c,{code:p,language:"css",dark:!0,format:!1})]})}o(i,"_createMdxContent");function b(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}o(b,"MDXContent");export{b as default};
