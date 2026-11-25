import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Hr as t,Ir as n,R as r,S as i,W as a,Yn as o,b as s,h as c,j as l,l as u,m as d,v as f}from"./core-CEfZiV_p.js";import{a as p,c as m,d as h,h as g}from"./iframe-C-iYSAmD.js";import{n as _,t as v}from"./icon-DAIleJwC.js";import{n as y,t as b}from"./flat-button-BZfNFv9G.js";import{a as x,c as S,d as C,i as w,l as T,n as E,o as D,r as O,s as k,t as A,u as j}from"./suffix-SrS4LM5r.js";import{i as M,n as N,o as P,r as F,s as I}from"./signals-CAPhiivB.js";var L;function R(){return(R=e((()=>{L=`:host{display:block}:host .input{outline:none;width:100%}`})))()}var z;function B(){return(B=e((()=>{t(),R(),d(),j(),D(),z=class{touch=s();value=f(``);label=c(``);disabled=c(!1,{transform:u});required=c(!1,{transform:u});placeholder=c(``);invalid=c(!1,{transform:u});touched=c(!1,{transform:u});showError=i(()=>this.invalid()&&this.touched()&&!this.disabled());identifier=C(e=>`ids-text-input-${e}`);static propDecorators={touch:[{type:a,args:[`touch`]}],value:[{type:r,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:a,args:[`valueChange`]}],label:[{type:r,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],disabled:[{type:r,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],required:[{type:r,args:[{isSignal:!0,alias:`required`,required:!1,transform:void 0}]}],placeholder:[{type:r,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],invalid:[{type:r,args:[{isSignal:!0,alias:`invalid`,required:!1,transform:void 0}]}],touched:[{type:r,args:[{isSignal:!0,alias:`touched`,required:!1,transform:void 0}]}]}},z=n([l({selector:`ids-text-input`,imports:[x],hostDirectives:[T],template:`
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
                [attr.aria-invalid]="showError() ? 'true' : null"
                type="text"
                class="input"
                [id]="identifier"
            />
            <ng-content select="[idsSuffix]" ngProjectAs="[idsSuffix]" />
            <ng-content select="ids-error" ngProjectAs="ids-error" />
        </ids-form-field>
    `,styles:[L]})],z)})))()}var V,H,U,W;function G(){return(G=e((()=>{_(),p(),d(),M(),h(),S(),w(),E(),y(),B(),V=g(),H={title:`Design System/Text Input`,component:z,tags:[`autodocs`],loaders:[async()=>({injector:(await V).injector})],decorators:[m({imports:[v,N,k,O,A,b]})],argTypes:{value:{control:`text`,table:{category:`Playground`}},showPrefix:{control:`boolean`,table:{category:`Playground`}},showSuffix:{control:`boolean`,table:{category:`Playground`}},label:{control:`text`,table:{category:`Inputs`}},placeholder:{control:`text`,table:{category:`Inputs`}},disabled:{control:`boolean`,table:{category:`Inputs`}},required:{control:`boolean`,table:{category:`Inputs`}}}},U={args:{value:`Lorem ipsum`,showPrefix:!1,showSuffix:!1,label:`Label`,placeholder:`Dolor sit amet`,disabled:!1,required:!1},render:(e,{loaded:t})=>{let n=o({query:String(e.value)}),r=I(n,t=>{P(t.query,{message:`Lorem ipsum dolor sit amet`,when:()=>!!e.required}),F(t.query,{when:()=>!!e.disabled})},{injector:t.injector});return{props:{...e,searchForm:r},template:`
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
            `}}},W=[`Default`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}}})))()}G();export{U as Default,W as __namedExportsOrder,H as default};