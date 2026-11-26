import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{B as t,Gr as n,L as r,N as i,_ as a,g as o,qn as s,w as c,zr as l}from"./core-EfmSQQJi.js";import{a as u,l as d}from"./iframe-CsVPor_d.js";var f;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvZXhwYW5kYWJsZS1wYW5lbC9leHBhbmRhYmxlLXBhbmVsLmh0bWw(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvZXhwYW5kYWJsZS1wYW5lbC9leHBhbmRhYmxlLXBhbmVsLmh0bWw=e((()=>{f=`<ng-content />
`})))()}var p;function init_expandable_panel(){return(init_expandable_panel=e((()=>{p=`:host{interpolate-size:allow-keywords;height:0;transition:height var(--expand-duration,.3s) ease-out;flex-direction:column;display:flex;overflow:hidden}:host.open{height:auto}`})))()}var m;function init_expandable_panel$1(){return(init_expandable_panel$1=e((()=>{n(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvZXhwYW5kYWJsZS1wYW5lbC9leHBhbmRhYmxlLXBhbmVsLmh0bWw(),init_expandable_panel(),o(),m=class ExpandablePanel{isOpen=a.required();elementRef=s(r);expandDuration=c(()=>{let e=this.elementRef.nativeElement.scrollHeight,t=150+Math.sqrt(e)*5;return this.isOpen()?t:t*.66});static propDecorators={isOpen:[{type:t,args:[{isSignal:!0,alias:`isOpen`,required:!0,transform:void 0}]}]}},m=l([i({selector:`app-expandable-panel`,template:f,host:{"[class.open]":`isOpen()`,"[style.--expand-duration]":`expandDuration() + "ms"`},styles:[p]})],m)})))()}var h,g,_,v;function init_expandable_panel_stories(){return(init_expandable_panel_stories=e((()=>{n(),u(),init_expandable_panel$1(),o(),h=class DummyItemComponent{},h=l([i({selector:`app-dummy-item`,template:`<ng-content />`,host:{class:`list-item-box`}})],h),g={title:`Komponenty/Expandable Panel`,component:m,tags:[`autodocs`],decorators:[d({imports:[h]})]},_={args:{isOpen:!0,count:10},render:e=>({props:e,template:`
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
        `]})},v=[`Default`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}init_expandable_panel_stories();export{_ as Default,v as __namedExportsOrder,g as default};