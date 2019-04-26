<template>
	<div class="activityContents">
		<!-- プロフィール画像がある場合 -->
		<div v-if="profileImageUrl" class="profileIcon activityIcon" v-bind:style="{ 'background-image': 'url(' + profileImageUrl + ')' }"></div>
		<!-- プロフィール画像が無い場合 -->
		<div v-else class="profileIcon activityIcon" v-bind:style="{ 'background-image': 'url(/img/icon_blank.svg)'}"></div>
		<div class="activeText">
			<!-- 日付表示 -->
			<p v-show="date" class="date">{{date | formatDate}}</p>
			<!-- ランキング -->
			<div v-if="isRank==true">
				<img v-if="(rank < 21)" class="rankingIcon" :src="'/img/ranking_' + rank +'.svg'"><nuxt-link :to="'/artists/' + accountName">{{displayName}}</nuxt-link>
				<p v-html="$options.filters.newLine(description)" />
			</div>
			<!-- アクティビティ -->
			<div v-else-if="accountActionId">
				<p v-html="$options.filters.newLine(replaceDescription)"></p>
				<p v-if="isOwn==false"><a class="modal-syncer iineArea" data-target="modal-content-01" @click="pushLike('activity')"><img class="iconToolTip" src="~assets/img/heart_w.svg" >{{activityLikeCount | noneToZero | toLocaleString }}</a></p>
			</div>
			<!-- 参加者 -->
			<div v-else-if="isJoin==true">
				<nuxt-link :to="'/artists/' + accountName">{{displayName}}</nuxt-link>
			</div>
			<!-- チャット -->
			<div v-else-if="bountyCommentId">
				<nuxt-link :to="'/artists/' + accountName">{{displayName}}</nuxt-link>
				<p v-html="$options.filters.newLine(description)" v-linkified />
				<p><a class="modal-syncer  iineArea" data-target="modal-content-01" @click="pushLike('comment')"><img class="iconToolTip" src="~assets/img/heart_w.svg" >{{commentLikeCount | noneToZero | toLocaleString }}</a></p>
				<ReplyComment v-if="replyComment"
					:replyComment="replyComment"
				/>
				<div v-if="bountyCommentId" class="textRight">
					<a v-show="isMyComment" @click="removeComment()" class="delButton modal-syncer" data-target="modal-content-02">×</a>
					<a @click="replyOpen()" class="retuneButton" v-bind:class="{ disable: !canPostComment}">返信する</a>
				</div>
				<div v-show="isOpen" class="messageEntry">
					<textarea v-model="replyMessage" name="discription" rows="4" cols="30" placeholder="メッセージ" :disabled="!canPostComment"></textarea>
					<input class="submitButton" type="button" value="送信する" v-bind:class="{ disable: isProcessing || !canPostComment }" @click="addReplyComment(replyMessage, bountyCommentId)">
				</div>
			</div>
			<!-- フォロー・フォローワ -->
			<div v-else-if="isFovFol==true">
				<nuxt-link :to="'/artists/' + accountName">{{displayName}}</nuxt-link>
				<p v-html="$options.filters.newLine(description)" v-linkified/>
			</div>			
			<div v-else>
				<p v-html="$options.filters.newLine(description)" v-linkified/>
			</div>
      	</div>
		<ModalDialog
			v-if="showModalDialog"
			:imageUrl="dialogImageUrl"
			:messages="dialogMessage"
			@close="closeModalDialog()"
		/>
		<ModalDialogFreeFormat
			v-if="showModalDialogFreeFormat"
			:description="dialogFreeFormat"
			:yesButtionName="yesButtionNameFreeFormat"
			:noButtionName="noButtionNameFreeFormat"
			@closeModalDialogFreeFormatYes="closeModalDialogFreeFormatYes()"
			@closeModalDialogFreeFormatNo="closeModalDialogFreeFormatNo()"
		/>
	</div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import { Profile } from "~/types/models/Profile"
import { BountyComment } from "~/types/models/BountyComment"
import { CommonConst } from "~/types/CommonConst"
import { Bounty } from "~/types/models/Bounty"
import ReplyComment from "~/components/ReplyComment.vue"
import linkify from 'vue-linkify'
import ModalDialog from "~/components/ModalDialog.vue"
import ModalDialogFreeFormat from "~/components/ModalDialogFreeFormat.vue"

Vue.directive('linkified', linkify)

