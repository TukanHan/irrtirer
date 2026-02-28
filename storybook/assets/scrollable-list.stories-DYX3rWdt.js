var c=Object.defineProperty;var n=(o,t)=>c(o,"name",{value:t,configurable:!0});import{j as d,i as p,s as f,e as i,I as l,k as P,f as g,C as h,h as u,N as x,T as S,m as b}from"./iframe-ZbkurkVF.js";import{M as _}from"./button-CgqOzLcz.js";import"./preload-helper-Cc2_yIPf.js";import"./_animation-chunk-6AHRSK07.js";const z=`@if(hasPreviousPage()) {
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
}`,N=":host{display:flex;flex-direction:column;gap:6px}:host .page-button{--mat-button-filled-container-height: 28px;--mat-button-filled-container-shape: 4px}";var e;let m=(e=class{constructor(){this.template=d.required("element"),this.pageSize=p(50),this.items=p.required(),this.page=f(1),this.itemsToShow=i(()=>{const t=this.pageSize(),s=(this.page()-1)*t;return this.items().slice(s,s+t)}),this.hasPreviousPage=i(()=>this.page()>1),this.previousPageNumbers=i(()=>{const t=(this.page()-2)*this.pageSize()+1,s=(this.page()-1)*this.pageSize();return{from:Math.max(t,1),to:Math.min(s,this.items().length)}}),this.hasNextPage=i(()=>this.page()*this.pageSize()<this.items().length),this.nextPageNumbers=i(()=>{const t=this.page()*this.pageSize()+1,s=(this.page()+1)*this.pageSize();return{from:Math.min(t,this.items().length),to:Math.min(s,this.items().length)}})}goToPreviousPage(){this.hasPreviousPage()&&this.page.update(t=>t-1)}goToNextPage(){this.hasNextPage()&&this.page.update(t=>t+1)}},n(e,"ScrollableListComponent"),e.propDecorators={template:[{type:P,args:["element",{isSignal:!0}]}],pageSize:[{type:l,args:[{isSignal:!0,alias:"pageSize",required:!1,transform:void 0}]}],items:[{type:l,args:[{isSignal:!0,alias:"items",required:!0,transform:void 0}]}]},e);m=g([h({selector:"app-scrollable-list",imports:[x,_,S],template:z,changeDetection:u.OnPush,styles:[N]})],m);var a;let r=(a=class{},n(a,"DummyItemComponent"),a);r=g([h({selector:"app-dummy-item",template:"<ng-content />",changeDetection:u.OnPush,host:{class:"list-item-box"}})],r);const O={title:"Komponenty/Scrollable List",component:m,tags:["autodocs"],decorators:[b({imports:[r]})]},D={args:{items:Array.from({length:20},(o,t)=>`Item ${t+1}`),pageSize:5},render:n(o=>({props:o,template:`
            <app-scrollable-list [items]="items" [pageSize]="pageSize">
                <ng-template #element let-item>
                    <app-dummy-item>{{ item }}</app-dummy-item>
                </ng-template>
            </app-scrollable-list>
        `}),"render")},E=["Default"];export{D as Default,E as __namedExportsOrder,O as default};
