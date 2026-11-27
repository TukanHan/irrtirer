import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{An as t,B as n,Cn as r,Dn as i,It as a,Kn as o,L as s,Lr as ee,Mn as c,Mt as l,N as te,Qt as ne,Rt as u,Ur as d,Ut as re,Wt as f,X as ie,Zn as ae,_ as oe,an as se,ar as p,dn as ce,dt as le,en as ue,g as m,jn as h,jt as de,mn as fe,n as pe,nn as g,or as me,qt as _,rt as he,tn as ge,vn as _e}from"./core-CjIc2X4A.js";import{i as ve,n as ye,r as v,t as be}from"./merge-4Gmd4aW9.js";import{a as y,o as b}from"./tap-6zKMxfSh.js";import{c as x,l as S}from"./rxjs-interop-BbrTArIW.js";import{n as xe,t as C}from"./filter-EU0XwhQy.js";import{C as Se,S as w,_ as Ce,a as we,b as T,c as E,d as Te,f as D,g as Ee,h as O,i as De,l as Oe,m as ke,o as Ae,p as k,s as A,u as j,v as M,x as N,y as P}from"./_overlay-module-chunk-H_xHnecq.js";import{n as je,t as Me}from"./_focus-monitor-chunk-DO_cmS2j.js";import{n as F,t as I}from"./startWith-Ch8y5c80.js";import{c as Ne,l as Pe,n as Fe,o as Ie}from"./iframe-CNr8ZO-t.js";import{n as Le,t as Re}from"./_style-loader-chunk-DLthcn4y.js";import{n as ze,t as Be}from"./private-D1gnW8tC.js";import{n as Ve,t as He}from"./flat-button-CowMDr46.js";import{n as Ue,t as We}from"./framed-button-C65uvBYm.js";import{a as L,i as Ge,l as Ke,n as R,s as z}from"./_element-chunk-C8HQE7Ye.js";import{i as qe,n as Je,t as Ye}from"./_animation-chunk-DudWPTAC.js";function getFrameElement(e){try{return e.frameElement}catch{return null}}function hasGeometry(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects==`function`&&e.getClientRects().length)}function isNativeFormElement(e){let t=e.nodeName.toLowerCase();return t===`input`||t===`select`||t===`button`||t===`textarea`}function isHiddenInput(e){return isInputElement(e)&&e.type==`hidden`}function isAnchorWithHref(e){return isAnchorElement(e)&&e.hasAttribute(`href`)}function isInputElement(e){return e.nodeName.toLowerCase()==`input`}function isAnchorElement(e){return e.nodeName.toLowerCase()==`a`}function hasValidTabIndex(e){if(!e.hasAttribute(`tabindex`)||e.tabIndex===void 0)return!1;let t=e.getAttribute(`tabindex`);return!(!t||isNaN(parseInt(t,10)))}function getTabIndexValue(e){if(!hasValidTabIndex(e))return null;let t=parseInt(e.getAttribute(`tabindex`)||``,10);return isNaN(t)?-1:t}function isPotentiallyTabbableIOS(e){let t=e.nodeName.toLowerCase(),n=t===`input`&&e.type;return n===`text`||n===`password`||t===`select`||t===`textarea`}function isPotentiallyFocusable(e){return isHiddenInput(e)?!1:isNativeFormElement(e)||isAnchorWithHref(e)||e.hasAttribute(`contenteditable`)||hasValidTabIndex(e)}function getWindow(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var B,FocusTrap,Xe;function init__a11y_module_chunk(){return(init__a11y_module_chunk=e((()=>{m(),L(),Le(),ze(),B=(()=>{class InteractivityChecker{_platform=o(Ge);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return hasGeometry(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=getFrameElement(getWindow(e));if(t&&(getTabIndexValue(t)===-1||!this.isVisible(t)))return!1;let n=e.nodeName.toLowerCase(),r=getTabIndexValue(e);return e.hasAttribute(`contenteditable`)?r!==-1:n===`iframe`||n===`object`||this._platform.WEBKIT&&this._platform.IOS&&!isPotentiallyTabbableIOS(e)?!1:n===`audio`?e.hasAttribute(`controls`)?r!==-1:!1:n===`video`?r===-1?!1:r!==null||this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,t){return isPotentiallyFocusable(e)&&!this.isDisabled(e)&&(t?.ignoreInert||!e.closest?.(`[inert]`))&&(t?.ignoreVisibility||this.isVisible(e))}static ɵfac=function InteractivityChecker_Factory(e){return new(e||InteractivityChecker)};static ɵprov=_({token:InteractivityChecker,factory:InteractivityChecker.ɵfac})}return InteractivityChecker})(),FocusTrap=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_enabled=!0;constructor(e,t,n,r,i=!1,a){this._element=e,this._checker=t,this._ngZone=n,this._document=r,this._injector=a,i||this.attachAnchors()}destroy(){let e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener(`focus`,this.startAnchorListener),e.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let t=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let n=this._getFirstTabbableElement(t);return n?.focus(e),!!n}return t.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let t=this._getRegionBoundary(`start`);return t&&t.focus(e),!!t}focusLastTabbableElement(e){let t=this._getRegionBoundary(`end`);return t&&t.focus(e),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let e=0;e<t.length;e++){let n=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(n)return n}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let e=t.length-1;e>=0;e--){let n=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(n)return n}return null}_createAnchor(){let e=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add(`cdk-visually-hidden`),e.classList.add(`cdk-focus-trap-anchor`),e.setAttribute(`aria-hidden`,`true`),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){le(e,{injector:this._injector})}},Xe=(()=>{class FocusTrapFactory{_checker=o(B);_ngZone=o(c);_document=o(r);_injector=o(h);constructor(){o(Re).load(Be)}create(e,t=!1){return new FocusTrap(e,this._checker,this._ngZone,this._document,t,this._injector)}static ɵfac=function FocusTrapFactory_Factory(e){return new(e||FocusTrapFactory)};static ɵprov=_({token:FocusTrapFactory,factory:FocusTrapFactory.ɵfac})}return FocusTrapFactory})()})))()}function getDirectionality(e){let t=ae(e),n=new i;return{valueSignal:t,get value(){return t()},change:n,ngOnDestroy(){n.complete()}}}function reverseForEach(e,t){let n=e.length;for(;n--;)t(e[n])}var DialogConfig,V,DialogRef,Ze,Qe,$e,et;function init_dialog(){return(init_dialog=e((()=>{m(),me(),S(),O(),init__a11y_module_chunk(),je(),L(),Ke(),j(),I(),y(),N(),P(),Se(),DialogConfig=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings},V=(()=>{class CdkDialogContainer extends Te{_elementRef=o(s);_focusTrapFactory=o(Xe);_config;_interactivityChecker=o(B);_ngZone=o(c);_focusMonitor=o(Me);_renderer=o(ie);_changeDetectorRef=o(pe);_injector=o(h);_platform=o(Ge);_document=o(r);_portalOutlet;_focusTrapped=new p;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=o(DialogConfig,{optional:!0})||new DialogConfig,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let callback=()=>{t(),n(),e.removeAttribute(`tabindex`)},t=this._renderer.listen(e,`blur`,callback),n=this._renderer.listen(e,`mousedown`,callback)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||le(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let e=z(),n=this._elementRef.nativeElement;(!e||e===this._document.body||e===n||n.contains(e))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=z();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=z()))}static ɵfac=function CdkDialogContainer_Factory(e){return new(e||CdkDialogContainer)};static ɵcmp=(function(){function CdkDialogContainer_ng_template_0_Template(e,t){}return re({type:CdkDialogContainer,selectors:[[`cdk-dialog-container`]],viewQuery:function CdkDialogContainer_Query(e,t){if(e&1&&_e(D,7),e&2){let e;ce(e=se())&&(t._portalOutlet=e.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function CdkDialogContainer_HostBindings(e,t){e&2&&a(`id`,t._config.id||null)(`role`,t._config.role)(`aria-modal`,t._config.ariaModal)(`aria-labelledby`,t._config.ariaLabel?null:t._ariaLabelledByQueue[0])(`aria-label`,t._config.ariaLabel)(`aria-describedby`,t._config.ariaDescribedBy||null)},features:[l],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function CdkDialogContainer_Template(e,t){e&1&&fe(0,CdkDialogContainer_ng_template_0_Template,0,0,`ng-template`,0)},dependencies:[D],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return CdkDialogContainer})(),DialogRef=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new p;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(e,t){this.overlayRef=e,this.config=t,this.disableClose=t.disableClose,this.backdropClick=e.backdropClick(),this.keydownEvents=e.keydownEvents(),this.outsidePointerEvents=e.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!T(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=e.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(e,t){if(this._canClose(e)){let n=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(e),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(e=``,t=``){return this.overlayRef.updateSize({width:e,height:t}),this}addPanelClass(e){return this.overlayRef.addPanelClass(e),this}removePanelClass(e){return this.overlayRef.removePanelClass(e),this}_canClose(e){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(e,t,this.componentInstance))}},Ze=new t(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let e=o(h);return()=>A(e)}}),Qe=new t(`DialogData`),$e=new t(`DefaultDialogConfig`),et=(()=>{class Dialog{_injector=o(h);_defaultOptions=o($e,{optional:!0});_parentDialog=o(Dialog,{optional:!0,skipSelf:!0});_overlayContainer=o(we);_idGenerator=o(M);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;_ariaHiddenElements=new Map;_scrollStrategy=o(Ze);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=x(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(F(void 0)));open(e,t){t={...this._defaultOptions||new DialogConfig,...t},t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let n=this._getOverlayConfig(t),r=Oe(this._injector,n),i=new DialogRef(r,t),a=this._attachContainer(r,i,t);if(i.containerInstance=a,!this.openDialogs.length){let e=this._overlayContainer.getContainerElement();a._focusTrapped?a._focusTrapped.pipe(b(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(e)}):this._hideNonDialogContentFromAssistiveTechnology(e)}return this._attachDialogContent(e,i,a,t),this.openDialogs.push(i),i.closed.subscribe(()=>this._removeOpenDialog(i,!0)),this.afterOpened.next(i),i}closeAll(){reverseForEach(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){reverseForEach(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),reverseForEach(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new De({positionStrategy:e.positionStrategy||E().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let r=n.injector||n.viewContainerRef?.injector,i=[{provide:DialogConfig,useValue:n},{provide:DialogRef,useValue:t},{provide:Ae,useValue:e}],a;n.container?typeof n.container==`function`?a=n.container:(a=n.container.type,i.push(...n.container.providers(n))):a=V;let o=new k(a,n.viewContainerRef,h.create({parent:r||this._injector,providers:i}));return e.attach(o).instance}_attachDialogContent(e,t,n,r){if(e instanceof he){let i=this._createInjector(r,t,n,void 0),a={$implicit:r.data,dialogRef:t};r.templateContext&&(a={...a,...typeof r.templateContext==`function`?r.templateContext():r.templateContext}),n.attachTemplatePortal(new ke(e,null,a,i))}else{let i=this._createInjector(r,t,n,this._injector),a=n.attachComponentPortal(new k(e,r.viewContainerRef,i,null,r.bindings));t.componentRef=a,t.componentInstance=a.instance}}_createInjector(e,t,n,r){let i=e.injector||e.viewContainerRef?.injector,a=[{provide:Qe,useValue:e.data},{provide:DialogRef,useValue:t}];return e.providers&&(typeof e.providers==`function`?a.push(...e.providers(t,e,n)):a.push(...e.providers)),!e.direction||i&&i.get(w,null,{optional:!0})||a.push({provide:w,useValue:getDirectionality(e.direction)}),h.create({parent:i||r,providers:a})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((e,t)=>{e?t.setAttribute(`aria-hidden`,e):t.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let r=t[n];r!==e&&r.nodeName!==`SCRIPT`&&r.nodeName!==`STYLE`&&!r.hasAttribute(`aria-live`)&&!r.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(r,r.getAttribute(`aria-hidden`)),r.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function Dialog_Factory(e){return new(e||Dialog)};static ɵprov=_({token:Dialog,factory:Dialog.ɵfac})}return Dialog})()})))()}function parseCssTime(e){return e==null?null:typeof e==`number`?e:e.endsWith(`ms`)?R(e.substring(0,e.length-2)):e.endsWith(`s`)?R(e.substring(0,e.length-1))*1e3:e===`0`?0:null}function _closeDialogVia(e,t,n){return e._closeInteractionType=t,e.close(n)}function getClosestDialog(e,t){let n=e.nativeElement.parentElement;for(;n&&!n.classList.contains(`mat-mdc-dialog-container`);)n=n.parentElement;return n?t.find(e=>e.id===n.id):null}var MatDialogConfig,H,U,W,tt,nt,rt,G,K,MatDialogRef,q,it,at,J,Y,ot,st,ct;function init_dialog$1(){return(init_dialog$1=e((()=>{j(),m(),init_dialog(),qe(),O(),Je(),ve(),be(),me(),S(),xe(),y(),I(),N(),P(),Ce(),MatDialogConfig=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},H=`mdc-dialog--open`,U=`mdc-dialog--opening`,W=`mdc-dialog--closing`,tt=150,nt=75,rt=(()=>{class MatDialogContainer extends V{_animationStateChanged=new i;_animationsEnabled=!Ye();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?parseCssTime(this._config.enterAnimationDuration)??tt:0;_exitAnimationDuration=this._animationsEnabled?parseCssTime(this._config.exitAnimationDuration)??nt:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(G,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(U,H)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(H),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(H),this._animationsEnabled?(this._hostElement.style.setProperty(G,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(W)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(U,W)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function MatDialogContainer_Factory(t){return(e||=g(MatDialogContainer))(t||MatDialogContainer)}})();static ɵcmp=(function(){function MatDialogContainer_ng_template_2_Template(e,t){}return re({type:MatDialogContainer,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function MatDialogContainer_HostBindings(e,t){e&2&&(ne(`id`,t._config.id),a(`aria-modal`,t._config.ariaModal)(`role`,t._config.role)(`aria-labelledby`,t._config.ariaLabel?null:t._ariaLabelledByQueue[0])(`aria-label`,t._config.ariaLabel)(`aria-describedby`,t._config.ariaDescribedBy||null),u(`_mat-animation-noopable`,!t._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,t._actionSectionCount>0))},features:[l],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function MatDialogContainer_Template(e,t){e&1&&(ge(0,`div`,0)(1,`div`,1),fe(2,MatDialogContainer_ng_template_2_Template,0,0,`ng-template`,2),ue()())},dependencies:[D],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})})()}return MatDialogContainer})(),G=`--mat-dialog-transition-duration`,K=(function(e){return e[e.OPEN=0]=`OPEN`,e[e.CLOSING=1]=`CLOSING`,e[e.CLOSED=2]=`CLOSED`,e})(K||{}),MatDialogRef=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new v(1);_beforeClosed=new v(1);_result;_closeFallbackTimeout;_state=K.OPEN;_closeInteractionType;constructor(e,t,n){this._ref=e,this._config=t,this._containerInstance=n,this.disableClose=t.disableClose,this.id=e.id,e.addPanelClass(`mat-mdc-dialog-panel`),n._animationStateChanged.pipe(C(e=>e.state===`opened`),b(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(C(e=>e.state===`closed`),b(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),e.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ye(this.backdropClick(),this.keydownEvents().pipe(C(e=>e.keyCode===27&&!this.disableClose&&!T(e)))).subscribe(e=>{this.disableClose||(e.preventDefault(),_closeDialogVia(this,e.type===`keydown`?`keyboard`:`mouse`))})}close(e){let t=this._config.closePredicate;(!t||t(e,this._config,this.componentInstance))&&(this._result=e,this._containerInstance._animationStateChanged.pipe(C(e=>e.state===`closing`),b(1)).subscribe(t=>{this._beforeClosed.next(e),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=K.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(e){let t=this._ref.config.positionStrategy;return e&&(e.left||e.right)?e.left?t.left(e.left):t.right(e.right):t.centerHorizontally(),e&&(e.top||e.bottom)?e.top?t.top(e.top):t.bottom(e.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(e=``,t=``){return this._ref.updateSize(e,t),this}addPanelClass(e){return this._ref.addPanelClass(e),this}removePanelClass(e){return this._ref.removePanelClass(e),this}getState(){return this._state}_finishDialogClose(){this._state=K.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}},q=new t(`MatMdcDialogData`),it=new t(`mat-mdc-dialog-default-options`),at=new t(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let e=o(h);return()=>A(e)}}),J=(()=>{class MatDialog{_defaultOptions=o(it,{optional:!0});_scrollStrategy=o(at);_parentDialog=o(MatDialog,{optional:!0,skipSelf:!0});_idGenerator=o(M);_injector=o(h);_dialog=o(et);_animationsDisabled=Ye();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;dialogConfigClass=MatDialogConfig;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=x(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(F(void 0)));constructor(){this._dialogRefConstructor=MatDialogRef,this._dialogContainerType=rt,this._dialogDataToken=q}open(e,t){let n;t={...this._defaultOptions||new MatDialogConfig,...t},t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,{...t,positionStrategy:E(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:DialogConfig,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(e,r,i)=>(n=new this._dialogRefConstructor(e,t,i),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:i},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:n},{provide:DialogRef,useValue:null}])});return n.componentRef=r.componentRef,n.componentInstance=r.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let e=this.openDialogs.indexOf(n);e>-1&&(this.openDialogs.splice(e,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function MatDialog_Factory(e){return new(e||MatDialog)};static ɵprov=_({token:MatDialog,factory:MatDialog.ɵfac})}return MatDialog})(),Y=(()=>{class MatDialogLayoutSection{_dialogRef=o(MatDialogRef,{optional:!0});_elementRef=o(s);_dialog=o(J);ngOnInit(){this._dialogRef||=getClosestDialog(this._elementRef,this._dialog.openDialogs),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function MatDialogLayoutSection_Factory(e){return new(e||MatDialogLayoutSection)};static ɵdir=f({type:MatDialogLayoutSection})}return MatDialogLayoutSection})(),ot=(()=>{class MatDialogTitle extends Y{id=o(M).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function MatDialogTitle_Factory(t){return(e||=g(MatDialogTitle))(t||MatDialogTitle)}})();static ɵdir=f({type:MatDialogTitle,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function MatDialogTitle_HostBindings(e,t){e&2&&ne(`id`,t.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[l]})}return MatDialogTitle})(),st=(()=>{class MatDialogContent{static ɵfac=function MatDialogContent_Factory(e){return new(e||MatDialogContent)};static ɵdir=f({type:MatDialogContent,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[de([Ee])]})}return MatDialogContent})(),ct=(()=>{class MatDialogActions extends Y{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function MatDialogActions_Factory(t){return(e||=g(MatDialogActions))(t||MatDialogActions)}})();static ɵdir=f({type:MatDialogActions,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function MatDialogActions_HostBindings(e,t){e&2&&u(`mat-mdc-dialog-actions-align-start`,t.align===`start`)(`mat-mdc-dialog-actions-align-center`,t.align===`center`)(`mat-mdc-dialog-actions-align-end`,t.align===`end`)},inputs:{align:`align`},features:[l]})}return MatDialogActions})()})))()}var lt;function init_dialog$2(){return(init_dialog$2=e((()=>{lt=`.dialog-content{max-width:400px}.dialog-content .mat-mdc-dialog-content{padding-bottom:0}`})))()}var X;function init_dialog$3(){return(init_dialog$3=e((()=>{d(),init_dialog$2(),m(),init_dialog$1(),Pe(),Ve(),X=class Dialog{translate=o(Ne);data=o(q);dialogRef=o(MatDialogRef);noLabel=this.data.noCustomLabel??this.translate.instant(`common.no`);yesLabel=this.data.yesCustomLabel??this.translate.instant(`common.yes`);cancel(){this.dialogRef.close()}confirm(){this.dialogRef.close(!0)}},X=ee([te({selector:`app-dialog`,imports:[ot,st,ct,He],template:`
        <div class="dialog-content">
            <h1 mat-dialog-title>{{ data.title }}</h1>
            <div mat-dialog-content>{{ data.message }}</div>
            <div mat-dialog-actions align="end">
                <ids-flat-button (clicked)="cancel()">{{ noLabel }}</ids-flat-button>
                <ids-flat-button (clicked)="confirm()">{{ yesLabel }}</ids-flat-button>
            </div>
        </div>
    `,styles:[lt]})],X)})))()}var Z,ut,Q,$;function init_dialog_stories(){return(init_dialog_stories=e((()=>{d(),m(),init_dialog$1(),Fe(),Ue(),init_dialog$3(),Z=class DialogHostComponent{dialogData=oe.required();dialog=o(J);openDialog(){this.dialog.open(X,{data:this.dialogData()}).afterClosed()}static propDecorators={dialogData:[{type:n,args:[{isSignal:!0,alias:`dialogData`,required:!0,transform:void 0}]}]}},Z=ee([te({selector:`app-dialog-host`,imports:[We],template:` <ids-framed-button (clicked)="openDialog()"> Otwórz Dialog </ids-framed-button> `})],Z),ut={title:`Komponenty/Dialog`,component:X,tags:[`autodocs`],decorators:[Ie({imports:[Z]})]},Q={args:{title:`Przykładowy tytuł dialogu`,message:`To jest przykładowa wiadomość wyświetlana w oknie dialogowym.`},render:e=>({props:{dialogData:{title:e.title,message:e.message,noCustomLabel:e.noCustomLabel,yesCustomLabel:e.yesCustomLabel}},template:`<app-dialog-host [dialogData]="dialogData" />`})},$=[`Default`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Przykładowy tytuł dialogu',
    message: 'To jest przykładowa wiadomość wyświetlana w oknie dialogowym.'
  },
  render: args => {
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
}`,...Q.parameters?.docs?.source}}}})))()}init_dialog_stories();export{Q as Default,$ as __namedExportsOrder,ut as default};