<template>
    <transition name="modalThanks" appear>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div id="modal-content">
                <div id="modal-overlay"></div>
                <div class="dialogImg"></div>
                <div class="dialogMessage">
                    <div class="bountyList">
                        <img class="dialogMessageImg" src="~assets/img/message_thankyou.png">
                        <div class="topBaunty">
                            <div class="img1" v-bind:style="{ 'background-image': 'url(' + profileImageUrl + ')' }"></div>
                        </div>
                    </div>
                    <p v-html="$options.filters.newLine(thanksMessage)"  v-linkified/>
                </div>
                <div>
                    <button id="modal-close" class="rewardButton joinButton" @click="$emit('close')">閉じる</button>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import linkify from 'vue-linkify'

Vue.directive('linkified', linkify)

@Component({})
export default class ModalThanks extends Vue {
    @Prop() profileImageUrl: string
    @Prop() thanksMessage: string
    width: number;
    height: number;
}
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity .3s ease;
}
.modal-mask .modal-wrapper {
    position: fixed;
    margin-top:8%;
}
@media (max-width: 767px) {
    #modal-content{
        margin: 0 auto;
        position: relative;
    }
    .modal-mask .modal-wrapper{
        margin-left: 0;
    }
}
</style>