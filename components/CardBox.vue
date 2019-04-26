<template>
	<div class="itemCard">
		<!-- 背景画像がある場合 -->
		<div v-if="backgroundImageUrl" class="rewardImg" v-bind:style="{ 'background-image': 'url(' + backgroundImageUrl + ')'}"></div>
		<!-- 背景画像がない場合（バウンティ、バウンティアクション） -->
		<div v-else-if="bountyId" class="rewardImg"  v-bind:style="{ 'background-image': 'url(/img/project_blank.jpg)'}"></div>
		<!-- 背景画像がない場合（リワード：会員証）-->
		<div v-else-if="tokenTypeCode=='FAN'" class="rewardImg"  v-bind:style="{ 'background-image': 'url(/img/reward_common.jpg)'}"></div>
		<!-- 背景画像がない場合（リワード：その他）-->
		<div v-else-if="rewardId" class="rewardImg"  v-bind:style="{ 'background-image': 'url(/img/reward_blank.jpg)'}"></div>
		<div class="personalItemText">
			<!-- バウンティ -->
			<div v-show="bountyId">
				<nuxt-link :to="'/bounties/' + bountyId"><h4>{{titleName}}</h4></nuxt-link>
				<!-- アカウント情報 -->
				<div v-show="accountName">
					<!-- プロフィール画像がある場合 -->
					<div v-if="profileImageUrl" class="profileIcon activityIcon" v-bind:style="{ 'background-image': 'url(' + profileImageUrl + ')'}"></div>
					<!-- プロフィール画像が無い場合 -->
					<div v-else class="profileIcon activityIcon" v-bind:style="{ 'background-image': 'url(/img/icon_blank.svg)'}"></div>
					<div class="activeText">
						<nuxt-link :to="'/artists/' + accountName">{{displayName}}</nuxt-link>
					</div>
				</div>
				<!-- バウンティー詳細表示 -->
				<div v-if="bountyType">
					<div v-if="bountyStatsLink==true">
						<div v-show="bountyStatusShow==true" class="projectData"><p>ステータス：<a class="textPink" @click="allowPush('/account/my/bounties/create?bountyId=' + bountyId)">{{bountyStatsName}}</a></p></div>
					</div>
					<div v-else>
						<div v-show="bountyStatusShow==true" class="projectData"><p>ステータス：{{bountyStatsName}}</p></div>
					</div>
					<div class="projectData">
						<bountyType
						:bountyType="bountyType"
						/>
						<p><img class="cardIcon" src="~assets/img/icon_calencer.svg">残り：<span>{{participationEndDate | toDaysLeft}}日</span></p>
						<p v-if="(commentCount>0)"><img class="cardIcon" src="~assets/img/icon_chat_p.svg"><span>{{commentCount}} コメント</span></p>
						<div class="underLineGlay"/>
						<p><img class="cardIcon" src="~assets/img/icon_wip.svg"><span>{{quantity | toLocaleString | zeroToNone}} {{pointName | delete(quantity==0 || quantity==null) }}</span></p>
						<p><img class="cardIcon" src="~assets/img/icon_member.svg"><span>{{joinCount}}/{{participantLimit}}人</span></p>
						<div class="underLineGlay"/>
						<p v-html="$options.filters.newLine(description)" v-linkified/>
						<nuxt-link class="rewardButton" :to="'/bounties/' + bountyId">詳しくみる</nuxt-link>
					</div>
				</div>
				<!-- バウンティー詳細非表示 -->
				<div v-else>
					<div class="projetcData">
					<!-- バウンティアクション 有-->
						<div v-if="bountyActionNo">
							<!-- オーナかプロジェクトが終了したとき -->
							<p v-show="(isOwn==true || bountyCompleteStatus==1 || bountyCompleteStatus==2 )">{{ bountyActionActName }}数：<span>{{actionJoinCount | toLocaleString}}</span></p>
						</div>
					</div>
					<p v-html="$options.filters.newLine(description)" v-linkified/>
					<!-- バウンティアクション 有-->
					<div v-if="bountyActionNo">
						<!-- 参加済、 他、バウンティ参加条件がfalseの場合非活性-->
						<a v-if="(joinStatus==1 || bauntyCanJoin==false)" class="rewardButton joinButton disable">{{ bountyActionActName }}する</a>
						<!-- オーナー -->
						<a v-else-if="isOwn==true" class="rewardButton joinButton disable">{{ bountyActionActName }}する</a>
						<!-- 非オーナー かつ 未参加-->
						<a v-else class="rewardButton joinButton" v-bind:class="{ disable: isProcessing }" @click="addBountyActionJoin(bountyId, bountyActionNo)">{{ bountyActionActName }}する</a>
					</div>
					<!-- バウンティアクション 無-->
					<div v-else>
						<nuxt-link class="rewardButton" :to="'/bounties/' + bountyId">詳しくみる</nuxt-link>
					</div>
				</div>
			</div>
			<!-- リワード -->
			<div v-show="rewardId">
				<nuxt-link :to="'/rewards/' + rewardId"><h4>{{titleName}}</h4></nuxt-link>
				<div v-if="rewardStatsLink==true">
					<div v-show="rewardStatusShow==true" class="projectData"><p>ステータス：<a class="textPink" @click="allowPush('/account/my/rewards/create?rewardId=' + rewardId)">{{rewardStatsName}}</a></p></div>
				</div>
				<div v-else>
					<div v-show="rewardStatusShow==true" class="projectData"><p>ステータス：{{rewardStatsName}}</p></div>
				</div>
				<div class="projectData underLineGlay">
					<p class="fontBlack"><img class="cardIcon" src="~assets/img/icon_paypoint.svg"><span>{{exchangeRate | toLocaleString | zeroToNone}} {{pointName | delete(exchangeRate==0 || exchangeRate==null) }}</span></p>
					<p><img class="cardIcon" src="~assets/img/icon_item.svg"><span>{{ownQuantity | toLocaleString }} / {{quantity | toLocaleString }} 個</span></p>
					<p><img class="cardIcon" src="~assets/img/icon_calencer.svg"><span>{{exchangeEndDate | formatDateMmDd | nullToNone(' まで')}} </span></p>
				</div>
				<p v-html="$options.filters.newLine(description)"  v-linkified/>
				<div v-if="isEdit==true">
					<div v-show="rewardId" class="rewardButtonArea">
						<a @click="allowPush('/account/my/rewards/create?rewardId=' + rewardId)" class="rewardButton ChangeButton">編集する</a>
						<nuxt-link :to="'/rewards/' + rewardId" class="rewardButton" >詳しくみる</nuxt-link>
					</div>
				</div>
				<div v-if="isOwn==false">
					<div v-show="rewardId" class="rewardButtonArea">
						<a class="rewardButton ChangeButton" v-bind:class="{ disable: isProcessing || ownQuantity==0}" @click="exchangeReward(rewardId)">交換する</a>
						<nuxt-link v-show="isPreview==true" class="rewardButton" to="">詳しくみる</nuxt-link>
					</div>
				</div>
				<div v-else>
					<div v-show="rewardId">
						<nuxt-link v-show="isPreview==true" class="rewardButton" to="">詳しくみる</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<ModalThanks
			v-if="showModalThanks"
			:profileImageUrl="thanksProfileImageUrl"
			:thanksMessage="thanksMessage"
			@close="closeModal()"
		/>
		<ModalDialog
			v-if="showModalDialog"
			:imageUrl="dialogImageUrl"
			:messages="dialogMessage"
			@close="closeModalDialog()"
		/>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import { CommonConst } from "~/types/CommonConst"
