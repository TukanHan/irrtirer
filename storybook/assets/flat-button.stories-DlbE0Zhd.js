import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,l as n}from"./iframe-PimuhNC_.js";import{n as r,t as i}from"./icon-BT2A8Liy.js";import{n as a,t as o}from"./elem-builder-YlncYE0b.js";import{n as s,t as c}from"./flat-button-B1UCJ9K5.js";var l,u,d;function f(){return(f=e((()=>{r(),t(),a(),s(),l={title:`Design System/Action/Flat Button`,component:c,tags:[`autodocs`],decorators:[n({imports:[i]})],argTypes:{disabled:{control:`boolean`,table:{category:`Inputs`}},ariaLabel:{control:`text`,table:{category:`Inputs`}},clicked:{action:`clicked`,table:{category:`Outputs`}},variant:{control:`inline-radio`,options:[`accent`,`neutral`,`danger`],table:{category:`Inputs`}},layout:{control:`inline-radio`,options:[`Icon`,`Text`,`Icon & Text`],table:{category:`Playground`}},iconName:{control:`text`,if:{arg:`layout`,neq:`Text`},table:{category:`Playground`}},text:{control:`text`,if:{arg:`layout`,neq:`Icon`},table:{category:`Playground`}},type:{control:`inline-radio`,options:[`button`,`submit`,`reset`],table:{category:`Inputs`}},className:{control:{type:`select`,labels:{null:`Brak klasy`,"ids-flat-button--size-small":`Mały (32px)`}},options:[null,`ids-flat-button--size-small`],table:{category:`Class`}}}},u={args:{layout:`Icon`,ariaLabel:`Lorem ipsum`,disabled:!1,iconName:`edit`,text:`Edytuj`,variant:`neutral`,type:`button`,className:null},render:e=>({props:e,template:o(`ids-flat-button`).withClass(e.className).withInput(`ariaLabel`,e.ariaLabel,``).withInput(`variant`,e.variant,`neutral`).withInput(`type`,e.type,`button`).withInput(`disabled`,e.disabled).withOutput(`clicked`).withContent(e.layout!==`Text`&&o(`mat-icon`).withClass(`material-symbols-outlined`).withContent(e.iconName),e.layout!==`Icon`&&e.text).build()})},d=[`Default`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Default,d as __namedExportsOrder,l as default};