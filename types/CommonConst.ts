// APIURL
export namespace CommonConst.API_URL{
    export const BOUNTIES:string                = '/api/v1/bounties';
    export const BOUNTIES_JOIN:string           = '/api/v1/bounties/{bounty_id}/join';
	export const BOUNTIES_ACTIONS:string        = '/api/v1/bounties/{bounty_id}/actions';
    export const BOUNTIES_ACTIONS_JOIN:string   = '/api/v1/bounties/{bounty_id}/actions/{bounty_action_no}/join';
	export const BOUNTIES_COMMENTS:string       = '/api/v1/bounties/{bounty_id}/comments';;
	export const BOUNTIES_COMPLETE:string       = '/api/v1/bounties/{bounty_id}/complete';
	export const BOUNTIES_COMMENTS_LIKE:string  = '/api/v1/bounties/{bounty_id}/comments/{bounty_comment_id}/like';
	export const BOUNTIES_COMMENTS_REMOVE:string= '/api/v1/bounties/{bounty_id}/comments/{bounty_comment_id}/remove';
    export const BOUNTIES_TYPE:string           = '/api/v1/bounties/type';
    export const BOUNTIES_ACTIONTYPE:string     = '/api/v1/bounties/type/{bounty_type}/actiontype';
    export const ACCOUNT_BOUNTIES:string        = '/api/v1/accounts/{account_name}/bounties';
    export const ACCOUNT_REWARD:string          = '/api/v1/accounts/{account_name}/rewards';
    export const ACCOUNT_PROFILE:string         = '/api/v1/accounts/{account_name}/profile';
    export const ACCOUNT_FAVORITES:string       = '/api/v1/accounts/{account_name}/favorites';
    export const ACCOUNT_FOLLOWERS:string       = '/api/v1/accounts/{account_name}/followers';
    export const ACCOUNT_ACTIVITIES:string      = '/api/v1/accounts/{account_name}/activities';
	export const ACCOUNT_ACTIVITIES_LIKE:string = '/api/v1/accounts/{account_name}/activities/{account_action_id}/like';
    export const MY_BOUNTIES_JOIN:string        = '/api/v1/me/bounties/join';
    export const MY_REWARD:string               = '/api/v1/me/rewards';
    export const MY_REWARD_OWN:string           = '/api/v1/me/rewards/own';
    export const MY_BOUNTIES:string             = '/api/v1/me/bounties';
    export const MY_FAVORITES:string            = '/api/v1/me/favorites';
    export const MY_FOLLOWERS:string            = '/api/v1/me/followers';
    export const MY_PROFILE:string              = '/api/v1/me/profile';
    export const MY_ACTIVITIES:string           = '/api/v1/me/activities';
    export const REWARD_EXCHANGE:string         = '/api/v1/rewards/{reward_id}/exchange';
    export const REWARD:string                  = '/api/v1/rewards';   // ～/{reward_id} リワードID指定で特定の抽出・更新が可能
	export const REWARD_TYPE:string             = '/api/v1/rewards/type';
	export const ADMIN_PERMISSION:string        = '/api/v1/admin/permission';
	export const ADMIN_GIVETOKEN:string         = '/api/v1/admin/givetoken';
}

export namespace CommonConst.PAGE{
	export const  AUTH_PAGES: string[] = ['/account/my'];
	export const  DIRECT_GARD_PAGE: string[] = ['/account/my/bounties/create',
	                                            '/account/my/rewards/create'];
}

// クエリパラメータ
export namespace CommonConst.API_PARAM{
    // ソート条件
    export const SORT_NEW:number              = 1;
    export const SORT_OLD:number              = 2;
    export const SORT_RANK:number             = 3;
    export const SORT_POPULARITY:number       = 4;
    // 取得指定
    export const OFFSET_DEFAULT:number        = 0;
    export const LIMIT_DEFAULT:number         = 20;
}

// ポイント
export namespace CommonConst.POINT{
    export const WIP:string                   = 'wip';
}

// メッセージ
export namespace CommonConst.MESSAGE{
	export const ERR_INPUT: string[]              = ['入力項目に不備があります。入力項目を確認してください'];
    export const ERR_401: string[]              = ['ログインしていないか、ログイン状態が無効になっています。再度ログインしてください。'];
    export const ERR_ELSE: string[]             = ['予期しないエラーが発生しました。'];
}

