"use strict";(self["webpackChunkvue_typescript"]=self["webpackChunkvue_typescript"]||[]).push([[166],{3166:function(e,a,s){s.r(a),s.d(a,{default:function(){return P}});var t=s(3396),n=s(9242),r=s(7139);const u=(0,t.Uk)("Job Details"),i=(0,t.Uk)("To Main Page"),o=["data-aos"],c={class:"user-name"},l={class:"user-email"},d={class:"user-address"};function p(e,a,s,p,g,f){const w=(0,t.up)("MainButton"),m=(0,t.up)("PageHeader");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(m,null,{title:(0,t.w5)((()=>[u])),buttons:(0,t.w5)((()=>[(0,t.Wm)(w,{onClick:a[0]||(a[0]=a=>e.routeToMainPage())},{default:(0,t.w5)((()=>[i])),_:1})])),_:1}),(0,t.Wm)(n.W3,{tag:"ul",class:"user-list"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.users,((a,s)=>((0,t.wg)(),(0,t.iD)("li",{key:a.id,class:"user-item","data-aos":e.aosParity(s)?"fade-right":"fade-left"},[(0,t._)("p",c,(0,r.zw)(a.name),1),(0,t._)("p",l,(0,r.zw)(a.email),1),(0,t._)("p",d,(0,r.zw)(a.address.street),1)],8,o)))),128))])),_:1})])}var g=s(65),f=s(678),w=s(3061),m=s(2910),_=(0,t.aZ)({components:{PageHeader:w.Z,MainButton:m.Z},setup(){const e=(0,g.oR)(),a=(0,f.tv)(),s=(0,f.yj)();(0,t.bv)((()=>{e.dispatch("getUsers")}));(0,t.Fl)((()=>s.params.job));const n=(0,t.Fl)((()=>e.getters.users)),r=e=>{const a=!(e%2);return a};function u(){a.push({name:"MainPage"})}return{users:n,aosParity:r,routeToMainPage:u}}}),v=s(89);const k=(0,v.Z)(_,[["render",p],["__scopeId","data-v-ea9ccc96"]]);var P=k}}]);
//# sourceMappingURL=166.799b5910.js.map