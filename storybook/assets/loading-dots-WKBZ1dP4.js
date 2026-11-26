import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{F as t,P as n,S as r,c as i,i as a,l as o,n as s,s as c}from"./blocks-CwCvGuaV.js";import{n as l,r as u,t as d}from"./loading-dots.stories-UpXmjFFc.js";var f;function init_loading_dots(){return(init_loading_dots=e((()=>{f=`@keyframes dots {
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
`})))()}function _createMdxContent(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{of:u,title:`Style/Animacje/Loading Dots`}),`
`,(0,p.jsx)(n.h1,{id:`animacja-loading-dots`,children:`Animacja: Loading Dots`}),`
`,(0,p.jsxs)(n.p,{children:[`Klasa `,(0,p.jsx)(n.code,{children:`loading-dots`}),` animuje pojawianie się kropek w trakcie ładowania.`]}),`
`,(0,p.jsx)(n.h2,{id:`podgląd`,children:`Podgląd`}),`
`,(0,p.jsxs)(n.p,{children:[`Umożliwia ustawienie czasu trwania animacji za pomocą zmiennej CSS `,(0,p.jsx)(n.code,{children:`--loading-dots-duration`}),`.`]}),`
`,(0,p.jsx)(s,{of:d}),`
`,(0,p.jsx)(a,{of:d}),`
`,(0,p.jsx)(n.h2,{id:`kod-źródłowy`,children:`Kod źródłowy`}),`
`,(0,p.jsx)(i,{code:f,language:`css`,dark:!0,format:!1})]})}function MDXContent(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)}var p;function init_loading_dots$1(){return(init_loading_dots$1=e((()=>{p=r(),n(),o(),l(),init_loading_dots()})))()}init_loading_dots$1();export{MDXContent as default};