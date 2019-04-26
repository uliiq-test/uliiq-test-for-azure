
<template>
	<div>
		<!-- 画像がアップロードされた場合 -->
		<div v-if="previewBountyImage">
				<label for="fileBountyImage">
						<div class="mainVisual myPage" v-bind:style="{ 'background-image': 'url(' + previewBountyImage + ')' }">
							<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
						</div>
				</label>
		</div>
		<!-- 画像が既に設定済みの場合 -->
		<div v-else-if="bounty.bountyImageUrl">
			<label for="fileBountyImage">
				<div class="mainVisual myPage" v-bind:style="{ 'background-image': 'url(' + bounty.bountyImageUrl + ')' }">
					<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
				</div>
			</label>
		</div>
		<!-- 画像未アップロード、バウンティ未設定の場合 -->
		<div v-else>
			<label for="fileBountyImage">
				<div class="mainVisual myPage bounty1 editImage">
					<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
				</div>
			</label>
		</div>
		<!-- 背景画像選択ボタン -->
		<input type="file" id="fileBountyImage" name="fileBountyImage" @change="onFileChangeBountyImage($event)" style="display:none" :disabled="isComplete">
		<div class="container">
			<div class="profileEdit">
				<div class="entry">プロジェクトタイプ<span class="caution"> *</span><span><a class="modal-syncer button-link" data-target="modal-content-01" @click="openModalHelp(helpTitle01, helpMessage01)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span>
					<div
						class="genderSelect select01"
						:class="{'has-error': errors.has('project_type')}"
					>
						<select 
							v-model="bounty.bountyType"
							name="project_type"
							v-validate="'required'"
							data-vv-validate-on="blur"
							data-vv-as="プロジェクトタイプ"
							@change="onBountyTypeChange(bounty.bountyType, false)" :disabled="isComplete || isPublish"
						>
							<option v-for="bountyType in bountyTypes"
									:key="bountyType.type"
									:value="bountyType.type"
							>
									{{ bountyType.description }}
							</option>
						</select>
					</div>
					<div class="name validate has-error-font" v-if="errors.has('project_type')">
            {{ errors.first('project_type') }}
          </div>
				</div>
				<div class="entry">
					プロジェクトタイトル<span class="caution"> *</span><br>
					<input
						v-model="bounty.bountyName"
						class="name"
						type="text"
						name="project_title"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="プロジェクトタイトル"
						:class="{'has-error': errors.has('project_title')}"
						placeholder="プロジェクトタイトル"
						@change="inputChange()"
						:disabled="isComplete"
					>
					<div class="name validate has-error-font" v-if="errors.has('project_title')">
            {{ errors.first('project_title') }}
          </div>
				</div>
				<div class="entry">
					プロジェクト説明<span class="caution"> *</span><br><br>
					<textarea
						v-model="bounty.description"
						name="project_discription"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="プロジェクト説明"
						:class="{'has-error': errors.has('project_discription')}"
						rows="4"
						cols="40"
						placeholder="プロジェクト説明"
						@change="inputChange()"
						:disabled="isComplete"
					/>
					<div class="name validate has-error-font" v-if="errors.has('project_discription')">
            {{ errors.first('project_discription') }}
          </div>
				</div>
				<div class="entry">
					応募期間<span class="caution"> *</span><span><a class="modal-syncer button-link" data-target="modal-content-02"  @click="openModalHelp(helpTitle02, helpMessage02)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span><br>
					<input
						v-model="bounty.participationEndDate"
						class="name"
						type="date"
						name="project_days"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="応募期間"
						:class="{'has-error': errors.has('project_days')}"
						placeholder="募集期間"
						@change="inputChange()"
						:disabled="isComplete"
					>
					<div class="name validate has-error-font" v-if="errors.has('project_days')">
            {{ errors.first('project_days') }}
          </div>
				</div>
				<div class="entry">
					募集人数<span class="caution"> *</span><span><a class="modal-syncer button-link" data-target="modal-content-03" @click="openModalHelp(helpTitle03, helpMessage03)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span><br>
					<input
						v-model="bounty.participantLimit"
						class="name"
						type="number"
						name="project_numbers"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="募集人数"
						:class="{'has-error': errors.has('project_numbers')}"
						placeholder="募集人数"
						:disabled="isPublish || isComplete"
						@change="inputChange()"
					>
					<div class="name validate has-error-font" v-if="errors.has('project_numbers')">
            {{ errors.first('project_numbers') }}
          </div>
				</div>
				<div class="entry">
					報酬ポイント（wip）<span class="caution"> *</span><span><a class="modal-syncer button-link" data-target="modal-content-04" @click="openModalHelp(helpTitle04, helpMessage04)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span><br>
					<input
						v-model="bounty.quantity"
						class="name"
						type="number"
						name="project_total_token"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="報酬ポイント"
						:class="{'has-error': errors.has('project_total_token')}"
						placeholder="報酬ポイント"
						:disabled="isPublish || isComplete"
						@change="inputChange()"
					>
					<div class="name validate has-error-font" v-if="errors.has('project_total_token')">
            {{ errors.first('project_total_token') }}
          </div>
				</div>
				<h3>アクション1設定<span><a class="modal-syncer button-link" data-target="modal-content-05" @click="openModalHelp(helpTitle05, helpMessage05)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span></h3>
        <!-- 画像がアップロードされた場合 -->
        <div v-if="previewBountyActionImage1">
            <label for="fileBountyActionImage1">
                <div class="mainVisual myPage bounty1 editImage" v-bind:style="{ 'background-image': 'url(' + previewBountyActionImage1 + ')' }">
									<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
								</div>
            </label>
        </div>
				<!-- プロフィール設定済みの場合 -->
				<div v-else-if="bountyAction1.bountyActionImageUrl">
					<label for="fileBountyActionImage1">
						<div class="mainVisual myPage bounty1 editImage" v-bind:style="{ 'background-image': 'url(' + bountyAction1.bountyActionImageUrl + ')' }">
							<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
						</div>
					</label>
				</div>
        <!-- 画像未アップロード、バウンティ未設定の場合 -->
				<div v-else>
					<label for="fileBountyActionImage1">
						<div class="mainVisual myPage bounty1 editImage">
							<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
						</div>
					</label>
				</div>
        <!-- 選択ボタン -->
        <input type="file" id="fileBountyActionImage1" name="fileBountyActionImage1" @change="onFileChangeBountyActionImage1($event)" style="display:none" :disabled="isComplete">
				<div class="entry">アクションタイプ<span class="caution"> *</span><span><a class="modal-syncer button-link" data-target="modal-content-06" @click="openModalHelp(helpTitle06, helpMessage06)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span>
					<div
						class="genderSelect select01"
						:class="{'has-error': errors.has('project_action_type1')}"
					>
						<select
							v-model="bountyAction1.bountyActionType"
							name="project_action_type1"
							v-validate="'required'"
							data-vv-validate-on="blur"
							data-vv-as="アクションタイプ"
							:disabled="isComplete || isPublish"
						>
							<option v-for="bountyActionType in bountyActionTypes"
									:key="bountyActionType.actionType"
									:value="bountyActionType.actionType"
							>
									{{ bountyActionType.description }}
							</option>
						</select>
					</div>
					<div class="name validate has-error-font" v-if="errors.has('project_action_type1')">
            {{ errors.first('project_action_type1') }}
				</div>
				</div>
				<div class="entry">
					アクションタイトル<span class="caution"> *</span><br>
					<input
						v-model="bountyAction1.bountyActionName"
						class="name"
						type="text"
						name="project_action_titles1"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="アクションタイトル"
						:class="{'has-error': errors.has('project_action_titles1')}"
						placeholder="アクションタイトル"
						@change="inputChange()"
						:disabled="isComplete"
					>
					<div class="name validate has-error-font" v-if="errors.has('project_action_titles1')">
            {{ errors.first('project_action_titles1') }}
          </div>
				</div>
				<div class="entry">アクション説明<span class="caution"> *</span><br>
					<textarea
						v-model="bountyAction1.description"
						name="project_action_discription1"
						v-validate="'required'"
						data-vv-validate-on="blur"
						data-vv-as="アクション説明"
						:class="{'has-error': errors.has('project_action_discription1')}"
						rows="4"
						cols="40"
						placeholder="プロジェクト説明"
						@change="inputChange()"
						:disabled="isComplete"
					/>
					<div class="name validate has-error-font" v-if="errors.has('project_action_discription1')">
            {{ errors.first('project_action_discription1') }}
          </div>
				</div>

				<h3>アクション2設定</h3>
				<div class="hidden_box">
    		<input type="checkbox" id="label1" v-model="isActivBountyAction2"/><label for="label1">アクション2を設定する</label>
				<div class="hidden_show">
					<div v-if="isActivBountyAction2">
						<!-- 画像がアップロードされた場合 -->
						<div v-if="previewBountyActionImage2">
								<label for="fileBountyActionImage2">
										<div class="mainVisual myPage bounty2 editImage" v-bind:style="{ 'background-image': 'url(' + previewBountyActionImage2 + ')' }">
											<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
										</div>
								</label>
						</div>
						<!-- プロフィール設定済みの場合 -->
						<div v-else-if="bountyAction2.bountyActionImageUrl">
							<label for="fileBountyActionImage2">
								<div class="mainVisual myPage bounty2 editImage" v-bind:style="{ 'background-image': 'url(' + bountyAction2.bountyActionImageUrl + ')' }">
									<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
								</div>
							</label>
						</div>
						<!-- 画像未アップロード、バウンティ未設定の場合 -->
						<div v-else>
							<label for="fileBountyActionImage2">
								<div class="mainVisual myPage bounty2 editImage">
									<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
								</div>
							</label>
						</div>
						<!-- 選択ボタン -->
						<input type="file" id="fileBountyActionImage2" name="fileBountyActionImage2" @change="onFileChangeBountyActionImage2($event)" style="display:none" :disabled="isComplete">
						<div class="entry">アクションタイプ<span class="caution"> *</span>
							<div
								class="genderSelect select01"
								:class="{'has-error': errors.has('project_action_type2')}"
							>
								<select
									v-model="bountyAction2.bountyActionType"
									name="project_action_type2"
									v-validate="'required'"
									data-vv-validate-on="blur"
									data-vv-as="アクションタイプ"
									@change="inputChange()"
									:disabled="isComplete || isPublish"
								>
									<option v-for="bountyActionType in bountyActionTypes"
											:key="bountyActionType.actionType"
											:value="bountyActionType.actionType"
									>
											{{ bountyActionType.description }}
									</option>
								</select>
							</div>
							<div class="name validate has-error-font" v-if="errors.has('project_action_type2')">
								{{ errors.first('project_action_type2') }}
							</div>
						</div>
						<div class="entry">
							アクションタイトル<span class="caution"> *</span><br>
							<input
								v-model="bountyAction2.bountyActionName"
								class="name"
								type="text"
								name="project_action_titles2"
								v-validate="'required'"
								data-vv-validate-on="blur"
								data-vv-as="アクションタイトル"
								:class="{'has-error': errors.has('project_action_titles2')}"
								placeholder="アクションタイトル"
								@change="inputChange()"
								:disabled="isComplete"
							>
							<div class="name validate has-error-font" v-if="errors.has('project_action_titles2')">
								{{ errors.first('project_action_titles2') }}
							</div>
						</div>

						<div class="entry">アクション説明<span class="caution"> *</span><br>
							<textarea
								v-model="bountyAction2.description"
								name="project_action_discription2"
								v-validate="'required'"
								data-vv-validate-on="blur"
								data-vv-as="アクション説明"
								:class="{'has-error': errors.has('project_action_discription2')}"
								rows="4"
								cols="40"
								placeholder="アクション説明"
								@change="inputChange()"
								:disabled="isComplete"
							/>
							<div class="name validate has-error-font" v-if="errors.has('project_action_discription2')">
								{{ errors.first('project_action_discription2') }}
							</div>
						</div>
					</div>
				</div>
			</div>

			<h3>アクション3設定</h3>
			<div class="hidden_box2">
			<input type="checkbox" id="label2"  v-model="isActivBountyAction3"/><label for="label2">アクション3を設定する</label>
			<div class="hidden_show2">
				<div v-if="isActivBountyAction3">
					<!-- 画像がアップロードされた場合 -->
					<div v-if="previewBountyActionImage3">
							<label for="fileBountyActionImage3">
									<div class="mainVisual myPage bounty3 editImage" v-bind:style="{ 'background-image': 'url(' + previewBountyActionImage3 + ')' }">
										<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
									</div>
							</label>
					</div>
					<!-- プロフィール設定済みの場合 -->
					<div v-else-if="bountyAction3.bountyActionImageUrl">
						<label for="fileBountyActionImage3">
							<div class="mainVisual myPage bounty3 editImage" v-bind:style="{ 'background-image': 'url(' + bountyAction3.bountyActionImageUrl + ')' }">
								<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
							</div>
						</label>
					</div>
					<!-- 画像未アップロード、バウンティ未設定の場合 -->
					<div v-else>
						<label for="fileBountyActionImage3">
							<div class="mainVisual myPage bounty3 editImage">
								<img class="mainVisualImg" src="~assets/img/photoUploads.svg">
							</div>
						</label>
					</div>
					<!-- 選択ボタン -->
					<input type="file" id="fileBountyActionImage3" name="fileBountyActionImage3" @change="onFileChangeBountyActionImage3($event)" style="display:none" :disabled="isComplete">


					<div class="entry">アクションタイプ<span class="caution"> *</span>
						<div
							class="genderSelect select01"
							:class="{'has-error': errors.has('project_action_type3')}"
						>
							<select
								v-model="bountyAction3.bountyActionType"
								name="project_action_type3"
								v-validate="'required'"
								data-vv-validate-on="blur"
								data-vv-as="アクションタイプ"
								@change="inputChange()"
								:disabled="isComplete || isPublish"
							>
								<option v-for="bountyActionType in bountyActionTypes"
										:key="bountyActionType.actionType"
										:value="bountyActionType.actionType"
								>
										{{ bountyActionType.description }}
								</option>
							</select>
						</div>
						<div class="name validate has-error-font" v-if="errors.has('project_action_type3')">
							{{ errors.first('project_action_type3') }}
					</div>
					</div>
					<div class="entry">
						アクションタイトル<span class="caution"> *</span><br>
						<input
							v-model="bountyAction3.bountyActionName"
							class="name"
							type="text"
							name="project_action_titles3"
							v-validate="'required'"
							data-vv-validate-on="blur"
							data-vv-as="アクションタイトル"
							:class="{'has-error': errors.has('project_action_titles3')}"
							placeholder="アクションタイトル"
							@change="inputChange()"
							:disabled="isComplete"
						>
						<div class="name validate has-error-font" v-if="errors.has('project_action_titles3')">
							{{ errors.first('project_action_titles3') }}
						</div>
					</div>

					<div class="entry">アクション説明<span class="caution"> *</span><br>
						<textarea
							v-model="bountyAction3.description"
							name="project_action_discription3"
							v-validate="'required'"
							data-vv-validate-on="blur"
							data-vv-as="アクション説明"
							:class="{'has-error': errors.has('project_action_discription3')}"
							rows="4"
							cols="40"
							placeholder="アクション説明"
							@change="inputChange()"
							:disabled="isComplete"
						/>
						<div class="name validate has-error-font" v-if="errors.has('project_action_discription3')">
							{{ errors.first('project_action_discription3') }}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="entry">参加のお礼メッセージ<span class="caution"> *</span><span><a class="modal-syncer button-link" data-target="modal-content-07" @click="openModalHelp(helpTitle07, helpMessage07)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span><br>
			<textarea
				v-model="bounty.thanksMessage"
				name="project_thanks"
				v-validate="'required'"
				data-vv-validate-on="blur"
				data-vv-as="参加のお礼メッセージ"
				:class="{'has-error': errors.has('project_thanks')}"
				rows="4"
				cols="40"
				placeholder="参加のお礼メッセージ"
				@change="inputChange()"
				:disabled="isComplete"
			/>
			<div class="name validate has-error-font" v-if="errors.has('project_thanks')">
				{{ errors.first('project_thanks') }}
			</div>
		</div>

			<div v-if="publishStatusSaving == 1">
				<div class="entry">ステータス<span><a class="modal-syncer button-link" data-target="modal-content-08" @click="openModalHelp(helpTitle08, helpMessage08)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span>
					<div
						class="genderSelect select01"
					>
						<select
							v-model="bounty.completeStatus"
							name="status_type"
							@change="inputChange()"
							:disabled="isComplete"
						>
							<option value=1>達成</option>
							<option value=2>未達成</option>
						</select>
					</div>
				</div>
				<div class="entry">完了コメント<span><a class="modal-syncer button-link" data-target="modal-content-09" @click="openModalHelp(helpTitle09, helpMessage09)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span>
					<textarea
						v-model="bounty.completedCommet"
						name="end_comment"
						rows="4"
						cols="40"
						placeholder="完了コメント"
						@change="inputChange()"
						:disabled="isComplete"
					/>
				</div>
			</div>
			<div class="entry">プロジェクトのステータス<span class="caution"> *</span><span><a class="modal-syncer button-link" data-target="modal-content-10" @click="openModalHelp(helpTitle10, helpMessage10)"><img class="iconToolTip" src="~assets/img/icon_hatena.svg"></a></span></div>
				<div class="entry">
					<fieldset>
					<input id="item-1" class="radio-inline__input" type="radio" name="accessible-radio" value=0 v-model="bounty.publishStatus" @change="inputChange()">
						<label class="radio-inline__label buttonLeft" for="item-1">
							非公開
						</label>
					<input id="item-2" class="radio-inline__input" type="radio" name="accessible-radio" value=1 v-model="bounty.publishStatus" @change="inputChange()">
						<label class="radio-inline__label buttonRight" for="item-2" @click="openModalDialogFreeFormat(freeMessage01)">
							公開
						</label>
					</fieldset>
				</div>
				<P><span class="caution"> * </span>は必須事項</p>
				<!--サーバーエラー-->
				<div v-for="(error, index) in errorList" class="text-center has-error-font" :key="index">
          {{error}}
        </div>
					<div class="submitButtonArea">
						<div>
							<a ><input class="rewardButton save" type="button" value="保存する" v-bind:class="{ disable: isProcessing || isComplete}" @click="addBounty(bounty, bountyAction1, bountyAction2, bountyAction3)"></a>
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
			<ModalDialogFreeFormat
				v-if="showModalDialogFreeFormat"
				:description="dialogFreeFormat"
				yesButtionName="OK"
				@closeModalDialogFreeFormatYes="closeModalDialogFreeFormatYes()"
			/>
			<ModalHelp
				v-if="showModalHelp"
				:title="helpTitle"
				:description="helpMessage"
				@closeModalHelp="closeModalHelp()"
			/>
	</div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from "nuxt-property-decorator";
  import { CommonConst } from "~/types/CommonConst";
  import { Profile } from "~/types/models/Profile";
  import { Bounty } from "~/types/models/Bounty";
  import { BountyAction } from "~/types/models/BountyAction";
	import { BountyType } from "~/types/models/BountyType";
	import { BountyActionType } from "~/types/models/BountyActionType";
	import ModalDialog from "~/components/ModalDialog.vue"
	import ModalDialogFreeFormat from "~/components/ModalDialogFreeFormat.vue"
	import ModalHelp from "~/components/ModalHelp.vue"

