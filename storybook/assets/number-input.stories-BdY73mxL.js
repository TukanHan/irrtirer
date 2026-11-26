import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{B as t,Gr as n,K as r,N as i,Qn as a,S as o,_ as s,b as c,g as l,u,w as d,zr as f}from"./core-CXH6MCZn.js";import{a as p,f as m,g as h,l as g}from"./iframe-PimuhNC_.js";import{n as _,t as v}from"./icon-BT2A8Liy.js";import{n as y,t as b}from"./elem-builder-YlncYE0b.js";import{a as x,c as S,d as C,f as w,i as T,l as E,n as D,o as O,r as k,s as A,t as j,u as M}from"./suffix-mzqr8psp.js";import{i as N,n as P,o as F,r as I,s as L}from"./signals-BkxG1n1K.js";var R;function z(){return(z=e((()=>{R=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var B;function V(){return(V=e((()=>{n(),z(),l(),M(),O(),B=class{touch=o();value=c(null);label=s(``);disabled=s(!1,{transform:u});required=s(!1,{transform:u});placeholder=s(``);invalid=s(!1,{transform:u});touched=s(!1,{transform:u});showError=d(()=>this.invalid()&&this.touched()&&!this.disabled());identifier=C(e=>`ids-number-input-${e}`);errorsId=w(this.identifier);onInput(e){let t=e.target.valueAsNumber;this.value.set(Number.isNaN(t)?null:t)}static propDecorators={touch:[{type:r,args:[`touch`]}],value:[{type:t,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:r,args:[`valueChange`]}],label:[{type:t,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:t,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:t,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:t,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:t,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},B=f([i({selector:`ids-number-input`,imports:[x],hostDirectives:[E],template:` <ids-form-field
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
    </ids-form-field>`,styles:[R]})],B)})))()}var H,U,W,G;function K(){return(K=e((()=>{_(),p(),l(),N(),m(),S(),T(),D(),y(),V(),H=h(),U={title:`Design System/Number Input`,component:B,tags:[`autodocs`],loaders:[async()=>({injector:(await H).injector})],decorators:[g({imports:[v,P,A,k,j]})],argTypes:{value:{control:`number`,table:{category:`Playground`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}},label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}}}},W={args:{value:23,showPrefix:!1,showSuffix:!1,label:`Label`,placeholder:`Lorem ipsum`,disabled:!1,required:!1},render:(e,{loaded:t})=>{let n=a({temperature:Number(e.value)}),r=L(n,t=>{F(t.temperature,{message:`Lorem ipsum dolor sit amet`,when:()=>!!e.required}),I(t.temperature,{when:()=>!!e.disabled})},{injector:t.injector});return{props:{...e,temperatureForm:r},template:b(`ids-number-input`).withBinding(`formField`,`temperatureForm.temperature`).withInput(`label`,e.label,``).withInput(`placeholder`,e.placeholder,``).withContent(e.showPrefix&&b(`mat-icon`).withAttribute(`idsPrefix`).withClass(`material-symbols-outlined`).withAttribute(`aria-hidden`,`true`).withContent(`thermostat`),e.showSuffix&&b(`span`).withAttribute(`idsSuffix`).withContent(`℃`),b(`ids-error`).withContent(`@for (error of temperatureForm.temperature().errors(); track error.kind) {
    {{ error.message }}
}`)).build()}}},G=[`Default`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}}})))()}K();export{W as Default,G as __namedExportsOrder,U as default};