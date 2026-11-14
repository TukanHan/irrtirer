import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{F as t,P as n,S as r,c as i,i as a,l as o,n as s,s as c}from"./blocks-D7ZcmVga.js";import{n as l,r as u,t as d}from"./word-fade-in.stories-DthDzLR6.js";var f;function p(){return(p=e((()=>{f=`@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@utility word-fade-in {
    animation: fadeIn var(--word-fade-in-duration, 5s) forwards;
    @apply opacity-0;
}
`})))()}function m(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{of:u,title:`Style/Animacje/Word Fade In`}),`
`,(0,g.jsx)(n.h1,{id:`animacja-word-fade-in`,children:`Animacja: Word Fade In`}),`
`,(0,g.jsxs)(n.p,{children:[`Klasa `,(0,g.jsx)(n.code,{children:`word-fade-in`}),` animuje pojawienie się wyrazu. Wraz z użyciem innych mechanizmów można uzyskać efekt stopniowego pojawiania się kolejnych słów w zdaniu.
Przykładowo, można użyć tej klasy w połączeniu z pipe'm `,(0,g.jsx)(n.code,{children:`sentenceToWord`}),`, aby rozbić zdanie na słowa i animować każde z nich z różnym opóźnieniem.`]}),`
`,(0,g.jsx)(n.h2,{id:`podgląd`,children:`Podgląd`}),`
`,(0,g.jsx)(s,{of:d}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`kod-źródłowy`,children:`Kod źródłowy`}),`
`,(0,g.jsx)(i,{code:f,language:`css`,dark:!0,format:!1})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),o(),l(),p()})))()}_();export{h as default};