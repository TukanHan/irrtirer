import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{F as t,P as n,S as r,c as i,i as a,l as o,n as s,s as c}from"./blocks-D7ZcmVga.js";import{n as l,r as u,t as d}from"./loading-dots.stories-DbZVp0Jk.js";var f;function p(){return(p=e((()=>{f=`@keyframes dots {
    0%,
    20% {
        content: '.';
    }
    40% {
        content: '..';
    }
    60% {
        content: '...';
    }
    90%,
    100% {
        content: '';
    }
}

@utility loading-dots {
    &::after {
        content: '';
        animation: dots var(--loading-dots-duration, 2s) linear infinite;
    }
}
`})))()}function m(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{of:u,title:`Style/Animacje/Loading Dots`}),`
`,(0,g.jsx)(n.h1,{id:`animacja-loading-dots`,children:`Animacja: Loading Dots`}),`
`,(0,g.jsxs)(n.p,{children:[`Klasa `,(0,g.jsx)(n.code,{children:`loading-dots`}),` animuje pojawianie się kropek w trakcie ładowania.`]}),`
`,(0,g.jsx)(n.h2,{id:`podgląd`,children:`Podgląd`}),`
`,(0,g.jsxs)(n.p,{children:[`Umożliwia ustawienie czasu trwania animacji za pomocą zmiennej CSS `,(0,g.jsx)(n.code,{children:`--loading-dots-duration`}),`.`]}),`
`,(0,g.jsx)(s,{of:d}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`kod-źródłowy`,children:`Kod źródłowy`}),`
`,(0,g.jsx)(i,{code:f,language:`css`,dark:!0,format:!1})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),o(),l(),p()})))()}_();export{h as default};