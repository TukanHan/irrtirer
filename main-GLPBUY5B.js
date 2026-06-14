import{$c as Ht,$d as Ti,Ab as Ze,B as de,Ba as Ct,Bb as $e,C as Le,D as E,Da as C,Db as Vt,E as R,Ea as Z,F as le,Fa as D,Fb as Gt,G as r,Ga as h,Gb as Nt,Ha as G,Hb as Xe,I as vt,Ia as at,Ib as Ye,J as wt,Ja as g,Jb as lt,K as ot,Ka as b,Kc as Wt,L as Et,Lc as li,Ld as yi,M as Lt,Ma as Rt,Mb as Ke,Mc as mi,N as tt,Na as Ft,Nb as Je,Nc as hi,Nd as be,O as et,Oa as Mt,Ob as ti,Oc as pi,Od as Ci,P as H,Pa as rt,Pb as Q,Pc as Ut,Pd as K,Qa as u,Qb as mt,Qc as ui,Ra as Fe,Rb as ei,Sa as p,Sb as Qt,T as j,Ta as $,U as ze,Ua as X,Ub as ii,Vb as ni,Vd as Mi,Wb as q,X as T,Xb as ht,Y as Ae,Yb as pt,Z as xt,Za as Be,Zd as Di,_ as d,_c as _i,_d as Si,a as _,ab as z,ad as gt,ae as fe,b as P,ba as kt,bd as gi,cb as v,cc as it,cd as A,d as Se,db as w,dc as St,dd as Zt,ed as ge,f as W,fa as m,fb as Dt,fc as qt,ga as L,ha as I,hb as je,ia as zt,ib as Ve,ic as oi,j as ae,ja as V,jb as me,jc as ai,jd as bi,k as U,kb as Ge,kc as ri,kd as $t,lb as Bt,lc as si,ld as fi,m as Te,ma as F,md as Xt,na as st,nb as N,nc as ci,nd as bt,o as Ot,oa as ct,ob as Y,od as vi,p as ft,pa as Pe,pb as he,pc as ue,pd as wi,q as Ie,qb as Ne,qc as O,qd as xi,r as Oe,ra as At,s as re,sa as Pt,sb as Qe,sd as ki,t as se,ta as x,tb as qe,tc as ut,td as Tt,u as Ee,ua as c,ub as We,uc as di,ud as Yt,va as l,vb as Ue,vc as _e,wa as y,x as ce,xa as dt,xb as He,xc as _t,ya as yt,yb as pe,z as B,za as Re,zb as jt}from"./chunk-OZMJNPS7.js";var Ii=(()=>{class i{transform(t){return t?t.split(" "):[]}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275pipe=zt({name:"sentenceToWord",type:i,pure:!0})}}return i})();function mn(i,o){if(i&1&&(dt(0,"span",3),p(1),yt()),i&2){let t=o.$implicit,e=o.$index;rt("animation-delay",e*.75+"s"),u("normal",!0),d(),X(" ",t," ")}}var Oi=(()=>{class i{constructor(){this.translate=r(Q)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-author"]],hostAttrs:[1,"flex","h-full","items-center","justify-center","bg-surface"],decls:8,vars:7,consts:[[1,"flex","gap-2.5","items-baseline","heading-hero"],[1,"word-fade-in",3,"normal","animationDelay"],[1,"word-fade-in","heading-hero-accent"],[1,"word-fade-in"]],template:function(e,n){if(e&1&&(dt(0,"div",0),Be(1),v(2,"sentenceToWord"),At(3,mn,2,5,"span",1,Pe),dt(5,"span",2),p(6),v(7,"translate"),yt()()),e&2){let a=w(2,3,n.translate.instant("aboutAuthor.itWas"));d(3),Pt(a),d(2),rt("animation-delay",a.length*.75+1+"s"),d(),X(" ",w(7,5,"aboutAuthor.me")," ")}},dependencies:[mt,Ii],encapsulation:2})}}return i})();var Ei=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-project"]],hostAttrs:[1,"flex","h-full","items-center","justify-center","bg-surface"],decls:3,vars:3,consts:[[1,"heading-hero"]],template:function(e,n){e&1&&(dt(0,"div",0),p(1),v(2,"translate"),yt()),e&2&&(d(),$(w(2,1,"aboutProject.content")))},dependencies:[mt],encapsulation:2})}}return i})();var Jt=["*"],pn=["content"],Li=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],zi=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function un(i,o){if(i&1){let t=Ct();c(0,"div",1),C("click",function(){vt(t);let n=Z();return wt(n._onBackdropClicked())}),l()}if(i&2){let t=Z();u("mat-drawer-shown",t._isShowingBackdrop())}}function _n(i,o){i&1&&(c(0,"mat-drawer-content"),h(1,2),l())}function gn(i,o){if(i&1){let t=Ct();c(0,"div",1),C("click",function(){vt(t);let n=Z();return wt(n._onBackdropClicked())}),l()}if(i&2){let t=Z();u("mat-drawer-shown",t._isShowingBackdrop())}}function bn(i,o){i&1&&(c(0,"mat-sidenav-content"),h(1,2),l())}var fn=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
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
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
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
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
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
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
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
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
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
`;var vn=new R("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),xe=new R("MAT_DRAWER_CONTAINER"),It=(()=>{class i extends ut{_platform=r(it);_changeDetectorRef=r(N);_element=r(T);_ngZone=r(et);_isInert=!1;_container=r(we);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(Ee(50),re(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let e=this._element.nativeElement;this._isInert=t,t?e.setAttribute("inert","true"):e.removeAttribute("inert")}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=(()=>{let t;return function(n){return(t||(t=j(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,n){e&2&&(rt("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),u("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[z([{provide:ut,useExisting:i}]),V],ngContentSelectors:Jt,decls:1,vars:0,template:function(e,n){e&1&&(D(),h(0))},encapsulation:2})}return i})(),ve=(()=>{class i{_elementRef=r(T);_focusTrapFactory=r(si);_focusMonitor=r(qt);_platform=r(it);_ngZone=r(et);_renderer=r(kt);_interactivityChecker=r(ri);_doc=r(Et);_container=r(xe,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=O(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=O(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(O(t))}_opened=H(!1);_openedVia=null;_animationStarted=new W;_animationEnd=new W;openedChange=new tt(!0);_openedStream=this.openedChange.pipe(ft(t=>t),U(()=>{}));openedStart=this._animationStarted.pipe(ft(()=>this.opened),se(void 0));_closedStream=this.openedChange.pipe(ft(t=>!t),U(()=>{}));closedStart=this._animationStarted.pipe(ft(()=>!this.opened),se(void 0));_destroyed=new W;onPositionChanged=new tt;_content;_modeChanged=new W;_injector=r(ot);_changeDetectorRef=r(N);constructor(){this.openedChange.pipe(B(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!ci(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{s(),S(),n.removeAttribute("tabindex")},s=this._renderer.listen(n,"blur",a),S=this._renderer.listen(n,"mousedown",a)})),n.focus(e))}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":xt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,e,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),(this._container?._content||this._container?._userContent)?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(re(1)).subscribe(s=>a(s?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,n=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,e)),n.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["mat-drawer"]],viewQuery:function(e,n){if(e&1&&at(pn,5),e&2){let a;g(a=b())&&(n._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,n){e&2&&(F("align",null)("tabIndex",n.mode!=="side"?"-1":null),rt("visibility",!n._container&&!n.opened?"hidden":null),u("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Jt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(D(),c(0,"div",1,0),h(2),l())},dependencies:[ut],encapsulation:2})}return i})(),we=(()=>{class i{_dir=r(ni,{optional:!0});_element=r(T);_ngZone=r(et);_changeDetectorRef=r(N);_animationDisabled=_t();_transitionsEnabled=!1;_allDrawers;_drawers=new Ae;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=O(t)}_autosize=r(vn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:O(t)}_backdropOverride=null;backdropClick=new tt;_start=null;_end=null;_left=null;_right=null;_destroyed=new W;_doCheckSubject=new W;_contentMargins={left:null,right:null};_contentMarginChanges=new W;get scrollable(){return this._userContent||this._content}_injector=r(ot);constructor(){let t=r(it),e=r(di);this._dir?.change.pipe(B(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(B(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ce(this._allDrawers),B(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ce(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Oe(10),B(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,e-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();e+=n,t-=n}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(B(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(B(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(B(this._drawers.changes)).subscribe(()=>{xt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(B(Ot(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?e.add(n):e.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(e,n,a){if(e&1&&G(a,It,5)(a,ve,5),e&2){let s;g(s=b())&&(n._content=s.first),g(s=b())&&(n._allDrawers=s)}},viewQuery:function(e,n){if(e&1&&at(It,5),e&2){let a;g(a=b())&&(n._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,n){e&2&&u("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[z([{provide:xe,useExisting:i}])],ngContentSelectors:zi,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(D(Li),st(0,un,1,2,"div",0),h(1),h(2,1),st(3,_n,2,0,"mat-drawer-content")),e&2&&(ct(n.hasBackdrop?0:-1),d(3),ct(n._content?-1:3))},dependencies:[It],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
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
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
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
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
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
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
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
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
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
`],encapsulation:2})}return i})(),Kt=(()=>{class i extends It{static \u0275fac=(()=>{let t;return function(n){return(t||(t=j(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[z([{provide:ut,useExisting:i},{provide:It,useExisting:i}]),V],ngContentSelectors:Jt,decls:1,vars:0,template:function(e,n){e&1&&(D(),h(0))},encapsulation:2})}return i})(),ke=(()=>{class i extends ve{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=O(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=St(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=St(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=j(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,n){e&2&&(F("tabIndex",n.mode!=="side"?"-1":null)("align",null),rt("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),u("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[z([{provide:ve,useExisting:i}]),V],ngContentSelectors:Jt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(D(),c(0,"div",1,0),h(2),l())},dependencies:[ut],encapsulation:2})}return i})(),Ai=(()=>{class i extends we{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=j(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(e,n,a){if(e&1&&G(a,Kt,5)(a,ke,5),e&2){let s;g(s=b())&&(n._content=s.first),g(s=b())&&(n._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,n){e&2&&u("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[z([{provide:xe,useExisting:i},{provide:we,useExisting:i}]),V],ngContentSelectors:zi,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(D(Li),st(0,gn,1,2,"div",0),h(1),h(2,1),st(3,bn,2,0,"mat-sidenav-content")),e&2&&(ct(n.hasBackdrop?0:-1),d(3),ct(n._content?-1:3))},dependencies:[Kt],styles:[fn],encapsulation:2})}return i})(),Pi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=L({type:i});static \u0275inj=E({imports:[_e,q,_e]})}return i})();var ye=(()=>{class i{_listeners=[];notify(t,e){for(let n of this._listeners)n(t,e)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(e=>t!==e)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(e){return new(e||i)};static \u0275prov=ze({token:i,factory:i.\u0275fac})}return i})();var Ri=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=L({type:i});static \u0275inj=E({imports:[q]})}return i})();var xn=["*"],kn=`.mdc-list {
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
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
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
  height: var(--mat-list-list-item-two-line-container-height, 64px);
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
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
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
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
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
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
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
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
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
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
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
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
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
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,yn=["unscopedContent"],Cn=["text"],Mn=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Dn=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Sn=new R("ListOption"),Tn=(()=>{class i{_elementRef=r(T);static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),In=(()=>{class i{_elementRef=r(T);static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),On=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),Fi=(()=>{class i{_listOption=r(Sn,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,hostVars:4,hostBindings:function(e,n){e&2&&u("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),En=(()=>{class i extends Fi{static \u0275fac=(()=>{let t;return function(n){return(t||(t=j(i)))(n||i)}})();static \u0275dir=I({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[V]})}return i})(),Ln=(()=>{class i extends Fi{static \u0275fac=(()=>{let t;return function(n){return(t||(t=j(i)))(n||i)}})();static \u0275dir=I({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[V]})}return i})(),zn=new R("MAT_LIST_CONFIG"),Ce=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=O(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(O(t))}_disabled=H(!1);_defaultOptions=r(zn,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,hostVars:1,hostBindings:function(e,n){e&2&&F("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),An=(()=>{class i{_elementRef=r(T);_ngZone=r(et);_listBase=r(Ce,{optional:!0});_platform=r(it);_hostElement;_isButtonElement;_noopAnimations=_t();_avatars;_icons;set lines(t){this._explicitLines=St(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=O(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(O(t))}_disabled=H(!1);_subscriptions=new Se;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){r(Qt).load(Ut);let t=r(hi,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new mi(this,this._ngZone,this._hostElement,this._platform,r(ot)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ot(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",a),n.classList.toggle("mdc-list-item__secondary-text",!a)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,contentQueries:function(e,n,a){if(e&1&&G(a,En,4)(a,Ln,4),e&2){let s;g(s=b())&&(n._avatars=s),g(s=b())&&(n._icons=s)}},hostVars:4,hostBindings:function(e,n){e&2&&(F("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),u("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var Bi=(()=>{class i extends An{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=O(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=j(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,a){if(e&1&&G(a,In,5)(a,Tn,5)(a,On,5),e&2){let s;g(s=b())&&(n._lines=s),g(s=b())&&(n._titles=s),g(s=b())&&(n._meta=s)}},viewQuery:function(e,n){if(e&1&&at(yn,5)(Cn,5),e&2){let a;g(a=b())&&(n._unscopedContent=a.first),g(a=b())&&(n._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(F("aria-current",n._getAriaCurrent()),u("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[V],ngContentSelectors:Dn,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(D(Mn),h(0),c(1,"span",1),h(2,1),h(3,2),c(4,"span",2,0),C("cdkObserveContent",function(){return n._updateItemLines(!0)}),h(6,3),l()(),h(7,4),h(8,5),y(9,"div",3))},dependencies:[oi],encapsulation:2})}return i})();var ji=(()=>{class i extends Ce{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(n){return(t||(t=j(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[z([{provide:Ce,useExisting:i}]),V],ngContentSelectors:xn,decls:1,vars:0,template:function(e,n){e&1&&(D(),h(0))},styles:[kn],encapsulation:2})}return i})();var Vi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=L({type:i});static \u0275inj=E({imports:[ai,Ht,_i,q,Ri]})}return i})();var Gi=[{label:"km",denominator:1e5},{label:"m",denominator:100},{label:"cm",denominator:1},{label:"mm",denominator:.1},{label:"\xB5m",denominator:1e-4},{label:"nm",denominator:1e-7}],Ni=(()=>{class i{transform(t){if(!t)return"0 x 0";let e=this.selectUnit(Math.max(t.width,t.height));return this.formatViewport(t,e)}selectUnit(t){for(let e of Gi)if(t>e.denominator)return e;return Gi.at(-1)}formatValue(t,e){return(t/e.denominator).toFixed(2)}formatViewport(t,e){return`${this.formatValue(t.width,e)} x ${this.formatValue(t.height,e)} ${e.label}`}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275pipe=zt({name:"sizeDisplay",type:i,pure:!0})}}return i})();var Fn=(i,o)=>o.iconName;function Bn(i,o){if(i&1){let t=Ct();c(0,"button",2),C("click",function(){let n=vt(t).$implicit,a=Z();return wt(a.onClick(n))}),c(1,"mat-icon",3),p(2),l()()}if(i&2){let t=o.$implicit,e=Z();u("active",t.visibility()==="on"),x("hidden",t.visibility()==="hidden")("disabled",t.visibility()==="disabled")("matTooltip",e.translate.instant(t.tooltipKey)),d(2),$(t.iconName)}}var Qi=(()=>{class i{constructor(){this.viewportSize=me.required(),this.actions=me.required(),this.translate=r(Q)}onClick(t){this.isActive(t.visibility())&&t.onClick()}isActive(t){return t==="off"||t==="on"}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-ribbon"]],inputs:{viewportSize:[1,"viewportSize"],actions:[1,"actions"]},decls:5,vars:3,consts:[["mat-icon-button","","matTooltipPosition","below",1,"action",3,"hidden","disabled","active","matTooltip"],[1,"size-display"],["mat-icon-button","","matTooltipPosition","below",1,"action",3,"click","hidden","disabled","matTooltip"],[1,"material-symbols-outlined"]],template:function(e,n){e&1&&(At(0,Bn,3,6,"button",0,Fn),c(2,"span",1),p(3),v(4,"sizeDisplay"),l()),e&2&&(Pt(n.actions()),d(3),$(w(4,1,n.viewportSize())))},dependencies:[pt,ht,Xt,$t,Wt,Ni],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;height:40px;position:sticky;box-shadow:0 0 10px 2px #000000a8;padding:0 20px;gap:6px}[_nghost-%COMP%]   .size-display[_ngcontent-%COMP%]{color:var(--color-contrast-medium);text-align:right;margin-left:auto}[_nghost-%COMP%]   .action[_ngcontent-%COMP%]{--irr-icon-button-size: 32px;color:var(--color-contrast-medium)}[_nghost-%COMP%]   .action.active[_ngcontent-%COMP%]{color:var(--color-contrast-highest)}"]})}}return i})();var k=class i{static{this.zero=new i(0,0)}constructor(o,t){this.x=0,this.y=0,this.x=o,this.y=t}};var J=class{constructor(o,t,e,n=1){this.position=o,this.zoom=t,this.pxSize=e,this.scaleFactor=n,this.cmSize=this.calculateCmSize(),this.startWorldPos=this.calculateStartWorldPos(),this.endWorldPos=this.calculateEndWorldPos()}calculateCmSize(){return{width:bt.pxToCm(this.pxSize.width)*this.zoom,height:bt.pxToCm(this.pxSize.height)*this.zoom}}calculateStartWorldPos(){return new k(this.position.x-this.cmSize.width/2,this.position.y-this.cmSize.height/2)}calculateEndWorldPos(){return new k(this.position.x+this.cmSize.width/2,this.position.y+this.cmSize.height/2)}getViewportPosition(o){return new k(this.getViewportXPosition(o.x),this.getViewportYPosition(o.y))}getViewportXPosition(o){return(o-this.startWorldPos.x)/this.cmSize.width*this.pxSize.width}getViewportYPosition(o){return(o-this.startWorldPos.y)/this.cmSize.height*this.pxSize.height}getWorldPosition(o){return new k(this.getWorldXPosition(o.x),this.getWorldYPosition(o.y))}getWorldXPosition(o){return o/this.pxSize.width*this.cmSize.width+this.startWorldPos.x}getWorldYPosition(o){return o/this.pxSize.height*this.cmSize.height+this.startWorldPos.y}};var te=class i extends vi{constructor(){super(...arguments),this.gridBaseColor="#424242"}getOrder(){return-1}drawObject(o,t){let e=t.startWorldPos,n=t.endWorldPos,a=Math.pow(10,Math.ceil(Math.log(t.zoom)/Math.log(10)))/10,s=this.calculateGridColorsForZoom(a,t.zoom),S=[];for(let f=Math.floor(e.y/a)*a;n.y>f;f+=a){let nt=t.getViewportYPosition(f),ne=new k(0,nt),oe=new k(t.pxSize.width,nt);S.push({start:ne,end:oe,depthLevel:i.getLineDepthLevel(f,a)})}for(let f=Math.floor(e.x/a)*a;n.x>f;f+=a){let nt=t.getViewportXPosition(f),ne=new k(nt,0),oe=new k(nt,t.pxSize.height);S.push({start:ne,end:oe,depthLevel:i.getLineDepthLevel(f,a)})}o.lineWidth=t.scaleFactor,S.sort((f,nt)=>nt.depthLevel-f.depthLevel).forEach(f=>{this.drawLine(o,f.start,f.end,i.getLineColorForDepth(f.depthLevel,s))}),o.lineWidth=1}static getLineColorForDepth(o,t){return t[Math.min(o,t.length-1)]}static getLineDepthLevel(o,t){if(o===0)return 0;let e=Math.round(o/t);return e%100===0?1:e%10===0?2:3}drawLine(o,t,e,n){o.strokeStyle=n,o.beginPath(),o.moveTo(t.x,t.y),o.lineTo(e.x,e.y),o.stroke()}calculateGridColorsForZoom(o,t){let e=(t-o)/(o*10-o),n=wi(this.gridBaseColor);return[this.gridBaseColor,n.alpha(i.linearInterpolation(.66,.8,1-e)).string(),n.alpha(i.linearInterpolation(.33,.66,1-e)).string(),n.alpha(i.linearInterpolation(0,.33,1-e)).string()]}static linearInterpolation(o,t,e){return o+(t-o)*e}};var qi={isMovable:!0,showGrid:!0,minZoom:1e-9,maxZoom:1e9,backgroundColor:"transparent",canvasGridColor:"#3f3f3f"};var jn=["canvas"],Wi=(()=>{class i{constructor(){this.clicked=Ve(),this.options=Ge({}),this.canvas=Bt.required("canvas"),this.currentOptions=Dt(()=>_(_({},qi),this.options())),this._viewport=new J(k.zero,1,{width:0,height:0}),this.isDragging=!1,this.ctx=Dt(()=>this.canvas().nativeElement.getContext("2d")),this.canvasObjects=[],this.handleMouseUp=this.onMouseUp.bind(this),this.handleMouseMove=this.onMouseMove.bind(this),this.handleMouseDown=this.onMouseDown.bind(this),this.handleWheelMove=this.onWheelMove.bind(this),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.cd=r(N),this.configChangeEffect=Ne(()=>{this.configureCanvas(),this.redraw()})}get viewport(){return this._viewport}ngOnInit(){this.canvas().nativeElement.addEventListener("wheel",this.handleWheelMove),this.canvas().nativeElement.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp),this.resizeObserver.observe(this.canvas().nativeElement)}configureCanvas(){this.configureGrid()}configureGrid(){this.canvasObjects=this.canvasObjects.filter(e=>e!==this.gridObject);let t=this.currentOptions();t.showGrid&&(this.gridObject=new te,t.canvasGridColor&&(this.gridObject.gridBaseColor=t.canvasGridColor),this.addCanvasObject(this.gridObject))}ngOnDestroy(){this.canvas().nativeElement.removeEventListener("wheel",this.handleWheelMove),this.canvas().nativeElement.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp),this.resizeObserver.unobserve(this.canvas().nativeElement)}onWheelMove(t){let e=this._viewport.getWorldPosition(new k(t.offsetX,t.offsetY)),n=this._viewport.zoom*(t.deltaY/1e3),a=Math.max(Math.min(this._viewport.zoom+n,this.currentOptions().maxZoom),this.currentOptions().minZoom)/this._viewport.zoom,s=new k(e.x-(e.x-this._viewport.position.x)*a,e.y-(e.y-this._viewport.position.y)*a);this._viewport=new J(s,this._viewport.zoom*a,this._viewport.pxSize),this.redraw(),t.preventDefault()}onMouseDown(t){this.clicked.emit(this._viewport.getWorldPosition(new k(t.offsetX,t.offsetY))),this.currentOptions().isMovable!==!1&&(document.body.style.cursor="grab",this.isDragging=!0,this.cd.markForCheck())}onMouseMove(t){if(this.currentOptions().isMovable!==!1&&this.isDragging){let e=new k(this._viewport.position.x-bt.pxToCm(t.movementX)*this._viewport.zoom,this._viewport.position.y-bt.pxToCm(t.movementY)*this._viewport.zoom);this._viewport=new J(e,this._viewport.zoom,this._viewport.pxSize),this.redraw()}}onMouseUp(){this.currentOptions().isMovable!==!1&&(document.body.style.cursor="",this.isDragging=!1,this.cd.markForCheck())}onResize(){let t=this.canvas().nativeElement.getBoundingClientRect(),e={height:t.height,width:t.width};this.canvas().nativeElement.width=e.width,this.canvas().nativeElement.height=e.height,this._viewport=new J(this._viewport.position,this._viewport.zoom,e),this.redraw()}setViewport(t=null,e=null,n=!1){this._viewport=new J(e??this._viewport.position,t??this._viewport.zoom,this._viewport.pxSize),n&&this.redraw()}addCanvasObject(t,e=!1){this.canvasObjects.push(t),this.canvasObjects.sort((n,a)=>n.getOrder()-a.getOrder()),t.setParent(this),e&&this.redraw()}removeObject(t){this.canvasObjects=this.canvasObjects.filter(e=>e!==t),this.canvasObjects.sort((e,n)=>e.getOrder()-n.getOrder())}removeObjects(t=!1){this.canvasObjects=this.canvasObjects.filter(e=>e===this.gridObject),t&&this.redraw()}redraw(){let t=this.ctx();i.drawBackground(t,this.viewport.pxSize,this.currentOptions().backgroundColor),i.drawObjects(t,this.canvasObjects,this.viewport),this.cd.markForCheck()}saveAsImage(t){let e=t?.scaleFactor??1,n={width:this.viewport.pxSize.width*e,height:this.viewport.pxSize.height*e},a=new J(this._viewport.position,this._viewport.zoom/e,n,e),s=new OffscreenCanvas(n.width,n.height),S=s.getContext("2d"),f=t?.backgroundColor??this.currentOptions().backgroundColor;return i.drawBackground(S,n,f),i.drawObjects(S,this.canvasObjects,a),s.convertToBlob({type:"image/png"})}static drawBackground(t,e,n){t.clearRect(0,0,e.width,e.height),t.fillStyle=n,t.fillRect(0,0,e.width,e.height)}static drawObjects(t,e,n){for(let a of e)a.getVisibility()&&a.drawObject(t,n)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=m({type:i,selectors:[["ac-active-canvas"]],viewQuery:function(e,n){e&1&&Rt(n.canvas,jn,5),e&2&&Ft()},inputs:{options:[1,"options"]},outputs:{clicked:"clicked",options:"optionsChange"},decls:2,vars:0,consts:[["canvas",""]],template:function(e,n){e&1&&Re(0,"canvas",null,0)},styles:["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   canvas[_ngcontent-%COMP%]{height:100%;width:100%}"]})}}return i})();var Vn=["activeCanvas"],Ui=(()=>{class i{constructor(){this.store=r(gt),this.translate=r(Q),this.toolService=r(be),this.destroyRef=r(Lt),this.tilesLinkDisabled$=this.store.select(ge).pipe(lt(this.destroyRef),U(t=>!t)),this.sectorsLinkDisabled$=this.store.select(ge).pipe(lt(this.destroyRef),U(t=>!t)),this.mosaicGeneratingLinkDisabled$=this.store.select(bi).pipe(lt(this.destroyRef),U(t=>!t?.length)),this.activeCanvas=Bt.required("activeCanvas"),this.ribbonActions=H([]),this.canvasOptions=Dt(()=>({canvasGridColor:this.toolService.canvasGridColor()})),this.wasInitialized=!1}onActivate(t){let e=t.sectionEntered(this.activeCanvas(),!this.wasInitialized);this.ribbonActions.set(e.ribbon),this.wasInitialized=!0}onDeactivate(){this.ribbonActions.set([]),this.activeCanvas().removeObjects()}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-tool"]],viewQuery:function(e,n){e&1&&Rt(n.activeCanvas,Vn,5),e&2&&Ft()},features:[z([be,Ci])],decls:26,vars:16,consts:[["activeCanvas",""],[1,"tool-sidenav-container"],["mode","side","opened",""],["mat-list-item","","routerLink","config","routerLinkActive","active","matTooltipPosition","right","matTooltipClass","contrast",3,"matTooltip"],["matListIcon","",1,"material-symbols-outlined"],["mat-list-item","","routerLink","tray","routerLinkActive","active","matTooltipPosition","right","matTooltipClass","contrast",3,"disabled","matTooltip"],["mat-list-item","","routerLink","sectors","routerLinkActive","active","matTooltipPosition","right","matTooltipClass","contrast",3,"disabled","matTooltip"],["mat-list-item","","routerLink","generating","routerLinkActive","active","matTooltipPosition","right","matTooltipClass","contrast",3,"disabled","matTooltip"],[1,"content"],[3,"actions","viewportSize"],[1,"main"],[1,"canvas",3,"options"],[1,"panel"],[3,"activate","deactivate"]],template:function(e,n){if(e&1&&(c(0,"mat-sidenav-container",1)(1,"mat-sidenav",2)(2,"mat-nav-list")(3,"a",3)(4,"mat-icon",4),p(5,"flowsheet"),l()(),c(6,"a",5),v(7,"async"),c(8,"mat-icon",4),p(9,"dashboard"),l()(),c(10,"a",6),v(11,"async"),c(12,"mat-icon",4),p(13,"view_in_ar"),l()(),c(14,"a",7),v(15,"async"),c(16,"mat-icon",4),p(17,"rocket_launch"),l()()()(),c(18,"mat-sidenav-content")(19,"div",8),y(20,"app-ribbon",9),c(21,"div",10),y(22,"ac-active-canvas",11,0),c(24,"div",12)(25,"router-outlet",13),C("activate",function(s){return n.onActivate(s)})("deactivate",function(){return n.onDeactivate()}),l()()()()()()),e&2){let a=Mt(23);d(3),x("matTooltip",n.translate.instant("tool.nav.projectSettings")),d(3),x("disabled",w(7,10,n.tilesLinkDisabled$))("matTooltip",n.translate.instant("tool.nav.tileTrey")),d(4),x("disabled",w(11,12,n.sectorsLinkDisabled$))("matTooltip",n.translate.instant("tool.nav.sectors")),d(4),x("disabled",w(15,14,n.mosaicGeneratingLinkDisabled$))("matTooltip",n.translate.instant("tool.nav.generation")),d(6),x("actions",n.ribbonActions())("viewportSize",a?.viewport?.cmSize),d(2),x("options",n.canvasOptions())}},dependencies:[pt,ht,Pi,ke,Ai,Kt,Vi,ji,Bi,li,Wt,Vt,Gt,Ye,Nt,Qi,Wi,Qe],styles:[".tool-sidenav-container[_ngcontent-%COMP%]{position:absolute;inset:55px 0 0}.tool-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{border-right:none}.mdc-list[_ngcontent-%COMP%]{padding-top:12px}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]{height:52px!important;--mat-list-list-item-label-text-color: var(--color-contrast-high)}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item.active[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--color-primary),transparent 90%)}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:300}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]:focus{--mat-list-list-item-focus-state-layer-opacity: 0}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]     .mat-mdc-list-item-unscoped-content{display:flex}.mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]     .mat-mdc-list-item-unscoped-content mat-icon{height:30px;width:30px;font-size:30px}mat-sidenav-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}mat-sidenav-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:calc(100% - 40px)}mat-sidenav-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]{display:flex;flex:1 1 0}mat-sidenav-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{position:relative;width:250px;box-sizing:border-box;border-left:1px solid var(--color-contrast-light)}"]})}}return i})();var Hi=[{path:"",redirectTo:"project",pathMatch:"full"},{path:"tool",component:Ui,loadChildren:()=>import("./chunk-I2I4ILPH.js").then(i=>i.toolRoutes)},{path:"project",component:Ei},{path:"author",component:Oi}];var Zi=Zt(null,A(K.projectCreated,(i,{project:o})=>_({},o)),A(K.projectCanceled,()=>null),A(K.mosaicWidthChanged,(i,{width:o})=>P(_({},i),{config:P(_({},i.config),{mosaicWidth:o})})),A(K.sectorModified,(i,{modifiedSector:o})=>P(_({},i),{sectors:fe.addOrUpdate([...i.sectors],o,t=>t.id===o.id)})),A(K.sectorRemoved,(i,{sector:o})=>P(_({},i),{sectors:[...i.sectors.filter(t=>t.id!==o.id)]})),A(K.sectorShifted,(i,{prevIndex:o,newIndex:t})=>P(_({},i),{sectors:fe.moveElemInArray([...i.sectors],o,t)})),A(K.tilesSetCommitted,(i,{tilesSet:o})=>P(_({},i),{tilesSets:[...i.tilesSets.filter(t=>t.id!==o.id),o]})),A(K.tilesSetRemoved,(i,{removedTilesSet:o})=>P(_({},i),{tilesSets:i.tilesSets.filter(t=>t!==o)})));var $i="state";function Gn(i,o){localStorage.setItem(o,JSON.stringify(i))}function Nn(i){let o=localStorage.getItem(i);return o?JSON.parse(o):null}function Xi(i){let o=!0;return function(t,e){let n=i(t,e);if(o){o=!1;let a=Nn($i);return Qn(a),_(_({},n),a)}return Gn(n,$i),n}}function Qn(i){i?.mosaicProject&&i.mosaicProject.tilesSets.forEach(o=>{o.tiles.forEach(t=>{t.vertices.forEach(e=>xi.restore(e))})})}var Ki=new R("TRANSLATE_HTTP_LOADER_CONFIG"),qn=(()=>{class i{http;config;constructor(){this.config=_({resources:[],enforceLoading:!1,useHttpBackend:!1},r(Ki)),this.http=this.config.useHttpBackend?new pe(r(He)):r(pe)}getTranslation(t){let e=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"",n=this.config.resources.map(a=>{let s=typeof a=="string"?`${a}${t}.json`:`${a.prefix}${t}${a.suffix??".json"}`,S=this.http.get(`${s}${e}`);return this.config.failOnError?S:S.pipe(Ie(f=>(console.warn(`@ngx-translate/http-loader: error loading translation for ${t}:`,f),ae({}))))});return n.length===0?ae({}):Te(n).pipe(U(a=>a.reduce((s,S)=>ti(s,S),{})))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Le({token:i,factory:i.\u0275fac})}return i})();function Ji(i={}){if("resources"in i&&i.resources)return Yi(i);let o=i,t={enforceLoading:o.enforceLoading??!1,useHttpBackend:o.useHttpBackend??!1,failOnError:o.failOnError??!1,resources:[{prefix:o.prefix??"/assets/i18n/",suffix:o.suffix??".json"}]};return Yi(t)}function Yi(i={}){return[{provide:Ki,useValue:_({resources:["/assets/i18n/"]},i)},{provide:Je,useClass:qn}]}var tn=Zt({},A(Tt.languageChanged,(i,{lang:o})=>P(_({},i),{lang:o})),A(Tt.themeChanged,(i,{theme:o})=>P(_({},i),{theme:o})));var en={providers:[Xe(Hi),jt(),gi({mosaicProject:Zi,userPreferences:tn},{metaReducers:[Xi]}),ei({loader:Ji({prefix:"/irrtirer/assets/i18n/",suffix:".json"}),fallbackLang:"pl",lang:"pl"}),{provide:Mi,useValue:{appearance:"outline"}}]};var Wn=["*",[["mat-toolbar-row"]]],Un=["*","mat-toolbar-row"],Hn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),nn=(()=>{class i{_elementRef=r(T);_platform=r(it);_document=r(Et);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["mat-toolbar"]],contentQueries:function(e,n,a){if(e&1&&G(a,Hn,5),e&2){let s;g(s=b())&&(n._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,n){e&2&&(Fe(n.color?"mat-"+n.color:""),u("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Un,decls:2,vars:0,template:function(e,n){e&1&&(D(Wn),h(0),h(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
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
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return i})();var on=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=L({type:i});static \u0275inj=E({imports:[q]})}return i})();var an={github:"github-mark.svg",pl:"pl.svg",gb:"gb.svg"},rn=(()=>{class i{constructor(t,e){this.matIconRegistry=t,this.domSanitizer=e;for(let n in an)this.matIconRegistry.addSvgIcon(n,this.domSanitizer.bypassSecurityTrustResourceUrl(`../irrtirer/assets/icons/${an[n]}`))}static{this.\u0275fac=function(e){return new(e||i)(le(ii),le($e))}}static{this.\u0275mod=L({type:i})}static{this.\u0275inj=E({providers:[jt(Ze())],imports:[We]})}}return i})();var $n=["input"],Xn=["formField"],Yn=["*"],ee=class{source;value;constructor(o,t){this.source=o,this.value=t}},Kn={provide:ui,useExisting:de(()=>De),multi:!0},sn=new R("MatRadioGroup"),Jn=new R("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),De=(()=>{class i{_changeDetector=r(N);_value=null;_name=r(ue).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new tt;_radios;color;get name(){return this._name}set name(t){this._name=t,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition=t==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(t){this._selected=t,this.value=t?t.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markRadiosForCheck()}get required(){return this._required}set required(t){this._required=t,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(t=>t===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(t=>{t.name=this.name,t._markForCheck()})}_updateSelectedRadioFromValue(){let t=this._selected!==null&&this._selected.value===this._value;this._radios&&!t&&(this._selected=null,this._radios.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new ee(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(t=>t._markForCheck())}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetector.markForCheck()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["mat-radio-group"]],contentQueries:function(e,n,a){if(e&1&&G(a,ie,5),e&2){let s;g(s=b())&&(n._radios=s)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",Y],required:[2,"required","required",Y],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[z([Kn,{provide:sn,useExisting:i}])]})}return i})(),ie=(()=>{class i{_elementRef=r(T);_changeDetector=r(N);_focusMonitor=r(qt);_radioDispatcher=r(ye);_defaultOptions=r(Jn,{optional:!0});_ngZone=r(et);_renderer=r(kt);_uniqueId=r(ue).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===t),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(t){this._labelPosition=t}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(t){this._setDisabled(t)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(t){t!==this._required&&this._changeDetector.markForCheck(),this._required=t}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(t){this._color=t}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new tt;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=_t();_injector=r(ot);constructor(){r(Qt).load(Ut);let t=r(sn,{optional:!0}),e=r(new je("tabindex"),{optional:!0});this.radioGroup=t,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,e&&(this.tabIndex=he(e,0))}focus(t,e){e?this._focusMonitor.focusVia(this._inputElement,e,t):this._inputElement.nativeElement.focus(t)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((t,e)=>{t!==this.id&&e===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{!t&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new ee(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(t){if(t.stopPropagation(),!this.checked&&!this.disabled){let e=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),e&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(t){this._onInputInteraction(t),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(t){this._disabled!==t&&(this._disabled=t,this._changeDetector.markForCheck())}_onInputClick=t=>{this.disabled&&this.disabledInteractive&&t.preventDefault()};_updateTabIndex(){let t=this.radioGroup,e;if(!t||!t.selected||this.disabled?e=this.tabIndex:e=t.selected===this?this.tabIndex:-1,e!==this._previousTabIndex){let n=this._inputElement?.nativeElement;n&&(n.setAttribute("tabindex",e+""),this._previousTabIndex=e,xt(()=>{queueMicrotask(()=>{t&&t.selected&&t.selected!==this&&document.activeElement===n&&(t.selected?._inputElement.nativeElement.focus(),document.activeElement===n&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["mat-radio-button"]],viewQuery:function(e,n){if(e&1&&at($n,5)(Xn,7,T),e&2){let a;g(a=b())&&(n._inputElement=a.first),g(a=b())&&(n._rippleTrigger=a.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(e,n){e&1&&C("focus",function(){return n._inputElement.nativeElement.focus()}),e&2&&(F("id",n.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),u("mat-primary",n.color==="primary")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("mat-mdc-radio-checked",n.checked)("mat-mdc-radio-disabled",n.disabled)("mat-mdc-radio-disabled-interactive",n.disabledInteractive)("_mat-animation-noopable",n._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",Y],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:he(t)],checked:[2,"checked","checked",Y],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",Y],required:[2,"required","required",Y],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Yn,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(e,n){e&1&&(D(),c(0,"div",2,0)(2,"div",3)(3,"div",4),C("click",function(s){return n._onTouchTargetClick(s)}),l(),c(4,"input",5,1),C("change",function(s){return n._onInputInteraction(s)}),l(),c(6,"div",6),y(7,"div",7)(8,"div",8),l(),c(9,"div",9),y(10,"div",10),l()(),c(11,"label",11),h(12),l()()),e&2&&(x("labelPosition",n.labelPosition),d(2),u("mdc-radio--disabled",n.disabled),d(2),x("id",n.inputId)("checked",n.checked)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),F("name",n.name)("value",n.value)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),d(5),x("matRippleTrigger",n._rippleTrigger.nativeElement)("matRippleDisabled",n._isRippleDisabled())("matRippleCentered",!0),d(2),x("for",n.inputId))},dependencies:[pi,yi],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
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
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
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
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
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
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
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
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return i})(),cn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=L({type:i});static \u0275inj=E({imports:[Ht,ie,q]})}return i})();var dn=(()=>{class i{constructor(){this.translate=r(Q),this.themeService=r(Yt),this.destroyRef=r(Lt),this.store=r(gt),this.selectedLanguage=H(this.translate.getCurrentLang()??"pl"),this.themeMode=Ke(this.themeService.theme$)}ngOnInit(){this.translate.onLangChange.pipe(lt(this.destroyRef)).subscribe(t=>this.selectedLanguage.set(t.lang))}languageChanged(t){this.translate.use(t.value),this.store.dispatch(Tt.languageChanged({lang:t.value}))}toggleTheme(){let t=this.themeMode()==="dark"?"light":"dark";this.themeService.changeTheme(t)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-toolbar"]],decls:36,vars:24,consts:[["menu","matMenu"],[1,"toolbar"],["mat-button","","routerLink","/tool","routerLinkActive","active-button",1,"toolbar-item"],[1,"text-base"],["mat-button","","routerLink","/project","routerLinkActive","active-button",1,"toolbar-item"],["mat-button","","routerLink","/author","routerLinkActive","active-button",1,"toolbar-item"],[1,"flex-1"],["matIconButton","",1,"toolbar-item","mode",3,"click"],[1,"material-symbols-outlined"],["mat-button","",1,"toolbar-item",3,"matMenuTriggerFor"],[1,"block","min-w-5"],[1,"lang-radio-group",3,"change","value"],["value","pl",1,"lang-radio"],["svgIcon","pl"],["value","en",1,"lang-radio"],["svgIcon","gb"],["mat-button","","href","https://github.com/TukanHan/irrtirer","target","_blank",1,"toolbar-item"],["svgIcon","github"]],template:function(e,n){if(e&1&&(c(0,"mat-toolbar",1)(1,"a",2)(2,"span",3),p(3),v(4,"translate"),l()(),c(5,"a",4),p(6),v(7,"translate"),l(),c(8,"a",5),p(9),v(10,"translate"),l(),y(11,"span",6),c(12,"button",7),C("click",function(){return n.toggleTheme()}),c(13,"mat-icon",8),p(14),l()(),c(15,"button",9)(16,"mat-icon"),p(17,"language"),l(),c(18,"span",10),p(19),v(20,"titlecase"),l()(),c(21,"mat-menu",null,0)(23,"mat-radio-group",11),C("change",function(s){return n.languageChanged(s)}),c(24,"mat-radio-button",12),p(25),v(26,"translate"),y(27,"mat-icon",13),l(),c(28,"mat-radio-button",14),p(29),v(30,"translate"),y(31,"mat-icon",15),l()()(),c(32,"a",16),y(33,"mat-icon",17),p(34),v(35,"translate"),l()()),e&2){let a=Mt(22);d(3),$(w(4,10,"title")),d(3),X(" ",w(7,12,"aboutProject.header")," "),d(3),X(" ",w(10,14,"aboutAuthor.header")," "),d(5),$(n.themeMode()==="dark"?"dark_mode":"light_mode"),d(),x("matMenuTriggerFor",a),d(4),$(w(20,16,n.selectedLanguage())),d(4),x("value",n.selectedLanguage()),d(2),X(" ",w(26,18,"toolbar.languages.polish")," "),d(4),X(" ",w(30,20,"toolbar.languages.english")," "),d(5),X(" ",w(35,22,"toolbar.github")," ")}},dependencies:[pt,ht,on,nn,Xt,fi,$t,Gt,Nt,rn,Ti,Di,Si,cn,De,ie,mt,qe],styles:["[_nghost-%COMP%]{--mat-toolbar-standard-height: 55px;height:var(--mat-toolbar-standard-height)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]{position:fixed;padding:0 48px;z-index:2;box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f;--mat-toolbar-container-background-color: var(--color-surface-toolbar);--mat-toolbar-standard-height: inherit}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-item[_ngcontent-%COMP%]{--irr-icon-button-icon-size: 22px;color:var(--color-primary-label)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-item.active-button[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--color-primary),transparent 90%)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .mode[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-weight:300}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .mode[_ngcontent-%COMP%]{--irr-icon-button-size: 36px;--irr-icon-button-icon-size: 22px}.lang-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:170px;padding:0 10px}.lang-radio-group[_ngcontent-%COMP%]   .lang-radio[_ngcontent-%COMP%]     .mdc-form-field{width:100%}.lang-radio-group[_ngcontent-%COMP%]   .lang-radio[_ngcontent-%COMP%]     .mdc-form-field .mdc-label{display:flex;width:100%;align-items:center;justify-content:space-between;gap:16px}"]})}}return i})();var ln=(()=>{class i{constructor(){this.title="Irrtirer",this.store=r(gt),this.translate=r(Q),this.themeService=r(Yt)}ngOnInit(){this.initLanguage(),this.initTheme()}initLanguage(){this.translate.addLangs(["pl","en"]),this.translate.use(this.getLanguage())}initTheme(){this.themeService.init()}getLanguage(){return this.store.selectSignal(ki)()??this.translate.getBrowserLang()??"pl"}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-root"]],hostAttrs:[1,"flex","flex-col","h-dvh"],decls:3,vars:0,consts:[[1,"flex-1","mat-app-background"]],template:function(e,n){e&1&&(y(0,"app-toolbar"),c(1,"div",0),y(2,"router-outlet"),l())},dependencies:[Vt,dn],encapsulation:2})}}return i})();Ue(ln,en).catch(i=>console.error(i));
