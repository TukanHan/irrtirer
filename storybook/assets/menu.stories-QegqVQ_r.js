import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{B as t,C as n,Dr as r,Gr as i,Hn as ee,I as te,J as a,K as o,L as s,N as c,Or as l,Qn as u,S as d,Tn as ne,X as re,Yn as f,_ as p,c as ie,dt as m,f as h,g,i as ae,l as oe,nr as _,or as v,qn as y,rr as se,sr as b,u as ce,zr as x}from"./core-EfmSQQJi.js";import{S as le,t as ue,u as S,x as C}from"./_overlay-module-chunk-CmPuui0V.js";import{n as w,t as T}from"./tap-EHKZdzYv.js";import{i as E,r as D}from"./skip-C_tNwTsk.js";import{n as O,t as k}from"./debounceTime-_cp624Pk.js";import{a as A,l as j}from"./iframe-DXJSi4si.js";import{n as M,t as N}from"./icon-D_Yr7r7z.js";import{a as P,n as F,t as I}from"./public-api-kSsOUlhl.js";import{n as de,t as L}from"./elem-builder-B342_OgR.js";import{n as R,t as z}from"./native-control-host-Dz9uLof1.js";import{n as B,t as V}from"./identity-counter-B6F6f35I.js";import{n as H,t as fe}from"./framed-button-CuWsvgPs.js";import{n as pe,t as me}from"./ids-panel-AYW87ZzA.js";var U;function init_menu_trigger(){return(init_menu_trigger=e((()=>{i(),g(),B(),R(),U=class IdsMenuTrigger{idsMenuTriggerFor=p.required();host=y(s);renderer=y(re);destroyRef=y(ne);nativeControl=y(z,{self:!0}).nativeControl;fallbackControlId=`ids-menu-trigger-${y(V).getNextIdNumber()}`;constructor(){m(()=>this.connectToControl()),oe(()=>this.reflectMenuState())}connectToControl(){let e=this.nativeControl().nativeElement;e.id||=this.fallbackControlId;let t=this.renderer.listen(e,`click`,()=>this.idsMenuTriggerFor().toggle(this.host.nativeElement,e));this.destroyRef.onDestroy(t)}reflectMenuState(){let e=this.nativeControl().nativeElement,t=this.idsMenuTriggerFor();e.setAttribute(`aria-haspopup`,`menu`),e.setAttribute(`aria-expanded`,String(t.isOpen())),t.isOpen()?e.setAttribute(`aria-controls`,t.panelId):e.removeAttribute(`aria-controls`)}static ctorParameters=()=>[];static propDecorators={idsMenuTriggerFor:[{type:t,args:[{isSignal:!0,alias:`idsMenuTriggerFor`,required:!0,transform:void 0}]}]}},U=x([te({selector:`[idsMenuTriggerFor]`})],U)})))()}var W;function init_menu(){return(init_menu=e((()=>{W=`:host{display:none}.ids-menu-panel{--ids-panel-padding:.25rem .25rem;flex-direction:column;min-width:200px;display:flex}`})))()}var G,Typeahead;function init__typeahead_chunk(){return(init__typeahead_chunk=e((()=>{b(),T(),O(),E(),_(),G=200,Typeahead=class{_letterKeyStream=new v;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new v;selectedItem=this._selectedItem;constructor(e,t){let n=typeof t?.debounceInterval==`number`?t.debounceInterval:G;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(e),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(e){this._selectedItemIndex=e}setItems(e){this._items=e}handleKey(e){let t=e.keyCode;e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(e){this._letterKeyStream.pipe(w(e=>this._pressedLetters.push(e)),k(e),D(()=>this._pressedLetters.length>0),se(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let n=(this._selectedItemIndex+t)%this._items.length,r=this._items[n];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}}})))()}var ListKeyManager;function init__list_key_manager_chunk(){return(init__list_key_manager_chunk=e((()=>{g(),l(),b(),init__typeahead_chunk(),le(),ListKeyManager=class{_items;_activeItemIndex=u(-1);_activeItem=u(null);_wrap=!1;_typeaheadSubscription=r.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=e=>e.disabled;constructor(e,t){this._items=e,e instanceof a?this._itemChangesSubscription=e.changes.subscribe(e=>this._itemsChanged(e.toArray())):f(e)&&(this._effectRef=ee(()=>this._itemsChanged(e()),{injector:t}))}tabOut=new v;change=new v;skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Typeahead(t,{debounceInterval:typeof e==`number`?e:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,t=10){return this._pageUpAndDown={enabled:e,delta:t},this}setActiveItem(e){let t=this._activeItem();this.updateActiveItem(e),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(e){let t=e.keyCode,n=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(t=>!e[t]||this._allowedModifierKeys.indexOf(t)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&n){this.setNextItemActive();break}return;case 38:if(this._vertical&&n){this.setPreviousItemActive();break}return;case 39:if(this._horizontal&&n){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}return;case 37:if(this._horizontal&&n){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}return;case 36:if(this._homeAndEnd&&n){this.setFirstItemActive();break}return;case 35:if(this._homeAndEnd&&n){this.setLastItemActive();break}return;case 33:if(this._pageUpAndDown.enabled&&n){let e=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(e>0?e:0,1);break}return;case 34:if(this._pageUpAndDown.enabled&&n){let e=this._activeItemIndex()+this._pageUpAndDown.delta,t=this._getItemsArray().length;this._setActiveItemByIndex(e<t?e:t-1,-1);break}return;default:(n||C(e,`shiftKey`))&&this._typeahead?.handleKey(e);return}this._typeahead?.reset(),e.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){let t=this._getItemsArray(),n=typeof e==`number`?e:t.indexOf(e),r=t[n];this._activeItem.set(r??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){let t=this._getItemsArray();for(let n=1;n<=t.length;n++){let r=(this._activeItemIndex()+e*n+t.length)%t.length,i=t[r];if(!this._skipPredicateFn(i)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex()+e,e)}_setActiveItemByIndex(e,t){let n=this._getItemsArray();if(n[e]){for(;this._skipPredicateFn(n[e]);)if(e+=t,!n[e])return;this.setActiveItem(e)}}_getItemsArray(){return f(this._items)?this._items():this._items instanceof a?this._items.toArray():this._items}_itemsChanged(e){this._typeahead?.setItems(e);let t=this._activeItem();if(t){let n=e.indexOf(t);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}}})))()}var K;function init_menu_item(){return(init_menu_item=e((()=>{K=`:host{display:block}:host .ids-menu-item{--ids-menu-action-overlay-opacity:0;border-radius:var(--ids-radius-medium);isolation:isolate;cursor:pointer;width:100%;color:var(--ids-text-muted-color);white-space:nowrap;text-shadow:0px 0px 6px color-mix(in srgb, var(--ids-text-muted-color) var(--ids-shadow-strength-faint), transparent);outline:0;align-items:center;gap:.5rem;padding:.25rem .75rem;transition:color .2s;display:flex;position:relative}:host .ids-menu-item:before{content:"";z-index:-1;border-radius:inherit;background-color:var(--ids-element-surface-contrast-color);opacity:var(--ids-menu-action-overlay-opacity);pointer-events:none;transition:opacity .2s;position:absolute;inset:0}:host .ids-menu-item:hover:not(:disabled),:host .ids-menu-item:focus-visible:not(:disabled){color:var(--ids-text-muted-hover-color)}:host .ids-menu-item:hover:not(:disabled){--ids-menu-action-overlay-opacity:.05}:host .ids-menu-item:focus-visible:not(:disabled){--ids-menu-action-overlay-opacity:.1}:host .ids-menu-item:active:not(:disabled){--ids-menu-action-overlay-opacity:.15}:host .ids-menu-item:disabled{cursor:default;opacity:.5}`})))()}var q;function init_menu_item$1(){return(init_menu_item$1=e((()=>{i(),init_menu_item(),g(),q=class IdsMenuItem{clicked=d();disabled=p(!1,{transform:ce});nativeControl=n.required(`control`);static propDecorators={clicked:[{type:o,args:[`clicked`]}],disabled:[{type:t,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],nativeControl:[{type:ie,args:[`control`,{isSignal:!0}]}]}},q=x([c({selector:`ids-menu-item`,template:`
        <button
            #control
            role="menuitem"
            tabindex="-1"
            class="ids-menu-item ids-menu-item-label"
            type="button"
            [disabled]="disabled()"
            (click)="clicked.emit($event)"
        >
            <ng-content />
        </button>
    `,styles:[K]})],q)})))()}var J;function init_menu$1(){return(init_menu$1=e((()=>{i(),init_menu(),pe(),g(),init__list_key_manager_chunk(),S(),B(),init_menu_item$1(),J=class IdsMenu{panelClass=p();panelId=`ids-menu-${y(V).getNextIdNumber()}`;viewportMargin=8;host=y(s);items=h(q,{descendants:!0});openState=u(!1);isOpen=this.openState.asReadonly();origin=u(this.host.nativeElement);labelledBy=u(null);positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`}];triggerControl;keyManager;itemClicks=[];toggle(e,t){this.origin.set(e),this.triggerControl=t,this.labelledBy.set(t.id),this.openState.update(e=>!e)}close(){this.openState.set(!1)}onOpened(){let e=this.items().map(e=>e.nativeControl().nativeElement);this.keyManager=new ListKeyManager(e).withWrap().withHomeAndEnd(),this.keyManager.setFirstItemActive(),this.keyManager.activeItem?.focus(),this.itemClicks=this.items().map(e=>e.clicked.subscribe(()=>this.closeAndReturnFocus()))}onClosed(){this.keyManager?.destroy(),this.keyManager=void 0,this.itemClicks.forEach(e=>e.unsubscribe()),this.itemClicks=[]}onKeydown(e){e.key===`Escape`||e.key===`Tab`?this.closeAndReturnFocus():(this.keyManager?.onKeydown(e),this.keyManager?.activeItem?.focus())}closeAndReturnFocus(){this.close(),this.triggerControl?.focus()}static propDecorators={panelClass:[{type:t,args:[{isSignal:!0,alias:`panelClass`,required:!1,transform:void 0}]}],items:[{type:ae,args:[q,{descendants:!0,isSignal:!0}]}]}},J=x([c({selector:`ids-menu`,imports:[ue],template:`
        <ng-template
            cdkConnectedOverlay
            [cdkConnectedOverlayOrigin]="origin()"
            [cdkConnectedOverlayOpen]="isOpen()"
            [cdkConnectedOverlayPositions]="positions"
            [cdkConnectedOverlayPush]="true"
            [cdkConnectedOverlayViewportMargin]="viewportMargin"
            (overlayOutsideClick)="close()"
            (attach)="onOpened()"
            (detach)="onClosed()"
        >
            <div
                role="menu"
                class="ids-panel ids-menu-panel"
                [class]="panelClass()"
                [id]="panelId"
                [attr.aria-labelledby]="labelledBy()"
                (keydown)="onKeydown($event)"
            >
                <ng-content />
            </div>
        </ng-template>
    `,styles:[W,me]})],J)})))()}var Y,X,Z,Q,$;function init_menu_stories(){return(init_menu_stories=e((()=>{A(),H(),I(),de(),init_menu_trigger(),init_menu$1(),init_menu_item$1(),M(),{action:Y}=__STORYBOOK_MODULE_ACTIONS__,X={title:`Design System/Menu`,component:J,subcomponents:{IdsMenuTrigger:U,IdsMenuItem:q},tags:[`autodocs`],decorators:[j({imports:[fe,U,q,N]})],argTypes:{isOpen:{control:!1,table:{defaultValue:{summary:`false`}}},close:{control:!1}}},Z={render:e=>({props:{...e,clicked:Y(`clicked`)},template:[L(`ids-framed-button`).withBinding(`idsMenuTriggerFor`,`menu`).withContent(`Aldoria`).build(),L(`ids-menu`).withAttribute(`#menu`).withInput(`panelClass`,e.panelClass,``).withContent(L(`ids-menu-item`).withOutput(`clicked`).withContent(`Velmora`),L(`ids-menu-item`).withOutput(`clicked`).withContent(L(`mat-icon`).withClass(`material-symbols-outlined`).withContent(`castle`),`Kharzun`),L(`ids-menu-item`).withInput(`disabled`,!0,!1).withOutput(`clicked`).withContent(`Ostravel`)).build()].join(`
`)})},Q={decorators:[j({imports:[F]})],parameters:{controls:{disable:!0},pseudo:P(`button`)},render:()=>({props:{sections:[{name:`enabled`,disabled:!1},{name:`disabled`,disabled:!0}],states:[`rest`,`hover`,`focus-visible`,`active`]},template:`
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <div role="menu" [attr.aria-label]="section.name + ' ' + state">
                        <ids-menu-item [disabled]="section.disabled">{{ state }}</ids-menu-item>
                    </div>
                </ng-template>
            </sb-state-matrix>
        `})},$=[`Default`,`States`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => ({
    props: {
      ...args,
      clicked: action('clicked')
    },
    template: [elem('ids-framed-button').withBinding('idsMenuTriggerFor', 'menu').withContent('Aldoria').build(), elem('ids-menu').withAttribute('#menu').withInput('panelClass', args.panelClass, '').withContent(elem('ids-menu-item').withOutput('clicked').withContent('Velmora'), elem('ids-menu-item').withOutput('clicked').withContent(elem('mat-icon').withClass('material-symbols-outlined').withContent('castle'), 'Kharzun'), elem('ids-menu-item').withInput('disabled', true, false).withOutput('clicked').withContent('Ostravel')).build()].join('\\n')
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [StateMatrix]
  })],
  parameters: {
    controls: {
      disable: true
    },
    pseudo: pseudoStates('button')
  },
  render: () => ({
    props: {
      sections: [{
        name: 'enabled',
        disabled: false
      }, {
        name: 'disabled',
        disabled: true
      }],
      states: ['rest', 'hover', 'focus-visible', 'active']
    },
    // \`role="menu"\` gives each \`menuitem\` its required parent; the real panel lives in an overlay the matrix cannot hold.
    template: \`
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <div role="menu" [attr.aria-label]="section.name + ' ' + state">
                        <ids-menu-item [disabled]="section.disabled">{{ state }}</ids-menu-item>
                    </div>
                </ng-template>
            </sb-state-matrix>
        \`
  })
}`,...Q.parameters?.docs?.source}}}})))()}init_menu_stories();export{Z as Default,Q as States,$ as __namedExportsOrder,X as default};