import{c as q,_ as j}from"./CLDBxAq-.js";import{_ as A}from"./bJUmCw_7.js";import{_ as U}from"./C1XeePZ2.js";import{a as D,_ as H}from"./DnLZ2Mvm.js";import{_ as B}from"./Db2Jpkcy.js";import{e as y,k as S,y as N,h as f,o as u,i as e,w as c,b as r,c as b,z as v,a as o,d as w,t as x,f as I,A as $,p as O,v as E,x as Y,r as k,s as P,B as F,C as G,D as W,l as J,F as K,j as Q,E as X,G as Z}from"#entry";import{m as V}from"./DLd_3b-_.js";import{_ as T,a as M}from"./D7RuvAVb.js";import{i as ee,_ as te,a as oe}from"./Qfno5KFR.js";import{_ as se,a as ie,b as ne}from"./UZvijXGr.js";import{u as ae,P as le}from"./CmnCrKLQ.js";import{u as re}from"./BnYAxVqq.js";import{c as R}from"./D142Xo_q.js";import{_ as L}from"./DlAUqK2U.js";import{_ as ce}from"./Bdozr75a.js";import{b as _}from"./AloX_Xz3.js";import"./D6eIKK6y.js";import"./C0W2CB32.js";import"./b1VXNR_W.js";import"./Bk0X75_M.js";import"./ByGqZDsv.js";import"./mw0C0a3p.js";import"./CvN3_3Ry.js";import"./DCFv4mmU.js";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=R("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=R("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),pe={key:0,class:"relative overflow-hidden md:w-2/5 aspect-[16/9] md:aspect-auto"},me=["src","alt"],ge={class:"flex flex-col justify-between w-full p-6 md:w-3/5 md:p-8"},fe={class:"flex items-center gap-3 mb-3"},he={class:"flex items-center gap-1.5 text-xs font-medium text-muted-foreground"},ye={class:"mb-3 text-xl font-bold leading-tight transition-colors line-clamp-2 group-hover:text-primary"},_e=["innerHTML"],be=y({__name:"BlogHorizontal",props:{title:{},description:{},created:{},slug:{},collectionId:{},id:{},coverImage:{},index:{},baseUrl:{}},setup(s){const i=s,t=N(),n=S(()=>new Date(i.created).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})),l=S(()=>`${i.baseUrl||""}/blog${i.slug}`),p=S(()=>`${t.public.pocketbaseUrl}api/files/${i.collectionId}/${i.id}/${i.coverImage}`),d=S(()=>i?.description?.trim()||"");return(m,a)=>{const g=U;return u(),f(e(D),{class:"w-full overflow-hidden transition-all duration-300 border shadow-md group hover:shadow-xl hover:-translate-y-1 border-border/40 bg-card/50 backdrop-blur-sm"},{default:c(()=>[r(e(B),{class:"p-0"},{default:c(()=>[r(g,{to:e(l),class:"flex flex-col w-full h-full md:flex-row"},{default:c(()=>[m.coverImage?(u(),b("div",pe,[e(p)?(u(),b("img",{key:0,src:e(p),alt:m.title,width:"600",height:"338",loading:"lazy",class:"object-cover w-full h-full transition-transform duration-700 group-hover:scale-110",decoding:"async"},null,8,me)):v("",!0),a[0]||(a[0]=o("div",{class:"absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-100"},null,-1))])):v("",!0),o("div",ge,[o("div",null,[o("div",fe,[o("span",he,[a[1]||(a[1]=o("svg",{class:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1)),w(" "+x(e(n)),1)])]),o("h3",ye,x(m.title),1),o("p",{class:"text-sm leading-relaxed text-muted-foreground line-clamp-3",innerHTML:e(d)},null,8,_e)]),a[2]||(a[2]=o("div",{class:"flex items-center gap-2 mt-4 text-sm font-semibold transition-all text-primary group-hover:gap-3"},[o("span",null,"Read More"),o("svg",{class:"w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"})])],-1))])]),_:1},8,["to"])]),_:1})]),_:1})}}});var ve=y({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(s){const i=s,t=ee(),{forwardRef:n,currentElement:l}=ae();return t.contentId||=re(void 0,"reka-dialog-content"),I(()=>{t.triggerElement.value=l.value}),(p,d)=>(u(),f(e(le),O(i,{ref:e(n),type:p.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":e(t).open.value||!1,"aria-controls":e(t).open.value?e(t).contentId:void 0,"data-state":e(t).open.value?"open":"closed",onClick:e(t).onOpenToggle}),{default:c(()=>[$(p.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),we=ve;const xe=y({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(s){const i=s;return(t,n)=>(u(),f(e(we),E(Y(i)),{default:c(()=>[$(t.$slots,"default")]),_:3},16))}}),ke={class:"max-h-[60vh] overflow-y-auto px-1 mt-4"},$e=["innerHTML"],Se=y({__name:"Modal",props:{htmlContent:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""}},setup(s,{expose:i}){const t=k(!1);return i({toggleModal:l=>{t.value=l!==void 0?l:!t.value}}),(l,p)=>(u(),f(e(te),{open:t.value,"onUpdate:open":p[0]||(p[0]=d=>t.value=d)},{default:c(()=>[r(e(xe),{"as-child":""},{default:c(()=>[$(l.$slots,"button")]),_:3}),r(e(oe),null,{default:c(()=>[r(e(se),null,{default:c(()=>[r(e(ie),null,{default:c(()=>[w(x(s.title),1)]),_:1}),r(e(ne),null,{default:c(()=>[w(x(s.description),1)]),_:1})]),_:1}),o("div",ke,[s.htmlContent?(u(),b("div",{key:0,innerHTML:s.htmlContent,class:"prose max-w-none"},null,8,$e)):v("",!0),$(l.$slots,"default")])]),_:3})]),_:3},8,["open"]))}}),Ce=`<section>
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
  </section>`,Ie={class:"space-y-2"},Pe={class:"space-y-2"},Te={class:"flex items-center"},Me={for:"newsletter-consent",class:"ml-2 text-sm"},Ue={class:"border-t border-white/10 pt-4"},De={class:"flex flex-col items-center space-y-2 text-center"},Be={class:"flex space-x-2"},Ne={class:"p-2 rounded-lg bg-primary-600/10"},Ve={class:"p-2 rounded-lg bg-primary-600/10"},Re=y({__name:"NewsletterHero",setup(s){const i={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}},t=k({email:"",name:"",consent:!1}),n=k(!1),l=k(null),{createItem:p}=P(),d=async()=>{if(!t.value.consent){l.value={type:"error",text:"Please agree to the privacy policy"};return}n.value=!0,l.value=null;try{await p("newsletterSubs",{email:t.value.email,name:t.value.name,consent_given:!0,subscribed_at:new Date().toISOString()}),l.value={type:"success",text:"Thank you for subscribing!"},t.value={email:"",name:"",consent:!1}}catch(m){console.error("Subscription process failed:",m),l.value={type:"error",text:"Subscription failed. You may already be subscribed or the server is unavailable."}}finally{n.value=!1}};return(m,a)=>(u(),f(e(V).div,{variants:i,initial:"hidden",animate:"visible"},{default:c(()=>[r(e(D),null,{default:c(()=>[r(e(B),{class:"p-6 space-y-6"},{default:c(()=>[o("form",{onSubmit:W(d,["prevent"]),class:"space-y-4"},[o("div",Ie,[r(e(T),{for:"newsletter-email"},{default:c(()=>[...a[3]||(a[3]=[w("Email Address",-1)])]),_:1}),r(e(M),{id:"newsletter-email",modelValue:e(t).email,"onUpdate:modelValue":a[0]||(a[0]=g=>e(t).email=g),type:"email",placeholder:"your@email.com",required:"",class:"bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500"},null,8,["modelValue"])]),o("div",Pe,[r(e(T),{for:"newsletter-name"},{default:c(()=>[...a[4]||(a[4]=[w("Name (Optional)",-1)])]),_:1}),r(e(M),{id:"newsletter-name",modelValue:e(t).name,"onUpdate:modelValue":a[1]||(a[1]=g=>e(t).name=g),type:"text",placeholder:"Your name",class:"bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500"},null,8,["modelValue"])]),o("div",Te,[F(o("input",{id:"newsletter-consent","onUpdate:modelValue":a[2]||(a[2]=g=>e(t).consent=g),type:"checkbox",required:"",class:"w-4 h-4 rounded text-primary-600 bg-white/10 border-white/20 focus:ring-primary-500"},null,512),[[G,e(t).consent]]),o("label",Me,[a[6]||(a[6]=w(" I agree to receive emails and accept the ",-1)),r(Se,{title:"Privacy Policy",description:"This Privacy Policy explains how information may be collected, used, and shared.",htmlContent:e(Ce)},{button:c(()=>[...a[5]||(a[5]=[o("span",{class:"cursor-pointer text-primary-500 hover:underline"}," privacy policy ",-1)])]),_:1},8,["htmlContent"])])]),r(e(H),{size:"lg",class:"w-full",disabled:e(n),type:"submit"},{default:c(()=>[w(x(e(n)?"Subscribing...":"Subscribe Now"),1)]),_:1},8,["disabled"])],32),e(l)?(u(),b("div",{key:0,class:J(["p-4 text-sm rounded-lg",{"bg-green-900/50 text-green-300":e(l).type==="success","bg-red-900/50 text-red-300":e(l).type==="error"}])},x(e(l).text),3)):v("",!0),o("div",Ue,[o("div",De,[o("div",Be,[o("div",Ne,[r(e(ue),{class:"w-5 h-5 text-primary-400"})]),o("div",Ve,[r(e(de),{class:"w-5 h-5 text-primary-400"})])])])])]),_:1})]),_:1})]),_:1}))}}),Le=L(Re,[["__scopeId","data-v-1ae7ff10"]]),ze={class:"flex flex-col w-full md:flex-row lg:flex-col"},qe={class:"grid content-center w-full px-2 mb-8 md:w-1/2 lg:w-full md:pr-16 lg:pr-0 md:mb-4 md:px-0"},je={class:"mb-2 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"},Ae={class:"mt-3 text-sm line-clamp-3"},He=y({__name:"Subscribe",props:{title:{type:String,default:"Join Newsletter"},description:{type:String,default:"Stay updated with the latest news, articles, and resources. Subscribe and never miss out!"}},setup(s){return(i,t)=>{const n=Le;return u(),b("div",ze,[o("div",qe,[o("h2",je,x(s.title),1),o("p",Ae,x(s.description),1)]),r(n,{class:"w-full md:w-1/2 md:pl-2 lg:pl-0 lg:w-full"})])}}}),Oe={class:"flex flex-col w-full min-h-screen gap-8 pb-16 lg:pb-24 lg:flex-row",id:"main-content"},Ee={id:"right-rail","aria-labelledby":"sidebar-heading",class:"w-full lg:w-1/3"},Ye={class:"lg:z-10 lg:sticky top-24"},Fe=y({__name:"FixedRail",setup(s){const i={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}};return(t,n)=>(u(),b("div",Oe,[r(e(V).section,{variants:i,"aria-labelledby":"main-content-heading",class:"w-full gap-4 lg:w-2/3"},{default:c(()=>[n[0]||(n[0]=o("h2",{id:"main-content-heading",class:"sr-only"},"Main content",-1)),$(t.$slots,"main")]),_:3}),o("aside",Ee,[o("div",Ye,[n[1]||(n[1]=o("h2",{id:"sidebar-heading",class:"sr-only"},"Additional content",-1)),$(t.$slots,"right")])])]))}}),Ge={class:"grid w-full gap-4"},We=y({__name:"Blog",props:{content:{type:Array,required:!0},baseUrl:{type:String},type:{type:String,default:"posts"}},setup(s){const i=s,{fetchCollection:t}=P(),n=k([]),l=async()=>{try{return await t(i.type,1,5,"","-created","")}catch(d){return console.error("Error fetching posts:",d),[]}},p=async()=>{n.value=await l()};return I(async()=>{await p()}),(d,m)=>{const a=be,g=He,C=Fe;return u(),f(C,null,{main:c(()=>[o("div",Ge,[(u(!0),b(K,null,Q(s.content,(h,z)=>(u(),f(a,{key:h.id,title:h.title,description:h.description,created:h.created,slug:h.slug,"collection-id":h.collectionId,id:h.id,"cover-image":h.cover_image,index:z,"base-url":s.baseUrl},null,8,["title","description","created","slug","collection-id","id","cover-image","index","base-url"]))),128))])]),right:c(()=>[r(g,{class:"z-10 sticky-position top-24"})]),_:1})}}}),Je={class:"container flex flex-col w-full mx-auto"},Ke={class:"flex justify-center w-full mr-auto -mt-12 lg:-mt-20 lg:w-2/3"},Qe=y({__name:"BlogColumn",props:{title:{type:String,default:"Blog Articles & Tutorials"},description:{type:String,default:"Explore my latest articles and insights on web development, design, and technology. Learn from practical tutorials and stay updated with industry trends."},perPage:{type:Number,default:5},content:{type:Object},showMore:{type:Boolean,default:!0},showPagination:{type:Boolean,default:!0},baseUrl:{type:String,default:""},h1:{type:Boolean,default:!1},type:{type:String,default:"posts"}},setup(s){const i=s,{fetchCollection:t}=P(),n=k({items:[],page:1,perPage:i.perPage,totalItems:0,totalPages:0}),l=X(),p=async(d,m)=>{try{return await t(i.type,d,m,"","-created","")}catch(a){return console.error("Error fetching posts:",a),{items:[],page:1,perPage:m,totalItems:0,totalPages:0}}};return Z(()=>l.query.page,async d=>{const m=d?parseInt(d,10):1;isNaN(m)||(n.value=await p(m,i.perPage))},{immediate:!0}),I(async()=>{const d=l.query.page?parseInt(l.query.page,10):1;n.value=await p(isNaN(d)?1:d,i.perPage)}),(d,m)=>{const a=A,g=We,C=U,h=ce;return u(),b("div",Je,[s.title||s.description?(u(),f(a,{key:0,class:"pb-16",title:s.title,description:s.description,h1:s.h1},null,8,["title","description","h1"])):v("",!0),e(n)?.items?.length?(u(),f(g,{key:1,class:"flex w-full mt-6",content:e(n).items,baseUrl:s.baseUrl},null,8,["content","baseUrl"])):v("",!0),o("div",Ke,[o("div",null,[s.showMore?(u(),f(C,{key:0,to:"/blog/",class:"font-bold w-full transition-all hover:opacity-90 text-primary hover:underline pb-2"},{default:c(()=>[...m[0]||(m[0]=[w(" View All Posts ",-1)])]),_:1})):v("",!0)]),e(n)?.totalPages>1&&s.showPagination?(u(),f(h,{key:0,"total-pages":e(n)?.totalPages,"show-pagination":!0},null,8,["total-pages"])):v("",!0)])])}}}),Xe=L(Qe,[["__scopeId","data-v-fc55dea5"]]),Ze={class:"mt-8 md:pt-16"},$t=y({__name:"index",setup(s){const i=N(),t=S(()=>q({title:_.title,summary:_.description,keywords:_.keywords,imageUri:_.imgSrc,pubDate:"",byline:_.byline,jsonLd:{"@type":"WebSite",url:i.public.siteUrl,name:_.title,description:_.description,publisher:{"@type":"Organization",name:i.public.siteName}}}));return(n,l)=>{const p=j,d=Xe;return u(),b("div",Ze,[r(p,{seoData:e(t)},null,8,["seoData"]),r(d,{h1:!0,title:e(_)?.title,description:e(_)?.description,type:e(i).public.blogType,imgSrc:n.imgSrc,showMore:!1,showPagination:!0},null,8,["title","description","type","imgSrc"])])}}});export{$t as default};
