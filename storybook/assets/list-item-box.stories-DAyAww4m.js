var l=Object.defineProperty;var t=(e,o)=>l(e,"name",{value:o,configurable:!0});const s={title:"Style/Atomy/List Item Box",argTypes:{content:{control:"text",description:"Treść elementu w przykładzie",table:{category:"Content"}},selected:{control:"boolean",description:"Czy element jest zaznaczony",table:{category:"Class"}}},globals:{locale:"pl"}},a={args:{content:"text",selected:!1},render:t(e=>({props:e,template:`
            <div class="list-item-box" [class.selected]="selected">
                {{ content }}
            </div>
        `}),"render")},n=["Example"],r=Object.freeze(Object.defineProperty({__proto__:null,Example:a,__namedExportsOrder:n,default:s},Symbol.toStringTag,{value:"Module"}));export{a as E,r as L};
