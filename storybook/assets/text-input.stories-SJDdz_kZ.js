import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Br as t,H as n,Hn as r,I as i,M as a,Pr as o,Y as s,h as c,k as l,m as u,v as d}from"./core-DZ_hu5NN.js";import{a as f,c as p}from"./iframe-BBEqrjCL.js";import{n as m,t as h}from"./icon-BQy1hBlY.js";import{n as g,t as _}from"./flat-button-DrC7SjDz.js";var v;function y(){return(y=e((()=>{v=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var b;function x(){return(x=e((()=>{b=`:host .ids-form-field-label{pointer-events:none;margin-bottom:8px;font-size:14px;font-weight:500;display:block}:host .ids-form-field-label[data-required]:after{content:"*";margin-inline-start:.125rem}:host .ids-form-field-frame{border:1px solid var(--ids-form-control-border-color);height:2.5rem;box-shadow:var(--ids-form-field-shadow);background-color:var(--ids-form-control-surface-color);border-radius:var(--ids-radius-medium);align-items:center;gap:.5rem;padding:.5rem 1rem;transition:box-shadow .25s;display:flex}:host .ids-form-field-frame .ids-form-field-placeholder{opacity:.5;pointer-events:none;text-wrap:nowrap;text-overflow:ellipsis;overflow:hidden}:host .ids-form-field-frame .ids-form-field-control{flex:auto;min-width:0;display:grid}:host .ids-form-field-frame .ids-form-field-control>*{grid-area:1/1}:host:has(.input:disabled) .ids-form-field-frame{opacity:.5;pointer-events:none}:host:has(.input:hover:not(:disabled):not(:focus)) .ids-form-field-frame{--ids-form-field-shadow:0 0 0 1px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-strong), transparent), 0 2px 6px 4px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-faint), transparent)}:host:has(.input:focus:not(:disabled)) .ids-form-field-frame{--ids-form-field-shadow:0 0 0 1px var(--ids-color-highlight), 0 2px 6px 4px color-mix(in srgb, var(--ids-color-highlight) var(--ids-shadow-strength-subtle), transparent)}`})))()}var S;function C(){return(C=e((()=>{t(),x(),u(),S=class{label=c.required();required=c.required();placeholder=c.required();id=c.required();isEmpty=c.required();static propDecorators={label:[{type:i,args:[{isSignal:!0,alias:`label`,required:!0,transform:void 0}]}],required:[{type:i,args:[{isSignal:!0,alias:`required`,required:!0,transform:void 0}]}],placeholder:[{type:i,args:[{isSignal:!0,alias:`placeholder`,required:!0,transform:void 0}]}],id:[{type:i,args:[{isSignal:!0,alias:`id`,required:!0,transform:void 0}]}],isEmpty:[{type:i,args:[{isSignal:!0,alias:`isEmpty`,required:!0,transform:void 0}]}]}},S=o([l({selector:`ids-form-field`,template:`
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
    `,styles:[b]})],S)})))()}var w;function T(){return(T=e((()=>{t(),u(),w=class{counter=0;getNextIdNumber(){return this.counter+=1,this.counter}},w=o([s()],w)})))()}function E(e){return r(D).getIdentifier(e)}var D;function O(){return(O=e((()=>{t(),u(),T(),D=class{counterService=r(w);id=c(void 0);getIdentifier(e){return this.id()||e(this.counterService.getNextIdNumber())}static propDecorators={id:[{type:i,args:[{isSignal:!0,alias:`id`,required:!1,transform:void 0}]}]}},D=o([a({selector:`[idsIdentityGenerator]`})],D)})))()}var k;function A(){return(A=e((()=>{t(),y(),u(),C(),O(),k=class{value=d(``);label=c(``);disabled=c(!1);required=c(!1);placeholder=c(``);identifier=E(e=>`ids-text-input-${e}`);static propDecorators={value:[{type:i,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:n,args:[`valueChange`]}],label:[{type:i,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:i,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:i,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:i,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}]}},k=o([l({selector:`ids-text-input`,imports:[S],hostDirectives:[D],template:`
        <ids-form-field [label]="label()" [required]="required()" [placeholder]="placeholder()" [isEmpty]="!value()" [id]="identifier">
            <ng-content select="[idsPrefix]" ngProjectAs="[idsPrefix]" />
            <input [value]="value()" (input)="value.set($any($event.target).value)" [disabled]="disabled()" type="text" class="input" [id]="identifier" />
            <ng-content select="[idsSuffix]" ngProjectAs="[idsSuffix]" />
        </ids-form-field>
    `,styles:[v]})],k)})))()}var j,M,N;function P(){return(P=e((()=>{m(),f(),g(),A(),j={title:`Design System/Text Input`,component:k,tags:[`autodocs`],decorators:[p({imports:[k,_,h]})],argTypes:{label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},value:{control:`text`,table:{category:`Playground`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}}}},M={args:{value:`Example`,label:`Label`,placeholder:`Lorem Ipsum`,disabled:!1,required:!1,showPrefix:!1,showSuffix:!1},render:e=>({props:e,template:`
            <ids-text-input
                [(value)]="value"
                [label]="label"
                [placeholder]="placeholder"
                [disabled]="disabled"
                [required]="required"
            >
                @if (showPrefix) {
                    <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">search</mat-icon>
                }
                @if (showSuffix) {
                    <ids-flat-button idsSuffix class="ids-flat-button--size-small" (clicked)="value = ''">
                        <mat-icon class="material-symbols-outlined">close</mat-icon>
                    </ids-flat-button>
                }
            </ids-text-input>
        `})},N=[`Default`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
            <ids-text-input
                [(value)]="value"
                [label]="label"
                [placeholder]="placeholder"
                [disabled]="disabled"
                [required]="required"
            >
                @if (showPrefix) {
                    <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">search</mat-icon>
                }
                @if (showSuffix) {
                    <ids-flat-button idsSuffix class="ids-flat-button--size-small" (clicked)="value = ''">
                        <mat-icon class="material-symbols-outlined">close</mat-icon>
                    </ids-flat-button>
                }
            </ids-text-input>
        \`
  })
}`,...M.parameters?.docs?.source}}}})))()}P();export{M as Default,N as __namedExportsOrder,j as default};