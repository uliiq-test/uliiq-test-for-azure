(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{316:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this.$createElement,e=this._self._c||t;return e("no-ssr",[e("div",[this._v("Loading...")])])};o._withStripped=!0;var r,u=n(3),i=n(54),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t,e,n,o){var r,u=arguments.length,i=u<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(u<3?r(i):u>3?r(e,n,i):r(e,n))||i);return u>3&&i&&Object.defineProperty(e,n,i),i},a=function(t,e,n,o){return new(n||(n=Promise))(function(r,u){function i(t){try{s(o.next(t))}catch(t){u(t)}}function c(t){try{s(o.throw(t))}catch(t){u(t)}}function s(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(i,c)}s((o=o.apply(t,e||[])).next())})},l=function(t,e){var n,o,r,u,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&u[0]?o.return:u[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,u[1])).done)return r;switch(o=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,o=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){i.label=u[1];break}if(6===u[0]&&i.label<r[1]){i.label=r[1],r=u;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(u);break}r[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(t,i)}catch(t){u=[6,t],o=0}finally{n=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.mounted=function(){var t=this;this.$nextTick(function(){return a(t,void 0,void 0,function(){var t,e=this;return l(this,function(n){switch(n.label){case 0:return console.log("[Debug]loading#mounted():Start"),[4,this.$msalWishHub.silentLogin()];case 1:return t=n.sent(),console.log("[Debug]loading#mounted():accessToken => "+t),console.log("[Debug]loading#mounted():Get Request(MY_PROFILE)"),this.$store.dispatch("addAccessToken",t).then(function(){e.$axios.get(i.a.API_URL.MY_PROFILE).then(function(t){console.log("[Debug]loading#mounted():Get Request(MY_PROFILE:Success)"),e.$store.dispatch("addMyProfile",t.data).then(function(){return a(e,void 0,void 0,function(){var t;return l(this,function(e){switch(e.label){case 0:return console.log("[Debug]loading#mounted():nextPagePath => "+this.$store.state.nextPagePath),this.$store.state.nextPagePath?(t=this.$store.state.nextPagePath,[4,this.$store.dispatch("resetPagePath")]):[3,2];case 1:return e.sent(),console.log("[Debug]loading#mounted():goto"+t),this.$router.push(t),[2];case 2:return console.log("[Debug]loading#mounted():goto /account/my"),this.$router.push("/account/my"),[2]}})})})}).catch(function(t){return a(e,void 0,void 0,function(){return l(this,function(e){switch(e.label){case 0:return console.log("[Debug]loading#mounted():Get Request(MY_PROFILE:Failure)"),404!==t.response.status?[3,1]:(console.log("[Debug]loading#mounted():goto /account/my/profile"),this.$router.push("/account/my/profile"),[2]);case 1:return[4,this.$store.dispatch("resetPagePath")];case 2:return e.sent(),console.log("[Debug]loading#mounted():goto /"),this.$router.push("/"),[2]}})})})}),[2]}})})})},e=s([Object(u.Component)({layout:"signupLoading"})],e)}(u.Vue),f=n(6),p=Object(f.a)(h,o,[],!1,null,null,null);e.default=p.exports}}]);