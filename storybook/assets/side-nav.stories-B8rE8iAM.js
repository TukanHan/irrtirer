import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{I as t,Nr as n,Vn as r,Xn as i,Zn as a,h as o,k as s,l as c,m as l,zr as u}from"./core-_WelOpXh.js";import{r as d,t as f}from"./rxjs-interop-CluD5p7h.js";import{i as p,r as m}from"./skip-B24Hjqnn.js";import{a as h,c as g,i as _,l as v,n as y,o as b,r as x,s as S,t as C}from"./_router_module-chunk-Bw-vYr-b.js";import{a as w,c as T,o as E}from"./iframe-BjOmSAsQ.js";import{n as D,t as O}from"./icon-CfgdiOY2.js";import{n as k,t as A}from"./tooltip.directive-BiF1TR6q.js";var j;function M(){return(M=e((()=>{j=`
        :host {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    `})))()}var N;function P(){return(P=e((()=>{N=`:host{z-index:1;background-color:var(--ids-sidenav-surface-color);height:100%;padding:8px 0;display:block}`})))()}var F;function I(){return(I=e((()=>{u(),P(),l(),F=class{},F=n([s({selector:`ids-side-nav`,template:`<ng-content />`,styles:[N]})],F)})))()}var L;function R(){return(R=e((()=>{L=`:host{display:block}:host .ids-side-nav-item{--ids-side-nav-overlay-opacity:0;--irr-icon-size:32px;border-radius:var(--ids-radius-none);isolation:isolate;color:var(--ids-text-muted-color);cursor:pointer;outline:0;padding:12px;transition:color .2s,text-shadow .2s;display:flex;position:relative}:host .ids-side-nav-item:before{content:"";z-index:-1;background-color:var(--ids-color-highlight);opacity:var(--ids-side-nav-overlay-opacity);pointer-events:none;transition:opacity .2s,background-color .2s;position:absolute;inset:0}:host .ids-side-nav-item:hover:not([aria-disabled=true]),:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){color:var(--ids-text-muted-hover-color)}:host .ids-side-nav-item:hover:not([aria-disabled=true]):not(:active){--ids-side-nav-overlay-opacity:.05}:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){--ids-side-nav-overlay-opacity:.1}:host .ids-side-nav-item:active:not([aria-disabled=true]){--ids-side-nav-overlay-opacity:.15}:host .ids-side-nav-item.ids-side-nav-item--active{--irr-icon-font-weight:300px;color:var(--ids-text-highlight-color);background-color:color-mix(in srgb, var(--ids-color-highlight) 10%, transparent);text-shadow:0 0 4px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-faint), transparent), 0 0 8px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-subtle), transparent)}:host .ids-side-nav-item[aria-disabled=true]{cursor:default;opacity:.5;pointer-events:none}`})))()}var z;function B(){return(B=e((()=>{u(),R(),l(),x(),k(),z=class{link=o.required();label=o(``);disabled=o(!1,{transform:c});static propDecorators={link:[{type:t,args:[{isSignal:!0,alias:`link`,required:!0,transform:void 0}]}],label:[{type:t,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}]}},z=n([s({selector:`ids-side-nav-item`,imports:[C,y,A],template:`
        <a
            class="ids-side-nav-item"
            [routerLink]="disabled() ? null : link()"
            routerLinkActive="ids-side-nav-item--active"
            [attr.aria-disabled]="disabled() ? 'true' : null"
            [attr.aria-label]="label() || null"
            [attr.tabindex]="disabled() ? -1 : null"
            [idsTooltip]="label()"
            idsTooltipPosition="right"
        >
            <ng-content />
        </a>
    `,styles:[L]})],z)})))()}var V,H,U,W;function G(){return(G=e((()=>{u(),M(),w(),D(),l(),v(),x(),f(),p(),i(),I(),B(),V=class{router=r(S);currentUrl=d(this.router.events.pipe(m(e=>e instanceof b),a(e=>e.urlAfterRedirects)),{initialValue:this.router.url})},V=n([s({template:`{{ currentUrl() }}`,styles:[j]})],V),H={title:`Design System/Side Nav`,component:F,tags:[`autodocs`],decorators:[E({providers:[_([{path:`**`,component:V}],h())]}),T({imports:[z,O,V,g]})]},U={render:()=>({template:`
            <div class="side-nav-story">
                <ids-side-nav>
                    <nav aria-label="Przykładowa nawigacja">
                        <ids-side-nav-item link="/project" label="Projekt">
                            <mat-icon class="material-symbols-outlined">folder</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/layers" label="Warstwy">
                            <mat-icon class="material-symbols-outlined">dashboard</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/generating" label="Generowanie">
                            <mat-icon class="material-symbols-outlined">rocket_launch</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/disabled" label="Zablokowane" [disabled]="true">
                            <mat-icon class="material-symbols-outlined">block</mat-icon>
                        </ids-side-nav-item>
                    </nav>
                </ids-side-nav>
                <router-outlet />
            </div>
        `,styles:[`
            .side-nav-story {
                display: flex;
                height: 320px;
            }

            nav {
                display: flex;
                flex-direction: column;
            }
            `]})},W=[`Default`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <div class="side-nav-story">
                <ids-side-nav>
                    <nav aria-label="Przykładowa nawigacja">
                        <ids-side-nav-item link="/project" label="Projekt">
                            <mat-icon class="material-symbols-outlined">folder</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/layers" label="Warstwy">
                            <mat-icon class="material-symbols-outlined">dashboard</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/generating" label="Generowanie">
                            <mat-icon class="material-symbols-outlined">rocket_launch</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/disabled" label="Zablokowane" [disabled]="true">
                            <mat-icon class="material-symbols-outlined">block</mat-icon>
                        </ids-side-nav-item>
                    </nav>
                </ids-side-nav>
                <router-outlet />
            </div>
        \`,
    styles: [\`
            .side-nav-story {
                display: flex;
                height: 320px;
            }

            nav {
                display: flex;
                flex-direction: column;
            }
            \`]
  })
}`,...U.parameters?.docs?.source}}}})))()}G();export{U as Default,W as __namedExportsOrder,H as default};