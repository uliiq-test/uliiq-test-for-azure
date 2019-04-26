<template>
  <div>
    <!-- バックグラウンドプロフィール画像がある場合 -->
    <div v-if="$store.state.myProfile.profileBackgroundImageUrl" class="mainVisual myPage" v-bind:style="{ 'background-image': 'url(' + $store.state.myProfile.profileBackgroundImageUrl + ')' }"></div>
    <!-- 画像が設定されていない場合 -->
    <div v-else class="mainVisual myPage bounty1"  v-bind:style="{ 'background-image': 'url(/img/main_bkank.jpg)'}"></div>
    <div class="mypageTop">
      <div class="container">
        <!-- プロフィール画像が設定されている場合 -->
        <div v-if="$store.state.myProfile.profileImageUrl" class="profileIcon myPageIcon" v-bind:style="{ 'background-image': 'url(' + $store.state.myProfile.profileImageUrl + ')' }"></div>
        <!-- プロフィール画像が未設定の場合 -->
        <div v-else class="profileIcon myPageIcon" v-bind:style="{ 'background-image': 'url(/img/icon_blank.svg)'}"></div>
        <div class="inlineBlock">
          <nuxt-link class="textLink" :to="'/artists/' + $store.state.myProfile.accountName">
            <h3 class="pcNone padding10">{{$store.state.myProfile.displayName}}</h3>
          </nuxt-link>
          <div class="snsIcons">
            <nuxt-link class="textLink" :to="'/artists/' + $store.state.myProfile.accountName">
              <h3 class="spNone padding10">{{$store.state.myProfile.displayName}}</h3>
            </nuxt-link>
            <nuxt-link class="grow2 rewardButton" to="/account/my/profile">変更する</nuxt-link>
          </div>
        </div>
			  <p class="textCenter"><a class="textLink modal-syncer marginUnder30"  @click="pushRegistAfter()">プロフィール登録をしたら次はこちら</a></p>
        <div class="profileArea">
          <div class="grad-wrap">
            <input id="trigger1" class="grad-trigger" type="checkbox">
            <label class="grad-btn" for="trigger1"></label>
            <div class="grad-item">
              <Point
                    labelName="所持ポイント："
                    :tokens="profile.tokens"
                    targetPointType="PNT"
                    :unitName="pontName"
              />
              <p v-html="$options.filters.newLine($store.state.myProfile.description)" v-linkified/>
            </div>
          </div>
        </div>
      </div>
      <!-- タブメニュー -->
      <div class="menuBg">
        <div class="container">
          <div class="contentsArea">
            <ul class="flexMenu">
              <li :class="{ here: tabNum == 1 }"><div v-if="tabNum == 1" >アクティビティ  </div><div v-else><a @click="tabNumChange(1)">アクティビティ  </a></div></li>
              <li :class="{ here: tabNum == 2 }"><div v-if="tabNum == 2" >所持リワード    </div><div v-else><a @click="tabNumChange(2)">所持リワード    </a></div></li>
              <li :class="{ here: tabNum == 3 }"><div v-if="tabNum == 3" >参加プロジェクト</div><div v-else><a @click="tabNumChange(3)">参加プロジェクト</a></div></li>
              <li :class="{ here: tabNum == 4 }"><div v-if="tabNum == 4" >フォロワー      </div><div v-else><a @click="tabNumChange(4)">フォロワー      </a></div></li>
              <li :class="{ here: tabNum == 5 }"><div v-if="tabNum == 5" >フォロー        </div><div v-else><a @click="tabNumChange(5)">フォロー        </a></div></li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- アクティビティ -->
      <div v-if="tabNum == 1" class="activityArea">
        <CardUser
          v-for="activity in activities"
          :key="activity.accountActionId"
          :accountActionId="activity.accountActionId"
          :profileImageUrl="activity.toAccount.profileImageUrl"
	        :displayName="activity.fromAccount.displayName"
	        :date="activity.createDateTime"
	        :accountName="activity.fromAccount.accountName"
	        :description="activity.description"
          :replaceAccountName="activity.toAccount.accountName"
          :replaceAccountDisplayName="activity.toAccount.displayName"
          :replaceBounty="activity.bounty"
          :dialogProfileImageUrl="$store.state.myProfile.profileImageUrl"
          :activityLikeCount="activity.likeCount"
          :activityLikeQuantity="activity.likeQuantity"
          :isOwn="true"
        />
        <infinite-loading @infinite="infiniteHandlerActivities">
          <span slot="no-more"/>
          <span slot="no-results"/>
        </infinite-loading>
      </div>
      <!-- 所持リワード -->
      <div v-else-if="tabNum == 2" class="bountyList personalItem">
        <CardBox
          v-for="reward in rewards"
          :key="reward.rewardId"
          :backgroundImageUrl="reward.rewardImageUrl"
          :profileImageUrl="reward.account.profileImageUrl"
          :accountName="reward.account.accountName"
          :displayName="reward.account.displayName"
          :titleName="reward.rewardName"
          :quantity="reward.quantity"
          :ownQuantity="reward.ownQuantity"
          :description="reward.description"
          :rewardId="reward.rewardId"
          :tokenTypeCode="reward.tokenTypeCode"
          :exchangeRate="reward.exchangeRate"
          :isOwn="true"
          :dialogProfileImageUrl="$store.state.myProfile.profileImageUrl"
          :isPreview="reward.isPreview"
        /> 
        <infinite-loading @infinite="infiniteHandlerRewards">
          <span slot="no-more"/>
          <span slot="no-results"/>
        </infinite-loading>
      </div>
      <!-- 参加プロジェクト -->
      <div v-else-if="tabNum == 3" class="bountyList personalItem">
        <CardBox
          v-for="bounty in bounties"
          :key="bounty.bountyId"
          :backgroundImageUrl="bounty.bountyImageUrl"
          :profileImageUrl="bounty.account.profileImageUrl"
          :accountName="bounty.account.accountName"
          :displayName="bounty.account.displayName"
          :bountyId="bounty.bountyId"
          :titleName="bounty.bountyName"
          :bountyType="bounty.bountyType"
          :participationEndDate="bounty.participationEndDate"
          :quantity="bounty.quantity"
          :description="bounty.description"
          :pointName="pontName"
          :dialogProfileImageUrl="$store.state.myProfile.profileImageUrl"
          :bountyStatusShow="true"
          :bountyCompleteStatus="bounty.completeStatus"
          :bountyPublishStatus="bounty.publishStatus"
          :bountyCreateStatus="bounty.createStatus"
          :joinCount="bounty.joinCount"
          :participantLimit="bounty.participantLimit"
          :commentCount="bounty.commentCount"
        />
        <infinite-loading @infinite="infiniteHandlerBounties">
          <span slot="no-more"/>
          <span slot="no-results"/>
        </infinite-loading>
	    </div>
      <!-- フォロワー -->
      <div v-else-if="tabNum == 4" class="activityArea">
        <CardUser
          v-for="follower in followers"
          :key="follower.accountId"
          :profileImageUrl="follower.profileImageUrl"
	        :displayName="follower.displayName"
	        :accountName="follower.accountName"
	        :description="follower.description"
          :isFovFol="true"
          :dialogProfileImageUrl="$store.state.myProfile.profileImageUrl"
        />
        <infinite-loading @infinite="infiniteHandlerFollowers">
          <span slot="no-more"/>
          <span slot="no-results"/>
        </infinite-loading>
      </div>
      <!-- フォロ -->
      <div v-else-if="tabNum == 5" class="activityArea">
        <CardUser
          v-for="favorite in favorites"
          :key="favorite.accountId"
          :profileImageUrl="favorite.profileImageUrl"
	        :displayName="favorite.displayName"
	        :accountName="favorite.accountName"
	        :description="favorite.description"
          :isFovFol="true"
          :dialogProfileImageUrl="$store.state.myProfile.profileImageUrl"
        />
        <infinite-loading @infinite="infiniteHandlerFavorites">
          <span slot="no-more"/>
          <span slot="no-results"/>
        </infinite-loading>
      </div>
      <!-- TODO モーダルYES ボタン配列で渡す -->
      <ModalDialogFreeFormat
        v-if="showModalDialogFreeFormat"
        :description="dialogFreeFormat"
        :yesButtionName="yesButtionNameFreeFormat"
        :yesZButtionName="yesZButtionNameFreeFormat"
        :canOuterClose="canOuterCloseFreeFormat"
        @closeModalDialogFreeFormatNo="closeModalDialogFreeFormatNo()"
		/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { CommonConst } from "~/types/CommonConst"
