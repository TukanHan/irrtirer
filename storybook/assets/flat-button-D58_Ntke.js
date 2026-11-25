import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Hr as t,Ir as n,R as r,W as i,b as a,h as o,j as s,l as c,m as l}from"./core-CEfZiV_p.js";import{n as u,t as d}from"./ids-flat-action-BilS4kDM.js";import{n as f,t as p}from"./ids-action-DeEUlF3S.js";import{n as m,t as h}from"./clickable-BT4g8ff6.js";var g;function _(){return(_=e((()=>{g=`:host{--ids-glow-color:var(--ids-color-highlight);--ids-button-content-color:var(--ids-text-highlight-color)}:host .ids-flat-action.ids-flat-button--accent,:host .ids-flat-action.ids-flat-button--danger{--ids-button-text-shadow-idle:var(--ids-button-text-shadow-layer-1);--ids-button-text-shadow-hover:var(--ids-button-text-shadow-layer-1), var(--ids-button-text-shadow-layer-2)}:host .ids-flat-action.ids-flat-button--neutral{--ids-glow-color:var(--ids-text-color);--ids-button-content-color:var(--ids-text-color)}:host .ids-flat-action.ids-flat-button--accent{--ids-glow-color:var(--ids-color-highlight);--ids-button-content-color:var(--ids-text-highlight-color)}:host .ids-flat-action.ids-flat-button--danger{--ids-glow-color:var(--ids-color-danger);--ids-button-content-color:var(--ids-text-danger-color)}:host .ids-flat-action:disabled{opacity:.5;cursor:default}:host(.ids-flat-button--size-small){--ids-flat-button-size:32px}`})))()}var v;function y(){return(y=e((()=>{t(),_(),u(),f(),l(),m(),v=class{clicked=a();disabled=o(!1,{transform:c});variant=o(`neutral`);type=o(`button`);ariaLabel=o(``);static propDecorators={clicked:[{type:i,args:[`clicked`]}],disabled:[{type:r,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],variant:[{type:r,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}],type:[{type:r,args:[{isSignal:!0,alias:`type`,required:!1,transform:void 0}]}],ariaLabel:[{type:r,args:[{isSignal:!0,alias:`ariaLabel`,required:!1,transform:void 0}]}]}},v=n([s({selector:`ids-flat-button`,providers:[{provide:h,useExisting:v}],template:`
        <button
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
    `,styles:[g,d,p]})],v)})))()}export{y as n,v as t};