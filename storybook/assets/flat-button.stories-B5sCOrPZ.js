import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,c as n}from"./iframe-C-iYSAmD.js";import{n as r,t as i}from"./icon-DAIleJwC.js";import{n as a,t as o}from"./flat-button-BZfNFv9G.js";var s,c,l;function u(){return(u=e((()=>{r(),t(),a(),s={title:`Design System/Buttons/Flat Button`,component:o,tags:[`autodocs`],decorators:[n({imports:[i]})],argTypes:{disabled:{control:`boolean`,table:{category:`Inputs`}},clicked:{action:`clicked`,table:{category:`Outputs`}},variant:{control:`inline-radio`,options:[`accent`,`neutral`,`danger`],table:{category:`Inputs`}},layout:{control:`inline-radio`,options:[`Icon`,`Text`,`Icon & Text`],table:{category:`Playground`}},iconName:{control:`text`,if:{arg:`layout`,neq:`Text`},table:{category:`Playground`}},text:{control:`text`,if:{arg:`layout`,neq:`Icon`},table:{category:`Playground`}},type:{control:`inline-radio`,options:[`button`,`submit`,`reset`],table:{category:`Inputs`}},className:{control:{type:`select`,labels:{null:`Brak klasy`,"ids-flat-button--size-small":`Mały (32px)`}},options:[null,`ids-flat-button--size-small`],table:{category:`Class`}}}},c={args:{layout:`Icon`,disabled:!1,iconName:`edit`,text:`Edytuj`,variant:`neutral`,type:`button`,className:null},render:e=>({props:e,template:`
            <ids-flat-button
                [class]="className"
                [disabled]="disabled"
                [variant]="variant"
                [type]="type"
                (clicked)="clicked($event)"
            >
                @if (layout !== 'Text') {
                    <mat-icon class="material-symbols-outlined">{{ iconName }}</mat-icon>
                }
                @if (layout !== 'Icon') {
                    {{ text }}
                }
            </ids-flat-button>
        `})},l=[`Default`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'Icon',
    disabled: false,
    iconName: 'edit',
    text: 'Edytuj',
    variant: 'neutral',
    type: 'button',
    className: null
  },
  render: args => ({
    props: args,
    template: \`
            <ids-flat-button
                [class]="className"
                [disabled]="disabled"
                [variant]="variant"
                [type]="type"
                (clicked)="clicked($event)"
            >
                @if (layout !== 'Text') {
                    <mat-icon class="material-symbols-outlined">{{ iconName }}</mat-icon>
                }
                @if (layout !== 'Icon') {
                    {{ text }}
                }
            </ids-flat-button>
        \`
  })
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Default,l as __namedExportsOrder,s as default};