import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Hr as t,Ir as n,R as r,W as i,Yn as a,b as o,h as s,j as c,m as l,v as u}from"./core-CEfZiV_p.js";import{a as d,c as f,d as p,h as m}from"./iframe-BikvtDrA.js";import{n as h,t as g}from"./icon-BYpyUK2H.js";import{n as _,t as v}from"./flat-button-Dcu53z3_.js";import{a as y,c as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D,u as O}from"./form-field-affixes-DTo5-S6j.js";import{i as k,n as A,o as j,r as M,s as N}from"./signals-CAPhiivB.js";var P;function F(){return(F=e((()=>{P=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var I;function L(){return(L=e((()=>{t(),F(),l(),S(),y(),I=class{touch=o();value=u(``);label=s(``);disabled=s(!1);required=s(!1);placeholder=s(``);invalid=s(!1);touched=s(!1);identifier=O(e=>`ids-text-input-${e}`);static propDecorators={touch:[{type:i,args:[`touch`]}],value:[{type:r,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:i,args:[`valueChange`]}],label:[{type:r,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:r,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:r,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:r,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:r,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:r,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},I=n([c({selector:`ids-text-input`,imports:[x],hostDirectives:[b],template:`
        <ids-form-field
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
                type="text"
                class="input"
                [id]="identifier"
            />
            <ng-content select="[idsSuffix]" ngProjectAs="[idsSuffix]" />
            <ng-content select="ids-error" ngProjectAs="ids-error" />
        </ids-form-field>
    `,styles:[P]})],I)})))()}var R,z,B,V;function H(){return(H=e((()=>{h(),d(),l(),k(),p(),E(),T(),_(),L(),R=m(),z={title:`Design System/Text Input`,component:I,tags:[`autodocs`],loaders:[async()=>({injector:(await R).injector})],decorators:[f({imports:[g,A,w,D,C,v]})],argTypes:{value:{control:`text`,table:{category:`Playground`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}},label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}}}},B={args:{value:`Lorem ipsum`,showPrefix:!1,showSuffix:!1,label:`Label`,placeholder:`Dolor sit amet`,disabled:!1,required:!1},render:(e,{loaded:t})=>{let n=a({query:String(e.value)}),r=N(n,t=>{j(t.query,{message:`Lorem ipsum dolor sit amet`,when:()=>!!e.required}),M(t.query,{when:()=>!!e.disabled})},{injector:t.injector});return{props:{...e,searchForm:r},template:`
                <ids-text-input [formField]="searchForm.query" [label]="label" [placeholder]="placeholder">
                    @if (showPrefix) {
                        <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">search</mat-icon>
                    }
                    @if (showSuffix) {
                        <ids-flat-button idsSuffix class="ids-flat-button--size-small" (clicked)="searchForm.query().value.set('')">
                            <mat-icon class="material-symbols-outlined">close</mat-icon>
                        </ids-flat-button>
                    }
                    <ids-error>
                        @for (error of searchForm.query().errors(); track error.kind) {
                            {{ error.message }}
                        }
                    </ids-error>
                </ids-text-input>
            `}}},V=[`Default`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
      template: \`
                <ids-text-input [formField]="searchForm.query" [label]="label" [placeholder]="placeholder">
                    @if (showPrefix) {
                        <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">search</mat-icon>
                    }
                    @if (showSuffix) {
                        <ids-flat-button idsSuffix class="ids-flat-button--size-small" (clicked)="searchForm.query().value.set('')">
                            <mat-icon class="material-symbols-outlined">close</mat-icon>
                        </ids-flat-button>
                    }
                    <ids-error>
                        @for (error of searchForm.query().errors(); track error.kind) {
                            {{ error.message }}
                        }
                    </ids-error>
                </ids-text-input>
            \`
    };
  }
}`,...B.parameters?.docs?.source}}}})))()}H();export{B as Default,V as __namedExportsOrder,z as default};