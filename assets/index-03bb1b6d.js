import{a1 as z,ar as we,_ as Be,O as Se,aE as de,bq as Te,b9 as Ie,q as $,A as T,Q as Me,br as ne,w as te,s as ce,B as ke,R as $e,aU as A,T as p,a5 as B,a4 as m,ai as q,$ as v,ab as g,W as d,a7 as W,aC as F,U as D,a6 as H,aa as O,a9 as P,aX as j,V as Ae,a8 as G,at as X,au as Le,v as Oe,N as fe,bs as pe,bt as me,bu as se,ak as Re,bv as Ve,m as oe,ao as ae,bg as ge,aV as Pe,y as ze,bk as De,bo as Ue,bp as Ne,bh as Fe,bw as He,b8 as je,bx as qe,bn as le}from"./index-865e41d0.js";import{m as Ke}from"./map-de03d2b9.js";import{v as _e,E as Ge,p as Xe,l as We,q as Qe,c as re,h as Je,j as Ze,m as Ye,t as xe,r as en}from"./methods-fa342bbf.js";const nn='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',tn=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,ie=e=>Array.from(e.querySelectorAll(nn)).filter(n=>sn(n)&&tn(n)),sn=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},Q="_trap-focus-children",I=[],ue=e=>{if(I.length===0)return;const n=I[I.length-1][Q];if(n.length>0&&e.code===we.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const o=e.shiftKey,l=e.target===n[0],a=e.target===n[n.length-1];l&&o&&(e.preventDefault(),n[n.length-1].focus()),a&&!o&&(e.preventDefault(),n[0].focus())}},on={beforeMount(e){e[Q]=ie(e),I.push(e),I.length<=1&&document.addEventListener("keydown",ue)},updated(e){z(()=>{e[Q]=ie(e)})},unmounted(){I.shift(),I.length===0&&document.removeEventListener("keydown",ue)}},an=Se({name:"ElMessageBox",directives:{TrapFocus:on},components:{ElButton:_e,ElFocusTrap:Ge,ElInput:Xe,ElOverlay:We,ElIcon:de,...Te},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Qe},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:o,zIndex:l,ns:a,size:s}=Ie("message-box",$(()=>e.buttonSize)),{t:c}=o,{nextZIndex:f}=l,h=T(!1),t=Me({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:f()}),u=$(()=>{const i=t.type;return{[a.bm("icon",i)]:i&&ne[i]}}),y=re(),r=re(),K=$(()=>t.icon||ne[t.type]||""),_=$(()=>!!t.message),C=T(),b=T(),E=T(),M=T(),J=T(),ve=$(()=>t.confirmButtonClass);te(()=>t.inputValue,async i=>{await z(),e.boxType==="prompt"&&i!==null&&Y()},{immediate:!0}),te(()=>h.value,i=>{var w,k;i&&(e.boxType!=="prompt"&&(t.autofocus?E.value=(k=(w=J.value)==null?void 0:w.$el)!=null?k:C.value:E.value=C.value),t.zIndex=f()),e.boxType==="prompt"&&(i?z().then(()=>{var ee;M.value&&M.value.$el&&(t.autofocus?E.value=(ee=Ce())!=null?ee:C.value:E.value=C.value)}):(t.editorErrorMessage="",t.validateError=!1))});const he=$(()=>e.draggable);Je(C,b,he),ce(async()=>{await z(),e.closeOnHashChange&&window.addEventListener("hashchange",V)}),ke(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",V)});function V(){h.value&&(h.value=!1,z(()=>{t.action&&n("action",t.action)}))}const Z=()=>{e.closeOnClickModal&&N(t.distinguishCancelAndClose?"close":"cancel")},be=Ye(Z),ye=i=>{if(t.inputType!=="textarea")return i.preventDefault(),N("confirm")},N=i=>{var w;e.boxType==="prompt"&&i==="confirm"&&!Y()||(t.action=i,t.beforeClose?(w=t.beforeClose)==null||w.call(t,i,t,V):V())},Y=()=>{if(e.boxType==="prompt"){const i=t.inputPattern;if(i&&!i.test(t.inputValue||""))return t.editorErrorMessage=t.inputErrorMessage||c("el.messagebox.error"),t.validateError=!0,!1;const w=t.inputValidator;if(typeof w=="function"){const k=w(t.inputValue);if(k===!1)return t.editorErrorMessage=t.inputErrorMessage||c("el.messagebox.error"),t.validateError=!0,!1;if(typeof k=="string")return t.editorErrorMessage=k,t.validateError=!0,!1}}return t.editorErrorMessage="",t.validateError=!1,!0},Ce=()=>{const i=M.value.$refs;return i.input||i.textarea},x=()=>{N("close")},Ee=()=>{e.closeOnPressEscape&&x()};return e.lockScroll&&Ze(h),{...$e(t),ns:a,overlayEvent:be,visible:h,hasMessage:_,typeClass:u,contentId:y,inputId:r,btnSize:s,iconComponent:K,confirmButtonClasses:ve,rootRef:C,focusStartRef:E,headerRef:b,inputRef:M,confirmRef:J,doClose:V,handleClose:x,onCloseRequested:Ee,handleWrapperClick:Z,handleInputEnter:ye,handleAction:N,t:c}}}),ln=["aria-label","aria-describedby"],rn=["aria-label"],un=["id"];function dn(e,n,o,l,a,s){const c=A("el-icon"),f=A("close"),h=A("el-input"),t=A("el-button"),u=A("el-focus-trap"),y=A("el-overlay");return p(),B(Le,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=r=>e.$emit("vanish")),persisted:""},{default:m(()=>[q(v(y,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:m(()=>[g("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:d(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...r)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...r)),onMousedown:n[9]||(n[9]=(...r)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...r)),onMouseup:n[10]||(n[10]=(...r)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...r))},[v(u,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:m(()=>[g("div",{ref:"rootRef",class:d([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:W(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=F(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(p(),D("div",{key:0,ref:"headerRef",class:d(e.ns.e("header"))},[g("div",{class:d(e.ns.e("title"))},[e.iconComponent&&e.center?(p(),B(c,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:m(()=>[(p(),B(H(e.iconComponent)))]),_:1},8,["class"])):O("v-if",!0),g("span",null,P(e.title),1)],2),e.showClose?(p(),D("button",{key:0,type:"button",class:d(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=r=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=j(F(r=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[v(c,{class:d(e.ns.e("close"))},{default:m(()=>[v(f)]),_:1},8,["class"])],42,rn)):O("v-if",!0)],2)):O("v-if",!0),g("div",{id:e.contentId,class:d(e.ns.e("content"))},[g("div",{class:d(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(p(),B(c,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:m(()=>[(p(),B(H(e.iconComponent)))]),_:1},8,["class"])):O("v-if",!0),e.hasMessage?(p(),D("div",{key:1,class:d(e.ns.e("message"))},[Ae(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(p(),B(H(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(p(),B(H(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:m(()=>[G(P(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):O("v-if",!0)],2),q(g("div",{class:d(e.ns.e("input"))},[v(h,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=r=>e.inputValue=r),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:d({invalid:e.validateError}),onKeydown:j(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),g("div",{class:d(e.ns.e("errormsg")),style:W({visibility:e.editorErrorMessage?"visible":"hidden"})},P(e.editorErrorMessage),7)],2),[[X,e.showInput]])],10,un),g("div",{class:d(e.ns.e("btns"))},[e.showCancelButton?(p(),B(t,{key:0,loading:e.cancelButtonLoading,class:d([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=r=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=j(F(r=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:m(()=>[G(P(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):O("v-if",!0),q(v(t,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:d([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=r=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=j(F(r=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:m(()=>[G(P(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[X,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,ln)]),_:3},8,["z-index","overlay-class","mask"]),[[X,e.visible]])]),_:3})}var cn=Be(an,[["render",dn],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const U=new Map,fn=e=>{let n=document.body;return e.appendTo&&(fe(e.appendTo)&&(n=document.querySelector(e.appendTo)),ae(e.appendTo)&&(n=e.appendTo),ae(n)||(n=document.body)),n},pn=(e,n,o=null)=>{const l=v(cn,e,oe(e.message)||pe(e.message)?{default:oe(e.message)?e.message:()=>e.message}:null);return l.appContext=o,me(l,n),fn(e).appendChild(n.firstElementChild),l.component},mn=()=>document.createElement("div"),gn=(e,n)=>{const o=mn();e.onVanish=()=>{me(null,o),U.delete(a)},e.onAction=s=>{const c=U.get(a);let f;e.showInput?f={value:a.inputValue,action:s}:f=s,e.callback?e.callback(f,l.proxy):s==="cancel"||s==="close"?e.distinguishCancelAndClose&&s!=="cancel"?c.reject("close"):c.reject("cancel"):c.resolve(f)};const l=pn(e,o,n),a=l.proxy;for(const s in e)se(e,s)&&!se(a.$props,s)&&(a[s]=e[s]);return a.visible=!0,a};function R(e,n=null){if(!Oe)return Promise.reject();let o;return fe(e)||pe(e)?e={message:e}:o=e.callback,new Promise((l,a)=>{const s=gn(e,n??R._context);U.set(s,{options:e,callback:o,resolve:l,reject:a})})}const vn=["alert","confirm","prompt"],hn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};vn.forEach(e=>{R[e]=bn(e)});function bn(e){return(n,o,l,a)=>{let s="";return Re(o)?(l=o,s=""):Ve(o)?s="":s=o,R(Object.assign({title:s,message:n,type:"",...hn[e]},l,{boxType:e}),a)}}R.close=()=>{U.forEach((e,n)=>{n.doClose()}),U.clear()};R._context=null;const S=R;S.install=e=>{S._context=e._context,e.config.globalProperties.$msgbox=S,e.config.globalProperties.$messageBox=S,e.config.globalProperties.$alert=S.alert,e.config.globalProperties.$confirm=S.confirm,e.config.globalProperties.$prompt=S.prompt};const yn=S;const Cn=e=>(Ue("data-v-7aaf1058"),e=e(),Ne(),e),En={class:"image-slot"},wn={class:"flexa image-error"},Bn=Cn(()=>g("span",null,"图片加载失败",-1)),Sn={__name:"popup-image",props:{item:{type:Object,default:()=>{}}},setup(e){const n=e,o=()=>({width:"400px",height:"225px"});return(l,a)=>{const s=de,c=xe,f=Pe("m-loading");return p(),D("div",null,[v(c,{src:n.item.src,"preview-src-list":[n.item.src],"preview-teleported":!0,style:W(o()),loading:"lazy"},{placeholder:m(()=>[q(g("div",En,null,512),[[f,!0]])]),error:m(()=>[g("div",wn,[v(s,{size:40},{default:m(()=>[v(ze(De))]),_:1}),Bn])]),_:1},8,["src","preview-src-list","style"])])}}},Tn=ge(Sn,[["__scopeId","data-v-7aaf1058"]]);const In={class:"box"},Mn={__name:"index",setup(e){const{config:n}=Fe(),o=T(null);let l=L.layerGroup(),a=null;const s=()=>{a=null,h()},c=t=>{let u=null,y,r=document.createElement("div");return()=>(u?u.config.globalProperties.item=t:(u=je(Tn,{item:t}),u.directive("m-loading",qe),y=u.mount(r)),y.$el)},f=()=>{yn.confirm("确认删除该点位吗?","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{const t=`https://api.github.com/repos/${n.owner}/${n.repo}/contents/${data.image_name}`;fetch(t,{headers:n.headers}).then(u=>u.json()).then(({sha:u})=>fetch(t,{method:"DELETE",body:JSON.stringify({branch:n.branch,sha:u,message:"Delete a file"}),headers:n.headers})).then(()=>$fetch.delete("/point/del",{id:Props.item.id})).then(()=>{le({type:"success",message:"删除成功"}),s()}).catch(u=>{console.log(u),le.error(u.toString()||"删除失败")})}).catch(t=>{console.log(t)})},h=()=>{const{mapModule:t,activeIndex:u,getMap:y}=o.value,{tiles:r}=t[u];if(a!=r){const{map:K,rc:_}=y();$fetch.get("/all",{tiles:r}).then(C=>{l.clearLayers(),C.forEach(b=>{b.src=en(b.url_rules,b.image_name);const E=L.marker(_.unproject([b.lng,b.lat]),{contextmenu:!0,contextmenuInheritItems:!1,contextmenuItems:[{text:"删除此点位",index:0,callback:f}]}),M=L.popup({maxWidth:400,autoClose:!1}).setContent(c(b));E.bindPopup(M),l.addLayer(E)}),l.addTo(K)}),a=r}};return ce(()=>{He(()=>h())}),(t,u)=>(p(),D("div",In,[v(Ke,{ref_key:"mapRef",ref:o,showQuery:!0},null,512)]))}},Ln=ge(Mn,[["__scopeId","data-v-27ec98a8"]]);export{Ln as default};
