import{$b as Ae,A as Xt,Aa as ue,Ab as bt,B as Zt,Bb as Ne,C as A,Ca as N,Cb as Oe,D as Z,E as Pt,Ea as B,Eb as ht,Ed as Ye,F as d,Fa as O,Fd as Xe,Ga as C,Gb as ft,Gd as Ze,H as Jt,Ha as ct,Hb as vt,Hd as Je,I as Kt,Ia as pe,Ib as Ie,Ic as Be,J as te,Ja as q,Jb as Te,Jd as Ft,K as ee,Ka as V,Kb as W,Kc as kt,Kd as Ke,L as at,Lc as X,Ld as D,M as Rt,Ma as lt,Mc as qe,N as oe,Na as mt,Nb as Pe,Nc as Ve,O as j,Oa as et,Ob as Re,Oc as Ue,Pa as Dt,Pb as ze,Qa as P,Qb as T,Qc as We,Ra as be,Rb as $,Rc as it,Rd as to,Sa as f,Sb as De,Sc as St,T as ie,Ta as R,Tb as Ee,Ua as z,Ud as Gt,Vb as Le,Vc as $e,W as J,X as ae,Xb as gt,Y as re,Yb as H,Z as l,Za as he,Zb as Q,_b as Y,_c as He,a as b,aa as ne,ac as S,b as w,bb as ut,bc as _t,cc as At,db as v,ea as p,eb as g,fa as F,fb as fe,ga as rt,gb as U,ha as nt,hc as je,hd as Qe,ib as ve,ic as yt,j as It,ja as de,jb as ge,jc as Fe,k as Tt,kb as I,kc as Ge,l as L,la as K,lb as _e,m as Ht,ma as se,mb as pt,n as Qt,na as ce,oa as le,ob as ot,pb as M,qa as dt,qb as Et,r as Yt,ra as st,rb as ye,sa as h,sb as ke,ta as s,tb as Se,ua as m,ub as xe,uc as jt,va as k,vb as we,wa as G,wb as Ce,xa as tt,ya as me,yb as Me,za as zt,zb as Lt}from"./chunk-OCX76DDL.js";var eo=(()=>{class o{transform(t){return t?t.split(" "):[]}static \u0275fac=function(e){return new(e||o)};static \u0275pipe=nt({name:"sentenceToWord",type:o,pure:!0})}return o})();function To(o,a){if(o&1&&(G(0,"span",3),f(1),tt()),o&2){let t=a.$implicit,e=a.$index;Dt("animation-delay",e*.75+"s"),P("normal",!0),l(),z(" ",t," ")}}var oo=(()=>{class o{translate=d(T);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["app-author"]],hostAttrs:[1,"flex","h-full","items-center","justify-center","bg-surface"],decls:8,vars:7,consts:[[1,"flex","gap-2.5","items-baseline","heading-hero"],[1,"word-fade-in",3,"normal","animationDelay"],[1,"word-fade-in","heading-hero-accent"],[1,"word-fade-in"]],template:function(e,i){if(e&1&&(G(0,"div",0),he(1),v(2,"sentenceToWord"),dt(3,To,2,5,"span",1,le),G(5,"span",2),f(6),v(7,"translate"),tt()()),e&2){let r=g(2,3,i.translate.instant("aboutAuthor.itWas"));l(3),st(r),l(2),Dt("animation-delay",r.length*.75+1+"s"),l(),z(" ",g(7,5,"aboutAuthor.me")," ")}},dependencies:[$,eo],encapsulation:2})}return o})();var io=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["app-project"]],hostAttrs:[1,"flex","h-full","items-center","justify-center","bg-surface"],decls:3,vars:3,consts:[[1,"heading-hero"]],template:function(e,i){e&1&&(G(0,"div",0),f(1),v(2,"translate"),tt()),e&2&&(l(),R(g(2,1,"aboutProject.content")))},dependencies:[$],encapsulation:2})}return o})();var ao=[{label:"km",denominator:1e5},{label:"m",denominator:100},{label:"cm",denominator:1},{label:"mm",denominator:.1},{label:"\xB5m",denominator:1e-4},{label:"nm",denominator:1e-7}],ro=(()=>{class o{transform(t){if(!t)return"0 x 0";let e=this.selectUnit(Math.max(t.width,t.height));return this.formatViewport(t,e)}selectUnit(t){for(let e of ao)if(t>e.denominator)return e;return ao.at(-1)}formatValue(t,e){return(t/e.denominator).toFixed(2)}formatViewport(t,e){return`${this.formatValue(t.width,e)} x ${this.formatValue(t.height,e)} ${e.label}`}static \u0275fac=function(e){return new(e||o)};static \u0275pipe=nt({name:"sizeDisplay",type:o,pure:!0})}return o})();var Po=["*"];function Ro(o,a){o&1&&(s(0,"span",3),C(1),m())}function zo(o,a){if(o&1&&(s(0,"a",1),zt(1,4),m()),o&2){let t=B(),e=et(1);h("href",t.link(),ae),l(),h("ngTemplateOutlet",e)}}function Do(o,a){if(o&1&&(s(0,"a",2),zt(1,4),m()),o&2){let t=B(),e=et(1);h("routerLink",t.link()),l(),h("ngTemplateOutlet",e)}}var no=(()=>{class o{link=I.required();linkType=I("internal");static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["ids-flat-link"]],inputs:{link:[1,"link"],linkType:[1,"linkType"]},ngContentSelectors:Po,decls:4,vars:1,consts:[["linkContent",""],["target","_blank","rel","noopener noreferrer",1,"ids-flat-action","ids-flat-link",3,"href"],["routerLinkActive","ids-active-link",1,"ids-flat-action","ids-flat-link",3,"routerLink"],[1,"ids-flat-action-content","ids-button-label"],[3,"ngTemplateOutlet"]],template:function(e,i){e&1&&(O(),de(0,Ro,2,0,"ng-template",null,0,fe),se(2,zo,2,2,"a",1)(3,Do,2,2,"a",2)),e&2&&(l(2),ce(i.linkType()==="external"?2:3))},dependencies:[ke,ft,vt],styles:["[_nghost-%COMP%]{--%NS%ids-glow-color: var(--%NS%ids-neutral);--%NS%ids-button-content-color: var(--%NS%ids-text-highlight-color)}[_nghost-%COMP%]   .ids-flat-action[_ngcontent-%COMP%]{--%NS%ids-button-text-shadow-idle: var(--%NS%ids-button-text-shadow-layer-1);--%NS%ids-button-text-shadow-hover: var(--%NS%ids-button-text-shadow-layer-1), var(--%NS%ids-button-text-shadow-layer-2)}[_nghost-%COMP%]   .ids-flat-action.ids-active-link[_ngcontent-%COMP%]{--%NS%ids-flat-action-overlay-opacity: .15}[_nghost-%COMP%]   .ids-flat-action.ids-active-link[_ngcontent-%COMP%]   .ids-flat-action-content[_ngcontent-%COMP%]{font-weight:700}",'.ids-flat-action[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;padding:max(0px,calc((var(--%NS%ids-flat-button-size, 36px) - var(--%NS%ids-flat-button-icon-size, 24px)) / 2));border:0;outline:none;position:relative;border-radius:var(--%NS%ids-action-radius);--%NS%ids-flat-action-overlay-opacity: 0;--%NS%ids-button-text-shadow-layer-1: 0 0 4px color-mix(in srgb, var(--%NS%ids-button-content-color) var(--%NS%ids-shadow-strength-faint), transparent);--%NS%ids-button-text-shadow-layer-2: 0 0 8px color-mix(in srgb, var(--%NS%ids-button-content-color) var(--%NS%ids-shadow-strength-subtle), transparent);--%NS%ids-button-text-shadow-idle: none;--%NS%ids-button-text-shadow-hover: var(--%NS%ids-button-text-shadow-layer-1);--%NS%ids-button-text-shadow: var(--%NS%ids-button-text-shadow-idle)}.ids-flat-action[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-color:var(--%NS%ids-glow-color);border-radius:inherit;opacity:var(--%NS%ids-flat-action-overlay-opacity);pointer-events:none;transition:opacity .2s ease,background-color .2s ease}.ids-flat-action[_ngcontent-%COMP%]:active:not(:disabled), .ids-flat-action[_ngcontent-%COMP%]:focus-visible:not(:disabled), .ids-flat-action[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus-visible){--%NS%ids-button-text-shadow: var(--%NS%ids-button-text-shadow-hover)}.ids-flat-action[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus-visible):not(:active){--%NS%ids-flat-action-overlay-opacity: .05}.ids-flat-action[_ngcontent-%COMP%]:focus-visible:not(:disabled):not(:active){--%NS%ids-flat-action-overlay-opacity: .1}.ids-flat-action[_ngcontent-%COMP%]:active:not(:disabled){--%NS%ids-flat-action-overlay-opacity: .15}.ids-flat-action[_ngcontent-%COMP%]   .ids-flat-action-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px;padding:0 6px;position:relative;z-index:1;color:var(--%NS%ids-overridden-button-content-color, var(--%NS%ids-button-content-color));text-shadow:var(--%NS%ids-button-text-shadow);transition:color .2s ease,text-shadow .2s ease;--%NS%irr-icon-margin-left: -6px;--%NS%irr-icon-margin-right: -6px}',"[_nghost-%COMP%]{display:inline-block;--%NS%ids-action-radius: 9999px}"]})}return o})();var Eo=["*"],Bt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["ids-side-nav"]],ngContentSelectors:Eo,decls:1,vars:0,template:function(e,i){e&1&&(O(),C(0))},styles:["[_nghost-%COMP%]{display:block;z-index:1;height:100%;padding:8px 0;background-color:var(--%NS%ids-sidenav-surface-color)}"]})}return o})();var Lo=["*"],qt=(()=>{class o{link=I.required();label=I("");disabled=I(!1,{transform:M});static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["ids-side-nav-item"]],inputs:{link:[1,"link"],label:[1,"label"],disabled:[1,"disabled"]},ngContentSelectors:Lo,decls:2,vars:5,consts:[["routerLinkActive","ids-side-nav-item--active","idsTooltipPosition","right",1,"ids-side-nav-item",3,"routerLink","idsTooltip"]],template:function(e,i){e&1&&(O(),s(0,"a",0),C(1),m()),e&2&&(h("routerLink",i.disabled()?null:i.link())("idsTooltip",i.label()),K("aria-disabled",i.disabled()?"true":null)("aria-label",i.label()||null)("tabindex",i.disabled()?-1:null))},dependencies:[ft,vt,kt],styles:['[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]{--%NS%ids-side-nav-overlay-opacity: 0;--%NS%irr-icon-size: 32px;display:flex;padding:12px;border-radius:var(--%NS%ids-radius-none);outline:0;position:relative;isolation:isolate;color:var(--%NS%ids-text-muted-color);cursor:pointer;transition:color .2s ease,text-shadow .2s ease}[_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;z-index:-1;background-color:var(--%NS%ids-neutral);opacity:var(--%NS%ids-side-nav-overlay-opacity);pointer-events:none;transition:opacity .2s ease,background-color .2s ease}[_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]:hover:not([aria-disabled=true]), [_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]:focus-visible:not([aria-disabled=true]){color:var(--%NS%ids-text-muted-hover-color)}[_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]:hover:not([aria-disabled=true]):not(:active){--%NS%ids-side-nav-overlay-opacity: .05}[_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]:focus-visible:not([aria-disabled=true]){--%NS%ids-side-nav-overlay-opacity: .1}[_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]:active:not([aria-disabled=true]){--%NS%ids-side-nav-overlay-opacity: .15}[_nghost-%COMP%]   .ids-side-nav-item.ids-side-nav-item--active[_ngcontent-%COMP%]{color:var(--%NS%ids-neutral);background-color:color-mix(in srgb,var(--%NS%ids-neutral) 10%,transparent);text-shadow:0 0 4px color-mix(in srgb,var(--%NS%ids-neutral) var(--%NS%ids-shadow-strength-faint),transparent),0 0 8px color-mix(in srgb,var(--%NS%ids-neutral) var(--%NS%ids-shadow-strength-subtle),transparent)}[_nghost-%COMP%]   .ids-side-nav-item[aria-disabled=true][_ngcontent-%COMP%]{cursor:default;opacity:.5;pointer-events:none}']})}return o})();var Ao=(o,a)=>a.iconName;function jo(o,a){if(o&1){let t=ue();s(0,"ids-flat-button",2),N("click",function(){let i=Jt(t).$implicit,r=B();return Kt(r.onClick(i))}),s(1,"mat-icon",3),f(2),m()()}if(o&2){let t=a.$implicit,e=B();P("active",t.visibility()==="on"),h("hidden",t.visibility()==="hidden")("disabled",t.visibility()==="disabled")("idsTooltip",e.translate.instant(t.tooltipKey)),l(2),R(t.iconName)}}var so=(()=>{class o{viewportSize=I.required();actions=I.required();translate=d(T);onClick(t){this.isActive(t.visibility())&&t.onClick()}isActive(t){return t==="off"||t==="on"}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["app-ribbon"]],inputs:{viewportSize:[1,"viewportSize"],actions:[1,"actions"]},decls:5,vars:3,consts:[["idsTooltipPosition","bottom",1,"action",3,"hidden","disabled","active","idsTooltip"],[1,"size-display"],["idsTooltipPosition","bottom",1,"action",3,"click","hidden","disabled","idsTooltip"],[1,"material-symbols-outlined"]],template:function(e,i){e&1&&(dt(0,jo,3,6,"ids-flat-button",0,Ao),s(2,"span",1),f(3),v(4,"sizeDisplay"),m()),e&2&&(st(i.actions()),l(3),R(g(4,1,i.viewportSize())))},dependencies:[Q,H,yt,kt,ro],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;height:40px;position:sticky;box-shadow:0 0 10px 2px #000000a8;padding:0 20px;gap:6px}[_nghost-%COMP%]   .size-display[_ngcontent-%COMP%]{color:var(--%NS%color-contrast-medium);text-align:right;margin-left:auto}[_nghost-%COMP%]   .action[_ngcontent-%COMP%]{--%NS%ids-flat-button-size: 32px;--%NS%ids-overridden-button-content-color: var(--%NS%color-contrast-medium)}[_nghost-%COMP%]   .action.active[_ngcontent-%COMP%]{--%NS%ids-overridden-button-content-color: var(--%NS%color-contrast-highest)}"]})}return o})();var _=class o{x=0;y=0;static zero=new o(0,0);constructor(a,t){this.x=a,this.y=t}};var E=class{position;zoom;pxSize;scaleFactor;cmSize;startWorldPos;endWorldPos;constructor(a,t,e,i=1){this.position=a,this.zoom=t,this.pxSize=e,this.scaleFactor=i,this.cmSize=this.calculateCmSize(),this.startWorldPos=this.calculateStartWorldPos(),this.endWorldPos=this.calculateEndWorldPos()}calculateCmSize(){return{width:X.pxToCm(this.pxSize.width)*this.zoom,height:X.pxToCm(this.pxSize.height)*this.zoom}}calculateStartWorldPos(){return new _(this.position.x-this.cmSize.width/2,this.position.y-this.cmSize.height/2)}calculateEndWorldPos(){return new _(this.position.x+this.cmSize.width/2,this.position.y+this.cmSize.height/2)}getViewportPosition(a){return new _(this.getViewportXPosition(a.x),this.getViewportYPosition(a.y))}getViewportXPosition(a){return(a-this.startWorldPos.x)/this.cmSize.width*this.pxSize.width}getViewportYPosition(a){return(a-this.startWorldPos.y)/this.cmSize.height*this.pxSize.height}getWorldPosition(a){return new _(this.getWorldXPosition(a.x),this.getWorldYPosition(a.y))}getWorldXPosition(a){return a/this.pxSize.width*this.cmSize.width+this.startWorldPos.x}getWorldYPosition(a){return a/this.pxSize.height*this.cmSize.height+this.startWorldPos.y}};var xt=class o extends qe{gridBaseColor="#424242";getOrder(){return-1}drawObject(a,t){let e=t.startWorldPos,i=t.endWorldPos,r=Math.pow(10,Math.ceil(Math.log(t.zoom)/Math.log(10)))/10,c=this.calculateGridColorsForZoom(r,t.zoom),n=[];for(let u=Math.floor(e.y/r)*r;i.y>u;u+=r){let x=t.getViewportYPosition(u),Nt=new _(0,x),Ot=new _(t.pxSize.width,x);n.push({start:Nt,end:Ot,depthLevel:o.getLineDepthLevel(u,r)})}for(let u=Math.floor(e.x/r)*r;i.x>u;u+=r){let x=t.getViewportXPosition(u),Nt=new _(x,0),Ot=new _(x,t.pxSize.height);n.push({start:Nt,end:Ot,depthLevel:o.getLineDepthLevel(u,r)})}a.lineWidth=t.scaleFactor,n.sort((u,x)=>x.depthLevel-u.depthLevel).forEach(u=>{this.drawLine(a,u.start,u.end,o.getLineColorForDepth(u.depthLevel,c))}),a.lineWidth=1}static getLineColorForDepth(a,t){return t[Math.min(a,t.length-1)]}static getLineDepthLevel(a,t){if(a===0)return 0;let e=Math.round(a/t);return e%100===0?1:e%10===0?2:3}drawLine(a,t,e,i){a.strokeStyle=i,a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(e.x,e.y),a.stroke()}calculateGridColorsForZoom(a,t){let e=(t-a)/(a*10-a),i=Ve(this.gridBaseColor);return[this.gridBaseColor,i.alpha(o.linearInterpolation(.66,.8,1-e)).string(),i.alpha(o.linearInterpolation(.33,.66,1-e)).string(),i.alpha(o.linearInterpolation(0,.33,1-e)).string()]}static linearInterpolation(a,t,e){return a+(t-a)*e}};var co={isMovable:!0,showGrid:!0,minZoom:1e-9,maxZoom:1e9,backgroundColor:"transparent",canvasGridColor:"#3f3f3f"};var Fo=["canvas"],lo=(()=>{class o{clicked=ge();options=_e({});canvas=pt.required("canvas");currentOptions=U(()=>b(b({},co),this.options()));_viewport=j(new E(_.zero,1,{width:0,height:0}));viewport=this._viewport.asReadonly();isDragging=!1;ctx=U(()=>this.canvas().nativeElement.getContext("2d"));gridObject;canvasObjects=[];handleMouseUp=this.onMouseUp.bind(this);handleMouseMove=this.onMouseMove.bind(this);handleMouseDown=this.onMouseDown.bind(this);handleWheelMove=this.onWheelMove.bind(this);resizeObserver=new ResizeObserver(()=>this.onResize());cd=d(ot);configChangeEffect=ye(()=>{this.configureCanvas(),this.redraw()});ngOnInit(){this.canvas().nativeElement.addEventListener("wheel",this.handleWheelMove),this.canvas().nativeElement.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp),this.resizeObserver.observe(this.canvas().nativeElement)}configureCanvas(){this.configureGrid()}configureGrid(){this.canvasObjects=this.canvasObjects.filter(e=>e!==this.gridObject);let t=this.currentOptions();t.showGrid&&(this.gridObject=new xt,t.canvasGridColor&&(this.gridObject.gridBaseColor=t.canvasGridColor),this.addCanvasObject(this.gridObject))}ngOnDestroy(){this.canvas().nativeElement.removeEventListener("wheel",this.handleWheelMove),this.canvas().nativeElement.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp),this.resizeObserver.unobserve(this.canvas().nativeElement)}onWheelMove(t){let e=this._viewport(),i=e.getWorldPosition(new _(t.offsetX,t.offsetY)),r=e.zoom*(t.deltaY/1e3),c=Math.max(Math.min(e.zoom+r,this.currentOptions().maxZoom),this.currentOptions().minZoom)/e.zoom,n=new _(i.x-(i.x-e.position.x)*c,i.y-(i.y-e.position.y)*c);this._viewport.set(new E(n,e.zoom*c,e.pxSize)),this.redraw(),t.preventDefault()}onMouseDown(t){this.clicked.emit(this._viewport().getWorldPosition(new _(t.offsetX,t.offsetY))),this.currentOptions().isMovable!==!1&&(document.body.style.cursor="grab",this.isDragging=!0,this.cd.markForCheck())}onMouseMove(t){if(this.currentOptions().isMovable!==!1&&this.isDragging){let e=this._viewport(),i=new _(e.position.x-X.pxToCm(t.movementX)*e.zoom,e.position.y-X.pxToCm(t.movementY)*e.zoom);this._viewport.set(new E(i,e.zoom,e.pxSize)),this.redraw()}}onMouseUp(){this.currentOptions().isMovable!==!1&&(document.body.style.cursor="",this.isDragging=!1,this.cd.markForCheck())}onResize(){let t=this.canvas().nativeElement.getBoundingClientRect(),e={height:t.height,width:t.width};this.canvas().nativeElement.width=e.width,this.canvas().nativeElement.height=e.height;let i=this._viewport();this._viewport.set(new E(i.position,i.zoom,e)),this.redraw()}setViewport(t=null,e=null,i=!1){let r=this._viewport();this._viewport.set(new E(e??r.position,t??r.zoom,r.pxSize)),i&&this.redraw()}addCanvasObject(t,e=!1){this.canvasObjects.push(t),this.canvasObjects.sort((i,r)=>i.getOrder()-r.getOrder()),t.setParent(this),e&&this.redraw()}removeObject(t){this.canvasObjects=this.canvasObjects.filter(e=>e!==t),this.canvasObjects.sort((e,i)=>e.getOrder()-i.getOrder())}removeObjects(t=!1){this.canvasObjects=this.canvasObjects.filter(e=>e===this.gridObject),t&&this.redraw()}redraw(){let t=this.ctx(),e=this._viewport();o.drawBackground(t,e.pxSize,this.currentOptions().backgroundColor),o.drawObjects(t,this.canvasObjects,e),this.cd.markForCheck()}saveAsImage(t){let e=this._viewport(),i=t?.scaleFactor??1,r={width:e.pxSize.width*i,height:e.pxSize.height*i},c=new E(e.position,e.zoom/i,r,i),n=new OffscreenCanvas(r.width,r.height),u=n.getContext("2d"),x=t?.backgroundColor??this.currentOptions().backgroundColor;return o.drawBackground(u,r,x),o.drawObjects(u,this.canvasObjects,c),n.convertToBlob({type:"image/png"})}static drawBackground(t,e,i){t.clearRect(0,0,e.width,e.height),t.fillStyle=i,t.fillRect(0,0,e.width,e.height)}static drawObjects(t,e,i){for(let r of e)r.getVisibility()&&r.drawObject(t,i)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["ac-active-canvas"]],viewQuery:function(e,i){e&1&&lt(i.canvas,Fo,5),e&2&&mt()},inputs:{options:[1,"options"]},outputs:{clicked:"clicked",options:"optionsChange"},decls:2,vars:0,consts:[["canvas",""]],template:function(e,i){e&1&&me(0,"canvas",null,0)},styles:["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   canvas[_ngcontent-%COMP%]{height:100%;width:100%}"]})}return o})();var Go=["activeCanvas"],mo=(()=>{class o{store=d(Y);translate=d(T);toolService=d(Ft);destroyRef=d(at);tilesLinkDisabled$=this.store.select(At).pipe(W(this.destroyRef),L(t=>!t));sectorsLinkDisabled$=this.store.select(At).pipe(W(this.destroyRef),L(t=>!t));mosaicGeneratingLinkDisabled$=this.store.select(je).pipe(W(this.destroyRef),L(t=>!t.length));activeCanvas=pt.required("activeCanvas");viewportSize=U(()=>this.activeCanvas().viewport().cmSize);ribbonActions=j([]);canvasOptions=U(()=>({canvasGridColor:this.toolService.canvasGridColor()}));wasInitialized=!1;onActivate(t){let e=t.sectionEntered(this.activeCanvas(),!this.wasInitialized);this.ribbonActions.set(e.ribbon),this.wasInitialized=!0}onDeactivate(){this.ribbonActions.set([]),this.activeCanvas().removeObjects()}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["app-tool"]],viewQuery:function(e,i){e&1&&lt(i.activeCanvas,Go,5),e&2&&mt()},features:[ut([Ft,Ke])],decls:25,vars:16,consts:[["activeCanvas",""],[1,"tool-sidenav-container"],["link","config",3,"label"],[1,"material-symbols-outlined"],["link","tray",3,"label","disabled"],["link","sectors",3,"label","disabled"],["link","generating",3,"label","disabled"],[1,"content"],[3,"actions","viewportSize"],[1,"main"],[1,"canvas",3,"options"],[1,"panel"],[3,"activate","deactivate"]],template:function(e,i){e&1&&(s(0,"div",1)(1,"ids-side-nav")(2,"nav")(3,"ids-side-nav-item",2)(4,"mat-icon",3),f(5,"flowsheet"),m()(),s(6,"ids-side-nav-item",4),v(7,"async"),s(8,"mat-icon",3),f(9,"dashboard"),m()(),s(10,"ids-side-nav-item",5),v(11,"async"),s(12,"mat-icon",3),f(13,"view_in_ar"),m()(),s(14,"ids-side-nav-item",6),v(15,"async"),s(16,"mat-icon",3),f(17,"rocket_launch"),m()()()(),s(18,"div",7),k(19,"app-ribbon",8),s(20,"div",9),k(21,"ac-active-canvas",10,0),s(23,"div",11)(24,"router-outlet",12),N("activate",function(c){return i.onActivate(c)})("deactivate",function(){return i.onDeactivate()}),m()()()()()),e&2&&(l(3),h("label",i.translate.instant("tool.nav.projectSettings")),l(3),h("label",i.translate.instant("tool.nav.projectSettings"))("disabled",g(7,10,i.tilesLinkDisabled$)),l(4),h("label",i.translate.instant("tool.nav.sectors"))("disabled",g(11,12,i.sectorsLinkDisabled$)),l(4),h("label",i.translate.instant("tool.nav.generation"))("disabled",g(15,14,i.mosaicGeneratingLinkDisabled$)),l(5),h("actions",i.ribbonActions())("viewportSize",i.viewportSize()),l(2),h("options",i.canvasOptions()))},dependencies:[Q,H,Bt,qt,ht,Te,so,lo,Se],styles:[".tool-sidenav-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;position:absolute;inset:55px 0 0}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;background-color:var(--%NS%color-surface)}.content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:calc(100% - 40px)}.content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]{display:flex;flex:1 1 0}.content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{position:relative;width:250px;box-sizing:border-box;border-left:1px solid var(--%NS%color-contrast-light)}"]})}return o})();var uo=[{path:"",redirectTo:"project",pathMatch:"full"},{path:"tool",component:mo,loadChildren:()=>import("./chunk-BC22QIQB.js").then(o=>o.toolRoutes)},{path:"project",component:io},{path:"author",component:oo}];var po=_t(null,S(D.projectCreated,(o,{project:a})=>b({},a)),S(D.projectCanceled,()=>null),S(D.mosaicWidthChanged,(o,{width:a})=>w(b({},o),{config:w(b({},o.config),{mosaicWidth:a})})),S(D.sectorModified,(o,{modifiedSector:a})=>w(b({},o),{sectors:Gt.addOrUpdate([...o.sectors],a,t=>t.id===a.id)})),S(D.sectorRemoved,(o,{sector:a})=>w(b({},o),{sectors:[...o.sectors.filter(t=>t.id!==a.id)]})),S(D.sectorShifted,(o,{prevIndex:a,newIndex:t})=>w(b({},o),{sectors:Gt.moveElemInArray([...o.sectors],a,t)})),S(D.tilesSetCommitted,(o,{tilesSet:a})=>w(b({},o),{tilesSets:[...o.tilesSets.filter(t=>t.id!==a.id),a]})),S(D.tilesSetRemoved,(o,{removedTilesSet:a})=>w(b({},o),{tilesSets:o.tilesSets.filter(t=>t!==a)})));var bo="state";function Bo(o,a){localStorage.setItem(a,JSON.stringify(o))}function qo(o){let a=localStorage.getItem(o);return a?JSON.parse(a):null}function ho(o){let a=!0;return function(t,e){let i=o(t,e);if(a){a=!1;let r=qo(bo);return Vo(r),b(b({},i),r)}return Bo(i,bo),i}}function Vo(o){o?.mosaicProject?.tilesSets.forEach(a=>{a.tiles.forEach(t=>{t.vertices.forEach(e=>Ue.restore(e))})})}var Uo=/^\.{1,2}$/,vo=new Z("TRANSLATE_HTTP_LOADER_CONFIG"),Wo=class wt{http;config;constructor(){this.config=b({resources:[],enforceLoading:!1,useHttpBackend:!1},d(vo)),this.http=this.config.useHttpBackend?new Lt(d(Me)):d(Lt)}getTranslation(t){let e=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"",i=this.config.resources.map(r=>{let c;return Ht(()=>{let n=encodeURIComponent(t);return c=`${typeof r=="string"?`${r}${n}.json`:`${r.prefix}${n}${r.suffix??".json"}`}${e}`,Uo.test(t)?Tt(()=>new Error(`"${t}" is a path segment, not a language`)):this.http.get(c)}).pipe(Yt(n=>(this.reportError({lang:t,resource:r,url:c,error:n}),this.config.failOnError?Tt(()=>n):It({}))))});return i.length===0?It({}):Qt(i).pipe(L(r=>r.reduce((c,n)=>this.config.flatten?b(b({},c),go(n??{})):ze(c,n),{})))}reportError(t){if(this.config.onLoadError)try{this.config.onLoadError(t)}catch(e){console.warn("@ngx-translate/http-loader: onLoadError callback failed:",e)}else this.config.failOnError||console.warn(`@ngx-translate/http-loader: error loading translation for ${t.lang}:`,t.error)}static \u0275fac=function(e){return new(e||wt)};static \u0275prov=Zt({token:wt,factory:wt.\u0275fac})};function go(o){return Object.fromEntries(Object.entries(o).flatMap(([a,t])=>t!==null&&typeof t=="object"&&!Array.isArray(t)&&Object.keys(t).length?Object.entries(go(t)).map(([e,i])=>[`${a}.${e}`,i]):[[a,t]]))}function _o(o={}){if("resources"in o&&o.resources)return fo(o);let a=o;return fo({enforceLoading:a.enforceLoading??!1,useHttpBackend:a.useHttpBackend??!1,failOnError:a.failOnError??!1,flatten:a.flatten??!1,onLoadError:a.onLoadError,resources:[{prefix:a.prefix??"/assets/i18n/",suffix:a.suffix??".json"}]})}function fo(o={}){return[{provide:vo,useValue:b({resources:["/assets/i18n/"]},o)},{provide:Re,useClass:Wo}]}var yo=_t({},S(it.languageChanged,(o,{lang:a})=>w(b({},o),{lang:a})),S(it.themeChanged,(o,{theme:a})=>w(b({},o),{theme:a})));var ko={providers:[Ie(uo),bt(),Ae({mosaicProject:po,userPreferences:yo},{metaReducers:[ho]}),De({loader:_o({prefix:"/irrtirer/assets/i18n/",suffix:".json"}),fallbackLang:"pl",lang:"pl"}),{provide:to,useValue:{appearance:"outline"}}]};var $o=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275dir=rt({type:o,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return o})(),So=(()=>{class o{_elementRef=d(J);_platform=d(Ge);_document=d(ee);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=(function(){let t=["*",[["mat-toolbar-row"]]];return p({type:o,selectors:[["mat-toolbar"]],contentQueries:function(r,c,n){if(r&1&&ct(n,$o,5),r&2){let u;q(u=V())&&(c._toolbarRows=u)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(r,c){r&2&&(be(c.color?"mat-"+c.color:""),P("mat-toolbar-multiple-rows",c._toolbarRows.length>0)("mat-toolbar-single-row",c._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(r,c){r&1&&(O(t),C(0),C(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})})()}return o})();var xo=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=F({type:o});static \u0275inj=A({imports:[gt]})}return o})();var wo={github:"github-mark.svg",pl:"pl.svg",gb:"gb.svg"},Co=(()=>{class o{matIconRegistry;domSanitizer;constructor(t,e){this.matIconRegistry=t,this.domSanitizer=e;for(let i in wo)this.matIconRegistry.addSvgIcon(i,this.domSanitizer.bypassSecurityTrustResourceUrl(`../irrtirer/assets/icons/${wo[i]}`))}static \u0275fac=function(e){return new(e||o)(Pt(Le),Pt(Oe))};static \u0275mod=F({type:o});static \u0275inj=A({providers:[bt(Ne())],imports:[we]})}return o})();var Wt=(()=>{class o{_listeners=[];notify(t,e){for(let i of this._listeners)i(t,e)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(e=>t!==e)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(e){return new(e||o)};static \u0275prov=ie({token:o,factory:o.\u0275fac})}return o})();var Ct=class{source;value;constructor(a,t){this.source=a,this.value=t}},Qo={provide:Qe,useExisting:Xt(()=>$t),multi:!0},Mo=new Z("MatRadioGroup"),Yo=new Z("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),$t=(()=>{class o{_changeDetector=d(ot);_value=null;_name=d(jt).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Rt;_radios;color;get name(){return this._name}set name(t){this._name=t,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition=t==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(t){this._selected=t,this.value=t?t.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markRadiosForCheck()}get required(){return this._required}set required(t){this._required=t,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(t=>t===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(t=>{t.name=this.name,t._markForCheck()})}_updateSelectedRadioFromValue(){let t=this._selected!==null&&this._selected.value===this._value;this._radios&&!t&&(this._selected=null,this._radios.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Ct(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(t=>t._markForCheck())}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetector.markForCheck()}static \u0275fac=function(e){return new(e||o)};static \u0275dir=rt({type:o,selectors:[["mat-radio-group"]],contentQueries:function(e,i,r){if(e&1&&ct(r,Mt,5),e&2){let c;q(c=V())&&(i._radios=c)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",M],required:[2,"required","required",M],disabledInteractive:[2,"disabledInteractive","disabledInteractive",M]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[ut([Qo,{provide:Mo,useExisting:o}])]})}return o})(),Mt=(()=>{class o{_elementRef=d(J);_changeDetector=d(ot);_focusMonitor=d($e);_radioDispatcher=d(Wt);_defaultOptions=d(Yo,{optional:!0});_ngZone=d(oe);_renderer=d(ne);_uniqueId=d(jt).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===t),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(t){this._labelPosition=t}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(t){this._setDisabled(t)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(t){t!==this._required&&this._changeDetector.markForCheck(),this._required=t}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(t){this._color=t}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new Rt;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=He();_injector=d(te);constructor(){d(Ee).load(Xe);let t=d(Mo,{optional:!0}),e=d(new ve("tabindex"),{optional:!0});this.radioGroup=t,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,e&&(this.tabIndex=Et(e,0))}focus(t,e){e?this._focusMonitor.focusVia(this._inputElement,e,t):this._inputElement.nativeElement.focus(t)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((t,e)=>{t!==this.id&&e===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{!t&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Ct(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(t){if(t.stopPropagation(),!this.checked&&!this.disabled){let e=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),e&&this.radioGroup._emitChangeEvent())}}_setDisabled(t){this._disabled!==t&&(this._disabled=t,this._changeDetector.markForCheck())}_onInputClick=t=>{this.disabled&&this.disabledInteractive&&t.preventDefault()};_updateTabIndex(){let t=this.radioGroup,e;if(!t||!t.selected||this.disabled?e=this.tabIndex:e=t.selected===this?this.tabIndex:-1,e!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute("tabindex",e+""),this._previousTabIndex=e,re(()=>{queueMicrotask(()=>{t&&t.selected&&t.selected!==this&&document.activeElement===i&&(t.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=(function(){let t=["input"],e=["formField"];return p({type:o,selectors:[["mat-radio-button"]],viewQuery:function(c,n){if(c&1&&pe(t,5)(e,7,J),c&2){let u;q(u=V())&&(n._inputElement=u.first),q(u=V())&&(n._rippleTrigger=u.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(c,n){c&1&&N("focus",function(){return n._inputElement.nativeElement.focus()}),c&2&&(K("id",n.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),P("mat-primary",n.color==="primary")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("mat-mdc-radio-checked",n.checked)("mat-mdc-radio-disabled",n.disabled)("mat-mdc-radio-disabled-interactive",n.disabledInteractive)("_mat-animation-noopable",n._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",M],tabIndex:[2,"tabIndex","tabIndex",r=>r==null?0:Et(r)],checked:[2,"checked","checked",M],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",M],required:[2,"required","required",M],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",M]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:["*"],decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition","for"],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(c,n){c&1&&(O(),s(0,"label",2,0)(2,"span",3),k(3,"span",4),s(4,"input",5,1),N("change",function(x){return n._onInputInteraction(x)}),m(),s(6,"span",6),k(7,"span",7)(8,"span",8),m(),s(9,"span",9),k(10,"span",10),m()(),s(11,"span",11),C(12),m()()),c&2&&(h("labelPosition",n.labelPosition)("for",n.inputId),l(2),P("mdc-radio--disabled",n.disabled),l(2),h("id",n.inputId)("checked",n.checked)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),K("name",n.name)("value",n.value)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),l(5),h("matRippleTrigger",n._rippleTrigger.nativeElement)("matRippleDisabled",n._isRippleDisabled())("matRippleCentered",!0))},dependencies:[Ye,Je],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return o})(),No=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=F({type:o});static \u0275inj=A({imports:[Ze,Mt,gt]})}return o})();var Oo=(()=>{class o{translate=d(T);themeService=d(St);destroyRef=d(at);store=d(Y);selectedLanguage=j(this.translate.getCurrentLang()??"pl");themeMode=Pe(this.themeService.theme$);ngOnInit(){this.translate.onLangChange.pipe(W(this.destroyRef)).subscribe(t=>this.selectedLanguage.set(t.lang))}languageChanged(t){this.translate.use(t.value),this.store.dispatch(it.languageChanged({lang:t.value}))}toggleTheme(){let t=this.themeMode()==="dark"?"light":"dark";this.themeService.changeTheme(t)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["app-toolbar"]],decls:36,vars:24,consts:[["menu",""],[1,"toolbar"],["link","/tool","linkType","internal"],[1,"text-base"],["link","/project","linkType","internal"],["link","/author","linkType","internal"],[1,"flex-1"],["variant","accent",1,"toolbar-item","mode",3,"clicked"],[1,"material-symbols-outlined"],["variant","accent",1,"toolbar-item",3,"idsMenuTriggerFor"],[1,"block","min-w-5"],["panelClass","language-panel"],[1,"lang-radio-group",3,"change","value"],["value","pl",1,"lang-radio"],["svgIcon","pl"],["value","en",1,"lang-radio"],["svgIcon","gb"],["link","https://github.com/TukanHan/irrtirer","linkType","external"],["svgIcon","github"]],template:function(e,i){if(e&1&&(s(0,"mat-toolbar",1)(1,"ids-flat-link",2)(2,"span",3),f(3),v(4,"translate"),m()(),s(5,"ids-flat-link",4),f(6),v(7,"translate"),m(),s(8,"ids-flat-link",5),f(9),v(10,"translate"),m(),k(11,"span",6),s(12,"ids-flat-button",7),N("clicked",function(){return i.toggleTheme()}),s(13,"mat-icon",8),f(14),m()(),s(15,"ids-flat-button",9)(16,"mat-icon"),f(17,"language"),m(),s(18,"span",10),f(19),v(20,"titlecase"),m()(),s(21,"ids-menu",11,0)(23,"mat-radio-group",12),N("change",function(c){return i.languageChanged(c)}),s(24,"mat-radio-button",13),f(25),v(26,"translate"),k(27,"mat-icon",14),m(),s(28,"mat-radio-button",15),f(29),v(30,"translate"),k(31,"mat-icon",16),m()()(),s(32,"ids-flat-link",17),k(33,"mat-icon",18),f(34),v(35,"translate"),m()()),e&2){let r=et(22);l(3),R(g(4,10,"title")),l(3),z(" ",g(7,12,"aboutProject.header")," "),l(3),z(" ",g(10,14,"aboutAuthor.header")," "),l(5),R(i.themeMode()==="dark"?"dark_mode":"light_mode"),l(),h("idsMenuTriggerFor",r),l(4),R(g(20,16,i.selectedLanguage())),l(4),h("value",i.selectedLanguage()),l(2),z(" ",g(26,18,"toolbar.languages.polish")," "),l(4),z(" ",g(30,20,"toolbar.languages.english")," "),l(5),z(" ",g(35,22,"toolbar.github")," ")}},dependencies:[Q,H,xo,So,Co,No,$t,Mt,yt,no,Be,Fe,$,xe],styles:["[_nghost-%COMP%]{--%NS%mat-toolbar-standard-height: 55px;height:var(--%NS%mat-toolbar-standard-height)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]{position:fixed;padding:0 48px;z-index:2;border-bottom:1px solid var(--%NS%color-toolbar-border);--%NS%mat-toolbar-container-background-color: var(--%NS%color-surface-toolbar);--%NS%mat-toolbar-standard-height: inherit}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-item[_ngcontent-%COMP%]{--%NS%irr-icon-size: 22px;color:var(--%NS%color-primary-label)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-item.active-button[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--%NS%color-primary),transparent 90%)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .mode[_ngcontent-%COMP%]{--%NS%irr-icon-font-weight: 300;--%NS%irr-icon-button-size: 36px}  .language-panel{--%NS%ids-panel-padding: .5rem 1rem !important}.lang-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:-6px;--%NS%mat-radio-state-layer-size: 36px}.lang-radio-group[_ngcontent-%COMP%]   .lang-radio[_ngcontent-%COMP%]     .mdc-form-field{width:100%}.lang-radio-group[_ngcontent-%COMP%]   .lang-radio[_ngcontent-%COMP%]     .mdc-form-field .mdc-label{display:flex;width:100%;align-items:center;justify-content:space-between;gap:16px}"]})}return o})();var Io=(()=>{class o{title="Irrtirer";store=d(Y);translate=d(T);themeService=d(St);ngOnInit(){this.initLanguage(),this.initTheme()}initLanguage(){this.translate.addLangs(["pl","en"]),this.translate.use(this.getLanguage())}initTheme(){this.themeService.init()}getLanguage(){return this.store.selectSignal(We)()??this.translate.getBrowserLang()??"pl"}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["app-root"]],hostAttrs:[1,"flex","flex-col","h-dvh"],decls:3,vars:0,consts:[[1,"flex-1","mat-app-background"]],template:function(e,i){e&1&&(k(0,"app-toolbar"),s(1,"div",0),k(2,"router-outlet"),m())},dependencies:[ht,Oo],encapsulation:2})}return o})();Ce(Io,ko).catch(o=>console.error(o));
