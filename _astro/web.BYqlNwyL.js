const c={context:void 0,registry:void 0,done:!1,getContextId(){return he(this.context.count)},getNextContextId(){return he(this.context.count++)}};function he(e){const t=String(e),n=t.length-1;return c.context.id+(n?String.fromCharCode(96+n):"")+t}function M(e){c.context=e}function He(){return{...c.context,id:c.getNextContextId(),count:0}}const Ie=(e,t)=>e===t,le=Symbol("solid-proxy"),je=Symbol("solid-track"),W={equals:Ie};let Y=null,me=ke;const O=1,X=2,Se={owned:null,cleanups:null,context:null,owner:null},ie={};var h=null;let q=null,_e=null,y=null,A=null,k=null,ee=0;function D(e,t){const n=y,s=h,r=e.length===0,i=t===void 0?s:t,l=r?Se:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=r?e:()=>e(()=>C(()=>te(l)));h=l,y=null;try{return _(o,!0)}finally{y=n,h=s}}function j(e,t){t=t?Object.assign({},W,t):W;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),Ee(n,r));return[Ce.bind(n),s]}function ge(e,t,n){const s=U(e,t,!0,O);R(s)}function Q(e,t,n){const s=U(e,t,!1,O);R(s)}function Me(e,t,n){me=De;const s=U(e,t,!1,O),r=B&&de(B);r&&(s.suspense=r),s.user=!0,k?k.push(s):R(s)}function $(e,t,n){n=n?Object.assign({},W,n):W;const s=U(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,R(s),Ce.bind(s)}function Le(e){return e&&typeof e=="object"&&"then"in e}function rt(e,t,n){let s,r,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,i={}):(s=e,r=t,i={});let l=null,o=ie,f=null,d=!1,a=!1,u="initialValue"in i,m=typeof s=="function"&&$(s);const g=new Set,[x,S]=(i.storage||j)(i.initialValue),[N,T]=j(void 0),[v,E]=j(void 0,{equals:!1}),[P,H]=j(u?"ready":"unresolved");c.context&&(f=c.getNextContextId(),i.ssrLoadFrom==="initial"?o=i.initialValue:c.load&&c.has(f)&&(o=c.load(f)));function I(p,b,w,L){return l===p&&(l=null,L!==void 0&&(u=!0),(p===o||b===o)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(L,{value:b})),o=ie,Oe(b,w)),b}function Oe(p,b){_(()=>{b===void 0&&S(()=>p),H(b!==void 0?"errored":u?"ready":"unresolved"),T(b);for(const w of g.keys())w.decrement();g.clear()},!1)}function se(){const p=B&&de(B),b=x(),w=N();if(w!==void 0&&!l)throw w;return y&&!y.user&&p&&ge(()=>{v(),l&&(p.resolved&&q&&d?q.promises.add(l):g.has(p)||(p.increment(),g.add(p)))}),b}function re(p=!0){if(p!==!1&&a)return;a=!1;const b=m?m():s;if(d=q,b==null||b===!1){I(l,C(x));return}const w=o!==ie?o:C(()=>r(b,{value:x(),refetching:p}));return Le(w)?(l=w,"value"in w?(w.status==="success"?I(l,w.value,void 0,b):I(l,void 0,fe(w.value),b),w):(a=!0,queueMicrotask(()=>a=!1),_(()=>{H(u?"refreshing":"pending"),E()},!1),w.then(L=>I(w,L,void 0,b),L=>I(w,void 0,fe(L),b)))):(I(l,w,void 0,b),w)}return Object.defineProperties(se,{state:{get:()=>P()},error:{get:()=>N()},loading:{get(){const p=P();return p==="pending"||p==="refreshing"}},latest:{get(){if(!u)return se();const p=N();if(p&&!l)throw p;return x()}}}),m?ge(()=>re(!1)):re(!1),[se,{refetch:re,mutate:S}]}function it(e){return _(e,!1)}function C(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function ot(e){Me(()=>C(e))}function ae(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function Fe(e,t){Y||(Y=Symbol("error")),h=U(void 0,void 0,!0),h.context={...h.context,[Y]:[t]};try{return e()}catch(n){ne(n)}finally{h=h.owner}}function lt(){return y}function qe(){return h}function Be(e){k.push.apply(k,e),e.length=0}function ve(e,t){const n=Symbol("context");return{id:n,Provider:Ue(n),defaultValue:e}}function de(e){let t;return h&&h.context&&(t=h.context[e.id])!==void 0?t:e.defaultValue}function Ae(e){const t=$(e),n=$(()=>ue(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let B;function Re(){return B||(B=ve())}function Ce(){if(this.sources&&this.state)if(this.state===O)R(this);else{const e=A;A=null,_(()=>Z(this),!1),A=e}if(y){const e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function Ee(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&_(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=q&&q.running;l&&q.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?A.push(i):k.push(i),i.observers&&$e(i)),l||(i.state=O)}if(A.length>1e6)throw A=[],new Error},!1)),t}function R(e){if(!e.fn)return;te(e);const t=ee;Ve(e,e.value,t)}function Ve(e,t,n){let s;const r=h,i=y;y=h=e;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=O,e.owned&&e.owned.forEach(te),e.owned=null),e.updatedAt=n+1,ne(l)}finally{y=i,h=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ee(e,s):e.value=s,e.updatedAt=n)}function U(e,t,n,s=O,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return h===null||h!==Se&&(h.owned?h.owned.push(i):h.owned=[i]),i}function J(e){if(e.state===0)return;if(e.state===X)return Z(e);if(e.suspense&&C(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ee);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===O)R(e);else if(e.state===X){const s=A;A=null,_(()=>Z(e,t[0]),!1),A=s}}function _(e,t){if(A)return e();let n=!1;t||(A=[]),k?n=!0:k=[],ee++;try{const s=e();return Ye(n),s}catch(s){n||(k=null),A=null,ne(s)}}function Ye(e){if(A&&(ke(A),A=null),e)return;const t=k;k=null,t.length&&_(()=>me(t),!1)}function ke(e){for(let t=0;t<e.length;t++)J(e[t])}function De(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:J(s)}if(c.context){if(c.count){c.effects||(c.effects=[]),c.effects.push(...e.slice(0,n));return}else c.effects&&(e=[...c.effects,...e],n+=c.effects.length,delete c.effects);M()}for(t=0;t<n;t++)J(e[t])}function Z(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const r=s.state;r===O?s!==t&&(!s.updatedAt||s.updatedAt<ee)&&J(s):r===X&&Z(s,t)}}}function $e(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=X,n.pure?A.push(n):k.push(n),n.observers&&$e(n))}}function te(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)te(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function fe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ye(e,t,n){try{for(const s of t)s(e)}catch(s){ne(s,n&&n.owner||null)}}function ne(e,t=h){const n=Y&&t&&t.context&&t.context[Y],s=fe(e);if(!n)throw s;k?k.push({fn(){ye(s,n,t)},state:O}):ye(s,n,t)}function ue(e){if(typeof e=="function"&&!e.length)return ue(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ue(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ue(e,t){return function(s){let r;return Q(()=>r=C(()=>(h.context={...h.context,[e]:s.value},Ae(()=>s.children))),void 0),r}}const Ke=Symbol("fallback");function pe(e){for(let t=0;t<e.length;t++)e[t]()}function Ge(e,t,n={}){let s=[],r=[],i=[],l=0,o=t.length>1?[]:null;return ae(()=>pe(i)),()=>{let f=e()||[],d=f.length,a,u;return f[je],C(()=>{let g,x,S,N,T,v,E,P,H;if(d===0)l!==0&&(pe(i),i=[],s=[],r=[],l=0,o&&(o=[])),n.fallback&&(s=[Ke],r[0]=D(I=>(i[0]=I,n.fallback())),l=1);else if(l===0){for(r=new Array(d),u=0;u<d;u++)s[u]=f[u],r[u]=D(m);l=d}else{for(S=new Array(d),N=new Array(d),o&&(T=new Array(d)),v=0,E=Math.min(l,d);v<E&&s[v]===f[v];v++);for(E=l-1,P=d-1;E>=v&&P>=v&&s[E]===f[P];E--,P--)S[P]=r[E],N[P]=i[E],o&&(T[P]=o[E]);for(g=new Map,x=new Array(P+1),u=P;u>=v;u--)H=f[u],a=g.get(H),x[u]=a===void 0?-1:a,g.set(H,u);for(a=v;a<=E;a++)H=s[a],u=g.get(H),u!==void 0&&u!==-1?(S[u]=r[a],N[u]=i[a],o&&(T[u]=o[a]),u=x[u],g.set(H,u)):i[a]();for(u=v;u<d;u++)u in S?(r[u]=S[u],i[u]=N[u],o&&(o[u]=T[u],o[u](u))):r[u]=D(m);r=r.slice(0,l=d),s=f.slice(0)}return r});function m(g){if(i[u]=g,o){const[x,S]=j(u);return o[u]=S,t(f[u],x)}return t(f[u])}}}let Ne=!1;function We(){Ne=!0}function Xe(e,t){if(Ne&&c.context){const n=c.context;M(He());const s=C(()=>e(t||{}));return M(n),s}return C(()=>e(t||{}))}function K(){return!0}const Qe={get(e,t,n){return t===le?n:e.get(t)},has(e,t){return t===le?!0:e.has(t)},set:K,deleteProperty:K,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:K,deleteProperty:K}},ownKeys(e){return e.keys()}};function oe(e){return(e=typeof e=="function"?e():e)?e:{}}function Je(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ft(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&le in o,e[l]=typeof o=="function"?(t=!0,$(o)):o}if(t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const f=oe(e[o])[l];if(f!==void 0)return f}},has(l){for(let o=e.length-1;o>=0;o--)if(l in oe(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(oe(e[o])));return[...new Set(l)]}},Qe);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const f=Object.getOwnPropertyNames(o);for(let d=f.length-1;d>=0;d--){const a=f[d];if(a==="__proto__"||a==="constructor")continue;const u=Object.getOwnPropertyDescriptor(o,a);if(!s[a])s[a]=u.get?{enumerable:!0,configurable:!0,get:Je.bind(n[a]=[u.get.bind(o)])}:u.value!==void 0?u:void 0;else{const m=n[a];m&&(u.get?m.push(u.get.bind(o)):u.value!==void 0&&m.push(()=>u.value))}}}const r={},i=Object.keys(s);for(let l=i.length-1;l>=0;l--){const o=i[l],f=s[o];f&&f.get?Object.defineProperty(r,o,f):r[o]=f?f.value:void 0}return r}const Te=e=>`Stale read from <${e}>.`;function ut(e){const t="fallback"in e&&{fallback:()=>e.fallback};return $(Ge(()=>e.each,e.children,t||void 0))}function ct(e){const t=e.keyed,n=$(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return $(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?C(()=>r(t?s:()=>{if(!C(n))throw Te("Show");return e.when})):r}return e.fallback},void 0,void 0)}function at(e){let t=!1;const n=(i,l)=>(t?i[1]===l[1]:!i[1]==!l[1])&&i[2]===l[2],s=Ae(()=>e.children),r=$(()=>{let i=s();Array.isArray(i)||(i=[i]);for(let l=0;l<i.length;l++){const o=i[l].when;if(o)return t=!!i[l].keyed,[l,o,i[l]]}return[-1]},void 0,{equals:n});return $(()=>{const[i,l,o]=r();if(i<0)return e.fallback;const f=o.children;return typeof f=="function"&&f.length>0?C(()=>f(t?l:()=>{if(C(r)[0]!==i)throw Te("Match");return o.when})):f},void 0,void 0)}function dt(e){return e}let G;function ht(e){let t;c.context&&c.load&&(t=c.load(c.getContextId()));const[n,s]=j(t,void 0);return G||(G=new Set),G.add(s),ae(()=>G.delete(s)),$(()=>{let r;if(r=n()){const i=e.fallback;return typeof i=="function"&&i.length?C(()=>i(r,()=>s())):i}return Fe(()=>e.children,s)},void 0,void 0)}const Ze=ve();function gt(e){let t=0,n,s,r,i,l;const[o,f]=j(!1),d=Re(),a={increment:()=>{++t===1&&f(!0)},decrement:()=>{--t===0&&f(!1)},inFallback:o,effects:[],resolved:!1},u=qe();if(c.context&&c.load){const x=c.getContextId();let S=c.load(x);if(S&&(typeof S!="object"||S.status!=="success"?r=S:c.gather(x)),r&&r!=="$$f"){const[N,T]=j(void 0,{equals:!1});i=N,r.then(()=>{if(c.done)return T();c.gather(x),M(s),T(),M()},v=>{l=v,T()})}}const m=de(Ze);m&&(n=m.register(a.inFallback));let g;return ae(()=>g&&g()),Xe(d.Provider,{value:a,get children(){return $(()=>{if(l)throw l;if(s=c.context,i)return i(),i=void 0;s&&r==="$$f"&&M();const x=$(()=>e.children);return $(S=>{const N=a.inFallback(),{showContent:T=!0,showFallback:v=!0}=n?n():{};if((!N||r&&r!=="$$f")&&T)return a.resolved=!0,g&&g(),g=s=r=void 0,Be(a.effects),x();if(v)return g?S:D(E=>(g=E,s&&(M({id:s.id+"F",count:0}),s=void 0),e.fallback),u)})})}})}function ze(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,f=t[r-1].nextSibling,d=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const a=i<s?o?n[o-1].nextSibling:n[i-o]:f;for(;o<i;)e.insertBefore(n[o++],a)}else if(i===o)for(;l<r;)(!d||!d.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const a=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],a),t[r]=n[i]}else{if(!d){d=new Map;let u=o;for(;u<i;)d.set(n[u],u++)}const a=d.get(t[l]);if(a!=null)if(o<a&&a<i){let u=l,m=1,g;for(;++u<r&&u<i&&!((g=d.get(t[u]))==null||g!==a+m);)m++;if(m>a-o){const x=t[l];for(;o<a;)e.insertBefore(n[o++],x)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const be="_$DX_DELEGATE";function et(e,t,n,s={}){let r;return D(i=>{r=i,t===document?e():tt(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function yt(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},i=()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function pt(e,t=window.document){const n=t[be]||(t[be]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Pe))}}function bt(e,t,n){V(e)||(e[t]=n)}function wt(e,t,n){V(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function xt(e,t){V(e)||(t==null?e.removeAttribute("class"):e.className=t)}function mt(e,t,n){return C(()=>e(t,n))}function tt(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return z(e,t,s,n);Q(r=>z(e,t(),r,n),s)}function nt(e,t,n={}){c.completed=globalThis._$HY.completed,c.events=globalThis._$HY.events,c.load=s=>globalThis._$HY.r[s],c.has=s=>s in globalThis._$HY.r,c.done=globalThis._$HY.done,c.gather=s=>xe(t,s),c.registry=new Map,c.context={id:n.renderId||"",count:0};try{return xe(t,n.renderId),et(e,t,[...t.childNodes],n)}finally{c.context=null}}function St(e){let t,n;return!V()||!(t=c.registry.get(n=st()))?e():(c.completed&&c.completed.add(t),c.registry.delete(n),t)}function vt(e){let t=e,n=0,s=[];if(V(e))for(;t;){if(t.nodeType===8){const r=t.nodeValue;if(r==="$")n++;else if(r==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function At(){c.events&&!c.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=c;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;t.shift(),Pe(s)}c.done&&(c.events=_$HY.events=null,c.completed=_$HY.completed=null)}),c.events.queued=!0)}function V(e){return!!c.context&&!c.done&&(!e||e.isConnected)}function Pe(e){if(c.registry&&c.events&&c.events.find(([s,r])=>r===e))return;const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),c.registry&&!c.done&&(c.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function z(e,t,n,s,r){const i=V(e);if(i){!n&&(n=[...e.childNodes]);let f=[];for(let d=0;d<n.length;d++){const a=n[d];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():f.push(a)}n=f}for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(i||l==="number"&&(t=t.toString(),t===n))return n;if(o){let f=n[0];f&&f.nodeType===3?f.data!==t&&(f.data=t):f=document.createTextNode(t),n=F(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(i)return n;n=F(e,n,s)}else{if(l==="function")return Q(()=>{let f=t();for(;typeof f=="function";)f=f();n=z(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[],d=n&&Array.isArray(n);if(ce(f,t,n,r))return Q(()=>n=z(e,f,n,s,!0)),()=>n;if(i){if(!f.length)return n;if(s===void 0)return n=[...e.childNodes];let a=f[0];if(a.parentNode!==e)return n;const u=[a];for(;(a=a.nextSibling)!==s;)u.push(a);return n=u}if(f.length===0){if(n=F(e,n,s),o)return n}else d?n.length===0?we(e,f,s):ze(e,n,f):(n&&F(e),we(e,f));n=f}else if(t.nodeType){if(i&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=F(e,n,s,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ce(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],f=n&&n[e.length],d;if(!(o==null||o===!0||o===!1))if((d=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=ce(e,o,f)||r;else if(d==="function")if(s){for(;typeof o=="function";)o=o();r=ce(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||r}else e.push(o),r=!0;else{const a=String(o);f&&f.nodeType===3&&f.data===a?e.push(f):e.push(document.createTextNode(a))}}return r}function we(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function F(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const f=o.parentNode===e;!i&&!l?f?e.replaceChild(r,o):e.insertBefore(r,n):f&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function xe(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const r=n[s],i=r.getAttribute("data-hk");(!t||i.startsWith(t))&&!c.registry.has(i)&&c.registry.set(i,r)}}function st(){return c.getNextContextId()}const Ct=(...e)=>(We(),nt(...e));export{le as $,ht as E,ut as F,dt as M,ct as S,vt as a,Q as b,Xe as c,pt as d,bt as e,j as f,St as g,at as h,tt as i,xt as j,$ as k,gt as l,ft as m,rt as n,ot as o,je as p,lt as q,At as r,wt as s,yt as t,mt as u,it as v,Ct as w,et as x};
