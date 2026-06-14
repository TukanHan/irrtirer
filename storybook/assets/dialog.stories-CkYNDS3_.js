import{i as e}from"./preload-helper-xPQekRTU.js";import{B as t,Cr as n,Dt as r,E as i,Er as a,Gt as o,It as ee,Jr as te,Jt as ne,Ln as re,M as ie,Mt as ae,Nn as s,Nt as c,Pt as oe,Qr as l,Sn as se,St as ce,Tt as u,Ut as le,Vn as ue,Vt as de,Wt as fe,Zn as pe,_n as me,bn as d,br as f,bt as he,dr as p,en as ge,h as _e,k as m,ln as ve,m as h,n as ye,oi as be,pn as xe,q as Se,qt as Ce,rn as we,si as Te,sn as Ee,tt as De,xn as g,xt as _,zn as Oe}from"./core-Chtm1_Da.js";import{a as ke,n as Ae,r as je,s as Me}from"./iframe-CrPRH3I1.js";import{C as v,D as Ne,E as y,F as Pe,J as b,L as x,O as S,P as C,S as Fe,T as Ie,X as Le,Y as Re,Z as ze,a as Be,f as Ve,i as w,k as He,n as Ue,o as We,p as Ge,r as Ke,s as qe,t as T,w as E}from"./_animation-chunk-4cJPEY-G.js";import{_ as Je,a as Ye,c as Xe,d as D,f as Ze,g as Qe,h as $e,i as O,l as et,m as tt,n as nt,o as rt,p as k,r as it,s as at,t as ot,u as st}from"./overlay-DtvW1TMm.js";import{n as ct,r as lt}from"./button-36l8uHSj.js";var ut,dt=e((()=>{ut=`<div class="dialog-content">
    <h1 mat-dialog-title>{{data.title}}</h1>
    <div mat-dialog-content>{{data.message}}</div>
    <div mat-dialog-actions align="end">
        <button mat-button mat-dialog-close>{{noLabel}}</button>
        <button mat-button [mat-dialog-close]="true">{{yesLabel}}</button>
    </div>
</div>`})),ft,pt=e((()=>{ft=`.dialog-content{max-width:400px}.dialog-content .mat-mdc-dialog-content{padding-bottom:0}`}));function mt(e,t){}function ht(e){let t=re(e),n=new me;return{valueSignal:t,get value(){return t()},change:n,ngOnDestroy(){n.complete()}}}function A(e,t){let n=e.length;for(;n--;)t(e[n])}var j,M,N,gt,_t,vt,P,F,yt=e((()=>{h(),ue(),$e(),qe(),Ge(),ze(),Re(),et(),ve(),Ie(),E(),Ne(),Pe(),j=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings},M=(()=>{class e extends st{_elementRef=s(m);_focusTrapFactory=s(Be);_config;_interactivityChecker=s(We);_ngZone=s(se);_focusMonitor=s(Ve);_renderer=s(t);_changeDetectorRef=s(ye);_injector=s(g);_platform=s(Le);_document=s(xe);_portalOutlet;_focusTrapped=new l;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(j,{optional:!0})||new j,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let t=()=>{n(),r(),e.removeAttribute(`tabindex`)},n=this._renderer.listen(e,`blur`,t),r=this._renderer.listen(e,`mousedown`,t)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||De(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let e=b(),n=this._elementRef.nativeElement;(!e||e===this._document.body||e===n||n.contains(e))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=b();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=b()))}static ɵfac=function(t){return new(t||e)};static ɵcmp=ae({type:e,selectors:[[`cdk-dialog-container`]],viewQuery:function(e,t){if(e&1&&Ee(D,7),e&2){let e;ge(e=ne())&&(t._portalOutlet=e.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(e,t){e&2&&u(`id`,t._config.id||null)(`role`,t._config.role)(`aria-modal`,t._config.ariaModal)(`aria-labelledby`,t._config.ariaLabel?null:t._ariaLabelledByQueue[0])(`aria-label`,t._config.ariaLabel)(`aria-describedby`,t._config.ariaDescribedBy||null)},features:[_],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(e,t){e&1&&we(0,mt,0,0,`ng-template`,0)},dependencies:[D],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return e})(),N=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new l;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(e,t){this.overlayRef=e,this.config=t,this.disableClose=t.disableClose,this.backdropClick=e.backdropClick(),this.keydownEvents=e.keydownEvents(),this.outsidePointerEvents=e.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!v(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=e.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(e,t){if(this._canClose(e)){let n=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(e),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(e=``,t=``){return this.overlayRef.updateSize({width:e,height:t}),this}addPanelClass(e){return this.overlayRef.addPanelClass(e),this}removePanelClass(e){return this.overlayRef.removePanelClass(e),this}_canClose(e){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(e,t,this.componentInstance))}},gt=new d(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let e=s(g);return()=>rt(e)}}),_t=new d(`DialogData`),vt=new d(`DefaultDialogConfig`),P=(()=>{class e{_injector=s(g);_defaultOptions=s(vt,{optional:!0});_parentDialog=s(e,{optional:!0,skipSelf:!0});_overlayContainer=s(it);_idGenerator=s(y);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new l;_afterOpenedAtThisLevel=new l;_ariaHiddenElements=new Map;_scrollStrategy=s(gt);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=a(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(pe(void 0)));open(e,t){t={...this._defaultOptions||new j,...t},t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let n=this._getOverlayConfig(t),r=Xe(this._injector,n),i=new N(r,t),a=this._attachContainer(r,i,t);if(i.containerInstance=a,!this.openDialogs.length){let e=this._overlayContainer.getContainerElement();a._focusTrapped?a._focusTrapped.pipe(p(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(e)}):this._hideNonDialogContentFromAssistiveTechnology(e)}return this._attachDialogContent(e,i,a,t),this.openDialogs.push(i),i.closed.subscribe(()=>this._removeOpenDialog(i,!0)),this.afterOpened.next(i),i}closeAll(){A(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){A(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),A(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new nt({positionStrategy:e.positionStrategy||at().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let r=n.injector||n.viewContainerRef?.injector,i=[{provide:j,useValue:n},{provide:N,useValue:t},{provide:Ye,useValue:e}],a;n.container?typeof n.container==`function`?a=n.container:(a=n.container.type,i.push(...n.container.providers(n))):a=M;let o=new Ze(a,n.viewContainerRef,g.create({parent:r||this._injector,providers:i}));return e.attach(o).instance}_attachDialogContent(e,t,n,r){if(e instanceof Se){let i=this._createInjector(r,t,n,void 0),a={$implicit:r.data,dialogRef:t};r.templateContext&&(a={...a,...typeof r.templateContext==`function`?r.templateContext():r.templateContext}),n.attachTemplatePortal(new tt(e,null,a,i))}else{let i=this._createInjector(r,t,n,this._injector),a=n.attachComponentPortal(new Ze(e,r.viewContainerRef,i,null,r.bindings));t.componentRef=a,t.componentInstance=a.instance}}_createInjector(e,t,n,r){let i=e.injector||e.viewContainerRef?.injector,a=[{provide:_t,useValue:e.data},{provide:N,useValue:t}];return e.providers&&(typeof e.providers==`function`?a.push(...e.providers(t,e,n)):a.push(...e.providers)),e.direction&&(!i||!i.get(C,null,{optional:!0}))&&a.push({provide:C,useValue:ht(e.direction)}),g.create({parent:i||r,providers:a})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((e,t)=>{e?t.setAttribute(`aria-hidden`,e):t.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let r=t[n];r!==e&&r.nodeName!==`SCRIPT`&&r.nodeName!==`STYLE`&&!r.hasAttribute(`aria-live`)&&!r.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(r,r.getAttribute(`aria-hidden`)),r.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||e)};static ɵprov=ee({token:e,factory:e.ɵfac})}return e})(),F=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵmod=oe({type:e,imports:[O,k,w,M],exports:[k,M]});static ɵinj=Oe({providers:[P],imports:[O,k,w,k]})}return e})()}));function bt(e,t){}function xt(e){return e==null?null:typeof e==`number`?e:e.endsWith(`ms`)?x(e.substring(0,e.length-2)):e.endsWith(`s`)?x(e.substring(0,e.length-1))*1e3:e===`0`?0:null}function St(e,t,n){return e._closeInteractionType=t,e.close(n)}function Ct(e,t){let n=e.nativeElement.parentElement;for(;n&&!n.classList.contains(`mat-mdc-dialog-container`);)n=n.parentElement;return n?t.find(e=>e.id===n.id):null}var I,L,R,z,wt,Tt,B,V,H,U,W,Et,Dt,G,K,q,J,Y,X,Z,Ot=e((()=>{ot(),h(),yt(),Fe(),$e(),Ue(),ue(),ve(),E(),Ke(),Je(),He(),I=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},L=`mdc-dialog--open`,R=`mdc-dialog--opening`,z=`mdc-dialog--closing`,wt=150,Tt=75,B=(()=>{class e extends M{_animationStateChanged=new me;_animationsEnabled=!T();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?xt(this._config.enterAnimationDuration)??wt:0;_exitAnimationDuration=this._animationsEnabled?xt(this._config.exitAnimationDuration)??Tt:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(V,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(R,L)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(L),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(L),this._animationsEnabled?(this._hostElement.style.setProperty(V,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(z)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(R,z)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let t;return function(n){return(t||=o(e))(n||e)}})();static ɵcmp=ae({type:e,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(e,t){e&2&&(de(`id`,t._config.id),u(`aria-modal`,t._config.ariaModal)(`role`,t._config.role)(`aria-labelledby`,t._config.ariaLabel?null:t._ariaLabelledByQueue[0])(`aria-label`,t._config.ariaLabel)(`aria-describedby`,t._config.ariaDescribedBy||null),r(`_mat-animation-noopable`,!t._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,t._actionSectionCount>0))},features:[_],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(e,t){e&1&&(fe(0,`div`,0)(1,`div`,1),we(2,bt,0,0,`ng-template`,2),le()())},dependencies:[D],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return e})(),V=`--mat-dialog-transition-duration`,H=function(e){return e[e.OPEN=0]=`OPEN`,e[e.CLOSING=1]=`CLOSING`,e[e.CLOSED=2]=`CLOSED`,e}(H||{}),U=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new te(1);_beforeClosed=new te(1);_result;_closeFallbackTimeout;_state=H.OPEN;_closeInteractionType;constructor(e,t,r){this._ref=e,this._config=t,this._containerInstance=r,this.disableClose=t.disableClose,this.id=e.id,e.addPanelClass(`mat-mdc-dialog-panel`),r._animationStateChanged.pipe(f(e=>e.state===`opened`),p(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),r._animationStateChanged.pipe(f(e=>e.state===`closed`),p(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),e.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),n(this.backdropClick(),this.keydownEvents().pipe(f(e=>e.keyCode===27&&!this.disableClose&&!v(e)))).subscribe(e=>{this.disableClose||(e.preventDefault(),St(this,e.type===`keydown`?`keyboard`:`mouse`))})}close(e){let t=this._config.closePredicate;t&&!t(e,this._config,this.componentInstance)||(this._result=e,this._containerInstance._animationStateChanged.pipe(f(e=>e.state===`closing`),p(1)).subscribe(t=>{this._beforeClosed.next(e),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=H.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(e){let t=this._ref.config.positionStrategy;return e&&(e.left||e.right)?e.left?t.left(e.left):t.right(e.right):t.centerHorizontally(),e&&(e.top||e.bottom)?e.top?t.top(e.top):t.bottom(e.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(e=``,t=``){return this._ref.updateSize(e,t),this}addPanelClass(e){return this._ref.addPanelClass(e),this}removePanelClass(e){return this._ref.removePanelClass(e),this}getState(){return this._state}_finishDialogClose(){this._state=H.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}},W=new d(`MatMdcDialogData`),Et=new d(`mat-mdc-dialog-default-options`),Dt=new d(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let e=s(g);return()=>rt(e)}}),G=(()=>{class e{_defaultOptions=s(Et,{optional:!0});_scrollStrategy=s(Dt);_parentDialog=s(e,{optional:!0,skipSelf:!0});_idGenerator=s(y);_injector=s(g);_dialog=s(P);_animationsDisabled=T();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new l;_afterOpenedAtThisLevel=new l;dialogConfigClass=I;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=a(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(pe(void 0)));constructor(){this._dialogRefConstructor=U,this._dialogContainerType=B,this._dialogDataToken=W}open(e,t){let n;t={...this._defaultOptions||new I,...t},t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,{...t,positionStrategy:at(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:j,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(e,r,i)=>(n=new this._dialogRefConstructor(e,t,i),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:i},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:n}])});return n.componentRef=r.componentRef,n.componentInstance=r.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let e=this.openDialogs.indexOf(n);e>-1&&(this.openDialogs.splice(e,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||e)};static ɵprov=ee({token:e,factory:e.ɵfac})}return e})(),K=(()=>{class e{dialogRef=s(U,{optional:!0});_elementRef=s(m);_dialog=s(G);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||=Ct(this._elementRef,this._dialog.openDialogs)}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&St(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||e)};static ɵdir=c({type:e,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(e,t){e&1&&Ce(`click`,function(e){return t._onButtonClick(e)}),e&2&&u(`aria-label`,t.ariaLabel||null)(`type`,t.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[ce]})}return e})(),q=(()=>{class e{_dialogRef=s(U,{optional:!0});_elementRef=s(m);_dialog=s(G);ngOnInit(){this._dialogRef||=Ct(this._elementRef,this._dialog.openDialogs),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||e)};static ɵdir=c({type:e})}return e})(),J=(()=>{class e extends q{id=s(y).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let t;return function(n){return(t||=o(e))(n||e)}})();static ɵdir=c({type:e,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(e,t){e&2&&de(`id`,t.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[_]})}return e})(),Y=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵdir=c({type:e,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[he([Qe])]})}return e})(),X=(()=>{class e extends q{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let t;return function(n){return(t||=o(e))(n||e)}})();static ɵdir=c({type:e,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(e,t){e&2&&r(`mat-mdc-dialog-actions-align-start`,t.align===`start`)(`mat-mdc-dialog-actions-align-center`,t.align===`center`)(`mat-mdc-dialog-actions-align-end`,t.align===`end`)},inputs:{align:`align`},features:[_]})}return e})(),Z=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵmod=oe({type:e,imports:[F,O,k,B,K,J,X,Y],exports:[S,B,K,J,X,Y]});static ɵinj=Oe({providers:[G],imports:[F,O,k,S]})}return e})()})),Q,kt=e((()=>{Te(),dt(),pt(),h(),lt(),Ot(),je(),Q=class{constructor(){this.translate=s(Ae),this.data=s(W),this.noLabel=this.data.noCustomLabel??this.translate.instant(`common.no`),this.yesLabel=this.data.yesCustomLabel??this.translate.instant(`common.yes`)}},Q=be([i({selector:`app-dialog`,imports:[Z,ct],template:ut,styles:[ft]})],Q)})),$,At,jt,Mt;e((()=>{Te(),ke(),kt(),Ot(),h(),lt(),$=class{constructor(){this.dialogData=_e.required(),this.dialog=s(G)}openDialog(){this.dialog.open(Q,{data:this.dialogData()}).afterClosed()}static{this.propDecorators={dialogData:[{type:ie,args:[{isSignal:!0,alias:`dialogData`,required:!0,transform:void 0}]}]}}},$=be([i({selector:`app-dialog-host`,imports:[ct],template:`<button mat-raised-button (click)="openDialog()">Otwórz Dialog</button>`})],$),At={title:`Komponenty/Dialog`,component:Q,tags:[`autodocs`],decorators:[Me({imports:[$]})]},jt={args:{title:`Przykładowy tytuł dialogu`,message:`To jest przykładowa wiadomość wyświetlana w oknie dialogowym.`},render:e=>({props:{dialogData:{title:e.title,message:e.message,noCustomLabel:e.noCustomLabel,yesCustomLabel:e.yesCustomLabel}},template:`<app-dialog-host [dialogData]="dialogData" />`})},Mt=[`Default`]}))();export{jt as Default,Mt as __namedExportsOrder,At as default};