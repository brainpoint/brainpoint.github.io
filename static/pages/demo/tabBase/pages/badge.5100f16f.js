(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1069:function(t,e,n){"use strict";var o=n(770);n.n(o).a},1070:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"",""])},1267:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{}},[n("div",{staticClass:"notify-title"},[t._v("实例")]),t._v(" "),n("div",{staticClass:"notify-broad",style:{overflow:"auto",whiteSpace:"nowrap"}},[t._v("\n    使用如下方式来使用:\n    "),n("br"),t._v(" "),n("br"),t._v(" "),n("i",[t._v("value属性(类型 String); !value则不显示, ''显示小点")]),t._v(" "),n("p",{domProps:{textContent:t._s("<badge value='New'/>")}}),t._v(" "),n("badge",{attrs:{value:"New"}}),t._v(" "),n("p",{domProps:{textContent:t._s("<badge value='5'/>")}}),t._v(" "),n("badge",{attrs:{value:"5"}}),t._v(" "),n("p",{domProps:{textContent:t._s("<badge value='0'/>")}}),t._v(" "),n("badge",{attrs:{value:"0"}}),t._v(" "),t._v("''\\\"/>`\"/>\n    "),n("badge",{attrs:{value:""}}),t._v(" "),n("i",[t._v("rightTop属性(类型boolean), 附在元素上")]),t._v(" "),n("p",{domProps:{textContent:t._s("<button>")}}),t._v(" "),n("p",{domProps:{textContent:t._s("   <badge :rightTop='true' value='5'/>secondary")}}),t._v(" "),n("p",{domProps:{textContent:t._s("</button>")}}),t._v(" "),n("button",{staticClass:"btn-secondary"},[n("badge",{attrs:{rightTop:!0,value:"5"}}),t._v("secondary\n    ")],1)],1)])},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},649:function(t,e,n){"use strict";n.r(e);var o=n(1267),a=n(768);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n(1069);var i=n(0),u=Object(i.a)(a.default,o.a,o.b,!1,null,null,null);u.options.__file="badge.vue",e.default=u.exports},739:function(t,e,n){var o=n(740);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(2).default)("5efb2ae6",o,!0,{sourceMap:!1})},740:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".notify-title{margin-left:25px;margin-bottom:-10px;margin-top:10px;color:#8e8e8e}.notify-broad{min-height:50px;background:#f1f1f1;border-radius:10px;margin:20px;padding:10px;word-break:break-all}.notify-broad i{color:#8e8e8e;margin-top:5px;display:block}.dialog-left .febsui-dialog-container .febsui-dialog-content{text-align:left;white-space:nowrap}",""])},768:function(t,e,n){"use strict";n.r(e);var o=n(769),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=a.a},769:function(t,e,n){"use strict";e.__esModule=!0;i(n(3));var o=n(25),a=n(30),r=i(a);function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}n(739),e.default={layout:"demo",components:r.all_components,data:function(){return{utils:a.utils,api:a.api}},computed:(0,o.mapState)({}),created:function(){this.timer=new a.utils.timer},beforeDestroy:function(){this.timer.dispose(),this.timer=null},asyncData:function(){},beforeMount:function(){},mounted:function(){},methods:{viewWillAppear:function(){a.utils.navbar.setBarTitle("badge")},viewWillDisappear:function(){}}}},770:function(t,e,n){var o=n(1070);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(2).default)("0a8da0a4",o,!0,{sourceMap:!1})}}]);