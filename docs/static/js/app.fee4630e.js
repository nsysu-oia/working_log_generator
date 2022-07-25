(function(){"use strict";var e={6426:function(e,t,n){var o=n(9242),l=n(3396);function r(e,t){const n=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(n)}var a=n(89);const i={},u=(0,a.Z)(i,[["render",r]]);var s=u,c=n(678);const d=e=>((0,l.dD)("data-v-2c0f6de6"),e=e(),(0,l.Cn)(),e),p={class:"bg-gray-100 h-screen flex flex-col"},f=d((()=>(0,l._)("div",{class:"navbar"},[(0,l._)("div",null,"國際處工作日誌產生器"),(0,l._)("div",{class:"flex-grow"})],-1))),m={class:"flex-grow overflow-auto"};function g(e,t,n,o,r,a){const i=(0,l.up)("LogGenerator");return(0,l.wg)(),(0,l.iD)("div",p,[f,(0,l._)("div",m,[(0,l.Wm)(i)])])}var v=n(7139);const h=e=>((0,l.dD)("data-v-a5acacae"),e=e(),(0,l.Cn)(),e),_={class:"h-full flex flex-col"},w={class:"my-5 flex"},y=h((()=>(0,l._)("div",{class:"flex-grow"},null,-1))),b={class:"menu shadow bg-white"},T=(0,l.Uk)("上傳日誌 "),k=h((()=>(0,l._)("div",{class:"flex-grow"},null,-1))),x={key:0,class:"mb-5 mx-auto w-5/6 p-5 bg-white shadow flex-grow overflow-hidden h-full flex flex-col"},O={class:"text-left flex items-center"},C={class:"title"},S=h((()=>(0,l._)("span",null,"年",-1))),j=["value"],N=h((()=>(0,l._)("span",null,"月",-1))),F=h((()=>(0,l._)("div",{class:"flex-grow"},null,-1))),U={class:"user text-left"},D=h((()=>(0,l._)("span",null,"姓名：",-1))),E=h((()=>(0,l._)("span",null,"手機：",-1))),L=h((()=>(0,l._)("span",null,"學號：",-1))),V=h((()=>(0,l._)("hr",{class:"my-2"},null,-1))),A={class:"flex-grow overflow-auto"},I={class:"flex items-center"},J={class:"flex-grow"},P={class:"flex items-center mb-2"},H=h((()=>(0,l._)("span",null,"日期：",-1))),M=["onUpdate:modelValue"],Z={class:"ml-2"},z=h((()=>(0,l._)("span",null,"時間：",-1))),Y=["onUpdate:modelValue"],q=h((()=>(0,l._)("span",{class:"inline-block mx-1"},"到",-1))),B=["onUpdate:modelValue"],K={class:"ml-2"},G=h((()=>(0,l._)("span",null,"時數：",-1))),R={class:"ml-2 flex-grow flex items-center"},W=h((()=>(0,l._)("span",{class:"block flex-shrink-0"},"內容：",-1))),Q=["onUpdate:modelValue"],X={class:"mx-2"},$=["onClick"],ee=h((()=>(0,l._)("hr",null,null,-1)));function te(e,t,n,r,a,i){return(0,l.wg)(),(0,l.iD)("div",_,[(0,l._)("div",w,[y,(0,l._)("div",b,[(0,l._)("button",{onClick:t[0]||(t[0]=(...t)=>e.newForm&&e.newForm(...t))},"建立日誌"),(0,l._)("label",null,[T,(0,l._)("input",{type:"file",class:"hidden",accept:"json",onChange:t[1]||(t[1]=(...t)=>e.loadFile&&e.loadFile(...t))},null,32)]),(0,l._)("button",{onClick:t[2]||(t[2]=(...t)=>e.printForm&&e.printForm(...t))},"列印日誌"),(0,l._)("button",{onClick:t[3]||(t[3]=(...t)=>e.exportFile&&e.exportFile(...t))},"下載日誌")]),k]),0!==Object.keys(e.logTemp).length||e.logTemp.constructor!==Object?((0,l.wg)(),(0,l.iD)("div",x,[(0,l._)("div",O,[(0,l._)("div",C,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.logTemp.year=t),type:"number"},null,512),[[o.nr,e.logTemp.year]]),S,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[5]||(t[5]=t=>e.logTemp.month=t)},[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(12,((e,t)=>(0,l._)("option",{key:t,value:e},(0,v.zw)(e),9,j))),64))],512),[[o.bM,e.logTemp.month]]),N]),(0,l._)("div",null,"共 "+(0,v.zw)(e.logTemp.log.length)+" 筆紀錄",1),(0,l._)("div",null,"總時數： "+(0,v.zw)(e.logTemp.total)+" 小時",1),F,(0,l._)("div",null,[(0,l._)("button",{onClick:t[6]||(t[6]=(...t)=>e.sortList&&e.sortList(...t)),class:"text-sky-400 hover:text-sky-500 duration-300 mr-2"},"排序"),(0,l._)("button",{onClick:t[7]||(t[7]=(...t)=>e.newLog&&e.newLog(...t)),class:"text-sky-400 hover:text-sky-500 duration-300"},"新增紀錄")])]),(0,l._)("div",U,[D,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[8]||(t[8]=t=>e.logTemp.name=t),type:"text"},null,512),[[o.nr,e.logTemp.name]]),E,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[9]||(t[9]=t=>e.logTemp.phone=t),type:"text"},null,512),[[o.nr,e.logTemp.phone]]),L,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[10]||(t[10]=t=>e.logTemp.schoolId=t),type:"text"},null,512),[[o.nr,e.logTemp.schoolId]])]),V,(0,l._)("div",A,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.logTemp.log,((t,n)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:n},[(0,l._)("div",I,[(0,l._)("div",J,[(0,l._)("div",P,[(0,l._)("div",null,[H,(0,l.wy)((0,l._)("input",{class:"border-2 rounded p-1",type:"date","onUpdate:modelValue":t=>e.logTemp.log[n].date=t},null,8,M),[[o.nr,e.logTemp.log[n].date]])]),(0,l._)("div",Z,[z,(0,l.wy)((0,l._)("input",{class:"border-2 rounded p-1",type:"time","onUpdate:modelValue":t=>e.logTemp.log[n].startTime=t},null,8,Y),[[o.nr,e.logTemp.log[n].startTime]]),q,(0,l.wy)((0,l._)("input",{class:"border-2 rounded p-1",type:"time","onUpdate:modelValue":t=>e.logTemp.log[n].endTime=t},null,8,B),[[o.nr,e.logTemp.log[n].endTime]])]),(0,l._)("div",K,[G,(0,l.Uk)(" "+(0,v.zw)(e.timeToHours(e.logTemp.log[n].date,e.logTemp.log[n].startTime,e.logTemp.log[n].endTime,n)),1)]),(0,l._)("div",R,[W,(0,l.wy)((0,l._)("input",{type:"text",class:"border-2 rounded p-1 block w-full","onUpdate:modelValue":t=>e.logTemp.log[n].remark=t},null,8,Q),[[o.nr,e.logTemp.log[n].remark]])])])]),(0,l._)("div",X,[(0,l._)("button",{onClick:t=>e.removeItem(n),class:"text-red-500 hover:text-red-600 duration-300"},"刪除",8,$)])]),ee],64)))),128))])])):(0,l.kq)("",!0)])}var ne=n(4870),oe=n(7387),le=n.n(oe),re=(0,l.aZ)({setup(){const e=(0,c.tv)(),t=(0,ne.iH)({});localStorage.oia_working_log_temp&&(t.value=JSON.parse(localStorage.oia_working_log_temp));const n={timestamp:Date.now(),name:"",phone:"",schoolId:"",year:"111",month:"1",total:0,log:[]},o={date:"",startTime:"",endTime:"",duration:0,remark:""};function r(){if(le().isEmptyObject(t.value))t.value=JSON.parse(JSON.stringify(n));else{const e=confirm("確定覆蓋現有的資料？");e&&(t.value=JSON.parse(JSON.stringify(n)))}}function a(){t.value.log.push(JSON.parse(JSON.stringify(o)))}function i(){if(localStorage.oia_working_log_temp){let e=localStorage.oia_working_log_temp,t="data:application/json;charset=utf-8,"+encodeURIComponent(e),n="export.json",o=document.createElement("a");o.setAttribute("href",t),o.setAttribute("download",n),o.click()}else alert("無資料")}function u(e){function n(){const n=new FileReader;n.onload=function(e){console.log(e);const n=JSON.parse(e.target.result);t.value=n},n.readAsText(e.target.files[0])}if(le().isEmptyObject(t.value))n();else{const e=confirm("確定覆蓋現有資料？");e&&n()}}return(0,l.YP)(t,(()=>{console.log("change"),localStorage.oia_working_log_temp=JSON.stringify(t.value);let e=0;for(let n=0;n<t.value.log.length;n++)e+=t.value.log[n].duration;t.value.total=e}),{deep:!0}),{newForm:r,newLog:a,logTemp:t,timeToHours:function(e,n,o,l){const r=new Date(e+" "+n),a=new Date(e+" "+o);console.log(a-r);let i=0;return i=(a-r)/1e3/60/60,t.value.log[l].duration=isNaN(i)?0:i,!isNaN(i)&&i>0?i:0},removeItem:function(e){const n=confirm("確定刪除？此筆資料無法恢復！");n&&t.value.log.splice(e,1)},printForm:function(){const t=e.resolve({path:"/print"});window.open(t.href)},sortList:function(){t.value.log.sort(((e,t)=>{const n=new Date(e.date+" "+e.startTime),o=new Date(t.date+" "+t.endTime);return n-o}))},exportFile:i,loadFile:u}}});const ae=(0,a.Z)(re,[["render",te],["__scopeId","data-v-a5acacae"]]);var ie=ae,ue=(0,l.aZ)({setup(){return{}},components:{LogGenerator:ie}});const se=(0,a.Z)(ue,[["render",g],["__scopeId","data-v-2c0f6de6"]]);var ce=se;const de=[{path:"/",name:"home",component:ce},{path:"/print",name:"print",component:()=>n.e(499).then(n.bind(n,1499))}],pe=(0,c.p7)({history:(0,c.r5)(),routes:de});var fe=pe,me=n(65),ge=(0,me.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(s).use(ge).use(fe).mount("#app")}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,l,r){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],l=e[c][1],r=e[c][2];for(var i=!0,u=0;u<o.length;u++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(i=!1,r<a&&(a=r));if(i){e.splice(c--,1);var s=l();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,l,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"static/js/"+e+".8a5a0730.js"}}(),function(){n.miniCssF=function(e){return"static/css/"+e+".c96f530c.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="working_log:";n.l=function(o,l,r,a){if(e[o])e[o].push(l);else{var i,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+r),i.src=o),e[o]=[l];var p=function(t,n){i.onerror=i.onload=null,clearTimeout(f);var l=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),l&&l.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,o){var l=document.createElement("link");l.rel="stylesheet",l.type="text/css";var r=function(r){if(l.onerror=l.onload=null,"load"===r.type)n();else{var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,l.parentNode.removeChild(l),o(u)}};return l.onerror=l.onload=r,l.href=t,document.head.appendChild(l),l},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var l=n[o],r=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(r===e||r===t))return l}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){l=a[o],r=l.getAttribute("data-href");if(r===e||r===t)return l}},o=function(o){return new Promise((function(l,r){var a=n.miniCssF(o),i=n.p+a;if(t(a,i))return l();e(o,i,l,r)}))},l={143:0};n.f.miniCss=function(e,t){var n={499:1};l[e]?t.push(l[e]):0!==l[e]&&n[e]&&t.push(l[e]=o(e).then((function(){l[e]=0}),(function(t){throw delete l[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var l=n.o(e,t)?e[t]:void 0;if(0!==l)if(l)o.push(l[2]);else{var r=new Promise((function(n,o){l=e[t]=[n,o]}));o.push(l[2]=r);var a=n.p+n.u(t),i=new Error,u=function(o){if(n.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,l[1](i)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,r,a=o[0],i=o[1],u=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(u)var c=u(n)}for(t&&t(o);s<a.length;s++)r=a[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkworking_log"]=self["webpackChunkworking_log"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6426)}));o=n.O(o)})();
//# sourceMappingURL=app.fee4630e.js.map