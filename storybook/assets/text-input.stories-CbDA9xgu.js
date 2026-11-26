import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{B as t,Gr as n,K as r,N as i,Qn as a,S as o,_ as s,b as c,g as l,u,w as d,zr as f}from"./core-EfmSQQJi.js";import{a as p,f as m,g as h,l as g}from"./iframe-CsVPor_d.js";import{n as _,t as v}from"./icon-C7D6AE7e.js";import{a as y,n as b,t as x}from"./public-api-kSsOUlhl.js";import{n as S,t as C}from"./elem-builder-B342_OgR.js";import{n as w,t as T}from"./flat-button-CYZCOWOu.js";import{a as E,c as D,d as O,f as k,i as A,l as j,n as M,o as N,p as P,r as F,s as I,t as L,u as R}from"./suffix-CTrcLgFk.js";import{i as z,n as B,o as V,r as H,s as U}from"./signals-BCJpvr-a.js";var W;function init_text_input(){return(init_text_input=e((()=>{W=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var G;function init_text_input$1(){return(init_text_input$1=e((()=>{n(),init_text_input(),l(),P(),R(),N(),G=class IdsTextInput{touch=o();value=c(``);label=s(``);disabled=s(!1,{transform:u});required=s(!1,{transform:u});placeholder=s(``);invalid=s(!1,{transform:u});touched=s(!1,{transform:u});showError=d(()=>this.invalid()&&this.touched()&&!this.disabled());identifier=O(e=>`ids-text-input-${e}`);errorsId=k(this.identifier);static propDecorators={touch:[{type:r,args:[`touch`]}],value:[{type:t,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:r,args:[`valueChange`]}],label:[{type:t,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:t,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:t,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:t,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:t,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},G=f([i({selector:`ids-text-input`,imports:[E],hostDirectives:[j],template:`
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
    `,styles:[W]})],G)})))()}var K,q,J,Y,X;function init_text_input_stories(){return(init_text_input_stories=e((()=>{_(),p(),l(),z(),m(),D(),A(),M(),w(),x(),S(),init_text_input$1(),K=h(),q={title:`Design System/Text Input`,component:G,tags:[`autodocs`],loaders:[async()=>({injector:(await K).injector})],decorators:[g({imports:[v,B,I,F,L,T]})],argTypes:{showPrefix:{description:"Projects a search icon into the `idsPrefix` slot.",control:`boolean`,table:{category:`playground`}},showSuffix:{description:"Projects a clear button into the `idsSuffix` slot.",control:`boolean`,table:{category:`playground`}},invalid:{control:!1},touched:{control:!1},valueChange:{control:!1},touch:{control:!1}}},J={args:{value:`Lorem ipsum`,showPrefix:!1,showSuffix:!1,label:`Label`,placeholder:`Dolor sit amet`,disabled:!1,required:!1},render:(e,{loaded:t})=>{let n=a({query:String(e.value)}),r=U(n,t=>{V(t.query,{message:`Lorem ipsum dolor sit amet`,when:()=>!!e.required}),H(t.query,{when:()=>!!e.disabled})},{injector:t.injector});return{props:{...e,searchForm:r},template:C(`ids-text-input`).withBinding(`formField`,`searchForm.query`).withOutput(`valueChange`).withOutput(`touch`).withInput(`label`,e.label,``).withInput(`placeholder`,e.placeholder,``).withContent(e.showPrefix&&C(`mat-icon`).withAttribute(`idsPrefix`).withClass(`material-symbols-outlined`).withAttribute(`aria-hidden`,`true`).withContent(`search`),e.showSuffix&&C(`ids-flat-button`).withAttribute(`idsSuffix`).withClass(`ids-flat-button--size-small`).withOutput(`clicked`,`searchForm.query().value.set('')`).withContent(C(`mat-icon`).withClass(`material-symbols-outlined`).withContent(`close`)),C(`ids-error`).withContent(`@for (error of searchForm.query().errors(); track error.kind) {
    {{ error.message }}
}`)).build()}}},Y={decorators:[g({imports:[b]})],parameters:{controls:{disable:!0},pseudo:y(`.input`)},render:()=>({props:{sections:[{name:`valid`,invalid:!1,disabled:!1},{name:`invalid`,invalid:!0,disabled:!1},{name:`disabled`,invalid:!1,disabled:!0}],states:[`rest`,`hover`,`focus`]},template:`
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
        `})},X=[`Default`,`States`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
      template: elem('ids-text-input').withBinding('formField', 'searchForm.query').withOutput('valueChange').withOutput('touch').withInput('label', args.label, '').withInput('placeholder', args.placeholder, '').withContent(args.showPrefix && elem('mat-icon').withAttribute('idsPrefix').withClass('material-symbols-outlined').withAttribute('aria-hidden', 'true').withContent('search'), args.showSuffix && elem('ids-flat-button').withAttribute('idsSuffix').withClass('ids-flat-button--size-small').withOutput('clicked', "searchForm.query().value.set('')").withContent(elem('mat-icon').withClass('material-symbols-outlined').withContent('close')), elem('ids-error').withContent('@for (error of searchForm.query().errors(); track error.kind) {\\n    {{ error.message }}\\n}')).build()
    };
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}}})))()}init_text_input_stories();export{J as Default,Y as States,X as __namedExportsOrder,q as default};