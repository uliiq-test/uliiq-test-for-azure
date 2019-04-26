<template>
	<div>
		<!-- 画像がアップロードされた場合 -->
		<div v-if="previewRewardImage">
				<label for="fileRewardImage">
						<div class="mainVisual myPage" v-bind:style="{ 'background-image': 'url(' + previewRewardImage + ')' }">
							<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
						</div>
				</label>
		</div>
		<!-- 画像が既に設定済みの場合 -->
		<div v-else-if="reward.rewardImageUrl">
			<label for="fileRewardImage">
				<div class="mainVisual myPage" v-bind:style="{ 'background-image': 'url(' + reward.rewardImageUrl + ')' }">
					<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
				</div>
			</label>
		</div>
		<!-- 画像未アップロード、バウンティ未設定の場合 -->
		<div v-else>
			<label for="fileRewardImage">
				<div class="mainVisual myPage bounty1 editImage">
					<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
				</div>
			</label>
		</div>
		<!-- 背景画像選択ボタン -->
		<input type="file" id="fileRewardImage" name="fileRewardImage" @change="onFileChangeRewardImage($event)" style="display:none">
		<div class="container">
			<div class="profileEdit">
				<div class="entry">リワードタイプ<span class="caution"> *</span><span><a class="modal-syncer button-link" data-target="modal-content-01" @click="openModalHelp(helpTitle01, helpMessage01)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span>
					<div
						class="genderSelect select01"
						:class="{'has-error': errors.has('reward_type')}"
					>
						<select
							v-model="reward.tokenTypeCode"
							name="reward_type"
							v-validate="'required'"
							data-vv-validate-on="blur"
							data-vv-as="リワードタイプ"
							:disabled="isPublish"
							@change="inputChange()"
						>
							<option v-for="rewardType in rewardTypes"
										:key="rewardType.tokenTypeCode"
										:value="rewardType.tokenTypeCode"
								>
										{{ rewardType.tokenTypeName }}
								</option>
						</select>
					</div>
					<div class="name validate has-error-font" v-if="errors.has('reward_type')">
            {{ errors.first('reward_type') }}
				</div>
				</div>
				<div class="entry">
					リワードタイトル<span class="caution"> *</span><br>
					<input
						v-model="reward.rewardName"
						class="name"
						type="text"
						name="reward_title"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="リワードタイトル"
						:class="{'has-error': errors.has('reward_title')}"
						placeholder="リワードタイトル"
						@change="inputChange()"
					>
					<div class="name validate has-error-font" v-if="errors.has('reward_title')">
            {{ errors.first('reward_title') }}
          </div>
				</div>
				<div class="entry">リワード説明<span class="caution"> *</span><br><br>
					<textarea
						v-model="reward.description"
						name="reward_discription"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="リワード説明"
						:class="{'has-error': errors.has('reward_discription')}"
						rows="4"
						cols="40"
						placeholder="リワード説明"
						@change="inputChange()"
					/>
					<div class="name validate has-error-font" v-if="errors.has('reward_discription')">
            {{ errors.first('reward_discription') }}
          </div>
				</div>
				<div class="entry">
					交換期限<span><a class="modal-syncer button-link" data-target="modal-content-02" @click="openModalHelp(helpTitle02, helpMessage02)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span><br>

					<input
						v-model="reward.exchangeEndDate"
						class="name"
						type="date"
						name="reward_days"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="交換期限"
						:class="{'has-error': errors.has('reward_days')}"
						placeholder="交換期限"
						@change="inputChange()"
					>
					<div class="name validate has-error-font" v-if="errors.has('reward_days')">
            {{ errors.first('reward_days') }}
          </div>
				</div>
				<div class="entry">
					限定個数<span class="caution"> *</span><span><a class="modal-syncer button-link" data-target="modal-content-03" @click="openModalHelp(helpTitle03, helpMessage03)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span><br>
					<input
						v-model="reward.quantity"
						class="name"
						type="number"
						name="rewards_numbers"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="限定個数"
						:class="{'has-error': errors.has('rewards_numbers')}"
						placeholder="限定個数"
						:disabled="isPublish"
						@change="inputChange()"
					>
					<div class="name validate has-error-font" v-if="errors.has('rewards_numbers')">
            {{ errors.first('rewards_numbers') }}
          </div>
				</div>
				<div class="entry">
					交換に必要なポイント（wip）<span class="caution"> *</span><span><a class="modal-syncer button-link" data-target="modal-content-04" @click="openModalHelp(helpTitle04, helpMessage04)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span><br>
					<input
						v-model="reward.exchangeRate"
						class="name"
						type="number"
						name="reward_total_token"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="交換に必要なポイント"
						:class="{'has-error': errors.has('reward_total_token')}"
						placeholder="交換に必要なポイント"
						:disabled="isPublish"
						@change="inputChange()"
					>
					<div class="name validate has-error-font" v-if="errors.has('reward_total_token')">
            {{ errors.first('reward_total_token') }}
          </div>
				</div>

        <div class="entry">交換のお礼メッセージ<span class="caution"> *</span><span><a class="modal-syncer button-link" data-target="modal-content-05" @click="openModalHelp(helpTitle05, helpMessage05)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span><br><br>
          <textarea
						v-model="reward.thanksMessage"
						name="project_thanks"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="交換のお礼メッセージ"
						:class="{'has-error': errors.has('project_thanks')}"
						rows="4"
						cols="40"
						placeholder="交換のお礼メッセージ"
						@change="inputChange()"
					/>
					<div class="name validate has-error-font" v-if="errors.has('project_thanks')">
            {{ errors.first('project_thanks') }}
          </div>
        </div>
				<!-- TODO チャット機能が実装されたら表示させる
				<input type="checkbox" id="label2" class="checkType2" v-model="reward.useChat" true-value=1 false-value=0 @change="inputChange()"><label for="label2">チャットを利用する<span class="caution"> *</span></label><span><a class="modal-syncer button-link" data-target="modal-content-06" @click="openModalHelp(helpTitle06, helpMessage06)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span>
				-->
			<div class="entry">リワードのステータス<span class="caution"> *</span><span><a class="modal-syncer button-link" data-target="modal-content-10" @click="openModalHelp(helpTitle10, helpMessage10)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span></div>
			<div class="entry">
				<fieldset>
					<input id="item-1" class="radio-inline__input" type="radio" name="accessible-radio" value="0" v-model="reward.publishStatus" @change="inputChange()">
					<label class="radio-inline__label buttonLeft" for="item-1">
							非公開
					</label>
					<input id="item-2" class="radio-inline__input" type="radio" name="accessible-radio" value="1" v-model="reward.publishStatus" @change="inputChange()">
					<label class="radio-inline__label buttonRight" for="item-2" @click="openModalDialogFreeFormat(freeMessage01)">
							公開
					</label>
				</fieldset>
			</div>
				<P><span class="caution"> * </span>は必須事項</p>
				<div v-for="(error, index) in errorList" class="text-center has-error-font" :key="index">
          {{error}}
        </div>
					<div class="submitButtonArea">
					<a ><input class="rewardButton save" type="button" value="保存する" v-bind:class="{ disable: isProcessing || !isChange }" @click="addReward(reward)"></a>
				</div>
      </div>
		</div>
    <ModalDialog
      v-if="showModalDialog"
      :messages="dialogMessage"
      :imageUrl="dialogImageUrl"
      @close="closeModalDialog()"
    />
		<ModalDialogFreeFormat
			v-if="showModalDialogFreeFormat"
			:description="dialogFreeFormat"
			yesButtionName="Yes"
			@closeModalDialogFreeFormatYes="closeModalDialogFreeFormatYes()"
		/>
		<ModalHelp
			v-if="showModalHelp"
			:title="helpTitle"
			:description="helpMessage"
			@closeModalHelp="closeModalHelp()"
		/>
	</div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from "nuxt-property-decorator";
  import { CommonConst } from "~/types/CommonConst";
  import { Reward } from "~/types/models/Reward";
  import { RewardType } from "~/types/models/RewardType";
	import ModalDialog from "~/components/ModalDialog.vue"
	import ModalDialogFreeFormat from "~/components/ModalDialogFreeFormat.vue"
	import ModalHelp from "~/components/ModalHelp.vue"

