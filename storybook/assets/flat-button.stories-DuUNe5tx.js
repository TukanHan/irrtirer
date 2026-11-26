import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{a as t,l as n}from"./iframe-DXJSi4si.js";import{n as r,t as i}from"./icon-D_Yr7r7z.js";import{a,n as o,t as s}from"./public-api-kSsOUlhl.js";import{n as c,t as l}from"./elem-builder-B342_OgR.js";import{n as u,t as d}from"./flat-button-CYZCOWOu.js";var f,p,m,h;function init_flat_button_stories(){return(init_flat_button_stories=e((()=>{r(),t(),s(),c(),u(),f={title:`Design System/Action/Flat Button`,component:d,tags:[`autodocs`],decorators:[n({imports:[i]})],argTypes:{disabled:{control:`boolean`,table:{category:`Inputs`}},ariaLabel:{control:`text`,table:{category:`Inputs`}},clicked:{action:`clicked`,table:{category:`Outputs`}},variant:{control:`inline-radio`,options:[`accent`,`neutral`,`danger`],table:{category:`Inputs`}},layout:{control:`inline-radio`,options:[`Icon`,`Text`,`Icon & Text`],table:{category:`Playground`}},iconName:{control:`text`,if:{arg:`layout`,neq:`Text`},table:{category:`Playground`}},text:{control:`text`,if:{arg:`layout`,neq:`Icon`},table:{category:`Playground`}},type:{control:`inline-radio`,options:[`button`,`submit`,`reset`],table:{category:`Inputs`}},className:{control:{type:`select`,labels:{null:`Brak klasy`,"ids-flat-button--size-small":`Mały (32px)`}},options:[null,`ids-flat-button--size-small`],table:{category:`Class`}}}},p={args:{layout:`Icon`,ariaLabel:`Lorem ipsum`,disabled:!1,iconName:`edit`,text:`Edytuj`,variant:`neutral`,type:`button`,className:null},render:e=>({props:e,template:l(`ids-flat-button`).withClass(e.className).withInput(`ariaLabel`,e.ariaLabel,``).withInput(`variant`,e.variant,`neutral`).withInput(`type`,e.type,`button`).withInput(`disabled`,e.disabled).withOutput(`clicked`).withContent(e.layout!==`Text`&&l(`mat-icon`).withClass(`material-symbols-outlined`).withContent(e.iconName),e.layout!==`Icon`&&e.text).build()})},m={decorators:[n({imports:[o]})],parameters:{controls:{disable:!0},pseudo:a(`button`)},render:()=>({props:{sections:[{name:`neutral`},{name:`accent`},{name:`danger`}],states:[`rest`,`hover`,`focus-visible`,`active`,`disabled`]},template:`
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <ids-flat-button [variant]="section.name" [disabled]="state === 'disabled'">
                        <mat-icon class="material-symbols-outlined">edit</mat-icon>
                        {{ state }}
                    </ids-flat-button>
                </ng-template>
            </sb-state-matrix>
        `})},h=[`Default`,`States`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'Icon',
    ariaLabel: 'Lorem ipsum',
    disabled: false,
    iconName: 'edit',
    text: 'Edytuj',
    variant: 'neutral',
    type: 'button',
    className: null
  },
  render: args => ({
    props: args,
    template: elem('ids-flat-button').withClass(args.className).withInput('ariaLabel', args.ariaLabel, '').withInput('variant', args.variant, 'neutral').withInput('type', args.type, 'button').withInput('disabled', args.disabled).withOutput('clicked').withContent(args.layout !== 'Text' && elem('mat-icon').withClass('material-symbols-outlined').withContent(args.iconName), args.layout !== 'Icon' && args.text).build()
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
                    <ids-flat-button [variant]="section.name" [disabled]="state === 'disabled'">
                        <mat-icon class="material-symbols-outlined">edit</mat-icon>
                        {{ state }}
                    </ids-flat-button>
                </ng-template>
            </sb-state-matrix>
        \`
  })
}`,...m.parameters?.docs?.source}}}})))()}init_flat_button_stories();export{p as Default,m as States,h as __namedExportsOrder,f as default};