@Component({
	components: {
		ReplyComment,
		ModalDialog,
		ModalDialogFreeFormat
	},
	computed:{
		replaceDescription(){
			if(this.description){
				//TODO: 置換文字列のタグをアンカーリンク⇒nuxt-linkで表示できるようにする。
				//アンカーリンクでも対策済みのため実害はないが、画面遷移時のロードのサイクルが異なるため、nuxt-linkでの遷移を推奨する
				let artistsUrl:string = '/artists/' + this.replaceAccountName;
				let replaceArtist:string = '<a href="' + artistsUrl + '">' + this.replaceAccountDisplayName + '</a>';

				var replaceBounty:string = ''
				if(this.replaceBounty){
					let bountyUrl:string = '/bounties/' + this.replaceBounty.bountyId;
					replaceBounty = '<a href="' + bountyUrl + '">' + this.replaceBounty.bountyName + '</a>';
				}
				return this.description.replace("$AccountName",replaceArtist).replace("$BountyName", replaceBounty)
			}
			return this.description
		}
  }
})
export default class CardUser extends Vue {
	isOpen: boolean = false;
	replyMessage: string|null = null;
	@Prop() profileImageUrl: string
	@Prop() displayName: string
	@Prop() date?: string
	@Prop() accountName: string
	@Prop() description?: string
	@Prop() dialogProfileImageUrl: string
	@Prop() isOwn?: boolean;
	// チャット
	@Prop() bountyCommentId?: number
	@Prop() replyComment?: BountyComment
	@Prop() canPostComment?: boolean
	@Prop() commentLikeCount?: number
	@Prop() commentLikeQuantity?: number
	@Prop() commentAccountName?: number
	// アクティビティ
	@Prop() accountActionId?: number
	@Prop() replaceAccountName?: string
	@Prop() replaceAccountDisplayName?: string
	@Prop() replaceBounty?: Bounty
	@Prop() activityLikeCount?: number
	@Prop() activityLikeQuantity?: number
	// ランキング
	@Prop() isRank?: boolean
	@Prop() rank?: number
	// 参加者
	@Prop() isJoin?: boolean
	// フォロー・フォローワ
	@Prop() isFovFol?: boolean

	// イイネ情報
	likeApiUrl: string
	likeCount: number
	likeQuantity: number

	isProcessing: boolean = false;

	// ダイアログ用
	showModalDialog: boolean = false;
	dialogMessage: string[];

	// モーダルフリーフォーマット用
	showModalDialogFreeFormat: boolean = false;
	dialogFreeFormat: string; 
	modalFreeFormatEventType: string;
	yesButtionNameFreeFormat: string;
	noButtionNameFreeFormat: string;

	// イイネタイプ判定用
	likeType: string;
	
	replyOpen() {
		if(!this.canPostComment) return;
		this.isOpen = ! this.isOpen;
	}

	data(){
		//時コメント判定用
		var isMyComment: boolean = false;
		if(this.commentAccountName === this.$store.state.myProfile.accountName) {
			isMyComment = true;
		}
		return {
			isMyComment,
			// ダイアログテンプレート画像
			dialogImageUrl: CommonConst.TemplateImg.DIALOG_IMG_URL
		}
	}

	// コメント削除
	removeComment() {
		if (this.isProcessing || !this.canPostComment) return;
		this.isProcessing = true;

		// モーダル呼び出し
		this.openModalDialogFreeFormat(CommonConst.HELPER_MESSAGE.C032_FREE_MESSAGE_03,
									   CommonConst.HELPER_MESSAGE.C032_FREE_YES_BUTTON_NAME_03,
									   CommonConst.HELPER_MESSAGE.C032_FREE_NO_BUTTON_NAME_03,
									   'Remove')
	}

