(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1032:function(e,t,l){"use strict";l.r(t);var a=l(1033),i=l.n(a);for(var r in a)"default"!==r&&function(e){l.d(t,e,function(){return a[e]})}(r);t.default=i.a},1033:function(e,t,l){"use strict";t.__esModule=!0;n(l(3));var a=l(25),i=l(30),r=n(i);function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}l(739),t.default={layout:"demo",components:r.all_components,data:function(){return{utils:i.utils,api:i.api,picker_datasource:i.utils.dom.escapeHtml("/**")+"<br>"+i.utils.dom.escapeHtml("* @desc: 返回指定组的数据源")+"<br>"+i.utils.dom.escapeHtml("* @@param callback: 传递如下参数.")+"<br>"+i.utils.dom.escapeHtml("*    {")+"<br>"+i.utils.dom.escapeHtml("*      datasource: [{label, value, disabled, data},...]")+"<br>"+i.utils.dom.escapeHtml("*      value, // 选择的值")+"<br>"+i.utils.dom.escapeHtml("*    }")+"<br>"+i.utils.dom.escapeHtml("*    // disabled: 为是否可以选中")+"<br>"+i.utils.dom.escapeHtml("*    // data: 为自定义数据")+"<br>"+i.utils.dom.escapeHtml("*/")}},computed:(0,a.mapState)({}),created:function(){this.timer=new i.utils.timer},beforeDestroy:function(){this.timer.dispose(),this.timer=null},asyncData:function(){},beforeMount:function(){},mounted:function(){},methods:{viewWillAppear:function(){i.utils.navbar.setBarTitle("属性"),i.utils.navbar.setBarHidden(!1)},viewWillDisappear:function(){}}}},1034:function(e,t,l){var a=l(1247);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,l(2).default)("0f291d86",a,!0,{sourceMap:!1})},1246:function(e,t,l){"use strict";var a=l(1034);l.n(a).a},1247:function(e,t,l){(e.exports=l(1)(!1)).push([e.i,"",""])},1355:function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{style:{}},[l("table-view",{attrs:{"table-title":"属性列表"}},[l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("左侧取消按钮的搜索文字 (默认为: 取消)")}}},[l("table-view-cell-center",[e._v("cancelText")]),e._v(" "),l("table-view-cell-right",[e._v("String")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("取消按钮主色")}}},[l("table-view-cell-center",[e._v("cancelTintColor")]),e._v(" "),l("table-view-cell-right",[e._v("String")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("右侧确认按钮的搜索文字 (默认为: 确定)")}}},[l("table-view-cell-center",[e._v("okText")]),e._v(" "),l("table-view-cell-right",[e._v("String")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("确认按钮主色")}}},[l("table-view-cell-center",[e._v("okTintColor")]),e._v(" "),l("table-view-cell-right",[e._v("String")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("数据源; 需包含下方的方法供调用")}}},[l("table-view-cell-center",[e._v("datasource")]),e._v(" "),l("table-view-cell-right",[e._v("Object")])],1)],1),e._v(" "),l("table-view",{attrs:{"table-title":"数据源 datasource 对象需导出如下方法:"}},[l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert({cssClass:"dialog-left",contentHtml:"callback 参数中传递 数据源组数(最多4个)"})}}},[l("table-view-cell-center",[e._v("picker_datasource_groups(callback)")]),e._v(" "),l("table-view-cell-right")],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert({cssClass:"dialog-left",contentHtml:e.picker_datasource})}}},[l("table-view-cell-center",[e._v("picker_datasource(groupIndex, picker, callback)")]),e._v(" "),l("table-view-cell-right")],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert({cssClass:"dialog-left",contentHtml:"当前选中的值改变后回调"})}}},[l("table-view-cell-center",[e._v("picker_changed(groupIndex, picker)")]),e._v(" "),l("table-view-cell-right")],1)],1)],1)},i=[];l.d(t,"a",function(){return a}),l.d(t,"b",function(){return i})},733:function(e,t,l){"use strict";l.r(t);var a=l(1355),i=l(1032);for(var r in i)"default"!==r&&function(e){l.d(t,e,function(){return i[e]})}(r);l(1246);var n=l(0),c=Object(n.a)(i.default,a.a,a.b,!1,null,null,null);c.options.__file="attri.vue",t.default=c.exports},739:function(e,t,l){var a=l(740);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,l(2).default)("5efb2ae6",a,!0,{sourceMap:!1})},740:function(e,t,l){(e.exports=l(1)(!1)).push([e.i,".notify-title{margin-left:25px;margin-bottom:-10px;margin-top:10px;color:#8e8e8e}.notify-broad{min-height:50px;background:#f1f1f1;border-radius:10px;margin:20px;padding:10px;word-break:break-all}.notify-broad i{color:#8e8e8e;margin-top:5px;display:block}.dialog-left .febsui-dialog-container .febsui-dialog-content{text-align:left;white-space:nowrap}",""])}}]);