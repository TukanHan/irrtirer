import{n as e,r as t}from"./rolldown-runtime-vtgMY1y5.js";import{Br as n,Kr as r,Y as i,g as a}from"./core-GKNYu18h.js";import{n as o,o as s}from"./iframe-DaCqzhBR.js";var c;function init_sentence_to_word_pipe(){return(init_sentence_to_word_pipe=e((()=>{r(),a(),c=class SentenceToWordPipe{transform(e){return e?e.split(` `):[]}},c=n([i({name:`sentenceToWord`})],c)})))()}var l=t({Example:()=>d,__namedExportsOrder:()=>f,default:()=>u}),u,d,f;function init_word_fade_in_stories(){return(init_word_fade_in_stories=e((()=>{o(),init_sentence_to_word_pipe(),u={title:`Style/Animacje/Word Fade In`,decorators:[s({imports:[c]})],argTypes:{phrase:{control:`text`,description:`Zdanie do rozbicia na słowa i animacji`,table:{category:`Content`}},wordFadeInDelay:{control:`number`,description:`Opóźnienie animacji dla każdego słowa w sekundach`,table:{defaultValue:{summary:`0.75s`},category:`Content`}},wordFadeInDuration:{name:`--word-fade-in-duration`,control:`number`,description:`Czas trwania animacji dla każdego słowa w sekundach`,table:{defaultValue:{summary:`5s`},category:`CSS Variable`}}},parameters:{backgrounds:{disable:!0}},globals:{theme:`light`,locale:`pl`}},d={args:{phrase:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem finibus metus semper placerat. Proin lobortis cursus tortor in sodales.`,wordFadeInDelay:.75,wordFadeInDuration:5},render:e=>({props:e,template:`
                <div style="--word-fade-in-duration: ${e.wordFadeInDuration}s">
                    @let words = phrase | sentenceToWord;
                    @for(word of words; track $index) {
                        <span class="word-fade-in" [style.animationDelay]="$index * ${e.wordFadeInDelay} + 's'">
                            {{ word }}
                        </span>
                    }
                </div>
            `})},f=[`Example`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}export{init_word_fade_in_stories as n,l as r,d as t};