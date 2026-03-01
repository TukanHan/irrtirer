var c=Object.defineProperty;var n=(o,t)=>c(o,"name",{value:t,configurable:!0});import{T as d,J as p,s as f,L as i,M as l,U as P,N as g,O as u,P as h,V as x,W as S,Q as b}from"./iframe-BcbxFC_P.js";import{M as _}from"./button-7FlWUGCU.js";import"./preload-helper-Cc2_yIPf.js";import"./_icon-button-chunk-BYVx1Iu8.js";import"./_animation-chunk-Di97M2KK.js";import"./bidi-arVrUqcx.js";const z=`@if(hasPreviousPage()) {
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
}`,N=":host{display:flex;flex-direction:column;gap:6px}:host .page-button{--mat-button-filled-container-height: 28px;--mat-button-filled-container-shape: 4px}";var e;let r=(e=class{constructor(){this.template=d.required("element"),this.pageSize=p(50),this.items=p.required(),this.page=f(1),this.itemsToShow=i(()=>{const t=this.pageSize(),s=(this.page()-1)*t;return this.items().slice(s,s+t)}),this.hasPreviousPage=i(()=>this.page()>1),this.previousPageNumbers=i(()=>{const t=(this.page()-2)*this.pageSize()+1,s=(this.page()-1)*this.pageSize();return{from:Math.max(t,1),to:Math.min(s,this.items().length)}}),this.hasNextPage=i(()=>this.page()*this.pageSize()<this.items().length),this.nextPageNumbers=i(()=>{const t=this.page()*this.pageSize()+1,s=(this.page()+1)*this.pageSize();return{from:Math.min(t,this.items().length),to:Math.min(s,this.items().length)}})}goToPreviousPage(){this.hasPreviousPage()&&this.page.update(t=>t-1)}goToNextPage(){this.hasNextPage()&&this.page.update(t=>t+1)}},n(e,"ScrollableListComponent"),e.propDecorators={template:[{type:P,args:["element",{isSignal:!0}]}],pageSize:[{type:l,args:[{isSignal:!0,alias:"pageSize",required:!1,transform:void 0}]}],items:[{type:l,args:[{isSignal:!0,alias:"items",required:!0,transform:void 0}]}]},e);r=g([u({selector:"app-scrollable-list",imports:[x,_,S],template:z,changeDetection:h.OnPush,styles:[N]})],r);var a;let m=(a=class{},n(a,"DummyItemComponent"),a);m=g([u({selector:"app-dummy-item",template:"<ng-content />",changeDetection:h.OnPush,host:{class:"list-item-box"}})],m);const E={title:"Komponenty/Scrollable List",component:r,tags:["autodocs"],decorators:[b({imports:[m]})]},I={args:{items:Array.from({length:20},(o,t)=>`Item ${t+1}`),pageSize:5},render:n(o=>({props:o,template:`
            <app-scrollable-list [items]="items" [pageSize]="pageSize">
                <ng-template #element let-item>
                    <app-dummy-item>{{ item }}</app-dummy-item>
                </ng-template>
            </app-scrollable-list>
        `}),"render")},q=["Default"];export{I as Default,q as __namedExportsOrder,E as default};
