(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{228:function(t,e,a){var r=a(233);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(20).default)("85925b48",r,!1,{})},230:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var r=function(t,e,a,r){return new(a||(a=Promise))(function(n,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?n(t.value):new a(function(e){e(t.value)}).then(i,s)}c((r=r.apply(t,e||[])).next())})},n=function(t,e){var a,r,n,o,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],r=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},o=function(){function t(){this.responseStatuses=new Array}return t.prototype.putError=function(t){this.responseStatuses.push(t)},t.prototype.checkError=function(){for(var t=0,e=this.responseStatuses;t<e.length;t++){var a=e[t];if(!String(a).startsWith("2"))return a}return"200"},t.prototype.procError=function(t,e,a,o){return r(this,void 0,void 0,function(){var r;return n(this,function(n){switch(n.label){case 0:return[4,this.checkError()];case 1:switch(r=n.sent(),String(r)){case"401":return[3,2];case"200":return[3,4]}return[3,5];case 2:return[4,t.dispatch("addNextPagePath",e.fullPath)];case 3:return n.sent(),[2,a("/account/signup")];case 4:return[3,6];case 5:return o({statusCode:r,message:"予期しないエラーが発生しました"}),[2];case 6:return[2]}})})},t}()},231:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modalThanks",appear:""}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{attrs:{id:"modal-content"}},[a("div",{attrs:{id:"modal-overlay"}}),t._v(" "),a("div",{staticClass:"dialogImg"}),t._v(" "),a("div",{staticClass:"dialogMessage"},[a("div",{staticClass:"bountyList"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.imageUrl,expression:"imageUrl"}],staticClass:"topBaunty"},[a("img",{staticClass:"dialogMessageImg",attrs:{src:t.imageUrl}})])]),t._v(" "),t._l(t.messages,function(e){return a("div",{key:e},[a("p",{domProps:{innerHTML:t._s(t.$options.filters.newLine(e))}})])})],2),t._v(" "),a("div",[a("button",{staticClass:"rewardButton joinButton",attrs:{id:"modal-close"},on:{click:function(e){t.$emit("close")}}},[t._v("閉じる")])])])])])])};r._withStripped=!0;var n,o=a(4),i=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)},function(t,e){function a(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),s=function(t,e,a,r){var n,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,a,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(o<3?n(i):o>3?n(e,a,i):n(e,a))||i);return o>3&&i&&Object.defineProperty(e,a,i),i},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),s([Object(o.Prop)()],e.prototype,"messages",void 0),s([Object(o.Prop)()],e.prototype,"imageUrl",void 0),e=s([Object(o.Component)({})],e)}(o.Vue),l=(a(232),a(6)),u=Object(l.a)(c,r,[],!1,null,null,null);e.a=u.exports},232:function(t,e,a){"use strict";var r=a(228);a.n(r).a},233:function(t,e,a){(t.exports=a(19)(!1)).push([t.i,".modal-mask{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;transition:opacity .3s ease}.modal-mask .modal-wrapper{position:fixed;margin-top:8%;margin-left:25%}@media (max-width:767px){#modal-content{margin:0 auto;position:relative}.modal-mask .modal-wrapper{margin-left:0}}",""])},301:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"bountyIcon",style:{"background-image":"url("+t.reward.account.profileImageUrl+")"}}),t._v(" "),a("nuxt-link",{staticClass:"bountyArtistName",attrs:{to:"/artists/"+t.reward.account.accountName}},[t._v(t._s(t.reward.account.displayName))]),t._v(" "),t.reward.rewardImageUrl?a("div",{staticClass:"mainVisual myPage bounty1",style:{"background-image":"url("+t.reward.rewardImageUrl+")"}}):a("div",{staticClass:"mainVisual myPage bounty1",style:{"background-image":"url(/img/project_blank.jpg)"}}),t._v(" "),a("div",{staticClass:"mypageTop"},[a("div",{staticClass:"container"},[a("div",{staticClass:"profileArea"},[a("h3",{staticClass:"bountyTitle"},[t._v(t._s(t.reward.rewardName))]),t._v(" "),1==t.isOwn?a("div",[a("div",{staticClass:"textRight top60"},[a("a",{staticClass:"rewardButton ChangeButton",on:{click:function(e){t.allowPush("/account/my/rewards/create?rewardId="+t.reward.rewardId)}}},[t._v("編集する")])]),t._v(" "),a("div",{staticClass:"projectData"},[t._v("ステータス："+t._s(t.rewardStatsName))])]):t._e(),t._v(" "),a("div",{staticClass:"projectData"},[a("p",[t._v("交換期限："),a("span",[t._v(t._s(t._f("nullToNone")(t._f("formatDateMmDd")(t.reward.exchangeEndDate))))])]),t._v(" "),a("p",[t._v("交換ポイント："),a("span",[t._v(t._s(t._f("zeroToNone")(t._f("toLocaleString")(t.reward.exchangeRate)))+t._s(t._f("delete")(t.pointName,0==t.reward.exchangeRate||null==t.reward.exchangeRate)))])]),t._v(" "),a("p",[t._v("個数："),a("span",[t._v(t._s(t._f("toLocaleString")(t.reward.ownQuantity))+" / "+t._s(t._f("toLocaleString")(t.reward.quantity)))])])]),t._v(" "),a("div",{staticClass:"grad-wrap"},[a("input",{staticClass:"grad-trigger",attrs:{id:"trigger1",type:"checkbox"}}),t._v(" "),a("label",{staticClass:"grad-btn",attrs:{for:"trigger1"}}),t._v(" "),a("div",{staticClass:"grad-item bounty"},[a("p",{directives:[{name:"linkified",rawName:"v-linkified"}],domProps:{innerHTML:t._s(t.$options.filters.newLine(t.reward.description))}})])])])]),t._v(" "),a("div",{staticClass:"menuBg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"contentsArea"},[a("ul",{staticClass:"flexMenu bountyMenu"},[a("li",{class:{here:1==t.tabNum}},[1==t.tabNum?a("div",[t._v("所有者")]):a("div",[a("a",{on:{click:function(e){t.tabNumChange(1)}}},[t._v("所有者")])])])])])])])]),t._v(" "),a("div",{staticClass:"container"},[1==t.tabNum?a("div",{staticClass:"activityArea"},t._l(t.rewardOwners,function(e){return a("div",{key:e.accountId},[1==e.useChat?a("CardUser",{attrs:{rewardId:t.$route.params.id,profileImageUrl:e.profileImageUrl,displayName:e.displayName,accountName:e.accountName,exchangeAccountName:e.accountName,description:e.description,date:e.createDateTime}}):t._e()],1)}),0):t._e()]),t._v(" "),t.showModalDialog?a("ModalDialog",{attrs:{messages:t.dialogMessage,imageUrl:t.dialogImageUrl},on:{close:function(e){t.closeModalDialog()}}}):t._e()],1)};r._withStripped=!0;var n,o=a(4),i=a(54),s=a(230),c=a(241),l=a(231),u=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)},function(t,e){function a(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),p=function(t,e,a,r){var n,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,a,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(o<3?n(i):o>3?n(e,a,i):n(e,a))||i);return o>3&&i&&Object.defineProperty(e,a,i),i},d=function(t,e,a,r){return new(a||(a=Promise))(function(n,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?n(t.value):new a(function(e){e(t.value)}).then(i,s)}c((r=r.apply(t,e||[])).next())})},f=function(t,e){var a,r,n,o,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],r=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tabNum=1,e.isProcessing=!1,e.showModalDialog=!1,e}return u(e,t),e.prototype.asyncData=function(t){var e=t.app,a=t.store,r=t.route,n=t.redirect,o=t.error;return d(this,void 0,void 0,function(){var t,c,l,u,p,d;return f(this,function(f){switch(f.label){case 0:return t=new s.a,c="",[4,e.$axios.$get(i.a.API_URL.REWARD+"/"+r.params.id)];case 1:return l=f.sent(),[4,e.$axios.$get(i.a.API_URL.REWARD_OWNERS.replace("{reward_id}",r.params.id),{params:{offset:i.a.API_PARAM.OFFSET_DEFAULT,limit:i.a.API_PARAM.LIMIT_DEFAULT,sort:i.a.API_PARAM.SORT_NEW}}).catch(function(e){t.putError(e.response.status)})];case 2:return u=f.sent(),[4,t.procError(a,r,n,o)];case 3:return f.sent(),p=!1,l.account.accountName===a.state.myProfile.accountName&&(p=!0),c=1===l.publishStatus?"公開中":0===l.createStatus?"作成中":"非公開",d=i.a.POINT.WIP,[2,{reward:l,rewardOwners:u,isOwn:p,pointName:d,rewardStatsName:c,dialogImageUrl:i.a.TemplateImg.DIALOG_IMG_URL}]}})})},e.prototype.tabNumChange=function(t){this.tabNum=t},e.prototype.allowPush=function(t){var e=this;this.$store.dispatch("transitionAllow").then(function(){e.$store.dispatch("addNextPagePath",t).then(function(){e.$router.push(t)})})},e=p([Object(o.Component)({components:{CardUser:c.a,ModalDialog:l.a}})],e)}(o.Vue),m=a(6),h=Object(m.a)(v,r,[],!1,null,null,null);e.default=h.exports}}]);