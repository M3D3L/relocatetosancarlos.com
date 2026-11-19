import{i as e}from"./CKDPq_Kn.js";import{s as t}from"./CMmVH9bs.js";import{$n as n,D as r,E as i,On as a,Pt as o,Yt as s,Zn as c,_ as l,b as u,bt as d,ct as f,et as p,g as m,k as h,mt as g,o as _,qt as v,tr as y,v as b,vn as x,xt as S,y as C,z as w}from"./DVRkMeDb.js";import{en as T,qt as ee}from"./5fdh-mci.js";import{t as E}from"./D2C-HYLG.js";import{t as D}from"./BesOh1B8.js";import{t as O}from"./DGLVZK9b.js";import{t as te}from"./Bqoua7fM.js";import{n as ne}from"./CHhpvC6f.js";import{t as k}from"./DAO81l50.js";import{t as A}from"./C420VdhB.js";import{a as j,i as M,m as N,n as P,r as F,t as I}from"./8u_vZnLL.js";import{r as L,t as R}from"./Btzn73TX.js";import{t as z}from"./CeWl18XZ.js";import{t as B}from"./C0BjNQKf.js";import{t as V}from"./BDNMzG2s.js";import{t as H}from"./CUkZqU-W.js";var U=O(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),W=O(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),G=O(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),K=h({__name:`DialogTrigger`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`}},setup(t){let n=t,r=N(),{forwardRef:i,currentElement:o}=L();return r.contentId||=e(void 0,`reka-dialog-content`),f(()=>{r.triggerElement.value=o.value}),(e,o)=>(g(),b(a(R),p(n,{ref:a(i),type:t.as===`button`?`button`:void 0,"aria-haspopup":`dialog`,"aria-expanded":a(r).open.value||!1,"aria-controls":a(r).open.value?a(r).contentId:void 0,"data-state":a(r).open.value?`open`:`closed`,onClick:a(r).onOpenToggle}),{default:v(()=>[S(e.$slots,`default`)]),_:3},16,[`type`,`aria-expanded`,`aria-controls`,`data-state`,`onClick`]))}}),q={key:0,class:`relative overflow-hidden md:w-2/5 aspect-[16/9] md:aspect-auto`},J=[`src`,`alt`],Y={class:`flex flex-col justify-between w-full p-6 md:w-3/5 md:p-8`},X={class:`flex items-center gap-3 mb-3`},Z={class:`flex items-center gap-1.5 text-xs font-medium text-muted-foreground`},re={class:`mb-3 text-xl font-bold leading-tight transition-colors line-clamp-2 group-hover:text-primary`},ie=[`innerHTML`],ae={class:`flex items-center gap-2 mt-4 text-sm font-semibold transition-all text-primary group-hover:gap-3`},oe=Object.assign(h({__name:`BlogHorizontal`,props:{title:{},description:{},created:{},slug:{},collectionId:{},id:{},coverImage:{},index:{},baseUrl:{}},setup(e){let n=e,o=t(),s=m(()=>new Date(n.created).toLocaleDateString(`en-US`,{year:`numeric`,month:`short`,day:`numeric`})),c=m(()=>`${n.baseUrl||``}/blog${n.slug}`),d=m(()=>`${o.public.pocketbaseUrl}api/files/${n.collectionId}/${n.id}/${n.coverImage}`),f=m(()=>n?.description?.trim()||``);return(t,n)=>{let o=D;return g(),b(a(k),{class:`w-full overflow-hidden transition-all duration-300 border shadow-md group hover:shadow-xl hover:-translate-y-1 border-border/40 bg-card/50 backdrop-blur-sm`},{default:v(()=>[r(a(A),{class:`p-0`},{default:v(()=>[r(o,{to:a(c),class:`flex flex-col w-full h-full md:flex-row`},{default:v(()=>[e.coverImage?(g(),u(`div`,q,[a(d)?(g(),u(`img`,{key:0,src:a(d),alt:e.title,width:`600`,height:`338`,loading:`lazy`,class:`object-cover w-full h-full transition-transform duration-700 group-hover:scale-110`,decoding:`async`},null,8,J)):C(``,!0),n[0]||=l(`div`,{class:`absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-100`},null,-1)])):C(``,!0),l(`div`,Y,[l(`div`,null,[l(`div`,X,[l(`span`,Z,[r(a(te),{class:`w-3.5 h-3.5`}),i(` `+y(a(s)),1)])]),l(`h3`,re,y(e.title),1),l(`p`,{class:`text-sm leading-relaxed text-muted-foreground line-clamp-3`,innerHTML:a(f)},null,8,ie)]),l(`div`,ae,[n[1]||=l(`span`,null,`Read More`,-1),r(a(U),{class:`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1`})])])]),_:1},8,[`to`])]),_:1})]),_:1})}}}),{__name:`CardsBlogHorizontal`}),se=h({__name:`DialogTrigger`,props:{asChild:{type:Boolean},as:{}},setup(e){let t=e;return(e,r)=>(g(),b(a(K),n(w(t)),{default:v(()=>[S(e.$slots,`default`)]),_:3},16))}}),ce={class:`max-h-[60vh] overflow-y-auto px-1 mt-4`},le=[`innerHTML`],ue=h({__name:`Modal`,props:{htmlContent:{type:String,default:``},title:{type:String,default:``},description:{type:String,default:``}},setup(e,{expose:t}){let n=x(!1);return t({toggleModal:e=>{n.value=e===void 0?!n.value:e}}),(t,o)=>(g(),b(a(j),{open:n.value,"onUpdate:open":o[0]||=e=>n.value=e},{default:v(()=>[r(a(se),{"as-child":``},{default:v(()=>[S(t.$slots,`button`)]),_:3}),r(a(M),null,{default:v(()=>[r(a(P),null,{default:v(()=>[r(a(I),null,{default:v(()=>[i(y(e.title),1)]),_:1}),r(a(F),null,{default:v(()=>[i(y(e.description),1)]),_:1})]),_:1}),l(`div`,ce,[e.htmlContent?(g(),u(`div`,{key:0,innerHTML:e.htmlContent,class:`prose max-w-none`},null,8,le)):C(``,!0),S(t.$slots,`default`)])]),_:3})]),_:3},8,[`open`]))}}),de=`<section>
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
  </section>`,fe={class:`space-y-2`},pe={class:`space-y-2`},me={class:`flex items-center`},he=[`id`,`aria-labelledby`],ge={class:`ml-2 text-sm`},_e=[`id`,`for`],ve=[`id`],ye={class:`border-t border-white/10 pt-4`},be={class:`flex flex-col items-center space-y-2 text-center`},xe={class:`flex space-x-2`},Se={class:`p-2 rounded-lg bg-primary-600/10`},Ce={class:`p-2 rounded-lg bg-primary-600/10`},we=Object.assign(V(h({__name:`NewsletterHero`,props:{emailLabel:{},nameLabel:{},privacyLabel:{},privacyButton:{},buttonLabel:{}},setup(e){let t=o(),n=x({email:``,name:``,consent:!1}),d=x(!1),f=x(null),{createItem:p}=E(),m=async()=>{if(!n.value.consent)f.value={type:`error`,text:`Please agree to the privacy policy`};else{d.value=!0,f.value=null;try{await p(`newsletterSubs`,{email:n.value.email,name:n.value.name,consent_given:!0,subscribed_at:new Date().toISOString()}),f.value={type:`success`,text:`Thank you for subscribing!`},n.value={email:``,name:``,consent:!1}}catch(e){console.error(`Subscription process failed:`,e),f.value={type:`error`,text:`Subscription failed. You may already be subscribed or the server is unavailable.`}}finally{d.value=!1}}};return(o,p)=>(g(),u(`div`,null,[r(a(k),null,{default:v(()=>[r(a(A),{class:`p-6 space-y-6`},{default:v(()=>[l(`form`,{onSubmit:T(m,[`prevent`]),class:`space-y-4`},[l(`div`,fe,[r(a(z),{for:`${a(t)}-email`},{default:v(()=>[i(y(e.emailLabel),1)]),_:1},8,[`for`]),r(a(B),{id:`${a(t)}-email`,modelValue:a(n).email,"onUpdate:modelValue":p[0]||=e=>a(n).email=e,type:`email`,placeholder:``,required:``,class:`bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500`},null,8,[`id`,`modelValue`])]),l(`div`,pe,[r(a(z),{for:`${a(t)}-name`},{default:v(()=>[i(y(e.nameLabel),1)]),_:1},8,[`for`]),r(a(B),{id:`${a(t)}-name`,modelValue:a(n).name,"onUpdate:modelValue":p[1]||=e=>a(n).name=e,type:`text`,placeholder:``,class:`bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500`},null,8,[`id`,`modelValue`])]),l(`div`,me,[s(l(`input`,{id:`${a(t)}-consent`,"aria-labelledby":`${a(t)}-consent-label ${a(t)}-privacy`,"onUpdate:modelValue":p[2]||=e=>a(n).consent=e,type:`checkbox`,required:``,class:`w-4 h-4 rounded text-primary-600 bg-white/10 border-white/20 focus:ring-primary-500`},null,8,he),[[ee,a(n).consent]]),l(`div`,ge,[l(`label`,{id:`${a(t)}-consent-label`,for:`${a(t)}-consent`},y(e.privacyLabel),9,_e),r(ue,{title:`Privacy Policy`,description:`This Privacy Policy explains how information may be collected, used, and shared.`,htmlContent:a(de)},{button:v(()=>[l(`button`,{id:`${a(t)}-privacy`,type:`button`,class:`cursor-pointer text-primary hover:underline`},y(e.privacyButton),9,ve)]),_:1},8,[`htmlContent`])])]),r(a(ne),{size:`lg`,class:`w-full`,disabled:a(d),"aria-busy":a(d),type:`submit`},{default:v(()=>[i(y(e.buttonLabel),1)]),_:1},8,[`disabled`,`aria-busy`])],32),a(f)?(g(),u(`div`,{key:0,role:`status`,class:c([`p-4 text-sm rounded-lg`,{"bg-green-900/50 text-green-300":a(f).type===`success`,"bg-red-900/50 text-red-300":a(f).type===`error`}])},y(a(f).text),3)):C(``,!0),l(`div`,ye,[l(`div`,be,[l(`div`,xe,[l(`div`,Se,[r(a(G),{class:`w-5 h-5 text-primary-400`})]),l(`div`,Ce,[r(a(W),{class:`w-5 h-5 text-primary-400`})])])])])]),_:1})]),_:1})]))}}),[[`__scopeId`,`data-v-7152a317`]]),{__name:`SectionsNewsletterHero`}),Te={class:`flex flex-col w-full md:flex-row lg:flex-col`},Ee={class:`grid content-center w-full px-2 mb-8 md:w-1/2 lg:w-full md:pr-16 lg:pr-0 md:mb-4 md:px-0`},De={class:`mb-2 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl`},Oe={class:`mt-3 text-sm line-clamp-3`},Q=Object.assign(h({__name:`Subscribe`,props:{title:{type:String,default:`Join Newsletter`},description:{type:String,default:`Stay updated with the latest news, articles, and resources. Subscribe and never miss out!`},email:{type:String,default:`Email Address`},name:{type:String,default:`Name (Optional)`},privacy:{type:String,default:`I agree to receive emails and accept the`},privacyButton:{type:String,default:`privacy policy`},button:{type:String,default:`Subscribe Now`}},setup(e){return(t,n)=>{let i=we;return g(),u(`div`,Te,[l(`div`,Ee,[l(`h2`,De,y(e.title),1),l(`p`,Oe,y(e.description),1)]),r(i,{"email-label":e.email,"name-label":e.name,"privacy-label":e.privacy,"privacy-button":e.privacyButton,"button-label":e.button,class:`w-full md:w-1/2 md:pl-2 lg:pl-0 lg:w-full`},null,8,[`email-label`,`name-label`,`privacy-label`,`privacy-button`,`button-label`])])}}}),{__name:`SectionsSubscribe`}),ke={class:`flex flex-col w-full min-h-screen gap-8 pb-16 lg:pb-24 lg:flex-row`,id:`main-content`},Ae={id:`right-rail`,"aria-labelledby":`sidebar-heading`,class:`w-full lg:w-1/3`},$={class:`lg:z-10 lg:sticky top-24`},je=Object.assign(h({__name:`FixedRail`,setup(e){let t={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}};return(e,n)=>(g(),u(`div`,ke,[r(a(H).section,{variants:t,"aria-labelledby":`main-content-heading`,class:`w-full gap-4 lg:w-2/3`},{default:v(()=>[n[0]||=l(`h2`,{id:`main-content-heading`,class:`sr-only`},`Main content`,-1),S(e.$slots,`main`)]),_:3}),l(`aside`,Ae,[l(`div`,$,[n[1]||=l(`h2`,{id:`sidebar-heading`,class:`sr-only`},`Additional content`,-1),S(e.$slots,`right`)])])]))}}),{__name:`ContainersFixedRail`}),Me={class:`grid w-full gap-4`},Ne={class:`z-10 sticky-position top-16 md:grid hidden`},Pe=Object.assign(h({__name:`Blog`,props:{content:{type:Array,required:!0},baseUrl:{type:String},type:{type:String,default:`posts`},newsLetterModule:{type:Object,default:()=>({})}},setup(e){let t=e,{fetchCollection:i}=E(),a=x([]),o=async()=>{try{return await i(t.type,1,5,``,`-created`,``)}catch(e){return console.error(`Error fetching posts:`,e),[]}},s=async()=>{a.value=await o()};return f(async()=>{await s()}),(t,i)=>{let a=oe,o=Q,s=je;return g(),b(s,null,{main:v(()=>[l(`div`,Me,[(g(!0),u(_,null,d(e.content,(t,n)=>(g(),b(a,{key:t.id,title:t.title,description:t.description,created:t.created,slug:t.slug,"collection-id":t.collectionId,id:t.id,"cover-image":t.cover_image,index:n,"base-url":e.baseUrl},null,8,[`title`,`description`,`created`,`slug`,`collection-id`,`id`,`cover-image`,`index`,`base-url`]))),128))])]),right:v(()=>[l(`div`,Ne,[r(o,n(w(e.newsLetterModule)),null,16)])]),_:1})}}}),{__name:`SectionsBlog`});export{Q as n,Pe as t};