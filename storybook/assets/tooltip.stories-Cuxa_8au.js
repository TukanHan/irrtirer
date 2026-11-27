import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{i as t,n,o as r}from"./iframe-lGIe1z2d.js";import{n as i,t as a}from"./elem-builder-B342_OgR.js";import{n as o,t as s}from"./flat-button-CowMDr46.js";import{n as c,t as l}from"./tooltip-xMTbZhB3.js";var u,d,f;function init_tooltip_stories(){return(init_tooltip_stories=e((()=>{n(),o(),i(),c(),u={title:`Design System/Tooltip`,component:l,tags:[`autodocs`],decorators:[r({imports:[s,l]}),t(e=>`
                <div
                    class="tooltip-playground"
                    [class.tooltip-playground--left]="buttonPosition === 'left'"
                    [class.tooltip-playground--right]="buttonPosition === 'right'"
                >
                    ${e}
                </div>
            `)],parameters:{docs:{source:{excludeDecorators:!0}}},argTypes:{buttonPosition:{description:"Moves the host to a viewport edge to show where `auto` places the tooltip.",control:`inline-radio`,options:[`left`,`center`,`right`],table:{category:`playground`}},idsTooltipPosition:{control:`inline-radio`,options:[`auto`,`top`,`right`,`bottom`,`left`]}}},d={args:{buttonPosition:`center`,idsTooltip:`Lorem ipsum dolor`,idsTooltipPosition:`auto`},render:e=>({props:e,template:a(`ids-flat-button`).withInput(`idsTooltip`,e.idsTooltip).withInput(`idsTooltipPosition`,e.idsTooltipPosition,`auto`).withContent(`Lorem Ipsum`).build(),styles:[`
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
    idsTooltip: 'Lorem ipsum dolor',
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
}`,...d.parameters?.docs?.source}}}})))()}init_tooltip_stories();export{d as Default,f as __namedExportsOrder,u as default};