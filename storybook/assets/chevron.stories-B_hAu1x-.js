import{n as e,r as t}from"./rolldown-runtime-vtgMY1y5.js";import{An as n,Bt as r,Cn as i,Ft as a,It as o,Kn as s,L as c,Lt as l,Mn as u,Mt as d,Rt as f,Ut as p,Wt as m,X as h,Xt as ee,Yt as g,Z as te,Zn as ne,Zt as re,_ as ie,cn as ae,g as _,jn as v,qt as oe,sn as y,u as b,x as se,zt as ce}from"./core-CjIc2X4A.js";import{a as le,i as x,n as ue,o as de,r as fe,s as pe,t as me}from"./_focus-monitor-chunk-Dj_f-dgY.js";import{n as he,o as ge}from"./iframe-lGIe1z2d.js";import{t as S}from"./_style-loader-chunk-DLthcn4y.js";import{n as C}from"./private-D1gnW8tC.js";import{n as _e,t as ve}from"./icon-BgEspuO0.js";import{i as ye,l as w,o as T,t as E}from"./_element-chunk-C8HQE7Ye.js";import{i as be,n as D,t as O}from"./_animation-chunk-DudWPTAC.js";import{n as k}from"./platform-CzDzMk8w.js";function distanceToFurthestCorner(e,t,n){let r=Math.max(Math.abs(e-n.left),Math.abs(e-n.right)),i=Math.max(Math.abs(t-n.top),Math.abs(t-n.bottom));return Math.sqrt(r*r+i*i)}var A,RippleRef,j,RippleEventManager,M,N,P,F,I,L,R,z;function init__ripple_chunk(){return(init__ripple_chunk=e((()=>{w(),fe(),k(),_(),le(),be(),C(),A=(function(e){return e[e.FADING_IN=0]=`FADING_IN`,e[e.VISIBLE=1]=`VISIBLE`,e[e.FADING_OUT=2]=`FADING_OUT`,e[e.HIDDEN=3]=`HIDDEN`,e})(A||{}),RippleRef=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=A.HIDDEN;constructor(e,t,n,r=!1){this._renderer=e,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},j=x({passive:!0,capture:!0}),RippleEventManager=class{_events=new Map;addHandler(e,t,n,r){let i=this._events.get(t);if(i){let e=i.get(n);e?e.add(r):i.set(n,new Set([r]))}else this._events.set(t,new Map([[n,new Set([r])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,j)})}removeHandler(e,t,n){let r=this._events.get(e);if(!r)return;let i=r.get(t);i&&(i.delete(n),i.size===0&&r.delete(t),r.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,j)))}_delegateEventHandler=e=>{let t=T(e);t&&this._events.get(e.type)?.forEach((n,r)=>{(r===t||r.contains(t))&&n.forEach(t=>t.handleEvent(e))})}},M={enterDuration:225,exitDuration:150},N=800,P=x({passive:!0,capture:!0}),F=[`mousedown`,`touchstart`],I=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`],L=(()=>{class _MatRippleStylesLoader{static ɵfac=function _MatRippleStylesLoader_Factory(e){return new(e||_MatRippleStylesLoader)};static ɵcmp=p({type:_MatRippleStylesLoader,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function _MatRippleStylesLoader_Template(e,t){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return _MatRippleStylesLoader})(),R=class RippleRenderer{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new RippleEventManager;constructor(e,t,n,r,i){this._target=e,this._ngZone=t,this._platform=r,r.isBrowser&&(this._containerElement=E(n)),i&&i.get(S).load(L)}fadeInRipple(e,t,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i={...M,...n.animation};n.centered&&(e=r.left+r.width/2,t=r.top+r.height/2);let a=n.radius||distanceToFurthestCorner(e,t,r),o=e-r.left,s=t-r.top,c=i.enterDuration,l=document.createElement(`div`);l.classList.add(`mat-ripple-element`),l.style.left=`${o-a}px`,l.style.top=`${s-a}px`,l.style.height=`${a*2}px`,l.style.width=`${a*2}px`,n.color!=null&&(l.style.backgroundColor=n.color),l.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(l);let u=window.getComputedStyle(l),d=u.transitionProperty,f=u.transitionDuration,p=d===`none`||f===`0s`||f===`0s, 0s`||r.width===0&&r.height===0,m=new RippleRef(this,l,n,p);l.style.transform=`scale3d(1, 1, 1)`,m.state=A.FADING_IN,n.persistent||(this._mostRecentTransientRipple=m);let h=null;return!p&&(c||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let onTransitionEnd=()=>{h&&(h.fallbackTimer=null),clearTimeout(e),this._finishRippleTransition(m)},onTransitionCancel=()=>this._destroyRipple(m),e=setTimeout(onTransitionCancel,c+100);l.addEventListener(`transitionend`,onTransitionEnd),l.addEventListener(`transitioncancel`,onTransitionCancel),h={onTransitionEnd,onTransitionCancel,fallbackTimer:e}}),this._activeRipples.set(m,h),(p||!c)&&this._finishRippleTransition(m),m}fadeOutRipple(e){if(e.state===A.FADING_OUT||e.state===A.HIDDEN)return;let t=e.element,n={...M,...e.config.animation};t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,e.state=A.FADING_OUT,(e._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=E(e);this._platform.isBrowser&&t&&t!==this._triggerElement&&(this._removeTriggerEvents(),this._triggerElement=t,F.forEach(e=>{RippleRenderer._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(e){e.type===`mousedown`?this._onMousedown(e):e.type===`touchstart`?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||=(this._ngZone.runOutsideAngular(()=>{I.forEach(e=>{this._triggerElement.addEventListener(e,this,P)})}),!0)}_finishRippleTransition(e){e.state===A.FADING_IN?this._startFadeOutTransition(e):e.state===A.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:n}=e.config;e.state=A.VISIBLE,n||t&&this._isPointerDown||e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=A.HIDDEN,t!==null&&(e.element.removeEventListener(`transitionend`,t.onTransitionEnd),e.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=de(e),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+N;this._target.rippleDisabled||t||n||(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!pe(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===A.VISIBLE||e.config.terminateOnPointerUp&&e.state===A.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(F.forEach(t=>RippleRenderer._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&=(I.forEach(t=>e.removeEventListener(t,this,P)),!1))}},z=new n(`mat-ripple-global-options`)})))()}var B,V,H,U,W,G,K;function init__ripple_loader_chunk(){return(init__ripple_loader_chunk=e((()=>{_(),w(),k(),D(),init__ripple_chunk(),B={capture:!0},V=[`focus`,`mousedown`,`mouseenter`,`touchstart`],H=`mat-ripple-loader-uninitialized`,U=`mat-ripple-loader-class-name`,W=`mat-ripple-loader-centered`,G=`mat-ripple-loader-disabled`,K=(()=>{class MatRippleLoader{_document=s(i);_animationsDisabled=O();_globalRippleOptions=s(z,{optional:!0});_platform=s(ye);_ngZone=s(u);_injector=s(v);_eventCleanups;_hosts=new Map;constructor(){let e=s(te).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>V.map(t=>e.listen(this._document,t,this._onInteraction,B)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(e=>e())}configureRipple(e,t){e.setAttribute(H,this._globalRippleOptions?.namespace??``),(t.className||!e.hasAttribute(U))&&e.setAttribute(U,t.className||``),t.centered&&e.setAttribute(W,``),t.disabled&&e.setAttribute(G,``)}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(G,``):e.removeAttribute(G)}_onInteraction=e=>{let t=T(e);if(t instanceof HTMLElement){let e=t.closest(`[${H}="${this._globalRippleOptions?.namespace??``}"]`);e&&this._createRipple(e)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let t=this._document.createElement(`span`);t.classList.add(`mat-ripple`,e.getAttribute(U)),e.append(t);let n=this._globalRippleOptions,r=this._animationsDisabled?0:n?.animation?.enterDuration??M.enterDuration,i=this._animationsDisabled?0:n?.animation?.exitDuration??M.exitDuration,a={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(G),rippleConfig:{centered:e.hasAttribute(W),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:i}}},o=new R(a,this._ngZone,t,this._platform,this._injector),s=!a.rippleDisabled;s&&o.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:o,hasSetUpEvents:s}),e.removeAttribute(H)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function MatRippleLoader_Factory(e){return new(e||MatRippleLoader)};static ɵprov=oe({token:MatRippleLoader,factory:MatRippleLoader.ɵfac})}return MatRippleLoader})()})))()}var q;function init__structural_styles_chunk(){return(init__structural_styles_chunk=e((()=>{_(),q=(()=>{class _StructuralStylesLoader{static ɵfac=function _StructuralStylesLoader_Factory(e){return new(e||_StructuralStylesLoader)};static ɵcmp=p({type:_StructuralStylesLoader,selectors:[[`structural-styles`]],decls:0,vars:0,template:function _StructuralStylesLoader_Template(e,t){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return _StructuralStylesLoader})()})))()}function transformTabIndex(e){return e==null?void 0:se(e)}var J,Y,X;function init__icon_button_chunk(){return(init__icon_button_chunk=e((()=>{_(),ue(),C(),init__ripple_loader_chunk(),D(),init__structural_styles_chunk(),J=new n(`MAT_BUTTON_CONFIG`),Y=(()=>{class MatButtonBase{_elementRef=s(c);_ngZone=s(u);_animationsDisabled=O();_config=s(J,{optional:!0});_focusMonitor=s(me);_cleanupClick;_renderer=s(h);_rippleLoader=s(K);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=ie(!1,{transform:b});constructor(){s(S).load(q);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled==null?this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null:this.ariaDisabled}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor&&this.disabled&&!this.disabledInteractive?-1:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function MatButtonBase_Factory(e){return new(e||MatButtonBase)};static ɵdir=m({type:MatButtonBase,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function MatButtonBase_HostBindings(e,t){e&2&&(o(`disabled`,t._getDisabledAttribute())(`aria-disabled`,t._getAriaDisabled())(`tabindex`,t._getTabIndex()),l(t.color?`mat-`+t.color:``),f(`mat-mdc-button-progress-indicator-shown`,t.showProgress())(`mat-mdc-button-disabled`,t.disabled)(`mat-mdc-button-disabled-interactive`,t.disabledInteractive)(`mat-unthemed`,!t.color)(`_mat-animation-noopable`,t._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,b],disabled:[2,`disabled`,`disabled`,b],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,b],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,b],tabIndex:[2,`tabIndex`,`tabIndex`,transformTabIndex],_tabindex:[2,`tabindex`,`_tabindex`,transformTabIndex],showProgress:[1,`showProgress`]}})}return MatButtonBase})(),X=(()=>{class MatIconButton extends Y{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function MatIconButton_Factory(e){return new(e||MatIconButton)};static ɵcmp=(function(){let e=[`*`,[[``,`progressIndicator`,``]]],t=[`*`,`[progressIndicator]`];function MatIconButton_Conditional_2_Template(e,t){e&1&&(re(0,`div`,1),y(1,1),ee())}return p({type:MatIconButton,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[d],ngContentSelectors:t,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function MatIconButton_Template(t,n){t&1&&(ae(e),g(0,`span`,0),y(1),r(2,MatIconButton_Conditional_2_Template,2,0,`div`,1),g(3,`span`,2)(4,`span`,3)),t&2&&(a(2),ce(n.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return MatIconButton})()})))()}var xe=t({Example:()=>Q,__namedExportsOrder:()=>$,default:()=>Z}),Z,Q,$;function init_chevron_stories(){return(init_chevron_stories=e((()=>{_(),init__icon_button_chunk(),_e(),he(),Z={title:`Style/Animacje/Chevron`,decorators:[ge({imports:[ve,X]})],parameters:{backgrounds:{disable:!0}},globals:{theme:`light`,locale:`pl`}},Q={render:()=>({props:{isOpen:ne(!0)},template:`
            <div class="flex flex-row items-center gap-4">
                <button mat-icon-button (click)="isOpen.update(v => !v)">
                    <mat-icon class="chevron" [class.closed]="!isOpen()">
                        keyboard_arrow_up
                    </mat-icon>
                </button>
                {{ isOpen() ? 'Otwarty' : 'Zamknięty' }}
            </div>
        `})},$=[`Example`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    props: {
      isOpen: signal(true)
    },
    template: \`
            <div class="flex flex-row items-center gap-4">
                <button mat-icon-button (click)="isOpen.update(v => !v)">
                    <mat-icon class="chevron" [class.closed]="!isOpen()">
                        keyboard_arrow_up
                    </mat-icon>
                </button>
                {{ isOpen() ? 'Otwarty' : 'Zamknięty' }}
            </div>
        \`
  })
}`,...Q.parameters?.docs?.source}}}})))()}export{xe as n,init_chevron_stories as r,Q as t};