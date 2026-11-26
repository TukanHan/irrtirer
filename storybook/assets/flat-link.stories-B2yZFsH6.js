import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{B as t,Gr as n,N as r,_ as i,g as a,nr as o,qn as s,rr as c,zr as l}from"./core-EfmSQQJi.js";import{r as u,t as d}from"./rxjs-interop-uK7PZZCR.js";import{i as f,r as p}from"./skip-C_tNwTsk.js";import{a as m,c as h,i as g,l as _,n as v,o as y,r as b,s as x,t as S}from"./_router_module-chunk-RR7pgh0X.js";import{c as C,n as w}from"./common-BEPtGlFT.js";import{a as T,l as E,o as D,s as O}from"./iframe-DD8FPAMb.js";import{n as k,t as A}from"./icon-DprzP4Fn.js";import{a as j,n as M,t as N}from"./public-api-kSsOUlhl.js";import{n as P,t as F}from"./elem-builder-B342_OgR.js";import{n as I,t as L}from"./ids-flat-action-BHcCmysS.js";import{n as R,t as z}from"./ids-action-BItl3Ris.js";var B;function init_flat_link(){return(init_flat_link=e((()=>{B=`:host{--ids-glow-color:var(--ids-color-highlight);--ids-button-content-color:var(--ids-text-highlight-color)}:host .ids-flat-action{--ids-button-text-shadow-idle:var(--ids-button-text-shadow-layer-1);--ids-button-text-shadow-hover:var(--ids-button-text-shadow-layer-1), var(--ids-button-text-shadow-layer-2)}:host .ids-flat-action[aria-current=page]{--ids-flat-action-overlay-opacity:.15}:host .ids-flat-action[aria-current=page] .ids-flat-action-content{font-weight:700}`})))()}var V;function init_flat_link$1(){return(init_flat_link$1=e((()=>{n(),init_flat_link(),I(),R(),w(),a(),b(),V=class IdsFlatLink{link=i.required();linkType=i(`internal`);static propDecorators={link:[{type:t,args:[{isSignal:!0,alias:`link`,required:!0,transform:void 0}]}],linkType:[{type:t,args:[{isSignal:!0,alias:`linkType`,required:!1,transform:void 0}]}]}},V=l([r({selector:`ids-flat-link`,imports:[C,S,v],template:`
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
    `,styles:[B,L,z]})],V)})))()}var H,U,W,G,K;function init_flat_link_stories(){return(init_flat_link_stories=e((()=>{n(),k(),d(),a(),_(),b(),T(),f(),o(),N(),P(),init_flat_link$1(),H=class FlatLinkDestinationStory{router=s(x);currentUrl=u(this.router.events.pipe(p(e=>e instanceof y),c(e=>e.urlAfterRedirects)),{initialValue:this.router.url})},H=l([r({template:`Current location: {{ currentUrl() }}`})],H),U={title:`Design System/Action/Flat Link`,component:V,tags:[`autodocs`],decorators:[D({providers:[g([{path:`**`,component:H}],m())]}),E({imports:[A,H,h]}),O(e=>`
                ${e}
                @if (linkType === 'internal') {
                    <br />
                    <router-outlet />
                }
            `)],parameters:{docs:{source:{excludeDecorators:!0}}},argTypes:{link:{control:`text`,table:{category:`Inputs`}},linkType:{control:`inline-radio`,options:[`internal`,`external`],table:{category:`Inputs`}},layout:{control:`inline-radio`,options:[`Icon`,`Text`,`Icon & Text`],table:{category:`Playground`}},iconName:{control:`text`,if:{arg:`layout`,neq:`Text`},table:{category:`Playground`}},text:{control:`text`,if:{arg:`layout`,neq:`Icon`},table:{category:`Playground`}}}},W={args:{link:`https://example.com`,linkType:`external`,layout:`Icon & Text`,iconName:`open_in_new`,text:`Open link`},render:e=>({props:e,template:F(`ids-flat-link`).withInput(`link`,e.link).withInput(`linkType`,e.linkType,`internal`).withContent(e.layout!==`Text`&&F(`mat-icon`).withClass(`material-symbols-outlined`).withContent(e.iconName),e.layout!==`Icon`&&e.text).build()})},G={decorators:[E({imports:[M]})],parameters:{controls:{disable:!0},pseudo:j(`a`)},render:()=>({props:{sections:[{name:`default`,link:`/lorem`},{name:`current`,link:`/`}],states:[`rest`,`hover`,`focus-visible`,`active`]},template:`
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
    text: 'Open link'
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