(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1110:function(t,e,a){"use strict";var i=a(830);a.n(i).a},1111:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,"\nbutton{margin-left:5px;margin-right:5px;margin-top:5px\n}",""])},1287:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{}},[a("div",{staticClass:"notify-title"},[t._v("实例")]),t._v(" "),a("table-view",{style:{padding:"20px"},attrs:{"table-title":"动态加载的table-view",tableStyle:{borderRadius:"10px"}}},[a("lazy-view",{ref:"lazyView",attrs:{height:350},on:{loadmore:t.onLoadmore,updateDatasource:t.onUpdateDatasource}},t._l(t.datasource,function(e,i){return a("table-view-cell",{key:i,attrs:{slot:"view"},slot:"view"},[a("table-view-cell-center",[t._v("cell"+t._s(e))]),t._v(" "),a("table-view-cell-right")],1)}))],1),t._v(" "),a("div",{staticClass:"notify-title"},[t._v("例子")]),t._v(" "),a("div",{staticClass:"notify-broad"},[t._v("\n    lazyView组件实现赖加载; 外层需自行保存datasource; 组件将在@updateDatasource事件中返回最新的数据源; 外层需进行更新.\n  ")]),t._v(" "),a("div",{staticClass:"notify-broad",domProps:{innerHTML:t._s(t.example)}}),t._v(" "),a("div",{staticClass:"notify-title"},[t._v("快照")]),t._v(" "),a("div",{staticClass:"notify-broad"},[t._v("\n    提供了 createSnap/loadSnap两个方法, 可以进行存储当前的状态/还原存储的状态.\n    "),a("button",{on:{click:t.getSnapObj}},[t._v(" 存储快照btn ")]),t._v(" "),a("button",{on:{click:t.loadSnapObj}},[t._v(" 载入快照btn ")])]),t._v(" "),a("table-view",{attrs:{"table-title":""}},[a("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){return t.utils.navbar.push({path:"./attri"})}}},[a("table-view-cell-center",[t._v("属性")]),t._v(" "),a("table-view-cell-right")],1),t._v(" "),a("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){return t.utils.navbar.push({path:"./event"})}}},[a("table-view-cell-center",[t._v("事件")]),t._v(" "),a("table-view-cell-right")],1),t._v(" "),a("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){return t.utils.navbar.push({path:"./method"})}}},[a("table-view-cell-center",[t._v("方法")]),t._v(" "),a("table-view-cell-right")],1)],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},669:function(t,e,a){"use strict";a.r(e);var i=a(1287),n=a(828);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);a(1110);var o=a(0),r=Object(o.a)(n.default,i.a,i.b,!1,null,null,null);r.options.__file="index.vue",e.default=r.exports},739:function(t,e,a){var i=a(740);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(2).default)("5efb2ae6",i,!0,{sourceMap:!1})},740:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,".notify-title{margin-left:25px;margin-bottom:-10px;margin-top:10px;color:#8e8e8e}.notify-broad{min-height:50px;background:#f1f1f1;border-radius:10px;margin:20px;padding:10px;word-break:break-all}.notify-broad i{color:#8e8e8e;margin-top:5px;display:block}.dialog-left .febsui-dialog-container .febsui-dialog-content{text-align:left;white-space:nowrap}",""])},828:function(t,e,a){"use strict";a.r(e);var i=a(829),n=a.n(i);for(var l in i)"default"!==l&&function(t){a.d(e,t,function(){return i[t]})}(l);e.default=n.a},829:function(t,e,a){"use strict";e.__esModule=!0;r(a(3)),a(25);var i=a(30),n=r(i);a(739);a(1109);var l,o=a(4);(l=o)&&l.__esModule;function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}e.default={layout:"demo",components:n.all_components,data:function(){return{utils:i.utils,api:i.api,datasource:[],snapObj:{},example:i.utils.dom.escapeHtml("<lazy-view :height='350' @loadmore='onLoadmore' @updateDatasource='onUpdateDatasource'>")+"<br>"+i.utils.dom.escapeHtml('  <table-view-cell v-for="(item,index) in datasource" :key="index">')+"<br>"+i.utils.dom.escapeHtml("    <table-view-cell-left/>")+"<br>"+i.utils.dom.escapeHtml("    <table-view-cell-center/>")+"<br>"+i.utils.dom.escapeHtml("    <table-view-cell-right/>")+"<br>"+i.utils.dom.escapeHtml("  </table-view-cell>")+"<br>"+i.utils.dom.escapeHtml("</lazy-view>")+"<br>"}},created:function(){this.timer=new i.utils.timer,this.index=0},beforeDestroy:function(){this.timer.dispose(),this.timer=null},asyncData:function(){},beforeMount:function(){},mounted:function(){},methods:{viewWillAppear:function(){console.log("viewWillAppear"),i.utils.navbar.setBarTitle("layout"),i.utils.navbar.setBarHidden(!1)},viewWillDisappear:function(){console.log("viewWillDisappear")},onUpdateDatasource:function(t){this.datasource=t},onLoadmore:function(t,e,a){var i=this;setTimeout(function(){t&&(i.index=0);for(var a=[],n=0;n<=10;n++)a.push(i.index++);e(a)},3e3)},getSnapObj:function(){var t=this.$refs.lazyView.createSnap();this.snapObj=t},loadSnapObj:function(){this.$refs.lazyView.loadSnap(this.snapObj)}}}},830:function(t,e,a){var i=a(1111);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(2).default)("807b406a",i,!0,{sourceMap:!1})}}]);