import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{Br as t,F as n,H as r,Jn as i,Kr as a,_ as o,ar as s,g as c,ir as l}from"./core-GKNYu18h.js";import{a as u,c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v}from"./_router_module-chunk-CGEepGZe.js";import{n as y,t as b}from"./filter-CMkaearn.js";import{c as x,n as S}from"./common-DaMuHivD.js";import{f as C,i as w,n as T,o as E,r as D,u as O}from"./iframe-BsJdjaqF.js";import{n as k,t as A}from"./icon-B36qeLH9.js";import{a as j,n as M,t as N}from"./public-api-96xPSl9r.js";import{n as P,t as F}from"./elem-builder-Cho_rnz6.js";import{n as I,t as L}from"./ids-flat-action-CElBcLzs.js";import{i as R,n as z,r as B,t as V}from"./ids-type-label-lg-BieGUBZp.js";var H;function init_flat_link(){return(init_flat_link=e((()=>{H=`:host{--ids-glow-color:var(--ids-color-highlight);--ids-flat-action-content-color:var(--ids-color-text-highlight)}:host .ids-flat-action{--ids-button-text-shadow-idle:var(--ids-button-text-shadow-layer-1);--ids-button-text-shadow-hover:var(--ids-button-text-shadow-layer-1), var(--ids-button-text-shadow-layer-2)}:host .ids-flat-action[aria-current=page]{--ids-flat-action-overlay-opacity:.15}:host .ids-flat-action[aria-current=page] .ids-flat-action-content{font-weight:700}`})))()}var U;function init_flat_link$1(){return(init_flat_link$1=e((()=>{a(),init_flat_link(),I(),R(),z(),S(),c(),g(),U=class IdsFlatLink{link=o.required();linkType=o(`internal`);static propDecorators={link:[{type:r,args:[{isSignal:!0,alias:`link`,required:!0,transform:void 0}]}],linkType:[{type:r,args:[{isSignal:!0,alias:`linkType`,required:!1,transform:void 0}]}]}},U=t([n({selector:`ids-flat-link`,imports:[x,v,m],template:`
        <ng-template #linkContent>
            <span class="ids-flat-action-content ids-type-label-lg">
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
    `,styles:[H,L,B,V]})],U)})))()}var W,G,K,q,J;function init_flat_link_stories(){return(init_flat_link_stories=e((()=>{a(),c(),O(),k(),p(),g(),T(),y(),l(),N(),P(),init_flat_link$1(),W=class FlatLinkDestinationStory{router=i(_);currentUrl=C(this.router.events.pipe(b(e=>e instanceof h),s(e=>e.urlAfterRedirects)),{initialValue:this.router.url})},W=t([n({template:`<code>{{ currentUrl() }}</code>`})],W),G={title:`Design System/Action/Flat Link`,component:U,tags:[`autodocs`],decorators:[D({providers:[f([{path:`**`,component:W}],u())]}),E({imports:[A,W,d]}),w(e=>`
                ${e}
                @if (linkType === 'internal') {
                    <br />
                    <router-outlet />
                }
            `)],parameters:{docs:{source:{excludeDecorators:!0}}},argTypes:{layout:{description:`What the link content holds: an icon, text, or both.`,control:`inline-radio`,options:[`Icon`,`Text`,`Icon & Text`],table:{category:`playground`}},iconName:{description:"Material Symbols name of the projected `mat-icon`.",control:`text`,if:{arg:`layout`,neq:`Text`},table:{category:`playground`}},text:{description:`Projected text.`,control:`text`,if:{arg:`layout`,neq:`Icon`},table:{category:`playground`}}}},K={args:{link:`https://example.com`,linkType:`external`,layout:`Icon & Text`,iconName:`open_in_new`,text:`Lorem ipsum`},render:e=>({props:e,template:F(`ids-flat-link`).withInput(`link`,e.link).withInput(`linkType`,e.linkType,`internal`).withContent(e.layout!==`Text`&&F(`mat-icon`).withClass(`material-symbols-outlined`).withContent(e.iconName),e.layout!==`Icon`&&e.text).build()})},q={decorators:[E({imports:[M]})],parameters:{controls:{disable:!0},pseudo:j(`a`)},render:()=>({props:{sections:[{name:`default`,link:`/lorem`},{name:`current`,link:`/`}],states:[`rest`,`hover`,`focus-visible`,`active`]},template:`
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <ids-flat-link [link]="section.link">
                        <mat-icon class="material-symbols-outlined">home</mat-icon>
                        {{ state }}
                    </ids-flat-link>
                </ng-template>
            </sb-state-matrix>
        `})},J=[`Default`,`States`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}}})))()}init_flat_link_stories();export{K as Default,q as States,J as __namedExportsOrder,G as default};