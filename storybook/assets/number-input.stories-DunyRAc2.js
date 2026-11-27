import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{B as t,K as n,Lr as r,N as i,S as a,Ur as o,Zn as s,_ as c,b as l,g as u,u as d,w as f}from"./core-CjIc2X4A.js";import{f as p,g as m,n as h,o as g}from"./iframe-DV1WwDdv.js";import{n as _,t as v}from"./icon-CHbqLCLy.js";import{a as y,n as b,t as x}from"./public-api-BiLccHIJ.js";import{n as S,t as C}from"./elem-builder-B342_OgR.js";import{a as w,c as T,d as E,f as D,i as O,l as k,n as A,o as j,p as M,r as N,s as P,t as F,u as I}from"./suffix-BbKvpVYL.js";import{i as L,n as R,o as z,r as B,s as V}from"./signals-DLqTt9MT.js";var H;function init_number_input(){return(init_number_input=e((()=>{H=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var U;function init_number_input$1(){return(init_number_input$1=e((()=>{o(),init_number_input(),u(),j(),M(),I(),U=class IdsNumberInput{touch=a();value=l(null);label=c(``);disabled=c(!1,{transform:d});required=c(!1,{transform:d});placeholder=c(``);invalid=c(!1,{transform:d});touched=c(!1,{transform:d});showError=f(()=>this.invalid()&&this.touched()&&!this.disabled());identifier=E(e=>`ids-number-input-${e}`);errorsId=D(this.identifier);onInput(e){let t=e.target.valueAsNumber;this.value.set(Number.isNaN(t)?null:t)}static propDecorators={touch:[{type:n,args:[`touch`]}],value:[{type:t,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:n,args:[`valueChange`]}],label:[{type:t,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:t,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:t,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:t,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:t,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},U=r([i({selector:`ids-number-input`,imports:[w],hostDirectives:[k],template:` <ids-form-field
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
    </ids-form-field>`,styles:[H]})],U)})))()}var W,G,K,q,J;function init_number_input_stories(){return(init_number_input_stories=e((()=>{u(),L(),_(),p(),h(),T(),O(),A(),x(),S(),init_number_input$1(),W=m(),G={title:`Design System/Number Input`,component:U,tags:[`autodocs`],loaders:[async()=>({injector:(await W).injector})],decorators:[g({imports:[v,R,P,N,F]})],argTypes:{showPrefix:{description:"Projects a thermostat icon into the `idsPrefix` slot.",control:`boolean`,table:{category:`playground`}},showSuffix:{description:"Projects a unit into the `idsSuffix` slot.",control:`boolean`,table:{category:`playground`}},invalid:{control:!1},touched:{control:!1},valueChange:{control:!1},touch:{control:!1}}},K={args:{value:23,showPrefix:!1,showSuffix:!1,label:`Label`,placeholder:`Lorem ipsum`,disabled:!1,required:!1},render:(e,{loaded:t})=>{let n=s({temperature:Number(e.value)}),r=V(n,t=>{z(t.temperature,{message:`Lorem ipsum dolor sit amet`,when:()=>!!e.required}),B(t.temperature,{when:()=>!!e.disabled})},{injector:t.injector});return{props:{...e,temperatureForm:r},template:C(`ids-number-input`).withBinding(`formField`,`temperatureForm.temperature`).withOutput(`valueChange`).withOutput(`touch`).withInput(`label`,e.label,``).withInput(`placeholder`,e.placeholder,``).withContent(e.showPrefix&&C(`mat-icon`).withAttribute(`idsPrefix`).withClass(`material-symbols-outlined`).withAttribute(`aria-hidden`,`true`).withContent(`thermostat`),e.showSuffix&&C(`span`).withAttribute(`idsSuffix`).withContent(`℃`),C(`ids-error`).withContent(`@for (error of temperatureForm.temperature().errors(); track error.kind) {
    {{ error.message }}
}`)).build()}}},q={decorators:[g({imports:[b]})],parameters:{controls:{disable:!0},pseudo:y(`.input`)},render:()=>({props:{sections:[{name:`valid`,invalid:!1,disabled:!1},{name:`invalid`,invalid:!0,disabled:!1},{name:`disabled`,invalid:!1,disabled:!0}],states:[`rest`,`hover`,`focus`]},template:`
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
        `})},J=[`Default`,`States`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
      template: elem('ids-number-input').withBinding('formField', 'temperatureForm.temperature').withOutput('valueChange').withOutput('touch').withInput('label', args.label, '').withInput('placeholder', args.placeholder, '').withContent(args.showPrefix && elem('mat-icon').withAttribute('idsPrefix').withClass('material-symbols-outlined').withAttribute('aria-hidden', 'true').withContent('thermostat'), args.showSuffix && elem('span').withAttribute('idsSuffix').withContent('℃'), elem('ids-error').withContent('@for (error of temperatureForm.temperature().errors(); track error.kind) {\\n    {{ error.message }}\\n}')).build()
    };
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}}})))()}init_number_input_stories();export{K as Default,q as States,J as __namedExportsOrder,G as default};