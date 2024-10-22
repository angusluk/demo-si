import{r as g,a2 as V,w as K,c as q,a5 as N,H as Q,J as H,g as U,M as B,u as w,a as F,Q as G,ad as J,C as Y,ai as Z,ah as ee,aD as ne,ay as ae,b3 as te,as as ie,b4 as P,aq as h,b5 as E,b6 as le,b7 as ce,b8 as se,b9 as oe}from"./index-Dnqa_fZV.js";import{u as O,d as re,I as D}from"./useTranslation-CPAkDPXn.js";import{a as de,W as he}from"./button-CgOvMIeJ.js";var ge=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],L=g.forwardRef(function(e,n){var l,a=e.prefixCls,s=a===void 0?"rc-switch":a,o=e.className,d=e.checked,t=e.defaultChecked,i=e.disabled,c=e.loadingIcon,u=e.checkedChildren,p=e.unCheckedChildren,v=e.onClick,$=e.onChange,f=e.onKeyDown,k=V(e,ge),y=O(!1,{value:d,defaultValue:t}),m=K(y,2),r=m[0],I=m[1];function M(S,j){var x=r;return i||(x=S,I(x),$==null||$(x,j)),x}function _(S){S.which===H.LEFT?M(!1,S):S.which===H.RIGHT&&M(!0,S),f==null||f(S)}function b(S){var j=M(!r,S);v==null||v(j,S)}var z=q(s,o,(l={},N(l,"".concat(s,"-checked"),r),N(l,"".concat(s,"-disabled"),i),l));return g.createElement("button",Q({},k,{type:"button",role:"switch","aria-checked":r,disabled:i,className:z,ref:n,onKeyDown:_,onClick:b}),c,g.createElement("span",{className:"".concat(s,"-inner")},g.createElement("span",{className:"".concat(s,"-inner-checked")},u),g.createElement("span",{className:"".concat(s,"-inner-unchecked")},p)))});L.displayName="Switch";const ue=e=>{const{componentCls:n,trackHeightSM:l,trackPadding:a,trackMinWidthSM:s,innerMinMarginSM:o,innerMaxMarginSM:d,handleSizeSM:t,calc:i}=e,c=`${n}-inner`,u=w(i(t).add(i(a).mul(2)).equal()),p=w(i(d).mul(2).equal());return{[n]:{[`&${n}-small`]:{minWidth:s,height:l,lineHeight:w(l),[`${n}-inner`]:{paddingInlineStart:d,paddingInlineEnd:o,[`${c}-checked, ${c}-unchecked`]:{minHeight:l},[`${c}-checked`]:{marginInlineStart:`calc(-100% + ${u} - ${p})`,marginInlineEnd:`calc(100% - ${u} + ${p})`},[`${c}-unchecked`]:{marginTop:i(l).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:t,height:t},[`${n}-loading-icon`]:{top:i(i(t).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:o,paddingInlineEnd:d,[`${c}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${c}-unchecked`]:{marginInlineStart:`calc(100% - ${u} + ${p})`,marginInlineEnd:`calc(-100% + ${u} - ${p})`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${w(i(t).add(a).equal())})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${c}`]:{[`${c}-unchecked`]:{marginInlineStart:i(e.marginXXS).div(2).equal(),marginInlineEnd:i(e.marginXXS).mul(-1).div(2).equal()}},[`&${n}-checked ${c}`]:{[`${c}-checked`]:{marginInlineStart:i(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:i(e.marginXXS).div(2).equal()}}}}}}},me=e=>{const{componentCls:n,handleSize:l,calc:a}=e;return{[n]:{[`${n}-loading-icon${e.iconCls}`]:{position:"relative",top:a(a(l).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:e.switchColor}}}},pe=e=>{const{componentCls:n,trackPadding:l,handleBg:a,handleShadow:s,handleSize:o,calc:d}=e,t=`${n}-handle`;return{[n]:{[t]:{position:"absolute",top:l,insetInlineStart:l,width:o,height:o,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:a,borderRadius:d(o).div(2).equal(),boxShadow:s,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${t}`]:{insetInlineStart:`calc(100% - ${w(d(o).add(l).equal())})`},[`&:not(${n}-disabled):active`]:{[`${t}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${t}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},Se=e=>{const{componentCls:n,trackHeight:l,trackPadding:a,innerMinMargin:s,innerMaxMargin:o,handleSize:d,calc:t}=e,i=`${n}-inner`,c=w(t(d).add(t(a).mul(2)).equal()),u=w(t(o).mul(2).equal());return{[n]:{[i]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:o,paddingInlineEnd:s,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${i}-checked, ${i}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:l},[`${i}-checked`]:{marginInlineStart:`calc(-100% + ${c} - ${u})`,marginInlineEnd:`calc(100% - ${c} + ${u})`},[`${i}-unchecked`]:{marginTop:t(l).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${i}`]:{paddingInlineStart:s,paddingInlineEnd:o,[`${i}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${i}-unchecked`]:{marginInlineStart:`calc(100% - ${c} + ${u})`,marginInlineEnd:`calc(-100% + ${c} - ${u})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${i}`]:{[`${i}-unchecked`]:{marginInlineStart:t(a).mul(2).equal(),marginInlineEnd:t(a).mul(-1).mul(2).equal()}},[`&${n}-checked ${i}`]:{[`${i}-checked`]:{marginInlineStart:t(a).mul(-1).mul(2).equal(),marginInlineEnd:t(a).mul(2).equal()}}}}}},Ce=e=>{const{componentCls:n,trackHeight:l,trackMinWidth:a}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},F(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:a,height:l,lineHeight:w(l),verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:e.colorTextTertiary}}),G(e)),{[`&${n}-checked`]:{background:e.switchColor,[`&:hover:not(${n}-disabled)`]:{background:e.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},$e=e=>{const{fontSize:n,lineHeight:l,controlHeight:a,colorWhite:s}=e,o=n*l,d=a/2,t=2,i=o-t*2,c=d-t*2;return{trackHeight:o,trackHeightSM:d,trackMinWidth:i*2+t*4,trackMinWidthSM:c*2+t*2,trackPadding:t,handleBg:s,handleSize:i,handleSizeSM:c,handleShadow:`0 2px 4px 0 ${new J("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:i/2,innerMaxMargin:i+t+t*2,innerMinMarginSM:c/2,innerMaxMarginSM:c+t+t*2}},be=U("Switch",e=>{const n=B(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[Ce(n),Se(n),pe(n),me(n),ue(n)]},$e);var ve=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(l[a[s]]=e[a[s]]);return l};const Ie=g.forwardRef((e,n)=>{const{prefixCls:l,size:a,disabled:s,loading:o,className:d,rootClassName:t,style:i,checked:c,value:u,defaultChecked:p,defaultValue:v,onChange:$}=e,f=ve(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[k,y]=O(!1,{value:c??u,defaultValue:p??v}),{getPrefixCls:m,direction:r,switch:I}=g.useContext(Y),M=g.useContext(Z),_=(s??M)||o,b=m("switch",l),z=g.createElement("div",{className:`${b}-handle`},o&&g.createElement(ee,{className:`${b}-loading-icon`})),[S,j,x]=be(b),R=de(a),W=q(I==null?void 0:I.className,{[`${b}-small`]:R==="small",[`${b}-loading`]:o,[`${b}-rtl`]:r==="rtl"},d,t,j,x),A=Object.assign(Object.assign({},I==null?void 0:I.style),i),X=function(){y(arguments.length<=0?void 0:arguments[0]),$==null||$.apply(void 0,arguments)};return S(g.createElement(he,{component:"Switch"},g.createElement(L,Object.assign({},f,{checked:k,onChange:X,prefixCls:b,className:W,style:A,disabled:_,ref:n,loadingIcon:z}))))}),T=Ie;T.__ANT_SWITCH=!0;const we="1.0.0",fe="_loginPage_d1ezj_1",xe="_content_d1ezj_9",ke="_top_d1ezj_25",ye="_github_d1ezj_30",Me="_text_d1ezj_48",je="_language_d1ezj_54",Ee="_title_d1ezj_57",_e="_logo_d1ezj_64",ze="_item_d1ezj_86",Ne="_btn_d1ezj_89",He="_version_d1ezj_109",C={loginPage:fe,content:xe,top:ke,github:ye,text:Me,language:je,title:Ee,logo:_e,item:ze,btn:Ne,version:He},Oe=()=>{const e=ne(),{t:n,i18n:l}=re(),a=ae(),[s,o]=te.useMessage(),d=ie(m=>m.global.options),[t,i]=g.useState(""),[c,u]=g.useState(""),[p,v]=g.useState(""),$=m=>{let r=m.target.value;E.test(r)?(v("error"),r=r.replace(E,"")):v(""),i(r)},f=m=>{let r=m.target.value;E.test(r)&&(r=r.replace(E,"")),u(r)},k=g.useCallback(m=>{const r=m?"zh":"en";a(P({language:r})),l.changeLanguage(r)},[l]),y=()=>{if(!t)return s.error("please enter channel name!");if(!c)return s.error("please enter user name!");a(P({channel:t})),a(le({userName:c,userId:ce()}));const m=se(window.location.href);a(oe(m)),e("/home")};return h.jsxs("div",{className:C.loginPage,children:[o,h.jsxs("section",{className:C.content,children:[h.jsxs("section",{className:C.top,children:[h.jsx("span",{className:C.github}),h.jsx("span",{className:C.language,children:h.jsx(T,{size:"default",checkedChildren:"中文",unCheckedChildren:"English",value:d.language==="zh",onChange:k})})]}),h.jsxs("div",{className:C.title,children:[h.jsx("div",{className:C.logo,children:h.jsx("img",{src:"https://www.eventx.io/hs-fs/hubfs/EventX%20Logo.webp?width=3509&name=EventX%20Logo.webp",alt:""})}),h.jsx("div",{className:C.text,children:n("login.title")})]}),h.jsx("div",{className:C.item,children:h.jsx(D,{status:p,allowClear:!0,placeholder:"please enter channel name",onChange:$,value:t})}),h.jsx("div",{className:C.item,children:h.jsx(D,{allowClear:!0,placeholder:"please enter user name",onChange:f,value:c})}),h.jsx("div",{className:C.btn,onClick:y,children:n("login.join")}),h.jsxs("div",{className:C.version,children:["Version ",we]})]})]})};export{Oe as default};
