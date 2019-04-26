<template>
  <div class="wrapper">
    <!-- プロフィール画像が設定されている場合 -->
    <div v-if="bounty.account.profileImageUrl" class="bountyIcon" v-bind:style="{ 'background-image': 'url(' + bounty.account.profileImageUrl + ')' }"></div>
    <!-- プロフィール画像が未設定の場合 -->
    <div v-else class="bountyIcon" v-bind:style="{ 'background-image': 'url(/img/icon_blank.svg)'}"></div>    
    <nuxt-link class="bountyArtistName" :to="'/artists/' + bounty.account.accountName">{{bounty.account.displayName}}</nuxt-link>
    <!-- バウンティ画像が設定されている場合 -->
    <div v-if="bounty.bountyImageUrl" class="mainVisual myPage bounty1" v-bind:style="{ 'background-image': 'url(' + bounty.bountyImageUrl + ')' }"></div>
    <!-- 画像が設定されていない場合 -->
    <div v-else class="mainVisual myPage bounty1"  v-bind:style="{ 'background-image': 'url(/img/project_blank.jpg)'}"></div>
    <div class="mypageTop">
      <div class="container">
        <div class="profileArea">
          <h3 class="bountyTitle">{{bounty.bountyName}}</h3>
          <div class="snsShare">
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <!--<iframe src="https://www.facebook.com/plugins/share_button.php?href={{process.env.WEB_URL + '/bounties/' + this.bounty.bountyId}}&layout=button&size=small&width=61&height=20&appId" width="61" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>-->
          </div>
          <!-- ↓ オーナの時 ↓ -->
          <div v-if="isOwn==true">
            <div class="textRight top60">
              <a class="rewardButton ChangeButton" @click="allowPush('/account/my/bounties/create?bountyId=' + bounty.bountyId)">編集する</a>
            </div>
            <div class="projectData">ステータス：{{bountyStatsName}}</div>
          </div>
          <!-- ↑ オーナの時 ↑ -->
          <div class="projectData">
            <BountyType
						 :bountyType="bounty.bountyType"
						/>
              <p>残り：<span>{{bounty.participationEndDate | toDaysLeft}}日</span></p>
              <p>報酬ポイント：<span>{{bounty.quantity | toLocaleString | zeroToNone}}{{pointName | delete(bounty.quantity==0 || bounty.quantity==null) }}</span></p>
              <p>参加人数：<span>{{bounty.joinCount}}/{{bounty.participantLimit}} 人</span></p>
          </div>
          <div class="grad-wrap">
          <input id="trigger1" class="grad-trigger" type="checkbox">
          <label class="grad-btn" for="trigger1"></label>
          <div class="grad-item bounty">
            <p v-html="$options.filters.newLine(bounty.description)" v-linkified/>
          </div>
				</div>
			</div>
		</div>
      <!-- タブメニュー -->
      <div class="menuBg">
        <div class="container">
          <div class="contentsArea">
            <ul class="flexMenu bountyMenu">
              <li :class="{ here: tabNum == 1 }"><div v-if="tabNum == 1" >アクション</div><div v-else><a @click="tabNumChange(1)">アクション</a></div></li>
              <li :class="{ here: tabNum == 2 }"><div v-if="tabNum == 2" >参加者    </div><div v-else><a @click="tabNumChange(2)">参加者   </a></div></li>
              <li :class="{ here: tabNum == 3 }"><div v-if="tabNum == 3" >チャット  </div><div v-else><a @click="tabNumChange(3)">チャット</a></div></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- アクション -->
      <div v-if="tabNum == 1" class="bountyList personalItem">
        <CardBox  @refreshJoin="refreshJoin()"
          v-for="bountyAction in bountyActions"
          :key="bountyAction.bountyActionId"
          :backgroundImageUrl="bountyAction.bountyActionImageUrl"
          :titleName="bountyAction.bountyActionName"
          :description="bountyAction.description"
          :bountyId="bountyAction.bountyId"
          :bountyActionNo="bountyAction.bountyActionNo"
          :isOwn="isOwn"
          :joinStatus="bountyAction.joinStatus"
          :thanksMessage="bounty.thanksMessage"
          :thanksProfileImageUrl="bounty.account.profileImageUrl"
          :dialogProfileImageUrl="bounty.account.profileImageUrl"
          :joinCount="bounty.joinCount"
          :participantLimit="bounty.participantLimit"
          :completeStatus="bounty.completeStatus"
          :actionJoinCount="bountyAction.joinCount"
          :bauntyCanJoin="bauntyCanJoin"
          :bountyTypeForAction="bounty.bountyType"
        />
      </div>
      <!-- 参加者 -->
      <div v-else-if="tabNum == 2" class="activityArea">
        <CardUser
          v-for="bountyJoin in bountyJoins"
          :key="bountyJoin.accountId"
          :profileImageUrl="bountyJoin.profileImageUrl"
	        :displayName="bountyJoin.displayName"
	        :date="bountyJoin.createDateTime"
	        :accountName="bountyJoin.accountName"
          :isJoin="true"
          :dialogProfileImageUrl="bounty.account.profileImageUrl"          
        />
        <!-- 無限スクロールローディング -->
        <infinite-loading @infinite="infiniteHandlerJoins">
          <span slot="no-more"/>
          <span slot="no-results"/>
        </infinite-loading>
      </div>

      <!-- チャット -->
      <div v-else-if="tabNum == 3" class="activityArea">
        <CardUser
          v-for="bountyComment in bountyComments"
          :key="bountyComment.bountyCommentId"
          :profileImageUrl="bountyComment.account.profileImageUrl"
	        :displayName="bountyComment.account.displayName"
	        :date="bountyComment.postedDateTime"
	        :accountName="bountyComment.account.accountName"
	        :description="bountyComment.comment"
          :bountyCommentId="bountyComment.bountyCommentId"
          :replyComment="bountyComment.replyComment"
          :commentLikeCount="bountyComment.likeCount"
          :commentLikeQuantity="bountyComment.likeQuantity"
          :dialogProfileImageUrl="bounty.account.profileImageUrl"
          :canPostComment="bounty.canPostComment"
          :commentAccountName="bountyComment.account.accountName"
          @refreshComment="refreshComment()"
        />
        <infinite-loading @infinite="infiniteHandlerComments">
          <span slot="no-more"/>
          <span slot="no-results"/>
        </infinite-loading>
      <div class="fixedBottom">
      <div class="messageEntry">
	      <textarea v-model="message" name="discription" rows="4" cols="30" placeholder="メッセージ" :disabled="!bounty.canPostComment"></textarea>
	      <input class="submitButton" type="button" value="送信する" @click="addComment(message)" v-bind:class="{ disable: isProcessing || !bounty.canPostComment }">
        </div>
      </div>
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
import { CommonUtil } from "~/types/CommonUtil"
import { Profile } from "~/types/models/Profile"
import { Bounty } from "~/types/models/Bounty"
import { BountyAction } from "~/types/models/BountyAction"
import { BountyComment } from "~/types/models/BountyComment"
import { Activity, Account } from "~/types/models/Activity"
import CardUser from "~/components/CardUser.vue"
import CardBox from "~/components/CardBox.vue"
import BountyType from "~/components/BountyType.vue"
import ModalDialog from "~/components/ModalDialog.vue"
import linkify from 'vue-linkify'
Vue.directive('linkified', linkify)

