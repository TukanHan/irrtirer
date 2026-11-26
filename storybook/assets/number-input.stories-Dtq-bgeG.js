import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{B as t,Gr as n,K as r,N as i,Qn as a,S as o,_ as s,b as c,g as l,u,w as d,zr as f}from"./core-CXH6MCZn.js";import{a as p,f as m,g as h,l as g}from"./iframe-DnfMsUZM.js";import{n as _,t as v}from"./icon-CazijiCo.js";import{a as y,n as b,t as x}from"./public-api-CDAB2B1g.js";import{n as S,t as C}from"./elem-builder-YlncYE0b.js";import{a as w,c as T,d as E,f as D,i as O,l as k,n as A,o as j,r as M,s as N,t as P,u as F}from"./suffix-mzqr8psp.js";import{i as I,n as L,o as R,r as z,s as B}from"./signals-BkxG1n1K.js";var V;function H(){return(H=e((()=>{V=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var U;function W(){return(W=e((()=>{n(),H(),l(),F(),j(),U=class{touch=o();value=c(null);label=s(``);disabled=s(!1,{transform:u});required=s(!1,{transform:u});placeholder=s(``);invalid=s(!1,{transform:u});touched=s(!1,{transform:u});showError=d(()=>this.invalid()&&this.touched()&&!this.disabled());identifier=E(e=>`ids-number-input-${e}`);errorsId=D(this.identifier);onInput(e){let t=e.target.valueAsNumber;this.value.set(Number.isNaN(t)?null:t)}static propDecorators={touch:[{type:r,args:[`touch`]}],value:[{type:t,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:r,args:[`valueChange`]}],label:[{type:t,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:t,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:t,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:t,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:t,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},U=f([i({selector:`ids-number-input`,imports:[w],hostDirectives:[k],template:` <ids-form-field
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
    </ids-form-field>`,styles:[V]})],U)})))()}var G,K,q,J,Y;function X(){return(X=e((()=>{_(),p(),l(),I(),m(),T(),O(),A(),x(),S(),W(),G=h(),K={title:`Design System/Number Input`,component:U,tags:[`autodocs`],loaders:[async()=>({injector:(await G).injector})],decorators:[g({imports:[v,L,N,M,P]})],argTypes:{value:{control:`number`,table:{category:`Playground`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}},label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}}}},q={args:{value:23,showPrefix:!1,showSuffix:!1,label:`Label`,placeholder:`Lorem ipsum`,disabled:!1,required:!1},render:(e,{loaded:t})=>{let n=a({temperature:Number(e.value)}),r=B(n,t=>{R(t.temperature,{message:`Lorem ipsum dolor sit amet`,when:()=>!!e.required}),z(t.temperature,{when:()=>!!e.disabled})},{injector:t.injector});return{props:{...e,temperatureForm:r},template:C(`ids-number-input`).withBinding(`formField`,`temperatureForm.temperature`).withInput(`label`,e.label,``).withInput(`placeholder`,e.placeholder,``).withContent(e.showPrefix&&C(`mat-icon`).withAttribute(`idsPrefix`).withClass(`material-symbols-outlined`).withAttribute(`aria-hidden`,`true`).withContent(`thermostat`),e.showSuffix&&C(`span`).withAttribute(`idsSuffix`).withContent(`℃`),C(`ids-error`).withContent(`@for (error of temperatureForm.temperature().errors(); track error.kind) {
    {{ error.message }}
}`)).build()}}},J={decorators:[g({imports:[b]})],parameters:{controls:{disable:!0},pseudo:y(`.input`)},render:()=>({props:{sections:[{name:`valid`,invalid:!1,disabled:!1},{name:`invalid`,invalid:!0,disabled:!1},{name:`disabled`,invalid:!1,disabled:!0}],states:[`rest`,`hover`,`focus`]},template:`
            <sb-state-matrix [sections]="sections" [states]="states">
                <ng-template let-section let-state="state">
                    <ids-number-input
                        [label]="state"
                        [value]="23"
                        [invalid]="section.invalid"
                        [touched]="section.invalid"
                        [disabled]="section.disabled"
                    />
                </ng-template>
            </sb-state-matrix>
        `})},Y=[`Default`,`States`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
      // \`disabled\` and \`required\` come from the form, so they are not bound on the element.
      template: elem('ids-number-input').withBinding('formField', 'temperatureForm.temperature').withInput('label', args.label, '').withInput('placeholder', args.placeholder, '').withContent(args.showPrefix && elem('mat-icon').withAttribute('idsPrefix').withClass('material-symbols-outlined').withAttribute('aria-hidden', 'true').withContent('thermostat'), args.showSuffix && elem('span').withAttribute('idsSuffix').withContent('℃'), elem('ids-error').withContent('@for (error of temperatureForm.temperature().errors(); track error.kind) {\\n    {{ error.message }}\\n}')).build()
    };
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [StateMatrix]
  })],
  parameters: {
    controls: {
      disable: true
    },
    pseudo: pseudoStates('.input')
  },
  render: () => ({
    props: {
      sections: [{
        name: 'valid',
        invalid: false,
        disabled: false
      }, {
        name: 'invalid',
        invalid: true,
        disabled: false
      }, {
        name: 'disabled',
        invalid: false,
        disabled: true
      }],
      states: ['rest', 'hover', 'focus']
    },
    template: \`
            <sb-state-matrix [sections]="sections" [states]="states">
                <ng-template let-section let-state="state">
                    <ids-number-input
                        [label]="state"
                        [value]="23"
                        [invalid]="section.invalid"
                        [touched]="section.invalid"
                        [disabled]="section.disabled"
                    />
                </ng-template>
            </sb-state-matrix>
        \`
  })
}`,...J.parameters?.docs?.source}}}})))()}X();export{q as Default,J as States,Y as __namedExportsOrder,K as default};