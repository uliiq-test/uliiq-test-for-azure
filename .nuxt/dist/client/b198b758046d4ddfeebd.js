(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{292:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var o=function(t,e,a,o){return new(a||(a=Promise))(function(n,r){function i(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){t.done?n(t.value):new a(function(e){e(t.value)}).then(i,s)}c((o=o.apply(t,e||[])).next())})},n=function(t,e){var a,o,n,r,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,o&&(n=2&r[0]?o.return:r[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,r[1])).done)return n;switch(o=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,o=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){i.label=r[1];break}if(6===r[0]&&i.label<n[1]){i.label=n[1],n=r;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(r);break}n[2]&&i.ops.pop(),i.trys.pop();continue}r=e.call(t,i)}catch(t){r=[6,t],o=0}finally{a=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},r=function(){function t(){this.responseStatuses=new Array}return t.prototype.putError=function(t){this.responseStatuses.push(t)},t.prototype.checkError=function(){for(var t=0,e=this.responseStatuses;t<e.length;t++){var a=e[t];if(!String(a).startsWith("2"))return a}return"200"},t.prototype.procError=function(t,e,a,r){return o(this,void 0,void 0,function(){var o;return n(this,function(n){switch(n.label){case 0:return[4,this.checkError()];case 1:switch(o=n.sent(),String(o)){case"401":return[3,2];case"200":return[3,4]}return[3,5];case 2:return[4,t.dispatch("addNextPagePath",e.fullPath)];case 3:return n.sent(),[2,a("/account/signup")];case 4:return[3,6];case 5:return r({statusCode:o,message:"予期しないエラーが発生しました"}),[2];case 6:return[2]}})})},t}()},365:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$store.state.myProfile.profileBackgroundImageUrl?a("div",{staticClass:"mainVisual myPage marginTopAdd",style:{"background-image":"url("+t.$store.state.myProfile.profileBackgroundImageUrl+")"}}):a("div",{staticClass:"mainVisual myPage marginTopAdd bounty1",style:{"background-image":"url(/img/main_bkank.jpg)"}}),t._v(" "),a("div",{staticClass:"mypageTop"},[a("div",{staticClass:"container"},[t.$store.state.myProfile.profileImageUrl?a("div",{staticClass:"profileIcon myPageIcon",style:{"background-image":"url("+t.$store.state.myProfile.profileImageUrl+")"}}):a("div",{staticClass:"profileIcon myPageIcon",style:{"background-image":"url(/img/icon_blank.svg)"}}),t._v(" "),a("div",{staticClass:"inlineBlock"},[a("nuxt-link",{staticClass:"textLink",attrs:{to:"/artists/"+t.$store.state.myProfile.accountName}},[a("h3",{staticClass:"pcNone padding10"},[t._v(t._s(t.$store.state.myProfile.displayName))])]),t._v(" "),a("div",{staticClass:"snsIcons"},[a("nuxt-link",{staticClass:"textLink",attrs:{to:"/artists/"+t.$store.state.myProfile.accountName}},[a("h3",{staticClass:"spNone padding10"},[t._v(t._s(t.$store.state.myProfile.displayName))])]),t._v(" "),a("nuxt-link",{staticClass:"grow2 rewardButton",attrs:{to:"/account/my/profile"}},[t._v("変更する")])],1)],1),t._v(" "),a("p",{staticClass:"textCenter"},[a("a",{staticClass:"textLink modal-syncer marginUnder30 startButton",on:{click:function(e){t.pushRegistAfter()}}},[t._v("WishHubの始め方")])]),t._v(" "),a("div",{staticClass:"profileArea"},[a("div",{staticClass:"grad-wrap"},[a("input",{staticClass:"grad-trigger",attrs:{id:"trigger1",type:"checkbox"}}),t._v(" "),a("label",{staticClass:"grad-btn",attrs:{for:"trigger1"}}),t._v(" "),a("div",{staticClass:"grad-item"},[a("Point",{attrs:{labelName:"保有ポイント：",tokens:t.profile.tokens,targetPointType:"PNT",unitName:t.pontName}}),t._v(" "),a("p",{directives:[{name:"linkified",rawName:"v-linkified"}],domProps:{innerHTML:t._s(t.$options.filters.newLine(t.$store.state.myProfile.description))}})],1)])])]),t._v(" "),a("div",{staticClass:"menuBg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"contentsArea"},[a("ul",{staticClass:"flexMenu"},[a("li",{class:{here:1==t.tabNum}},[1==t.tabNum?a("div",[t._v("行動履歴        ")]):a("div",[a("a",{on:{click:function(e){t.tabNumChange(1)}}},[t._v("行動履歴       ")])])]),t._v(" "),a("li",{class:{here:2==t.tabNum}},[2==t.tabNum?a("div",[t._v("応援中のお願い　")]):a("div",[a("a",{on:{click:function(e){t.tabNumChange(2)}}},[t._v("応援中のお願い　")])])]),t._v(" "),a("li",{class:{here:3==t.tabNum}},[3==t.tabNum?a("div",[t._v("所有中の景品    ")]):a("div",[a("a",{on:{click:function(e){t.tabNumChange(3)}}},[t._v("所有中の景品    ")])])]),t._v(" "),a("li",{class:{here:4==t.tabNum}},[4==t.tabNum?a("div",[t._v("フォロワー      ")]):a("div",[a("a",{on:{click:function(e){t.tabNumChange(4)}}},[t._v("フォロワー      ")])])]),t._v(" "),a("li",{class:{here:5==t.tabNum}},[5==t.tabNum?a("div",[t._v("フォロー        ")]):a("div",[a("a",{on:{click:function(e){t.tabNumChange(5)}}},[t._v("フォロー        ")])])])])])])])]),t._v(" "),a("div",{staticClass:"container"},[1==t.tabNum?a("div",{staticClass:"activityArea"},[t._l(t.activities,function(e){return a("CardUser",{key:e.accountActionId,attrs:{accountActionId:e.accountActionId,profileImageUrl:e.toAccount.profileImageUrl,displayName:e.fromAccount.displayName,date:e.createDateTime,accountName:e.fromAccount.accountName,description:e.description,replaceAccountName:e.toAccount.accountName,replaceAccountDisplayName:e.toAccount.displayName,replaceBounty:e.bounty,replaceReward:e.reward,dialogProfileImageUrl:t.$store.state.myProfile.profileImageUrl,activityLikeCount:e.likeCount,activityLikeQuantity:e.likeQuantity,isOwn:!0}})}),t._v(" "),a("infinite-loading",{on:{infinite:t.infiniteHandlerActivities}},[a("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),a("span",{attrs:{slot:"no-results"},slot:"no-results"})])],2):2==t.tabNum?a("div",{staticClass:"bountyList personalItem"},[t._l(t.bounties,function(e){return a("CardBox",{key:e.bountyId,attrs:{backgroundImageUrl:e.bountyImageUrl,profileImageUrl:e.account.profileImageUrl,accountName:e.account.accountName,displayName:e.account.displayName,bountyId:e.bountyId,titleName:e.bountyName,bountyType:e.bountyType,participationEndDate:e.participationEndDate,quantity:e.quantity,description:e.description,pointName:t.pontName,dialogProfileImageUrl:t.$store.state.myProfile.profileImageUrl,bountyStatusShow:!0,bountyCompleteStatus:e.completeStatus,bountyPublishStatus:e.publishStatus,bountyCreateStatus:e.createStatus,joinCount:e.joinCount,participantLimit:e.participantLimit,commentCount:e.commentCount}})}),t._v(" "),a("infinite-loading",{on:{infinite:t.infiniteHandlerBounties}},[a("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),a("span",{attrs:{slot:"no-results"},slot:"no-results"})])],2):3==t.tabNum?a("div",{staticClass:"bountyList personalItem"},[t._l(t.rewards,function(e){return a("CardBox",{key:e.rewardId,attrs:{backgroundImageUrl:e.rewardImageUrl,profileImageUrl:e.account.profileImageUrl,accountName:e.account.accountName,displayName:e.account.displayName,titleName:e.rewardName,quantity:e.quantity,ownQuantity:e.ownQuantity,description:e.description,rewardId:e.rewardId,tokenTypeCode:e.tokenTypeCode,exchangeRate:e.exchangeRate,isOwn:!0,isMyPage:!0,useChat:e.useChat,exchangeAccountName:t.$store.state.myProfile.accountName,dialogProfileImageUrl:t.$store.state.myProfile.profileImageUrl,isPreview:e.isPreview}})}),t._v(" "),a("infinite-loading",{on:{infinite:t.infiniteHandlerRewards}},[a("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),a("span",{attrs:{slot:"no-results"},slot:"no-results"})])],2):4==t.tabNum?a("div",{staticClass:"activityArea"},[t._l(t.followers,function(e){return a("CardUser",{key:e.accountId,attrs:{profileImageUrl:e.profileImageUrl,displayName:e.displayName,accountName:e.accountName,description:e.description,isFovFol:!0,dialogProfileImageUrl:t.$store.state.myProfile.profileImageUrl}})}),t._v(" "),a("infinite-loading",{on:{infinite:t.infiniteHandlerFollowers}},[a("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),a("span",{attrs:{slot:"no-results"},slot:"no-results"})])],2):5==t.tabNum?a("div",{staticClass:"activityArea"},[t._l(t.favorites,function(e){return a("CardUser",{key:e.accountId,attrs:{profileImageUrl:e.profileImageUrl,displayName:e.displayName,accountName:e.accountName,description:e.description,isFovFol:!0,dialogProfileImageUrl:t.$store.state.myProfile.profileImageUrl}})}),t._v(" "),a("infinite-loading",{on:{infinite:t.infiniteHandlerFavorites}},[a("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),a("span",{attrs:{slot:"no-results"},slot:"no-results"})])],2):t._e(),t._v(" "),t.showModalDialogFreeFormat?a("ModalDialogFreeFormat",{attrs:{description:t.dialogFreeFormat,yesButtionName:t.yesButtionNameFreeFormat,yesZButtionName:t.yesZButtionNameFreeFormat,canOuterClose:t.canOuterCloseFreeFormat},on:{closeModalDialogFreeFormatNo:function(e){t.closeModalDialogFreeFormatNo()}}}):t._e()],1)])};o._withStripped=!0;var n=a(8),r=a(91),i=a(292),s=a(298),c=a.n(s),l=a(304),u=a(299),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.tokens,function(e){return a("div",{key:e.tokenId},[e.tokenTypeCode==t.targetPointType?a("div",[a("p",[t._v(t._s(t.labelName)),a("span",{staticClass:"point"},[t._v(t._s(t._f("toLocaleString")(e.quantity))+t._s(t.unitName))])])]):t._e()])}),0)};p._withStripped=!0;var f,d=(f=function(t,e){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)},function(t,e){function a(){this.constructor=t}f(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),m=function(t,e,a,o){var n,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,a,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(r<3?n(i):r>3?n(e,a,i):n(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i},h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return d(e,t),m([Object(n.Prop)()],e.prototype,"tokens",void 0),m([Object(n.Prop)()],e.prototype,"targetPointType",void 0),m([Object(n.Prop)()],e.prototype,"labelName",void 0),m([Object(n.Prop)()],e.prototype,"unitName",void 0),e=m([Object(n.Component)({})],e)}(n.Vue),A=a(3),_=Object(A.a)(h,p,[],!1,null,null,null).exports,v=a(300),y=function(){var t=function(e,a){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(e,a)};return function(e,a){function o(){this.constructor=e}t(e,a),e.prototype=null===a?Object.create(a):(o.prototype=a.prototype,new o)}}(),I=function(t,e,a,o){var n,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,a,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(r<3?n(i):r>3?n(e,a,i):n(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i},g=function(t,e,a,o){return new(a||(a=Promise))(function(n,r){function i(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){t.done?n(t.value):new a(function(e){e(t.value)}).then(i,s)}c((o=o.apply(t,e||[])).next())})},P=function(t,e){var a,o,n,r,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,o&&(n=2&r[0]?o.return:r[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,r[1])).done)return n;switch(o=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,o=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){i.label=r[1];break}if(6===r[0]&&i.label<n[1]){i.label=n[1],n=r;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(r);break}n[2]&&i.ops.pop(),i.trys.pop();continue}r=e.call(t,i)}catch(t){r=[6,t],o=0}finally{a=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};n.Vue.directive("linkified",c.a);var b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tabNum=1,e.showModalDialogFreeFormat=!1,e.offsetActivities=r.a.API_PARAM.LIMIT_DEFAULT,e.offsetRewards=r.a.API_PARAM.LIMIT_DEFAULT,e.offsetBounties=r.a.API_PARAM.LIMIT_DEFAULT,e.offsetFollowers=r.a.API_PARAM.LIMIT_DEFAULT,e.offsetFavorites=r.a.API_PARAM.LIMIT_DEFAULT,e}return y(e,t),e.prototype.asyncData=function(t){var e=t.app,a=t.store,o=t.route,n=t.redirect,s=t.error;return g(this,void 0,void 0,function(){var t,c,l,u,p,f,d,m;return P(this,function(h){switch(h.label){case 0:return t=new i.a,[4,e.$axios.$get(r.a.API_URL.MY_ACTIVITIES,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).catch(function(e){t.putError(e.response.status)})];case 1:return c=h.sent(),[4,e.$axios.$get(r.a.API_URL.MY_REWARD_OWN,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).catch(function(e){t.putError(e.response.status)})];case 2:return l=h.sent(),[4,e.$axios.$get(r.a.API_URL.MY_BOUNTIES_JOIN,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).catch(function(e){t.putError(e.response.status)})];case 3:return u=h.sent(),[4,e.$axios.$get(r.a.API_URL.MY_FOLLOWERS,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).catch(function(e){t.putError(e.response.status)})];case 4:return p=h.sent(),[4,e.$axios.$get(r.a.API_URL.MY_FAVORITES,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).catch(function(e){t.putError(e.response.status)})];case 5:return f=h.sent(),[4,e.$axios.$get(r.a.API_URL.MY_PROFILE).catch(function(e){t.putError(e.response.status)})];case 6:return d=h.sent(),m=r.a.POINT.WIP,[4,t.procError(a,o,n,s)];case 7:return h.sent(),[2,{activities:c,rewards:l,bounties:u,followers:p,favorites:f,profile:d,pontName:m}]}})})},e.prototype.tabNumChange=function(t){this.tabNum=t},e.prototype.pushRegistAfter=function(){this.openModalDialogFreeFormat(r.a.HELPER_MESSAGE.M003_FREE_MESSAGE_01,"","RegistAfter",!0)},e.prototype.openModalDialogFreeFormat=function(t,e,a,o){this.dialogFreeFormat=t,this.yesButtionNameFreeFormat=e,this.modalFreeFormatEventType=a,this.canOuterCloseFreeFormat=!0,this.showModalDialogFreeFormat=!0},e.prototype.closeModalDialogFreeFormatNo=function(){this.showModalDialogFreeFormat=!1},e.prototype.infiniteHandlerActivities=function(t){return g(this,void 0,void 0,function(){var e,a=this;return P(this,function(o){switch(o.label){case 0:return 1!==this.tabNum?[2]:[4,this.$msalWishHub.silentLogin()];case 1:return e=o.sent(),[4,this.$store.dispatch("addAccessToken",e)];case 2:return o.sent(),this.$axios.get(r.a.API_URL.MY_ACTIVITIES,{params:{offset:this.offsetActivities,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).then(function(e){var o;e.data.length?(a.offsetActivities+=r.a.API_PARAM.LIMIT_DEFAULT,(o=a.activities).push.apply(o,e.data),t.loaded()):t.complete()}).catch(function(e){t.complete()}),[2]}})})},e.prototype.infiniteHandlerRewards=function(t){return g(this,void 0,void 0,function(){var e,a=this;return P(this,function(o){switch(o.label){case 0:return 2!==this.tabNum?[2]:[4,this.$msalWishHub.silentLogin()];case 1:return e=o.sent(),[4,this.$store.dispatch("addAccessToken",e)];case 2:return o.sent(),this.$axios.get(r.a.API_URL.MY_REWARD_OWN,{params:{offset:this.offsetRewards,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).then(function(e){var o;e.data.length?(a.offsetRewards+=r.a.API_PARAM.LIMIT_DEFAULT,(o=a.rewards).push.apply(o,e.data),t.loaded()):t.complete()}).catch(function(e){t.complete()}),[2]}})})},e.prototype.infiniteHandlerBounties=function(t){return g(this,void 0,void 0,function(){var e,a=this;return P(this,function(o){switch(o.label){case 0:return 3!==this.tabNum?[2]:[4,this.$msalWishHub.silentLogin()];case 1:return e=o.sent(),[4,this.$store.dispatch("addAccessToken",e)];case 2:return o.sent(),this.$axios.get(r.a.API_URL.MY_BOUNTIES_JOIN,{params:{offset:this.offsetBounties,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).then(function(e){var o;e.data.length?(a.offsetBounties+=r.a.API_PARAM.LIMIT_DEFAULT,(o=a.bounties).push.apply(o,e.data),t.loaded()):t.complete()}).catch(function(e){t.complete()}),[2]}})})},e.prototype.infiniteHandlerFollowers=function(t){return g(this,void 0,void 0,function(){var e,a=this;return P(this,function(o){switch(o.label){case 0:return 4!==this.tabNum?[2]:[4,this.$msalWishHub.silentLogin()];case 1:return e=o.sent(),[4,this.$store.dispatch("addAccessToken",e)];case 2:return o.sent(),this.$axios.get(r.a.API_URL.MY_FOLLOWERS,{params:{offset:this.offsetFollowers,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).then(function(e){var o;e.data.length?(a.offsetFollowers+=r.a.API_PARAM.LIMIT_DEFAULT,(o=a.followers).push.apply(o,e.data),t.loaded()):t.complete()}).catch(function(e){t.complete()}),[2]}})})},e.prototype.infiniteHandlerFavorites=function(t){return g(this,void 0,void 0,function(){var e,a=this;return P(this,function(o){switch(o.label){case 0:return 5!==this.tabNum?[2]:[4,this.$msalWishHub.silentLogin()];case 1:return e=o.sent(),[4,this.$store.dispatch("addAccessToken",e)];case 2:return o.sent(),this.$axios.get(r.a.API_URL.MY_FAVORITES,{params:{offset:this.offsetFavorites,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).then(function(e){var o;e.data.length?(a.offsetFavorites+=r.a.API_PARAM.LIMIT_DEFAULT,(o=a.favorites).push.apply(o,e.data),t.loaded()):t.complete()}).catch(function(e){t.complete()}),[2]}})})},e=I([Object(n.Component)({components:{CardUser:l.a,CardBox:u.a,Point:_,ModalDialogFreeFormat:v.a}})],e)}(n.Vue),N=Object(A.a)(b,o,[],!1,null,null,null);e.default=N.exports}}]);