<template>
  <div>
      <div class="container">
      <!-- リワード一覧 -->
        <div class="bountyList personalItem">
          <!-- オーナフラグ（isOwn）をfalseにして、交換ポイントを表示させる -->
          <CardBox
            v-for="reward in rewards"
            :key="reward.rewardId"
            :backgroundImageUrl="reward.rewardImageUrl"
            :rewardId="reward.rewardId"
            :tokenTypeCode="reward.tokenTypeCode"
            :titleName="reward.rewardName"
            :exchangeRate="reward.exchangeRate"
            :exchangeEndDate="reward.exchangeEndDate"
            :quantity="reward.quantity"
            :description="reward.description"
            :pointName="pointName"
            :isOwn="true"
            :isEdit="true"
            :dialogProfileImageUrl="reward.account.profileImageUrl"
            :ownQuantity="reward.ownQuantity"
            :rewardStatusShow="true"
            :rewardPublishStatus="reward.publishStatus"
            :rewardCreateStatus="reward.createStatus"
          />
        </div>
        <!-- 無限スクロールローディング -->
        <infinite-loading @infinite="infiniteHandler">
          <span slot="no-more"/>
          <span slot="no-results"/>
        </infinite-loading>
      </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { CommonConst } from "~/types/CommonConst"
import { Profile } from "~/types/models/Profile"
import { Reward } from "~/types/models/Reward"
import { Activity, Account } from "~/types/models/Activity"
import CardBox from "~/components/CardBox.vue"

@Component({
  components: {
    CardBox
  }
})
export default class extends Vue {
  bounties:Reward[];
  // 無限スクロールオフセット
  offset:number = CommonConst.API_PARAM.LIMIT_DEFAULT ;
  async asyncData( { app, store } ) {
      const rewards:Reward[] = await app.$axios.$get(CommonConst.API_URL.MY_REWARD, {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      const pointName: string = CommonConst.POINT.WIP;
      return {
        rewards,
        pointName
      }
  }
  // 無限スクロール
  async infiniteHandler($state){

    // アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken);

    this.$axios.get(CommonConst.API_URL.MY_REWARD, {params:{offset:this.offset, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
      if(response.data.length){
        this.offset += CommonConst.API_PARAM.LIMIT_DEFAULT;
        this.bounties.push(...response.data)
        $state.loaded()
      } else {
        $state.complete()
      }
    }).catch((err) => {
      $state.complete()
    })
  }
}
</script>
