(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{242:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(){}return t.prototype.stringToDataYmd=function(t){return t?new Date(t.substring(0,4)+"/"+t.substring(4,6)+"/"+t.substring(6,8)):new Date},t.prototype.dateNowCompare=function(t){var e=new Date,n=e.getFullYear(),o=e.getMonth()+1,r=e.getDate(),s=t.getFullYear(),i=t.getMonth()+1,u=t.getDate();return n===s?o===i?r<u?1:r===u?0:-1:o<i?1:-1:n<s?1:-1},t.prototype.encodeUrl=function(t){return t?t.replace(/\:/g,"%3A").replace(/\//g,"%2F"):t},t}()},305:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this.$createElement,e=this._self._c||t;return e("no-ssr",[e("div",[this._v("Loading...")])])};o._withStripped=!0;var r,s=n(3),i=n(54),u=n(242),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,o){var r,s=arguments.length,i=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var u=t.length-1;u>=0;u--)(r=t[u])&&(i=(s<3?r(i):s>3?r(e,n,i):r(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i},h=function(t,e,n,o){return new(n||(n=Promise))(function(r,s){function i(t){try{c(o.next(t))}catch(t){s(t)}}function u(t){try{c(o.throw(t))}catch(t){s(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(i,u)}c((o=o.apply(t,e||[])).next())})},l=function(t,e){var n,o,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&s[0]?o.return:s[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;switch(o=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],o=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.mounted=function(){var t=this;this.$nextTick(function(){return h(t,void 0,void 0,function(){var t,e,n,o,r=this;return l(this,function(s){switch(s.label){case 0:return t=this.$store.state.isB2cAuth||"true"===this.$cookies.get("isB2cAuth"),e=this.$store.state.isB2cLogout||"true"===this.$cookies.get("isB2cLogout"),console.log("------------- signup --------------"),console.log("isB2cAuth:"+t),console.log("isB2cLogou:"+e),location.hash?(console.log("リダイレクト待ち"),this.$cookies.set("isB2cAuth",!0,{maxAge:604800}),this.$store.dispatch("updateIsB2cAuth",!0),[3,4]):[3,1];case 1:return e&&t?(console.log("API実行"),this.$store.dispatch("updateIsB2cAuth",!1),this.$cookies.set("isB2cAuth",!1,{maxAge:604800}),[4,this.$msalWishHub.silentLogin()]):[3,3];case 2:return n=s.sent(),this.$store.dispatch("addAccessToken",n).then(function(){r.$axios.get(i.a.API_URL.MY_PROFILE).then(function(t){r.$store.dispatch("addMyProfile",t.data).then(function(){return h(r,void 0,void 0,function(){var t;return l(this,function(e){switch(e.label){case 0:return this.$store.state.nextPagePath||this.$cookies.get("nextPagePath")?(t=this.$store.state.nextPagePath||this.$cookies.get("nextPagePath"),[4,this.$store.dispatch("resetPagePath")]):[3,3];case 1:return e.sent(),[4,this.$cookies.remove("nextPagePath")];case 2:return e.sent(),this.$router.push(t),[2];case 3:return this.$router.push("/account/my"),[2]}})})})}).catch(function(t){return h(r,void 0,void 0,function(){return l(this,function(e){switch(e.label){case 0:return 404!==t.response.status?[3,1]:(this.$router.push("/account/my/profile"),[2]);case 1:return[4,this.$store.dispatch("resetPagePath")];case 2:return e.sent(),this.$router.push("/"),[2]}})})})}),[3,4];case 3:!e&&t?(console.log("B2C承認"),this.$msalWishHub.login()):(this.$cookies.set("isB2cLogout",!0,{maxAge:604800}),this.$store.dispatch("updateIsB2cLogout",!0),console.log("ログアウト"),o=new u.a,this.$router.push("https://login.microsoftonline.com/tfp/uliiqauth.onmicrosoft.com/B2C_1_wishhub_uliiq//oauth2/v2.0/logout?post_logout_redirect_uri="+o.encodeUrl(String("https://uliiq-wishhub.azurewebsites.net/account/signup"))),this.$msalWishHub.logout()),s.label=4;case 4:return[2]}})})})},e=a([Object(s.Component)({layout:"signupLoading"})],e)}(s.Vue),f=n(6),g=Object(f.a)(p,o,[],!1,null,null,null);e.default=g.exports}}]);