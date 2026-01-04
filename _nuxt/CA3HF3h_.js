import{_ as Y}from"./CZ9qX02O.js";import{_ as N}from"./4lDQ1OMW.js";import{a as R,_ as O}from"./HBG5bXg1.js";import{_ as V}from"./BxbbqjF7.js";import{e as w,j as I,h as _,o as l,u as e,w as c,b as m,c as g,C as v,a as t,d as x,t as k,x as F,f as T,K as $,m as G,s as W,v as J,r as C,q as M,G as K,N as X,E as Z,k as Q,i as ee,F as A,y as te,J as oe,A as U}from"#entry";import{m as L}from"./CmyyWbuJ.js";import{_ as B,a as D}from"./CM2w3Yue.js";import{i as se,d as ne,_ as ae}from"./3rY_2-mm.js";import{_ as ie,b as le,c as re}from"./CfH1FwjG.js";import{u as ce,e as de,P as ue}from"./BsnGWaSE.js";import{c as q}from"./PAkox89H.js";import{_ as z}from"./DlAUqK2U.js";import{_ as pe}from"./OlhnGdC8.js";import{u as me}from"./MxzrqX7t.js";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=q("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=q("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),he={key:0,class:"relative overflow-hidden md:w-2/5 aspect-[16/9] md:aspect-auto"},ye=["src","alt"],_e={class:"flex flex-col justify-between w-full p-6 md:w-3/5 md:p-8"},be={class:"flex items-center gap-3 mb-3"},ve={class:"flex items-center gap-1.5 text-xs font-medium text-muted-foreground"},we={class:"mb-3 text-xl font-bold leading-tight transition-colors line-clamp-2 group-hover:text-primary"},xe=["innerHTML"],ke=w({__name:"BlogHorizontal",props:{title:{},description:{},created:{},slug:{},collectionId:{},id:{},coverImage:{},index:{},baseUrl:{}},setup(d){const n=d,o=F(),u=I(()=>new Date(n.created).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})),a=I(()=>`${n.baseUrl||""}/blog${n.slug}`),r=I(()=>`${o.public.pocketbaseUrl}api/files/${n.collectionId}/${n.id}/${n.coverImage}`),f=I(()=>n?.description?.trim()||"");return(b,s)=>{const h=N;return l(),_(e(R),{class:"w-full overflow-hidden transition-all duration-300 border shadow-md group hover:shadow-xl hover:-translate-y-1 border-border/40 bg-card/50 backdrop-blur-sm"},{default:c(()=>[m(e(V),{class:"p-0"},{default:c(()=>[m(h,{to:e(a),class:"flex flex-col w-full h-full md:flex-row"},{default:c(()=>[b.coverImage?(l(),g("div",he,[e(r)?(l(),g("img",{key:0,src:e(r),alt:b.title,width:"600",height:"338",loading:"lazy",class:"object-cover w-full h-full transition-transform duration-700 group-hover:scale-110",decoding:"async"},null,8,ye)):v("",!0),s[0]||(s[0]=t("div",{class:"absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-100"},null,-1))])):v("",!0),t("div",_e,[t("div",null,[t("div",be,[t("span",ve,[s[1]||(s[1]=t("svg",{class:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1)),x(" "+k(e(u)),1)])]),t("h3",we,k(b.title),1),t("p",{class:"text-sm leading-relaxed text-muted-foreground line-clamp-3",innerHTML:e(f)},null,8,xe)]),s[2]||(s[2]=t("div",{class:"flex items-center gap-2 mt-4 text-sm font-semibold transition-all text-primary group-hover:gap-3"},[t("span",null,"Read More"),t("svg",{class:"w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"})])],-1))])]),_:1},8,["to"])]),_:1})]),_:1})}}});var $e=w({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(d){const n=d,o=se(),{forwardRef:u,currentElement:a}=ce();return o.contentId||=de(void 0,"reka-dialog-content"),T(()=>{o.triggerElement.value=a.value}),(r,f)=>(l(),_(e(ue),G(n,{ref:e(u),type:r.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":e(o).open.value||!1,"aria-controls":e(o).open.value?e(o).contentId:void 0,"data-state":e(o).open.value?"open":"closed",onClick:e(o).onOpenToggle}),{default:c(()=>[$(r.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),Pe=$e;const Ce=w({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(d){const n=d;return(o,u)=>(l(),_(e(Pe),W(J(n)),{default:c(()=>[$(o.$slots,"default")]),_:3},16))}}),Ie={class:"max-h-[60vh] overflow-y-auto px-1 mt-4"},Se=["innerHTML"],Te=w({__name:"Modal",props:{htmlContent:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""}},setup(d,{expose:n}){const o=C(!1);return n({toggleModal:a=>{o.value=a!==void 0?a:!o.value}}),(a,r)=>(l(),_(e(ne),{open:o.value,"onUpdate:open":r[0]||(r[0]=f=>o.value=f)},{default:c(()=>[m(e(Ce),{"as-child":""},{default:c(()=>[$(a.$slots,"button")]),_:3}),m(e(ae),null,{default:c(()=>[m(e(ie),null,{default:c(()=>[m(e(le),null,{default:c(()=>[x(k(d.title),1)]),_:1}),m(e(re),null,{default:c(()=>[x(k(d.description),1)]),_:1})]),_:1}),t("div",Ie,[d.htmlContent?(l(),g("div",{key:0,innerHTML:d.htmlContent,class:"prose max-w-none"},null,8,Se)):v("",!0),$(a.$slots,"default")])]),_:3})]),_:3},8,["open"]))}}),Me=`<section>
    <h2>1. Information I Collect</h2>
    <p>I collect information to provide and improve my services, communicate with you, and understand how my website is used. The types of information I collect include:</p>
    
    <h3>Personal Information You Voluntarily Provide</h3>
    <ul>
      <li><strong>Newsletter Subscription:</strong> I collect your email address. You may also provide your name.</li>
      <li><strong>Blog Comments:</strong> I collect your name, email address, comment content, and optionally your website URL.</li>
      <li><strong>Contact Forms/Direct Communication:</strong> I collect your name, email address, and message content.</li>
    </ul>

    <h3>Automatically Collected Information (Usage Data)</h3>
    <ul>
      <li>IP address</li>
      <li>Browser type and version</li>
      <li>Operating system</li>
      <li>Referring and exit pages</li>
      <li>Dates and times of access</li>
      <li>Time spent on pages</li>
      <li>Clickstream data</li>
    </ul>
  </section>

  <section>
    <h2>2. How I Use Your Information</h2>
    <ul>
      <li>To provide and maintain the website</li>
      <li>To send newsletter updates</li>
      <li>To enable blog commenting</li>
      <li>To respond to inquiries</li>
      <li>To improve the website and content</li>
      <li>To protect against fraud and enforce terms</li>
    </ul>
  </section>

  <section>
    <h2>3. Sharing Your Information</h2>
    <p>I do not sell, rent, or trade your personal information. I may share it only in the following cases:</p>
    <ul>
      <li><strong>With Service Providers:</strong> For website operation, email marketing, and analytics.</li>
      <li><strong>For Legal Reasons:</strong> To comply with law, protect rights, investigate wrongdoing, or ensure safety.</li>
      <li><strong>With Your Consent:</strong> Only for purposes you explicitly agree to.</li>
    </ul>
  </section>

  <section>
    <h2>4. Data Retention</h2>
    <p>I retain data only as long as needed for the purpose it was collected, or for legal/reporting reasons:</p>
    <ul>
      <li><strong>Newsletter:</strong> Retained until you unsubscribe.</li>
      <li><strong>Blog Comments:</strong> May be kept indefinitely unless removal is requested.</li>
      <li><strong>Contact Submissions:</strong> Retained for a reasonable response window.</li>
      <li><strong>Usage Data:</strong> Typically retained briefly for analytics.</li>
    </ul>
  </section>

  <section>
    <h2>5. Your Choices and Rights</h2>
    <p>Depending on applicable laws, you may have the right to:</p>
    <ul>
      <li>Access your personal information</li>
      <li>Request corrections</li>
      <li>Request deletion ("right to be forgotten")</li>
      <li>Unsubscribe from newsletters</li>
      <li>Object to certain data processing</li>
      <li>Withdraw consent at any time</li>
    </ul>
    <p>To exercise any of these rights, please contact me at the email listed below.</p>
  </section>

  <section>
    <h2>6. Cookies and Tracking Technologies</h2>
    <p>My website may use cookies and similar technologies:</p>
    <ul>
      <li><strong>Necessary Cookies:</strong> Enable core site functionality.</li>
      <li><strong>Analytics Cookies:</strong> Understand usage and performance (e.g., Google Analytics).</li>
    </ul>
    <p>You can manage cookie preferences through your browser settings. Disabling cookies may affect site functionality.</p>
  </section>

  <section>
    <h2>7. Links to Other Websites</h2>
    <p>This site may contain links to third-party websites. I am not responsible for their privacy practices or content. Always review their policies.</p>
  </section>

  <section>
    <h2>8. Security of Your Information</h2>
    <p>I use reasonable measures to protect your data but cannot guarantee absolute security. Transmission over the internet involves risk.</p>
  </section>

  <section>
    <h2>9. Children's Privacy</h2>
    <p>This site is not intended for children under 13. I do not knowingly collect data from them. If you believe a child has provided data, contact me for removal.</p>
  </section>

  <section>
    <h2>10. Changes to This Privacy Policy</h2>
    <p>I may update this Privacy Policy. Changes will be posted on this page with a revised "Last Updated" date. Review it periodically for updates.</p>
  </section>

  <section>
    <h2>11. Contact Me</h2>
    <p>If you have questions or concerns about this policy, reach out at:</p>
    <address>
      Guillermo Medel<br />
      <a href="mailto:GuillermoMedel@GuillermoMedel.com">GuillermoMedel@GuillermoMedel.com</a>
    </address>
  </section>`,Ue={class:"space-y-2"},Be={class:"space-y-2"},De={class:"flex items-center"},Ne={for:"newsletter-consent",class:"ml-2 text-sm"},Re={class:"border-t border-white/10 pt-4"},Ve={class:"flex flex-col items-center space-y-2 text-center"},Ae={class:"flex space-x-2"},Le={class:"p-2 rounded-lg bg-primary-600/10"},qe={class:"p-2 rounded-lg bg-primary-600/10"},ze=w({__name:"NewsletterHero",setup(d){const n={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}},o=C({email:"",name:"",consent:!1}),u=C(!1),a=C(null),{createItem:r}=M(),f=async()=>{if(!o.value.consent){a.value={type:"error",text:"Please agree to the privacy policy"};return}u.value=!0,a.value=null;try{await r("newsletterSubs",{email:o.value.email,name:o.value.name,consent_given:!0,subscribed_at:new Date().toISOString()}),a.value={type:"success",text:"Thank you for subscribing!"},o.value={email:"",name:"",consent:!1}}catch(b){console.error("Subscription process failed:",b),a.value={type:"error",text:"Subscription failed. You may already be subscribed or the server is unavailable."}}finally{u.value=!1}};return(b,s)=>(l(),_(e(L).div,{variants:n,initial:"hidden",animate:"visible"},{default:c(()=>[m(e(R),null,{default:c(()=>[m(e(V),{class:"p-6 space-y-6"},{default:c(()=>[t("form",{onSubmit:Z(f,["prevent"]),class:"space-y-4"},[t("div",Ue,[m(e(B),{for:"newsletter-email"},{default:c(()=>[...s[3]||(s[3]=[x("Email Address",-1)])]),_:1}),m(e(D),{id:"newsletter-email",modelValue:e(o).email,"onUpdate:modelValue":s[0]||(s[0]=h=>e(o).email=h),type:"email",placeholder:"your@email.com",required:"",class:"bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500"},null,8,["modelValue"])]),t("div",Be,[m(e(B),{for:"newsletter-name"},{default:c(()=>[...s[4]||(s[4]=[x("Name (Optional)",-1)])]),_:1}),m(e(D),{id:"newsletter-name",modelValue:e(o).name,"onUpdate:modelValue":s[1]||(s[1]=h=>e(o).name=h),type:"text",placeholder:"Your name",class:"bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500"},null,8,["modelValue"])]),t("div",De,[K(t("input",{id:"newsletter-consent","onUpdate:modelValue":s[2]||(s[2]=h=>e(o).consent=h),type:"checkbox",required:"",class:"w-4 h-4 rounded text-primary-600 bg-white/10 border-white/20 focus:ring-primary-500"},null,512),[[X,e(o).consent]]),t("label",Ne,[s[6]||(s[6]=x(" I agree to receive emails and accept the ",-1)),m(Te,{title:"Privacy Policy",description:"This Privacy Policy explains how information may be collected, used, and shared.",htmlContent:e(Me)},{button:c(()=>[...s[5]||(s[5]=[t("span",{class:"cursor-pointer text-primary-500 hover:underline"}," privacy policy ",-1)])]),_:1},8,["htmlContent"])])]),m(e(O),{size:"lg",class:"w-full",disabled:e(u),type:"submit"},{default:c(()=>[x(k(e(u)?"Subscribing...":"Subscribe Now"),1)]),_:1},8,["disabled"])],32),e(a)?(l(),g("div",{key:0,class:Q(["p-4 text-sm rounded-lg",{"bg-green-900/50 text-green-300":e(a).type==="success","bg-red-900/50 text-red-300":e(a).type==="error"}])},k(e(a).text),3)):v("",!0),t("div",Re,[t("div",Ve,[t("div",Ae,[t("div",Le,[m(e(fe),{class:"w-5 h-5 text-primary-400"})]),t("div",qe,[m(e(ge),{class:"w-5 h-5 text-primary-400"})])])])])]),_:1})]),_:1})]),_:1}))}}),Ee=z(ze,[["__scopeId","data-v-1ae7ff10"]]),He={class:"flex flex-col w-full md:flex-row lg:flex-col"},je={class:"grid content-center w-full px-2 mb-8 md:w-1/2 lg:w-full md:pr-16 lg:pr-0 md:mb-4 md:px-0"},Ye={class:"mb-2 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"},Oe={class:"mt-3 text-sm line-clamp-3"},Fe=w({__name:"Subscribe",props:{title:{type:String,default:"Join Newsletter"},description:{type:String,default:"Stay updated with the latest news, articles, and resources. Subscribe and never miss out!"}},setup(d){return(n,o)=>{const u=Ee;return l(),g("div",He,[t("div",je,[t("h2",Ye,k(d.title),1),t("p",Oe,k(d.description),1)]),m(u,{class:"w-full md:w-1/2 md:pl-2 lg:pl-0 lg:w-full"})])}}}),Ge={class:"flex flex-col w-full min-h-screen gap-8 pb-16 lg:pb-24 lg:flex-row",id:"main-content"},We={id:"right-rail","aria-labelledby":"sidebar-heading",class:"w-full lg:w-1/3"},Je={class:"lg:z-10 lg:sticky top-24"},Ke=w({__name:"FixedRail",setup(d){const n={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}};return(o,u)=>(l(),g("div",Ge,[m(e(L).section,{variants:n,"aria-labelledby":"main-content-heading",class:"w-full gap-4 lg:w-2/3"},{default:c(()=>[u[0]||(u[0]=t("h2",{id:"main-content-heading",class:"sr-only"},"Main content",-1)),$(o.$slots,"main")]),_:3}),t("aside",We,[t("div",Je,[u[1]||(u[1]=t("h2",{id:"sidebar-heading",class:"sr-only"},"Additional content",-1)),$(o.$slots,"right")])])]))}}),Xe={class:"grid w-full gap-4"},Ze=w({__name:"Blog",props:{content:{type:Array,required:!0},baseUrl:{type:String},type:{type:String,default:"posts"}},setup(d){const n=d,{fetchCollection:o}=M(),u=C([]),a=async()=>{try{return await o(n.type,1,5,"","-created","")}catch(f){return console.error("Error fetching posts:",f),[]}},r=async()=>{u.value=await a()};return T(async()=>{await r()}),(f,b)=>{const s=ke,h=Fe,S=Ke;return l(),_(S,null,{main:c(()=>[t("div",Xe,[(l(!0),g(A,null,ee(d.content,(y,i)=>(l(),_(s,{key:y.id,title:y.title,description:y.description,created:y.created,slug:y.slug,"collection-id":y.collectionId,id:y.id,"cover-image":y.cover_image,index:i,"base-url":d.baseUrl},null,8,["title","description","created","slug","collection-id","id","cover-image","index","base-url"]))),128))])]),right:c(()=>[m(h,{class:"z-10 sticky-position top-24"})]),_:1})}}}),Qe={class:"container flex flex-col w-full mx-auto"},et={key:1,class:"flex justify-center py-12"},tt={key:2,class:"text-center py-12"},ot={key:1,class:"text-center py-12 text-gray-600"},st={key:2,class:"flex justify-center w-full mr-auto -mt-12 lg:-mt-20 lg:w-2/3"},nt=w({__name:"BlogColumn",props:{title:{default:"Blog Articles & Tutorials"},description:{default:"Explore my latest articles and insights on web development, design, and technology. Learn from practical tutorials and stay updated with industry trends."},perPage:{default:5},content:{default:()=>({items:[]})},showMore:{type:Boolean,default:!0},showPagination:{type:Boolean,default:!0},baseUrl:{default:""},h1:{type:Boolean,default:!1},type:{default:"posts"}},async setup(d){let n,o;const{fetchCollection:u}=M(),a=te(),r=d,f=i=>{if(!i)return 1;const p=Array.isArray(i)?i[0]:i,P=parseInt(p,10);return isNaN(P)||P<1?1:P},b=async i=>{try{const p=await u(r.type,i,r.perPage,"","-created","");return{items:p?.items||[],page:p?.page||i,perPage:p?.perPage||r.perPage,totalItems:p?.totalItems||0,totalPages:p?.totalPages||0}}catch(p){return console.error("Error fetching posts:",p),{items:[],page:i,perPage:r.perPage,totalItems:0,totalPages:0}}},{data:s,pending:h,error:S,refresh:y}=([n,o]=oe(async()=>me(()=>`posts-${r.type}-${a.fullPath}-${r.perPage}`,async()=>{const i=f(a.query.page);return await b(i)},{watch:[()=>a.query.page],default:()=>({items:[],page:1,perPage:r.perPage,totalItems:0,totalPages:0}),transform:i=>i||{items:[],page:1,perPage:r.perPage,totalItems:0,totalPages:0}})),n=await n,o(),n);return U(()=>[r.perPage,r.type],()=>{y()},{deep:!0}),U(()=>a.fullPath,()=>{}),T(()=>{}),(i,p)=>{const P=Y,E=Ze,H=N,j=pe;return l(),g("div",Qe,[i.title||i.description?(l(),_(P,{key:0,class:"pb-16",title:i.title,description:i.description,h1:i.h1},null,8,["title","description","h1"])):v("",!0),e(h)&&!e(s)?.items?.length?(l(),g("div",et,[...p[1]||(p[1]=[t("div",{class:"inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"},null,-1)])])):e(S)?(l(),g("div",tt,[p[2]||(p[2]=t("p",{class:"text-red-600 mb-2"},"Error loading posts. Please try again.",-1)),t("button",{onClick:p[0]||(p[0]=at=>e(y)()),class:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"}," Retry ")])):(l(),g(A,{key:3},[e(s)?.items?.length?(l(),_(E,{key:0,class:"flex w-full mt-6",content:e(s).items,baseUrl:i.baseUrl},null,8,["content","baseUrl"])):e(h)?v("",!0):(l(),g("div",ot,[...p[3]||(p[3]=[t("p",null,"No posts found.",-1)])])),e(s)?.items?.length?(l(),g("div",st,[t("div",null,[i.showMore?(l(),_(H,{key:0,to:"/blog/",class:"font-bold w-full transition-all hover:opacity-90 text-primary hover:underline pb-2"},{default:c(()=>[...p[4]||(p[4]=[x(" View All Posts ",-1)])]),_:1})):v("",!0)]),e(s)?.totalPages>1&&i.showPagination?(l(),_(j,{key:0,"total-pages":e(s)?.totalPages,"show-pagination":!0},null,8,["total-pages"])):v("",!0)])):v("",!0)],64))])}}}),vt=z(nt,[["__scopeId","data-v-f9aa3a14"]]);export{vt as _};
