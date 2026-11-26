import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{Ut as t,g as n,zn as r}from"./core-EfmSQQJi.js";import{n as i}from"./_style-loader-chunk-aJDhswOz.js";function getPolicy(){if(o===void 0&&(o=null,typeof window<`u`)){let e=window;if(e.trustedTypes!==void 0)try{o=e.trustedTypes.createPolicy(`angular#components`,{createHTML:e=>e})}catch(e){console.error(e)}}return o}function trustedHTMLFromString(e){return getPolicy()?.createHTML(e)||e}function _setInnerHtml(e,t,n){e.innerHTML=trustedHTMLFromString(n.sanitize(r.HTML,t)||``)}var a,o;function init_private(){return(init_private=e((()=>{i(),n(),a=(()=>{class _VisuallyHiddenLoader{static ɵfac=function _VisuallyHiddenLoader_Factory(e){return new(e||_VisuallyHiddenLoader)};static ɵcmp=t({type:_VisuallyHiddenLoader,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function _VisuallyHiddenLoader_Template(e,t){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return _VisuallyHiddenLoader})()})))()}export{trustedHTMLFromString as i,_setInnerHtml as n,init_private as r,a as t};