import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,c as n}from"./iframe-BpQlpQjs.js";import{n as r,t as i}from"./flat-button-DKx5TrF-.js";import{i as a,n as o,r as s,t as c}from"./tooltip.directive-Dx_Bw_wx.js";var l,u,d;function f(){return(f=e((()=>{t(),r(),o(),a(),l={title:`Design System/Tooltip`,component:c,tags:[`autodocs`],decorators:[n({imports:[i,c,s]})],argTypes:{idsTooltip:{control:`text`,description:`Treść wyświetlana w panelu tooltipa.`,table:{category:`Inputs`}},idsTooltipPosition:{control:`inline-radio`,options:[`auto`,`top`,`right`,`bottom`,`left`],description:`Preferowana pozycja tooltipa. W trybie auto pozycja jest dobrana względem krawędzi viewportu.`,table:{category:`Inputs`}},buttonPosition:{control:`inline-radio`,options:[`left`,`center`,`right`],description:`Położenie przycisku, które pozwala przetestować zachowanie trybu auto.`,table:{category:`Playground`}}}},u={args:{buttonPosition:`center`,idsTooltip:`Przykładowy tooltip`,idsTooltipPosition:`auto`},render:e=>({props:e,template:`
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
            `]})},d=[`Default`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Default,d as __namedExportsOrder,l as default};