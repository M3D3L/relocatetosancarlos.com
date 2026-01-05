import{_ as q}from"./B-s96G9j.js";import{_ as T}from"./CKOz2Zao.js";import{a as L,_ as z}from"./B24SzXjX.js";import{_ as U}from"./BZeatX62.js";import{e as b,j as $,h as f,o as m,u as e,w as r,b as c,c as w,B as v,a as t,d as _,t as y,v as j,f as I,J as k,m as B,q as H,s as O,r as x,p as S,E as A,M as E,D as Y,k as F,i as G,F as W,x as J,z as K}from"#entry";import{m as D}from"./DfI7k3NR.js";import{_ as P,a as M}from"./BcJzIxwx.js";import{i as Q,d as X,_ as Z}from"./BUhp9WWz.js";import{_ as ee,b as te,c as oe}from"./B_sisX3B.js";import{u as ae,e as se,P as ne}from"./7GlOMstC.js";import{c as N}from"./DPbuNZJ3.js";import{_ as V}from"./DlAUqK2U.js";import{_ as ie}from"./BSjt_Nae.js";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=N("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=N("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),ce={key:0,class:"relative overflow-hidden md:w-2/5 aspect-[16/9] md:aspect-auto"},de=["src","alt"],ue={class:"flex flex-col justify-between w-full p-6 md:w-3/5 md:p-8"},me={class:"flex items-center gap-3 mb-3"},pe={class:"flex items-center gap-1.5 text-xs font-medium text-muted-foreground"},ge={class:"mb-3 text-xl font-bold leading-tight transition-colors line-clamp-2 group-hover:text-primary"},fe=["innerHTML"],he=b({__name:"BlogHorizontal",props:{title:{},description:{},created:{},slug:{},collectionId:{},id:{},coverImage:{},index:{},baseUrl:{}},setup(o){const n=o,a=j(),s=$(()=>new Date(n.created).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})),i=$(()=>`${n.baseUrl||""}/blog${n.slug}`),p=$(()=>`${a.public.pocketbaseUrl}api/files/${n.collectionId}/${n.id}/${n.coverImage}`),d=$(()=>n?.description?.trim()||"");return(u,l)=>{const g=T;return m(),f(e(L),{class:"w-full overflow-hidden transition-all duration-300 border shadow-md group hover:shadow-xl hover:-translate-y-1 border-border/40 bg-card/50 backdrop-blur-sm"},{default:r(()=>[c(e(U),{class:"p-0"},{default:r(()=>[c(g,{to:e(i),class:"flex flex-col w-full h-full md:flex-row"},{default:r(()=>[u.coverImage?(m(),w("div",ce,[e(p)?(m(),w("img",{key:0,src:e(p),alt:u.title,width:"600",height:"338",loading:"lazy",class:"object-cover w-full h-full transition-transform duration-700 group-hover:scale-110",decoding:"async"},null,8,de)):v("",!0),l[0]||(l[0]=t("div",{class:"absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-100"},null,-1))])):v("",!0),t("div",ue,[t("div",null,[t("div",me,[t("span",pe,[l[1]||(l[1]=t("svg",{class:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1)),_(" "+y(e(s)),1)])]),t("h3",ge,y(u.title),1),t("p",{class:"text-sm leading-relaxed text-muted-foreground line-clamp-3",innerHTML:e(d)},null,8,fe)]),l[2]||(l[2]=t("div",{class:"flex items-center gap-2 mt-4 text-sm font-semibold transition-all text-primary group-hover:gap-3"},[t("span",null,"Read More"),t("svg",{class:"w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"})])],-1))])]),_:1},8,["to"])]),_:1})]),_:1})}}});var ye=b({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(o){const n=o,a=Q(),{forwardRef:s,currentElement:i}=ae();return a.contentId||=se(void 0,"reka-dialog-content"),I(()=>{a.triggerElement.value=i.value}),(p,d)=>(m(),f(e(ne),B(n,{ref:e(s),type:p.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":e(a).open.value||!1,"aria-controls":e(a).open.value?e(a).contentId:void 0,"data-state":e(a).open.value?"open":"closed",onClick:e(a).onOpenToggle}),{default:r(()=>[k(p.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),be=ye;const ve=b({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(o){const n=o;return(a,s)=>(m(),f(e(be),H(O(n)),{default:r(()=>[k(a.$slots,"default")]),_:3},16))}}),_e={class:"max-h-[60vh] overflow-y-auto px-1 mt-4"},we=["innerHTML"],xe=b({__name:"Modal",props:{htmlContent:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""}},setup(o,{expose:n}){const a=x(!1);return n({toggleModal:i=>{a.value=i!==void 0?i:!a.value}}),(i,p)=>(m(),f(e(X),{open:a.value,"onUpdate:open":p[0]||(p[0]=d=>a.value=d)},{default:r(()=>[c(e(ve),{"as-child":""},{default:r(()=>[k(i.$slots,"button")]),_:3}),c(e(Z),null,{default:r(()=>[c(e(ee),null,{default:r(()=>[c(e(te),null,{default:r(()=>[_(y(o.title),1)]),_:1}),c(e(oe),null,{default:r(()=>[_(y(o.description),1)]),_:1})]),_:1}),t("div",_e,[o.htmlContent?(m(),w("div",{key:0,innerHTML:o.htmlContent,class:"prose max-w-none"},null,8,we)):v("",!0),k(i.$slots,"default")])]),_:3})]),_:3},8,["open"]))}}),ke=`<section>
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
  </section>`,$e={class:"space-y-2"},Ce={class:"space-y-2"},Ie={class:"flex items-center"},Se={for:"newsletter-consent",class:"ml-2 text-sm"},Pe={class:"border-t border-white/10 pt-4"},Me={class:"flex flex-col items-center space-y-2 text-center"},Te={class:"flex space-x-2"},Le={class:"p-2 rounded-lg bg-primary-600/10"},Ue={class:"p-2 rounded-lg bg-primary-600/10"},Be=b({__name:"NewsletterHero",props:{emailLabel:{},nameLabel:{},privacyLabel:{},buttonLabel:{}},setup(o){const n={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}},a=x({email:"",name:"",consent:!1}),s=x(!1),i=x(null),{createItem:p}=S(),d=async()=>{if(!a.value.consent){i.value={type:"error",text:"Please agree to the privacy policy"};return}s.value=!0,i.value=null;try{await p("newsletterSubs",{email:a.value.email,name:a.value.name,consent_given:!0,subscribed_at:new Date().toISOString()}),i.value={type:"success",text:"Thank you for subscribing!"},a.value={email:"",name:"",consent:!1}}catch(u){console.error("Subscription process failed:",u),i.value={type:"error",text:"Subscription failed. You may already be subscribed or the server is unavailable."}}finally{s.value=!1}};return(u,l)=>(m(),f(e(D).div,{variants:n,initial:"hidden",animate:"visible"},{default:r(()=>[c(e(L),null,{default:r(()=>[c(e(U),{class:"p-6 space-y-6"},{default:r(()=>[t("form",{onSubmit:Y(d,["prevent"]),class:"space-y-4"},[t("div",$e,[c(e(P),{for:"newsletter-email"},{default:r(()=>[_(y(u.emailLabel),1)]),_:1}),c(e(M),{id:"newsletter-email",modelValue:e(a).email,"onUpdate:modelValue":l[0]||(l[0]=g=>e(a).email=g),type:"email",placeholder:"your@email.com",required:"",class:"bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500"},null,8,["modelValue"])]),t("div",Ce,[c(e(P),{for:"newsletter-name"},{default:r(()=>[_(y(u.nameLabel),1)]),_:1}),c(e(M),{id:"newsletter-name",modelValue:e(a).name,"onUpdate:modelValue":l[1]||(l[1]=g=>e(a).name=g),type:"text",placeholder:"Your name",class:"bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500"},null,8,["modelValue"])]),t("div",Ie,[A(t("input",{id:"newsletter-consent","onUpdate:modelValue":l[2]||(l[2]=g=>e(a).consent=g),type:"checkbox",required:"",class:"w-4 h-4 rounded text-primary-600 bg-white/10 border-white/20 focus:ring-primary-500"},null,512),[[E,e(a).consent]]),t("label",Se,[l[4]||(l[4]=_(" I agree to receive emails and accept the ",-1)),c(xe,{title:"Privacy Policy",description:"This Privacy Policy explains how information may be collected, used, and shared.",htmlContent:e(ke)},{button:r(()=>[...l[3]||(l[3]=[t("span",{class:"cursor-pointer text-primary-500 hover:underline"}," privacy policy ",-1)])]),_:1},8,["htmlContent"])])]),c(e(z),{size:"lg",class:"w-full",disabled:e(s),type:"submit"},{default:r(()=>[_(y(e(s)?"...":u.buttonLabel),1)]),_:1},8,["disabled"])],32),e(i)?(m(),w("div",{key:0,class:F(["p-4 text-sm rounded-lg",{"bg-green-900/50 text-green-300":e(i).type==="success","bg-red-900/50 text-red-300":e(i).type==="error"}])},y(e(i).text),3)):v("",!0),t("div",Pe,[t("div",Me,[t("div",Te,[t("div",Le,[c(e(re),{class:"w-5 h-5 text-primary-400"})]),t("div",Ue,[c(e(le),{class:"w-5 h-5 text-primary-400"})])])])])]),_:1})]),_:1})]),_:1}))}}),De=V(Be,[["__scopeId","data-v-2f2fc869"]]),Ne={class:"flex flex-col w-full md:flex-row lg:flex-col"},Ve={class:"grid content-center w-full px-2 mb-8 md:w-1/2 lg:w-full md:pr-16 lg:pr-0 md:mb-4 md:px-0"},Re={class:"mb-2 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"},qe={class:"mt-3 text-sm line-clamp-3"},ze=b({__name:"Subscribe",props:{title:{type:String,default:"Join Newsletter"},description:{type:String,default:"Stay updated with the latest news, articles, and resources. Subscribe and never miss out!"},email:{type:String,default:"Email Address"},name:{type:String,default:"Name (Optional)"},privacy:{type:String,default:"I agree to receive emails and accept the privacy policy"},button:{type:String,default:"Subscribe Now"}},setup(o){return(n,a)=>{const s=De;return m(),w("div",Ne,[t("div",Ve,[t("h2",Re,y(o.title),1),t("p",qe,y(o.description),1)]),c(s,{"email-label":o.email,"name-label":o.name,"privacy-label":o.privacy,"button-label":o.button,class:"w-full md:w-1/2 md:pl-2 lg:pl-0 lg:w-full"},null,8,["email-label","name-label","privacy-label","button-label"])])}}}),je={class:"flex flex-col w-full min-h-screen gap-8 pb-16 lg:pb-24 lg:flex-row",id:"main-content"},He={id:"right-rail","aria-labelledby":"sidebar-heading",class:"w-full lg:w-1/3"},Oe={class:"lg:z-10 lg:sticky top-24"},Ae=b({__name:"FixedRail",setup(o){const n={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}};return(a,s)=>(m(),w("div",je,[c(e(D).section,{variants:n,"aria-labelledby":"main-content-heading",class:"w-full gap-4 lg:w-2/3"},{default:r(()=>[s[0]||(s[0]=t("h2",{id:"main-content-heading",class:"sr-only"},"Main content",-1)),k(a.$slots,"main")]),_:3}),t("aside",He,[t("div",Oe,[s[1]||(s[1]=t("h2",{id:"sidebar-heading",class:"sr-only"},"Additional content",-1)),k(a.$slots,"right")])])]))}}),Ee={class:"grid w-full gap-4"},Ye=b({__name:"Blog",props:{content:{type:Array,required:!0},baseUrl:{type:String},type:{type:String,default:"posts"},newsLetterModule:{type:Object,default:()=>({})}},setup(o){const n=o,{fetchCollection:a}=S(),s=x([]),i=async()=>{try{return await a(n.type,1,5,"","-created","")}catch(d){return console.error("Error fetching posts:",d),[]}},p=async()=>{s.value=await i()};return I(async()=>{await p()}),(d,u)=>{const l=he,g=ze,C=Ae;return m(),f(C,null,{main:r(()=>[t("div",Ee,[(m(!0),w(W,null,G(o.content,(h,R)=>(m(),f(l,{key:h.id,title:h.title,description:h.description,created:h.created,slug:h.slug,"collection-id":h.collectionId,id:h.id,"cover-image":h.cover_image,index:R,"base-url":o.baseUrl},null,8,["title","description","created","slug","collection-id","id","cover-image","index","base-url"]))),128))])]),right:r(()=>[c(g,B(o.newsLetterModule,{class:"z-10 sticky-position top-24"}),null,16)]),_:1})}}}),Fe={class:"container flex flex-col w-full mx-auto"},Ge={class:"flex justify-center w-full mr-auto -mt-12 lg:-mt-20 lg:w-2/3"},We=b({__name:"BlogColumn",props:{title:{type:String,default:"Blog Articles & Tutorials"},description:{type:String,default:"Explore my latest articles and insights on web development, design, and technology. Learn from practical tutorials and stay updated with industry trends."},perPage:{type:Number,default:5},content:{type:Object},newsLetterModule:{type:Object,default:()=>({})},showMore:{type:Boolean,default:!0},showPagination:{type:Boolean,default:!0},baseUrl:{type:String,default:""},h1:{type:Boolean,default:!1},type:{type:String,default:"posts"}},setup(o){const n=o,{fetchCollection:a}=S(),s=x({items:[],page:1,perPage:n.perPage,totalItems:0,totalPages:0}),i=J(),p=async(d,u)=>{try{return await a(n.type,d,u,"","-created","")}catch(l){return console.error("Error fetching posts:",l),{items:[],page:1,perPage:u,totalItems:0,totalPages:0}}};return K(()=>i.query.page,async d=>{const u=d?parseInt(d,10):1;isNaN(u)||(s.value=await p(u,n.perPage))},{immediate:!0}),I(async()=>{const d=i.query.page?parseInt(i.query.page,10):1;s.value=await p(isNaN(d)?1:d,n.perPage)}),(d,u)=>{const l=q,g=Ye,C=T,h=ie;return m(),w("div",Fe,[o.title||o.description?(m(),f(l,{key:0,class:"pb-16",title:o.title,description:o.description,h1:o.h1},null,8,["title","description","h1"])):v("",!0),e(s)?.items?.length?(m(),f(g,{key:1,class:"flex w-full mt-6",content:e(s).items,baseUrl:o.baseUrl,newsLetterModule:o.newsLetterModule},null,8,["content","baseUrl","newsLetterModule"])):v("",!0),t("div",Ge,[t("div",null,[o.showMore?(m(),f(C,{key:0,to:"/blog/",class:"font-bold w-full transition-all hover:opacity-90 text-primary hover:underline pb-2"},{default:r(()=>[...u[0]||(u[0]=[_(" View All Posts ",-1)])]),_:1})):v("",!0)]),e(s)?.totalPages>1&&o.showPagination?(m(),f(h,{key:0,"total-pages":e(s)?.totalPages,"show-pagination":!0},null,8,["total-pages"])):v("",!0)])])}}}),rt=V(We,[["__scopeId","data-v-c7ee3edd"]]);export{rt as _};
