import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{R as n,m as r,oi as i,si as a}from"./core-Chtm1_Da.js";import{a as o,s}from"./iframe-CrPRH3I1.js";var c,l=t((()=>{a(),r(),c=class{transform(e){return e?e.split(` `):[]}},c=i([n({name:`sentenceToWord`})],c)})),u=e({Example:()=>f,__namedExportsOrder:()=>p,default:()=>d}),d,f,p,m=t((()=>{o(),l(),d={title:`Style/Animacje/Word Fade In`,decorators:[s({imports:[c]})],argTypes:{phrase:{control:`text`,description:`Zdanie do rozbicia na słowa i animacji`,table:{category:`Content`}},wordFadeInDelay:{control:`number`,description:`Opóźnienie animacji dla każdego słowa w sekundach`,table:{defaultValue:{summary:`0.75s`},category:`Content`}},wordFadeInDuration:{name:`--word-fade-in-duration`,control:`number`,description:`Czas trwania animacji dla każdego słowa w sekundach`,table:{defaultValue:{summary:`5s`},category:`CSS Variable`}}},parameters:{backgrounds:{disable:!0}},globals:{theme:`light`,locale:`pl`}},f={args:{phrase:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem finibus metus semper placerat. Proin lobortis cursus tortor in sodales.`,wordFadeInDelay:.75,wordFadeInDuration:5},render:e=>({props:e,template:`
                <div style="--word-fade-in-duration: ${e.wordFadeInDuration}s">
                    @let words = phrase | sentenceToWord;
                    @for(word of words; track $index) {
                        <span class="word-fade-in" [style.animationDelay]="$index * ${e.wordFadeInDelay} + 's'">
                            {{ word }}
                        </span>
                    }
                </div>
            `})},p=[`Example`]}));m();export{f as Example,p as __namedExportsOrder,d as default,u as n,m as t};