(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{232:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(){function e(){this.responseStatuses=new Array}return e.prototype.putError=function(e){this.responseStatuses.push(e)},e.prototype.isError=function(){for(var e=0,t=this.responseStatuses;e<t.length;e++){var a=t[e];if(!String(a).startsWith("2"))return!0}return!1},e.prototype.getErrorStatus=function(){for(var e=0,t=this.responseStatuses;e<t.length;e++){var a=t[e];if(!String(a).startsWith("2"))return String(a)}return"200"},e.prototype.procError=function(e,t,a,r){var s=this.getErrorStatus();switch(s){case"200":break;case"400":return r({statusCode:s,message:"ページが見つかりません"});case"401":return a("/");case"404":return r({statusCode:s,message:"ページが見つかりません"});default:return r({statusCode:s,message:"予期しないエラーが発生しました"})}},e}()},235:function(e,t,a){var r=a(246);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(13).default)("5bcf5554",r,!1,{})},237:function(e,t,a){e.exports=a.p+"img/f5d174c.svg"},241:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.canOuterClose?a("div",{staticClass:"modal-mask",class:!0===e.open?"open":"",attrs:{"modal-wrapper":""},on:{click:function(t){e.$emit("closeModalDialogFreeFormatNo")}}},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-content",attrs:{id:"modal-content"}},[a("div",{domProps:{innerHTML:e._s(e.description)}}),e._v(" "),a("div",{staticClass:"submitButtonArea"},[a("a",{directives:[{name:"show",rawName:"v-show",value:e.yesButtionName,expression:"yesButtionName"}],staticClass:"rewardButton ChangeButton",attrs:{id:"modal-close"},on:{click:function(t){e.$emit("closeModalDialogFreeFormatYes")}}},[e._v(e._s(e.yesButtionName))]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.noButtionName,expression:"noButtionName"}],staticClass:"rewardButton",attrs:{id:"modal-close"},on:{click:function(t){e.$emit("closeModalDialogFreeFormatNo")}}},[e._v(e._s(e.noButtionName))])])])])]):a("div",{staticClass:"modal-mask",class:!0===e.open?"open":"",attrs:{"modal-wrapper":""}},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-content",attrs:{id:"modal-content"}},[a("div",{domProps:{innerHTML:e._s(e.description)}}),e._v(" "),a("div",{staticClass:"submitButtonArea"},[a("a",{directives:[{name:"show",rawName:"v-show",value:e.yesButtionName,expression:"yesButtionName"}],staticClass:"rewardButton ChangeButton",attrs:{id:"modal-close"},on:{click:function(t){e.$emit("closeModalDialogFreeFormatYes")}}},[e._v(e._s(e.yesButtionName))]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.noButtionName,expression:"noButtionName"}],staticClass:"rewardButton",attrs:{id:"modal-close"},on:{click:function(t){e.$emit("closeModalDialogFreeFormatNo")}}},[e._v(e._s(e.noButtionName))])])])])])};r._withStripped=!0;var s,n=a(1),i=(s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),o=function(e,t,a,r){var s,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(n<3?s(i):n>3?s(t,a,i):s(t,a))||i);return n>3&&i&&Object.defineProperty(t,a,i),i},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),o([Object(n.Prop)()],t.prototype,"description",void 0),o([Object(n.Prop)()],t.prototype,"yesButtionName",void 0),o([Object(n.Prop)()],t.prototype,"noButtionName",void 0),o([Object(n.Prop)()],t.prototype,"canOuterClose",void 0),o([Object(n.Prop)()],t.prototype,"open",void 0),t=o([Object(n.Component)({})],t)}(n.Vue),c=(a(245),a(2)),d=Object(c.a)(l,r,[],!1,null,"479e95c3",null);t.a=d.exports},245:function(e,t,a){"use strict";var r=a(235);a.n(r).a},246:function(e,t,a){(e.exports=a(12)(!1)).push([e.i,".modal-mask[data-v-479e95c3]{position:fixed;z-index:9998;top:0;left:0;width:100%;height:150%;background-color:rgba(0,0,0,.5);opacity:0;-webkit-transform:scale(0);transform:scale(0);transition:opacity .5s,-webkit-transform 0s .5s;transition:opacity .5s,transform 0s .5s;transition:opacity .5s,transform 0s .5s,-webkit-transform 0s .5s}.modal-mask .modal-wrapper[data-v-479e95c3]{position:fixed;margin-top:8%}.modal-mask.open[data-v-479e95c3]{transition:opacity .5s;-webkit-transform:scale(1);transform:scale(1);opacity:1}@media (max-width:767px){#modal-content[data-v-479e95c3]{margin-left:10%;position:fixed}.modal-mask .modal-wrapper[data-v-479e95c3]{margin-left:0}}",""])},285:function(e,t,a){var r=a(348);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(13).default)("09fcb49a",r,!1,{})},347:function(e,t,a){"use strict";var r=a(285);a.n(r).a},348:function(e,t,a){(e.exports=a(12)(!1)).push([e.i,".validate{padding:0;margin-top:0;margin-bottom:0;margin-left:35px}.has-error{border-color:red!important}.has-error-font{color:red}.text-center{text-align:center}",""])},385:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",{staticClass:"textDB craftBg black marginTopAdd2"},[e._v("アイテム登録")]),e._v(" "),r("div",{staticClass:"container bottomAdd"},[r("div",{staticClass:"profileEdit"},[r("h2",{staticClass:"marginTop30 textCenter"},[e._v("タイプと概要")]),e._v(" "),r("div",{staticClass:"entry"},[e._v("アイテムタイプ"),r("span",{staticClass:"hissu"},[e._v("必須")]),e._v(" "),r("div",{staticClass:"genderSelect select01",class:{"has-error":e.errors.has("reward_type")}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.reward.tokenTypeCode,expression:"reward.tokenTypeCode"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"reward_type","data-vv-validate-on":"blur","data-vv-as":"アイテムタイプ",disabled:e.isPublish},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.reward,"tokenTypeCode",t.target.multiple?a:a[0])},function(t){e.inputChange()}]}},e._l(e.rewardTypes,function(t){return r("option",{key:t.tokenTypeCode,domProps:{value:t.tokenTypeCode}},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(t.tokenTypeName)+"\n\t\t\t\t\t\t\t")])}),0)]),e._v(" "),e.errors.has("reward_type")?r("div",{staticClass:"name validate has-error-font"},[e._v("\n            \t\t\t"+e._s(e.errors.first("reward_type"))+"\n\t\t\t\t\t")]):e._e()]),e._v(" "),r("div",{staticClass:"entry"},[e._v("\n\t\t\t\t\tアイテムタイトル"),r("span",{staticClass:"hissu"},[e._v("必須")]),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.reward.rewardName,expression:"reward.rewardName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"name",class:{"has-error":e.errors.has("reward_title")},attrs:{type:"text",name:"reward_title","data-vv-validate-on":"blur","data-vv-as":"アイテムタイトル",placeholder:"どんなアイテムなのか分かり易いタイトルをつけましょう"},domProps:{value:e.reward.rewardName},on:{change:function(t){e.inputChange()},input:function(t){t.target.composing||e.$set(e.reward,"rewardName",t.target.value)}}}),e._v(" "),e.errors.has("reward_title")?r("div",{staticClass:"name validate has-error-font"},[e._v("\n            \t\t\t"+e._s(e.errors.first("reward_title"))+"\n          \t\t\t")]):e._e()]),e._v(" "),r("div",{staticClass:"entry"},[e._v("アイテム説明"),r("span",{staticClass:"hissu"},[e._v("必須")]),r("br"),r("br"),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.reward.description,expression:"reward.description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"has-error":e.errors.has("reward_discription")},attrs:{name:"reward_discription","data-vv-validate-on":"blur","data-vv-as":"アイテム説明",rows:"4",cols:"40",placeholder:"アイテムの説明を記入しましょう。何ができるアイテムで、どんな特典が受け受けられるかなど分かり易いく入れましょう"},domProps:{value:e.reward.description},on:{input:[function(t){t.target.composing||e.$set(e.reward,"description",t.target.value)},function(t){e.inputChange()}]}}),e._v(" "),e.errors.has("reward_discription")?r("div",{staticClass:"name validate has-error-font"},[e._v("\n            \t\t\t"+e._s(e.errors.first("reward_discription"))+"\n          \t\t\t")]):e._e()]),e._v(" "),r("p",{staticClass:"textMin"},[e._v("アイテムの特典がyoutubeや限定Instagramアカウントなどの場合は、交換した人へ直接チャットでご連絡できますので、こちらには記入しないようにお願いします。")]),e._v(" "),r("h2",{staticClass:"marginTop60 textCenter"},[e._v("アイテムの期間、限定個数と必要コイン(wiz)")]),e._v(" "),r("div",{staticClass:"entry"},[e._v("\n\t\t\t\t\t交換期限"),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.reward.exchangeEndDate,expression:"reward.exchangeEndDate"}],staticClass:"name",attrs:{type:"date",name:"reward_days",placeholder:"交換期限"},domProps:{value:e.reward.exchangeEndDate},on:{change:function(t){e.inputChange()},input:function(t){t.target.composing||e.$set(e.reward,"exchangeEndDate",t.target.value)}}})]),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"entry"},[e._v("\n\t\t\t\t\t限定個数"),r("span",{staticClass:"hissu"},[e._v("必須")]),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.reward.quantity,expression:"reward.quantity"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"name",class:{"has-error":e.errors.has("rewards_numbers")},attrs:{type:"number",name:"rewards_numbers","data-vv-validate-on":"blur","data-vv-as":"限定個数",placeholder:"交換可能な最大数を入れてください",disabled:e.isPublish},domProps:{value:e.reward.quantity},on:{change:function(t){e.inputChange()},input:function(t){t.target.composing||e.$set(e.reward,"quantity",t.target.value)}}}),e._v(" "),e.errors.has("rewards_numbers")?r("div",{staticClass:"name validate has-error-font"},[e._v("\n            \t\t\t"+e._s(e.errors.first("rewards_numbers"))+"\n          \t\t\t")]):e._e()]),e._v(" "),r("div",{staticClass:"entry"},[e._v("\n\t\t\t\t\t交換に必要なコイン(wiz)"),r("span",{staticClass:"hissu"},[e._v("必須")]),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.reward.exchangeRate,expression:"reward.exchangeRate"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"name",class:{"has-error":e.errors.has("reward_total_token")},attrs:{type:"number",name:"reward_total_token","data-vv-validate-on":"blur","data-vv-as":"交換に必要なコイン",placeholder:"交換に必要なコイン",disabled:e.isPublish},domProps:{value:e.reward.exchangeRate},on:{change:function(t){e.inputChange()},input:function(t){t.target.composing||e.$set(e.reward,"exchangeRate",t.target.value)}}}),e._v(" "),e.errors.has("reward_total_token")?r("div",{staticClass:"name validate has-error-font"},[e._v("\n            \t\t\t"+e._s(e.errors.first("reward_total_token"))+"\n          \t\t\t")]):e._e()]),e._v(" "),r("p",{staticClass:"textMin"},[e._v("アイテム交換に必要なコイン(wip)を入れましょう。コインに悩んんだら、1,000wipぐらいから初めてみてはいかがでしょうか。")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.reward.useChat,expression:"reward.useChat"}],staticClass:"checkType2",attrs:{type:"checkbox",id:"label2","true-value":"1","false-value":"0"},domProps:{checked:Array.isArray(e.reward.useChat)?e._i(e.reward.useChat,null)>-1:e._q(e.reward.useChat,"1")},on:{change:[function(t){var a=e.reward.useChat,r=t.target,s=r.checked?"1":"0";if(Array.isArray(a)){var n=e._i(a,null);r.checked?n<0&&e.$set(e.reward,"useChat",a.concat([null])):n>-1&&e.$set(e.reward,"useChat",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.reward,"useChat",s)},function(t){e.inputChange()}]}}),r("label",{attrs:{for:"label2"}},[e._v("チャットを利用する")]),e._v(" "),r("h2",{staticClass:"marginTop60 textCenter"},[e._v("アイテムイメージ")]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.previewRewardImage,expression:"previewRewardImage"}]},[0==e.isEditBackGround?r("div",[r("label",{attrs:{for:"fileRewardImage"}},[r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.previewRewardImage,expression:"previewRewardImage",arg:"background-image"}],staticClass:"mainVisual myPage"},[r("img",{staticClass:"mainVisualImg",attrs:{loading:"lazy",src:a(237)}})])])]):e._e()])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1==e.isEditBackGround,expression:"isEditBackGround==true"}]},[r("croppie-vue",{attrs:{type:"square",widthViewportMagnification:"1",heightViewportMagnification:"0.625",src:e.previewRewardImage,widthMagnification:"0.8",heightMagnification:"0.625",editName:"backGround",isEdit:e.isEditBackGround,indexNo:"0"},on:{saveImg:e.saveImg,cancelEdit:e.cancelEdit}})],1),e._v(" "),r("div",{staticClass:"container bottomAdd"},[r("div",{staticClass:"profileEdit"},[e.reward.rewardImageUrl&&!e.previewRewardImage?r("div",[r("label",{attrs:{for:"fileRewardImage"}},[r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.reward.rewardImageUrl,expression:"reward.rewardImageUrl",arg:"background-image"}],staticClass:"mainVisual myPage"},[r("img",{staticClass:"mainVisualImg",attrs:{loading:"lazy",src:a(237)}})])])]):e.previewRewardImage?e._e():r("div",[e._m(1)]),e._v(" "),r("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"fileRewardImage",name:"fileRewardImage"},on:{change:function(t){e.onFileChangeRewardImage(t)}}}),e._v(" "),r("p",{staticClass:"textMin marginTop30"},[e._v("※画像を設定しない場合、デフォルの画像が表示されます。")]),e._v(" "),r("h2",{staticClass:"marginTop60 textCenter"},[e._v("公開設定")]),e._v(" "),e._m(2),e._v(" "),r("div",{staticClass:"entry"},[r("fieldset",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.reward.publishStatus,expression:"reward.publishStatus"}],staticClass:"radio-inline__input",attrs:{id:"item-1",type:"radio",name:"accessible-radio",value:"0"},domProps:{checked:e._q(e.reward.publishStatus,"0")},on:{change:[function(t){e.$set(e.reward,"publishStatus","0")},function(t){e.inputChange()}]}}),e._v(" "),r("label",{staticClass:"radio-inline__label buttonLeft",attrs:{for:"item-1"}},[e._v("\n\t\t\t\t\t\t\t\t非公開\n\t\t\t\t\t\t")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.reward.publishStatus,expression:"reward.publishStatus"}],staticClass:"radio-inline__input",attrs:{id:"item-2",type:"radio",name:"accessible-radio",value:"1"},domProps:{checked:e._q(e.reward.publishStatus,"1")},on:{change:[function(t){e.$set(e.reward,"publishStatus","1")},function(t){e.inputChange()}]}}),e._v(" "),r("label",{staticClass:"radio-inline__label buttonRight",attrs:{for:"item-2"},on:{click:function(t){e.openModalDialogFreeFormat(e.freeMessage01)}}},[e._v("\n\t\t\t\t\t\t\t\t公開\n\t\t\t\t\t\t")])]),e._v(" "),e._m(3)]),e._v(" "),e._l(e.errorList,function(t,a){return r("div",{key:a,staticClass:"text-center has-error-font"},[e._v("\n          "+e._s(t)+"\n        ")])}),e._v(" "),r("div",{staticClass:"submitButtonArea"},[r("a",{staticClass:"rewardButton save",class:{disable:e.isProcessing||!e.isChange||e.isEditBackGround},on:{click:function(t){e.addReward(e.reward)}}},[e._v("登録する")])])],2)]),e._v(" "),r("ModalDialog",{attrs:{messages:e.dialogMessage,showLoginButton:e.showLoginButton,imageUrl:e.dialogImageUrl,open:e.showModalDialog},on:{close:function(t){e.closeModalDialog()}}}),e._v(" "),r("ModalDialogFreeFormat",{attrs:{description:e.dialogFreeFormat,yesButtionName:"Yes",open:e.showModalDialogFreeFormat},on:{closeModalDialogFreeFormatYes:function(t){e.closeModalDialogFreeFormatYes()}}})],1)},s=[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"textMin"},[this._v("アイテムの交換できる日を設定します。アイテムを使える日が決まっている場合には、使用可能日以降交換できないようにしてください。"),t("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"fileRewardImage"}},[t("div",{staticClass:"mainVisual myPage bounty1 editImage"},[t("img",{staticClass:"mainVisualImg",attrs:{loading:"lazy",src:a(237)}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"entry"},[this._v("アイテムの公開ステータス"),t("span",{staticClass:"hissu"},[this._v("必須")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"textMin marginTop30"},[this._v("ステータスを公開にすると、プレイヤーがアイテムを交換できるようになります。"),t("br"),this._v("\n\t\t\t\t\t公開すると、アイテムの個数、コイン、期日は変更できなくなりますので、ご注意ください。")])}];r._withStripped=!0;var n,i=a(1),o=a(5),l=a(78),c=a(232),d=a(77),u=a(241),p=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),v=function(e,t,a,r){var s,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(n<3?s(i):n>3?s(t,a,i):s(t,a))||i);return n>3&&i&&Object.defineProperty(t,a,i),i},m=function(e,t,a,r){return new(a||(a=Promise))(function(s,n){function i(e){try{l(r.next(e))}catch(e){n(e)}}function o(e){try{l(r.throw(e))}catch(e){n(e)}}function l(e){e.done?s(e.value):new a(function(t){t(e.value)}).then(i,o)}l((r=r.apply(e,t||[])).next())})},h=function(e,t){var a,r,s,n,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return n={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function o(n){return function(o){return function(n){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,r&&(s=2&n[0]?r.return:n[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return i.label++,{value:n[1],done:!1};case 5:i.label++,r=n[1],n=[0];continue;case 7:n=i.ops.pop(),i.trys.pop();continue;default:if(!(s=(s=i.trys).length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){i=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){i.label=n[1];break}if(6===n[0]&&i.label<s[1]){i.label=s[1],s=n;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(n);break}s[2]&&i.ops.pop(),i.trys.pop();continue}n=t.call(e,i)}catch(e){n=[6,e],r=0}finally{a=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,o])}}},g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isChange=!1,t.isProcessing=!1,t.isPublish=!1,t.showModalDialog=!1,t.showLoginButton=!1,t.showModalDialogFreeFormat=!1,t.isEditBackGround=!1,t.errorList=[],t}return p(t,e),t.prototype.onRouteChange=function(e,t){this.reward={rewardId:null,tokenCode:null,tokenTypeCode:null,rewardName:null,description:null,rewardImage:null,rewardImageUrl:null,quantity:null,exchangeTokenCode:null,exchangeRate:null,isPreview:null,ownQuantity:null,thanksMessage:null,publishStatus:0,createStatus:null,account:null,clientCode:null,credentialId:null,exchangeEndDate:null,useChat:0,canPreview:null},this.isPublish=!1,this.previewRewardImage=null,this.isEditBackGround=!1},t.prototype.asyncData=function(e){var t=e.app,a=e.store,r=e.route,s=e.redirect,n=e.error;return m(this,void 0,void 0,function(){var e,i,d,u,p,v,m;return h(this,function(h){switch(h.label){case 0:return e=new c.a,i=null,d={rewardId:null,tokenCode:null,tokenTypeCode:null,rewardName:null,description:null,rewardImage:null,rewardImageUrl:null,quantity:null,exchangeTokenCode:null,exchangeRate:null,isPreview:null,ownQuantity:null,thanksMessage:null,publishStatus:0,createStatus:null,account:null,clientCode:null,credentialId:null,exchangeEndDate:null,useChat:0,canPreview:null},[4,t.$axios.$get(o.a.API_URL.REWARD_TYPE).catch(function(t){e.putError(t.response.status)})];case 1:return u=h.sent(),p=!1,r.query.rewardId?[4,t.$axios.$get(o.a.API_URL.REWARD+"/"+r.query.rewardId).catch(function(t){e.putError(t.response.status)})]:[3,3];case 2:1===(d=h.sent()).publishStatus&&(p=!0),d.exchangeEndDate&&(v=d.exchangeEndDate,d.exchangeEndDate=v.substring(0,4)+"-"+v.substring(4,6)+"-"+v.substring(6,8)),h.label=3;case 3:return e.isError()?[2,e.procError(a,r,s,n)]:(m=new l.a,d.rewardImageUrl&&(d.rewardImageUrl=d.rewardImageUrl+"?"+m.getNowDateTime()),[2,{reward:d,rewardTypes:u,isPublish:p,previewRewardImage:i,freeMessage01:o.a.HELPER_MESSAGE.M022_FREE_MESSAGE_01}])}})})},t.prototype.onFileChangeRewardImage=function(e){var t=e.target.files[0];t&&t.type.match(/^image\/(png|jpeg)$/)&&(this.rewardImage=t,this.previewRewardImage=URL.createObjectURL(t),this.isEditBackGround=!0,this.$forceUpdate(),this.inputChange()),document.getElementById("fileRewardImage").value=""},t.prototype.saveImg=function(e,t,a){this.base64Image=e,this.blobImage=t,this.previewRewardImage=URL.createObjectURL(t),this.isEditBackGround=!1,this.$forceUpdate()},t.prototype.cancelEdit=function(){this.rewardImage=null,this.previewRewardImage=null,this.isEditBackGround=!1,this.$forceUpdate()},t.prototype.addReward=function(e){return m(this,void 0,void 0,function(){var t,a,r,s=this;return h(this,function(n){switch(n.label){case 0:return this.isProcessing?[2]:this.isChange?this.isEditBackGround?[2]:(this.isProcessing=!0,[4,this.$validator.validateAll().then(function(e){return e})]):[2];case 1:return n.sent()?(this.errorList=[],t=new FormData,e.tokenTypeCode&&t.append("TokenTypeCode",e.tokenTypeCode),e.rewardId&&t.append("RewardId",e.rewardId),e.rewardName&&t.append("RewardName",e.rewardName),e.description&&t.append("Description",e.description),e.exchangeEndDate&&(a=e.exchangeEndDate,t.append("ExchangeEndDate",a.replace(/-/g,""))),e.quantity&&t.append("Quantity",e.quantity),e.exchangeRate&&t.append("ExchangeRate",e.exchangeRate),this.base64Image?(t.append("RewardImage",this.rewardImage),this.blobImage.size>=o.a.SYSTEM.MAX_IMG_UPLOAD_SIZE?(r=this,[4,this.$browserImageCompression.getCompressImageFileAsync(this.blobImage)]):[3,3]):[3,4]):(this.openModalDialog(o.a.MESSAGE.ERR_INPUT,o.a.TemplateImg.DIALOG_WARN_IMG_URL),this.isProcessing=!1,[2]);case 2:r.base64Image=n.sent(),n.label=3;case 3:t.append("RewardImageBase64",this.base64Image.replace(/^.*,/,"")),n.label=4;case 4:return e.thanksMessage&&t.append("ThanksMessage",e.thanksMessage),e.publishStatus&&t.append("PublishStatus",e.publishStatus),e.useChat&&t.append("UseChat",e.useChat),[4,this.$axios.post(o.a.API_URL.REWARD,t).then(function(e){return m(s,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return[4,this.$router.push("/account/my")];case 1:return e.sent(),[2]}})})}).catch(function(e){if(400===e.response.status){if(e.response.data)for(var t in e.response.data)s.errorList=s.errorList.concat(e.response.data[t])}else 401===e.response.status?(s.showLoginButton=!0,s.openModalDialog(o.a.MESSAGE.ERR_401,o.a.TemplateImg.DIALOG_WARN_IMG_URL),s.$store.dispatch("logout")):s.openModalDialog(o.a.MESSAGE.ERR_ELSE,o.a.TemplateImg.DIALOG_WARN_IMG_URL);s.isProcessing=!1})];case 5:return n.sent(),[2]}})})},t.prototype.inputChange=function(){this.isChange=!0},t.prototype.openModalDialog=function(e,t){e&&(this.dialogMessage=e,this.dialogImageUrl=t,this.showModalDialog=!0)},t.prototype.closeModalDialog=function(){this.showModalDialog=!1,this.showLoginButton=!1},t.prototype.openModalDialogFreeFormat=function(e){this.dialogFreeFormat=e,this.showModalDialogFreeFormat=!0},t.prototype.closeModalDialogFreeFormatYes=function(){this.showModalDialogFreeFormat=!1},v([Object(i.Watch)("$route")],t.prototype,"onRouteChange",null),t=v([Object(i.Component)({components:{ModalDialog:d.a,ModalDialogFreeFormat:u.a},layout:"profileLayout"})],t)}(i.Vue),w=(a(347),a(2)),f=Object(w.a)(g,r,s,!1,null,null,null);t.default=f.exports}}]);