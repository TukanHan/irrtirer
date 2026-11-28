import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{C as t,Hn as n,Or as r,P as i,Pr as a,V as o,_ as s,d as c,g as l,r as u}from"./core-BbWc11SJ.js";import{c as d,n as f}from"./common-BqXmStGT.js";import{l as p,n as m,o as h,s as g}from"./iframe-C94aL8VK.js";import{n as _,t as v}from"./flat-button-CSRarimf.js";var y;function init_scrollable_list(){return(init_scrollable_list=e((()=>{y=`:host{flex-direction:column;gap:6px;display:flex}:host .page-button{--mat-button-filled-container-height:28px;--mat-button-filled-container-shape:4px}`})))()}var b;function init_scrollable_list$1(){return(init_scrollable_list$1=e((()=>{a(),init_scrollable_list(),f(),l(),p(),_(),b=class ScrollableList{template=c.required(`element`);pageSize=s(50);items=s.required();page=n(1);itemsToShow=t(()=>{let e=this.pageSize(),t=(this.page()-1)*e;return this.items().slice(t,t+e)});hasPreviousPage=t(()=>this.page()>1);previousPageNumbers=t(()=>{let e=(this.page()-2)*this.pageSize()+1,t=(this.page()-1)*this.pageSize();return{from:Math.max(e,1),to:Math.min(t,this.items().length)}});hasNextPage=t(()=>this.page()*this.pageSize()<this.items().length);nextPageNumbers=t(()=>{let e=this.page()*this.pageSize()+1,t=(this.page()+1)*this.pageSize();return{from:Math.min(e,this.items().length),to:Math.min(t,this.items().length)}});goToPreviousPage(){this.hasPreviousPage()&&this.page.update(e=>e-1)}goToNextPage(){this.hasNextPage()&&this.page.update(e=>e+1)}static propDecorators={template:[{type:u,args:[`element`,{isSignal:!0}]}],pageSize:[{type:o,args:[{isSignal:!0,alias:`pageSize`,required:!1,transform:void 0}]}],items:[{type:o,args:[{isSignal:!0,alias:`items`,required:!0,transform:void 0}]}]}},b=r([i({selector:`app-scrollable-list`,imports:[d,v,g],template:`
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
    `,styles:[y]})],b)})))()}var x,S,C,w;function init_scrollable_list_stories(){return(init_scrollable_list_stories=e((()=>{a(),l(),m(),init_scrollable_list$1(),x=class DummyItemComponent{},x=r([i({selector:`app-dummy-item`,template:`<ng-content />`,host:{class:`list-item-box`}})],x),S={title:`Komponenty/Scrollable List`,component:b,tags:[`autodocs`],decorators:[h({imports:[x]})]},C={args:{items:Array.from({length:20},(e,t)=>`Item ${t+1}`),pageSize:5},render:e=>({props:e,template:`
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