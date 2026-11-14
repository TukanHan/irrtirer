import{$ as ji,$b as ce,A as G,Aa as d,Ab as Ki,Ad as Oe,Ba as D,Bb as Ji,Bc as vt,Bd as Ot,C as di,Ca as dt,Cb as te,Cc as ue,Cd as Jt,D as Fi,Da as It,Dc as vi,E,Ea as qi,Eb as ie,F as j,Fa as pi,Fb as _i,Fc as ft,G as hi,Ga as Dt,Gb as qt,H as s,Hb as ee,Ia as k,Ib as ne,J as St,K as Nt,Ka as R,Kb as Qt,La as M,M as lt,Ma as b,Mb as Wt,N as At,Na as W,Nb as Ht,O as Rt,Oa as mt,Ob as ae,P as et,Pa as x,Pb as re,Q as nt,Qa as y,Qb as gt,Qc as ve,R as O,Sa as jt,Sc as Zt,Ta as Vt,Tb as oe,Tc as fe,Ua as ht,Ub as se,Uc as we,Ud as Le,Va as ct,Vb as le,Vc as xe,W as q,Wa as w,Wb as U,Wc as ye,Wd as wi,X as Bi,Xa as Qi,Xb as bt,Xc as Xt,Xd as Ee,Ya as f,Yb as me,Yc as ke,Yd as Ae,Za as Y,Zb as Ut,Zd as tt,_ as I,_a as K,a as v,aa as Vi,ac as de,b as B,ba as Ct,bc as $,ca as h,cc as _t,d as Oi,db as Wi,dc as ut,de as Re,f as Z,fa as Mt,gd as Se,ge as xi,hb as P,hd as Yt,id as wt,j as oi,jb as S,jc as st,jd as Ne,k as si,ka as p,kb as N,kc as Tt,kd as F,l as X,la as A,lb as gi,ld as Kt,m as Li,ma as T,mb as pt,mc as $t,md as fi,n as Ei,na as Pt,oa as Q,ob as Hi,p as Et,pa as zt,pb as Ui,pc as he,q as kt,qb as ot,qc as pe,r as Ai,ra as V,rb as $i,rc as ge,rd as Ce,s as Ri,sa as at,sb as Gt,sc as be,sd as Me,t as li,ta as rt,u as mi,ua as Gi,ub as H,uc as _e,ud as ze,v as Pi,vb as J,vd as xt,wa as Ft,wb as bi,wd as Ie,xa as Bt,xb as Zi,xc as ui,xd as De,y as ci,ya as u,yb as Xi,yc as L,yd as Te,za as c,zb as Yi}from"./chunk-33VKHNAS.js";var Pe=(()=>{class e{transform(t){return t?t.split(" "):[]}static \u0275fac=function(i){return new(i||e)};static \u0275pipe=Pt({name:"sentenceToWord",type:e,pure:!0})}return e})();function fn(e,r){if(e&1&&(dt(0,"span",3),f(1),It()),e&2){let t=r.$implicit,i=r.$index;ct("animation-delay",i*.75+"s"),w("normal",!0),h(),K(" ",t," ")}}var Fe=(()=>{class e{translate=s(U);static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["app-author"]],hostAttrs:[1,"flex","h-full","items-center","justify-center","bg-surface"],decls:8,vars:7,consts:[[1,"flex","gap-2.5","items-baseline","heading-hero"],[1,"word-fade-in",3,"normal","animationDelay"],[1,"word-fade-in","heading-hero-accent"],[1,"word-fade-in"]],template:function(i,n){if(i&1&&(dt(0,"div",0),Wi(1),S(2,"sentenceToWord"),Ft(3,fn,2,5,"span",1,Gi),dt(5,"span",2),f(6),S(7,"translate"),It()()),i&2){let a=N(2,3,n.translate.instant("aboutAuthor.itWas"));h(3),Bt(a),h(2),ct("animation-delay",a.length*.75+1+"s"),h(),K(" ",N(7,5,"aboutAuthor.me")," ")}},dependencies:[bt,Pe],encapsulation:2})}return e})();var Be=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["app-project"]],hostAttrs:[1,"flex","h-full","items-center","justify-center","bg-surface"],decls:3,vars:3,consts:[[1,"heading-hero"]],template:function(i,n){i&1&&(dt(0,"div",0),f(1),S(2,"translate"),It()),i&2&&(h(),Y(N(2,1,"aboutProject.content")))},dependencies:[bt],encapsulation:2})}return e})();var xn=new j("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Si=new j("MAT_DRAWER_CONTAINER"),Lt=(()=>{class e extends vt{_platform=s(st);_changeDetectorRef=s(H);_element=s(I);_ngZone=s(nt);_isInert=!1;_container=s(ki);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(Pi(50),li(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let i=this._element.nativeElement;this._isInert=t,t?i.setAttribute("inert","true"):i.removeAttribute("inert")}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:i}=this._container;return t!=null&&t.mode!=="over"&&t.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=(()=>{let t;return function(n){return(t||(t=q(e)))(n||e)}})();static \u0275cmp=(function(){let t=["*"];return p({type:e,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,a){n&2&&(ct("margin-left",a._container._contentMargins.left,"px")("margin-right",a._container._contentMargins.right,"px"),w("mat-drawer-content-hidden",a._shouldBeHidden()))},features:[P([{provide:vt,useExisting:e}]),Q],ngContentSelectors:t,decls:1,vars:0,template:function(n,a){n&1&&(M(),b(0))},encapsulation:2})})()}return e})(),yi=(()=>{class e{_elementRef=s(I);_focusTrapFactory=s(be);_focusMonitor=s($t);_platform=s(st);_ngZone=s(nt);_renderer=s(Mt);_interactivityChecker=s(ge);_doc=s(At);_isAnimating=!1;_container=s(Si,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=L(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=L(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(L(t))}_opened=O(!1);_openedVia=null;_animationStarted=new Z;_animationEnd=new Z;openedChange=new et(!0);_openedStream=this.openedChange.pipe(kt(t=>t),X(()=>{}));openedStart=this._animationStarted.pipe(kt(()=>this.opened),mi(void 0));_closedStream=this.openedChange.pipe(kt(t=>!t),X(()=>{}));closedStart=this._animationStarted.pipe(kt(()=>!this.opened),mi(void 0));_destroyed=new Z;onPositionChanged=new et;_content;_modeChanged=new Z;_injector=s(lt);_changeDetectorRef=s(H);constructor(){this.openedChange.pipe(G(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,i=this._elementRef.nativeElement;return[t.listen(i,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!_e(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(i,"transitionend",this._handleTransitionEvent),t.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(t,i){let n=this._elementRef.nativeElement.querySelector(t);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{l(),o(),n.removeAttribute("tabindex")},l=this._renderer.listen(n,"blur",a),o=this._renderer.listen(n,"mousedown",a)})),n.focus(i))}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Ct(()=>{let i=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(i)&&typeof t.focus=="function"&&t.focus(i)},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,i){t&&i&&(this._openedVia=i);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,i,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&i&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(li(1)).subscribe(l=>a(l?"open":"close"))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(t){t!==this._isAnimating&&(this._isAnimating=t,this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,n=i.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,i)),n.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=t=>{let i=this._elementRef.nativeElement;t.target===i&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=(function(){let t=["content"];return p({type:e,selectors:[["mat-drawer"]],viewQuery:function(a,l){if(a&1&&mt(t,5),a&2){let o;x(o=y())&&(l._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(a,l){a&2&&(V("align",null)("tabIndex",l.mode!=="side"?"-1":null),ct("visibility",!l._container&&!l.opened?"hidden":null),w("mat-drawer-end",l.position==="end")("mat-drawer-over",l.mode==="over")("mat-drawer-push",l.mode==="push")("mat-drawer-side",l.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:["*"],decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(a,l){a&1&&(M(),c(0,"div",1,0),b(2),d())},dependencies:[vt],encapsulation:2})})()}return e})(),ki=(()=>{class e{_dir=s(de,{optional:!0});_element=s(I);_ngZone=s(nt);_changeDetectorRef=s(H);_animationDisabled=ft();_transitionsEnabled=!1;_allDrawers;_drawers=new ji;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=L(t)}_autosize=s(xn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:L(t)}_backdropOverride=null;backdropClick=new et;_start=null;_end=null;_left=null;_right=null;_destroyed=new Z;_doCheckSubject=new Z;_contentMargins={left:null,right:null};_contentMarginChanges=new Z;get scrollable(){return this._userContent||this._content}_injector=s(lt);constructor(){let t=s(st),i=s(ue);this._dir?.change.pipe(G(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(G(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ci(this._allDrawers),G(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ci(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Ri(10),G(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,i-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();i+=n,t-=n}}t=t||null,i=i||null,(t!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:t,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(G(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(G(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(G(this._drawers.changes)).subscribe(()=>{Ct({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(G(Et(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let i=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?i.add(n):i.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=(function(){let t=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],i=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function n(l,o){if(l&1){let m=Dt();c(0,"div",1),k("click",function(){St(m);let _=R();return Nt(_._onBackdropClicked())}),d()}if(l&2){let m=R();w("mat-drawer-shown",m._isShowingBackdrop())}}function a(l,o){l&1&&(c(0,"mat-drawer-content"),b(1,2),d())}return p({type:e,selectors:[["mat-drawer-container"]],contentQueries:function(o,m,g){if(o&1&&W(g,Lt,5)(g,yi,5),o&2){let _;x(_=y())&&(m._content=_.first),x(_=y())&&(m._allDrawers=_)}},viewQuery:function(o,m){if(o&1&&mt(Lt,5),o&2){let g;x(g=y())&&(m._userContent=g.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(o,m){o&2&&w("mat-drawer-container-explicit-backdrop",m._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[P([{provide:Si,useExisting:e}])],ngContentSelectors:i,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(o,m){o&1&&(M(t),at(0,n,1,2,"div",0),b(1),b(2,1),at(3,a,2,0,"mat-drawer-content")),o&2&&(rt(m.hasBackdrop?0:-1),h(3),rt(m._content?-1:3))},dependencies:[Lt],styles:[`.mat-drawer-container {
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
`],encapsulation:2})})()}return e})(),ti=(()=>{class e extends Lt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=q(e)))(n||e)}})();static \u0275cmp=(function(){let t=["*"];return p({type:e,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[P([{provide:vt,useExisting:e},{provide:Lt,useExisting:e}]),Q],ngContentSelectors:t,decls:1,vars:0,template:function(n,a){n&1&&(M(),b(0))},encapsulation:2})})()}return e})(),Ni=(()=>{class e extends yi{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=L(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Tt(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Tt(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=q(e)))(n||e)}})();static \u0275cmp=(function(){let t=["*"];return p({type:e,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(n,a){n&2&&(V("tabIndex",a.mode!=="side"?"-1":null)("align",null),ct("top",a.fixedInViewport?a.fixedTopGap:null,"px")("bottom",a.fixedInViewport?a.fixedBottomGap:null,"px"),w("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side")("mat-sidenav-fixed",a.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[P([{provide:yi,useExisting:e}]),Q],ngContentSelectors:t,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,a){n&1&&(M(),c(0,"div",1,0),b(2),d())},dependencies:[vt],encapsulation:2})})()}return e})(),je=(()=>{class e extends ki{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=q(e)))(n||e)}})();static \u0275cmp=(function(){let t=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],i=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function n(l,o){if(l&1){let m=Dt();c(0,"div",1),k("click",function(){St(m);let _=R();return Nt(_._onBackdropClicked())}),d()}if(l&2){let m=R();w("mat-drawer-shown",m._isShowingBackdrop())}}function a(l,o){l&1&&(c(0,"mat-sidenav-content"),b(1,2),d())}return p({type:e,selectors:[["mat-sidenav-container"]],contentQueries:function(o,m,g){if(o&1&&W(g,ti,5)(g,Ni,5),o&2){let _;x(_=y())&&(m._content=_.first),x(_=y())&&(m._allDrawers=_)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(o,m){o&2&&w("mat-drawer-container-explicit-backdrop",m._backdropOverride)},exportAs:["matSidenavContainer"],features:[P([{provide:Si,useExisting:e},{provide:ki,useExisting:e}]),Q],ngContentSelectors:i,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(o,m){o&1&&(M(t),at(0,n,1,2,"div",0),b(1),b(2,1),at(3,a,2,0,"mat-sidenav-content")),o&2&&(rt(m.hasBackdrop?0:-1),h(3),rt(m._content?-1:3))},dependencies:[ti],styles:[`.mat-drawer-container {
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
`],encapsulation:2})})()}return e})(),Ve=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=E({imports:[vi,$,vi]})}return e})();var Ci=(()=>{class e{_listeners=[];notify(t,i){for(let n of this._listeners)n(t,i)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(i=>t!==i)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Bi({token:e,factory:e.\u0275fac})}return e})();var Ge=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=E({imports:[$]})}return e})();var kn=new j("ListOption"),Sn=(()=>{class e{_elementRef=s(I);static \u0275fac=function(i){return new(i||e)};static \u0275dir=T({type:e,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return e})(),Nn=(()=>{class e{_elementRef=s(I);static \u0275fac=function(i){return new(i||e)};static \u0275dir=T({type:e,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return e})(),Cn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=T({type:e,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return e})(),qe=(()=>{class e{_listOption=s(kn,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||e)};static \u0275dir=T({type:e,hostVars:4,hostBindings:function(i,n){i&2&&w("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return e})(),Mn=(()=>{class e extends qe{static \u0275fac=(()=>{let t;return function(n){return(t||(t=q(e)))(n||e)}})();static \u0275dir=T({type:e,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Q]})}return e})(),zn=(()=>{class e extends qe{static \u0275fac=(()=>{let t;return function(n){return(t||(t=q(e)))(n||e)}})();static \u0275dir=T({type:e,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Q]})}return e})(),In=new j("MAT_LIST_CONFIG"),Mi=(()=>{class e{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=L(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(L(t))}_disabled=O(!1);_defaultOptions=s(In,{optional:!0});static \u0275fac=function(i){return new(i||e)};static \u0275dir=T({type:e,hostVars:1,hostBindings:function(i,n){i&2&&V("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return e})(),Dn=(()=>{class e{_elementRef=s(I);_ngZone=s(nt);_listBase=s(Mi,{optional:!0});_platform=s(st);_hostElement;_isButtonElement;_noopAnimations=ft();_avatars;_icons;set lines(t){this._explicitLines=Tt(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=L(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(L(t))}_disabled=O(!1);_subscriptions=new Oi;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){s(Ut).load(Xt);let t=s(xe,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new we(this,this._ngZone,this._hostElement,this._platform,s(lt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Et(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&i===1;n.classList.toggle("mdc-list-item__primary-text",a),n.classList.toggle("mdc-list-item__secondary-text",!a)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(i){return new(i||e)};static \u0275dir=T({type:e,contentQueries:function(i,n,a){if(i&1&&W(a,Mn,4)(a,zn,4),i&2){let l;x(l=y())&&(n._avatars=l),x(l=y())&&(n._icons=l)}},hostVars:4,hostBindings:function(i,n){i&2&&(V("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),w("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return e})();var Qe=(()=>{class e extends Dn{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=L(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=q(e)))(n||e)}})();static \u0275cmp=(function(){let t=["unscopedContent"],i=["text"],n=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]];return p({type:e,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(o,m,g){if(o&1&&W(g,Nn,5)(g,Sn,5)(g,Cn,5),o&2){let _;x(_=y())&&(m._lines=_),x(_=y())&&(m._titles=_),x(_=y())&&(m._meta=_)}},viewQuery:function(o,m){if(o&1&&mt(t,5)(i,5),o&2){let g;x(g=y())&&(m._unscopedContent=g.first),x(g=y())&&(m._itemText=g.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(o,m){o&2&&(V("aria-current",m._getAriaCurrent()),w("mdc-list-item--activated",m.activated)("mdc-list-item--with-leading-avatar",m._avatars.length!==0)("mdc-list-item--with-leading-icon",m._icons.length!==0)("mdc-list-item--with-trailing-meta",m._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",m._hasBothLeadingAndTrailing())("_mat-animation-noopable",m._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Q],ngContentSelectors:["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"],decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(o,m){o&1&&(M(n),b(0),c(1,"span",1),b(2,1),b(3,2),c(4,"span",2,0),k("cdkObserveContent",function(){return m._updateItemLines(!0)}),b(6,3),d()(),b(7,4),b(8,5),D(9,"div",3))},dependencies:[he],encapsulation:2})})()}return e})();var We=(()=>{class e extends Mi{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(n){return(t||(t=q(e)))(n||e)}})();static \u0275cmp=(function(){let t=["*"];return p({type:e,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[P([{provide:Mi,useExisting:e}]),Q],ngContentSelectors:t,decls:1,vars:0,template:function(n,a){n&1&&(M(),b(0))},styles:[`.mdc-list {
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
`],encapsulation:2})})()}return e})();var He=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=E({imports:[pe,Yt,Se,$,Ge]})}return e})();var Ue=[{label:"km",denominator:1e5},{label:"m",denominator:100},{label:"cm",denominator:1},{label:"mm",denominator:.1},{label:"\xB5m",denominator:1e-4},{label:"nm",denominator:1e-7}],$e=(()=>{class e{transform(t){if(!t)return"0 x 0";let i=this.selectUnit(Math.max(t.width,t.height));return this.formatViewport(t,i)}selectUnit(t){for(let i of Ue)if(t>i.denominator)return i;return Ue.at(-1)}formatValue(t,i){return(t/i.denominator).toFixed(2)}formatViewport(t,i){return`${this.formatValue(t.width,i)} x ${this.formatValue(t.height,i)} ${i.label}`}static \u0275fac=function(i){return new(i||e)};static \u0275pipe=Pt({name:"sizeDisplay",type:e,pure:!0})}return e})();var On=(e,r)=>r.iconName;function Ln(e,r){if(e&1){let t=Dt();c(0,"button",2),k("click",function(){let n=St(t).$implicit,a=R();return Nt(a.onClick(n))}),c(1,"mat-icon",3),f(2),d()()}if(e&2){let t=r.$implicit,i=R();w("active",t.visibility()==="on"),u("hidden",t.visibility()==="hidden")("disabled",t.visibility()==="disabled")("matTooltip",i.translate.instant(t.tooltipKey)),h(2),Y(t.iconName)}}var Ze=(()=>{class e{viewportSize=ot.required();actions=ot.required();translate=s(U);onClick(t){this.isActive(t.visibility())&&t.onClick()}isActive(t){return t==="off"||t==="on"}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["app-ribbon"]],inputs:{viewportSize:[1,"viewportSize"],actions:[1,"actions"]},decls:5,vars:3,consts:[["mat-icon-button","","matTooltipPosition","below",1,"action",3,"hidden","disabled","active","matTooltip"],[1,"size-display"],["mat-icon-button","","matTooltipPosition","below",1,"action",3,"click","hidden","disabled","matTooltip"],[1,"material-symbols-outlined"]],template:function(i,n){i&1&&(Ft(0,Ln,3,6,"button",0,On),c(2,"span",1),f(3),S(4,"sizeDisplay"),d()),i&2&&(Bt(n.actions()),h(3),Y(N(4,1,n.viewportSize())))},dependencies:[ut,_t,ze,Me,Zt,$e],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;height:40px;position:sticky;box-shadow:0 0 10px 2px #000000a8;padding:0 20px;gap:6px}[_nghost-%COMP%]   .size-display[_ngcontent-%COMP%]{color:var(--%NS%color-contrast-medium);text-align:right;margin-left:auto}[_nghost-%COMP%]   .action[_ngcontent-%COMP%]{--%NS%irr-icon-button-size: 32px;color:var(--%NS%color-contrast-medium)}[_nghost-%COMP%]   .action.active[_ngcontent-%COMP%]{color:var(--%NS%color-contrast-highest)}"]})}return e})();var z=class e{x=0;y=0;static zero=new e(0,0);constructor(r,t){this.x=r,this.y=t}};var it=class{position;zoom;pxSize;scaleFactor;cmSize;startWorldPos;endWorldPos;constructor(r,t,i,n=1){this.position=r,this.zoom=t,this.pxSize=i,this.scaleFactor=n,this.cmSize=this.calculateCmSize(),this.startWorldPos=this.calculateStartWorldPos(),this.endWorldPos=this.calculateEndWorldPos()}calculateCmSize(){return{width:xt.pxToCm(this.pxSize.width)*this.zoom,height:xt.pxToCm(this.pxSize.height)*this.zoom}}calculateStartWorldPos(){return new z(this.position.x-this.cmSize.width/2,this.position.y-this.cmSize.height/2)}calculateEndWorldPos(){return new z(this.position.x+this.cmSize.width/2,this.position.y+this.cmSize.height/2)}getViewportPosition(r){return new z(this.getViewportXPosition(r.x),this.getViewportYPosition(r.y))}getViewportXPosition(r){return(r-this.startWorldPos.x)/this.cmSize.width*this.pxSize.width}getViewportYPosition(r){return(r-this.startWorldPos.y)/this.cmSize.height*this.pxSize.height}getWorldPosition(r){return new z(this.getWorldXPosition(r.x),this.getWorldYPosition(r.y))}getWorldXPosition(r){return r/this.pxSize.width*this.cmSize.width+this.startWorldPos.x}getWorldYPosition(r){return r/this.pxSize.height*this.cmSize.height+this.startWorldPos.y}};var ii=class e extends Ie{gridBaseColor="#424242";getOrder(){return-1}drawObject(r,t){let i=t.startWorldPos,n=t.endWorldPos,a=Math.pow(10,Math.ceil(Math.log(t.zoom)/Math.log(10)))/10,l=this.calculateGridColorsForZoom(a,t.zoom),o=[];for(let m=Math.floor(i.y/a)*a;n.y>m;m+=a){let g=t.getViewportYPosition(m),_=new z(0,g),ri=new z(t.pxSize.width,g);o.push({start:_,end:ri,depthLevel:e.getLineDepthLevel(m,a)})}for(let m=Math.floor(i.x/a)*a;n.x>m;m+=a){let g=t.getViewportXPosition(m),_=new z(g,0),ri=new z(g,t.pxSize.height);o.push({start:_,end:ri,depthLevel:e.getLineDepthLevel(m,a)})}r.lineWidth=t.scaleFactor,o.sort((m,g)=>g.depthLevel-m.depthLevel).forEach(m=>{this.drawLine(r,m.start,m.end,e.getLineColorForDepth(m.depthLevel,l))}),r.lineWidth=1}static getLineColorForDepth(r,t){return t[Math.min(r,t.length-1)]}static getLineDepthLevel(r,t){if(r===0)return 0;let i=Math.round(r/t);return i%100===0?1:i%10===0?2:3}drawLine(r,t,i,n){r.strokeStyle=n,r.beginPath(),r.moveTo(t.x,t.y),r.lineTo(i.x,i.y),r.stroke()}calculateGridColorsForZoom(r,t){let i=(t-r)/(r*10-r),n=De(this.gridBaseColor);return[this.gridBaseColor,n.alpha(e.linearInterpolation(.66,.8,1-i)).string(),n.alpha(e.linearInterpolation(.33,.66,1-i)).string(),n.alpha(e.linearInterpolation(0,.33,1-i)).string()]}static linearInterpolation(r,t,i){return r+(t-r)*i}};var Xe={isMovable:!0,showGrid:!0,minZoom:1e-9,maxZoom:1e9,backgroundColor:"transparent",canvasGridColor:"#3f3f3f"};var En=["canvas"],Ye=(()=>{class e{clicked=Ui();options=$i({});canvas=Gt.required("canvas");currentOptions=pt(()=>v(v({},Xe),this.options()));_viewport=O(new it(z.zero,1,{width:0,height:0}));viewport=this._viewport.asReadonly();isDragging=!1;ctx=pt(()=>this.canvas().nativeElement.getContext("2d"));gridObject;canvasObjects=[];handleMouseUp=this.onMouseUp.bind(this);handleMouseMove=this.onMouseMove.bind(this);handleMouseDown=this.onMouseDown.bind(this);handleWheelMove=this.onWheelMove.bind(this);resizeObserver=new ResizeObserver(()=>this.onResize());cd=s(H);configChangeEffect=Zi(()=>{this.configureCanvas(),this.redraw()});ngOnInit(){this.canvas().nativeElement.addEventListener("wheel",this.handleWheelMove),this.canvas().nativeElement.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp),this.resizeObserver.observe(this.canvas().nativeElement)}configureCanvas(){this.configureGrid()}configureGrid(){this.canvasObjects=this.canvasObjects.filter(i=>i!==this.gridObject);let t=this.currentOptions();t.showGrid&&(this.gridObject=new ii,t.canvasGridColor&&(this.gridObject.gridBaseColor=t.canvasGridColor),this.addCanvasObject(this.gridObject))}ngOnDestroy(){this.canvas().nativeElement.removeEventListener("wheel",this.handleWheelMove),this.canvas().nativeElement.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp),this.resizeObserver.unobserve(this.canvas().nativeElement)}onWheelMove(t){let i=this._viewport(),n=i.getWorldPosition(new z(t.offsetX,t.offsetY)),a=i.zoom*(t.deltaY/1e3),l=Math.max(Math.min(i.zoom+a,this.currentOptions().maxZoom),this.currentOptions().minZoom)/i.zoom,o=new z(n.x-(n.x-i.position.x)*l,n.y-(n.y-i.position.y)*l);this._viewport.set(new it(o,i.zoom*l,i.pxSize)),this.redraw(),t.preventDefault()}onMouseDown(t){this.clicked.emit(this._viewport().getWorldPosition(new z(t.offsetX,t.offsetY))),this.currentOptions().isMovable!==!1&&(document.body.style.cursor="grab",this.isDragging=!0,this.cd.markForCheck())}onMouseMove(t){if(this.currentOptions().isMovable!==!1&&this.isDragging){let i=this._viewport(),n=new z(i.position.x-xt.pxToCm(t.movementX)*i.zoom,i.position.y-xt.pxToCm(t.movementY)*i.zoom);this._viewport.set(new it(n,i.zoom,i.pxSize)),this.redraw()}}onMouseUp(){this.currentOptions().isMovable!==!1&&(document.body.style.cursor="",this.isDragging=!1,this.cd.markForCheck())}onResize(){let t=this.canvas().nativeElement.getBoundingClientRect(),i={height:t.height,width:t.width};this.canvas().nativeElement.width=i.width,this.canvas().nativeElement.height=i.height;let n=this._viewport();this._viewport.set(new it(n.position,n.zoom,i)),this.redraw()}setViewport(t=null,i=null,n=!1){let a=this._viewport();this._viewport.set(new it(i??a.position,t??a.zoom,a.pxSize)),n&&this.redraw()}addCanvasObject(t,i=!1){this.canvasObjects.push(t),this.canvasObjects.sort((n,a)=>n.getOrder()-a.getOrder()),t.setParent(this),i&&this.redraw()}removeObject(t){this.canvasObjects=this.canvasObjects.filter(i=>i!==t),this.canvasObjects.sort((i,n)=>i.getOrder()-n.getOrder())}removeObjects(t=!1){this.canvasObjects=this.canvasObjects.filter(i=>i===this.gridObject),t&&this.redraw()}redraw(){let t=this.ctx(),i=this._viewport();e.drawBackground(t,i.pxSize,this.currentOptions().backgroundColor),e.drawObjects(t,this.canvasObjects,i),this.cd.markForCheck()}saveAsImage(t){let i=this._viewport(),n=t?.scaleFactor??1,a={width:i.pxSize.width*n,height:i.pxSize.height*n},l=new it(i.position,i.zoom/n,a,n),o=new OffscreenCanvas(a.width,a.height),m=o.getContext("2d"),g=t?.backgroundColor??this.currentOptions().backgroundColor;return e.drawBackground(m,a,g),e.drawObjects(m,this.canvasObjects,l),o.convertToBlob({type:"image/png"})}static drawBackground(t,i,n){t.clearRect(0,0,i.width,i.height),t.fillStyle=n,t.fillRect(0,0,i.width,i.height)}static drawObjects(t,i,n){for(let a of i)a.getVisibility()&&a.drawObject(t,n)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["ac-active-canvas"]],viewQuery:function(i,n){i&1&&jt(n.canvas,En,5),i&2&&Vt()},inputs:{options:[1,"options"]},outputs:{clicked:"clicked",options:"optionsChange"},decls:2,vars:0,consts:[["canvas",""]],template:function(i,n){i&1&&qi(0,"canvas",null,0)},styles:["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   canvas[_ngcontent-%COMP%]{height:100%;width:100%}"]})}return e})();var An=["activeCanvas"],Ke=(()=>{class e{store=s(wt);translate=s(U);toolService=s(wi);destroyRef=s(Rt);tilesLinkDisabled$=this.store.select(fi).pipe(gt(this.destroyRef),X(t=>!t));sectorsLinkDisabled$=this.store.select(fi).pipe(gt(this.destroyRef),X(t=>!t));mosaicGeneratingLinkDisabled$=this.store.select(Ce).pipe(gt(this.destroyRef),X(t=>!t.length));activeCanvas=Gt.required("activeCanvas");viewportSize=pt(()=>this.activeCanvas().viewport().cmSize);ribbonActions=O([]);canvasOptions=pt(()=>({canvasGridColor:this.toolService.canvasGridColor()}));wasInitialized=!1;onActivate(t){let i=t.sectionEntered(this.activeCanvas(),!this.wasInitialized);this.ribbonActions.set(i.ribbon),this.wasInitialized=!0}onDeactivate(){this.ribbonActions.set([]),this.activeCanvas().removeObjects()}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["app-tool"]],viewQuery:function(i,n){i&1&&jt(n.activeCanvas,An,5),i&2&&Vt()},features:[P([wi,Ee])],decls:26,vars:16,consts:[["activeCanvas",""],[1,"tool-sidenav-container"],["mode","side","opened",""],["mat-list-item","","routerLink","config","routerLinkActive","active","matTooltipPosition","right","matTooltipClass","contrast",3,"matTooltip"],["matListIcon","",1,"material-symbols-outlined"],["mat-list-item","","routerLink","tray","routerLinkActive","active","matTooltipPosition","right","matTooltipClass","contrast",3,"disabled","matTooltip"],["mat-list-item","","routerLink","sectors","routerLinkActive","active","matTooltipPosition","right","matTooltipClass","contrast",3,"disabled","matTooltip"],["mat-list-item","","routerLink","generating","routerLinkActive","active","matTooltipPosition","right","matTooltipClass","contrast",3,"disabled","matTooltip"],[1,"content"],[3,"actions","viewportSize"],[1,"main"],[1,"canvas",3,"options"],[1,"panel"],[3,"activate","deactivate"]],template:function(i,n){i&1&&(c(0,"mat-sidenav-container",1)(1,"mat-sidenav",2)(2,"mat-nav-list")(3,"a",3)(4,"mat-icon",4),f(5,"flowsheet"),d()(),c(6,"a",5),S(7,"async"),c(8,"mat-icon",4),f(9,"dashboard"),d()(),c(10,"a",6),S(11,"async"),c(12,"mat-icon",4),f(13,"view_in_ar"),d()(),c(14,"a",7),S(15,"async"),c(16,"mat-icon",4),f(17,"rocket_launch"),d()()()(),c(18,"mat-sidenav-content")(19,"div",8),D(20,"app-ribbon",9),c(21,"div",10),D(22,"ac-active-canvas",11,0),c(24,"div",12)(25,"router-outlet",13),k("activate",function(l){return n.onActivate(l)})("deactivate",function(){return n.onDeactivate()}),d()()()()()()),i&2&&(h(3),u("matTooltip",n.translate.instant("tool.nav.projectSettings")),h(3),u("disabled",N(7,10,n.tilesLinkDisabled$))("matTooltip",n.translate.instant("tool.nav.tileTrey")),h(4),u("disabled",N(11,12,n.sectorsLinkDisabled$))("matTooltip",n.translate.instant("tool.nav.sectors")),h(4),u("disabled",N(15,14,n.mosaicGeneratingLinkDisabled$))("matTooltip",n.translate.instant("tool.nav.generation")),h(6),u("actions",n.ribbonActions())("viewportSize",n.viewportSize()),h(2),u("options",n.canvasOptions()))},dependencies:[ut,_t,Ve,Ni,je,ti,He,We,Qe,fe,Zt,Qt,Wt,re,Ht,Ze,Ye,Yi],styles:[".tool-sidenav-container[_ngcontent-%COMP%]{position:absolute;inset:55px 0 0}.tool-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{border-right:none}.mdc-list[_ngcontent-%COMP%]{padding-top:12px}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]{height:52px!important;--%NS%mat-list-list-item-label-text-color: var(--%NS%color-contrast-high)}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item.active[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--%NS%color-primary),transparent 90%)}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%color-primary);font-weight:300}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]:focus{--%NS%mat-list-list-item-focus-state-layer-opacity: 0}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]     .mat-mdc-list-item-unscoped-content{display:flex}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]     .mat-mdc-list-item-unscoped-content mat-icon{height:30px;width:30px;font-size:30px}mat-sidenav-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}mat-sidenav-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:calc(100% - 40px)}mat-sidenav-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]{display:flex;flex:1 1 0}mat-sidenav-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{position:relative;width:250px;box-sizing:border-box;border-left:1px solid var(--%NS%color-contrast-light)}"]})}return e})();var Je=[{path:"",redirectTo:"project",pathMatch:"full"},{path:"tool",component:Ke,loadChildren:()=>import("./chunk-LPHA7SAM.js").then(e=>e.toolRoutes)},{path:"project",component:Be},{path:"author",component:Fe}];var tn=Kt(null,F(tt.projectCreated,(e,{project:r})=>v({},r)),F(tt.projectCanceled,()=>null),F(tt.mosaicWidthChanged,(e,{width:r})=>B(v({},e),{config:B(v({},e.config),{mosaicWidth:r})})),F(tt.sectorModified,(e,{modifiedSector:r})=>B(v({},e),{sectors:xi.addOrUpdate([...e.sectors],r,t=>t.id===r.id)})),F(tt.sectorRemoved,(e,{sector:r})=>B(v({},e),{sectors:[...e.sectors.filter(t=>t.id!==r.id)]})),F(tt.sectorShifted,(e,{prevIndex:r,newIndex:t})=>B(v({},e),{sectors:xi.moveElemInArray([...e.sectors],r,t)})),F(tt.tilesSetCommitted,(e,{tilesSet:r})=>B(v({},e),{tilesSets:[...e.tilesSets.filter(t=>t.id!==r.id),r]})),F(tt.tilesSetRemoved,(e,{removedTilesSet:r})=>B(v({},e),{tilesSets:e.tilesSets.filter(t=>t!==r)})));var en="state";function Rn(e,r){localStorage.setItem(r,JSON.stringify(e))}function Pn(e){let r=localStorage.getItem(e);return r?JSON.parse(r):null}function nn(e){let r=!0;return function(t,i){let n=e(t,i);if(r){r=!1;let a=Pn(en);return Fn(a),v(v({},n),a)}return Rn(n,en),n}}function Fn(e){e?.mosaicProject?.tilesSets.forEach(r=>{r.tiles.forEach(t=>{t.vertices.forEach(i=>Te.restore(i))})})}var Bn=/^\.{1,2}$/,rn=new j("TRANSLATE_HTTP_LOADER_CONFIG"),jn=class ei{http;config;constructor(){this.config=v({resources:[],enforceLoading:!1,useHttpBackend:!1},s(rn)),this.http=this.config.useHttpBackend?new _i(s(ie)):s(_i)}getTranslation(t){let i=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"",n=this.config.resources.map(a=>{let l;return Li(()=>{let o=encodeURIComponent(t);return l=`${typeof a=="string"?`${a}${o}.json`:`${a.prefix}${o}${a.suffix??".json"}`}${i}`,Bn.test(t)?si(()=>new Error(`"${t}" is a path segment, not a language`)):this.http.get(l)}).pipe(Ai(o=>(this.reportError({lang:t,resource:a,url:l,error:o}),this.config.failOnError?si(()=>o):oi({}))))});return n.length===0?oi({}):Ei(n).pipe(X(a=>a.reduce((l,o)=>this.config.flatten?v(v({},l),on(o??{})):le(l,o),{})))}reportError(t){if(this.config.onLoadError)try{this.config.onLoadError(t)}catch(i){console.warn("@ngx-translate/http-loader: onLoadError callback failed:",i)}else this.config.failOnError||console.warn(`@ngx-translate/http-loader: error loading translation for ${t.lang}:`,t.error)}static \u0275fac=function(i){return new(i||ei)};static \u0275prov=Fi({token:ei,factory:ei.\u0275fac})};function on(e){return Object.fromEntries(Object.entries(e).flatMap(([r,t])=>t!==null&&typeof t=="object"&&!Array.isArray(t)&&Object.keys(t).length?Object.entries(on(t)).map(([i,n])=>[`${r}.${i}`,n]):[[r,t]]))}function sn(e={}){if("resources"in e&&e.resources)return an(e);let r=e;return an({enforceLoading:r.enforceLoading??!1,useHttpBackend:r.useHttpBackend??!1,failOnError:r.failOnError??!1,flatten:r.flatten??!1,onLoadError:r.onLoadError,resources:[{prefix:r.prefix??"/assets/i18n/",suffix:r.suffix??".json"}]})}function an(e={}){return[{provide:rn,useValue:v({resources:["/assets/i18n/"]},e)},{provide:se,useClass:jn}]}var ln=Kt({},F(Ot.languageChanged,(e,{lang:r})=>B(v({},e),{lang:r})),F(Ot.themeChanged,(e,{theme:r})=>B(v({},e),{theme:r})));var mn={providers:[ae(Je),qt(),Ne({mosaicProject:tn,userPreferences:ln},{metaReducers:[nn]}),me({loader:sn({prefix:"/irrtirer/assets/i18n/",suffix:".json"}),fallbackLang:"pl",lang:"pl"}),{provide:Re,useValue:{appearance:"outline"}}]};var Vn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=T({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return e})(),cn=(()=>{class e{_elementRef=s(I);_platform=s(st);_document=s(At);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=(function(){let t=["*",[["mat-toolbar-row"]]];return p({type:e,selectors:[["mat-toolbar"]],contentQueries:function(a,l,o){if(a&1&&W(o,Vn,5),a&2){let m;x(m=y())&&(l._toolbarRows=m)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(a,l){a&2&&(Qi(l.color?"mat-"+l.color:""),w("mat-toolbar-multiple-rows",l._toolbarRows.length>0)("mat-toolbar-single-row",l._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(a,l){a&1&&(M(t),b(0),b(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})})()}return e})();var dn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=E({imports:[$]})}return e})();var hn={github:"github-mark.svg",pl:"pl.svg",gb:"gb.svg"},pn=(()=>{class e{matIconRegistry;domSanitizer;constructor(t,i){this.matIconRegistry=t,this.domSanitizer=i;for(let n in hn)this.matIconRegistry.addSvgIcon(n,this.domSanitizer.bypassSecurityTrustResourceUrl(`../irrtirer/assets/icons/${hn[n]}`))}static \u0275fac=function(i){return new(i||e)(hi(ce),hi(ne))};static \u0275mod=A({type:e});static \u0275inj=E({providers:[qt(ee())],imports:[Ji]})}return e})();var ni=class{source;value;constructor(r,t){this.source=r,this.value=t}},qn={provide:ke,useExisting:di(()=>Ii),multi:!0},gn=new j("MatRadioGroup"),Qn=new j("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),Ii=(()=>{class e{_changeDetector=s(H);_value=null;_name=s(ui).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new et;_radios;color;get name(){return this._name}set name(t){this._name=t,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition=t==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(t){this._selected=t,this.value=t?t.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markRadiosForCheck()}get required(){return this._required}set required(t){this._required=t,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(t=>t===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(t=>{t.name=this.name,t._markForCheck()})}_updateSelectedRadioFromValue(){let t=this._selected!==null&&this._selected.value===this._value;this._radios&&!t&&(this._selected=null,this._radios.forEach(i=>{i.checked=this.value===i.value,i.checked&&(this._selected=i)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new ni(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(t=>t._markForCheck())}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetector.markForCheck()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=T({type:e,selectors:[["mat-radio-group"]],contentQueries:function(i,n,a){if(i&1&&W(a,ai,5),i&2){let l;x(l=y())&&(n._radios=l)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",J],required:[2,"required","required",J],disabledInteractive:[2,"disabledInteractive","disabledInteractive",J]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[P([qn,{provide:gn,useExisting:e}])]})}return e})(),ai=(()=>{class e{_elementRef=s(I);_changeDetector=s(H);_focusMonitor=s($t);_radioDispatcher=s(Ci);_defaultOptions=s(Qn,{optional:!0});_ngZone=s(nt);_renderer=s(Mt);_uniqueId=s(ui).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===t),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(t){this._labelPosition=t}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(t){this._setDisabled(t)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(t){t!==this._required&&this._changeDetector.markForCheck(),this._required=t}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(t){this._color=t}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new et;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=ft();_injector=s(lt);constructor(){s(Ut).load(Xt);let t=s(gn,{optional:!0}),i=s(new Hi("tabindex"),{optional:!0});this.radioGroup=t,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,i&&(this.tabIndex=bi(i,0))}focus(t,i){i?this._focusMonitor.focusVia(this._inputElement,i,t):this._inputElement.nativeElement.focus(t)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((t,i)=>{t!==this.id&&i===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{!t&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new ni(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(t){if(t.stopPropagation(),!this.checked&&!this.disabled){let i=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),i&&this.radioGroup._emitChangeEvent())}}_setDisabled(t){this._disabled!==t&&(this._disabled=t,this._changeDetector.markForCheck())}_onInputClick=t=>{this.disabled&&this.disabledInteractive&&t.preventDefault()};_updateTabIndex(){let t=this.radioGroup,i;if(!t||!t.selected||this.disabled?i=this.tabIndex:i=t.selected===this?this.tabIndex:-1,i!==this._previousTabIndex){let n=this._inputElement?.nativeElement;n&&(n.setAttribute("tabindex",i+""),this._previousTabIndex=i,Ct(()=>{queueMicrotask(()=>{t&&t.selected&&t.selected!==this&&document.activeElement===n&&(t.selected?._inputElement.nativeElement.focus(),document.activeElement===n&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=(function(){let t=["input"],i=["formField"];return p({type:e,selectors:[["mat-radio-button"]],viewQuery:function(l,o){if(l&1&&mt(t,5)(i,7,I),l&2){let m;x(m=y())&&(o._inputElement=m.first),x(m=y())&&(o._rippleTrigger=m.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(l,o){l&1&&k("focus",function(){return o._inputElement.nativeElement.focus()}),l&2&&(V("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),w("mat-primary",o.color==="primary")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("mat-mdc-radio-checked",o.checked)("mat-mdc-radio-disabled",o.disabled)("mat-mdc-radio-disabled-interactive",o.disabledInteractive)("_mat-animation-noopable",o._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",J],tabIndex:[2,"tabIndex","tabIndex",a=>a==null?0:bi(a)],checked:[2,"checked","checked",J],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",J],required:[2,"required","required",J],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",J]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:["*"],decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition","for"],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(l,o){l&1&&(M(),c(0,"label",2,0)(2,"span",3),D(3,"span",4),c(4,"input",5,1),k("change",function(g){return o._onInputInteraction(g)}),d(),c(6,"span",6),D(7,"span",7)(8,"span",8),d(),c(9,"span",9),D(10,"span",10),d()(),c(11,"span",11),b(12),d()()),l&2&&(u("labelPosition",o.labelPosition)("for",o.inputId),h(2),w("mdc-radio--disabled",o.disabled),h(2),u("id",o.inputId)("checked",o.checked)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),V("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),h(5),u("matRippleTrigger",o._rippleTrigger.nativeElement)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0))},dependencies:[ye,Le],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})})()}return e})(),bn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=E({imports:[Yt,ai,$]})}return e})();var Hn=["*"];function Un(e,r){e&1&&(c(0,"span",3),b(1),d())}function $n(e,r){if(e&1&&(c(0,"a",1),pi(1,4),d()),e&2){let t=R(),i=ht(1);u("href",t.link(),Vi),h(),u("ngTemplateOutlet",i)}}function Zn(e,r){if(e&1&&(c(0,"a",2),pi(1,4),d()),e&2){let t=R(),i=ht(1);u("routerLink",t.link()),h(),u("ngTemplateOutlet",i)}}var _n=(()=>{class e{link=ot.required();linkType=ot("internal");static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["ids-flat-link"]],inputs:{link:[1,"link"],linkType:[1,"linkType"]},ngContentSelectors:Hn,decls:4,vars:1,consts:[["linkContent",""],["target","_blank","rel","noopener noreferrer",1,"ids-flat-action","ids-flat-link",3,"href"],["routerLinkActive","ids-active-link",1,"ids-flat-action","ids-flat-link",3,"routerLink"],[1,"ids-flat-action-content","ids-button-label"],[3,"ngTemplateOutlet"]],template:function(i,n){i&1&&(M(),zt(0,Un,2,0,"ng-template",null,0,gi),at(2,$n,2,2,"a",1)(3,Zn,2,2,"a",2)),i&2&&(h(2),rt(n.linkType()==="external"?2:3))},dependencies:[Xi,Wt,Ht],styles:["[_nghost-%COMP%]{--%NS%ids-glow-color: var(--%NS%ids-neutral);--%NS%ids-button-content-color: var(--%NS%ids-text-highlight-color)}[_nghost-%COMP%]   .ids-flat-action.ids-active-link[_ngcontent-%COMP%]:before{opacity:1}[_nghost-%COMP%]   .ids-flat-action.ids-active-link[_ngcontent-%COMP%]   .ids-flat-action-content[_ngcontent-%COMP%]{font-weight:700}",'.ids-flat-action[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;padding:max(0px,calc((var(--%NS%ids-flat-button-size, 36px) - var(--%NS%ids-flat-button-icon-size, 24px)) / 2));border:0;outline:none;position:relative;border-radius:var(--%NS%ids-action-radius);--%NS%ids-button-text-shadow-layer-1: 0 0 4px color-mix(in srgb, var(--%NS%ids-button-content-color) var(--%NS%ids-shadow-layer-1-transparent-mix), transparent);--%NS%ids-button-text-shadow-layer-2: 0 0 8px color-mix(in srgb, var(--%NS%ids-glow-color) var(--%NS%ids-shadow-layer-2-transparent-mix), transparent);--%NS%ids-button-text-shadow: var(--%NS%ids-button-text-shadow-layer-1)}.ids-flat-action[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-color:color-mix(in srgb,var(--%NS%ids-glow-color) 10%,transparent);border-radius:inherit;opacity:0;filter:blur(1);pointer-events:none;transition:opacity .4s ease,filter .4s ease,background-color .4s ease}.ids-flat-action[_ngcontent-%COMP%]:active:not(:disabled)   .ids-flat-action[_ngcontent-%COMP%]:focus-visible:not(:disabled), .ids-flat-action[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus-visible){--%NS%ids-button-text-shadow: var(--%NS%ids-button-text-shadow-layer-1), var(--%NS%ids-button-text-shadow-layer-2)}[_ngcontent-%COMP%]:is(.ids-flat-action:active:not(:disabled),.ids-flat-action:focus-visible:not(:disabled)):before{opacity:1}.ids-flat-action[_ngcontent-%COMP%]:active:not(:disabled):before{filter:blur(2px)}.ids-flat-action[_ngcontent-%COMP%]   .ids-flat-action-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px;padding:0 6px;position:relative;z-index:1;color:var(--%NS%ids-button-content-color);text-shadow:var(--%NS%ids-button-text-shadow);transition:color .2s ease,text-shadow .2s ease;--%NS%irr-icon-margin-left: -6px;--%NS%irr-icon-margin-right: -6px}',"[_nghost-%COMP%]{display:inline-block;--%NS%ids-action-radius: 9999px}"]})}return e})();var Di=(()=>{class e{menu=ot.required();host=s(I);onClicked(){this.menu().toggle(this.host.nativeElement)}static \u0275fac=function(i){return new(i||e)};static \u0275dir=T({type:e,selectors:[["ids-flat-button","idsMenuTrigger",""],["ids-framed-button","idsMenuTrigger",""]],hostBindings:function(i,n){i&1&&k("clicked",function(){return n.onClicked()})},inputs:{menu:[1,"menu"]}})}return e})();var Xn=["*"];function Yn(e,r){e&1&&(c(0,"div",1),b(1),d())}var Ti=(()=>{class e{host=s(I);isOpen=O(!1);origin=O(this.host.nativeElement);positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}];toggle(t){this.origin.set(t),this.isOpen.update(i=>!i)}close(){this.isOpen.set(!1)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["ids-menu"]],ngContentSelectors:Xn,decls:1,vars:4,consts:[["cdkConnectedOverlay","",3,"overlayOutsideClick","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayPush"],[1,"ids-panel"]],template:function(i,n){i&1&&(M(),zt(0,Yn,2,0,"ng-template",0),k("overlayOutsideClick",function(){return n.close()})),i&2&&u("cdkConnectedOverlayOrigin",n.origin())("cdkConnectedOverlayOpen",n.isOpen())("cdkConnectedOverlayPositions",n.positions)("cdkConnectedOverlayPush",!0)},dependencies:[ve],styles:[".ids-panel[_ngcontent-%COMP%]{display:block;border:1px solid var(--%NS%ids-border-color);border-radius:6px;background-color:color-mix(in srgb,var(--%NS%ids-panel-color) 75%,transparent);padding:.5rem 1rem;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);box-shadow:0 10px 30px color-mix(in srgb,black var(--%NS%ids-shadow-layer-1-transparent-mix),transparent)}"]})}return e})();var un=(()=>{class e{translate=s(U);themeService=s(Jt);destroyRef=s(Rt);store=s(wt);selectedLanguage=O(this.translate.getCurrentLang()??"pl");themeMode=oe(this.themeService.theme$);ngOnInit(){this.translate.onLangChange.pipe(gt(this.destroyRef)).subscribe(t=>this.selectedLanguage.set(t.lang))}languageChanged(t){this.translate.use(t.value),this.store.dispatch(Ot.languageChanged({lang:t.value}))}toggleTheme(){let t=this.themeMode()==="dark"?"light":"dark";this.themeService.changeTheme(t)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["app-toolbar"]],decls:36,vars:24,consts:[["menu",""],[1,"toolbar"],["link","/tool","linkType","internal"],[1,"text-base"],["link","/project","linkType","internal"],["link","/author","linkType","internal"],[1,"flex-1"],["variant","accent",1,"toolbar-item","mode",3,"clicked"],[1,"material-symbols-outlined"],["variant","accent","idsMenuTrigger","",1,"toolbar-item",3,"menu"],[1,"block","min-w-5"],[1,"lang-radio-group",3,"change","value"],["value","pl",1,"lang-radio"],["svgIcon","pl"],["value","en",1,"lang-radio"],["svgIcon","gb"],["link","https://github.com/TukanHan/irrtirer","linkType","external"],["svgIcon","github"]],template:function(i,n){if(i&1&&(c(0,"mat-toolbar",1)(1,"ids-flat-link",2)(2,"span",3),f(3),S(4,"translate"),d()(),c(5,"ids-flat-link",4),f(6),S(7,"translate"),d(),c(8,"ids-flat-link",5),f(9),S(10,"translate"),d(),D(11,"span",6),c(12,"ids-flat-button",7),k("clicked",function(){return n.toggleTheme()}),c(13,"mat-icon",8),f(14),d()(),c(15,"ids-flat-button",9)(16,"mat-icon"),f(17,"language"),d(),c(18,"span",10),f(19),S(20,"titlecase"),d()(),c(21,"ids-menu",null,0)(23,"mat-radio-group",11),k("change",function(l){return n.languageChanged(l)}),c(24,"mat-radio-button",12),f(25),S(26,"translate"),D(27,"mat-icon",13),d(),c(28,"mat-radio-button",14),f(29),S(30,"translate"),D(31,"mat-icon",15),d()()(),c(32,"ids-flat-link",16),D(33,"mat-icon",17),f(34),S(35,"translate"),d()()),i&2){let a=ht(22);h(3),Y(N(4,10,"title")),h(3),K(" ",N(7,12,"aboutProject.header")," "),h(3),K(" ",N(10,14,"aboutAuthor.header")," "),h(5),Y(n.themeMode()==="dark"?"dark_mode":"light_mode"),h(),u("menu",a),h(4),Y(N(20,16,n.selectedLanguage())),h(4),u("value",n.selectedLanguage()),h(2),K(" ",N(26,18,"toolbar.languages.polish")," "),h(4),K(" ",N(30,20,"toolbar.languages.english")," "),h(5),K(" ",N(35,22,"toolbar.github")," ")}},dependencies:[ut,_t,dn,cn,pn,bn,Ii,ai,Ae,_n,Ti,Di,bt,Ki],styles:["[_nghost-%COMP%]{--%NS%mat-toolbar-standard-height: 55px;height:var(--%NS%mat-toolbar-standard-height)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]{position:fixed;padding:0 48px;z-index:2;border-bottom:1px solid var(--%NS%color-toolbar-border);--%NS%mat-toolbar-container-background-color: var(--%NS%color-surface-toolbar);--%NS%mat-toolbar-standard-height: inherit}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-item[_ngcontent-%COMP%]{--%NS%irr-icon-button-icon-size: 22px;color:var(--%NS%color-primary-label)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-item.active-button[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--%NS%color-primary),transparent 90%)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .mode[_ngcontent-%COMP%]{--%NS%irr-icon-font-weight: 300;--%NS%irr-icon-button-size: 36px;--%NS%irr-icon-button-icon-size: 22px}.lang-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:150px;margin-left:-6px;--%NS%mat-radio-state-layer-size: 36px}.lang-radio-group[_ngcontent-%COMP%]   .lang-radio[_ngcontent-%COMP%]     .mdc-form-field{width:100%}.lang-radio-group[_ngcontent-%COMP%]   .lang-radio[_ngcontent-%COMP%]     .mdc-form-field .mdc-label{display:flex;width:100%;align-items:center;justify-content:space-between;gap:16px}"]})}return e})();var vn=(()=>{class e{title="Irrtirer";store=s(wt);translate=s(U);themeService=s(Jt);ngOnInit(){this.initLanguage(),this.initTheme()}initLanguage(){this.translate.addLangs(["pl","en"]),this.translate.use(this.getLanguage())}initTheme(){this.themeService.init()}getLanguage(){return this.store.selectSignal(Oe)()??this.translate.getBrowserLang()??"pl"}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=p({type:e,selectors:[["app-root"]],hostAttrs:[1,"flex","flex-col","h-dvh"],decls:3,vars:0,consts:[[1,"flex-1","mat-app-background"]],template:function(i,n){i&1&&(D(0,"app-toolbar"),c(1,"div",0),D(2,"router-outlet"),d())},dependencies:[Qt,un],encapsulation:2})}return e})();te(vn,mn).catch(e=>console.error(e));
