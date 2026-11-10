import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Dr as t,E as n,L as r,M as i,h as a,m as o,xr as s,y as c}from"./core-DuXJM8ZX.js";var l;function u(){return(u=e((()=>{l=`@property --ids-button-bg-angle{syntax:"<angle>";inherits:false;initial-value:0deg}:host{--ids-radius:9999px;--ids-glow-color:var(--ids-primary);display:inline-block;position:relative}:host .ids-button{border-radius:var(--ids-radius);border:1px solid var(--ids-border-color);cursor:pointer;isolation:isolate;outline:none;padding:0;transition:transform .1s,border-color .3s;display:block;position:relative}:host .ids-button.ids-button--secondary{--ids-glow-color:var(--ids-secondary)}:host .ids-button.ids-button--danger{--ids-glow-color:var(--ids-danger)}:host .ids-button:before,:host .ids-button:after{content:"";border-radius:inherit;z-index:-1;filter:blur(4px);opacity:0;pointer-events:none;position:absolute;inset:-2px}:host .ids-button:before{background:conic-gradient(from var(--ids-button-bg-angle,0deg), var(--ids-glow-color), color-mix(in srgb, var(--ids-glow-color) 30%, transparent), var(--ids-glow-color), color-mix(in srgb, var(--ids-glow-color) 30%, transparent), var(--ids-glow-color));transition:opacity .3s ease-in-out;animation:3s linear infinite paused AnimateBorder}:host .ids-button:after{background:var(--ids-glow-color);transform-origin:50%;transition:opacity .3s ease-in-out,transform .75s ease-out,background-color .2s ease-in-out;transform:scale(.75)}:host .ids-button:active:not(:disabled):after{opacity:1;transform:scale(1.1)}:host .ids-button:hover:not(:disabled):not(:focus-visible):not(:active):after{opacity:1;transform:scale(1)}:host .ids-button:focus-visible:before{opacity:1;animation-play-state:running}:host .ids-button:disabled{opacity:.5;cursor:unset}:host .ids-button .button-content{z-index:1;background-color:var(--ids-solid-control-color);border-radius:inherit;padding:.5rem 1.5rem;display:block;position:relative}@keyframes AnimateBorder{to{--ids-button-bg-angle:360deg}}`})))()}var d;function f(){return(f=e((()=>{t(),u(),o(),d=class{clicked=c();disabled=a(!1);variant=a(`primary`);type=a(`button`);static propDecorators={clicked:[{type:r,args:[`clicked`]}],disabled:[{type:i,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],variant:[{type:i,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}],type:[{type:i,args:[{isSignal:!0,alias:`type`,required:!1,transform:void 0}]}]}},d=s([n({selector:`ids-button`,template:`
        <button class="ids-button ids-button--{{ variant() }}" [disabled]="disabled()" [type]="type()" (click)="clicked.emit($event)">
            <span class="button-content ids-button-label">
                <ng-content />
            </span>
        </button>
    `,styles:[l]})],d)})))()}var p,m,h;function g(){return(g=e((()=>{f(),p={title:`Design System/Button`,component:d,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},clicked:{action:`clicked`},variant:{control:{type:`select`},options:[`primary`,`secondary`,`danger`]},type:{control:{type:`select`},options:[`button`,`submit`,`reset`]}}},m={args:{disabled:!1,variant:`primary`},render:e=>({props:e,template:`
            <ids-button [disabled]="disabled" [variant]="variant" (clicked)="clicked()">Click me</ids-button>
        `})},h=[`Default`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'primary'
  },
  render: args => ({
    props: args,
    template: \`
            <ids-button [disabled]="disabled" [variant]="variant" (clicked)="clicked()">Click me</ids-button>
        \`
  })
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Default,h as __namedExportsOrder,p as default};