var m=Object.defineProperty;var a=(n,s)=>m(n,"name",{value:s,configurable:!0});import{L as d,m as u,M as h,N as x,O as f,H as l,Q as r,T as c,J as g}from"./iframe-BA8P8WBF.js";import"./preload-helper-Cc2_yIPf.js";const O="<ng-content />",y=":host{display:flex;flex-direction:column;overflow:hidden;height:0;interpolate-size:allow-keywords;transition:height var(--expand-duration, .3s) ease-out}:host.open{height:auto}";var e;let o=(e=class{constructor(){this.isOpen=d.required(),this.elementRef=u(h),this.expandDuration=x(()=>{const s=this.elementRef.nativeElement.scrollHeight,p=150+Math.sqrt(s)*5;return this.isOpen()?p:p*.66})}},a(e,"ExpandablePanelComponent"),e.propDecorators={isOpen:[{type:f,args:[{isSignal:!0,alias:"isOpen",required:!0,transform:void 0}]}]},e);o=l([r({selector:"app-expandable-panel",template:O,changeDetection:c.OnPush,host:{"[class.open]":"isOpen()","[style.--expand-duration]":'expandDuration() + "ms"'},styles:[y]})],o);var t;let i=(t=class{},a(t,"DummyItemComponent"),t);i=l([r({selector:"app-dummy-item",template:"<ng-content />",changeDetection:c.OnPush,host:{class:"list-item-box"}})],i);const C={title:"Komponenty/Expandable Panel",component:o,tags:["autodocs"],decorators:[g({imports:[i]})]},R={args:{isOpen:!0,count:10},render:a(n=>({props:n,template:`
            <app-expandable-panel class="panel" [isOpen]="isOpen">
                @for (item of [].constructor(${n.count}); track $index) {
                    <app-dummy-item>Item {{ $index + 1 }}</app-dummy-item>
                }
            </app-expandable-panel>
        `,styles:[`
            .panel {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
        `]}),"render")},b=["Default"];export{R as Default,b as __namedExportsOrder,C as default};
