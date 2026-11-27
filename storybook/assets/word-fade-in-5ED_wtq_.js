import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{F as t,P as n,S as r,c as i,i as a,l as o,n as s,s as c}from"./blocks-CwCvGuaV.js";import{n as l,r as u,t as d}from"./word-fade-in.stories-BDK-fZya.js";var f;function init_word_fade_in(){return(init_word_fade_in=e((()=>{f=`@keyframes fadeIn {
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
`})))()}function _createMdxContent(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{of:u,title:`Style/Animacje/Word Fade In`}),`
`,(0,p.jsx)(n.h1,{id:`animacja-word-fade-in`,children:`Animacja: Word Fade In`}),`
`,(0,p.jsxs)(n.p,{children:[`Klasa `,(0,p.jsx)(n.code,{children:`word-fade-in`}),` animuje pojawienie się wyrazu. Wraz z użyciem innych mechanizmów można uzyskać efekt stopniowego pojawiania się kolejnych słów w zdaniu.
Przykładowo, można użyć tej klasy w połączeniu z pipe'm `,(0,p.jsx)(n.code,{children:`sentenceToWord`}),`, aby rozbić zdanie na słowa i animować każde z nich z różnym opóźnieniem.`]}),`
`,(0,p.jsx)(n.h2,{id:`podgląd`,children:`Podgląd`}),`
`,(0,p.jsx)(s,{of:d}),`
`,(0,p.jsx)(a,{of:d}),`
`,(0,p.jsx)(n.h2,{id:`kod-źródłowy`,children:`Kod źródłowy`}),`
`,(0,p.jsx)(i,{code:f,language:`css`,dark:!0,format:!1})]})}function MDXContent(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)}var p;function init_word_fade_in$1(){return(init_word_fade_in$1=e((()=>{p=r(),n(),o(),l(),init_word_fade_in()})))()}init_word_fade_in$1();export{MDXContent as default};