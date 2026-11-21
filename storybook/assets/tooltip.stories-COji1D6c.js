import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{I as t,M as n,N as r,Nr as i,Vn as a,h as o,k as s,m as c,yn as l,zr as u}from"./core-_WelOpXh.js";import{h as d,n as f,u as p,v as m}from"./_overlay-module-chunk-C6S_l1Ke.js";import{a as h,c as g}from"./iframe-BI1eqltw.js";import{n as _,t as v}from"./flat-button-DKx5TrF-.js";import{n as y,t as b}from"./ids-panel-1L6njI-D.js";var x;function S(){return(S=e((()=>{x=`:host{display:block}:host .ids-tooltip-panel{--ids-panel-padding:.375rem .5rem;max-width:20rem;color:var(--ids-content-color);font-size:.875rem;line-height:1.25}`})))()}var C;function w(){return(w=e((()=>{u(),S(),y(),c(),C=class{text=o.required();static propDecorators={text:[{type:t,args:[{isSignal:!0,alias:`text`,required:!0,transform:void 0}]}]}},C=i([s({selector:`ids-tooltip-panel`,template:`
        <div class="ids-panel ids-tooltip-panel" role="tooltip">
            {{ text() }}
        </div>
    `,styles:[x,b]})],C)})))()}var T;function E(){return(E=e((()=>{u(),c(),p(),m(),w(),T=class{idsTooltip=o.required();idsTooltipPosition=o(`auto`);host=a(r);overlay=a(f);destroyRef=a(l);overlayRef;positionStrategy;constructor(){this.destroyRef.onDestroy(()=>this.closePanel())}onMouseEnter(){this.openPanel()}onMouseLeave(){this.closePanel()}onFocusIn(){this.openPanel()}onFocusOut(){this.closePanel()}onViewportResize(){this.updatePositions()}openPanel(){if(this.overlayRef)return;this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.host).withPositions(this.getPositions()).withPush(!0).withViewportMargin(8),this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,scrollStrategy:this.overlay.scrollStrategies.reposition(),hasBackdrop:!1});let e=new d(C);this.overlayRef.attach(e).setInput(`text`,this.idsTooltip())}closePanel(){this.overlayRef?.dispose(),this.overlayRef=void 0,this.positionStrategy=void 0}updatePositions(){this.overlayRef&&this.positionStrategy&&(this.positionStrategy.withPositions(this.getPositions()),this.overlayRef.updatePosition())}getPositions(){let e=this.idsTooltipPosition();if(e!==`auto`)return this.getPositionsFor(e);let t=this.host.nativeElement.getBoundingClientRect();return t.top<=32?this.getPositionsFor(`bottom`):t.left<=32?this.getPositionsFor(`right`):t.right>=window.innerWidth-32?this.getPositionsFor(`left`):this.getPositionsFor(`bottom`)}getPositionsFor(e){let t=this.getPosition(e);return[t,...[this.getPosition(`bottom`),this.getPosition(`top`),this.getPosition(`right`),this.getPosition(`left`)].filter(e=>e.originX!==t.originX||e.originY!==t.originY||e.overlayX!==t.overlayX||e.overlayY!==t.overlayY)]}getPosition(e){switch(e){case`top`:return{originX:`center`,originY:`top`,overlayX:`center`,overlayY:`bottom`,offsetY:-8};case`right`:return{originX:`end`,originY:`center`,overlayX:`start`,overlayY:`center`,offsetX:8};case`left`:return{originX:`start`,originY:`center`,overlayX:`end`,overlayY:`center`,offsetX:-8};case`bottom`:return{originX:`center`,originY:`bottom`,overlayX:`center`,overlayY:`top`,offsetY:8};default:return{originX:`center`,originY:`bottom`,overlayX:`center`,overlayY:`top`,offsetY:8}}}static ctorParameters=()=>[];static propDecorators={idsTooltip:[{type:t,args:[{isSignal:!0,alias:`idsTooltip`,required:!0,transform:void 0}]}],idsTooltipPosition:[{type:t,args:[{isSignal:!0,alias:`idsTooltipPosition`,required:!1,transform:void 0}]}]}},T=i([n({selector:`[idsTooltip]`,host:{"(mouseenter)":`onMouseEnter()`,"(mouseleave)":`onMouseLeave()`,"(focusin)":`onFocusIn()`,"(focusout)":`onFocusOut()`,"(window:resize)":`onViewportResize()`}})],T)})))()}var D,O,k;function A(){return(A=e((()=>{h(),_(),E(),w(),D={title:`Design System/Tooltip`,component:T,tags:[`autodocs`],decorators:[g({imports:[v,T,C]})],argTypes:{idsTooltip:{control:`text`,description:`Treść wyświetlana w panelu tooltipa.`,table:{category:`Inputs`}},idsTooltipPosition:{control:`inline-radio`,options:[`auto`,`top`,`right`,`bottom`,`left`],description:`Preferowana pozycja tooltipa. W trybie auto pozycja jest dobrana względem krawędzi viewportu.`,table:{category:`Inputs`}},buttonPosition:{control:`inline-radio`,options:[`left`,`center`,`right`],description:`Położenie przycisku, które pozwala przetestować zachowanie trybu auto.`,table:{category:`Playground`}}}},O={args:{buttonPosition:`center`,idsTooltip:`Przykładowy tooltip`,idsTooltipPosition:`auto`},render:e=>({props:e,template:`
            <div
                class="tooltip-playground"
                [class.tooltip-playground--left]="buttonPosition === 'left'"
                [class.tooltip-playground--right]="buttonPosition === 'right'"
            >
                <ids-flat-button
                    [idsTooltip]="idsTooltip"
                    [idsTooltipPosition]="idsTooltipPosition"
                >
                    Lorem Ipsum
                </ids-flat-button>
            </div>
        `,styles:[`
                .tooltip-playground {
                    display: flex;
                    min-height: 240px;
                    align-items: center;
                    justify-content: center;
                }

                .tooltip-playground--left {
                    justify-content: flex-start;
                }

                .tooltip-playground--right {
                    justify-content: flex-end;
                }
            `]})},k=[`Default`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    buttonPosition: 'center',
    idsTooltip: 'Przykładowy tooltip',
    idsTooltipPosition: 'auto'
  },
  render: args => ({
    props: args,
    template: \`
            <div
                class="tooltip-playground"
                [class.tooltip-playground--left]="buttonPosition === 'left'"
                [class.tooltip-playground--right]="buttonPosition === 'right'"
            >
                <ids-flat-button
                    [idsTooltip]="idsTooltip"
                    [idsTooltipPosition]="idsTooltipPosition"
                >
                    Lorem Ipsum
                </ids-flat-button>
            </div>
        \`,
    styles: [\`
                .tooltip-playground {
                    display: flex;
                    min-height: 240px;
                    align-items: center;
                    justify-content: center;
                }

                .tooltip-playground--left {
                    justify-content: flex-start;
                }

                .tooltip-playground--right {
                    justify-content: flex-end;
                }
            \`]
  })
}`,...O.parameters?.docs?.source}}}})))()}A();export{O as Default,k as __namedExportsOrder,D as default};