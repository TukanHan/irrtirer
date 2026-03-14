var l=Object.defineProperty;var a=(t,e)=>l(t,"name",{value:e,configurable:!0});import{j as n,M as c,C as o,e as d,S as h}from"./blocks-CDSKzspO.js";import{useMDXComponents as r}from"./index-5dlwdcx8.js";import{T as x,E as s,H as p,a as f,B as m,b as j}from"./typography.stories-BwKp5HTZ.js";import"./preload-helper-Cc2_yIPf.js";import"./iframe-BJd21GZg.js";const g=`@utility heading-hero {
    @apply text-2xl font-serif text-contrast-medium tracking-wider;
}

@utility heading-hero-accent {
    @apply text-5xl font-serif text-accent tracking-wider;
}

@utility block-label {
    @apply text-sm font-sans text-contrast-high truncate;
}

@utility block-label-sm {
    @apply text-xs font-sans text-contrast-high truncate;
}
`;function i(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:x,title:"Style/Typografia"}),`
`,n.jsx(e.h1,{id:"typografia",children:"Typografia"}),`
`,n.jsx(e.p,{children:"Zdefiniowane klasy typograficzne umożliwiają spójne formatowanie tekstu w całym projekcie."}),`
`,n.jsx(e.h2,{id:"podgląd",children:"Podgląd"}),`
`,n.jsx(o,{of:s}),`
`,n.jsx(d,{of:s}),`
`,n.jsx(e.h3,{id:"heading-hero",children:"Heading Hero"}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(e.h3,{id:"heading-hero-accent",children:"Heading Hero Accent"}),`
`,n.jsx(o,{of:f}),`
`,n.jsx(e.h3,{id:"block-label",children:"Block Label"}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(e.h3,{id:"block-label-sm",children:"Block Label Sm"}),`
`,n.jsx(o,{of:j}),`
`,n.jsx(e.h2,{id:"kod-źródłowy",children:"Kod źródłowy"}),`
`,n.jsx(h,{code:g,language:"css",dark:!0,format:!1})]})}a(i,"_createMdxContent");function C(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}a(C,"MDXContent");export{C as default};
