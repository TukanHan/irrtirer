import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Hr as t,Ir as n,R as r,S as i,W as a,Yn as o,b as s,h as c,j as l,l as u,m as d,v as f}from"./core-CEfZiV_p.js";import{a as p,c as m,d as h,h as g}from"./iframe-C-iYSAmD.js";import{n as _,t as v}from"./icon-DAIleJwC.js";import{a as y,c as b,d as x,i as S,l as C,n as w,o as T,r as E,s as D,t as O,u as k}from"./suffix-SrS4LM5r.js";import{i as A,n as j,o as M,r as N,s as P}from"./signals-CAPhiivB.js";var F;function I(){return(I=e((()=>{F=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var L;function R(){return(R=e((()=>{t(),I(),d(),k(),T(),L=class{touch=s();value=f(null);label=c(``);disabled=c(!1,{transform:u});required=c(!1,{transform:u});placeholder=c(``);invalid=c(!1,{transform:u});touched=c(!1,{transform:u});showError=i(()=>this.invalid()&&this.touched()&&!this.disabled());identifier=x(e=>`ids-number-input-${e}`);onInput(e){let t=e.target.valueAsNumber;this.value.set(Number.isNaN(t)?null:t)}static propDecorators={touch:[{type:a,args:[`touch`]}],value:[{type:r,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:a,args:[`valueChange`]}],label:[{type:r,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:r,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:r,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:r,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:r,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:r,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},L=n([l({selector:`ids-number-input`,imports:[y],hostDirectives:[C],template:` <ids-form-field
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
            [attr.aria-invalid]="showError() ? 'true' : null"
            type="number"
            class="input"
            [id]="identifier"
        />
        <ng-content select="[idsSuffix]" ngProjectAs="[idsSuffix]" />
        <ng-content select="ids-error" ngProjectAs="ids-error" />
    </ids-form-field>`,styles:[F]})],L)})))()}var z,B,V,H;function U(){return(U=e((()=>{_(),p(),d(),A(),h(),b(),S(),w(),R(),z=g(),B={title:`Design System/Number Input`,component:L,tags:[`autodocs`],loaders:[async()=>({injector:(await z).injector})],decorators:[m({imports:[v,j,D,E,O]})],argTypes:{value:{control:`number`,table:{category:`Playground`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}},label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}}}},V={args:{value:23,showPrefix:!1,showSuffix:!1,label:`Label`,placeholder:`Lorem ipsum`,disabled:!1,required:!1},render:(e,{loaded:t})=>{let n=o({temperature:Number(e.value)}),r=P(n,t=>{M(t.temperature,{message:`Lorem ipsum dolor sit amet`,when:()=>!!e.required}),N(t.temperature,{when:()=>!!e.disabled})},{injector:t.injector});return{props:{...e,temperatureForm:r},template:`
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
            `}}},H=[`Default`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}})))()}U();export{V as Default,H as __namedExportsOrder,B as default};