import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,i as n,l as r,n as i,s as a,x as o}from"./blocks-GRxSWnKu.js";import{s}from"./chunk-LITCR56V-4Mb-Ziii.js";import{t as c}from"./mdx-react-shim-D5klMWdu.js";import{Example as l,n as u,t as d}from"./word-fade-in.stories-PPZZ4QTg.js";var f,p=e((()=>{f=`@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@utility word-fade-in {
    animation: fadeIn var(--word-fade-in-duration, 5s) forwards;
    @apply opacity-0;
}
`}));function m(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:u,title:`Style/Animacje/Word Fade In`}),`
`,(0,g.jsx)(r.h1,{id:`animacja-word-fade-in`,children:`Animacja: Word Fade In`}),`
`,(0,g.jsxs)(r.p,{children:[`Klasa `,(0,g.jsx)(r.code,{children:`word-fade-in`}),` animuje pojawienie się wyrazu. Wraz z użyciem innych mechanizmów można uzyskać efekt stopniowego pojawiania się kolejnych słów w zdaniu.
Przykładowo, można użyć tej klasy w połączeniu z pipe'm `,(0,g.jsx)(r.code,{children:`sentenceToWord`}),`, aby rozbić zdanie na słowa i animować każde z nich z różnym opóźnieniem.`]}),`
`,(0,g.jsx)(r.h2,{id:`podgląd`,children:`Podgląd`}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(n,{of:l}),`
`,(0,g.jsx)(r.h2,{id:`kod-źródłowy`,children:`Kod źródłowy`}),`
`,(0,g.jsx)(t,{code:f,language:`css`,dark:!0,format:!1})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=s(),c(),r(),d(),p()}))();export{h as default};