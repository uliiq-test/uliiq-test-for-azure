(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{239:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjMgMjgxLjA2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZn08L3N0eWxlPjwvZGVmcz48ZyBpZD0i44Os44Kk44Ok44O8XzIiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDIiPjxnIGlkPSJfMiIgZGF0YS1uYW1lPSIyIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNjMgMTkyLjI2VjczLjc4YTQwLjc1IDQwLjc1IDAgMCAwLTM4LjktNDAuNzEgNDAuNTEgNDAuNTEgMCAwIDEgNi45IDIyLjY5djExOC40OEE0MC43NiA0MC43NiAwIDAgMSAyOTAuMjQgMjE1SDExNy45MmwtMzQuMjUgMTcuMjFhNDAuNzMgNDAuNzMgMCAwIDAgOC4wOS44MWgxNzIuMzJsOTUuNTggNDhMMzI3IDIzMi43NGE0MC43NyA0MC43NyAwIDAgMCAzNi00MC40OHoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNzEuMjQgMEg0MC43NkE0MC43NiA0MC43NiAwIDAgMCAwIDQwLjc2djExOC40OGE0MC43NyA0MC43NyAwIDAgMCAzNiA0MC40OEwzLjM0IDI0OGw5NS41OC00OGgxNzIuMzJBNDAuNzYgNDAuNzYgMCAwIDAgMzEyIDE1OS4yNFY0MC43NkE0MC43NiA0MC43NiAwIDAgMCAyNzEuMjQgMHpNOTYuNDQgMTEzLjY4YTEwLjkgMTAuOSAwIDEgMSAxMC45LTEwLjg5IDEwLjg0IDEwLjg0IDAgMCAxLTEwLjkgMTAuODl6bTU3LjU4IDBhMTAuOSAxMC45IDAgMSAxIDEwLjktMTAuODlBMTAuODQgMTAuODQgMCAwIDEgMTU0IDExMy42OHptNTcuNTggMGExMC45IDEwLjkgMCAxIDEgMTAuOS0xMC44OSAxMC44NCAxMC44NCAwIDAgMS0xMC45IDEwLjg5eiIvPjwvZz48L2c+PC9zdmc+"},374:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mypageTop marginTopAdd"},[a("div",{staticClass:"container"},[a("div",{staticClass:"profileArea"},[t.isCreater?a("div",[a("nuxt-link",{staticClass:"textPink",attrs:{to:"/rewards/"+this.$route.params.id}},[a("span",{staticClass:"chatBack"},[t._v("＜")]),t._v("アイテムに戻る")])],1):a("div",[a("nuxt-link",{staticClass:"textPink",attrs:{to:"/account/my"}},[a("span",{staticClass:"chatBack"},[t._v("＜")]),t._v("マイページに戻る")])],1),t._v(" "),a("h3",{staticClass:"bountyTitle"},[t._v(t._s(t.reward.rewardName))]),t._v(" "),a("div",{staticClass:"projectData"},[a("p",{staticClass:"textWhite"},[t._v("ステータス："+t._s(t.rewardStatsName))])]),t._v(" "),a("div",{staticClass:"projectData"},[a("p",{staticClass:"textWhite"},[t._v("交換コイン："),a("span",[t._v(t._s(t._f("zeroToNone")(t._f("toLocaleString")(t.reward.exchangeRate)))+" "+t._s(t._f("delete")(t.pointName,0==t.reward.exchangeRate||null==t.reward.exchangeRate))+" ")])]),t._v(" "),a("p",{staticClass:"textWhite"},[t._v("個数："),a("span",[t._v(t._s(t._f("toLocaleString")(t.reward.ownQuantity))+" / "+t._s(t._f("toLocaleString")(t.reward.quantity)))])])]),t._v(" "),t._m(0),a("p",{staticClass:"caution"},[t._v("チャットを終了するボタンを押すとメッセージのやりとりはできなくなりますが、履歴が消えることはありません")]),t._v(" "),a("p")])])]),t._v(" "),a("div",{staticClass:"container rewardChatArea"},[a("div",{staticClass:"activityArea bottomAddChatArea"},[t._l(t.rewardComments,function(e){return a("CardUser",{key:e.rewardCommentId,attrs:{cardType:"comment",profileImageUrl:e.account.profileImageUrl,profileIconNo:e.account.profileIconNo,displayName:e.account.displayName,date:e.postedDateTime,accountName:e.account.accountName,description:e.comment,commentId:e.rewardCommentId,replyRewardComment:e.replyComment,commentLikeCount:null,canPostComment:e.canPostComment,commentAccountName:e.account.accountName,isRewardChat:!0,commentType:"Reward"},on:{refreshComment:function(e){t.refreshComment()}}})}),t._v(" "),a("div",{staticClass:"submitButtonArea"},[a("a",{staticClass:"rewardButton chatEnd",class:{disable:t.isProcessing||!t.canPostComment},on:{click:function(e){t.closeChat()}}},[t._v("チャットを終了する")])]),t._v(" "),a("no-ssr",[a("infinite-loading",{on:{infinite:t.infiniteHandlerComments}},[a("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),a("span",{attrs:{slot:"no-results"},slot:"no-results"})])],1),t._v(" "),a("div",{staticClass:"fixedBottom"},[a("div",{staticClass:"messageEntry"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"discription",rows:"4",cols:"30",placeholder:"メッセージ",disabled:!t.canPostComment},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),a("a",{staticClass:"submitButton",class:{disable:t.isProcessing||!t.canPostComment},on:{click:function(e){t.addComment(t.message)}}},[t._v("送信する")])])])],2)]),t._v(" "),a("ModalDialog",{attrs:{messages:t.dialogMessage,showLoginButton:t.showLoginButton,imageUrl:t.dialogImageUrl,open:t.showModalDialog},on:{close:function(e){t.closeModalDialog()}}})],1)};o._withStripped=!0;var n,s=a(1),r=a(5),i=a(232),c=a(248),l=a(77),u=a(233),m=a.n(u),p=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)},function(t,e){function a(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),d=function(t,e,a,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,o);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(r=(s<3?n(r):s>3?n(e,a,r):n(e,a))||r);return s>3&&r&&Object.defineProperty(e,a,r),r},g=function(t,e,a,o){return new(a||(a=Promise))(function(n,s){function r(t){try{c(o.next(t))}catch(t){s(t)}}function i(t){try{c(o.throw(t))}catch(t){s(t)}}function c(t){t.done?n(t.value):new a(function(e){e(t.value)}).then(r,i)}c((o=o.apply(t,e||[])).next())})},A=function(t,e){var a,o,n,s,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,o&&(n=2&s[0]?o.return:s[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,s[1])).done)return n;switch(o=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,o=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(n=(n=r.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){r=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){r.label=s[1];break}if(6===s[0]&&r.label<n[1]){r.label=n[1],n=s;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(s);break}n[2]&&r.ops.pop(),r.trys.pop();continue}s=e.call(t,r)}catch(t){s=[6,t],o=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}};s.Vue.directive("linkified",m.a);var M=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isProcessing=!1,e.message=null,e.offsetJoins=r.a.API_PARAM.LIMIT_DEFAULT,e.offsetComments=r.a.API_PARAM.LIMIT_DEFAULT,e.showModalDialog=!1,e.showLoginButton=!1,e.canPostComment=!1,e}return p(e,t),e.prototype.asyncData=function(t){var e=t.app,a=t.store,o=t.route,n=t.redirect,s=t.error;return g(this,void 0,void 0,function(){var t,c,l,u,m,p,d,g;return A(this,function(A){switch(A.label){case 0:return t=new i.a,c="",l=!1,[4,e.$axios.$get(r.a.API_URL.REWARD+"/"+o.params.id).catch(function(e){t.putError(e.response.status)})];case 1:return u=A.sent(),[4,e.$axios.$get(r.a.API_URL.REWARD_COMMENTS.replace("{reward_id}",o.params.id).replace("{owner_name}",o.params.name),{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT}}).catch(function(e){t.putError(e.response.status)})];case 2:return m=A.sent(),[4,e.$axios.$get(r.a.API_URL.REWARD_OWNERS.replace("{reward_id}",o.params.id)+"/"+o.params.name).catch(function(e){t.putError(e.response.status)})];case 3:return p=A.sent(),t.isError()?[2,t.procError(a,o,n,s)]:(d=!1,u.account.accountName===a.state.myProfile.accountName&&(d=!0),c=1===u.publishStatus?"公開中":0===u.createStatus?"作成中":"非公開",l=p.canPostComment||!1,g=r.a.POINT.WIZ,[2,{reward:u,isCreater:d,pointName:g,rewardStatsName:c,rewardComments:m,canPostComment:l}])}})})},e.prototype.addComment=function(t){return g(this,void 0,void 0,function(){var e,a=this;return A(this,function(o){switch(o.label){case 0:return this.isProcessing||!this.canPostComment?[2]:(this.isProcessing=!0,e=new FormData,t?(e.append("RewardId",this.$route.params.id),e.append("OwnerName",this.$route.params.name),e.append("Comment",t),[4,this.$axios.post(r.a.API_URL.REWARD_COMMENTS.replace("{reward_id}",this.$route.params.id).replace("{owner_name}",this.$route.params.name),e).then(function(){a.refreshComment(),a.message=null}).catch(function(t){400===t.response.status?a.openModalDialog(t.response.data.BadRequest,r.a.TemplateImg.DIALOG_WARN_IMG_URL):401===t.response.status?(a.showLoginButton=!0,a.openModalDialog(r.a.MESSAGE.ERR_401,r.a.TemplateImg.DIALOG_WARN_IMG_URL),a.$store.dispatch("logout")):a.openModalDialog(r.a.MESSAGE.ERR_ELSE,r.a.TemplateImg.DIALOG_WARN_IMG_URL)})]):[3,2]);case 1:o.sent(),o.label=2;case 2:return this.isProcessing=!1,[2]}})})},e.prototype.closeChat=function(){return g(this,void 0,void 0,function(){var t=this;return A(this,function(e){switch(e.label){case 0:return this.isProcessing||!this.canPostComment?[2]:(this.isProcessing=!0,[4,this.$axios.post(r.a.API_URL.REWARD_COMMENTS_CLOSE.replace("{reward_id}",this.$route.params.id).replace("{own_name}",this.$route.params.name)).then(function(){t.refreshComment(),t.message=null}).catch(function(e){400===e.response.status?t.openModalDialog(e.response.data.BadRequest,r.a.TemplateImg.DIALOG_WARN_IMG_URL):401===e.response.status?(t.showLoginButton=!0,t.openModalDialog(r.a.MESSAGE.ERR_401,r.a.TemplateImg.DIALOG_WARN_IMG_URL),t.$store.dispatch("logout")):t.openModalDialog(r.a.MESSAGE.ERR_ELSE,r.a.TemplateImg.DIALOG_WARN_IMG_URL)})]);case 1:return e.sent(),this.isProcessing=!1,[2]}})})},e.prototype.refreshComment=function(){var t=this;this.$axios.get(r.a.API_URL.REWARD_COMMENTS.replace("{reward_id}",this.$route.params.id).replace("{owner_name}",this.$route.params.name),{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT}}).then(function(e){t.rewardComments=e.data,t.$axios.get(r.a.API_URL.REWARD_OWNERS.replace("{reward_id}",t.$route.params.id)+"/"+t.$route.params.name).then(function(e){var a=e.data;t.canPostComment=a.canPostComment||!1}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})},e.prototype.openModalDialog=function(t,e){this.dialogMessage=t,this.dialogImageUrl=e,this.showModalDialog=!0},e.prototype.closeModalDialog=function(){this.showModalDialog=!1,this.showLoginButton=!1},e.prototype.infiniteHandlerComments=function(t){var e=this;this.$axios.get(r.a.API_URL.REWARD_COMMENTS.replace("{reward_id}",this.$route.params.id).replace("{owner_name}",this.$route.params.name),{params:{offset:this.offsetComments,limit:r.a.API_PARAM.LIMIT_DEFAULT}}).then(function(a){var o;a.data.length?(e.offsetComments+=r.a.API_PARAM.LIMIT_DEFAULT,(o=e.rewardComments).push.apply(o,a.data),t.loaded()):t.complete()}).catch(function(e){t.complete()})},e=d([Object(s.Component)({components:{CardUser:c.a,ModalDialog:l.a}})],e)}(s.Vue),h=a(2),f=Object(h.a)(M,o,[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("アイテム交換者との1対1でメッセージのやりとりができます。"),e("br"),this._v("\n                        個人情報のやりとりが発生する場合には、取り扱いに十分ご注意ください。"),e("br"),this._v("\n                        チャット終了後、チャットを終了するボタンを押してください。"),e("br")])}],!1,null,null,null);e.default=f.exports}}]);