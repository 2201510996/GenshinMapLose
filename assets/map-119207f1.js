<<<<<<<< HEAD:assets/map-d6abed06.js
import{H as K,_ as U,P as O,Y as re,Q as se,B as v,s as $,C as ce,by as X,at as F,U as x,a6 as Y,a5 as q,aj as ue,ac as i,X as H,z,a8 as D,au as me,av as ve,x as de,V as M,a0 as V,a1 as oe,q as fe,I as j,w as G,$ as pe,a2 as J,J as ge,R as ae,u as le,Z as he,W as _e,a7 as ye,ab as be,af as Q,al as we,ag as Se,bn as ze,aa as ee,aX as xe,bE as ke,bF as Ee}from"./index-c98613e6.js";class Ce extends Error{constructor(r){super(r),this.name="ElementPlusError"}}function Pe(c,r){throw new Ce(`[${c}] ${r}`)}function mt(c,r){}const B=4,Le={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Me=({move:c,size:r,bar:n})=>({[n.size]:r,transform:`translate${n.axis}(${c}%)`}),ne=Symbol("scrollbarContextKey"),He=K({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Te="Thumb",Re=O({__name:"thumb",props:He,setup(c){const r=c,n=re(ne),a=se("scrollbar");n||Pe(Te,"can not inject scrollbar context");const u=v(),m=v(),l=v({}),b=v(!1);let s=!1,_=!1,S=de?document.onselectstart:null;const t=$(()=>Le[r.vertical?"vertical":"horizontal"]),k=$(()=>Me({size:r.size,move:r.move,bar:t.value})),f=$(()=>u.value[t.value.offset]**2/n.wrapElement[t.value.scrollSize]/r.ratio/m.value[t.value.offset]),E=o=>{var e;if(o.stopPropagation(),o.ctrlKey||[1,2].includes(o.button))return;(e=window.getSelection())==null||e.removeAllRanges(),g(o);const d=o.currentTarget;d&&(l.value[t.value.axis]=d[t.value.offset]-(o[t.value.client]-d.getBoundingClientRect()[t.value.direction]))},Z=o=>{if(!m.value||!u.value||!n.wrapElement)return;const e=Math.abs(o.target.getBoundingClientRect()[t.value.direction]-o[t.value.client]),d=m.value[t.value.offset]/2,P=(e-d)*100*f.value/u.value[t.value.offset];n.wrapElement[t.value.scroll]=P*n.wrapElement[t.value.scrollSize]/100},g=o=>{o.stopImmediatePropagation(),s=!0,document.addEventListener("mousemove",p),document.addEventListener("mouseup",y),S=document.onselectstart,document.onselectstart=()=>!1},p=o=>{if(!u.value||!m.value||s===!1)return;const e=l.value[t.value.axis];if(!e)return;const d=(u.value.getBoundingClientRect()[t.value.direction]-o[t.value.client])*-1,P=m.value[t.value.offset]-e,N=(d-P)*100*f.value/u.value[t.value.offset];n.wrapElement[t.value.scroll]=N*n.wrapElement[t.value.scrollSize]/100},y=()=>{s=!1,l.value[t.value.axis]=0,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",y),C(),_&&(b.value=!1)},h=()=>{_=!1,b.value=!!r.size},w=()=>{_=!0,b.value=s};ce(()=>{C(),document.removeEventListener("mouseup",y)});const C=()=>{document.onselectstart!==S&&(document.onselectstart=S)};return X(F(n,"scrollbarElement"),"mousemove",h),X(F(n,"scrollbarElement"),"mouseleave",w),(o,e)=>(x(),Y(ve,{name:z(a).b("fade"),persisted:""},{default:q(()=>[ue(i("div",{ref_key:"instance",ref:u,class:H([z(a).e("bar"),z(a).is(z(t).key)]),onMousedown:Z},[i("div",{ref_key:"thumb",ref:m,class:H(z(a).e("thumb")),style:D(z(k)),onMousedown:E},null,38)],34),[[me,o.always||b.value]])]),_:1},8,["name"]))}});var te=U(Re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const Be=K({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),$e=O({__name:"bar",props:Be,setup(c,{expose:r}){const n=c,a=v(0),u=v(0);return r({handleScroll:l=>{if(l){const b=l.offsetHeight-B,s=l.offsetWidth-B;u.value=l.scrollTop*100/b*n.ratioY,a.value=l.scrollLeft*100/s*n.ratioX}}}),(l,b)=>(x(),M(oe,null,[V(te,{move:a.value,ratio:l.ratioX,size:l.width,always:l.always},null,8,["move","ratio","size","always"]),V(te,{move:u.value,ratio:l.ratioY,size:l.height,vertical:"",always:l.always},null,8,["move","ratio","size","always"])],64))}});var Ne=U($e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const je=K({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:fe([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),Ze={scroll:({scrollTop:c,scrollLeft:r})=>[c,r].every(j)},We="ElScrollbar",Ie=O({name:We}),Oe=O({...Ie,props:je,emits:Ze,setup(c,{expose:r,emit:n}){const a=c,u=se("scrollbar");let m,l;const b=v(),s=v(),_=v(),S=v("0"),t=v("0"),k=v(),f=v(1),E=v(1),Z=$(()=>{const e={};return a.height&&(e.height=Q(a.height)),a.maxHeight&&(e.maxHeight=Q(a.maxHeight)),[a.wrapStyle,e]}),g=$(()=>[a.wrapClass,u.e("wrap"),{[u.em("wrap","hidden-default")]:!a.native}]),p=$(()=>[u.e("view"),a.viewClass]),y=()=>{var e;s.value&&((e=k.value)==null||e.handleScroll(s.value),n("scroll",{scrollTop:s.value.scrollTop,scrollLeft:s.value.scrollLeft}))};function h(e,d){we(e)?s.value.scrollTo(e):j(e)&&j(d)&&s.value.scrollTo(e,d)}const w=e=>{j(e)&&(s.value.scrollTop=e)},C=e=>{j(e)&&(s.value.scrollLeft=e)},o=()=>{if(!s.value)return;const e=s.value.offsetHeight-B,d=s.value.offsetWidth-B,P=e**2/s.value.scrollHeight,N=d**2/s.value.scrollWidth,W=Math.max(P,a.minSize),I=Math.max(N,a.minSize);f.value=P/(e-P)/(W/(e-W)),E.value=N/(d-N)/(I/(d-I)),t.value=W+B<e?`${W}px`:"",S.value=I+B<d?`${I}px`:""};return G(()=>a.noresize,e=>{e?(m==null||m(),l==null||l()):({stop:m}=pe(_,o),l=X("resize",o))},{immediate:!0}),G(()=>[a.maxHeight,a.height],()=>{a.native||J(()=>{var e;o(),s.value&&((e=k.value)==null||e.handleScroll(s.value))})}),ge(ne,ae({scrollbarElement:b,wrapElement:s})),le(()=>{a.native||J(()=>{o()})}),he(()=>o()),r({wrapRef:s,update:o,scrollTo:h,setScrollTop:w,setScrollLeft:C,handleScroll:y}),(e,d)=>(x(),M("div",{ref_key:"scrollbarRef",ref:b,class:H(z(u).b())},[i("div",{ref_key:"wrapRef",ref:s,class:H(z(g)),style:D(z(Z)),onScroll:y},[(x(),Y(ye(e.tag),{ref_key:"resizeRef",ref:_,class:H(z(p)),style:D(e.viewStyle)},{default:q(()=>[_e(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?be("v-if",!0):(x(),Y(Ne,{key:0,ref_key:"barRef",ref:k,height:t.value,width:S.value,always:e.always,"ratio-x":E.value,"ratio-y":f.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Ae=U(Oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Xe=Se(Ae);const ie="/map-images/arrow.png",Ye="/map-images/map_icon.png";const A=c=>(ke("data-v-bd7faee1"),c=c(),Ee(),c),De={class:"map_control"},Ve={key:0,class:"open"},Ke={class:"head"},Ue={class:"img"},qe=["src"],Fe={class:"title"},Ge={class:"open_content"},Je=["onClick"],Qe={class:"img"},et=["src"],tt=["src"],st={class:"title"},ot=A(()=>i("div",{class:"arrow_bg"},[i("img",{src:ie,alt:""})],-1)),at=[ot],lt=A(()=>i("div",{class:"map_icon"},[i("img",{src:Ye,alt:""})],-1)),nt=A(()=>i("div",{class:"arrow_bg"},[i("img",{src:ie,alt:""})],-1)),it=[lt,nt],rt=A(()=>i("div",{id:"map"},null,-1)),T=2,R=7,ct={__name:"map",props:{mini:{type:Boolean,default:!1},marker:{type:Boolean,default:!1}},setup(c,{expose:r}){const n=c,a=v(!1);let u=v(null);const m=v(0),l=(g,p)=>{m.value=p,a.value=!1,E()};le(()=>{E()});const s=[14500,13e3],_=ae([{title:"提瓦特大陆",tiles:"tiles_tivat",img:"tiwate.png",name:"tiwate",imgSize:s,minZoom:T,maxZoom:R},{title:"枫丹",tiles:"tiles_tivat",img:"fd.png",name:"fd",centerPosi:[3434,1578],imgSize:s,minZoom:T,maxZoom:R},{title:"蒙德",tiles:"tiles_tivat",img:"md.png",name:"md",centerPosi:[8821,2851],imgSize:s,minZoom:T,maxZoom:R},{title:"璃月",tiles:"tiles_tivat",img:"ly.png",name:"ly",centerPosi:[7634,5716],imgSize:s,minZoom:T,maxZoom:R},{title:"稻妻",tiles:"tiles_tivat",img:"dq.png",name:"dq",centerPosi:[12413,8215],imgSize:s,minZoom:T,maxZoom:R},{title:"须弥",tiles:"tiles_tivat",img:"xm.png",name:"xm",centerPosi:[5192,5518],imgSize:s,minZoom:T,maxZoom:R},{title:"渊下宫",tiles:"tiles_yxg",img:"yxg.png",name:"yxg",imgSize:[3277,3277],minZoom:2,maxZoom:5},{title:"层岩巨渊·地下矿区",tiles:"tiles_cyjy",img:"cyjy.png",name:"cyjy",imgSize:[4096,4096],minZoom:3,maxZoom:5},{title:"琉形蜃境",tiles:"tiles_lxsj",img:"lxsj.png",name:"lxsj",imgSize:[7900,7900],minZoom:2,maxZoom:6}]);let S,t,k,f;function E(){u.value=null;const g=_[m.value],p=g.imgSize,y=g.minZoom,h=g.maxZoom;if(!t){t=L.map("map",{crs:L.CRS.Simple,zoomControl:!1,zoomSnap:.5});let w=null;t.on("click",function(C){const o=f.project(C.latlng);console.log("["+Math.floor(o.x)+","+Math.floor(o.y)+"]"),n.marker&&(w?w.setLatLng(f.unproject(o)):w=L.marker(f.unproject(o)).addTo(t),u.value={x:Math.floor(o.x),y:Math.floor(o.y)})})}t.setMinZoom(y),t.setMaxZoom(h),f=new L.RasterCoords(t,p),g.centerPosi?t.setView(f.unproject(g.centerPosi),h-1):t.setView(f.unproject([p[0]/2,p[1]/2]),y),k!=g.tiles&&(S&&t.removeLayer(S),S=L.tileLayer(`./${g.tiles}/{z}/{x}/{y}.png`,{noWrap:!0,minZoom:y,bounds:f.getMaxBounds(),maxNativeZoom:f.zoomLevel()}).addTo(t),k=g.tiles)}return r({propCoords:u,activeIndex:m,mapModule:_,getMap:()=>({rc:f,map:t})}),(g,p)=>{const y=Xe;return x(),M("div",{class:H([{mini:!!n.mini},"content"])},[i("div",De,[a.value?(x(),M("div",Ve,[i("div",Ke,[i("div",Ue,[i("img",{src:`/map-images/map-img-head/${_[m.value].img}`,alt:""},null,8,qe)]),i("div",Fe,ee(_[m.value].title),1)]),V(y,{height:n.mini?"350px":null},{default:q(()=>[i("div",Ge,[(x(!0),M(oe,null,xe(_,(h,w)=>(x(),M("div",{class:H(["item",m.value==w?"active":""]),key:w,onClick:C=>l(h,w)},[i("div",Qe,[i("img",{class:"info",src:`/map-images/map-img-list/${h.img}`,alt:""},null,8,et),i("img",{class:"active",src:`/map-images/map-img-active/${h.img}`,alt:""},null,8,tt)]),i("div",st,ee(h.title),1)],10,Je))),128))])]),_:1},8,["height"]),i("div",{class:"on_open",onClick:p[0]||(p[0]=h=>a.value=!1)},at)])):(x(),M("div",{key:1,class:"no_open",onClick:p[1]||(p[1]=h=>a.value=!0)},it))]),rt],2)}}},vt=ze(ct,[["__scopeId","data-v-bd7faee1"]]);export{Xe as E,mt as d,vt as m,Pe as t};
========
import{H as K,_ as U,P as O,Y as re,Q as se,B as v,s as $,C as ce,by as X,at as F,U as x,a6 as Y,a5 as q,aj as ue,ac as i,X as H,z,a8 as D,au as me,av as ve,x as de,V as M,a0 as V,a1 as oe,q as fe,I as j,w as G,$ as pe,a2 as J,J as ge,R as ae,u as le,Z as he,W as _e,a7 as ye,ab as be,af as Q,al as we,ag as Se,bn as ze,aa as ee,aX as xe,bE as ke,bF as Ee}from"./index-ead3d7bd.js";class Ce extends Error{constructor(r){super(r),this.name="ElementPlusError"}}function Pe(c,r){throw new Ce(`[${c}] ${r}`)}function mt(c,r){}const B=4,Le={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Me=({move:c,size:r,bar:n})=>({[n.size]:r,transform:`translate${n.axis}(${c}%)`}),ne=Symbol("scrollbarContextKey"),He=K({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Te="Thumb",Re=O({__name:"thumb",props:He,setup(c){const r=c,n=re(ne),a=se("scrollbar");n||Pe(Te,"can not inject scrollbar context");const u=v(),m=v(),l=v({}),b=v(!1);let s=!1,_=!1,S=de?document.onselectstart:null;const t=$(()=>Le[r.vertical?"vertical":"horizontal"]),k=$(()=>Me({size:r.size,move:r.move,bar:t.value})),f=$(()=>u.value[t.value.offset]**2/n.wrapElement[t.value.scrollSize]/r.ratio/m.value[t.value.offset]),E=o=>{var e;if(o.stopPropagation(),o.ctrlKey||[1,2].includes(o.button))return;(e=window.getSelection())==null||e.removeAllRanges(),g(o);const d=o.currentTarget;d&&(l.value[t.value.axis]=d[t.value.offset]-(o[t.value.client]-d.getBoundingClientRect()[t.value.direction]))},Z=o=>{if(!m.value||!u.value||!n.wrapElement)return;const e=Math.abs(o.target.getBoundingClientRect()[t.value.direction]-o[t.value.client]),d=m.value[t.value.offset]/2,P=(e-d)*100*f.value/u.value[t.value.offset];n.wrapElement[t.value.scroll]=P*n.wrapElement[t.value.scrollSize]/100},g=o=>{o.stopImmediatePropagation(),s=!0,document.addEventListener("mousemove",p),document.addEventListener("mouseup",y),S=document.onselectstart,document.onselectstart=()=>!1},p=o=>{if(!u.value||!m.value||s===!1)return;const e=l.value[t.value.axis];if(!e)return;const d=(u.value.getBoundingClientRect()[t.value.direction]-o[t.value.client])*-1,P=m.value[t.value.offset]-e,N=(d-P)*100*f.value/u.value[t.value.offset];n.wrapElement[t.value.scroll]=N*n.wrapElement[t.value.scrollSize]/100},y=()=>{s=!1,l.value[t.value.axis]=0,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",y),C(),_&&(b.value=!1)},h=()=>{_=!1,b.value=!!r.size},w=()=>{_=!0,b.value=s};ce(()=>{C(),document.removeEventListener("mouseup",y)});const C=()=>{document.onselectstart!==S&&(document.onselectstart=S)};return X(F(n,"scrollbarElement"),"mousemove",h),X(F(n,"scrollbarElement"),"mouseleave",w),(o,e)=>(x(),Y(ve,{name:z(a).b("fade"),persisted:""},{default:q(()=>[ue(i("div",{ref_key:"instance",ref:u,class:H([z(a).e("bar"),z(a).is(z(t).key)]),onMousedown:Z},[i("div",{ref_key:"thumb",ref:m,class:H(z(a).e("thumb")),style:D(z(k)),onMousedown:E},null,38)],34),[[me,o.always||b.value]])]),_:1},8,["name"]))}});var te=U(Re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const Be=K({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),$e=O({__name:"bar",props:Be,setup(c,{expose:r}){const n=c,a=v(0),u=v(0);return r({handleScroll:l=>{if(l){const b=l.offsetHeight-B,s=l.offsetWidth-B;u.value=l.scrollTop*100/b*n.ratioY,a.value=l.scrollLeft*100/s*n.ratioX}}}),(l,b)=>(x(),M(oe,null,[V(te,{move:a.value,ratio:l.ratioX,size:l.width,always:l.always},null,8,["move","ratio","size","always"]),V(te,{move:u.value,ratio:l.ratioY,size:l.height,vertical:"",always:l.always},null,8,["move","ratio","size","always"])],64))}});var Ne=U($e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const je=K({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:fe([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),Ze={scroll:({scrollTop:c,scrollLeft:r})=>[c,r].every(j)},We="ElScrollbar",Ie=O({name:We}),Oe=O({...Ie,props:je,emits:Ze,setup(c,{expose:r,emit:n}){const a=c,u=se("scrollbar");let m,l;const b=v(),s=v(),_=v(),S=v("0"),t=v("0"),k=v(),f=v(1),E=v(1),Z=$(()=>{const e={};return a.height&&(e.height=Q(a.height)),a.maxHeight&&(e.maxHeight=Q(a.maxHeight)),[a.wrapStyle,e]}),g=$(()=>[a.wrapClass,u.e("wrap"),{[u.em("wrap","hidden-default")]:!a.native}]),p=$(()=>[u.e("view"),a.viewClass]),y=()=>{var e;s.value&&((e=k.value)==null||e.handleScroll(s.value),n("scroll",{scrollTop:s.value.scrollTop,scrollLeft:s.value.scrollLeft}))};function h(e,d){we(e)?s.value.scrollTo(e):j(e)&&j(d)&&s.value.scrollTo(e,d)}const w=e=>{j(e)&&(s.value.scrollTop=e)},C=e=>{j(e)&&(s.value.scrollLeft=e)},o=()=>{if(!s.value)return;const e=s.value.offsetHeight-B,d=s.value.offsetWidth-B,P=e**2/s.value.scrollHeight,N=d**2/s.value.scrollWidth,W=Math.max(P,a.minSize),I=Math.max(N,a.minSize);f.value=P/(e-P)/(W/(e-W)),E.value=N/(d-N)/(I/(d-I)),t.value=W+B<e?`${W}px`:"",S.value=I+B<d?`${I}px`:""};return G(()=>a.noresize,e=>{e?(m==null||m(),l==null||l()):({stop:m}=pe(_,o),l=X("resize",o))},{immediate:!0}),G(()=>[a.maxHeight,a.height],()=>{a.native||J(()=>{var e;o(),s.value&&((e=k.value)==null||e.handleScroll(s.value))})}),ge(ne,ae({scrollbarElement:b,wrapElement:s})),le(()=>{a.native||J(()=>{o()})}),he(()=>o()),r({wrapRef:s,update:o,scrollTo:h,setScrollTop:w,setScrollLeft:C,handleScroll:y}),(e,d)=>(x(),M("div",{ref_key:"scrollbarRef",ref:b,class:H(z(u).b())},[i("div",{ref_key:"wrapRef",ref:s,class:H(z(g)),style:D(z(Z)),onScroll:y},[(x(),Y(ye(e.tag),{ref_key:"resizeRef",ref:_,class:H(z(p)),style:D(e.viewStyle)},{default:q(()=>[_e(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?be("v-if",!0):(x(),Y(Ne,{key:0,ref_key:"barRef",ref:k,height:t.value,width:S.value,always:e.always,"ratio-x":E.value,"ratio-y":f.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Ae=U(Oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Xe=Se(Ae);const ie="/map-images/arrow.png",Ye="/map-images/map_icon.png";const A=c=>(ke("data-v-bd7faee1"),c=c(),Ee(),c),De={class:"map_control"},Ve={key:0,class:"open"},Ke={class:"head"},Ue={class:"img"},qe=["src"],Fe={class:"title"},Ge={class:"open_content"},Je=["onClick"],Qe={class:"img"},et=["src"],tt=["src"],st={class:"title"},ot=A(()=>i("div",{class:"arrow_bg"},[i("img",{src:ie,alt:""})],-1)),at=[ot],lt=A(()=>i("div",{class:"map_icon"},[i("img",{src:Ye,alt:""})],-1)),nt=A(()=>i("div",{class:"arrow_bg"},[i("img",{src:ie,alt:""})],-1)),it=[lt,nt],rt=A(()=>i("div",{id:"map"},null,-1)),T=2,R=7,ct={__name:"map",props:{mini:{type:Boolean,default:!1},marker:{type:Boolean,default:!1}},setup(c,{expose:r}){const n=c,a=v(!1);let u=v(null);const m=v(0),l=(g,p)=>{m.value=p,a.value=!1,E()};le(()=>{E()});const s=[14500,13e3],_=ae([{title:"提瓦特大陆",tiles:"tiles_tivat",img:"tiwate.png",name:"tiwate",imgSize:s,minZoom:T,maxZoom:R},{title:"枫丹",tiles:"tiles_tivat",img:"fd.png",name:"fd",centerPosi:[3434,1578],imgSize:s,minZoom:T,maxZoom:R},{title:"蒙德",tiles:"tiles_tivat",img:"md.png",name:"md",centerPosi:[8821,2851],imgSize:s,minZoom:T,maxZoom:R},{title:"璃月",tiles:"tiles_tivat",img:"ly.png",name:"ly",centerPosi:[7634,5716],imgSize:s,minZoom:T,maxZoom:R},{title:"稻妻",tiles:"tiles_tivat",img:"dq.png",name:"dq",centerPosi:[12413,8215],imgSize:s,minZoom:T,maxZoom:R},{title:"须弥",tiles:"tiles_tivat",img:"xm.png",name:"xm",centerPosi:[5192,5518],imgSize:s,minZoom:T,maxZoom:R},{title:"渊下宫",tiles:"tiles_yxg",img:"yxg.png",name:"yxg",imgSize:[3277,3277],minZoom:2,maxZoom:5},{title:"层岩巨渊·地下矿区",tiles:"tiles_cyjy",img:"cyjy.png",name:"cyjy",imgSize:[4096,4096],minZoom:3,maxZoom:5},{title:"琉形蜃境",tiles:"tiles_lxsj",img:"lxsj.png",name:"lxsj",imgSize:[7900,7900],minZoom:2,maxZoom:6}]);let S,t,k,f;function E(){u.value=null;const g=_[m.value],p=g.imgSize,y=g.minZoom,h=g.maxZoom;if(!t){t=L.map("map",{crs:L.CRS.Simple,zoomControl:!1,zoomSnap:.5});let w=null;t.on("click",function(C){const o=f.project(C.latlng);console.log("["+Math.floor(o.x)+","+Math.floor(o.y)+"]"),n.marker&&(w?w.setLatLng(f.unproject(o)):w=L.marker(f.unproject(o)).addTo(t),u.value={x:Math.floor(o.x),y:Math.floor(o.y)})})}t.setMinZoom(y),t.setMaxZoom(h),f=new L.RasterCoords(t,p),g.centerPosi?t.setView(f.unproject(g.centerPosi),h-1):t.setView(f.unproject([p[0]/2,p[1]/2]),y),k!=g.tiles&&(S&&t.removeLayer(S),S=L.tileLayer(`./${g.tiles}/{z}/{x}/{y}.png`,{noWrap:!0,minZoom:y,bounds:f.getMaxBounds(),maxNativeZoom:f.zoomLevel()}).addTo(t),k=g.tiles)}return r({propCoords:u,activeIndex:m,mapModule:_,getMap:()=>({rc:f,map:t})}),(g,p)=>{const y=Xe;return x(),M("div",{class:H([{mini:!!n.mini},"content"])},[i("div",De,[a.value?(x(),M("div",Ve,[i("div",Ke,[i("div",Ue,[i("img",{src:`/map-images/map-img-head/${_[m.value].img}`,alt:""},null,8,qe)]),i("div",Fe,ee(_[m.value].title),1)]),V(y,{height:n.mini?"350px":null},{default:q(()=>[i("div",Ge,[(x(!0),M(oe,null,xe(_,(h,w)=>(x(),M("div",{class:H(["item",m.value==w?"active":""]),key:w,onClick:C=>l(h,w)},[i("div",Qe,[i("img",{class:"info",src:`/map-images/map-img-list/${h.img}`,alt:""},null,8,et),i("img",{class:"active",src:`/map-images/map-img-active/${h.img}`,alt:""},null,8,tt)]),i("div",st,ee(h.title),1)],10,Je))),128))])]),_:1},8,["height"]),i("div",{class:"on_open",onClick:p[0]||(p[0]=h=>a.value=!1)},at)])):(x(),M("div",{key:1,class:"no_open",onClick:p[1]||(p[1]=h=>a.value=!0)},it))]),rt],2)}}},vt=ze(ct,[["__scopeId","data-v-bd7faee1"]]);export{Xe as E,mt as d,vt as m,Pe as t};
>>>>>>>> 44eaf5a1ed3389968cf2f45bef56969a8b72cf4c:assets/map-119207f1.js
