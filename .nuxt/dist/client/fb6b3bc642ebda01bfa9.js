(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{228:function(t,s,i){var e=i(234);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(15).default)("3b1e0ef8",e,!1,{})},231:function(t,s,i){t.exports=i.p+"img/e4f67d1.svg"},232:function(t,s,i){t.exports=i.p+"img/a512a4a.svg"},233:function(t,s,i){"use strict";var e=i(228);i.n(e).a},234:function(t,s,i){(t.exports=i(14)(!1)).push([t.i,".poineter_disabled{pointer-events:none;color:#000!important}.poineter{cursor:pointer;cursor:hand;color:#000!important}",""])},237:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",t._l(t.skillTypeList,function(s){return i("p",{key:s.type,staticClass:"authorizedTag_6"},[!0===t.isLink?i("a",{class:{poineter:!0===t.isLink},on:{click:function(i){t.move(s.type)}}},[t._v(t._s(s.skillTypeName))]):i("span",{class:{poineter_disabled:!0!==t.isLink}},[t._v(t._s(s.skillTypeName))])])}),0)};e._withStripped=!0;var a,n=i(1),r=(a=function(t,s){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var i in s)s.hasOwnProperty(i)&&(t[i]=s[i])})(t,s)},function(t,s){function i(){this.constructor=t}a(t,s),t.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}),o=function(t,s,i,e){var a,n=arguments.length,r=n<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,s,i,e);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(s,i,r):a(s,i))||r);return n>3&&r&&Object.defineProperty(s,i,r),r},c=function(t){function s(){var s=null!==t&&t.apply(this,arguments)||this;return s.skillTypeList=[],s}return r(s,t),s.prototype.data=function(){for(var t=[],s=0,i=this.skills;s<i.length;s++)for(var e=i[s],a=0,n=this.skillTypes;a<n.length;a++){var r=n[a];e===r.type&&t.push(r)}return{skillTypeList:t}},s.prototype.move=function(t){this.isLink&&(location.href="/players?skillType="+t)},o([Object(n.Prop)()],s.prototype,"skillTypes",void 0),o([Object(n.Prop)()],s.prototype,"skills",void 0),o([Object(n.Prop)()],s.prototype,"isLink",void 0),s=o([Object(n.Component)({})],s)}(n.Vue),l=(i(233),i(2)),p=Object(l.a)(c,e,[],!1,null,null,null);s.a=p.exports},242:function(t,s,i){t.exports=i.p+"img/a075779.svg"},246:function(t,s,i){t.exports=i.p+"img/0c63fd9.svg"},251:function(t,s,i){t.exports=i.p+"img/5744668.svg"},252:function(t,s,i){t.exports=i.p+"img/fb05424.svg"},253:function(t,s,i){t.exports=i.p+"img/8cc62a0.svg"},278:function(t,s,i){t.exports=i.p+"img/4c6f478.svg"},281:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"listArtist"},[t._m(0),i("p",{staticClass:"deadOrAlive"},[t._v("CHALLENGER or SUPPORTER")]),t._v(" "),i("nuxt-link",{staticClass:"linkColor",attrs:{to:"/players/"+t.accountName}},[i("div",{staticClass:"profileIcon myPageIcon",style:{"background-image":"url("+t.iconUrl+")"}})]),t._v(" "),i("nuxt-link",{staticClass:"linkColor",attrs:{to:"/players/"+t.accountName}},[i("h3",{},[t._v(t._s(t.displayName))]),t._v(" "),t.joinCount||t.badgeCount?i("p",{staticClass:"deadline"},[t.badgeCount?i("span",{staticClass:"chatNumber"},[i("img",{attrs:{src:"img/icon_clear_w.svg"}}),t._v(t._s(t._f("toLocaleString")(t.badgeCount)))]):t._e(),t.badgeCount?i("span",{staticClass:"joinCount"},[i("img",{attrs:{src:"img/icon_quest.svg"}}),t._v(t._s(t._f("toLocaleString")(t.badgeCount)))]):t._e()]):t._e()]),t._v(" "),t.skills?i("div",{staticClass:"skillArea"},[i("SkillTypeList",{attrs:{skillTypes:t.skillTypes,skills:t.skills,isLink:!0}})],1):t._e(),t._v(" "),i("nuxt-link",{staticClass:"linkColor",attrs:{to:"/players/"+t.accountName}},[i("p",{directives:[{name:"linkified",rawName:"v-linkified"}],staticClass:"projectDiscRestriction",domProps:{innerHTML:t._s(t.$options.filters.newLine(t.description))}})]),t._v(" "),i("div",{staticClass:"snsIcons offerLinkStyle textCenter"},[1==t.isoffer?i("a",{staticClass:"grow2 on",class:{disable:t.isProcessing}},[t._m(1)]):i("a",{staticClass:"grow2",class:{disable:t.isProcessing},attrs:{href:"#"},on:{click:function(s){t.sendOffer(t.accountName)}}},[t._m(2)])]),t._v(" "),t.showModalDialog?i("ModalDialog",{attrs:{imageUrl:t.dialogImageUrl,messages:t.dialogMessage,showLoginButton:t.showLoginButton},on:{close:function(s){t.closeModalDialog()}}}):t._e()],1)},a=[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{staticClass:"wanted"},[s("p",[this._v("P")]),s("p",[this._v("l")]),s("p",[this._v("a")]),s("p",[this._v("y")]),this._v("e"),s("p",[this._v("r")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{},[s("img",{staticClass:"iconH18",attrs:{src:i(232)}}),this._v("オファー済み")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{},[s("img",{staticClass:"iconH18",attrs:{src:i(232)}}),this._v("オファーする")])}];e._withStripped=!0;var n,r=i(1),o=i(76),c=i(6),l=i(229),p=i.n(l),u=i(75),v=i(237),_=(n=function(t,s){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var i in s)s.hasOwnProperty(i)&&(t[i]=s[i])})(t,s)},function(t,s){function i(){this.constructor=t}n(t,s),t.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}),f=function(t,s,i,e){var a,n=arguments.length,r=n<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,s,i,e);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(s,i,r):a(s,i))||r);return n>3&&r&&Object.defineProperty(s,i,r),r},d=function(t,s,i,e){return new(i||(i=Promise))(function(a,n){function r(t){try{c(e.next(t))}catch(t){n(t)}}function o(t){try{c(e.throw(t))}catch(t){n(t)}}function c(t){t.done?a(t.value):new i(function(s){s(t.value)}).then(r,o)}c((e=e.apply(t,s||[])).next())})},h=function(t,s){var i,e,a,n,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return n={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function o(n){return function(o){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,e&&(a=2&n[0]?e.return:n[0]?e.throw||((a=e.return)&&a.call(e),0):e.next)&&!(a=a.call(e,n[1])).done)return a;switch(e=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,e=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){r=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){r.label=n[1];break}if(6===n[0]&&r.label<a[1]){r.label=a[1],a=n;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(n);break}a[2]&&r.ops.pop(),r.trys.pop();continue}n=s.call(t,r)}catch(t){n=[6,t],e=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,o])}}};r.Vue.directive("linkified",p.a);var m=function(t){function s(){var s=null!==t&&t.apply(this,arguments)||this;return s.skillNames=[],s.isoffer=!1,s.iconUrl="",s.isProcessing=!1,s.showModalDialog=!1,s.showLoginButton=!1,s}return _(s,t),s.prototype.data=function(){var t="",s=new o.a;t=this.profileImageUrl?this.profileImageUrl+"?"+s.getNowDateTime():this.profileIconNo?"/img/cha_"+this.profileIconNo+".svg":"/img/icon_blank.svg";for(var i=!1,e=0,a=this.myOffers;e<a.length;e++){a[e].accountName===this.accountName&&(i=!0)}return{iconUrl:t,isoffer:i,dialogImageUrl:c.a.TemplateImg.DIALOG_IMG_URL}},s.prototype.sendOffer=function(t){return d(this,void 0,void 0,function(){var s,i=this;return h(this,function(e){return this.isProcessing?[2]:(this.isProcessing=!0,(s=new FormData).append("OfferAccountName",t),this.$axios.post(c.a.API_URL.ACCOUNT_OFFERS.replace("{account_name}",t),s).then(function(){i.isoffer=!i.isoffer,i.isoffer&&i.openModalDialog(c.a.MESSAGE.INFO_OFFER)}).catch(function(t){400===t.response.status?i.openModalDialog(t.response.data.BadRequest):401===t.response.status?(i.showLoginButton=!0,i.openModalDialog(c.a.MESSAGE.ERR_401),i.$store.dispatch("logout")):i.openModalDialog(c.a.MESSAGE.ERR_ELSE)}),this.isProcessing=!1,[2])})})},s.prototype.openModalDialog=function(t){t&&(this.dialogMessage=t,this.showModalDialog=!0)},s.prototype.closeModalDialog=function(){this.showModalDialog=!1,this.showLoginButton=!1},f([Object(r.Prop)()],s.prototype,"profileIconNo",void 0),f([Object(r.Prop)()],s.prototype,"profileImageUrl",void 0),f([Object(r.Prop)()],s.prototype,"accountName",void 0),f([Object(r.Prop)()],s.prototype,"displayName",void 0),f([Object(r.Prop)()],s.prototype,"description",void 0),f([Object(r.Prop)()],s.prototype,"joinCount",void 0),f([Object(r.Prop)()],s.prototype,"badgeCount",void 0),f([Object(r.Prop)()],s.prototype,"skills",void 0),f([Object(r.Prop)()],s.prototype,"skillTypes",void 0),f([Object(r.Prop)()],s.prototype,"myOffers",void 0),s=f([Object(r.Component)({components:{ModalDialog:u.a,SkillTypeList:v.a}})],s)}(r.Vue),g=i(2),C=Object(g.a)(m,e,a,!1,null,null,null);s.a=C.exports},282:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{directives:[{name:"swiper",rawName:"v-swiper:garallySwiper",value:t.swiperOption,expression:"swiperOption",arg:"garallySwiper"}],staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"swiper-slide"},[i("div",{staticClass:"calam_2_container howtoSlide"},[t._m(2),t._v(" "),i("div",{staticClass:"calam_2"},[i("h3",[t._v("③クエストを登録しよう！")]),t._v(" "),t._m(3),t._v(" "),i("a",{staticClass:"rewardButton ChangeButton",attrs:{href:"#"},on:{click:function(s){t.allowPush("/account/my/bounties/create")}}},[t._v("クエスト登録")])])])]),t._v(" "),t._m(4)]),t._v(" "),i("div",{staticClass:"swiper-pagination"}),t._v(" "),i("div",{staticClass:"swiper-button-next"}),t._v(" "),i("div",{staticClass:"swiper-button-prev"})])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"calam_2_container howtoSlide"},[e("div",{staticClass:"calam_2 "},[e("img",{attrs:{src:i(251)}})]),t._v(" "),e("div",{staticClass:"calam_2"},[e("h3",[t._v("①WishHubをブックマークしよう！")]),t._v(" "),e("p",[t._v("ブックマークして、いつでも簡単にWishHubにアクセスできるようにしよう！")]),t._v(" "),e("p",{staticClass:"pcNone tbNone"},[t._v("\n                    【Iphone】"),e("br"),t._v("シェアボタンから【ホーム画面に追加】を選んで、ホーム画面に追加しよう。"),e("br"),e("br"),t._v("\n                    【Android】"),e("br"),t._v("ブラウザの右上のメニューボタンから、【ホーム画面に追加】を選んで、ホーム画面に追加しよう。")])]),t._v(" "),e("p")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"calam_2_container howtoSlide"},[s("div",{staticClass:"calam_2"},[s("img",{attrs:{src:i(246)}})]),this._v(" "),s("div",{staticClass:"calam_2"},[s("h3",[this._v("②クエストに参加しよう！")]),this._v(" "),s("p",[this._v("まずはクエストの一覧から興味のあるクエストに参加しよう！\n\n                ")]),this._v(" "),s("a",{staticClass:"rewardButton ChangeButton",attrs:{href:"/bounties"}},[this._v("クエスト一覧")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"calam_2"},[s("img",{attrs:{src:i(252)}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("クエストは誰でも登録できます。"),s("br"),this._v("\n                  もし、参加したいクエストが満員だったり、自分のやりたいことが無かった場合は、クエストを立ち上げよう！\n              ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"calam_2_container howtoSlide"},[e("div",{staticClass:"calam_2"},[e("img",{attrs:{src:i(253)}})]),t._v(" "),e("div",{staticClass:"calam_2"},[e("h3",[t._v("wizと特典を交換しよう！")]),t._v(" "),e("p",[t._v("クエスト内での活動を続けると、その頑張りに応じてwizが配布されます。"),e("br"),t._v("\n                  貯まったwizはショップで特典と交換できます。"),e("br"),t._v("\n                  様々なクエストに参加して、目標を達成しながらwizを貯めましょう！"),e("br"),t._v(" "),e("a",{staticClass:"rewardButton ChangeButton",attrs:{href:"/rewards"}},[t._v("ショップをみる")])])])])])}];e._withStripped=!0;var n,r=i(1),o=(n=function(t,s){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var i in s)s.hasOwnProperty(i)&&(t[i]=s[i])})(t,s)},function(t,s){function i(){this.constructor=t}n(t,s),t.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}),c=function(t,s,i,e){var a,n=arguments.length,r=n<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,s,i,e);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(s,i,r):a(s,i))||r);return n>3&&r&&Object.defineProperty(s,i,r),r},l=function(t){function s(){return null!==t&&t.apply(this,arguments)||this}return o(s,t),s.prototype.data=function(){return{swiperOption:{loop:!0,spaceBetween:0,speed:600,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},s.prototype.allowPush=function(t){var s=this;this.$store.dispatch("transitionAllow").then(function(){s.$router.push(t)})},s=c([Object(r.Component)({})],s)}(r.Vue),p=i(2),u=Object(p.a)(l,e,a,!1,null,null,null);s.a=u.exports},290:function(t,s,i){t.exports=i.p+"img/379f0ec.png"},343:function(t,s,i){t.exports=i.p+"img/7f306aa.svg"},344:function(t,s,i){t.exports=i.p+"img/dcc775f.svg"},345:function(t,s,i){t.exports=i.p+"img/54e7811.svg"},346:function(t,s,i){t.exports=i.p+"img/1a9bd09.svg"},347:function(t,s,i){t.exports=i.p+"img/8591df9.svg"},348:function(t,s,i){t.exports=i.p+"img/7f2fe55.svg"},349:function(t,s,i){t.exports=i.p+"img/6995293.svg"},350:function(t,s,i){t.exports=i.p+"img/4d5a2d7.svg"},351:function(t,s,i){t.exports=i.p+"img/ef121aa.svg"},357:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bgGreen"},[e("div",{staticClass:"bgForest"}),t._v(" "),e("div",{staticClass:"top marginTopAddSp"}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"container bottomAdd"},[t._m(3),t._v(" "),t._m(4),t._v(" "),e("h2",{staticClass:"textDB craftBg "},[t._v("WishHubとは")]),t._v(" "),t._m(5),t._v(" "),e("h3",{staticClass:"textCenter middleTitle"},[t._v("クエスト")]),t._v(" "),e("p",[t._v("「趣味」「勉強」「仕事」「恋愛」「子ども」のカテゴリーから、挑戦したいクエストに参加したり、クエストを作成して公開できます")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("h2",{staticClass:"textDB craftBg "},[t._v("WishHubの特徴")]),t._v(" "),e("no-ssr",[e("div",{directives:[{name:"swiper",rawName:"v-swiper:garallySwiper1",value:t.swiperOption1,expression:"swiperOption1",arg:"garallySwiper1"}],staticClass:"swiper-container"},[e("ul",{staticClass:"swiper-wrapper"},[e("li",{staticClass:"swiper-slide"},[e("div",{staticClass:"calam_2_container howtoSlide"},[e("div",{staticClass:"calam_2 "},[e("img",{attrs:{src:i(343)}})]),t._v(" "),e("div",{staticClass:"calam_2"},[e("h3",[t._v("①クエスト")]),t._v(" "),e("p",[t._v("\n                    WishHubでは"),e("br"),t._v("\n                    「5キロダイエットに成功する」"),e("br"),t._v("\n                    「資格試験に合格する」など"),e("br"),t._v("\n                    あなたの目標を「クエスト」として登録し、同じ目的を持った仲間を募集できます。"),e("br"),t._v("\n                    また、誰かのクエストに参加することも可能です。\n                  ")])])])]),t._v(" "),e("li",{staticClass:"swiper-slide"},[e("div",{staticClass:"calam_2_container howtoSlide"},[e("div",{staticClass:"calam_2"},[e("img",{attrs:{src:i(290)}})]),t._v(" "),e("div",{staticClass:"calam_2"},[e("h3",[t._v("②パーティ")]),t._v(" "),e("p",[t._v("\n                    WishHubではクエストに集まった仲間をパーティと呼びます。"),e("br"),t._v("\n    \t\t\t\t\t\t\t\tパーティ内でチャットやアドバイスで協力しながら、クエスト達成に向けて行動しよう！"),e("br"),e("br"),t._v("\n      \t\t\t\t\t\t\tパーティ内では、「一緒に頑張る人(チャレンジャー)」と"),e("br",{staticClass:"spNone"}),t._v("「応援する人(サポーター)」の2つの役割を選べます。\n                  ")])])])]),t._v(" "),e("li",{staticClass:"swiper-slide"},[e("div",{staticClass:"calam_2_container howtoSlide"},[e("div",{staticClass:"calam_2"},[e("img",{attrs:{src:i(344)}})]),t._v(" "),e("div",{staticClass:"calam_2"},[e("h3",[t._v("②-1チャレンジャー")]),t._v(" "),e("p",[t._v("\n                    クエスト達成に向けて、行動していく人。"),e("br"),t._v("\n                    日々の頑張りをチャット欄で報告したり、誰かにアドバイスを求めたり、クエスト達成まで頑張ろう！\n                  ")])])])]),t._v(" "),e("li",{staticClass:"swiper-slide"},[e("div",{staticClass:"calam_2_container howtoSlide"},[e("div",{staticClass:"calam_2"},[e("img",{attrs:{src:i(345)}})]),t._v(" "),e("div",{staticClass:"calam_2"},[e("h3",[t._v("②-2サポーター")]),t._v(" "),e("p",[t._v("\n                    クエスト達成に向かって、アドバイスやエールで協力・応援する人。"),e("br"),t._v("\n                    積極的にチャレンジャーを応援してあげよう！\n                  ")])])])]),t._v(" "),e("li",{staticClass:"swiper-slide"},[e("div",{staticClass:"calam_2_container howtoSlide"},[e("div",{staticClass:"calam_2"},[e("img",{attrs:{src:i(242)}})]),t._v(" "),e("div",{staticClass:"calam_2"},[e("h3",[t._v("③バッジ")]),t._v(" "),e("p",[t._v("\n                    チャレンジャーで目標を達成したり、サポーターで仲間へ貢献するとバッジが獲得できます。"),e("br"),e("br"),t._v("\n                    バッジの獲得数が、WishHubでの信頼が高まり、「報酬」の配当量も多くなります。\n                  ")])])])]),t._v(" "),e("li",{staticClass:"swiper-slide"},[e("div",{staticClass:"calam_2_container howtoSlide"},[e("div",{staticClass:"calam_2"},[e("img",{attrs:{src:i(346)}})]),t._v(" "),e("div",{staticClass:"calam_2"},[e("h3",[t._v("④報酬（コイン）")]),t._v(" "),e("p",[t._v("\n                    クエストでの活動量に応じて、定期的にコイン（wiz）が配当されます。"),e("br"),t._v("\n                    wizは「ショップ」にて、様々な特典(アイテム)と交換できます。\n                  ")])])])])]),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),e("div",{staticClass:"swiper-button-prev"}),t._v(" "),e("div",{staticClass:"swiper-button-next"})])]),t._v(" "),e("h2",{staticClass:"textDB craftBg "},[t._v("WishHub × ブロックチェーン")]),t._v(" "),t._m(9),t._v(" "),e("h2",{staticClass:"textDB craftBg "},[t._v("スタート（WishHubの始め方）")]),t._v(" "),e("no-ssr",[e("div",{directives:[{name:"swiper",rawName:"v-swiper:garallySwiper",value:t.swiperOption,expression:"swiperOption",arg:"garallySwiper"}],staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"calam_2_container howtoSlide"},[e("div",{staticClass:"calam_2 "},[e("img",{attrs:{src:i(246)}})]),t._v(" "),e("div",{staticClass:"calam_2"},[e("h3",[t._v("①クエストに参加しよう"),e("br",{staticClass:"pcNone"}),e("br",{staticClass:"pcNone"})]),t._v(" "),e("p",[t._v("\n                                参加してみたいクエストを探して、チャレンジャーもしくはサポーターを選んで参加しよう！"),e("br"),t._v("\n                                参加したら同じクエストに参加している仲間への挨拶を忘れなずに。"),e("br"),e("br"),t._v("\n                                もし参加したいクエストが見つからない場合は、新しくクエストを立ち上げてみよう！\n                            ")])])])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"calam_2_container howtoSlide"},[e("div",{staticClass:"calam_2"},[e("img",{attrs:{src:i(347)}})]),t._v(" "),e("div",{staticClass:"calam_2"},[e("h3",[t._v("②クエスト内で活動しよう"),e("br",{staticClass:"pcNone"}),t._v("（チャレンジャーの場合）")]),t._v(" "),e("p",[t._v("\n                                チャレンジャーとして参加したら、クエスト達成に向けて行動あるべし。"),e("br"),t._v("\n                                同じチャレンジャーの仲間と相談したり、サポーターにアドバイスを貰ったりしながら、クエスト達成に向けて突き進もう！"),e("br"),e("br"),t._v("\n                                定期的にチャット欄で進捗やニュースなどを伝えてあげましょう！\n                            ")])])])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"calam_2_container howtoSlide"},[e("div",{staticClass:"calam_2"},[e("img",{attrs:{src:i(348)}})]),t._v(" "),e("div",{staticClass:"calam_2"},[e("h3",[t._v("③クエスト内で活動しよう"),e("br",{staticClass:"pcNone"}),t._v("（サポーターの場合）")]),t._v(" "),e("p",[t._v("\n                                サポーターとして参加したら、チャレンジャーの人達を応援しよう！"),e("br"),t._v("\n                                チャレンジャーの悩みにアドバイスをしたり、応援コメントなどでチャレンジャーのクエスト達成をサポートしてあげよう。"),e("br"),e("br"),t._v("\n                                サボっている子がいたら、叱ってあげる優しさも必要かも？\n                            ")])])])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"calam_2_container howtoSlide"},[e("div",{staticClass:"calam_2"},[e("img",{attrs:{src:i(278)}})]),t._v(" "),e("div",{staticClass:"calam_2"},[e("h3",[t._v("④達成報告をしよう！"),e("br",{staticClass:"pcNone"}),t._v("（クエストオーナーのみ）")]),t._v(" "),e("p",[t._v("\n                                目標を達成できたら、パーティのメンバーに達成報告しよう！"),e("br"),t._v("\n                                メンバーから承認されるとクエストは達成され、全員にwiz（コイン）が付与されます。"),e("br"),t._v("\n                                パーティ全員で喜びを分かちあおう！"),e("br")])])])])]),t._v(" "),e("div",{staticClass:"swiper-pagination"}),t._v(" "),e("div",{staticClass:"swiper-button-next"}),t._v(" "),e("div",{staticClass:"swiper-button-prev"})])]),t._v(" "),t._m(10),t._v(" "),e("h2",{staticClass:"textDB craftBg ",attrs:{id:"quest"}},[t._v("クエストを探そう")]),t._v(" "),e("div",{staticClass:"bountyList personalItem"},t._l(t.bountiesInfomal,function(t){return e("CardBox",{key:t.bountyId,attrs:{cardType:"bounty",backgroundImageUrl:t.bountyImageUrl,bountyId:t.bountyId,titleName:t.bountyName,bountyType:t.bountyType,participationEndDate:t.participationEndDate,description:t.description,participantLimit:t.participantLimit,joinCount:t.joinCount,commentCount:t.commentCount,joinAccounts:t.joinAccounts,bountyCompleteStatus:t.completeStatus,accountName:t.account.accountName,displayName:t.account.displayName,accountDescription:t.account.description,profileImageUrl:t.account.profileImageUrl,profileIconNo:t.account.profileIconNo}})}),1),t._v(" "),e("div",{staticClass:"textRight"},[e("nuxt-link",{staticClass:"moreButton",attrs:{to:"/bounties"}},[t._v("もっと見る")])],1),t._v(" "),e("h2",{staticClass:"textDB craftBg "},[t._v("公式クエスト")]),t._v(" "),e("div",{staticClass:"bountyList personalItem"},t._l(t.bountiesOfficial,function(t){return e("CardBox",{key:t.bountyId,attrs:{cardType:"bounty",backgroundImageUrl:t.bountyImageUrl,bountyId:t.bountyId,titleName:t.bountyName,bountyType:t.bountyType,participationEndDate:t.participationEndDate,description:t.description,participantLimit:t.participantLimit,joinCount:t.joinCount,commentCount:t.commentCount,joinAccounts:t.joinAccounts,bountyCompleteStatus:t.completeStatus,accountName:t.account.accountName,displayName:t.account.displayName,accountDescription:t.account.description,profileImageUrl:t.account.profileImageUrl,profileIconNo:t.account.profileIconNo}})}),1),t._v(" "),e("div",{staticClass:"textRight"},[e("nuxt-link",{staticClass:"moreButton",attrs:{to:"/bounties"}},[t._v("もっと見る")])],1)],1)])},a=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"textCenter mainVisualText spNone"},[s("img",{staticClass:" topImgPc",attrs:{src:i(349)}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"textCenter mainVisualText pcNone"},[s("img",{staticClass:" topImgSp",attrs:{src:i(350)}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"textCenter mainVisualText"},[s("div",{staticClass:"topText"},[s("img",{staticClass:"mainVisualLogo",attrs:{src:i(351),alt:"WishHub"}}),this._v(" "),s("p",[s("span",[this._v("一人では達成できなかった目標を"),s("br"),this._v("仲間を集めてゲーム感覚でチャレンジしよう！")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"topButton marginTopOnly"},[s("a",{staticClass:"rewardButton ChangeButton",attrs:{href:"/account/signup/reidirect"}},[this._v("プレイヤー登録"),s("br"),this._v("（無料）")]),this._v(" "),s("a",{staticClass:"rewardButton ChangeButton",attrs:{href:"#quest"}},[this._v("クエストをみる")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"balloon5"},[s("div",{staticClass:"faceicon"},[s("img",{attrs:{src:i(231)}})]),this._v(" "),s("div",{staticClass:"chatting"},[s("div",{staticClass:"says"},[s("p",[this._v("今だけ！"),s("br"),this._v("\n            はじめてのクエスト参加で"),s("br"),this._v(" "),s("span",[this._v("100wiz")]),this._v("プレゼント中！")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"calam_2_container"},[s("div",{staticClass:"calam_2"},[s("img",{staticClass:"aboutImg",attrs:{src:i(290)}})]),this._v(" "),s("div",{staticClass:"calam_2"},[s("p",{},[this._v("\n            勉強やダイエットなど、一人ではサボる、続かない、達成できない目標はありませんか？"),s("br"),s("br"),this._v("\n\n            WishHubでは、達成したい目標をクエストとして登録し、同じ目標を持った仲間や、協力・応援してくれる仲間を集めて、目標達成にチャレンジできます。"),s("br"),s("br"),this._v("\n\n            目標を達成した証（あかし）と仲間に貢献した証は、ブロックチェーンに刻まれ「信頼」と言う価値に変わります。\n\n          ")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"howTo2"},[i("div",{staticClass:"howToContents2"},[i("img",{staticClass:"howToImg2",attrs:{src:"img/ex_1.png"}}),t._v(" "),i("h3",{},[t._v("ダイエット")])]),t._v(" "),i("div",{staticClass:"howToContents2"},[i("img",{staticClass:"howToImg2",attrs:{src:"img/ex_3.png"}}),t._v(" "),i("h3",{},[t._v("資格勉強")])]),t._v(" "),i("div",{staticClass:"howToContents2"},[i("img",{staticClass:"howToImg2",attrs:{src:"img/cha_10.svg"}}),t._v(" "),i("h3",{},[t._v("楽器を上手くなる")])]),t._v(" "),i("div",{staticClass:"howToContents2"},[i("img",{staticClass:"howToImg2",attrs:{src:"img/ex_2.png"}}),t._v(" "),i("h3",{},[t._v("恋人を作る")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"textRight"},[s("a",{staticClass:"moreButton",attrs:{href:"#quest"}},[this._v("クエストをみる")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"topButton"},[s("a",{staticClass:"rewardButton ChangeButton",attrs:{href:"/account/signup/reidirect"}},[this._v("プレイヤー登録"),s("br"),this._v("（無料）")]),this._v(" "),s("a",{staticClass:"rewardButton ChangeButton",attrs:{href:"#quest"}},[this._v("クエストをみる")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"calam_2_container"},[s("div",{staticClass:"calam_2 imgCoin"},[s("img",{attrs:{src:"img/about_brockchain.png"}})]),this._v(" "),s("div",{staticClass:"calam_2"},[s("p",[this._v("WishHubでは、あなたの頑張りや仲間への貢献をスコア化して、真正性・非改ざん性の高いブロックチェーンに記録します。"),s("br"),s("br"),this._v("\n            ブロックチェーンに記録された頑張りや貢献のスコアは、あなたの『信頼』の証として、新しい価値になる世界をWishHubは目指します！"),s("br"),s("br"),this._v(" "),s("span",{attrs:{id:"Start"}},[this._v("※正式版でブロックチェーンの実装を予定しています。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"topButton"},[s("a",{staticClass:"rewardButton ChangeButton",attrs:{href:"/account/signup/reidirect"}},[this._v("プレイヤー登録"),s("br"),this._v("（無料）")]),this._v(" "),s("a",{staticClass:"rewardButton ChangeButton",attrs:{href:"#quest"}},[this._v("クエストをみる")])])}];e._withStripped=!0;var n,r=i(1),o=i(6),c=i(238),l=i(281),p=i(282),u=(n=function(t,s){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var i in s)s.hasOwnProperty(i)&&(t[i]=s[i])})(t,s)},function(t,s){function i(){this.constructor=t}n(t,s),t.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}),v=function(t,s,i,e){var a,n=arguments.length,r=n<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,s,i,e);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(s,i,r):a(s,i))||r);return n>3&&r&&Object.defineProperty(s,i,r),r},_=function(t,s,i,e){return new(i||(i=Promise))(function(a,n){function r(t){try{c(e.next(t))}catch(t){n(t)}}function o(t){try{c(e.throw(t))}catch(t){n(t)}}function c(t){t.done?a(t.value):new i(function(s){s(t.value)}).then(r,o)}c((e=e.apply(t,s||[])).next())})},f=function(t,s){var i,e,a,n,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return n={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function o(n){return function(o){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,e&&(a=2&n[0]?e.return:n[0]?e.throw||((a=e.return)&&a.call(e),0):e.next)&&!(a=a.call(e,n[1])).done)return a;switch(e=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,e=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){r=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){r.label=n[1];break}if(6===n[0]&&r.label<a[1]){r.label=a[1],a=n;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(n);break}a[2]&&r.ops.pop(),r.trys.pop();continue}n=s.call(t,r)}catch(t){n=[6,t],e=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,o])}}},d=function(t){function s(){return null!==t&&t.apply(this,arguments)||this}return u(s,t),s.prototype.asyncData=function(t){var s=t.app;return _(this,void 0,void 0,function(){var t,i,e,a,n,r,c,l;return f(this,function(p){switch(p.label){case 0:return 6,t=6,i=3,e=8,[4,s.$axios.$get(o.a.API_URL.REWARD,{params:{offset:o.a.API_PARAM.OFFSET_DEFAULT,limit:6,sort:o.a.API_PARAM.SORT_NEW}})];case 1:return a=p.sent(),[4,s.$axios.$get(o.a.API_URL.BOUNTIES,{params:{offset:o.a.API_PARAM.OFFSET_DEFAULT,limit:t,sort:o.a.API_PARAM.SORT_NEW,display:1}})];case 2:return n=p.sent(),[4,s.$axios.$get(o.a.API_URL.BOUNTIES,{params:{offset:o.a.API_PARAM.OFFSET_DEFAULT,limit:i,sort:o.a.API_PARAM.SORT_NEW,display:2}})];case 3:return r=p.sent(),[4,s.$axios.$get(o.a.API_URL.ACCOUNT_APPROVED,{params:{offset:o.a.API_PARAM.OFFSET_DEFAULT,limit:e,sort:o.a.API_PARAM.SORT_NEW}})];case 4:return c=p.sent(),l=o.a.POINT.WIZ,[2,{profiles:c,bountiesInfomal:n,bountiesOfficial:r,pointName:l,rewards:a,swiperOption1:{loop:!0,spaceBetween:0,speed:600,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOption:{loop:!0,spaceBetween:0,speed:600,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}]}})})},s=v([Object(r.Component)({components:{CardBox:c.a,CardIcon:l.a,StartUp:p.a}})],s)}(r.Vue),h=i(2),m=Object(h.a)(d,e,a,!1,null,null,null);s.default=m.exports}}]);