import{b as e,S as n,i as t,s as i,R as a,c as o,m as d,n as s,t as r,a as _,d as l,H as p}from"./vendor.8234416c.js";let m;const u={},c=function(e,n){if(!n||0===n.length)return e();if(void 0===m){const e=document.createElement("link").relList;m=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(n.map((e=>{if((e=`/${e}`)in u)return;u[e]=!0;const n=e.endsWith(".css"),t=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const i=document.createElement("link");return i.rel=n?"stylesheet":m,n||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),n?new Promise(((e,n)=>{i.addEventListener("load",e),i.addEventListener("error",n)})):void 0}))).then((()=>e()))},h={root:!0,children:[{isPage:!0,path:"/:slugnya",id:"__slugnya",component:()=>c((()=>import("./[slugnya].62757ed3.js")),["assets/[slugnya].62757ed3.js","assets/[slugnya].2db074d1.css","assets/vendor.8234416c.js"]).then((e=>e.default))},{isDir:!0,children:[{isIndex:!0,isPage:!0,path:"/admin/index",id:"_admin_index",component:()=>c((()=>import("./index.b59dc379.js")),["assets/index.b59dc379.js","assets/vendor.8234416c.js"]).then((e=>e.default))},{isPage:!0,path:"/admin/menu",id:"_admin_menu",component:()=>c((()=>import("./menu.d15dfed2.js")),["assets/menu.d15dfed2.js","assets/menu.3ccea415.css","assets/vendor.8234416c.js"]).then((e=>e.default))},{isPage:!0,path:"/admin/tulisan-baru",id:"_admin_tulisanBaru",component:()=>c((()=>import("./tulisan-baru.ff0e8edf.js")),["assets/tulisan-baru.ff0e8edf.js","assets/tulisan-baru.8473e320.css","assets/vendor.8234416c.js"]).then((e=>e.default))}],isLayout:!0,path:"/admin",id:"_admin__layout",component:()=>c((()=>import("./_layout.a6d2d250.js")),["assets/_layout.a6d2d250.js","assets/_layout.9b99e318.css","assets/vendor.8234416c.js","assets/index.ae64d38b.js"]).then((e=>e.default))},{isDir:!0,ext:"",children:[{isPage:!0,path:"/go/:singkatan",id:"_go__singkatan",component:()=>c((()=>import("./[singkatan].8ac066cc.js")),["assets/[singkatan].8ac066cc.js","assets/vendor.8234416c.js","assets/index.ae64d38b.js","assets/api.5c80c190.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,path:"/go/index",id:"_go_index",component:()=>c((()=>import("./index.07841f08.js")),["assets/index.07841f08.js","assets/index.13ebd9e2.css","assets/vendor.8234416c.js","assets/index.ae64d38b.js","assets/api.5c80c190.js"]).then((e=>e.default))},{isDir:!0,ext:"",children:[{isPage:!0,path:"/go/preview/:linknya",id:"_go_preview__linknya",component:()=>c((()=>import("./[linknya].bcfc7ff8.js")),["assets/[linknya].bcfc7ff8.js","assets/index.13ebd9e2.css","assets/vendor.8234416c.js"]).then((e=>e.default))}],path:"/go/preview"}],path:"/go"},{isIndex:!0,isPage:!0,path:"/index",id:"_index",component:()=>c((()=>import("./index.506fddac.js")),["assets/index.506fddac.js","assets/index.f7df9b7a.css","assets/vendor.8234416c.js"]).then((e=>e.default))},{isPage:!0,path:"/login",id:"_login",component:()=>c((()=>import("./login.9131d9d3.js")),["assets/login.9131d9d3.js","assets/vendor.8234416c.js"]).then((e=>e.default))}],path:"/"},{tree:f,routes:g}=e(h);function E(e){let n,t;return n=new a({props:{routes:g}}),{c(){o(n.$$.fragment)},m(e,i){d(n,e,i),t=!0},p:s,i(e){t||(r(n.$$.fragment,e),t=!0)},o(e){_(n.$$.fragment,e),t=!1},d(e){l(n,e)}}}p(class extends n{constructor(e){super(),t(this,e,null,E,i,{})}},{target:document.body},"routify-app");