@Component({
  components: {
    CardUser,
    CardBox,
    BountyType,
    ModalDialog
  }
})
export default class extends Vue {
  tabNum: number = 1;
  message: string|null = null;
  bounty: Bounty;
  bountyComments: BountyComment[];
  bountyJoins: Profile[];
  bountyActions: BountyAction[];
  isProcessing: boolean = false;
  isCommontSecret = false;
  isCommontSecretMessage: string[];

  // 無限スクロールオフセット
  offsetJoins: number = CommonConst.API_PARAM.LIMIT_DEFAULT ;
  offsetComments: number = CommonConst.API_PARAM.LIMIT_DEFAULT ;

  // ダイアログ用
  showModalDialog: boolean = false;
  dialogMessage: string[];

  async asyncData( { app, route, store } ) {
      var bountyStatsName: string = '';
      var isCommontSecret: boolean = false;
      var isCommontSecretMessage: string[] = [''];　
      var bounty:Bounty = await app.$axios.$get(CommonConst.API_URL.BOUNTIES + '/' + route.params.id);
      var bountyActions:BountyAction[] = await app.$axios.$get(CommonConst.API_URL.BOUNTIES_ACTIONS.replace('{bounty_id}', route.params.id), {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      var bountyJoins:Profile[] = await app.$axios.$get(CommonConst.API_URL.BOUNTIES_JOIN.replace('{bounty_id}', route.params.id), {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}});
      var bountyComments:BountyComment[] = await app.$axios.$get(CommonConst.API_URL.BOUNTIES_COMMENTS.replace('{bounty_id}', route.params.id) ,{params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT}}).catch(
        err => {
          if(err.response.status === 400){
            isCommontSecret = true;
            isCommontSecretMessage = err.response.data.BadRequest;
          }
          return [{"account": null,"bountyId": null,"bountyCommentId": null,"comment": null,"postedDateTime": null,"replyCommentId": null,"replyComment": null,"clientCode": null,"credentialId": null}];
        }
      );
      // オーナー判定
      var isOwn:boolean = false;
      if(bounty!.account!.accountName === store.state.myProfile.accountName){
        isOwn = true;
      }
      // バウンティステータスチェック
      if(bounty.completeStatus === 1) {
        bountyStatsName = '達成';
      } else if (bounty.completeStatus === 2) {
        bountyStatsName = '終了';
      } else if (bounty.publishStatus === 1) {
        bountyStatsName = '公開中';
      } else if (bounty.createStatus === 0){
        // 作成中の状態での非公開、
        bountyStatsName = '作成中';
      } else {
        // 作成完了の状態での非公開
        bountyStatsName = '非公開';
      }
      // バウンティ参加可否フラグ
      var bauntyCanJoin = true;
      const util = new CommonUtil();
      // ステータスが公開以外 または、期限切れの場合は参加不可
      // ステータスが公開中以外
      if (bounty.participationEndDate && bounty.publishStatus !== 1){
        bauntyCanJoin = false
      }
      // 期限切れチェック
      if(util.dateNowCompare(util.stringToDataYmd(bounty.participationEndDate)) < 0) {
        bauntyCanJoin = false
      }      
      // バウンティの参加定員数オーバの場合は参加不可
      if(bounty.joinCount && bounty.participantLimit && Number(bounty.joinCount) >= Number(bounty.participantLimit)){
			  bauntyCanJoin = false;
      }
      const pointName: string = CommonConst.POINT.WIP;
      return {
        bounty,
        bountyActions,
        bountyJoins,
        bountyComments,
        isOwn,
        pointName,
        isCommontSecret,
        isCommontSecretMessage,
        bountyStatsName,
        bauntyCanJoin,
        // ダイアログテンプレート画像
        dialogImageUrl: CommonConst.TemplateImg.DIALOG_IMG_URL
      }
  }

