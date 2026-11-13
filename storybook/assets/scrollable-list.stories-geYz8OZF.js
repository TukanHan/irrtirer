import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{I as t,Kn as n,Nr as r,S as i,h as a,k as o,m as s,r as c,u as l,zr as u}from"./core-_WelOpXh.js";import{c as d,n as f}from"./common-BG1WE-39.js";import{a as p,c as m,i as h,n as g}from"./iframe-D3VywTuv.js";import{n as _,t as v}from"./button-CuV20K4Y.js";var y;function b(){return(b=e((()=>{y=`@if (hasPreviousPage()) {
    @let previousPages = previousPageNumbers();
    <button mat-flat-button class="page-button previous" (click)="goToPreviousPage()">
        {{ 'common.previousElements' | translate }} {{ previousPages.from }}-{{ previousPages.to }}
    </button>
}
@for (item of itemsToShow(); track $index) {
    <ng-container [ngTemplateOutlet]="template()" [ngTemplateOutletContext]="{ $implicit: item }" />
}
@if (hasNextPage()) {
    @let nextPages = nextPageNumbers();
    <button mat-flat-button class="page-button next" (click)="goToNextPage()">
        {{ 'common.nextElements' | translate }} {{ nextPages.from }}-{{ nextPages.to }}
    </button>
}
`})))()}var x;function S(){return(S=e((()=>{x=`:host{flex-direction:column;gap:6px;display:flex}:host .page-button{--mat-button-filled-container-height:28px;--mat-button-filled-container-shape:4px}`})))()}var C;function w(){return(w=e((()=>{u(),b(),S(),f(),s(),_(),h(),C=class{template=l.required(`element`);pageSize=a(50);items=a.required();page=n(1);itemsToShow=i(()=>{let e=this.pageSize(),t=(this.page()-1)*e;return this.items().slice(t,t+e)});hasPreviousPage=i(()=>this.page()>1);previousPageNumbers=i(()=>{let e=(this.page()-2)*this.pageSize()+1,t=(this.page()-1)*this.pageSize();return{from:Math.max(e,1),to:Math.min(t,this.items().length)}});hasNextPage=i(()=>this.page()*this.pageSize()<this.items().length);nextPageNumbers=i(()=>{let e=this.page()*this.pageSize()+1,t=(this.page()+1)*this.pageSize();return{from:Math.min(e,this.items().length),to:Math.min(t,this.items().length)}});goToPreviousPage(){this.hasPreviousPage()&&this.page.update(e=>e-1)}goToNextPage(){this.hasNextPage()&&this.page.update(e=>e+1)}static propDecorators={template:[{type:c,args:[`element`,{isSignal:!0}]}],pageSize:[{type:t,args:[{isSignal:!0,alias:`pageSize`,required:!1,transform:void 0}]}],items:[{type:t,args:[{isSignal:!0,alias:`items`,required:!0,transform:void 0}]}]}},C=r([o({selector:`app-scrollable-list`,imports:[d,v,g],template:y,styles:[x]})],C)})))()}var T,E,D,O;function k(){return(k=e((()=>{u(),p(),w(),s(),T=class{},T=r([o({selector:`app-dummy-item`,template:`<ng-content />`,host:{class:`list-item-box`}})],T),E={title:`Komponenty/Scrollable List`,component:C,tags:[`autodocs`],decorators:[m({imports:[T]})]},D={args:{items:Array.from({length:20},(e,t)=>`Item ${t+1}`),pageSize:5},render:e=>({props:e,template:`
            <app-scrollable-list [items]="items" [pageSize]="pageSize">
                <ng-template #element let-item>
                    <app-dummy-item>{{ item }}</app-dummy-item>
                </ng-template>
            </app-scrollable-list>
        `})},O=[`Default`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as Default,O as __namedExportsOrder,E as default};