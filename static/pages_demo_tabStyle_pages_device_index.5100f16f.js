(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{364:function(e,t,l){var content=l(365);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(7).default)("5c57b664",content,!0,{sourceMap:!1})},365:function(e,t,l){(t=l(6)(!1)).push([e.i,".notify-title{margin-left:25px;margin-bottom:-10px;margin-top:10px;color:#8e8e8e}.notify-broad{min-height:50px;background:#f1f1f1;border-radius:10px;margin:20px;padding:10px;word-break:break-all}.notify-broad i{color:#8e8e8e;margin-top:5px;display:block}.dialog-left .febsui-dialog-container .febsui-dialog-content{text-align:left;white-space:nowrap}",""]),e.exports=t},383:function(e,t,l){var content=l(429);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(7).default)("82e56342",content,!0,{sourceMap:!1})},428:function(e,t,l){"use strict";var n=l(383);l.n(n).a},429:function(e,t,l){(t=l(6)(!1)).push([e.i,"",""]),e.exports=t},483:function(e,t,l){"use strict";l.r(t);l(0);var n=l(32),o=l(13),r=(l(364),{layout:"demo",components:o.a,data:function(){return{utils:o.f,api:o.b,example:o.f.dom.escapeHtml('// <style lang="scss">中引入样式文件.')+"<br>"+o.f.dom.escapeHtml('@import "febs-vue/style/index.scss";')+"<br>"+o.f.dom.escapeHtml("div {")+"<br>"+o.f.dom.escapeHtml("  @include is-phone { display:none; }")+"<br>"+o.f.dom.escapeHtml("  @include phone-small-portrait { display:none; }")+"<br>"+o.f.dom.escapeHtml("  @include phone-big-portrait { display:none; }")+"<br>"+o.f.dom.escapeHtml("  @include pad-portrait { display:none; }")+"<br>"+o.f.dom.escapeHtml("}")+"<br>"}},computed:Object(n.b)({}),created:function(){this.timer=new o.f.timer},beforeDestroy:function(){this.timer.dispose(),this.timer=null},asyncData:function(){},beforeMount:function(){},mounted:function(){},methods:{viewWillAppear:function(){o.f.navbar.setBarTitle("device style"),o.f.navbar.setBarHidden(!1)},viewWillDisappear:function(){}}}),c=(l(428),l(2)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{style:{}},[l("div",{staticClass:"notify-title"},[e._v("实例")]),e._v(" "),l("div",{staticClass:"notify-broad",style:{overflow:"auto",whiteSpace:"nowrap"}},[l("i",[e._v("使用此样式可以使用css对移动设备区分")]),e._v(" "),l("br"),e._v(" "),l("br"),e._v(" "),l("i",[e._v("代码实例")]),e._v(" "),l("p",{domProps:{innerHTML:e._s(e.example)}})]),e._v(" "),l("table-view",{attrs:{"table-title":"可使用如下样式"}},[l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>@include is-phone { ... }<br>"})}}},[l("table-view-cell-center",[e._v("is-phone")]),e._v(" "),l("table-view-cell-right",[e._v("是否是手机")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>@include is-tablet { ... }<br>"})}}},[l("table-view-cell-center",[e._v("is-tablet")]),e._v(" "),l("table-view-cell-right",[e._v("是否是桌面或平板")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>// iphone 4, iphone 5 and small screen phone<br>@include phone-small-portrait { ... }<br>"})}}},[l("table-view-cell-center",[e._v("phone-small-portrait")]),e._v(" "),l("table-view-cell-right",[e._v("small phone")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>// iphone6, iphone 6p, iphone x and big screen phone<br>@include phone-big-portrait { ... }<br>"})}}},[l("table-view-cell-center",[e._v("phone-big-portrait")]),e._v(" "),l("table-view-cell-right",[e._v("big phone")])],1),e._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){e.api.dialog.alert({cssClass:"dialog-left",contentHtml:"<br>// pad<br>@include pad-portrait { ... }<br>"})}}},[l("table-view-cell-center",[e._v("pad-portrait")]),e._v(" "),l("table-view-cell-right",[e._v("pad")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);