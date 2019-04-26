<template>
	<div class="container">
        <div class="profileEdit">
            <p class="entry">
                ユーザー名<span class="caution"> *</span><br>
                <input class="name" type="text" name="target_user_name" placeholder="ユーザー名" v-model="permission.accountName">
            </p>
            <div class="entry">ユーザー権限<span class="caution"> *</span>
                <div class="genderSelect select01">
                    <select v-model="permission.permissionTypeCode" name="reward_type">
                        <option value="C">アーティスト</option>
                    </select>
                </div>
            </div>
            <P><span class="caution"> * </span>は必須事項</p>
            <div class="submitButtonArea">
            <a><input class="rewardButton save" type="button" value="変更する" v-bind:class="{ disable: isProcessing }" @click="postAdmin(permission)"></a>
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
  import { Permission } from "~/types/models/Permission";
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

  permission: Permission = {"accountName":null, "permissionTypeCode":null};
  isProcessing: boolean = false;
  // ダイアログ用
  showModalDialog: boolean = false;
  dialogMessage: string[];
  
  asyncData () {
    return {
      // ダイアログテンプレート画像
      dialogImageUrl: CommonConst.TemplateImg.DIALOG_IMG_URL
    }
  }

  async postAdmin(permission) {
    if (this.isProcessing) return;
    this.isProcessing = true;

		// アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken);

    const data = new FormData();
    if(permission.accountName) {
       data.append('AccountName', permission.accountName)
    };
    if(permission.permissionTypeCode) {
      data.append('PermissionTypeCode', permission.permissionTypeCode);
    };
    this.$axios.post(CommonConst.API_URL.ADMIN_PERMISSION, data)
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