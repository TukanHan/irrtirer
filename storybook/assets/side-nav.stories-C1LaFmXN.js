import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{I as t,Nr as n,Vn as r,Xn as i,Zn as a,h as o,k as s,l as c,m as l,zr as u}from"./core-_WelOpXh.js";import{r as d,t as f}from"./rxjs-interop-CluD5p7h.js";import{i as p,r as m}from"./skip-B24Hjqnn.js";import{a as h,c as g,i as _,l as v,n as y,o as b,r as x,s as S,t as C}from"./_router_module-chunk-kL6hv5l4.js";import{a as w,c as T,o as E}from"./iframe-BI1eqltw.js";import{n as D,t as O}from"./icon-C9E0pUVH.js";var k;function A(){return(A=e((()=>{k=`
        :host {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    `})))()}var j;function M(){return(M=e((()=>{j=`:host{background-color:var(--ids-sidenav-surface-color);height:100%;padding:8px 0;display:block}`})))()}var N;function P(){return(P=e((()=>{u(),M(),l(),N=class{},N=n([s({selector:`ids-side-nav`,template:`<ng-content />`,styles:[j]})],N)})))()}var F;function I(){return(I=e((()=>{F=`:host{display:block}:host .ids-side-nav-item{--ids-side-nav-overlay-opacity:0;--irr-icon-size:32px;border-radius:var(--ids-radius-none);isolation:isolate;color:var(--ids-text-muted-color);cursor:pointer;outline:0;padding:12px;transition:color .2s,text-shadow .2s;display:flex;position:relative}:host .ids-side-nav-item:before{content:"";z-index:-1;background-color:var(--ids-neutral);opacity:var(--ids-side-nav-overlay-opacity);pointer-events:none;transition:opacity .2s,background-color .2s;position:absolute;inset:0}:host .ids-side-nav-item:hover:not([aria-disabled=true]),:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){color:var(--ids-text-muted-hover-color)}:host .ids-side-nav-item:hover:not([aria-disabled=true]):not(:active){--ids-side-nav-overlay-opacity:.05}:host .ids-side-nav-item:focus-visible:not([aria-disabled=true]){--ids-side-nav-overlay-opacity:.1}:host .ids-side-nav-item:active:not([aria-disabled=true]){--ids-side-nav-overlay-opacity:.15}:host .ids-side-nav-item.ids-side-nav-item--active{color:var(--ids-neutral);background-color:color-mix(in srgb, var(--ids-neutral) 10%, transparent);text-shadow:0 0 4px color-mix(in srgb, var(--ids-neutral) var(--ids-shadow-strength-faint), transparent), 0 0 8px color-mix(in srgb, var(--ids-neutral) var(--ids-shadow-strength-subtle), transparent)}:host .ids-side-nav-item[aria-disabled=true]{cursor:default;opacity:.5;pointer-events:none}`})))()}var L;function R(){return(R=e((()=>{u(),I(),l(),x(),L=class{link=o.required();disabled=o(!1,{transform:c});static propDecorators={link:[{type:t,args:[{isSignal:!0,alias:`link`,required:!0,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}]}},L=n([s({selector:`ids-side-nav-item`,imports:[C,y],template:`
        <a
            class="ids-side-nav-item"
            [routerLink]="disabled() ? null : link()"
            routerLinkActive="ids-side-nav-item--active"
            [attr.aria-disabled]="disabled() ? 'true' : null"
            [attr.tabindex]="disabled() ? -1 : null"
        >
            <ng-content />
        </a>
    `,styles:[F]})],L)})))()}var z,B,V,H;function U(){return(U=e((()=>{u(),A(),w(),D(),l(),v(),x(),f(),p(),i(),P(),R(),z=class{router=r(S);currentUrl=d(this.router.events.pipe(m(e=>e instanceof b),a(e=>e.urlAfterRedirects)),{initialValue:this.router.url})},z=n([s({template:`{{ currentUrl() }}`,styles:[k]})],z),B={title:`Design System/Side Nav`,component:N,tags:[`autodocs`],decorators:[E({providers:[_([{path:`**`,component:z}],h())]}),T({imports:[L,O,z,g]})]},V={render:()=>({template:`
            <div class="side-nav-story">
                <ids-side-nav>
                    <nav aria-label="Przykładowa nawigacja">
                        <ids-side-nav-item link="/project">
                            <mat-icon class="material-symbols-outlined">folder</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/layers">
                            <mat-icon class="material-symbols-outlined">dashboard</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/generating">
                            <mat-icon class="material-symbols-outlined">rocket_launch</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/disabled" [disabled]="true">
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
            `]})},H=[`Default`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <div class="side-nav-story">
                <ids-side-nav>
                    <nav aria-label="Przykładowa nawigacja">
                        <ids-side-nav-item link="/project">
                            <mat-icon class="material-symbols-outlined">folder</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/layers">
                            <mat-icon class="material-symbols-outlined">dashboard</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/generating">
                            <mat-icon class="material-symbols-outlined">rocket_launch</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/disabled" [disabled]="true">
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
}`,...V.parameters?.docs?.source}}}})))()}U();export{V as Default,H as __namedExportsOrder,B as default};