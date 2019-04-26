<template>
  <div class="container">
    <!-- プロジェクト一覧 -->
    <div class="bountyList personalItem">
      <CardBox
        v-for="bounty in bounties"
        :key="bounty.bountyId"
        :backgroundImageUrl="bounty.bountyImageUrl"
        :bountyId="bounty.bountyId"
        :titleName="bounty.bountyName"
        :bountyType="bounty.bountyType"
        :participationEndDate="bounty.participationEndDate"
        :quantity="bounty.quantity"
        :description="bounty.description"
        :pointName="pointName"
        :isOwn="true"
        :dialogProfileImageUrl="bounty.account.profileImageUrl"
        :accountName="bounty.account.accountName"
        :displayName="bounty.account.displayName"
        :profileImageUrl="bounty.account.profileImageUrl"
        :bountyStatusShow="true"
        :bountyCompleteStatus="bounty.completeStatus"
        :bountyPublishStatus="bounty.publishStatus"
        :bountyCreateStatus="bounty.createStatus"
        :joinCount="bounty.joinCount"
        :participantLimit="bounty.participantLimit"
        :commentCount="bounty.commentCount"
      />
    </div>
    <!-- 無限スクロールローディング -->
    <infinite-loading @infinite="infiniteHandler">
      <span slot="no-more"/>
      <span slot="no-results"/>
    </infinite-loading>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { CommonConst } from "~/types/CommonConst"
import { Profile } from "~/types/models/Profile"
import { Bounty } from "~/types/models/Bounty"
import { Activity, Account } from "~/types/models/Activity"
import CardBox from "~/components/CardBox.vue"

@Component({
  components: {
    CardBox
  }
})
export default class extends Vue {
  bounties:Bounty[];
  // 無限スクロールオフセット
  offset:number = CommonConst.API_PARAM.LIMIT_DEFAULT ;
  async asyncData( { app, store } ) {
      const bounties:Bounty[] = await app.$axios.$get(CommonConst.API_URL.MY_BOUNTIES, {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      const pointName: string = CommonConst.POINT.WIP;
      return {
        bounties,
        pointName
      }
  }

  // 無限スクロール
  async infiniteHandler($state){
    // アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken);

    this.$axios.get(CommonConst.API_URL.MY_BOUNTIES, {params:{offset:this.offset, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
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
