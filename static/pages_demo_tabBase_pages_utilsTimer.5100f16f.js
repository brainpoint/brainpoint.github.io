(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{364:function(t,e,n){var content=n(365);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("5c57b664",content,!0,{sourceMap:!1})},365:function(t,e,n){(e=n(6)(!1)).push([t.i,".notify-title{margin-left:25px;margin-bottom:-10px;margin-top:10px;color:#8e8e8e}.notify-broad{min-height:50px;background:#f1f1f1;border-radius:10px;margin:20px;padding:10px;word-break:break-all}.notify-broad i{color:#8e8e8e;margin-top:5px;display:block}.dialog-left .febsui-dialog-container .febsui-dialog-content{text-align:left;white-space:nowrap}",""]),t.exports=e},464:function(t,e,n){"use strict";n.r(e);n(0);var r=n(32),l=n(13),o=(n(364),{layout:"demo",components:l.a,data:function(){return{utils:l.f,api:l.b}},computed:Object(r.b)({}),created:function(){this.timer=new l.f.timer},beforeDestroy:function(){this.timer.dispose(),this.timer=null},asyncData:function(){},beforeMount:function(){},mounted:function(){},methods:{viewWillAppear:function(){l.f.navbar.setBarTitle("utils"),l.f.navbar.setBarHidden(!1)},viewWillDisappear:function(){},onCreate:function(){l.b.dialog.alert({contentHtml:'<div style="text-align:left;">1. 在对象的created方法中创建<br>&nbsp;&nbsp;&nbsp;&nbsp;this.timer = new utils.timer();<br><br>2. 在对象的beforeDestroy方法中释放<br>&nbsp;&nbsp;&nbsp;&nbsp;this.timer.dispose(); this.timer = null;<br></div>'})},onTimeout:function(){l.b.dialog.alert({contentHtml:'<div style="text-align:left;">1. 启动timeout<br>&nbsp;&nbsp;&nbsp;&nbsp;var t = this.timer.setTimeout(fn, tm);<br><br>2. 停止<br>&nbsp;&nbsp;&nbsp;&nbsp;this.timer.clearTimeout(t);<br>&nbsp;&nbsp;&nbsp;&nbsp;or<br>&nbsp;&nbsp;&nbsp;&nbsp;this.timer.clearAllTimeout();<br></div>'})},onRequestAnimationFrame:function(){l.b.dialog.alert({contentHtml:'<div style="text-align:left;">1. 启动帧动画<br>&nbsp;&nbsp;&nbsp;&nbsp;var t = this.timer.requestAnimationFrame(fn);<br><br>2. 停止<br>&nbsp;&nbsp;&nbsp;&nbsp;this.timer.cancelAnimationFrame(t);<br>&nbsp;&nbsp;&nbsp;&nbsp;or<br>&nbsp;&nbsp;&nbsp;&nbsp;this.timer.clearAllAnimationFrame();<br></div>'})},onPromise:function(){l.b.dialog.alert({contentHtml:'<div style="text-align:left;">1. 启动 (会安全释放)<br>&nbsp;&nbsp;&nbsp;&nbsp;this.timer.sleep(1000)<br>&nbsp;&nbsp;&nbsp;&nbsp;.then(()=>{&nbsp;&nbsp;});<br></div>'})}}}),c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{}},[t._m(0),t._v(" "),n("table-view",{attrs:{"table-title":"timer"}},[n("table-view-cell",{attrs:{nextArrow:!0},on:{click:t.onCreate}},[n("table-view-cell-center",[t._v("创建")]),t._v(" "),n("table-view-cell-right")],1),t._v(" "),n("table-view-cell",{attrs:{nextArrow:!0},on:{click:t.onTimeout}},[n("table-view-cell-center",[t._v("timeout")]),t._v(" "),n("table-view-cell-right")],1),t._v(" "),n("table-view-cell",{attrs:{nextArrow:!0},on:{click:t.onRequestAnimationFrame}},[n("table-view-cell-center",[t._v("requestAnimationFrame")]),t._v(" "),n("table-view-cell-right")],1),t._v(" "),n("table-view-cell",{attrs:{nextArrow:!0},on:{click:t.onPromise}},[n("table-view-cell-center",[t._v("promise方式")]),t._v(" "),n("table-view-cell-right")],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notify-broad"},[this._v("\n    utils.timer 工具用于在vue对象中创建安全计时器, timer在对象释放时释放, 并且清理所有创建的计时器."),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports}}]);