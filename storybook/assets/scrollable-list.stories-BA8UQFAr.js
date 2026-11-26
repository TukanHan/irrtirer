import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{B as t,Gr as n,N as r,Qn as i,_ as a,d as o,g as s,r as c,w as l,zr as u}from"./core-EfmSQQJi.js";import{c as d,n as f}from"./common-BEPtGlFT.js";import{a as p,i as m,l as h,n as g}from"./iframe-DD8FPAMb.js";import{n as _,t as v}from"./flat-button-CYZCOWOu.js";var y;function init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvc2Nyb2xsYWJsZS1saXN0L3Njcm9sbGFibGUtbGlzdC5odG1s(){return(init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvc2Nyb2xsYWJsZS1saXN0L3Njcm9sbGFibGUtbGlzdC5odG1s=e((()=>{y=`@if (hasPreviousPage()) { @let previousPages = previousPageNumbers();
<ids-flat-button class="page-button" (clicked)="goToPreviousPage()">
    {{ 'common.previousElements' | translate }} {{ previousPages.from }}-{{ previousPages.to }}
</ids-flat-button>
} @for (item of itemsToShow(); track $index) {
<ng-container [ngTemplateOutlet]="template()" [ngTemplateOutletContext]="{ $implicit: item }" />
} @if (hasNextPage()) { @let nextPages = nextPageNumbers();
<ids-flat-button class="page-button" (clicked)="goToNextPage()">
    {{ 'common.nextElements' | translate }} {{ nextPages.from }}-{{ nextPages.to }}
</ids-flat-button>
}
`})))()}var b;function init_scrollable_list(){return(init_scrollable_list=e((()=>{b=`:host{flex-direction:column;gap:6px;display:flex}:host .page-button{--mat-button-filled-container-height:28px;--mat-button-filled-container-shape:4px}`})))()}var x;function init_scrollable_list$1(){return(init_scrollable_list$1=e((()=>{n(),init_vite_plugin_angular_raw_L2hvbWUvcnVubmVyL3dvcmsvaXJydGlyZXIvaXJydGlyZXIvZnJvbnRlbmQvcHJvamVjdHMvaXJydGlyZXIvc3JjL2FwcC9zaGFyZWQvc2Nyb2xsYWJsZS1saXN0L3Njcm9sbGFibGUtbGlzdC5odG1s(),init_scrollable_list(),f(),s(),m(),_(),x=class ScrollableList{template=o.required(`element`);pageSize=a(50);items=a.required();page=i(1);itemsToShow=l(()=>{let e=this.pageSize(),t=(this.page()-1)*e;return this.items().slice(t,t+e)});hasPreviousPage=l(()=>this.page()>1);previousPageNumbers=l(()=>{let e=(this.page()-2)*this.pageSize()+1,t=(this.page()-1)*this.pageSize();return{from:Math.max(e,1),to:Math.min(t,this.items().length)}});hasNextPage=l(()=>this.page()*this.pageSize()<this.items().length);nextPageNumbers=l(()=>{let e=this.page()*this.pageSize()+1,t=(this.page()+1)*this.pageSize();return{from:Math.min(e,this.items().length),to:Math.min(t,this.items().length)}});goToPreviousPage(){this.hasPreviousPage()&&this.page.update(e=>e-1)}goToNextPage(){this.hasNextPage()&&this.page.update(e=>e+1)}static propDecorators={template:[{type:c,args:[`element`,{isSignal:!0}]}],pageSize:[{type:t,args:[{isSignal:!0,alias:`pageSize`,required:!1,transform:void 0}]}],items:[{type:t,args:[{isSignal:!0,alias:`items`,required:!0,transform:void 0}]}]}},x=u([r({selector:`app-scrollable-list`,imports:[d,v,g],template:y,styles:[b]})],x)})))()}var S,C,w,T;function init_scrollable_list_stories(){return(init_scrollable_list_stories=e((()=>{n(),p(),init_scrollable_list$1(),s(),S=class DummyItemComponent{},S=u([r({selector:`app-dummy-item`,template:`<ng-content />`,host:{class:`list-item-box`}})],S),C={title:`Komponenty/Scrollable List`,component:x,tags:[`autodocs`],decorators:[h({imports:[S]})]},w={args:{items:Array.from({length:20},(e,t)=>`Item ${t+1}`),pageSize:5},render:e=>({props:e,template:`
            <app-scrollable-list [items]="items" [pageSize]="pageSize">
                <ng-template #element let-item>
                    <app-dummy-item>{{ item }}</app-dummy-item>
                </ng-template>
            </app-scrollable-list>
        `})},T=[`Default`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: Array.from({
      length: 20
    }, (_, i) => \`Item \${i + 1}\`),
    pageSize: 5
  },
  render: args => ({
    props: args,
    template: \`
            <app-scrollable-list [items]="items" [pageSize]="pageSize">
                <ng-template #element let-item>
                    <app-dummy-item>{{ item }}</app-dummy-item>
                </ng-template>
            </app-scrollable-list>
        \`
  })
}`,...w.parameters?.docs?.source}}}})))()}init_scrollable_list_stories();export{w as Default,T as __namedExportsOrder,C as default};