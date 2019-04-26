<template>
  <div>
    <!-- 画像がアップロードされた場合 -->
    <div v-if="previewBackgroundImage">
      <label for="fileBackgroundImage">
        <div class="mainVisual myPage" v-bind:style="{ 'background-image': 'url(' + previewBackgroundImage + ')' }">
          <img class="mainVisualImg" src="~assets/img/photoUploads.svg">
        </div>
      </label>
    </div>
    <!-- プロフィール設定済みの場合 -->
    <div v-else-if="$store.state.myProfile.profileBackgroundImageUrl">
      <label for="fileBackgroundImage">
        <div class="mainVisual myPage" v-bind:style="{ 'background-image': 'url(' + $store.state.myProfile.profileBackgroundImageUrl + ')' }">
          <img class="mainVisualImg" src="~assets/img/photoUploads.svg">
        </div>
      </label>
    </div>
    <!-- 画像未アップロード、プロフィール未設定の場合 -->
    <div v-else>
      <label for="fileBackgroundImage">
	      <div class="mainVisual myPage bounty1 editImage">
			    <img class="mainVisualImg" src="~assets/img/photoUploads.svg">
	      </div>
      </label>
    </div>
    <!-- 背景画像選択ボタン -->
    <input type="file" id="fileBackgroundImage" name="fileBackgroundImage" @change="onFileChangeBackgroundImage($event)" style="display:none">
    <div class="container">
      <!-- 画像がアップロードされた場合 -->
      <label v-if="previewImage" for="fileIconImg">
        <div class="profileIcon myPageIcon" v-bind:style="{ 'background-image': 'url(' + previewImage + ')' }">
          <img class="ProfileIconImg" name="ProfileIconImg" src="~assets/img/photoUploads.svg">
        </div>
      </label>
      <!-- プロフィール設定済みの場合 -->
      <label v-else-if="$store.state.myProfile.profileImageUrl" for="fileIconImg">
        <div class="profileIcon myPageIcon" v-bind:style="{ 'background-image': 'url(' + $store.state.myProfile.profileImageUrl + ')' }">
          <img class="ProfileIconImg" name="ProfileIconImg" src="~assets/img/photoUploads.svg">
        </div>
      </label>
      <!-- 画像未アップロード、プロフィール未設定の場合 -->
      <label v-else for="fileIconImg">
        <div class="profileIcon myPageIcon" style="background-color:#999999">
          <img class="ProfileIconImg" name="ProfileIconImg" src="~assets/img/photoUploads.svg">
        </div>
      </label>
      <!-- プロフィール画像選択ボタン -->
      <input type="file" id="fileIconImg" @change="onFileChangeImage($event)" style="display:none">
      <div class="profileEdit">
        <div class="entry">
          ユーザー<span class="caution"> *</span><br>
          <p class="caution" v-show="!profile.accountId">ユーザー名は作成後変更はできません。ご注意ください</p>
          <input
            :disabled="profile.accountId"
            v-model="profile.accountName"
            class="name"
            type="text"
            name="usename"
            v-validate="'required|min:8|alpha_num'"
						data-vv-validate-on="blur"
						data-vv-as="ユーザー"
						:class="{'has-error': errors.has('usename')}"
            placeholder="半角英数字8文字以上"
          >
          <div class="name validate has-error-font" v-if="errors.has('usename')">
            {{ errors.first('usename') }}
          </div>
        </div>
        <div class="entry">
          ニックネーム<span class="caution"> *</span><br>
          <input
            v-model="profile.displayName"
            class="name"
            type="text"
            name="nickname"
            v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="ニックネーム"
						:class="{'has-error': errors.has('nickname')}"
            placeholder="表示名（ニックネーム）"
          >
          <div class="name validate has-error-font" v-if="errors.has('nickname')">
            {{ errors.first('nickname') }}
          </div>
        </div>
        <div class="entry">性別
          <div class="genderSelect select01">
            <select v-model="profile.gender" name="gender">
              <option/>
              <option value=1>男性</option>
              <option value=2>女性</option>
            </select>
          </div>
        </div>
        <div class="entry">
          facebook<br>
          <div class="name">
            https://facebook.com/<input v-model="profile.facebookId" class="sns" type="text" name="fb" placeholder="facebookID">
          </div>
        </div>
        <div class="entry">
          twitter<br>
          <div class="name">
            https://twittert.com/<input v-model="profile.twitterId" class="sns" type="text" name="tw" placeholder="TwitterID">
          </div>
        </div>
        <div class="entry">
          instagram<br>
          <div class="name">
            https://instagram.com/<input v-model="profile.instagramId" class="sns" type="text" name="insta" placeholder="instagramID">
          </div>
        </div>
        <div class="entry">
          ブログ<br>
          <input
            v-model="profile.blogUrl"
            class="name"
            type="text"
            name="blog"
            placeholder="ブログID"
          >
        </div>
        <div class="entry">
          その他<br>
          <input
            v-model="profile.etcUrl"
            class="name"
            type="text"
            name="otherSite"
            placeholder="その他のサイトのURLを入力してください"
          >
        </div>
        <div class="entry">アピールポイント<br>
          <textarea
            v-model="profile.description"
            name="discription"
            rows="4"
            cols="40"
            placeholder="アーティスト活動でのトピックス、アピールポイントを入力してください。"
          />
        </div>
        <div class="entry">お気に入り登録お礼のメッセージ<span class="caution"> *</span><br>
          <textarea
            v-model="profile.thanksMessage"
            name="thanksMessage"
            v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="お気に入り登録お礼のメッセージ"
						:class="{'has-error': errors.has('thanksMessage')}"
            rows="4"
            cols="40"
            placeholder="お礼メッセージ"
          />
          <div class="name validate has-error-font" v-if="errors.has('thanksMessage')">
            {{ errors.first('thanksMessage') }}
          </div>
        </div>
        <div v-show="!profile.accountId">
          <div class="ruleArea" id="rule">
            <Rule/>
          </div>
          <div class="entry">
          <input v-model="isAgree" type="checkbox" id="label1" name="checkbox01[]" class="checkType2"><label for="label1">「利用規約」に同意しサービスに登録する<span class="caution"> *</span></label>
          </div><br/>
        </div>
        <p><span class="caution"> * </span>は必須事項</p>
        <!--サーバーエラー-->
				<div v-for="(error, index) in errorList" class="text-center has-error-font" :key="index">
          {{error}}
        </div>
        <input class="submitButton" type="button" value="送信する" v-bind:class="{ disable: isProcessing || !isAgree }" @click="addProfile(profile)">
      </div>
    </div>
    <ModalDialog
			v-if="showModalDialog"
			:messages="dialogMessage"
			:imageUrl="dialogImageUrl"
			@close="closeModalDialog()"
		/>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";
  import { Profile } from "~/types/models/Profile";
  import { CommonConst } from "~/types/CommonConst";
  import ModalDialog from "~/components/ModalDialog.vue"
  import Rule from "~/components/Rule.vue"

