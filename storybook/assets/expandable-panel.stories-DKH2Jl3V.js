import{i as e}from"./preload-helper-xPQekRTU.js";import{E as t,M as n,Nn as r,h as i,k as a,m as o,oi as s,si as c,x as l}from"./core-Chtm1_Da.js";import{a as u,s as d}from"./iframe-CrPRH3I1.js";var f,p=e((()=>{f=`<ng-content />`})),m,h=e((()=>{m=`:host{interpolate-size:allow-keywords;height:0;transition:height var(--expand-duration,.3s) ease-out;flex-direction:column;display:flex;overflow:hidden}:host.open{height:auto}`})),g,_=e((()=>{c(),p(),h(),o(),g=class{constructor(){this.isOpen=i.required(),this.elementRef=r(a),this.expandDuration=l(()=>{let e=this.elementRef.nativeElement.scrollHeight,t=150+Math.sqrt(e)*5;return this.isOpen()?t:t*.66})}static{this.propDecorators={isOpen:[{type:n,args:[{isSignal:!0,alias:`isOpen`,required:!0,transform:void 0}]}]}}},g=s([t({selector:`app-expandable-panel`,template:f,host:{"[class.open]":`isOpen()`,"[style.--expand-duration]":`expandDuration() + "ms"`},styles:[m]})],g)})),v,y,b,x;e((()=>{c(),u(),_(),o(),v=class{},v=s([t({selector:`app-dummy-item`,template:`<ng-content />`,host:{class:`list-item-box`}})],v),y={title:`Komponenty/Expandable Panel`,component:g,tags:[`autodocs`],decorators:[d({imports:[v]})]},b={args:{isOpen:!0,count:10},render:e=>({props:e,template:`
            <app-expandable-panel class="panel" [isOpen]="isOpen">
                @for (item of [].constructor(${e.count}); track $index) {
                    <app-dummy-item>Item {{ $index + 1 }}</app-dummy-item>
                }
            </app-expandable-panel>
        `,styles:[`
            .panel {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
        `]})},x=[`Default`]}))();export{b as Default,x as __namedExportsOrder,y as default};