(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1057:function(e,t,l){"use strict";var a=l(752);l.n(a).a},1058:function(e,t,l){(e.exports=l(1)(!1)).push([e.i,"",""])},1261:function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{style:{}},[l("table-view",{attrs:{"table-title":"布局控件"}},[l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(t){e.utils.navbar.push({path:"./pages/grid"})}}},[l("table-view-cell-center",[e._v("grid")]),e._v(" "),l("table-view-cell-right",[e._v("普通grid")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(t){e.utils.navbar.push({path:"./pages/gridStar"})}}},[l("table-view-cell-center",[e._v("grid_star")]),e._v(" "),l("table-view-cell-right",[e._v("带推荐的grid")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(t){e.utils.navbar.push({path:"./pages/tableView"})}}},[l("table-view-cell-center",[e._v("tableView")]),e._v(" "),l("table-view-cell-right",[e._v("表格布局")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(t){e.utils.navbar.push({path:"./pages/menuList"})}}},[l("table-view-cell-center",[e._v("menuList")]),e._v(" "),l("table-view-cell-right",[e._v("分类菜单")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(t){e.utils.navbar.push({path:"./pages/menuListView"})}}},[l("table-view-cell-center",[e._v("menuListViewRouter")]),e._v(" "),l("table-view-cell-right",[e._v("分类菜单view")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(t){e.utils.navbar.push({path:"./pages/lazyView"})}}},[l("table-view-cell-center",[e._v("lazyView")]),e._v(" "),l("table-view-cell-right",[e._v("懒加载视图")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(t){e.utils.navbar.push({path:"./pages/scrollView"})}}},[l("table-view-cell-center",[e._v("scrollView")]),e._v(" "),l("table-view-cell-right",[e._v("滚动视图")])],1),e._v(" "),l("table-view-cell",{attrs:{disabled:!0,nextArrow:!0},on:{click:function(t){e.utils.navbar.push({path:"./pages/navbar"})}}},[l("table-view-cell-center",[e._v("navbar")]),e._v(" "),l("table-view-cell-right",[e._v("导航条")])],1),e._v(" "),l("table-view-cell",{attrs:{disabled:!0,nextArrow:!0},on:{click:function(t){e.utils.navbar.push({path:"./pages/tabbar"})}}},[l("table-view-cell-center",[e._v("tabbar")]),e._v(" "),l("table-view-cell-right",[e._v("tabbar")])],1)],1),e._v(" "),l("table-view",{attrs:{"table-title":"路由控制+布局"}},[l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(t){e.utils.navbar.push({path:"./pages/navbarr"})}}},[l("table-view-cell-center",[e._v("navbar+router")]),e._v(" "),l("table-view-cell-right")],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(t){e.utils.navbar.push({path:"./pages/tabbarr"})}}},[l("table-view-cell-center",[e._v("tabbar+router")]),e._v(" "),l("table-view-cell-right")],1)],1)],1)},i=[];l.d(t,"a",function(){return a}),l.d(t,"b",function(){return i})},643:function(e,t,l){"use strict";l.r(t);var a=l(1261),i=l(750);for(var n in i)"default"!==n&&function(e){l.d(t,e,function(){return i[e]})}(n);l(1057);var r=l(0),c=Object(r.a)(i.default,a.a,a.b,!1,null,null,null);c.options.__file="index.vue",t.default=c.exports},750:function(e,t,l){"use strict";l.r(t);var a=l(751),i=l.n(a);for(var n in a)"default"!==n&&function(e){l.d(t,e,function(){return a[e]})}(n);t.default=i.a},751:function(e,t,l){"use strict";t.__esModule=!0;r(l(3));var a=l(25),i=l(30),n=r(i);function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}t.default={layout:"demo",components:n.all_components,data:function(){return{utils:i.utils,api:i.api}},computed:(0,a.mapState)({}),created:function(){this.timer=new i.utils.timer},beforeDestroy:function(){this.timer.dispose(),this.timer=null},asyncData:function(){},beforeMount:function(){},mounted:function(){},methods:{viewWillAppear:function(){console.log("viewWillAppear layout"),i.utils.navbar.setBarTitle("布局控件"),i.utils.navbar.setBarHidden(!1)},viewWillDisappear:function(){console.log("viewWillDisappear layout")}}}},752:function(e,t,l){var a=l(1058);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,l(2).default)("31fbd6de",a,!0,{sourceMap:!1})}}]);