import{i as e}from"./CKDPq_Kn.js";import{s as t}from"./CMmVH9bs.js";import{$n as n,D as r,E as i,On as a,Yt as o,Zn as s,_ as c,b as l,bt as u,ct as d,et as f,g as p,k as m,mt as h,o as ee,qt as g,tr as _,v,vn as y,xt as b,y as x,z as S}from"./DVRkMeDb.js";import{en as C,qt as te}from"./5fdh-mci.js";import{t as w}from"./Bl00u8Kl.js";import{t as T}from"./BesOh1B8.js";import{t as E}from"./DGLVZK9b.js";import{t as D}from"./Bqoua7fM.js";import"./CK4Qu2SD.js";import{p as O,t as ne}from"./D3q_hCHE.js";import{t as k}from"./DQiGhBXH.js";import{a as A,i as j,m as M,n as N,r as P,t as F}from"./C7aRWrMj.js";import{r as I,t as L}from"./Btzn73TX.js";import{t as R}from"./e2P4gI7R.js";import{t as z}from"./Cucw3FmO.js";import{t as B}from"./BDNMzG2s.js";import{t as V}from"./CUkZqU-W.js";var H=E(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),U=E(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),W=E(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),G=m({__name:`DialogTrigger`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`}},setup(t){let n=t,r=M(),{forwardRef:i,currentElement:o}=I();return r.contentId||=e(void 0,`reka-dialog-content`),d(()=>{r.triggerElement.value=o.value}),(e,o)=>(h(),v(a(L),f(n,{ref:a(i),type:t.as===`button`?`button`:void 0,"aria-haspopup":`dialog`,"aria-expanded":a(r).open.value||!1,"aria-controls":a(r).open.value?a(r).contentId:void 0,"data-state":a(r).open.value?`open`:`closed`,onClick:a(r).onOpenToggle}),{default:g(()=>[b(e.$slots,`default`)]),_:3},16,[`type`,`aria-expanded`,`aria-controls`,`data-state`,`onClick`]))}}),K={key:0,class:`relative overflow-hidden md:w-2/5 aspect-[16/9] md:aspect-auto`},q=[`src`,`alt`],J={class:`flex flex-col justify-between w-full p-6 md:w-3/5 md:p-8`},Y={class:`flex items-center gap-3 mb-3`},X={class:`flex items-center gap-1.5 text-xs font-medium text-muted-foreground`},Z={class:`mb-3 text-xl font-bold leading-tight transition-colors line-clamp-2 group-hover:text-primary`},re=[`innerHTML`],ie={class:`flex items-center gap-2 mt-4 text-sm font-semibold transition-all text-primary group-hover:gap-3`},ae=Object.assign(m({__name:`BlogHorizontal`,props:{title:{},description:{},created:{},slug:{},collectionId:{},id:{},coverImage:{},index:{},baseUrl:{}},setup(e){let n=e,o=t(),s=p(()=>new Date(n.created).toLocaleDateString(`en-US`,{year:`numeric`,month:`short`,day:`numeric`})),u=p(()=>`${n.baseUrl||``}/blog${n.slug}`),d=p(()=>`${o.public.pocketbaseUrl}api/files/${n.collectionId}/${n.id}/${n.coverImage}`),f=p(()=>n?.description?.trim()||``);return(t,n)=>{let o=T;return h(),v(a(O),{class:`w-full overflow-hidden transition-all duration-300 border shadow-md group hover:shadow-xl hover:-translate-y-1 border-border/40 bg-card/50 backdrop-blur-sm`},{default:g(()=>[r(a(k),{class:`p-0`},{default:g(()=>[r(o,{to:a(u),class:`flex flex-col w-full h-full md:flex-row`},{default:g(()=>[e.coverImage?(h(),l(`div`,K,[a(d)?(h(),l(`img`,{key:0,src:a(d),alt:e.title,width:`600`,height:`338`,loading:`lazy`,class:`object-cover w-full h-full transition-transform duration-700 group-hover:scale-110`,decoding:`async`},null,8,q)):x(``,!0),n[0]||=c(`div`,{class:`absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-100`},null,-1)])):x(``,!0),c(`div`,J,[c(`div`,null,[c(`div`,Y,[c(`span`,X,[r(a(D),{class:`w-3.5 h-3.5`}),i(` `+_(a(s)),1)])]),c(`h3`,Z,_(e.title),1),c(`p`,{class:`text-sm leading-relaxed text-muted-foreground line-clamp-3`,innerHTML:a(f)},null,8,re)]),c(`div`,ie,[n[1]||=c(`span`,null,`Read More`,-1),r(a(H),{class:`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1`})])])]),_:1},8,[`to`])]),_:1})]),_:1})}}}),{__name:`CardsBlogHorizontal`}),oe=m({__name:`DialogTrigger`,props:{asChild:{type:Boolean},as:{}},setup(e){let t=e;return(e,r)=>(h(),v(a(G),n(S(t)),{default:g(()=>[b(e.$slots,`default`)]),_:3},16))}}),se={class:`max-h-[60vh] overflow-y-auto px-1 mt-4`},ce=[`innerHTML`],le=m({__name:`Modal`,props:{htmlContent:{type:String,default:``},title:{type:String,default:``},description:{type:String,default:``}},setup(e,{expose:t}){let n=y(!1);return t({toggleModal:e=>{n.value=e===void 0?!n.value:e}}),(t,o)=>(h(),v(a(A),{open:n.value,"onUpdate:open":o[0]||=e=>n.value=e},{default:g(()=>[r(a(oe),{"as-child":``},{default:g(()=>[b(t.$slots,`button`)]),_:3}),r(a(j),null,{default:g(()=>[r(a(N),null,{default:g(()=>[r(a(F),null,{default:g(()=>[i(_(e.title),1)]),_:1}),r(a(P),null,{default:g(()=>[i(_(e.description),1)]),_:1})]),_:1}),c(`div`,se,[e.htmlContent?(h(),l(`div`,{key:0,innerHTML:e.htmlContent,class:`prose max-w-none`},null,8,ce)):x(``,!0),b(t.$slots,`default`)])]),_:3})]),_:3},8,[`open`]))}}),ue=`<section>
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
  </section>`,de={class:`space-y-2`},fe={class:`space-y-2`},pe={class:`flex items-center`},me={for:`newsletter-consent`,class:`ml-2 text-sm`},he={class:`cursor-pointer text-primary hover:underline`},ge={class:`border-t border-white/10 pt-4`},_e={class:`flex flex-col items-center space-y-2 text-center`},ve={class:`flex space-x-2`},ye={class:`p-2 rounded-lg bg-primary-600/10`},be={class:`p-2 rounded-lg bg-primary-600/10`},xe=Object.assign(B(m({__name:`NewsletterHero`,props:{emailLabel:{},nameLabel:{},privacyLabel:{},privacyButton:{},buttonLabel:{}},setup(e){let t={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}},n=y({email:``,name:``,consent:!1}),u=y(!1),d=y(null),{createItem:f}=w(),p=async()=>{if(!n.value.consent)d.value={type:`error`,text:`Please agree to the privacy policy`};else{u.value=!0,d.value=null;try{await f(`newsletterSubs`,{email:n.value.email,name:n.value.name,consent_given:!0,subscribed_at:new Date().toISOString()}),d.value={type:`success`,text:`Thank you for subscribing!`},n.value={email:``,name:``,consent:!1}}catch(e){console.error(`Subscription process failed:`,e),d.value={type:`error`,text:`Subscription failed. You may already be subscribed or the server is unavailable.`}}finally{u.value=!1}}};return(f,m)=>(h(),v(a(V).div,{variants:t,initial:`hidden`,animate:`visible`},{default:g(()=>[r(a(O),null,{default:g(()=>[r(a(k),{class:`p-6 space-y-6`},{default:g(()=>[c(`form`,{onSubmit:C(p,[`prevent`]),class:`space-y-4`},[c(`div`,de,[r(a(R),{for:`newsletter-email`},{default:g(()=>[i(_(e.emailLabel),1)]),_:1}),r(a(z),{id:`newsletter-email`,modelValue:a(n).email,"onUpdate:modelValue":m[0]||=e=>a(n).email=e,type:`email`,placeholder:``,required:``,class:`bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500`},null,8,[`modelValue`])]),c(`div`,fe,[r(a(R),{for:`newsletter-name`},{default:g(()=>[i(_(e.nameLabel),1)]),_:1}),r(a(z),{id:`newsletter-name`,modelValue:a(n).name,"onUpdate:modelValue":m[1]||=e=>a(n).name=e,type:`text`,placeholder:``,class:`bg-white/10 border-white/20 focus:ring-2 focus:ring-primary-500`},null,8,[`modelValue`])]),c(`div`,pe,[o(c(`input`,{id:`newsletter-consent`,"onUpdate:modelValue":m[2]||=e=>a(n).consent=e,type:`checkbox`,required:``,class:`w-4 h-4 rounded text-primary-600 bg-white/10 border-white/20 focus:ring-primary-500`},null,512),[[te,a(n).consent]]),c(`label`,me,[i(_(e.privacyLabel)+` `,1),r(le,{title:`Privacy Policy`,description:`This Privacy Policy explains how information may be collected, used, and shared.`,htmlContent:a(ue)},{button:g(()=>[c(`span`,he,_(e.privacyButton),1)]),_:1},8,[`htmlContent`])])]),r(a(ne),{size:`lg`,class:`w-full`,disabled:a(u),type:`submit`},{default:g(()=>[i(_(a(u)?``:e.buttonLabel),1)]),_:1},8,[`disabled`])],32),a(d)?(h(),l(`div`,{key:0,class:s([`p-4 text-sm rounded-lg`,{"bg-green-900/50 text-green-300":a(d).type===`success`,"bg-red-900/50 text-red-300":a(d).type===`error`}])},_(a(d).text),3)):x(``,!0),c(`div`,ge,[c(`div`,_e,[c(`div`,ve,[c(`div`,ye,[r(a(W),{class:`w-5 h-5 text-primary-400`})]),c(`div`,be,[r(a(U),{class:`w-5 h-5 text-primary-400`})])])])])]),_:1})]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-2c06c4fa`]]),{__name:`SectionsNewsletterHero`}),Q={class:`flex flex-col w-full md:flex-row lg:flex-col`},Se={class:`grid content-center w-full px-2 mb-8 md:w-1/2 lg:w-full md:pr-16 lg:pr-0 md:mb-4 md:px-0`},Ce={class:`mb-2 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl`},we={class:`mt-3 text-sm line-clamp-3`},$=Object.assign(m({__name:`Subscribe`,props:{title:{type:String,default:`Join Newsletter`},description:{type:String,default:`Stay updated with the latest news, articles, and resources. Subscribe and never miss out!`},email:{type:String,default:`Email Address`},name:{type:String,default:`Name (Optional)`},privacy:{type:String,default:`I agree to receive emails and accept the`},privacyButton:{type:String,default:`privacy policy`},button:{type:String,default:`Subscribe Now`}},setup(e){return(t,n)=>{let i=xe;return h(),l(`div`,Q,[c(`div`,Se,[c(`h2`,Ce,_(e.title),1),c(`p`,we,_(e.description),1)]),r(i,{"email-label":e.email,"name-label":e.name,"privacy-label":e.privacy,"privacy-button":e.privacyButton,"button-label":e.button,class:`w-full md:w-1/2 md:pl-2 lg:pl-0 lg:w-full`},null,8,[`email-label`,`name-label`,`privacy-label`,`privacy-button`,`button-label`])])}}}),{__name:`SectionsSubscribe`}),Te={class:`flex flex-col w-full min-h-screen gap-8 pb-16 lg:pb-24 lg:flex-row`,id:`main-content`},Ee={id:`right-rail`,"aria-labelledby":`sidebar-heading`,class:`w-full lg:w-1/3`},De={class:`lg:z-10 lg:sticky top-24`},Oe=Object.assign(m({__name:`FixedRail`,setup(e){let t={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}};return(e,n)=>(h(),l(`div`,Te,[r(a(V).section,{variants:t,"aria-labelledby":`main-content-heading`,class:`w-full gap-4 lg:w-2/3`},{default:g(()=>[n[0]||=c(`h2`,{id:`main-content-heading`,class:`sr-only`},`Main content`,-1),b(e.$slots,`main`)]),_:3}),c(`aside`,Ee,[c(`div`,De,[n[1]||=c(`h2`,{id:`sidebar-heading`,class:`sr-only`},`Additional content`,-1),b(e.$slots,`right`)])])]))}}),{__name:`ContainersFixedRail`}),ke={class:`grid w-full gap-4`},Ae={class:`z-10 sticky-position top-16 md:grid hidden`},je=Object.assign(m({__name:`Blog`,props:{content:{type:Array,required:!0},baseUrl:{type:String},type:{type:String,default:`posts`},newsLetterModule:{type:Object,default:()=>({})}},setup(e){let t=e,{fetchCollection:i}=w(),a=y([]),o=async()=>{try{return await i(t.type,1,5,``,`-created`,``)}catch(e){return console.error(`Error fetching posts:`,e),[]}},s=async()=>{a.value=await o()};return d(async()=>{await s()}),(t,i)=>{let a=ae,o=$,s=Oe;return h(),v(s,null,{main:g(()=>[c(`div`,ke,[(h(!0),l(ee,null,u(e.content,(t,n)=>(h(),v(a,{key:t.id,title:t.title,description:t.description,created:t.created,slug:t.slug,"collection-id":t.collectionId,id:t.id,"cover-image":t.cover_image,index:n,"base-url":e.baseUrl},null,8,[`title`,`description`,`created`,`slug`,`collection-id`,`id`,`cover-image`,`index`,`base-url`]))),128))])]),right:g(()=>[c(`div`,Ae,[r(o,n(S(e.newsLetterModule)),null,16)])]),_:1})}}}),{__name:`SectionsBlog`});export{$ as n,je as t};