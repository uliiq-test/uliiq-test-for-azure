(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{255:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"listArtist"},[t.profileImageUrl?a("div",{staticClass:"profileIcon myPageIcon",style:{"background-image":"url("+t.profileImageUrl+")"}}):a("div",{staticClass:"profileIcon myPageIcon",style:{"background-image":"url(/img/icon_blank.svg)"}}),t._v(" "),a("h3",{},[a("nuxt-link",{staticClass:"linkColor",attrs:{to:"/artists/"+t.accountName}},[t._v(t._s(t.displayName))])],1),t._v(" "),a("h3",t._l(this.permissions,function(e){return a("div",{key:e},["MSC"==e?a("p",{staticClass:"authorizedTagMusic"},[t._v("ミュージシャン")]):t._e(),t._v(" "),"ILL"==e?a("p",{staticClass:"authorizedTagIllust"},[t._v("イラストレーター")]):t._e(),t._v(" "),"HND"==e?a("p",{staticClass:"authorizedTagHandmade"},[t._v("ハンドメイド作家")]):t._e()])}),0)])};n._withStripped=!0;var i,s=a(1),o=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)},function(t,e){function a(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),r=function(t,e,a,n){var i,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,a,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(o=(s<3?i(o):s>3?i(e,a,o):i(e,a))||o);return s>3&&o&&Object.defineProperty(e,a,o),o},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),r([Object(s.Prop)()],e.prototype,"profileImageUrl",void 0),r([Object(s.Prop)()],e.prototype,"accountName",void 0),r([Object(s.Prop)()],e.prototype,"displayName",void 0),r([Object(s.Prop)()],e.prototype,"permissions",void 0),e=r([Object(s.Component)({})],e)}(s.Vue),l=a(5),u=Object(l.a)(c,n,[],!1,null,null,null);e.a=u.exports},298:function(t,e,a){t.exports=a.p+"img/38eb5b0.jpg"},299:function(t,e,a){t.exports=a.p+"img/095854a.jpg"},300:function(t,e,a){t.exports=a.p+"img/b918e79.svg"},301:function(t,e,a){t.exports=a.p+"img/c4802c6.png"},302:function(t,e,a){t.exports=a.p+"img/4a7351b.png"},303:function(t,e,a){t.exports=a.p+"img/b1e4197.png"},313:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top marginTopAddSp"},[n("no-ssr",[n("div",{staticClass:"slider"},[n("swiper",{attrs:{options:t.swiperOption}},[n("swiper-slide",[n("div",{staticClass:"slider__content"},[n("nuxt-link",{attrs:{to:"/account/signup"}},[n("img",{staticClass:"slider__img",attrs:{src:a(298),alt:"夢を叶える、行動で応援する　WishHub"}})])],1)]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"slider__content"},[n("nuxt-link",{attrs:{to:"/account/signup"}},[n("img",{staticClass:"slider__img",attrs:{src:a(299),alt:"夢を叶える、行動で応援する　WishHub"}})])],1)]),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),t._v(" "),n("div",{staticClass:"textCenter mainVisualText hoverNone"},[n("img",{staticClass:"mainVisualLogo",attrs:{src:a(300),alt:"WishHub"}}),t._v(" "),n("p",[t._v("教えてほしい、手伝ってほしい、相談に乗ってほしい"),n("br"),t._v("誰かの「お願い」をみんなで解決するサービス")]),t._v(" "),n("nuxt-link",{attrs:{to:"/account/signup"}},[n("p",{staticClass:"dmmyButton"},[t._v("今すぐ始める")])])],1)]),t._v(" "),n("div",{staticClass:"container bottomAdd"},[n("h2",{staticClass:"black marginTop60 marginTopOnly"},[t._v("WishHub（ウィッシュハブ）とは")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",{staticClass:"textCenter bold"},[t._v("＼みんなのお願いを応援しよう！／")]),t._v(" "),n("div",{staticClass:"topButton"},[n("nuxt-link",{staticClass:"rewardButton",attrs:{to:"/bounties"}},[t._v("お願いを見る")]),t._v(" "),n("nuxt-link",{staticClass:"rewardButton ChangeButton",attrs:{to:"rewards"}},[t._v("景品を見る")])],1),t._v(" "),n("h3",{staticClass:"black textCenter bold"},[t._v("～WishHubの特徴～")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",{staticClass:"textCenter bold"},[t._v("＼みんなのお願いを応援しよう！／")]),t._v(" "),n("div",{staticClass:"topButton"},[n("nuxt-link",{staticClass:"rewardButton",attrs:{to:"/bounties"}},[t._v("お願いを見る")]),t._v(" "),n("nuxt-link",{staticClass:"rewardButton ChangeButton",attrs:{to:"rewards"}},[t._v("景品を見る")])],1),t._v(" "),n("h2",{staticClass:"black marginTop60"},[t._v("みんなのお願い")]),t._v(" "),n("div",{staticClass:"bountyList personalItem"},t._l(t.bountiesInfomal,function(e){return n("CardBox",{key:e.bountyId,attrs:{backgroundImageUrl:e.bountyImageUrl,bountyId:e.bountyId,titleName:e.bountyName,bountyType:e.bountyType,participationEndDate:e.participationEndDate,quantity:e.quantity,description:e.description,pointName:t.pointName,dialogProfileImageUrl:e.account.profileImageUrl,accountName:e.account.accountName,displayName:e.account.displayName,accountDescription:e.account.description,profileImageUrl:e.account.profileImageUrl,bountyStatusShow:!1,bountyCompleteStatus:e.completeStatus,bountyPublishStatus:e.publishStatus,bountyCreateStatus:e.createStatus,joinCount:e.joinCount,participantLimit:e.participantLimit,commentCount:e.commentCount}})}),1),t._v(" "),n("div",{staticClass:"textRight"},[n("nuxt-link",{staticClass:"moreButton",attrs:{to:"/bounties"}},[t._v("もっと見る")])],1),t._v(" "),n("p",{staticClass:"textCenter bold"},[t._v("＼みんなのお願いを応援しよう！／")]),t._v(" "),n("div",{staticClass:"topButton"},[n("nuxt-link",{staticClass:"rewardButton ChangeButton",attrs:{to:"/account/signup"}},[t._v("今すぐ始める")])],1),t._v(" "),n("h2",{staticClass:"black marginTop60"},[t._v("公式のお願い")]),t._v(" "),n("div",{staticClass:"bountyList personalItem"},t._l(t.bountiesOfficial,function(e){return n("CardBox",{key:e.bountyId,attrs:{backgroundImageUrl:e.bountyImageUrl,bountyId:e.bountyId,titleName:e.bountyName,bountyType:e.bountyType,participationEndDate:e.participationEndDate,quantity:e.quantity,description:e.description,pointName:t.pointName,dialogProfileImageUrl:e.account.profileImageUrl,accountName:e.account.accountName,displayName:e.account.displayName,accountDescription:e.account.description,profileImageUrl:e.account.profileImageUrl,bountyStatusShow:!1,bountyCompleteStatus:e.completeStatus,bountyPublishStatus:e.publishStatus,bountyCreateStatus:e.createStatus,joinCount:e.joinCount,participantLimit:e.participantLimit,commentCount:e.commentCount}})}),1),t._v(" "),n("div",{staticClass:"textRight"},[n("nuxt-link",{staticClass:"moreButton",attrs:{to:"/bounties"}},[t._v("もっと見る")])],1),t._v(" "),n("h2",{staticClass:"black marginTop60"},[t._v("景品")]),t._v(" "),n("div",{staticClass:"bountyList personalItem"},t._l(t.rewards,function(e){return n("CardBox",{key:e.rewardId,attrs:{profileImageUrl:e.account.profileImageUrl,accountName:e.account.accountName,displayName:e.account.displayName,backgroundImageUrl:e.rewardImageUrl,rewardId:e.rewardId,tokenTypeCode:e.tokenTypeCode,titleName:e.rewardName,exchangeRate:e.exchangeRate,exchangeEndDate:e.exchangeEndDate,quantity:e.quantity,description:e.description,pointName:t.pointName,isOwn:!1,isEdit:!1,dialogProfileImageUrl:e.account.profileImageUrl,ownQuantity:e.ownQuantity,rewardStatusShow:!1,rewardPublishStatus:e.publishStatus,rewardCreateStatus:e.createStatus}})}),1),t._v(" "),n("div",{staticClass:"textRight"},[n("nuxt-link",{staticClass:"moreButton",attrs:{to:"/rewards"}},[t._v("もっと見る")])],1),t._v(" "),n("p",{staticClass:"textCenter bold"},[t._v("＼みんなのお願いを応援しよう！／")]),t._v(" "),n("div",{staticClass:"topButton"},[n("nuxt-link",{staticClass:"rewardButton ChangeButton",attrs:{to:"/account/signup"}},[t._v("今すぐ始める")])],1)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"textCenter"},[t._v("\n        小さな願いをつないで価値に変えるサービスです。"),a("br"),a("br"),t._v("\n        「子供にかけっこで1番になってほしい！」"),a("br"),t._v("\n\n        「サッカーでレギュラーをとりたい！」"),a("br"),t._v("\n        「自分の作品を見てほしい！」"),a("br"),t._v("\n        「子育ての相談に乗ってほしい！」"),a("br"),t._v("\n        ："),a("br"),a("br"),t._v("\n        自分の願いを手伝ってもらったり、誰かの願いを手伝ったり"),a("br"),t._v("\n        お互いに協力すればするほど、ポイント(wip)が貯まり、素敵な景品と交換できます。\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"textCenter presentBorder"},[this._v("\n        【今だけお得！】"),e("br",{staticClass:"pcNone"}),this._v("新規登録でもれなく　"),e("img",{staticClass:"cardIcon",attrs:{src:a(257)}}),this._v("100wipプレゼント中！"),e("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"howTo"},[n("div",{staticClass:"howToContents"},[n("img",{staticClass:"howToImg",attrs:{src:a(301)}}),t._v(" "),n("h3",{staticClass:"textCenter"},[t._v("得意やできるコトで募集する")]),t._v(" "),n("p",[t._v("\n              得意なコトやできるコト、経験や知識を登録して、あなたを必要としている相手を募集しよう！"),n("br"),t._v("\n              「サッカーが得意！」「英語が話せる！」「子育ての悩みを聞ける！」など\n            ")])]),t._v(" "),n("div",{staticClass:"howToContents"},[n("img",{staticClass:"howToImg",attrs:{src:a(302)}}),t._v(" "),n("h3",{staticClass:"textCenter"},[t._v("小さなお願いで募集する")]),t._v(" "),n("p",[t._v("\n            「教えてほしい！」「手伝ってほしい！」「相談に乗ってほしい！」などを登録して、あなたを応援してくれる相手を募集しよう！"),n("br"),t._v("\n            内容や場所などチャットで交渉可能\n          ")])]),t._v(" "),n("div",{staticClass:"howToContents"},[n("img",{staticClass:"howToImg",attrs:{src:a(303)}}),t._v(" "),n("h3",{staticClass:"textCenter"},[t._v("ポイント(wip)を貯めて景品と獲得する")]),t._v(" "),n("p",[t._v("\n              お願いでもらえるポイント(wip)を貯めて、オトクな景品と交換しよう！"),n("br"),t._v("\n              景品の種類は今後も追加予定"),n("br"),n("br"),t._v("\n              「お願い」登録、「お願い」応援で、その応援が達成した時にそれぞれ100wip貰えます！\n            ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"futureText"},[e("h3",{staticClass:"textCenter"},[this._v("～WishHubが実現したい未来～")]),this._v(" "),e("p",{staticClass:"textCenter"},[this._v("\n          誰もが 誰かの小さな願いや想い、夢や目標に共感して、"),e("br"),this._v("\n          お互いに“行動”で貢献しあえる社会を目指します。"),e("br"),e("br"),this._v("\n          “行動”による貢献値は、改ざんされにくいブロックチェーンに刻まれることで証明され、"),e("br"),this._v("\n          「信頼」と言う価値に変えます。"),e("br"),this._v("\n          ※α版はブロックチェーンの実装はされていません。")])])}];n._withStripped=!0;var s,o=a(1),r=a(54),c=a(240),l=a(255),u=(s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)},function(t,e){function a(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),p=function(t,e,a,n){var i,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,a,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(o=(s<3?i(o):s>3?i(e,a,o):i(e,a))||o);return s>3&&o&&Object.defineProperty(e,a,o),o},_=function(t,e,a,n){return new(a||(a=Promise))(function(i,s){function o(t){try{c(n.next(t))}catch(t){s(t)}}function r(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){t.done?i(t.value):new a(function(e){e(t.value)}).then(o,r)}c((n=n.apply(t,e||[])).next())})},v=function(t,e){var a,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function r(s){return function(r){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],n=0}finally{a=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,r])}}},d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.asyncData=function(t){var e=t.app;return _(this,void 0,void 0,function(){var t,a,n,i,s,o,c,l;return v(this,function(u){switch(u.label){case 0:return 6,t=6,a=3,n=8,[4,e.$axios.$get(r.a.API_URL.REWARD,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:6,sort:r.a.API_PARAM.SORT_NEW}})];case 1:return i=u.sent(),[4,e.$axios.$get(r.a.API_URL.BOUNTIES,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:t,sort:r.a.API_PARAM.SORT_NEW,display:1}})];case 2:return s=u.sent(),[4,e.$axios.$get(r.a.API_URL.BOUNTIES,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:a,sort:r.a.API_PARAM.SORT_NEW,display:2}})];case 3:return o=u.sent(),[4,e.$axios.$get(r.a.API_URL.ACCOUNT_APPROVED,{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:n,sort:r.a.API_PARAM.SORT_NEW}})];case 4:return c=u.sent(),l=r.a.POINT.WIP,[2,{profiles:c,bountiesInfomal:s,bountiesOfficial:o,pointName:l,rewards:i,swiperOption:{spaceBetween:0,speed:600,centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}}]}})})},e=p([Object(o.Component)({components:{CardBox:c.a,CardIcon:l.a}})],e)}(o.Vue),m=a(5),b=Object(m.a)(d,n,i,!1,null,null,null);e.default=b.exports}}]);