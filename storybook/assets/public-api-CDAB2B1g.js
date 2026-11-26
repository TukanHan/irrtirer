import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{B as t,Gr as n,N as r,_ as i,d as a,g as o,r as s,rt as c,zr as l}from"./core-CXH6MCZn.js";import{c as u,n as d}from"./common-BoAak_CD.js";function f(e){let t=Object.entries(p).map(([t,n])=>[t,[`.state-${n} ${e}`]]);return Object.fromEntries(t)}var p;function m(){return(m=e((()=>{p={hover:`hover`,focus:`focus`,focusVisible:`focus-visible`,active:`active`}})))()}var h;function g(){return(g=e((()=>{h=`
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
    `})))()}var _;function v(){return(v=e((()=>{n(),g(),d(),o(),_=class{sections=i.required();states=i.required();layout=i(`grid`);cell=a.required(c);static propDecorators={sections:[{type:t,args:[{isSignal:!0,alias:`sections`,required:!0,transform:void 0}]}],states:[{type:t,args:[{isSignal:!0,alias:`states`,required:!0,transform:void 0}]}],layout:[{type:t,args:[{isSignal:!0,alias:`layout`,required:!1,transform:void 0}]}],cell:[{type:s,args:[c,{isSignal:!0}]}]}},_=l([r({selector:`sb-state-matrix`,imports:[u],template:`
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
    `,styles:[h]})],_)})))()}function y(){return(y=e((()=>{m(),v()})))()}export{f as a,m as i,_ as n,v as r,y as t};