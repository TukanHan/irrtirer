import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{An as n,Bt as r,F as i,Ft as a,It as o,J as s,Jt as c,Kt as l,Lt as u,Mt as d,Nt as f,On as p,Pt as m,Vt as h,Wn as g,Wt as ee,Yn as te,an as ne,h as re,in as _,kn as ie,kt as ae,l as v,m as y,q as oe,qt as se,xn as ce,y as le}from"./core-CEfZiV_p.js";import{n as b,t as x}from"./_animation-chunk-D0kNF5cs.js";import{l as S,o as C,r as ue,t as w,u as de}from"./_element-chunk-DN4-tc4U.js";import{a as fe,c as pe}from"./iframe-CcuyKnyp.js";import{t as T}from"./_style-loader-chunk-Bu_77Dkg.js";import{r as E}from"./private-CCRpxYqx.js";import{n as me,t as he}from"./icon-D3vzWDKc.js";import{a as ge,c as D,n as _e,o as ve,r as ye,s as be}from"./_focus-monitor-chunk-Deerui24.js";import{n as O}from"./platform-Cr0R-YD6.js";function xe(e,t,n){let r=Math.max(Math.abs(e-n.left),Math.abs(e-n.right)),i=Math.max(Math.abs(t-n.top),Math.abs(t-n.bottom));return Math.sqrt(r*r+i*i)}var k,A,j,Se,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{S(),be(),O(),y(),ue(),E(),k=(function(e){return e[e.FADING_IN=0]=`FADING_IN`,e[e.VISIBLE=1]=`VISIBLE`,e[e.FADING_OUT=2]=`FADING_OUT`,e[e.HIDDEN=3]=`HIDDEN`,e})(k||{}),A=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=k.HIDDEN;constructor(e,t,n,r=!1){this._renderer=e,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},j=D({passive:!0,capture:!0}),Se=class{_events=new Map;addHandler(e,t,n,r){let i=this._events.get(t);if(i){let e=i.get(n);e?e.add(r):i.set(n,new Set([r]))}else this._events.set(t,new Map([[n,new Set([r])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,j)})}removeHandler(e,t,n){let r=this._events.get(e);if(!r)return;let i=r.get(t);i&&(i.delete(n),i.size===0&&r.delete(t),r.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,j)))}_delegateEventHandler=e=>{let t=C(e);t&&this._events.get(e.type)?.forEach((n,r)=>{(r===t||r.contains(t))&&n.forEach(t=>t.handleEvent(e))})}},M={enterDuration:225,exitDuration:150},N=800,P=D({passive:!0,capture:!0}),F=[`mousedown`,`touchstart`],I=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`],L=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=r({type:e,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,t){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return e})(),R=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Se;constructor(e,t,n,r,i){this._target=e,this._ngZone=t,this._platform=r,r.isBrowser&&(this._containerElement=w(n)),i&&i.get(T).load(L)}fadeInRipple(e,t,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i={...M,...n.animation};n.centered&&(e=r.left+r.width/2,t=r.top+r.height/2);let a=n.radius||xe(e,t,r),o=e-r.left,s=t-r.top,c=i.enterDuration,l=document.createElement(`div`);l.classList.add(`mat-ripple-element`),l.style.left=`${o-a}px`,l.style.top=`${s-a}px`,l.style.height=`${a*2}px`,l.style.width=`${a*2}px`,n.color!=null&&(l.style.backgroundColor=n.color),l.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(l);let u=window.getComputedStyle(l),d=u.transitionProperty,f=u.transitionDuration,p=d===`none`||f===`0s`||f===`0s, 0s`||r.width===0&&r.height===0,m=new A(this,l,n,p);l.style.transform=`scale3d(1, 1, 1)`,m.state=k.FADING_IN,n.persistent||(this._mostRecentTransientRipple=m);let h=null;return!p&&(c||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let e=()=>{h&&(h.fallbackTimer=null),clearTimeout(n),this._finishRippleTransition(m)},t=()=>this._destroyRipple(m),n=setTimeout(t,c+100);l.addEventListener(`transitionend`,e),l.addEventListener(`transitioncancel`,t),h={onTransitionEnd:e,onTransitionCancel:t,fallbackTimer:n}}),this._activeRipples.set(m,h),(p||!c)&&this._finishRippleTransition(m),m}fadeOutRipple(e){if(e.state===k.FADING_OUT||e.state===k.HIDDEN)return;let t=e.element,n={...M,...e.config.animation};t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,e.state=k.FADING_OUT,(e._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(t){let n=w(t);this._platform.isBrowser&&n&&n!==this._triggerElement&&(this._removeTriggerEvents(),this._triggerElement=n,F.forEach(t=>{e._eventManager.addHandler(this._ngZone,t,n,this)}))}handleEvent(e){e.type===`mousedown`?this._onMousedown(e):e.type===`touchstart`?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||=(this._ngZone.runOutsideAngular(()=>{I.forEach(e=>{this._triggerElement.addEventListener(e,this,P)})}),!0)}_finishRippleTransition(e){e.state===k.FADING_IN?this._startFadeOutTransition(e):e.state===k.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:n}=e.config;e.state=k.VISIBLE,n||t&&this._isPointerDown||e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=k.HIDDEN,t!==null&&(e.element.removeEventListener(`transitionend`,t.onTransitionEnd),e.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=ge(e),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+N;this._target.rippleDisabled||t||n||(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!ve(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===k.VISIBLE||e.config.terminateOnPointerUp&&e.state===k.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(F.forEach(n=>e._eventManager.removeHandler(n,t,this)),this._pointerUpEventsRegistered&&=(I.forEach(e=>t.removeEventListener(e,this,P)),!1))}},z=new p(`mat-ripple-global-options`)})))()}var V,H,U,W,G,K,q;function J(){return(J=e((()=>{y(),S(),O(),b(),B(),V={capture:!0},H=[`focus`,`mousedown`,`mouseenter`,`touchstart`],U=`mat-ripple-loader-uninitialized`,W=`mat-ripple-loader-class-name`,G=`mat-ripple-loader-centered`,K=`mat-ripple-loader-disabled`,q=(()=>{class e{_document=g(ce);_animationsDisabled=x();_globalRippleOptions=g(z,{optional:!0});_platform=g(de);_ngZone=g(n);_injector=g(ie);_eventCleanups;_hosts=new Map;constructor(){let e=g(s).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>H.map(t=>e.listen(this._document,t,this._onInteraction,V)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(e=>e())}configureRipple(e,t){e.setAttribute(U,this._globalRippleOptions?.namespace??``),(t.className||!e.hasAttribute(W))&&e.setAttribute(W,t.className||``),t.centered&&e.setAttribute(G,``),t.disabled&&e.setAttribute(K,``)}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(K,``):e.removeAttribute(K)}_onInteraction=e=>{let t=C(e);if(t instanceof HTMLElement){let e=t.closest(`[${U}="${this._globalRippleOptions?.namespace??``}"]`);e&&this._createRipple(e)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let t=this._document.createElement(`span`);t.classList.add(`mat-ripple`,e.getAttribute(W)),e.append(t);let n=this._globalRippleOptions,r=this._animationsDisabled?0:n?.animation?.enterDuration??M.enterDuration,i=this._animationsDisabled?0:n?.animation?.exitDuration??M.exitDuration,a={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(K),rippleConfig:{centered:e.hasAttribute(G),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:i}}},o=new R(a,this._ngZone,t,this._platform,this._injector),s=!a.rippleDisabled;s&&o.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:o,hasSetUpEvents:s}),e.removeAttribute(U)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(t){return new(t||e)};static ɵprov=ee({token:e,factory:e.ɵfac})}return e})()})))()}var Y;function X(){return(X=e((()=>{y(),Y=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=r({type:e,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,t){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return e})()})))()}function Z(e){return e==null?void 0:le(e)}var Q,Ce,we;function Te(){return(Te=e((()=>{y(),ye(),E(),J(),b(),X(),Q=new p(`MAT_BUTTON_CONFIG`),Ce=(()=>{class e{_elementRef=g(i);_ngZone=g(n);_animationsDisabled=x();_config=g(Q,{optional:!0});_focusMonitor=g(_e);_cleanupClick;_renderer=g(oe);_rippleLoader=g(q);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=re(!1,{transform:v});constructor(){g(T).load(Y);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled==null?this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null:this.ariaDisabled}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor&&this.disabled&&!this.disabledInteractive?-1:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(t){return new(t||e)};static ɵdir=h({type:e,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,t){e&2&&(f(`disabled`,t._getDisabledAttribute())(`aria-disabled`,t._getAriaDisabled())(`tabindex`,t._getTabIndex()),m(t.color?`mat-`+t.color:``),a(`mat-mdc-button-progress-indicator-shown`,t.showProgress())(`mat-mdc-button-disabled`,t.disabled)(`mat-mdc-button-disabled-interactive`,t.disabledInteractive)(`mat-unthemed`,!t.color)(`_mat-animation-noopable`,t._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,v],disabled:[2,`disabled`,`disabled`,v],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,v],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,v],tabIndex:[2,`tabIndex`,`tabIndex`,Z],_tabindex:[2,`tabindex`,`_tabindex`,Z],showProgress:[1,`showProgress`]}})}return e})(),we=(()=>{class e extends Ce{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(t){return new(t||e)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function i(e,t){e&1&&(c(0,`div`,1),_(1,1),se())}return r({type:e,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[ae],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(e,n){e&1&&(ne(t),l(0,`span`,0),_(1),u(2,i,2,0,`div`,1),l(3,`span`,2)(4,`span`,3)),e&2&&(d(2),o(n.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})})()}return e})()})))()}var Ee=t({Example:()=>$,__namedExportsOrder:()=>Oe,default:()=>De}),De,$,Oe;function ke(){return(ke=e((()=>{fe(),y(),me(),Te(),De={title:`Style/Animacje/Chevron`,decorators:[pe({imports:[he,we]})],parameters:{backgrounds:{disable:!0}},globals:{theme:`light`,locale:`pl`}},$={render:()=>({props:{isOpen:te(!0)},template:`
            <div class="flex flex-row items-center gap-4">
                <button mat-icon-button (click)="isOpen.update(v => !v)">
                    <mat-icon class="chevron" [class.closed]="!isOpen()">
                        keyboard_arrow_up
                    </mat-icon>
                </button>
                {{ isOpen() ? 'Otwarty' : 'Zamknięty' }}
            </div>
        `})},Oe=[`Example`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}export{Ee as n,ke as r,$ as t};