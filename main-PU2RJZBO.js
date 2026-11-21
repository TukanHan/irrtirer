import{$ as Ri,$b as W,$d as ze,A as F,Aa as mt,Ab as Xi,Ba as Mt,Bc as Wt,C as li,Ca as Bi,Cb as Yi,D as Ei,Da as ci,Db as gi,E as D,Ea as zt,Eb as Bt,F as B,Fb as Ki,Fc as ge,G as mi,Ga as M,Gb as Ji,Gc as be,H as l,Hc as _e,Ia as L,Ib as jt,J as kt,Ja as N,K as St,Ka as v,Kb as Vt,L as st,La as et,Lb as Gt,M as Ot,Ma as dt,Mb as te,N as Lt,Na as z,Nb as ie,O as J,Oa as I,Ob as pt,P as nt,Q as j,Qa as Pt,Ra as Rt,Rb as ee,Rc as ue,Rd as Ce,Sa as ct,Sb as ne,Sc as Ut,Ta as ot,Tb as ae,Tc as ft,Td as vi,Ua as f,Ub as Q,Uc as ve,Ud as Me,V as at,Va as ji,Vb as gt,Vc as E,Vd as X,W as Ai,Wa as _,Wb as re,Wc as Ht,Xa as $,Xb as oe,Xc as ui,Ya as Z,Z as V,Zb as se,_ as Pi,_b as le,a as b,aa as Nt,ac as bt,ad as fe,b as A,ba as c,bb as Vi,bc as _t,bd as $t,cd as we,ce as fi,ea as Ct,f as K,fb as T,hb as w,hc as ut,ia as p,ib as x,ic as qt,j as ni,ja as O,jb as hi,k as ai,ka as lt,kb as ht,kc as Qt,l as H,la as Tt,m as zi,ma as rt,mb as Gi,n as Ii,na as di,nb as qi,nc as me,ob as G,oc as de,p as Di,pa as P,pb as Qi,pc as ce,pd as xe,q as yt,qa as tt,qb as Ft,r as Oi,ra as it,rc as he,rd as Zt,s as Li,sa as Fi,sb as q,sd as wt,t as ri,tb as R,tc as bi,td as ye,u as oi,ua as Et,ub as pi,uc as U,ud as ke,v as Ti,va as At,vb as Wi,vd as Se,wa as g,wb as Ui,xa as d,xb as Hi,xc as vt,xd as Ne,y as si,ya as h,yb as $i,yc as pe,yd as It,za as C,zb as Zi,zc as _i,zd as Xt}from"./chunk-CLLGWWH5.js";var Ie=(()=>{class e{transform(t){return t?t.split(" "):[]}static \u0275fac=function(i){return new(i||e)};static \u0275pipe=Tt({name:"sentenceToWord",type:e,pure:!0})}return e})();function dn(e,r){if(e&1&&(mt(0,"span",3),_(1),Mt()),e&2){let t=r.$implicit,i=r.$index;ot("animation-delay",i*.75+"s"),f("normal",!0),c(),Z(" ",t," ")}}var De=(()=>{class e{translate=l(Q);static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["app-author"]],hostAttrs:[1,"flex","h-full","items-center","justify-center","bg-surface"],decls:8,vars:7,consts:[[1,"flex","gap-2.5","items-baseline","heading-hero"],[1,"word-fade-in",3,"normal","animationDelay"],[1,"word-fade-in","heading-hero-accent"],[1,"word-fade-in"]],template:function(i,n){if(i&1&&(mt(0,"div",0),Vi(1),w(2,"sentenceToWord"),Et(3,dn,2,5,"span",1,Fi),mt(5,"span",2),_(6),w(7,"translate"),Mt()()),i&2){let a=x(2,3,n.translate.instant("aboutAuthor.itWas"));c(3),At(a),c(2),ot("animation-delay",a.length*.75+1+"s"),c(),Z(" ",x(7,5,"aboutAuthor.me")," ")}},dependencies:[gt,Ie],encapsulation:2})}return e})();var Oe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["app-project"]],hostAttrs:[1,"flex","h-full","items-center","justify-center","bg-surface"],decls:3,vars:3,consts:[[1,"heading-hero"]],template:function(i,n){i&1&&(mt(0,"div",0),_(1),w(2,"translate"),Mt()),i&2&&(c(),$(x(2,1,"aboutProject.content")))},dependencies:[gt],encapsulation:2})}return e})();var hn=new B("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),yi=new B("MAT_DRAWER_CONTAINER"),Dt=(()=>{class e extends vt{_platform=l(ut);_changeDetectorRef=l(q);_element=l(V);_ngZone=l(nt);_isInert=!1;_container=l(xi);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(Ti(50),ri(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let i=this._element.nativeElement;this._isInert=t,t?i.setAttribute("inert","true"):i.removeAttribute("inert")}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:i}=this._container;return t!=null&&t.mode!=="over"&&t.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(e)))(n||e)}})();static \u0275cmp=(function(){let t=["*"];return p({type:e,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,a){n&2&&(ot("margin-left",a._container._contentMargins.left,"px")("margin-right",a._container._contentMargins.right,"px"),f("mat-drawer-content-hidden",a._shouldBeHidden()))},features:[T([{provide:vt,useExisting:e}]),rt],ngContentSelectors:t,decls:1,vars:0,template:function(n,a){n&1&&(N(),v(0))},encapsulation:2})})()}return e})(),wi=(()=>{class e{_elementRef=l(V);_focusTrapFactory=l(ce);_focusMonitor=l(Qt);_platform=l(ut);_ngZone=l(nt);_renderer=l(Ct);_interactivityChecker=l(de);_doc=l(Ot);_isAnimating=!1;_container=l(yi,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=U(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=U(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(U(t))}_opened=j(!1);_openedVia=null;_animationStarted=new K;_animationEnd=new K;openedChange=new J(!0);_openedStream=this.openedChange.pipe(yt(t=>t),H(()=>{}));openedStart=this._animationStarted.pipe(yt(()=>this.opened),oi(void 0));_closedStream=this.openedChange.pipe(yt(t=>!t),H(()=>{}));closedStart=this._animationStarted.pipe(yt(()=>!this.opened),oi(void 0));_destroyed=new K;onPositionChanged=new J;_content;_modeChanged=new K;_injector=l(st);_changeDetectorRef=l(q);constructor(){this.openedChange.pipe(F(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,i=this._elementRef.nativeElement;return[t.listen(i,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!he(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(i,"transitionend",this._handleTransitionEvent),t.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(t,i){let n=this._elementRef.nativeElement.querySelector(t);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{s(),o(),n.removeAttribute("tabindex")},s=this._renderer.listen(n,"blur",a),o=this._renderer.listen(n,"mousedown",a)})),n.focus(i))}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Nt(()=>{let i=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(i)&&typeof t.focus=="function"&&t.focus(i)},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,i){t&&i&&(this._openedVia=i);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,i,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&i&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(ri(1)).subscribe(s=>a(s?"open":"close"))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(t){t!==this._isAnimating&&(this._isAnimating=t,this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,n=i.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,i)),n.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=t=>{let i=this._elementRef.nativeElement;t.target===i&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=(function(){let t=["content"];return p({type:e,selectors:[["mat-drawer"]],viewQuery:function(a,s){if(a&1&&dt(t,5),a&2){let o;z(o=I())&&(s._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(a,s){a&2&&(P("align",null)("tabIndex",s.mode!=="side"?"-1":null),ot("visibility",!s._container&&!s.opened?"hidden":null),f("mat-drawer-end",s.position==="end")("mat-drawer-over",s.mode==="over")("mat-drawer-push",s.mode==="push")("mat-drawer-side",s.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:["*"],decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(a,s){a&1&&(N(),d(0,"div",1,0),v(2),h())},dependencies:[vt],encapsulation:2})})()}return e})(),xi=(()=>{class e{_dir=l(le,{optional:!0});_element=l(V);_ngZone=l(nt);_changeDetectorRef=l(q);_animationDisabled=Wt();_transitionsEnabled=!1;_allDrawers;_drawers=new Pi;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=U(t)}_autosize=l(hn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:U(t)}_backdropOverride=null;backdropClick=new J;_start=null;_end=null;_left=null;_right=null;_destroyed=new K;_doCheckSubject=new K;_contentMargins={left:null,right:null};_contentMarginChanges=new K;get scrollable(){return this._userContent||this._content}_injector=l(st);constructor(){let t=l(ut),i=l(pe);this._dir?.change.pipe(F(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(F(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(si(this._allDrawers),F(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(si(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Li(10),F(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,i-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();i+=n,t-=n}}t=t||null,i=i||null,(t!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:t,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(F(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(F(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(F(this._drawers.changes)).subscribe(()=>{Nt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(F(Di(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let i=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?i.add(n):i.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=(function(){let t=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],i=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function n(s,o){if(s&1){let m=zt();d(0,"div",1),M("click",function(){kt(m);let S=L();return St(S._onBackdropClicked())}),h()}if(s&2){let m=L();f("mat-drawer-shown",m._isShowingBackdrop())}}function a(s,o){s&1&&(d(0,"mat-drawer-content"),v(1,2),h())}return p({type:e,selectors:[["mat-drawer-container"]],contentQueries:function(o,m,u){if(o&1&&et(u,Dt,5)(u,wi,5),o&2){let S;z(S=I())&&(m._content=S.first),z(S=I())&&(m._allDrawers=S)}},viewQuery:function(o,m){if(o&1&&dt(Dt,5),o&2){let u;z(u=I())&&(m._userContent=u.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(o,m){o&2&&f("mat-drawer-container-explicit-backdrop",m._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[T([{provide:yi,useExisting:e}])],ngContentSelectors:i,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(o,m){o&1&&(N(t),tt(0,n,1,2,"div",0),v(1),v(2,1),tt(3,a,2,0,"mat-drawer-content")),o&2&&(it(m.hasBackdrop?0:-1),c(3),it(m._content?-1:3))},dependencies:[Dt],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return e})(),Yt=(()=>{class e extends Dt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(e)))(n||e)}})();static \u0275cmp=(function(){let t=["*"];return p({type:e,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[T([{provide:vt,useExisting:e},{provide:Dt,useExisting:e}]),rt],ngContentSelectors:t,decls:1,vars:0,template:function(n,a){n&1&&(N(),v(0))},encapsulation:2})})()}return e})(),ki=(()=>{class e extends wi{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=U(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=qt(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=qt(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(e)))(n||e)}})();static \u0275cmp=(function(){let t=["*"];return p({type:e,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(n,a){n&2&&(P("tabIndex",a.mode!=="side"?"-1":null)("align",null),ot("top",a.fixedInViewport?a.fixedTopGap:null,"px")("bottom",a.fixedInViewport?a.fixedBottomGap:null,"px"),f("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side")("mat-sidenav-fixed",a.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[T([{provide:wi,useExisting:e}]),rt],ngContentSelectors:t,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,a){n&1&&(N(),d(0,"div",1,0),v(2),h())},dependencies:[vt],encapsulation:2})})()}return e})(),Le=(()=>{class e extends xi{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(e)))(n||e)}})();static \u0275cmp=(function(){let t=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],i=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function n(s,o){if(s&1){let m=zt();d(0,"div",1),M("click",function(){kt(m);let S=L();return St(S._onBackdropClicked())}),h()}if(s&2){let m=L();f("mat-drawer-shown",m._isShowingBackdrop())}}function a(s,o){s&1&&(d(0,"mat-sidenav-content"),v(1,2),h())}return p({type:e,selectors:[["mat-sidenav-container"]],contentQueries:function(o,m,u){if(o&1&&et(u,Yt,5)(u,ki,5),o&2){let S;z(S=I())&&(m._content=S.first),z(S=I())&&(m._allDrawers=S)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(o,m){o&2&&f("mat-drawer-container-explicit-backdrop",m._backdropOverride)},exportAs:["matSidenavContainer"],features:[T([{provide:yi,useExisting:e},{provide:xi,useExisting:e}]),rt],ngContentSelectors:i,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(o,m){o&1&&(N(t),tt(0,n,1,2,"div",0),v(1),v(2,1),tt(3,a,2,0,"mat-sidenav-content")),o&2&&(it(m.hasBackdrop?0:-1),c(3),it(m._content?-1:3))},dependencies:[Yt],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return e})(),Te=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=O({type:e});static \u0275inj=D({imports:[_i,W,_i]})}return e})();var Si=(()=>{class e{_listeners=[];notify(t,i){for(let n of this._listeners)n(t,i)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(i=>t!==i)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Ai({token:e,factory:e.\u0275fac})}return e})();var Ee=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=O({type:e});static \u0275inj=D({imports:[W]})}return e})();var gn=new B("MAT_LIST_CONFIG"),Ae=(()=>{class e{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=U(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(U(t))}_disabled=j(!1);_defaultOptions=l(gn,{optional:!0});static \u0275fac=function(i){return new(i||e)};static \u0275dir=lt({type:e,hostVars:1,hostBindings:function(i,n){i&2&&P("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return e})();var Pe=(()=>{class e extends Ae{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(e)))(n||e)}})();static \u0275cmp=(function(){let t=["*"];return p({type:e,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[T([{provide:Ae,useExisting:e}]),rt],ngContentSelectors:t,decls:1,vars:0,template:function(n,a){n&1&&(N(),v(0))},styles:[`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`],encapsulation:2})})()}return e})();var Re=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=O({type:e});static \u0275inj=D({imports:[me,Ut,ue,W,Ee]})}return e})();var Fe=[{label:"km",denominator:1e5},{label:"m",denominator:100},{label:"cm",denominator:1},{label:"mm",denominator:.1},{label:"\xB5m",denominator:1e-4},{label:"nm",denominator:1e-7}],Be=(()=>{class e{transform(t){if(!t)return"0 x 0";let i=this.selectUnit(Math.max(t.width,t.height));return this.formatViewport(t,i)}selectUnit(t){for(let i of Fe)if(t>i.denominator)return i;return Fe.at(-1)}formatValue(t,i){return(t/i.denominator).toFixed(2)}formatViewport(t,i){return`${this.formatValue(t.width,i)} x ${this.formatValue(t.height,i)} ${i.label}`}static \u0275fac=function(i){return new(i||e)};static \u0275pipe=Tt({name:"sizeDisplay",type:e,pure:!0})}return e})();var _n=["*"];function un(e,r){e&1&&(d(0,"span",3),v(1),h())}function vn(e,r){if(e&1&&(d(0,"a",1),ci(1,4),h()),e&2){let t=L(),i=ct(1);g("href",t.link(),Ri),c(),g("ngTemplateOutlet",i)}}function fn(e,r){if(e&1&&(d(0,"a",2),ci(1,4),h()),e&2){let t=L(),i=ct(1);g("routerLink",t.link()),c(),g("ngTemplateOutlet",i)}}var je=(()=>{class e{link=G.required();linkType=G("internal");static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["ids-flat-link"]],inputs:{link:[1,"link"],linkType:[1,"linkType"]},ngContentSelectors:_n,decls:4,vars:1,consts:[["linkContent",""],["target","_blank","rel","noopener noreferrer",1,"ids-flat-action","ids-flat-link",3,"href"],["routerLinkActive","ids-active-link",1,"ids-flat-action","ids-flat-link",3,"routerLink"],[1,"ids-flat-action-content","ids-button-label"],[3,"ngTemplateOutlet"]],template:function(i,n){i&1&&(N(),di(0,un,2,0,"ng-template",null,0,hi),tt(2,vn,2,2,"a",1)(3,fn,2,2,"a",2)),i&2&&(c(2),it(n.linkType()==="external"?2:3))},dependencies:[Ui,Vt,Gt],styles:["[_nghost-%COMP%]{--%NS%ids-glow-color: var(--%NS%ids-neutral);--%NS%ids-button-content-color: var(--%NS%ids-text-highlight-color)}[_nghost-%COMP%]   .ids-flat-action[_ngcontent-%COMP%]{--%NS%ids-button-text-shadow-idle: var(--%NS%ids-button-text-shadow-layer-1);--%NS%ids-button-text-shadow-hover: var(--%NS%ids-button-text-shadow-layer-1), var(--%NS%ids-button-text-shadow-layer-2)}[_nghost-%COMP%]   .ids-flat-action.ids-active-link[_ngcontent-%COMP%]{--%NS%ids-flat-action-overlay-opacity: .15}[_nghost-%COMP%]   .ids-flat-action.ids-active-link[_ngcontent-%COMP%]   .ids-flat-action-content[_ngcontent-%COMP%]{font-weight:700}",'.ids-flat-action[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;padding:max(0px,calc((var(--%NS%ids-flat-button-size, 36px) - var(--%NS%ids-flat-button-icon-size, 24px)) / 2));border:0;outline:none;position:relative;border-radius:var(--%NS%ids-action-radius);--%NS%ids-flat-action-overlay-opacity: 0;--%NS%ids-button-text-shadow-layer-1: 0 0 4px color-mix(in srgb, var(--%NS%ids-button-content-color) var(--%NS%ids-shadow-strength-faint), transparent);--%NS%ids-button-text-shadow-layer-2: 0 0 8px color-mix(in srgb, var(--%NS%ids-button-content-color) var(--%NS%ids-shadow-strength-subtle), transparent);--%NS%ids-button-text-shadow-idle: none;--%NS%ids-button-text-shadow-hover: var(--%NS%ids-button-text-shadow-layer-1);--%NS%ids-button-text-shadow: var(--%NS%ids-button-text-shadow-idle)}.ids-flat-action[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-color:var(--%NS%ids-glow-color);border-radius:inherit;opacity:var(--%NS%ids-flat-action-overlay-opacity);pointer-events:none;transition:opacity .2s ease,background-color .2s ease}.ids-flat-action[_ngcontent-%COMP%]:active:not(:disabled), .ids-flat-action[_ngcontent-%COMP%]:focus-visible:not(:disabled), .ids-flat-action[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus-visible){--%NS%ids-button-text-shadow: var(--%NS%ids-button-text-shadow-hover)}.ids-flat-action[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus-visible):not(:active){--%NS%ids-flat-action-overlay-opacity: .05}.ids-flat-action[_ngcontent-%COMP%]:focus-visible:not(:disabled):not(:active){--%NS%ids-flat-action-overlay-opacity: .1}.ids-flat-action[_ngcontent-%COMP%]:active:not(:disabled){--%NS%ids-flat-action-overlay-opacity: .15}.ids-flat-action[_ngcontent-%COMP%]   .ids-flat-action-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px;padding:0 6px;position:relative;z-index:1;color:var(--%NS%ids-overridden-button-content-color, var(--%NS%ids-button-content-color));text-shadow:var(--%NS%ids-button-text-shadow);transition:color .2s ease,text-shadow .2s ease;--%NS%irr-icon-margin-left: -6px;--%NS%irr-icon-margin-right: -6px}',"[_nghost-%COMP%]{display:inline-block;--%NS%ids-action-radius: 9999px}"]})}return e})();var wn=["*"],Ni=(()=>{class e{link=G.required();label=G("");disabled=G(!1,{transform:R});static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["ids-side-nav-item"]],inputs:{link:[1,"link"],label:[1,"label"],disabled:[1,"disabled"]},ngContentSelectors:wn,decls:2,vars:5,consts:[["routerLinkActive","ids-side-nav-item--active","idsTooltipPosition","right",1,"ids-side-nav-item",3,"routerLink","idsTooltip"]],template:function(i,n){i&1&&(N(),d(0,"a",0),v(1),h()),i&2&&(g("routerLink",n.disabled()?null:n.link())("idsTooltip",n.label()),P("aria-disabled",n.disabled()?"true":null)("aria-label",n.label()||null)("tabindex",n.disabled()?-1:null))},dependencies:[Vt,Gt,Zt],styles:['[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]{--%NS%ids-side-nav-overlay-opacity: 0;--%NS%irr-icon-size: 32px;display:flex;padding:12px;border-radius:var(--%NS%ids-radius-none);outline:0;position:relative;isolation:isolate;color:var(--%NS%ids-text-muted-color);cursor:pointer;transition:color .2s ease,text-shadow .2s ease}[_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;z-index:-1;background-color:var(--%NS%ids-neutral);opacity:var(--%NS%ids-side-nav-overlay-opacity);pointer-events:none;transition:opacity .2s ease,background-color .2s ease}[_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]:hover:not([aria-disabled=true]), [_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]:focus-visible:not([aria-disabled=true]){color:var(--%NS%ids-text-muted-hover-color)}[_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]:hover:not([aria-disabled=true]):not(:active){--%NS%ids-side-nav-overlay-opacity: .05}[_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]:focus-visible:not([aria-disabled=true]){--%NS%ids-side-nav-overlay-opacity: .1}[_nghost-%COMP%]   .ids-side-nav-item[_ngcontent-%COMP%]:active:not([aria-disabled=true]){--%NS%ids-side-nav-overlay-opacity: .15}[_nghost-%COMP%]   .ids-side-nav-item.ids-side-nav-item--active[_ngcontent-%COMP%]{color:var(--%NS%ids-neutral);background-color:color-mix(in srgb,var(--%NS%ids-neutral) 10%,transparent);text-shadow:0 0 4px color-mix(in srgb,var(--%NS%ids-neutral) var(--%NS%ids-shadow-strength-faint),transparent),0 0 8px color-mix(in srgb,var(--%NS%ids-neutral) var(--%NS%ids-shadow-strength-subtle),transparent)}[_nghost-%COMP%]   .ids-side-nav-item[aria-disabled=true][_ngcontent-%COMP%]{cursor:default;opacity:.5;pointer-events:none}']})}return e})();var xn=(e,r)=>r.iconName;function yn(e,r){if(e&1){let t=zt();d(0,"ids-flat-button",2),M("click",function(){let n=kt(t).$implicit,a=L();return St(a.onClick(n))}),d(1,"mat-icon",3),_(2),h()()}if(e&2){let t=r.$implicit,i=L();f("active",t.visibility()==="on"),g("hidden",t.visibility()==="hidden")("disabled",t.visibility()==="disabled")("idsTooltip",i.translate.instant(t.tooltipKey)),c(2),$(t.iconName)}}var Ve=(()=>{class e{viewportSize=G.required();actions=G.required();translate=l(Q);onClick(t){this.isActive(t.visibility())&&t.onClick()}isActive(t){return t==="off"||t==="on"}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["app-ribbon"]],inputs:{viewportSize:[1,"viewportSize"],actions:[1,"actions"]},decls:5,vars:3,consts:[["idsTooltipPosition","bottom",1,"action",3,"hidden","disabled","active","idsTooltip"],[1,"size-display"],["idsTooltipPosition","bottom",1,"action",3,"click","hidden","disabled","idsTooltip"],[1,"material-symbols-outlined"]],template:function(i,n){i&1&&(Et(0,yn,3,6,"ids-flat-button",0,xn),d(2,"span",1),_(3),w(4,"sizeDisplay"),h()),i&2&&(At(n.actions()),c(3),$(x(4,1,n.viewportSize())))},dependencies:[_t,bt,$t,Zt,Be],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;height:40px;position:sticky;box-shadow:0 0 10px 2px #000000a8;padding:0 20px;gap:6px}[_nghost-%COMP%]   .size-display[_ngcontent-%COMP%]{color:var(--%NS%color-contrast-medium);text-align:right;margin-left:auto}[_nghost-%COMP%]   .action[_ngcontent-%COMP%]{--%NS%ids-flat-button-size: 32px;--%NS%ids-overridden-button-content-color: var(--%NS%color-contrast-medium)}[_nghost-%COMP%]   .action.active[_ngcontent-%COMP%]{--%NS%ids-overridden-button-content-color: var(--%NS%color-contrast-highest)}"]})}return e})();var k=class e{x=0;y=0;static zero=new e(0,0);constructor(r,t){this.x=r,this.y=t}};var Y=class{position;zoom;pxSize;scaleFactor;cmSize;startWorldPos;endWorldPos;constructor(r,t,i,n=1){this.position=r,this.zoom=t,this.pxSize=i,this.scaleFactor=n,this.cmSize=this.calculateCmSize(),this.startWorldPos=this.calculateStartWorldPos(),this.endWorldPos=this.calculateEndWorldPos()}calculateCmSize(){return{width:wt.pxToCm(this.pxSize.width)*this.zoom,height:wt.pxToCm(this.pxSize.height)*this.zoom}}calculateStartWorldPos(){return new k(this.position.x-this.cmSize.width/2,this.position.y-this.cmSize.height/2)}calculateEndWorldPos(){return new k(this.position.x+this.cmSize.width/2,this.position.y+this.cmSize.height/2)}getViewportPosition(r){return new k(this.getViewportXPosition(r.x),this.getViewportYPosition(r.y))}getViewportXPosition(r){return(r-this.startWorldPos.x)/this.cmSize.width*this.pxSize.width}getViewportYPosition(r){return(r-this.startWorldPos.y)/this.cmSize.height*this.pxSize.height}getWorldPosition(r){return new k(this.getWorldXPosition(r.x),this.getWorldYPosition(r.y))}getWorldXPosition(r){return r/this.pxSize.width*this.cmSize.width+this.startWorldPos.x}getWorldYPosition(r){return r/this.pxSize.height*this.cmSize.height+this.startWorldPos.y}};var Kt=class e extends ye{gridBaseColor="#424242";getOrder(){return-1}drawObject(r,t){let i=t.startWorldPos,n=t.endWorldPos,a=Math.pow(10,Math.ceil(Math.log(t.zoom)/Math.log(10)))/10,s=this.calculateGridColorsForZoom(a,t.zoom),o=[];for(let m=Math.floor(i.y/a)*a;n.y>m;m+=a){let u=t.getViewportYPosition(m),S=new k(0,u),ei=new k(t.pxSize.width,u);o.push({start:S,end:ei,depthLevel:e.getLineDepthLevel(m,a)})}for(let m=Math.floor(i.x/a)*a;n.x>m;m+=a){let u=t.getViewportXPosition(m),S=new k(u,0),ei=new k(u,t.pxSize.height);o.push({start:S,end:ei,depthLevel:e.getLineDepthLevel(m,a)})}r.lineWidth=t.scaleFactor,o.sort((m,u)=>u.depthLevel-m.depthLevel).forEach(m=>{this.drawLine(r,m.start,m.end,e.getLineColorForDepth(m.depthLevel,s))}),r.lineWidth=1}static getLineColorForDepth(r,t){return t[Math.min(r,t.length-1)]}static getLineDepthLevel(r,t){if(r===0)return 0;let i=Math.round(r/t);return i%100===0?1:i%10===0?2:3}drawLine(r,t,i,n){r.strokeStyle=n,r.beginPath(),r.moveTo(t.x,t.y),r.lineTo(i.x,i.y),r.stroke()}calculateGridColorsForZoom(r,t){let i=(t-r)/(r*10-r),n=ke(this.gridBaseColor);return[this.gridBaseColor,n.alpha(e.linearInterpolation(.66,.8,1-i)).string(),n.alpha(e.linearInterpolation(.33,.66,1-i)).string(),n.alpha(e.linearInterpolation(0,.33,1-i)).string()]}static linearInterpolation(r,t,i){return r+(t-r)*i}};var Ge={isMovable:!0,showGrid:!0,minZoom:1e-9,maxZoom:1e9,backgroundColor:"transparent",canvasGridColor:"#3f3f3f"};var kn=["canvas"],qe=(()=>{class e{clicked=qi();options=Qi({});canvas=Ft.required("canvas");currentOptions=ht(()=>b(b({},Ge),this.options()));_viewport=j(new Y(k.zero,1,{width:0,height:0}));viewport=this._viewport.asReadonly();isDragging=!1;ctx=ht(()=>this.canvas().nativeElement.getContext("2d"));gridObject;canvasObjects=[];handleMouseUp=this.onMouseUp.bind(this);handleMouseMove=this.onMouseMove.bind(this);handleMouseDown=this.onMouseDown.bind(this);handleWheelMove=this.onWheelMove.bind(this);resizeObserver=new ResizeObserver(()=>this.onResize());cd=l(q);configChangeEffect=Wi(()=>{this.configureCanvas(),this.redraw()});ngOnInit(){this.canvas().nativeElement.addEventListener("wheel",this.handleWheelMove),this.canvas().nativeElement.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp),this.resizeObserver.observe(this.canvas().nativeElement)}configureCanvas(){this.configureGrid()}configureGrid(){this.canvasObjects=this.canvasObjects.filter(i=>i!==this.gridObject);let t=this.currentOptions();t.showGrid&&(this.gridObject=new Kt,t.canvasGridColor&&(this.gridObject.gridBaseColor=t.canvasGridColor),this.addCanvasObject(this.gridObject))}ngOnDestroy(){this.canvas().nativeElement.removeEventListener("wheel",this.handleWheelMove),this.canvas().nativeElement.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp),this.resizeObserver.unobserve(this.canvas().nativeElement)}onWheelMove(t){let i=this._viewport(),n=i.getWorldPosition(new k(t.offsetX,t.offsetY)),a=i.zoom*(t.deltaY/1e3),s=Math.max(Math.min(i.zoom+a,this.currentOptions().maxZoom),this.currentOptions().minZoom)/i.zoom,o=new k(n.x-(n.x-i.position.x)*s,n.y-(n.y-i.position.y)*s);this._viewport.set(new Y(o,i.zoom*s,i.pxSize)),this.redraw(),t.preventDefault()}onMouseDown(t){this.clicked.emit(this._viewport().getWorldPosition(new k(t.offsetX,t.offsetY))),this.currentOptions().isMovable!==!1&&(document.body.style.cursor="grab",this.isDragging=!0,this.cd.markForCheck())}onMouseMove(t){if(this.currentOptions().isMovable!==!1&&this.isDragging){let i=this._viewport(),n=new k(i.position.x-wt.pxToCm(t.movementX)*i.zoom,i.position.y-wt.pxToCm(t.movementY)*i.zoom);this._viewport.set(new Y(n,i.zoom,i.pxSize)),this.redraw()}}onMouseUp(){this.currentOptions().isMovable!==!1&&(document.body.style.cursor="",this.isDragging=!1,this.cd.markForCheck())}onResize(){let t=this.canvas().nativeElement.getBoundingClientRect(),i={height:t.height,width:t.width};this.canvas().nativeElement.width=i.width,this.canvas().nativeElement.height=i.height;let n=this._viewport();this._viewport.set(new Y(n.position,n.zoom,i)),this.redraw()}setViewport(t=null,i=null,n=!1){let a=this._viewport();this._viewport.set(new Y(i??a.position,t??a.zoom,a.pxSize)),n&&this.redraw()}addCanvasObject(t,i=!1){this.canvasObjects.push(t),this.canvasObjects.sort((n,a)=>n.getOrder()-a.getOrder()),t.setParent(this),i&&this.redraw()}removeObject(t){this.canvasObjects=this.canvasObjects.filter(i=>i!==t),this.canvasObjects.sort((i,n)=>i.getOrder()-n.getOrder())}removeObjects(t=!1){this.canvasObjects=this.canvasObjects.filter(i=>i===this.gridObject),t&&this.redraw()}redraw(){let t=this.ctx(),i=this._viewport();e.drawBackground(t,i.pxSize,this.currentOptions().backgroundColor),e.drawObjects(t,this.canvasObjects,i),this.cd.markForCheck()}saveAsImage(t){let i=this._viewport(),n=t?.scaleFactor??1,a={width:i.pxSize.width*n,height:i.pxSize.height*n},s=new Y(i.position,i.zoom/n,a,n),o=new OffscreenCanvas(a.width,a.height),m=o.getContext("2d"),u=t?.backgroundColor??this.currentOptions().backgroundColor;return e.drawBackground(m,a,u),e.drawObjects(m,this.canvasObjects,s),o.convertToBlob({type:"image/png"})}static drawBackground(t,i,n){t.clearRect(0,0,i.width,i.height),t.fillStyle=n,t.fillRect(0,0,i.width,i.height)}static drawObjects(t,i,n){for(let a of i)a.getVisibility()&&a.drawObject(t,n)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["ac-active-canvas"]],viewQuery:function(i,n){i&1&&Pt(n.canvas,kn,5),i&2&&Rt()},inputs:{options:[1,"options"]},outputs:{clicked:"clicked",options:"optionsChange"},decls:2,vars:0,consts:[["canvas",""]],template:function(i,n){i&1&&Bi(0,"canvas",null,0)},styles:["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   canvas[_ngcontent-%COMP%]{height:100%;width:100%}"]})}return e})();var Sn=["activeCanvas"],Qe=(()=>{class e{store=l(ft);translate=l(Q);toolService=l(vi);destroyRef=l(Lt);tilesLinkDisabled$=this.store.select(ui).pipe(pt(this.destroyRef),H(t=>!t));sectorsLinkDisabled$=this.store.select(ui).pipe(pt(this.destroyRef),H(t=>!t));mosaicGeneratingLinkDisabled$=this.store.select(fe).pipe(pt(this.destroyRef),H(t=>!t.length));activeCanvas=Ft.required("activeCanvas");viewportSize=ht(()=>this.activeCanvas().viewport().cmSize);ribbonActions=j([]);canvasOptions=ht(()=>({canvasGridColor:this.toolService.canvasGridColor()}));wasInitialized=!1;onActivate(t){let i=t.sectionEntered(this.activeCanvas(),!this.wasInitialized);this.ribbonActions.set(i.ribbon),this.wasInitialized=!0}onDeactivate(){this.ribbonActions.set([]),this.activeCanvas().removeObjects()}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["app-tool"]],viewQuery:function(i,n){i&1&&Pt(n.activeCanvas,Sn,5),i&2&&Rt()},features:[T([vi,Me])],decls:26,vars:16,consts:[["activeCanvas",""],[1,"tool-sidenav-container"],["mode","side","opened",""],["link","config",3,"label"],["matListIcon","",1,"material-symbols-outlined"],["link","tray",3,"label","disabled"],["link","sectors",3,"label","disabled"],["link","generating",3,"label","disabled"],[1,"content"],[3,"actions","viewportSize"],[1,"main"],[1,"canvas",3,"options"],[1,"panel"],[3,"activate","deactivate"]],template:function(i,n){i&1&&(d(0,"mat-sidenav-container",1)(1,"mat-sidenav",2)(2,"mat-nav-list")(3,"ids-side-nav-item",3)(4,"mat-icon",4),_(5,"flowsheet"),h()(),d(6,"ids-side-nav-item",5),w(7,"async"),d(8,"mat-icon",4),_(9,"dashboard"),h()(),d(10,"ids-side-nav-item",6),w(11,"async"),d(12,"mat-icon",4),_(13,"view_in_ar"),h()(),d(14,"ids-side-nav-item",7),w(15,"async"),d(16,"mat-icon",4),_(17,"rocket_launch"),h()()()(),d(18,"mat-sidenav-content")(19,"div",8),C(20,"app-ribbon",9),d(21,"div",10),C(22,"ac-active-canvas",11,0),d(24,"div",12)(25,"router-outlet",13),M("activate",function(s){return n.onActivate(s)})("deactivate",function(){return n.onDeactivate()}),h()()()()()()),i&2&&(c(3),g("label",n.translate.instant("tool.nav.projectSettings")),c(3),g("label",n.translate.instant("tool.nav.projectSettings"))("disabled",x(7,10,n.tilesLinkDisabled$)),c(4),g("label",n.translate.instant("tool.nav.sectors"))("disabled",x(11,12,n.sectorsLinkDisabled$)),c(4),g("label",n.translate.instant("tool.nav.generation"))("disabled",x(15,14,n.mosaicGeneratingLinkDisabled$)),c(6),g("actions",n.ribbonActions())("viewportSize",n.viewportSize()),c(2),g("options",n.canvasOptions()))},dependencies:[_t,bt,Te,ki,Le,Yt,Re,Pe,Ni,jt,ie,Ve,qe,Hi],styles:[".tool-sidenav-container[_ngcontent-%COMP%]{position:absolute;inset:55px 0 0}.tool-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{border-right:none}.mdc-list[_ngcontent-%COMP%]{padding-top:12px}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]{height:52px!important;--%NS%mat-list-list-item-label-text-color: var(--%NS%color-contrast-high)}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item.active[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--%NS%color-primary),transparent 90%)}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%color-primary);font-weight:300}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]:focus{--%NS%mat-list-list-item-focus-state-layer-opacity: 0}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]     .mat-mdc-list-item-unscoped-content{display:flex}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]     .mat-mdc-list-item-unscoped-content mat-icon{height:30px;width:30px;font-size:30px}mat-sidenav-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}mat-sidenav-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:calc(100% - 40px)}mat-sidenav-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]{display:flex;flex:1 1 0}mat-sidenav-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{position:relative;width:250px;box-sizing:border-box;border-left:1px solid var(--%NS%color-contrast-light)}"]})}return e})();var We=[{path:"",redirectTo:"project",pathMatch:"full"},{path:"tool",component:Qe,loadChildren:()=>import("./chunk-22XK3BKI.js").then(e=>e.toolRoutes)},{path:"project",component:Oe},{path:"author",component:De}];var Ue=Ht(null,E(X.projectCreated,(e,{project:r})=>b({},r)),E(X.projectCanceled,()=>null),E(X.mosaicWidthChanged,(e,{width:r})=>A(b({},e),{config:A(b({},e.config),{mosaicWidth:r})})),E(X.sectorModified,(e,{modifiedSector:r})=>A(b({},e),{sectors:fi.addOrUpdate([...e.sectors],r,t=>t.id===r.id)})),E(X.sectorRemoved,(e,{sector:r})=>A(b({},e),{sectors:[...e.sectors.filter(t=>t.id!==r.id)]})),E(X.sectorShifted,(e,{prevIndex:r,newIndex:t})=>A(b({},e),{sectors:fi.moveElemInArray([...e.sectors],r,t)})),E(X.tilesSetCommitted,(e,{tilesSet:r})=>A(b({},e),{tilesSets:[...e.tilesSets.filter(t=>t.id!==r.id),r]})),E(X.tilesSetRemoved,(e,{removedTilesSet:r})=>A(b({},e),{tilesSets:e.tilesSets.filter(t=>t!==r)})));var He="state";function Nn(e,r){localStorage.setItem(r,JSON.stringify(e))}function Cn(e){let r=localStorage.getItem(e);return r?JSON.parse(r):null}function $e(e){let r=!0;return function(t,i){let n=e(t,i);if(r){r=!1;let a=Cn(He);return Mn(a),b(b({},n),a)}return Nn(n,He),n}}function Mn(e){e?.mosaicProject?.tilesSets.forEach(r=>{r.tiles.forEach(t=>{t.vertices.forEach(i=>Se.restore(i))})})}var zn=/^\.{1,2}$/,Xe=new B("TRANSLATE_HTTP_LOADER_CONFIG"),In=class Jt{http;config;constructor(){this.config=b({resources:[],enforceLoading:!1,useHttpBackend:!1},l(Xe)),this.http=this.config.useHttpBackend?new gi(l(Yi)):l(gi)}getTranslation(t){let i=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"",n=this.config.resources.map(a=>{let s;return zi(()=>{let o=encodeURIComponent(t);return s=`${typeof a=="string"?`${a}${o}.json`:`${a.prefix}${o}${a.suffix??".json"}`}${i}`,zn.test(t)?ai(()=>new Error(`"${t}" is a path segment, not a language`)):this.http.get(s)}).pipe(Oi(o=>(this.reportError({lang:t,resource:a,url:s,error:o}),this.config.failOnError?ai(()=>o):ni({}))))});return n.length===0?ni({}):Ii(n).pipe(H(a=>a.reduce((s,o)=>this.config.flatten?b(b({},s),Ye(o??{})):ae(s,o),{})))}reportError(t){if(this.config.onLoadError)try{this.config.onLoadError(t)}catch(i){console.warn("@ngx-translate/http-loader: onLoadError callback failed:",i)}else this.config.failOnError||console.warn(`@ngx-translate/http-loader: error loading translation for ${t.lang}:`,t.error)}static \u0275fac=function(i){return new(i||Jt)};static \u0275prov=Ei({token:Jt,factory:Jt.\u0275fac})};function Ye(e){return Object.fromEntries(Object.entries(e).flatMap(([r,t])=>t!==null&&typeof t=="object"&&!Array.isArray(t)&&Object.keys(t).length?Object.entries(Ye(t)).map(([i,n])=>[`${r}.${i}`,n]):[[r,t]]))}function Ke(e={}){if("resources"in e&&e.resources)return Ze(e);let r=e;return Ze({enforceLoading:r.enforceLoading??!1,useHttpBackend:r.useHttpBackend??!1,failOnError:r.failOnError??!1,flatten:r.flatten??!1,onLoadError:r.onLoadError,resources:[{prefix:r.prefix??"/assets/i18n/",suffix:r.suffix??".json"}]})}function Ze(e={}){return[{provide:Xe,useValue:b({resources:["/assets/i18n/"]},e)},{provide:ne,useClass:In}]}var Je=Ht({},E(It.languageChanged,(e,{lang:r})=>A(b({},e),{lang:r})),E(It.themeChanged,(e,{theme:r})=>A(b({},e),{theme:r})));var tn={providers:[te(We),Bt(),ve({mosaicProject:Ue,userPreferences:Je},{metaReducers:[$e]}),re({loader:Ke({prefix:"/irrtirer/assets/i18n/",suffix:".json"}),fallbackLang:"pl",lang:"pl"}),{provide:ze,useValue:{appearance:"outline"}}]};var Dn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=lt({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return e})(),en=(()=>{class e{_elementRef=l(V);_platform=l(ut);_document=l(Ot);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=(function(){let t=["*",[["mat-toolbar-row"]]];return p({type:e,selectors:[["mat-toolbar"]],contentQueries:function(a,s,o){if(a&1&&et(o,Dn,5),a&2){let m;z(m=I())&&(s._toolbarRows=m)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(a,s){a&2&&(ji(s.color?"mat-"+s.color:""),f("mat-toolbar-multiple-rows",s._toolbarRows.length>0)("mat-toolbar-single-row",s._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(a,s){a&1&&(N(t),v(0),v(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})})()}return e})();var nn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=O({type:e});static \u0275inj=D({imports:[W]})}return e})();var an={github:"github-mark.svg",pl:"pl.svg",gb:"gb.svg"},rn=(()=>{class e{matIconRegistry;domSanitizer;constructor(t,i){this.matIconRegistry=t,this.domSanitizer=i;for(let n in an)this.matIconRegistry.addSvgIcon(n,this.domSanitizer.bypassSecurityTrustResourceUrl(`../irrtirer/assets/icons/${an[n]}`))}static \u0275fac=function(i){return new(i||e)(mi(se),mi(Ji))};static \u0275mod=O({type:e});static \u0275inj=D({providers:[Bt(Ki())],imports:[Zi]})}return e})();var ti=class{source;value;constructor(r,t){this.source=r,this.value=t}},Ln={provide:_e,useExisting:li(()=>Mi),multi:!0},on=new B("MatRadioGroup"),Tn=new B("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),Mi=(()=>{class e{_changeDetector=l(q);_value=null;_name=l(bi).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new J;_radios;color;get name(){return this._name}set name(t){this._name=t,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition=t==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(t){this._selected=t,this.value=t?t.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markRadiosForCheck()}get required(){return this._required}set required(t){this._required=t,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(t=>t===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(t=>{t.name=this.name,t._markForCheck()})}_updateSelectedRadioFromValue(){let t=this._selected!==null&&this._selected.value===this._value;this._radios&&!t&&(this._selected=null,this._radios.forEach(i=>{i.checked=this.value===i.value,i.checked&&(this._selected=i)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new ti(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(t=>t._markForCheck())}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetector.markForCheck()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=lt({type:e,selectors:[["mat-radio-group"]],contentQueries:function(i,n,a){if(i&1&&et(a,ii,5),i&2){let s;z(s=I())&&(n._radios=s)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",R],required:[2,"required","required",R],disabledInteractive:[2,"disabledInteractive","disabledInteractive",R]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[T([Ln,{provide:on,useExisting:e}])]})}return e})(),ii=(()=>{class e{_elementRef=l(V);_changeDetector=l(q);_focusMonitor=l(Qt);_radioDispatcher=l(Si);_defaultOptions=l(Tn,{optional:!0});_ngZone=l(nt);_renderer=l(Ct);_uniqueId=l(bi).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===t),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(t){this._labelPosition=t}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(t){this._setDisabled(t)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(t){t!==this._required&&this._changeDetector.markForCheck(),this._required=t}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(t){this._color=t}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new J;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Wt();_injector=l(st);constructor(){l(oe).load(be);let t=l(on,{optional:!0}),i=l(new Gi("tabindex"),{optional:!0});this.radioGroup=t,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,i&&(this.tabIndex=pi(i,0))}focus(t,i){i?this._focusMonitor.focusVia(this._inputElement,i,t):this._inputElement.nativeElement.focus(t)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((t,i)=>{t!==this.id&&i===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{!t&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new ti(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(t){if(t.stopPropagation(),!this.checked&&!this.disabled){let i=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),i&&this.radioGroup._emitChangeEvent())}}_setDisabled(t){this._disabled!==t&&(this._disabled=t,this._changeDetector.markForCheck())}_onInputClick=t=>{this.disabled&&this.disabledInteractive&&t.preventDefault()};_updateTabIndex(){let t=this.radioGroup,i;if(!t||!t.selected||this.disabled?i=this.tabIndex:i=t.selected===this?this.tabIndex:-1,i!==this._previousTabIndex){let n=this._inputElement?.nativeElement;n&&(n.setAttribute("tabindex",i+""),this._previousTabIndex=i,Nt(()=>{queueMicrotask(()=>{t&&t.selected&&t.selected!==this&&document.activeElement===n&&(t.selected?._inputElement.nativeElement.focus(),document.activeElement===n&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=(function(){let t=["input"],i=["formField"];return p({type:e,selectors:[["mat-radio-button"]],viewQuery:function(s,o){if(s&1&&dt(t,5)(i,7,V),s&2){let m;z(m=I())&&(o._inputElement=m.first),z(m=I())&&(o._rippleTrigger=m.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(s,o){s&1&&M("focus",function(){return o._inputElement.nativeElement.focus()}),s&2&&(P("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),f("mat-primary",o.color==="primary")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("mat-mdc-radio-checked",o.checked)("mat-mdc-radio-disabled",o.disabled)("mat-mdc-radio-disabled-interactive",o.disabledInteractive)("_mat-animation-noopable",o._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",R],tabIndex:[2,"tabIndex","tabIndex",a=>a==null?0:pi(a)],checked:[2,"checked","checked",R],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",R],required:[2,"required","required",R],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",R]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:["*"],decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition","for"],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(s,o){s&1&&(N(),d(0,"label",2,0)(2,"span",3),C(3,"span",4),d(4,"input",5,1),M("change",function(u){return o._onInputInteraction(u)}),h(),d(6,"span",6),C(7,"span",7)(8,"span",8),h(),d(9,"span",9),C(10,"span",10),h()(),d(11,"span",11),v(12),h()()),s&2&&(g("labelPosition",o.labelPosition)("for",o.inputId),c(2),f("mdc-radio--disabled",o.disabled),c(2),g("id",o.inputId)("checked",o.checked)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),P("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),c(5),g("matRippleTrigger",o._rippleTrigger.nativeElement)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0))},dependencies:[ge,Ce],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})})()}return e})(),sn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=O({type:e});static \u0275inj=D({imports:[Ut,ii,W]})}return e})();var ln=(()=>{class e{translate=l(Q);themeService=l(Xt);destroyRef=l(Lt);store=l(ft);selectedLanguage=j(this.translate.getCurrentLang()??"pl");themeMode=ee(this.themeService.theme$);ngOnInit(){this.translate.onLangChange.pipe(pt(this.destroyRef)).subscribe(t=>this.selectedLanguage.set(t.lang))}languageChanged(t){this.translate.use(t.value),this.store.dispatch(It.languageChanged({lang:t.value}))}toggleTheme(){let t=this.themeMode()==="dark"?"light":"dark";this.themeService.changeTheme(t)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["app-toolbar"]],decls:36,vars:24,consts:[["menu",""],[1,"toolbar"],["link","/tool","linkType","internal"],[1,"text-base"],["link","/project","linkType","internal"],["link","/author","linkType","internal"],[1,"flex-1"],["variant","accent",1,"toolbar-item","mode",3,"clicked"],[1,"material-symbols-outlined"],["variant","accent",1,"toolbar-item",3,"idsMenuTriggerFor"],[1,"block","min-w-5"],["panelClass","language-panel"],[1,"lang-radio-group",3,"change","value"],["value","pl",1,"lang-radio"],["svgIcon","pl"],["value","en",1,"lang-radio"],["svgIcon","gb"],["link","https://github.com/TukanHan/irrtirer","linkType","external"],["svgIcon","github"]],template:function(i,n){if(i&1&&(d(0,"mat-toolbar",1)(1,"ids-flat-link",2)(2,"span",3),_(3),w(4,"translate"),h()(),d(5,"ids-flat-link",4),_(6),w(7,"translate"),h(),d(8,"ids-flat-link",5),_(9),w(10,"translate"),h(),C(11,"span",6),d(12,"ids-flat-button",7),M("clicked",function(){return n.toggleTheme()}),d(13,"mat-icon",8),_(14),h()(),d(15,"ids-flat-button",9)(16,"mat-icon"),_(17,"language"),h(),d(18,"span",10),_(19),w(20,"titlecase"),h()(),d(21,"ids-menu",11,0)(23,"mat-radio-group",12),M("change",function(s){return n.languageChanged(s)}),d(24,"mat-radio-button",13),_(25),w(26,"translate"),C(27,"mat-icon",14),h(),d(28,"mat-radio-button",15),_(29),w(30,"translate"),C(31,"mat-icon",16),h()()(),d(32,"ids-flat-link",17),C(33,"mat-icon",18),_(34),w(35,"translate"),h()()),i&2){let a=ct(22);c(3),$(x(4,10,"title")),c(3),Z(" ",x(7,12,"aboutProject.header")," "),c(3),Z(" ",x(10,14,"aboutAuthor.header")," "),c(5),$(n.themeMode()==="dark"?"dark_mode":"light_mode"),c(),g("idsMenuTriggerFor",a),c(4),$(x(20,16,n.selectedLanguage())),c(4),g("value",n.selectedLanguage()),c(2),Z(" ",x(26,18,"toolbar.languages.polish")," "),c(4),Z(" ",x(30,20,"toolbar.languages.english")," "),c(5),Z(" ",x(35,22,"toolbar.github")," ")}},dependencies:[_t,bt,nn,en,rn,sn,Mi,ii,$t,je,xe,we,gt,$i],styles:["[_nghost-%COMP%]{--%NS%mat-toolbar-standard-height: 55px;height:var(--%NS%mat-toolbar-standard-height)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]{position:fixed;padding:0 48px;z-index:2;border-bottom:1px solid var(--%NS%color-toolbar-border);--%NS%mat-toolbar-container-background-color: var(--%NS%color-surface-toolbar);--%NS%mat-toolbar-standard-height: inherit}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-item[_ngcontent-%COMP%]{--%NS%irr-icon-size: 22px;color:var(--%NS%color-primary-label)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-item.active-button[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--%NS%color-primary),transparent 90%)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .mode[_ngcontent-%COMP%]{--%NS%irr-icon-font-weight: 300;--%NS%irr-icon-button-size: 36px}  .language-panel{--%NS%ids-panel-padding: .5rem 1rem !important}.lang-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:-6px;--%NS%mat-radio-state-layer-size: 36px}.lang-radio-group[_ngcontent-%COMP%]   .lang-radio[_ngcontent-%COMP%]     .mdc-form-field{width:100%}.lang-radio-group[_ngcontent-%COMP%]   .lang-radio[_ngcontent-%COMP%]     .mdc-form-field .mdc-label{display:flex;width:100%;align-items:center;justify-content:space-between;gap:16px}"]})}return e})();var mn=(()=>{class e{title="Irrtirer";store=l(ft);translate=l(Q);themeService=l(Xt);ngOnInit(){this.initLanguage(),this.initTheme()}initLanguage(){this.translate.addLangs(["pl","en"]),this.translate.use(this.getLanguage())}initTheme(){this.themeService.init()}getLanguage(){return this.store.selectSignal(Ne)()??this.translate.getBrowserLang()??"pl"}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["app-root"]],hostAttrs:[1,"flex","flex-col","h-dvh"],decls:3,vars:0,consts:[[1,"flex-1","mat-app-background"]],template:function(i,n){i&1&&(C(0,"app-toolbar"),d(1,"div",0),C(2,"router-outlet"),h())},dependencies:[jt,ln],encapsulation:2})}return e})();Xi(mn,tn).catch(e=>console.error(e));
