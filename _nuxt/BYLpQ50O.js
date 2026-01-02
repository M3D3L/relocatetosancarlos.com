import{_ as N}from"./BPwqIJs9.js";import{_ as D}from"./lxGuEaG0.js";import{e as h,f as $,h as f,o as u,w as l,M as w,m as R,u as e,s as V,v as q,r as v,b as r,a as i,d as _,t as x,c as k,q as b,p as I,E as A,K as E,D as L,k as Y,i as z,F as O,y as F,A as G}from"#entry";import{m as T}from"./C36bMoTH.js";import{_ as H}from"./w0Us7znI.js";import{_ as j}from"./LovYnHpk.js";import{_ as W}from"./DWaChnNd.js";import{_ as S,a as P}from"./Bp_bnnpl.js";import{i as J,d as K,_ as Q}from"./BodNxVvZ.js";import{_ as X,b as Z,c as ee}from"./CwyVaMqa.js";import{u as te,e as oe,P as se}from"./Cg0zEK6I.js";import{c as M}from"./D142Xo_q.js";import{_ as U}from"./DlAUqK2U.js";import{_ as ie}from"./c2BuUw7b.js";import{_ as ae}from"./dqpbrkp7.js";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=M("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=M("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var re=h({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(o){const c=o,t=J(),{forwardRef:s,currentElement:a}=te();return t.contentId||=oe(void 0,"reka-dialog-content"),$(()=>{t.triggerElement.value=a.value}),(p,d)=>(u(),f(e(se),R(c,{ref:e(s),type:p.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":e(t).open.value||!1,"aria-controls":e(t).open.value?e(t).contentId:void 0,"data-state":e(t).open.value?"open":"closed",onClick:e(t).onOpenToggle}),{default:l(()=>[w(p.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),ce=re;const de=h({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(o){const c=o;return(t,s)=>(u(),f(e(ce),V(q(c)),{default:l(()=>[w(t.$slots,"default")]),_:3},16))}}),ue={class:"max-h-[60vh] overflow-y-auto px-1 mt-4"},pe=["innerHTML"],me=h({__name:"Modal",props:{htmlContent:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""}},setup(o,{expose:c}){const t=v(!1);return c({toggleModal:a=>{t.value=a!==void 0?a:!t.value}}),(a,p)=>(u(),f(e(K),{open:t.value,"onUpdate:open":p[0]||(p[0]=d=>t.value=d)},{default:l(()=>[r(e(de),{"as-child":""},{default:l(()=>[w(a.$slots,"button")]),_:3}),r(e(Q),null,{default:l(()=>[r(e(X),null,{default:l(()=>[r(e(Z),null,{default:l(()=>[_(x(o.title),1)]),_:1}),r(e(ee),null,{default:l(()=>[_(x(o.description),1)]),_:1})]),_:1}),i("div",ue,[o.htmlContent?(u(),k("div",{key:0,innerHTML:o.htmlContent,class:"prose max-w-none"},null,8,pe)):b("",!0),w(a.$slots,"default")])]),_:3})]),_:3},8,["open"]))}}),ge=`<section>
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
  </section>`,fe={class:"space-y-2"},ye={class:"space-y-2"},he={class:"flex items-center"},_e={for:"newsletter-consent",class:"ml-2 text-sm"},be={class:"border-t border-white/10 pt-4"},ve={class:"flex flex-col items-center space-y-2 text-center"},we={class:"flex space-x-2"},xe={class:"p-2 rounded-lg bg-primary-600/10"},ke={class:"p-2 rounded-lg bg-primary-600/10"},Ce=h({__name:"NewsletterHero",setup(o){const c={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}},t=v({email:"",name:"",consent:!1}),s=v(!1),a=v(null),{createItem:p}=I(),d=async()=>{if(!t.value.consent){a.value={type:"error",text:"Please agree to the privacy policy"};return}s.value=!0,a.value=null;try{await p("newsletterSubs",{email:t.value.email,name:t.value.name,consent_given:!0,subscribed_at:new Date().toISOString()}),a.value={type:"success",text:"Thank you for subscribing!"},t.value={email:"",name:"",consent:!1}}catch(m){console.error("Subscription process failed:",m),a.value={type:"error",text:"Subscription failed. You may already be subscribed or the server is unavailable."}}finally{s.value=!1}};return(m,n)=>(u(),f(e(T).div,{variants:c,initial:"hidden",animate:"visible"},{default:l(()=>[r(e(H),null,{default:l(()=>[r(e(j),{class:"p-6 space-y-6"},{default:l(()=>[i("form",{onSubmit:L(d,["prevent"]),class:"space-y-4"},[i("div",fe,[r(e(S),{for:"newsletter-email"},{default:l(()=>[...n[3]||(n[3]=[_("Email Address",-1)])]),_:1}),r(e(P),{id:"newsletter-email",modelValue:e(t).email,"onUpdate:modelValue":n[0]||(n[0]=y=>e(t).email=y),type:"email",placeholder:"your@email.com",required:"",class:"bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500"},null,8,["modelValue"])]),i("div",ye,[r(e(S),{for:"newsletter-name"},{default:l(()=>[...n[4]||(n[4]=[_("Name (Optional)",-1)])]),_:1}),r(e(P),{id:"newsletter-name",modelValue:e(t).name,"onUpdate:modelValue":n[1]||(n[1]=y=>e(t).name=y),type:"text",placeholder:"Your name",class:"bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500"},null,8,["modelValue"])]),i("div",he,[A(i("input",{id:"newsletter-consent","onUpdate:modelValue":n[2]||(n[2]=y=>e(t).consent=y),type:"checkbox",required:"",class:"w-4 h-4 rounded text-primary-600 bg-white/10 border-white/20 focus:ring-primary-500"},null,512),[[E,e(t).consent]]),i("label",_e,[n[6]||(n[6]=_(" I agree to receive emails and accept the ",-1)),r(me,{title:"Privacy Policy",description:"This Privacy Policy explains how information may be collected, used, and shared.",htmlContent:e(ge)},{button:l(()=>[...n[5]||(n[5]=[i("span",{class:"cursor-pointer text-primary-500 hover:underline"}," privacy policy ",-1)])]),_:1},8,["htmlContent"])])]),r(e(W),{size:"lg",class:"w-full",disabled:e(s),type:"submit"},{default:l(()=>[_(x(e(s)?"Subscribing...":"Subscribe Now"),1)]),_:1},8,["disabled"])],32),e(a)?(u(),k("div",{key:0,class:Y(["p-4 text-sm rounded-lg",{"bg-green-900/50 text-green-300":e(a).type==="success","bg-red-900/50 text-red-300":e(a).type==="error"}])},x(e(a).text),3)):b("",!0),i("div",be,[i("div",ve,[i("div",we,[i("div",xe,[r(e(le),{class:"w-5 h-5 text-primary-400"})]),i("div",ke,[r(e(ne),{class:"w-5 h-5 text-primary-400"})])])])])]),_:1})]),_:1})]),_:1}))}}),$e=U(Ce,[["__scopeId","data-v-1ae7ff10"]]),Ie={class:"flex flex-col w-full md:flex-row lg:flex-col"},Se={class:"grid content-center w-full px-2 mb-8 md:w-1/2 lg:w-full md:pr-16 lg:pr-0 md:mb-4 md:px-0"},Pe={class:"mb-2 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl"},Te={class:"mt-3 text-sm line-clamp-3"},Me=h({__name:"Subscribe",props:{title:{type:String,default:"Join Newsletter"},description:{type:String,default:"Stay updated with the latest news, articles, and resources. Subscribe and never miss out!"}},setup(o){return(c,t)=>{const s=$e;return u(),k("div",Ie,[i("div",Se,[i("h2",Pe,x(o.title),1),i("p",Te,x(o.description),1)]),r(s,{class:"w-full md:w-1/2 md:pl-2 lg:pl-0 lg:w-full"})])}}}),Ue={class:"flex flex-col w-full min-h-screen gap-8 pb-16 lg:pb-24 lg:flex-row",id:"main-content"},Be={id:"right-rail","aria-labelledby":"sidebar-heading",class:"w-full lg:w-1/3"},Ne={class:"lg:z-10 lg:sticky top-24"},De=h({__name:"FixedRail",setup(o){const c={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}};return(t,s)=>(u(),k("div",Ue,[r(e(T).section,{variants:c,"aria-labelledby":"main-content-heading",class:"w-full gap-4 lg:w-2/3"},{default:l(()=>[s[0]||(s[0]=i("h2",{id:"main-content-heading",class:"sr-only"},"Main content",-1)),w(t.$slots,"main")]),_:3}),i("aside",Be,[i("div",Ne,[s[1]||(s[1]=i("h2",{id:"sidebar-heading",class:"sr-only"},"Additional content",-1)),w(t.$slots,"right")])])]))}}),Re={class:"grid w-full gap-4"},Ve=h({__name:"Blog",props:{content:{type:Array,required:!0},baseUrl:{type:String},type:{type:String,default:"posts"}},setup(o){const c=o,{fetchCollection:t}=I(),s=v([]),a=async()=>{try{return await t(c.type,1,5,"","-created","")}catch(d){return console.error("Error fetching posts:",d),[]}},p=async()=>{s.value=await a()};return $(async()=>{await p()}),(d,m)=>{const n=D,y=Me,C=De;return u(),f(C,null,{main:l(()=>[i("div",Re,[(u(!0),k(O,null,z(o.content,(g,B)=>(u(),f(n,{key:g.id,title:g.title,description:g.description,created:g.created,slug:g.slug,"collection-id":g.collectionId,id:g.id,"cover-image":g.cover_image,index:B,"base-url":o.baseUrl},null,8,["title","description","created","slug","collection-id","id","cover-image","index","base-url"]))),128))])]),right:l(()=>[r(y,{class:"z-10 sticky-position top-24"})]),_:1})}}}),qe={class:"container flex flex-col w-full mx-auto"},Ae={class:"flex justify-center w-full mr-auto -mt-12 lg:-mt-20 lg:w-2/3"},Ee=h({__name:"BlogColumn",props:{title:{type:String,default:"Blog Articles & Tutorials"},description:{type:String,default:"Explore my latest articles and insights on web development, design, and technology. Learn from practical tutorials and stay updated with industry trends."},perPage:{type:Number,default:5},content:{type:Object},showMore:{type:Boolean,default:!0},showPagination:{type:Boolean,default:!0},baseUrl:{type:String,default:""},h1:{type:Boolean,default:!1},type:{type:String,default:"posts"}},setup(o){const c=o,{fetchCollection:t}=I(),s=v({items:[],page:1,perPage:c.perPage,totalItems:0,totalPages:0}),a=F(),p=async(d,m)=>{try{return await t(c.type,d,m,"","-created","")}catch(n){return console.error("Error fetching posts:",n),{items:[],page:1,perPage:m,totalItems:0,totalPages:0}}};return G(()=>a.query.page,async d=>{const m=d?parseInt(d,10):1;isNaN(m)||(s.value=await p(m,c.perPage))},{immediate:!0}),$(async()=>{const d=a.query.page?parseInt(a.query.page,10):1;s.value=await p(isNaN(d)?1:d,c.perPage)}),(d,m)=>{const n=N,y=Ve,C=ie,g=ae;return u(),k("div",qe,[o.title||o.description?(u(),f(n,{key:0,class:"pb-16",title:o.title,description:o.description,h1:o.h1},null,8,["title","description","h1"])):b("",!0),e(s)?.items?.length?(u(),f(y,{key:1,class:"flex w-full mt-6",content:e(s).items,baseUrl:o.baseUrl},null,8,["content","baseUrl"])):b("",!0),i("div",Ae,[i("div",null,[o.showMore?(u(),f(C,{key:0,to:"/blog/",class:"font-bold w-full transition-all hover:opacity-90 text-primary hover:underline pb-2"},{default:l(()=>[...m[0]||(m[0]=[_(" View All Posts ",-1)])]),_:1})):b("",!0)]),e(s)?.totalPages>1&&o.showPagination?(u(),f(g,{key:0,"total-pages":e(s)?.totalPages,"show-pagination":!0},null,8,["total-pages"])):b("",!0)])])}}}),tt=U(Ee,[["__scopeId","data-v-fc55dea5"]]);export{tt as _};
