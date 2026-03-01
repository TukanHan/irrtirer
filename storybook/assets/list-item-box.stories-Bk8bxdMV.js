var l=Object.defineProperty;var t=(e,o)=>l(e,"name",{value:o,configurable:!0});const s={title:"Style/Atomy/List Item Box",argTypes:{selected:{control:"boolean",description:"Czy element jest zaznaczony",category:"Class"},content:{control:"text",description:"Treść elementu w przykładzie",category:"Content"}},globals:{locale:"pl"}},n={args:{selected:!1,content:"text"},render:t(e=>({props:e,template:`
                <div class="list-item-box" [class.selected]="selected">
                    {{ content }}
                </div>
            `}),"render")},r=["Example"],c=Object.freeze(Object.defineProperty({__proto__:null,Example:n,__namedExportsOrder:r,default:s},Symbol.toStringTag,{value:"Module"}));export{n as E,c as L};
