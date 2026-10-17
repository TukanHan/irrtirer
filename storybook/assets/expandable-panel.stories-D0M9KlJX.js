import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{E as t,M as n,Mn as r,Tr as i,h as a,k as o,m as s,x as c,yr as l}from"./core-QBUKwUZA.js";import{a as u,s as d}from"./iframe-UCu6rKBn.js";var f;function p(){return(p=e((()=>{f=`<ng-content />
`})))()}var m;function h(){return(h=e((()=>{m=`:host{interpolate-size:allow-keywords;height:0;transition:height var(--expand-duration,.3s) ease-out;flex-direction:column;display:flex;overflow:hidden}:host.open{height:auto}`})))()}var g;function _(){return(_=e((()=>{i(),p(),h(),s(),g=class{isOpen=a.required();elementRef=r(o);expandDuration=c(()=>{let e=this.elementRef.nativeElement.scrollHeight,t=150+Math.sqrt(e)*5;return this.isOpen()?t:t*.66});static propDecorators={isOpen:[{type:n,args:[{isSignal:!0,alias:`isOpen`,required:!0,transform:void 0}]}]}},g=l([t({selector:`app-expandable-panel`,template:f,host:{"[class.open]":`isOpen()`,"[style.--expand-duration]":`expandDuration() + "ms"`},styles:[m]})],g)})))()}var v,y,b,x;function S(){return(S=e((()=>{i(),u(),_(),s(),v=class{},v=l([t({selector:`app-dummy-item`,template:`<ng-content />`,host:{class:`list-item-box`}})],v),y={title:`Komponenty/Expandable Panel`,component:g,tags:[`autodocs`],decorators:[d({imports:[v]})]},b={args:{isOpen:!0,count:10},render:e=>({props:e,template:`
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
        `]})},x=[`Default`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    count: 10
  },
  render: args => ({
    props: args,
    template: \`
            <app-expandable-panel class="panel" [isOpen]="isOpen">
                @for (item of [].constructor(\${args.count}); track $index) {
                    <app-dummy-item>Item {{ $index + 1 }}</app-dummy-item>
                }
            </app-expandable-panel>
        \`,
    styles: [\`
            .panel {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
        \`]
  })
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as Default,x as __namedExportsOrder,y as default};