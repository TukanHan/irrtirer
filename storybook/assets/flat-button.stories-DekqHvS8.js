import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,c as n}from"./iframe-GmV2s1E0.js";import{n as r,t as i}from"./icon-C3i5MkEa.js";import{n as a,t as o}from"./flat-button-DLakzJQO.js";var s,c,l;function u(){return(u=e((()=>{r(),t(),a(),s={title:`Design System/Buttons/Flat Button`,component:o,tags:[`autodocs`],decorators:[n({imports:[i]})],argTypes:{disabled:{control:`boolean`,table:{category:`Inputs`}},clicked:{action:`clicked`,table:{category:`Outputs`}},variant:{control:`inline-radio`,options:[`accent`,`neutral`,`danger`],table:{category:`Inputs`}},layout:{control:`inline-radio`,options:[`Icon`,`Text`,`Icon & Text`],table:{category:`Playground`}},iconName:{control:`text`,if:{arg:`layout`,neq:`Text`},table:{category:`Playground`}},text:{control:`text`,if:{arg:`layout`,neq:`Icon`},table:{category:`Playground`}},type:{control:`inline-radio`,options:[`button`,`submit`,`reset`],table:{category:`Inputs`}}}},c={args:{layout:`Icon`,disabled:!1,iconName:`edit`,text:`Edytuj`,variant:`neutral`,type:`button`},render:e=>({props:e,template:`
            <ids-flat-button [disabled]="disabled" [variant]="variant" [type]="type" (clicked)="clicked($event)">
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
    type: 'button'
  },
  render: args => ({
    props: args,
    template: \`
            <ids-flat-button [disabled]="disabled" [variant]="variant" [type]="type" (clicked)="clicked($event)">
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