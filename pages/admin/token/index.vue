<template>
    <div class="profileEdit">
        <p class="entry">
            ユーザー名<span class="caution"> *</span><br>
            <input class="name" type="text" name="target_user_name" placeholder="ユーザー名" v-model="givetoken.accountName">
        </p>
        <div class="entry">トークンタイプ<span class="caution"> *</span>
            <div class="genderSelect select01">
                <select name="reward_type" v-model="givetoken.tokenCode">
                    <option value="PNT-0000000000-00000">Wishポイント（wip）</option>
                </select>
            </div>
        </div>
        <p class="entry">
            付与するトークン<span class="caution"> *</span><br>
            <input class="name" type="number" name="add_token_number" placeholder="トークン数" v-model="givetoken.quantity">
        </p>
        <P><span class="caution"> * </span>は必須事項</p>
            <div class="submitButtonArea">
            <a><input class="rewardButton save" type="button" value="変更する" v-bind:class="{ disable: isProcessing }" @click="postAdmin(givetoken)"></a>
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
  import { Givetoken } from "~/types/models/Givetoken";
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

  givetoken: Givetoken = {"accountName":null, "tokenCode":null, "quantity":null};
  isProcessing: boolean = false;
  // ダイアログ用
  showModalDialog: boolean = false;
  dialogMessage: string[];
  
  asyncDate(){
    return {
      // ダイアログテンプレート画像
      dialogImageUrl: CommonConst.TemplateImg.DIALOG_IMG_URL
    }
  }

  async postAdmin(givetoken) {
    if (this.isProcessing) return;
    this.isProcessing = true;

		// アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken);

    const data = new FormData();
    if(givetoken.accountName) {
       data.append('AccountName', givetoken.accountName)
    };
    if(givetoken.tokenCode) {
      data.append('TokenCode', givetoken.tokenCode);
    };
    if(givetoken.quantity) {
      data.append('Quantity', givetoken.quantity);
    };
    this.$axios.post(CommonConst.API_URL.ADMIN_GIVETOKEN, data)
    .then(response => {
      this.isProcessing = false;
    }).catch(error => {
      if(error.response.status === 400){
        //Bad Request
        this.openModalDialog(error.response.data.BadRequest);
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