import { Profile } from "~/types/models/Profile"
import { Bounty } from "~/types/models/Bounty"
import { Activity } from "~/types/models/Activity"
import { Reward } from "~/types/models/Reward"
import linkify from 'vue-linkify'
import CardUser from "~/components/CardUser.vue"
import CardBox from "~/components/CardBox.vue"
import Point from "~/components/Point.vue"
import ModalDialogFreeFormat from "~/components/ModalDialogFreeFormat.vue"

Vue.directive('linkified', linkify)

@Component({
  components: {
    CardUser,
    CardBox,
    Point,
    ModalDialogFreeFormat
  }
})
export default class extends Vue {
  tabNum:number = 1;

  activities:Activity[];
  rewards:Reward[];
  bounties:Bounty[];
  followers:Profile[];
  favorites:Profile[];

	// モーダルフリーフォーマット用
	showModalDialogFreeFormat: boolean = false;
	dialogFreeFormat: string; 
	modalFreeFormatEventType: string;
	yesButtionNameFreeFormat: string;
  yesZButtionNameFreeFormat: string;
  canOuterCloseFreeFormat: boolean;


  // 無限スクロールオフセット
  offsetActivities:number = CommonConst.API_PARAM.LIMIT_DEFAULT;
  offsetRewards:number = CommonConst.API_PARAM.LIMIT_DEFAULT;
  offsetBounties:number = CommonConst.API_PARAM.LIMIT_DEFAULT;
  offsetFollowers:number = CommonConst.API_PARAM.LIMIT_DEFAULT;
  offsetFavorites:number = CommonConst.API_PARAM.LIMIT_DEFAULT;

