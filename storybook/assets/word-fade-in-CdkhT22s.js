var s=Object.defineProperty;var e=(a,o)=>s(a,"name",{value:o,configurable:!0});import{j as n,M as t,C as c,e as m,S as p}from"./blocks-CDSKzspO.js";import{useMDXComponents as d}from"./index-5dlwdcx8.js";import{W as j,E as i}from"./word-fade-in.stories-CnbmWmbT.js";import"./iframe-BJd21GZg.js";import"./preload-helper-Cc2_yIPf.js";const l=`@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@utility word-fade-in {
    animation: fadeIn var(--word-fade-in-duration, 5s) forwards;
    @apply opacity-0;
}
`;function r(a){const o={code:"code",h1:"h1",h2:"h2",p:"p",...d(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:j,title:"Style/Animacje/Word Fade In"}),`
`,n.jsx(o.h1,{id:"animacja-word-fade-in",children:"Animacja: Word Fade In"}),`
`,n.jsxs(o.p,{children:["Klasa ",n.jsx(o.code,{children:"word-fade-in"}),` animuje pojawienie się wyrazu. Wraz z użyciem innych mechanizmów można uzyskać efekt stopniowego pojawiania się kolejnych słów w zdaniu.
Przykładowo, można użyć tej klasy w połączeniu z pipe'm `,n.jsx(o.code,{children:"sentenceToWord"}),", aby rozbić zdanie na słowa i animować każde z nich z różnym opóźnieniem."]}),`
`,n.jsx(o.h2,{id:"podgląd",children:"Podgląd"}),`
`,n.jsx(c,{of:i}),`
`,n.jsx(m,{of:i}),`
`,n.jsx(o.h2,{id:"kod-źródłowy",children:"Kod źródłowy"}),`
`,n.jsx(p,{code:l,language:"css",dark:!0,format:!1})]})}e(r,"_createMdxContent");function z(a={}){const{wrapper:o}={...d(),...a.components};return o?n.jsx(o,{...a,children:n.jsx(r,{...a})}):r(a)}e(z,"MDXContent");export{z as default};
