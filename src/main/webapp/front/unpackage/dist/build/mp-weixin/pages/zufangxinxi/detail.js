(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zufangxinxi/detail"],{"0861":function(t,n,e){"use strict";e.r(n);var a=e("4669"),s=e("b46e");for(var r in s)"default"!==r&&function(t){e.d(n,t,(function(){return s[t]}))}(r);e("88b6");var i,u=e("f0c5"),o=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=o.exports},"0c21":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=s(e("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,a,s,r,i){try{var u=t[r](i),o=u.value}catch(c){return void e(c)}u.done?n(o):Promise.resolve(o).then(a,s)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(a,s){var i=t.apply(n,e);function u(t){r(i,a,s,u,o,"next",t)}function o(t){r(i,a,s,u,o,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(t){var n=this;return i(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.id=t.id,t.userid&&(n.userid=t.userid);case 2:case"end":return e.stop()}}),e)})))()},onShow:function(n){var e=this;return i(a.default.mark((function n(){var s,r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.init(),s=t.getStorageSync("nowTable"),n.next=4,e.$api.session(s);case 4:r=n.sent,e.user=r.data,e.btnColor=e.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return n.stop()}}),n)})))()},destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","zufangxinxi"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onAcrossTap:function(n,e,a,s,r){if("是"!=e||"是"==this.detail.sfsh){if(t.setStorageSync("crossTable","zufangxinxi"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",a),t.setStorageSync("statusColumnValue",r),t.setStorageSync("tips",s),""!=a&&!a.startsWith("[")){var i=t.getStorageSync("crossObj");for(var u in i)if(u==a&&i[u]==r)return void this.$utils.msg(s)}this.$utils.jump("../".concat(n,"/add-or-update?cross=true"))}else this.$utils.msg("请审核通过后再操作")},init:function(){var t=this;return i(a.default.mark((function n(){var e;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.info("zufangxinxi",t.id);case 2:e=n.sent,t.detail=e.data,t.swiperList=t.detail.fangyuantupian?t.detail.fangyuantupian.split(","):[],t.detail.beizhu=t.detail.beizhu.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return n.stop()}}),n)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var n=this;return i(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.endSuccess(t.size,n.hasNext);case 1:case"end":return e.stop()}}),e)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(n){var e=this;n=e.$base.url+n,t.downloadFile({url:n,success:function(t){200===t.statusCode&&(e.$utils.msg("下载成功"),window.open(n))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=this;return i(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$utils.jump("../discusszufangxinxi/add-or-update?refid=".concat(t.id));case 1:case"end":return n.stop()}}),n)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=this;return i(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.detail.sfsh){n.next=3;break}return t.$utils.msg("请选择审核状态"),n.abrupt("return");case 3:if(t.detail.shhf){n.next=6;break}return t.$utils.msg("请填写审核回复"),n.abrupt("return");case 6:return"通过"==t.detail.sfsh&&(t.detail.sfsh="是"),"不通过"==t.detail.sfsh&&(t.detail.sfsh="否"),n.next=10,t.$api.update("zufangxinxi",t.detail);case 10:t.$utils.msg("审核成功"),t.$refs.popup.close();case 12:case"end":return n.stop()}}),n)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};n.default=u}).call(this,e("543d")["default"])},4669:function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"6293"))},uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"4df3"))}},s=function(){var t=this,n=t.$createElement,e=(t._self._c,t.isAuth("zufangxinxi","支付")),a=t.isAuthFront("zufangxinxi","支付"),s=t.isAuth("zufangxinxi","支付"),r=t.isAuth("zufangxinxi","审核"),i=t.isAuthFront("zufangxinxi","审核");t.$mp.data=Object.assign({},{$root:{m0:e,m1:a,m2:s,m3:r,m4:i}})},r=[]},"88b6":function(t,n,e){"use strict";var a=e("f6d9"),s=e.n(a);s.a},ad1f:function(t,n,e){"use strict";(function(t){e("730b");a(e("66fd"));var n=a(e("0861"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},b46e:function(t,n,e){"use strict";e.r(n);var a=e("0c21"),s=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=s.a},f6d9:function(t,n,e){}},[["ad1f","common/runtime","common/vendor"]]]);