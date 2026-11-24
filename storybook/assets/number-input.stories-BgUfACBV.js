import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Hr as t,Ir as n,P as r,R as i,W as a,Yn as o,b as s,h as c,j as l,m as u,v as d}from"./core-CEfZiV_p.js";import{a as f,c as p,d as m,h}from"./iframe-Cos8sygO.js";import{n as g,t as _}from"./icon-CKJKpEQ5.js";import{a as v,i as y,n as b,o as x,r as S,s as C,t as w}from"./form-field-CREXI-Da.js";import{i as T,n as E,o as D,r as O,s as k}from"./signals-CAPhiivB.js";var A,j;function M(){return(M=e((()=>{t(),u(),A=class{},A=n([r({selector:`[idsPrefix]`})],A),j=class{},j=n([r({selector:`[idsSuffix]`})],j)})))()}var N;function P(){return(P=e((()=>{N=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var F;function I(){return(I=e((()=>{t(),P(),u(),x(),b(),F=class{touch=s();value=d(0);label=c(``);disabled=c(!1);required=c(!1);placeholder=c(``);invalid=c(!1);touched=c(!1);identifier=C(e=>`ids-number-input-${e}`);static propDecorators={touch:[{type:a,args:[`touch`]}],value:[{type:i,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:a,args:[`valueChange`]}],label:[{type:i,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:i,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:i,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:i,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:i,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:i,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},F=n([l({selector:`ids-number-input`,imports:[w],hostDirectives:[v],template:` <ids-form-field
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
    </ids-form-field>`,styles:[N]})],F)})))()}var L,R,z,B;function V(){return(V=e((()=>{g(),f(),u(),T(),m(),y(),M(),I(),L=h(),R={title:`Design System/Number Input`,component:F,tags:[`autodocs`],loaders:[async()=>({injector:(await L).injector})],decorators:[p({imports:[_,E,S,A,j]})],argTypes:{value:{control:`number`,table:{category:`Playground`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}},label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}}}},z={args:{value:23,showPrefix:!1,showSuffix:!1,label:`Label`,placeholder:`Lorem ipsum`,disabled:!1,required:!1},render:(e,{loaded:t})=>{let n=o({temperature:Number(e.value)}),r=k(n,t=>{D(t.temperature,{message:`Lorem ipsum dolor sit amet`,when:()=>!!e.required}),O(t.temperature,{when:()=>!!e.disabled})},{injector:t.injector});return{props:{...e,temperatureForm:r},template:`
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
            `}}},B=[`Default`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}}})))()}V();export{z as Default,B as __namedExportsOrder,R as default};