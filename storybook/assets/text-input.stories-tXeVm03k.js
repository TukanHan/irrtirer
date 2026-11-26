import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{B as t,Gr as n,K as r,N as i,Qn as a,S as o,_ as s,b as c,g as l,u,w as d,zr as f}from"./core-CXH6MCZn.js";import{a as p,f as m,g as h,l as g}from"./iframe-DnfMsUZM.js";import{n as _,t as v}from"./icon-CazijiCo.js";import{a as y,n as b,t as x}from"./public-api-CDAB2B1g.js";import{n as S,t as C}from"./elem-builder-YlncYE0b.js";import{n as w,t as T}from"./flat-button-B1UCJ9K5.js";import{a as E,c as D,d as O,f as k,i as A,l as j,n as M,o as N,r as P,s as F,t as I,u as L}from"./suffix-mzqr8psp.js";import{i as R,n as z,o as B,r as V,s as H}from"./signals-BkxG1n1K.js";var U;function W(){return(W=e((()=>{U=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var G;function K(){return(K=e((()=>{n(),W(),l(),L(),N(),G=class{touch=o();value=c(``);label=s(``);disabled=s(!1,{transform:u});required=s(!1,{transform:u});placeholder=s(``);invalid=s(!1,{transform:u});touched=s(!1,{transform:u});showError=d(()=>this.invalid()&&this.touched()&&!this.disabled());identifier=O(e=>`ids-text-input-${e}`);errorsId=k(this.identifier);static propDecorators={touch:[{type:r,args:[`touch`]}],value:[{type:t,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:r,args:[`valueChange`]}],label:[{type:t,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:t,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:t,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:t,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:t,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},G=f([i({selector:`ids-text-input`,imports:[E],hostDirectives:[j],template:`
        <ids-form-field
            [label]="label()"
            [required]="required()"
            [placeholder]="placeholder()"
            [isEmpty]="!value()"
            [showError]="showError()"
            [id]="identifier"
        >
            <ng-content select="[idsPrefix]" ngProjectAs="[idsPrefix]" />
            <input
                [value]="value()"
                (input)="value.set($any($event.target).value)"
                (blur)="touch.emit()"
                [disabled]="disabled()"
                [required]="required()"
                [attr.aria-invalid]="showError() ? 'true' : null"
                [attr.aria-describedby]="showError() ? errorsId : null"
                type="text"
                class="input"
                [id]="identifier"
            />
            <ng-content select="[idsSuffix]" ngProjectAs="[idsSuffix]" />
            <ng-content select="ids-error" ngProjectAs="ids-error" />
        </ids-form-field>
    `,styles:[U]})],G)})))()}var q,J,Y,X,Z;function Q(){return(Q=e((()=>{_(),p(),l(),R(),m(),D(),A(),M(),w(),x(),S(),K(),q=h(),J={title:`Design System/Text Input`,component:G,tags:[`autodocs`],loaders:[async()=>({injector:(await q).injector})],decorators:[g({imports:[v,z,F,P,I,T]})],argTypes:{value:{control:`text`,table:{category:`Playground`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}},label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}}}},Y={args:{value:`Lorem ipsum`,showPrefix:!1,showSuffix:!1,label:`Label`,placeholder:`Dolor sit amet`,disabled:!1,required:!1},render:(e,{loaded:t})=>{let n=a({query:String(e.value)}),r=H(n,t=>{B(t.query,{message:`Lorem ipsum dolor sit amet`,when:()=>!!e.required}),V(t.query,{when:()=>!!e.disabled})},{injector:t.injector});return{props:{...e,searchForm:r},template:C(`ids-text-input`).withBinding(`formField`,`searchForm.query`).withInput(`label`,e.label,``).withInput(`placeholder`,e.placeholder,``).withContent(e.showPrefix&&C(`mat-icon`).withAttribute(`idsPrefix`).withClass(`material-symbols-outlined`).withAttribute(`aria-hidden`,`true`).withContent(`search`),e.showSuffix&&C(`ids-flat-button`).withAttribute(`idsSuffix`).withClass(`ids-flat-button--size-small`).withOutput(`clicked`,`searchForm.query().value.set('')`).withContent(C(`mat-icon`).withClass(`material-symbols-outlined`).withContent(`close`)),C(`ids-error`).withContent(`@for (error of searchForm.query().errors(); track error.kind) {
    {{ error.message }}
}`)).build()}}},X={decorators:[g({imports:[b]})],parameters:{controls:{disable:!0},pseudo:y(`.input`)},render:()=>({props:{sections:[{name:`valid`,invalid:!1,disabled:!1},{name:`invalid`,invalid:!0,disabled:!1},{name:`disabled`,invalid:!1,disabled:!0}],states:[`rest`,`hover`,`focus`]},template:`
            <sb-state-matrix [sections]="sections" [states]="states">
                <ng-template let-section let-state="state">
                    <ids-text-input
                        [label]="state"
                        value="Lorem ipsum"
                        [invalid]="section.invalid"
                        [touched]="section.invalid"
                        [disabled]="section.disabled"
                    />
                </ng-template>
            </sb-state-matrix>
        `})},Z=[`Default`,`States`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Lorem ipsum',
    showPrefix: false,
    showSuffix: false,
    label: 'Label',
    placeholder: 'Dolor sit amet',
    disabled: false,
    required: false
  },
  render: (args, {
    loaded
  }) => {
    const model = signal({
      query: String(args.value)
    });
    const searchForm = form(model, path => {
      required(path.query, {
        message: 'Lorem ipsum dolor sit amet',
        when: () => !!args.required
      });
      disabled(path.query, {
        when: () => !!args.disabled
      });
    }, {
      injector: loaded['injector'] as Injector
    });
    return {
      props: {
        ...args,
        searchForm
      },
      // \`disabled\` and \`required\` come from the form, so they are not bound on the element.
      template: elem('ids-text-input').withBinding('formField', 'searchForm.query').withInput('label', args.label, '').withInput('placeholder', args.placeholder, '').withContent(args.showPrefix && elem('mat-icon').withAttribute('idsPrefix').withClass('material-symbols-outlined').withAttribute('aria-hidden', 'true').withContent('search'), args.showSuffix && elem('ids-flat-button').withAttribute('idsSuffix').withClass('ids-flat-button--size-small').withOutput('clicked', "searchForm.query().value.set('')").withContent(elem('mat-icon').withClass('material-symbols-outlined').withContent('close')), elem('ids-error').withContent('@for (error of searchForm.query().errors(); track error.kind) {\\n    {{ error.message }}\\n}')).build()
    };
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
                    <ids-text-input
                        [label]="state"
                        value="Lorem ipsum"
                        [invalid]="section.invalid"
                        [touched]="section.invalid"
                        [disabled]="section.disabled"
                    />
                </ng-template>
            </sb-state-matrix>
        \`
  })
}`,...X.parameters?.docs?.source}}}})))()}Q();export{Y as Default,X as States,Z as __namedExportsOrder,J as default};