(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{237:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"listArtist"},[this.profileImageUrl?e("div",{staticClass:"profileIcon myPageIcon",style:{"background-image":"url("+this.profileImageUrl+")"}}):e("div",{staticClass:"profileIcon myPageIcon",style:{"background-image":"url(/img/icon_blank.svg)"}}),this._v(" "),e("h3",{staticClass:"textCenter"},[e("nuxt-link",{staticClass:"linkColor",attrs:{to:"/artists/"+this.accountName}},[this._v(this._s(this.displayName))])],1)])};n._withStripped=!0;var i,o=a(1),s=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)},function(t,e){function a(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),r=function(t,e,a,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(o<3?i(s):o>3?i(e,a,s):i(e,a))||s);return o>3&&s&&Object.defineProperty(e,a,s),s},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),r([Object(o.Prop)()],e.prototype,"profileImageUrl",void 0),r([Object(o.Prop)()],e.prototype,"accountName",void 0),r([Object(o.Prop)()],e.prototype,"displayName",void 0),r([Object(o.Prop)()],e.prototype,"permissions",void 0),r([Object(o.Prop)()],e.prototype,"skills",void 0),e=r([Object(o.Component)({})],e)}(o.Vue),l=a(3),u=Object(l.a)(c,n,[],!1,null,null,null);e.a=u.exports},280:function(t,e,a){t.exports=a.p+"img/38eb5b0.jpg"},281:function(t,e,a){t.exports=a.p+"img/095854a.jpg"},282:function(t,e,a){t.exports=a.p+"img/b918e79.svg"},283:function(t,e,a){t.exports=a.p+"img/c4802c6.png"},284:function(t,e,a){t.exports=a.p+"img/4a7351b.png"},285:function(t,e,a){t.exports=a.p+"img/b1e4197.png"},297:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top marginTopAddSp"},[n("no-ssr",[n("div",{staticClass:"slider"},[n("swiper",{attrs:{options:t.swiperOption}},[n("swiper-slide",[n("div",{staticClass:"slider__content"},[n("nuxt-link",{attrs:{to:"/account/signup"}},[n("img",{staticClass:"slider__img",attrs:{src:a(280),alt:"夢を叶える、行動で応援する　WishHub"}})])],1)]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"slider__content"},[n("nuxt-link",{attrs:{to:"/account/signup"}},[n("img",{staticClass:"slider__img",attrs:{src:a(281),alt:"夢を叶える、行動で応援する　WishHub"}})])],1)]),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),t._v(" "),n("div",{staticClass:"textCenter mainVisualText hoverNone"},[n("img",{staticClass:"mainVisualLogo",attrs:{src:a(282),alt:"WishHub"}}),t._v(" "),n("p",[t._v("教えてほしい、手伝ってほしい、相談に乗ってほしい"),n("br"),t._v("誰かの「お願い」をみんなで解決するサービス")]),t._v(" "),n("nuxt-link",{attrs:{to:"/account/signup"}},[n("p",{staticClass:"dmmyButton"},[t._v("今すぐ始める")])])],1)]),t._v(" "),n("div",{staticClass:"container bottomAdd"},[n("h2",{staticClass:"black marginTop60 marginTopOnly"},[t._v("WishHub（ウィッシュハブ）とは")]),t._v(" "),t._m(0),t._v(" "),n("p",{staticClass:"textCenter bold"},[t._v("＼みんなのクエストに参加しよう！／")]),t._v(" "),n("div",{staticClass:"topButton"},[n("nuxt-link",{staticClass:"rewardButton",attrs:{to:"/bounties"}},[t._v("クエストを見る")]),t._v(" "),n("nuxt-link",{staticClass:"rewardButton ChangeButton",attrs:{to:"rewards"}},[t._v("ショップを見る")])],1),t._v(" "),n("h3",{staticClass:"black textCenter bold"},[t._v("～WishHubの特徴～")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",{staticClass:"textCenter bold"},[t._v("＼みんなのクエストを応援しよう！／")]),t._v(" "),n("div",{staticClass:"topButton"},[n("nuxt-link",{staticClass:"rewardButton",attrs:{to:"/bounties"}},[t._v("クエストを見る")]),t._v(" "),n("nuxt-link",{staticClass:"rewardButton ChangeButton",attrs:{to:"rewards"}},[t._v("ショップを見る")])],1),t._v(" "),n("nuxt-link",{attrs:{to:"/account/signup"}},[t._v("サインインページに飛ぶ")]),t._v(" "),n("b2c-auth"),t._v(" "),n("h2",{staticClass:"black marginTop60"},[t._v("みんなのクエスト")]),t._v(" "),n("div",{staticClass:"bountyList personalItem"},t._l(t.bountiesInfomal,function(e){return n("CardBox",{key:e.bountyId,attrs:{backgroundImageUrl:e.bountyImageUrl,bountyId:e.bountyId,titleName:e.bountyName,bountyType:e.bountyType,participationEndDate:e.participationEndDate,quantity:e.quantity,description:e.description,pointName:t.pointName,dialogProfileImageUrl:e.account.profileImageUrl,accountName:e.account.accountName,displayName:e.account.displayName,accountDescription:e.account.description,profileImageUrl:e.account.profileImageUrl,bountyStatusShow:!1,bountyCompleteStatus:e.completeStatus,bountyPublishStatus:e.publishStatus,bountyCreateStatus:e.createStatus,joinCount:e.joinCount,participantLimit:e.participantLimit,commentCount:e.commentCount}})}),1),t._v(" "),n("div",{staticClass:"textRight"},[n("nuxt-link",{staticClass:"moreButton",attrs:{to:"/bounties"}},[t._v("もっと見る")])],1),t._v(" "),n("p",{staticClass:"textCenter bold"},[t._v("＼みんなのクエストを応援しよう！／")]),t._v(" "),n("div",{staticClass:"topButton"},[n("nuxt-link",{staticClass:"rewardButton ChangeButton",attrs:{to:"/account/signup"}},[t._v("今すぐ始める")])],1),t._v(" "),n("h2",{staticClass:"black marginTop60"},[t._v("公式のクエスト")]),t._v(" "),n("div",{staticClass:"bountyList personalItem"},t._l(t.bountiesOfficial,function(e){return n("CardBox",{key:e.bountyId,attrs:{backgroundImageUrl:e.bountyImageUrl,bountyId:e.bountyId,titleName:e.bountyName,bountyType:e.bountyType,participationEndDate:e.participationEndDate,quantity:e.quantity,description:e.description,pointName:t.pointName,dialogProfileImageUrl:e.account.profileImageUrl,accountName:e.account.accountName,displayName:e.account.displayName,accountDescription:e.account.description,profileImageUrl:e.account.profileImageUrl,bountyStatusShow:!1,bountyCompleteStatus:e.completeStatus,bountyPublishStatus:e.publishStatus,bountyCreateStatus:e.createStatus,joinCount:e.joinCount,participantLimit:e.participantLimit,commentCount:e.commentCount}})}),1),t._v(" "),n("div",{staticClass:"textRight"},[n("nuxt-link",{staticClass:"moreButton",attrs:{to:"/bounties"}},[t._v("もっと見る")])],1),t._v(" "),n("h2",{staticClass:"black marginTop60"},[t._v("ショップ")]),t._v(" "),n("div",{staticClass:"bountyList personalItem"},t._l(t.rewards,function(e){return n("CardBox",{key:e.rewardId,attrs:{profileImageUrl:e.account.profileImageUrl,accountName:e.account.accountName,displayName:e.account.displayName,backgroundImageUrl:e.rewardImageUrl,rewardId:e.rewardId,tokenTypeCode:e.tokenTypeCode,titleName:e.rewardName,exchangeRate:e.exchangeRate,exchangeEndDate:e.exchangeEndDate,quantity:e.quantity,description:e.description,pointName:t.pointName,isOwn:!1,isEdit:!1,dialogProfileImageUrl:e.account.profileImageUrl,ownQuantity:e.ownQuantity,rewardStatusShow:!1,rewardPublishStatus:e.publishStatus,rewardCreateStatus:e.createStatus}})}),1),t._v(" "),n("div",{staticClass:"textRight"},[n("nuxt-link",{staticClass:"moreButton",attrs:{to:"/rewards"}},[t._v("もっと見る")])],1),t._v(" "),n("p",{staticClass:"textCenter bold"},[t._v("＼みんなのクエストを応援しよう！／")]),t._v(" "),n("div",{staticClass:"topButton"},[n("nuxt-link",{staticClass:"rewardButton ChangeButton",attrs:{to:"/account/signup"}},[t._v("今すぐ始める")])],1)],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"textCenter"},[t._v("\n        小さな願いをつないで価値に変えるサービスです。"),a("br"),a("br"),t._v("\n        「子供にかけっこで1番になってほしい！」"),a("br"),t._v("\n\n        「サッカーでレギュラーをとりたい！」"),a("br"),t._v("\n        「自分の作品を見てほしい！」"),a("br"),t._v("\n        「子育ての相談に乗ってほしい！」"),a("br"),t._v("\n        ："),a("br"),a("br"),t._v("\n        自分の願いを手伝ってもらったり、誰かの願いを手伝ったり"),a("br"),t._v("\n        お互いに協力すればするほど、コイン(wip)が貯まり、素敵なアイテムと交換できます。\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"howTo"},[n("div",{staticClass:"howToContents"},[n("img",{staticClass:"howToImg",attrs:{src:a(283)}}),t._v(" "),n("h3",{staticClass:"textCenter"},[t._v("得意やできるコトで募集する")]),t._v(" "),n("p",[t._v("\n              得意なコトやできるコト、経験や知識を登録して、あなたを必要としている相手を募集しよう！"),n("br"),t._v("\n              「サッカーが得意！」「英語が話せる！」「子育ての悩みを聞ける！」など\n            ")])]),t._v(" "),n("div",{staticClass:"howToContents"},[n("img",{staticClass:"howToImg",attrs:{src:a(284)}}),t._v(" "),n("h3",{staticClass:"textCenter"},[t._v("クエストで募集する")]),t._v(" "),n("p",[t._v("\n            「教えてほしい！」「手伝ってほしい！」「相談に乗ってほしい！」などを登録して、あなたを応援してくれる相手を募集しよう！"),n("br"),t._v("\n            内容や場所などチャットで交渉可能\n          ")])]),t._v(" "),n("div",{staticClass:"howToContents"},[n("img",{staticClass:"howToImg",attrs:{src:a(285)}}),t._v(" "),n("h3",{staticClass:"textCenter"},[t._v("コイン(wip)を貯めてアイテムと獲得する")]),t._v(" "),n("p",[t._v("\n              クエストでもらえるコイン(wip)を貯めて、素敵なアイテムと交換しよう！"),n("br"),t._v("\n              アイテムの種類は今後も追加予定\n            ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"futureText"},[e("h3",{staticClass:"textCenter"},[this._v("～WishHubが実現したい未来～")]),this._v(" "),e("p",{staticClass:"textCenter"},[this._v("\n          誰もが 誰かの小さな願いや目標に共感して、“行動”で貢献しあえる社会を目指します。"),e("br"),e("br"),this._v("\n          “行動”による貢献は、改ざんされにくいブロックチェーンに刻まれることで証明され、"),e("br"),this._v("\n          「信頼」と言う価値に変えます。"),e("br"),this._v("\n          ※α版はブロックチェーンの実装はされていません。")])])}];n._withStripped=!0;var o,s=a(1),r=a(30),c=a(222),l=a(237),u=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)},function(t,e){function a(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),p=function(t,e,a,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(o<3?i(s):o>3?i(e,a,s):i(e,a))||s);return o>3&&s&&Object.defineProperty(e,a,s),s},_=function(t,e,a,n){return new(a||(a=Promise))(function(i,o){function s(t){try{c(n.next(t))}catch(t){o(t)}}function r(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):new a(function(e){e(t.value)}).then(s,r)}c((n=n.apply(t,e||[])).next())})},v=function(t,e){var a,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],n=0}finally{a=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.asyncData=function(t){var e=t.app;return _(this,void 0,void 0,function(){var t,a,n,i,o,s,c,l;return v(this,function(u){switch(u.label){case 0:return 6,t=6,a=3,n=8,[4,e.$axios.$get(r.a.API_URL.REWARD,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:6,sort:r.a.API_PARAM.SORT_NEW}})];case 1:return i=u.sent(),[4,e.$axios.$get(r.a.API_URL.BOUNTIES,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:t,sort:r.a.API_PARAM.SORT_NEW,display:1}})];case 2:return o=u.sent(),[4,e.$axios.$get(r.a.API_URL.BOUNTIES,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:a,sort:r.a.API_PARAM.SORT_NEW,display:2}})];case 3:return s=u.sent(),[4,e.$axios.$get(r.a.API_URL.ACCOUNT_APPROVED,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:n,sort:r.a.API_PARAM.SORT_NEW}})];case 4:return c=u.sent(),l=r.a.POINT.WIP,[2,{profiles:c,bountiesInfomal:o,bountiesOfficial:s,pointName:l,rewards:i,swiperOption:{spaceBetween:0,speed:600,centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}}]}})})},e=p([Object(s.Component)({components:{CardBox:c.a,CardIcon:l.a}})],e)}(s.Vue),m=a(3),b=Object(m.a)(d,n,i,!1,null,null,null);e.default=b.exports}}]);