import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{B as t,Gr as n,K as r,N as i,Qn as a,S as o,_ as s,b as c,g as l,u,w as d,zr as f}from"./core-CXH6MCZn.js";import{a as p,c as m,d as h,h as g}from"./iframe-kWnt1dXg.js";import{n as _,t as v}from"./icon-ebGpF6Ci.js";import{a as y,c as b,d as x,f as S,i as C,l as w,n as T,o as E,r as D,s as O,t as k,u as A}from"./suffix-mzqr8psp.js";import{i as j,n as M,o as N,r as P,s as F}from"./signals-BkxG1n1K.js";var I;function L(){return(L=e((()=>{I=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var R;function z(){return(z=e((()=>{n(),L(),l(),A(),E(),R=class{touch=o();value=c(null);label=s(``);disabled=s(!1,{transform:u});required=s(!1,{transform:u});placeholder=s(``);invalid=s(!1,{transform:u});touched=s(!1,{transform:u});showError=d(()=>this.invalid()&&this.touched()&&!this.disabled());identifier=x(e=>`ids-number-input-${e}`);errorsId=S(this.identifier);onInput(e){let t=e.target.valueAsNumber;this.value.set(Number.isNaN(t)?null:t)}static propDecorators={touch:[{type:r,args:[`touch`]}],value:[{type:t,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:r,args:[`valueChange`]}],label:[{type:t,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:t,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:t,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:t,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:t,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},R=f([i({selector:`ids-number-input`,imports:[y],hostDirectives:[w],template:` <ids-form-field
        [label]="label()"
        [required]="required()"
        [placeholder]="placeholder()"
        [isEmpty]="value() === null"
        [showError]="showError()"
        [id]="identifier"
    >
        <ng-content select="[idsPrefix]" ngProjectAs="[idsPrefix]" />
        <input
            [value]="value()"
            (input)="onInput($event)"
            (blur)="touch.emit()"
            [disabled]="disabled()"
            [required]="required()"
            [attr.aria-invalid]="showError() ? 'true' : null"
            [attr.aria-describedby]="showError() ? errorsId : null"
            type="number"
            class="input"
            [id]="identifier"
        />
        <ng-content select="[idsSuffix]" ngProjectAs="[idsSuffix]" />
        <ng-content select="ids-error" ngProjectAs="ids-error" />
    </ids-form-field>`,styles:[I]})],R)})))()}var B,V,H,U;function W(){return(W=e((()=>{_(),p(),l(),j(),h(),b(),C(),T(),z(),B=g(),V={title:`Design System/Number Input`,component:R,tags:[`autodocs`],loaders:[async()=>({injector:(await B).injector})],decorators:[m({imports:[v,M,O,D,k]})],argTypes:{value:{control:`number`,table:{category:`Playground`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}},label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}}}},H={args:{value:23,showPrefix:!1,showSuffix:!1,label:`Label`,placeholder:`Lorem ipsum`,disabled:!1,required:!1},render:(e,{loaded:t})=>{let n=a({temperature:Number(e.value)}),r=F(n,t=>{N(t.temperature,{message:`Lorem ipsum dolor sit amet`,when:()=>!!e.required}),P(t.temperature,{when:()=>!!e.disabled})},{injector:t.injector});return{props:{...e,temperatureForm:r},template:`
                <ids-number-input [formField]="temperatureForm.temperature" [label]="label" [placeholder]="placeholder">
                    @if (showPrefix) {
                        <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">thermostat</mat-icon>
                    }
                    @if (showSuffix) {
                        <span idsSuffix>℃</span>
                    }
                    <ids-error>
                        @for (error of temperatureForm.temperature().errors(); track error.kind) {
                            {{ error.message }}
                        }
                    </ids-error>
                </ids-number-input>
            `}}},U=[`Default`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    value: 23,
    showPrefix: false,
    showSuffix: false,
    label: 'Label',
    placeholder: 'Lorem ipsum',
    disabled: false,
    required: false
  },
  render: (args, {
    loaded
  }) => {
    const model = signal({
      temperature: Number(args.value)
    });
    const temperatureForm = form(model, path => {
      required(path.temperature, {
        message: 'Lorem ipsum dolor sit amet',
        when: () => !!args.required
      });
      disabled(path.temperature, {
        when: () => !!args.disabled
      });
    }, {
      injector: loaded['injector'] as Injector
    });
    return {
      props: {
        ...args,
        temperatureForm
      },
      template: \`
                <ids-number-input [formField]="temperatureForm.temperature" [label]="label" [placeholder]="placeholder">
                    @if (showPrefix) {
                        <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">thermostat</mat-icon>
                    }
                    @if (showSuffix) {
                        <span idsSuffix>℃</span>
                    }
                    <ids-error>
                        @for (error of temperatureForm.temperature().errors(); track error.kind) {
                            {{ error.message }}
                        }
                    </ids-error>
                </ids-number-input>
            \`
    };
  }
}`,...H.parameters?.docs?.source}}}})))()}W();export{H as Default,U as __namedExportsOrder,V as default};