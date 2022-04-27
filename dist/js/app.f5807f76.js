(function(){"use strict";var t={6543:function(t,e,n){var r=n(9242),o=n(3396);function i(t,e){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var a=n(89);const u={},s=(0,a.Z)(u,[["render",i]]);var l=s,c=n(678),d=n.p+"img/heart.439420c5.svg";const f=t=>((0,o.dD)("data-v-02847593"),t=t(),(0,o.Cn)(),t),p=f((()=>(0,o._)("div",{class:"title"},[(0,o._)("img",{src:d,width:"60",height:"64",loading:"lazy",alt:"site logo"}),(0,o._)("h1",null,"Hyrule Jobs")],-1))),v={class:"order"};function b(t,e,n,r,i,a){const u=(0,o.up)("JobList");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("header",null,[p,(0,o._)("div",v,[(0,o._)("button",{onClick:e[0]||(e[0]=e=>t.sortBy("title"))},"Order by title"),(0,o._)("button",{onClick:e[1]||(e[1]=e=>t.sortBy("salary"))},"Order by salary"),(0,o._)("button",{onClick:e[2]||(e[2]=e=>t.sortBy("location"))},"Order by location")])]),(0,o.Wm)(u,{jobs:t.jobs,order:t.order},null,8,["jobs","order"])])}var m=n(4870),g=n(7139);const y={class:"job-list"};function h(t,e,n,i,a,u){const s=(0,o.up)("JobItem");return(0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("p",null,"Ordered by "+(0,g.zw)(t.order),1),(0,o.Wm)(r.W3,{name:"list",tag:"ul"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.orderedJobs,(t=>((0,o.wg)(),(0,o.iD)("li",{key:t.id},[(0,o.Wm)(s,{job:t},null,8,["job"])])))),128))])),_:1})])}var j=n.p+"img/rupee.ec6cfad0.svg";const w=t=>((0,o.dD)("data-v-f6e0a704"),t=t(),(0,o.Cn)(),t),_={class:"salary"},O=w((()=>(0,o._)("img",{src:j,width:"30",height:"42",loading:"lazy",alt:"rupee icon"},null,-1))),k=w((()=>(0,o._)("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh nisl, consequat vitae diam at, vestibulum convallis erat. Aenean aliquam consequat lectus, ut suscipit nisl volutpat eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque fringilla gravida felis rhoncus commodo. Ut congue, orci sed luctus varius, magna lacus rhoncus lacus, at viverra lorem arcu ut eros. Proin feugiat consequat mi, at dignissim magna tristique nec. Maecenas et luctus ante, in pellentesque tellus. ",-1)));function q(t,e,n,r,i,a){return(0,o.wg)(),(0,o.iD)("div",{class:"job-item",onClick:e[0]||(e[0]=e=>t.routeToJobDetails())},[(0,o._)("h2",null,(0,g.zw)(t.job.title)+" in "+(0,g.zw)(t.job.location),1),(0,o._)("div",_,[O,(0,o._)("p",null,(0,g.zw)(t.job.salary)+" rupees",1)]),k])}var C=(0,o.aZ)({props:{job:{type:Object,required:!0}},setup(){const t=(0,c.tv)(),e=()=>{t.push({name:"JobDetails"})};return{routeToJobDetails:e}}});const D=(0,a.Z)(C,[["render",q],["__scopeId","data-v-f6e0a704"]]);var J=D,P=(0,o.aZ)({components:{JobItem:J},props:{jobs:{type:Array,required:!0},order:{type:String,required:!0}},setup(t){const e=(0,o.Fl)((()=>{const e=[...t.jobs].sort(((e,n)=>e[t.order]>n[t.order]?1:-1));return e}));return{orderedJobs:e}}});const T=(0,a.Z)(P,[["render",h],["__scopeId","data-v-5c5611a0"]]);var L=T,M=(0,o.aZ)({name:"MainPage",components:{JobList:L},setup(){const t=(0,m.iH)([{title:"Farm worker",location:"Lon Lon ranch",salary:3e3,id:1},{title:"Quarry man",location:"Death mountain",salary:4e3,id:2},{title:"Flute Player",location:"The lost woods",salary:4500,id:3},{title:"Fisherman",location:"Lake Hylia",salary:5e3,id:4}]),e=(0,m.iH)("title"),n=t=>{e.value=t};return{jobs:t,sortBy:n,order:e}}});const Z=(0,a.Z)(M,[["render",b],["__scopeId","data-v-02847593"]]);var z=Z;const A=[{path:"/",name:"MainPage",component:z},{path:"/job-details",name:"JobDetails",component:()=>n.e(482).then(n.bind(n,6482))}],E=(0,c.p7)({history:(0,c.PO)("/"),routes:A});var F=E,S=n(65),B=(0,S.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(l).use(B).use(F).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],i=t[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".94d2a668.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-typescript:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var u,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=r),t[r]=[o];var f=function(e,n){u.onerror=u.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),u=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],u=r[1],s=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var c=s(n)}for(e&&e(r);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},r=self["webpackChunkvue_typescript"]=self["webpackChunkvue_typescript"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6543)}));r=n.O(r)})();
//# sourceMappingURL=app.f5807f76.js.map