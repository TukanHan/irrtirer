import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{B as t,Kn as n,L as r,Lr as i,N as a,Ur as o,_ as s,g as c,w as l}from"./core-CjIc2X4A.js";import{n as u,o as d}from"./iframe-BWokwxzY.js";var f;function init_expandable_panel(){return(init_expandable_panel=e((()=>{f=`:host{interpolate-size:allow-keywords;height:0;transition:height var(--expand-duration,.3s) ease-out;flex-direction:column;display:flex;overflow:hidden}:host.open{height:auto}`})))()}var p;function init_expandable_panel$1(){return(init_expandable_panel$1=e((()=>{o(),init_expandable_panel(),c(),p=class ExpandablePanel{isOpen=s.required();elementRef=n(r);expandDuration=l(()=>{let e=this.elementRef.nativeElement.scrollHeight,t=150+Math.sqrt(e)*5;return this.isOpen()?t:t*.66});static propDecorators={isOpen:[{type:t,args:[{isSignal:!0,alias:`isOpen`,required:!0,transform:void 0}]}]}},p=i([a({selector:`app-expandable-panel`,template:`<ng-content />`,host:{"[class.open]":`isOpen()`,"[style.--expand-duration]":`expandDuration() + "ms"`},styles:[f]})],p)})))()}var m,h,g,_;function init_expandable_panel_stories(){return(init_expandable_panel_stories=e((()=>{o(),c(),u(),init_expandable_panel$1(),m=class DummyItemComponent{},m=i([a({selector:`app-dummy-item`,template:`<ng-content />`,host:{class:`list-item-box`}})],m),h={title:`Komponenty/Expandable Panel`,component:p,tags:[`autodocs`],decorators:[d({imports:[m]})]},g={args:{isOpen:!0,count:10},render:e=>({props:e,template:`
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
        `]})},_=[`Default`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}init_expandable_panel_stories();export{g as Default,_ as __namedExportsOrder,h as default};