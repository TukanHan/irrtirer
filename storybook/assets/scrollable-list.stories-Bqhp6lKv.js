import{i as e}from"./preload-helper-xPQekRTU.js";import{E as t,Ln as n,M as r,h as i,m as a,oi as o,r as s,si as c,u as l,x as u}from"./core-Chtm1_Da.js";import{a as d,at as f,r as p,rt as m,s as h,t as g}from"./iframe-CrPRH3I1.js";import{r as _,t as v}from"./button-36l8uHSj.js";var y,b=e((()=>{y=`@if(hasPreviousPage()) {
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
}`})),x,S=e((()=>{x=`:host{flex-direction:column;gap:6px;display:flex}:host .page-button{--mat-button-filled-container-height:28px;--mat-button-filled-container-shape:4px}`})),C,w=e((()=>{c(),b(),S(),m(),a(),_(),p(),C=class{constructor(){this.template=l.required(`element`),this.pageSize=i(50),this.items=i.required(),this.page=n(1),this.itemsToShow=u(()=>{let e=this.pageSize(),t=(this.page()-1)*e;return this.items().slice(t,t+e)}),this.hasPreviousPage=u(()=>this.page()>1),this.previousPageNumbers=u(()=>{let e=(this.page()-2)*this.pageSize()+1,t=(this.page()-1)*this.pageSize();return{from:Math.max(e,1),to:Math.min(t,this.items().length)}}),this.hasNextPage=u(()=>this.page()*this.pageSize()<this.items().length),this.nextPageNumbers=u(()=>{let e=this.page()*this.pageSize()+1,t=(this.page()+1)*this.pageSize();return{from:Math.min(e,this.items().length),to:Math.min(t,this.items().length)}})}goToPreviousPage(){this.hasPreviousPage()&&this.page.update(e=>e-1)}goToNextPage(){this.hasNextPage()&&this.page.update(e=>e+1)}static{this.propDecorators={template:[{type:s,args:[`element`,{isSignal:!0}]}],pageSize:[{type:r,args:[{isSignal:!0,alias:`pageSize`,required:!1,transform:void 0}]}],items:[{type:r,args:[{isSignal:!0,alias:`items`,required:!0,transform:void 0}]}]}}},C=o([t({selector:`app-scrollable-list`,imports:[f,v,g],template:y,styles:[x]})],C)})),T,E,D,O;e((()=>{c(),d(),w(),a(),T=class{},T=o([t({selector:`app-dummy-item`,template:`<ng-content />`,host:{class:`list-item-box`}})],T),E={title:`Komponenty/Scrollable List`,component:C,tags:[`autodocs`],decorators:[h({imports:[T]})]},D={args:{items:Array.from({length:20},(e,t)=>`Item ${t+1}`),pageSize:5},render:e=>({props:e,template:`
            <app-scrollable-list [items]="items" [pageSize]="pageSize">
                <ng-template #element let-item>
                    <app-dummy-item>{{ item }}</app-dummy-item>
                </ng-template>
            </app-scrollable-list>
        `})},O=[`Default`]}))();export{D as Default,O as __namedExportsOrder,E as default};