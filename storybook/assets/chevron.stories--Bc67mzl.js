import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{At as n,Dn as r,En as i,Et as a,G as o,Gt as s,K as c,Kn as l,Lt as u,Mt as d,N as f,Nt as p,Pt as m,Rt as h,Tn as g,Ut as _,Vn as v,Vt as ee,Wt as te,h as ne,jt as re,kt as ie,l as y,m as b,nn as ae,tn as x,vn as oe,y as se}from"./core-_WelOpXh.js";import{n as S,t as C}from"./_animation-chunk-Td1p7rKA.js";import{l as w,o as T,r as ce,t as E,u as le}from"./_element-chunk-DnWviNE5.js";import{a as ue,c as de}from"./iframe-BjOmSAsQ.js";import{t as D}from"./_style-loader-chunk-CNMHjo3g.js";import{r as O}from"./private-BrS1mFSq.js";import{n as fe,t as pe}from"./icon-CfgdiOY2.js";import{a as me,c as k,n as he,o as ge,r as _e,s as ve}from"./_focus-monitor-chunk-BUAHJq-h.js";import{n as A}from"./platform-BKIq22lp.js";function ye(e,t,n){let r=Math.max(Math.abs(e-n.left),Math.abs(e-n.right)),i=Math.max(Math.abs(t-n.top),Math.abs(t-n.bottom));return Math.sqrt(r*r+i*i)}var j,M,N,be,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{w(),ve(),A(),b(),ce(),O(),j=(function(e){return e[e.FADING_IN=0]=`FADING_IN`,e[e.VISIBLE=1]=`VISIBLE`,e[e.FADING_OUT=2]=`FADING_OUT`,e[e.HIDDEN=3]=`HIDDEN`,e})(j||{}),M=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=j.HIDDEN;constructor(e,t,n,r=!1){this._renderer=e,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},N=k({passive:!0,capture:!0}),be=class{_events=new Map;addHandler(e,t,n,r){let i=this._events.get(t);if(i){let e=i.get(n);e?e.add(r):i.set(n,new Set([r]))}else this._events.set(t,new Map([[n,new Set([r])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,N)})}removeHandler(e,t,n){let r=this._events.get(e);if(!r)return;let i=r.get(t);i&&(i.delete(n),i.size===0&&r.delete(t),r.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,N)))}_delegateEventHandler=e=>{let t=T(e);t&&this._events.get(e.type)?.forEach((n,r)=>{(r===t||r.contains(t))&&n.forEach(t=>t.handleEvent(e))})}},P={enterDuration:225,exitDuration:150},F=800,I=k({passive:!0,capture:!0}),L=[`mousedown`,`touchstart`],R=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`],z=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=u({type:e,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,t){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return e})(),B=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new be;constructor(e,t,n,r,i){this._target=e,this._ngZone=t,this._platform=r,r.isBrowser&&(this._containerElement=E(n)),i&&i.get(D).load(z)}fadeInRipple(e,t,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i={...P,...n.animation};n.centered&&(e=r.left+r.width/2,t=r.top+r.height/2);let a=n.radius||ye(e,t,r),o=e-r.left,s=t-r.top,c=i.enterDuration,l=document.createElement(`div`);l.classList.add(`mat-ripple-element`),l.style.left=`${o-a}px`,l.style.top=`${s-a}px`,l.style.height=`${a*2}px`,l.style.width=`${a*2}px`,n.color!=null&&(l.style.backgroundColor=n.color),l.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(l);let u=window.getComputedStyle(l),d=u.transitionProperty,f=u.transitionDuration,p=d===`none`||f===`0s`||f===`0s, 0s`||r.width===0&&r.height===0,m=new M(this,l,n,p);l.style.transform=`scale3d(1, 1, 1)`,m.state=j.FADING_IN,n.persistent||(this._mostRecentTransientRipple=m);let h=null;return!p&&(c||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let e=()=>{h&&(h.fallbackTimer=null),clearTimeout(n),this._finishRippleTransition(m)},t=()=>this._destroyRipple(m),n=setTimeout(t,c+100);l.addEventListener(`transitionend`,e),l.addEventListener(`transitioncancel`,t),h={onTransitionEnd:e,onTransitionCancel:t,fallbackTimer:n}}),this._activeRipples.set(m,h),(p||!c)&&this._finishRippleTransition(m),m}fadeOutRipple(e){if(e.state===j.FADING_OUT||e.state===j.HIDDEN)return;let t=e.element,n={...P,...e.config.animation};t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,e.state=j.FADING_OUT,(e._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(t){let n=E(t);this._platform.isBrowser&&n&&n!==this._triggerElement&&(this._removeTriggerEvents(),this._triggerElement=n,L.forEach(t=>{e._eventManager.addHandler(this._ngZone,t,n,this)}))}handleEvent(e){e.type===`mousedown`?this._onMousedown(e):e.type===`touchstart`?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||=(this._ngZone.runOutsideAngular(()=>{R.forEach(e=>{this._triggerElement.addEventListener(e,this,I)})}),!0)}_finishRippleTransition(e){e.state===j.FADING_IN?this._startFadeOutTransition(e):e.state===j.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:n}=e.config;e.state=j.VISIBLE,n||t&&this._isPointerDown||e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=j.HIDDEN,t!==null&&(e.element.removeEventListener(`transitionend`,t.onTransitionEnd),e.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=me(e),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+F;this._target.rippleDisabled||t||n||(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!ge(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===j.VISIBLE||e.config.terminateOnPointerUp&&e.state===j.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(L.forEach(n=>e._eventManager.removeHandler(n,t,this)),this._pointerUpEventsRegistered&&=(R.forEach(e=>t.removeEventListener(e,this,I)),!1))}},V=new g(`mat-ripple-global-options`)})))()}var U,W,G,K,q,J,Y;function X(){return(X=e((()=>{b(),w(),A(),S(),H(),U={capture:!0},W=[`focus`,`mousedown`,`mouseenter`,`touchstart`],G=`mat-ripple-loader-uninitialized`,K=`mat-ripple-loader-class-name`,q=`mat-ripple-loader-centered`,J=`mat-ripple-loader-disabled`,Y=(()=>{class e{_document=v(oe);_animationsDisabled=C();_globalRippleOptions=v(V,{optional:!0});_platform=v(le);_ngZone=v(r);_injector=v(i);_eventCleanups;_hosts=new Map;constructor(){let e=v(c).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>W.map(t=>e.listen(this._document,t,this._onInteraction,U)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(e=>e())}configureRipple(e,t){e.setAttribute(G,this._globalRippleOptions?.namespace??``),(t.className||!e.hasAttribute(K))&&e.setAttribute(K,t.className||``),t.centered&&e.setAttribute(q,``),t.disabled&&e.setAttribute(J,``)}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(J,``):e.removeAttribute(J)}_onInteraction=e=>{let t=T(e);if(t instanceof HTMLElement){let e=t.closest(`[${G}="${this._globalRippleOptions?.namespace??``}"]`);e&&this._createRipple(e)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let t=this._document.createElement(`span`);t.classList.add(`mat-ripple`,e.getAttribute(K)),e.append(t);let n=this._globalRippleOptions,r=this._animationsDisabled?0:n?.animation?.enterDuration??P.enterDuration,i=this._animationsDisabled?0:n?.animation?.exitDuration??P.exitDuration,a={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(J),rippleConfig:{centered:e.hasAttribute(q),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:i}}},o=new B(a,this._ngZone,t,this._platform,this._injector),s=!a.rippleDisabled;s&&o.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:o,hasSetUpEvents:s}),e.removeAttribute(G)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(t){return new(t||e)};static ɵprov=ee({token:e,factory:e.ɵfac})}return e})()})))()}var Z;function xe(){return(xe=e((()=>{b(),Z=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=u({type:e,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,t){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return e})()})))()}function Q(e){return e==null?void 0:se(e)}var Se,Ce,we;function Te(){return(Te=e((()=>{b(),_e(),O(),X(),S(),xe(),Se=new g(`MAT_BUTTON_CONFIG`),Ce=(()=>{class e{_elementRef=v(f);_ngZone=v(r);_animationsDisabled=C();_config=v(Se,{optional:!0});_focusMonitor=v(he);_cleanupClick;_renderer=v(o);_rippleLoader=v(Y);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=ne(!1,{transform:y});constructor(){v(D).load(Z);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled==null?this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null:this.ariaDisabled}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor&&this.disabled&&!this.disabledInteractive?-1:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(t){return new(t||e)};static ɵdir=h({type:e,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,t){e&2&&(n(`disabled`,t._getDisabledAttribute())(`aria-disabled`,t._getAriaDisabled())(`tabindex`,t._getTabIndex()),re(t.color?`mat-`+t.color:``),d(`mat-mdc-button-progress-indicator-shown`,t.showProgress())(`mat-mdc-button-disabled`,t.disabled)(`mat-mdc-button-disabled-interactive`,t.disabledInteractive)(`mat-unthemed`,!t.color)(`_mat-animation-noopable`,t._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,y],disabled:[2,`disabled`,`disabled`,y],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,y],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,y],tabIndex:[2,`tabIndex`,`tabIndex`,Q],_tabindex:[2,`tabindex`,`_tabindex`,Q],showProgress:[1,`showProgress`]}})}return e})(),we=(()=>{class e extends Ce{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(t){return new(t||e)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function r(e,t){e&1&&(s(0,`div`,1),x(1,1),te())}return u({type:e,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[a],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(e,n){e&1&&(ae(t),_(0,`span`,0),x(1),m(2,r,2,0,`div`,1),_(3,`span`,2)(4,`span`,3)),e&2&&(ie(2),p(n.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})})()}return e})()})))()}var Ee=t({Example:()=>$,__namedExportsOrder:()=>Oe,default:()=>De}),De,$,Oe;function ke(){return(ke=e((()=>{ue(),b(),fe(),Te(),De={title:`Style/Animacje/Chevron`,decorators:[de({imports:[pe,we]})],parameters:{backgrounds:{disable:!0}},globals:{theme:`light`,locale:`pl`}},$={render:()=>({props:{isOpen:l(!0)},template:`
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