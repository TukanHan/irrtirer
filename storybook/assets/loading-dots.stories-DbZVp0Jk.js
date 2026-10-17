import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";var n=t({Example:()=>i,__namedExportsOrder:()=>a,default:()=>r}),r,i,a;function o(){return(o=e((()=>{r={title:`Style/Animacje/Loading Dots`,argTypes:{phrase:{control:`text`,description:`Tekst, po którym będą pojawiać się kropki`,table:{category:`Content`}},loadingDotsDuration:{name:`--loading-dots-duration`,control:`number`,description:`Czas trwania animacji kropek w sekundach`,table:{defaultValue:{summary:`2s`},category:`CSS Variable`}}},parameters:{backgrounds:{disable:!0}},globals:{theme:`light`,locale:`pl`}},i={args:{phrase:`Ładowanie`,loadingDotsDuration:2},render:e=>({props:e,template:`
            <span class="loading-dots" style="--loading-dots-duration: ${e.loadingDotsDuration}s">${e.phrase}</span>
        `})},a=[`Example`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    phrase: 'Ładowanie',
    loadingDotsDuration: 2
  },
  render: args => ({
    props: args,
    template: \`
            <span class="loading-dots" style="--loading-dots-duration: \${args.loadingDotsDuration}s">\${args.phrase}</span>
        \`
  })
}`,...i.parameters?.docs?.source}}}})))()}export{o as n,n as r,i as t};