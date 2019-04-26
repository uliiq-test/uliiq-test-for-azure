<template>
  <div class="top">
    <no-ssr>
    <div class="slider">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="slider__content">
            <nuxt-link to="/account/signup">
              <img src="~assets/img/sample_10.jpg" alt="夢を叶える、行動で応援する　WishHub"  class="slider__img">
              <div class="textCenter mainVisualText">
							<img class="mainVisualLogo" src="~assets/img/logo_w.svg" alt="WishHub">
							<p><span>小さな行動</span>から始める、誰かの<span>夢</span>のお手伝い<br>
								アクションファンディングサービス</P>
								<p class="dmmyButton">今すぐ始める</p>
						</div>
            </nuxt-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider__content">
            <nuxt-link to="/account/signup">
              <img src="~assets/img/sample_11.jpg" alt="夢を叶える、行動で応援する　WishHub" class="slider__img">
              <div class="textCenter mainVisualText">
								<p><span>- Step1 -</span></p>
								<p>叶えたい夢をプロジェクトとして登録<br>
								みんなに行動で支援してもらえる</P>
									<p class="dmmyButton">プロジェクトを作る</p>
							</div>
            </nuxt-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider__content">
            <nuxt-link to="/account/signup">
              <img src="~assets/img/sample_12.jpg" alt="夢を叶える、行動で応援する　WishHub" class="slider__img">
              <div class="textCenter mainVisualText">
								<p><span>- Step2 -</span></p>
								<p>行動でプロジェクトを支援しよう<br>
								達成すれば、wip（ポイント）がもらえる<br>
							  ここだけのリワードと交換できる！</P>
								<p class="dmmyButton">行動で支援する</p>
							</div>
            </nuxt-link>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
		</div>
    </no-ssr>
    <div class="container">
      <!-- バウンティー一覧 -->
      <div class="bountyList personalItem">
        <CardBox
          v-for="bounty in bounties"
          :key="bounty.bountyId"
          :bountyId="bounty.bountyId"
          :backgroundImageUrl="bounty.bountyImageUrl"
          :profileImageUrl="bounty.account.profileImageUrl"
          :accountName="bounty.account.accountName"
          :displayName="bounty.account.displayName"
          :titleName="bounty.bountyName"
          :description="bounty.description"
          :bountyType="bounty.bountyType"
          :participationEndDate="bounty.participationEndDate"
          :quantity="bounty.quantity"
          :pointName="pointName"
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
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { CommonConst } from "~/types/CommonConst";
import { Bounty } from "~/types/models/Bounty";
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

  async asyncData( { app }) {
    const bounties:Bounty[] = await app.$axios.$get(CommonConst.API_URL.BOUNTIES, {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
    const pointName: string = CommonConst.POINT.WIP;
    //メインビジュアル回りの設定
    const swiperOption = {
      spaceBetween: 0,
      speed: 600,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
    return {
      bounties,
      pointName,
      swiperOption
    }
  }
  // 無限スクロール
  infiniteHandler($state){
    this.$axios.get(CommonConst.API_URL.BOUNTIES, {params:{offset:this.offset, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
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
<!-- Initialize Swiper -->