// テンプレート画像URL
export namespace CommonConst.TemplateImg{
	// TODO:プロフィール画像テンプレート
	// TODO:バウンティ画像テンプレート
	// TODO:リワードテンプレート
	// ダイアログテンプレート
	export const DIALOG_IMG_URL = '/img/dialog_icon.jpg';
}

// ヘルパーメッセージ
export namespace CommonConst.HELPER_MESSAGE{

	// マイページ
	export const M003_FREE_MESSAGE_01 = ''
											+ '<p><h3 class="black">WishHubへようこそ！</h3>'
											+ 'WishHubでは、アーティストを行動で支援することと、<br>'
											+ 'アーティストになって、みんなに支援してもらうことができます。<br><br>'
											+ 'アーティストになりたい方は、プロフィールで設定した「ユーザー名」と一緒に'
											+ 'アーティスト申請をお願いします。<br><br>'
											+ '<p class="caution">審査には最大2営業日かかります</p>'
											+ '<div class="submitButtonArea">'
											+ '<a href="/" id="" s><input class="rewardButton save" type="button" value="プロジェクトを探す"></a>'
											+ '<a href="https://www.contentsworks.co.jp/wishhub/#contact-us" id="" target="_blank"><input class="rewardButton save" type="button" value="アーティスト申請する"></a>'
											+ '</div>'

	// リワード作成画面
	export const M022_TITLE_01: string = 'リワードタイプ'
	export const M022_MESSAGE_01: string = ''
												+ '<p>プロジェクトのタイプは以下の3つから選択してください<br><br>'
												+ '会員証：会員認定書です<br>'
												+ '参加券：イベントの参加券などの場合、こちらをしてください<br>'
												+ '割引券：イベントなどの割引用途で使用する場合、こちらを選択してください<br>'
												+ '<br>'
												+ '<p class="caution">リワードタイプは公開後変更はできません。ご注意ください。</p>'
												+ '</p>'
	export const M022_TITLE_02: string = '交換期限'
	export const M022_MESSAGE_02: string = ''
												+ '<p>割引券などで使用期限や交換期限がある場合に設定してください。<br>'
												+ '使用期限がある場合には、交換期限はそれよりも前に終了するようにしてください。<br>'
												+ '特に設定されない場合、無期限として扱われますので、ご注意ください。<br>'
												+ '<br>'
												+ '<p class="caution">交換期限は公開後変更はできません。ご注意ください。</p>'
												+ '</p>'
	export const M022_TITLE_03: string = '限定個数'
	export const M022_MESSAGE_03: string = ''
												+ '<p>リワードの数に制限がある場合には、こちらで配布数を設定してください。<br>'
												+ '設定されない場合、無制限として幾つでも配布交換ができるものになりますので、ご注意ください。<br>'
												+ '<br>'
												+ '<p class="caution">限定個数は公開後変更はできません。ご注意ください。</p>'
												+ '</p>'
	export const M022_TITLE_04: string = '交換に必要なポイント（wip）'
	export const M022_MESSAGE_04: string = ''
												+ '<p>リワードを交換するのに必要なwipを設定してください。<br>'
												+ '<br>'
												+ '<p class="caution">交換に必要なポイントは公開後変更はできません。ご注意ください。</p>'
												+ '</p>'
	export const M022_TITLE_05: string = '交換のお礼メッセージ'
	export const M022_MESSAGE_05: string = ''
												+ '<p>リワードを交換してくれた人へのお礼メッセージを入力してください。<br>'
												+ 'お礼メッセージはファンの活動のモチベーションにも繋がりますので、定期的に変更するのもおすすめです。'
												+ '<br>'
												+ '</p>'
	export const M022_TITLE_06: string = 'チャットを利用する'
	export const M022_MESSAGE_06: string = ''
												+ '<p>リワードの使用場所など個別に連絡が必要な場合には、こちらのチェックを入れてください。<br>'
												+ 'リワードを交換した人と個人チャットが使用できるようになります。<br>'
												+ '個人情報などのやりとりが発生する場合、取り扱いには十分ご注意ください。'
												+ '<br>'
												+ '</p>'
	export const M022_TITLE_10: string = 'リワードステータス'
	export const M022_MESSAGE_10: string = ''
												+ '<p>リワードの公開、非公開を設定します。<br>'
												+ '公開：リワード一般に公開し、交換を開始します。<br>'
												+ '非公開：下書きの状態です。<br><br>'
												+ '<p class="caution">※ リワード交換者が1名でもいる場合、非公開に変更できませんのでご注意ください。</p>'
												+ '</p>'
	export const M022_FREE_MESSAGE_01: string = ''
												+ '<p><h3 class="black">リワード公開<h3>'
												+ 'リワードを公開にしました。<br>'
												+ '保存するをクリックした時点でリワードの交換が可能になります。<br>'
												+ 'まだリワードの交換を開始しない場合には、非公開へ変更してください。<br><br>'
												+ '<p class="caution">※ リワード交換者が1名でもいる場合、非公開に変更できませんのでご注意ください。</p>'
												+ '</p>'


