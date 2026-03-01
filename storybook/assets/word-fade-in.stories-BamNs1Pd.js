var n=Object.defineProperty;var r=(a,o)=>n(a,"name",{value:o,configurable:!0});import{H as d,P as s,J as i}from"./iframe-DixSXlI8.js";var e;let t=(e=class{transform(o){return o?o.split(" "):[]}},r(e,"SentenceToWordPipe"),e);t=d([s({name:"sentenceToWord"})],t);const l={title:"Style/Animacje/Word Fade In",decorators:[i({imports:[t]})],argTypes:{phrase:{control:"text",description:"Zdanie do rozbicia na słowa i animacji",table:{category:"Content"}},wordFadeInDelay:{control:"number",description:"Opóźnienie animacji dla każdego słowa w sekundach",table:{defaultValue:{summary:"0.75s"},category:"Content"}},wordFadeInDuration:{name:"--word-fade-in-duration",control:"number",description:"Czas trwania animacji dla każdego słowa w sekundach",table:{defaultValue:{summary:"5s"},category:"CSS Variable"}}},parameters:{backgrounds:{disable:!0}},globals:{theme:"light",locale:"pl"}},c={args:{phrase:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem finibus metus semper placerat. Proin lobortis cursus tortor in sodales.",wordFadeInDelay:.75,wordFadeInDuration:5},render:r(a=>({props:a,template:`
                <div style="--word-fade-in-duration: ${a.wordFadeInDuration}s">
                    @let words = phrase | sentenceToWord;
                    @for(word of words; track $index) {
                        <span class="word-fade-in" [style.animationDelay]="$index * ${a.wordFadeInDelay} + 's'">
                            {{ word }}
                        </span>
                    }
                </div>
            `}),"render")},m=["Example"],w=Object.freeze(Object.defineProperty({__proto__:null,Example:c,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{c as E,w as W};
