(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{230:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function u(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,u)}c((r=r.apply(t,e||[])).next())})},o=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},a=function(){function t(){this.responseStatuses=new Array}return t.prototype.putError=function(t){this.responseStatuses.push(t)},t.prototype.checkError=function(){for(var t=0,e=this.responseStatuses;t<e.length;t++){var n=e[t];if(!String(n).startsWith("2"))return n}return"200"},t.prototype.procError=function(t,e,n,a){return r(this,void 0,void 0,function(){var r;return o(this,function(o){switch(o.label){case 0:return console.log("[Debug]AsyncDataErrorHundller#procError():Start"),[4,this.checkError()];case 1:switch(r=o.sent(),console.log("[Debug]AsyncDataErrorHundller#procError():errorStatus => "+r),String(r)){case"401":return[3,2];case"200":return[3,4]}return[3,5];case 2:return[4,t.dispatch("addNextPagePath",e.fullPath)];case 3:return o.sent(),console.log("[Debug]AsyncDataErrorHundller#procError():go to signup"),[2,n("/account/signup")];case 4:return console.log("[Debug]AsyncDataErrorHundller#procError():End"),[3,6];case 5:return a({statusCode:r,message:"予期しないエラーが発生しました"}),console.log("[Debug]AsyncDataErrorHundller#procError():End"),[2];case 6:return[2]}})})},t}()},313:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"bountyList personalItem"},t._l(t.bounties,function(e){return n("CardBox",{key:e.bountyId,attrs:{backgroundImageUrl:e.bountyImageUrl,bountyId:e.bountyId,titleName:e.bountyName,bountyType:e.bountyType,participationEndDate:e.participationEndDate,quantity:e.quantity,description:e.description,pointName:t.pointName,isOwn:!0,dialogProfileImageUrl:e.account.profileImageUrl,accountName:e.account.accountName,displayName:e.account.displayName,profileImageUrl:e.account.profileImageUrl,bountyStatusShow:!0,bountyCompleteStatus:e.completeStatus,bountyPublishStatus:e.publishStatus,bountyCreateStatus:e.createStatus,joinCount:e.joinCount,participantLimit:e.participantLimit,commentCount:e.commentCount}})}),1),t._v(" "),n("infinite-loading",{on:{infinite:t.infiniteHandler}},[n("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),n("span",{attrs:{slot:"no-results"},slot:"no-results"})])],1)};r._withStripped=!0;var o,a=n(3),i=n(54),u=n(230),c=n(237),s=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},p=function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function u(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,u)}c((r=r.apply(t,e||[])).next())})},f=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.offset=i.a.API_PARAM.LIMIT_DEFAULT,e}return s(e,t),e.prototype.asyncData=function(t){var e=t.app,n=t.store,r=t.route,o=t.redirect,a=t.error;return p(this,void 0,void 0,function(){var t,c,s;return f(this,function(l){switch(l.label){case 0:return t=new u.a,[4,e.$axios.$get(i.a.API_URL.MY_BOUNTIES,{params:{offset:i.a.API_PARAM.OFFSET_DEFAULT,limit:i.a.API_PARAM.LIMIT_DEFAULT,sort:i.a.API_PARAM.SORT_NEW}}).catch(function(e){t.putError(e.response.status)})];case 1:return c=l.sent(),s=i.a.POINT.WIP,[4,t.procError(n,r,o,a)];case 2:return l.sent(),[2,{bounties:c,pointName:s}]}})})},e.prototype.infiniteHandler=function(t){return p(this,void 0,void 0,function(){var e,n=this;return f(this,function(r){switch(r.label){case 0:return[4,this.$msalWishHub.silentLogin()];case 1:return e=r.sent(),[4,this.$store.dispatch("addAccessToken",e)];case 2:return r.sent(),this.$axios.get(i.a.API_URL.MY_BOUNTIES,{params:{offset:this.offset,limit:i.a.API_PARAM.LIMIT_DEFAULT,sort:i.a.API_PARAM.SORT_NEW}}).then(function(e){var r;e.data.length?(n.offset+=i.a.API_PARAM.LIMIT_DEFAULT,(r=n.bounties).push.apply(r,e.data),t.loaded()):t.complete()}).catch(function(e){t.complete()}),[2]}})})},e=l([Object(a.Component)({components:{CardBox:c.a}})],e)}(a.Vue),y=n(6),d=Object(y.a)(h,r,[],!1,null,null,null);e.default=d.exports}}]);