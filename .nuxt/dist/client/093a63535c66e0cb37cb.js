(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{286:function(t,o,e){var n=e(350);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(13).default)("4693ce44",n,!1,{})},349:function(t,o,e){"use strict";var n=e(286);e.n(n).a},350:function(t,o,e){(t.exports=e(12)(!1)).push([t.i,".messageEntry[data-v-2d81f65a],.wrapper[data-v-2d81f65a]{position:relative}",""])},379:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("div",{staticClass:"mypageTop marginTopAdd"},[n("div",{staticClass:"container"},[n("div",{staticClass:"profileArea"},[n("h3",{staticClass:"bountyTitle"},[t._v(t._s(t.bounty.bountyName))]),t._v(" "),n("div",{staticClass:"snsShare"},[n("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/share?ref_src=twsrc%5Etfw","data-show-count":"false"}},[t._v("Tweet")]),t._v(" "),n("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}}),t._v(" "),n("iframe",{staticStyle:{border:"none",overflow:"hidden"},attrs:{src:"https://www.facebook.com/plugins/share_button.php?href="+t.faceBookShareUrl+"&layout=button&size=small&width=61&height=20&appId",width:"61",height:"20",scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"}})]),t._v(" "),1==t.isOwn?n("div",[n("div",{staticClass:"textRight top60"},[n("a",{staticClass:"rewardButton",on:{click:function(o){t.allowPush("/account/my/bounties/create?bountyId="+t.bounty.bountyId)}}},[t._v("編集する")])])]):t._e(),t._v(" "),n("div",{staticClass:"marginTop-30"},[t.iconUrl?n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.iconUrl,expression:"iconUrl",arg:"background-image"}],staticClass:"bountyIcon"}):t._e(),t._v(" "),n("p",{staticClass:"bountyOwner"},[t._v("オーナー：")]),n("nuxt-link",{staticClass:"bountyArtistName",attrs:{to:"/players/"+t.bounty.account.accountName}},[t._v(t._s(t.bounty.account.displayName))])],1),t._v(" "),n("div",{staticClass:"projectData"},[n("BountyType",{attrs:{bountyType:t.bounty.bountyType,isTag:!0,isLink:!0}}),t._v(" "),n("p",{staticClass:"textWhite"},[n("span",[t._v(t._s(t._f("toDateRight")(t.bounty.publishDate)))])]),t._v(" "),n("p",{staticClass:"textWhite"},[t._v("パーティ："),n("span",[t._v(t._s(t.bounty.joinCount)+"/"+t._s(t.bounty.participantLimit)+" 人")])]),t._v(" "),1==t.isOwn?n("p",{staticClass:"textWhite"},[t._v("ステータス："+t._s(t.bountyStatsName))]):t._e(),t._v(" "),t.isBountyFull?n("span",{staticClass:"projectFull"},[t._v("満員")]):t._e(),t._v(" "),1==t.bounty.isNew?n("span",{staticClass:"projectNew"},[t._v("NEW")]):t._e()],1),t._v(" "),n("div",{staticClass:"grad-wrap"},[n("div",{staticClass:"grad-item bounty"},[n("p",{directives:[{name:"linkified",rawName:"v-linkified"}],domProps:{innerHTML:t._s(t.$options.filters.newLine(t.bounty.description))}}),t._v(" "),n("div",{staticClass:"projectData"},[t.bounty.likeCount>0?n("a",{on:{click:function(o){t.tabNumChange(3)}}},[n("span",{staticClass:"chatNumber"},[n("img",{attrs:{loading:"lazy",src:e(244)}}),t._v(t._s(t._f("toLocaleString")(t.bounty.likeCount)))])]):t._e(),t.bounty.commentCount>0?n("a",{on:{click:function(o){t.tabNumChange(3)}}},[n("span",{staticClass:"chatNumber"},[n("img",{attrs:{loading:"lazy",src:e(239)}}),t._v(t._s(t._f("toLocaleString")(t.bounty.commentCount)))])]):t._e()])])])]),t._v(" "),1==t.isOwn&&0==t.bounty.publishStatus?n("div",{staticClass:"textCenter questButtonArea"},[n("p",[t._v("登録内容を確認したら、クエストを公開してください。")]),t._v(" "),n("a",{staticClass:"grow2 rewardButton ChangeButton",on:{click:function(o){t.allowPush("/account/my/bounties/create?bountyId="+t.bounty.bountyId)}}},[t._v("公開する")])]):t._e(),t._v(" "),1==t.bounty.joinStatus&&1==t.bounty.canAchieve?n("div",{staticClass:"textCenter questButtonArea"},[n("p",[t._v("\n              目標が達成されたら、クエストの達成してください。\n            ")]),t._v(" "),n("a",{staticClass:"grow2 rewardButton ChangeButton",on:{click:function(o){t.achieveBounty(t.bounty.bountyId)}}},[t._v("達成する")])]):t._e(),t._v(" "),1==t.isOwn&&1==t.bounty.publishStatus&&1!=t.bounty.completeStatus&&2!=t.bounty.completeStatus&&3!=t.bounty.completeStatus?n("div",{staticClass:"textCenter questButtonArea"},[n("p",[t._v("＼クエストに参加してくれるプレイヤーにオファーしよう！／")]),t._v(" "),n("nuxt-link",{staticClass:"grow2 rewardButton ChangeButton",attrs:{to:"/players"}},[t._v("オファーする")])],1):t._e(),t._v(" "),1==t.isOwn&&2==t.bounty.publishStatus&&1!=t.bounty.completeStatus&&2!=t.bounty.completeStatus&&3!=t.bounty.completeStatus?n("div",{staticClass:"textCenter questButtonArea"},[n("p",[t._v("＼お友達にURLを伝えてクエストに参加してもらおう！／")]),t._v(" "),n("button-crip-board-copy",[n("a",{staticClass:"grow2 rewardButton ChangeButton",attrs:{slot:"link"},slot:"link"},[t._v("URLをコピー")])])],1):t._e()]),t._v(" "),n("div",{staticClass:"menuBg"},[n("div",{staticClass:"container"},[n("div",{staticClass:"contentsArea"},[n("ul",{staticClass:"flexMenu bountyMenu"},[n("li",{class:{here:1==t.tabNum}},[1==t.tabNum?n("div",[t._v("プレイヤー募集")]):n("div",[n("a",{on:{click:function(o){t.tabNumChange(1)}}},[t._v("プレイヤー募集")])])]),t._v(" "),n("li",{class:{here:2==t.tabNum}},[2==t.tabNum?n("div",[t._v("パーティー")]):n("div",[n("a",{on:{click:function(o){t.tabNumChange(2)}}},[t._v("パーティー")])])]),t._v(" "),n("li",{class:{here:4==t.tabNum}},[4==t.tabNum?n("div",[t._v("達成者")]):n("div",[n("a",{on:{click:function(o){t.tabNumChange(4)}}},[t._v("達成者")])])]),t._v(" "),n("li",{class:{here:3==t.tabNum}},[3==t.tabNum?n("div",[t._v("チャット")]):n("div",[n("a",{on:{click:function(o){t.tabNumChange(3)}}},[t._v("チャット")])])])])])])])]),t._v(" "),n("div",{staticClass:"container  bottomAdd"},[1==t.tabNum?n("div",{staticClass:"bountyList personalItem"},t._l(t.bountyActions,function(o){return n("CardBox",{key:o.bountyActionId,attrs:{cardType:"bountyAction",backgroundImageUrl:o.bountyActionImageUrl,titleName:o.bountyActionName,description:o.description,bountyId:o.bountyId,bountyActionNo:o.bountyActionNo,isOwn:t.isOwn,joinAccounts:o.joinAccounts,joinStatus:t.bounty.joinStatus,joinActionNo:t.bounty.joinActionNo,joinDate:t.bounty.joinDate,joinActionStatus:o.joinStatus,thanksMessage:t.bounty.thanksMessage,thanksProfileImageUrl:t.bounty.account.profileImageUrl,thanksProfileIconNo:t.bounty.account.profileIconNo,joinCount:t.bounty.joinCount,participantLimit:t.bounty.participantLimit,completeStatus:t.bounty.completeStatus,actionJoinCount:o.joinCount,bountyCanJoin:t.bountyCanJoin,bountyCanUnJoin:t.bountyCanUnJoin,bountyTypeForAction:o.bountyActionType,ownAccountName:t.bounty.account.accountName,ownIconUrl:t.iconUrl},on:{refreshJoin:function(o){t.refreshJoin(t.isCommontSecret)}}})}),1):2==t.tabNum?n("div",{staticClass:"activityArea"},t._l(t.bountyJoins,function(o){return n("CardUser",{key:o.accountId,attrs:{cardType:"bountyJoins",bountyActionNo:o.bountyActionNo,ownAccountName:t.bounty.account.accountName,profileImageUrl:o.profileImageUrl,profileIconNo:o.profileIconNo,displayName:o.displayName,date:o.createDateTime,accountName:o.accountName,isJoin:!0}})}),1):4==t.tabNum?n("div",{staticClass:"activityArea"},t._l(t.bountyAchievers,function(o){return n("CardUser",{key:o.accountId,attrs:{cardType:"bountyJoins",bountyActionNo:o.bountyActionNo,ownAccountName:t.bounty.account.accountName,profileImageUrl:o.profileImageUrl,profileIconNo:o.profileIconNo,displayName:o.displayName,date:o.createDateTime,accountName:o.accountName,isJoin:!0}})}),1):3==t.tabNum?n("div",{staticClass:"activityArea"},[t._l(t.bountyComments,function(o){return n("CardUser",{key:o.bountyCommentId,attrs:{cardType:"comment",bountyActionNo:o.account.bountyActionNo,ownAccountName:t.bounty.account.accountName,profileImageUrl:o.account.profileImageUrl,profileIconNo:o.account.profileIconNo,displayName:o.account.displayName,date:o.postedDateTime,accountName:o.account.accountName,description:o.comment,commentId:o.bountyCommentId,replyBountyComment:o.replyComment,commentLikeCount:o.likeCount,canPostComment:t.bounty.canPostComment,commentAccountName:o.account.accountName,commentImageUrl:o.commentImageUrl,commentType:"Bounty"},on:{refreshComment:t.refreshAllComment}})}),t._v(" "),n("a",{staticClass:"modal-syncer",attrs:{"data-target":"modal-content-11"},on:{click:function(o){t.pushChat(t.message)}}},[t._m(0)])],2):t._e(),t._v(" "),n("infinite-loading",{attrs:{identifier:t.tabNum},on:{infinite:t.infiniteHandler}},[n("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),n("span",{attrs:{slot:"no-results"},slot:"no-results"})])],1),t._v(" "),n("ModalChatPost",{attrs:{commentId:"",isProcessing:t.isProcessingChatPost,open:t.showModalChatPost},on:{closeModalChatPostYes:t.closeModalChatPostYes,closeModalChatPostNo:function(o){t.closeModalChatPostNo()}}}),t._v(" "),n("ModalDialog",{attrs:{messages:t.dialogMessage,showLoginButton:t.showLoginButton,imageUrl:t.dialogImageUrl,open:t.showModalDialog},on:{close:function(o){t.closeModalDialog()}}}),t._v(" "),n("ModalDialogFreeFormat",{attrs:{description:t.dialogFreeFormat,yesButtionName:"OK",open:t.showModalDialogFreeFormat},on:{closeModalDialogFreeFormatYes:function(o){t.closeModalDialogFreeFormatYes()}}})],1)},a=[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"questEntryLinkBtn chattButton"},[o("img",{attrs:{img:"",loading:"lazy",src:e(239)}}),this._v(" "),o("p",[this._v("チャットする")])])}];n._withStripped=!0;var s,i=e(1),r=e(5),c=e(78),u=e(232),l=e(248),p=e(240),m=e(299),h=e(77),d=e(297),_=e(233),A=e.n(_),f=(s=function(t,o){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}s(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),y=function(t,o,e,n){var a,s=arguments.length,i=s<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,o,e,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(i=(s<3?a(i):s>3?a(o,e,i):a(o,e))||i);return s>3&&i&&Object.defineProperty(o,e,i),i},I=function(t,o,e,n){return new(e||(e=Promise))(function(a,s){function i(t){try{c(n.next(t))}catch(t){s(t)}}function r(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){t.done?a(t.value):new e(function(o){o(t.value)}).then(i,r)}c((n=n.apply(t,o||[])).next())})},b=function(t,o){var e,n,a,s,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function r(s){return function(r){return function(s){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=o.call(t,i)}catch(t){s=[6,t],n=0}finally{e=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,r])}}};i.Vue.directive("linkified",A.a);var g=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.tabNum=1,o.message=null,o.isProcessing=!1,o.isCommontSecret=!1,o.iconUrl="",o.offsetActions=r.a.API_PARAM.LIMIT_DEFAULT,o.offsetJoins=r.a.API_PARAM.LIMIT_DEFAULT,o.offsetAchievers=r.a.API_PARAM.LIMIT_DEFAULT,o.offsetComments=r.a.API_PARAM.LIMIT_DEFAULT,o.showModalDialog=!1,o.showLoginButton=!1,o.showModalDialogFreeFormat=!1,o.showModalChatPost=!1,o.isProcessingChatPost=!1,o}return f(o,t),o.prototype.asyncData=function(t){var o=t.app,e=t.route,n=t.store,a=t.error,s=t.redirect;return I(this,void 0,void 0,function(){var t,i,l,p,m,h,d,_,A,f,y,I,g,C,v,P,M,N,T,E,L,U;return b(this,function(b){switch(b.label){case 0:return t="",i=!1,l=[""],p=new u.a,I=(y=Promise).all,[4,o.$axios.$get(r.a.API_URL.BOUNTIES+"/"+e.params.id).catch(function(t){p.putError(t.response.status)})];case 1:return g=[b.sent()],[4,o.$axios.$get(r.a.API_URL.BOUNTIES_ACTIONS.replace("{bounty_id}",e.params.id),{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).catch(function(t){p.putError(t.response.status)})];case 2:return g=g.concat([b.sent()]),[4,o.$axios.$get(r.a.API_URL.BOUNTIES_JOIN.replace("{bounty_id}",e.params.id),{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).catch(function(t){p.putError(t.response.status)})];case 3:return g=g.concat([b.sent()]),[4,o.$axios.$get(r.a.API_URL.BOUNTIES_JOIN_ACHIEVED.replace("{bounty_id}",e.params.id),{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).catch(function(t){p.putError(t.response.status)})];case 4:return g=g.concat([b.sent()]),[4,o.$axios.$get(r.a.API_URL.BOUNTIES_COMMENTS.replace("{bounty_id}",e.params.id),{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT}}).catch(function(t){return 400===t.response.status&&(i=!0,l=t.response.data.BadRequest),[{account:null,bountyId:null,bountyCommentId:null,comment:null,postedDateTime:null,replyCommentId:null,replyComment:null,clientCode:null,credentialId:null}]})];case 5:return[4,I.apply(y,[g.concat([b.sent()])])];case 6:if(m=b.sent(),h=m[0],d=m[1],_=m[2],A=m[3],f=m[4],p.isError())return[2,p.procError(n,e,s,a)];if(C=!1,h.account.accountName===n.state.myProfile.accountName&&(C=!0),v="/img/icon_blank.svg",P=new c.a,h&&h.account&&h.account.profileImageUrl?v=h.account.profileImageUrl+"?"+P.getNowDateTime():h&&h.account&&h.account.profileIconNo&&(v="/img/cha_"+h.account.profileIconNo+".svg"),n.state.myProfile.permissions)for(M=0,N=n.state.myProfile.permissions;M<N.length;M++)"A"===N[M]&&(i=!1);return t=1===h.createStatus||1===h.publishStatus?"公開":1===h.createStatus||2===h.publishStatus?"限定公開":0===h.createStatus?"作成中":"非公開",T=!0,E=!0,1!==h.publishStatus&&2!==h.publishStatus&&(T=!1,E=!1),h.completeStatus&&(T=!1,E=!1),h.joinCount&&h.participantLimit&&Number(h.joinCount)>=Number(h.participantLimit)&&(T=!1),L=!1,h.joinCount&&h.participantLimit&&Number(h.joinCount)>=Number(h.participantLimit)&&(L=!0),U=r.a.POINT.WIZ,[2,{bounty:h,bountyActions:d,bountyJoins:_,bountyAchievers:A,bountyComments:f,isOwn:C,iconUrl:v,pointName:U,isCommontSecret:i,isCommontSecretMessage:l,bountyStatsName:t,bountyCanJoin:T,bountyCanUnJoin:E,isBountyFull:L,freeMessage01:r.a.HELPER_MESSAGE.M032_FREE_MESSAGE_01,faceBookShareUrl:P.encodeUrl("https://uliiq-wishhub.azurewebsites.net/bounties/"+h.bountyId)}]}})})},o.prototype.publishBounty=function(t){return I(this,void 0,void 0,function(){var o,e=this;return b(this,function(n){switch(n.label){case 0:return this.isProcessing?[2]:(this.isProcessing=!0,(o=new FormData).append("BountyId",t),[4,this.$axios.post(r.a.API_URL.BOUNTIES_PUBLISH.replace("{bounty_id}",t),o).then(function(t){e.refreshJoin(),e.openModalDialog(r.a.MESSAGE.INFO_PUBLISH,r.a.TemplateImg.DIALOG_INFO_IMG_URL)}).catch(function(t){400===t.response.status?e.openModalDialog(t.response.data.BadRequest,r.a.TemplateImg.DIALOG_WARN_IMG_URL):401===t.response.status?(e.showLoginButton=!0,e.openModalDialog(r.a.MESSAGE.ERR_401,r.a.TemplateImg.DIALOG_WARN_IMG_URL),e.$store.dispatch("logout")):e.openModalDialog(r.a.MESSAGE.ERR_ELSE,r.a.TemplateImg.DIALOG_WARN_IMG_URL)})]);case 1:return n.sent(),this.isProcessing=!1,[2]}})})},o.prototype.achieveBounty=function(t){return I(this,void 0,void 0,function(){var o,e=this;return b(this,function(n){switch(n.label){case 0:return this.isProcessing?[2]:(this.isProcessing=!0,(o=new FormData).append("BountyId",t),[4,this.$axios.post(r.a.API_URL.BOUNTIES_ACHIEVE.replace("{bounty_id}",t),o).then(function(t){e.refreshJoin(),e.openModalDialog(r.a.MESSAGE.INFO_ACHIEVED,r.a.TemplateImg.DIALOG_ACHIEVED_IMG_URL)}).catch(function(t){400===t.response.status?e.openModalDialog(t.response.data.BadRequest,r.a.TemplateImg.DIALOG_WARN_IMG_URL):401===t.response.status?(e.showLoginButton=!0,e.openModalDialog(r.a.MESSAGE.ERR_401,r.a.TemplateImg.DIALOG_WARN_IMG_URL),e.$store.dispatch("logout")):e.openModalDialog(r.a.MESSAGE.ERR_ELSE,r.a.TemplateImg.DIALOG_WARN_IMG_URL)})]);case 1:return n.sent(),this.isProcessing=!1,[2]}})})},o.prototype.head=function(){var t=this.bounty.bountyImageUrl;return t&&(t="https://uliiq-wishhub.azurewebsites.net/img/sns_share.jpg"),{title:"WishHub（ウィッシュハブ）|"+this.bounty.bountyName,meta:[{hid:"og:type",property:"og:type",content:"article"},{hid:"og:description",property:"og:description",content:this.bounty.description},{hid:"og:url",property:"og:url",content:"https://uliiq-wishhub.azurewebsites.net/bounties/"+this.bounty.bountyId},{hid:"og:image",property:"og:image",content:t},{hid:"og:site_name",property:"og:site_name",content:"WishHub（ウィッシュハブ）|"+this.bounty.bountyName},{hid:"twitter:title",property:"twitter:title",content:"WishHub（ウィッシュハブ）|"+this.bounty.bountyName},{hid:"twitter:description",property:"twitter:description",content:this.bounty.description},{hid:"twitter:image",property:"twitter:image",content:t}]}},o.prototype.tabNumChange=function(t){3===t&&this.isCommontSecret?this.openModalDialog(this.isCommontSecretMessage,r.a.TemplateImg.DIALOG_WARN_IMG_URL):(this.offsetActions=r.a.API_PARAM.LIMIT_DEFAULT,this.offsetJoins=r.a.API_PARAM.LIMIT_DEFAULT,this.offsetAchievers=r.a.API_PARAM.LIMIT_DEFAULT,this.offsetComments=r.a.API_PARAM.LIMIT_DEFAULT,this.refreshJoin(),this.refreshAchiever(),this.refreshComment(),this.tabNum=t)},o.prototype.addComment=function(t,o,e,n){return I(this,void 0,void 0,function(){var a,s=this;return b(this,function(i){switch(i.label){case 0:return this.isProcessing||!this.bounty.canPostComment?[2]:(this.isProcessing=!0,a=new FormData,t?(a.append("BountyId",this.$route.params.id),a.append("Comment",t),o&&e&&n?e.size>=r.a.SYSTEM.MAX_IMG_UPLOAD_SIZE?[4,this.$browserImageCompression.getCompressImageFileAsync(e)]:[3,2]:[3,3]):[3,5]);case 1:o=i.sent(),i.label=2;case 2:a.append("CommentImage",n),a.append("CommentImageBase64",o.replace(/^.*,/,"")),i.label=3;case 3:return[4,this.$axios.post(r.a.API_URL.BOUNTIES_COMMENTS.replace("{bounty_id}",this.$route.params.id),a).then(function(){s.refreshAllComment(),s.message=null,s.showModalChatPost=!1,s.isProcessingChatPost=!1}).catch(function(t){if(400===t.response.status){var o=[];if(t.response.data)for(var e in t.response.data)o=o.concat(t.response.data[e]);s.openModalDialog(o,r.a.TemplateImg.DIALOG_INFO_IMG_URL)}else 401===t.response.status?(s.showLoginButton=!0,s.openModalDialog(r.a.MESSAGE.ERR_401,r.a.TemplateImg.DIALOG_WARN_IMG_URL),s.$store.dispatch("logout")):s.openModalDialog(r.a.MESSAGE.ERR_ELSE,r.a.TemplateImg.DIALOG_WARN_IMG_URL);s.isProcessingChatPost=!1})];case 4:i.sent(),i.label=5;case 5:return this.isProcessing=!1,[2]}})})},o.prototype.refreshComment=function(){var t=this;this.$axios.get(r.a.API_URL.BOUNTIES_COMMENTS.replace("{bounty_id}",this.$route.params.id),{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT}}).then(function(o){t.bountyComments=o.data,t.isCommontSecret=!1}).catch(function(o){400===o.response.status&&(t.isCommontSecret=!0,t.isCommontSecretMessage=o.response.data.BadRequest),t.bountyComments=[{account:null,bountyId:null,bountyCommentId:null,comment:null,postedDateTime:null,replyCommentId:null,replyComment:null,clientCode:null,credentialId:null}],console.log(o)})},o.prototype.refreshAllComment=function(){var t=this;this.$axios.get(r.a.API_URL.BOUNTIES_COMMENTS.replace("{bounty_id}",this.$route.params.id)).then(function(o){t.bountyComments=o.data,t.isCommontSecret=!1,t.bountyComments&&(t.offsetComments=t.bountyComments.length)}).catch(function(o){400===o.response.status&&(t.isCommontSecret=!0,t.isCommontSecretMessage=o.response.data.BadRequest),t.bountyComments=[{account:null,bountyId:null,bountyCommentId:null,comment:null,postedDateTime:null,replyCommentId:null,replyComment:null,clientCode:null,credentialId:null}],console.log(o)})},o.prototype.refreshJoin=function(){var t=this;this.$axios.get(r.a.API_URL.BOUNTIES_JOIN.replace("{bounty_id}",this.$route.params.id),{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).then(function(o){t.bountyJoins=o.data,t.$axios.get(r.a.API_URL.BOUNTIES+"/"+t.$route.params.id).then(function(o){t.bounty=o.data,t.refreshComment()}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)}),this.$axios.get(r.a.API_URL.BOUNTIES_ACTIONS.replace("{bounty_id}",this.$route.params.id),{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).then(function(o){t.bountyActions=o.data}).catch(function(t){console.log(t)})},o.prototype.refreshAchiever=function(){var t=this;this.$axios.get(r.a.API_URL.BOUNTIES_JOIN_ACHIEVED.replace("{bounty_id}",this.$route.params.id),{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).then(function(o){t.bountyJoins=o.data,t.$axios.get(r.a.API_URL.BOUNTIES+"/"+t.$route.params.id).then(function(o){t.bounty=o.data,t.refreshComment()}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)}),this.$axios.get(r.a.API_URL.BOUNTIES_ACTIONS.replace("{bounty_id}",this.$route.params.id),{params:{offset:r.a.API_PARAM.OFFSET_DEFAULT,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).then(function(o){t.bountyActions=o.data}).catch(function(t){console.log(t)})},o.prototype.allowPush=function(t){var o=this;this.$store.dispatch("addNextPagePath",t).then(function(){o.$store.dispatch("transitionAllow").then(function(){o.$router.push(t)})})},o.prototype.openModalDialog=function(t,o){this.dialogMessage=t,this.dialogImageUrl=o,this.showModalDialog=!0},o.prototype.closeModalDialog=function(){this.showModalDialog=!1,this.showLoginButton=!1},o.prototype.openModalDialogFreeFormat=function(t){this.dialogFreeFormat=t,this.showModalDialogFreeFormat=!0},o.prototype.closeModalDialogFreeFormatYes=function(){this.showModalDialogFreeFormat=!1},o.prototype.infiniteHandler=function(t){1===this.tabNum?this.infiniteHandlerActivities(t):2===this.tabNum?this.infiniteHandlerJoins(t):3===this.tabNum?this.infiniteHandlerComments(t):4===this.tabNum&&this.infiniteHandlerAchievers(t)},o.prototype.infiniteHandlerActivities=function(t){var o=this;1===this.tabNum&&this.$axios.get(r.a.API_URL.BOUNTIES_ACTIONS.replace("{bounty_id}",this.$route.params.id),{params:{offset:this.offsetActions,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).then(function(e){var n;e.data.length?(o.offsetActions+=r.a.API_PARAM.LIMIT_DEFAULT,(n=o.bountyActions).push.apply(n,e.data),t.loaded()):t.complete()}).catch(function(o){t.complete()})},o.prototype.infiniteHandlerJoins=function(t){var o=this;2===this.tabNum&&this.$axios.get(r.a.API_URL.BOUNTIES_JOIN.replace("{bounty_id}",this.$route.params.id),{params:{offset:this.offsetJoins,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).then(function(e){var n;e.data.length?(o.offsetJoins+=r.a.API_PARAM.LIMIT_DEFAULT,(n=o.bountyJoins).push.apply(n,e.data),t.loaded()):t.complete()}).catch(function(o){t.complete()})},o.prototype.infiniteHandlerAchievers=function(t){var o=this;4===this.tabNum&&this.$axios.get(r.a.API_URL.BOUNTIES_JOIN_ACHIEVED.replace("{bounty_id}",this.$route.params.id),{params:{offset:this.offsetAchievers,limit:r.a.API_PARAM.LIMIT_DEFAULT,sort:r.a.API_PARAM.SORT_NEW}}).then(function(e){var n;e.data.length?(o.offsetAchievers+=r.a.API_PARAM.LIMIT_DEFAULT,(n=o.bountyAchievers).push.apply(n,e.data),t.loaded()):t.complete()}).catch(function(o){t.complete()})},o.prototype.infiniteHandlerComments=function(t){var o=this;3===this.tabNum&&this.$axios.get(r.a.API_URL.BOUNTIES_COMMENTS.replace("{bounty_id}",this.$route.params.id),{params:{offset:this.offsetComments,limit:r.a.API_PARAM.LIMIT_DEFAULT}}).then(function(e){var n;e.data.length?(o.offsetComments+=r.a.API_PARAM.LIMIT_DEFAULT,(n=o.bountyComments).push.apply(n,e.data),t.loaded()):t.complete()}).catch(function(o){t.complete()})},o.prototype.pushChat=function(){this.openModalChatPost()},o.prototype.openModalChatPost=function(){this.showModalChatPost=!0},o.prototype.closeModalChatPostYes=function(t,o,e,n,a){this.isProcessingChatPost=!0,this.addComment(t,e,n,a)},o.prototype.closeModalChatPostNo=function(){this.showModalChatPost=!1},o=y([Object(i.Component)({components:{CardUser:l.a,CardBox:p.a,BountyType:m.a,ModalDialog:h.a,ModalChatPost:d.a}})],o)}(i.Vue),C=(e(349),e(2)),v=Object(C.a)(g,n,a,!1,null,"2d81f65a",null);o.default=v.exports}}]);