	async removeCommentRequest() {
		// アクセストークンの取得
    	var accessToken = await this.$msalWishHub.silentLogin();
    	await this.$store.dispatch('addAccessToken', accessToken);

		// コメント削除リクエスト
		this.$axios.post(CommonConst.API_URL.BOUNTIES_COMMENTS_REMOVE.replace('{bounty_id}', this.$route.params.id).replace('{bounty_comment_id}', String(this.bountyCommentId)))
		.then(Response => {
			// コメントの更新
			this.$emit('refreshComment');
			this.isProcessing = false;
		})
		.catch (error => {
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
			this.replyMessage = null;
			this.isOpen = false;
			this.isProcessing = false;
		});

	}
	// コメント返信
	async addReplyComment(replyMessage: string, bountyCommentId: number) {
		if (this.isProcessing || !this.canPostComment) return;
		this.isProcessing = true;

		// アクセストークンの取得
    	var accessToken = await this.$msalWishHub.silentLogin();
    	await this.$store.dispatch('addAccessToken', accessToken);

		const data = new FormData();
		if(replyMessage) {
			data.append('BountyId', this.$route.params.id);
			data.append('Comment', replyMessage);
			data.append('ReplyCommentId', String(bountyCommentId));
			await this.$axios.post(CommonConst.API_URL.BOUNTIES_COMMENTS.replace('{bounty_id}', this.$route.params.id), data)
			.then(() => {
				this.$emit('refreshComment');
				this.replyMessage = null;
				this.isOpen = false;
				this.isProcessing = false;
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
				this.replyMessage = null;
				this.isOpen = false;
				this.isProcessing = false;
			});
		} else {
			this.isProcessing = false;
		}
	}
	openModalDialog(dialogMessage){
		if(! dialogMessage) return;
		this.dialogMessage = dialogMessage;
		this.showModalDialog = true;
	}
	closeModalDialog(){
		this.showModalDialog = false;
	}
	// モーダル（フリーフォーマット）オープン
	openModalDialogFreeFormat(dialogFreeFormat: string, yesButtionName: string, noButtionName: string, eventType: string){
		this.dialogFreeFormat = dialogFreeFormat;
		this.yesButtionNameFreeFormat = yesButtionName;
		this.noButtionNameFreeFormat = noButtionName;
		this.showModalDialogFreeFormat = true;
		this.modalFreeFormatEventType = eventType;
	}

	// モーダル(フリーフォーマット)YES押下時
	closeModalDialogFreeFormatYes(){
		//TODO: イベント手動ハンドリングのため、もっとスマートな実装がないか検討する
		switch(this.modalFreeFormatEventType){
			case 'Like': // イイネ
				this.addLike();
				break;
			case 'Remove': // コメント削除
				this.removeCommentRequest();
				break;
		}
		this.showModalDialogFreeFormat = false;

	}
	// モーダル(フリーフォーマット)NO押下時
	closeModalDialogFreeFormatNo(){
		this.showModalDialogFreeFormat = false;
		this.isProcessing = false;
	}
	// いいね初回呼び出し
	pushLike(likeType:string){
		this.likeType = likeType;
		if(this.likeType === 'comment'){
			this.likeCount = this.commentLikeCount || 0;
			this.likeQuantity = this.commentLikeQuantity || 0;
		  	this.likeApiUrl = CommonConst.API_URL.BOUNTIES_COMMENTS_LIKE.replace('{bounty_id}', this.$route.params.id).replace('{bounty_comment_id}', String(this.bountyCommentId));
		} else if (this.likeType === 'activity'){
			this.likeCount = this.activityLikeCount || 0;
			this.likeQuantity = this.activityLikeQuantity || 0;
		  	this.likeApiUrl = CommonConst.API_URL.ACCOUNT_ACTIVITIES_LIKE.replace('{account_name}', this.$route.params.id).replace('{account_action_id}', String(this.accountActionId));
		}


		this.openModalDialogFreeFormat(CommonConst.HELPER_MESSAGE.C032_FREE_MESSAGE_01.replace('{likeQuantity}', String(this.likeQuantity)),
									   CommonConst.HELPER_MESSAGE.C032_FREE_YES_BUTTON_NAME_01,
									   CommonConst.HELPER_MESSAGE.C032_FREE_NO_BUTTON_NAME_01,
									   'Like')
	}
	// いいね連投用
	async addLike(){
		// アクセストークンの取得
    	var accessToken = await this.$msalWishHub.silentLogin();
		await this.$store.dispatch('addAccessToken', accessToken);
		await this.$axios.post(this.likeApiUrl)
			.then(response => {
				if(this.likeType === 'comment'){
					this.$emit('refreshComment');
				} else if (this.likeType === 'activity'){
					this.$emit('refreshActivity');
				}
				this.showModalDialogFreeFormat = false;
				// いいね継続確認
				this.openModalDialogFreeFormat(CommonConst.HELPER_MESSAGE.C032_FREE_MESSAGE_02.replace('{likeQuantity}', String(this.likeQuantity)).replace('{likeCount}', response.data.likeCount), 
											   CommonConst.HELPER_MESSAGE.C032_FREE_YES_BUTTON_NAME_01,
											   CommonConst.HELPER_MESSAGE.C032_FREE_NO_BUTTON_NAME_01,
											   'Like'
											   )
				this.isProcessing = false;
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
				this.isProcessing = false;
			});
	}
}
</script>