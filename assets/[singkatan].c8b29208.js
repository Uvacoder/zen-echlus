import{S as a,i as t,s as n}from"./vendor.4468d6c7.js";import{a as s,s as i,l as o,b as e}from"./api.8b25af60.js";function r(a,t,n){document.title="Redirect";let{singkatan:r}=t;return async function(){const{data:a}=await s.post(i,o.stringify({id:e,kunci:"dapatkan",singkatan:r}));location.href=a[0].tujuan}(),a.$$set=a=>{"singkatan"in a&&n(0,r=a.singkatan)},[r]}class c extends a{constructor(a){super(),t(this,a,r,null,n,{singkatan:0})}}export{c as default};