@Component({
	components:{
		ModalDialog,
		ModalHelp,
		ModalDialogFreeFormat
	}
})
export default class extends Vue {

	bountyId: number|null = null;
	previewBountyImage:string|null;
	previewBountyActionImage1:string|null;
	previewBountyActionImage2:string|null;
	previewBountyActionImage3:string|null;
	previewImage:string|null;
	bounty:Bounty;
	bountyAction1:BountyAction;
	bountyAction2:BountyAction;
	bountyAction3:BountyAction;
  image:File|null;
	bountyImage:File|null;
	bountyActionImage1:File|null;
	bountyActionImage2:File|null;
	bountyActionImage3:File|null;
	bountyActionTypes:BountyActionType[]|null;
	isActivBountyAction2:boolean;
	isActivBountyAction3:boolean;
	// 処理中
	isProcessing: boolean = true;
	// 公開中
	isPublish: boolean = false;
	// 達成済
	isComplete: boolean = false;

	// ダイアログ用
	showModalDialog: boolean = false;
	dialogMessage: string[];
	showModalDialogFreeFormat: boolean = false;
	dialogFreeFormat: string; 
	// ヘルプダイアログ
	showModalHelp: boolean = false;
	helpTitle: string;
	helpMessage: string;

  //サーバーエラー
	errorList: string[] = [];

