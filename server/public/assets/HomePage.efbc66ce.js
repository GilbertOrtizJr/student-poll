import{a as R,c as se,r as D,w as K,f as ue,h as N,T as de,b as fe,Q as ge,m as J,C as me,o as he,D as ve,g as ke,E as ee,_ as ye,u as te,F as ae,G as S,z as Y,H as we,I as ne,x as _e,J as xe,K as be}from"./index.13aa0923.js";import{u as Se,a as Me,b as Ce,c as Ee,d as Fe,e as Ve,f as le,g as Re,h as Te}from"./use-key-composition.ef315522.js";const Ae={ratio:[String,Number]};function qe(e,h){return R(()=>{const T=Number(e.ratio||(h!==void 0?h.value:void 0));return isNaN(T)!==!0&&T>0?{paddingBottom:`${100/T}%`}:null})}const Ne=16/9;var X=se({name:"QImg",props:{...Ae,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ne},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:h,emit:T}){const C=D(e.initialRatio),s=qe(e,C);let r=null,M=!1;const x=[D(null),D(I())],E=D(0),v=D(!1),y=D(!1),f=R(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),G=R(()=>({width:e.width,height:e.height})),A=R(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),O=R(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));K(()=>j(),H);function j(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function I(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function H(u){r!==null&&(clearTimeout(r),r=null),y.value=!1,u===null?(v.value=!1,x[E.value^1].value=I()):v.value=!0,x[E.value].value=u}function F({target:u}){M!==!0&&(r!==null&&(clearTimeout(r),r=null),C.value=u.naturalHeight===0?.5:u.naturalWidth/u.naturalHeight,Q(u,1))}function Q(u,a){M===!0||a===1e3||(u.complete===!0?U(u):r=setTimeout(()=>{r=null,Q(u,a+1)},50))}function U(u){M!==!0&&(E.value=E.value^1,x[E.value].value=null,v.value=!1,y.value=!1,T("load",u.currentSrc||u.src))}function L(u){r!==null&&(clearTimeout(r),r=null),v.value=!1,y.value=!0,x[E.value].value=null,x[E.value^1].value=I(),T("error",u)}function P(u){const a=x[u].value,n={key:"img_"+u,class:A.value,style:O.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...a};return E.value===u?(n.class+=" q-img__image--waiting",Object.assign(n,{onLoad:F,onError:L})):n.class+=" q-img__image--loaded",N("div",{class:"q-img__container absolute-full",key:"img"+u},N("img",n))}function q(){return v.value!==!0?N("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},fe(h[y.value===!0?"error":"default"])):N("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},h.loading!==void 0?h.loading():e.noSpinner===!0?void 0:[N(ge,{color:e.spinnerColor,size:e.spinnerSize})])}return H(j()),ue(()=>{M=!0,r!==null&&(clearTimeout(r),r=null)}),()=>{const u=[];return s.value!==null&&u.push(N("div",{key:"filler",style:s.value})),y.value!==!0&&(x[0].value!==null&&u.push(P(0)),x[1].value!==null&&u.push(P(1))),u.push(N(de,{name:"q-transition--fade"},q)),N("div",{class:f.value,style:G.value,role:"img","aria-label":e.alt},u)}}});const ie={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},p={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ce=Object.keys(p);ce.forEach(e=>{p[e].regex=new RegExp(p[e].pattern)});const Ie=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ce.join("")+"])|(.)","g"),re=/[.*+?^${}()|[\]\\]/g,_=String.fromCharCode(1),Pe={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Be(e,h,T,C){let s,r,M,x,E,v;const y=D(null),f=D(A());function G(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}K(()=>e.type+e.autogrow,j),K(()=>e.mask,a=>{if(a!==void 0)I(f.value,!0);else{const n=q(f.value);j(),e.modelValue!==n&&h("update:modelValue",n)}}),K(()=>e.fillMask+e.reverseFillMask,()=>{y.value===!0&&I(f.value,!0)}),K(()=>e.unmaskedValue,()=>{y.value===!0&&I(f.value)});function A(){if(j(),y.value===!0){const a=L(q(e.modelValue));return e.fillMask!==!1?u(a):a}return e.modelValue}function O(a){if(a<s.length)return s.slice(-a);let n="",i=s;const l=i.indexOf(_);if(l>-1){for(let c=a-i.length;c>0;c--)n+=_;i=i.slice(0,l)+n+i.slice(l)}return i}function j(){if(y.value=e.mask!==void 0&&e.mask.length>0&&G(),y.value===!1){x=void 0,s="",r="";return}const a=ie[e.mask]===void 0?e.mask:ie[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",i=n.replace(re,"\\$&"),l=[],c=[],o=[];let w=e.reverseFillMask===!0,d="",g="";a.replace(Ie,(b,t,k,z,B)=>{if(z!==void 0){const V=p[z];o.push(V),g=V.negate,w===!0&&(c.push("(?:"+g+"+)?("+V.pattern+"+)?(?:"+g+"+)?("+V.pattern+"+)?"),w=!1),c.push("(?:"+g+"+)?("+V.pattern+")?")}else if(k!==void 0)d="\\"+(k==="\\"?"":k),o.push(k),l.push("([^"+d+"]+)?"+d+"?");else{const V=t!==void 0?t:B;d=V==="\\"?"\\\\\\\\":V.replace(re,"\\\\$&"),o.push(V),l.push("([^"+d+"]+)?"+d+"?")}});const Z=new RegExp("^"+l.join("")+"("+(d===""?".":"[^"+d+"]")+"+)?"+(d===""?"":"["+d+"]*")+"$"),$=c.length-1,m=c.map((b,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+b):t===$?new RegExp("^"+b+"("+(g===""?".":g)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+b));M=o,x=b=>{const t=Z.exec(e.reverseFillMask===!0?b:b.slice(0,o.length+1));t!==null&&(b=t.slice(1).join(""));const k=[],z=m.length;for(let B=0,V=b;B<z;B++){const W=m[B].exec(V);if(W===null)break;V=V.slice(W.shift().length),k.push(...W)}return k.length>0?k.join(""):b},s=o.map(b=>typeof b=="string"?b:_).join(""),r=s.split(_).join(n)}function I(a,n,i){const l=C.value,c=l.selectionEnd,o=l.value.length-c,w=q(a);n===!0&&j();const d=L(w),g=e.fillMask!==!1?u(d):d,Z=f.value!==g;l.value!==g&&(l.value=g),Z===!0&&(f.value=g),document.activeElement===l&&J(()=>{if(g===r){const m=e.reverseFillMask===!0?r.length:0;l.setSelectionRange(m,m,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const m=l.selectionEnd;let b=c-1;for(let t=E;t<=b&&t<m;t++)s[t]!==_&&b++;F.right(l,b);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)>-1){const m=e.reverseFillMask===!0?c===0?g.length>d.length?1:0:Math.max(0,g.length-(g===r?0:Math.min(d.length,o)+1))+1:c;l.setSelectionRange(m,m,"forward");return}if(e.reverseFillMask===!0)if(Z===!0){const m=Math.max(0,g.length-(g===r?0:Math.min(d.length,o+1)));m===1&&c===1?l.setSelectionRange(m,m,"forward"):F.rightReverse(l,m)}else{const m=g.length-o;l.setSelectionRange(m,m,"backward")}else if(Z===!0){const m=Math.max(0,s.indexOf(_),Math.min(d.length,c)-1);F.right(l,m)}else{const m=c-1;F.right(l,m)}});const $=e.unmaskedValue===!0?q(g):g;String(e.modelValue)!==$&&T($,!0)}function H(a,n,i){const l=L(q(a.value));n=Math.max(0,s.indexOf(_),Math.min(l.length,n)),E=n,a.setSelectionRange(n,i,"forward")}const F={left(a,n){const i=s.slice(n-1).indexOf(_)===-1;let l=Math.max(0,n-1);for(;l>=0;l--)if(s[l]===_){n=l,i===!0&&n++;break}if(l<0&&s[n]!==void 0&&s[n]!==_)return F.right(a,0);n>=0&&a.setSelectionRange(n,n,"backward")},right(a,n){const i=a.value.length;let l=Math.min(i,n+1);for(;l<=i;l++)if(s[l]===_){n=l;break}else s[l-1]===_&&(n=l);if(l>i&&s[n-1]!==void 0&&s[n-1]!==_)return F.left(a,i);a.setSelectionRange(n,n,"forward")},leftReverse(a,n){const i=O(a.value.length);let l=Math.max(0,n-1);for(;l>=0;l--)if(i[l-1]===_){n=l;break}else if(i[l]===_&&(n=l,l===0))break;if(l<0&&i[n]!==void 0&&i[n]!==_)return F.rightReverse(a,0);n>=0&&a.setSelectionRange(n,n,"backward")},rightReverse(a,n){const i=a.value.length,l=O(i),c=l.slice(0,n+1).indexOf(_)===-1;let o=Math.min(i,n+1);for(;o<=i;o++)if(l[o-1]===_){n=o,n>0&&c===!0&&n--;break}if(o>i&&l[n-1]!==void 0&&l[n-1]!==_)return F.leftReverse(a,i);a.setSelectionRange(n,n,"forward")}};function Q(a){h("click",a),v=void 0}function U(a){if(h("keydown",a),me(a)===!0)return;const n=C.value,i=n.selectionStart,l=n.selectionEnd;if(a.shiftKey||(v=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&v===void 0&&(v=n.selectionDirection==="forward"?i:l);const c=F[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),c(n,v===i?l:i),a.shiftKey){const o=n.selectionStart;n.setSelectionRange(Math.min(v,o),Math.max(v,o),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&i===l?F.left(n,i):a.keyCode===46&&e.reverseFillMask===!0&&i===l&&F.rightReverse(n,l)}function L(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return P(a);const n=M;let i=0,l="";for(let c=0;c<n.length;c++){const o=a[i],w=n[c];if(typeof w=="string")l+=w,o===w&&i++;else if(o!==void 0&&w.regex.test(o))l+=w.transform!==void 0?w.transform(o):o,i++;else return l}return l}function P(a){const n=M,i=s.indexOf(_);let l=a.length-1,c="";for(let o=n.length-1;o>=0&&l>-1;o--){const w=n[o];let d=a[l];if(typeof w=="string")c=w+c,d===w&&l--;else if(d!==void 0&&w.regex.test(d))do c=(w.transform!==void 0?w.transform(d):d)+c,l--,d=a[l];while(i===o&&d!==void 0&&w.regex.test(d));else return c}return c}function q(a){return typeof a!="string"||x===void 0?typeof a=="number"?x(""+a):a:x(a)}function u(a){return r.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?r.slice(0,-a.length)+a:a+r.slice(a.length)}return{innerValue:f,hasMask:y,moveCursorForPaste:H,updateMaskValue:I,onMaskedKeydown:U,onMaskedClick:Q}}function Oe(e,h){function T(){const C=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(C)===C&&("length"in C?Array.from(C):[C]).forEach(r=>{s.items.add(r)}),{files:s.files}}catch{return{files:void 0}}}return h===!0?R(()=>{if(e.type==="file")return T()}):R(T)}var je=se({name:"QInput",inheritAttrs:!1,props:{...Se,...Pe,...Me,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ce,"paste","change","keydown","click","animationend"],setup(e,{emit:h,attrs:T}){const{proxy:C}=ke(),{$q:s}=C,r={};let M=NaN,x,E,v=null,y;const f=D(null),G=Ee(e),{innerValue:A,hasMask:O,moveCursorForPaste:j,updateMaskValue:I,onMaskedKeydown:H,onMaskedClick:F}=Be(e,h,d,f),Q=Oe(e,!0),U=R(()=>le(A.value)),L=Te(o),P=Fe(),q=R(()=>e.type==="textarea"||e.autogrow===!0),u=R(()=>q.value===!0||["text","search","url","tel","password"].includes(e.type)),a=R(()=>{const t={...P.splitAttrs.listeners.value,onInput:o,onPaste:c,onChange:Z,onBlur:$,onFocus:ee};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=L,O.value===!0&&(t.onKeydown=H,t.onClick=F),e.autogrow===!0&&(t.onAnimationend=w),t}),n=R(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:G.value,...P.splitAttrs.attributes.value,id:P.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return q.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});K(()=>e.type,()=>{f.value&&(f.value.value=e.modelValue)}),K(()=>e.modelValue,t=>{if(O.value===!0){if(E===!0&&(E=!1,String(t)===M))return;I(t)}else A.value!==t&&(A.value=t,e.type==="number"&&r.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete r.value));e.autogrow===!0&&J(g)}),K(()=>e.autogrow,t=>{t===!0?J(g):f.value!==null&&T.rows>0&&(f.value.style.height="auto")}),K(()=>e.dense,()=>{e.autogrow===!0&&J(g)});function i(){Re(()=>{const t=document.activeElement;f.value!==null&&f.value!==t&&(t===null||t.id!==P.targetUid.value)&&f.value.focus({preventScroll:!0})})}function l(){f.value!==null&&f.value.select()}function c(t){if(O.value===!0&&e.reverseFillMask!==!0){const k=t.target;j(k,k.selectionStart,k.selectionEnd)}h("paste",t)}function o(t){if(!t||!t.target)return;if(e.type==="file"){h("update:modelValue",t.target.files);return}const k=t.target.value;if(t.target.qComposing===!0){r.value=k;return}if(O.value===!0)I(k,!1,t.inputType);else if(d(k),u.value===!0&&t.target===document.activeElement){const{selectionStart:z,selectionEnd:B}=t.target;z!==void 0&&B!==void 0&&J(()=>{t.target===document.activeElement&&k.indexOf(t.target.value)===0&&t.target.setSelectionRange(z,B)})}e.autogrow===!0&&g()}function w(t){h("animationend",t),g()}function d(t,k){y=()=>{v=null,e.type!=="number"&&r.hasOwnProperty("value")===!0&&delete r.value,e.modelValue!==t&&M!==t&&(M=t,k===!0&&(E=!0),h("update:modelValue",t),J(()=>{M===t&&(M=NaN)})),y=void 0},e.type==="number"&&(x=!0,r.value=t),e.debounce!==void 0?(v!==null&&clearTimeout(v),r.value=t,v=setTimeout(y,e.debounce)):y()}function g(){requestAnimationFrame(()=>{const t=f.value;if(t!==null){const k=t.parentNode.style,{scrollTop:z}=t,{overflowY:B,maxHeight:V}=s.platform.is.firefox===!0?{}:window.getComputedStyle(t),W=B!==void 0&&B!=="scroll";W===!0&&(t.style.overflowY="hidden"),k.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",W===!0&&(t.style.overflowY=parseInt(V,10)<t.scrollHeight?"auto":"hidden"),k.marginBottom="",t.scrollTop=z}})}function Z(t){L(t),v!==null&&(clearTimeout(v),v=null),y!==void 0&&y(),h("change",t.target.value)}function $(t){t!==void 0&&ee(t),v!==null&&(clearTimeout(v),v=null),y!==void 0&&y(),x=!1,E=!1,delete r.value,e.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=A.value!==void 0?A.value:"")})}function m(){return r.hasOwnProperty("value")===!0?r.value:A.value!==void 0?A.value:""}ue(()=>{$()}),he(()=>{e.autogrow===!0&&g()}),Object.assign(P,{innerValue:A,fieldClass:R(()=>`q-${q.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:R(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:f,emitValue:d,hasValue:U,floatingLabel:R(()=>U.value===!0&&(e.type!=="number"||isNaN(A.value)===!1)||le(e.displayValue)),getControl:()=>N(q.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...a.value,...e.type!=="file"?{value:m()}:Q.value}),getShadowControl:()=>N("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(q.value===!0?"":" text-no-wrap")},[N("span",{class:"invisible"},m()),N("span",e.shadowText)])});const b=Ve(P);return Object.assign(C,{focus:i,select:l,getNativeElement:()=>f.value}),ve(C,"nativeEl",()=>f.value),b}}),oe="/assets/BASESchool.2960b5bd.jpg",ze="/assets/BASELogo.f6e26eda.jpg";const De={data(){return{error:!1,email:""}},computed:{creatorName(){return"Gilbert Ortiz Jr"},linkedIn(){return"https://www.linkedin.com/in/gilbert-ortiz-2b8122254/"},linkedIn_pic(){return"https://media.licdn.com/dms/image/C4E03AQFRsQZEbaNOrg/profile-displayphoto-shrink_400_400/0/1516190707653?e=1684368000&v=beta&t=Dysj_6P5bVewAfCQ0cDPyeBVX3wqCNP05CWHuyO6W2Y"}},methods:{go(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)?this.$router.push({name:"Poll",params:{user:this.email}}):this.error=!0}}},Ke={class:"lt-md",style:{width:"100%",height:"200px",overflow:"hidden"}},Le={class:"gt-sm",style:{width:"100%",height:"400px",overflow:"hidden"}},Ze={class:"row text-center"},$e={class:"col-12 col-md-4"},He={class:"row"},Qe={class:"col"},Ue={class:"col"},We=S("p",{class:"q-ma-none q-mt-md"},"created by:",-1),Ye={class:"q-mb-none text-bold"},Je={class:"q-mb-md"},Ge=["href"],Xe={class:"col-12 col-md-8"},pe=S("h2",{class:"gt-sm text-center q-mb-md"},"Job Interest Poll",-1),et=S("h3",{class:"lt-md text-center q-mb-md"},"Job Interest Poll",-1),tt={class:"container"},at=S("p",null,"Welcome to the BASE job interest poll! The purpose of this poll is to obtain information about what job you may be interested interested when you enter your work life. This will help us to allocate resources for your education.",-1),nt=S("h6",{class:"q-ma-none"},"Enter your school email to get started.",-1),lt={class:"row"},it={key:0,class:"text-red text-bold"};function rt(e,h,T,C,s,r){return te(),ae("div",null,[S("div",Ke,[Y(X,{src:oe})]),S("div",Le,[Y(X,{src:oe})]),S("div",Ze,[S("div",$e,[S("div",He,[S("div",Qe,[Y(X,{src:ze,width:"80%"})]),S("div",Ue,[We,S("p",Ye,we(r.creatorName),1),S("p",Je,[ne("visit me on "),S("a",{href:r.linkedIn,target:"_blank"},"LinkedIn",8,Ge)]),Y(X,{src:r.linkedIn_pic,style:{"border-radius":"50%"},width:"50%"},null,8,["src"])])])]),S("div",Xe,[pe,et,S("div",tt,[at,nt,S("div",lt,[Y(je,{outlined:"",modelValue:s.email,"onUpdate:modelValue":h[0]||(h[0]=M=>s.email=M),label:"Email",style:{width:"80%"},onFocus:h[1]||(h[1]=M=>s.error=!1)},null,8,["modelValue"]),Y(xe,{color:"primary",class:"q-ml-md",onClick:r.go},{default:_e(()=>[ne("Go")]),_:1},8,["onClick"])]),s.error?(te(),ae("p",it,"Email address is invalid.")):be("",!0)])])])])}var ut=ye(De,[["render",rt]]);export{ut as default};
