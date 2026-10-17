import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{R as n,Tr as r,m as i,yr as a}from"./core-QBUKwUZA.js";import{a as o,s}from"./iframe-UCu6rKBn.js";var c;function l(){return(l=e((()=>{r(),i(),c=class{transform(e){return e?e.split(` `):[]}},c=a([n({name:`sentenceToWord`})],c)})))()}var u=t({Example:()=>f,__namedExportsOrder:()=>p,default:()=>d}),d,f,p;function m(){return(m=e((()=>{o(),l(),d={title:`Style/Animacje/Word Fade In`,decorators:[s({imports:[c]})],argTypes:{phrase:{control:`text`,description:`Zdanie do rozbicia na słowa i animacji`,table:{category:`Content`}},wordFadeInDelay:{control:`number`,description:`Opóźnienie animacji dla każdego słowa w sekundach`,table:{defaultValue:{summary:`0.75s`},category:`Content`}},wordFadeInDuration:{name:`--word-fade-in-duration`,control:`number`,description:`Czas trwania animacji dla każdego słowa w sekundach`,table:{defaultValue:{summary:`5s`},category:`CSS Variable`}}},parameters:{backgrounds:{disable:!0}},globals:{theme:`light`,locale:`pl`}},f={args:{phrase:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem finibus metus semper placerat. Proin lobortis cursus tortor in sodales.`,wordFadeInDelay:.75,wordFadeInDuration:5},render:e=>({props:e,template:`
                <div style="--word-fade-in-duration: ${e.wordFadeInDuration}s">
                    @let words = phrase | sentenceToWord;
                    @for(word of words; track $index) {
                        <span class="word-fade-in" [style.animationDelay]="$index * ${e.wordFadeInDelay} + 's'">
                            {{ word }}
                        </span>
                    }
                </div>
            `})},p=[`Example`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    phrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem finibus metus semper placerat. Proin lobortis cursus tortor in sodales.',
    wordFadeInDelay: 0.75,
    wordFadeInDuration: 5
  },
  render: args => {
    return {
      props: args,
      template: \`
                <div style="--word-fade-in-duration: \${args.wordFadeInDuration}s">
                    @let words = phrase | sentenceToWord;
                    @for(word of words; track $index) {
                        <span class="word-fade-in" [style.animationDelay]="$index * \${args.wordFadeInDelay} + 's'">
                            {{ word }}
                        </span>
                    }
                </div>
            \`
    };
  }
}`,...f.parameters?.docs?.source}}}})))()}export{m as n,u as r,f as t};