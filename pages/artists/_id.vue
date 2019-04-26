<template>
  <div>
    <!-- バックグラウンドプロフィール画像がある場合 -->
    <div v-if="profile.profileBackgroundImageUrl" class="mainVisual myPage" v-bind:style="{ 'background-image': 'url(' + profile.profileBackgroundImageUrl + ')' }"></div>
    <!-- 画像が設定されていない場合 -->
    <div v-else class="mainVisual myPage bounty1"  v-bind:style="{ 'background-image': 'url(/img/main_bkank.jpg)'}"></div>
    <div class="mypageTop">
      <div class="container">
        <!-- プロフィール画像が設定されている場合 -->
        <div v-if="profile.profileImageUrl" class="profileIcon myPageIcon" v-bind:style="{ 'background-image': 'url(' + profile.profileImageUrl + ')' }"></div>
        <!-- プロフィール画像が未設定の場合 -->
        <div v-else class="profileIcon myPageIcon" v-bind:style="{ 'background-image': 'url(/img/icon_blank.svg)'}"></div>
        <div class="inlineBlock">
          <nuxt-link class="textLink" :to="'/artists/' + $route.params.id">
            <h3 class="pcNone padding10">{{profile.displayName}}</h3>
          </nuxt-link>
          <div class="snsIcons">
            <nuxt-link class="textLink" :to="'/artists/' + $route.params.id">
              <h3 class="spNone padding10">{{profile.displayName}}</h3>
            </nuxt-link>
              <a v-if="isfavorite==true" class="grow2 on" @click="addReduceFavorit($route.params.id)" v-bind:class="{ disable: isProcessing }"><p><img src="~assets/img/heart_w.svg" />お気に入り</p></a>
              <a v-else class="grow2" @click="addReduceFavorit($route.params.id)" v-bind:class="{ disable: isProcessing }"><p><img src="~assets/img/heart_p.svg" />お気に入り</p></a>
          </div>
        </div>

        
        <div class="profileArea">
          <div class="grad-wrap artistPage">
          <div class="snsShare">
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <!--<iframe src="https://www.facebook.com/plugins/share_button.php?href={{process.env.WEB_URL + '/artists/' + this.profile.accountName}}&layout=button&size=small&width=61&height=20&appId" width="61" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>-->
          </div>
          <br>
            <input id="trigger1" class="grad-trigger" type="checkbox">
            <label class="grad-btn" for="trigger1"></label>
            <div class="grad-item">
              <p>
                <div class="snsIcons">
                  <a v-show="profile.blogUrl" class="snsIconImg" :href="profile.blogUrl" target="_blank"><img src="~assets/img/home.svg"></a>
                  <a v-show="profile.facebookId" class="snsIconImg" :href="'https://www.facebook.com/' + profile.facebookId" target="_blank"><img src="~assets/img/icon_fb.svg"></a>
                  <a v-show="profile.twitterId" class="snsIconImg" :href="'https://twitter.com/' + profile.twitterId" target="_blank"><img class="iconTw" src="~assets/img/icon_tw.svg"></a>
                  <a v-show="profile.instagramId" class="snsIconImg" :href="'https://www.instagram.com/' + profile.instagramId" target="_blank"><img class="iconInsta" src="~assets/img/icon_insta.svg"></a>
                  <a v-show="profile.etcUrl" class="snsIconImg" :href="profile.etcUrl" target="_blank"><img src="~assets/img/blog.svg"></a>
                </div>
                <div v-html="$options.filters.newLine(profile.description)" v-linkified/>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- タブメニュー -->
      <div class="menuBg">
        <div class="container">
          <div class="contentsArea">
            <ul class="flexMenu">
              <li                          :class="{ here: tabNum == 1 }"><div v-if="tabNum == 1" >アクティビティ</div><div v-else><a @click="tabNumChange(1)">アクティビティ</a></div></li>
              <li v-show="isCreator==true" :class="{ here: tabNum == 2 }"><div v-if="tabNum == 2" >プロジェクト  </div><div v-else><a @click="tabNumChange(2)">プロジェクト  </a></div></li>
              <li v-show="isCreator==true" :class="{ here: tabNum == 3 }"><div v-if="tabNum == 3" >リワード      </div><div v-else><a @click="tabNumChange(3)">リワード     </a></div></li>
              <li v-if="isCreator==true"   :class="{ here: tabNum == 4 }"><div v-if="tabNum == 4" >ランキング    </div><div v-else><a @click="tabNumChange(4)">ランキング   </a></div></li>
              <li v-else                   :class="{ here: tabNum == 4 }"><div v-if="tabNum == 4" >フォロワー    </div><div v-else><a @click="tabNumChange(4)">フォロワー   </a></div></li>
              <li                          :class="{ here: tabNum == 5 }"><div v-if="tabNum == 5" >フォロー      </div><div v-else><a @click="tabNumChange(5)">フォロー     </a></div></li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- アクティビティ -->
      <div v-if="tabNum == 1" class="activityArea">
        <CardUser @refreshActivity="refreshActivity()"
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
          :dialogProfileImageUrl="profile.profileImageUrl"
          :activityLikeCount="activity.likeCount"
          :activityLikeQuantity="activity.likeQuantity"
          :isOwn="isOwn"
        />
        <infinite-loading @infinite="infiniteHandlerActivities">
          <span slot="no-more"/>
          <span slot="no-results"/>
        </infinite-loading>
      </div>
      <!-- プロジェクト -->
      <div v-else-if="tabNum == 2" class="bountyList personalItem">
        <CardBox
          v-for="bounty in bounties"
          :key="bounty.bountyId"
          :backgroundImageUrl="bounty.bountyImageUrl"
          :titleName="bounty.bountyName"
          :quantity="bounty.quantity"
          :description="bounty.description"
          :bountyId="bounty.bountyId"
          :bountyType="bounty.bountyType"
          :participationEndDate="bounty.participationEndDate"
          :pointName="pointName"
          :dialogProfileImageUrl="profile.profileImageUrl"
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
        <infinite-loading @infinite="infiniteHandlerBounties">
          <span slot="no-more"/>
          <span slot="no-results"/>
        </infinite-loading>
      </div>

      <!-- リワード -->
      <div v-else-if="tabNum == 3" class="bountyList personalItem">
        <CardBox  @refreshReward="refreshReward()"
          v-for="reward in rewards"
          :key="reward.rewardId"
          :backgroundImageUrl="reward.rewardImageUrl"
          :profileImageUrl="reward.account.profileImageUrl"
          :titleName="reward.rewardName"
          :quantity="reward.quantity"
          :ownQuantity="reward.ownQuantity"
          :description="reward.description"
          :rewardId="reward.rewardId"
          :tokenTypeCode="reward.tokenTypeCode"
          :exchangeRate="reward.exchangeRate"
          :isOwn="isOwn"
          :pointName="pointName"
          :thanksProfileImageUrl="profile.profileImageUrl"
          :thanksMessage="reward.thanksMessage"
          :dialogProfileImageUrl="profile.profileImageUrl"
          :isPreview="reward.isPreview"
          :exchangeEndDate="reward.exchangeEndDate"
        /> 
        <infinite-loading @infinite="infiniteHandlerRewards">
          <span slot="no-more"/>
          <span slot="no-results"/>
        </infinite-loading>
      </div>
      <!-- ランキング・フォロワー -->
      <div v-else-if="tabNum == 4" class="activityArea">
        <CardUser
          v-for="(follower, rank) in followers"
          :key="follower.accountId"
          :profileImageUrl="follower.profileImageUrl"
	        :displayName="follower.displayName"
	        :accountName="follower.accountName"
	        :description="follower.description"
          :isRank="isCreator"
          :isFovFol="!isCreator"
          :rank='(rank+1)'
          :dialogProfileImageUrl="profile.profileImageUrl"
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
          :dialogProfileImageUrl="profile.profileImageUrl"
        />
        <infinite-loading @infinite="infiniteHandlerFavorites">
          <span slot="no-more"/>
          <span slot="no-results"/>
        </infinite-loading>
      </div>
    </div>
  <ModalThanks
    v-if="showModalThanks"
    :profileImageUrl="profile.profileImageUrl"
    :thanksMessage="profile.thanksMessage"
    @close="closeModal()"
  />
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
import { Bounty } from "~/types/models/Bounty"
import { Activity } from "~/types/models/Activity"
import { Reward } from "~/types/models/Reward"
import CardUser from "~/components/CardUser.vue"
import CardBox from "~/components/CardBox.vue"
import ModalThanks from "~/components/ModalThanks.vue"
import ModalDialog from "~/components/ModalDialog.vue"
import linkify from 'vue-linkify'

