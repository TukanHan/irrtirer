import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{I as t,Kn as n,M as r,N as i,Nr as a,Vn as o,h as s,k as c,m as l,zr as u}from"./core-_WelOpXh.js";import{l as d,t as f}from"./_overlay-module-chunk-CZ4x2s8y.js";import{a as p,c as m}from"./iframe-DoPIYHic.js";import{n as h,t as g}from"./framed-button-Dc_dwfO4.js";var _;function v(){return(v=e((()=>{u(),l(),_=class{menu=s.required();host=o(i);onClicked(){this.menu().toggle(this.host.nativeElement)}static propDecorators={menu:[{type:t,args:[{isSignal:!0,alias:`menu`,required:!0,transform:void 0}]}]}},_=a([r({selector:`ids-flat-button[idsMenuTrigger], ids-framed-button[idsMenuTrigger]`,host:{"(clicked)":`onClicked()`}})],_)})))()}var y;function b(){return(b=e((()=>{y=`.ids-panel{border:1px solid var(--ids-border-color);background-color:color-mix(in srgb, var(--ids-panel-color) 75%, transparent);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);box-shadow:0 10px 30px color-mix(in srgb, black var(--ids-shadow-layer-1-transparent-mix), transparent);border-radius:6px;padding:.5rem 1rem;display:block}`})))()}var x;function S(){return(S=e((()=>{u(),b(),l(),d(),x=class{host=o(i);isOpen=n(!1);origin=n(this.host.nativeElement);positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`}];toggle(e){this.origin.set(e),this.isOpen.update(e=>!e)}close(){this.isOpen.set(!1)}},x=a([c({selector:`ids-menu`,imports:[f],template:`
        <ng-template
            cdkConnectedOverlay
            [cdkConnectedOverlayOrigin]="origin()"
            [cdkConnectedOverlayOpen]="isOpen()"
            [cdkConnectedOverlayPositions]="positions"
            [cdkConnectedOverlayPush]="true"
            (overlayOutsideClick)="close()"
        >
            <div class="ids-panel">
                <ng-content />
            </div>
        </ng-template>
    `,styles:[y]})],x)})))()}var C,w,T;function E(){return(E=e((()=>{p(),h(),v(),S(),C={title:`Design System/Menu`,component:x,tags:[`autodocs`],decorators:[m({imports:[g,_]})]},w={render:()=>({template:`
            <ids-framed-button idsMenuTrigger [menu]="menu">
                Open menu
            </ids-framed-button>
            <ids-menu #menu>
                <p class="example">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </ids-menu>
        `,styles:[`.example { width: 150px; }`]})},T=[`Default`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <ids-framed-button idsMenuTrigger [menu]="menu">
                Open menu
            </ids-framed-button>
            <ids-menu #menu>
                <p class="example">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </ids-menu>
        \`,
    styles: [\`.example { width: 150px; }\`]
  })
}`,...w.parameters?.docs?.source}}}})))()}E();export{w as Default,T as __namedExportsOrder,C as default};