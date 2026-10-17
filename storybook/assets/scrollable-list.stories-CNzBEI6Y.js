import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{E as t,In as n,M as r,Tr as i,h as a,m as o,r as s,u as c,x as l,yr as u}from"./core-QBUKwUZA.js";import{n as d,s as f}from"./common-BPUSdxxt.js";import{a as p,i as m,n as h,s as g}from"./iframe-CK5o0V39.js";import{r as _,t as v}from"./button-DZD2MFT7.js";var y;function b(){return(b=e((()=>{y=`@if(hasPreviousPage()) {
    @let previousPages = previousPageNumbers();
    <button mat-flat-button class="page-button previous" (click)="goToPreviousPage()">
        {{ 'common.previousElements' | translate }} {{ previousPages.from }}-{{ previousPages.to }}
    </button>
}
@for(item of itemsToShow(); track $index) {
    <ng-container [ngTemplateOutlet]="template()" [ngTemplateOutletContext]="{ $implicit: item }"/>
}
@if(hasNextPage()) {
    @let nextPages = nextPageNumbers();
    <button mat-flat-button class="page-button next" (click)="goToNextPage()">
        {{ 'common.nextElements' | translate }} {{ nextPages.from }}-{{ nextPages.to }}
    </button>
}`})))()}var x;function S(){return(S=e((()=>{x=`:host{flex-direction:column;gap:6px;display:flex}:host .page-button{--mat-button-filled-container-height:28px;--mat-button-filled-container-shape:4px}`})))()}var C;function w(){return(w=e((()=>{i(),b(),S(),d(),o(),_(),m(),C=class{template=c.required(`element`);pageSize=a(50);items=a.required();page=n(1);itemsToShow=l(()=>{let e=this.pageSize(),t=(this.page()-1)*e;return this.items().slice(t,t+e)});hasPreviousPage=l(()=>this.page()>1);previousPageNumbers=l(()=>{let e=(this.page()-2)*this.pageSize()+1,t=(this.page()-1)*this.pageSize();return{from:Math.max(e,1),to:Math.min(t,this.items().length)}});hasNextPage=l(()=>this.page()*this.pageSize()<this.items().length);nextPageNumbers=l(()=>{let e=this.page()*this.pageSize()+1,t=(this.page()+1)*this.pageSize();return{from:Math.min(e,this.items().length),to:Math.min(t,this.items().length)}});goToPreviousPage(){this.hasPreviousPage()&&this.page.update(e=>e-1)}goToNextPage(){this.hasNextPage()&&this.page.update(e=>e+1)}static propDecorators={template:[{type:s,args:[`element`,{isSignal:!0}]}],pageSize:[{type:r,args:[{isSignal:!0,alias:`pageSize`,required:!1,transform:void 0}]}],items:[{type:r,args:[{isSignal:!0,alias:`items`,required:!0,transform:void 0}]}]}},C=u([t({selector:`app-scrollable-list`,imports:[f,v,h],template:y,styles:[x]})],C)})))()}var T,E,D,O;function k(){return(k=e((()=>{i(),p(),w(),o(),T=class{},T=u([t({selector:`app-dummy-item`,template:`<ng-content />`,host:{class:`list-item-box`}})],T),E={title:`Komponenty/Scrollable List`,component:C,tags:[`autodocs`],decorators:[g({imports:[T]})]},D={args:{items:Array.from({length:20},(e,t)=>`Item ${t+1}`),pageSize:5},render:e=>({props:e,template:`
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