  async asyncData( { app, store } ) {
      var activities:Activity[] = await app.$axios.$get(CommonConst.API_URL.MY_ACTIVITIES, {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      var rewards:Reward[] = await app.$axios.$get(CommonConst.API_URL.MY_REWARD_OWN, {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      var bounties:Bounty[] = await app.$axios.$get(CommonConst.API_URL.MY_BOUNTIES_JOIN, {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      var followers:Profile[] = await app.$axios.$get(CommonConst.API_URL.MY_FOLLOWERS, {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      var favorites:Profile[] = await app.$axios.$get(CommonConst.API_URL.MY_FAVORITES, {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});                          
      const profile:Profile = await app.$axios.$get(CommonConst.API_URL.MY_PROFILE);
      const pontName: string = CommonConst.POINT.WIP;
      return {
        activities,
        rewards,
        bounties,
        followers,
        favorites,
        profile,
        pontName
      }
  }
  tabNumChange(value:number) {
    this.tabNum = value;
  }
  // プロフィール登録したらこちらのリンク
  pushRegistAfter() {
    this.openModalDialogFreeFormat(CommonConst.HELPER_MESSAGE.M003_FREE_MESSAGE_01, '', 'RegistAfter', true);
  }
  	// モーダル（フリーフォーマット）オープン
	openModalDialogFreeFormat(dialogFreeFormat: string, yesButtionName: string, eventType: string, canOuterClose: boolean){
		this.dialogFreeFormat = dialogFreeFormat;
		this.yesButtionNameFreeFormat = yesButtionName;
    this.modalFreeFormatEventType = eventType;
    this.canOuterCloseFreeFormat = true;
		this.showModalDialogFreeFormat = true;
	}

	// モーダル(フリーフォーマット)No押下時
	closeModalDialogFreeFormatNo(){
		this.showModalDialogFreeFormat = false;
	}
  // 無限スクロール（アクティビティ）
  async infiniteHandlerActivities($state){
    if(this.tabNum !== 1) return;
   
    // アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken);

    this.$axios.get(CommonConst.API_URL.MY_ACTIVITIES, {params:{offset:this.offsetActivities, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
      if(response.data.length){
        this.offsetActivities += CommonConst.API_PARAM.LIMIT_DEFAULT;
        this.activities.push(...response.data)
        $state.loaded()
      } else {
        $state.complete()
      }
    }).catch((err) => {
      $state.complete()
    })
  }
    // 無限スクロール（リワード）
    async infiniteHandlerRewards($state){
      if(this.tabNum !== 2) return;

      // アクセストークンの取得
      var accessToken = await this.$msalWishHub.silentLogin();
      await this.$store.dispatch('addAccessToken', accessToken);

      this.$axios.get(CommonConst.API_URL.MY_REWARD_OWN, {params:{offset:this.offsetRewards, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
        if(response.data.length){
          this.offsetRewards += CommonConst.API_PARAM.LIMIT_DEFAULT;
          this.rewards.push(...response.data)
          $state.loaded()
        } else {
          $state.complete()
        }
      }).catch((err) => {
        $state.complete()
      })
    }
  // 無限スクロール（プロジェクト）
  async infiniteHandlerBounties($state){
    if(this.tabNum !== 3) return;

    // アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken);

    this.$axios.get(CommonConst.API_URL.MY_BOUNTIES_JOIN, {params:{offset:this.offsetBounties, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
      if(response.data.length){
        this.offsetBounties += CommonConst.API_PARAM.LIMIT_DEFAULT;
        this.bounties.push(...response.data)
        $state.loaded()
      } else {
        $state.complete()
      }
    }).catch((err) => {
      $state.complete()
    })
  }
  // 無限スクロール（フォロワー）
  async infiniteHandlerFollowers($state){
    if(this.tabNum !== 4 ) return;

    // アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken);

    this.$axios.get(CommonConst.API_URL.MY_FOLLOWERS, {params:{offset:this.offsetFollowers, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
      if(response.data.length){
        this.offsetFollowers += CommonConst.API_PARAM.LIMIT_DEFAULT;
        this.followers.push(...response.data)
        $state.loaded()
      } else {
        $state.complete()
      }
    }).catch((err) => {
      $state.complete()
    })
  }
  // 無限スクロール（フォロー）
  async infiniteHandlerFavorites($state){
    if(this.tabNum !== 5) return;

    // アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken);

    this.$axios.get(CommonConst.API_URL.MY_FAVORITES, {params:{offset:this.offsetFavorites, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
      if(response.data.length){
        this.offsetFavorites += CommonConst.API_PARAM.LIMIT_DEFAULT;
        this.favorites.push(...response.data)
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
