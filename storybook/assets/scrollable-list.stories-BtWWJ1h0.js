import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{B as t,Lr as n,N as r,Ur as i,Zn as a,_ as o,d as s,g as c,r as l,w as u}from"./core-CjIc2X4A.js";import{c as d,n as f}from"./common-BjIF0DBO.js";import{l as p,n as m,o as h,s as g}from"./iframe-lGIe1z2d.js";import{n as _,t as v}from"./flat-button-CowMDr46.js";var y;function init_scrollable_list(){return(init_scrollable_list=e((()=>{y=`:host{flex-direction:column;gap:6px;display:flex}:host .page-button{--mat-button-filled-container-height:28px;--mat-button-filled-container-shape:4px}`})))()}var b;function init_scrollable_list$1(){return(init_scrollable_list$1=e((()=>{i(),init_scrollable_list(),f(),c(),p(),_(),b=class ScrollableList{template=s.required(`element`);pageSize=o(50);items=o.required();page=a(1);itemsToShow=u(()=>{let e=this.pageSize(),t=(this.page()-1)*e;return this.items().slice(t,t+e)});hasPreviousPage=u(()=>this.page()>1);previousPageNumbers=u(()=>{let e=(this.page()-2)*this.pageSize()+1,t=(this.page()-1)*this.pageSize();return{from:Math.max(e,1),to:Math.min(t,this.items().length)}});hasNextPage=u(()=>this.page()*this.pageSize()<this.items().length);nextPageNumbers=u(()=>{let e=this.page()*this.pageSize()+1,t=(this.page()+1)*this.pageSize();return{from:Math.min(e,this.items().length),to:Math.min(t,this.items().length)}});goToPreviousPage(){this.hasPreviousPage()&&this.page.update(e=>e-1)}goToNextPage(){this.hasNextPage()&&this.page.update(e=>e+1)}static propDecorators={template:[{type:l,args:[`element`,{isSignal:!0}]}],pageSize:[{type:t,args:[{isSignal:!0,alias:`pageSize`,required:!1,transform:void 0}]}],items:[{type:t,args:[{isSignal:!0,alias:`items`,required:!0,transform:void 0}]}]}},b=n([r({selector:`app-scrollable-list`,imports:[d,v,g],template:`
        @if (hasPreviousPage()) {
            @let previousPages = previousPageNumbers();
            <ids-flat-button class="page-button" (clicked)="goToPreviousPage()">
                {{ 'common.previousElements' | translate }} {{ previousPages.from }}-{{ previousPages.to }}
            </ids-flat-button>
        }

        @for (item of itemsToShow(); track $index) {
            <ng-container [ngTemplateOutlet]="template()" [ngTemplateOutletContext]="{ $implicit: item }" />
        }

        @if (hasNextPage()) {
            @let nextPages = nextPageNumbers();
            <ids-flat-button class="page-button" (clicked)="goToNextPage()">
                {{ 'common.nextElements' | translate }} {{ nextPages.from }}-{{ nextPages.to }}
            </ids-flat-button>
        }
    `,styles:[y]})],b)})))()}var x,S,C,w;function init_scrollable_list_stories(){return(init_scrollable_list_stories=e((()=>{i(),c(),m(),init_scrollable_list$1(),x=class DummyItemComponent{},x=n([r({selector:`app-dummy-item`,template:`<ng-content />`,host:{class:`list-item-box`}})],x),S={title:`Komponenty/Scrollable List`,component:b,tags:[`autodocs`],decorators:[h({imports:[x]})]},C={args:{items:Array.from({length:20},(e,t)=>`Item ${t+1}`),pageSize:5},render:e=>({props:e,template:`
            <app-scrollable-list [items]="items" [pageSize]="pageSize">
                <ng-template #element let-item>
                    <app-dummy-item>{{ item }}</app-dummy-item>
                </ng-template>
            </app-scrollable-list>
        `})},w=[`Default`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}}})))()}init_scrollable_list_stories();export{C as Default,w as __namedExportsOrder,S as default};