import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{B as t,C as n,Gr as r,K as i,N as a,S as o,_ as s,c,g as l,u,zr as d}from"./core-CXH6MCZn.js";import{n as f,t as p}from"./ids-flat-action-BilS4kDM.js";import{n as m,t as h}from"./ids-action-DeEUlF3S.js";import{n as g,t as _}from"./native-control-host-8opjO8t-.js";var v;function y(){return(y=e((()=>{v=`:host{--ids-glow-color:var(--ids-color-highlight);--ids-button-content-color:var(--ids-text-highlight-color)}:host .ids-flat-action.ids-flat-button--accent,:host .ids-flat-action.ids-flat-button--danger{--ids-button-text-shadow-idle:var(--ids-button-text-shadow-layer-1);--ids-button-text-shadow-hover:var(--ids-button-text-shadow-layer-1), var(--ids-button-text-shadow-layer-2)}:host .ids-flat-action.ids-flat-button--neutral{--ids-glow-color:var(--ids-text-color);--ids-button-content-color:var(--ids-text-color)}:host .ids-flat-action.ids-flat-button--accent{--ids-glow-color:var(--ids-color-highlight);--ids-button-content-color:var(--ids-text-highlight-color)}:host .ids-flat-action.ids-flat-button--danger{--ids-glow-color:var(--ids-color-danger);--ids-button-content-color:var(--ids-text-danger-color)}:host .ids-flat-action:disabled{opacity:.5;cursor:default}:host(.ids-flat-button--size-small){--ids-flat-button-size:32px}`})))()}var b;function x(){return(x=e((()=>{r(),y(),f(),m(),l(),g(),b=class{clicked=o();disabled=s(!1,{transform:u});variant=s(`neutral`);type=s(`button`);ariaLabel=s(``);nativeControl=n.required(`control`);static propDecorators={clicked:[{type:i,args:[`clicked`]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],variant:[{type:t,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}],type:[{type:t,args:[{isSignal:!0,alias:`type`,required:!1,transform:void 0}]}],ariaLabel:[{type:t,args:[{isSignal:!0,alias:`ariaLabel`,required:!1,transform:void 0}]}],nativeControl:[{type:c,args:[`control`,{isSignal:!0}]}]}},b=d([a({selector:`ids-flat-button`,providers:[{provide:_,useExisting:b}],template:`
        <button
            #control
            class="ids-flat-action ids-flat-button--{{ variant() }}"
            [disabled]="disabled()"
            [type]="type()"
            [attr.aria-label]="ariaLabel() || null"
            (click)="clicked.emit($event)"
        >
            <span class="ids-flat-action-content ids-button-label">
                <ng-content />
            </span>
        </button>
    `,styles:[v,p,h]})],b)})))()}export{x as n,b as t};