import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{B as t,Gr as n,N as r,_ as i,g as a,nr as o,qn as s,rr as c,u as l,zr as u}from"./core-CXH6MCZn.js";import{r as d,t as f}from"./rxjs-interop-Dkt4YFkn.js";import{i as p,r as m}from"./skip-BqJjzV02.js";import{a as h,c as g,i as _,l as v,n as y,o as b,r as x,s as S,t as C}from"./_router_module-chunk-Bfin86KW.js";import{a as w,c as T,o as E}from"./iframe-kWnt1dXg.js";import{n as D,t as O}from"./icon-ebGpF6Ci.js";import{n as k,t as A}from"./tooltip-5zPpHMCP.js";var j;function M(){return(M=e((()=>{j=`
        :host {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    `})))()}var N;function P(){return(P=e((()=>{N=`:host{z-index:1;background-color:var(--ids-sidenav-surface-color);height:100%;padding:8px 0;display:block}`})))()}var F;function I(){return(I=e((()=>{n(),P(),a(),F=class{ariaLabel=i(``);static propDecorators={ariaLabel:[{type:t,args:[{isSignal:!0,alias:`ariaLabel`,required:!1,transform:void 0}]}]}},F=u([r({selector:`ids-side-nav`,template:`<nav [attr.aria-label]="ariaLabel() || null"><ng-content /></nav>`,styles:[N]})],F)})))()}var L;function R(){return(R=e((()=>{L=`:host{display:block}:host .ids-side-nav-item{--ids-side-nav-overlay-opacity:0;--irr-icon-size:32px;border-radius:var(--ids-radius-none);isolation:isolate;color:var(--ids-text-muted-color);cursor:pointer;outline:0;padding:12px;transition:color .2s,text-shadow .2s;display:flex;position:relative}:host .ids-side-nav-item .ids-side-nav-item-icon{transition:font-weight .2s}:host .ids-side-nav-item:before{content:"";z-index:-1;background-color:var(--ids-color-highlight);opacity:var(--ids-side-nav-overlay-opacity);pointer-events:none;transition:opacity .2s,background-color .2s;position:absolute;inset:0}:host .ids-side-nav-item:hover:not([aria-disabled=true]),:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){color:var(--ids-text-muted-hover-color)}:host .ids-side-nav-item:hover:not([aria-disabled=true]):not(:active){--ids-side-nav-overlay-opacity:.05}:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){--ids-side-nav-overlay-opacity:.1}:host .ids-side-nav-item:active:not([aria-disabled=true]){--irr-icon-font-weight:300;--ids-side-nav-overlay-opacity:.15}:host .ids-side-nav-item[aria-current=page]{--irr-icon-font-weight:300;color:var(--ids-text-highlight-color);background-color:color-mix(in srgb, var(--ids-color-highlight) 10%, transparent);text-shadow:0 0 4px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-faint), transparent), 0 0 8px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-subtle), transparent)}:host .ids-side-nav-item[aria-disabled=true]{cursor:default;opacity:.5;pointer-events:none}`})))()}var z;function B(){return(B=e((()=>{n(),R(),a(),x(),k(),D(),z=class{link=i.required();label=i(``);icon=i.required();disabled=i(!1,{transform:l});static propDecorators={link:[{type:t,args:[{isSignal:!0,alias:`link`,required:!0,transform:void 0}]}],label:[{type:t,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],icon:[{type:t,args:[{isSignal:!0,alias:`icon`,required:!0,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}]}},z=u([r({selector:`ids-side-nav-item`,imports:[C,y,A,O],template:`
        <a
            class="ids-side-nav-item"
            [routerLink]="disabled() ? null : link()"
            routerLinkActive
            ariaCurrentWhenActive="page"
            [attr.aria-disabled]="disabled() ? 'true' : null"
            [attr.aria-label]="label() || null"
            [attr.tabindex]="disabled() ? -1 : null"
            [idsTooltip]="label()"
            idsTooltipPosition="right"
        >
            <mat-icon class="ids-side-nav-item-icon material-symbols-outlined">{{ icon() }}</mat-icon>
        </a>
    `,styles:[L]})],z)})))()}var V,H,U,W;function G(){return(G=e((()=>{n(),M(),w(),a(),v(),x(),f(),p(),o(),I(),B(),V=class{router=s(S);currentUrl=d(this.router.events.pipe(m(e=>e instanceof b),c(e=>e.urlAfterRedirects)),{initialValue:this.router.url})},V=u([r({template:`{{ currentUrl() }}`,styles:[j]})],V),H={title:`Design System/Side Nav`,component:F,tags:[`autodocs`],decorators:[E({providers:[_([{path:`**`,component:V}],h())]}),T({imports:[z,V,g]})]},U={argTypes:{ariaLabel:{control:`text`,table:{category:`Inputs`}}},args:{ariaLabel:`Lorem ipsum`},render:e=>({props:e,template:`
            <div class="side-nav-story">
                <ids-side-nav [ariaLabel]="ariaLabel">
                    <ids-side-nav-item link="/project" label="Projekt" icon="folder" />
                    <ids-side-nav-item link="/layers" label="Warstwy" icon="dashboard" />
                    <ids-side-nav-item link="/generating" label="Generowanie" icon="rocket_launch" />
                    <ids-side-nav-item link="/disabled" label="Zablokowane" [disabled]="true" icon="block" />
                </ids-side-nav>
                <router-outlet />
            </div>
        `,styles:[`
            .side-nav-story {
                display: flex;
                height: 320px;
            }
            `]})},W=[`Default`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ariaLabel: {
      control: 'text',
      table: {
        category: 'Inputs'
      }
    }
  },
  args: {
    ariaLabel: 'Lorem ipsum'
  },
  render: args => ({
    props: args,
    template: \`
            <div class="side-nav-story">
                <ids-side-nav [ariaLabel]="ariaLabel">
                    <ids-side-nav-item link="/project" label="Projekt" icon="folder" />
                    <ids-side-nav-item link="/layers" label="Warstwy" icon="dashboard" />
                    <ids-side-nav-item link="/generating" label="Generowanie" icon="rocket_launch" />
                    <ids-side-nav-item link="/disabled" label="Zablokowane" [disabled]="true" icon="block" />
                </ids-side-nav>
                <router-outlet />
            </div>
        \`,
    styles: [\`
            .side-nav-story {
                display: flex;
                height: 320px;
            }
            \`]
  })
}`,...U.parameters?.docs?.source}}}})))()}G();export{U as Default,W as __namedExportsOrder,H as default};