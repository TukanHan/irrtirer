import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{F as t,Hr as n,Ir as r,P as i,R as a,W as o,Wn as s,Yn as c,b as l,h as u,j as d,l as f,m as p}from"./core-CEfZiV_p.js";import{t as m,u as h}from"./_overlay-module-chunk-CrSR2nLD.js";import{a as g,c as _}from"./iframe-C-iYSAmD.js";import{n as v,t as y}from"./icon-DAIleJwC.js";import{n as b,t as x}from"./clickable-BT4g8ff6.js";import{n as S,t as C}from"./framed-button-4WItWxAX.js";import{n as w,t as T}from"./ids-panel-BUaGBXz6.js";var E;function D(){return(D=e((()=>{n(),p(),b(),E=class{idsMenuTriggerFor=u.required();host=s(t);constructor(){s(x,{self:!0}).clicked.subscribe(()=>this.idsMenuTriggerFor().toggle(this.host.nativeElement))}static ctorParameters=()=>[];static propDecorators={idsMenuTriggerFor:[{type:a,args:[{isSignal:!0,alias:`idsMenuTriggerFor`,required:!0,transform:void 0}]}]}},E=r([i({selector:`[idsMenuTriggerFor]`})],E)})))()}var O;function k(){return(k=e((()=>{O=`:host{display:none}.ids-menu-panel{--ids-panel-padding:.25rem .25rem;flex-direction:column;min-width:200px;display:flex}`})))()}var A;function j(){return(j=e((()=>{n(),k(),w(),p(),h(),A=class{panelClass=u();viewportMargin=8;host=s(t);isOpen=c(!1);origin=c(this.host.nativeElement);positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`}];toggle(e){this.origin.set(e),this.isOpen.update(e=>!e)}close(){this.isOpen.set(!1)}static propDecorators={panelClass:[{type:a,args:[{isSignal:!0,alias:`panelClass`,required:!1,transform:void 0}]}]}},A=r([d({selector:`ids-menu`,imports:[m],template:`
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
    `,styles:[O,T]})],A)})))()}var M;function N(){return(N=e((()=>{M=`:host{display:block}:host .ids-menu-item{--ids-menu-action-overlay-opacity:0;border-radius:var(--ids-radius-medium);isolation:isolate;cursor:pointer;width:100%;color:var(--ids-text-muted-color);white-space:nowrap;text-shadow:0px 0px 6px color-mix(in srgb, var(--ids-text-muted-color) var(--ids-shadow-strength-faint), transparent);outline:0;align-items:center;gap:.5rem;padding:.25rem .75rem;transition:color .2s;display:flex;position:relative}:host .ids-menu-item:before{content:"";z-index:-1;border-radius:inherit;background-color:var(--ids-element-surface-contrast-color);opacity:var(--ids-menu-action-overlay-opacity);pointer-events:none;transition:opacity .2s;position:absolute;inset:0}:host .ids-menu-item:hover:not(:disabled),:host .ids-menu-item:focus-visible:not(:disabled){color:var(--ids-text-muted-hover-color)}:host .ids-menu-item:hover:not(:disabled){--ids-menu-action-overlay-opacity:.05}:host .ids-menu-item:focus-visible:not(:disabled){--ids-menu-action-overlay-opacity:.1}:host .ids-menu-item:active:not(:disabled){--ids-menu-action-overlay-opacity:.15}:host .ids-menu-item:disabled{cursor:default;opacity:.5}`})))()}var P;function F(){return(F=e((()=>{n(),N(),p(),P=class{clicked=l();disabled=u(!1,{transform:f});static propDecorators={clicked:[{type:o,args:[`clicked`]}],disabled:[{type:a,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}]}},P=r([d({selector:`ids-menu-item`,template:`
        <button class="ids-menu-item ids-menu-item-label" type="button" [disabled]="disabled()" (click)="clicked.emit($event)">
            <ng-content />
        </button>
    `,styles:[M]})],P)})))()}var I,L,R;function z(){return(z=e((()=>{g(),S(),D(),j(),F(),v(),I={title:`Design System/Menu`,component:A,tags:[`autodocs`],decorators:[_({imports:[C,E,P,y]})]},L={render:()=>({template:`
            <ids-framed-button [idsMenuTriggerFor]="menu">
                Open menu
            </ids-framed-button>
            <ids-menu #menu>
                <ids-menu-item (clicked)="menu.close()">View details</ids-menu-item>
                <ids-menu-item (clicked)="menu.close()"><mat-icon class="material-symbols-outlined">draw</mat-icon>Rename</ids-menu-item>
                <ids-menu-item [disabled]="true">Archive</ids-menu-item>
            </ids-menu>
        `})},R=[`Default`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}}})))()}z();export{L as Default,R as __namedExportsOrder,I as default};