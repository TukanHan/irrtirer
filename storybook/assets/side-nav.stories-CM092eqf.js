import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{Br as t,F as n,H as r,Jn as i,Kr as a,_ as o,ar as s,g as c,ir as l,u}from"./core-GKNYu18h.js";import{a as d,c as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y}from"./_router_module-chunk-344PTqTz.js";import{n as b,t as x}from"./filter-CMkaearn.js";import{f as S,i as C,n as w,o as T,r as E,u as D}from"./iframe-DaCqzhBR.js";import{a as O,n as k,t as A}from"./public-api-96xPSl9r.js";import{n as j,t as M}from"./elem-builder-Cho_rnz6.js";import{n as N,t as P}from"./icon-BHU_fdwf.js";import{n as F,t as I}from"./tooltip-Uc4-LX0c.js";var L;function init__virtual_angular_jit_style_inline_0b5a8320b1a5f96a(){return(init__virtual_angular_jit_style_inline_0b5a8320b1a5f96a=e((()=>{L=`
        :host {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    `})))()}var R;function init_side_nav(){return(init_side_nav=e((()=>{R=`:host{z-index:1;background-color:var(--ids-color-surface-panel);height:100%;padding:8px 0;display:block}`})))()}var z;function init_side_nav$1(){return(init_side_nav$1=e((()=>{a(),init_side_nav(),c(),z=class IdsSideNav{ariaLabel=o(``);static propDecorators={ariaLabel:[{type:r,args:[{isSignal:!0,alias:`ariaLabel`,required:!1,transform:void 0}]}]}},z=t([n({selector:`ids-side-nav`,template:`<nav [attr.aria-label]="ariaLabel() || null"><ng-content /></nav>`,styles:[R]})],z)})))()}var B;function init_side_nav_item(){return(init_side_nav_item=e((()=>{B=`:host{display:block}:host .ids-side-nav-item{--ids-side-nav-overlay-opacity:0;--ids-icon-size:32px;border-radius:var(--ids-radius-none);isolation:isolate;color:var(--ids-color-text-muted);cursor:pointer;outline:0;padding:12px;transition:--ids-icon-weight .2s,color .2s,text-shadow .2s;display:flex;position:relative}:host .ids-side-nav-item:before{content:"";z-index:-1;background-color:var(--ids-color-highlight);opacity:var(--ids-side-nav-overlay-opacity);pointer-events:none;transition:opacity .2s,background-color .2s;position:absolute;inset:0}:host .ids-side-nav-item:hover:not([aria-disabled=true]),:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){color:var(--ids-color-text-strong)}:host .ids-side-nav-item:hover:not([aria-disabled=true]):not(:active){--ids-side-nav-overlay-opacity:.05}:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){--ids-side-nav-overlay-opacity:.1}:host .ids-side-nav-item:active:not([aria-disabled=true]){--ids-icon-weight:300;--ids-side-nav-overlay-opacity:.15}:host .ids-side-nav-item[aria-current=page]{--ids-icon-weight:300;color:var(--ids-color-text-highlight);background-color:color-mix(in srgb, var(--ids-color-highlight) 10%, transparent);text-shadow:0 0 4px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-faint), transparent), 0 0 8px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-subtle), transparent)}:host .ids-side-nav-item[aria-disabled=true]{cursor:default;opacity:.5;pointer-events:none}`})))()}var V;function init_side_nav_item$1(){return(init_side_nav_item$1=e((()=>{a(),init_side_nav_item(),c(),_(),N(),F(),V=class IdsSideNavItem{link=o.required();label=o(``);icon=o.required();disabled=o(!1,{transform:u});static propDecorators={link:[{type:r,args:[{isSignal:!0,alias:`link`,required:!0,transform:void 0}]}],label:[{type:r,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],icon:[{type:r,args:[{isSignal:!0,alias:`icon`,required:!0,transform:void 0}]}],disabled:[{type:r,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}]}},V=t([n({selector:`ids-side-nav-item`,imports:[y,h,I,P],template:`
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
            <ids-icon [name]="icon()" />
        </a>
    `,styles:[B]})],V)})))()}var H,U,W,G,K;function init_side_nav_stories(){return(init_side_nav_stories=e((()=>{a(),init__virtual_angular_jit_style_inline_0b5a8320b1a5f96a(),c(),D(),m(),_(),w(),b(),l(),A(),j(),init_side_nav$1(),init_side_nav_item$1(),H=class SideNavDestinationStory{router=i(v);currentUrl=S(this.router.events.pipe(x(e=>e instanceof g),s(e=>e.urlAfterRedirects)),{initialValue:this.router.url})},H=t([n({template:`{{ currentUrl() }}`,styles:[L]})],H),U={title:`Design System/Side Nav`,component:z,subcomponents:{IdsSideNavItem:V},tags:[`autodocs`],decorators:[E({providers:[p([{path:`**`,component:H}],d())]}),T({imports:[V,H,f]})]},W={decorators:[C(e=>`
                <div class="side-nav-story">
                    ${e}
                    <router-outlet />
                </div>
            `)],parameters:{docs:{source:{excludeDecorators:!0}}},args:{ariaLabel:`Lorem ipsum`},render:e=>({props:e,template:M(`ids-side-nav`).withInput(`ariaLabel`,e.ariaLabel,``).withContent(M(`ids-side-nav-item`).withInput(`link`,`/aldoria`).withInput(`label`,`Aldoria`).withInput(`icon`,`folder`),M(`ids-side-nav-item`).withInput(`link`,`/velmora`).withInput(`label`,`Velmora`).withInput(`icon`,`dashboard`),M(`ids-side-nav-item`).withInput(`link`,`/kharzun`).withInput(`label`,`Kharzun`).withInput(`icon`,`rocket_launch`),M(`ids-side-nav-item`).withInput(`link`,`/ostravel`).withInput(`label`,`Ostravel`).withInput(`disabled`,!0).withInput(`icon`,`block`)).build(),styles:[`
            .side-nav-story {
                display: flex;
                height: 320px;
            }
            `]})},G={decorators:[T({imports:[k]})],parameters:{controls:{disable:!0},pseudo:O(`a`)},render:()=>({props:{sections:[{name:`default`,link:`/lorem`,disabled:!1},{name:`current`,link:`/`,disabled:!1},{name:`disabled`,link:`/lorem`,disabled:!0}],states:[`rest`,`hover`,`focus-visible`,`active`]},template:`
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