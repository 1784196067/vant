import{c as j,h as d,i as B,d as E}from"./use-translate.5cf29aa7.js";import{n as l,t as y,m as L,w as $}from"./with-install.28bb645f.js";import{I as C}from"./index.71a5f3d3.js";import{z as D,C as u,O as U,B as N,x as R,I as k,e as a,j as F,U as O,Q as z}from"./vue-libs.cab43f37.js";const[Q,o]=j("image"),V={src:String,alt:String,fit:String,round:Boolean,width:l,height:l,radius:l,lazyLoad:Boolean,iconSize:l,showError:y,errorIcon:L("photo-fail"),iconPrefix:String,showLoading:y,loadingIcon:L("photo")};var _=D({name:Q,props:V,emits:["load","error"],setup(r,{emit:f,slots:n}){const i=u(!1),t=u(!0),c=u(),{$Lazyload:s}=U().proxy,P=N(()=>{const e={width:d(r.width),height:d(r.height)};return B(r.radius)&&(e.overflow="hidden",e.borderRadius=d(r.radius)),e});R(()=>r.src,()=>{i.value=!1,t.value=!0});const m=e=>{t.value=!1,f("load",e)},g=e=>{i.value=!0,t.value=!1,f("error",e)},h=(e,S,I)=>I?I():a(C,{name:e,size:r.iconSize,class:S,classPrefix:r.iconPrefix},null),b=()=>{if(t.value&&r.showLoading)return a("div",{class:o("loading")},[h(r.loadingIcon,o("loading-icon"),n.loading)]);if(i.value&&r.showError)return a("div",{class:o("error")},[h(r.errorIcon,o("error-icon"),n.error)])},x=()=>{if(i.value||!r.src)return;const e={alt:r.alt,class:o("img"),style:{objectFit:r.fit}};return r.lazyLoad?F(a("img",z({ref:c},e),null),[[O("lazy"),r.src]]):a("img",z({src:r.src,onLoad:m,onError:g},e),null)},v=({el:e})=>{e===c.value&&t.value&&m()},w=({el:e})=>{e===c.value&&!i.value&&g()};return s&&E&&(s.$on("loaded",v),s.$on("error",w),k(()=>{s.$off("loaded",v),s.$off("error",w)})),()=>{var e;return a("div",{class:o({round:r.round}),style:P.value},[x(),b(),(e=n.default)==null?void 0:e.call(n)])}}});const J=$(_);export{J as I};
