import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Hr as t,Ir as n,R as r,W as i,Yn as a,b as o,h as s,j as c,m as l,v as u,zn as d}from"./core-CEfZiV_p.js";import{a as f,c as p}from"./iframe-Cos8sygO.js";import{n as m,t as h}from"./icon-CKJKpEQ5.js";import{n as g,t as _}from"./flat-button-Dcu53z3_.js";import{a as v,i as y,n as b,o as x,r as S,s as C,t as w}from"./form-field-CREXI-Da.js";import{i as T,n as E,o as D,s as O}from"./signals-CAPhiivB.js";var k;function A(){return(A=e((()=>{k=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var j;function M(){return(M=e((()=>{t(),A(),l(),x(),b(),j=class{touch=o();value=u(``);label=s(``);disabled=s(!1);required=s(!1);placeholder=s(``);invalid=s(!1);touched=s(!1);identifier=C(e=>`ids-text-input-${e}`);static propDecorators={touch:[{type:i,args:[`touch`]}],value:[{type:r,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:i,args:[`valueChange`]}],label:[{type:r,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:r,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:r,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:r,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:r,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:r,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},j=n([c({selector:`ids-text-input`,imports:[w],hostDirectives:[v],template:`
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
    `,styles:[k]})],j)})))()}var N,P,F,I;function L(){return(L=e((()=>{t(),m(),f(),l(),T(),y(),g(),M(),N=class{value=s(``);label=s(``);placeholder=s(``);disabled=s(!1);required=s(!1);showPrefix=s(!1);showSuffix=s(!1);model=a({value:``});form=O(this.model,e=>{D(e.value,{message:`Pole jest wymagane`,when:()=>this.required()})});constructor(){d(()=>this.model.set({value:this.value()}))}static ctorParameters=()=>[];static propDecorators={value:[{type:r,args:[{isSignal:!0,alias:`value`,required:!1,transform:void 0}]}],label:[{type:r,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],placeholder:[{type:r,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],disabled:[{type:r,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:r,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],showPrefix:[{type:r,args:[{isSignal:!0,alias:`showPrefix`,required:!1,transform:void 0}]}],showSuffix:[{type:r,args:[{isSignal:!0,alias:`showSuffix`,required:!1,transform:void 0}]}]}},N=n([c({selector:`ids-text-input-story`,imports:[j,_,h,E,S],template:`
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
    `})],N),P={title:`Design System/Text Input`,component:j,tags:[`autodocs`],decorators:[p({imports:[N]})],argTypes:{label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},value:{control:`text`,table:{category:`Playground`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}}}},F={args:{value:`Example`,label:`Label`,placeholder:`Lorem Ipsum`,disabled:!1,required:!1,showPrefix:!1,showSuffix:!1},render:e=>({props:e,template:`
            <ids-text-input-story
                [value]="value"
                [label]="label"
                [placeholder]="placeholder"
                [disabled]="disabled"
                [required]="required"
                [showPrefix]="showPrefix"
                [showSuffix]="showSuffix"
            />
        `})},I=[`Default`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}}})))()}L();export{F as Default,I as __namedExportsOrder,P as default};