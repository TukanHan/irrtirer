import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,An as n,At as r,B as i,Br as a,Bt as o,C as s,Cr as c,Ct as l,Dt as u,E as d,En as ee,Gt as f,Hr as te,Ht as ne,It as re,Jt as p,L as m,Ln as h,Lt as g,M as _,Mt as ie,Nn as v,Nr as ae,Nt as y,Ot as b,Pn as oe,Pt as se,Qr as x,Qt as ce,Rt as le,Sn as S,St as ue,T as de,Tt as C,Ut as w,V as fe,Vn as pe,Vt as me,Wt as T,Xt as E,Yt as D,Zn as he,Zt as ge,_ as _e,_n as ve,an as ye,ar as be,b as xe,bn as O,br as Se,c as Ce,cn as we,en as k,h as Te,ii as Ee,in as De,jt as Oe,k as A,kn as ke,kt as j,l as Ae,ln as je,m as M,mn as Me,n as Ne,ni as Pe,oi as Fe,on as Ie,pn as Le,pt as Re,qn as ze,qt as N,rn as Be,s as Ve,si as He,sn as Ue,tn as We,tr as Ge,tt as Ke,u as qe,vr as Je,w as P,wr as Ye,wt as F,x as I,xn as Xe,xt as L,y as Ze,yt as Qe,zn as $e,zt as et}from"./core-Chtm1_Da.js";import{at as tt,lt as nt,rt}from"./iframe-CrPRH3I1.js";import{E as it,I as at,L as ot,O as st,P as ct,R as lt,S as ut,U as dt,W as ft,X as pt,Z as mt,_ as ht,c as gt,k as _t,l as vt,n as yt,r as bt,t as xt,v as St,x as Ct}from"./_animation-chunk-4cJPEY-G.js";import{i as wt,t as Tt}from"./overlay-DtvW1TMm.js";var Et,Dt=e((()=>{Et=`<div class="flex flex-col">
    <span class="text-base text-contrast-highest">{{ label() }}</span>
    <span class="text-sm text-contrast-medium">{{ value() }}</span>
</div>

<div role="presentation" 
    class="color-preview"
    [class.disabled]="disabled()"
    [style.background-color]="value()"
    (click)="toggleColorPanel()"
    cdkOverlayOrigin 
    #trigger="cdkOverlayOrigin">
</div>

<ng-template cdkConnectedOverlay 
    [cdkConnectedOverlayOrigin]="trigger"
    [cdkConnectedOverlayOpen]="isOpen()" 
    [cdkConnectedOverlayHasBackdrop]="isOpen()"
    [cdkConnectedOverlayBackdropClass]="'cdk-overlay-transparent-backdrop-cs'"
    (backdropClick)="toggleColorPanel()">
    <app-color-selection-panel [color]="value()" (colorChange)="onColorChanged($event)"/>
</ng-template>`})),Ot,kt=e((()=>{Ot=`:host{background-color:var(--color-contrast-lightest);border-radius:4px;flex-direction:row;align-items:center;padding:10px 16px;display:flex;box-shadow:0 0 5px 1px #0000001a}:host .color-preview{border-radius:50%;width:40px;height:40px;margin-left:auto;display:block;box-shadow:0 0 4px 1px #0000001a}:host .color-preview:not(.disabled){cursor:pointer}`})),At,jt=e((()=>{At=`<div class="sv-preview">
    <app-color-canvas 
        [hValue]="hValue()"
        [sValue]="sValue()"
        [vValue]="vValue()"
        (colorChange)="onColorCanvasChanged($event)" />
</div>

<div class="slider-container">
    <app-color-slider [(value)]="hValue"/>
</div>

<div class="result-wrapper">
    <div role="presentation"
        class="color-preview"
        [style.background]="hexColor()">
    </div>

    <mat-form-field class="density-3 code-input" appearance="outline">
        <mat-label>Hex</mat-label>
        <input matInput [ngModel]="hexColor()" (change)="onHexCodeChange($event)">
    </mat-form-field>
</div>`})),Mt,Nt=e((()=>{Mt=`:host{background-color:var(--color-contrast-lightest);border-radius:5px;flex-direction:column;display:flex;overflow:hidden;box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}:host .slider-container{padding:20px 10px}:host .result-wrapper{flex-direction:row;align-items:center;gap:10px;padding:0 10px 15px;display:flex}:host .result-wrapper .color-preview{border-radius:50%;min-width:40px;height:40px;display:block;box-shadow:0 0 4px 1px #0003}:host .result-wrapper .code-input{width:auto}:host .result-wrapper .code-input ::ng-deep .mat-mdc-form-field-subscript-wrapper{display:none}`})),Pt,Ft,It,Lt,Rt,zt,Bt=e((()=>{M(),pe(),mt(),ft(),lt(),je(),Pt=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=ie({type:e,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(e,t){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return e})(),Ft={passive:!0},It=(()=>{class e{_platform=v(pt);_ngZone=v(S);_renderer=v(fe).createRenderer(null,null);_styleLoader=v(dt);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return te;this._styleLoader.load(Pt);let t=at(e),n=this._monitoredElements.get(t);if(n)return n.subject;let r=new x,i=`cdk-text-field-autofilled`,a=e=>{e.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(i)?(t.classList.add(i),this._ngZone.run(()=>r.next({target:e.target,isAutofilled:!0}))):e.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(i)&&(t.classList.remove(i),this._ngZone.run(()=>r.next({target:e.target,isAutofilled:!1})))},o=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,a,Ft)));return this._monitoredElements.set(t,{subject:r,unlisten:o}),r}stopMonitoring(e){let t=at(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||e)};static ɵprov=re({token:e,factory:e.ɵfac})}return e})(),Lt=(()=>{class e{_elementRef=v(A);_autofillMonitor=v(It);cdkAutofill=new ve;ngOnInit(){this._autofillMonitor.monitor(this._elementRef).subscribe(e=>this.cdkAutofill.emit(e))}ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)}static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e,selectors:[[``,`cdkAutofill`,``]],outputs:{cdkAutofill:`cdkAutofill`}})}return e})(),Rt=(()=>{class e{_elementRef=v(A);_platform=v(pt);_ngZone=v(S);_renderer=v(i);_resizeEvents=new x;_previousValue;_initialHeight;_destroyed=new x;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(e){this._minRows=ot(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=ot(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute(`placeholder`,e):this._textareaElement.removeAttribute(`placeholder`),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=v(Le);_hasFocus=!1;_isViewInited=!1;constructor(){v(dt).load(Pt),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(`window`,`resize`,()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,`focus`,this._handleFocusEvent),this._renderer.listen(this._textareaElement,`blur`,this._handleFocusEvent)],this._resizeEvents.pipe(Je(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1),t=e.style;e.rows=1,t.position=`absolute`,t.visibility=`hidden`,t.border=`none`,t.padding=`0`,t.height=``,t.minHeight=``,t.maxHeight=``,t.top=t.bottom=t.left=t.right=`auto`,t.overflow=`hidden`,this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,t=e.style.marginBottom||``,n=this._platform.FIREFOX,r=this._hasFocus,i=n?`cdk-textarea-autosize-measuring-firefox`:`cdk-textarea-autosize-measuring`;r&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(i);let a=e.scrollHeight-4;return e.classList.remove(i),r&&(e.style.marginBottom=t),a}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}_handleFocusEvent=e=>{this._hasFocus=e.type===`focus`};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let t=this._elementRef.nativeElement,n=t.value;if(!e&&this._minRows===this._previousMinRows&&n===this._previousValue)return;let r=this._measureScrollHeight(),i=Math.max(r,this._cachedPlaceholderHeight||0);t.style.height=`${i}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<`u`?requestAnimationFrame(()=>this._scrollToCaretPosition(t)):setTimeout(()=>this._scrollToCaretPosition(t))}),this._previousValue=n,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(e){let{selectionStart:t,selectionEnd:n}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(t,n)}static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e,selectors:[[`textarea`,`cdkTextareaAutosize`,``]],hostAttrs:[`rows`,`1`,1,`cdk-textarea-autosize`],hostBindings:function(e,t){e&1&&N(`input`,function(){return t._noopInputHandler()})},inputs:{minRows:[0,`cdkAutosizeMinRows`,`minRows`],maxRows:[0,`cdkAutosizeMaxRows`,`maxRows`],enabled:[2,`cdkTextareaAutosize`,`enabled`,Ae],placeholder:`placeholder`},exportAs:[`cdkTextareaAutosize`]})}return e})(),zt=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵmod=se({type:e,imports:[Lt,Rt],exports:[Lt,Rt]});static ɵinj=$e({})}return e})()}));function Vt(){let e=nt()?nt().getUserAgent():``;return/android (\d+)/.test(e.toLowerCase())}function Ht(e){return e==null||Ut(e)===0}function Ut(e){return e==null?null:Array.isArray(e)||typeof e==`string`?e.length:e instanceof Set?e.size:null}function Wt(e){return t=>{if(t.value==null||e==null)return null;let n=parseFloat(t.value);return!isNaN(n)&&n<e?{min:{min:e,actual:t.value}}:null}}function Gt(e){return t=>{if(t.value==null||e==null)return null;let n=parseFloat(t.value);return!isNaN(n)&&n>e?{max:{max:e,actual:t.value}}:null}}function Kt(e){return Ht(e.value)?{required:!0}:null}function qt(e){return e.value===!0?null:{required:!0}}function Jt(e){return Ht(e.value)||or.test(e.value)?null:{email:!0}}function Yt(e){return t=>{let n=t.value?.length??Ut(t.value);return n===null||n===0?null:n<e?{minlength:{requiredLength:e,actualLength:n}}:null}}function Xt(e){return t=>{let n=t.value?.length??Ut(t.value);return n!==null&&n>e?{maxlength:{requiredLength:e,actualLength:n}}:null}}function Zt(e){if(!e)return Qt;let t,n;return typeof e==`string`?(n=``,e.charAt(0)!==`^`&&(n+=`^`),n+=e,e.charAt(e.length-1)!==`$`&&(n+=`$`),t=new RegExp(n)):(n=e.toString(),t=e),e=>{if(Ht(e.value))return null;let r=e.value;return t.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Qt(e){return null}function $t(e){return e!=null}function en(e){return Re(e)?a(e):e}function tn(e){let t={};return e.forEach(e=>{t=e==null?t:{...t,...e}}),Object.keys(t).length===0?null:t}function nn(e,t){return t.map(t=>t(e))}function rn(e){return!e.validate}function an(e){return e.map(e=>rn(e)?e:t=>e.validate(t))}function on(e){if(!e)return null;let t=e.filter($t);return t.length==0?null:function(e){return tn(nn(e,t))}}function sn(e){return e==null?null:on(an(e))}function cn(e){if(!e)return null;let t=e.filter($t);return t.length==0?null:function(e){return Ye(nn(e,t).map(en)).pipe(ae(tn))}}function ln(e){return e==null?null:cn(an(e))}function un(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function dn(e){return e._rawValidators}function fn(e){return e._rawAsyncValidators}function pn(e){return e?Array.isArray(e)?e:[e]:[]}function mn(e,t){return Array.isArray(e)?e.includes(t):e===t}function hn(e,t){let n=pn(t);return pn(e).forEach(e=>{mn(n,e)||n.push(e)}),n}function gn(e,t){return pn(t).filter(t=>!mn(e,t))}function _n(e){return(xn(e)?e.validators:e)||null}function vn(e){return Array.isArray(e)?sn(e):e||null}function yn(e,t){return(xn(t)?t.asyncValidators:e)||null}function bn(e){return Array.isArray(e)?ln(e):e||null}function xn(e){return e!=null&&!Array.isArray(e)&&typeof e==`object`}function Sn(e,t,n){let r=e.controls;if(!(t?Object.keys(r):r).length)throw new ee(1e3,``);if(!wn(r,n))throw new ee(1001,``)}function Cn(e,t,n){e._forEachChild((e,t)=>{if(n[t]===void 0)throw new ee(-1002,``)})}function wn(e,t){return Object.hasOwn(e,t)}function Tn(e){return e.tagName===`INPUT`||e.tagName===`SELECT`||e.tagName===`TEXTAREA`}function En(e,t,n,r){switch(n){case`name`:e.setAttribute(t,n,r);break;case`disabled`:case`readonly`:case`required`:r?e.setAttribute(t,n,``):e.removeAttribute(t,n);break;case`max`:case`min`:case`minLength`:case`maxLength`:r===void 0?e.removeAttribute(t,n):e.setAttribute(t,n,r.toString());break}}function Dn(e){return typeof e==`number`?e:parseInt(e,10)}function On(e){return typeof e==`number`?e:parseFloat(e)}function kn(e,t){return[...t.path,e]}function An(e,t,n=zr){Pn(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||n===`always`)&&t.valueAccessor.setDisabledState?.(e.disabled),In(e,t),zn(e,t),Ln(e,t),Nn(e,t)}function jn(e,t,n=!0){let r=()=>{};t?.valueAccessor?.registerOnChange(r),t?.valueAccessor?.registerOnTouched(r),Fn(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Mn(e,t){e.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Nn(e,t){if(t.valueAccessor.setDisabledState){let n=e=>{t.valueAccessor.setDisabledState(e)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}function Pn(e,t){let n=dn(e);t.validator===null?typeof n==`function`&&e.setValidators([n]):e.setValidators(un(n,t.validator));let r=fn(e);t.asyncValidator===null?typeof r==`function`&&e.setAsyncValidators([r]):e.setAsyncValidators(un(r,t.asyncValidator));let i=()=>e.updateValueAndValidity();Mn(t._rawValidators,i),Mn(t._rawAsyncValidators,i)}function Fn(e,t){let n=!1;if(e!==null){if(t.validator!==null){let r=dn(e);if(Array.isArray(r)&&r.length>0){let i=r.filter(e=>e!==t.validator);i.length!==r.length&&(n=!0,e.setValidators(i))}}if(t.asyncValidator!==null){let r=fn(e);if(Array.isArray(r)&&r.length>0){let i=r.filter(e=>e!==t.asyncValidator);i.length!==r.length&&(n=!0,e.setAsyncValidators(i))}}}let r=()=>{};return Mn(t._rawValidators,r),Mn(t._rawAsyncValidators,r),n}function In(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn===`change`&&Rn(e,t)})}function Ln(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn===`blur`&&e._pendingChange&&Rn(e,t),e.updateOn!==`submit`&&e.markAsTouched()})}function Rn(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function zn(e,t){let n=(e,n)=>{t.valueAccessor.writeValue(e),n&&t.viewToModelUpdate(e)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}function Bn(e,t){Pn(e,t)}function Vn(e,t){return Fn(e,t)}function Hn(e,t){if(!e.hasOwnProperty(`model`))return!1;let n=e.model;return n.isFirstChange()?!0:!Object.is(t,n.currentValue)}function Un(e){return Object.getPrototypeOf(e.constructor)===R}function Wn(e,t){e._syncPendingControls(),t.forEach(e=>{let t=e.control;t.updateOn===`submit`&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Gn(e,t){if(!t)return null;let n,r,i;return t.forEach(e=>{e.constructor===ir?n=e:Un(e)?r=e:i=e}),i||r||n||null}function Kn(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function qn(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Jn(e){return typeof e==`object`&&!!e&&Object.keys(e).length===2&&`value`in e&&`disabled`in e}function Yn(e,t){return e==null?`${t}`:(t&&typeof t==`object`&&(t=`Object`),`${e}: ${t}`.slice(0,50))}function Xn(e){return e.split(`:`)[0]}function Zn(e,t){return e==null?`${t}`:(typeof t==`string`&&(t=`'${t}'`),t&&typeof t==`object`&&(t=`Object`),`${e}: ${t}`.slice(0,50))}function Qn(e){return e.split(`:`)[0]}var $n,R,z,er,tr,nr,rr,ir,B,ar,or,sr,cr,V,lr,ur,dr,fr,H,pr,mr,hr,gr,_r,vr,yr,br,U,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,W,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi=e((()=>{M(),pe(),je(),rt(),$n=(()=>{class e{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(t){return new(t||e)(g(i),g(A))};static ɵdir=y({type:e})}return e})(),R=(()=>{class e extends $n{static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,features:[L]})}return e})(),z=new O(``),er={provide:z,useExisting:n(()=>tr),multi:!0},tr=(()=>{class e extends R{writeValue(e){this.setProperty(`checked`,e)}static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[`input`,`type`,`checkbox`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`checkbox`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`checkbox`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(e,t){e&1&&N(`change`,function(e){return t.onChange(e.target.checked)})(`blur`,function(){return t.onTouched()})},standalone:!1,features:[l([er]),L]})}return e})(),nr={provide:z,useExisting:n(()=>ir),multi:!0},rr=new O(``),ir=(()=>{class e extends $n{_compositionMode;_composing=!1;constructor(e,t,n){super(e,t),this._compositionMode=n,this._compositionMode??=!Vt()}writeValue(e){let t=e??``;this.setProperty(`value`,t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(t){return new(t||e)(g(i),g(A),g(rr,8))};static ɵdir=y({type:e,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(e,t){e&1&&N(`input`,function(e){return t._handleInput(e.target.value)})(`blur`,function(){return t.onTouched()})(`compositionstart`,function(){return t._compositionStart()})(`compositionend`,function(e){return t._compositionEnd(e.target.value)})},standalone:!1,features:[l([nr]),L]})}return e})(),B=new O(``),ar=new O(``),or=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,sr=class{static min(e){return Wt(e)}static max(e){return Gt(e)}static required(e){return Kt(e)}static requiredTrue(e){return qt(e)}static email(e){return Jt(e)}static minLength(e){return Yt(e)}static maxLength(e){return Xt(e)}static pattern(e){return Zt(e)}static nullValidator(e){return Qt()}static compose(e){return on(e)}static composeAsync(e){return cn(e)}},cr=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=sn(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ln(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},V=class extends cr{name;get formDirective(){return null}get path(){return null}},lr=`VALID`,ur=`INVALID`,dr=`PENDING`,fr=`DISABLED`,H=class{},pr=class extends H{value;source;constructor(e,t){super(),this.value=e,this.source=t}},mr=class extends H{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},hr=class extends H{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},gr=class extends H{status;source;constructor(e,t){super(),this.status=e,this.source=t}},_r=class extends H{source;constructor(e){super(),this.source=e}},vr=class extends H{source;constructor(e){super(),this.source=e}},yr=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=h(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return P(this.statusReactive)}set status(e){P(()=>this.statusReactive.set(e))}_status=I(()=>this.statusReactive());statusReactive=h(void 0);get valid(){return this.status===lr}get invalid(){return this.status===ur}get pending(){return this.status===dr}get disabled(){return this.status===fr}get enabled(){return this.status!==fr}errors;get pristine(){return P(this.pristineReactive)}set pristine(e){P(()=>this.pristineReactive.set(e))}_pristine=I(()=>this.pristineReactive());pristineReactive=h(!0);get dirty(){return!this.pristine}get touched(){return P(this.touchedReactive)}set touched(e){P(()=>this.touchedReactive.set(e))}_touched=I(()=>this.touchedReactive());touchedReactive=h(!1);get untouched(){return!this.touched}_events=new x;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(hn(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(hn(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(gn(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(gn(e,this._rawAsyncValidators))}hasValidator(e){return mn(this._rawValidators,e)}hasAsyncValidator(e){return mn(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched({...e,sourceControl:n}),t&&e.emitEvent!==!1&&this._events.next(new hr(!0,n))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),e.onlySelf||this._parent?._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new hr(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty({...e,sourceControl:n}),t&&e.emitEvent!==!1&&this._events.next(new mr(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(t=>{t.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new mr(!0,n))}markAsPending(e={}){this.status=dr;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new gr(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending({...e,sourceControl:t})}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=fr,this.errors=null,this._forEachChild(t=>{t.disable({...e,onlySelf:!0})}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new pr(this.value,n)),this._events.next(new gr(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:t},this),this._onDisabledChange.forEach(e=>e(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=lr,this._forEachChild(t=>{t.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:t},this),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===lr||this.status===dr)&&this._runAsyncValidator(t,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new pr(this.value,t)),this._events.next(new gr(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity({...e,sourceControl:t})}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?fr:lr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=dr,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let n=en(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(`.`)),t.length===0)?null:t.reduce((e,t)=>e&&e._find(t),this)}getError(e,t){let n=t?this.get(t):this;return n?.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new gr(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new ve,this.statusChanges=new ve}_calculateStatus(){return this._allControlsDisabled()?fr:this.errors?ur:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(dr)?dr:this._anyControlsHaveStatus(ur)?ur:lr}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,e.onlySelf||this._parent?._updatePristine(e,t),r&&this._events.next(new mr(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new hr(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){xn(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=vn(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=bn(this._rawAsyncValidators)}_updateHasRequiredValidator(){P(()=>this._hasRequired.set(this.hasValidator(sr.required)))}},br=class{kind;context;control;message;constructor({kind:e,context:t,control:n}){this.kind=e,this.context=t,this.control=n}},U=(()=>{class e{_validator=Qt;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Qt,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e,features:[ue]})}return e})(),xr={provide:B,useExisting:n(()=>Sr),multi:!0},Sr=(()=>{class e extends U{max;inputName=`max`;normalizeInput=e=>On(e);createValidator=e=>Gt(e);static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[`input`,`type`,`number`,`max`,``,`formControlName`,``],[`input`,`type`,`number`,`max`,``,`formControl`,``],[`input`,`type`,`number`,`max`,``,`ngModel`,``]],hostVars:1,hostBindings:function(e,t){e&2&&C(`max`,t._enabled?t.max:null)},inputs:{max:`max`},standalone:!1,features:[l([xr]),L]})}return e})(),Cr={provide:B,useExisting:n(()=>wr),multi:!0},wr=(()=>{class e extends U{min;inputName=`min`;normalizeInput=e=>On(e);createValidator=e=>Wt(e);static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[`input`,`type`,`number`,`min`,``,`formControlName`,``],[`input`,`type`,`number`,`min`,``,`formControl`,``],[`input`,`type`,`number`,`min`,``,`ngModel`,``]],hostVars:1,hostBindings:function(e,t){e&2&&C(`min`,t._enabled?t.min:null)},inputs:{min:`min`},standalone:!1,features:[l([Cr]),L]})}return e})(),Tr={provide:B,useExisting:n(()=>Dr),multi:!0},Er={provide:B,useExisting:n(()=>Or),multi:!0},Dr=(()=>{class e extends U{required;inputName=`required`;normalizeInput=Ae;createValidator=e=>Kt;enabled(e){return e}static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(e,t){e&2&&C(`required`,t._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[l([Tr]),L]})}return e})(),Or=(()=>{class e extends Dr{createValidator=e=>qt;static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[`input`,`type`,`checkbox`,`required`,``,`formControlName`,``],[`input`,`type`,`checkbox`,`required`,``,`formControl`,``],[`input`,`type`,`checkbox`,`required`,``,`ngModel`,``]],hostVars:1,hostBindings:function(e,t){e&2&&C(`required`,t._enabled?``:null)},standalone:!1,features:[l([Er]),L]})}return e})(),kr={provide:B,useExisting:n(()=>Ar),multi:!0},Ar=(()=>{class e extends U{email;inputName=`email`;normalizeInput=Ae;createValidator=e=>Jt;enabled(e){return e}static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[``,`email`,``,`formControlName`,``],[``,`email`,``,`formControl`,``],[``,`email`,``,`ngModel`,``]],inputs:{email:`email`},standalone:!1,features:[l([kr]),L]})}return e})(),jr={provide:B,useExisting:n(()=>Mr),multi:!0},Mr=(()=>{class e extends U{minlength;inputName=`minlength`;normalizeInput=e=>Dn(e);createValidator=e=>Yt(e);static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[``,`minlength`,``,`formControlName`,``],[``,`minlength`,``,`formControl`,``],[``,`minlength`,``,`ngModel`,``]],hostVars:1,hostBindings:function(e,t){e&2&&C(`minlength`,t._enabled?t.minlength:null)},inputs:{minlength:`minlength`},standalone:!1,features:[l([jr]),L]})}return e})(),Nr={provide:B,useExisting:n(()=>Pr),multi:!0},Pr=(()=>{class e extends U{maxlength;inputName=`maxlength`;normalizeInput=e=>Dn(e);createValidator=e=>Xt(e);static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[``,`maxlength`,``,`formControlName`,``],[``,`maxlength`,``,`formControl`,``],[``,`maxlength`,``,`ngModel`,``]],hostVars:1,hostBindings:function(e,t){e&2&&C(`maxlength`,t._enabled?t.maxlength:null)},inputs:{maxlength:`maxlength`},standalone:!1,features:[l([Nr]),L]})}return e})(),Fr={provide:B,useExisting:n(()=>Ir),multi:!0},Ir=(()=>{class e extends U{pattern;inputName=`pattern`;normalizeInput=e=>e;createValidator=e=>Zt(e);static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[``,`pattern`,``,`formControlName`,``],[``,`pattern`,``,`formControl`,``],[``,`pattern`,``,`ngModel`,``]],hostVars:1,hostBindings:function(e,t){e&2&&C(`pattern`,t._enabled?t.pattern:null)},inputs:{pattern:`pattern`},standalone:!1,features:[l([Fr]),L]})}return e})(),Lr=new O(``),Rr=new O(``,{factory:()=>zr}),zr=`always`,Br={provide:Lr,useFactory:()=>{let e=v(W,{self:!0});return{setParseErrors:t=>{e.setParseErrorSource(t)},set onReset(t){e.onReset=t}}}},W=class extends cr{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof vr&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Gn(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,t,n){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=n,this.injector?.get(Me)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(Ne);if(!this.control||!e)return;let t=e.markForCheck.bind(e);this.subscription=new Ee,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof vr&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(e=>{this.control?.setValue(e,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(e)}),e.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Tn(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(e=>e instanceof Dr))}ngControlUpdate(e,t){if(!this.isCustomControlBased)return;let n=this.control,r=this.customControlBindings;Object.is(r.value,n.value)||(r.value=n.value,e.setCustomControlModelInput(n.value)),this.bindControlProperty(e,r,`touched`,n.touched),this.bindControlProperty(e,r,`dirty`,n.dirty),this.bindControlProperty(e,r,`valid`,n.valid),this.bindControlProperty(e,r,`invalid`,n.invalid),this.bindControlProperty(e,r,`pending`,n.pending),this.bindControlProperty(e,r,`disabled`,n.disabled),this.shouldBindRequired&&this.bindControlProperty(e,r,`required`,this.isRequired);let i=n.errors;if(r.errors!==i){r.errors=i;let t=this._convertErrors(i);e.setInputOnDirectives(`errors`,t)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(e,t,n,r){if(t[n]===r)return;t[n]=r;let i=e.setInputOnDirectives(n,r);this.isNativeFormElement&&!i&&(n===`disabled`||n===`required`)&&this.renderer&&En(this.renderer,e.nativeElement,n,r)}_convertErrors(e){if(e===null)return[];let t=this.control;return Object.entries(e).map(([e,n])=>new br({context:n,kind:e,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,n=I(()=>{let t=e();return t.length===0?null:t.reduce((e,t)=>(e[t.kind]=t,e),{})});this.parseErrorsValidator=(()=>t).bind(this),ke(()=>{t=n(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}},Vr=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Hr=(()=>{class e extends Vr{constructor(e){super(e)}static ɵfac=function(t){return new(t||e)(g(W,2))};static ɵdir=y({type:e,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(e,t){e&2&&u(`ng-untouched`,t.isUntouched)(`ng-touched`,t.isTouched)(`ng-pristine`,t.isPristine)(`ng-dirty`,t.isDirty)(`ng-valid`,t.isValid)(`ng-invalid`,t.isInvalid)(`ng-pending`,t.isPending)},standalone:!1,features:[L]})}return e})(),Ur=(()=>{class e extends Vr{constructor(e){super(e)}static ɵfac=function(t){return new(t||e)(g(V,10))};static ɵdir=y({type:e,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(e,t){e&2&&u(`ng-untouched`,t.isUntouched)(`ng-touched`,t.isTouched)(`ng-pristine`,t.isPristine)(`ng-dirty`,t.isDirty)(`ng-valid`,t.isValid)(`ng-invalid`,t.isInvalid)(`ng-pending`,t.isPending)(`ng-submitted`,t.isSubmitted)},standalone:!1,features:[L]})}return e})(),Wr=class extends yr{constructor(e,t,n){super(_n(t),yn(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this._find(e)||(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){let n=this._find(e);n&&n._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){let r=this._find(e);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this._find(e)?.enabled===!0}setValue(e,t={}){P(()=>{Cn(this,!0,e),Object.keys(e).forEach(n=>{Sn(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this._find(n);r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{...t,onlySelf:!0})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new vr(this))}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,t,n)=>((t.enabled||this.disabled)&&(e[n]=t.value),e))}_reduceChildren(e,t){let n=e;return this._forEachChild((e,r)=>{n=t(n,e,r)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return wn(this.controls,e)?this.controls[e]:null}},Gr={provide:V,useExisting:n(()=>qr)},Kr=Promise.resolve(),qr=(()=>{class e extends V{callSetDisabledState;get submitted(){return P(this.submittedReactive)}_submitted=I(()=>this.submittedReactive());submittedReactive=h(!1);_directives=new Set;form;ngSubmit=new ve;options;constructor(e,t,n){super(),this.callSetDisabledState=n,this.form=new Wr({},sn(e),ln(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Kr.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Kr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Kr.then(()=>{let t=this._findContainer(e.path),n=new Wr({});Bn(n,e),t.registerControl(e.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Kr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Kr.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Wn(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new _r(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(t){return new(t||e)(g(B,10),g(ar,10),g(Rr,8))};static ɵdir=y({type:e,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(e,t){e&1&&N(`submit`,function(e){return t.onSubmit(e)})(`reset`,function(){return t.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[l([Gr]),L]})}return e})(),Jr=class extends yr{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,n){super(_n(t),yn(n,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),xn(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Jn(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){P(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new vr(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){qn(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){qn(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Jn(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}},Yr=e=>e instanceof Jr,Xr=(()=>{class e extends V{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective?.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return kn(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,standalone:!1,features:[L]})}return e})(),Zr={provide:V,useExisting:n(()=>Qr)},Qr=(()=>{class e extends Xr{name=``;constructor(e,t,n){super(),this._parent=e,this._setValidators(t),this._setAsyncValidators(n)}_checkParentType(){!(this._parent instanceof e)&&this._parent instanceof qr}static ɵfac=function(t){return new(t||e)(g(V,5),g(B,10),g(ar,10))};static ɵdir=y({type:e,selectors:[[``,`ngModelGroup`,``]],inputs:{name:[0,`ngModelGroup`,`name`]},exportAs:[`ngModelGroup`],standalone:!1,features:[l([Zr]),L]})}return e})(),$r={provide:W,useExisting:n(()=>ti)},ei=Promise.resolve(),ti=(()=>{class e extends W{_changeDetectorRef;callSetDisabledState;control=new Jr;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name=``;isDisabled;model;options;update=new ve;constructor(e,t,n,r,i,a,o,s){super(o,s,r),this._changeDetectorRef=i,this.callSetDisabledState=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||`name`in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}`isDisabled`in e&&this._updateDisabled(e),Hn(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,An(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,An(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){ei.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,n=t!==0&&Ae(t);ei.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?kn(e,this._parent):[e]}static ɵfac=function(t){return new(t||e)(g(V,9),g(B,10),g(ar,10),g(z,10),g(Ne,8),g(Rr,8),g(Xe,8),g(i,8))};static ɵdir=y({type:e,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[l([$r,Br]),L,ue,Qe(null)]})}return e})(),ni=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return e})(),ri={provide:z,useExisting:n(()=>ii),multi:!0},ii=(()=>{class e extends R{writeValue(e){let t=e??``;this.setProperty(`value`,t)}registerOnChange(e){this.onChange=t=>{e(t==``?null:parseFloat(t))}}static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[`input`,`type`,`number`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(e,t){e&1&&N(`input`,function(e){return t.onChange(e.target.value)})(`blur`,function(){return t.onTouched()})},standalone:!1,features:[l([ri]),L]})}return e})(),ai={provide:z,useExisting:n(()=>si),multi:!0},oi=(()=>{class e{_accessors=[];add(e,t){this._accessors.push([e,t])}remove(e){for(let t=this._accessors.length-1;t>=0;--t)if(this._accessors[t][1]===e){this._accessors.splice(t,1);return}}select(e){this._accessors.forEach(t=>{this._isSameGroup(t,e)&&t[1]!==e&&t[1].fireUncheck(e.value)})}_isSameGroup(e,t){return e[0].control?e[0]._parent===t._control._parent&&e[1].name===t.name:!1}static ɵfac=function(t){return new(t||e)};static ɵprov=re({token:e,factory:e.ɵfac})}return e})(),si=(()=>{class e extends R{_registry;_injector;_state;_control;_fn;setDisabledStateFired=!1;onChange=()=>{};name;formControlName;value;callSetDisabledState=v(Rr,{optional:!0})??zr;constructor(e,t,n,r){super(e,t),this._registry=n,this._injector=r}ngOnInit(){this._control=this._injector.get(W),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this.setProperty(`checked`,this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}setDisabledState(e){(this.setDisabledStateFired||e||this.callSetDisabledState===`whenDisabledForLegacyCode`)&&this.setProperty(`disabled`,e),this.setDisabledStateFired=!0}fireUncheck(e){this.writeValue(e)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}static ɵfac=function(t){return new(t||e)(g(i),g(A),g(oi),g(Xe))};static ɵdir=y({type:e,selectors:[[`input`,`type`,`radio`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`radio`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`radio`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(e,t){e&1&&N(`change`,function(){return t.onChange()})(`blur`,function(){return t.onTouched()})},inputs:{name:`name`,formControlName:`formControlName`,value:`value`},standalone:!1,features:[l([ai]),L]})}return e})(),ci={provide:z,useExisting:n(()=>li),multi:!0},li=(()=>{class e extends R{writeValue(e){this.setProperty(`value`,parseFloat(e))}registerOnChange(e){this.onChange=t=>{e(t==``?null:parseFloat(t))}}static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[`input`,`type`,`range`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`range`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`range`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(e,t){e&1&&N(`change`,function(e){return t.onChange(e.target.value)})(`input`,function(e){return t.onChange(e.target.value)})(`blur`,function(){return t.onTouched()})},standalone:!1,features:[l([ci]),L]})}return e})(),ui=(()=>{class e extends V{callSetDisabledState;get submitted(){return P(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=I(()=>this._submittedReactive());_submittedReactive=h(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,n){super(),this.callSetDisabledState=n,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty(`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Fn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){jn(e.control||null,e,!1),Kn(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Wn(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new _r(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,n=this.form.get(e.path);t!==n&&(jn(t||null,e),Yr(n)&&e._setupWithForm(n,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Bn(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Vn(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Pn(this.form,this),this._oldForm&&Fn(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(t){return new(t||e)(g(B,10),g(ar,10),g(Rr,8))};static ɵdir=y({type:e,features:[L,ue]})}return e})(),di={provide:V,useExisting:n(()=>fi)},fi=(()=>{class e extends ui{form=null;ngSubmit=new ve;get control(){return this.form}static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[``,`formGroup`,``]],hostBindings:function(e,t){e&1&&N(`submit`,function(e){return t.onSubmit(e)})(`reset`,function(){return t.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[l([di]),L]})}return e})(),pi={provide:z,useExisting:n(()=>mi),multi:!0},mi=(()=>{class e extends R{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;appRefInjector=v(de).injector;destroyRef=v(Me);cdr=v(Ne);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,Ke({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(e){this.cdr.markForCheck(),this.value=e;let t=Yn(this._getOptionId(e),e);this.setProperty(`value`,t)}registerOnChange(e){this.onChange=t=>{this.value=this._getOptionValue(t),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let t of this._optionMap.keys())if(this._compareWith(this._optionMap.get(t),e))return t;return null}_getOptionValue(e){let t=Xn(e);return this._optionMap.has(t)?this._optionMap.get(t):e}static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[`select`,`formControlName`,``,3,`multiple`,``,3,`ngNoCva`,``],[`select`,`formControl`,``,3,`multiple`,``,3,`ngNoCva`,``],[`select`,`ngModel`,``,3,`multiple`,``,3,`ngNoCva`,``]],hostBindings:function(e,t){e&1&&N(`change`,function(e){return t.onChange(e.target.value)})(`blur`,function(){return t.onTouched()})},inputs:{compareWith:`compareWith`},standalone:!1,features:[l([pi]),L]})}return e})(),hi=(()=>{class e{_element;_renderer;_select;id;constructor(e,t,n){this._element=e,this._renderer=t,this._select=n,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(Yn(this.id,e)),this._select._writeValueAfterRender())}set value(e){this._setElementValue(e),this._select?._writeValueAfterRender()}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,`value`,e)}ngOnDestroy(){this._select?._optionMap.delete(this.id),this._select?._writeValueAfterRender()}static ɵfac=function(t){return new(t||e)(g(A),g(i),g(mi,9))};static ɵdir=y({type:e,selectors:[[`option`]],inputs:{ngValue:`ngValue`,value:`value`},standalone:!1})}return e})(),gi={provide:z,useExisting:n(()=>_i),multi:!0},_i=(()=>{class e extends R{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let t;if(Array.isArray(e)){let n=e.map(e=>this._getOptionId(e));t=(e,t)=>{e._setSelected(n.indexOf(t)>-1)}}else t=e=>{e._setSelected(!1)};this._optionMap.forEach(t)}registerOnChange(e){this.onChange=t=>{let n=[],r=t.selectedOptions;if(r!==void 0){let e=r;for(let t=0;t<e.length;t++){let r=e[t],i=this._getOptionValue(r.value);n.push(i)}}else{let e=t.options;for(let t=0;t<e.length;t++){let r=e[t];if(r.selected){let e=this._getOptionValue(r.value);n.push(e)}}}this.value=n,e(n)}}_registerOption(e){let t=(this._idCounter++).toString();return this._optionMap.set(t,e),t}_getOptionId(e){for(let t of this._optionMap.keys())if(this._compareWith(this._optionMap.get(t)._value,e))return t;return null}_getOptionValue(e){let t=Qn(e);return this._optionMap.has(t)?this._optionMap.get(t)._value:e}static ɵfac=(()=>{let t;return function(n){return(t||=f(e))(n||e)}})();static ɵdir=y({type:e,selectors:[[`select`,`multiple`,``,`formControlName`,``,3,`ngNoCva`,``],[`select`,`multiple`,``,`formControl`,``,3,`ngNoCva`,``],[`select`,`multiple`,``,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(e,t){e&1&&N(`change`,function(e){return t.onChange(e.target)})(`blur`,function(){return t.onTouched()})},inputs:{compareWith:`compareWith`},standalone:!1,features:[l([gi]),L]})}return e})(),vi=(()=>{class e{_element;_renderer;_select;id;_value;constructor(e,t,n){this._element=e,this._renderer=t,this._select=n,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(Zn(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Zn(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,`value`,e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,`selected`,e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static ɵfac=function(t){return new(t||e)(g(A),g(i),g(_i,9))};static ɵdir=y({type:e,selectors:[[`option`]],inputs:{ngValue:`ngValue`,value:`value`},standalone:!1})}return e})(),yi=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵmod=se({type:e,declarations:[ni,hi,vi,ir,ii,li,tr,mi,_i,si,Hr,Ur,Dr,Mr,Pr,Ir,Or,Ar,wr,Sr],exports:[ni,hi,vi,ir,ii,li,tr,mi,_i,si,Hr,Ur,Dr,Mr,Pr,Ir,Or,Ar,wr,Sr]});static ɵinj=$e({})}return e})(),bi=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Rr,useValue:t.callSetDisabledState??zr}]}}static ɵfac=function(t){return new(t||e)};static ɵmod=se({type:e,declarations:[ti,Qr,qr],exports:[yi,ti,Qr,qr]});static ɵinj=$e({imports:[yi]})}return e})()})),Si,Ci=e((()=>{M(),Si=new O(`MAT_INPUT_VALUE_ACCESSOR`)})),wi,Ti,Ei=e((()=>{M(),pe(),je(),wi=class{_box;_destroyed=new x;_resizeSubject=new x;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new Pe(t=>{let n=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),n.unsubscribe(),this._elementObservables.delete(e)}}).pipe(Se(t=>t.some(t=>t.target===e)),Ge({bufferSize:1,refCount:!0}),ze(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Ti=(()=>{class e{_cleanupErrorListener;_observers=new Map;_ngZone=v(S);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||`content-box`;return this._observers.has(n)||this._observers.set(n,new wi(n)),this._observers.get(n).observe(e)}static ɵfac=function(t){return new(t||e)};static ɵprov=re({token:e,factory:e.ɵfac})}return e})()}));function Di(e,t){e&1&&ne(0,`span`,21)}function Oi(e,t){if(e&1&&(T(0,`label`,20),E(1,1),j(2,Di,1,0,`span`,21),w()),e&2){let e=D(2);ce(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),C(`for`,e._control.disableAutomaticLabeling?null:e._control.id),F(2),b(!e.hideRequiredMarker&&e._control.required?2:-1)}}function ki(e,t){e&1&&j(0,Oi,3,5,`label`,20),e&2&&b(D()._hasFloatingLabel()?0:-1)}function Ai(e,t){e&1&&ne(0,`div`,7)}function ji(e,t){}function Mi(e,t){e&1&&Be(0,ji,0,0,`ng-template`,13),e&2&&(D(2),ce(`ngTemplateOutlet`,We(1)))}function Ni(e,t){if(e&1&&(T(0,`div`,9),j(1,Mi,1,1,null,13),w()),e&2){let e=D();ce(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),F(),b(e._forceDisplayInfixLabel()?-1:1)}}function Pi(e,t){e&1&&(T(0,`div`,10,2),E(2,2),w())}function Fi(e,t){e&1&&(T(0,`div`,11,3),E(2,3),w())}function Ii(e,t){}function Li(e,t){e&1&&Be(0,Ii,0,0,`ng-template`,13),e&2&&(D(),ce(`ngTemplateOutlet`,We(1)))}function Ri(e,t){e&1&&(T(0,`div`,14,4),E(2,4),w())}function zi(e,t){e&1&&(T(0,`div`,15,5),E(2,5),w())}function Bi(e,t){e&1&&ne(0,`div`,16)}function Vi(e,t){e&1&&(T(0,`div`,18),E(1,6),w())}function Hi(e,t){if(e&1&&(T(0,`mat-hint`,22),ye(1),w()),e&2){let e=D(2);ce(`id`,e._hintLabelId),F(),Ie(e.hintLabel)}}function Ui(e,t){if(e&1&&(T(0,`div`,19),j(1,Hi,2,2,`mat-hint`,22),E(2,7),ne(3,`div`,23),E(4,8),w()),e&2){let e=D();F(),b(e.hintLabel?1:-1)}}function Wi(e){let t=e;if(t.offsetParent!==null)return t.scrollWidth;let n=t.cloneNode(!0);n.style.setProperty(`position`,`absolute`),n.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(n);let r=n.scrollWidth;return n.remove(),r}var Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa=e((()=>{bt(),_t(),ut(),St(),rt(),M(),pe(),je(),Ei(),yt(),Gi=[`notch`],Ki=[`*`],qi=[`iconPrefixContainer`],Ji=[`textPrefixContainer`],Yi=[`iconSuffixContainer`],Xi=[`textSuffixContainer`],Zi=[`textField`],Qi=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],$i=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`],ea=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e,selectors:[[`mat-label`]]})}return e})(),ta=new O(`MatError`),na=(()=>{class e{id=v(it).getId(`mat-mdc-error-`);static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(e,t){e&2&&me(`id`,t.id)},inputs:{id:`id`},features:[l([{provide:ta,useExisting:e}])]})}return e})(),ra=(()=>{class e{align=`start`;id=v(it).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(e,t){e&2&&(me(`id`,t.id),C(`align`,null),u(`mat-mdc-form-field-hint-end`,t.align===`end`))},inputs:{align:`align`,id:`id`}})}return e})(),ia=new O(`MatPrefix`),aa=(()=>{class e{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[l([{provide:ia,useExisting:e}])]})}return e})(),oa=new O(`MatSuffix`),sa=(()=>{class e{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[l([{provide:oa,useExisting:e}])]})}return e})(),ca=new O(`FloatingLabelParent`),la=(()=>{class e{_elementRef=v(A);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=v(Ti);_ngZone=v(S);_parent=v(ca);_resizeSubscription=new Ee;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Wi(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(e,t){e&2&&u(`mdc-floating-label--float-above`,t.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return e})(),ua=`mdc-line-ripple--active`,da=`mdc-line-ripple--deactivating`,fa=(()=>{class e{_elementRef=v(A);_cleanupTransitionEnd;constructor(){let e=v(S),t=v(i);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(da),e.add(ua)}deactivate(){this._elementRef.nativeElement.classList.add(da)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(da);e.propertyName===`opacity`&&n&&t.remove(ua,da)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return e})(),pa=(()=>{class e{_elementRef=v(A);_ngZone=v(S);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||e)};static ɵcmp=ie({type:e,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(e,t){if(e&1&&Ue(Gi,5),e&2){let e;k(e=p())&&(t._notch=e.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(e,t){e&2&&u(`mdc-notched-outline--notched`,t.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:Ki,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(e,t){e&1&&(ge(),le(0,`div`,1),o(1,`div`,2,0),E(3),et(),le(4,`div`,3))},encapsulation:2})}return e})(),ma=(()=>{class e{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e})}return e})(),ha=new O(`MatFormField`),ga=new O(`MAT_FORM_FIELD_DEFAULT_OPTIONS`),_a=`fill`,va=`auto`,ya=`fixed`,ba=`translateY(-50%)`,xa=(()=>{class e{_elementRef=v(A);_changeDetectorRef=v(Ne);_platform=v(pt);_idGenerator=v(it);_ngZone=v(S);_defaults=v(ga,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=xe(`iconPrefixContainer`);_textPrefixContainerSignal=xe(`textPrefixContainer`);_iconSuffixContainerSignal=xe(`iconSuffixContainer`);_textSuffixContainerSignal=xe(`textSuffixContainer`);_prefixSuffixContainers=I(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=qe(ea);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ct(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||va}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||_a;this._appearanceSignal.set(t)}_appearanceSignal=h(_a);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ya}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ya}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new x;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=xt();constructor(){let e=this._defaults,t=v(ct);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ke(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=I(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,n=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(he([void 0,void 0]),ae(()=>[t.errorState,t.userAriaDescribedBy]),be(),Se(([[e,t],[n,r]])=>e!==n||t!==r)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ze(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),c(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){Ce({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=I(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let t=this._hintChildren?this._hintChildren.find(e=>e.align===`start`):null,n=this._hintChildren?this._hintChildren.find(e=>e.align===`end`):null;t?e.push(t.id):this._hintLabel&&e.push(this._hintLabelId),n&&e.push(n.id)}else this._errorChildren&&e.push(...this._errorChildren.map(e=>e.id));let t=this._control.describedByIds,n;if(t){let r=this._describedByIds||e;n=e.concat(t.filter(e=>e&&!r.includes(e)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,i=e?.getBoundingClientRect().width??0,a=t?.getBoundingClientRect().width??0,o=n?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${ba} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${i+a}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,i+a+o+s]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||e)};static ɵcmp=ie({type:e,selectors:[[`mat-form-field`]],contentQueries:function(e,n,i){if(e&1&&(Oe(i,n._labelChild,ea,5),r(i,ma,5)(i,ia,5)(i,oa,5)(i,ta,5)(i,ra,5)),e&2){t();let e;k(e=p())&&(n._formFieldControl=e.first),k(e=p())&&(n._prefixChildren=e),k(e=p())&&(n._suffixChildren=e),k(e=p())&&(n._errorChildren=e),k(e=p())&&(n._hintChildren=e)}},viewQuery:function(e,n){if(e&1&&(we(n._iconPrefixContainerSignal,qi,5)(n._textPrefixContainerSignal,Ji,5)(n._iconSuffixContainerSignal,Yi,5)(n._textSuffixContainerSignal,Xi,5),Ue(Zi,5)(qi,5)(Ji,5)(Yi,5)(Xi,5)(la,5)(pa,5)(fa,5)),e&2){t(4);let e;k(e=p())&&(n._textField=e.first),k(e=p())&&(n._iconPrefixContainer=e.first),k(e=p())&&(n._textPrefixContainer=e.first),k(e=p())&&(n._iconSuffixContainer=e.first),k(e=p())&&(n._textSuffixContainer=e.first),k(e=p())&&(n._floatingLabel=e.first),k(e=p())&&(n._notchedOutline=e.first),k(e=p())&&(n._lineRipple=e.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(e,t){e&2&&u(`mat-mdc-form-field-label-always-float`,t._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,t._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,t._hasIconSuffix)(`mat-form-field-invalid`,t._control.errorState)(`mat-form-field-disabled`,t._control.disabled)(`mat-form-field-autofilled`,t._control.autofilled)(`mat-form-field-appearance-fill`,t.appearance==`fill`)(`mat-form-field-appearance-outline`,t.appearance==`outline`)(`mat-form-field-hide-placeholder`,t._hasFloatingLabel()&&!t._shouldLabelFloat())(`mat-primary`,t.color!==`accent`&&t.color!==`warn`)(`mat-accent`,t.color===`accent`)(`mat-warn`,t.color===`warn`)(`ng-untouched`,t._shouldForward(`untouched`))(`ng-touched`,t._shouldForward(`touched`))(`ng-pristine`,t._shouldForward(`pristine`))(`ng-dirty`,t._shouldForward(`dirty`))(`ng-valid`,t._shouldForward(`valid`))(`ng-invalid`,t._shouldForward(`invalid`))(`ng-pending`,t._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[l([{provide:ha,useExisting:e},{provide:ca,useExisting:e}])],ngContentSelectors:$i,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(e,t){if(e&1&&(ge(Qi),Be(0,ki,1,1,`ng-template`,null,0,De),T(2,`div`,6,1),N(`click`,function(e){return t._control.onContainerClick(e)}),j(4,Ai,1,0,`div`,7),T(5,`div`,8),j(6,Ni,2,2,`div`,9),j(7,Pi,3,0,`div`,10),j(8,Fi,3,0,`div`,11),T(9,`div`,12),j(10,Li,1,1,null,13),E(11),w(),j(12,Ri,3,0,`div`,14),j(13,zi,3,0,`div`,15),w(),j(14,Bi,1,0,`div`,16),w(),T(15,`div`,17),j(16,Vi,2,0,`div`,18)(17,Ui,5,1,`div`,19),w()),e&2){let e;F(2),u(`mdc-text-field--filled`,!t._hasOutline())(`mdc-text-field--outlined`,t._hasOutline())(`mdc-text-field--no-label`,!t._hasFloatingLabel())(`mdc-text-field--disabled`,t._control.disabled)(`mdc-text-field--invalid`,t._control.errorState),F(2),b(!t._hasOutline()&&!t._control.disabled?4:-1),F(2),b(t._hasOutline()?6:-1),F(),b(t._hasIconPrefix?7:-1),F(),b(t._hasTextPrefix?8:-1),F(2),b(!t._hasOutline()||t._forceDisplayInfixLabel()?10:-1),F(2),b(t._hasTextSuffix?12:-1),F(),b(t._hasIconSuffix?13:-1),F(),b(t._hasOutline()?-1:14),F(),u(`mat-mdc-form-field-subscript-dynamic-size`,t.subscriptSizing===`dynamic`);let n=t._getSubscriptMessageType();F(),b((e=n)===`error`?16:e===`hint`?17:-1)}},dependencies:[la,pa,tt,fa,ra],styles:[`.mdc-text-field {
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
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
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
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
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
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
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

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
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
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
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
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
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

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
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
  --mat-mdc-form-field-label-offset-x: -16px;
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
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
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
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
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
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
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
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
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
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
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
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
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
`],encapsulation:2})}return e})()})),Ca,wa=e((()=>{M(),Ca=(()=>{class e{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static ɵfac=function(t){return new(t||e)};static ɵprov=re({token:e,factory:e.ɵfac})}return e})()})),Ta,Ea=e((()=>{Ta=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(e,t,n,r,i){this._defaultMatcher=e,this.ngControl=t,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=i}updateErrorState(){let e=this.errorState,t=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,i=n?.isErrorState(r,t)??!1;i!==e&&(this.errorState=i,this._stateChanges.next())}}})),Da,Oa=e((()=>{Sa(),_t(),vt(),M(),Da=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵmod=se({type:e,imports:[gt,xa,ea,na,ra,aa,sa],exports:[xa,ea,ra,na,aa,sa,st]});static ɵinj=$e({imports:[gt,xa,st]})}return e})()})),ka,Aa,ja,Ma,Na=e((()=>{ut(),St(),Bt(),M(),bt(),xi(),pe(),Ci(),Sa(),wa(),Ea(),_t(),Oa(),ka=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`],Aa=new O(`MAT_INPUT_CONFIG`),ja=(()=>{class e{_elementRef=v(A);_platform=v(pt);ngControl=v(W,{optional:!0,self:!0});_autofillMonitor=v(It);_ngZone=v(S);_formField=v(ha,{optional:!0});_renderer=v(i);_uid=v(it).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=v(Aa,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new x;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ct(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(sr.required)??!1}set required(e){this._required=Ct(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&ht().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ct(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>ht().has(e));constructor(){let e=v(qr,{optional:!0}),t=v(fi,{optional:!0}),n=v(Ca),r=v(Si,{optional:!0,self:!0}),i=this._elementRef.nativeElement,a=i.nodeName.toLowerCase();r?oe(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=i,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(i,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new Ta(n,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a===`select`,this._isTextarea=a===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=i.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&ke(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let e=this._elementRef.nativeElement;e.type===`number`?(e.type=`text`,e.setSelectionRange(0,0),e.type=`number`):e.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){ka.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||e)};static ɵdir=y({type:e,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(e,t){e&1&&N(`focus`,function(){return t._focusChanged(!0)})(`blur`,function(){return t._focusChanged(!1)})(`input`,function(){return t._onInput()}),e&2&&(me(`id`,t.id)(`disabled`,t.disabled&&!t.disabledInteractive)(`required`,t.required),C(`name`,t.name||null)(`readonly`,t._getReadonlyAttribute())(`aria-disabled`,t.disabled&&t.disabledInteractive?`true`:null)(`aria-invalid`,t.empty&&t.required?null:t.errorState)(`aria-required`,t.required)(`id`,t.id),u(`mat-input-server`,t._isServer)(`mat-mdc-form-field-textarea-control`,t._isInFormField&&t._isTextarea)(`mat-mdc-form-field-input-control`,t._isInFormField)(`mat-mdc-input-disabled-interactive`,t.disabledInteractive)(`mdc-text-field__input`,t._isInFormField)(`mat-mdc-native-select-inline`,t._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Ae]},exportAs:[`matInput`],features:[l([{provide:ma,useExisting:e}]),ue]})}return e})(),Ma=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵmod=se({type:e,imports:[Da,ja],exports:[ja,Da,zt,st]});static ɵinj=$e({imports:[Da,Da,zt,st]})}return e})()})),Pa,Fa=e((()=>{Pa=`<canvas #canvas width="250" height="8" class="slider"></canvas>

@let cursor = cursorData();
<div class="cursor"
    [style.left]="cursor.horizontalOffset"
    [style.background-color]="cursor.color">
</div>`})),Ia,La=e((()=>{Ia=`:host{cursor:pointer;width:100%;position:relative}:host .slider{border-radius:5px;width:100%;height:8px;display:block}:host .cursor{box-sizing:border-box;pointer-events:none;border:2px solid #fff;border-radius:50%;width:18px;height:18px;position:absolute;top:-5px}`})),Ra,G,za=e((()=>{Ra={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(let e in Ra)Object.freeze(Ra[e]);G=Object.freeze(Ra)}));function K(e,t,n){return Math.min(Math.max(t,e),n)}function Ba(e){let t=Math.round(e).toString(16).toUpperCase();return t.length<2?`0`+t:t}var Va,q,Ha=e((()=>{za(),Va=Object.create(null);for(let e in G)Object.hasOwn(G,e)&&(Va[G[e]]=e);q={to:{},get:{}},q.get=function(e){let t=e.slice(0,3).toLowerCase(),n,r;switch(t){case`hsl`:n=q.get.hsl(e),r=`hsl`;break;case`hwb`:n=q.get.hwb(e),r=`hwb`;break;default:n=q.get.rgb(e),r=`rgb`;break}return n?{model:r,value:n}:null},q.get.rgb=function(e){if(!e)return null;let t=/^#([a-f\d]{3,4})$/i,n=/^#([a-f\d]{6})([a-f\d]{2})?$/i,r=/^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i,i=/^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i,a=/^(\w+)$/,o=[0,0,0,1],s,c,l;if(s=e.match(n)){for(l=s[2],s=s[1],c=0;c<3;c++){let e=c*2;o[c]=Number.parseInt(s.slice(e,e+2),16)}l&&(o[3]=Number.parseInt(l,16)/255)}else if(s=e.match(t)){for(s=s[1],l=s[3],c=0;c<3;c++)o[c]=Number.parseInt(s[c]+s[c],16);l&&(o[3]=Number.parseInt(l+l,16)/255)}else if(s=e.match(r)){for(c=0;c<3;c++)o[c]=Number.parseFloat(s[c+1]);s[4]&&(o[3]=s[5]?Number.parseFloat(s[4])*.01:Number.parseFloat(s[4]))}else if(s=e.match(i)){for(c=0;c<3;c++)o[c]=Math.round(Number.parseFloat(s[c+1])*2.55);s[4]&&(o[3]=s[5]?Number.parseFloat(s[4])*.01:Number.parseFloat(s[4]))}else if(s=e.toLowerCase().match(a))return s[1]===`transparent`?[0,0,0,0]:Object.hasOwn(G,s[1])?(o=G[s[1]].slice(),o[3]=1,o):null;else return null;for(c=0;c<3;c++)o[c]=K(o[c],0,255);return o[3]=K(o[3],0,1),o},q.get.hsl=function(e){if(!e)return null;let t=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);if(t){let e=Number.parseFloat(t[4]);return[(Number.parseFloat(t[1])%360+360)%360,K(Number.parseFloat(t[2]),0,100),K(Number.parseFloat(t[3]),0,100),K(Number.isNaN(e)?1:e,0,1)]}return null},q.get.hwb=function(e){if(!e)return null;let t=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);if(t){let e=Number.parseFloat(t[4]);return[(Number.parseFloat(t[1])%360+360)%360,K(Number.parseFloat(t[2]),0,100),K(Number.parseFloat(t[3]),0,100),K(Number.isNaN(e)?1:e,0,1)]}return null},q.to.hex=function(...e){return`#`+Ba(e[0])+Ba(e[1])+Ba(e[2])+(e[3]<1?Ba(Math.round(e[3]*255)):``)},q.to.rgb=function(...e){return e.length<4||e[3]===1?`rgb(`+Math.round(e[0])+`, `+Math.round(e[1])+`, `+Math.round(e[2])+`)`:`rgba(`+Math.round(e[0])+`, `+Math.round(e[1])+`, `+Math.round(e[2])+`, `+e[3]+`)`},q.to.rgb.percent=function(...e){let t=Math.round(e[0]/255*100),n=Math.round(e[1]/255*100),r=Math.round(e[2]/255*100);return e.length<4||e[3]===1?`rgb(`+t+`%, `+n+`%, `+r+`%)`:`rgba(`+t+`%, `+n+`%, `+r+`%, `+e[3]+`)`},q.to.hsl=function(...e){return e.length<4||e[3]===1?`hsl(`+e[0]+`, `+e[1]+`%, `+e[2]+`%)`:`hsla(`+e[0]+`, `+e[1]+`%, `+e[2]+`%, `+e[3]+`)`},q.to.hwb=function(...e){let t=``;return e.length>=4&&e[3]!==1&&(t=`, `+e[3]),`hwb(`+e[0]+`, `+e[1]+`%, `+e[2]+`%`+t+`)`},q.to.keyword=function(...e){return Va[e.slice(0,3)]}}));function Ua(e){let t=e>.0031308?1.055*e**(1/2.4)-.055:e*12.92;return Math.min(Math.max(0,t),1)}function Wa(e){return e>.04045?((e+.055)/1.055)**2.4:e/12.92}function Ga(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}var Ka,J,Y,qa=e((()=>{za(),Ka={};for(let e of Object.keys(G))Ka[G[e]]=e;J={rgb:{channels:3,labels:`rgb`},hsl:{channels:3,labels:`hsl`},hsv:{channels:3,labels:`hsv`},hwb:{channels:3,labels:`hwb`},cmyk:{channels:4,labels:`cmyk`},xyz:{channels:3,labels:`xyz`},lab:{channels:3,labels:`lab`},oklab:{channels:3,labels:[`okl`,`oka`,`okb`]},lch:{channels:3,labels:`lch`},oklch:{channels:3,labels:[`okl`,`okc`,`okh`]},hex:{channels:1,labels:[`hex`]},keyword:{channels:1,labels:[`keyword`]},ansi16:{channels:1,labels:[`ansi16`]},ansi256:{channels:1,labels:[`ansi256`]},hcg:{channels:3,labels:[`h`,`c`,`g`]},apple:{channels:3,labels:[`r16`,`g16`,`b16`]},gray:{channels:1,labels:[`gray`]}},Y=(6/29)**3;for(let e of Object.keys(J)){if(!(`channels`in J[e]))throw Error(`missing channels property: `+e);if(!(`labels`in J[e]))throw Error(`missing channel labels property: `+e);if(J[e].labels.length!==J[e].channels)throw Error(`channel and label counts mismatch: `+e);let{channels:t,labels:n}=J[e];delete J[e].channels,delete J[e].labels,Object.defineProperty(J[e],"channels",{value:t}),Object.defineProperty(J[e],"labels",{value:n})}J.rgb.hsl=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=a-i,s,c;switch(a){case i:s=0;break;case t:s=(n-r)/o;break;case n:s=2+(r-t)/o;break;case r:s=4+(t-n)/o;break}s=Math.min(s*60,360),s<0&&(s+=360);let l=(i+a)/2;return c=a===i?0:l<=.5?o/(a+i):o/(2-a-i),[s,c*100,l*100]},J.rgb.hsv=function(e){let t,n,r,i,a,o=e[0]/255,s=e[1]/255,c=e[2]/255,l=Math.max(o,s,c),u=l-Math.min(o,s,c),d=function(e){return(l-e)/6/u+1/2};if(u===0)i=0,a=0;else{switch(a=u/l,t=d(o),n=d(s),r=d(c),l){case o:i=r-n;break;case s:i=1/3+t-r;break;case c:i=2/3+n-t;break}i<0?i+=1:i>1&&--i}return[i*360,a*100,l*100]},J.rgb.hwb=function(e){let t=e[0],n=e[1],r=e[2],i=J.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[i,a*100,r*100]},J.rgb.oklab=function(e){let t=Wa(e[0]/255),n=Wa(e[1]/255),r=Wa(e[2]/255),i=Math.cbrt(.4122214708*t+.5363325363*n+.0514459929*r),a=Math.cbrt(.2119034982*t+.6806995451*n+.1073969566*r),o=Math.cbrt(.0883024619*t+.2817188376*n+.6299787005*r),s=.2104542553*i+.793617785*a-.0040720468*o,c=1.9779984951*i-2.428592205*a+.4505937099*o,l=.0259040371*i+.7827717662*a-.808675766*o;return[s*100,c*100,l*100]},J.rgb.cmyk=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255,i=Math.min(1-t,1-n,1-r),a=(1-t-i)/(1-i)||0,o=(1-n-i)/(1-i)||0,s=(1-r-i)/(1-i)||0;return[a*100,o*100,s*100,i*100]},J.rgb.keyword=function(e){let t=Ka[e];if(t)return t;let n=1/0,r;for(let t of Object.keys(G)){let i=G[t],a=Ga(e,i);a<n&&(n=a,r=t)}return r},J.keyword.rgb=function(e){return[...G[e]]},J.rgb.xyz=function(e){let t=Wa(e[0]/255),n=Wa(e[1]/255),r=Wa(e[2]/255),i=t*.4124564+n*.3575761+r*.1804375,a=t*.2126729+n*.7151522+r*.072175,o=t*.0193339+n*.119192+r*.9503041;return[i*100,a*100,o*100]},J.rgb.lab=function(e){let t=J.rgb.xyz(e),n=t[0],r=t[1],i=t[2];return n/=95.047,r/=100,i/=108.883,n=n>Y?n**(1/3):7.787*n+16/116,r=r>Y?r**(1/3):7.787*r+16/116,i=i>Y?i**(1/3):7.787*i+16/116,[116*r-16,500*(n-r),200*(r-i)]},J.hsl.rgb=function(e){let t=e[0]/360,n=e[1]/100,r=e[2]/100,i,a;if(n===0)return a=r*255,[a,a,a];let o=r<.5?r*(1+n):r+n-r*n,s=2*r-o,c=[0,0,0];for(let e=0;e<3;e++)i=t+1/3*-(e-1),i<0&&i++,i>1&&i--,a=6*i<1?s+(o-s)*6*i:2*i<1?o:3*i<2?s+(o-s)*(2/3-i)*6:s,c[e]=a*255;return c},J.hsl.hsv=function(e){let t=e[0],n=e[1]/100,r=e[2]/100,i=n,a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,i*=a<=1?a:2-a;let o=(r+n)/2;return[t,(r===0?2*i/(a+i):2*n/(r+n))*100,o*100]},J.hsv.rgb=function(e){let t=e[0]/60,n=e[1]/100,r=e[2]/100,i=Math.floor(t)%6,a=t-Math.floor(t),o=255*r*(1-n),s=255*r*(1-n*a),c=255*r*(1-n*(1-a));switch(r*=255,i){case 0:return[r,c,o];case 1:return[s,r,o];case 2:return[o,r,c];case 3:return[o,s,r];case 4:return[c,o,r];case 5:return[r,o,s]}},J.hsv.hsl=function(e){let t=e[0],n=e[1]/100,r=e[2]/100,i=Math.max(r,.01),a,o;o=(2-n)*r;let s=(2-n)*i;return a=n*i,a/=s<=1?s:2-s,a||=0,o/=2,[t,a*100,o*100]},J.hwb.rgb=function(e){let t=e[0]/360,n=e[1]/100,r=e[2]/100,i=n+r,a;i>1&&(n/=i,r/=i);let o=Math.floor(6*t),s=1-r;a=6*t-o,o&1&&(a=1-a);let c=n+a*(s-n),l,u,d;switch(o){default:case 6:case 0:l=s,u=c,d=n;break;case 1:l=c,u=s,d=n;break;case 2:l=n,u=s,d=c;break;case 3:l=n,u=c,d=s;break;case 4:l=c,u=n,d=s;break;case 5:l=s,u=n,d=c;break}return[l*255,u*255,d*255]},J.cmyk.rgb=function(e){let t=e[0]/100,n=e[1]/100,r=e[2]/100,i=e[3]/100,a=1-Math.min(1,t*(1-i)+i),o=1-Math.min(1,n*(1-i)+i),s=1-Math.min(1,r*(1-i)+i);return[a*255,o*255,s*255]},J.xyz.rgb=function(e){let t=e[0]/100,n=e[1]/100,r=e[2]/100,i,a,o;return i=t*3.2404542+n*-1.5371385+r*-.4985314,a=t*-.969266+n*1.8760108+r*.041556,o=t*.0556434+n*-.2040259+r*1.0572252,i=Ua(i),a=Ua(a),o=Ua(o),[i*255,a*255,o*255]},J.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];return t/=95.047,n/=100,r/=108.883,t=t>Y?t**(1/3):7.787*t+16/116,n=n>Y?n**(1/3):7.787*n+16/116,r=r>Y?r**(1/3):7.787*r+16/116,[116*n-16,500*(t-n),200*(n-r)]},J.xyz.oklab=function(e){let t=e[0]/100,n=e[1]/100,r=e[2]/100,i=Math.cbrt(.8189330101*t+.3618667424*n-.1288597137*r),a=Math.cbrt(.0329845436*t+.9293118715*n+.0361456387*r),o=Math.cbrt(.0482003018*t+.2643662691*n+.633851707*r),s=.2104542553*i+.793617785*a-.0040720468*o,c=1.9779984951*i-2.428592205*a+.4505937099*o,l=.0259040371*i+.7827717662*a-.808675766*o;return[s*100,c*100,l*100]},J.oklab.oklch=function(e){return J.lab.lch(e)},J.oklab.xyz=function(e){let t=e[0]/100,n=e[1]/100,r=e[2]/100,i=(.999999998*t+.396337792*n+.215803758*r)**3,a=(1.000000008*t-.105561342*n-.063854175*r)**3,o=(1.000000055*t-.089484182*n-1.291485538*r)**3,s=1.227013851*i-.55779998*a+.281256149*o,c=-.040580178*i+1.11225687*a-.071676679*o,l=-.076381285*i-.421481978*a+1.58616322*o;return[s*100,c*100,l*100]},J.oklab.rgb=function(e){let t=e[0]/100,n=e[1]/100,r=e[2]/100,i=(t+.3963377774*n+.2158037573*r)**3,a=(t-.1055613458*n-.0638541728*r)**3,o=(t-.0894841775*n-1.291485548*r)**3,s=Ua(4.0767416621*i-3.3077115913*a+.2309699292*o),c=Ua(-1.2684380046*i+2.6097574011*a-.3413193965*o),l=Ua(-.0041960863*i-.7034186147*a+1.707614701*o);return[s*255,c*255,l*255]},J.oklch.oklab=function(e){return J.lch.lab(e)},J.lab.xyz=function(e){let t=e[0],n=e[1],r=e[2],i,a,o;a=(t+16)/116,i=n/500+a,o=a-r/200;let s=a**3,c=i**3,l=o**3;return a=s>Y?s:(a-16/116)/7.787,i=c>Y?c:(i-16/116)/7.787,o=l>Y?l:(o-16/116)/7.787,i*=95.047,a*=100,o*=108.883,[i,a,o]},J.lab.lch=function(e){let t=e[0],n=e[1],r=e[2],i;return i=Math.atan2(r,n)*360/2/Math.PI,i<0&&(i+=360),[t,Math.sqrt(n*n+r*r),i]},J.lch.lab=function(e){let t=e[0],n=e[1],r=e[2]/360*2*Math.PI;return[t,n*Math.cos(r),n*Math.sin(r)]},J.rgb.ansi16=function(e,t=null){let[n,r,i]=e,a=t===null?J.rgb.hsv(e)[2]:t;if(a=Math.round(a/50),a===0)return 30;let o=30+(Math.round(i/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(o+=60),o},J.hsv.ansi16=function(e){return J.rgb.ansi16(J.hsv.rgb(e),e[2])},J.rgb.ansi256=function(e){let t=e[0],n=e[1],r=e[2];return t>>4==n>>4&&n>>4==r>>4?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},J.ansi16.rgb=function(e){e=e[0];let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];let n=(Math.trunc(e>50)+1)*.5;return[(t&1)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},J.ansi256.rgb=function(e){if(e=e[0],e>=232){let t=(e-232)*10+8;return[t,t,t]}e-=16;let t;return[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},J.rgb.hex=function(e){let t=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return`000000`.slice(t.length)+t},J.hex.rgb=function(e){let t=e.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=[...n].map(e=>e+e).join(``));let r=Number.parseInt(n,16);return[r>>16&255,r>>8&255,r&255]},J.rgb.hcg=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255,i=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),o=i-a,s,c=o<1?a/(1-o):0;return s=o<=0?0:i===t?(n-r)/o%6:i===n?2+(r-t)/o:4+(t-n)/o,s/=6,s%=1,[s*360,o*100,c*100]},J.hsl.hcg=function(e){let t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n),i=0;return r<1&&(i=(n-.5*r)/(1-r)),[e[0],r*100,i*100]},J.hsv.hcg=function(e){let t=e[1]/100,n=e[2]/100,r=t*n,i=0;return r<1&&(i=(n-r)/(1-r)),[e[0],r*100,i*100]},J.hcg.rgb=function(e){let t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];let i=[0,0,0],a=t%1*6,o=a%1,s=1-o,c=0;switch(Math.floor(a)){case 0:i[0]=1,i[1]=o,i[2]=0;break;case 1:i[0]=s,i[1]=1,i[2]=0;break;case 2:i[0]=0,i[1]=1,i[2]=o;break;case 3:i[0]=0,i[1]=s,i[2]=1;break;case 4:i[0]=o,i[1]=0,i[2]=1;break;default:i[0]=1,i[1]=0,i[2]=s}return c=(1-n)*r,[(n*i[0]+c)*255,(n*i[1]+c)*255,(n*i[2]+c)*255]},J.hcg.hsv=function(e){let t=e[1]/100,n=t+e[2]/100*(1-t),r=0;return n>0&&(r=t/n),[e[0],r*100,n*100]},J.hcg.hsl=function(e){let t=e[1]/100,n=e[2]/100*(1-t)+.5*t,r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],r*100,n*100]},J.hcg.hwb=function(e){let t=e[1]/100,n=t+e[2]/100*(1-t);return[e[0],(n-t)*100,(1-n)*100]},J.hwb.hcg=function(e){let t=e[1]/100,n=1-e[2]/100,r=n-t,i=0;return r<1&&(i=(n-r)/(1-r)),[e[0],r*100,i*100]},J.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},J.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},J.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},J.gray.hsl=function(e){return[0,0,e[0]]},J.gray.hsv=J.gray.hsl,J.gray.hwb=function(e){return[0,100,e[0]]},J.gray.cmyk=function(e){return[0,0,0,e[0]]},J.gray.lab=function(e){return[e[0],0,0]},J.gray.hex=function(e){let t=Math.round(e[0]/100*255)&255,n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return`000000`.slice(n.length)+n},J.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}}));function Ja(){let e={},t=Object.keys(J);for(let{length:n}=t,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}function Ya(e){let t=Ja(),n=[e];for(t[e].distance=0;n.length>0;){let e=n.pop(),r=Object.keys(J[e]);for(let{length:i}=r,a=0;a<i;a++){let i=r[a],o=t[i];o.distance===-1&&(o.distance=t[e].distance+1,o.parent=e,n.unshift(i))}}return t}function Xa(e,t){return function(n){return t(e(n))}}function Za(e,t){let n=[t[e].parent,e],r=J[t[e].parent][e],i=t[e].parent;for(;t[i].parent;)n.unshift(t[i].parent),r=Xa(J[t[i].parent][i],r),i=t[i].parent;return r.conversion=n,r}function Qa(e){let t=Ya(e),n={},r=Object.keys(t);for(let{length:e}=r,i=0;i<e;i++){let e=r[i];t[e].parent!==null&&(n[e]=Za(e,t))}return n}var $a=e((()=>{qa()}));function eo(e){let t=function(...t){let n=t[0];return n==null?n:(n.length>1&&(t=n),e(t))};return`conversion`in e&&(t.conversion=e.conversion),t}function to(e){let t=function(...t){let n=t[0];if(n==null)return n;n.length>1&&(t=n);let r=e(t);if(typeof r==`object`)for(let{length:e}=r,t=0;t<e;t++)r[t]=Math.round(r[t]);return r};return`conversion`in e&&(t.conversion=e.conversion),t}var X,no,ro=e((()=>{qa(),$a(),X={},no=Object.keys(J);for(let e of no){X[e]={},Object.defineProperty(X[e],"channels",{value:J[e].channels}),Object.defineProperty(X[e],"labels",{value:J[e].labels});let t=Qa(e),n=Object.keys(t);for(let r of n){let n=t[r];X[e][r]=to(n),X[e][r].raw=eo(n)}}}));function Z(e,t){if(!(this instanceof Z))return new Z(e,t);if(t&&t in co&&(t=null),t&&!(t in X))throw Error(`Unknown model: `+t);let n,r;if(e==null)this.model=`rgb`,this.color=[0,0,0],this.valpha=1;else if(e instanceof Z)this.model=e.model,this.color=[...e.color],this.valpha=e.valpha;else if(typeof e==`string`){let t=q.get(e);if(t===null)throw Error(`Unable to parse color from string: `+e);this.model=t.model,r=X[this.model].channels,this.color=t.value.slice(0,r),this.valpha=typeof t.value[r]==`number`?t.value[r]:1}else if(e.length>0){this.model=t||`rgb`,r=X[this.model].channels;let n=Array.prototype.slice.call(e,0,r);this.color=so(n,r),this.valpha=typeof e[r]==`number`?e[r]:1}else if(typeof e==`number`)this.model=`rgb`,this.color=[e>>16&255,e>>8&255,e&255],this.valpha=1;else{this.valpha=1;let t=Object.keys(e);`alpha`in e&&(t.splice(t.indexOf(`alpha`),1),this.valpha=typeof e.alpha==`number`?e.alpha:0);let r=t.sort().join(``);if(!(r in lo))throw Error(`Unable to parse color from object: `+JSON.stringify(e));this.model=lo[r];let{labels:i}=X[this.model],a=[];for(n=0;n<i.length;n++)a.push(e[i[n]]);this.color=so(a)}if(uo[this.model])for(r=X[this.model].channels,n=0;n<r;n++){let e=uo[this.model][n];e&&(this.color[n]=e(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function io(e,t){return Number(e.toFixed(t))}function ao(e){return function(t){return io(t,e)}}function Q(e,t,n){e=Array.isArray(e)?e:[e];for(let r of e)(uo[r]||=[])[t]=n;return e=e[0],function(r){let i;return r===void 0?(i=this[e]().color[t],n&&(i=n(i)),i):(n&&(r=n(r)),i=this[e](),i.color[t]=r,i)}}function $(e){return function(t){return Math.max(0,Math.min(e,t))}}function oo(e){return Array.isArray(e)?e:[e]}function so(e,t){for(let n=0;n<t;n++)typeof e[n]!=`number`&&(e[n]=0);return e}var co,lo,uo,fo=e((()=>{Ha(),ro(),co=[`keyword`,`gray`,`hex`],lo={};for(let e of Object.keys(X))lo[[...X[e].labels].sort().join(``)]=e;uo={},Z.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in q.to?this:this.rgb();t=t.round(typeof e==`number`?e:1);let n=t.valpha===1?t.color:[...t.color,this.valpha];return q.to[t.model](...n)},percentString(e){let t=this.rgb().round(typeof e==`number`?e:1),n=t.valpha===1?t.color:[...t.color,this.valpha];return q.to.rgb.percent(...n)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){let e={},{channels:t}=X[this.model],{labels:n}=X[this.model];for(let r=0;r<t;r++)e[n[r]]=this.color[r];return this.valpha!==1&&(e.alpha=this.valpha),e},unitArray(){let e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,this.valpha!==1&&e.push(this.valpha),e},unitObject(){let e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,this.valpha!==1&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new Z([...this.color.map(ao(e)),this.valpha],this.model)},alpha(e){return e===void 0?this.valpha:new Z([...this.color,Math.max(0,Math.min(1,e))],this.model)},red:Q(`rgb`,0,$(255)),green:Q(`rgb`,1,$(255)),blue:Q(`rgb`,2,$(255)),hue:Q([`hsl`,`hsv`,`hsl`,`hwb`,`hcg`],0,e=>(e%360+360)%360),saturationl:Q(`hsl`,1,$(100)),lightness:Q(`hsl`,2,$(100)),saturationv:Q(`hsv`,1,$(100)),value:Q(`hsv`,2,$(100)),chroma:Q(`hcg`,1,$(100)),gray:Q(`hcg`,2,$(100)),white:Q(`hwb`,1,$(100)),wblack:Q(`hwb`,2,$(100)),cyan:Q(`cmyk`,0,$(100)),magenta:Q(`cmyk`,1,$(100)),yellow:Q(`cmyk`,2,$(100)),black:Q(`cmyk`,3,$(100)),x:Q(`xyz`,0,$(95.047)),y:Q(`xyz`,1,$(100)),z:Q(`xyz`,2,$(108.833)),l:Q(`lab`,0,$(100)),a:Q(`lab`,1),b:Q(`lab`,2),keyword(e){return e===void 0?X[this.model].keyword(this.color):new Z(e)},hex(e){return e===void 0?q.to.hex(...this.rgb().round().color):new Z(e)},hexa(e){if(e!==void 0)return new Z(e);let t=this.rgb().round().color,n=Math.round(this.valpha*255).toString(16).toUpperCase();return n.length===1&&(n=`0`+n),q.to.hex(...t)+n},rgbNumber(){let e=this.rgb().color;return(e[0]&255)<<16|(e[1]&255)<<8|e[2]&255},luminosity(){let e=this.rgb().color,t=[];for(let[n,r]of e.entries()){let e=r/255;t[n]=e<=.04045?e/12.92:((e+.055)/1.055)**2.4}return .2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(e){let t=this.luminosity(),n=e.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)},level(e){let t=this.contrast(e);return t>=7?`AAA`:t>=4.5?`AA`:``},isDark(){let e=this.rgb().color;return(e[0]*2126+e[1]*7152+e[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){let e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){let t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){let t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){let t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){let t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){let t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){let t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){let e=this.rgb().color,t=e[0]*.3+e[1]*.59+e[2]*.11;return Z.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){let t=this.hsl(),n=t.color[0];return n=(n+e)%360,n=n<0?360+n:n,t.color[0]=n,t},mix(e,t){if(!e||!e.rgb)throw Error(`Argument to "mix" was not a Color instance, but rather an instance of `+typeof e);let n=e.rgb(),r=this.rgb(),i=t===void 0?.5:t,a=2*i-1,o=n.alpha()-r.alpha(),s=((a*o===-1?a:(a+o)/(1+a*o))+1)/2,c=1-s;return Z.rgb(s*n.red()+c*r.red(),s*n.green()+c*r.green(),s*n.blue()+c*r.blue(),n.alpha()*i+r.alpha()*(1-i))}};for(let e of Object.keys(X)){if(co.includes(e))continue;let{channels:t}=X[e];Z.prototype[e]=function(...t){return this.model===e?new Z(this):t.length>0?new Z(t,e):new Z([...oo(X[this.model][e].raw(this.color)),this.valpha],e)},Z[e]=function(...n){let r=n[0];return typeof r==`number`&&(r=so(n,t)),new Z(r,e)}}})),po,mo=e((()=>{He(),Fa(),La(),M(),fo(),po=class{constructor(){this.value=_e(),this.canvas=xe.required(`canvas`),this.cursorData=I(()=>{let e=this.canvas()?.nativeElement.getBoundingClientRect().width??1;return this.computeCursorData(this.value(),e)}),this.destroyRef=v(Me),this.isDragging=!1,this.onMouseDown=e=>{this.isDragging=!0,document.body.style.cursor=`pointer`,this.onSliderMouseInteraction(e)},this.onMouseUp=()=>{this.isDragging=!1,document.body.style.cursor=``},this.onMouseMove=e=>{this.isDragging&&this.onSliderMouseInteraction(e)}}onSliderMouseInteraction(e){let t=this.canvas().nativeElement.getBoundingClientRect(),n=(e.clientX-t.x)/t.width;this.value.set(Math.max(0,Math.min(1,n)))}ngAfterViewInit(){this.drawSliderCanvas(),this.canvas().nativeElement.addEventListener(`mousedown`,this.onMouseDown),window.addEventListener(`mouseup`,this.onMouseUp),window.addEventListener(`mousemove`,this.onMouseMove),this.destroyRef.onDestroy(()=>{this.canvas().nativeElement.removeEventListener(`mousedown`,this.onMouseDown),window.removeEventListener(`mouseup`,this.onMouseUp),window.removeEventListener(`mousemove`,this.onMouseMove)})}drawSliderCanvas(){let e=this.canvas().nativeElement.getContext(`2d`),t={height:this.canvas().nativeElement.height,width:this.canvas().nativeElement.width},n=e.createLinearGradient(0,0,t.width,0);for(let e=0;e<=20;++e){let t=1/20*e;n.addColorStop(t,Z({h:t*360,s:100,v:100}).hex())}e.fillStyle=n,e.fillRect(0,0,t.width,t.height)}computeCursorData(e,t){let n=t*e-8,r=Z({h:e*360,s:100,v:100}).hex();return{horizontalOffset:`${n}px`,color:r}}static{this.propDecorators={value:[{type:_,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:m,args:[`valueChange`]}],canvas:[{type:Ve,args:[`canvas`,{isSignal:!0}]}]}}},po=Fe([d({selector:`app-color-slider`,template:Pa,styles:[Ia]})],po)})),ho,go=e((()=>{ho=`<canvas #canvas class="panel" width="250" height="150">
</canvas>

@let cursor = cursorData();
<div class="cursor"
    [style.left]="cursor.horizontalOffset"
    [style.top]="cursor.verticalOffset"
    [style.background-color]="cursor.color">
</div>`})),_o,vo=e((()=>{_o=`:host{cursor:pointer;display:block;position:relative;overflow:hidden}:host .panel{width:100%;display:block}:host .cursor{box-sizing:border-box;pointer-events:none;border:2px solid #fff;border-radius:50%;width:18px;height:18px;position:absolute}`})),yo,bo=e((()=>{He(),go(),vo(),M(),fo(),yo=class{constructor(){this.hValue=Te.required(),this.sValue=_e.required(),this.vValue=_e.required(),this.colorChange=Ze(),this.canvas=xe.required(`canvas`),this.cursorData=I(()=>this.computeCursorData()),this.destroyRef=v(Me),this.isDragging=!1,this.onMouseDown=e=>{this.isDragging=!0,document.body.style.cursor=`pointer`,this.onCanvasMouseInteraction(e)},this.onMouseUp=()=>{this.isDragging=!1,document.body.style.cursor=``},this.onMouseMove=e=>{this.isDragging&&this.onCanvasMouseInteraction(e)},ke(()=>this.drawColorCanvas())}onCanvasMouseInteraction(e){let t=this.canvas().nativeElement.getBoundingClientRect(),n=(e.clientX-t.x)/t.width,r=(e.clientY-t.y)/t.height;this.sValue.set(Math.min(1,Math.max(0,n))),this.vValue.set(Math.min(1,Math.max(0,1-r))),this.colorChange.emit(Z({h:this.hValue()*360,s:this.sValue()*100,v:this.vValue()*100}))}ngAfterViewInit(){this.canvas().nativeElement.addEventListener(`mousedown`,this.onMouseDown),window.addEventListener(`mouseup`,this.onMouseUp),window.addEventListener(`mousemove`,this.onMouseMove),this.destroyRef.onDestroy(()=>{this.canvas().nativeElement.addEventListener(`mousedown`,this.onMouseDown),window.addEventListener(`mouseup`,this.onMouseUp),window.addEventListener(`mousemove`,this.onMouseMove)})}drawColorCanvas(){let e={height:this.canvas().nativeElement.height,width:this.canvas().nativeElement.width},t=this.canvas().nativeElement.getContext(`2d`),n=t.createLinearGradient(0,0,e.width,0);n.addColorStop(0,`#FFFFFF`);let r=Z({h:this.hValue()*360,s:100,v:100}).hex();n.addColorStop(1,r);let i=t.createLinearGradient(0,0,0,e.height);i.addColorStop(0,`#00000000`),i.addColorStop(1,`#000000`),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),t.fillStyle=i,t.fillRect(0,0,e.width,e.height)}computeCursorData(){let e=this.canvas().nativeElement.getBoundingClientRect(),t=e.width*this.sValue()-8,n=e.height*(1-this.vValue())-8;return{horizontalOffset:`${t}px`,verticalOffset:`${n}px`,color:Z({h:this.hValue()*360,s:this.sValue()*100,v:this.vValue()*100}).hex()}}static{this.ctorParameters=()=>[]}static{this.propDecorators={hValue:[{type:_,args:[{isSignal:!0,alias:`hValue`,required:!0,transform:void 0}]}],sValue:[{type:_,args:[{isSignal:!0,alias:`sValue`,required:!0}]},{type:m,args:[`sValueChange`]}],vValue:[{type:_,args:[{isSignal:!0,alias:`vValue`,required:!0}]},{type:m,args:[`vValueChange`]}],colorChange:[{type:m,args:[`colorChange`]}],canvas:[{type:Ve,args:[`canvas`,{isSignal:!0}]}]}}},yo=Fe([d({selector:`app-color-canvas`,template:ho,styles:[_o]})],yo)})),xo,So,Co=e((()=>{He(),jt(),Nt(),M(),Na(),xi(),mo(),bo(),fo(),xo=/^#([0-9a-f]{3}){1,2}$/i,So=class{constructor(){this.color=Te.required({transform:e=>Z(e)}),this.colorChange=Ze(),this.hValue=s({source:this.color,computation:e=>e.hue()/360}),this.sValue=s({source:this.color,computation:e=>e.saturationv()/100}),this.vValue=s({source:this.color,computation:e=>e.value()/100}),this.hexColor=I(()=>Z({h:this.hValue()*360,s:this.sValue()*100,v:this.vValue()*100}).hex())}ngOnDestroy(){let e=Z({h:this.hValue()*360,s:this.sValue()*100,v:this.vValue()*100});this.colorChange.emit(e)}onHexCodeChange(e){let t=e.currentTarget;if(xo.test(t.value)){let e=Z(t.value);this.hValue.set(e.hue()/360),this.sValue.set(e.saturationv()/100),this.vValue.set(e.value()/100)}}onColorCanvasChanged(e){this.sValue.set(e.saturationv()/100),this.vValue.set(e.value()/100)}static{this.propDecorators={color:[{type:_,args:[{isSignal:!0,alias:`color`,required:!0,transform:void 0}]}],colorChange:[{type:m,args:[`colorChange`]}]}}},So=Fe([d({selector:`app-color-selection-panel`,imports:[Ma,bi,po,yo],template:At,styles:[Mt]})],So)})),wo,To=e((()=>{He(),Dt(),kt(),M(),Tt(),Co(),xi(),wo=class{constructor(){this.label=Te.required(),this.value=_e(`#000000`),this.disabled=_e(!1),this.isOpen=h(!1),this.onChange=()=>{},this.onTouched=()=>{},this.valueChangedEffect=ke(()=>{this.onChange(this.value())})}toggleColorPanel(){this.disabled()||this.isOpen.update(e=>!e)}onColorChanged(e){this.value.set(e.hex())}writeValue(e){this.value.set(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled.set(e)}static{this.propDecorators={label:[{type:_,args:[{isSignal:!0,alias:`label`,required:!0,transform:void 0}]}],value:[{type:_,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:m,args:[`valueChange`]}],disabled:[{type:_,args:[{isSignal:!0,alias:`disabled`,required:!1}]},{type:m,args:[`disabledChange`]}]}}},wo=Fe([d({selector:`app-color-picker`,imports:[wt,So],providers:[{provide:z,useExisting:n(()=>wo),multi:!0}],template:Et,styles:[Ot]})],wo)})),Eo,Do,Oo;e((()=>{To(),Eo={title:`Komponenty/Color Picker`,component:wo,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},label:{control:`text`},value:{control:`color`}}},Do={args:{disabled:!1,label:`Wybierz kolor`,value:`#2c96d3`}},Oo=[`Default`]}))();export{Do as Default,Oo as __namedExportsOrder,Eo as default};