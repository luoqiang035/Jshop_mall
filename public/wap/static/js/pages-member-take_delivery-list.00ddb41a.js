(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-take_delivery-list"],{1397:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"order-list"},[e("v-uni-view",{staticClass:"goods-detail"},t._l(t.ladingList,function(i,n){return e("v-uni-view",{key:n,staticClass:"order-item"},[e("v-uni-view",{staticClass:"cell-group"},[e("v-uni-view",{staticClass:"cell-item",staticStyle:{padding:"10upx 26upx 0 0"}},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-hd-title"},[t._v("提货码："+t._s(i.id))])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-text",{staticClass:"cell-ft-text"},[t._v(t._s(i.status_name))])],1)],1)],1),e("v-uni-view",{staticClass:"cell-group"},[e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-hd-title"},[t._v("订单编号："+t._s(i.order_id))])],1),e("v-uni-view",{staticClass:"cell-item-ft"})],1)],1),e("v-uni-view",{staticClass:"img-list"},t._l(i.order_items,function(i,n){return e("v-uni-view",{key:n,staticClass:"img-list-item"},[e("v-uni-image",{staticClass:"img-list-item-l little-img have-none",attrs:{src:i.image_url,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"img-list-item-r little-right"},[e("v-uni-view",{staticClass:"little-right-t"},[e("v-uni-view",{staticClass:"goods-name list-goods-name"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"goods-price"},[t._v("￥"+t._s(i.price))])],1),e("v-uni-view",{staticClass:"goods-item-c"},[e("v-uni-view",{staticClass:"goods-buy"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:i.addon,expression:"v.addon"}],staticClass:"goods-salesvolume"},[t._v(t._s(i.addon))]),e("v-uni-view",{staticClass:"goods-num"},[t._v("×"+t._s(i.nums))])],1)],1)],1)],1)}),1),e("v-uni-view",{staticClass:"order-list-button"},[2==i.status?e("v-uni-button",{staticClass:"btn btn-circle btn-g",attrs:{"hover-class":"btn-hover"},on:{click:function(e){e=t.$handleEvent(e),t.ladingDel(i.id)}}},[t._v("删除")]):t._e(),1==i.status?e("v-uni-button",{staticClass:"btn btn-circle btn-w",attrs:{"hover-class":"btn-hover"},on:{click:function(e){e=t.$handleEvent(e),t.ladingWrite(i.id)}}},[t._v("提货单核销")]):t._e()],1)],1)}),1)],1)],1)},s=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return s})},"2b6e":function(t,i,e){var n=e("759f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("144e24f7",n,!0,{sourceMap:!1,shadowMode:!1})},"65c0":function(t,i,e){"use strict";var n=e("2b6e"),s=e.n(n);s.a},"759f":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".segmented-control[data-v-9859edf0]{\n\ttop:44px;\n\t\n\twidth:100%;background-color:#fff;position:fixed;z-index:999}.segmented-control-item[data-v-9859edf0]{line-height:%?70?%}.order-list[data-v-9859edf0]{\n\t/* margin-top: 64upx; */}.order-item[data-v-9859edf0]{margin-bottom:%?20?%}.img-list[data-v-9859edf0]{margin-top:%?2?%}.cell-group[data-v-9859edf0],.img-list-item[data-v-9859edf0]{background-color:#fff}.cell-hd-title[data-v-9859edf0]{font-size:%?22?%;color:#666}.cell-ft-text[data-v-9859edf0]{top:0;font-size:%?22?%;color:#333}.order-list-button[data-v-9859edf0]{width:100%;background-color:#fff;text-align:right;padding:%?10?% %?26?%\n\t/* border-top: 2upx solid #f8f8f8; */}.order-list-button .btn[data-v-9859edf0]{height:%?50?%;line-height:%?50?%}.order-list-button .btn-w[data-v-9859edf0]{margin-left:%?20?%}.goods-num .cell-ft-text[data-v-9859edf0]{color:#999;line-height:%?32?%}.goods-num .cell-ft-text[data-v-9859edf0]:first-child{margin-left:%?10?%}.order-none[data-v-9859edf0]{text-align:center;padding:%?200?% 0}.order-none-img[data-v-9859edf0]{width:%?274?%;height:%?274?%}",""])},"7edd":function(t,i,e){"use strict";e.r(i);var n=e("f430"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=s.a},"81ce":function(t,i,e){"use strict";e.r(i);var n=e("1397"),s=e("7edd");for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);e("65c0");var l=e("2877"),o=Object(l["a"])(s["default"],n["a"],n["b"],!1,null,"9859edf0",null);i["default"]=o.exports},f430:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{ladingList:[]}},onShow:function(){this.getLadingList()},methods:{getLadingList:function(){var t=this;this.$api.storeLadingList({},function(i){t.ladingList=i.data})},ladingWrite:function(t){this.$common.navigateTo("./index?id="+t)},ladingDel:function(t){var i=this;this.$common.modelShow("提示","删除提货单后将无法找回！",function(e){var n={lading_id:t};i.$api.ladingDel(n,function(t){i.$common.successToShow(t.msg,function(t){i.getLadingList()})})})}}};i.default=n}}]);