import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./framed-button-DiZYHD3K.js";var r,i,a;function o(){return(o=e((()=>{t(),r={title:`Design System/Buttons/Framed Button`,component:n,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`,table:{category:`Inputs`}},clicked:{action:`clicked`,table:{category:`Outputs`}},variant:{control:`inline-radio`,options:[`accent`,`neutral`,`danger`],table:{category:`Inputs`}},type:{control:`inline-radio`,options:[`button`,`submit`,`reset`],table:{category:`Inputs`}},text:{control:`text`,table:{category:`Playground`}},hostDisplay:{control:`inline-radio`,options:[`block`,`flex`],table:{category:`Playground`}}}},i={args:{text:`Click me`,disabled:!1,variant:`neutral`,type:`button`,hostDisplay:`block`},render:e=>{let t=`<ids-framed-button [disabled]="disabled" [variant]="variant" (clicked)="clicked($event)">{{ text }}</ids-framed-button>`;return{props:e,template:e.hostDisplay===`flex`?`<div class="resizable-container" style="display: flex;">${t}</div>`:t,styles:[`
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
            `]}}},a=[`Default`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}}})))()}o();export{i as Default,a as __namedExportsOrder,r as default};