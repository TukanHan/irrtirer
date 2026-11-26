import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{$t as t,B as n,Bt as r,C as i,D as a,Dr as o,Ft as s,Gr as c,Gt as l,Hn as u,Ht as d,It as ee,K as f,L as p,N as m,Nn as h,Nt as te,On as ne,Or as re,Pt as g,Qn as ie,Qt as ae,Rt as _,S as oe,Tn as se,Ut as ce,Vt as le,Wn as ue,Wt as v,X as de,Xt as fe,Yn as pe,Yt as me,Z as he,Zt as ge,_ as _e,_n as ve,an as y,b,bn as ye,c as be,cn as xe,d as Se,dn as x,en as S,er as Ce,fn as we,g as C,gn as Te,hn as Ee,in as De,jn as w,l as Oe,ln as T,mr as ke,n as Ae,nr as je,on as E,or as D,pr as Me,qn as O,qt as Ne,rr as Pe,sn as k,sr as A,tn as j,u as Fe,un as Ie,vn as Le,w as M,wn as Re,yn as ze,zr as N,zt as P}from"./core-EfmSQQJi.js";import{A as Be,C as F,D as Ve,M as He,O as Ue,T as We,a as Ge,b as Ke,j as qe,k as Je,u as Ye,w as Xe,y as I}from"./_overlay-module-chunk-CmPuui0V.js";import{d as Ze,f as Qe}from"./take-dvM9vNsD.js";import{n as $e,t as et}from"./takeUntil-CHsMAawa.js";import{i as tt,r as nt}from"./skip-C_tNwTsk.js";import{a as rt,i as it,o as L,r as at,s as ot}from"./_array-chunk-BGFYUiLD.js";import{n as st,t as ct}from"./startWith-DbjFmi9L.js";import{c as lt,n as ut}from"./common-BEPtGlFT.js";import{b as dt,x as ft}from"./iframe-DXJSi4si.js";import{n as pt,t as mt}from"./_style-loader-chunk-aJDhswOz.js";import{i as ht,n as gt,r as R,t as _t}from"./_animation-chunk-DDmCMfzD.js";import{n as vt,r as yt}from"./observers-lnZX7Y9v.js";import{a as z,d as bt,f as xt,h as St,i as Ct,l as wt,m as Tt,p as Et,t as Dt,u as Ot}from"./signals-BCJpvr-a.js";import{n as kt,t as At}from"./platform-Cl0JayO4.js";var jt;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5odG1s(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5odG1s=e((()=>{jt=`<div class="flex flex-col">
    <span class="text-base text-contrast-highest">{{ label() }}</span>
    <span class="text-sm text-contrast-medium">{{ value() }}</span>
</div>

<div
    role="presentation"
    class="color-preview"
    [class.disabled]="disabled()"
    [style.background-color]="value()"
    (click)="toggleColorPanel()"
    cdkOverlayOrigin
    #trigger="cdkOverlayOrigin"
></div>

<ng-template
    cdkConnectedOverlay
    [cdkConnectedOverlayOrigin]="trigger"
    [cdkConnectedOverlayOpen]="isOpen()"
    [cdkConnectedOverlayHasBackdrop]="isOpen()"
    [cdkConnectedOverlayBackdropClass]="'cdk-overlay-transparent-backdrop-cs'"
    (backdropClick)="toggleColorPanel()"
>
    <app-color-selection-panel [color]="value()" (colorChange)="onColorChanged($event)" />
</ng-template>
`})))()}var Mt;function init_color_picker(){return(init_color_picker=e((()=>{Mt=`:host{background-color:var(--color-contrast-lightest);border-radius:4px;flex-direction:row;align-items:center;padding:10px 16px;display:flex;box-shadow:0 0 5px 1px #0000001a}:host .color-preview{border-radius:50%;width:40px;height:40px;margin-left:auto;display:block;box-shadow:0 0 4px 1px #0000001a}:host .color-preview:not(.disabled){cursor:pointer}`})))()}var Nt;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvY29sb3ItcGlja2VyL2NvbG9yLXNlbGVjdGlvbi1wYW5lbC9jb2xvci1zZWxlY3Rpb24tcGFuZWwuaHRtbA(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvY29sb3ItcGlja2VyL2NvbG9yLXNlbGVjdGlvbi1wYW5lbC9jb2xvci1zZWxlY3Rpb24tcGFuZWwuaHRtbA=e((()=>{Nt=`<div class="sv-preview">
    <app-color-canvas [hValue]="hValue()" [sValue]="sValue()" [vValue]="vValue()" (colorChange)="onColorCanvasChanged($event)" />
</div>

<div class="slider-container">
    <app-color-slider [(value)]="hValue" />
</div>

<div class="result-wrapper">
    <div role="presentation" class="color-preview" [style.background]="hexColor()"></div>

    <mat-form-field class="density-3 code-input" appearance="outline">
        <mat-label>Hex</mat-label>
        <input matInput [ngModel]="hexColor()" (change)="onHexCodeChange($event)" />
    </mat-form-field>
</div>
`})))()}var Pt;function init_color_selection_panel(){return(init_color_selection_panel=e((()=>{Pt=`:host{background-color:var(--color-contrast-lightest);border-radius:5px;flex-direction:column;display:flex;overflow:hidden;box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}:host .slider-container{padding:20px 10px}:host .result-wrapper{flex-direction:row;align-items:center;gap:10px;padding:0 10px 15px;display:flex}:host .result-wrapper .color-preview{border-radius:50%;min-width:40px;height:40px;display:block;box-shadow:0 0 4px 1px #0003}:host .result-wrapper .code-input{width:auto}:host .result-wrapper .code-input ::ng-deep .mat-mdc-form-field-subscript-wrapper{display:none}`})))()}var Ft,It,Lt,Rt,zt,Bt;function init_text_field(){return(init_text_field=e((()=>{C(),Qe(),A(),ot(),pt(),rt(),He(),Ft=(()=>{class _CdkTextFieldStyleLoader{static ɵfac=function _CdkTextFieldStyleLoader_Factory(e){return new(e||_CdkTextFieldStyleLoader)};static ɵcmp=ce({type:_CdkTextFieldStyleLoader,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function _CdkTextFieldStyleLoader_Template(e,t){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return _CdkTextFieldStyleLoader})(),It={passive:!0},Lt=(()=>{class AutofillMonitor{_platform=O(L);_ngZone=O(h);_renderer=O(he).createRenderer(null,null);_styleLoader=O(mt);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return Ze;this._styleLoader.load(Ft);let t=at(e),n=this._monitoredElements.get(t);if(n)return n.subject;let r=new D,i=`cdk-text-field-autofilled`,listener=e=>{e.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(i)?(t.classList.add(i),this._ngZone.run(()=>r.next({target:e.target,isAutofilled:!0}))):e.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(i)&&(t.classList.remove(i),this._ngZone.run(()=>r.next({target:e.target,isAutofilled:!1})))},a=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,listener,It)));return this._monitoredElements.set(t,{subject:r,unlisten:a}),r}stopMonitoring(e){let t=at(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function AutofillMonitor_Factory(e){return new(e||AutofillMonitor)};static ɵprov=Ne({token:AutofillMonitor,factory:AutofillMonitor.ɵfac})}return AutofillMonitor})(),Rt=(()=>{class CdkAutofill{_elementRef=O(p);_autofillMonitor=O(Lt);cdkAutofill=new ne;ngOnInit(){this._autofillMonitor.monitor(this._elementRef).subscribe(e=>this.cdkAutofill.emit(e))}ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)}static ɵfac=function CdkAutofill_Factory(e){return new(e||CdkAutofill)};static ɵdir=v({type:CdkAutofill,selectors:[[``,`cdkAutofill`,``]],outputs:{cdkAutofill:`cdkAutofill`}})}return CdkAutofill})(),zt=(()=>{class CdkTextareaAutosize{_elementRef=O(p);_platform=O(L);_ngZone=O(h);_renderer=O(de);_resizeEvents=new D;_previousValue;_initialHeight;_destroyed=new D;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(e){this._minRows=it(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=it(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute(`placeholder`,e):this._textareaElement.removeAttribute(`placeholder`),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=O(Re);_hasFocus=!1;_isViewInited=!1;constructor(){O(mt).load(Ft),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(`window`,`resize`,()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,`focus`,this._handleFocusEvent),this._renderer.listen(this._textareaElement,`blur`,this._handleFocusEvent)],this._resizeEvents.pipe(qe(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1),t=e.style;e.rows=1,t.position=`absolute`,t.visibility=`hidden`,t.border=`none`,t.padding=`0`,t.height=``,t.minHeight=``,t.maxHeight=``,t.top=t.bottom=t.left=t.right=`auto`,t.overflow=`hidden`,this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,t=e.style.marginBottom||``,n=this._platform.FIREFOX,r=this._hasFocus,i=n?`cdk-textarea-autosize-measuring-firefox`:`cdk-textarea-autosize-measuring`;r&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(i);let a=e.scrollHeight-4;return e.classList.remove(i),r&&(e.style.marginBottom=t),a}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}_handleFocusEvent=e=>{this._hasFocus=e.type===`focus`};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let t=this._elementRef.nativeElement,n=t.value;if(!e&&this._minRows===this._previousMinRows&&n===this._previousValue)return;let r=this._measureScrollHeight(),i=Math.max(r,this._cachedPlaceholderHeight||0);t.style.height=`${i}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<`u`?requestAnimationFrame(()=>this._scrollToCaretPosition(t)):setTimeout(()=>this._scrollToCaretPosition(t))}),this._previousValue=n,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(e){let{selectionStart:t,selectionEnd:n}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(t,n)}static ɵfac=function CdkTextareaAutosize_Factory(e){return new(e||CdkTextareaAutosize)};static ɵdir=v({type:CdkTextareaAutosize,selectors:[[`textarea`,`cdkTextareaAutosize`,``]],hostAttrs:[`rows`,`1`,1,`cdk-textarea-autosize`],hostBindings:function CdkTextareaAutosize_HostBindings(e,t){e&1&&De(`input`,function CdkTextareaAutosize_input_HostBindingHandler(){return t._noopInputHandler()})},inputs:{minRows:[0,`cdkAutosizeMinRows`,`minRows`],maxRows:[0,`cdkAutosizeMaxRows`,`maxRows`],enabled:[2,`cdkTextareaAutosize`,`enabled`,Fe],placeholder:`placeholder`},exportAs:[`cdkTextareaAutosize`]})}return CdkTextareaAutosize})(),Bt=(()=>{class TextFieldModule{static ɵfac=function TextFieldModule_Factory(e){return new(e||TextFieldModule)};static ɵmod=l({type:TextFieldModule,imports:[Rt,zt],exports:[Rt,zt]});static ɵinj=Ce({})}return TextFieldModule})()})))()}var Vt;function init__input_value_accessor_chunk(){return(init__input_value_accessor_chunk=e((()=>{C(),Vt=new w(`MAT_INPUT_VALUE_ACCESSOR`)})))()}var SingleBoxSharedResizeObserver,Ht;function init_observers_private(){return(init_observers_private=e((()=>{C(),A(),ke(),je(),tt(),Ve(),et(),SingleBoxSharedResizeObserver=class{_box;_destroyed=new D;_resizeSubject=new D;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new Me(t=>{let n=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),n.unsubscribe(),this._elementObservables.delete(e)}}).pipe(Pe(t=>t.filter(t=>t.target===e)),nt(e=>e.length>0),Ue({bufferSize:1,refCount:!0}),$e(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Ht=(()=>{class SharedResizeObserver{_cleanupErrorListener;_observers=new Map;_ngZone=O(h);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||`content-box`;return this._observers.has(n)||this._observers.set(n,new SingleBoxSharedResizeObserver(n)),this._observers.get(n).observe(e)}static ɵfac=function SharedResizeObserver_Factory(e){return new(e||SharedResizeObserver)};static ɵprov=Ne({token:SharedResizeObserver,factory:SharedResizeObserver.ɵfac})}return SharedResizeObserver})()})))()}function estimateScrollWidth(e){let t=e;if(t.offsetParent!==null)return t.scrollWidth;let n=t.cloneNode(!0);n.style.setProperty(`position`,`absolute`),n.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(n);let r=n.scrollWidth;return n.remove(),r}var B,Ut,Wt,V,Gt,Kt,qt,Jt,Yt,Xt,Zt,H,Qt,$t,en,tn,nn,rn,an,on,sn,U;function init__form_field_chunk(){return(init__form_field_chunk=e((()=>{Ke(),Xe(),ht(),kt(),ut(),C(),Ct(),re(),A(),dt(),ct(),je(),Je(),tt(),et(),init_observers_private(),gt(),B=(()=>{class MatLabel{static ɵfac=function MatLabel_Factory(e){return new(e||MatLabel)};static ɵdir=v({type:MatLabel,selectors:[[`mat-label`]]})}return MatLabel})(),Ut=new w(`MatError`),Wt=(()=>{class MatError{id=O(I).getId(`mat-mdc-error-`);static ɵfac=function MatError_Factory(e){return new(e||MatError)};static ɵdir=v({type:MatError,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function MatError_HostBindings(e,t){e&2&&ae(`id`,t.id)},inputs:{id:`id`},features:[g([{provide:Ut,useExisting:MatError}])]})}return MatError})(),V=(()=>{class MatHint{align=`start`;id=O(I).getId(`mat-mdc-hint-`);static ɵfac=function MatHint_Factory(e){return new(e||MatHint)};static ɵdir=v({type:MatHint,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function MatHint_HostBindings(e,t){e&2&&(ae(`id`,t.id),ee(`align`,null),_(`mat-mdc-form-field-hint-end`,t.align===`end`))},inputs:{align:`align`,id:`id`}})}return MatHint})(),Gt=new w(`MatPrefix`),Kt=(()=>{class MatPrefix{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function MatPrefix_Factory(e){return new(e||MatPrefix)};static ɵdir=v({type:MatPrefix,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[g([{provide:Gt,useExisting:MatPrefix}])]})}return MatPrefix})(),qt=new w(`MatSuffix`),Jt=(()=>{class MatSuffix{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function MatSuffix_Factory(e){return new(e||MatSuffix)};static ɵdir=v({type:MatSuffix,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[g([{provide:qt,useExisting:MatSuffix}])]})}return MatSuffix})(),Yt=new w(`FloatingLabelParent`),Xt=(()=>{class MatFormFieldFloatingLabel{_elementRef=O(p);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=O(Ht);_ngZone=O(h);_parent=O(Yt);_resizeSubscription=new o;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return estimateScrollWidth(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function MatFormFieldFloatingLabel_Factory(e){return new(e||MatFormFieldFloatingLabel)};static ɵdir=v({type:MatFormFieldFloatingLabel,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function MatFormFieldFloatingLabel_HostBindings(e,t){e&2&&_(`mdc-floating-label--float-above`,t.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return MatFormFieldFloatingLabel})(),Zt=`mdc-line-ripple--active`,H=`mdc-line-ripple--deactivating`,Qt=(()=>{class MatFormFieldLineRipple{_elementRef=O(p);_cleanupTransitionEnd;constructor(){let e=O(h),t=O(de);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(H),e.add(Zt)}deactivate(){this._elementRef.nativeElement.classList.add(H)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(H);e.propertyName===`opacity`&&n&&t.remove(Zt,H)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function MatFormFieldLineRipple_Factory(e){return new(e||MatFormFieldLineRipple)};static ɵdir=v({type:MatFormFieldLineRipple,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return MatFormFieldLineRipple})(),$t=(()=>{class MatFormFieldNotchedOutline{_elementRef=O(p);_ngZone=O(h);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function MatFormFieldNotchedOutline_Factory(e){return new(e||MatFormFieldNotchedOutline)};static ɵcmp=(function(){let e=[`notch`];return ce({type:MatFormFieldNotchedOutline,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function MatFormFieldNotchedOutline_Query(t,n){if(t&1&&ze(e,5),t&2){let e;x(e=y())&&(n._notch=e.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function MatFormFieldNotchedOutline_HostBindings(e,t){e&2&&_(`mdc-notched-outline--notched`,t.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function MatFormFieldNotchedOutline_Template(e,t){e&1&&(xe(),me(0,`div`,1),ge(1,`div`,2,0),k(3),fe(),me(4,`div`,3))},encapsulation:2})})()}return MatFormFieldNotchedOutline})(),en=(()=>{class MatFormFieldControl{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function MatFormFieldControl_Factory(e){return new(e||MatFormFieldControl)};static ɵdir=v({type:MatFormFieldControl})}return MatFormFieldControl})(),tn=new w(`MatFormField`),nn=new w(`MAT_FORM_FIELD_DEFAULT_OPTIONS`),rn=`fill`,an=`auto`,on=`fixed`,sn=`translateY(-50%)`,U=(()=>{class MatFormField{_elementRef=O(p);_changeDetectorRef=O(Ae);_platform=O(L);_idGenerator=O(I);_ngZone=O(h);_defaults=O(nn,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return pe(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=i(`iconPrefixContainer`);_textPrefixContainerSignal=i(`textPrefixContainer`);_iconSuffixContainerSignal=i(`iconSuffixContainer`);_textSuffixContainerSignal=i(`textSuffixContainer`);_prefixSuffixContainers=M(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Se(B);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=R(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||an}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||rn;this._appearanceSignal.set(t)}_appearanceSignal=ie(rn);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||on}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||on}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new D;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=_t();constructor(){let e=this._defaults,t=O(We);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),u(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=z(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!z(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=M(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,n=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(st([void 0,void 0]),Pe(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),Be(),nt(([[e,t],[n,r]])=>e!==n||t!==r)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!z(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe($e(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ft(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){Oe({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=M(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(z(t)){let n=t();return e===`valid`?n.valid():e===`dirty`?n.dirty():e===`touched`?n.touched():e===`pending`?n.pending():e===`untouched`?!n.touched():e===`pristine`?!n.dirty():e===`invalid`&&!n.valid()}{let n=t;return e===`valid`?n.valid:e===`dirty`?n.dirty:e===`touched`?n.touched:e===`pending`?n.pending:e===`untouched`?n.untouched:e===`pristine`?n.pristine:e===`invalid`&&n.invalid}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let t=this._hintChildren?this._hintChildren.find(e=>e.align===`start`):null,n=this._hintChildren?this._hintChildren.find(e=>e.align===`end`):null;t?e.push(t.id):this._hintLabel&&e.push(this._hintLabelId),n&&e.push(n.id)}else this._errorChildren&&e.push(...this._errorChildren.map(e=>e.id));let t=this._control.describedByIds,n;if(t){let r=this._describedByIds||e;n=e.concat(t.filter(e=>e&&!r.includes(e)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,i=e?.getBoundingClientRect().width??0,a=t?.getBoundingClientRect().width??0,o=n?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,c=`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${i+a}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`;return[`var(--mat-mdc-form-field-label-transform, ${sn} translateX(${c}))`,i+a+o+s]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function MatFormField_Factory(e){return new(e||MatFormField)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],n=[`textPrefixContainer`],i=[`iconSuffixContainer`],a=[`textSuffixContainer`],o=[`textField`],c=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],l=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function MatFormField_ng_template_0_Conditional_0_Conditional_2_Template(e,n){e&1&&t(0,`span`,21)}function MatFormField_ng_template_0_Conditional_0_Template(e,t){if(e&1&&(j(0,`label`,20),k(1,1),r(2,MatFormField_ng_template_0_Conditional_0_Conditional_2_Template,1,0,`span`,21),S()),e&2){let e=E(2);T(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),ee(`for`,e._control.disableAutomaticLabeling?null:e._control.id),s(2),P(!e.hideRequiredMarker&&e._unwrapMaybeSignal(e._control.required)?2:-1)}}function MatFormField_ng_template_0_Template(e,t){if(e&1&&r(0,MatFormField_ng_template_0_Conditional_0_Template,3,5,`label`,20),e&2){let e=E();P(e._hasFloatingLabel()?0:-1)}}function MatFormField_Conditional_4_Template(e,n){e&1&&t(0,`div`,7)}function MatFormField_Conditional_6_Conditional_1_ng_template_0_Template(e,t){}function MatFormField_Conditional_6_Conditional_1_Template(e,t){if(e&1&&Ee(0,MatFormField_Conditional_6_Conditional_1_ng_template_0_Template,0,0,`ng-template`,13),e&2){E(2);let e=we(1);T(`ngTemplateOutlet`,e)}}function MatFormField_Conditional_6_Template(e,t){if(e&1&&(j(0,`div`,9),r(1,MatFormField_Conditional_6_Conditional_1_Template,1,1,null,13),S()),e&2){let e=E();T(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),s(),P(e._forceDisplayInfixLabel()?-1:1)}}function MatFormField_Conditional_7_Template(e,t){e&1&&(j(0,`div`,10,2),k(2,2),S())}function MatFormField_Conditional_8_Template(e,t){e&1&&(j(0,`div`,11,3),k(2,3),S())}function MatFormField_Conditional_10_ng_template_0_Template(e,t){}function MatFormField_Conditional_10_Template(e,t){if(e&1&&Ee(0,MatFormField_Conditional_10_ng_template_0_Template,0,0,`ng-template`,13),e&2){E();let e=we(1);T(`ngTemplateOutlet`,e)}}function MatFormField_Conditional_12_Template(e,t){e&1&&(j(0,`div`,14,4),k(2,4),S())}function MatFormField_Conditional_13_Template(e,t){e&1&&(j(0,`div`,15,5),k(2,5),S())}function MatFormField_Conditional_14_Template(e,n){e&1&&t(0,`div`,16)}function MatFormField_Case_16_Template(e,t){e&1&&(j(0,`div`,18),k(1,6),S())}function MatFormField_Case_17_Conditional_1_Template(e,t){if(e&1&&(j(0,`mat-hint`,22),ve(1),S()),e&2){let e=E(2);T(`id`,e._hintLabelId),s(),Le(e.hintLabel)}}function MatFormField_Case_17_Template(e,n){if(e&1&&(j(0,`div`,19),r(1,MatFormField_Case_17_Conditional_1_Template,2,2,`mat-hint`,22),k(2,7),t(3,`div`,23),k(4,8),S()),e&2){let e=E();s(),P(e.hintLabel?1:-1)}}return ce({type:MatFormField,selectors:[[`mat-form-field`]],contentQueries:function MatFormField_ContentQueries(e,t,n){if(e&1&&(d(n,t._labelChild,B,5),le(n,en,5)(n,Gt,5)(n,qt,5)(n,Ut,5)(n,V,5)),e&2){Ie();let e;x(e=y())&&(t._formFieldControl=e.first),x(e=y())&&(t._prefixChildren=e),x(e=y())&&(t._suffixChildren=e),x(e=y())&&(t._errorChildren=e),x(e=y())&&(t._hintChildren=e)}},viewQuery:function MatFormField_Query(t,r){if(t&1&&(ye(r._iconPrefixContainerSignal,e,5)(r._textPrefixContainerSignal,n,5)(r._iconSuffixContainerSignal,i,5)(r._textSuffixContainerSignal,a,5),ze(o,5)(e,5)(n,5)(i,5)(a,5)(Xt,5)($t,5)(Qt,5)),t&2){Ie(4);let e;x(e=y())&&(r._textField=e.first),x(e=y())&&(r._iconPrefixContainer=e.first),x(e=y())&&(r._textPrefixContainer=e.first),x(e=y())&&(r._iconSuffixContainer=e.first),x(e=y())&&(r._textSuffixContainer=e.first),x(e=y())&&(r._floatingLabel=e.first),x(e=y())&&(r._notchedOutline=e.first),x(e=y())&&(r._lineRipple=e.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function MatFormField_HostBindings(e,t){e&2&&_(`mat-mdc-form-field-label-always-float`,t._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,t._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,t._hasIconSuffix)(`mat-form-field-invalid`,t._unwrapMaybeSignal(t._control.errorState))(`mat-form-field-disabled`,t._unwrapMaybeSignal(t._control.disabled))(`mat-form-field-autofilled`,t._unwrapMaybeSignal(t._control.autofilled))(`mat-form-field-appearance-fill`,t.appearance==`fill`)(`mat-form-field-appearance-outline`,t.appearance==`outline`)(`mat-form-field-hide-placeholder`,t._hasFloatingLabel()&&!t._shouldLabelFloat())(`mat-primary`,t.color!==`accent`&&t.color!==`warn`)(`mat-accent`,t.color===`accent`)(`mat-warn`,t.color===`warn`)(`ng-untouched`,t._shouldForward(`untouched`))(`ng-touched`,t._shouldForward(`touched`))(`ng-pristine`,t._shouldForward(`pristine`))(`ng-dirty`,t._shouldForward(`dirty`))(`ng-valid`,t._shouldForward(`valid`))(`ng-invalid`,t._shouldForward(`invalid`))(`ng-pending`,t._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[g([{provide:tn,useExisting:MatFormField},{provide:Yt,useExisting:MatFormField}])],ngContentSelectors:l,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function MatFormField_Template(e,t){if(e&1&&(xe(c),Ee(0,MatFormField_ng_template_0_Template,1,1,`ng-template`,null,0,Te),j(2,`div`,6,1),De(`click`,function MatFormField_Template_div_click_2_listener(e){return t._control.onContainerClick(e)}),r(4,MatFormField_Conditional_4_Template,1,0,`div`,7),j(5,`div`,8),r(6,MatFormField_Conditional_6_Template,2,2,`div`,9),r(7,MatFormField_Conditional_7_Template,3,0,`div`,10),r(8,MatFormField_Conditional_8_Template,3,0,`div`,11),j(9,`div`,12),r(10,MatFormField_Conditional_10_Template,1,1,null,13),k(11),S(),r(12,MatFormField_Conditional_12_Template,3,0,`div`,14),r(13,MatFormField_Conditional_13_Template,3,0,`div`,15),S(),r(14,MatFormField_Conditional_14_Template,1,0,`div`,16),S(),j(15,`div`,17),r(16,MatFormField_Case_16_Template,2,0,`div`,18)(17,MatFormField_Case_17_Template,5,1,`div`,19),S()),e&2){let e,n=t._unwrapMaybeSignal(t._control.disabled);s(2),_(`mdc-text-field--filled`,!t._hasOutline())(`mdc-text-field--outlined`,t._hasOutline())(`mdc-text-field--no-label`,!t._hasFloatingLabel())(`mdc-text-field--disabled`,n)(`mdc-text-field--invalid`,t._unwrapMaybeSignal(t._control.errorState)),s(2),P(!t._hasOutline()&&!n?4:-1),s(2),P(t._hasOutline()?6:-1),s(),P(t._hasIconPrefix?7:-1),s(),P(t._hasTextPrefix?8:-1),s(2),P(!t._hasOutline()||t._forceDisplayInfixLabel()?10:-1),s(2),P(t._hasTextSuffix?12:-1),s(),P(t._hasIconSuffix?13:-1),s(),P(t._hasOutline()?-1:14),s(),_(`mat-mdc-form-field-subscript-dynamic-size`,t.subscriptSizing===`dynamic`);let r=t._getSubscriptMessageType();s(),P((e=r)===`error`?16:e===`hint`?17:-1)}},dependencies:[Xt,$t,lt,Qt,V],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return MatFormField})()})))()}var cn;function init__error_options_chunk(){return(init__error_options_chunk=e((()=>{C(),cn=(()=>{class ErrorStateMatcher{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),n=e().touched();return t&&n}static ɵfac=function ErrorStateMatcher_Factory(e){return new(e||ErrorStateMatcher)};static ɵprov=Ne({token:ErrorStateMatcher,factory:ErrorStateMatcher.ɵfac})}return ErrorStateMatcher})()})))()}var _ErrorStateTracker;function init__error_state_chunk(){return(init__error_state_chunk=e((()=>{C(),_ErrorStateTracker=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(e,t,n,r,i){this._defaultMatcher=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=i,t?pe(t.field)&&!t.updateValueAndValidity?(this.formField=t,this.ngControl=null):(this.formField=null,this.ngControl=t):this.ngControl=this.formField=null}updateErrorState(){let e=this.errorState,t=this._getCurrentErrorState(this.matcher||this._defaultMatcher);t!==e&&(this.errorState=t,this._stateChanges.next())}_getCurrentErrorState(e){if(this.formField&&e?.isSignalErrorState)return e.isSignalErrorState(this.formField.field())??!1;let t=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null;return e?.isErrorState(n,t)??!1}}})))()}var W;function init_form_field(){return(init_form_field=e((()=>{init__form_field_chunk(),Xe(),yt(),C(),W=(()=>{class MatFormFieldModule{static ɵfac=function MatFormFieldModule_Factory(e){return new(e||MatFormFieldModule)};static ɵmod=l({type:MatFormFieldModule,imports:[vt,U,B,Wt,V,Kt,Jt],exports:[U,B,V,Wt,Kt,Jt,F]});static ɵinj=Ce({imports:[vt,U,F]})}return MatFormFieldModule})()})))()}var ln,un,dn,fn;function init_input(){return(init_input=e((()=>{ht(),kt(),init_text_field(),C(),Ke(),St(),Ct(),A(),init__input_value_accessor_chunk(),init__form_field_chunk(),init__error_options_chunk(),init__error_state_chunk(),Xe(),init_form_field(),ln=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`],un=new w(`MAT_INPUT_CONFIG`),dn=(()=>{class MatInput{_elementRef=O(p);_platform=O(L);ngControl=O(xt,{optional:!0,self:!0});_autofillMonitor=O(Lt);_ngZone=O(h);_formField=O(tn,{optional:!0});_renderer=O(de);_uid=O(I).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=O(un,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new D;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=R(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Tt.required)??!1}set required(e){this._required=R(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&At().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=R(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>At().has(e));constructor(){let e=O(Et,{optional:!0}),t=O(wt,{optional:!0}),n=O(cn),r=O(Vt,{optional:!0,self:!0}),i=O(Dt,{optional:!0,self:!0}),a=this._elementRef.nativeElement,o=a.nodeName.toLowerCase();r?pe(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new _ErrorStateTracker(n,i||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=o===`select`,this._isTextarea=o===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&u(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let e=this._elementRef.nativeElement;e.type===`number`?(e.type=`text`,e.setSelectionRange(0,0),e.type=`number`):e.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){ln.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function MatInput_Factory(e){return new(e||MatInput)};static ɵdir=v({type:MatInput,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function MatInput_HostBindings(e,t){e&1&&De(`focus`,function MatInput_focus_HostBindingHandler(){return t._focusChanged(!0)})(`blur`,function MatInput_blur_HostBindingHandler(){return t._focusChanged(!1)})(`input`,function MatInput_input_HostBindingHandler(){return t._onInput()}),e&2&&(ae(`id`,t.id)(`disabled`,t.disabled&&!t.disabledInteractive)(`required`,t.required),ee(`name`,t.name||null)(`readonly`,t._getReadonlyAttribute())(`aria-disabled`,t.disabled&&t.disabledInteractive?`true`:null)(`aria-invalid`,t.empty&&t.required?null:t.errorState)(`aria-required`,t.required)(`id`,t.id),_(`mat-input-server`,t._isServer)(`mat-mdc-form-field-textarea-control`,t._isInFormField&&t._isTextarea)(`mat-mdc-form-field-input-control`,t._isInFormField)(`mat-mdc-input-disabled-interactive`,t.disabledInteractive)(`mdc-text-field__input`,t._isInFormField)(`mat-mdc-native-select-inline`,t._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Fe]},exportAs:[`matInput`],features:[g([{provide:en,useExisting:MatInput}]),te]})}return MatInput})(),fn=(()=>{class MatInputModule{static ɵfac=function MatInputModule_Factory(e){return new(e||MatInputModule)};static ɵmod=l({type:MatInputModule,imports:[W,dn],exports:[dn,W,Bt,F]});static ɵinj=Ce({imports:[W,W,Bt,F]})}return MatInputModule})()})))()}var pn;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvY29sb3ItcGlja2VyL2NvbG9yLXNlbGVjdGlvbi1wYW5lbC9jb2xvci1zbGlkZXIvY29sb3Itc2xpZGVyLmh0bWw(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvY29sb3ItcGlja2VyL2NvbG9yLXNlbGVjdGlvbi1wYW5lbC9jb2xvci1zbGlkZXIvY29sb3Itc2xpZGVyLmh0bWw=e((()=>{pn=`<canvas #canvas width="250" height="8" class="slider"></canvas>

@let cursor = cursorData();
<div class="cursor" [style.left]="cursor.horizontalOffset" [style.background-color]="cursor.color"></div>
`})))()}var mn;function init_color_slider(){return(init_color_slider=e((()=>{mn=`:host{cursor:pointer;width:100%;position:relative}:host .slider{border-radius:5px;width:100%;height:8px;display:block}:host .cursor{box-sizing:border-box;pointer-events:none;border:2px solid #fff;border-radius:50%;width:18px;height:18px;position:absolute;top:-5px}`})))()}var G,K;function init_color_name(){return(init_color_name=e((()=>{G={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(let e in G)Object.freeze(G[e]);K=Object.freeze(G)})))()}function clamp(e,t,n){return Math.min(Math.max(t,e),n)}function hexDouble(e){let t=Math.round(e).toString(16).toUpperCase();return t.length<2?`0`+t:t}var hn,q;function init_color_string(){return(init_color_string=e((()=>{init_color_name(),hn=Object.create(null);for(let e in K)Object.hasOwn(K,e)&&(hn[K[e]]=e);q={to:{},get:{}},q.get=function(e){let t=e.slice(0,3).toLowerCase(),n,r;switch(t){case`hsl`:n=q.get.hsl(e),r=`hsl`;break;case`hwb`:n=q.get.hwb(e),r=`hwb`;break;default:n=q.get.rgb(e),r=`rgb`}return n?{model:r,value:n}:null},q.get.rgb=function(e){if(!e)return null;let t=/^#([a-f\d]{3,4})$/i,n=/^#([a-f\d]{6})([a-f\d]{2})?$/i,r=/^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i,i=/^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i,a=/^(\w+)$/,o=[0,0,0,1],s,c,l;if(s=e.match(n)){for(l=s[2],s=s[1],c=0;c<3;c++){let e=c*2;o[c]=Number.parseInt(s.slice(e,e+2),16)}l&&(o[3]=Number.parseInt(l,16)/255)}else if(s=e.match(t)){for(s=s[1],l=s[3],c=0;c<3;c++)o[c]=Number.parseInt(s[c]+s[c],16);l&&(o[3]=Number.parseInt(l+l,16)/255)}else if(s=e.match(r)){for(c=0;c<3;c++)o[c]=Number.parseFloat(s[c+1]);s[4]&&(o[3]=s[5]?Number.parseFloat(s[4])*.01:Number.parseFloat(s[4]))}else if(s=e.match(i)){for(c=0;c<3;c++)o[c]=Math.round(Number.parseFloat(s[c+1])*2.55);s[4]&&(o[3]=s[5]?Number.parseFloat(s[4])*.01:Number.parseFloat(s[4]))}else if(s=e.toLowerCase().match(a))return s[1]===`transparent`?[0,0,0,0]:Object.hasOwn(K,s[1])?(o=K[s[1]].slice(),o[3]=1,o):null;else return null;for(c=0;c<3;c++)o[c]=clamp(o[c],0,255);return o[3]=clamp(o[3],0,1),o},q.get.hsl=function(e){if(!e)return null;let t=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);if(t){let e=Number.parseFloat(t[4]);return[(Number.parseFloat(t[1])%360+360)%360,clamp(Number.parseFloat(t[2]),0,100),clamp(Number.parseFloat(t[3]),0,100),clamp(Number.isNaN(e)?1:e,0,1)]}return null},q.get.hwb=function(e){if(!e)return null;let t=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);if(t){let e=Number.parseFloat(t[4]);return[(Number.parseFloat(t[1])%360+360)%360,clamp(Number.parseFloat(t[2]),0,100),clamp(Number.parseFloat(t[3]),0,100),clamp(Number.isNaN(e)?1:e,0,1)]}return null},q.to.hex=function(...e){return`#`+hexDouble(e[0])+hexDouble(e[1])+hexDouble(e[2])+(e[3]<1?hexDouble(Math.round(e[3]*255)):``)},q.to.rgb=function(...e){return e.length<4||e[3]===1?`rgb(`+Math.round(e[0])+`, `+Math.round(e[1])+`, `+Math.round(e[2])+`)`:`rgba(`+Math.round(e[0])+`, `+Math.round(e[1])+`, `+Math.round(e[2])+`, `+e[3]+`)`},q.to.rgb.percent=function(...e){let t=Math.round(e[0]/255*100),n=Math.round(e[1]/255*100),r=Math.round(e[2]/255*100);return e.length<4||e[3]===1?`rgb(`+t+`%, `+n+`%, `+r+`%)`:`rgba(`+t+`%, `+n+`%, `+r+`%, `+e[3]+`)`},q.to.hsl=function(...e){return e.length<4||e[3]===1?`hsl(`+e[0]+`, `+e[1]+`%, `+e[2]+`%)`:`hsla(`+e[0]+`, `+e[1]+`%, `+e[2]+`%, `+e[3]+`)`},q.to.hwb=function(...e){let t=``;return e.length>=4&&e[3]!==1&&(t=`, `+e[3]),`hwb(`+e[0]+`, `+e[1]+`%, `+e[2]+`%`+t+`)`},q.to.keyword=function(...e){return hn[e.slice(0,3)]}})))()}function srgbNonlinearTransform(e){let t=e>.0031308?1.055*e**(1/2.4)-.055:e*12.92;return Math.min(Math.max(0,t),1)}function srgbNonlinearTransformInv(e){return e>.04045?((e+.055)/1.055)**2.4:e/12.92}function comparativeDistance(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}var gn,J,Y;function init_conversions(){return(init_conversions=e((()=>{init_color_name(),gn={};for(let e of Object.keys(K))gn[K[e]]=e;J={rgb:{channels:3,labels:`rgb`},hsl:{channels:3,labels:`hsl`},hsv:{channels:3,labels:`hsv`},hwb:{channels:3,labels:`hwb`},cmyk:{channels:4,labels:`cmyk`},xyz:{channels:3,labels:`xyz`},lab:{channels:3,labels:`lab`},oklab:{channels:3,labels:[`okl`,`oka`,`okb`]},lch:{channels:3,labels:`lch`},oklch:{channels:3,labels:[`okl`,`okc`,`okh`]},hex:{channels:1,labels:[`hex`]},keyword:{channels:1,labels:[`keyword`]},ansi16:{channels:1,labels:[`ansi16`]},ansi256:{channels:1,labels:[`ansi256`]},hcg:{channels:3,labels:[`h`,`c`,`g`]},apple:{channels:3,labels:[`r16`,`g16`,`b16`]},gray:{channels:1,labels:[`gray`]}},Y=(6/29)**3;for(let e of Object.keys(J)){if(!(`channels`in J[e]))throw Error(`missing channels property: `+e);if(!(`labels`in J[e]))throw Error(`missing channel labels property: `+e);if(J[e].labels.length!==J[e].channels)throw Error(`channel and label counts mismatch: `+e);let{channels:t,labels:n}=J[e];delete J[e].channels,delete J[e].labels,Object.defineProperty(J[e],"channels",{value:t}),Object.defineProperty(J[e],"labels",{value:n})}J.rgb.hsl=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=a-i,s,c;switch(a){case i:s=0;break;case t:s=(n-r)/o;break;case n:s=2+(r-t)/o;break;case r:s=4+(t-n)/o}s=Math.min(s*60,360),s<0&&(s+=360);let l=(i+a)/2;return c=a===i?0:l<=.5?o/(a+i):o/(2-a-i),[s,c*100,l*100]},J.rgb.hsv=function(e){let t,n,r,i,a,o=e[0]/255,s=e[1]/255,c=e[2]/255,l=Math.max(o,s,c),u=l-Math.min(o,s,c),diffc=function(e){return(l-e)/6/u+1/2};if(u===0)i=0,a=0;else{switch(a=u/l,t=diffc(o),n=diffc(s),r=diffc(c),l){case o:i=r-n;break;case s:i=1/3+t-r;break;case c:i=2/3+n-t}i<0?i+=1:i>1&&--i}return[i*360,a*100,l*100]},J.rgb.hwb=function(e){let t=e[0],n=e[1],r=e[2],i=J.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[i,a*100,r*100]},J.rgb.oklab=function(e){let t=srgbNonlinearTransformInv(e[0]/255),n=srgbNonlinearTransformInv(e[1]/255),r=srgbNonlinearTransformInv(e[2]/255),i=Math.cbrt(.4122214708*t+.5363325363*n+.0514459929*r),a=Math.cbrt(.2119034982*t+.6806995451*n+.1073969566*r),o=Math.cbrt(.0883024619*t+.2817188376*n+.6299787005*r),s=.2104542553*i+.793617785*a-.0040720468*o,c=1.9779984951*i-2.428592205*a+.4505937099*o,l=.0259040371*i+.7827717662*a-.808675766*o;return[s*100,c*100,l*100]},J.rgb.cmyk=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255,i=Math.min(1-t,1-n,1-r),a=(1-t-i)/(1-i)||0,o=(1-n-i)/(1-i)||0,s=(1-r-i)/(1-i)||0;return[a*100,o*100,s*100,i*100]},J.rgb.keyword=function(e){let t=gn[e];if(t)return t;let n=1/0,r;for(let t of Object.keys(K)){let i=K[t],a=comparativeDistance(e,i);a<n&&(n=a,r=t)}return r},J.keyword.rgb=function(e){return[...K[e]]},J.rgb.xyz=function(e){let t=srgbNonlinearTransformInv(e[0]/255),n=srgbNonlinearTransformInv(e[1]/255),r=srgbNonlinearTransformInv(e[2]/255),i=t*.4124564+n*.3575761+r*.1804375,a=t*.2126729+n*.7151522+r*.072175,o=t*.0193339+n*.119192+r*.9503041;return[i*100,a*100,o*100]},J.rgb.lab=function(e){let t=J.rgb.xyz(e),n=t[0],r=t[1],i=t[2];return n/=95.047,r/=100,i/=108.883,n=n>Y?n**(1/3):7.787*n+16/116,r=r>Y?r**(1/3):7.787*r+16/116,i=i>Y?i**(1/3):7.787*i+16/116,[116*r-16,500*(n-r),200*(r-i)]},J.hsl.rgb=function(e){let t=e[0]/360,n=e[1]/100,r=e[2]/100,i,a;if(n===0)return a=r*255,[a,a,a];let o=r<.5?r*(1+n):r+n-r*n,s=2*r-o,c=[0,0,0];for(let e=0;e<3;e++)i=t+1/3*-(e-1),i<0&&i++,i>1&&i--,a=6*i<1?s+(o-s)*6*i:2*i<1?o:3*i<2?s+(o-s)*(2/3-i)*6:s,c[e]=a*255;return c},J.hsl.hsv=function(e){let t=e[0],n=e[1]/100,r=e[2]/100,i=n,a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,i*=a<=1?a:2-a;let o=(r+n)/2;return[t,(r===0?2*i/(a+i):2*n/(r+n))*100,o*100]},J.hsv.rgb=function(e){let t=e[0]/60,n=e[1]/100,r=e[2]/100,i=Math.floor(t)%6,a=t-Math.floor(t),o=255*r*(1-n),s=255*r*(1-n*a),c=255*r*(1-n*(1-a));switch(r*=255,i){case 0:return[r,c,o];case 1:return[s,r,o];case 2:return[o,r,c];case 3:return[o,s,r];case 4:return[c,o,r];case 5:return[r,o,s]}},J.hsv.hsl=function(e){let t=e[0],n=e[1]/100,r=e[2]/100,i=Math.max(r,.01),a,o;o=(2-n)*r;let s=(2-n)*i;return a=n*i,a/=s<=1?s:2-s,a||=0,o/=2,[t,a*100,o*100]},J.hwb.rgb=function(e){let t=e[0]/360,n=e[1]/100,r=e[2]/100,i=n+r,a;i>1&&(n/=i,r/=i);let o=Math.floor(6*t),s=1-r;a=6*t-o,o&1&&(a=1-a);let c=n+a*(s-n),l,u,d;switch(o){default:case 6:case 0:l=s,u=c,d=n;break;case 1:l=c,u=s,d=n;break;case 2:l=n,u=s,d=c;break;case 3:l=n,u=c,d=s;break;case 4:l=c,u=n,d=s;break;case 5:l=s,u=n,d=c}return[l*255,u*255,d*255]},J.cmyk.rgb=function(e){let t=e[0]/100,n=e[1]/100,r=e[2]/100,i=e[3]/100,a=1-Math.min(1,t*(1-i)+i),o=1-Math.min(1,n*(1-i)+i),s=1-Math.min(1,r*(1-i)+i);return[a*255,o*255,s*255]},J.xyz.rgb=function(e){let t=e[0]/100,n=e[1]/100,r=e[2]/100,i,a,o;return i=t*3.2404542+n*-1.5371385+r*-.4985314,a=t*-.969266+n*1.8760108+r*.041556,o=t*.0556434+n*-.2040259+r*1.0572252,i=srgbNonlinearTransform(i),a=srgbNonlinearTransform(a),o=srgbNonlinearTransform(o),[i*255,a*255,o*255]},J.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];return t/=95.047,n/=100,r/=108.883,t=t>Y?t**(1/3):7.787*t+16/116,n=n>Y?n**(1/3):7.787*n+16/116,r=r>Y?r**(1/3):7.787*r+16/116,[116*n-16,500*(t-n),200*(n-r)]},J.xyz.oklab=function(e){let t=e[0]/100,n=e[1]/100,r=e[2]/100,i=Math.cbrt(.8189330101*t+.3618667424*n-.1288597137*r),a=Math.cbrt(.0329845436*t+.9293118715*n+.0361456387*r),o=Math.cbrt(.0482003018*t+.2643662691*n+.633851707*r),s=.2104542553*i+.793617785*a-.0040720468*o,c=1.9779984951*i-2.428592205*a+.4505937099*o,l=.0259040371*i+.7827717662*a-.808675766*o;return[s*100,c*100,l*100]},J.oklab.oklch=function(e){return J.lab.lch(e)},J.oklab.xyz=function(e){let t=e[0]/100,n=e[1]/100,r=e[2]/100,i=(.999999998*t+.396337792*n+.215803758*r)**3,a=(1.000000008*t-.105561342*n-.063854175*r)**3,o=(1.000000055*t-.089484182*n-1.291485538*r)**3,s=1.227013851*i-.55779998*a+.281256149*o,c=-.040580178*i+1.11225687*a-.071676679*o,l=-.076381285*i-.421481978*a+1.58616322*o;return[s*100,c*100,l*100]},J.oklab.rgb=function(e){let t=e[0]/100,n=e[1]/100,r=e[2]/100,i=(t+.3963377774*n+.2158037573*r)**3,a=(t-.1055613458*n-.0638541728*r)**3,o=(t-.0894841775*n-1.291485548*r)**3,s=srgbNonlinearTransform(4.0767416621*i-3.3077115913*a+.2309699292*o),c=srgbNonlinearTransform(-1.2684380046*i+2.6097574011*a-.3413193965*o),l=srgbNonlinearTransform(-.0041960863*i-.7034186147*a+1.707614701*o);return[s*255,c*255,l*255]},J.oklch.oklab=function(e){return J.lch.lab(e)},J.lab.xyz=function(e){let t=e[0],n=e[1],r=e[2],i,a,o;a=(t+16)/116,i=n/500+a,o=a-r/200;let s=a**3,c=i**3,l=o**3;return a=s>Y?s:(a-16/116)/7.787,i=c>Y?c:(i-16/116)/7.787,o=l>Y?l:(o-16/116)/7.787,i*=95.047,a*=100,o*=108.883,[i,a,o]},J.lab.lch=function(e){let t=e[0],n=e[1],r=e[2],i;return i=Math.atan2(r,n)*360/2/Math.PI,i<0&&(i+=360),[t,Math.sqrt(n*n+r*r),i]},J.lch.lab=function(e){let t=e[0],n=e[1],r=e[2]/360*2*Math.PI;return[t,n*Math.cos(r),n*Math.sin(r)]},J.rgb.ansi16=function(e,t=null){let[n,r,i]=e,a=t===null?J.rgb.hsv(e)[2]:t;if(a=Math.round(a/50),a===0)return 30;let o=30+(Math.round(i/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(o+=60),o},J.hsv.ansi16=function(e){return J.rgb.ansi16(J.hsv.rgb(e),e[2])},J.rgb.ansi256=function(e){let t=e[0],n=e[1],r=e[2];return t>>4==n>>4&&n>>4==r>>4?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},J.ansi16.rgb=function(e){e=e[0];let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];let n=(Math.trunc(e>50)+1)*.5;return[(t&1)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},J.ansi256.rgb=function(e){if(e=e[0],e>=232){let t=(e-232)*10+8;return[t,t,t]}e-=16;let t;return[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},J.rgb.hex=function(e){let t=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return`000000`.slice(t.length)+t},J.hex.rgb=function(e){let t=e.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=[...n].map(e=>e+e).join(``));let r=Number.parseInt(n,16);return[r>>16&255,r>>8&255,r&255]},J.rgb.hcg=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255,i=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),o=i-a,s,c=o<1?a/(1-o):0;return s=o<=0?0:i===t?(n-r)/o%6:i===n?2+(r-t)/o:4+(t-n)/o,s/=6,s%=1,[s*360,o*100,c*100]},J.hsl.hcg=function(e){let t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n),i=0;return r<1&&(i=(n-.5*r)/(1-r)),[e[0],r*100,i*100]},J.hsv.hcg=function(e){let t=e[1]/100,n=e[2]/100,r=t*n,i=0;return r<1&&(i=(n-r)/(1-r)),[e[0],r*100,i*100]},J.hcg.rgb=function(e){let t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];let i=[0,0,0],a=t%1*6,o=a%1,s=1-o,c=0;switch(Math.floor(a)){case 0:i[0]=1,i[1]=o,i[2]=0;break;case 1:i[0]=s,i[1]=1,i[2]=0;break;case 2:i[0]=0,i[1]=1,i[2]=o;break;case 3:i[0]=0,i[1]=s,i[2]=1;break;case 4:i[0]=o,i[1]=0,i[2]=1;break;default:i[0]=1,i[1]=0,i[2]=s}return c=(1-n)*r,[(n*i[0]+c)*255,(n*i[1]+c)*255,(n*i[2]+c)*255]},J.hcg.hsv=function(e){let t=e[1]/100,n=t+e[2]/100*(1-t),r=0;return n>0&&(r=t/n),[e[0],r*100,n*100]},J.hcg.hsl=function(e){let t=e[1]/100,n=e[2]/100*(1-t)+.5*t,r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],r*100,n*100]},J.hcg.hwb=function(e){let t=e[1]/100,n=t+e[2]/100*(1-t);return[e[0],(n-t)*100,(1-n)*100]},J.hwb.hcg=function(e){let t=e[1]/100,n=1-e[2]/100,r=n-t,i=0;return r<1&&(i=(n-r)/(1-r)),[e[0],r*100,i*100]},J.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},J.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},J.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},J.gray.hsl=function(e){return[0,0,e[0]]},J.gray.hsv=J.gray.hsl,J.gray.hwb=function(e){return[0,100,e[0]]},J.gray.cmyk=function(e){return[0,0,0,e[0]]},J.gray.lab=function(e){return[e[0],0,0]},J.gray.hex=function(e){let t=Math.round(e[0]/100*255)&255,n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return`000000`.slice(n.length)+n},J.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}})))()}function buildGraph(){let e={},t=Object.keys(J);for(let{length:n}=t,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}function deriveBFS(e){let t=buildGraph(),n=[e];for(t[e].distance=0;n.length>0;){let e=n.pop(),r=Object.keys(J[e]);for(let{length:i}=r,a=0;a<i;a++){let i=r[a],o=t[i];o.distance===-1&&(o.distance=t[e].distance+1,o.parent=e,n.unshift(i))}}return t}function link(e,t){return function(n){return t(e(n))}}function wrapConversion(e,t){let n=[t[e].parent,e],r=J[t[e].parent][e],i=t[e].parent;for(;t[i].parent;)n.unshift(t[i].parent),r=link(J[t[i].parent][i],r),i=t[i].parent;return r.conversion=n,r}function route(e){let t=deriveBFS(e),n={},r=Object.keys(t);for(let{length:e}=r,i=0;i<e;i++){let e=r[i];t[e].parent!==null&&(n[e]=wrapConversion(e,t))}return n}function init_route(){return(init_route=e((()=>{init_conversions()})))()}function wrapRaw(e){let wrappedFn=function(...t){let n=t[0];return n==null?n:(n.length>1&&(t=n),e(t))};return`conversion`in e&&(wrappedFn.conversion=e.conversion),wrappedFn}function wrapRounded(e){let wrappedFn=function(...t){let n=t[0];if(n==null)return n;n.length>1&&(t=n);let r=e(t);if(typeof r==`object`)for(let{length:e}=r,t=0;t<e;t++)r[t]=Math.round(r[t]);return r};return`conversion`in e&&(wrappedFn.conversion=e.conversion),wrappedFn}var X,_n;function init_color_convert(){return(init_color_convert=e((()=>{init_conversions(),init_route(),X={},_n=Object.keys(J);for(let e of _n){X[e]={},Object.defineProperty(X[e],"channels",{value:J[e].channels}),Object.defineProperty(X[e],"labels",{value:J[e].labels});let t=route(e),n=Object.keys(t);for(let r of n){let n=t[r];X[e][r]=wrapRounded(n),X[e][r].raw=wrapRaw(n)}}})))()}function Color(e,t){if(!(this instanceof Color))return new Color(e,t);if(t&&t in vn&&(t=null),t&&!(t in X))throw Error(`Unknown model: `+t);let n,r;if(e==null)this.model=`rgb`,this.color=[0,0,0],this.valpha=1;else if(e instanceof Color)this.model=e.model,this.color=[...e.color],this.valpha=e.valpha;else if(typeof e==`string`){let t=q.get(e);if(t===null)throw Error(`Unable to parse color from string: `+e);this.model=t.model,r=X[this.model].channels,this.color=t.value.slice(0,r),this.valpha=typeof t.value[r]==`number`?t.value[r]:1}else if(e.length>0){this.model=t||`rgb`,r=X[this.model].channels;let n=Array.prototype.slice.call(e,0,r);this.color=zeroArray(n,r),this.valpha=typeof e[r]==`number`?e[r]:1}else if(typeof e==`number`)this.model=`rgb`,this.color=[e>>16&255,e>>8&255,e&255],this.valpha=1;else{this.valpha=1;let t=Object.keys(e);`alpha`in e&&(t.splice(t.indexOf(`alpha`),1),this.valpha=typeof e.alpha==`number`?e.alpha:0);let r=t.sort().join(``);if(!(r in Z))throw Error(`Unable to parse color from object: `+JSON.stringify(e));this.model=Z[r];let{labels:i}=X[this.model],a=[];for(n=0;n<i.length;n++)a.push(e[i[n]]);this.color=zeroArray(a)}if(yn[this.model])for(r=X[this.model].channels,n=0;n<r;n++){let e=yn[this.model][n];e&&(this.color[n]=e(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function roundTo(e,t){return Number(e.toFixed(t))}function roundToPlace(e){return function(t){return roundTo(t,e)}}function getset(e,t,n){e=Array.isArray(e)?e:[e];for(let r of e)(yn[r]||=[])[t]=n;return e=e[0],function(r){let i;return r===void 0?(i=this[e]().color[t],n&&(i=n(i)),i):(n&&(r=n(r)),i=this[e](),i.color[t]=r,i)}}function maxfn(e){return function(t){return Math.max(0,Math.min(e,t))}}function assertArray(e){return Array.isArray(e)?e:[e]}function zeroArray(e,t){for(let n=0;n<t;n++)typeof e[n]!=`number`&&(e[n]=0);return e}var vn,Z,yn;function init_color(){return(init_color=e((()=>{init_color_string(),init_color_convert(),vn=[`keyword`,`gray`,`hex`],Z={};for(let e of Object.keys(X))Z[[...X[e].labels].sort().join(``)]=e;yn={},Color.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in q.to?this:this.rgb();t=t.round(typeof e==`number`?e:1);let n=t.valpha===1?t.color:[...t.color,this.valpha];return q.to[t.model](...n)},percentString(e){let t=this.rgb().round(typeof e==`number`?e:1),n=t.valpha===1?t.color:[...t.color,this.valpha];return q.to.rgb.percent(...n)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){let e={},{channels:t}=X[this.model],{labels:n}=X[this.model];for(let r=0;r<t;r++)e[n[r]]=this.color[r];return this.valpha!==1&&(e.alpha=this.valpha),e},unitArray(){let e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,this.valpha!==1&&e.push(this.valpha),e},unitObject(){let e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,this.valpha!==1&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new Color([...this.color.map(roundToPlace(e)),this.valpha],this.model)},alpha(e){return e===void 0?this.valpha:new Color([...this.color,Math.max(0,Math.min(1,e))],this.model)},red:getset(`rgb`,0,maxfn(255)),green:getset(`rgb`,1,maxfn(255)),blue:getset(`rgb`,2,maxfn(255)),hue:getset([`hsl`,`hsv`,`hsl`,`hwb`,`hcg`],0,e=>(e%360+360)%360),saturationl:getset(`hsl`,1,maxfn(100)),lightness:getset(`hsl`,2,maxfn(100)),saturationv:getset(`hsv`,1,maxfn(100)),value:getset(`hsv`,2,maxfn(100)),chroma:getset(`hcg`,1,maxfn(100)),gray:getset(`hcg`,2,maxfn(100)),white:getset(`hwb`,1,maxfn(100)),wblack:getset(`hwb`,2,maxfn(100)),cyan:getset(`cmyk`,0,maxfn(100)),magenta:getset(`cmyk`,1,maxfn(100)),yellow:getset(`cmyk`,2,maxfn(100)),black:getset(`cmyk`,3,maxfn(100)),x:getset(`xyz`,0,maxfn(95.047)),y:getset(`xyz`,1,maxfn(100)),z:getset(`xyz`,2,maxfn(108.833)),l:getset(`lab`,0,maxfn(100)),a:getset(`lab`,1),b:getset(`lab`,2),keyword(e){return e===void 0?X[this.model].keyword(this.color):new Color(e)},hex(e){return e===void 0?q.to.hex(...this.rgb().round().color):new Color(e)},hexa(e){if(e!==void 0)return new Color(e);let t=this.rgb().round().color,n=Math.round(this.valpha*255).toString(16).toUpperCase();return n.length===1&&(n=`0`+n),q.to.hex(...t)+n},rgbNumber(){let e=this.rgb().color;return(e[0]&255)<<16|(e[1]&255)<<8|e[2]&255},luminosity(){let e=this.rgb().color,t=[];for(let[n,r]of e.entries()){let e=r/255;t[n]=e<=.04045?e/12.92:((e+.055)/1.055)**2.4}return .2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(e){let t=this.luminosity(),n=e.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)},level(e){let t=this.contrast(e);return t>=7?`AAA`:t>=4.5?`AA`:``},isDark(){let e=this.rgb().color;return(e[0]*2126+e[1]*7152+e[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){let e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){let t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){let t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){let t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){let t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){let t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){let t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){let e=this.rgb().color,t=e[0]*.3+e[1]*.59+e[2]*.11;return Color.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){let t=this.hsl(),n=t.color[0];return n=(n+e)%360,n=n<0?360+n:n,t.color[0]=n,t},mix(e,t){if(!e||!e.rgb)throw Error(`Argument to "mix" was not a Color instance, but rather an instance of `+typeof e);let n=e.rgb(),r=this.rgb(),i=t===void 0?.5:t,a=2*i-1,o=n.alpha()-r.alpha(),s=((a*o===-1?a:(a+o)/(1+a*o))+1)/2,c=1-s;return Color.rgb(s*n.red()+c*r.red(),s*n.green()+c*r.green(),s*n.blue()+c*r.blue(),n.alpha()*i+r.alpha()*(1-i))}};for(let e of Object.keys(X)){if(vn.includes(e))continue;let{channels:t}=X[e];Color.prototype[e]=function(...t){return this.model===e?new Color(this):t.length>0?new Color(t,e):new Color([...assertArray(X[this.model][e].raw(this.color)),this.valpha],e)},Color[e]=function(...n){let r=n[0];return typeof r==`number`&&(r=zeroArray(n,t)),new Color(r,e)}}})))()}var bn;function init_color_slider$1(){return(init_color_slider$1=e((()=>{c(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvY29sb3ItcGlja2VyL2NvbG9yLXNlbGVjdGlvbi1wYW5lbC9jb2xvci1zbGlkZXIvY29sb3Itc2xpZGVyLmh0bWw(),init_color_slider(),C(),init_color(),bn=class ColorSlider{value=b(0);canvas=i.required(`canvas`);cursorData=M(()=>{let e=this.canvas().nativeElement.getBoundingClientRect().width;return this.computeCursorData(this.value(),e)});destroyRef=O(se);isDragging=!1;onMouseDown=e=>{this.isDragging=!0,document.body.style.cursor=`pointer`,this.onSliderMouseInteraction(e)};onMouseUp=()=>{this.isDragging=!1,document.body.style.cursor=``};onMouseMove=e=>{this.isDragging&&this.onSliderMouseInteraction(e)};onSliderMouseInteraction(e){let t=this.canvas().nativeElement.getBoundingClientRect(),n=(e.clientX-t.x)/t.width;this.value.set(Math.max(0,Math.min(1,n)))}ngAfterViewInit(){this.drawSliderCanvas(),this.canvas().nativeElement.addEventListener(`mousedown`,this.onMouseDown),window.addEventListener(`mouseup`,this.onMouseUp),window.addEventListener(`mousemove`,this.onMouseMove),this.destroyRef.onDestroy(()=>{this.canvas().nativeElement.removeEventListener(`mousedown`,this.onMouseDown),window.removeEventListener(`mouseup`,this.onMouseUp),window.removeEventListener(`mousemove`,this.onMouseMove)})}drawSliderCanvas(){let e=this.canvas().nativeElement.getContext(`2d`),t={height:this.canvas().nativeElement.height,width:this.canvas().nativeElement.width},n=e.createLinearGradient(0,0,t.width,0);for(let e=0;e<=20;++e){let t=1/20*e;n.addColorStop(t,Color({h:t*360,s:100,v:100}).hex())}e.fillStyle=n,e.fillRect(0,0,t.width,t.height)}computeCursorData(e,t){let n=t*e-8,r=Color({h:e*360,s:100,v:100}).hex();return{horizontalOffset:`${n}px`,color:r}}static propDecorators={value:[{type:n,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:f,args:[`valueChange`]}],canvas:[{type:be,args:[`canvas`,{isSignal:!0}]}]}},bn=N([m({selector:`app-color-slider`,template:pn,styles:[mn]})],bn)})))()}var xn;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvY29sb3ItcGlja2VyL2NvbG9yLXNlbGVjdGlvbi1wYW5lbC9jb2xvci1jYW52YXMvY29sb3ItY2FudmFzLmh0bWw(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvY29sb3ItcGlja2VyL2NvbG9yLXNlbGVjdGlvbi1wYW5lbC9jb2xvci1jYW52YXMvY29sb3ItY2FudmFzLmh0bWw=e((()=>{xn=`<canvas #canvas class="panel" width="250" height="150"> </canvas>

@let cursor = cursorData();
<div class="cursor" [style.left]="cursor.horizontalOffset" [style.top]="cursor.verticalOffset" [style.background-color]="cursor.color"></div>
`})))()}var Sn;function init_color_canvas(){return(init_color_canvas=e((()=>{Sn=`:host{cursor:pointer;display:block;position:relative;overflow:hidden}:host .panel{width:100%;display:block}:host .cursor{box-sizing:border-box;pointer-events:none;border:2px solid #fff;border-radius:50%;width:18px;height:18px;position:absolute}`})))()}var Cn;function init_color_canvas$1(){return(init_color_canvas$1=e((()=>{c(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvY29sb3ItcGlja2VyL2NvbG9yLXNlbGVjdGlvbi1wYW5lbC9jb2xvci1jYW52YXMvY29sb3ItY2FudmFzLmh0bWw(),init_color_canvas(),C(),init_color(),Cn=class ColorCanvas{hValue=_e.required();sValue=b.required();vValue=b.required();colorChange=oe();canvas=i.required(`canvas`);cursorData=M(()=>this.computeCursorData());destroyRef=O(se);isDragging=!1;constructor(){u(()=>this.drawColorCanvas())}onMouseDown=e=>{this.isDragging=!0,document.body.style.cursor=`pointer`,this.onCanvasMouseInteraction(e)};onMouseUp=()=>{this.isDragging=!1,document.body.style.cursor=``};onMouseMove=e=>{this.isDragging&&this.onCanvasMouseInteraction(e)};onCanvasMouseInteraction(e){let t=this.canvas().nativeElement.getBoundingClientRect(),n=(e.clientX-t.x)/t.width,r=(e.clientY-t.y)/t.height;this.sValue.set(Math.min(1,Math.max(0,n))),this.vValue.set(Math.min(1,Math.max(0,1-r))),this.colorChange.emit(Color({h:this.hValue()*360,s:this.sValue()*100,v:this.vValue()*100}))}ngAfterViewInit(){this.canvas().nativeElement.addEventListener(`mousedown`,this.onMouseDown),window.addEventListener(`mouseup`,this.onMouseUp),window.addEventListener(`mousemove`,this.onMouseMove),this.destroyRef.onDestroy(()=>{this.canvas().nativeElement.addEventListener(`mousedown`,this.onMouseDown),window.addEventListener(`mouseup`,this.onMouseUp),window.addEventListener(`mousemove`,this.onMouseMove)})}drawColorCanvas(){let e={height:this.canvas().nativeElement.height,width:this.canvas().nativeElement.width},t=this.canvas().nativeElement.getContext(`2d`),n=t.createLinearGradient(0,0,e.width,0);n.addColorStop(0,`#FFFFFF`);let r=Color({h:this.hValue()*360,s:100,v:100}).hex();n.addColorStop(1,r);let i=t.createLinearGradient(0,0,0,e.height);i.addColorStop(0,`#00000000`),i.addColorStop(1,`#000000`),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),t.fillStyle=i,t.fillRect(0,0,e.width,e.height)}computeCursorData(){let e=this.canvas().nativeElement.getBoundingClientRect(),t=e.width*this.sValue()-8,n=e.height*(1-this.vValue())-8;return{horizontalOffset:`${t}px`,verticalOffset:`${n}px`,color:Color({h:this.hValue()*360,s:this.sValue()*100,v:this.vValue()*100}).hex()}}static ctorParameters=()=>[];static propDecorators={hValue:[{type:n,args:[{isSignal:!0,alias:`hValue`,required:!0,transform:void 0}]}],sValue:[{type:n,args:[{isSignal:!0,alias:`sValue`,required:!0}]},{type:f,args:[`sValueChange`]}],vValue:[{type:n,args:[{isSignal:!0,alias:`vValue`,required:!0}]},{type:f,args:[`vValueChange`]}],colorChange:[{type:f,args:[`colorChange`]}],canvas:[{type:be,args:[`canvas`,{isSignal:!0}]}]}},Cn=N([m({selector:`app-color-canvas`,template:xn,styles:[Sn]})],Cn)})))()}var wn,Tn;function init_color_selection_panel$1(){return(init_color_selection_panel$1=e((()=>{c(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvY29sb3ItcGlja2VyL2NvbG9yLXNlbGVjdGlvbi1wYW5lbC9jb2xvci1zZWxlY3Rpb24tcGFuZWwuaHRtbA(),init_color_selection_panel(),C(),init_input(),St(),init_color_slider$1(),init_color_canvas$1(),init_color(),wn=/^#([0-9a-f]{3}){1,2}$/i,Tn=class ColorSelectionPanel{color=_e.required({transform:e=>Color(e)});colorChange=oe();hValue=a({source:this.color,computation:e=>e.hue()/360});sValue=a({source:this.color,computation:e=>e.saturationv()/100});vValue=a({source:this.color,computation:e=>e.value()/100});hexColor=M(()=>Color({h:this.hValue()*360,s:this.sValue()*100,v:this.vValue()*100}).hex());ngOnDestroy(){let e=Color({h:this.hValue()*360,s:this.sValue()*100,v:this.vValue()*100});this.colorChange.emit(e)}onHexCodeChange(e){let t=e.currentTarget;if(wn.test(t.value)){let e=Color(t.value);this.hValue.set(e.hue()/360),this.sValue.set(e.saturationv()/100),this.vValue.set(e.value()/100)}}onColorCanvasChanged(e){this.sValue.set(e.saturationv()/100),this.vValue.set(e.value()/100)}static propDecorators={color:[{type:n,args:[{isSignal:!0,alias:`color`,required:!0,transform:void 0}]}],colorChange:[{type:f,args:[`colorChange`]}]}},Tn=N([m({selector:`app-color-selection-panel`,imports:[fn,Ot,bn,Cn],template:Nt,styles:[Pt]})],Tn)})))()}var Q;function init_color_picker$1(){return(init_color_picker$1=e((()=>{c(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5odG1s(),init_color_picker(),C(),Ye(),init_color_selection_panel$1(),St(),Q=class ColorPicker{label=_e.required();value=b(`#000000`);disabled=b(!1);isOpen=ie(!1);onChange=()=>{};onTouched=()=>{};valueChangedEffect=u(()=>{this.onChange(this.value())});touchedEffect=u(()=>{this.onTouched()});toggleColorPanel(){this.disabled()||this.isOpen.update(e=>!e)}onColorChanged(e){this.value.set(e.hex())}writeValue(e){this.value.set(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled.set(e)}static propDecorators={label:[{type:n,args:[{isSignal:!0,alias:`label`,required:!0,transform:void 0}]}],value:[{type:n,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:f,args:[`valueChange`]}],disabled:[{type:n,args:[{isSignal:!0,alias:`disabled`,required:!1}]},{type:f,args:[`disabledChange`]}]}},Q=N([m({selector:`app-color-picker`,imports:[Ge,Tn],providers:[{provide:bt,useExisting:ue(()=>Q),multi:!0}],template:jt,styles:[Mt]})],Q)})))()}var En,$,Dn;function init_color_picker_stories(){return(init_color_picker_stories=e((()=>{init_color_picker$1(),En={title:`Komponenty/Color Picker`,component:Q,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},label:{control:`text`},value:{control:`color`}}},$={args:{disabled:!1,label:`Wybierz kolor`,value:`#2c96d3`}},Dn=[`Default`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Wybierz kolor',
    value: '#2c96d3'
  }
}`,...$.parameters?.docs?.source}}}})))()}init_color_picker_stories();export{$ as Default,Dn as __namedExportsOrder,En as default};