	// プロジェクト作成画面
	export const M032_TITLE_01: string = 'プロジェクトタイプ';
	export const M032_MESSAGE_01: string = ''
												+ '<p>プロジェクトのタイプは以下の3つから選択してください<br><br>'
												+ '拡散プロジェクト：SNSで目標数まで拡散してもらう<br>'
												+ '投票プロジェクト：ファンに投票してもらう<br>'
												+ '応募プロジェクト：企画やアイディアをプロジェクトのコメント欄にコメントしてもらう<br>'
												+ '<br>'
												+ '投票プロジェクトの場合、投票箱はアクションで設定してください。'
												+ '</p>';
	export const M032_TITLE_02: string = '応募期限';
	export const M032_MESSAGE_02: string = ''
												+ '<p>本プロジェクトの募集期間を設定します。<br>'
												+ 'ライブの告知の場合、前日までといった風に設定をしてください。'
												+ '</p>';
	export const M032_TITLE_03: string = '募集人数';
	export const M032_MESSAGE_03: string = ''
												+ '<p>プロジェクトの参加可能人数を設定します。<br>'
												+ 'プロジェクト参加者はプロジェクトのコメントにも参加できます。<br>'
												+ 'また、プロジェクト参加人数が多い場合、成功した時に配布する報酬ポイントも多めに必要になります。<br>'
												+ 'プロジェクトの規模に合わせて設定してください。'
												+ '</p>';
	export const M032_TITLE_04: string = '報酬ポイント（wip）';
	export const M032_MESSAGE_04: string  = ''
												+ '<p>プロジェクトが達成した時に参加したファンに配布する<br>'
												+ 'ポイントを設定します。<br>'
												+ '報酬ポイントが少なすぎると応援を得難くなります。<br>'
												+ 'いくら設置していいかわからない場合には<br>'
												+ '100 wip程度を目安に設定してみましょう。<br>'
												+ '例えば、募集人数 20名 / 報酬ポイント 100wip で設定すると<br>'
												+ '公開する時に 2,000wip が必要になります。'
												+ '</p>';
	export const M032_TITLE_05: string = 'アクション設定';
	export const M032_MESSAGE_05: string = ''
												+ '<p>ファン支援してもらうアクションを設定します。<br>'
												+ '応募プロジェクト以外のプロジェクトの場合、アクションは複数作ることができます。<br>'
												+ 'アクション2を設定する場合には、「アクション2を設定する」にチェックを入れてください。'
												+ '</p>';
	export const M032_TITLE_06: string = 'アクションタイプ';
	export const M032_MESSAGE_06: string = ''
												+ '<p>ファン支援してもらうアクションを設定します。<br>内容はプロジェクトごとに設定できるものが決まっています。<br>'
												+ '【拡散プロジェクト】<br>'
												+ '下記の内容で作成ができます。<br>'
												+ '・いいね！で支援する<br>'
												+ '・リツイートで支援する<br>'
												+ '・ツイートで支援する<br>'
												+ '・シェアで支援する<br><br>'
												+ '【投票プロジェクト】<br>'
												+ '・投票内容ごとにプロジェクトを複数作ってください。<br><br>'
												+ '【応募プロジェクト】<br>'
												+ '・応募して支援する<br>'
												+ '</p>';
	export const M032_TITLE_07: string = '参加のお礼メッセージ';
	export const M032_MESSAGE_07: string = ''
												+ '<p>プロジェクトに参加したファンにお礼のメッセージを表示します。<br>'
												+ '表示されるメッセージを入力してください。'
												+ '</p>';
	export const M032_TITLE_08: string = 'ステータス';
	export const M032_MESSAGE_08: string = ''
												+ '<p>プロジェクトが終了したら、このプロジェクトのステータス下記から選択してください。<br><br>'
												+ '達成：プロジェクトが達成した場合はこちらを選択します。<br>'
												+ '未達成：プロジェクトで満足のいく成果が出なかった場合、こちらを選択します。<br><br>'
												+ '達成の場合は報酬ポイントを参加者へ配布します。<br>'
												+ '未達成の場合はポイントの配布はありません。	<br><br>'
												+ '一定期間、ステータスの更新がされなかった場合は、自動でプロジェクトは達成と見なされポイントが分配されますので、ご注意ください。'
												+ '</p>';
	export const M032_TITLE_09: string = '完了コメント';
	export const M032_MESSAGE_09: string = ''
												+ '<p>プロジェクトが完了したら、完了コメントでファンにプロジェクトの成果を報告しましょう。<br>'
												+ '参加したファンはこのプロジェクトの結果を心待ちにしています。'
												+ '</p>';
	export const M032_TITLE_10: string = 'プロジェクトステータス';
	export const M032_MESSAGE_10: string = ''
												+ 'プロジェクトの公開、非公開を設定します。<br>'
												+ '公開：プロジェクト一般に公開し、募集を開始します。<br>'
												+ '非公開：下書きの状態です。<br><br>'
												+ 'プロジェクトのプレビューを確認したい場合、<br>'
												+ '右上のアイコンからメニューを表示し、<br>'
												+ 'マイページ＞プロジェクト一覧からご確認いただけます。<br><br>'
												+ 'プロジェクトを公開すると、分配ポイントや期日など変更はできません。<br>'
												+ '公開する時にはご注意ください。<br><br>'
												+ '<p class="caution">※ プロジェクトの参加者が1名でもいる場合、非公開に変更できませんのでご注意ください。</p>'


