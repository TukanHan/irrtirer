import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Hr as t,Ir as n,P as r,R as i,W as a,Yn as o,b as s,h as c,j as l,m as u,v as d,zn as f}from"./core-CEfZiV_p.js";import{a as p,c as m}from"./iframe-B37EbMy4.js";import{n as h,t as g}from"./icon-DLwdSA2D.js";import{a as _,i as v,n as y,o as b,r as x,s as S,t as C}from"./form-field-CREXI-Da.js";import{a as w,n as T,o as E,r as D}from"./signals-BfZfGXwR.js";var O,k;function A(){return(A=e((()=>{t(),u(),O=class{},O=n([r({selector:`[idsPrefix]`})],O),k=class{},k=n([r({selector:`[idsSuffix]`})],k)})))()}var j;function M(){return(M=e((()=>{j=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var N;function P(){return(P=e((()=>{t(),M(),u(),b(),y(),N=class{touch=s();value=d(0);label=c(``);disabled=c(!1);required=c(!1);placeholder=c(``);invalid=c(!1);touched=c(!1);identifier=S(e=>`ids-number-input-${e}`);static propDecorators={touch:[{type:a,args:[`touch`]}],value:[{type:i,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:a,args:[`valueChange`]}],label:[{type:i,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:i,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:i,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:i,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:i,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:i,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},N=n([l({selector:`ids-number-input`,imports:[C],hostDirectives:[_],template:` <ids-form-field
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
            type="number"
            class="input"
            [id]="identifier"
        />
        <ng-content select="[idsSuffix]" ngProjectAs="[idsSuffix]" />
        <ng-content select="ids-error" ngProjectAs="ids-error" />
    </ids-form-field>`,styles:[j]})],N)})))()}var F,I,L,R;function z(){return(z=e((()=>{t(),h(),p(),u(),D(),v(),A(),P(),F=class{value=c(0);label=c(``);placeholder=c(``);disabled=c(!1);required=c(!1);showPrefix=c(!1);showSuffix=c(!1);model=o({value:0});form=E(this.model,e=>{w(e.value,{message:`Pole jest wymagane`,when:()=>this.required()})});constructor(){f(()=>this.model.set({value:this.value()}))}static ctorParameters=()=>[];static propDecorators={value:[{type:i,args:[{isSignal:!0,alias:`value`,required:!1,transform:void 0}]}],label:[{type:i,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],placeholder:[{type:i,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],disabled:[{type:i,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:i,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],showPrefix:[{type:i,args:[{isSignal:!0,alias:`showPrefix`,required:!1,transform:void 0}]}],showSuffix:[{type:i,args:[{isSignal:!0,alias:`showSuffix`,required:!1,transform:void 0}]}]}},F=n([l({selector:`ids-number-input-story`,imports:[N,g,T,x,k],template:`
        <ids-number-input [formField]="form.value" [label]="label()" [placeholder]="placeholder()" [disabled]="disabled()">
            @if (showPrefix()) {
                <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">thermostat</mat-icon>
            }
            @if (showSuffix()) {
                <span idsSuffix>℃</span>
            }
            <ids-error>
                @for (err of form.value().errors(); track err.kind) {
                    {{ err.message }}
                }
            </ids-error>
        </ids-number-input>
    `})],F),I={title:`Design System/Number Input`,component:N,tags:[`autodocs`],decorators:[m({imports:[F]})],argTypes:{label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},value:{control:`number`,table:{category:`Playground`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}}}},L={args:{value:23,label:`Label`,placeholder:`Lorem Ipsum`,disabled:!1,required:!1,showPrefix:!1,showSuffix:!1},render:e=>({props:e,template:`
            <ids-number-input-story
                [value]="value"
                [label]="label"
                [placeholder]="placeholder"
                [disabled]="disabled"
                [required]="required"
                [showPrefix]="showPrefix"
                [showSuffix]="showSuffix"
            />
        `})},R=[`Default`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    value: 23,
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
            <ids-number-input-story
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
}`,...L.parameters?.docs?.source}}}})))()}z();export{L as Default,R as __namedExportsOrder,I as default};