import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{F as t,Hr as n,Ir as r,P as i,R as a,W as o,Wn as s,Yn as c,b as l,h as u,j as d,l as f,m as p}from"./core-CEfZiV_p.js";import{t as m,u as h}from"./_overlay-module-chunk-CrSR2nLD.js";import{a as g,c as _}from"./iframe-BikvtDrA.js";import{n as v,t as y}from"./icon-BYpyUK2H.js";import{n as b,t as x}from"./framed-button-Dox7ZKHc.js";import{n as S,t as C}from"./ids-panel-BUaGBXz6.js";var w;function T(){return(T=e((()=>{n(),p(),w=class{idsMenuTriggerFor=u.required();host=s(t);onClicked(){this.idsMenuTriggerFor().toggle(this.host.nativeElement)}static propDecorators={idsMenuTriggerFor:[{type:a,args:[{isSignal:!0,alias:`idsMenuTriggerFor`,required:!0,transform:void 0}]}]}},w=r([i({selector:`ids-flat-button[idsMenuTriggerFor], ids-framed-button[idsMenuTriggerFor]`,host:{"(clicked)":`onClicked()`}})],w)})))()}var E;function D(){return(D=e((()=>{E=`:host{display:none}.ids-menu-panel{--ids-panel-padding:.25rem .25rem;flex-direction:column;min-width:200px;display:flex}`})))()}var O;function k(){return(k=e((()=>{n(),D(),S(),p(),h(),O=class{panelClass=u();viewportMargin=8;host=s(t);isOpen=c(!1);origin=c(this.host.nativeElement);positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`}];toggle(e){this.origin.set(e),this.isOpen.update(e=>!e)}close(){this.isOpen.set(!1)}static propDecorators={panelClass:[{type:a,args:[{isSignal:!0,alias:`panelClass`,required:!1,transform:void 0}]}]}},O=r([d({selector:`ids-menu`,imports:[m],template:`
        <ng-template
            cdkConnectedOverlay
            [cdkConnectedOverlayOrigin]="origin()"
            [cdkConnectedOverlayOpen]="isOpen()"
            [cdkConnectedOverlayPositions]="positions"
            [cdkConnectedOverlayPush]="true"
            [cdkConnectedOverlayViewportMargin]="viewportMargin"
            (overlayOutsideClick)="close()"
        >
            <div class="ids-panel ids-menu-panel" [class]="panelClass()">
                <ng-content />
            </div>
        </ng-template>
    `,styles:[E,C]})],O)})))()}var A;function j(){return(j=e((()=>{A=`:host{display:block}:host .ids-menu-item{--ids-menu-action-overlay-opacity:0;border-radius:var(--ids-radius-medium);isolation:isolate;cursor:pointer;width:100%;color:var(--ids-text-muted-color);white-space:nowrap;text-shadow:0px 0px 6px color-mix(in srgb, var(--ids-text-muted-color) var(--ids-shadow-strength-faint), transparent);outline:0;align-items:center;gap:.5rem;padding:.25rem .75rem;transition:color .2s;display:flex;position:relative}:host .ids-menu-item:before{content:"";z-index:-1;border-radius:inherit;background-color:var(--ids-element-surface-contrast-color);opacity:var(--ids-menu-action-overlay-opacity);pointer-events:none;transition:opacity .2s;position:absolute;inset:0}:host .ids-menu-item:hover:not(:disabled),:host .ids-menu-item:focus-visible:not(:disabled){color:var(--ids-text-muted-hover-color)}:host .ids-menu-item:hover:not(:disabled){--ids-menu-action-overlay-opacity:.05}:host .ids-menu-item:focus-visible:not(:disabled){--ids-menu-action-overlay-opacity:.1}:host .ids-menu-item:active:not(:disabled){--ids-menu-action-overlay-opacity:.15}:host .ids-menu-item:disabled{cursor:default;opacity:.5}`})))()}var M;function N(){return(N=e((()=>{n(),j(),p(),M=class{clicked=l();disabled=u(!1,{transform:f});static propDecorators={clicked:[{type:o,args:[`clicked`]}],disabled:[{type:a,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}]}},M=r([d({selector:`ids-menu-item`,template:`
        <button class="ids-menu-item ids-menu-item-label" type="button" [disabled]="disabled()" (click)="clicked.emit($event)">
            <ng-content />
        </button>
    `,styles:[A]})],M)})))()}var P,F,I;function L(){return(L=e((()=>{g(),b(),T(),k(),N(),v(),P={title:`Design System/Menu`,component:O,tags:[`autodocs`],decorators:[_({imports:[x,w,M,y]})]},F={render:()=>({template:`
            <ids-framed-button [idsMenuTriggerFor]="menu">
                Open menu
            </ids-framed-button>
            <ids-menu #menu>
                <ids-menu-item (clicked)="menu.close()">View details</ids-menu-item>
                <ids-menu-item (clicked)="menu.close()"><mat-icon class="material-symbols-outlined">draw</mat-icon>Rename</ids-menu-item>
                <ids-menu-item [disabled]="true">Archive</ids-menu-item>
            </ids-menu>
        `})},I=[`Default`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}}})))()}L();export{F as Default,I as __namedExportsOrder,P as default};