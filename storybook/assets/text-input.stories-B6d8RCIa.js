import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Hr as t,Ir as n,P as r,R as i,W as a,Wn as o,Yn as s,Z as c,b as l,h as u,j as d,m as f,v as p,zn as m}from"./core-CEfZiV_p.js";import{a as h,c as g}from"./iframe-CcuyKnyp.js";import{n as _,t as v}from"./icon-D3vzWDKc.js";import{n as y,t as b}from"./flat-button-Dcu53z3_.js";import{a as x,n as S,o as C,r as w}from"./signals-BfZfGXwR.js";var T;function E(){return(E=e((()=>{T=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var D;function O(){return(O=e((()=>{D=`:host .ids-form-field-label{pointer-events:none;margin-bottom:8px;font-size:14px;font-weight:500;display:block}:host .ids-form-field-label[data-required]:after{content:"*";margin-inline-start:.125rem}:host .ids-form-field-frame{border:1px solid var(--ids-form-control-border-color);height:2.5rem;box-shadow:var(--ids-form-field-shadow);background-color:var(--ids-form-control-surface-color);border-radius:var(--ids-radius-medium);align-items:center;gap:.5rem;padding:.5rem 1rem;transition:box-shadow .25s;display:flex}:host .ids-form-field-frame .ids-form-field-control{flex:auto;min-width:0;display:grid}:host .ids-form-field-frame .ids-form-field-control .ids-form-field-placeholder{opacity:.5;pointer-events:none;text-wrap:nowrap;text-overflow:ellipsis;overflow:hidden}:host .ids-form-field-frame .ids-form-field-control>*{grid-area:1/1}:host .ids-form-field-errors{margin-top:8px}:host:has(.input:disabled) .ids-form-field-frame{opacity:.5;pointer-events:none}:host(.ids-text-input--invalid){--ids-form-field-shadow:0 0 0 1px color-mix(in srgb, var(--ids-color-danger) 60%, transparent), 0 2px 6px 2px color-mix(in srgb, var(--ids-color-danger) var(--ids-shadow-strength-faint), transparent)}:host(.ids-text-input--invalid) :has(.input:hover:not(:disabled):not(:focus)){--ids-form-field-shadow:0 0 0 1px color-mix(in srgb, var(--ids-color-danger) 80%, transparent), 0 2px 6px 4px color-mix(in srgb, var(--ids-color-danger) var(--ids-shadow-strength-faint), transparent)}:host(.ids-text-input--invalid) :has(.input:focus:not(:disabled)){--ids-form-field-shadow:0 0 0 1px var(--ids-color-danger), 0 2px 6px 4px color-mix(in srgb, var(--ids-color-danger) var(--ids-shadow-strength-subtle), transparent)}:host:not(.ids-text-input--invalid) :has(.input:hover:not(:disabled):not(:focus)){--ids-form-field-shadow:0 0 0 1px color-mix(in srgb, var(--ids-color-highlight) 60%, transparent), 0 2px 6px 4px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-faint), transparent)}:host:not(.ids-text-input--invalid) :has(.input:focus:not(:disabled)){--ids-form-field-shadow:0 0 0 1px var(--ids-color-highlight), 0 2px 6px 4px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-subtle), transparent)}`})))()}var k;function A(){return(A=e((()=>{t(),O(),f(),k=class{label=u.required();required=u.required();placeholder=u.required();id=u.required();isEmpty=u.required();showError=u.required();static propDecorators={label:[{type:i,args:[{isSignal:!0,alias:`label`,required:!0,transform:void 0}]}],required:[{type:i,args:[{isSignal:!0,alias:`required`,required:!0,transform:void 0}]}],placeholder:[{type:i,args:[{isSignal:!0,alias:`placeholder`,required:!0,transform:void 0}]}],id:[{type:i,args:[{isSignal:!0,alias:`id`,required:!0,transform:void 0}]}],isEmpty:[{type:i,args:[{isSignal:!0,alias:`isEmpty`,required:!0,transform:void 0}]}],showError:[{type:i,args:[{isSignal:!0,alias:`showError`,required:!0,transform:void 0}]}]}},k=n([d({selector:`ids-form-field`,template:`
        @let labelValue = label();
        @if (labelValue) {
            <label class="ids-form-field-label" [for]="id()" [attr.data-required]="required() ? '' : null">{{ labelValue }}</label>
        }
        <div class="ids-form-field-frame">
            <ng-content select="[idsPrefix]" />
            <div class="ids-form-field-control">
                @if (isEmpty()) {
                    <span class="ids-form-field-placeholder">{{ placeholder() }}</span>
                }
                <span class="ids-form-field-input"><ng-content /></span>
            </div>
            <ng-content select="[idsSuffix]" />
        </div>

        @if (showError()) {
            <div class="ids-form-field-errors">
                <ng-content select="ids-error" />
            </div>
        }
    `,host:{"[class.ids-text-input--invalid]":`showError()`},styles:[D]})],k)})))()}var j;function M(){return(M=e((()=>{t(),f(),j=class{counter=0;getNextIdNumber(){return this.counter+=1,this.counter}},j=n([c()],j)})))()}function N(e){return o(P).getIdentifier(e)}var P;function F(){return(F=e((()=>{t(),f(),M(),P=class{counterService=o(j);id=u(void 0);getIdentifier(e){return this.id()||e(this.counterService.getNextIdNumber())}static propDecorators={id:[{type:i,args:[{isSignal:!0,alias:`id`,required:!1,transform:void 0}]}]}},P=n([r({selector:`[idsIdentityGenerator]`})],P)})))()}var I;function L(){return(L=e((()=>{t(),E(),f(),A(),F(),I=class{touch=l();value=p(``);label=u(``);disabled=u(!1);required=u(!1);placeholder=u(``);invalid=u(!1);touched=u(!1);identifier=N(e=>`ids-text-input-${e}`);static propDecorators={touch:[{type:a,args:[`touch`]}],value:[{type:i,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:a,args:[`valueChange`]}],label:[{type:i,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:i,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:i,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:i,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:i,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:i,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},I=n([d({selector:`ids-text-input`,imports:[k],hostDirectives:[P],template:`
        <ids-form-field
            [label]="label()"
            [required]="required()"
            [placeholder]="placeholder()"
            [isEmpty]="!value()"
            [showError]="invalid() && touched() && !disabled()"
            [id]="identifier"
        >
            <ng-content select="[idsPrefix]" ngProjectAs="[idsPrefix]" />
            <input
                [value]="value()"
                (input)="value.set($any($event.target).value)"
                (blur)="touch.emit()"
                [disabled]="disabled()"
                type="text"
                class="input"
                [id]="identifier"
            />
            <ng-content select="[idsSuffix]" ngProjectAs="[idsSuffix]" />
            <ng-content select="ids-error" ngProjectAs="ids-error" />
        </ids-form-field>
    `,styles:[T]})],I)})))()}var R;function z(){return(z=e((()=>{R=`:host{color:var(--ids-text-danger-color);font-size:12px;font-weight:500;display:block}`})))()}var B;function V(){return(V=e((()=>{t(),z(),f(),B=class{},B=n([d({selector:`ids-error`,template:`<ng-content />`,styles:[R]})],B)})))()}var H,U,W,G;function K(){return(K=e((()=>{t(),_(),h(),y(),L(),f(),w(),V(),H=class{value=u(``);label=u(``);placeholder=u(``);disabled=u(!1);required=u(!1);showPrefix=u(!1);showSuffix=u(!1);model=s({value:``});form=C(this.model,e=>{x(e.value,{message:`Pole jest wymagane`,when:()=>this.required()})});constructor(){m(()=>this.model.set({value:this.value()}))}static ctorParameters=()=>[];static propDecorators={value:[{type:i,args:[{isSignal:!0,alias:`value`,required:!1,transform:void 0}]}],label:[{type:i,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],placeholder:[{type:i,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],disabled:[{type:i,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:i,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],showPrefix:[{type:i,args:[{isSignal:!0,alias:`showPrefix`,required:!1,transform:void 0}]}],showSuffix:[{type:i,args:[{isSignal:!0,alias:`showSuffix`,required:!1,transform:void 0}]}]}},H=n([d({selector:`ids-text-input-story`,imports:[I,b,v,S,B],template:`
        <ids-text-input [formField]="form.value" [label]="label()" [placeholder]="placeholder()" [disabled]="disabled()">
            @if (showPrefix()) {
                <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">search</mat-icon>
            }
            @if (showSuffix()) {
                <ids-flat-button idsSuffix class="ids-flat-button--size-small" (clicked)="model.set({ value: '' })">
                    <mat-icon class="material-symbols-outlined">close</mat-icon>
                </ids-flat-button>
            }
            <ids-error>
                @for (err of form.value().errors(); track err.kind) {
                    {{ err.message }}
                }
            </ids-error> 
        </ids-text-input>
    `})],H),U={title:`Design System/Text Input`,component:I,tags:[`autodocs`],decorators:[g({imports:[H]})],argTypes:{label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},value:{control:`text`,table:{category:`Playground`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}}}},W={args:{value:`Example`,label:`Label`,placeholder:`Lorem Ipsum`,disabled:!1,required:!1,showPrefix:!1,showSuffix:!1},render:e=>({props:e,template:`
            <ids-text-input-story
                [value]="value"
                [label]="label"
                [placeholder]="placeholder"
                [disabled]="disabled"
                [required]="required"
                [showPrefix]="showPrefix"
                [showSuffix]="showSuffix"
            />
        `})},G=[`Default`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Example',
    label: 'Label',
    placeholder: 'Lorem Ipsum',
    disabled: false,
    required: false,
    showPrefix: false,
    showSuffix: false
  },
  render: args => ({
    props: args,
    template: \`
            <ids-text-input-story
                [value]="value"
                [label]="label"
                [placeholder]="placeholder"
                [disabled]="disabled"
                [required]="required"
                [showPrefix]="showPrefix"
                [showSuffix]="showSuffix"
            />
        \`
  })
}`,...W.parameters?.docs?.source}}}})))()}K();export{W as Default,G as __namedExportsOrder,U as default};