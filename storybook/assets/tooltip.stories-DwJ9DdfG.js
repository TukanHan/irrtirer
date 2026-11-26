import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,c as n}from"./iframe-kWnt1dXg.js";import{n as r,t as i}from"./flat-button-B1UCJ9K5.js";import{n as a,t as o}from"./tooltip-5zPpHMCP.js";var s,c,l;function u(){return(u=e((()=>{t(),r(),a(),s={title:`Design System/Tooltip`,component:o,tags:[`autodocs`],decorators:[n({imports:[i,o]})],argTypes:{idsTooltip:{control:`text`,description:`Treść wyświetlana w panelu tooltipa.`,table:{category:`Inputs`}},idsTooltipPosition:{control:`inline-radio`,options:[`auto`,`top`,`right`,`bottom`,`left`],description:`Preferowana pozycja tooltipa. W trybie auto pozycja jest dobrana względem krawędzi viewportu.`,table:{category:`Inputs`}},buttonPosition:{control:`inline-radio`,options:[`left`,`center`,`right`],description:`Położenie przycisku, które pozwala przetestować zachowanie trybu auto.`,table:{category:`Playground`}}}},c={args:{buttonPosition:`center`,idsTooltip:`Przykładowy tooltip`,idsTooltipPosition:`auto`},render:e=>({props:e,template:`
            <div
                class="tooltip-playground"
                [class.tooltip-playground--left]="buttonPosition === 'left'"
                [class.tooltip-playground--right]="buttonPosition === 'right'"
            >
                <ids-flat-button
                    [idsTooltip]="idsTooltip"
                    [idsTooltipPosition]="idsTooltipPosition"
                >
                    Lorem Ipsum
                </ids-flat-button>
            </div>
        `,styles:[`
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
            `]})},l=[`Default`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    buttonPosition: 'center',
    idsTooltip: 'Przykładowy tooltip',
    idsTooltipPosition: 'auto'
  },
  render: args => ({
    props: args,
    template: \`
            <div
                class="tooltip-playground"
                [class.tooltip-playground--left]="buttonPosition === 'left'"
                [class.tooltip-playground--right]="buttonPosition === 'right'"
            >
                <ids-flat-button
                    [idsTooltip]="idsTooltip"
                    [idsTooltipPosition]="idsTooltipPosition"
                >
                    Lorem Ipsum
                </ids-flat-button>
            </div>
        \`,
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
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Default,l as __namedExportsOrder,s as default};