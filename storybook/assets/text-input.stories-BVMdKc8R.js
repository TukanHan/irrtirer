import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{B as t,Gr as n,K as r,N as i,Qn as a,S as o,_ as s,b as c,g as l,u,w as d,zr as f}from"./core-CXH6MCZn.js";import{a as p,f as m,g as h,l as g}from"./iframe-DNOtVTR-.js";import{n as _,t as v}from"./icon-DEzqEUWb.js";import{n as y,t as b}from"./elem-builder-YlncYE0b.js";import{n as x,t as S}from"./flat-button-B1UCJ9K5.js";import{a as C,c as w,d as T,f as E,i as D,l as O,n as k,o as A,r as j,s as M,t as N,u as P}from"./suffix-mzqr8psp.js";import{i as F,n as I,o as L,r as R,s as z}from"./signals-BkxG1n1K.js";var B;function V(){return(V=e((()=>{B=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var H;function U(){return(U=e((()=>{n(),V(),l(),P(),A(),H=class{touch=o();value=c(``);label=s(``);disabled=s(!1,{transform:u});required=s(!1,{transform:u});placeholder=s(``);invalid=s(!1,{transform:u});touched=s(!1,{transform:u});showError=d(()=>this.invalid()&&this.touched()&&!this.disabled());identifier=T(e=>`ids-text-input-${e}`);errorsId=E(this.identifier);static propDecorators={touch:[{type:r,args:[`touch`]}],value:[{type:t,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:r,args:[`valueChange`]}],label:[{type:t,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:t,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:t,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:t,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:t,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},H=f([i({selector:`ids-text-input`,imports:[C],hostDirectives:[O],template:`
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
    `,styles:[B]})],H)})))()}var W,G,K,q;function J(){return(J=e((()=>{_(),p(),l(),F(),m(),w(),D(),k(),x(),y(),U(),W=h(),G={title:`Design System/Text Input`,component:H,tags:[`autodocs`],loaders:[async()=>({injector:(await W).injector})],decorators:[g({imports:[v,I,M,j,N,S]})],argTypes:{value:{control:`text`,table:{category:`Playground`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}},label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}}}},K={args:{value:`Lorem ipsum`,showPrefix:!1,showSuffix:!1,label:`Label`,placeholder:`Dolor sit amet`,disabled:!1,required:!1},render:(e,{loaded:t})=>{let n=a({query:String(e.value)}),r=z(n,t=>{L(t.query,{message:`Lorem ipsum dolor sit amet`,when:()=>!!e.required}),R(t.query,{when:()=>!!e.disabled})},{injector:t.injector});return{props:{...e,searchForm:r},template:b(`ids-text-input`).withBinding(`formField`,`searchForm.query`).withInput(`label`,e.label,``).withInput(`placeholder`,e.placeholder,``).withContent(e.showPrefix&&b(`mat-icon`).withAttribute(`idsPrefix`).withClass(`material-symbols-outlined`).withAttribute(`aria-hidden`,`true`).withContent(`search`),e.showSuffix&&b(`ids-flat-button`).withAttribute(`idsSuffix`).withClass(`ids-flat-button--size-small`).withOutput(`clicked`,`searchForm.query().value.set('')`).withContent(b(`mat-icon`).withClass(`material-symbols-outlined`).withContent(`close`)),b(`ids-error`).withContent(`@for (error of searchForm.query().errors(); track error.kind) {
    {{ error.message }}
}`)).build()}}},q=[`Default`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}}})))()}J();export{K as Default,q as __namedExportsOrder,G as default};