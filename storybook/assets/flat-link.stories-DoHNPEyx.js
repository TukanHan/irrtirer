import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{B as t,Kn as n,Lr as r,N as i,Ur as a,_ as o,g as s,nr as c,tr as l}from"./core-CjIc2X4A.js";import{r as u,t as d}from"./rxjs-interop-BbrTArIW.js";import{a as f,c as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b}from"./_router_module-chunk-B5IHr845.js";import{n as x,t as S}from"./filter-EU0XwhQy.js";import{c as C,n as w}from"./common-BjIF0DBO.js";import{i as T,n as E,o as D,r as O}from"./iframe-lGIe1z2d.js";import{n as k,t as A}from"./icon-BgEspuO0.js";import{a as j,n as M,t as N}from"./public-api-BiLccHIJ.js";import{n as P,t as F}from"./elem-builder-B342_OgR.js";import{n as I,t as L}from"./ids-flat-action-BHcCmysS.js";import{n as R,t as z}from"./ids-action-BItl3Ris.js";var B;function init_flat_link(){return(init_flat_link=e((()=>{B=`:host{--ids-glow-color:var(--ids-color-highlight);--ids-button-content-color:var(--ids-text-highlight-color)}:host .ids-flat-action{--ids-button-text-shadow-idle:var(--ids-button-text-shadow-layer-1);--ids-button-text-shadow-hover:var(--ids-button-text-shadow-layer-1), var(--ids-button-text-shadow-layer-2)}:host .ids-flat-action[aria-current=page]{--ids-flat-action-overlay-opacity:.15}:host .ids-flat-action[aria-current=page] .ids-flat-action-content{font-weight:700}`})))()}var V;function init_flat_link$1(){return(init_flat_link$1=e((()=>{a(),init_flat_link(),I(),R(),w(),s(),v(),V=class IdsFlatLink{link=o.required();linkType=o(`internal`);static propDecorators={link:[{type:t,args:[{isSignal:!0,alias:`link`,required:!0,transform:void 0}]}],linkType:[{type:t,args:[{isSignal:!0,alias:`linkType`,required:!1,transform:void 0}]}]}},V=r([i({selector:`ids-flat-link`,imports:[C,b,g],template:`
        <ng-template #linkContent>
            <span class="ids-flat-action-content ids-button-label">
                <ng-content />
            </span>
        </ng-template>

        @if (linkType() === 'external') {
            <a class="ids-flat-action ids-flat-link" [href]="link()" target="_blank" rel="noopener noreferrer">
                <ng-container [ngTemplateOutlet]="linkContent" />
            </a>
        } @else {
            <a class="ids-flat-action ids-flat-link" [routerLink]="link()" routerLinkActive ariaCurrentWhenActive="page">
                <ng-container [ngTemplateOutlet]="linkContent" />
            </a>
        }
    `,styles:[B,L,z]})],V)})))()}var H,U,W,G,K;function init_flat_link_stories(){return(init_flat_link_stories=e((()=>{a(),s(),d(),k(),h(),v(),E(),x(),l(),N(),P(),init_flat_link$1(),H=class FlatLinkDestinationStory{router=n(y);currentUrl=u(this.router.events.pipe(S(e=>e instanceof _),c(e=>e.urlAfterRedirects)),{initialValue:this.router.url})},H=r([i({template:`<code>{{ currentUrl() }}</code>`})],H),U={title:`Design System/Action/Flat Link`,component:V,tags:[`autodocs`],decorators:[O({providers:[m([{path:`**`,component:H}],f())]}),D({imports:[A,H,p]}),T(e=>`
                ${e}
                @if (linkType === 'internal') {
                    <br />
                    <router-outlet />
                }
            `)],parameters:{docs:{source:{excludeDecorators:!0}}},argTypes:{layout:{description:`What the link content holds: an icon, text, or both.`,control:`inline-radio`,options:[`Icon`,`Text`,`Icon & Text`],table:{category:`playground`}},iconName:{description:"Material Symbols name of the projected `mat-icon`.",control:`text`,if:{arg:`layout`,neq:`Text`},table:{category:`playground`}},text:{description:`Projected text.`,control:`text`,if:{arg:`layout`,neq:`Icon`},table:{category:`playground`}}}},W={args:{link:`https://example.com`,linkType:`external`,layout:`Icon & Text`,iconName:`open_in_new`,text:`Lorem ipsum`},render:e=>({props:e,template:F(`ids-flat-link`).withInput(`link`,e.link).withInput(`linkType`,e.linkType,`internal`).withContent(e.layout!==`Text`&&F(`mat-icon`).withClass(`material-symbols-outlined`).withContent(e.iconName),e.layout!==`Icon`&&e.text).build()})},G={decorators:[D({imports:[M]})],parameters:{controls:{disable:!0},pseudo:j(`a`)},render:()=>({props:{sections:[{name:`default`,link:`/lorem`},{name:`current`,link:`/`}],states:[`rest`,`hover`,`focus-visible`,`active`]},template:`
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <ids-flat-link [link]="section.link">
                        <mat-icon class="material-symbols-outlined">home</mat-icon>
                        {{ state }}
                    </ids-flat-link>
                </ng-template>
            </sb-state-matrix>
        `})},K=[`Default`,`States`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    link: 'https://example.com',
    linkType: 'external',
    layout: 'Icon & Text',
    iconName: 'open_in_new',
    text: 'Lorem ipsum'
  },
  render: args => ({
    props: args,
    template: elem('ids-flat-link').withInput('link', args.link).withInput('linkType', args.linkType, 'internal').withContent(args.layout !== 'Text' && elem('mat-icon').withClass('material-symbols-outlined').withContent(args.iconName), args.layout !== 'Icon' && args.text).build()
  })
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [StateMatrix]
  })],
  parameters: {
    controls: {
      disable: true
    },
    pseudo: pseudoStates('a')
  },
  render: () => ({
    props: {
      // The story runs at \`/\`, so a link to \`/\` is the current page.
      sections: [{
        name: 'default',
        link: '/lorem'
      }, {
        name: 'current',
        link: '/'
      }],
      states: ['rest', 'hover', 'focus-visible', 'active']
    },
    template: \`
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <ids-flat-link [link]="section.link">
                        <mat-icon class="material-symbols-outlined">home</mat-icon>
                        {{ state }}
                    </ids-flat-link>
                </ng-template>
            </sb-state-matrix>
        \`
  })
}`,...G.parameters?.docs?.source}}}})))()}init_flat_link_stories();export{W as Default,G as States,K as __namedExportsOrder,U as default};