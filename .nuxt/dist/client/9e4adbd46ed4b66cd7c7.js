(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{250:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(){}return t.prototype.stringToDataYmd=function(t){return t?new Date(t.substring(0,4)+"/"+t.substring(4,6)+"/"+t.substring(6,8)):new Date},t.prototype.dateNowCompare=function(t){var e=new Date,n=e.getFullYear(),o=e.getMonth()+1,a=e.getDate(),i=t.getFullYear(),s=t.getMonth()+1,r=t.getDate();return n===i?o===s?a<r?1:a===r?0:-1:o<s?1:-1:n<i?1:-1},t.prototype.encodeUrl=function(t){return t?t.replace(/\:/g,"%3A").replace(/\//g,"%2F"):t},t}()},251:function(t,e,n){var o=n(297);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(20).default)("1269db4a",o,!1,{})},296:function(t,e,n){"use strict";var o=n(251);n.n(o).a},297:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".wrapper[data-v-9e9616ea],messageEntry[data-v-9e9616ea]{position:relative}",""])},316:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t.bounty.account.profileImageUrl?n("div",{staticClass:"bountyIcon",style:{"background-image":"url("+t.bounty.account.profileImageUrl+")"}}):n("div",{staticClass:"bountyIcon",style:{"background-image":"url(/img/icon_blank.svg)"}}),t._v(" "),n("nuxt-link",{staticClass:"bountyArtistName",attrs:{to:"/artists/"+t.bounty.account.accountName}},[t._v(t._s(t.bounty.account.displayName))]),t._v(" "),t.bounty.bountyImageUrl?n("div",{staticClass:"mainVisual myPage bounty1",style:{"background-image":"url("+t.bounty.bountyImageUrl+")"}}):n("div",{staticClass:"mainVisual myPage bounty1",style:{"background-image":"url(/img/project_blank.jpg)"}}),t._v(" "),n("div",{staticClass:"mypageTop"},[n("div",{staticClass:"container"},[n("div",{staticClass:"profileArea"},[n("h3",{staticClass:"bountyTitle"},[t._v(t._s(t.bounty.bountyName))]),t._v(" "),n("div",{staticClass:"snsShare"},[n("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/share?ref_src=twsrc%5Etfw","data-show-count":"false"}},[t._v("Tweet")]),t._v(" "),n("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}}),t._v(" "),n("iframe",{staticStyle:{border:"none",overflow:"hidden"},attrs:{src:"https://www.facebook.com/plugins/share_button.php?href="+t.faceBookShareUrl+"&layout=button&size=small&width=61&height=20&appId",width:"61",height:"20",scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"}})]),t._v(" "),1==t.isOwn?n("div",[n("div",{staticClass:"textRight top60"},[n("a",{staticClass:"rewardButton ChangeButton",on:{click:function(e){t.allowPush("/account/my/bounties/create?bountyId="+t.bounty.bountyId)}}},[t._v("編集する")])]),t._v(" "),n("div",{staticClass:"projectData"},[t._v("ステータス："+t._s(t.bountyStatsName))])]):t._e(),t._v(" "),n("div",{staticClass:"projectData"},[n("BountyType",{attrs:{bountyType:t.bounty.bountyType}}),t._v(" "),n("p",[t._v("残り："),n("span",[t._v(t._s(t._f("toDaysLeft")(t.bounty.participationEndDate)))])]),t._v(" "),n("p",[t._v("報酬ポイント："),n("span",[t._v(t._s(t._f("zeroToNone")(t._f("toLocaleString")(t.bounty.quantity)))+t._s(t._f("delete")(t.pointName,0==t.bounty.quantity||null==t.bounty.quantity)))])]),t._v(" "),n("p",[t._v("参加人数："),n("span",[t._v(t._s(t.bounty.joinCount)+"/"+t._s(t.bounty.participantLimit)+" 人")])])],1),t._v(" "),n("div",{staticClass:"grad-wrap"},[n("input",{staticClass:"grad-trigger",attrs:{id:"trigger1",type:"checkbox"}}),t._v(" "),n("label",{staticClass:"grad-btn",attrs:{for:"trigger1"}}),t._v(" "),n("div",{staticClass:"grad-item bounty"},[n("p",{directives:[{name:"linkified",rawName:"v-linkified"}],domProps:{innerHTML:t._s(t.$options.filters.newLine(t.bounty.description))}})])])])]),t._v(" "),n("div",{staticClass:"menuBg"},[n("div",{staticClass:"container"},[n("div",{staticClass:"contentsArea"},[n("ul",{staticClass:"flexMenu bountyMenu"},[n("li",{class:{here:1==t.tabNum}},[1==t.tabNum?n("div",[t._v("アクション")]):n("div",[n("a",{on:{click:function(e){t.tabNumChange(1)}}},[t._v("アクション")])])]),t._v(" "),n("li",{class:{here:2==t.tabNum}},[2==t.tabNum?n("div",[t._v("参加者    ")]):n("div",[n("a",{on:{click:function(e){t.tabNumChange(2)}}},[t._v("参加者   ")])])]),t._v(" "),n("li",{class:{here:3==t.tabNum}},[3==t.tabNum?n("div",[t._v("チャット  ")]):n("div",[n("a",{on:{click:function(e){t.tabNumChange(3)}}},[t._v("チャット")])])])])])])])]),t._v(" "),n("div",{staticClass:"container"},[1==t.tabNum?n("div",{staticClass:"bountyList personalItem"},t._l(t.bountyActions,function(e){return n("CardBox",{key:e.bountyActionId,attrs:{backgroundImageUrl:e.bountyActionImageUrl,titleName:e.bountyActionName,description:e.description,bountyId:e.bountyId,bountyActionNo:e.bountyActionNo,isOwn:t.isOwn,joinStatus:e.joinStatus,thanksMessage:t.bounty.thanksMessage,thanksProfileImageUrl:t.bounty.account.profileImageUrl,dialogProfileImageUrl:t.bounty.account.profileImageUrl,joinCount:t.bounty.joinCount,participantLimit:t.bounty.participantLimit,completeStatus:t.bounty.completeStatus,actionJoinCount:e.joinCount,bauntyCanJoin:t.bauntyCanJoin,bountyTypeForAction:t.bounty.bountyType},on:{refreshJoin:function(e){t.refreshJoin()}}})}),1):2==t.tabNum?n("div",{staticClass:"activityArea"},[t._l(t.bountyJoins,function(e){return n("CardUser",{key:e.accountId,attrs:{profileImageUrl:e.profileImageUrl,displayName:e.displayName,date:e.createDateTime,accountName:e.accountName,isJoin:!0,dialogProfileImageUrl:t.bounty.account.profileImageUrl}})}),t._v(" "),n("infinite-loading",{on:{infinite:t.infiniteHandlerJoins}},[n("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),n("span",{attrs:{slot:"no-results"},slot:"no-results"})])],2):3==t.tabNum?n("div",{staticClass:"activityArea"},[t._l(t.bountyComments,function(e){return n("CardUser",{key:e.bountyCommentId,attrs:{profileImageUrl:e.account.profileImageUrl,displayName:e.account.displayName,date:e.postedDateTime,accountName:e.account.accountName,description:e.comment,commentId:e.bountyCommentId,replyBountyComment:e.replyComment,commentLikeCount:e.likeCount,commentLikeQuantity:e.likeQuantity,dialogProfileImageUrl:t.bounty.account.profileImageUrl,canPostComment:t.bounty.canPostComment,commentAccountName:e.account.accountName,commentType:"Bounty"},on:{refreshComment:function(e){t.refreshComment()}}})}),t._v(" "),n("infinite-loading",{on:{infinite:t.infiniteHandlerComments}},[n("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),n("span",{attrs:{slot:"no-results"},slot:"no-results"})]),t._v(" "),n("div",{staticClass:"fixedBottom"},[n("div",{staticClass:"messageEntry"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"discription",rows:"4",cols:"30",placeholder:"メッセージ",disabled:!t.bounty.canPostComment},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("input",{staticClass:"submitButton",class:{disable:t.isProcessing||!t.bounty.canPostComment},attrs:{type:"button",value:"送信する"},on:{click:function(e){t.addComment(t.message)}}})])])],2):t._e()]),t._v(" "),t.showModalDialog?n("ModalDialog",{attrs:{messages:t.dialogMessage,imageUrl:t.dialogImageUrl},on:{close:function(e){t.closeModalDialog()}}}):t._e()],1)};o._withStripped=!0;var a,i=n(3),s=n(54),r=n(250),u=n(238),c=n(237),l=n(261),p=n(230),m=n(234),d=n.n(m),y=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=function(t,e,n,o){var a,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},b=function(t,e,n,o){return new(n||(n=Promise))(function(a,i){function s(t){try{u(o.next(t))}catch(t){i(t)}}function r(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(s,r)}u((o=o.apply(t,e||[])).next())})},h=function(t,e){var n,o,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(a=2&i[0]?o.return:i[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;switch(o=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}};i.Vue.directive("linkified",d.a);var g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tabNum=1,e.message=null,e.isProcessing=!1,e.isCommontSecret=!1,e.offsetJoins=s.a.API_PARAM.LIMIT_DEFAULT,e.offsetComments=s.a.API_PARAM.LIMIT_DEFAULT,e.showModalDialog=!1,e}return y(e,t),e.prototype.asyncData=function(t){var e=t.app,n=t.route,o=t.store;return b(this,void 0,void 0,function(){var t,a,i,u,c,l,p,m,d,y,f;return h(this,function(b){switch(b.label){case 0:return t="",a=!1,i=[""],[4,e.$axios.$get(s.a.API_URL.BOUNTIES+"/"+n.params.id)];case 1:return u=b.sent(),[4,e.$axios.$get(s.a.API_URL.BOUNTIES_ACTIONS.replace("{bounty_id}",n.params.id),{params:{offset:s.a.API_PARAM.OFFSET_DEFAULT,limit:s.a.API_PARAM.LIMIT_DEFAULT,sort:s.a.API_PARAM.SORT_NEW}})];case 2:return c=b.sent(),[4,e.$axios.$get(s.a.API_URL.BOUNTIES_JOIN.replace("{bounty_id}",n.params.id),{params:{offset:s.a.API_PARAM.OFFSET_DEFAULT,limit:s.a.API_PARAM.LIMIT_DEFAULT,sort:s.a.API_PARAM.SORT_NEW}})];case 3:return l=b.sent(),[4,e.$axios.$get(s.a.API_URL.BOUNTIES_COMMENTS.replace("{bounty_id}",n.params.id),{params:{offset:s.a.API_PARAM.OFFSET_DEFAULT,limit:s.a.API_PARAM.LIMIT_DEFAULT}}).catch(function(t){return 400===t.response.status&&(a=!0,i=t.response.data.BadRequest),[{account:null,bountyId:null,bountyCommentId:null,comment:null,postedDateTime:null,replyCommentId:null,replyComment:null,clientCode:null,credentialId:null}]})];case 4:return p=b.sent(),m=!1,u.account.accountName===o.state.myProfile.accountName&&(m=!0),t=1===u.completeStatus?"達成":2===u.completeStatus?"終了":1===u.publishStatus?"公開中":0===u.createStatus?"作成中":"非公開",d=!0,y=new r.a,u.participationEndDate&&1!==u.publishStatus&&(d=!1),y.dateNowCompare(y.stringToDataYmd(u.participationEndDate))<0&&(d=!1),u.joinCount&&u.participantLimit&&Number(u.joinCount)>=Number(u.participantLimit)&&(d=!1),f=s.a.POINT.WIP,[2,{bounty:u,bountyActions:c,bountyJoins:l,bountyComments:p,isOwn:m,pointName:f,isCommontSecret:a,isCommontSecretMessage:i,bountyStatsName:t,bauntyCanJoin:d,dialogImageUrl:s.a.TemplateImg.DIALOG_IMG_URL,faceBookShareUrl:y.encodeUrl("https://wishhub-dev.azurewebsites.net/bounties/"+u.bountyId)}]}})})},e.prototype.head=function(){return{title:"WishHub（ウィッシュハブ）|"+this.bounty.bountyName,meta:[{hid:"og:type",property:"og:type",content:"article"},{hid:"og:description",property:"og:description",content:this.bounty.description},{hid:"og:url",property:"og:url",content:"https://wishhub-dev.azurewebsites.net/bounties/"+this.bounty.bountyId},{hid:"og:image",property:"og:image",content:this.bounty.bountyImageUrl},{hid:"og:site_name",property:"og:site_name",content:"WishHub（ウィッシュハブ）|"+this.bounty.bountyName},{hid:"twitter:title",property:"twitter:title",content:"WishHub（ウィッシュハブ）|"+this.bounty.bountyName},{hid:"twitter:description",property:"twitter:description",content:this.bounty.description},{hid:"twitter:image",property:"twitter:image",content:this.bounty.bountyImageUrl}]}},e.prototype.tabNumChange=function(t){3===t&&this.isCommontSecret?this.openModalDialog(this.isCommontSecretMessage):this.tabNum=t},e.prototype.addComment=function(t){return b(this,void 0,void 0,function(){var e,n,o=this;return h(this,function(a){switch(a.label){case 0:return this.isProcessing||!this.bounty.canPostComment?[2]:(this.isProcessing=!0,[4,this.$msalWishHub.silentLogin()]);case 1:return e=a.sent(),[4,this.$store.dispatch("addAccessToken",e)];case 2:return a.sent(),n=new FormData,t?(n.append("BountyId",this.$route.params.id),n.append("Comment",t),[4,this.$axios.post(s.a.API_URL.BOUNTIES_COMMENTS.replace("{bounty_id}",this.$route.params.id),n).then(function(){o.refreshComment(),o.message=null}).catch(function(t){400===t.response.status?o.openModalDialog(t.response.data.BadRequest):401===t.response.status?(o.openModalDialog(s.a.MESSAGE.ERR_401),o.$store.dispatch("logout")):o.openModalDialog(s.a.MESSAGE.ERR_ELSE)})]):[3,4];case 3:a.sent(),a.label=4;case 4:return this.isProcessing=!1,[2]}})})},e.prototype.refreshComment=function(){var t=this;this.$axios.get(s.a.API_URL.BOUNTIES_COMMENTS.replace("{bounty_id}",this.$route.params.id)).then(function(e){t.bountyComments=e.data}).catch(function(t){console.log(t)})},e.prototype.refreshJoin=function(){var t=this;this.$axios.get(s.a.API_URL.BOUNTIES_JOIN.replace("{bounty_id}",this.$route.params.id),{params:{offset:s.a.API_PARAM.OFFSET_DEFAULT,limit:s.a.API_PARAM.LIMIT_DEFAULT,sort:s.a.API_PARAM.SORT_NEW}}).then(function(e){t.bountyJoins=e.data,t.$axios.get(s.a.API_URL.BOUNTIES+"/"+t.$route.params.id).then(function(e){t.bounty=e.data,t.refreshComment(),t.isCommontSecret=!1}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)}),this.$axios.get(s.a.API_URL.BOUNTIES_ACTIONS.replace("{bounty_id}",this.$route.params.id),{params:{offset:s.a.API_PARAM.OFFSET_DEFAULT,limit:s.a.API_PARAM.LIMIT_DEFAULT,sort:s.a.API_PARAM.SORT_NEW}}).then(function(e){t.bountyActions=e.data}).catch(function(t){console.log(t)})},e.prototype.allowPush=function(t){var e=this;this.$store.dispatch("transitionAllow").then(function(){e.$router.push(t)})},e.prototype.openModalDialog=function(t){this.dialogMessage=t,this.showModalDialog=!0},e.prototype.closeModalDialog=function(){this.showModalDialog=!1},e.prototype.infiniteHandlerJoins=function(t){var e=this;2===this.tabNum&&this.$axios.get(s.a.API_URL.BOUNTIES_JOIN.replace("{bounty_id}",this.$route.params.id),{params:{offset:this.offsetJoins,limit:s.a.API_PARAM.LIMIT_DEFAULT,sort:s.a.API_PARAM.SORT_NEW}}).then(function(n){var o;n.data.length?(e.offsetJoins+=s.a.API_PARAM.LIMIT_DEFAULT,(o=e.bountyJoins).push.apply(o,n.data),t.loaded()):t.complete()}).catch(function(e){t.complete()})},e.prototype.infiniteHandlerComments=function(t){var e=this;3===this.tabNum&&this.$axios.get(s.a.API_URL.BOUNTIES_COMMENTS.replace("{bounty_id}",this.$route.params.id),{params:{offset:this.offsetComments,limit:s.a.API_PARAM.LIMIT_DEFAULT}}).then(function(n){var o;n.data.length?(e.offsetComments+=s.a.API_PARAM.LIMIT_DEFAULT,(o=e.bountyComments).push.apply(o,n.data),t.loaded()):t.complete()}).catch(function(e){t.complete()})},e=f([Object(i.Component)({components:{CardUser:u.a,CardBox:c.a,BountyType:l.a,ModalDialog:p.a}})],e)}(i.Vue),_=(n(296),n(6)),v=Object(_.a)(g,o,[],!1,null,"9e9616ea",null);e.default=v.exports}}]);