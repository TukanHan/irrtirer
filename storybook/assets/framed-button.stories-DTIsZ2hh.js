import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,l as n}from"./iframe-DnfMsUZM.js";import{a as r,n as i,t as a}from"./public-api-CDAB2B1g.js";import{n as o,t as s}from"./elem-builder-YlncYE0b.js";import{n as c,t as l}from"./framed-button-E2m6OZKJ.js";var u,d,f,p;function m(){return(m=e((()=>{t(),a(),o(),c(),u={title:`Design System/Action/Framed Button`,component:l,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`,table:{category:`Inputs`}},ariaLabel:{control:`text`,table:{category:`Inputs`}},clicked:{action:`clicked`,table:{category:`Outputs`}},variant:{control:`inline-radio`,options:[`accent`,`neutral`,`danger`],table:{category:`Inputs`}},type:{control:`inline-radio`,options:[`button`,`submit`,`reset`],table:{category:`Inputs`}},text:{control:`text`,table:{category:`Playground`}},hostDisplay:{control:`inline-radio`,options:[`block`,`flex`],table:{category:`Playground`}}}},d={args:{text:`Click me`,ariaLabel:``,disabled:!1,variant:`neutral`,type:`button`,hostDisplay:`block`},render:e=>{let t=s(`ids-framed-button`).withInput(`ariaLabel`,e.ariaLabel,``).withInput(`variant`,e.variant,`neutral`).withInput(`type`,e.type,`button`).withInput(`disabled`,e.disabled).withOutput(`clicked`).withContent(e.text);return{props:e,template:(e.hostDisplay===`flex`?s(`div`).withClass(`resizable-container`).withContent(t):t).build(),styles:[`
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
            `]}}},f={decorators:[n({imports:[i]})],parameters:{controls:{disable:!0},pseudo:r(`button`)},render:()=>({props:{sections:[{name:`neutral`},{name:`accent`},{name:`danger`}],states:[`rest`,`hover`,`focus-visible`,`active`,`disabled`]},template:`
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <ids-framed-button [variant]="section.name" [disabled]="state === 'disabled'">{{ state }}</ids-framed-button>
                </ng-template>
            </sb-state-matrix>
        `})},p=[`Default`,`States`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [StateMatrix]
  })],
  parameters: {
    controls: {
      disable: true
    },
    pseudo: pseudoStates('button')
  },
  render: () => ({
    props: {
      sections: [{
        name: 'neutral'
      }, {
        name: 'accent'
      }, {
        name: 'danger'
      }],
      states: ['rest', 'hover', 'focus-visible', 'active', 'disabled']
    },
    template: \`
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <ids-framed-button [variant]="section.name" [disabled]="state === 'disabled'">{{ state }}</ids-framed-button>
                </ng-template>
            </sb-state-matrix>
        \`
  })
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as Default,f as States,p as __namedExportsOrder,u as default};