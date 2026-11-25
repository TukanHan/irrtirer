import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Hr as t,Ir as n,R as r,W as i,Yn as a,b as o,h as s,j as c,m as l,v as u}from"./core-CEfZiV_p.js";import{a as d,c as f,d as p,h as m}from"./iframe-byX8QydW.js";import{n as h,t as g}from"./icon-HH9gEOnV.js";import{a as _,c as v,i as y,l as b,n as x,o as S,r as C,s as w,t as T,u as E}from"./form-field-affixes-DTo5-S6j.js";import{i as D,n as O,o as k,r as A,s as j}from"./signals-CAPhiivB.js";var M;function N(){return(N=e((()=>{M=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var P;function F(){return(F=e((()=>{t(),N(),l(),b(),_(),P=class{touch=o();value=u(0);label=s(``);disabled=s(!1);required=s(!1);placeholder=s(``);invalid=s(!1);touched=s(!1);identifier=E(e=>`ids-number-input-${e}`);static propDecorators={touch:[{type:i,args:[`touch`]}],value:[{type:r,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:i,args:[`valueChange`]}],label:[{type:r,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:r,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:r,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:r,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:r,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:r,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},P=n([c({selector:`ids-number-input`,imports:[y],hostDirectives:[v],template:` <ids-form-field
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
    </ids-form-field>`,styles:[M]})],P)})))()}var I,L,R,z;function B(){return(B=e((()=>{h(),d(),l(),D(),p(),w(),C(),F(),I=m(),L={title:`Design System/Number Input`,component:P,tags:[`autodocs`],loaders:[async()=>({injector:(await I).injector})],decorators:[f({imports:[g,O,S,T,x]})],argTypes:{value:{control:`number`,table:{category:`Playground`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}},label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}}}},R={args:{value:23,showPrefix:!1,showSuffix:!1,label:`Label`,placeholder:`Lorem ipsum`,disabled:!1,required:!1},render:(e,{loaded:t})=>{let n=a({temperature:Number(e.value)}),r=j(n,t=>{k(t.temperature,{message:`Lorem ipsum dolor sit amet`,when:()=>!!e.required}),A(t.temperature,{when:()=>!!e.disabled})},{injector:t.injector});return{props:{...e,temperatureForm:r},template:`
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
            `}}},z=[`Default`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}}})))()}B();export{R as Default,z as __namedExportsOrder,L as default};