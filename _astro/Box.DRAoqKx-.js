import{d as q,m as H,g,a as _,i as y,b as s,j as h,s as d,e as m,r as S,u as B,t as x,c as E,S as I}from"./web.DaGPATpz.js";var w=x("<label><!$><!/><input>");function R(t){const e=H({type:"text",required:!0,isHoneypot:!1},t);return(()=>{var i=g(w),o=i.firstChild,[r,u]=_(o.nextSibling),n=r.nextSibling;return y(i,()=>e.label,r,u),n.$$input=l=>e.onValueUpdate(l.target.value),s(l=>{var a=e.isHoneypot?"honey":"",b=e.type,c=e.name,$=e.label,f=e.required;return a!==l.e&&h(i,l.e=a),b!==l.t&&d(n,"type",l.t=b),c!==l.a&&d(n,"name",l.a=c),$!==l.o&&d(n,"placeholder",l.o=$),f!==l.i&&m(n,"required",l.i=f),l},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),s(()=>m(n,"value",e.value)),S(),i})()}function U(t){const e=H({type:"text",required:!0,isHoneypot:!1},t);return(()=>{var i=g(w),o=i.firstChild,[r,u]=_(o.nextSibling),n=r.nextSibling;y(i,()=>e.label,r,u);var l=e.ref;return typeof l=="function"?B(l,n):e.ref=n,n.$$input=a=>e.onValueUpdate(a.target.value),s(a=>{var b=e.isHoneypot?"honey":"",c=e.type,$=e.name,f=e.label,v=e.required;return b!==a.e&&h(i,a.e=b),c!==a.t&&d(n,"type",a.t=c),$!==a.a&&d(n,"name",a.a=$),f!==a.o&&d(n,"placeholder",a.o=f),v!==a.i&&m(n,"required",a.i=v),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),s(()=>m(n,"value",e.value)),S(),i})()}q(["input"]);var N=x("<button>");function V(t){return(()=>{var e=g(N);return e.$$click=()=>t.onClick?.(),y(e,()=>t.label),s(i=>{var o=t.type??"button",r=`button-${t.kind??(t.disabled?"gray":"accent")}`,u=t.disabled===!0;return o!==i.e&&d(e,"type",i.e=o),r!==i.t&&h(e,i.t=r),u!==i.a&&m(e,"disabled",i.a=u),i},{e:void 0,t:void 0,a:void 0}),S(),e})()}q(["click"]);var W=x('<a><i class="fa-duotone fa-arrow-turn-down-right event-icon"></i><span> <!$><!/>'),D=x("<div><span></span><!$><!/>"),L=x("<div style=display:block;>");function j(t){return(()=>{var e=g(D),i=e.firstChild,o=i.nextSibling,[r,u]=_(o.nextSibling);return y(i,()=>t.children),y(e,E(I,{get when(){return t.link!==void 0&&t.linkLabel!==void 0},get children(){var n=g(W),l=n.firstChild,a=l.nextSibling,b=a.firstChild,c=b.nextSibling,[$,f]=_(c.nextSibling);return y(a,()=>t.linkLabel,$,f),s(v=>{var k=t.link??"",C=`button button-small button-${t.type??"gray"}`;return k!==v.e&&d(n,"href",v.e=k),C!==v.t&&h(n,v.t=C),v},{e:void 0,t:void 0}),n}}),r,u),s(()=>h(e,`box-${t.type??"gray"}`)),e})()}function A(t){return(()=>{var e=g(L);return y(e,()=>t.children),s(()=>h(e,`box-${t.type??"gray"}`)),e})()}export{j as B,R as I,A as S,U as a,V as b};
