import{g as i,c as g,i as s,S as O,t as d,d as xe,b as Ce,a as $,e as le,f as se,r as ie,h as v,o as Te}from"./web.3InOOYlp.js";import{I as ge,B as f,a as Ae,S as ve,b as w}from"./Box.B5VlP7W2.js";import{e as he,a as B,o as h,s as o,b as p,n as S,u as Se,l as V,d as _e,f as ke,c as Re}from"./index.BHkYE3Iy.js";var De=d("<h2>Kontaktdaten"),ae=d("<div style=margin-block:.5rem;>"),de=d("<br>");function Ee(e){let n;return[i(De),g(ge,{label:"Name",name:"name",get value(){return e.save.name},onValueUpdate:t=>e.updateSave("name",t)}),g(O,{get when(){return e.save.name.trim().length===0},get children(){var t=i(ae);return s(t,g(f,{type:"danger",children:"Dies ist ein Pflichtfeld."})),t}}),i(de),g(Ae,{label:"E-Mail",name:"email",type:"email",get value(){return e.save.email},onValueUpdate:t=>e.updateSave("email",t),ref(t){var a=n;typeof a=="function"?a(t):n=t}}),g(O,{get when(){return e.save.email.trim().length===0},get children(){var t=i(ae);return s(t,g(f,{type:"danger",children:"Dies ist ein Pflichtfeld."})),t}}),g(O,{get when(){return e.save.email.length>0&&n.validity.typeMismatch},get children(){var t=i(ae);return s(t,g(f,{type:"danger",children:"Die Eingabe scheint keine gültige E-Mail-Adresse zu sein."})),t}}),i(de),g(ge,{label:"Handynummer",name:"tel",type:"tel",get value(){return e.save.handynummer},required:!1,onValueUpdate:t=>e.updateSave("handynummer",t)})]}const be=he(["SATURDAY","SUNDAY"]);B(h({uuid:o(),description:p(o()),title:p(o()),system:o(),master:h({first:o(),last:p(o())}),playerCount:h({min:S(),max:S()}),slot:h({day:be,start:S(),end:S()})}));const Ne=he(["INITIALIZED","IN_PROGRESS","CONFIRMED","CONFIRMED_W_INVALID_CHANGES","CONFIRMED_W_VALID_CHANGES","RECONFIRMED"]),Ie=Se([h({id:S(),game:o(),self:V(!0),spielerName:_e()}),h({id:S(),game:o(),self:V(!1),spielerName:o()})]),we=h({registrationId:S(),progress:Ne,name:o(),email:o(),handynummer:o(),wantsEmailUpdates:ke(),games:B(Ie),lastSaved:o()});async function pe(e){const n=new URL("https://elysium.gildedernacht.ch/rst24/load");n.searchParams.append("secret",e);const t=await fetch(n);if(!t.ok)return{kind:"FAILED"};const a=await t.json(),l=we.safeParse(a);return l.success?{kind:"SUCCESS",save:l.data}:{kind:"FAILED"}}const Le=h({uuid:o(),title:p(o()),system:o(),description:p(o()),playerCount:h({min:S(),max:S()}),master:h({first:o(),last:p(o())}),slot:h({day:be,start:S(),end:S()})}),Ue=Se([h({id:S(),game:o(),self:V(!0),spielerName:_e()}),h({id:S(),game:o(),self:V(!1),spielerName:o()})]);async function Fe(){const e=new URL("https://elysium.gildedernacht.ch/rst24/program"),n=new URL("https://elysium.gildedernacht.ch/rst24/reserved"),[t,a]=await Promise.all([fetch(e),fetch(n)]);if(!t.ok)return{kind:"FAILED"};if(!a.ok)return{kind:"FAILED"};const l=await t.json(),r=await a.json(),u=B(Le).safeParse(l);if(!u.success)return{kind:"FAILED"};const c=B(Ue).safeParse(r);return c.success?{kind:"SUCCESS",program:{gameList:u.data,reservedList:c.data}}:{kind:"FAILED"}}function fe(e,n){const a=n.gameList.filter(r=>r.slot.day===e).map(r=>{const u=r.uuid,c=n.reservedList.filter(m=>m.game===u);return{...r,reservedIds:c.map(m=>m.id)}});let l={};for(const r of a){const{start:u}=r.slot,c=l[u]??[];c.push(r),l[u]=c}return Object.entries(l)}var Pe=d('<li class="event-entry gray"><h1 class=event-title></h1><div class=event-details><div class=event-tags><strong>Zeit:</strong> <!$><!/> - <!$><!/> Uhr</div><div class=event-tags><strong>Spielleitung:</strong> <!$><!/> <!$><!/></div></div><!$><!/><ul role=list class=event-links><li><a class=event-link href=javascript:;>+ Platz reservieren'),Me=d('<div class="event-description content"><p><strong>Beschreibung:</strong><br><!$><!/>'),Ge=d("<div>"),He=d("<br>"),Oe=d("<div class=event-filters><h2>Filter</h2><ul role=list><li><a href=javascript:;>Alle</a></li><!$><!/>"),Be=d("<li><a href=javascript:;><!$><!/> Uhr"),Ve=d("<h3 style=margin-block:1rem;>Start <!$><!/> Uhr"),Ye=d("<ul class=event-list role=list>");function je(e){return(()=>{var n=i(Pe),t=n.firstChild,a=t.nextSibling,l=a.firstChild,r=l.firstChild,u=r.nextSibling,c=u.nextSibling,[m,_]=$(c.nextSibling),y=m.nextSibling,x=y.nextSibling,[C,T]=$(x.nextSibling);C.nextSibling;var b=l.nextSibling,R=b.firstChild,A=R.nextSibling,k=A.nextSibling,[D,Y]=$(k.nextSibling),j=D.nextSibling,W=j.nextSibling,[K,z]=$(W.nextSibling),Z=a.nextSibling,[U,J]=$(Z.nextSibling),F=U.nextSibling,q=F.firstChild,Q=q.firstChild;return s(t,()=>e.entry.title===null?e.entry.system:`${e.entry.title} (${e.entry.system})`),s(l,()=>e.entry.slot.start,m,_),s(l,()=>e.entry.slot.end,C,T),s(b,()=>e.entry.master.first,D,Y),s(b,()=>e.entry.master.last,K,z),s(n,(()=>{var P=v(()=>e.entry.description!==null&&e.entry.description.trim().length>0);return()=>P()?(()=>{var M=i(Me),G=M.firstChild,X=G.firstChild,ee=X.nextSibling,te=ee.nextSibling,[E,N]=$(te.nextSibling);return s(G,()=>e.entry.description,E,N),M})():i(Ge)})(),U,J),Q.$$click=()=>e.addTentativeReservation({gameUuid:e.entry.uuid,friendsName:null}),ie(),n})()}const H="ALL";function ye(e){const[n,t]=Ce(H);return[i(He),(()=>{var a=i(Oe),l=a.firstChild,r=l.nextSibling,u=r.firstChild,c=u.firstChild,m=u.nextSibling,[_,y]=$(m.nextSibling);return c.$$click=()=>t(H),s(r,()=>e.programByHour.map(([x,C])=>(()=>{var T=i(Be),b=T.firstChild,R=b.firstChild,[A,k]=$(R.nextSibling);return A.nextSibling,b.$$click=()=>t(x),s(b,x,A,k),le(()=>se(b,n()===x?"active":"")),ie(),T})()),_,y),le(()=>se(c,n()===H?"active":"")),ie(),a})(),v(()=>e.programByHour.filter(([a])=>a===n()||H===n()).map(([a,l])=>[(()=>{var r=i(Ve),u=r.firstChild,c=u.nextSibling,[m,_]=$(c.nextSibling);return m.nextSibling,s(r,a,m,_),r})(),(()=>{var r=i(Ye);return s(r,()=>l.map(u=>g(je,{entry:u,get addTentativeReservation(){return e.addTentativeReservation}}))),r})()]))]}xe(["click"]);var ue=d("<h2>Programm Samstag");function We(e){if(e.program===null)return[i(ue),g(f,{children:"Programm wird geladen ..."})];const n=fe("SATURDAY",e.program);return[i(ue),g(ye,{programByHour:n,get addTentativeReservation(){return e.addTentativeReservation}})]}var ce=d("<h2>Programm Sonntag");function Ke(e){if(e.program===null)return[i(ce),g(f,{children:"Programm wird geladen ..."})];const n=fe("SUNDAY",e.program);return[i(ce),g(ye,{programByHour:n,get addTentativeReservation(){return e.addTentativeReservation}})]}var ze=d("<p><strong><!$><!/> </strong>| <!$><!/>, <!$><!/> bis <!$><!/> Uhr"),Ze=d("<p>Reservation für<strong>"),Je=d("<div class=content><h2>Zusammenfassung</h2><h3>Kontaktdaten</h3><ul><li><strong>Name:</strong> <!$><!/></li><li><strong>E-Mail:</strong> <!$><!/></li><li><strong>Handynummer:</strong> <!$><!/></li></ul><br><h3>Deine Reservationen</h3><!$><!/><!$><!/><br><h3>Updates</h3><p><em>"),qe=d("<p><em>Noch keine Reservationen getätigt."),Qe=d("<h4>Unbestätigt"),Xe=d("<p>Bitte speichere deinen aktuellen Stand der Anmeldung, damit wir die folgenden Reservationen bestätigen können."),et=d("<h5>Samstag, 24. August 2024"),oe=d("<ul role=list style=display:grid;gap:.5rem;>"),me=d("<li>"),tt=d("<h5>Sonntag, 25. August 2024"),nt=d("<span style=color:var(--clr-success-10);>Ja, ich möchte gerne Updates erhalten, wenn neue Spielrunden aufgeschalten werden."),at=d("<span style=color:var(--clr-danger-10);>Nein, ich möchte keine E-Mails über neue Spielrunden erhalten.");function $e(e){const n=e.program?.gameList.find(t=>t.uuid===e.reservation.gameUuid);return n===void 0||e.program===null?g(f,{type:"danger",children:"Leider ist ein Fehler aufgetreten. Bitte lade die Seite neu oder melde dich bei uns per Kontaktformluar."}):g(f,{get type(){return e.type??"gray"},get children(){return[(()=>{var t=i(ze),a=t.firstChild,l=a.firstChild,[r,u]=$(l.nextSibling);r.nextSibling;var c=a.nextSibling,m=c.nextSibling,[_,y]=$(m.nextSibling),x=_.nextSibling,C=x.nextSibling,[T,b]=$(C.nextSibling),R=T.nextSibling,A=R.nextSibling,[k,D]=$(A.nextSibling);return k.nextSibling,s(a,()=>n.title===null?n.system:`${n.title} (${n.system})`,r,u),s(t,()=>n.slot.day==="SATURDAY"?"Samstag":"Sonntag",_,y),s(t,()=>n.slot.start,T,b),s(t,()=>n.slot.end,k,D),t})(),(()=>{var t=i(Ze),a=t.firstChild,l=a.nextSibling;return s(l,()=>e.reservation.friendsName===null?e.protagonistName:e.reservation.friendsName),t})()]}})}function rt(e,n){const t=[],a=[];for(const l of e){const r=n?.gameList.find(u=>u.uuid===l.gameUuid);r?.slot.day==="SATURDAY"&&t.push(l),r?.slot.day==="SUNDAY"&&a.push(l)}return{SATURDAY:t,SUNDAY:a}}function it(e){const n=rt(e.tentativeReservations,e.program);return(()=>{var t=i(Je),a=t.firstChild,l=a.nextSibling,r=l.nextSibling,u=r.firstChild,c=u.firstChild,m=c.nextSibling,_=m.nextSibling,[y,x]=$(_.nextSibling),C=u.nextSibling,T=C.firstChild,b=T.nextSibling,R=b.nextSibling,[A,k]=$(R.nextSibling),D=C.nextSibling,Y=D.firstChild,j=Y.nextSibling,W=j.nextSibling,[K,z]=$(W.nextSibling),Z=r.nextSibling,U=Z.nextSibling,J=U.nextSibling,[F,q]=$(J.nextSibling),Q=F.nextSibling,[P,M]=$(Q.nextSibling),G=P.nextSibling,X=G.nextSibling,ee=X.nextSibling,te=ee.firstChild;return s(u,()=>e.save.name,y,x),s(C,()=>e.save.email,A,k),s(D,()=>e.save.email,K,z),s(t,(()=>{var E=v(()=>e.tentativeReservations.length===0);return()=>E()?i(qe):null})(),F,q),s(t,(()=>{var E=v(()=>e.tentativeReservations.length>0);return()=>E()?[i(Qe),i(Xe),v(()=>v(()=>n.SATURDAY.length>0)()?[i(et),(()=>{var N=i(oe);return s(N,()=>n.SATURDAY.map(ne=>(()=>{var L=i(me);return s(L,g($e,{reservation:ne,get program(){return e.program},get protagonistName(){return e.save.name},type:"special"})),L})())),N})()]:null),v(()=>v(()=>n.SUNDAY.length>0)()?[i(tt),(()=>{var N=i(oe);return s(N,()=>n.SUNDAY.map(ne=>(()=>{var L=i(me);return s(L,g($e,{reservation:ne,get program(){return e.program},get protagonistName(){return e.save.name},type:"special"})),L})())),N})()]:null)]:null})(),P,M),s(te,(()=>{var E=v(()=>!!e.save.wantsEmailUpdates);return()=>E()?i(nt):i(at)})()),t})()}var lt=d("<ul role=list style=display:flex;flex-wrap:wrap;column-gap:1rem;row-gap:.5rem;><li></li><li></li><li></li><li>"),st=d("<div style=display:flex;justify-content:space-between;><div></div><div>"),gt=d("<div style=display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;><div>Zuletzt gespeichert am <!$><!/></div><!$><!/>"),dt=d('<div style="padding-block:2rem 1rem;position:sticky;bottom:0;background-image:linear-gradient(transparent, var(--clr-3) 25%);">'),ut=d("<div style=padding-block:1rem;>");function ct(e){return(()=>{var n=i(lt),t=n.firstChild,a=t.nextSibling,l=a.nextSibling,r=l.nextSibling;return s(t,g(w,{label:"Kontaktdaten",get kind(){return e.activeTab==="Contact"?"special":"gray"},onClick:()=>e.changeTab("Contact")})),s(a,g(w,{label:"Programm Samstag",get kind(){return e.activeTab==="Saturday"?"special":"gray"},onClick:()=>e.changeTab("Saturday")})),s(l,g(w,{label:"Program Sonntag",get kind(){return e.activeTab==="Sunday"?"special":"gray"},onClick:()=>e.changeTab("Sunday")})),s(r,g(w,{label:"Zusammenfassung",get kind(){return e.activeTab==="Summary"?"special":"gray"},onClick:()=>e.changeTab("Summary")})),n})()}function ot(e){function n(){switch(e.activeTab){case"Saturday":e.changeTab("Contact");break;case"Sunday":e.changeTab("Saturday");break;case"Summary":e.changeTab("Sunday");break}}function t(){switch(e.activeTab){case"Contact":e.changeTab("Saturday");break;case"Saturday":e.changeTab("Sunday");break;case"Sunday":e.changeTab("Summary");break}}return(()=>{var a=i(st),l=a.firstChild,r=l.nextSibling;return s(l,(()=>{var u=v(()=>e.activeTab!=="Contact");return()=>u()?g(w,{label:"<< Vorheriger Schritt",onClick:n}):null})()),s(r,(()=>{var u=v(()=>e.activeTab!=="Summary");return()=>u()?g(w,{label:"Nächster Schritt >>",onClick:t}):null})()),a})()}function mt(e){const n=new Intl.DateTimeFormat("de-CH",{timeStyle:"short",dateStyle:"long"});return g(ve,{get children(){var t=i(gt),a=t.firstChild,l=a.firstChild,r=l.nextSibling,[u,c]=$(r.nextSibling),m=a.nextSibling,[_,y]=$(m.nextSibling);return s(a,()=>n.format(new Date(e.lastSaved)),u,c),s(t,g(w,{get disabled(){return e.state!=="HAS_CHANGES"},get label(){return e.state==="NO_CHANGES"?"Gespeichert.":e.state==="SAVING"?"Wird gespeichert...":"Speichern"},get onClick(){return e.saveCurrentState}}),_,y),t}})}function $t(e){return[g(ct,{get activeTab(){return e.activeTab},get changeTab(){return e.changeTab}}),(()=>{var n=i(ut);return s(n,g(ve,{get children(){return[v(()=>v(()=>e.activeTab==="Contact")()?g(Ee,{get save(){return e.save},get updateSave(){return e.updateSave}}):v(()=>e.activeTab==="Saturday")()?g(We,{get program(){return e.program},get addTentativeReservation(){return e.addTentativeReservation}}):v(()=>e.activeTab==="Sunday")()?g(Ke,{get program(){return e.program},get addTentativeReservation(){return e.addTentativeReservation}}):g(it,{get save(){return e.save},get tentativeReservations(){return e.tentativeReservations},get program(){return e.program}})),(()=>{var t=i(dt);return s(t,g(mt,{get lastSaved(){return e.lastSaved},get saveCurrentState(){return e.saveCurrentState},get state(){return e.saveState}})),t})()]}})),n})(),g(ot,{get activeTab(){return e.activeTab},get changeTab(){return e.changeTab}})]}var vt=d("<p>Leider ist ein unerwarteter Fehler passiert. Versuche deine Anmeldung erneut zu laden. Wiederholt sich dieser Fehler, bitte kontaktiere uns sobald als möglich über das <a href=/kontakt>Kontaktformular</a>, da dies nicht passieren sollte."),ht=d("<p>Wir konnten leider keine Anmeldung finden. Wenn du bereits eine Anmeldung begonnen hast, solltest du den korrekten Link per E-Mail erhalten haben.<br><br> Falls du noch keine Anmeldung begonnen hast, kannst du <a href=/anmeldung>hier</a> deine persönliche Anmeldung beginnen. <br><br>Für generelle Fragen oder Probleme, schreibe uns doch bitte über unser <a href=/kontatk>Kontaktformular</a>.");function I(){return{state:"ERROR",message:i(vt)}}function St(){const[e,n]=Re({state:"LOADING"});return{store:e,actions:{changeTab(t){n(a=>a.state!=="IDLE"&&a.state!=="SAVING"?I():{...a,activeTab:t})},updateSave(t,a){n(l=>l.state!=="IDLE"&&l.state!=="SAVING"?I():{...l,currentSave:{...l.currentSave,[t]:a},hasChanged:!0})},async saveCurrentState(){if(e.state!=="IDLE"){n(I());return}n("state","SAVING");const t=new URL("https://elysium.gildedernacht.ch/rst24/save"),a={...e.currentSave};(await fetch(t,{method:"post",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}})).ok?n(r=>{if(r.state!=="SAVING")return I();const u=new Date().toISOString();return{...r,state:"IDLE",hasChanged:!1,lastSaved:u}}):n(I())},onFailed(){n({state:"ERROR",message:i(ht)})},async initMeineAnmeldung(){const t=new URL(location.href),a=t.searchParams.get("secret"),l=t.searchParams.get("showCreateMessage")==="true";if(a===null){this.onFailed();return}const r=await pe(a),u=Fe();if(r.kind==="FAILED"){this.onFailed();return}n({state:"IDLE",secret:a,showCreateMessage:l,lastSave:{...r.save},currentSave:r.save,activeTab:"Contact",lastSaved:r.save.lastSaved,hasChanged:!1,program:null,tentativeReservations:[]}),u.then(c=>{if(c.kind==="FAILED"){this.onFailed();return}n(m=>m.state!=="IDLE"&&m.state!=="SAVING"?I():{...m,program:c.program})}),t.searchParams.delete("showCreateMessage"),history.replaceState({},document.title,t)},addTentativeReservation(t){n(a=>a.state!=="IDLE"&&a.state!=="SAVING"?I():{...a,hasChanged:!0,tentativeReservations:[...a.tentativeReservations,t]})}}}}var _t=d("<code><pre>"),bt=d("<p>Deine Anmeldung wird geladen."),re=d("<br>");function Ct(){const{store:e,actions:n}=St();return Te(async()=>{await n.initMeineAnmeldung()}),[v(()=>v(()=>e.state==="ERROR")()?g(f,{type:"danger",get children(){return e.message}}):v(()=>e.state==="LOADING")()?g(f,{get children(){return i(bt)}}):[g(O,{get when(){return e.showCreateMessage},get children(){return[g(f,{type:"success",get children(){return["Deine Anmeldung wurde erfolgreich gestartet.",i(re),i(re),"Wir haben eine E-Mail an deine Adresse gesendet. In dieser E-Mail findest du einen persönlichen Link, um deine Anmeldung bis kurz vor dem Anlass anzupassen."]}}),i(re)]}}),g($t,{get activeTab(){return e.activeTab},get changeTab(){return n.changeTab},get save(){return e.currentSave},get updateSave(){return n.updateSave},get lastSaved(){return e.lastSaved},get saveCurrentState(){return n.saveCurrentState},get saveState(){return e.state==="SAVING"?"SAVING":e.hasChanged?"HAS_CHANGES":"NO_CHANGES"},get program(){return e.program},get tentativeReservations(){return e.tentativeReservations},get addTentativeReservation(){return n.addTentativeReservation}})]),(()=>{var t=i(_t),a=t.firstChild;return s(a,()=>JSON.stringify(e,null,2)),t})()]}export{Ct as MeineAnmeldung};