  // SNSシェア用
  head () {
    return {
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:description', property: 'og:description', content: this.bounty.description },
        { hid: 'og:url', property: 'og:url', content: process.env.WEB_URL + '/bounties/' + this.bounty.bountyId },
        { hid: 'og:image', property: 'og:image', content: this.bounty.bountyImageUrl },
        { hid: 'og:site_name', property: 'og:site_name', content: 'WishHub（ウィッシュハブ）|' + this.bounty.bountyName },
        { hid: 'twitter:title', property: 'twitter:title', content: 'WishHub（ウィッシュハブ）|' + this.bounty.bountyName },
        { hid: 'twitter:description', property: 'twitter:description', content: this.bounty.description },
        { hid: 'twitter:image', property: 'twitter:image', content: this.bounty.bountyImageUrl },
      ],
    }
  }

  tabNumChange(value: number) {
    // チャットタブ選択時、プロジェクト未参加の場合は表示させない。
    if(value === 3 && this.isCommontSecret) {
      this.openModalDialog(this.isCommontSecretMessage);
      return;
    }
    this.tabNum = value;
  }
  async addComment(message: string) {
    if (this.isProcessing || !this.bounty.canPostComment) return;
    this.isProcessing = true;

		// アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken);

    const data = new FormData();
    if(message) {
      data.append('BountyId', this.$route.params.id);
      data.append('Comment', message);
      await this.$axios.post(CommonConst.API_URL.BOUNTIES_COMMENTS.replace('{bounty_id}', this.$route.params.id), data)
      .then( () => {
        this.refreshComment();
        this.message = null;
      })
      .catch(error => {
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
    }
    this.isProcessing = false;
  }
  refreshComment(){
    this.$axios.get(CommonConst.API_URL.BOUNTIES_COMMENTS.replace('{bounty_id}', this.$route.params.id))
    .then(response => {
      this.bountyComments = response.data;
    })
    .catch(error => {
        console.log(error)
    });
  }
  refreshJoin(){
    this.$axios.get(CommonConst.API_URL.BOUNTIES_JOIN.replace('{bounty_id}', this.$route.params.id), {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}})
    .then(response => {
      this.bountyJoins = response.data;
      this.$axios.get(CommonConst.API_URL.BOUNTIES + '/' + this.$route.params.id)
      .then(response => {
        this.bounty = response.data;
        // コメントのリフレッシュ
        this.refreshComment()
        // チャットのロック解除
        this.isCommontSecret = false;
      })
      .catch(error => {
        console.log(error)
      });
    })
    .catch(error => {
        console.log(error)
    });
    this.$axios.get(CommonConst.API_URL.BOUNTIES_ACTIONS.replace('{bounty_id}', this.$route.params.id), {params:{offset:CommonConst.API_PARAM.OFFSET_DEFAULT, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}})
    .then(response => {
      this.bountyActions = response.data;
    })
    .catch(error => {
        console.log(error)
    });
  }
  // 遷移許可
	allowPush(url: string){
		this.$store.dispatch('transitionAllow').then(() => {
			this.$router.push(url);
		})
	}
  openModalDialog(dialogMessage){
    this.dialogMessage = dialogMessage;
    this.showModalDialog = true;
  }
  closeModalDialog(){
    this.showModalDialog = false;
  }
  // 無限スクロール（参加者）
  infiniteHandlerJoins($state){
    if (this.tabNum !== 2) return;
    this.$axios.get(CommonConst.API_URL.BOUNTIES_JOIN.replace('{bounty_id}', this.$route.params.id), {params:{offset:this.offsetJoins, limit:CommonConst.API_PARAM.LIMIT_DEFAULT, sort:CommonConst.API_PARAM.SORT_NEW}}).then(response=>{
      if(response.data.length){
        this.offsetJoins += CommonConst.API_PARAM.LIMIT_DEFAULT;
        this.bountyJoins.push(...response.data)
        $state.loaded()
      } else {
        $state.complete()
      }
    }).catch((err) => {
      $state.complete()
    })
  }
  // 無限スクロール（コメント）
  infiniteHandlerComments($state){
    if (this.tabNum !== 3) return;
    this.$axios.get(CommonConst.API_URL.BOUNTIES_COMMENTS.replace('{bounty_id}', this.$route.params.id), {params:{offset:this.offsetComments, limit:CommonConst.API_PARAM.LIMIT_DEFAULT}}).then(response=>{
      if(response.data.length){
        this.offsetComments += CommonConst.API_PARAM.LIMIT_DEFAULT;
        this.bountyComments.push(...response.data)
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
<style lang="css" scoped>
  .wrapper{
    position: relative;
  }
  messageEntry{
    position: relative;
  }
</style>