(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{316:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("no-ssr",[e("div",[this._v("Loading...")])])};r._withStripped=!0;var o,i=n(3),u=n(54),c=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},a=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function c(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,c)}s((r=r.apply(t,e||[])).next())})},l=function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.mounted=function(){var t=this;this.$nextTick(function(){return a(t,void 0,void 0,function(){var t,e=this;return l(this,function(n){switch(n.label){case 0:return sessionStorage.clear(),[4,this.$msalWishHub.login()];case 1:return t=n.sent(),this.$store.dispatch("addAccessToken",t).then(function(){e.$axios.get(u.a.API_URL.MY_PROFILE).then(function(t){e.$store.dispatch("addMyProfile",t.data).then(function(){return a(e,void 0,void 0,function(){var t;return l(this,function(e){switch(e.label){case 0:return this.$store.state.nextPagePath?(t=this.$store.state.nextPagePath,[4,this.$store.dispatch("resetPagePath")]):[3,2];case 1:return e.sent(),this.$router.push(t),[2];case 2:return this.$router.push("/account/my"),[2]}})})})}).catch(function(t){return a(e,void 0,void 0,function(){return l(this,function(e){switch(e.label){case 0:return 404!==t.response.status?[3,1]:(this.$router.push("/account/my/profile"),[2]);case 1:return[4,this.$store.dispatch("resetPagePath")];case 2:return e.sent(),this.$router.push("/"),[2]}})})})}),[2]}})})})},e=s([Object(i.Component)({layout:"signupLoading"})],e)}(i.Vue),h=n(6),p=Object(h.a)(f,r,[],!1,null,null,null);e.default=p.exports}}]);