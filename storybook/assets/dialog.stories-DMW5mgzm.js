import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{$t as t,At as n,Dn as r,Dt as i,En as a,Et as o,G as ee,I as te,Jn as s,Jt as ne,Kn as re,Kt as ie,Lt as ae,Mt as oe,N as c,Nr as se,Qt as ce,Rt as l,Sn as le,Tn as u,Tt as ue,Vn as d,Vt as f,Xt as de,Yt as fe,Z as pe,an as me,at as he,er as p,h as ge,k as _e,l as ve,ln as ye,m,n as be,pn as xe,tr as Se,vn as h,zr as Ce,zt as g}from"./core-_WelOpXh.js";import{C as we,D as Te,E as Ee,S as De,T as Oe,_,a as ke,b as v,c as Ae,d as je,f as Me,g as Ne,h as y,i as Pe,l as Fe,m as Ie,n as Le,o as b,r as Re,s as ze,t as Be,u as Ve,v as He,w as Ue,x as We,y as Ge}from"./observers-i660iW0G.js";import{a as Ke,n as qe,o as Je,t as Ye}from"./merge-DO-Kds_7.js";import{i as x,r as Xe}from"./share-DeSbScMh.js";import{o as Ze,s as Qe}from"./rxjs-interop-BwW-KZMl.js";import{n as $e,t as et}from"./startWith-DL-iJFzm.js";import{i as tt,r as S}from"./skip-B24Hjqnn.js";import{d as C,h as nt,i as rt,m as w,n as it,o as at,p as ot,r as st,s as ct,t as lt}from"./_animation-chunk-BxUxOv6C.js";import{a as ut,c as dt,d as ft,i as pt,l as mt,r as ht}from"./iframe-D3VywTuv.js";import{n as gt,t as _t}from"./_style-loader-chunk-CNMHjo3g.js";import{n as vt,r as yt,t as bt}from"./private-BrS1mFSq.js";import{n as xt,t as St}from"./flat-button-CLbYGA1H.js";import{n as Ct,t as wt}from"./framed-button-D9iFGi_l.js";import{n as Tt,r as Et,t as Dt}from"./_focus-monitor-chunk-CpgHc51i.js";function Ot(e){try{return e.frameElement}catch{return null}}function kt(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects==`function`&&e.getClientRects().length)}function At(e){let t=e.nodeName.toLowerCase();return t===`input`||t===`select`||t===`button`||t===`textarea`}function jt(e){return Nt(e)&&e.type==`hidden`}function Mt(e){return Pt(e)&&e.hasAttribute(`href`)}function Nt(e){return e.nodeName.toLowerCase()==`input`}function Pt(e){return e.nodeName.toLowerCase()==`a`}function Ft(e){if(!e.hasAttribute(`tabindex`)||e.tabIndex===void 0)return!1;let t=e.getAttribute(`tabindex`);return!(!t||isNaN(parseInt(t,10)))}function It(e){if(!Ft(e))return null;let t=parseInt(e.getAttribute(`tabindex`)||``,10);return isNaN(t)?-1:t}function Lt(e){let t=e.nodeName.toLowerCase(),n=t===`input`&&e.type;return n===`text`||n===`password`||t===`select`||t===`textarea`}function Rt(e){return jt(e)?!1:At(e)||Mt(e)||e.hasAttribute(`contenteditable`)||Ft(e)}function zt(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var T,Bt,E,D,Vt,Ht,Ut,Wt,O,k,A,Gt,j,Kt,qt;function Jt(){return(Jt=e((()=>{m(),Et(),nt(),ot(),gt(),yt(),rt(),ft(),Re(),T=(()=>{class e{_platform=d(w);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return kt(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=Ot(zt(e));if(t&&(It(t)===-1||!this.isVisible(t)))return!1;let n=e.nodeName.toLowerCase(),r=It(e);return e.hasAttribute(`contenteditable`)?r!==-1:n===`iframe`||n===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Lt(e)?!1:n===`audio`?e.hasAttribute(`controls`)?r!==-1:!1:n===`video`?r===-1?!1:r!==null||this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,t){return Rt(e)&&!this.isDisabled(e)&&(t?.ignoreInert||!e.closest?.(`[inert]`))&&(t?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(t){return new(t||e)};static ɵprov=f({token:e,factory:e.ɵfac})}return e})(),Bt=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_enabled=!0;constructor(e,t,n,r,i=!1,a){this._element=e,this._checker=t,this._ngZone=n,this._document=r,this._injector=a,i||this.attachAnchors()}destroy(){let e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener(`focus`,this.startAnchorListener),e.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let t=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let n=this._getFirstTabbableElement(t);return n?.focus(e),!!n}return t.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let t=this._getRegionBoundary(`start`);return t&&t.focus(e),!!t}focusLastTabbableElement(e){let t=this._getRegionBoundary(`end`);return t&&t.focus(e),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let e=0;e<t.length;e++){let n=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(n)return n}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let e=t.length-1;e>=0;e--){let n=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(n)return n}return null}_createAnchor(){let e=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add(`cdk-visually-hidden`),e.classList.add(`cdk-focus-trap-anchor`),e.setAttribute(`aria-hidden`,`true`),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){he(e,{injector:this._injector})}},E=(()=>{class e{_checker=d(T);_ngZone=d(r);_document=d(h);_injector=d(a);constructor(){d(_t).load(bt)}create(e,t=!1){return new Bt(e,this._checker,this._ngZone,this._document,t,this._injector)}static ɵfac=function(t){return new(t||e)};static ɵprov=f({token:e,factory:e.ɵfac})}return e})(),D=(()=>{class e{_elementRef=d(c);_focusTrapFactory=d(E);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){d(w).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&=(this._previouslyFocusedElement.focus(),null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=C(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(t){return new(t||e)};static ɵdir=l({type:e,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,ve],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,ve]},exportAs:[`cdkTrapFocus`],features:[i]})}return e})(),Vt=new u(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null}),Ht=new u(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`),Ut=0,Wt=(()=>{class e{_ngZone=d(r);_defaultOptions=d(Ht,{optional:!0});_liveElement;_document=d(h);_sanitizer=d(mt);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=d(Vt,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let n=this._defaultOptions,r,i;return t.length===1&&typeof t[0]==`number`?i=t[0]:[r,i]=t,this.clear(),clearTimeout(this._previousTimeout),r||=n&&n.politeness?n.politeness:`polite`,i==null&&n&&(i=n.duration),this._liveElement.setAttribute(`aria-live`,r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||=new Promise(e=>this._currentResolve=e),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:vt(this._liveElement,e,this._sanitizer),typeof i==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),i)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,t=this._document.getElementsByClassName(e),n=this._document.createElement(`div`);for(let e=0;e<t.length;e++)t[e].remove();return n.classList.add(e),n.classList.add(`cdk-visually-hidden`),n.setAttribute(`aria-atomic`,`true`),n.setAttribute(`aria-live`,`polite`),n.id=`cdk-live-announcer-${Ut++}`,this._document.body.appendChild(n),n}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let n=0;n<t.length;n++){let r=t[n],i=r.getAttribute(`aria-owns`);i?i.indexOf(e)===-1&&r.setAttribute(`aria-owns`,i+` `+e):r.setAttribute(`aria-owns`,e)}}static ɵfac=function(t){return new(t||e)};static ɵprov=f({token:e,factory:e.ɵfac})}return e})(),O=(()=>{class e{_elementRef=d(c);_liveAnnouncer=d(Wt);_contentObserver=d(Be);_ngZone=d(r);get politeness(){return this._politeness}set politeness(e){this._politeness=e===`off`||e===`assertive`?e:`polite`,this._politeness===`off`?this._subscription&&=(this._subscription.unsubscribe(),void 0):this._subscription||=this._ngZone.runOutsideAngular(()=>this._contentObserver.observe(this._elementRef).subscribe(()=>{let e=this._elementRef.nativeElement.textContent;e!==this._previousAnnouncedText&&(this._liveAnnouncer.announce(e,this._politeness,this.duration),this._previousAnnouncedText=e)}))}_politeness=`polite`;duration;_previousAnnouncedText;_subscription;constructor(){d(_t).load(bt)}ngOnDestroy(){this._subscription?.unsubscribe()}static ɵfac=function(t){return new(t||e)};static ɵdir=l({type:e,selectors:[[``,`cdkAriaLive`,``]],inputs:{politeness:[0,`cdkAriaLive`,`politeness`],duration:[0,`cdkAriaLiveDuration`,`duration`]},exportAs:[`cdkAriaLive`]})}return e})(),k=(function(e){return e[e.NONE=0]=`NONE`,e[e.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,e[e.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,e})(k||{}),A=`cdk-high-contrast-black-on-white`,Gt=`cdk-high-contrast-white-on-black`,j=`cdk-high-contrast-active`,Kt=(()=>{class e{_platform=d(w);_hasCheckedHighContrastMode=!1;_document=d(h);_breakpointSubscription;constructor(){this._breakpointSubscription=d(st).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return k.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(n&&n.backgroundColor||``).replace(/ /g,``);switch(e.remove(),r){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return k.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return k.BLACK_ON_WHITE}return k.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(j,A,Gt),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===k.BLACK_ON_WHITE?e.add(j,A):t===k.WHITE_ON_BLACK&&e.add(j,Gt)}}static ɵfac=function(t){return new(t||e)};static ɵprov=f({token:e,factory:e.ɵfac})}return e})(),qt=(()=>{class e{constructor(){d(Kt)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(t){return new(t||e)};static ɵmod=g({type:e,imports:[Le,O,D,Dt],exports:[O,D,Dt]});static ɵinj=s({imports:[Le]})}return e})()})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=`<div class="dialog-content">
    <h1 mat-dialog-title>{{ data.title }}</h1>
    <div mat-dialog-content>{{ data.message }}</div>
    <div mat-dialog-actions align="end">
        <ids-flat-button (clicked)="cancel()">{{ noLabel }}</ids-flat-button>
        <ids-flat-button (clicked)="confirm()">{{ yesLabel }}</ids-flat-button>
    </div>
</div>
`})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`.dialog-content{max-width:400px}.dialog-content .mat-mdc-dialog-content{padding-bottom:0}`})))()}function $t(e){let t=re(e),n=new le;return{valueSignal:t,get value(){return t()},change:n,ngOnDestroy(){n.complete()}}}function M(e,t){let n=e.length;for(;n--;)t(e[n])}var N,P,F,en,tn,nn,I,L;function rn(){return(rn=e((()=>{m(),Se(),Qe(),Ge(),Jt(),Et(),nt(),ot(),je(),et(),Xe(),We(),Te(),N=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings},P=(()=>{class e extends Ie{_elementRef=d(c);_focusTrapFactory=d(E);_config;_interactivityChecker=d(T);_ngZone=d(r);_focusMonitor=d(Tt);_renderer=d(ee);_changeDetectorRef=d(be);_injector=d(a);_platform=d(w);_document=d(h);_portalOutlet;_focusTrapped=new p;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=d(N,{optional:!0})||new N,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let t=()=>{n(),r(),e.removeAttribute(`tabindex`)},n=this._renderer.listen(e,`blur`,t),r=this._renderer.listen(e,`mousedown`,t)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||he(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let e=C(),n=this._elementRef.nativeElement;(!e||e===this._document.body||e===n||n.contains(e))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=C();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=C()))}static ɵfac=function(t){return new(t||e)};static ɵcmp=(function(){function r(e,t){}return ae({type:e,selectors:[[`cdk-dialog-container`]],viewQuery:function(e,n){if(e&1&&xe(y,7),e&2){let e;me(e=t())&&(n._portalOutlet=e.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(e,t){e&2&&n(`id`,t._config.id||null)(`role`,t._config.role)(`aria-modal`,t._config.ariaModal)(`aria-labelledby`,t._config.ariaLabel?null:t._ariaLabelledByQueue[0])(`aria-label`,t._config.ariaLabel)(`aria-describedby`,t._config.ariaDescribedBy||null)},features:[o],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(e,t){e&1&&ye(0,r,0,0,`ng-template`,0)},dependencies:[y],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return e})(),F=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new p;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(e,t){this.overlayRef=e,this.config=t,this.disableClose=t.disableClose,this.backdropClick=e.backdropClick(),this.keydownEvents=e.keydownEvents(),this.outsidePointerEvents=e.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Me(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=e.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(e,t){if(this._canClose(e)){let n=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(e),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(e=``,t=``){return this.overlayRef.updateSize({width:e,height:t}),this}addPanelClass(e){return this.overlayRef.addPanelClass(e),this}removePanelClass(e){return this.overlayRef.removePanelClass(e),this}_canClose(e){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(e,t,this.componentInstance))}},en=new u(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let e=d(a);return()=>Ae(e)}}),tn=new u(`DialogData`),nn=new u(`DefaultDialogConfig`),I=(()=>{class e{_injector=d(a);_defaultOptions=d(nn,{optional:!0});_parentDialog=d(e,{optional:!0,skipSelf:!0});_overlayContainer=d(ke);_idGenerator=d(v);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;_ariaHiddenElements=new Map;_scrollStrategy=d(en);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ze(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe($e(void 0)));open(e,t){t={...this._defaultOptions||new N,...t},t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let n=this._getOverlayConfig(t),r=Ve(this._injector,n),i=new F(r,t),a=this._attachContainer(r,i,t);if(i.containerInstance=a,!this.openDialogs.length){let e=this._overlayContainer.getContainerElement();a._focusTrapped?a._focusTrapped.pipe(x(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(e)}):this._hideNonDialogContentFromAssistiveTechnology(e)}return this._attachDialogContent(e,i,a,t),this.openDialogs.push(i),i.closed.subscribe(()=>this._removeOpenDialog(i,!0)),this.afterOpened.next(i),i}closeAll(){M(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){M(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),M(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Pe({positionStrategy:e.positionStrategy||Fe().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let r=n.injector||n.viewContainerRef?.injector,i=[{provide:N,useValue:n},{provide:F,useValue:t},{provide:ze,useValue:e}],o;n.container?typeof n.container==`function`?o=n.container:(o=n.container.type,i.push(...n.container.providers(n))):o=P;let ee=new Ne(o,n.viewContainerRef,a.create({parent:r||this._injector,providers:i}));return e.attach(ee).instance}_attachDialogContent(e,t,n,r){if(e instanceof pe){let i=this._createInjector(r,t,n,void 0),a={$implicit:r.data,dialogRef:t};r.templateContext&&(a={...a,...typeof r.templateContext==`function`?r.templateContext():r.templateContext}),n.attachTemplatePortal(new He(e,null,a,i))}else{let i=this._createInjector(r,t,n,this._injector),a=n.attachComponentPortal(new Ne(e,r.viewContainerRef,i,null,r.bindings));t.componentRef=a,t.componentInstance=a.instance}}_createInjector(e,t,n,r){let i=e.injector||e.viewContainerRef?.injector,o=[{provide:tn,useValue:e.data},{provide:F,useValue:t}];return e.providers&&(typeof e.providers==`function`?o.push(...e.providers(t,e,n)):o.push(...e.providers)),!e.direction||i&&i.get(Ee,null,{optional:!0})||o.push({provide:Ee,useValue:$t(e.direction)}),a.create({parent:i||r,providers:o})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((e,t)=>{e?t.setAttribute(`aria-hidden`,e):t.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let r=t[n];r!==e&&r.nodeName!==`SCRIPT`&&r.nodeName!==`STYLE`&&!r.hasAttribute(`aria-live`)&&!r.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(r,r.getAttribute(`aria-hidden`)),r.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||e)};static ɵprov=f({token:e,factory:e.ɵfac})}return e})(),L=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵmod=g({type:e,imports:[b,_,qt,P],exports:[_,P]});static ɵinj=s({providers:[I],imports:[b,_,qt,_]})}return e})()})))()}function an(e){return e==null?null:typeof e==`number`?e:e.endsWith(`ms`)?at(e.substring(0,e.length-2)):e.endsWith(`s`)?at(e.substring(0,e.length-1))*1e3:e===`0`?0:null}function on(e,t,n){return e._closeInteractionType=t,e.close(n)}function sn(e,t){let n=e.nativeElement.parentElement;for(;n&&!n.classList.contains(`mat-mdc-dialog-container`);)n=n.parentElement;return n?t.find(e=>e.id===n.id):null}var R,z,B,V,cn,ln,H,U,W,G,K,un,dn,q,J,Y,X,fn,pn,mn;function hn(){return(hn=e((()=>{je(),m(),rn(),ct(),Ge(),it(),Je(),Ye(),Se(),Qe(),tt(),Xe(),et(),We(),we(),Oe(),R=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},z=`mdc-dialog--open`,B=`mdc-dialog--opening`,V=`mdc-dialog--closing`,cn=150,ln=75,H=(()=>{class e extends P{_animationStateChanged=new le;_animationsEnabled=!lt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?an(this._config.enterAnimationDuration)??cn:0;_exitAnimationDuration=this._animationsEnabled?an(this._config.exitAnimationDuration)??ln:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(U,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(B,z)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(z),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(z),this._animationsEnabled?(this._hostElement.style.setProperty(U,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(V)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(B,V)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let t;return function(n){return(t||=de(e))(n||e)}})();static ɵcmp=(function(){function t(e,t){}return ae({type:e,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(e,t){e&2&&(ie(`id`,t._config.id),n(`aria-modal`,t._config.ariaModal)(`role`,t._config.role)(`aria-labelledby`,t._config.ariaLabel?null:t._ariaLabelledByQueue[0])(`aria-label`,t._config.ariaLabel)(`aria-describedby`,t._config.ariaDescribedBy||null),oe(`_mat-animation-noopable`,!t._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,t._actionSectionCount>0))},features:[o],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(e,n){e&1&&(fe(0,`div`,0)(1,`div`,1),ye(2,t,0,0,`ng-template`,2),ne()())},dependencies:[y],styles:[`.mat-mdc-dialog-container {
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
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
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
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
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
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
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
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
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
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
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
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
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
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
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
`],encapsulation:2,changeDetection:1})})()}return e})(),U=`--mat-dialog-transition-duration`,W=(function(e){return e[e.OPEN=0]=`OPEN`,e[e.CLOSING=1]=`CLOSING`,e[e.CLOSED=2]=`CLOSED`,e})(W||{}),G=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ke(1);_beforeClosed=new Ke(1);_result;_closeFallbackTimeout;_state=W.OPEN;_closeInteractionType;constructor(e,t,n){this._ref=e,this._config=t,this._containerInstance=n,this.disableClose=t.disableClose,this.id=e.id,e.addPanelClass(`mat-mdc-dialog-panel`),n._animationStateChanged.pipe(S(e=>e.state===`opened`),x(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(S(e=>e.state===`closed`),x(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),e.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),qe(this.backdropClick(),this.keydownEvents().pipe(S(e=>e.keyCode===27&&!this.disableClose&&!Me(e)))).subscribe(e=>{this.disableClose||(e.preventDefault(),on(this,e.type===`keydown`?`keyboard`:`mouse`))})}close(e){let t=this._config.closePredicate;(!t||t(e,this._config,this.componentInstance))&&(this._result=e,this._containerInstance._animationStateChanged.pipe(S(e=>e.state===`closing`),x(1)).subscribe(t=>{this._beforeClosed.next(e),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=W.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(e){let t=this._ref.config.positionStrategy;return e&&(e.left||e.right)?e.left?t.left(e.left):t.right(e.right):t.centerHorizontally(),e&&(e.top||e.bottom)?e.top?t.top(e.top):t.bottom(e.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(e=``,t=``){return this._ref.updateSize(e,t),this}addPanelClass(e){return this._ref.addPanelClass(e),this}removePanelClass(e){return this._ref.removePanelClass(e),this}getState(){return this._state}_finishDialogClose(){this._state=W.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}},K=new u(`MatMdcDialogData`),un=new u(`mat-mdc-dialog-default-options`),dn=new u(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let e=d(a);return()=>Ae(e)}}),q=(()=>{class e{_defaultOptions=d(un,{optional:!0});_scrollStrategy=d(dn);_parentDialog=d(e,{optional:!0,skipSelf:!0});_idGenerator=d(v);_injector=d(a);_dialog=d(I);_animationsDisabled=lt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;dialogConfigClass=R;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ze(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe($e(void 0)));constructor(){this._dialogRefConstructor=G,this._dialogContainerType=H,this._dialogDataToken=K}open(e,t){let n;t={...this._defaultOptions||new R,...t},t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,{...t,positionStrategy:Fe(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:N,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(e,r,i)=>(n=new this._dialogRefConstructor(e,t,i),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:i},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:n},{provide:F,useValue:null}])});return n.componentRef=r.componentRef,n.componentInstance=r.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let e=this.openDialogs.indexOf(n);e>-1&&(this.openDialogs.splice(e,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||e)};static ɵprov=f({token:e,factory:e.ɵfac})}return e})(),J=(()=>{class e{dialogRef=d(G,{optional:!0});_elementRef=d(c);_dialog=d(q);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||=sn(this._elementRef,this._dialog.openDialogs)}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&on(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||e)};static ɵdir=l({type:e,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(e,t){e&1&&ce(`click`,function(e){return t._onButtonClick(e)}),e&2&&n(`aria-label`,t.ariaLabel||null)(`type`,t.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[i]})}return e})(),Y=(()=>{class e{_dialogRef=d(G,{optional:!0});_elementRef=d(c);_dialog=d(q);ngOnInit(){this._dialogRef||=sn(this._elementRef,this._dialog.openDialogs),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||e)};static ɵdir=l({type:e})}return e})(),X=(()=>{class e extends Y{id=d(v).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let t;return function(n){return(t||=de(e))(n||e)}})();static ɵdir=l({type:e,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(e,t){e&2&&ie(`id`,t.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[o]})}return e})(),fn=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵdir=l({type:e,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[ue([De])]})}return e})(),pn=(()=>{class e extends Y{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let t;return function(n){return(t||=de(e))(n||e)}})();static ɵdir=l({type:e,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(e,t){e&2&&oe(`mat-mdc-dialog-actions-align-start`,t.align===`start`)(`mat-mdc-dialog-actions-align-center`,t.align===`center`)(`mat-mdc-dialog-actions-align-end`,t.align===`end`)},inputs:{align:`align`},features:[o]})}return e})(),mn=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵmod=g({type:e,imports:[L,b,_,H,J,X,pn,fn],exports:[Ue,H,J,X,pn,fn]});static ɵinj=s({providers:[q],imports:[L,b,_,Ue]})}return e})()})))()}var Z;function gn(){return(gn=e((()=>{Ce(),Xt(),Qt(),m(),xt(),hn(),pt(),Z=class{translate=d(ht);data=d(K);dialogRef=d(G);noLabel=this.data.noCustomLabel??this.translate.instant(`common.no`);yesLabel=this.data.yesCustomLabel??this.translate.instant(`common.yes`);cancel(){this.dialogRef.close()}confirm(){this.dialogRef.close(!0)}},Z=se([_e({selector:`app-dialog`,imports:[mn,St],template:Yt,styles:[Zt]})],Z)})))()}var Q,_n,$,vn;function yn(){return(yn=e((()=>{Ce(),ut(),gn(),hn(),m(),Ct(),Q=class{dialogData=ge.required();dialog=d(q);openDialog(){this.dialog.open(Z,{data:this.dialogData()}).afterClosed()}static propDecorators={dialogData:[{type:te,args:[{isSignal:!0,alias:`dialogData`,required:!0,transform:void 0}]}]}},Q=se([_e({selector:`app-dialog-host`,imports:[wt],template:`
        <ids-framed-button (clicked)="openDialog()">
            Otwórz Dialog
        </ids-framed-button>
    `})],Q),_n={title:`Komponenty/Dialog`,component:Z,tags:[`autodocs`],decorators:[dt({imports:[Q]})]},$={args:{title:`Przykładowy tytuł dialogu`,message:`To jest przykładowa wiadomość wyświetlana w oknie dialogowym.`},render:e=>({props:{dialogData:{title:e.title,message:e.message,noCustomLabel:e.noCustomLabel,yesCustomLabel:e.yesCustomLabel}},template:`<app-dialog-host [dialogData]="dialogData" />`})},vn=[`Default`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Przykładowy tytuł dialogu',
    message: 'To jest przykładowa wiadomość wyświetlana w oknie dialogowym.'
  },
  render: (args: DialogData) => {
    const dialogData: DialogData = {
      title: args.title,
      message: args.message,
      noCustomLabel: args.noCustomLabel,
      yesCustomLabel: args.yesCustomLabel
    };
    return {
      props: {
        dialogData
      },
      template: \`<app-dialog-host [dialogData]="dialogData" />\`
    };
  }
}`,...$.parameters?.docs?.source}}}})))()}yn();export{$ as Default,vn as __namedExportsOrder,_n as default};