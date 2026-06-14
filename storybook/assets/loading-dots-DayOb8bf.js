import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,i as n,l as r,n as i,s as a,x as o}from"./blocks-GRxSWnKu.js";import{s}from"./chunk-LITCR56V-4Mb-Ziii.js";import{t as c}from"./mdx-react-shim-D5klMWdu.js";import{Example as l,n as u,t as d}from"./loading-dots.stories-Dj9Ya5E6.js";var f,p=e((()=>{f=`@keyframes dots {
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
}`}));function m(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:u,title:`Style/Animacje/Loading Dots`}),`
`,(0,g.jsx)(r.h1,{id:`animacja-loading-dots`,children:`Animacja: Loading Dots`}),`
`,(0,g.jsxs)(r.p,{children:[`Klasa `,(0,g.jsx)(r.code,{children:`loading-dots`}),` animuje pojawianie się kropek w trakcie ładowania.`]}),`
`,(0,g.jsx)(r.h2,{id:`podgląd`,children:`Podgląd`}),`
`,(0,g.jsxs)(r.p,{children:[`Umożliwia ustawienie czasu trwania animacji za pomocą zmiennej CSS `,(0,g.jsx)(r.code,{children:`--loading-dots-duration`}),`.`]}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(n,{of:l}),`
`,(0,g.jsx)(r.h2,{id:`kod-źródłowy`,children:`Kod źródłowy`}),`
`,(0,g.jsx)(t,{code:f,language:`css`,dark:!0,format:!1})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=s(),c(),r(),d(),p()}))();export{h as default};