	@Watch('$route')
		// ルートが変更された場合
		onRouteChange (to, from) {
			// 初期化
			this.bounty = { "account" : null, "bountyId" : null, "bountyName" : null, "bountyType" : null, "description" : null, "tokenId" : null, "quantity" : null, "participationEndDate" : null, "publishStatus" : 0, "participantLimit" : null, "bountyImage" : null, "bountyImageUrl" : null, "thanksMessage" : null, "clientCode" : null, "completeStatus" : null, "completedCommet" : null, "credentialId" : null, "joinCount":null, "createStatus":null, "canPostComment":null, "commentCount":null};
			this.bountyAction1 = {"account":null,"bountyId":null,"bountyActionId":null,"bountyActionNo":null,"bountyActionName":null,"bountyActionType":null,"description":null,"bountyActionImage":null,"bountyActionImageUrl":null,"clientCode":null,"credentialId":null, "joinCount":null};
			this.bountyAction2 = {"account":null,"bountyId":null,"bountyActionId":null,"bountyActionNo":null,"bountyActionName":null,"bountyActionType":null,"description":null,"bountyActionImage":null,"bountyActionImageUrl":null,"clientCode":null,"credentialId":null, "joinCount":null};
			this.bountyAction3 = {"account":null,"bountyId":null,"bountyActionId":null,"bountyActionNo":null,"bountyActionName":null,"bountyActionType":null,"description":null,"bountyActionImage":null,"bountyActionImageUrl":null,"clientCode":null,"credentialId":null, "joinCount":null};
			this.isPublish = false;
			this.isComplete = false;
			this.bountyId = null;
			this.previewBountyImage = null;
			this.previewBountyActionImage1 = null;
			this.previewBountyActionImage2 = null;
			this.previewBountyActionImage3 = null;
			this.isActivBountyAction2 = false;
			this.isActivBountyAction3 = false;
	}


