(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{364:function(e,t,n){var content=n(365);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("5c57b664",content,!0,{sourceMap:!1})},365:function(e,t,n){(t=n(6)(!1)).push([e.i,".notify-title{margin-left:25px;margin-bottom:-10px;margin-top:10px;color:#8e8e8e}.notify-broad{min-height:50px;background:#f1f1f1;border-radius:10px;margin:20px;padding:10px;word-break:break-all}.notify-broad i{color:#8e8e8e;margin-top:5px;display:block}.dialog-left .febsui-dialog-container .febsui-dialog-content{text-align:left;white-space:nowrap}",""]),e.exports=t},533:function(e,t,n){"use strict";n.r(t);n(0);var l=n(32),o=n(13),r=(n(364),{layout:"demo",components:o.a,data:function(){return{utils:o.f,api:o.b}},computed:Object(l.b)({}),created:function(){this.timer=new o.f.timer},beforeDestroy:function(){this.timer.dispose(),this.timer=null},asyncData:function(){},beforeMount:function(){},mounted:function(){},methods:{viewWillAppear:function(){o.f.navbar.setBarTitle("事件"),o.f.navbar.setBarHidden(!1)},viewWillDisappear:function(){}}}),c=n(2),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{}},[n("table-view",{attrs:{"table-title":"事件列表"}},[n("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("tabbar的可见性改变")}}},[n("table-view-cell-center",[e._v("hiddenChanged")]),e._v(" "),n("table-view-cell-right",[e._v("(event)=>{}")])],1),e._v(" "),n("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("tabbar当前选择的页改变")}}},[n("table-view-cell-center",[e._v("tabChanged")]),e._v(" "),n("table-view-cell-right",[e._v("(event)=>{}")])],1),e._v(" "),n("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert("加载页面事件; 返回各页面的地址和参数数组; resolve([{path:'/', params:{}}, {path:'/', params:{}}...]);")}}},[n("table-view-cell-center",[e._v("pageLoading")]),e._v(" "),n("table-view-cell-right",[e._v("(resolve)=>{}")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);