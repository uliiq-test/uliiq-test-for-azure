(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{230:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=function(t,e,r,n){return new(r||(r=Promise))(function(o,a){function i(t){try{u(n.next(t))}catch(t){a(t)}}function s(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(i,s)}u((n=n.apply(t,e||[])).next())})},o=function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},a=function(){function t(){this.responseStatuses=new Array}return t.prototype.putError=function(t){this.responseStatuses.push(t)},t.prototype.checkError=function(){for(var t=0,e=this.responseStatuses;t<e.length;t++){var r=e[t];if(!String(r).startsWith("2"))return r}return"200"},t.prototype.procError=function(t,e,r,a){return n(this,void 0,void 0,function(){var n;return o(this,function(o){switch(o.label){case 0:return console.log("[Debug]AsyncDataErrorHundller#procError():Start"),[4,this.checkError()];case 1:switch(n=o.sent(),console.log("[Debug]AsyncDataErrorHundller#procError():errorStatus => "+n),String(n)){case"401":return[3,2];case"200":return[3,4]}return[3,5];case 2:return[4,t.dispatch("addNextPagePath",e.fullPath)];case 3:return o.sent(),console.log("[Debug]AsyncDataErrorHundller#procError():go to signup"),[2,r("/account/signup")];case 4:return console.log("[Debug]AsyncDataErrorHundller#procError():End"),[3,6];case 5:return a({statusCode:n,message:"予期しないエラーが発生しました"}),console.log("[Debug]AsyncDataErrorHundller#procError():End"),[2];case 6:return[2]}})})},t}()},315:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"bountyList personalItem"},t._l(t.rewards,function(e){return r("CardBox",{key:e.rewardId,attrs:{backgroundImageUrl:e.rewardImageUrl,rewardId:e.rewardId,tokenTypeCode:e.tokenTypeCode,titleName:e.rewardName,exchangeRate:e.exchangeRate,exchangeEndDate:e.exchangeEndDate,quantity:e.quantity,description:e.description,pointName:t.pointName,isOwn:!0,isEdit:!0,dialogProfileImageUrl:e.account.profileImageUrl,ownQuantity:e.ownQuantity,rewardStatusShow:!0,rewardPublishStatus:e.publishStatus,rewardCreateStatus:e.createStatus}})}),1),t._v(" "),r("infinite-loading",{on:{infinite:t.infiniteHandler}},[r("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),r("span",{attrs:{slot:"no-results"},slot:"no-results"})])],1)])};n._withStripped=!0;var o,a=r(3),i=r(54),s=r(230),u=r(237),c=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),l=function(t,e,r,n){var o,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(i=(a<3?o(i):a>3?o(e,r,i):o(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i},f=function(t,e,r,n){return new(r||(r=Promise))(function(o,a){function i(t){try{u(n.next(t))}catch(t){a(t)}}function s(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(i,s)}u((n=n.apply(t,e||[])).next())})},p=function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.offset=i.a.API_PARAM.LIMIT_DEFAULT,e}return c(e,t),e.prototype.asyncData=function(t){var e=t.app,r=t.store,n=t.route,o=t.redirect,a=t.error;return f(this,void 0,void 0,function(){var t,u,c;return p(this,function(l){switch(l.label){case 0:return t=new s.a,[4,e.$axios.$get(i.a.API_URL.MY_REWARD,{params:{offset:i.a.API_PARAM.OFFSET_DEFAULT,limit:i.a.API_PARAM.LIMIT_DEFAULT,sort:i.a.API_PARAM.SORT_NEW}}).catch(function(e){t.putError(e.response.status)})];case 1:return u=l.sent(),c=i.a.POINT.WIP,[4,t.procError(r,n,o,a)];case 2:return l.sent(),[2,{rewards:u,pointName:c}]}})})},e.prototype.infiniteHandler=function(t){return f(this,void 0,void 0,function(){var e,r=this;return p(this,function(n){switch(n.label){case 0:return[4,this.$msalWishHub.silentLogin()];case 1:return e=n.sent(),[4,this.$store.dispatch("addAccessToken",e)];case 2:return n.sent(),this.$axios.get(i.a.API_URL.MY_REWARD,{params:{offset:this.offset,limit:i.a.API_PARAM.LIMIT_DEFAULT,sort:i.a.API_PARAM.SORT_NEW}}).then(function(e){var n;e.data.length?(r.offset+=i.a.API_PARAM.LIMIT_DEFAULT,(n=r.bounties).push.apply(n,e.data),t.loaded()):t.complete()}).catch(function(e){t.complete()}),[2]}})})},e=l([Object(a.Component)({components:{CardBox:u.a}})],e)}(a.Vue),d=r(6),y=Object(d.a)(h,n,[],!1,null,null,null);e.default=y.exports}}]);