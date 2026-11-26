import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{B as t,Gr as n,N as r,_ as i,g as a,nr as o,qn as s,rr as c,u as l,zr as u}from"./core-EfmSQQJi.js";import{r as d,t as f}from"./rxjs-interop-uK7PZZCR.js";import{i as p,r as m}from"./skip-C_tNwTsk.js";import{a as h,c as g,i as _,l as v,n as y,o as b,r as x,s as S,t as C}from"./_router_module-chunk-RR7pgh0X.js";import{a as w,l as T,o as E,s as D}from"./iframe-DD8FPAMb.js";import{n as O,t as k}from"./icon-DprzP4Fn.js";import{n as A,t as j}from"./elem-builder-B342_OgR.js";import{n as M,t as N}from"./tooltip-BdtEwExZ.js";var P;function init__virtual_angular_jit_style_inline_0b5a8320b1a5f96a(){return(init__virtual_angular_jit_style_inline_0b5a8320b1a5f96a=e((()=>{P=`
        :host {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    `})))()}var F;function init_side_nav(){return(init_side_nav=e((()=>{F=`:host{z-index:1;background-color:var(--ids-sidenav-surface-color);height:100%;padding:8px 0;display:block}`})))()}var I;function init_side_nav$1(){return(init_side_nav$1=e((()=>{n(),init_side_nav(),a(),I=class IdsSideNav{ariaLabel=i(``);static propDecorators={ariaLabel:[{type:t,args:[{isSignal:!0,alias:`ariaLabel`,required:!1,transform:void 0}]}]}},I=u([r({selector:`ids-side-nav`,template:`<nav [attr.aria-label]="ariaLabel() || null"><ng-content /></nav>`,styles:[F]})],I)})))()}var L;function init_side_nav_item(){return(init_side_nav_item=e((()=>{L=`:host{display:block}:host .ids-side-nav-item{--ids-side-nav-overlay-opacity:0;--irr-icon-size:32px;border-radius:var(--ids-radius-none);isolation:isolate;color:var(--ids-text-muted-color);cursor:pointer;outline:0;padding:12px;transition:color .2s,text-shadow .2s;display:flex;position:relative}:host .ids-side-nav-item .ids-side-nav-item-icon{transition:font-weight .2s}:host .ids-side-nav-item:before{content:"";z-index:-1;background-color:var(--ids-color-highlight);opacity:var(--ids-side-nav-overlay-opacity);pointer-events:none;transition:opacity .2s,background-color .2s;position:absolute;inset:0}:host .ids-side-nav-item:hover:not([aria-disabled=true]),:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){color:var(--ids-text-muted-hover-color)}:host .ids-side-nav-item:hover:not([aria-disabled=true]):not(:active){--ids-side-nav-overlay-opacity:.05}:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){--ids-side-nav-overlay-opacity:.1}:host .ids-side-nav-item:active:not([aria-disabled=true]){--irr-icon-font-weight:300;--ids-side-nav-overlay-opacity:.15}:host .ids-side-nav-item[aria-current=page]{--irr-icon-font-weight:300;color:var(--ids-text-highlight-color);background-color:color-mix(in srgb, var(--ids-color-highlight) 10%, transparent);text-shadow:0 0 4px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-faint), transparent), 0 0 8px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-subtle), transparent)}:host .ids-side-nav-item[aria-disabled=true]{cursor:default;opacity:.5;pointer-events:none}`})))()}var R;function init_side_nav_item$1(){return(init_side_nav_item$1=e((()=>{n(),init_side_nav_item(),a(),x(),M(),O(),R=class IdsSideNavItem{link=i.required();label=i(``);icon=i.required();disabled=i(!1,{transform:l});static propDecorators={link:[{type:t,args:[{isSignal:!0,alias:`link`,required:!0,transform:void 0}]}],label:[{type:t,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],icon:[{type:t,args:[{isSignal:!0,alias:`icon`,required:!0,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}]}},R=u([r({selector:`ids-side-nav-item`,imports:[C,y,N,k],template:`
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
    `,styles:[L]})],R)})))()}var z,B,V,H;function init_side_nav_stories(){return(init_side_nav_stories=e((()=>{n(),init__virtual_angular_jit_style_inline_0b5a8320b1a5f96a(),w(),a(),v(),x(),f(),p(),o(),A(),init_side_nav$1(),init_side_nav_item$1(),z=class SideNavDestinationStory{router=s(S);currentUrl=d(this.router.events.pipe(m(e=>e instanceof b),c(e=>e.urlAfterRedirects)),{initialValue:this.router.url})},z=u([r({template:`{{ currentUrl() }}`,styles:[P]})],z),B={title:`Design System/Side Nav`,component:I,tags:[`autodocs`],decorators:[E({providers:[_([{path:`**`,component:z}],h())]}),T({imports:[R,z,g]}),D(e=>`
                <div class="side-nav-story">
                    ${e}
                    <router-outlet />
                </div>
            `)],parameters:{docs:{source:{excludeDecorators:!0}}}},V={argTypes:{ariaLabel:{control:`text`,table:{category:`Inputs`}}},args:{ariaLabel:`Lorem ipsum`},render:e=>({props:e,template:j(`ids-side-nav`).withInput(`ariaLabel`,e.ariaLabel,``).withContent(j(`ids-side-nav-item`).withInput(`link`,`/project`).withInput(`label`,`Projekt`).withInput(`icon`,`folder`),j(`ids-side-nav-item`).withInput(`link`,`/layers`).withInput(`label`,`Warstwy`).withInput(`icon`,`dashboard`),j(`ids-side-nav-item`).withInput(`link`,`/generating`).withInput(`label`,`Generowanie`).withInput(`icon`,`rocket_launch`),j(`ids-side-nav-item`).withInput(`link`,`/disabled`).withInput(`label`,`Zablokowane`).withInput(`disabled`,!0).withInput(`icon`,`block`)).build(),styles:[`
            .side-nav-story {
                display: flex;
                height: 320px;
            }
            `]})},H=[`Default`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}})))()}init_side_nav_stories();export{V as Default,H as __namedExportsOrder,B as default};