import bountyType from "~/components/BountyType.vue"
import ModalThanks from "~/components/ModalThanks.vue"
import ModalDialog from "~/components/ModalDialog.vue"
import linkify from 'vue-linkify'
Vue.directive('linkified', linkify)

@Component({
	components: {
		bountyType,
		ModalThanks,
		ModalDialog
	}
})
export default class CardBox extends Vue {
	//共通
	@Prop() backgroundImageUrl: string
	@Prop() profileImageUrl?: string
	@Prop() accountName: string
	@Prop() displayName: string
	@Prop() titleName?: string
	@Prop() quantity?: number
	@Prop() description: string
	@Prop() isOwn: boolean
	@Prop() pointName: boolean
	@Prop() dialogProfileImageUrl: string
	@Prop() thanksProfileImageUrl: string
	@Prop() thanksMessage: string
	//バウンティ
	@Prop() bountyId?: number
	@Prop() bountyType?: string
	@Prop() participationEndDate?: string
	@Prop() joinCount?: number
	@Prop() participantLimit?: number
	@Prop() commentCount?:number
	//バウンティアクション
	@Prop() bountyActionNo?: number
	@Prop() joinStatus?: number
	@Prop() actionJoinCount: number
	@Prop() bountyStatusShow: boolean
	@Prop() bountyCompleteStatus?: number
	@Prop() bountyPublishStatus?: number
	@Prop() bountyCreateStatus?: number
	@Prop() bauntyCanJoin?: boolean
	@Prop() bountyTypeForAction?: string
	//リワード
	@Prop() rewardId?: number
	@Prop() exchangeRate?: number
	@Prop() ownQuantity?: number
	@Prop() tokenTypeCode?: string;
	@Prop() isEdit?: boolean
	@Prop() isPreview?: boolean
	@Prop() rewardStatusShow?: boolean
	@Prop() rewardPublishStatus?: number
	@Prop() rewardCreateStatus?: number
	@Prop() exchangeEndDate?: string
	
