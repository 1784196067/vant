import{c as L,e as S,i}from"./use-translate.5cf29aa7.js";import{n as o,t as j,u,w as I}from"./with-install.28bb645f.js";import{r as y,u as B}from"./use-route.1ad21ca2.js";import{I as m}from"./index.71a5f3d3.js";import{z as D,e as l}from"./vue-libs.cab43f37.js";const[V,t]=L("cell"),z={icon:String,size:String,title:o,value:o,label:o,center:Boolean,isLink:Boolean,border:j,required:Boolean,iconPrefix:String,valueClass:u,labelClass:u,titleClass:u,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},q=S({},z,y);var N=D({name:V,props:q,setup(e,{slots:n}){const h=B(),v=()=>{if(n.label||i(e.label))return l("div",{class:[t("label"),e.labelClass]},[n.label?n.label():e.label])},w=()=>{if(n.title||i(e.title))return l("div",{class:[t("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():l("span",null,[e.title]),v()])},C=()=>{const a=n.value||n.default;if(a||i(e.value)){const r=n.title||i(e.title);return l("div",{class:[t("value",{alone:!r}),e.valueClass]},[a?a():l("span",null,[e.value])])}},P=()=>{if(n.icon)return n.icon();if(e.icon)return l(m,{name:e.icon,class:t("left-icon"),classPrefix:e.iconPrefix},null)},g=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const a=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return l(m,{name:a,class:t("right-icon")},null)}};return()=>{var f,b;const{size:a,center:s,border:r,isLink:k,required:x}=e,c=(f=e.clickable)!=null?f:k,d={center:s,required:x,clickable:c,borderless:!r};return a&&(d[a]=!!a),l("div",{class:t(d),role:c?"button":void 0,tabindex:c?0:void 0,onClick:h},[P(),w(),C(),g(),(b=n.extra)==null?void 0:b.call(n)])}}});const E=I(N);export{E as C,z as c};
