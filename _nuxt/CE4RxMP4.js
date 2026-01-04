import{_ as L}from"./RWY7HRM4.js";import{_ as M}from"./DEt7_EMr.js";import{a as U,_ as q}from"./B5-D1kV2.js";import{_ as B}from"./C_a81Mfs.js";import{e as y,k as $,h as f,o as u,i as e,w as r,b as c,c as v,D as _,a as t,d as b,t as w,y as z,f as I,L as k,p as H,v as j,x as A,r as x,s as S,H as O,O as Y,G as E,l as F,j as G,F as W,z as J,B as K}from"#entry";import{m as D}from"./mbaAm9U-.js";import{_ as P,a as T}from"./1Vv2lQVy.js";import{i as Q,d as X,_ as Z}from"./CGO8clgp.js";import{_ as ee,b as te,c as oe}from"./D8--kDkQ.js";import{u as se,e as ne,P as ie}from"./DbwqDp5F.js";import{c as N}from"./D142Xo_q.js";import{_ as V}from"./DlAUqK2U.js";import{_ as ae}from"./UIxxxENg.js";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=N("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=N("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),ce={key:0,class:"relative overflow-hidden md:w-2/5 aspect-[16/9] md:aspect-auto"},de=["src","alt"],ue={class:"flex flex-col justify-between w-full p-6 md:w-3/5 md:p-8"},pe={class:"flex items-center gap-3 mb-3"},me={class:"flex items-center gap-1.5 text-xs font-medium text-muted-foreground"},ge={class:"mb-3 text-xl font-bold leading-tight transition-colors line-clamp-2 group-hover:text-primary"},fe=["innerHTML"],he=y({__name:"BlogHorizontal",props:{title:{},description:{},created:{},slug:{},collectionId:{},id:{},coverImage:{},index:{},baseUrl:{}},setup(s){const a=s,o=z(),i=$(()=>new Date(a.created).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})),l=$(()=>`${a.baseUrl||""}/blog${a.slug}`),m=$(()=>`${o.public.pocketbaseUrl}api/files/${a.collectionId}/${a.id}/${a.coverImage}`),d=$(()=>a?.description?.trim()||"");return(p,n)=>{const g=M;return u(),f(e(U),{class:"w-full overflow-hidden transition-all duration-300 border shadow-md group hover:shadow-xl hover:-translate-y-1 border-border/40 bg-card/50 backdrop-blur-sm"},{default:r(()=>[c(e(B),{class:"p-0"},{default:r(()=>[c(g,{to:e(l),class:"flex flex-col w-full h-full md:flex-row"},{default:r(()=>[p.coverImage?(u(),v("div",ce,[e(m)?(u(),v("img",{key:0,src:e(m),alt:p.title,width:"600",height:"338",loading:"lazy",class:"object-cover w-full h-full transition-transform duration-700 group-hover:scale-110",decoding:"async"},null,8,de)):_("",!0),n[0]||(n[0]=t("div",{class:"absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-100"},null,-1))])):_("",!0),t("div",ue,[t("div",null,[t("div",pe,[t("span",me,[n[1]||(n[1]=t("svg",{class:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1)),b(" "+w(e(i)),1)])]),t("h3",ge,w(p.title),1),t("p",{class:"text-sm leading-relaxed text-muted-foreground line-clamp-3",innerHTML:e(d)},null,8,fe)]),n[2]||(n[2]=t("div",{class:"flex items-center gap-2 mt-4 text-sm font-semibold transition-all text-primary group-hover:gap-3"},[t("span",null,"Read More"),t("svg",{class:"w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"})])],-1))])]),_:1},8,["to"])]),_:1})]),_:1})}}});var ye=y({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(s){const a=s,o=Q(),{forwardRef:i,currentElement:l}=se();return o.contentId||=ne(void 0,"reka-dialog-content"),I(()=>{o.triggerElement.value=l.value}),(m,d)=>(u(),f(e(ie),H(a,{ref:e(i),type:m.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":e(o).open.value||!1,"aria-controls":e(o).open.value?e(o).contentId:void 0,"data-state":e(o).open.value?"open":"closed",onClick:e(o).onOpenToggle}),{default:r(()=>[k(m.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),_e=ye;const be=y({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(s){const a=s;return(o,i)=>(u(),f(e(_e),j(A(a)),{default:r(()=>[k(o.$slots,"default")]),_:3},16))}}),ve={class:"max-h-[60vh] overflow-y-auto px-1 mt-4"},we=["innerHTML"],xe=y({__name:"Modal",props:{htmlContent:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""}},setup(s,{expose:a}){const o=x(!1);return a({toggleModal:l=>{o.value=l!==void 0?l:!o.value}}),(l,m)=>(u(),f(e(X),{open:o.value,"onUpdate:open":m[0]||(m[0]=d=>o.value=d)},{default:r(()=>[c(e(be),{"as-child":""},{default:r(()=>[k(l.$slots,"button")]),_:3}),c(e(Z),null,{default:r(()=>[c(e(ee),null,{default:r(()=>[c(e(te),null,{default:r(()=>[b(w(s.title),1)]),_:1}),c(e(oe),null,{default:r(()=>[b(w(s.description),1)]),_:1})]),_:1}),t("div",ve,[s.htmlContent?(u(),v("div",{key:0,innerHTML:s.htmlContent,class:"prose max-w-none"},null,8,we)):_("",!0),k(l.$slots,"default")])]),_:3})]),_:3},8,["open"]))}}),ke=`<section>
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
  </section>`,$e={class:"space-y-2"},Ce={class:"space-y-2"},Ie={class:"flex items-center"},Se={for:"newsletter-consent",class:"ml-2 text-sm"},Pe={class:"border-t border-white/10 pt-4"},Te={class:"flex flex-col items-center space-y-2 text-center"},Me={class:"flex space-x-2"},Ue={class:"p-2 rounded-lg bg-primary-600/10"},Be={class:"p-2 rounded-lg bg-primary-600/10"},De=y({__name:"NewsletterHero",setup(s){const a={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}},o=x({email:"",name:"",consent:!1}),i=x(!1),l=x(null),{createItem:m}=S(),d=async()=>{if(!o.value.consent){l.value={type:"error",text:"Please agree to the privacy policy"};return}i.value=!0,l.value=null;try{await m("newsletterSubs",{email:o.value.email,name:o.value.name,consent_given:!0,subscribed_at:new Date().toISOString()}),l.value={type:"success",text:"Thank you for subscribing!"},o.value={email:"",name:"",consent:!1}}catch(p){console.error("Subscription process failed:",p),l.value={type:"error",text:"Subscription failed. You may already be subscribed or the server is unavailable."}}finally{i.value=!1}};return(p,n)=>(u(),f(e(D).div,{variants:a,initial:"hidden",animate:"visible"},{default:r(()=>[c(e(U),null,{default:r(()=>[c(e(B),{class:"p-6 space-y-6"},{default:r(()=>[t("form",{onSubmit:E(d,["prevent"]),class:"space-y-4"},[t("div",$e,[c(e(P),{for:"newsletter-email"},{default:r(()=>[...n[3]||(n[3]=[b("Email Address",-1)])]),_:1}),c(e(T),{id:"newsletter-email",modelValue:e(o).email,"onUpdate:modelValue":n[0]||(n[0]=g=>e(o).email=g),type:"email",placeholder:"your@email.com",required:"",class:"bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500"},null,8,["modelValue"])]),t("div",Ce,[c(e(P),{for:"newsletter-name"},{default:r(()=>[...n[4]||(n[4]=[b("Name (Optional)",-1)])]),_:1}),c(e(T),{id:"newsletter-name",modelValue:e(o).name,"onUpdate:modelValue":n[1]||(n[1]=g=>e(o).name=g),type:"text",placeholder:"Your name",class:"bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500"},null,8,["modelValue"])]),t("div",Ie,[O(t("input",{id:"newsletter-consent","onUpdate:modelValue":n[2]||(n[2]=g=>e(o).consent=g),type:"checkbox",required:"",class:"w-4 h-4 rounded text-primary-600 bg-white/10 border-white/20 focus:ring-primary-500"},null,512),[[Y,e(o).consent]]),t("label",Se,[n[6]||(n[6]=b(" I agree to receive emails and accept the ",-1)),c(xe,{title:"Privacy Policy",description:"This Privacy Policy explains how information may be collected, used, and shared.",htmlContent:e(ke)},{button:r(()=>[...n[5]||(n[5]=[t("span",{class:"cursor-pointer text-primary-500 hover:underline"}," privacy policy ",-1)])]),_:1},8,["htmlContent"])])]),c(e(q),{size:"lg",class:"w-full",disabled:e(i),type:"submit"},{default:r(()=>[b(w(e(i)?"Subscribing...":"Subscribe Now"),1)]),_:1},8,["disabled"])],32),e(l)?(u(),v("div",{key:0,class:F(["p-4 text-sm rounded-lg",{"bg-green-900/50 text-green-300":e(l).type==="success","bg-red-900/50 text-red-300":e(l).type==="error"}])},w(e(l).text),3)):_("",!0),t("div",Pe,[t("div",Te,[t("div",Me,[t("div",Ue,[c(e(re),{class:"w-5 h-5 text-primary-400"})]),t("div",Be,[c(e(le),{class:"w-5 h-5 text-primary-400"})])])])])]),_:1})]),_:1})]),_:1}))}}),Ne=V(De,[["__scopeId","data-v-1ae7ff10"]]),Ve={class:"flex flex-col w-full md:flex-row lg:flex-col"},Re={class:"grid content-center w-full px-2 mb-8 md:w-1/2 lg:w-full md:pr-16 lg:pr-0 md:mb-4 md:px-0"},Le={class:"mb-2 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"},qe={class:"mt-3 text-sm line-clamp-3"},ze=y({__name:"Subscribe",props:{title:{type:String,default:"Join Newsletter"},description:{type:String,default:"Stay updated with the latest news, articles, and resources. Subscribe and never miss out!"}},setup(s){return(a,o)=>{const i=Ne;return u(),v("div",Ve,[t("div",Re,[t("h2",Le,w(s.title),1),t("p",qe,w(s.description),1)]),c(i,{class:"w-full md:w-1/2 md:pl-2 lg:pl-0 lg:w-full"})])}}}),He={class:"flex flex-col w-full min-h-screen gap-8 pb-16 lg:pb-24 lg:flex-row",id:"main-content"},je={id:"right-rail","aria-labelledby":"sidebar-heading",class:"w-full lg:w-1/3"},Ae={class:"lg:z-10 lg:sticky top-24"},Oe=y({__name:"FixedRail",setup(s){const a={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}};return(o,i)=>(u(),v("div",He,[c(e(D).section,{variants:a,"aria-labelledby":"main-content-heading",class:"w-full gap-4 lg:w-2/3"},{default:r(()=>[i[0]||(i[0]=t("h2",{id:"main-content-heading",class:"sr-only"},"Main content",-1)),k(o.$slots,"main")]),_:3}),t("aside",je,[t("div",Ae,[i[1]||(i[1]=t("h2",{id:"sidebar-heading",class:"sr-only"},"Additional content",-1)),k(o.$slots,"right")])])]))}}),Ye={class:"grid w-full gap-4"},Ee=y({__name:"Blog",props:{content:{type:Array,required:!0},baseUrl:{type:String},type:{type:String,default:"posts"}},setup(s){const a=s,{fetchCollection:o}=S(),i=x([]),l=async()=>{try{return await o(a.type,1,5,"","-created","")}catch(d){return console.error("Error fetching posts:",d),[]}},m=async()=>{i.value=await l()};return I(async()=>{await m()}),(d,p)=>{const n=he,g=ze,C=Oe;return u(),f(C,null,{main:r(()=>[t("div",Ye,[(u(!0),v(W,null,G(s.content,(h,R)=>(u(),f(n,{key:h.id,title:h.title,description:h.description,created:h.created,slug:h.slug,"collection-id":h.collectionId,id:h.id,"cover-image":h.cover_image,index:R,"base-url":s.baseUrl},null,8,["title","description","created","slug","collection-id","id","cover-image","index","base-url"]))),128))])]),right:r(()=>[c(g,{class:"z-10 sticky-position top-24"})]),_:1})}}}),Fe={class:"container flex flex-col w-full mx-auto"},Ge={class:"flex justify-center w-full mr-auto -mt-12 lg:-mt-20 lg:w-2/3"},We=y({__name:"BlogColumn",props:{title:{type:String,default:"Blog Articles & Tutorials"},description:{type:String,default:"Explore my latest articles and insights on web development, design, and technology. Learn from practical tutorials and stay updated with industry trends."},perPage:{type:Number,default:5},content:{type:Object},showMore:{type:Boolean,default:!0},showPagination:{type:Boolean,default:!0},baseUrl:{type:String,default:""},h1:{type:Boolean,default:!1},type:{type:String,default:"posts"}},setup(s){const a=s,{fetchCollection:o}=S(),i=x({items:[],page:1,perPage:a.perPage,totalItems:0,totalPages:0}),l=J(),m=async(d,p)=>{try{return await o(a.type,d,p,"","-created","")}catch(n){return console.error("Error fetching posts:",n),{items:[],page:1,perPage:p,totalItems:0,totalPages:0}}};return K(()=>l.query.page,async d=>{const p=d?parseInt(d,10):1;isNaN(p)||(i.value=await m(p,a.perPage))},{immediate:!0}),I(async()=>{const d=l.query.page?parseInt(l.query.page,10):1;i.value=await m(isNaN(d)?1:d,a.perPage)}),(d,p)=>{const n=L,g=Ee,C=M,h=ae;return u(),v("div",Fe,[s.title||s.description?(u(),f(n,{key:0,class:"pb-16",title:s.title,description:s.description,h1:s.h1},null,8,["title","description","h1"])):_("",!0),e(i)?.items?.length?(u(),f(g,{key:1,class:"flex w-full mt-6",content:e(i).items,baseUrl:s.baseUrl},null,8,["content","baseUrl"])):_("",!0),t("div",Ge,[t("div",null,[s.showMore?(u(),f(C,{key:0,to:"/blog/",class:"font-bold w-full transition-all hover:opacity-90 text-primary hover:underline pb-2"},{default:r(()=>[...p[0]||(p[0]=[b(" View All Posts ",-1)])]),_:1})):_("",!0)]),e(i)?.totalPages>1&&s.showPagination?(u(),f(h,{key:0,"total-pages":e(i)?.totalPages,"show-pagination":!0},null,8,["total-pages"])):_("",!0)])])}}}),rt=V(We,[["__scopeId","data-v-fc55dea5"]]);export{rt as _};