@Component({
	components:{
		ModalDialog,
		ModalHelp,
		ModalDialogFreeFormat
	}
})
export default class extends Vue {

	previewRewardImage:string|null;
	reward:Reward;
	rewardImage:File|null;
	// 変更有無
	isChange: boolean = false;
	// 処理中
	isProcessing: boolean = false;
	// 公開中
	isPublish: boolean = false;

	// ダイアログ用
	showModalDialog: boolean = false;
	dialogMessage: string[];
	showModalDialogFreeFormat: boolean = false;
	dialogFreeFormat: string; 
	// ヘルプダイアログ
	showModalHelp: boolean = false;
	helpTitle: string;
	helpMessage: string;

	//サーバーエラー
	errorList: string[] = [];


	@Watch('$route')
		// ルートが変更された場合
		onRouteChange (to, from) {
		// 初期化
		this.reward = {"rewardId":null, "tokenCode":null, "tokenTypeCode":null, "rewardName":null, "description":null, "rewardImage":null, "rewardImageUrl":null, "quantity":null, "exchangeTokenCode":null, "exchangeRate":null, "isPreview":null, "ownQuantity":null, "thanksMessage":null, "publishStatus":0, "createStatus":null, "account":null, "clientCode":null, "credentialId":null, "exchangeEndDate":null, "useChat":0 };
		this.isPublish = false;
		this.previewRewardImage = null;
	}
  async asyncData ( { app, route } ){
		// TODO:もっといい初期化の方法がないか検討
		var previewRewardImage: string|null = null;
    var reward: Reward = {"rewardId":null, "tokenCode":null, "tokenTypeCode":null, "rewardName":null, "description":null, "rewardImage":null, "rewardImageUrl":null, "quantity":null, "exchangeTokenCode":null, "exchangeRate":null, "isPreview":null, "ownQuantity":null, "thanksMessage":null, "publishStatus":0, "createStatus":null, "account":null, "clientCode":null, "credentialId":null, "exchangeEndDate":null, "useChat":0 };
    const rewardTypes: RewardType = await app.$axios.$get(CommonConst.API_URL.REWARD_TYPE)
		var isPublish: boolean = false;
		if(route.query.rewardId){
      reward = await app.$axios.$get(CommonConst.API_URL.REWARD + "/" + route.query.rewardId);      
			// 公開ステータスチェック
			if(reward.publishStatus === 1){
				isPublish = true;
			}
      // 日付のフォーマット変更
      if(reward.exchangeEndDate){
        let exchangeEndDate: string = reward.exchangeEndDate;
        reward.exchangeEndDate = exchangeEndDate.substring(0, 4) + '-' + exchangeEndDate.substring(4, 6) + '-' + exchangeEndDate.substring(6, 8);
      }
		}
    return {
      reward,
      rewardTypes,
			isPublish,
			previewRewardImage,
			// ヘルパーメッセージ
			helpTitle01: CommonConst.HELPER_MESSAGE.M022_TITLE_01,
			helpMessage01: CommonConst.HELPER_MESSAGE.M022_MESSAGE_01,
			helpTitle02: CommonConst.HELPER_MESSAGE.M022_TITLE_02,
			helpMessage02: CommonConst.HELPER_MESSAGE.M022_MESSAGE_02,
			helpTitle03: CommonConst.HELPER_MESSAGE.M022_TITLE_03,
			helpMessage03: CommonConst.HELPER_MESSAGE.M022_MESSAGE_03,
			helpTitle04: CommonConst.HELPER_MESSAGE.M022_TITLE_04,
			helpMessage04: CommonConst.HELPER_MESSAGE.M022_MESSAGE_04,
			helpTitle05: CommonConst.HELPER_MESSAGE.M022_TITLE_05,
			helpMessage05: CommonConst.HELPER_MESSAGE.M022_MESSAGE_05,
			helpTitle06: CommonConst.HELPER_MESSAGE.M022_TITLE_06,
			helpMessage06: CommonConst.HELPER_MESSAGE.M022_MESSAGE_06,
			helpTitle10: CommonConst.HELPER_MESSAGE.M022_TITLE_10,
			helpMessage10: CommonConst.HELPER_MESSAGE.M022_MESSAGE_10,
			// ダイアログ（フリーフォーマット用）
			freeMessage01: CommonConst.HELPER_MESSAGE.M022_FREE_MESSAGE_01,
			// ダイアログテンプレート画像
			dialogImageUrl: CommonConst.TemplateImg.DIALOG_IMG_URL
    }
	}
  onFileChangeRewardImage (e){
    var file = e.target.files[0];
    if(file && file.type.match(/^image\/(png|jpeg)$/)){
      this.rewardImage = file;
      this.previewRewardImage = URL.createObjectURL(file);
			this.$forceUpdate();
			this.inputChange();
    }
	}
	// リワードを保存する
	async addReward(reward) {
		if (this.isProcessing || !this.isChange) return;
		this.isProcessing = true;

		// アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken);

		//バリデーションの結果を変数に格納
    let isValidate = await this.$validator.validateAll().then((response) => {
        return response;
    })
    
    //入力項目に異常があればアラートを出す
    if(!isValidate){
			this.openModalDialog(CommonConst.MESSAGE.ERR_INPUT);
			this.isProcessing = false;
      return;
		}

		//エラーがなければリセット
		this.errorList = [];

    const data = new FormData();
		if(reward.tokenTypeCode) {
       data.append('TokenTypeCode', reward.tokenTypeCode);
    };
		if(reward.rewardId) {
       data.append('RewardId', reward.rewardId);
    };
    if(reward.rewardName) {
       data.append('RewardName', reward.rewardName);
    };
    if(reward.description) {
      data.append('Description', reward.description);
    };
    if(reward.exchangeEndDate) {
      let exchangeEndDat: string = reward.exchangeEndDate    
      data.append('ExchangeEndDate', exchangeEndDat.replace(/-/g,''));
    };
    if(reward.quantity) {    
      data.append('Quantity', reward.quantity);
    };
    if(reward.exchangeRate) {    
      data.append('ExchangeRate', reward.exchangeRate);
    };
    if(this.rewardImage) {    
      data.append('RewardImage', this.rewardImage);
    };
    if(reward.thanksMessage) {    
      data.append('ThanksMessage', reward.thanksMessage);
    };
    if(reward.publishStatus) {    
      data.append('PublishStatus', reward.publishStatus);
		};
    if(reward.useChat) {    
      data.append('UseChat', reward.useChat);
		};
		await this.$axios.post(CommonConst.API_URL.REWARD, data)
		.then(async responce => {
			// 正常時、リワード一覧に遷移
			await this.$router.push('/account/my/rewards');
		})
		.catch(error => {
      if(error.response.status === 400){
				//ボタン上部にエラーを出力する
				if(error.response.data){
					for(let prop in error.response.data){
						this.errorList = this.errorList.concat(error.response.data[prop]);
					}
				}
			} else if (error.response.status === 401) {
        // 認証エラー
				this.openModalDialog(CommonConst.MESSAGE.ERR_401);
			} else {
        // その他
        this.openModalDialog(CommonConst.MESSAGE.ERR_ELSE);
      }
    	this.isProcessing = false;
    });
	}
	inputChange (){
		this.isChange = true;
	}
	openModalHelp(helpTitle, helpMessage){
		this.helpTitle = helpTitle;
		this.helpMessage = helpMessage;
		this.showModalHelp = true;
	}
	closeModalHelp(){
		this.showModalHelp = false;
	}
	openModalDialog(dialogMessage){
    if(! dialogMessage) return;
		this.dialogMessage = dialogMessage;
		this.showModalDialog = true;
	}
	closeModalDialog(){
		this.showModalDialog = false;
	}
	openModalDialogFreeFormat(dialogFreeFormat){
		this.dialogFreeFormat = dialogFreeFormat;
		this.showModalDialogFreeFormat = true;
	}
	closeModalDialogFreeFormatYes(){
		this.showModalDialogFreeFormat = false;
	}
}
</script>

<style>
.validate{
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 35px;
}

.has-error{
  border-color: #ff0000 !important;
}
.has-error-font{
  color: #ff0000;
}
.text-center{
  text-align: center;
}
</style>