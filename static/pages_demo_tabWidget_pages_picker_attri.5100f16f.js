(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{364:function(e,t,l){var content=l(365);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(7).default)("5c57b664",content,!0,{sourceMap:!1})},365:function(e,t,l){(t=l(6)(!1)).push([e.i,".notify-title{margin-left:25px;margin-bottom:-10px;margin-top:10px;color:#8e8e8e}.notify-broad{min-height:50px;background:#f1f1f1;border-radius:10px;margin:20px;padding:10px;word-break:break-all}.notify-broad i{color:#8e8e8e;margin-top:5px;display:block}.dialog-left .febsui-dialog-container .febsui-dialog-content{text-align:left;white-space:nowrap}",""]),e.exports=t},543:function(e,t,l){"use strict";l.r(t);l(0);var c=l(32),r=l(13),o=(l(364),{layout:"demo",components:r.a,data:function(){return{utils:r.f,api:r.b,picker_datasource:r.f.dom.escapeHtml("/**")+"<br>"+r.f.dom.escapeHtml("* @desc: 返回指定组的数据源")+"<br>"+r.f.dom.escapeHtml("* @@param callback: 传递如下参数.")+"<br>"+r.f.dom.escapeHtml("*    {")+"<br>"+r.f.dom.escapeHtml("*      datasource: [{label, value, disabled, data},...]")+"<br>"+r.f.dom.escapeHtml("*      value, // 选择的值")+"<br>"+r.f.dom.escapeHtml("*    }")+"<br>"+r.f.dom.escapeHtml("*    // disabled: 为是否可以选中")+"<br>"+r.f.dom.escapeHtml("*    // data: 为自定义数据")+"<br>"+r.f.dom.escapeHtml("*/")}},computed:Object(c.b)({}),created:function(){this.timer=new r.f.timer},beforeDestroy:function(){this.timer.dispose(),this.timer=null},asyncData:function(){},beforeMount:function(){},mounted:function(){},methods:{viewWillAppear:function(){r.f.navbar.setBarTitle("属性"),r.f.navbar.setBarHidden(!1)},viewWillDisappear:function(){}}}),n=l(2),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{style:{}},[l("table-view",{attrs:{"table-title":"属性列表"}},[l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("左侧取消按钮的搜索文字 (默认为: 取消)")}}},[l("table-view-cell-center",[e._v("cancelText")]),e._v(" "),l("table-view-cell-right",[e._v("String")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("取消按钮主色")}}},[l("table-view-cell-center",[e._v("cancelTintColor")]),e._v(" "),l("table-view-cell-right",[e._v("String")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("右侧确认按钮的搜索文字 (默认为: 确定)")}}},[l("table-view-cell-center",[e._v("okText")]),e._v(" "),l("table-view-cell-right",[e._v("String")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("确认按钮主色")}}},[l("table-view-cell-center",[e._v("okTintColor")]),e._v(" "),l("table-view-cell-right",[e._v("String")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("数据源; 需包含下方的方法供调用")}}},[l("table-view-cell-center",[e._v("datasource")]),e._v(" "),l("table-view-cell-right",[e._v("Object")])],1)],1),e._v(" "),l("table-view",{attrs:{"table-title":"数据源 datasource 对象需导出如下方法:"}},[l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert({cssClass:"dialog-left",contentHtml:"callback 参数中传递 数据源组数(最多4个)"})}}},[l("table-view-cell-center",[e._v("picker_datasource_groups(callback)")]),e._v(" "),l("table-view-cell-right")],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert({cssClass:"dialog-left",contentHtml:e.picker_datasource})}}},[l("table-view-cell-center",[e._v("picker_datasource(groupIndex, picker, callback)")]),e._v(" "),l("table-view-cell-right")],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert({cssClass:"dialog-left",contentHtml:"当前选中的值改变后回调"})}}},[l("table-view-cell-center",[e._v("picker_changed(groupIndex, picker)")]),e._v(" "),l("table-view-cell-right")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);