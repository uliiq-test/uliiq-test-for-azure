<template>
    <div>
        <div v-if="$store.state.myProfile.accountId">
            <a id="modal-open2" class="button-link">
                <div v-if="$store.state.myProfile.profileImageUrl" class="menu" @click="modalOpen()" v-bind:style="{ 'background-image': 'url(' + $store.state.myProfile.profileImageUrl + ')'}"></div>
                <div v-else class="menu" @click="modalOpen()" v-bind:style="{ 'background-image': 'url(/img/icon_blank.svg)'}"></div>
            </a>
            <br/><br/><br/><br/>
            <ModalMenu @closeMenu="closeMenu()" 
                v-if="isOpen==true"
            />
        </div>
        <div v-else>
            <p class="login"><nuxt-link to="/account/signup">新規登録・ログイン</nuxt-link></p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import ModalMenu from "~/components/ModalMenu.vue"
@Component({
    components:{
        ModalMenu
    }
})
export default class Navigation extends Vue {
    isOpen: boolean = false;

    modalOpen(){
        this.isOpen = ! this.isOpen;
    }
    closeMenu(){
        this.isOpen = false;
    }
}
</script>