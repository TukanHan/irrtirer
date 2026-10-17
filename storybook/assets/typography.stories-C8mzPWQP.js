import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";var n=t({BlockLabel:()=>s,BlockLabelSm:()=>c,Example:()=>i,HeadingHero:()=>a,HeadingHeroAccent:()=>o,__namedExportsOrder:()=>l,default:()=>r}),r,i,a,o,s,c,l;function u(){return(u=e((()=>{r={title:`Style/Typografia`,argTypes:{phrase:{control:`text`,description:`Tekst, który będzie wyświetlany jako przykład typografii`,table:{category:`Content`}},typography:{control:`radio`,options:[`heading-hero`,`heading-hero-accent`,`block-label`,`block-label-sm`],description:`Styl typografii do wyświetlenia`,table:{category:`Class`}}},globals:{locale:`pl`}},i={args:{phrase:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,typography:`heading-hero`},render:e=>({props:e,template:`
            <span class="${e.typography}">${e.phrase}</span>
        `})},a={render:()=>({template:`<span class="heading-hero">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>`}),parameters:{controls:{disable:!0}}},o={render:()=>({template:`<span class="heading-hero-accent">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>`}),parameters:{controls:{disable:!0}}},s={render:()=>({template:`<span class="block-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>`}),parameters:{controls:{disable:!0}}},c={render:()=>({template:`<span class="block-label-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>`}),parameters:{controls:{disable:!0}}},l=[`Example`,`HeadingHero`,`HeadingHeroAccent`,`BlockLabel`,`BlockLabelSm`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    phrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    typography: 'heading-hero'
  },
  render: args => ({
    props: args,
    template: \`
            <span class="\${args.typography}">\${args.phrase}</span>
        \`
  })
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<span class="heading-hero">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<span class="heading-hero-accent">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<span class="block-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<span class="block-label-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...c.parameters?.docs?.source}}}})))()}export{o as a,a as i,c as n,u as o,i as r,n as s,s as t};