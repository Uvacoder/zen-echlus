import{b as e,S as n,i as t,s as i,R as a,c as s,m as o,n as d,t as _,a as r,d as l,H as p}from"./vendor.9bedc70f.js";let m;const u={},c=function(e,n){if(!n||0===n.length)return e();if(void 0===m){const e=document.createElement("link").relList;m=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(n.map((e=>{if((e=`/${e}`)in u)return;u[e]=!0;const n=e.endsWith(".css"),t=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const i=document.createElement("link");return i.rel=n?"stylesheet":m,n||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),n?new Promise(((e,n)=>{i.addEventListener("load",e),i.addEventListener("error",n)})):void 0}))).then((()=>e()))},h={root:!0,children:[{isPage:!0,path:"/:slugnya",id:"__slugnya",component:()=>c((()=>import("./[slugnya].b46f94d5.js")),["assets/[slugnya].b46f94d5.js","assets/[slugnya].aea8b9a7.css","assets/vendor.9bedc70f.js","assets/index.1d9fdc2d.js","assets/api.690bb50b.js"]).then((e=>e.default))},{isDir:!0,children:[{isDir:!0,ext:"",children:[{isPage:!0,path:"/admin/edit/:slugnya",id:"_admin_edit__slugnya",component:()=>c((()=>import("./[slugnya].15847ad7.js")),["assets/[slugnya].15847ad7.js","assets/[slugnya].7c06ee44.css","assets/vendor.9bedc70f.js","assets/index.1d9fdc2d.js","assets/index.92fc7d2c.js","assets/api.690bb50b.js"]).then((e=>e.default))}],path:"/admin/edit"},{isIndex:!0,isPage:!0,path:"/admin/index",id:"_admin_index",component:()=>c((()=>import("./index.b190bcc5.js")),["assets/index.b190bcc5.js","assets/index.ad66d773.css","assets/vendor.9bedc70f.js","assets/index.1d9fdc2d.js","assets/api.690bb50b.js"]).then((e=>e.default))},{isPage:!0,path:"/admin/menu",id:"_admin_menu",component:()=>c((()=>import("./menu.3f117738.js")),["assets/menu.3f117738.js","assets/index.ad66d773.css","assets/vendor.9bedc70f.js"]).then((e=>e.default))},{isPage:!0,path:"/admin/tulisan-baru",id:"_admin_tulisanBaru",component:()=>c((()=>import("./tulisan-baru.9b07273a.js")),["assets/tulisan-baru.9b07273a.js","assets/tulisan-baru.fe73838b.css","assets/vendor.9bedc70f.js","assets/index.1d9fdc2d.js","assets/index.92fc7d2c.js","assets/api.690bb50b.js"]).then((e=>e.default))}],isLayout:!0,path:"/admin",id:"_admin__layout",component:()=>c((()=>import("./_layout.6ece3a09.js")),["assets/_layout.6ece3a09.js","assets/_layout.9b99e318.css","assets/vendor.9bedc70f.js","assets/index.1d9fdc2d.js","assets/api.690bb50b.js"]).then((e=>e.default))},{isDir:!0,ext:"",children:[{isPage:!0,path:"/go/:singkatan",id:"_go__singkatan",component:()=>c((()=>import("./[singkatan].d1b46617.js")),["assets/[singkatan].d1b46617.js","assets/vendor.9bedc70f.js","assets/index.1d9fdc2d.js","assets/api.5c80c190.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,path:"/go/index",id:"_go_index",component:()=>c((()=>import("./index.d199c616.js")),["assets/index.d199c616.js","assets/index.13ebd9e2.css","assets/vendor.9bedc70f.js","assets/index.1d9fdc2d.js","assets/api.5c80c190.js"]).then((e=>e.default))},{isDir:!0,ext:"",children:[{isPage:!0,path:"/go/preview/:linknya",id:"_go_preview__linknya",component:()=>c((()=>import("./[linknya].b164532b.js")),["assets/[linknya].b164532b.js","assets/index.13ebd9e2.css","assets/vendor.9bedc70f.js"]).then((e=>e.default))}],path:"/go/preview"}],path:"/go"},{isIndex:!0,isPage:!0,path:"/index",id:"_index",component:()=>c((()=>import("./index.2561a222.js")),["assets/index.2561a222.js","assets/index.f7df9b7a.css","assets/vendor.9bedc70f.js","assets/index.1d9fdc2d.js","assets/api.690bb50b.js"]).then((e=>e.default))},{isPage:!0,path:"/login",id:"_login",component:()=>c((()=>import("./login.7ef4eba8.js")),["assets/login.7ef4eba8.js","assets/login.c4bfe091.css","assets/vendor.9bedc70f.js","assets/index.1d9fdc2d.js","assets/api.690bb50b.js"]).then((e=>e.default))}],path:"/"},{tree:g,routes:f}=e(h);function E(e){let n,t;return n=new a({props:{routes:f}}),{c(){s(n.$$.fragment)},m(e,i){o(n,e,i),t=!0},p:d,i(e){t||(_(n.$$.fragment,e),t=!0)},o(e){r(n.$$.fragment,e),t=!1},d(e){l(n,e)}}}p(class extends n{constructor(e){super(),t(this,e,null,E,i,{})}},{target:document.body},"routify-app");