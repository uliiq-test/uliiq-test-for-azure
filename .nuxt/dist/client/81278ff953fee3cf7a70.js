(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{213:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var r=function(t,n,e,r){return new(e||(e=Promise))(function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function u(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(i,u)}c((r=r.apply(t,n||[])).next())})},o=function(t,n){var e,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(t,i)}catch(t){a=[6,t],r=0}finally{e=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},a=function(){function t(){this.responseStatuses=new Array}return t.prototype.putError=function(t){this.responseStatuses.push(t)},t.prototype.checkError=function(){for(var t=0,n=this.responseStatuses;t<n.length;t++){var e=n[t];if(!String(e).startsWith("2"))return e}return"200"},t.prototype.procError=function(t,n,e,a){return r(this,void 0,void 0,function(){var r;return o(this,function(o){switch(o.label){case 0:return[4,this.checkError()];case 1:switch(r=o.sent(),String(r)){case"401":return[3,2];case"200":return[3,4]}return[3,5];case 2:return[4,t.dispatch("addNextPagePath",n.fullPath)];case 3:return o.sent(),[2,e("/account/signup")];case 4:return[3,6];case 5:return a({statusCode:r,message:"予期しないエラーが発生しました"}),[2];case 6:return[2]}})})},t}()},294:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container marginTopAdd"},[e("div",{staticClass:"bountyList personalItem"},t._l(t.bounties,function(n){return e("CardBox",{key:n.bountyId,attrs:{backgroundImageUrl:n.bountyImageUrl,bountyId:n.bountyId,titleName:n.bountyName,bountyType:n.bountyType,participationEndDate:n.participationEndDate,quantity:n.quantity,description:n.description,pointName:t.pointName,isOwn:!0,dialogProfileImageUrl:n.account.profileImageUrl,accountName:n.account.accountName,displayName:n.account.displayName,profileImageUrl:n.account.profileImageUrl,bountyStatusShow:!0,bountyCompleteStatus:n.completeStatus,bountyPublishStatus:n.publishStatus,bountyCreateStatus:n.createStatus,joinCount:n.joinCount,participantLimit:n.participantLimit,commentCount:n.commentCount}})}),1),t._v(" "),e("infinite-loading",{on:{infinite:t.infiniteHandler}},[e("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),e("span",{attrs:{slot:"no-results"},slot:"no-results"})])],1)};r._withStripped=!0;var o,a=e(1),i=e(14),u=e(213),c=e(220),s=(o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),l=function(t,n,e,r){var o,a=arguments.length,i=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,n,e,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(a<3?o(i):a>3?o(n,e,i):o(n,e))||i);return a>3&&i&&Object.defineProperty(n,e,i),i},p=function(t,n,e,r){return new(e||(e=Promise))(function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function u(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(i,u)}c((r=r.apply(t,n||[])).next())})},f=function(t,n){var e,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(t,i)}catch(t){a=[6,t],r=0}finally{e=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},h=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.offset=i.a.API_PARAM.LIMIT_DEFAULT,n}return s(n,t),n.prototype.asyncData=function(t){var n=t.app,e=t.store,r=t.route,o=t.redirect,a=t.error;return p(this,void 0,void 0,function(){var t,c,s;return f(this,function(l){switch(l.label){case 0:return t=new u.a,[4,n.$axios.$get(i.a.API_URL.MY_BOUNTIES,{params:{offset:i.a.API_PARAM.OFFSET_DEFAULT,limit:i.a.API_PARAM.LIMIT_DEFAULT,sort:i.a.API_PARAM.SORT_NEW}}).catch(function(n){t.putError(n.response.status)})];case 1:return c=l.sent(),s=i.a.POINT.WIP,[4,t.procError(e,r,o,a)];case 2:return l.sent(),[2,{bounties:c,pointName:s}]}})})},n.prototype.infiniteHandler=function(t){return p(this,void 0,void 0,function(){var n=this;return f(this,function(e){return this.$axios.get(i.a.API_URL.MY_BOUNTIES,{params:{offset:this.offset,limit:i.a.API_PARAM.LIMIT_DEFAULT,sort:i.a.API_PARAM.SORT_NEW}}).then(function(e){var r;e.data.length?(n.offset+=i.a.API_PARAM.LIMIT_DEFAULT,(r=n.bounties).push.apply(r,e.data),t.loaded()):t.complete()}).catch(function(n){t.complete()}),[2]})})},n=l([Object(a.Component)({components:{CardBox:c.a}})],n)}(a.Vue),y=e(6),b=Object(y.a)(h,r,[],!1,null,null,null);n.default=b.exports}}]);