	export const M032_FREE_MESSAGE_01: string = ''
												+ '<p><h3 class="black">プロジェクト公開<h3>'
												+ 'プロジェクトを公開にしました。<br>'
												+ '保存するをクリックした時点でプロジェクトが開始になります。<br>'
												+ 'まだプロジェクトを開始しない場合には、非公開へ変更してください。<br><br>'
												+ '<p class="caution">※ プロジェクトの参加者が1名でもいる場合、非公開に変更できませんのでご注意ください。</p>'
												+ '</p>'
	// バウンティ詳細
	export const C032_FREE_MESSAGE_01: string = ''
												+ '<p><h3 class="black">いいね！を送りますか？</h3>'
												+ 'いいね！をすると相手に{likeQuantity}wipをプレゼントします。'
												+ '</p>'
	export const C032_FREE_YES_BUTTON_NAME_01: string = '送る'
	export const C032_FREE_NO_BUTTON_NAME_01: string = '送らない'

	export const C032_FREE_MESSAGE_02: string = ''
												+ '<p><h3 class="black">いいね！を送りました</h3>'
												+ '<p><a class="modal-syncer  iineArea"><img class="iconToolTip" src="/img/heart_w.svg">{likeCount}</a> になりました。</p>'
												+ '続けていいね！を送りますか？<br>'
												+ 'いいね！をすると相手に{likeQuantity}wipプレゼントします。'
												+ '</p>'
	export const C032_FREE_YES_BUTTON_NAME_02: string = '送る'
	export const C032_FREE_NO_BUTTON_NAME_02: string = '送らない'

	export const C032_FREE_MESSAGE_03: string = ''
												+ '<p><h3 class="black">メッセージ削除</h3>'
												+ 'こちらのメッセージ削除します。よろしいでしょうか？'
												+ '</p>'
	export const C032_FREE_YES_BUTTON_NAME_03: string = '削除する'
	export const C032_FREE_NO_BUTTON_NAME_03: string = 'キャンセル'




}

//:TODO マジックナンバーはこちらに寄せる
