import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{B as t,Gr as n,N as r,_ as i,g as a,nr as o,qn as s,rr as c,u as l,zr as u}from"./core-CXH6MCZn.js";import{r as d,t as f}from"./rxjs-interop-Dkt4YFkn.js";import{i as p,r as m}from"./skip-BqJjzV02.js";import{a as h,c as g,i as _,l as v,n as y,o as b,r as x,s as S,t as C}from"./_router_module-chunk-CXLwwNn2.js";import{a as w,l as T,o as E,s as D}from"./iframe-DNOtVTR-.js";import{n as O,t as k}from"./icon-DEzqEUWb.js";import{n as A,t as j}from"./elem-builder-YlncYE0b.js";import{n as M,t as N}from"./tooltip-5zPpHMCP.js";var P;function F(){return(F=e((()=>{P=`
        :host {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    `})))()}var I;function L(){return(L=e((()=>{I=`:host{z-index:1;background-color:var(--ids-sidenav-surface-color);height:100%;padding:8px 0;display:block}`})))()}var R;function z(){return(z=e((()=>{n(),L(),a(),R=class{ariaLabel=i(``);static propDecorators={ariaLabel:[{type:t,args:[{isSignal:!0,alias:`ariaLabel`,required:!1,transform:void 0}]}]}},R=u([r({selector:`ids-side-nav`,template:`<nav [attr.aria-label]="ariaLabel() || null"><ng-content /></nav>`,styles:[I]})],R)})))()}var B;function V(){return(V=e((()=>{B=`:host{display:block}:host .ids-side-nav-item{--ids-side-nav-overlay-opacity:0;--irr-icon-size:32px;border-radius:var(--ids-radius-none);isolation:isolate;color:var(--ids-text-muted-color);cursor:pointer;outline:0;padding:12px;transition:color .2s,text-shadow .2s;display:flex;position:relative}:host .ids-side-nav-item .ids-side-nav-item-icon{transition:font-weight .2s}:host .ids-side-nav-item:before{content:"";z-index:-1;background-color:var(--ids-color-highlight);opacity:var(--ids-side-nav-overlay-opacity);pointer-events:none;transition:opacity .2s,background-color .2s;position:absolute;inset:0}:host .ids-side-nav-item:hover:not([aria-disabled=true]),:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){color:var(--ids-text-muted-hover-color)}:host .ids-side-nav-item:hover:not([aria-disabled=true]):not(:active){--ids-side-nav-overlay-opacity:.05}:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){--ids-side-nav-overlay-opacity:.1}:host .ids-side-nav-item:active:not([aria-disabled=true]){--irr-icon-font-weight:300;--ids-side-nav-overlay-opacity:.15}:host .ids-side-nav-item[aria-current=page]{--irr-icon-font-weight:300;color:var(--ids-text-highlight-color);background-color:color-mix(in srgb, var(--ids-color-highlight) 10%, transparent);text-shadow:0 0 4px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-faint), transparent), 0 0 8px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-subtle), transparent)}:host .ids-side-nav-item[aria-disabled=true]{cursor:default;opacity:.5;pointer-events:none}`})))()}var H;function U(){return(U=e((()=>{n(),V(),a(),x(),M(),O(),H=class{link=i.required();label=i(``);icon=i.required();disabled=i(!1,{transform:l});static propDecorators={link:[{type:t,args:[{isSignal:!0,alias:`link`,required:!0,transform:void 0}]}],label:[{type:t,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],icon:[{type:t,args:[{isSignal:!0,alias:`icon`,required:!0,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}]}},H=u([r({selector:`ids-side-nav-item`,imports:[C,y,N,k],template:`
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
    `,styles:[B]})],H)})))()}var W,G,K,q;function J(){return(J=e((()=>{n(),F(),w(),a(),v(),x(),f(),p(),o(),A(),z(),U(),W=class{router=s(S);currentUrl=d(this.router.events.pipe(m(e=>e instanceof b),c(e=>e.urlAfterRedirects)),{initialValue:this.router.url})},W=u([r({template:`{{ currentUrl() }}`,styles:[P]})],W),G={title:`Design System/Side Nav`,component:R,tags:[`autodocs`],decorators:[E({providers:[_([{path:`**`,component:W}],h())]}),T({imports:[H,W,g]}),D(e=>`
                <div class="side-nav-story">
                    ${e}
                    <router-outlet />
                </div>
            `)],parameters:{docs:{source:{excludeDecorators:!0}}}},K={argTypes:{ariaLabel:{control:`text`,table:{category:`Inputs`}}},args:{ariaLabel:`Lorem ipsum`},render:e=>({props:e,template:j(`ids-side-nav`).withInput(`ariaLabel`,e.ariaLabel,``).withContent(j(`ids-side-nav-item`).withInput(`link`,`/project`).withInput(`label`,`Projekt`).withInput(`icon`,`folder`),j(`ids-side-nav-item`).withInput(`link`,`/layers`).withInput(`label`,`Warstwy`).withInput(`icon`,`dashboard`),j(`ids-side-nav-item`).withInput(`link`,`/generating`).withInput(`label`,`Generowanie`).withInput(`icon`,`rocket_launch`),j(`ids-side-nav-item`).withInput(`link`,`/disabled`).withInput(`label`,`Zablokowane`).withInput(`disabled`,!0).withInput(`icon`,`block`)).build(),styles:[`
            .side-nav-story {
                display: flex;
                height: 320px;
            }
            `]})},q=[`Default`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    template: elem('ids-side-nav').withInput('ariaLabel', args.ariaLabel, '').withContent(elem('ids-side-nav-item').withInput('link', '/project').withInput('label', 'Projekt').withInput('icon', 'folder'), elem('ids-side-nav-item').withInput('link', '/layers').withInput('label', 'Warstwy').withInput('icon', 'dashboard'), elem('ids-side-nav-item').withInput('link', '/generating').withInput('label', 'Generowanie').withInput('icon', 'rocket_launch'), elem('ids-side-nav-item').withInput('link', '/disabled').withInput('label', 'Zablokowane').withInput('disabled', true).withInput('icon', 'block')).build(),
    styles: [\`
            .side-nav-story {
                display: flex;
                height: 320px;
            }
            \`]
  })
}`,...K.parameters?.docs?.source}}}})))()}J();export{K as Default,q as __namedExportsOrder,G as default};