	isProcessing: boolean = false;
	showModalThanks:boolean = false;
	isBountyFull: boolean = false;
	
	// ダイアログ用
	showModalDialog: boolean = false;
	dialogMessage: string[];

	data (){
		// バウンティ満員チェック
		var isBountyFull:boolean = false;
		if(this.joinCount && this.participantLimit && Number(this.joinCount) >= Number(this.participantLimit)){
			isBountyFull = true;
		}
		// ステータスのチェック
		var bountyStatsName: string|null = null;
		// バウンティステータスチェック
		var bountyStatsLink:boolean = false;
		if(this.bountyCompleteStatus === 1) {
			bountyStatsName = '達成';
		} else if (this.bountyCompleteStatus === 2) {
			bountyStatsName = '終了';
		} else if (this.bountyPublishStatus === 1) {
			bountyStatsName = '公開中';
		} else if (this.bountyCreateStatus === 0){
			// 作成中の状態での非公開、
			bountyStatsName = '作成中';
		} else {
			// 作成完了の状態での非公開
			bountyStatsName = '非公開';
			bountyStatsLink = true;
		}

		// リワードステータスチェック
		var rewardStatsLink:boolean = false;
		var rewardStatsName: string|null = null;
		if(this.rewardPublishStatus === 1) {
			rewardStatsName = '公開中';
		} else if (this.rewardCreateStatus === 0){
			// 作成中の状態での非公開、
			rewardStatsName = '作成中';
		} else {
			// 作成完了の状態での非公開、
			rewardStatsName = '非公開';
			rewardStatsLink = true;
		}

		var bountyActionActName: string = '参加'
		// バウンティアクションボタン名
		if (this.bountyTypeForAction && this.bountyTypeForAction === 'Vote') {
			bountyActionActName = '投票'
		}
		return{
			isBountyFull,
			bountyStatsName,
			bountyStatsLink,
			rewardStatsName,
			rewardStatsLink,
			bountyActionActName,
			// ダイアログテンプレート画像
			dialogImageUrl: CommonConst.TemplateImg.DIALOG_IMG_URL
		}
	}
	
	// リワード交換
	async exchangeReward(rewardId) {
		if (this.isProcessing) return;

		// アクセストークンの取得
    	var accessToken = await this.$msalWishHub.silentLogin();
    	await this.$store.dispatch('addAccessToken', accessToken);

		this.isProcessing = true;
		const data = new FormData();
		data.append('RewardId', rewardId);
		await this.$axios.post(CommonConst.API_URL.REWARD_EXCHANGE.replace('{reward_id}', rewardId), data)
		.then(responce => {
			this.openModal();
			this.$emit('refreshReward');
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
		this.isProcessing = false;
	}
	async addBountyActionJoin(bountyId, bountyActionNo) {
		if (this.isProcessing) return;

		// アクセストークンの取得
    	var accessToken = await this.$msalWishHub.silentLogin();
    	await this.$store.dispatch('addAccessToken', accessToken);

		this.isProcessing = true;
		const data = new FormData();
		data.append('BountyId', bountyId);
		data.append('BountyActionNo', bountyActionNo);
		await this.$axios.post(CommonConst.API_URL.BOUNTIES_ACTIONS_JOIN.replace('{bounty_id}', bountyId).replace('{bounty_action_no}', bountyActionNo), data)
		.then(response => {
			this.openModal();
			this.$emit('refreshJoin');
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
		this.isProcessing = false;
	}
	// 遷移許可
	allowPush(url: string){
		this.$store.dispatch('transitionAllow').then(() => {
			this.$router.push(url);
		})
	}
	openModal(){
    	this.showModalThanks = true;
  	}
  	closeModal(){
    	this.showModalThanks = false;
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