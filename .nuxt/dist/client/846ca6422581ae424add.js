(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{314:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top marginTopAddSp"},[n("br"),n("br"),n("br"),t._v(" "),n("div",{staticClass:"entry"},[t._v("\n      アクセストークン"),n("span",{staticClass:"hissu"},[t._v("必須")]),n("br"),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.accessToken,expression:"accessToken"}],attrs:{placeholder:"アクセストークンを入力してください"},domProps:{value:t.accessToken},on:{input:function(e){e.target.composing||(t.accessToken=e.target.value)}}})]),t._v(" "),n("a",[n("input",{staticClass:"rewardButton save",attrs:{type:"button",value:"実行"},on:{click:function(e){t.auth(t.accessToken)}}})])])};r._withStripped=!0;var o,a=n(1),c=n(54),s=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=function(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},u=function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function c(t){try{i(r.next(t))}catch(t){a(t)}}function s(t){try{i(r.throw(t))}catch(t){a(t)}}function i(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(c,s)}i((r=r.apply(t,e||[])).next())})},l=function(t,e){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.auth=function(t){var e=this;this.$store.dispatch("addAccessToken",t).then(function(){e.$axios.get(c.a.API_URL.MY_PROFILE).then(function(t){e.$store.dispatch("addMyProfile",t.data).then(function(){return u(e,void 0,void 0,function(){var t;return l(this,function(e){switch(e.label){case 0:return this.$store.state.nextPagePath?(t=this.$store.state.nextPagePath,[4,this.$store.dispatch("resetPagePath")]):[3,2];case 1:return e.sent(),this.$router.push(t),[2];case 2:return this.$router.push("/account/my"),[2]}})})})}).catch(function(t){return u(e,void 0,void 0,function(){return l(this,function(e){switch(e.label){case 0:return 404!==t.response.status?[3,1]:(this.$router.push("/account/my/profile"),[2]);case 1:return[4,this.$store.dispatch("resetPagePath")];case 2:return e.sent(),this.$router.push("/"),[2]}})})})})},e=i([Object(a.Component)({})],e)}(a.Vue),f=n(5),h=Object(f.a)(p,r,[],!1,null,null,null);e.default=h.exports}}]);