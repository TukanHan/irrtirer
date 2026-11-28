import{n as e,r as t}from"./rolldown-runtime-vtgMY1y5.js";import{Hn as n,g as r}from"./core-BbWc11SJ.js";import{n as i,o as a}from"./iframe-C94aL8VK.js";import{n as o,t as s}from"./icon-CwEAQQhh.js";import{n as c,t as l}from"./flat-button-CSRarimf.js";var u=t({Example:()=>f,__namedExportsOrder:()=>p,default:()=>d}),d,f,p;function init_chevron_stories(){return(init_chevron_stories=e((()=>{r(),i(),c(),o(),d={title:`Style/Animacje/Chevron`,decorators:[a({imports:[s,l]})],parameters:{backgrounds:{disable:!0}},globals:{theme:`light`,locale:`pl`}},f={render:()=>({props:{isOpen:n(!0)},template:`
            <div class="flex flex-row items-center gap-4">
                <ids-flat-button ariaLabel="Lorem ipsum" (clicked)="isOpen.update(v => !v)">
                    <ids-icon class="chevron" name="keyboard_arrow_up" [class.closed]="!isOpen()" />
                </ids-flat-button>
                {{ isOpen() ? 'Otwarty' : 'Zamknięty' }}
            </div>
        `})},p=[`Example`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    props: {
      isOpen: signal(true)
    },
    template: \`
            <div class="flex flex-row items-center gap-4">
                <ids-flat-button ariaLabel="Lorem ipsum" (clicked)="isOpen.update(v => !v)">
                    <ids-icon class="chevron" name="keyboard_arrow_up" [class.closed]="!isOpen()" />
                </ids-flat-button>
                {{ isOpen() ? 'Otwarty' : 'Zamknięty' }}
            </div>
        \`
  })
}`,...f.parameters?.docs?.source}}}})))()}export{u as n,init_chevron_stories as r,f as t};