@Component({
  components:{
    ModalDialog,
    Rule
  }
})
export default class extends Vue {

  previewBackgroundImage:String|null = null;
  previewImage:String|null = null;
  image:File|null;
  backgroundImage:File|null;
  profile:Profile;
  isProcessing: boolean = false;
  isAgree: boolean = false;
	// ダイアログ用
	showModalDialog: boolean = false;
  dialogMessage: string[];
  
  //サーバーエラー
	errorList: string[] = [];
  
  async asyncData ( { store, app } ){
    // TODO:ストアからデータを取得してその値をvueに渡したいが
    // 変数に代入しても、storeとして扱われるためv-modelで直接storeを書き換える扱いとなりエラーとなる。
    // 上記解決策が見つかるまでは、APIからマイプロフィールを取得する
    //var profile:Profile = store.state.myProfile
    var isAgree: boolean = false;
    var profile:Profile = await app.$axios.$get(CommonConst.API_URL.MY_PROFILE)
    .catch(err => {
      if(err.response.status === 404){
        return {"accountId": null, "clientCode": null, "credentialId": null, "accountName": null, "displayName": null, "birthday": null, "gender": null, "description": null, "profileImage": null, "profileImageUrl": null, "profileBackgroundImage": null, "profileBackgroundImageUrl": null, "facebookId": null, "twitterId": null, "instagramId": null, "blogUrl": null, "thanksMessage":  null, "etcUrl": null, "permissionCode": null, "tokens": null, "permissions":null };
      }
    });
    // 同意のフラグ調整
    if(profile.accountId){
      isAgree = true;
    }
    return {
      profile,
      isAgree,
      // ダイアログテンプレート画像
      dialogImageUrl: CommonConst.TemplateImg.DIALOG_IMG_URL
    }
  }
  onFileChangeBackgroundImage (e){
    var file = e.target.files[0];
    if(file && file.type.match(/^image\/(png|jpeg)$/)){
      this.backgroundImage = file;
      this.previewBackgroundImage = URL.createObjectURL(file);
      this.$forceUpdate()
    }
  }
  onFileChangeImage (e){
    var file = e.target.files[0];
    if(file && file.type.match(/^image\/(png|jpeg)$/)){
      this.image = file;
      this.previewImage = URL.createObjectURL(file);
      this.$forceUpdate()
    }
  }
  async addProfile(profile) {
    if (this.isProcessing) return;
    if (!this.isAgree) return;
    this.isProcessing = true;

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

    // アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken);

    const data = new FormData();
    if(profile.accountName) {
       data.append('AccountName', profile.accountName)
    };
    if(profile.displayName) {
      data.append('DisplayName', profile.displayName);
    };
    if(profile.birthday) {
      data.append('Birthday', profile.birthday);
    };
    if(profile.gender) {    
      data.append('Gender', String(profile.gender));
    };
    if(profile.facebookId) {    
      data.append('FacebookId', profile.facebookId);
    };
    if(profile.twitterId) {    
      data.append('TwitterId', profile.twitterId);
    };
    if(profile.instagramId) {    
      data.append('InstagramId', profile.instagramId);
    };
    if(profile.blogUrl) {    
      data.append('BlogUrl', profile.blogUrl);
    };
    if(profile.etcUrl) {    
      data.append('EtcUrl', profile.etcUrl);
    };
    if(profile.description) {    
      data.append('Description',profile.description);
    };
    if(profile.thanksMessage) {    
      data.append('ThanksMessage',profile.thanksMessage);
    };
    if(this.backgroundImage){
      data.append('ProfileBackgroundImage', this.backgroundImage);
    }
    if(this.image){
      data.append('ProfileImage', this.image);
    }
    this.$axios.post(CommonConst.API_URL.MY_PROFILE, data)
    .then(response => {
      this.$store.dispatch('addMyProfile', response.data)
      this.$router.push('/account/my');
    }).catch(error => {
      if(error.response.status === 400){
        //Bad Request
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
  openModalDialog(dialogMessage){
    if(! dialogMessage) return;
    this.dialogMessage = dialogMessage;
    this.showModalDialog = true;
  }
  closeModalDialog(){
    this.showModalDialog = false;
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
  border-color: #ff0000;
}
.has-error-font{
  color: #ff0000;
}
.text-center{
  text-align: center;
}

</style>
