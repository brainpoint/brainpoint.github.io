(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{364:function(t,e,l){var content=l(365);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(7).default)("5c57b664",content,!0,{sourceMap:!1})},365:function(t,e,l){(e=l(6)(!1)).push([t.i,".notify-title{margin-left:25px;margin-bottom:-10px;margin-top:10px;color:#8e8e8e}.notify-broad{min-height:50px;background:#f1f1f1;border-radius:10px;margin:20px;padding:10px;word-break:break-all}.notify-broad i{color:#8e8e8e;margin-top:5px;display:block}.dialog-left .febsui-dialog-container .febsui-dialog-content{text-align:left;white-space:nowrap}",""]),t.exports=e},379:function(t,e,l){var content=l(421);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(7).default)("6f89d7f5",content,!0,{sourceMap:!1})},420:function(t,e,l){"use strict";var o=l(379);l.n(o).a},421:function(t,e,l){(e=l(6)(!1)).push([t.i,"button{margin-left:5px;margin-right:5px;margin-top:5px}.test-block{display:inline-block;margin:10px}",""]),t.exports=e},479:function(t,e,l){"use strict";l.r(e);l(52),l(53),l(22),l(0);var o=l(32),n=l(13),c=(l(364),{layout:"demo",components:n.a,data:function(){return{utils:n.f,api:n.b}},computed:Object(o.b)({}),created:function(){this.timer=new n.f.timer},beforeDestroy:function(){this.timer.dispose(),this.timer=null},asyncData:function(){},beforeMount:function(){},mounted:function(){},methods:{viewWillAppear:function(){n.f.navbar.setBarTitle("layout"),n.f.navbar.setBarHidden(!1)},viewWillDisappear:function(){},onScroll:function(){n.b.toast.show(this.$refs.scrollView.getOffset().toString())}}}),r=(l(420),l(2)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{style:{}},[l("div",{staticClass:"notify-title"},[t._v("实例")]),t._v(" "),l("div",{staticClass:"notify-broad",style:{overflow:"auto",whiteSpace:"nowrap"}},[t._v("\n    scrollView用于鼠标或touch进行拖动滚动的视图; 并且是隐藏滚动条"),l("br"),t._v("\n    除ie外, 仅允许单向滚动"),l("br"),t._v("\n    (ie浏览器使用原始滚动.)"),l("br"),l("br"),t._v(" "),l("scrollView",{ref:"scrollView",staticStyle:{border:"solid 1px #fff",height:"300px"},attrs:{vertical:!1},on:{scroll:t.onScroll}},[l("div",{staticClass:"test-block"},[t._v("menu1")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu2")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu3")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu4")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu5")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu6")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu7")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu8")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu9")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu10")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu11")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu12")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu13")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu14")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu15")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu16")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu17")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu18")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu19")]),t._v(" "),l("div",{staticClass:"test-block"},[t._v("menu20")])]),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("p",{domProps:{textContent:t._s("<scrollView :vertical='false'>")}}),t._v(" "),l("p",{domProps:{textContent:t._s(" <div>...</div>")}}),t._v(" "),l("p",{domProps:{textContent:t._s("</scrollView>")}}),t._v(" "),l("button",{on:{click:function(){t.api.toast.show(t.$refs.scrollView.getOffset().toString())}}},[t._v("getOffset")]),t._v(" "),l("button",{on:{click:function(){t.api.toast.show(100*t.$refs.scrollView.getOffsetPercent()+"%")}}},[t._v("getOffsetPercent")]),t._v(" "),l("button",{on:{click:function(){t.$refs.scrollView.scrollToPercent(.5,!0)}}},[t._v("scrollToPercent")])],1),t._v(" "),l("table-view",{attrs:{"table-title":""}},[l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){return t.utils.navbar.push({path:"./attri"})}}},[l("table-view-cell-center",[t._v("属性")]),t._v(" "),l("table-view-cell-right")],1),t._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){return t.utils.navbar.push({path:"./event"})}}},[l("table-view-cell-center",[t._v("事件")]),t._v(" "),l("table-view-cell-right")],1),t._v(" "),l("table-view-cell",{attrs:{nextArrow:!0},on:{click:function(){return t.utils.navbar.push({path:"./method"})}}},[l("table-view-cell-center",[t._v("方法")]),t._v(" "),l("table-view-cell-right")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);