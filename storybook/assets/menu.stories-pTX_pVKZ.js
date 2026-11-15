import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{H as t,I as n,Kn as r,M as i,N as a,Nr as o,Vn as s,b as c,h as l,k as u,l as d,m as f,zr as p}from"./core-_WelOpXh.js";import{l as m,t as h}from"./_overlay-module-chunk-CLrTw3xy.js";import{a as g,c as _}from"./iframe-DMkLaJbb.js";import{n as v,t as y}from"./icon-BBsdwfnv.js";import{n as b,t as x}from"./framed-button-Dc_dwfO4.js";var S;function C(){return(C=e((()=>{p(),f(),S=class{idsMenuTriggerFor=l.required();host=s(a);onClicked(){this.idsMenuTriggerFor().toggle(this.host.nativeElement)}static propDecorators={idsMenuTriggerFor:[{type:n,args:[{isSignal:!0,alias:`idsMenuTriggerFor`,required:!0,transform:void 0}]}]}},S=o([i({selector:`ids-flat-button[idsMenuTriggerFor], ids-framed-button[idsMenuTriggerFor]`,host:{"(clicked)":`onClicked()`}})],S)})))()}var w;function T(){return(T=e((()=>{w=`:host{display:none}.ids-panel{padding:var(--ids-panel-padding,unset);border:1px solid var(--ids-panel-border-color);border-radius:var(--ids-panel-border-radius);background-color:color-mix(in srgb, var(--ids-panel-surface-color) 50%, transparent);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);min-width:200px;box-shadow:0 10px 30px color-mix(in srgb, black var(--ids-shadow-strength-faint), transparent);flex-direction:column;display:flex}.ids-menu-panel{--ids-panel-padding:.25rem .25rem}`})))()}var E;function D(){return(D=e((()=>{p(),T(),f(),m(),E=class{panelClass=l();host=s(a);isOpen=r(!1);origin=r(this.host.nativeElement);positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`}];toggle(e){this.origin.set(e),this.isOpen.update(e=>!e)}close(){this.isOpen.set(!1)}static propDecorators={panelClass:[{type:n,args:[{isSignal:!0,alias:`panelClass`,required:!1,transform:void 0}]}]}},E=o([u({selector:`ids-menu`,imports:[h],template:`
        <ng-template
            cdkConnectedOverlay
            [cdkConnectedOverlayOrigin]="origin()"
            [cdkConnectedOverlayOpen]="isOpen()"
            [cdkConnectedOverlayPositions]="positions"
            [cdkConnectedOverlayPush]="true"
            [cdkConnectedOverlayViewportMargin]="8"
            (overlayOutsideClick)="close()"
        >
            <div class="ids-panel ids-menu-panel" [class]="panelClass()">
                <ng-content />
            </div>
        </ng-template>
    `,styles:[w]})],E)})))()}var O;function k(){return(k=e((()=>{O=`:host{display:block}:host .ids-menu-item{border-radius:var(--ids-panel-border-radius);isolation:isolate;cursor:pointer;width:100%;color:var(--ids-text-muted-color);white-space:nowrap;text-shadow:0px 0px 6px color-mix(in srgb, var(--ids-text-muted-color) var(--ids-shadow-strength-faint), transparent);outline:0;align-items:center;gap:.5rem;padding:.25rem .75rem;transition:color .2s;display:flex;position:relative}:host .ids-menu-item:before{content:"";z-index:-1;border-radius:inherit;background-color:var(--ids-element-surface-contrast-color);opacity:0;pointer-events:none;transition:opacity .2s;position:absolute;inset:0}:host .ids-menu-item:hover:not(:disabled),:host .ids-menu-item:focus:not(:disabled){color:var(--ids-text-muted-hover-color)}:host .ids-menu-item:hover:not(:disabled):before{opacity:.05}:host .ids-menu-item:focus:not(:disabled):before{opacity:.1}:host .ids-menu-item:active:not(:disabled):before{opacity:.15}:host .ids-menu-item:disabled{cursor:default;opacity:.5}`})))()}var A;function j(){return(j=e((()=>{p(),k(),f(),A=class{clicked=c();disabled=l(!1,{transform:d});static propDecorators={clicked:[{type:t,args:[`clicked`]}],disabled:[{type:n,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}]}},A=o([u({selector:`ids-menu-item`,template:`
        <button class="ids-menu-item ids-menu-item-label" type="button" [disabled]="disabled()" (click)="clicked.emit($event)">
            <ng-content />
        </button>
    `,styles:[O]})],A)})))()}var M,N,P;function F(){return(F=e((()=>{g(),b(),C(),D(),j(),v(),M={title:`Design System/Menu`,component:E,tags:[`autodocs`],decorators:[_({imports:[x,S,A,y]})]},N={render:()=>({template:`
            <ids-framed-button [idsMenuTriggerFor]="menu">
                Open menu
            </ids-framed-button>
            <ids-menu #menu>
                <ids-menu-item (clicked)="menu.close()">View details</ids-menu-item>
                <ids-menu-item (clicked)="menu.close()"><mat-icon class="material-symbols-outlined">draw</mat-icon>Rename</ids-menu-item>
                <ids-menu-item [disabled]="true">Archive</ids-menu-item>
            </ids-menu>
        `})},P=[`Default`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <ids-framed-button [idsMenuTriggerFor]="menu">
                Open menu
            </ids-framed-button>
            <ids-menu #menu>
                <ids-menu-item (clicked)="menu.close()">View details</ids-menu-item>
                <ids-menu-item (clicked)="menu.close()"><mat-icon class="material-symbols-outlined">draw</mat-icon>Rename</ids-menu-item>
                <ids-menu-item [disabled]="true">Archive</ids-menu-item>
            </ids-menu>
        \`
  })
}`,...N.parameters?.docs?.source}}}})))()}F();export{N as Default,P as __namedExportsOrder,M as default};