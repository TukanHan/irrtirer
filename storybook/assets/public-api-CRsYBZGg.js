import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{Or as t,P as n,Pr as r,V as i,_ as a,d as o,g as s,it as c,r as l}from"./core-BbWc11SJ.js";import{c as u,n as d}from"./common-BqXmStGT.js";function pseudoStates(e){let t=Object.entries(f).map(([t,n])=>[t,[`.state-${n} ${e}`]]);return Object.fromEntries(t)}var f;function init_pseudo_states(){return(init_pseudo_states=e((()=>{f={hover:`hover`,focus:`focus`,focusVisible:`focus-visible`,active:`active`}})))()}var p;function init__virtual_angular_jit_style_inline_b1f6bfe8ffeeb0aa(){return(init__virtual_angular_jit_style_inline_b1f6bfe8ffeeb0aa=e((()=>{p=`
        :host {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .title {
            margin-bottom: 0.75rem;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            opacity: 0.6;
        }

        .cells--grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
            gap: 1rem;
        }

        .cells--flow {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem 1.5rem;
        }
    `})))()}var m;function init_state_matrix(){return(init_state_matrix=e((()=>{r(),init__virtual_angular_jit_style_inline_b1f6bfe8ffeeb0aa(),d(),s(),m=class StateMatrix{sections=a.required();states=a.required();layout=a(`grid`);cell=o.required(c);static propDecorators={sections:[{type:i,args:[{isSignal:!0,alias:`sections`,required:!0,transform:void 0}]}],states:[{type:i,args:[{isSignal:!0,alias:`states`,required:!0,transform:void 0}]}],layout:[{type:i,args:[{isSignal:!0,alias:`layout`,required:!1,transform:void 0}]}],cell:[{type:l,args:[c,{isSignal:!0}]}]}},m=t([n({selector:`sb-state-matrix`,imports:[u],template:`
        @for (section of sections(); track section.name) {
            <section>
                <h3 class="title">{{ section.name }}</h3>
                <div class="cells" [class]="'cells--' + layout()">
                    @for (state of states(); track state) {
                        <div [class]="'state-' + state">
                            <ng-container *ngTemplateOutlet="cell(); context: { $implicit: section, state }" />
                        </div>
                    }
                </div>
            </section>
        }
    `,styles:[p]})],m)})))()}function init_public_api(){return(init_public_api=e((()=>{init_pseudo_states(),init_state_matrix()})))()}export{pseudoStates as a,init_pseudo_states as i,m as n,init_state_matrix as r,init_public_api as t};