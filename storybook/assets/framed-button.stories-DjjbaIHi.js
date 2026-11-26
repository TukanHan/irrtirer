import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./elem-builder-YlncYE0b.js";import{n as r,t as i}from"./framed-button-E2m6OZKJ.js";var a,o,s;function c(){return(c=e((()=>{t(),r(),a={title:`Design System/Action/Framed Button`,component:i,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`,table:{category:`Inputs`}},ariaLabel:{control:`text`,table:{category:`Inputs`}},clicked:{action:`clicked`,table:{category:`Outputs`}},variant:{control:`inline-radio`,options:[`accent`,`neutral`,`danger`],table:{category:`Inputs`}},type:{control:`inline-radio`,options:[`button`,`submit`,`reset`],table:{category:`Inputs`}},text:{control:`text`,table:{category:`Playground`}},hostDisplay:{control:`inline-radio`,options:[`block`,`flex`],table:{category:`Playground`}}}},o={args:{text:`Click me`,ariaLabel:``,disabled:!1,variant:`neutral`,type:`button`,hostDisplay:`block`},render:e=>{let t=n(`ids-framed-button`).withInput(`ariaLabel`,e.ariaLabel,``).withInput(`variant`,e.variant,`neutral`).withInput(`type`,e.type,`button`).withInput(`disabled`,e.disabled).withOutput(`clicked`).withContent(e.text);return{props:e,template:(e.hostDisplay===`flex`?n(`div`).withClass(`resizable-container`).withContent(t):t).build(),styles:[`
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
            `]}}},s=[`Default`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Click me',
    ariaLabel: '',
    disabled: false,
    variant: 'neutral',
    type: 'button',
    hostDisplay: 'block'
  },
  render: args => {
    const button = elem('ids-framed-button').withInput('ariaLabel', args.ariaLabel, '').withInput('variant', args.variant, 'neutral').withInput('type', args.type, 'button').withInput('disabled', args.disabled).withOutput('clicked').withContent(args.text);
    const root = args.hostDisplay === 'flex' ? elem('div').withClass('resizable-container').withContent(button) : button;
    return {
      props: args,
      template: root.build(),
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
}`,...o.parameters?.docs?.source}}}})))()}c();export{o as Default,s as __namedExportsOrder,a as default};