import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{In as n,m as r}from"./core-DuXJM8ZX.js";import{a as i,s as a}from"./iframe-Dx1QV1uf.js";import{n as o,t as s}from"./icon-BSoIRPYl.js";import{i as c,r as l}from"./button-BtzmBB4W.js";var u=t({Example:()=>f,__namedExportsOrder:()=>p,default:()=>d}),d,f,p;function m(){return(m=e((()=>{i(),r(),o(),l(),d={title:`Style/Animacje/Chevron`,decorators:[a({imports:[s,c]})],parameters:{backgrounds:{disable:!0}},globals:{theme:`light`,locale:`pl`}},f={render:()=>({props:{isOpen:n(!0)},template:`
            <div class="flex flex-row items-center gap-4">
                <button mat-icon-button (click)="isOpen.update(v => !v)">
                    <mat-icon class="chevron" [class.closed]="!isOpen()">
                        keyboard_arrow_up
                    </mat-icon>
                </button>
                {{ isOpen() ? 'Otwarty' : 'Zamknięty' }}
            </div>
        `})},p=[`Example`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    props: {
      isOpen: signal(true)
    },
    template: \`
            <div class="flex flex-row items-center gap-4">
                <button mat-icon-button (click)="isOpen.update(v => !v)">
                    <mat-icon class="chevron" [class.closed]="!isOpen()">
                        keyboard_arrow_up
                    </mat-icon>
                </button>
                {{ isOpen() ? 'Otwarty' : 'Zamknięty' }}
            </div>
        \`
  })
}`,...f.parameters?.docs?.source}}}})))()}export{u as n,m as r,f as t};