  async asyncData ( { app, route } ){
		// TODO:もっといい初期化の方法がないか検討
		var previewBountyImage: string|null = null;
		var previewBountyActionImage1: string|null = null;
		var previewBountyActionImage2: string|null = null;
		var previewBountyActionImage3: string|null = null;
		var isActivBountyAction2 = false;
		var isActivBountyAction3 = false;
		var bounty:Bounty = { "account" : null, "bountyId" : null, "bountyName" : null, "bountyType" : null, "description" : null, "tokenId" : null, "quantity" : null, "participationEndDate" : null, "publishStatus" : 0, "participantLimit" : null, "bountyImage" : null, "bountyImageUrl" : null, "thanksMessage" : null, "clientCode" : null, "completeStatus" : null, "completedCommet" : null, "credentialId" : null, "joinCount":null, "createStatus":null, "canPostComment":null, "commentCount":null};
		var bountyActions:BountyAction[];
		var bountyAction1:BountyAction = {"account":null,"bountyId":null,"bountyActionId":null,"bountyActionNo":null,"bountyActionName":null,"bountyActionType":null,"description":null,"bountyActionImage":null,"bountyActionImageUrl":null,"clientCode":null,"credentialId":null, "joinCount":null};
		var bountyAction2:BountyAction = {"account":null,"bountyId":null,"bountyActionId":null,"bountyActionNo":null,"bountyActionName":null,"bountyActionType":null,"description":null,"bountyActionImage":null,"bountyActionImageUrl":null,"clientCode":null,"credentialId":null, "joinCount":null};
		var bountyAction3:BountyAction = {"account":null,"bountyId":null,"bountyActionId":null,"bountyActionNo":null,"bountyActionName":null,"bountyActionType":null,"description":null,"bountyActionImage":null,"bountyActionImageUrl":null,"clientCode":null,"credentialId":null, "joinCount":null};
		var bountyActionTypes:BountyActionType[] = [{ "actionType":null ,"bountyType":null,"bountyActionTypeName":null,"description":null,"active":null,"createDateTime":null,"updateDateTime":null }];
		const bountyTypes:BountyType[] = await app.$axios.$get(CommonConst.API_URL.BOUNTIES_TYPE)
		var isPublish: boolean = false;
		var isComplete: boolean = false;
		var publishStatusSaving:number|null;

		if(route.query.bountyId){
			bounty = await app.$axios.$get(CommonConst.API_URL.MY_BOUNTIES + '/' + route.query.bountyId);
			bountyActions = await app.$axios.$get(CommonConst.API_URL.BOUNTIES_ACTIONS.replace('{bounty_id}',route.query.bountyId));
			for(let bountyAction of bountyActions){
				if(bountyAction.bountyActionNo === 1){
					bountyAction1 = bountyAction
				} else if (bountyAction.bountyActionNo === 2) {
					bountyAction2	= bountyAction
					isActivBountyAction2 = true;
				} else if (bountyAction.bountyActionNo === 3) {
					bountyAction3 = bountyAction
					isActivBountyAction3 = true;
				}
			}
			// 日付のフォーマット変更
      if(bounty.participationEndDate){
        let participationEndDate: string = bounty.participationEndDate;
        bounty.participationEndDate = participationEndDate.substring(0, 4) + '-' + participationEndDate.substring(4, 6) + '-' + participationEndDate.substring(6, 8);
      }      
			// 公開ステータスチェック
			if(bounty.publishStatus === 1){
				isPublish = true;
			}
			// 完了ステータスチェック
			if(bounty.completeStatus === 1){
				isComplete = true;
			}
		}
		// バウンティタイプが設定されている場合はバウンティアクションタイプを取得
		if(bounty.bountyType) {
			bountyActionTypes = await app.$axios.get(CommonConst.API_URL.BOUNTIES_ACTIONTYPE.replace('{bounty_type}', bounty.bountyType));
		}
		// ページ遷移時の公開ステータスを取得
		publishStatusSaving = bounty.publishStatus
    return {
			bountyTypes,
			bountyActionTypes,
			bounty,
			bountyAction1,
			bountyAction2,
			bountyAction3,
			isPublish,
			isComplete,
			previewBountyImage,
			previewBountyActionImage1,
			previewBountyActionImage2,
			previewBountyActionImage3,
			isActivBountyAction2,
			isActivBountyAction3,
			// ヘルパーメッセージ
			helpTitle01: CommonConst.HELPER_MESSAGE.M032_TITLE_01,
			helpMessage01: CommonConst.HELPER_MESSAGE.M032_MESSAGE_01,
			helpTitle02: CommonConst.HELPER_MESSAGE.M032_TITLE_02,
			helpMessage02: CommonConst.HELPER_MESSAGE.M032_MESSAGE_02,
			helpTitle03: CommonConst.HELPER_MESSAGE.M032_TITLE_03,
			helpMessage03: CommonConst.HELPER_MESSAGE.M032_MESSAGE_03,
			helpTitle04: CommonConst.HELPER_MESSAGE.M032_TITLE_04,
			helpMessage04: CommonConst.HELPER_MESSAGE.M032_MESSAGE_04,
			helpTitle05: CommonConst.HELPER_MESSAGE.M032_TITLE_05,
			helpMessage05: CommonConst.HELPER_MESSAGE.M032_MESSAGE_05,
			helpTitle06: CommonConst.HELPER_MESSAGE.M032_TITLE_06,
			helpMessage06: CommonConst.HELPER_MESSAGE.M032_MESSAGE_06,
			helpTitle07: CommonConst.HELPER_MESSAGE.M032_TITLE_07,
			helpMessage07: CommonConst.HELPER_MESSAGE.M032_MESSAGE_07,
			helpTitle08: CommonConst.HELPER_MESSAGE.M032_TITLE_08,
			helpMessage08: CommonConst.HELPER_MESSAGE.M032_MESSAGE_08,
			helpTitle09: CommonConst.HELPER_MESSAGE.M032_TITLE_09,
			helpMessage09: CommonConst.HELPER_MESSAGE.M032_MESSAGE_09,
			helpTitle10: CommonConst.HELPER_MESSAGE.M032_TITLE_10,
			helpMessage10: CommonConst.HELPER_MESSAGE.M032_MESSAGE_10,
			// ダイアログ（フリーフォーマット用）
			freeMessage01: CommonConst.HELPER_MESSAGE.M032_FREE_MESSAGE_01,
			// ダイアログ テンプレート画像
			dialogImageUrl: CommonConst.TemplateImg.DIALOG_IMG_URL,
			// ページ遷移時の公開ステータス
			publishStatusSaving
    }
	}
	mounted() {
    this.$nextTick(() => {
      this.onBountyTypeChange(this.bounty.bountyType, true);
    })
  }
  onFileChangeBountyImage (e){
    var file = e.target.files[0];
    if(file && file.type.match(/^image\/(png|jpeg)$/)){
      this.bountyImage = file;
      this.previewBountyImage = URL.createObjectURL(file);
			this.$forceUpdate();
			this.inputChange();
    }
	}
  onFileChangeBountyActionImage1 (e){
    var file = e.target.files[0];
    if(file && file.type.match(/^image\/(png|jpeg)$/)){
      this.bountyActionImage1 = file;
      this.previewBountyActionImage1 = URL.createObjectURL(file);
			this.$forceUpdate();
			this.inputChange();
    }
	}
  onFileChangeBountyActionImage2 (e){
    var file = e.target.files[0];
    if(file && file.type.match(/^image\/(png|jpeg)$/)){
      this.bountyActionImage2 = file;
      this.previewBountyActionImage2 = URL.createObjectURL(file);
			this.$forceUpdate();
			this.inputChange();
    }
	}
  onFileChangeBountyActionImage3 (e){
    var file = e.target.files[0];
    if(file && file.type.match(/^image\/(png|jpeg)$/)){
      this.bountyActionImage3 = file;
      this.previewBountyActionImage3 = URL.createObjectURL(file);
			this.$forceUpdate();
			this.inputChange();
    }
  }
	onBountyTypeChange (bountyType, isInit){
		this.$axios.get(CommonConst.API_URL.BOUNTIES_ACTIONTYPE.replace('{bounty_type}', bountyType))
		.then(responce => {
			this.bountyActionTypes = responce.data
		})
		.catch(error => {
			console.log(error);
		});
		// 初期表示時は変更無しとして扱うため、inputChangeメソッドは呼び出さない。
		if(!isInit){
			this.inputChange();
		}
	}
	inputChange (){
		this.isProcessing = false;
	}
  async addBounty(bounty, bountyAction1, bountyAction2, bountyAction3) {
		if (this.isProcessing) return;

		// アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
    await this.$store.dispatch('addAccessToken', accessToken);

		this.isProcessing = true;

		//バリデーションの結果を変数に格納
    let isValidate = await this.$validator.validateAll().then((response) => {
        return response;
      })
    
    //入力項目に異常があればアラートを出す
    if(!isValidate){
			this.openModalDialog(CommonConst.MESSAGE.ERR_INPUT);
			this.isProcessing = false;
      return;
		}

		//エラーがなければリセット
		this.errorList = [];
		
		const data = new FormData();
		if(bounty.bountyId) {
       data.append('BountyId', bounty.bountyId);
    };
    if(bounty.bountyType) {
       data.append('BountyType', bounty.bountyType);
    };
    if(bounty.bountyName) {
      data.append('bountyName', bounty.bountyName);
    };
    if(bounty.description) {
      data.append('Description', bounty.description);
    };
    if(bounty.participationEndDate) {
			 let participationEndDate: string = bounty.participationEndDate
      data.append('ParticipationEndDate', participationEndDate.replace(/-/g,''));
    };
    if(bounty.participantLimit) {    
      data.append('ParticipantLimit', bounty.participantLimit);
    };
    if(bounty.quantity) {    
      data.append('Quantity', bounty.quantity);
    };
    if(this.bountyImage) {    
      data.append('BountyImage', this.bountyImage);
    };
    if(bounty.thanksMessage) {    
      data.append('ThanksMessage', bounty.thanksMessage);
    };
    if(bounty.publishStatus) {    
      data.append('PublishStatus', bounty.publishStatus);
    };
    if(bounty.completeStatus) {    
      data.append('CompleteStatus', bounty.completeStatus);
		};
		if(bounty.completedCommet) {
      data.append('CompletedCommet', bounty.completedCommet);
		};
		await this.$axios.post(CommonConst.API_URL.BOUNTIES, data)
		.then(async responce => {
			// 単項目精査エラー後の再リクエストでバウンティ新規登録ではなく更新となるようにbountyを更新する。
			this.bounty = responce.data;
			var result1: BountyAction|null;
			var result2: BountyAction|null;
			var result3: BountyAction|null;
			var isError: boolean = false;
			result1 = await this.addBountyAction(responce.data.bountyId, '1', bountyAction1, this.bountyActionImage1)
			if(result1){
				this.bountyAction1 = result1
			} else {
				isError = true;
			}
			if(this.isActivBountyAction2 && !isError){
				result2 = await this.addBountyAction(responce.data.bountyId, '2', bountyAction2, this.bountyActionImage2)
				if(result2){
					this.bountyAction2 = result2
				} else {
					isError = true;
				}
			}
			if(this.isActivBountyAction3 && !isError){
				result3 = await this.addBountyAction(responce.data.bountyId, '3', bountyAction3, this.bountyActionImage3)
				if(result3){
					this.bountyAction3 = result3
				} else {
					isError = true;					
				}
			}
			// 正常終了、プロジェクト一覧画面へ遷移させる
			if(!isError) {
				await this.$router.push('/account/my/bounties');
			}
		})
		.catch(error => {
			if(error.response.status === 400){
				//ボタン上部にエラーを出力する
				if(error.response.data){
					for(let prop in error.response.data){
						this.errorList = this.errorList.concat(error.response.data[prop]);
					}
				}
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
	// バウンティアクション登録（返却値：正常->true 、異常 -> false) 
	async addBountyAction (bountyId, bountyActionNo, bountyAction,  bountyActionImage) {
		
		// アクセストークンの取得
    var accessToken = await this.$msalWishHub.silentLogin();
		await this.$store.dispatch('addAccessToken', accessToken);
		
		var result: BountyAction|null = null;
		const data = new FormData();
		if(bountyId) {
       data.append('BountyId', bountyId);
    };
    if(bountyAction.bountyActionId) {
      data.append('BountyActionId', String(bountyAction.bountyActionId));
    };
    if(bountyActionNo) {
      data.append('BountyActionNo', bountyActionNo);
    };
    if(bountyAction.bountyActionType) {
      data.append('BountyActionType', bountyAction.bountyActionType);
    };
    if(bountyAction.bountyActionName) {    
      data.append('BountyActionName', bountyAction.bountyActionName);
    };
    if(bountyAction.description) {    
      data.append('Description', bountyAction.description);
    };
    if(bountyActionImage) {    
      data.append('BountyActionImage', bountyActionImage);
    };
		await this.$axios.post(CommonConst.API_URL.BOUNTIES_ACTIONS.replace('{bounty_id}', String(bountyId)), data)
		.then(response =>{
			result = response.data;
		})
		.catch(error => {
			if(error.response.status === 400){
				//ボタン上部にエラーを出力する
				if(error.response.data){
					for(let prop in error.response.data){
						console.log(error.response.data[prop]);
						this.errorList = this.errorList.concat(error.response.data[prop]);
					}
				}
			} else if (error.response.status === 401) {
				// 認証エラー
				this.openModalDialog(CommonConst.MESSAGE.ERR_401);
			} else {
        // その他
        this.openModalDialog(CommonConst.MESSAGE.ERR_ELSE);
			}
		});
		return result;
	}
	openModalHelp(helpTitle, helpMessage){
		this.helpTitle = helpTitle;
		this.helpMessage = helpMessage;
		this.showModalHelp = true;
	}
	closeModalHelp(){
		this.showModalHelp = false;
	}
	openModalDialog(dialogMessage){
    if(! dialogMessage) return;
		this.dialogMessage = dialogMessage;
		this.showModalDialog = true;
	}
	closeModalDialog(){
		this.showModalDialog = false;
	}
	openModalDialogFreeFormat(dialogFreeFormat){
		this.dialogFreeFormat = dialogFreeFormat;
		this.showModalDialogFreeFormat = true;
	}
	closeModalDialogFreeFormatYes(){
		this.showModalDialogFreeFormat = false;
	}
	changeIsActivBountyAction3(){
		this.isActivBountyAction3 = !this.isActivBountyAction3;
	}
}
</script>

<style>
.validate{
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 35px;
}

.has-error{
  border-color: #ff0000 !important;
}
.has-error-font{
  color: #ff0000;
}
.text-center{
  text-align: center;
}
</style>


