<template>
    <transition name="menu" appear>
        <div id="modal-content2" @click="$emit('closeMenu')">
            <div id="modal-overlay2"></div>
            <ul class="menuContainer">
                <!-- 管理者 -->
                <div v-show="$store.state.isAdmin==true">
                    <li class="adminLabel">管理者専用</li>
                    <li><nuxt-link class="indentRight" to="/admin/account">アカウント属性管理</nuxt-link></li>
                    <li class="underLine"><nuxt-link class="indentRight" to="/admin/token">Wishポイント管理</nuxt-link></li>
                </div>
                <li><nuxt-link to="/account/my">マイページ</nuxt-link></li>
                <!-- 一般ユーザー -->
                <div v-show="$store.state.isCreator==false">
                    <li><a href="https://www.contentsworks.co.jp/wishhub/#contact-us" target="_blank">アーティスト申請</a></li>
                </div>
                <!-- クリエイターユーザ -->
                <div v-show="$store.state.isCreator==true">
                    <li><nuxt-link to="/account/my/bounties">プロジェクト</nuxt-link></li>
                    <li><a @click="allowPush('/account/my/bounties/create')" class="indentRight">プロジェクト作成</a></li>
                    <li><nuxt-link to="/account/my/rewards">リワード</nuxt-link></li>
                    <li><a @click="allowPush('/account/my/rewards/create')" class="indentRight">リワード作成</a></li>
                </div>
                <li><a @click="logout()">ログアウト</a></li>
            </ul>
        </div> 
    </transition>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
@Component({
})
export default class ModalMenu extends Vue {
    @Prop() profileImageUrl: string
    @Prop() thanksMessage: string

    logout(){
        // ストアのクリア
        this.$store.dispatch('logout').then(() => {
            // msalログアウト
            this.$msalWishHub.logout();
            // TOPページへ遷移
            this.$router.push('/');
        });
    }
    // 遷移許可
	allowPush(url: string){
		this.$store.dispatch('transitionAllow').then(() => {
			this.$router.push(url);
		})
	}
}
</script>