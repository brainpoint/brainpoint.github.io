(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{364:function(t,e,l){var content=l(365);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(7).default)("5c57b664",content,!0,{sourceMap:!1})},365:function(t,e,l){(e=l(6)(!1)).push([t.i,".notify-title{margin-left:25px;margin-bottom:-10px;margin-top:10px;color:#8e8e8e}.notify-broad{min-height:50px;background:#f1f1f1;border-radius:10px;margin:20px;padding:10px;word-break:break-all}.notify-broad i{color:#8e8e8e;margin-top:5px;display:block}.dialog-left .febsui-dialog-container .febsui-dialog-content{text-align:left;white-space:nowrap}",""]),t.exports=e},386:function(t,e,l){var content=l(435);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(7).default)("f01b78c4",content,!0,{sourceMap:!1})},434:function(t,e,l){"use strict";var n=l(386);l.n(n).a},435:function(t,e,l){(e=l(6)(!1)).push([t.i,"",""]),t.exports=e},486:function(t,e,l){"use strict";l.r(e);l(0);var n=l(32),o=l(13),r=(l(364),{layout:"demo",components:o.a,data:function(){return{utils:o.f,api:o.b,example:o.f.dom.escapeHtml("// 先引入样式文件")+"<br>"+o.f.dom.escapeHtml("import 'febs-vue/style/index.scss';")+"<br>"+o.f.dom.escapeHtml("// 使用向下移动动画")+"<br>"+o.f.dom.escapeHtml('<transition name="liftOut">')+"<br>"+o.f.dom.escapeHtml("</transition>")+"<br>"}},computed:Object(n.b)({}),created:function(){this.timer=new o.f.timer},beforeDestroy:function(){this.timer.dispose(),this.timer=null},asyncData:function(){},beforeMount:function(){},mounted:function(){},methods:{viewWillAppear:function(){o.f.navbar.setBarTitle("transition style"),o.f.navbar.setBarHidden(!1)},viewWillDisappear:function(){}}}),c=(l(434),l(2)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{style:{}},[l("div",{staticClass:"notify-title"},[t._v("实例")]),t._v(" "),l("div",{staticClass:"notify-broad",style:{overflow:"auto",whiteSpace:"nowrap"}},[l("i",[t._v("此样式可以使用在vue transition动画中")]),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("i",[t._v("代码实例")]),t._v(" "),l("p",{domProps:{innerHTML:t._s(t.example)}})]),t._v(" "),l("table-view",{attrs:{"table-title":"可使用如下transition动画名称"}},[l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){t.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>"+t.utils.dom.escapeHtml("<transition name='none'>")+"<br>"+t.utils.dom.escapeHtml("</transition>")+"<br>"})}}},[l("table-view-cell-center",[t._v("none")]),t._v(" "),l("table-view-cell-right",[t._v("无动画")])],1),t._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){t.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>"+t.utils.dom.escapeHtml("<transition name='fade'>")+"<br>"+t.utils.dom.escapeHtml("</transition>")+"<br>"})}}},[l("table-view-cell-center",[t._v("fade")]),t._v(" "),l("table-view-cell-right",[t._v("渐变动画1.2s")])],1),t._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){t.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>"+t.utils.dom.escapeHtml("<transition name='fadeRapid'>")+"<br>"+t.utils.dom.escapeHtml("</transition>")+"<br>"})}}},[l("table-view-cell-center",[t._v("fadeRapid")]),t._v(" "),l("table-view-cell-right",[t._v("快速渐变0.2s")])],1),t._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){t.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>"+t.utils.dom.escapeHtml("<transition name='slide'>")+"<br>"+t.utils.dom.escapeHtml("</transition>")+"<br>"})}}},[l("table-view-cell-center",[t._v("slide")]),t._v(" "),l("table-view-cell-right",[t._v("向左移动0.4s(消失的页面带50%偏移)")])],1),t._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){t.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>"+t.utils.dom.escapeHtml("<transition name='slideOut'>")+"<br>"+t.utils.dom.escapeHtml("</transition>")+"<br>"})}}},[l("table-view-cell-center",[t._v("slideOut")]),t._v(" "),l("table-view-cell-right",[t._v("向右移动0.4s(消失的页面带50%偏移)")])],1),t._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){t.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>"+t.utils.dom.escapeHtml("<transition name='slideAll'>")+"<br>"+t.utils.dom.escapeHtml("</transition>")+"<br>"})}}},[l("table-view-cell-center",[t._v("slideAll")]),t._v(" "),l("table-view-cell-right",[t._v("向左移动0.4s(消失的页面无偏移)")])],1),t._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){t.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>"+t.utils.dom.escapeHtml("<transition name='slideAllOut'>")+"<br>"+t.utils.dom.escapeHtml("</transition>")+"<br>"})}}},[l("table-view-cell-center",[t._v("slideAllOut")]),t._v(" "),l("table-view-cell-right",[t._v("向右移动0.4s(消失的页面无偏移)")])],1),t._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){t.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>"+t.utils.dom.escapeHtml("<transition name='lift'>")+"<br>"+t.utils.dom.escapeHtml("</transition>")+"<br>"})}}},[l("table-view-cell-center",[t._v("lift")]),t._v(" "),l("table-view-cell-right",[t._v("向上移动0.4s")])],1),t._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){t.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>"+t.utils.dom.escapeHtml("<transition name='liftOut'>")+"<br>"+t.utils.dom.escapeHtml("</transition>")+"<br>"})}}},[l("table-view-cell-center",[t._v("liftOut")]),t._v(" "),l("table-view-cell-right",[t._v("向下移动0.4s")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);