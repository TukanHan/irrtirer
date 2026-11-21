import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{I as t,Nr as n,Vn as r,Xn as i,Zn as a,h as o,k as s,m as c,zr as l}from"./core-_WelOpXh.js";import{r as u,t as d}from"./rxjs-interop-CluD5p7h.js";import{i as f,r as p}from"./skip-B24Hjqnn.js";import{a as m,c as h,i as g,l as _,n as v,o as y,r as b,s as x,t as S}from"./_router_module-chunk-DAVF4fk4.js";import{c as C,n as w}from"./common-BG1WE-39.js";import{a as T,c as E,o as D}from"./iframe-CB5XF_i6.js";import{n as O,t as k}from"./icon-Dz57rg1_.js";import{n as A,t as j}from"./ids-flat-action-HVvxSQNw.js";import{n as M,t as N}from"./ids-action-DeEUlF3S.js";var P;function F(){return(F=e((()=>{P=`:host{--ids-glow-color:var(--ids-neutral);--ids-button-content-color:var(--ids-text-highlight-color)}:host .ids-flat-action{--ids-button-text-shadow-idle:var(--ids-button-text-shadow-layer-1);--ids-button-text-shadow-hover:var(--ids-button-text-shadow-layer-1), var(--ids-button-text-shadow-layer-2)}:host .ids-flat-action.ids-active-link{--ids-flat-action-overlay-opacity:.15}:host .ids-flat-action.ids-active-link .ids-flat-action-content{font-weight:700}`})))()}var I;function L(){return(L=e((()=>{l(),F(),A(),M(),w(),c(),b(),I=class{link=o.required();linkType=o(`internal`);static propDecorators={link:[{type:t,args:[{isSignal:!0,alias:`link`,required:!0,transform:void 0}]}],linkType:[{type:t,args:[{isSignal:!0,alias:`linkType`,required:!1,transform:void 0}]}]}},I=n([s({selector:`ids-flat-link`,imports:[C,S,v],template:`
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
            <a class="ids-flat-action ids-flat-link" [routerLink]="link()" routerLinkActive="ids-active-link">
                <ng-container [ngTemplateOutlet]="linkContent" />
            </a>
        }
    `,styles:[P,j,N]})],I)})))()}var R,z,B,V;function H(){return(H=e((()=>{l(),O(),d(),c(),_(),b(),T(),f(),i(),L(),R=class{router=r(x);currentUrl=u(this.router.events.pipe(p(e=>e instanceof y),a(e=>e.urlAfterRedirects)),{initialValue:this.router.url})},R=n([s({template:`Current location: {{ currentUrl() }}`})],R),z={title:`Design System/Links/Flat Link`,component:I,tags:[`autodocs`],decorators:[D({providers:[g([{path:`**`,component:R}],m())]}),E({imports:[k,R,h]})],argTypes:{link:{control:`text`,table:{category:`Inputs`}},linkType:{control:`inline-radio`,options:[`internal`,`external`],table:{category:`Inputs`}},layout:{control:`inline-radio`,options:[`Icon`,`Text`,`Icon & Text`],table:{category:`Playground`}},iconName:{control:`text`,if:{arg:`layout`,neq:`Text`},table:{category:`Playground`}},text:{control:`text`,if:{arg:`layout`,neq:`Icon`},table:{category:`Playground`}}}},B={args:{link:`https://example.com`,linkType:`external`,layout:`Icon & Text`,iconName:`open_in_new`,text:`Open link`},render:e=>({props:e,template:`
            <ids-flat-link [link]="link" [linkType]="linkType">
                @if (layout !== 'Text') {
                    <mat-icon class="material-symbols-outlined">{{ iconName }}</mat-icon>
                }
                @if (layout !== 'Icon') {
                    {{ text }}
                }
            </ids-flat-link>

            @if(linkType === 'internal') {
                <br/>
                <router-outlet />
            }
        `})},V=[`Default`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    link: 'https://example.com',
    linkType: 'external',
    layout: 'Icon & Text',
    iconName: 'open_in_new',
    text: 'Open link'
  },
  render: args => ({
    props: args,
    template: \`
            <ids-flat-link [link]="link" [linkType]="linkType">
                @if (layout !== 'Text') {
                    <mat-icon class="material-symbols-outlined">{{ iconName }}</mat-icon>
                }
                @if (layout !== 'Icon') {
                    {{ text }}
                }
            </ids-flat-link>

            @if(linkType === 'internal') {
                <br/>
                <router-outlet />
            }
        \`
  })
}`,...B.parameters?.docs?.source}}}})))()}H();export{B as Default,V as __namedExportsOrder,z as default};