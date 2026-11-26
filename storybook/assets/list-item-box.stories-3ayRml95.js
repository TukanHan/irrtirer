import{n as e,r as t}from"./rolldown-runtime-vtgMY1y5.js";var n=t({Example:()=>i,__namedExportsOrder:()=>a,default:()=>r}),r,i,a;function init_list_item_box_stories(){return(init_list_item_box_stories=e((()=>{r={title:`Style/Atomy/List Item Box`,argTypes:{content:{control:`text`,description:`Treść elementu w przykładzie`,table:{category:`Content`}},selected:{control:`boolean`,description:`Czy element jest zaznaczony`,table:{category:`Class`}}},globals:{locale:`pl`}},i={args:{content:`text`,selected:!1},render:e=>({props:e,template:`
            <div class="list-item-box" [class.selected]="selected">
                {{ content }}
            </div>
        `})},a=[`Example`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'text',
    selected: false
  },
  render: args => ({
    props: args,
    template: \`
            <div class="list-item-box" [class.selected]="selected">
                {{ content }}
            </div>
        \`
  })
}`,...i.parameters?.docs?.source}}}})))()}export{init_list_item_box_stories as n,n as r,i as t};