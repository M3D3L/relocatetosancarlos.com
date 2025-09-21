import{j as h,k,h as v,c as g,m as C,o as m,a as r,b as i,w as d,u as t,g as f,F as V,s as w,d as N,t as q,y as B}from"#entry";import{c as x}from"./mqACPbf6.js";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=x("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=x("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),L={key:0,class:"flex items-center justify-center"},R={class:"flex items-center gap-1"},I={__name:"Pagination",props:{totalPages:{type:Number,required:!0},maxVisiblePages:{type:Number,default:5},showPagination:{type:Boolean,default:!1}},setup(u){const s=u,P=h(),y=k(),o=v(()=>parseInt(P.query.page)||1),b=v(()=>{const l=[];let e=1,a=s.totalPages;if(s.totalPages>s.maxVisiblePages){const n=Math.floor(s.maxVisiblePages/2),p=Math.ceil(s.maxVisiblePages/2)-1;o.value<=n?a=s.maxVisiblePages:o.value+p>=s.totalPages?e=s.totalPages-s.maxVisiblePages+1:(e=o.value-n,a=o.value+p)}for(let n=e;n<=a;n++)l.push(n);return l}),c=l=>{l<1||l>s.totalPages||y.push({query:{...P.query,page:l}})};return(l,e)=>u.showPagination&&u.totalPages>1?(m(),g("nav",L,[r("ul",R,[r("li",null,[i(t(f),{variant:"outline",size:"sm",disabled:t(o)===1,onClick:e[0]||(e[0]=a=>c(t(o)-1))},{default:d(()=>[i(t(z),{class:"w-4 h-4"}),e[2]||(e[2]=r("span",{class:"sr-only"},"Previous page",-1))]),_:1},8,["disabled"])]),(m(!0),g(V,null,w(t(b),a=>(m(),g("li",{key:a},[i(t(f),{variant:"page",class:B(["px-4",t(o)===a?"bg-primary text-primary-foreground":""]),size:"sm",onClick:n=>c(a)},{default:d(()=>[N(q(a),1)]),_:2},1032,["class","onClick"])]))),128)),r("li",null,[i(t(f),{variant:"outline",size:"sm",disabled:t(o)===u.totalPages,onClick:e[1]||(e[1]=a=>c(t(o)+1))},{default:d(()=>[i(t($),{class:"w-4 h-4"}),e[3]||(e[3]=r("span",{class:"sr-only"},"Next page",-1))]),_:1},8,["disabled"])])])])):C("",!0)}};export{I as _};
