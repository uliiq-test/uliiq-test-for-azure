<template>
  <div class="container">
    <div class="loginArea">
		<h2>SNSで新規会員登録・ログイン</h2>
				<ul class="login_buttons">
          <!-- TODO ツイッター認証ができるようなったら解除 <li><a class="twitterLogin" href=""><img src="~assets/img/twitter.svg" alt="twitter">twitter</a></li> -->
					<li><a class="facebookLogin" @click="login()"><img src="~assets/img/facebook.svg" alt="fb">facebook</a></li>
				</ul>
				<p class="caution">※承諾なくSNSに投稿されることはありません</P>
		</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { CommonConst } from "~/types/CommonConst"

@Component({
})
export default class extends Vue {
    async login() {
        // アクセストークンの取得
        var accessToken = await this.$msalWishHub.login();
        // STOREにTOKENをセット TODO:廃止予定
        this.$store.dispatch('addAccessToken', accessToken).then(() => {
            this.$axios.get(CommonConst.API_URL.MY_PROFILE)
                .then(async respons => {
                  // 既存ユーザ判定
                  await this.$store.dispatch('addMyProfile', respons.data).then(() => {
                    this.$router.push('/account/my');
                  });
                })
                .catch(error => {
                  // 新規ユーザ
                  if(error.response.status === 404){
                    this.$router.push('/account/my/profile');
                }
            });
        });
    }
}
</script>
