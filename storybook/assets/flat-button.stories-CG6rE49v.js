import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,o as n}from"./iframe-iT_I9Drs.js";import{n as r,t as i}from"./icon-oZG7VTrJ.js";import{n as a,t as o}from"./css-properties-BEnitJLb.js";import{a as s,n as c,t as l}from"./public-api-CRsYBZGg.js";import{n as u,t as d}from"./elem-builder-Cho_rnz6.js";import{n as f,t as p}from"./flat-button-CSRarimf.js";var m,h,g,_;function init_flat_button_stories(){return(init_flat_button_stories=e((()=>{t(),r(),a(),l(),u(),f(),m={title:`Design System/Action/Flat Button`,component:p,tags:[`autodocs`],decorators:[n({imports:[i]})],argTypes:{layout:{description:`What the button content holds: an icon, text, or both.`,control:`inline-radio`,options:[`Icon`,`Text`,`Icon & Text`],table:{category:`playground`}},iconName:{description:"Material Symbols name of the projected `ids-icon`.",control:`text`,if:{arg:`layout`,neq:`Text`},table:{category:`playground`}},text:{description:`Projected text.`,control:`text`,if:{arg:`layout`,neq:`Icon`},table:{category:`playground`}},clicked:{control:!1},...o({"--ids-flat-button-content-color":{description:`Color of the content (text, icon) and its glow; overrides the variant color.`,syntax:`<color>`,defaultValue:`variant color`},"--ids-flat-button-size":{description:`Width and height of an icon-only button.`,syntax:`<length>`,defaultValue:`36px`}})}},h={args:{layout:`Icon`,iconName:`edit`,text:`Lorem`,ariaLabel:`Lorem ipsum`,disabled:!1,variant:`neutral`,type:`button`,"--ids-flat-button-content-color":``,"--ids-flat-button-size":``},render:e=>({props:e,template:d(`ids-flat-button`).withStyle(`--ids-flat-button-content-color`,e[`--ids-flat-button-content-color`]).withStyle(`--ids-flat-button-size`,e[`--ids-flat-button-size`]).withInput(`ariaLabel`,e.ariaLabel,``).withInput(`variant`,e.variant,`neutral`).withInput(`type`,e.type,`button`).withInput(`disabled`,e.disabled).withOutput(`clicked`).withContent(e.layout!==`Text`&&d(`ids-icon`).withAttribute(`name`,e.iconName),e.layout!==`Icon`&&e.text).build()})},g={decorators:[n({imports:[c]})],parameters:{controls:{disable:!0},pseudo:s(`button`)},render:()=>({props:{sections:[{name:`neutral`},{name:`danger`},{name:`accent`}],states:[`rest`,`hover`,`focus-visible`,`active`,`disabled`]},template:`
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <ids-flat-button [variant]="section.name" [disabled]="state === 'disabled'">
                        <ids-icon name="edit" />
                        {{ state }}
                    </ids-flat-button>
                </ng-template>
            </sb-state-matrix>
        `})},_=[`Default`,`States`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'Icon',
    iconName: 'edit',
    text: 'Lorem',
    ariaLabel: 'Lorem ipsum',
    disabled: false,
    variant: 'neutral',
    type: 'button',
    '--ids-flat-button-content-color': '',
    '--ids-flat-button-size': ''
  },
  render: args => ({
    props: args,
    template: elem('ids-flat-button').withStyle('--ids-flat-button-content-color', args['--ids-flat-button-content-color']).withStyle('--ids-flat-button-size', args['--ids-flat-button-size']).withInput('ariaLabel', args.ariaLabel, '').withInput('variant', args.variant, 'neutral').withInput('type', args.type, 'button').withInput('disabled', args.disabled).withOutput('clicked').withContent(args.layout !== 'Text' && elem('ids-icon').withAttribute('name', args.iconName), args.layout !== 'Icon' && args.text).build()
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
        name: 'danger'
      }, {
        name: 'accent'
      }],
      states: ['rest', 'hover', 'focus-visible', 'active', 'disabled']
    },
    template: \`
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <ids-flat-button [variant]="section.name" [disabled]="state === 'disabled'">
                        <ids-icon name="edit" />
                        {{ state }}
                    </ids-flat-button>
                </ng-template>
            </sb-state-matrix>
        \`
  })
}`,...g.parameters?.docs?.source}}}})))()}init_flat_button_stories();export{h as Default,g as States,_ as __namedExportsOrder,m as default};