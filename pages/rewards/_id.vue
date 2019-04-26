<template>
  <div>
    <div class="bountyIcon" v-bind:style="{ 'background-image': 'url(' + reward.account.profileImageUrl + ')' }"></div>
    <nuxt-link class="bountyArtistName" :to="'/artists/' + reward.account.accountName">{{reward.account.displayName}}</nuxt-link>
    <!-- リワード画像が設定されている場合 -->
    <div v-if="reward.rewardImageUrl" class="mainVisual myPage bounty1" v-bind:style="{ 'background-image': 'url(' + reward.rewardImageUrl + ')' }"></div>
    <!-- 画像が設定されていない場合 -->
    <div v-else class="mainVisual myPage bounty1"  v-bind:style="{ 'background-image': 'url(/img/project_blank.jpg)'}"></div>
    <div class="mypageTop">
      <div class="container">
        <div class="profileArea">
          <h3 class="bountyTitle">{{reward.bountyName}}</h3>
          <!-- ↓ オーナの時 ↓ -->
          <div v-if="isOwn==true">
            <div class="textRight top60">
              <a class="rewardButton ChangeButton" @click="allowPush('/account/my/rewards/create?rewardId=' + bounty.bountyId)">編集する</a>
            </div>
            <div class="projectData">ステータス：{{rewardStatsName}}</div>
          </div>
          <!-- ↑ オーナの時 ↑ -->
          <div class="projectData">
              <p>交換期限：<span>{{exchangeEndDate | formatDateMmDd | nullToNone}}</span></p>
              <p>交換ポイント：<span>{{exchangeRate | toLocaleString | zeroToNone}}{{pointName | delete(exchangeRate==0 || exchangeRate==null) }}</span></p>
              <p>個数：<span>{{ownQuantity | toLocaleString }} / {{quantity | toLocaleString }}</span></p>
          </div>
          <div class="grad-wrap">
          <input id="trigger1" class="grad-trigger" type="checkbox">
          <label class="grad-btn" for="trigger1"></label>
          <div class="grad-item bounty">
            <p v-html="$options.filters.newLine(reward.description)" v-linkified/>
          </div>
				</div>
			</div>
		</div>
      <!-- タブメニュー -->
      <div class="menuBg">
        <div class="container">
          <div class="contentsArea">
            <ul class="flexMenu bountyMenu">
              <li :class="{ here: tabNum == 1 }"><div v-if="tabNum == 1" >交換者</div><div v-else><a @click="tabNumChange(1)">交換者</a></div></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- 参加者 -->
      <div v-if="tabNum == 1" class="activityArea">
        <CardUser/>
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
import { Component, Vue } from "nuxt-property-decorator"
import { CommonConst } from "~/types/CommonConst"
import { Profile } from "~/types/models/Profile"
import { Reward } from "~/types/models/Reward"
import CardUser from "~/components/CardUser.vue"
import ModalDialog from "~/components/ModalDialog.vue"


@Component({
  components: {
    CardUser,
    ModalDialog
  }
})
export default class extends Vue {
  tabNum: number = 1;
  reward: Reward;
  isProcessing: boolean = false;

  // ダイアログ用
  showModalDialog: boolean = false;
  dialogMessage: string[];

  async asyncData( { app, route, store } ) {
      var rewardStatsName: string = '';
      var reward:Reward = await app.$axios.$get(CommonConst.API_URL.REWARD + '/' + route.params.id);
      // オーナー判定
      var isOwn:boolean = false;
      if(reward!.account!.accountName === store.state.myProfile.accountName){
        isOwn = true;
      }
      // リワードステータスチェック
      if (reward.publishStatus === 1) {
        rewardStatsName = '公開中';
      } else if (reward.createStatus === 0){
        // 作成中の状態での非公開、
        rewardStatsName = '作成中';
      } else {
        // 作成完了の状態での非公開
        rewardStatsName = '非公開';
      }
      const pointName: string = CommonConst.POINT.WIP;
      return {
        reward,
        isOwn,
        pointName,
        rewardStatsName,
        // ダイアログテンプレート画像
        dialogImageUrl: CommonConst.TemplateImg.DIALOG_IMG_URL
      }
  }
  tabNumChange(value: number) {
    this.tabNum = value;
  }
  // 遷移許可
	allowPush(url: string){
		this.$store.dispatch('transitionAllow').then(() => {
			this.$router.push(url);
		})
	}
}
</script>