Vue.directive('linkified', linkify)

@Component({
  components: {
    CardUser,
    CardBox,
    ModalThanks,
    ModalDialog
  }
})
export default class extends Vue {
  tabNum:number = 1;
  showModalThanks:boolean = false;
  profile:Profile;
  activities:Activity[];
  bounties:Bounty[];
  rewards:Reward[];
  followers:Profile[];
  favorites:Profile[];

  isCreator: boolean = false;
  isfavorite: boolean = false;
  isProcessing: boolean = false;

  // 無限スクロールオフセット
  offsetActivities:number = CommonConst.API_PARAM.LIMIT_DEFAULT;
  offsetBounties:number = CommonConst.API_PARAM.LIMIT_DEFAULT;
  offsetRewards:number = CommonConst.API_PARAM.LIMIT_DEFAULT;
  offsetFollowers:number = CommonConst.API_PARAM.LIMIT_DEFAULT;
  offsetFavorites:number = CommonConst.API_PARAM.LIMIT_DEFAULT;

  // ダイアログ用
  showModalDialog: boolean = false;
  dialogMessage: string[];

  async asyncData( { app, route, store } ) {
      var isfavorite:boolean = false;
      var isCreator:boolean = false;
      var profile:Profile = await app.$axios.$get(CommonConst.API_URL.ACCOUNT_PROFILE.replace('{account_name}', route.params.id));
      var activities:Activity[] = await app.$axios.$get(CommonConst.API_URL.ACCOUNT_ACTIVITIES.replace('{account_name}', route.params.id), {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      var rewards:Reward[] = await app.$axios.$get(CommonConst.API_URL.ACCOUNT_REWARD.replace('{account_name}', route.params.id), {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      var bounties:Bounty[] = await app.$axios.$get(CommonConst.API_URL.ACCOUNT_BOUNTIES.replace('{account_name}', route.params.id), {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      var followers:Profile[] = await app.$axios.$get(CommonConst.API_URL.ACCOUNT_FOLLOWERS.replace('{account_name}', route.params.id), {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      var favorites:Profile[] = await app.$axios.$get(CommonConst.API_URL.ACCOUNT_FAVORITES.replace('{account_name}', route.params.id),  {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      // お気に入り登録チェック用
      const myFavorites:Profile[] = await app.$axios.$get(CommonConst.API_URL.MY_FAVORITES)
      .catch(err => {
        console.log(err.response.status);
        if(err.response.status === 404 || err.response.status === 401){
          return {"accountId": null, "clientCode": null, "credentialId": null, "accountName": null, "displayName": null, "birthday": null, "gender": null, "description": null, "profileImage": null, "profileImageUrl": null, "profileBackgroundImage": null, "profileBackgroundImageUrl": null, "facebookId": null, "twitterId": null, "instagramId": null, "blogUrl": null, "thanksMessage":  null, "etcUrl": null, "permissionCode": null, "tokens": null, "permissions":null };
        }
      });
      // お気に入り登録ユーザかのチェック
      for(let myFavorite of myFavorites){
        if(myFavorite.accountName === route.params.id) {
            isfavorite = true;
        }
      }
      // クリエータチェック
      if(profile.permissions) {
        for(let permission of profile.permissions){
          if(permission === 'C') {
            isCreator = true;
            // クリエータの場合はランキングソートで上書き
            followers = await app.$axios.$get(CommonConst.API_URL.ACCOUNT_FOLLOWERS.replace('{account_name}', route.params.id), {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_RANK}});
          }
        }
      }
      // オーナチェック
      var isOwn:boolean = false;
      if(route.params.id === store.state.myProfile.accountName) {
        isOwn = true;
      }
      const pointName: string = CommonConst.POINT.WIP;
      return {
        isfavorite,
        profile,
        rewards,
        activities,
        bounties,
        followers,
        favorites,
        isOwn,
        isCreator,
        pointName,
        // ダイアログテンプレート画像
        dialogImageUrl: CommonConst.TemplateImg.DIALOG_IMG_URL
      }
  }

  // SNSシェア用
  head () {
    return {
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:description', property: 'og:description', content: this.profile.description },
        { hid: 'og:url', property: 'og:url', content: process.env.WEB_URL + '/artists/' + this.profile.accountName },
        { hid: 'og:image', property: 'og:image', content: this.profile.profileBackgroundImageUrl},
        { hid: 'og:site_name', property: 'og:site_name', content: 'WishHub（ウィッシュハブ）|' + this.profile.displayName },
        { hid: 'twitter:title', property: 'twitter:title', content: 'WishHub（ウィッシュハブ）|' + this.profile.displayName },
        { hid: 'twitter:description', property: 'twitter:description', content: this.profile.description },
        { hid: 'twitter:image', property: 'twitter:image', content: this.profile.profileBackgroundImageUrl},
      ],
    }
  }

  tabNumChange(value: number) {
    this.tabNum = value;
  }
  // リワード情報更新
  async refreshReward() {
    await this.$axios.get(CommonConst.API_URL.ACCOUNT_REWARD.replace('{account_name}', this.$route.params.id), {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}})
    .then(response => {
      this.rewards = response.data;
    })
    .catch(error => {
        console.log(error)
    });
  }

  // アクティビティ情報更新
  async refreshActivity() {
    console.log("更新");
    await this.$axios.get(CommonConst.API_URL.ACCOUNT_ACTIVITIES.replace('{account_name}', this.$route.params.id), {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}})
    .then(response => {
      this.activities = response.data;
    })
    .catch(error => {
        console.log(error)
    });
  }

  // お気に入り登録・解除
  async addReduceFavorit( accountName: string) {
    if (this.isProcessing) return;
    this.isProcessing = true;

    // アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken).then(()=> {

      const data = new FormData();
      data.append('FavoriteAccountName', accountName);
      this.$axios.post(CommonConst.API_URL.ACCOUNT_FAVORITES.replace('{account_name}', accountName), data)
      .then( () => {
        this.isfavorite = ! this.isfavorite;
        // お気に入り登録時にモーダルウィンドウ表示
        if(this.isfavorite){
          this.openModal();
        }
        // フォローワ・ランキング情報更新
        this.$axios.get(CommonConst.API_URL.ACCOUNT_FOLLOWERS.replace('{account_name}', this.$route.params.id), {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_RANK}})
        .then(response => {
          this.followers = response.data;
        })
        .catch(error => {
            console.log(error)
        }); 
      })
      .catch( error => {
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
      });
      this.isProcessing = false;
    });
  }
  openModal(){
    this.showModalThanks = true;
  }
  closeModal(){
    this.showModalThanks = false;
  }
  openModalDialog(dialogMessage){
    this.dialogMessage = dialogMessage;
    this.showModalDialog = true;
  }
  closeModalDialog(){
    this.showModalDialog = false;
  }
  // 無限スクロール（アクティビティ）
  infiniteHandlerActivities($state){
    if(this.tabNum !== 1) return;
    this.$axios.get(CommonConst.API_URL.ACCOUNT_ACTIVITIES.replace('{account_name}', this.$route.params.id), {params:{offset:this.offsetActivities, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
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
  // 無限スクロール（プロジェクト）
  infiniteHandlerBounties($state){
    if(this.tabNum !== 2) return;
    this.$axios.get(CommonConst.API_URL.ACCOUNT_BOUNTIES.replace('{account_name}', this.$route.params.id), {params:{offset:this.offsetBounties, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
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
  // 無限スクロール（リワード）
  infiniteHandlerRewards($state){
    if(this.tabNum !== 3) return;
    this.$axios.get(CommonConst.API_URL.ACCOUNT_REWARD.replace('{account_name}', this.$route.params.id), {params:{offset:this.offsetRewards, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
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
  // 無限スクロール（フォロワー）
  infiniteHandlerFollowers($state){
    // クリエイターの場合はランク(最大20件までなので更新しない)
    if(this.tabNum !== 4 || this.isCreator) return;
    this.$axios.get(CommonConst.API_URL.ACCOUNT_FOLLOWERS.replace('{account_name}', this.$route.params.id), {params:{offset:this.offsetFollowers, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
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
  infiniteHandlerFavorites($state){
    if(this.tabNum !== 5) return;
    this.$axios.get(CommonConst.API_URL.ACCOUNT_FAVORITES.replace('{account_name}', this.$route.params.id),  {params:{offset:this.offsetFavorites, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
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
