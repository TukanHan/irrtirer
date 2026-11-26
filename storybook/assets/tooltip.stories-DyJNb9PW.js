import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,l as n,s as r}from"./iframe-DnfMsUZM.js";import{n as i,t as a}from"./elem-builder-YlncYE0b.js";import{n as o,t as s}from"./flat-button-B1UCJ9K5.js";import{n as c,t as l}from"./tooltip-5zPpHMCP.js";var u,d,f;function p(){return(p=e((()=>{t(),o(),i(),c(),u={title:`Design System/Tooltip`,component:l,tags:[`autodocs`],decorators:[n({imports:[s,l]}),r(e=>`
                <div
                    class="tooltip-playground"
                    [class.tooltip-playground--left]="buttonPosition === 'left'"
                    [class.tooltip-playground--right]="buttonPosition === 'right'"
                >
                    ${e}
                </div>
            `)],parameters:{docs:{source:{excludeDecorators:!0}}},argTypes:{idsTooltip:{control:`text`,description:`Treść wyświetlana w panelu tooltipa.`,table:{category:`Inputs`}},idsTooltipPosition:{control:`inline-radio`,options:[`auto`,`top`,`right`,`bottom`,`left`],description:`Preferowana pozycja tooltipa. W trybie auto pozycja jest dobrana względem krawędzi viewportu.`,table:{category:`Inputs`}},buttonPosition:{control:`inline-radio`,options:[`left`,`center`,`right`],description:`Położenie przycisku, które pozwala przetestować zachowanie trybu auto.`,table:{category:`Playground`}}}},d={args:{buttonPosition:`center`,idsTooltip:`Przykładowy tooltip`,idsTooltipPosition:`auto`},render:e=>({props:e,template:a(`ids-flat-button`).withInput(`idsTooltip`,e.idsTooltip).withInput(`idsTooltipPosition`,e.idsTooltipPosition,`auto`).withContent(`Lorem Ipsum`).build(),styles:[`
                .tooltip-playground {
                    display: flex;
                    min-height: 240px;
                    align-items: center;
                    justify-content: center;
                }

                .tooltip-playground--left {
                    justify-content: flex-start;
                }

                .tooltip-playground--right {
                    justify-content: flex-end;
                }
            `]})},f=[`Default`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    buttonPosition: 'center',
    idsTooltip: 'Przykładowy tooltip',
    idsTooltipPosition: 'auto'
  },
  render: args => ({
    props: args,
    template: elem('ids-flat-button').withInput('idsTooltip', args.idsTooltip).withInput('idsTooltipPosition', args.idsTooltipPosition, 'auto').withContent('Lorem Ipsum').build(),
    styles: [\`
                .tooltip-playground {
                    display: flex;
                    min-height: 240px;
                    align-items: center;
                    justify-content: center;
                }

                .tooltip-playground--left {
                    justify-content: flex-start;
                }

                .tooltip-playground--right {
                    justify-content: flex-end;
                }
            \`]
  })
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Default,f as __namedExportsOrder,u as default};