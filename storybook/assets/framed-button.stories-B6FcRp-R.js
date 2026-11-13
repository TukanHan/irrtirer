import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Dr as t,E as n,L as r,M as i,h as a,l as o,m as s,xr as c,y as l}from"./core-DuXJM8ZX.js";var u;function d(){return(d=e((()=>{u=`@property --ids-button-bg-angle{syntax:"<angle>";inherits:false;initial-value:0deg}:host{--ids-radius:9999px;--ids-glow-color:var(--ids-neutral);--ids-button-content-color:var(--ids-text-color);display:inline-block;position:relative}:host .ids-framed-button{border-radius:var(--ids-radius);border:1px solid var(--ids-button-border-color);cursor:pointer;isolation:isolate;--ids-button-text-shadow-layer-1:0 0 4px color-mix(in srgb, var(--ids-button-content-color) var(--ids-button-content-shadow-mix), transparent);--ids-button-text-shadow-layer-2:0 0 8px color-mix(in srgb, var(--ids-glow-color) var(--ids-button-glow-shadow-mix), transparent);--ids-button-text-shadow:var(--ids-button-text-shadow-layer-1);outline:none;width:100%;padding:0;transition:transform .1s;display:block;position:relative}:host .ids-framed-button.ids-framed-button--neutral{--ids-glow-color:var(--ids-neutral);--ids-button-border-color:var(--ids-border-color)}:host .ids-framed-button.ids-framed-button--accent{--ids-glow-color:var(--ids-accent);--ids-button-border-color:color-mix(in srgb, var(--ids-border-color) 30%, var(--ids-glow-color))}:host .ids-framed-button.ids-framed-button--danger{--ids-glow-color:var(--ids-danger);--ids-button-border-color:color-mix(in srgb, var(--ids-border-color) 30%, var(--ids-glow-color));--ids-button-content-color:var(--ids-text-danger-color)}:host .ids-framed-button:before,:host .ids-framed-button:after{content:"";border-radius:inherit;z-index:-1;filter:blur(4px);opacity:0;pointer-events:none;position:absolute;inset:-2px}:host .ids-framed-button:before{background:conic-gradient(from var(--ids-button-bg-angle,0deg), var(--ids-glow-color), color-mix(in srgb, var(--ids-glow-color) 30%, transparent), var(--ids-glow-color), color-mix(in srgb, var(--ids-glow-color) 30%, transparent), var(--ids-glow-color));transition:opacity .3s ease-in-out;animation:3s linear infinite paused AnimateBorder}:host .ids-framed-button:after{background:var(--ids-glow-color);transform-origin:50%;transition:opacity .3s ease-in-out,transform .75s ease-out,background-color .2s ease-in-out;transform:scale(.75)}:host .ids-framed-button:active:not(:disabled) .ids-framed-button-content{background-color:color-mix(in srgb, var(--ids-solid-control-color) 95%, var(--ids-glow-color))}:host .ids-framed-button:hover:not(:disabled),:host .ids-framed-button:focus-visible:not(:disabled){--ids-button-text-shadow:var(--ids-button-text-shadow-layer-1), var(--ids-button-text-shadow-layer-2)}:host .ids-framed-button:hover:not(:disabled):not(:focus-visible):after{opacity:1;transform:scale(1)}:host .ids-framed-button:focus-visible:before{opacity:1;animation-play-state:running}:host .ids-framed-button:disabled{opacity:.5;cursor:unset;--ids-button-text-shadow:none}:host .ids-framed-button .ids-framed-button-content{z-index:1;background-color:var(--ids-solid-control-color);border-radius:inherit;color:var(--ids-button-content-color);text-shadow:var(--ids-button-text-shadow);padding:.5rem 1rem;transition:background-color .2s ease-out,text-shadow .2s ease-out;display:block;position:relative}@keyframes AnimateBorder{to{--ids-button-bg-angle:360deg}}`})))()}var f;function p(){return(p=e((()=>{t(),d(),s(),f=class{clicked=l();disabled=a(!1,{transform:o});variant=a(`neutral`);type=a(`button`);static propDecorators={clicked:[{type:r,args:[`clicked`]}],disabled:[{type:i,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],variant:[{type:i,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}],type:[{type:i,args:[{isSignal:!0,alias:`type`,required:!1,transform:void 0}]}]}},f=c([n({selector:`ids-framed-button`,template:`
        <button class="ids-framed-button ids-framed-button--{{ variant() }}" [disabled]="disabled()" [type]="type()" (click)="clicked.emit($event)">
            <span class="ids-framed-button-content ids-button-label">
                <ng-content />
            </span>
        </button>
    `,styles:[u]})],f)})))()}var m,h,g;function _(){return(_=e((()=>{p(),m={title:`Design System/Buttons/Framed Button`,component:f,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`,table:{category:`Inputs`}},clicked:{action:`clicked`,table:{category:`Outputs`}},variant:{control:`inline-radio`,options:[`accent`,`neutral`,`danger`],table:{category:`Inputs`}},type:{control:`inline-radio`,options:[`button`,`submit`,`reset`],table:{category:`Inputs`}},text:{control:`text`,table:{category:`Playground`}},hostDisplay:{control:`inline-radio`,options:[`block`,`flex`],table:{category:`Playground`}}}},h={args:{text:`Click me`,disabled:!1,variant:`neutral`,type:`button`,hostDisplay:`block`},render:e=>{let t=`<ids-framed-button [disabled]="disabled" [variant]="variant" (clicked)="clicked($event)">{{ text }}</ids-framed-button>`;return{props:e,template:e.hostDisplay===`flex`?`<div class="resizable-container" style="display: flex;">${t}</div>`:t,styles:[`
                .resizable-container {
                    display: flex;
                    box-sizing: border-box;
                    padding: 12px;
                    overflow: auto;
                    resize: horizontal;
                    align-items: flex-start;
                    border: 2px dashed #7777;

                    > * {
                        flex: 1 1 auto;
                    }
                }
            `]}}},g=[`Default`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Click me',
    disabled: false,
    variant: 'neutral',
    type: 'button',
    hostDisplay: 'block'
  },
  render: args => {
    const button = \`<ids-framed-button [disabled]="disabled" [variant]="variant" (clicked)="clicked($event)">{{ text }}</ids-framed-button>\`;
    const template = args.hostDisplay === 'flex' ? \`<div class="resizable-container" style="display: flex;">\${button}</div>\` : button;
    return {
      props: args,
      template,
      styles: [\`
                .resizable-container {
                    display: flex;
                    box-sizing: border-box;
                    padding: 12px;
                    overflow: auto;
                    resize: horizontal;
                    align-items: flex-start;
                    border: 2px dashed #7777;

                    > * {
                        flex: 1 1 auto;
                    }
                }
            \`]
    };
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Default,g as __namedExportsOrder,m as default};