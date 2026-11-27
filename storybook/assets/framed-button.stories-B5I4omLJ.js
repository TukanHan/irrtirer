import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,o as n}from"./iframe-BWokwxzY.js";import{a as r,n as i,t as a}from"./public-api-BiLccHIJ.js";import{n as o,t as s}from"./elem-builder-B342_OgR.js";import{n as c,t as l}from"./framed-button-D1SEqC-v.js";var u,d,f,p;function init_framed_button_stories(){return(init_framed_button_stories=e((()=>{t(),a(),o(),c(),u={title:`Design System/Action/Framed Button`,component:l,tags:[`autodocs`],argTypes:{text:{description:`Projected text.`,control:`text`,table:{category:`playground`}},hostDisplay:{description:"`flex` places the button in a horizontally resizable flex container to show how it stretches.",control:`inline-radio`,options:[`block`,`flex`],table:{category:`playground`}},clicked:{control:!1}}},d={args:{text:`Lorem ipsum`,ariaLabel:``,disabled:!1,variant:`neutral`,type:`button`,hostDisplay:`block`},render:e=>{let t=s(`ids-framed-button`).withInput(`ariaLabel`,e.ariaLabel,``).withInput(`variant`,e.variant,`neutral`).withInput(`type`,e.type,`button`).withInput(`disabled`,e.disabled).withOutput(`clicked`).withContent(e.text);return{props:e,template:(e.hostDisplay===`flex`?s(`div`).withClass(`resizable-container`).withContent(t):t).build(),styles:[`
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
    text: 'Lorem ipsum',
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
}`,...f.parameters?.docs?.source}}}})))()}init_framed_button_stories();export{d as Default,f as States,p as __namedExportsOrder,u as default};