(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{227:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(){this.responseStatuses=new Array}return t.prototype.putError=function(t){this.responseStatuses.push(t)},t.prototype.isError=function(){for(var t=0,e=this.responseStatuses;t<e.length;t++){var n=e[t];if(!String(n).startsWith("2"))return!0}return!1},t.prototype.getErrorStatus=function(){for(var t=0,e=this.responseStatuses;t<e.length;t++){var n=e[t];if(!String(n).startsWith("2"))return String(n)}return"200"},t.prototype.procError=function(t,e,n,o){var a=this.getErrorStatus();switch(a){case"200":break;case"400":return o({statusCode:a,message:"ページが見つかりません"});case"401":return n("/");case"404":return o({statusCode:a,message:"ページが見つかりません"});default:return o({statusCode:a,message:"予期しないエラーが発生しました"})}},t}()},230:function(t,e,n){var o=n(241);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(15).default)("0a02bcbc",o,!1,{})},235:function(t,e,n){t.exports=n.p+"img/f5d174c.svg"},239:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modalThanks",appear:""}},[t.canOuterClose?n("div",{staticClass:"modal-mask",attrs:{"modal-wrapper":""},on:{click:function(e){t.$emit("closeModalDialogFreeFormatNo")}}},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-content",attrs:{id:"modal-content"}},[n("div",{domProps:{innerHTML:t._s(t.description)}}),t._v(" "),n("div",{staticClass:"submitButtonArea"},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.yesButtionName,expression:"yesButtionName"}],staticClass:"rewardButton ChangeButton",attrs:{id:"modal-close"},on:{click:function(e){t.$emit("closeModalDialogFreeFormatYes")}}},[t._v(t._s(t.yesButtionName))]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:t.noButtionName,expression:"noButtionName"}],staticClass:"rewardButton",attrs:{id:"modal-close"},on:{click:function(e){t.$emit("closeModalDialogFreeFormatNo")}}},[t._v(t._s(t.noButtionName))])])])])]):n("div",{staticClass:"modal-mask",attrs:{"modal-wrapper":""}},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-content",attrs:{id:"modal-content"}},[n("div",{domProps:{innerHTML:t._s(t.description)}}),t._v(" "),n("div",{staticClass:"submitButtonArea"},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.yesButtionName,expression:"yesButtionName"}],staticClass:"rewardButton ChangeButton",attrs:{id:"modal-close"},on:{click:function(e){t.$emit("closeModalDialogFreeFormatYes")}}},[t._v(t._s(t.yesButtionName))]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:t.noButtionName,expression:"noButtionName"}],staticClass:"rewardButton",attrs:{id:"modal-close"},on:{click:function(e){t.$emit("closeModalDialogFreeFormatNo")}}},[t._v(t._s(t.noButtionName))])])])])])])};o._withStripped=!0;var a,i=n(1),s=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=function(t,e,n,o){var a,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),r([Object(i.Prop)()],e.prototype,"description",void 0),r([Object(i.Prop)()],e.prototype,"yesButtionName",void 0),r([Object(i.Prop)()],e.prototype,"noButtionName",void 0),r([Object(i.Prop)()],e.prototype,"canOuterClose",void 0),e=r([Object(i.Component)({})],e)}(i.Vue),u=(n(240),n(2)),c=Object(u.a)(l,o,[],!1,null,null,null);e.a=c.exports},240:function(t,e,n){"use strict";var o=n(230);n.n(o).a},241:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".modal-mask{position:fixed;z-index:9998;top:0;left:0;width:100%;height:150%;background-color:rgba(0,0,0,.5);display:table;transition:opacity .3s ease}.modal-mask .modal-wrapper{position:fixed;margin-top:8%}",""])},275:function(t,e,n){var o=n(328);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(15).default)("1347ee28",o,!1,{})},327:function(t,e,n){"use strict";var o=n(275);n.n(o).a},328:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".validate{padding:0;margin-top:0;margin-bottom:0;margin-left:35px}.has-error{border-color:red!important}.has-error-font{color:red}.text-center{text-align:center}",""])},363:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container bottomAdd profileEdit"},[o("div",{staticClass:"profileEdit"},[o("h2",{staticClass:"marginTopAdd2 textCenter"},[t._v("クエストの設定")]),t._v(" "),o("div",{staticClass:"entry"},[t._v("カテゴリー"),o("span",{staticClass:"hissu"},[t._v("必須")]),o("br"),t._v(" "),o("p",{staticClass:"textMin"},[t._v("クエストのカテゴリーを選んでください。")]),t._v(" "),o("div",{staticClass:"genderSelect select01",class:{"has-error":t.errors.has("project_type")}},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.bounty.bountyType,expression:"bounty.bountyType"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"project_type","data-vv-validate-on":"blur","data-vv-as":"カテゴリー",disabled:t.isComplete||t.isPublish},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.bounty,"bountyType",e.target.multiple?n:n[0])},function(e){t.onBountyTypeChange(t.bounty.bountyType,!1)}]}},t._l(t.bountyTypes,function(e){return o("option",{key:e.type,domProps:{value:e.type}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.description)+"\n\t\t\t\t\t\t")])}),0)]),t._v(" "),t.errors.has("project_type")?o("div",{staticClass:"name validate has-error-font"},[t._v("\n\t\t\t\t\t"+t._s(t.errors.first("project_type"))+"\n\t\t\t\t")]):t._e()]),t._v(" "),o("div",{staticClass:"entry"},[t._v("\n\t\t\t\tタイトル"),o("span",{staticClass:"hissu"},[t._v("必須")]),o("br"),t._v(" "),o("p",{staticClass:"textMin"},[t._v("クエストのタイトルを入力してください。")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.bounty.bountyName,expression:"bounty.bountyName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"name",class:{"has-error":t.errors.has("project_title")},attrs:{type:"text",name:"project_title","data-vv-validate-on":"blur","data-vv-as":"タイトル",placeholder:"どんな目標か、具体的なタイトルをつけよう",disabled:t.isComplete},domProps:{value:t.bounty.bountyName},on:{change:function(e){t.inputChange()},input:function(e){e.target.composing||t.$set(t.bounty,"bountyName",e.target.value)}}}),t._v(" "),t.errors.has("project_title")?o("div",{staticClass:"name validate has-error-font"},[t._v("\n\t\t\t\t\t"+t._s(t.errors.first("project_title"))+"\n\t\t\t\t")]):t._e(),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticClass:"entry"},[t._v("\n\t\t\t\t説明"),o("span",{staticClass:"hissu"},[t._v("必須")]),o("br"),o("br"),t._v(" "),o("p",{staticClass:"textMin"},[t._v("クエストの簡単な説明を入力してください。")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bounty.description,expression:"bounty.description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"has-error":t.errors.has("project_discription")},attrs:{name:"project_discription","data-vv-validate-on":"blur","data-vv-as":"説明",rows:"4",cols:"40",placeholder:"達成したい目標の内容をわかりやすく説明しましょう",disabled:t.isComplete},domProps:{value:t.bounty.description},on:{input:[function(e){e.target.composing||t.$set(t.bounty,"description",e.target.value)},function(e){t.inputChange()}]}}),t._v(" "),t.errors.has("project_discription")?o("div",{staticClass:"name validate has-error-font"},[t._v("\n\t\t\t\t\t"+t._s(t.errors.first("project_discription"))+"\n\t\t\t\t")]):t._e()]),t._v(" "),o("div",{staticClass:"entry"},[t._v("\n\t\t\t\t達成予定日"),o("span",{staticClass:"hissu"},[t._v("必須")]),o("br"),t._v(" "),o("p",{staticClass:"textMin"},[t._v("達成予定日を100日以内で設定してください。")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.bounty.participationEndDate,expression:"bounty.participationEndDate"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"name",class:{"has-error":t.errors.has("project_days")},attrs:{type:"date",name:"project_days","data-vv-validate-on":"blur","data-vv-as":"達成予定日",placeholder:"目標達成までの期日を入れてください",disabled:t.isComplete},domProps:{value:t.bounty.participationEndDate},on:{change:function(e){t.inputChange()},input:function(e){e.target.composing||t.$set(t.bounty,"participationEndDate",e.target.value)}}}),t._v(" "),t.errors.has("project_days")?o("div",{staticClass:"name validate has-error-font"},[t._v("\n\t\t\t\t\t"+t._s(t.errors.first("project_days"))+"\n\t\t\t\t")]):t._e()]),t._v(" "),o("h2",{staticClass:"marginTop60 textCenter"},[t._v("目標のメインビジュアルの設定")]),t._v(" "),o("p",{staticClass:"textMin"},[t._v("目標のメインビジュアルを設定しましょう。")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.previewBountyImage,expression:"previewBountyImage"}]},[o("div",{directives:[{name:"show",rawName:"v-show",value:0==t.isEditBackGround,expression:"isEditBackGround==false"}]},[o("label",{attrs:{for:"fileBountyImage"}},[o("div",{staticClass:"mainVisual myPage",style:{"background-image":"url("+t.previewBountyImage+")"}},[o("img",{staticClass:"mainVisualImg",attrs:{src:n(235)}})])])])])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.previewBountyImage&&1==t.isEditBackGround,expression:"previewBountyImage && isEditBackGround==true"}]},[o("croppie-vue",{attrs:{type:"square",widthViewportMagnification:"1",heightViewportMagnification:"0.625",src:t.previewBountyImage,widthMagnification:"0.8",heightMagnification:"0.625",editName:"backGround",isEdit:t.isEditBackGround,indexNo:"0"},on:{saveImg:t.saveImg,cancelEdit:t.cancelEdit}})],1),t._v(" "),o("div",{staticClass:"container bottomAdd"},[o("div",{staticClass:"profileEdit"},[t.bounty.bountyImageUrl&&!t.previewBountyImage?o("div",[o("label",{attrs:{for:"fileBountyImage"}},[o("div",{staticClass:"mainVisual myPage",style:{"background-image":"url("+t.bounty.bountyImageUrl+")"}},[o("img",{staticClass:"mainVisualImg",attrs:{src:n(235)}})])])]):t.previewBountyImage?t._e():o("div",[t._m(1)]),t._v(" "),o("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"fileBountyImage",name:"fileBountyImage",disabled:t.isComplete},on:{change:function(e){t.onFileChangeBountyImage(e)}}}),t._v(" "),t._m(2),t._v(" "),o("p",{staticClass:"underLineGlay margin30"}),t._v(" "),o("h2",{staticClass:"textCenter marginTop60"},[t._v("目標を入力したら公開しましょう")]),t._v(" "),o("p",{staticClass:"textMin"},[t._v("非公開のまま保存することもできます。")]),t._v(" "),t._m(3),t._v(" "),o("div",{staticClass:"entry"},[o("fieldset",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.bounty.publishStatus,expression:"bounty.publishStatus"}],staticClass:"radio-inline__input",attrs:{id:"item-1",type:"radio",name:"accessible-radio",value:"0"},domProps:{checked:t._q(t.bounty.publishStatus,"0")},on:{change:[function(e){t.$set(t.bounty,"publishStatus","0")},function(e){t.inputChange()}]}}),t._v(" "),o("label",{staticClass:"radio-inline__label buttonLeft",attrs:{for:"item-1"}},[t._v("\n\t\t\t\t\t\t\t非公開\n\t\t\t\t\t\t")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.bounty.publishStatus,expression:"bounty.publishStatus"}],staticClass:"radio-inline__input",attrs:{id:"item-2",type:"radio",name:"accessible-radio",value:"1"},domProps:{checked:t._q(t.bounty.publishStatus,"1")},on:{change:[function(e){t.$set(t.bounty,"publishStatus","1")},function(e){t.inputChange()}]}}),t._v(" "),o("label",{staticClass:"radio-inline__label",attrs:{for:"item-2"},on:{click:function(e){t.openModalDialogFreeFormat(t.freeMessage01)}}},[t._v("\n\t\t\t\t\t\t\t公開\n\t\t\t\t\t\t")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.bounty.publishStatus,expression:"bounty.publishStatus"}],staticClass:"radio-inline__input",attrs:{id:"item-3",type:"radio",name:"accessible-radio",value:"2"},domProps:{checked:t._q(t.bounty.publishStatus,"2")},on:{change:[function(e){t.$set(t.bounty,"publishStatus","2")},function(e){t.inputChange()}]}}),t._v(" "),o("label",{staticClass:"radio-inline__label buttonRight",attrs:{for:"item-3"},on:{click:function(e){t.openModalDialogFreeFormat(t.freeMessage02)}}},[t._v("\n\t\t\t\t\t\t\t限定公開\n\t\t\t\t\t\t")])])])]),t._v(" "),o("div",[t._l(t.errorList,function(e,n){return o("div",{key:n,staticClass:"text-center has-error-font"},[t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])}),t._v(" "),o("div",{staticClass:"submitButtonArea"},[o("div",[o("a",{staticClass:"rewardButton save",class:{disable:t.isProcessing||t.isComplete||t.isEditBackGround},on:{click:function(e){t.addBounty(t.bounty,t.bountyAction1,t.bountyAction2,t.bountyAction3)}}},[t._v("設定する")])])])],2)]),t._v(" "),t.showModalDialog?o("ModalDialog",{attrs:{messages:t.dialogMessage,showLoginButton:t.showLoginButton,imageUrl:t.dialogImageUrl},on:{close:function(e){t.closeModalDialog()}}}):t._e(),t._v(" "),t.showModalDialogFreeFormat?o("ModalDialogFreeFormat",{attrs:{description:t.dialogFreeFormat,yesButtionName:"OK"},on:{closeModalDialogFreeFormatYes:function(e){t.closeModalDialogFreeFormatYes()}}}):t._e()],1)},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"textMin"},[this._v("\n\t\t\t\t\tいつ、何をすれば目標達成できるかが分かり易いと、他のプレイヤーもクエストに参加しやすくなります。"),e("br"),this._v("\n\t\t\t\t\t例）"),e("br"),this._v("\n\t\t\t\t\t10月に〇〇資格試験に合格する！"),e("br"),this._v("\n\t\t\t\t\t１日１枚写真を撮る！"),e("br"),this._v("\n\t\t\t\t\t夏休み中に3キロダイエットする！"),e("br"),this._v("\n\t\t\t\t\tなどなど。\n\t\t\t\t")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"fileBountyImage"}},[e("div",{staticClass:"mainVisual myPage bounty1 editImage"},[e("img",{staticClass:"mainVisualImg",attrs:{src:n(235)}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"textMin margin30"},[this._v("\n\t\t\t\t横幅目一杯のサイズに拡大されますので、横長の写真を設定するようにしましょう"),e("br"),this._v("\n\t\t\t\t未設定の場合、デフォルトの画像が入ります。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"entry"},[this._v("公開ステータス"),e("span",{staticClass:"hissu"},[this._v("必須")])])}];o._withStripped=!0;var i,s=n(1),r=n(5),l=n(76),u=n(227),c=n(75),p=n(239),d=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),m=function(t,e,n,o){var a,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},y=function(t,e,n,o){return new(n||(n=Promise))(function(a,i){function s(t){try{l(o.next(t))}catch(t){i(t)}}function r(t){try{l(o.throw(t))}catch(t){i(t)}}function l(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(s,r)}l((o=o.apply(t,e||[])).next())})},v=function(t,e){var n,o,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(a=2&i[0]?o.return:i[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;switch(o=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}},h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bountyId=null,e.isProcessing=!0,e.isPublish=!1,e.isComplete=!1,e.isNew=!1,e.showModalDialog=!1,e.showLoginButton=!1,e.showModalDialogFreeFormat=!1,e.isEditBackGround=!1,e.errorList=[],e}return d(e,t),e.prototype.onRouteChange=function(t,e){this.bounty={account:null,bountyId:null,bountyName:null,bountyType:null,description:null,tokenId:null,quantity:100,participationEndDate:null,publishStatus:0,participantLimit:null,bountyImage:null,bountyImageUrl:null,thanksMessage:null,clientCode:null,completeStatus:null,completedCommet:null,credentialId:null,joinCount:null,joinStatus:null,approvalStatus:null,createStatus:null,canPostComment:null,commentCount:null,joinAccounts:null},this.bountyAction1={account:null,bountyId:null,bountyActionId:null,bountyActionNo:null,bountyActionName:null,bountyActionType:null,description:null,bountyActionImage:null,bountyActionImageUrl:null,clientCode:null,credentialId:null,joinCount:null,joinStatus:null,joinAccounts:null},this.bountyAction2={account:null,bountyId:null,bountyActionId:null,bountyActionNo:null,bountyActionName:null,bountyActionType:null,description:null,bountyActionImage:null,bountyActionImageUrl:null,clientCode:null,credentialId:null,joinCount:null,joinStatus:null,joinAccounts:null},this.bountyAction3={account:null,bountyId:null,bountyActionId:null,bountyActionNo:null,bountyActionName:null,bountyActionType:null,description:null,bountyActionImage:null,bountyActionImageUrl:null,clientCode:null,credentialId:null,joinCount:null,joinStatus:null,joinAccounts:null},this.isPublish=!1,this.isComplete=!1,this.isNew=!1,this.bountyId=null,this.previewBountyImage=null,this.previewBountyActionImage1=null,this.previewBountyActionImage2=null,this.previewBountyActionImage3=null,this.isActivBountyAction2=!1,this.isActivBountyAction3=!1,this.isEditBackGround=!1},e.prototype.asyncData=function(t){var e=t.app,n=t.store,o=t.route,a=t.redirect,i=t.error;return y(this,void 0,void 0,function(){var t,s,c,p,d,m,y,h,b,g,f,_,C,I,w,A,B,E,S,N,M,j,x;return v(this,function(v){switch(v.label){case 0:return t=new u.a,s=null,c=null,p=null,d=null,m=!1,y=!1,h={account:null,bountyId:null,bountyName:null,bountyType:null,description:null,tokenId:null,quantity:100,participationEndDate:null,publishStatus:0,participantLimit:null,bountyImage:null,bountyImageUrl:null,thanksMessage:null,clientCode:null,completeStatus:null,completedCommet:null,credentialId:null,joinCount:null,joinStatus:null,approvalStatus:null,createStatus:null,canPostComment:null,commentCount:null,joinAccounts:null},g={account:null,bountyId:null,bountyActionId:null,bountyActionNo:null,bountyActionName:null,bountyActionType:null,description:null,bountyActionImage:null,bountyActionImageUrl:null,clientCode:null,credentialId:null,joinCount:null,joinStatus:null,joinAccounts:null},f={account:null,bountyId:null,bountyActionId:null,bountyActionNo:null,bountyActionName:null,bountyActionType:null,description:null,bountyActionImage:null,bountyActionImageUrl:null,clientCode:null,credentialId:null,joinCount:null,joinStatus:null,joinAccounts:null},_={account:null,bountyId:null,bountyActionId:null,bountyActionNo:null,bountyActionName:null,bountyActionType:null,description:null,bountyActionImage:null,bountyActionImageUrl:null,clientCode:null,credentialId:null,joinCount:null,joinStatus:null,joinAccounts:null},C=[{actionType:null,bountyType:null,bountyActionTypeName:null,description:null,active:null,createDateTime:null,updateDateTime:null}],[4,e.$axios.$get(r.a.API_URL.BOUNTIES_TYPE).catch(function(e){t.putError(e.response.status)})];case 1:return I=v.sent(),w=!1,A=!1,B=!1,o.query.bountyId?[4,e.$axios.$get(r.a.API_URL.MY_BOUNTIES+"/"+o.query.bountyId).catch(function(e){t.putError(e.response.status)})]:[3,4];case 2:return h=v.sent(),[4,e.$axios.$get(r.a.API_URL.BOUNTIES_ACTIONS.replace("{bounty_id}",o.query.bountyId)).catch(function(e){t.putError(e.response.status)})];case 3:for(b=v.sent(),S=0,N=b;S<N.length;S++)1===(M=N[S]).bountyActionNo?g=M:2===M.bountyActionNo?(f=M,m=!0):3===M.bountyActionNo&&(_=M,y=!0);return h.participationEndDate&&(j=h.participationEndDate,h.participationEndDate=j.substring(0,4)+"-"+j.substring(4,6)+"-"+j.substring(6,8)),1!==h.publishStatus&&2!==h.publishStatus||(w=!0),1===h.completeStatus&&(A=!0),x=new l.a,h.bountyImageUrl&&(h.bountyImageUrl=h.bountyImageUrl+"?"+x.getNowDateTime()),h.bountyImageUrl,[3,5];case 4:B=!0,v.label=5;case 5:return h.bountyType?[4,e.$axios.get(r.a.API_URL.BOUNTIES_ACTIONTYPE.replace("{bounty_type}",h.bountyType)).catch(function(e){t.putError(e.response.status)})]:[3,7];case 6:C=v.sent(),v.label=7;case 7:return E=h.publishStatus,t.isError()?[2,t.procError(n,o,a,i)]:[2,{bountyTypes:I,bountyActionTypes:C,bounty:h,bountyAction1:g,bountyAction2:f,bountyAction3:_,isPublish:w,isComplete:A,isNew:B,previewBountyImage:s,previewBountyActionImage1:c,previewBountyActionImage2:p,previewBountyActionImage3:d,isActivBountyAction2:m,isActivBountyAction3:y,freeMessage01:r.a.HELPER_MESSAGE.M032_FREE_MESSAGE_01,freeMessage02:r.a.HELPER_MESSAGE.M032_FREE_MESSAGE_02,dialogImageUrl:r.a.TemplateImg.DIALOG_IMG_URL,publishStatusSaving:E}]}})})},e.prototype.mounted=function(){var t=this;this.$nextTick(function(){t.onBountyTypeChange(t.bounty.bountyType,!0)})},e.prototype.onFileChangeBountyImage=function(t){var e=t.target.files[0];e&&e.type.match(/^image\/(png|jpeg)$/)&&(this.bountyImage=e,this.previewBountyImage=URL.createObjectURL(e),this.isEditBackGround=!0,this.$forceUpdate(),this.inputChange())},e.prototype.onFileChangeBountyActionImage1=function(t){var e=t.target.files[0];e&&e.type.match(/^image\/(png|jpeg)$/)&&(this.bountyActionImage1=e,this.previewBountyActionImage1=URL.createObjectURL(e),this.$forceUpdate(),this.inputChange())},e.prototype.onFileChangeBountyActionImage2=function(t){var e=t.target.files[0];e&&e.type.match(/^image\/(png|jpeg)$/)&&(this.bountyActionImage2=e,this.previewBountyActionImage2=URL.createObjectURL(e),this.$forceUpdate(),this.inputChange())},e.prototype.onFileChangeBountyActionImage3=function(t){var e=t.target.files[0];e&&e.type.match(/^image\/(png|jpeg)$/)&&(this.bountyActionImage3=e,this.previewBountyActionImage3=URL.createObjectURL(e),this.$forceUpdate(),this.inputChange())},e.prototype.saveImg=function(t,e,n){this.base64Image=t,this.blobImage=e,this.previewBountyImage=URL.createObjectURL(e),this.isEditBackGround=!1,this.$forceUpdate()},e.prototype.cancelEdit=function(){this.bountyImage=null,this.previewBountyImage=null,this.isEditBackGround=!1,this.$forceUpdate()},e.prototype.onBountyTypeChange=function(t,e){var n=this;this.$axios.get(r.a.API_URL.BOUNTIES_ACTIONTYPE.replace("{bounty_type}",t)).then(function(t){n.bountyActionTypes=t.data}).catch(function(t){console.log(t)}),e||this.inputChange()},e.prototype.inputChange=function(){this.isProcessing=!1},e.prototype.addBounty=function(t,e,n,o){return y(this,void 0,void 0,function(){var e,n,o,a=this;return v(this,function(i){switch(i.label){case 0:return this.isProcessing?[2]:this.isEditBackGround?[2]:(this.isProcessing=!0,[4,this.$validator.validateAll().then(function(t){return t})]);case 1:return i.sent()?(this.errorList=[],e=new FormData,t.bountyId&&e.append("BountyId",t.bountyId),t.bountyType&&e.append("BountyType",t.bountyType),t.bountyName&&e.append("bountyName",t.bountyName),t.description&&e.append("Description",t.description),t.participationEndDate&&(n=t.participationEndDate,e.append("ParticipationEndDate",n.replace(/-/g,""))),t.participantLimit&&e.append("ParticipantLimit",t.participantLimit),t.quantity&&e.append("Quantity",t.quantity),this.base64Image?(e.append("BountyImage",this.bountyImage),this.blobImage.size>=1024*r.a.SYSTEM.MAX_IMG_UPLOAD_SIZE_MB*1024?(o=this,[4,this.$browserImageCompression.getCompressImageFileAsync(this.blobImage)]):[3,3]):[3,4]):(this.openModalDialog(r.a.MESSAGE.ERR_INPUT),this.isProcessing=!1,[2]);case 2:o.base64Image=i.sent(),i.label=3;case 3:e.append("BountyImageBase64",this.base64Image.replace(/^.*,/,"")),i.label=4;case 4:return t.thanksMessage&&e.append("ThanksMessage",t.thanksMessage),t.publishStatus&&e.append("PublishStatus",t.publishStatus),t.completeStatus&&e.append("CompleteStatus",t.completeStatus),t.completedCommet&&e.append("CompletedCommet",t.completedCommet),[4,this.$axios.post(r.a.API_URL.BOUNTIES,e).then(function(t){return y(a,void 0,void 0,function(){return v(this,function(e){switch(e.label){case 0:return this.bounty=t.data,[4,this.$router.push("/bounties/"+this.bounty.bountyId)];case 1:return e.sent(),[2]}})})}).catch(function(t){if(400===t.response.status){if(t.response.data)for(var e in t.response.data)a.errorList=a.errorList.concat(t.response.data[e])}else 401===t.response.status?(a.showLoginButton=!0,a.openModalDialog(r.a.MESSAGE.ERR_401),a.$store.dispatch("logout")):a.openModalDialog(r.a.MESSAGE.ERR_ELSE);a.isProcessing=!1})];case 5:return i.sent(),[2]}})})},e.prototype.openModalDialog=function(t){t&&(this.dialogMessage=t,this.showModalDialog=!0)},e.prototype.closeModalDialog=function(){this.showModalDialog=!1,this.showLoginButton=!1},e.prototype.openModalDialogFreeFormat=function(t){this.dialogFreeFormat=t,this.showModalDialogFreeFormat=!0},e.prototype.closeModalDialogFreeFormatYes=function(){this.showModalDialogFreeFormat=!1},m([Object(s.Watch)("$route")],e.prototype,"onRouteChange",null),e=m([Object(s.Component)({components:{ModalDialog:c.a,ModalDialogFreeFormat:p.a},layout:"profileLayout"})],e)}(s.Vue),b=(n(327),n(2)),g=Object(b.a)(h,o,a,!1,null,null,null);e.default=g.exports}}]);