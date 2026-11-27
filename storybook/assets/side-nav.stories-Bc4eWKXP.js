import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{B as t,Gr as n,N as r,_ as i,g as a,nr as o,qn as s,rr as c,u as l,zr as u}from"./core-EfmSQQJi.js";import{r as d,t as f}from"./rxjs-interop-uK7PZZCR.js";import{i as p,r as m}from"./skip-C_tNwTsk.js";import{a as h,c as g,i as _,l as v,n as y,o as b,r as x,s as S,t as C}from"./_router_module-chunk-f-cX2GhI.js";import{a as w,l as T,o as E,s as D}from"./iframe-DO4XYKHH.js";import{n as O,t as k}from"./icon-C-hyWka9.js";import{a as A,n as j,t as M}from"./public-api-kSsOUlhl.js";import{n as N,t as P}from"./elem-builder-B342_OgR.js";import{n as F,t as I}from"./tooltip-BdtEwExZ.js";var L;function init__virtual_angular_jit_style_inline_0b5a8320b1a5f96a(){return(init__virtual_angular_jit_style_inline_0b5a8320b1a5f96a=e((()=>{L=`
        :host {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    `})))()}var R;function init_side_nav(){return(init_side_nav=e((()=>{R=`:host{z-index:1;background-color:var(--ids-sidenav-surface-color);height:100%;padding:8px 0;display:block}`})))()}var z;function init_side_nav$1(){return(init_side_nav$1=e((()=>{n(),init_side_nav(),a(),z=class IdsSideNav{ariaLabel=i(``);static propDecorators={ariaLabel:[{type:t,args:[{isSignal:!0,alias:`ariaLabel`,required:!1,transform:void 0}]}]}},z=u([r({selector:`ids-side-nav`,template:`<nav [attr.aria-label]="ariaLabel() || null"><ng-content /></nav>`,styles:[R]})],z)})))()}var B;function init_side_nav_item(){return(init_side_nav_item=e((()=>{B=`:host{display:block}:host .ids-side-nav-item{--ids-side-nav-overlay-opacity:0;--irr-icon-size:32px;border-radius:var(--ids-radius-none);isolation:isolate;color:var(--ids-text-muted-color);cursor:pointer;outline:0;padding:12px;transition:color .2s,text-shadow .2s;display:flex;position:relative}:host .ids-side-nav-item .ids-side-nav-item-icon{transition:font-weight .2s}:host .ids-side-nav-item:before{content:"";z-index:-1;background-color:var(--ids-color-highlight);opacity:var(--ids-side-nav-overlay-opacity);pointer-events:none;transition:opacity .2s,background-color .2s;position:absolute;inset:0}:host .ids-side-nav-item:hover:not([aria-disabled=true]),:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){color:var(--ids-text-muted-hover-color)}:host .ids-side-nav-item:hover:not([aria-disabled=true]):not(:active){--ids-side-nav-overlay-opacity:.05}:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){--ids-side-nav-overlay-opacity:.1}:host .ids-side-nav-item:active:not([aria-disabled=true]){--irr-icon-font-weight:300;--ids-side-nav-overlay-opacity:.15}:host .ids-side-nav-item[aria-current=page]{--irr-icon-font-weight:300;color:var(--ids-text-highlight-color);background-color:color-mix(in srgb, var(--ids-color-highlight) 10%, transparent);text-shadow:0 0 4px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-faint), transparent), 0 0 8px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-subtle), transparent)}:host .ids-side-nav-item[aria-disabled=true]{cursor:default;opacity:.5;pointer-events:none}`})))()}var V;function init_side_nav_item$1(){return(init_side_nav_item$1=e((()=>{n(),init_side_nav_item(),a(),x(),F(),O(),V=class IdsSideNavItem{link=i.required();label=i(``);icon=i.required();disabled=i(!1,{transform:l});static propDecorators={link:[{type:t,args:[{isSignal:!0,alias:`link`,required:!0,transform:void 0}]}],label:[{type:t,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],icon:[{type:t,args:[{isSignal:!0,alias:`icon`,required:!0,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}]}},V=u([r({selector:`ids-side-nav-item`,imports:[C,y,I,k],template:`
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
    `,styles:[B]})],V)})))()}var H,U,W,G,K;function init_side_nav_stories(){return(init_side_nav_stories=e((()=>{n(),init__virtual_angular_jit_style_inline_0b5a8320b1a5f96a(),w(),a(),v(),x(),f(),p(),o(),M(),N(),init_side_nav$1(),init_side_nav_item$1(),H=class SideNavDestinationStory{router=s(S);currentUrl=d(this.router.events.pipe(m(e=>e instanceof b),c(e=>e.urlAfterRedirects)),{initialValue:this.router.url})},H=u([r({template:`{{ currentUrl() }}`,styles:[L]})],H),U={title:`Design System/Side Nav`,component:z,subcomponents:{IdsSideNavItem:V},tags:[`autodocs`],decorators:[E({providers:[_([{path:`**`,component:H}],h())]}),T({imports:[V,H,g]})]},W={decorators:[D(e=>`
                <div class="side-nav-story">
                    ${e}
                    <router-outlet />
                </div>
            `)],parameters:{docs:{source:{excludeDecorators:!0}}},args:{ariaLabel:`Lorem ipsum`},render:e=>({props:e,template:P(`ids-side-nav`).withInput(`ariaLabel`,e.ariaLabel,``).withContent(P(`ids-side-nav-item`).withInput(`link`,`/aldoria`).withInput(`label`,`Aldoria`).withInput(`icon`,`folder`),P(`ids-side-nav-item`).withInput(`link`,`/velmora`).withInput(`label`,`Velmora`).withInput(`icon`,`dashboard`),P(`ids-side-nav-item`).withInput(`link`,`/kharzun`).withInput(`label`,`Kharzun`).withInput(`icon`,`rocket_launch`),P(`ids-side-nav-item`).withInput(`link`,`/ostravel`).withInput(`label`,`Ostravel`).withInput(`disabled`,!0).withInput(`icon`,`block`)).build(),styles:[`
            .side-nav-story {
                display: flex;
                height: 320px;
            }
            `]})},G={decorators:[T({imports:[j]})],parameters:{controls:{disable:!0},pseudo:A(`a`)},render:()=>({props:{sections:[{name:`default`,link:`/lorem`,disabled:!1},{name:`current`,link:`/`,disabled:!1},{name:`disabled`,link:`/lorem`,disabled:!0}],states:[`rest`,`hover`,`focus-visible`,`active`]},template:`
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <figure class="side-nav-state">
                        <ids-side-nav-item [link]="section.link" [label]="state" [disabled]="section.disabled" icon="folder" />
                        <figcaption>{{ state }}</figcaption>
                    </figure>
                </ng-template>
            </sb-state-matrix>
        `,styles:[`
            .side-nav-state {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                margin: 0;
                font-size: 0.75rem;
            }
            `]})},K=[`Default`,`States`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  decorators: [
  // The layout and router outlet only show where an item navigates, so they stay out of the code snippet.
  componentWrapperDecorator(story => \`
                <div class="side-nav-story">
                    \${story}
                    <router-outlet />
                </div>
            \`)],
  parameters: {
    docs: {
      source: {
        excludeDecorators: true
      }
    }
  },
  args: {
    ariaLabel: 'Lorem ipsum'
  },
  render: args => ({
    props: args,
    template: elem('ids-side-nav').withInput('ariaLabel', args.ariaLabel, '').withContent(elem('ids-side-nav-item').withInput('link', '/aldoria').withInput('label', 'Aldoria').withInput('icon', 'folder'), elem('ids-side-nav-item').withInput('link', '/velmora').withInput('label', 'Velmora').withInput('icon', 'dashboard'), elem('ids-side-nav-item').withInput('link', '/kharzun').withInput('label', 'Kharzun').withInput('icon', 'rocket_launch'), elem('ids-side-nav-item').withInput('link', '/ostravel').withInput('label', 'Ostravel').withInput('disabled', true).withInput('icon', 'block')).build(),
    styles: [\`
            .side-nav-story {
                display: flex;
                height: 320px;
            }
            \`]
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
      // The story runs at \`/\`, so an item linking to \`/\` is the current page.
      sections: [{
        name: 'default',
        link: '/lorem',
        disabled: false
      }, {
        name: 'current',
        link: '/',
        disabled: false
      }, {
        name: 'disabled',
        link: '/lorem',
        disabled: true
      }],
      states: ['rest', 'hover', 'focus-visible', 'active']
    },
    // Items are icon-only, so each cell gets a caption with its state.
    template: \`
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <figure class="side-nav-state">
                        <ids-side-nav-item [link]="section.link" [label]="state" [disabled]="section.disabled" icon="folder" />
                        <figcaption>{{ state }}</figcaption>
                    </figure>
                </ng-template>
            </sb-state-matrix>
        \`,
    styles: [\`
            .side-nav-state {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                margin: 0;
                font-size: 0.75rem;
            }
            \`]
  })
}`,...G.parameters?.docs?.source}}}})))()}init_side_nav_stories();export{W as Default,G as States,K as __namedExportsOrder,U as default};